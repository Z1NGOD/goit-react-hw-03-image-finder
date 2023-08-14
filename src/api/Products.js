const BASE_URL = 'https://pixabay.com/api/';
const getProducts = async ({ query, page, per_page } = {}) => {
  const params = new URLSearchParams({
    q: query,
    page,
    key: `37758369-8fea96641c4bcd65223bf05ae`,
    image_type: `photo`,
    orientation: `horizontal`,
    per_page,
  });
  const response = await fetch(`${BASE_URL}?${params}`);
  if (!response.ok) {
    throw new Error(response.status);
  };

  return response.json();
};

export default getProducts;

