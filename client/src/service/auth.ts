//service nesnesi içerisin:

import { useNavigate } from "react-router-dom";
import {
  type LoginFormValues,
  type RegisterFormValues,
  type Response,
  type User,
} from "../types";
import api from "./api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";

//endpointler - gönderilen veri tipleri - gelen veri tipleri tanımlanacak
export const authService = {
  register: (data: RegisterFormValues) =>
    api.post<Response<User>>("/auth/register", data),
  login: (data: LoginFormValues) =>
    api.post<Response<User>>("/auth/login", data),
  refresh: () => api.post<Response<string>>("/auth/refresh"),
  logout: () => api.post<Response<undefined>>("/auth/logout"),
  me: () => api.get<Response<User>>("/auth/me"),
};

//kayıt olma anında kullanıcağımız mutasyon
export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: RegisterFormValues) => authService.register(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Hesabı oluşturuldu");
    },
    onError: (err: AxiosError<Response<string>>) => {
      toast.error(err.response?.data?.message || "Bir sorun oluştu.");
    },
  });
};
//giriş yapma  kullanıcağımız mutasyon
export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginFormValues) => authService.login(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Oturumunuz açıldı");
    },
    onError: (err: AxiosError<Response<string>>) => {
      toast.error(err.response?.data?.message || "Bir sorun oluştu.");
    },
  });
};

//çıkış yapma  kullanıcağımız mutasyon
export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      navigate("/login");
      toast.success("Oturumunuz kapandı.");
    },
    onError: (err: AxiosError<Response<string>>) => {
      toast.error(err.response?.data?.message || "Bir sorun oluştu.");
    },
  });
};

//KULLANICI verisini almak için hook

export const useProfile = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => authService.me(),
    select: (res) => res.data.data,
    retry: false,
  });

  return { isLoading, error, user: data };
};
