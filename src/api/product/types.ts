export type ProductListParamsType = {
  page?: {
    number?: number;
    size?: number;
  };
};
export type ProductType = {
  id: string;
  type: string;
  attributes: {
    id: number;
    name: string;
    info: string;
    description: string;
    points: number;
    slug: string;
    stock: number;
    images: string[];
    isNew: 0 | 1;
    rating: number;
    numOfReviews: number;
    isWishlist: 0 | 1;
  };
};
