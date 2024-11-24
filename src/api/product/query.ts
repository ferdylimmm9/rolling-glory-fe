import { Client, PaginationData, ResultType } from "@/utils/client";
import { ProductListParamsType, ProductType } from "./types";
import { AxiosResponse } from "axios";

export class Product {
  static readonly keys = {
    products: (params?: ProductListParamsType) => ["products", params],
    product: (id: string) => ["product", id],
  };
  static async getList(params?: ProductListParamsType) {
    const result = (await Client.get("/gifts", {
      params,
    })) as AxiosResponse<PaginationData<ProductType>, Error>;
    return result.data;
  }
  static async getDetail(id: string) {
    const result = (await Client.get(`/gifts/${id}`)) as AxiosResponse<
      ResultType<ProductType>,
      Error
    >;
    return result.data;
  }
}
