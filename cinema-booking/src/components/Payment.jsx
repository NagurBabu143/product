import React from "react";

const Payment = ({ setBookingConfirmed, setStep }) => {
  const handlePayment = () => {
    setBookingConfirmed(true);
    setStep(7);
  };

  return (
    <div className="payment">
      <h2>Payment</h2>
      <p>Total Amount: Rs.50</p>
      <button onClick={handlePayment}>Confirm Payment</button>
    </div>
  );
};

export default Payment;
