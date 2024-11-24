import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { Product } from "./query";
import { ProductListParamsType, ProductType } from "./types";
import { PaginationData } from "@/utils/client";

export function useGetProducts(
  params?: ProductListParamsType,
  options?: UseQueryOptions
) {
  return useQuery({
    ...options,
    queryKey: Product.keys.products(params),
    queryFn: async () => (await Product.getList(params)),
  }) as UseQueryResult<PaginationData<ProductType>, Error>;
}

export function useGetProduct(id: string, options?: UseQueryOptions) {
  return useQuery({
    ...options,
    queryKey: Product.keys.product(id),
    queryFn: async () => (await Product.getDetail(id)),
  }) as UseQueryResult<ProductType, Error>;
}
