import { useEffect } from "react";

const useOneSignal = () =>
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];

    const { push, init, isPushNotificationsEnabled } = OneSignal;

    push(() => {
      init({
        appId: "b40b7cc7-13dc-4662-8b48-efa668f9b72a",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
        promptOptions: {
          slidedown: {
            prompts: [
              {
                type: "sms",
                autoPrompt: true,
                text: {
                  actionMessage: "Would you like to receive text messages?",
                  acceptButton: "Sure",
                  cancelButton: "Cancel",
                },
                delay: {
                  timeDelay: 5,
                },
              },
            ],
          },
        },
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []); // <-- run this effect once on mount

export default useOneSignal;
