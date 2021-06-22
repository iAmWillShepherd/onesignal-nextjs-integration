import { useEffect } from "react";

const useOneSignal = () =>
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];

    const { push, init, isPushNotificationsEnabled, sendTag, setSMSNumber } =
      OneSignal;

    push(() => {
      init({
        appId: "b40b7cc7-13dc-4662-8b48-efa668f9b72a",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
        // https://documentation.onesignal.com/docs/email-phone-number-web-prompt#custom-code-setup
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

      // https://documentation.onesignal.com/docs/web-push-sdk#ispushnotificationsenabled
      isPushNotificationsEnabled(async (isEnabled) => {
        if (!isEnabled) {
          console.log("Push notifications not enabled, sending tag...");

          // https://documentation.onesignal.com/docs/sms-quickstart#setsmsnumber

          // https://documentation.onesignal.com/docs/web-push-sdk#sendtag
          const result = await sendTag("subscribed_to_push", "false");
        }
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []); // <-- run this effect once on mount

export default useOneSignal;
