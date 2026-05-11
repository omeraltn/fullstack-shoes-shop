import * as yup from "yup";

//regex pattern - firstname
const nameRegex = /^[A-Za-zÇĞİÖŞÜçğıöşü\s]+$/;

export const LOGIN_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz.")
    .trim()
    .required("E-posta alanı zorunludur."),
  password: yup.string().required("Şifre alanı zorunludur."),
});

export const REGISTER_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "isim 2 karakterden kısa olamaz.")
    .matches(nameRegex, "Geçersiz karakter mevcut.")
    .required("İsim alanı zorunludur."),
  lastName: yup
    .string()
    .min(2, "soyad 2 karakterden kısa olamaz.")
    .matches(nameRegex, "Geçersiz karakter mevcut.")
    .required("soyad alanı zorunludur."),
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz.")
    .required("e-posta alanı zorunludur."),

  password: yup
    .string()
    .required("Şifre alanı zorunludur")
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .matches(/[A-Z]/, "En az 1 büyük harf içermelidir")
    .matches(/[a-z]/, "En az 1 küçük harf içermelidir")
    .matches(/\d/, "En az 1 sayı içermelidir")
    .matches(/[^A-Za-z0-9]/, "En az 1 özel karakter içermelidir"),
  //oneOf([ ])dizi içerisinde verilen değerler girilmedikçe hata fırlatır
  // ref() formdaki bir inputun değerine erişmeye yarar
  passwordConfirm: yup
    .string()
    .required("Şifre tekrarını giriniz")
    .oneOf([yup.ref("password")], "Şifre tekrarını doğru girmediniz"),
  terms: yup
    .boolean()
    .oneOf([true], "Sözleşmeyi onaylamadan devam edemezsiniz."),
});
