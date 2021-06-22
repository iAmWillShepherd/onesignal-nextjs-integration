import { useEffect } from "react";

const useOneSignal = () =>
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];

    const { push, init, isPushNotificationsEnabled, sendTag } = OneSignal;

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
                  pageViews: 1,
                  timeDelay: 5,
                },
              },
            ],
          },
        },
      });

      isPushNotificationsEnabled(async isEnabled => {
        if (!isEnabled) {
          console.log("Push notifications not enabled, sending tag...");

          const result = await sendTag("subscribed_to_push", "false");
        }
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []); // <-- run this effect once on mount

export default useOneSignal;
