import { useQuery } from "@tanstack/react-query";
import type { Response, Product } from "../types";
import api from "./api";

const productService = {
  getAll: () => api.get<Response<Product[]>>("/shoes"),
  getOne: (id: string) => api.get<Response<Product>>(`/shoes/${id}`),
};

export const useGetAllProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getAll(),
    select: (res) => res.data.data,
  });

export const useGetOneProducts = (id: string) =>
  useQuery({
    queryKey: ["product"],
    queryFn: () => productService.getOne(id),
    select: (res) => res.data.data,
    enabled: !!id,
  });
