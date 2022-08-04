import { useQuery } from "@tanstack/react-query";
import { CATEGORIES, initApi, PRODUCTS } from "../../../api"

async function fetchProducts() {
  return await initApi(PRODUCTS, {});;
}

export function useProducts() {
  return useQuery(['products'], fetchProducts)
}

async function fetchCategories() {
  return await initApi(CATEGORIES, {});;
}

export function useCategories() {
  return useQuery(['categories'],  fetchCategories)
}