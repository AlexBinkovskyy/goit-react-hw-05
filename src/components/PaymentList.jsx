import { Link } from "react-router-dom";

export const PaymentList = ({ payments }) => {
  return (
    <ul> 
      {payments.map(payment => (
        <li key={payment.id}>
          <p>Owner: {payment.cardOwner}</p>
          <p>Amount: {payment.amount}</p>
          <p>Paid for: {payment.description}</p>
          <Link to={`/payments/${payment.id}`}>Details...</Link>
          <br />
          <br />
        </li>
      ))}
    </ul>
  );
};
