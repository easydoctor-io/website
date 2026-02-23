import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { Play, Pause, Loader2, Volume2, StopCircle } from 'lucide-react';

interface AudioPlayerProps {
  text: string;
  title?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ text, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const startTimeRef = useRef<number>(0);
  const pauseTimeRef = useRef<number>(0);

  // Clean text from HTML tags for reading
  const cleanText = text.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();

  useEffect(() => {
    return () => {
      stopAudio();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const initAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  };

  const fetchAudio = async () => {
    setIsLoading(true);
    try {
      const apiKey = process.env.API_KEY || '';
      if (!apiKey) {
        console.warn("API Key mancante per TTS");
        alert("Chiave API mancante. Configurazione richiesta.");
        setIsLoading(false);
        return;
      }

      if (!cleanText) {
          console.warn("Testo vuoto, impossibile generare audio.");
          setIsLoading(false);
          return;
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Limit text length to prevent timeouts
      const textToRead = cleanText.substring(0, 3000); 

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: textToRead }] }],
        config: {
          responseModalities: [Modality.AUDIO], // Fix: Use Enum inside array
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Fenrir' }, // Deep, professional voice
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      
      if (base64Audio) {
        initAudioContext();
        if (audioContextRef.current) {
            const buffer = await decodeAudioData(
                decode(base64Audio),
                audioContextRef.current,
                24000,
                1
            );
            setAudioBuffer(buffer);
            playBuffer(buffer);
        }
      } else {
          console.error("Nessun dato audio ricevuto nella risposta.");
      }
    } catch (error) {
      console.error("Errore generazione audio:", error);
      alert("Impossibile generare l'audio al momento. Riprova più tardi.");
    } finally {
      setIsLoading(false);
    }
  };

  const playBuffer = (buffer: AudioBuffer, offset = 0) => {
    if (!audioContextRef.current) return;

    // Disconnect previous source if any
    if (sourceNodeRef.current) {
        try {
            sourceNodeRef.current.stop();
            sourceNodeRef.current.disconnect();
        } catch (e) {
            // ignore
        }
    }

    const source = audioContextRef.current.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContextRef.current.destination);
    
    source.onended = () => {
        // Simple check to reset UI if it finished naturally
        if (audioContextRef.current && source === sourceNodeRef.current) {
            // Small tolerance for float comparison
             if(Math.abs(audioContextRef.current.currentTime - (startTimeRef.current + buffer.duration)) < 0.5) {
                setIsPlaying(false);
                pauseTimeRef.current = 0;
             }
        }
    };

    source.start(0, offset);
    sourceNodeRef.current = source;
    startTimeRef.current = audioContextRef.current.currentTime - offset;
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      // Pause logic
      if (sourceNodeRef.current && audioContextRef.current) {
        sourceNodeRef.current.stop();
        pauseTimeRef.current = audioContextRef.current.currentTime - startTimeRef.current;
        setIsPlaying(false);
      }
    } else {
      // Play logic
      if (audioBuffer) {
        initAudioContext();
        playBuffer(audioBuffer, pauseTimeRef.current);
      } else {
        fetchAudio();
      }
    }
  };

  const stopAudio = () => {
    if (sourceNodeRef.current) {
      try {
        sourceNodeRef.current.stop();
      } catch(e) {}
    }
    setIsPlaying(false);
    pauseTimeRef.current = 0;
  };

  // Helper functions for Gemini Audio decoding
  function decode(base64: string) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  async function decodeAudioData(
    data: Uint8Array,
    ctx: AudioContext,
    sampleRate: number,
    numChannels: number,
  ): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  }

  return (
    <div className="bg-eh-blue/50 border border-eh-petrol/20 rounded-xl p-4 mb-8 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <div className="bg-white p-3 rounded-full shadow-sm text-eh-petrol">
            <Volume2 className="h-6 w-6" />
        </div>
        <div>
            <h4 className="text-sm font-bold text-eh-petrol uppercase tracking-wide">Ascolta l'articolo</h4>
            <p className="text-xs text-gray-500 font-medium">Letto dall'Intelligenza Artificiale</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {isPlaying && (
            <button 
                onClick={stopAudio}
                className="p-3 rounded-full bg-white text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors"
                title="Ferma riproduzione"
            >
                <StopCircle className="h-5 w-5" />
            </button>
        )}
        
        <button
            onClick={handlePlayPause}
            disabled={isLoading}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all shadow-md ${
                isLoading ? 'bg-gray-400 cursor-wait' : 'bg-eh-petrol hover:bg-eh-green hover:text-eh-petrol'
            }`}
        >
            {isLoading ? (
                <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Generazione...
                </>
            ) : isPlaying ? (
                <>
                    <Pause className="h-5 w-5 fill-current" />
                    Pausa
                </>
            ) : (
                <>
                    <Play className="h-5 w-5 fill-current" />
                    {audioBuffer ? "Riprendi" : "Ascolta Ora"}
                </>
            )}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;