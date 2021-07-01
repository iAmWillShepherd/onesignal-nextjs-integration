import { useEffect } from "react"

const useOneSignal = () =>
  useEffect(() => {
    const onesignal = window.OneSignal
    if (!onesignal) {
      console.warn("OneSignal SDK not loaded.")
      return
    }

    const { push, init, isPushNotificationsEnabled, sendTag } = onesignal

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
      })

      // https://documentation.onesignal.com/docs/web-push-sdk#ispushnotificationsenabled
      isPushNotificationsEnabled(async (isEnabled) => {
        if (!isEnabled) {
          console.log("Tagging user as not subscribed to push notifications.")

          try {
            // https://documentation.onesignal.com/docs/web-push-sdk#sendtag
            await sendTag("subscribed_to_push", "false")
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sms-fallback`, {
              method: "POST",
              body: JSON.stringify({
                phoneNumbers: ["+18322836519"],
              }),
              headers: {
                "Content-Type": "application/json",
              },
            })
          } catch (error) {
            console.error(error)
          }
        } else {
          await sendTag("subscribed_to_push", "")
        }
      })
    })

    return () => {
      window.OneSignal = undefined
    }
  }, []) // <-- run this effect once on mount

export default useOneSignal
