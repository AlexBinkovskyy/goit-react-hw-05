import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getPaymentsById } from '../apiService/query';

export default function PaymentDetails() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    async function fetchPayment() {
      try {
        const response = await getPaymentsById(paymentId);
        setPayment(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPayment();
  }, [paymentId]);
  return (
    <div>
      <div>
        <h3>Payment details page</h3>
        {payment && (
          <div>
              <br />
            <p>Card owner : {payment.cardOwner}</p>
            <p>Card number : {payment.cardNumber}</p>
            <p>Card type : {payment.cardType}</p>
            <p>Type of transaction : {payment.description}</p>
            <p>{payment.isPaid ? 'Paid:' : 'Processing...'} {payment.amount }$</p>
            <Link to='/payments'>Back</Link>
          </div>
        )}
      </div>
      <div>
        <Link to='subpage-a'>Subpage A</Link>
        <br />
        <Link to='subpage-b'>Subpage B</Link>
      </div>
      <Outlet/>
    </div>
  );
}

// amount: 50;
// cardNumber: '9876 5432 1098 7654';
// cardOwner: 'Alice Smith';
// cardType: 'Mastercard';
// date: '2024-01-05';
// description: 'Payment for utilities';
// id: '2';
// isPaid: false;
