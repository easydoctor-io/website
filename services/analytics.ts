/**
 * Analytics Service for GA4 Measurement Protocol
 */

export const trackEvent = async (eventName: string, params: object = {}) => {
  try {
    // Get Client ID from gtag if available, otherwise generate a random one
    let clientId = localStorage.getItem('ga_client_id');
    
    if (!clientId) {
      // Try to get from window.gtag if it exists
      // @ts-ignore
      if (window.gtag) {
        // @ts-ignore
        window.gtag('get', 'G-JGPZWLZKFC', 'client_id', (id: string) => {
          clientId = id;
          if (id) localStorage.setItem('ga_client_id', id);
        });
      }
      
      // Fallback if gtag not ready or failed
      if (!clientId) {
        clientId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('ga_client_id', clientId);
      }
    }

    await fetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clientId,
        eventName,
        params,
      }),
    });
  } catch (error) {
    console.error('Analytics error:', error);
  }
};
