import axios from 'axios';
export async function createPayment(datails: any) {
  const { data } = await axios.post('https://api.yookassa.ru/v3/payments', {
    amount: { value: details.amount, currency: 'RUB' },
    capture: true,
    description: details.description,
    metadata: {
      order_id: details.orderId,
    },
    confirmation: {
      type: 'redirect',
      return_url: 'http://localhost:3000/?paid',
    },
  });
}
