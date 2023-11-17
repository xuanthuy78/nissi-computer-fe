import { FC } from "react";

export type SearchTypes = {
  id: string;
  img: string;
  title: string;
  price: number;
};

export type ProductTypes = {
  id: string;
  productName: string;
  productImage: string;
  imageCollection: string[];
  productSummary: string;
  price: number;
  marketPrice: number;
  brand?: { name: string };
  gift?: string;
  guarantee?: string;
  slug: string;
};

export type CareTypes = {
  id: number;
  title: string;
  describe?: string;
  Icon: FC;
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

export type IconPropsType = {
  size?: number;
};
