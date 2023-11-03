export type SearchTypes = {
  id: string;
  img: string;
  title: string;
  price: number;
};

export type ProductTypes = {
  id: string;
  productName: string;
  price: number;
  marketPrice: number;
  productSummary: string;
  productImage: string;
  specialOffer: { title: string };
  productType: { isNew: number; isHot: number; isSaleOff: number };
  brand?: { image: string };
};

export type CareTypes = {
  id: number;
  title: string;
  describe: string;
  icon: any;
};

export type CategoryTypes = {
  id: string;
  name: string;
};

export type CategoriesType = {
  id: string;
  name: string;
  categoryItems: CategoryTypes[];
};
