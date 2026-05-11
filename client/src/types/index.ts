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
