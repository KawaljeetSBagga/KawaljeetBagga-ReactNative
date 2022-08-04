import { useQuery } from "@tanstack/react-query";
import { initApi, PRODUCTS } from "../../../api"

async function fetchProduct(productId: string) {
  return await initApi(PRODUCTS + `/${productId}`, {});;
}

export function useProduct(productId: string) {
  return useQuery(['product', productId],  () => fetchProduct(productId))
}