import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Response, Product } from "../types";
import api from "./api";
import { toast } from "react-toastify";

const productService = {
  getAll: () => api.get<Response<Product[]>>("/shoes"),
  getOne: (id: string) => api.get<Response<Product>>(`/shoes/${id}`),
  delete: (id: string) => api.delete<Response<null>>(`/shoes/${id}`),
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

export const useDeleteProduct = () => {
  //queryClient kurulumu
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => productService.delete(id),
    onSuccess: () => {
      toast.success("Ürün kaldırıldı");
      //cache / arayüzün güncellenmesi için getAllProducts sorgunu tekrar çalıştı
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => toast.error("İşlem başarısız"),
  });
};

export const useCreateProduct = () => {};
