// https://documentation.onesignal.com/reference/create-notification#sms-content

const axios = require("axios")

const appId = process.env.ONESIGNAL_APP_ID
const apiKey = process.env.ONESIGNAL_API_KEY
const httpClient = axios.create({
  baseURL: "https://onesignal.com/api/v1/",
  timeout: 1000,
  headers: {
    Authorization: `BASIC ${apiKey}`,
    "Content-Type": "application/json",
  },
  params: { app_id: appId },
})

export default async (req, res) => {
  const phoneNumbers = req.body.phoneNumbers
  if (!phoneNumbers || !phoneNumbers.length) {
    res.status(500).send("No phone numbers")
  }

  try {
    const twilioNumber = process.env.TWILIO_PHONE_NUMBER
    const result = await httpClient.post("notifications", {
      include_phone_numbers: phoneNumbers,
      name: "SMS Test",
      sms_from: twilioNumber,
      contents: {
        en: "This is a test!!!",
      },
    })
    res.send(result.data)
  } catch (error) {
    console.error(error)
    res.status(500).send("Something isn't quite right...")
  }
}
