export const discount = (price: number, marketPrice: number): string => {
  const data: number = 100 - (price / marketPrice) * 100;
  return data.toFixed();
};

export const formatNumber = (item: number): string => {
  return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
