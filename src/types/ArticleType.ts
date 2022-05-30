import {CategoryType} from "./CategoryType";

export type ArticleType = {
  id: number,
  images: string[],
  name: string,
  category: CategoryType,
  isAvailable: boolean,
  priceByDay: number,
  rate: number,
  description: string,
}

export type ArticleDto = {
  name: string,
  description: string,
  priceByDay: number,
  category: number,
}

export type FilterType = {
  name: string;
}
