import axios from 'axios';

axios.defaults.baseURL = 'https://65c23f3af7e6ea59682af8d1.mockapi.io'

export const getPayments = async ({controller}) => {
const response = await axios.get('/payments', {signal: controller.signal})

return response.data;
}


export const getPaymentsById = async (paymentId) => {

const response = await axios.get(`/payments/${paymentId}`)
return response.data;
}