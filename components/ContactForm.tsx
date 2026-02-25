import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border border-gray-100 overflow-hidden" id="contact-form">
      <div className="w-full flex justify-center">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSeAQo8qNrwWDdj6V50qND8FeTulL2NEaDEOYReP2zz2CvbiFg/viewform?embedded=true" 
          width="100%" 
          height="809" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          className="max-w-full"
        >
          Caricamento…
        </iframe>
      </div>
    </div>
  );
};

export default ContactForm;