import { Client } from "@/utils/client";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export function useWishlistProduct(id: string, options?: UseMutationOptions) {
  return useMutation({
    ...options,
    mutationFn: async () => {
      const result = (await Client.post(`/gifts/${id}/wishlist`)).data;
      return result;
    },
  });
}
