import React from 'react';
import './Payment.scss';
import PaymentInputs from './PaymentInputs';


const Payment = () => {
  return (
    <form className="payment-container">
      <input type="text" name="firstName" placeholder="שם פרטי:" required />
      <input type="text" name="lastName" placeholder="שם משפחה:" required />
      <input type="number" name="phone" placeholder="טלפון:" required />
      <input type="mail" name="email" placeholder="מייל:" required />
      <PaymentInputs />
    </form>
  )
}

export default Payment;