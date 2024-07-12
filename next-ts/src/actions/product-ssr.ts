import axios, { endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getProducts() {
  const res = await axios.get(endpoints.product.list);

  return res.data;
}

// ----------------------------------------------------------------------

export async function getProduct(id: string) {
  const URL = id ? `${endpoints.product.details}?productId=${id}` : '';

  const res = await axios.get(URL);

  return res.data;
}
