import { useMutation } from "@tanstack/react-query";
import { initApi, PRODUCTS } from "../../../api"
import { AddProductType } from "../../home/types";

async function postProduct(productPayload: AddProductType) {
  return await initApi(PRODUCTS, productPayload, true);;
}

export function usePostProduct() {
  return useMutation(postProduct, {retry: 3})
}