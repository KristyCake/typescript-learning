type EmailNotification = { email: string, subject: string };
type SMSNotification = { phone: string, message: string };

function sendNotification(noti: EmailNotification | SMSNotification) {
  if ("email" in noti) {
    console.log(`sending Email to ${noti.email}: ${noti.subject}`)
  } else {
    console.log(`sending SMS to ${noti.phone}: ${noti.message}`)
  }
}

sendNotification({ email: "Cake@gmail.com", subject: "Welcome" })
sendNotification({ phone: "099-0655145", message: "คุณได้รับรางวัลใหญ่ เพียงกด Link" })