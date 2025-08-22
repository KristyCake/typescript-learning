type PaymentStatus = "paid" | "unpaid" | "pending"

function checkStatus(status: PaymentStatus) {
  if (status === "paid") {
    console.log("Payment completed!")
  } else if (status === "unpaid") {
    console.log("Payment not received!")
  } else {
    console.log("Waiting for payment!")
  }
}

checkStatus("paid")
checkStatus("unpaid")
checkStatus("pending")