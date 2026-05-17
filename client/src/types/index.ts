export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  terms: boolean;
}

//apı yanıt tipi

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
}

export interface Response<T> {
  message: string;
  data: T;
}

//Product
export interface Product {
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: "men" | "women" | "unisex";
  price: number;
  updatedAt: string;
  id: string;
}

export interface ProductValues {
  name: string;
  price: number;
  discount: number;
  color: string;
  size: string;
  description: string;
  isNew: boolean;
  gender: "men" | "women" | "unisex";
}
