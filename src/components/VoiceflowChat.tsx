import React, { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          voice: { url: string };
        }) => void;
      };
    };
  }
}

const VoiceflowChat: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      // Add custom styles for the Voiceflow widget
      const style = document.createElement('style');
      style.textContent = `
        .vfrc-widget--chat {
          height: 100vh !important;
          max-height: 100vh !important;
        }
        .vfrc-widget--chat .vfrc-chat {
          height: 100% !important;
        }
        .vfrc-widget--chat .vfrc-chat-container {
          height: 100% !important;
        }
      `;
      document.head.appendChild(style);

      window.voiceflow.chat.load({
        verify: { projectID: '679b7bcc4134f182a21ea963' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        }
      });
    };
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default VoiceflowChat;