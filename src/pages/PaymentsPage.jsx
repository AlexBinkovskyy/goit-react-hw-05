import { useEffect, useState } from 'react';
import { getPayments } from '../apiService/query';
import { PaymentList } from '../components/PaymentList';

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const payments = await getPayments({controller: controller})
        setPayments(payments);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>This is payments page</h1>
      {error && <p>Oooops ERROR</p>}
      {payments.length > 0 && <PaymentList payments={payments}/>}
    </div>
  );
}
