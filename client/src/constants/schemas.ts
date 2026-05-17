import * as yup from "yup";

//regex pattern - firstname
const nameRegex = /^[\p{L}\p{M}]+\.?(?:[ '\u2019.-][\p{L}\p{M}]+\.?)*$/u;
// 38-47 aralığında birbirinden , ler ile ayrılan metini kontrol eder
const sizeRegex = /^(?:3[8-9]|4[0-7])(?:,(?:3[8-9]|4[0-7]))*$/;

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

export const PRODUCT_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("isim alanı zorunludur")
    .min(2, "İsim en az iki karakrer olmalıdır.")
    .max(80, "isim en fazlaa 80 karakter olabilir."),

  price: yup
    .number()
    .required("fiyat alanı zorunludur.")
    .moreThan(0, "fiyat sıfırdan büyük olmalıdır."),

  discount: yup
    .number()
    .min(0, "indirim 0'dan küçük olamaz.")
    .max(100, "indirim 100'den büyük olamaz.")
    .default(0),
  color: yup
    .string()
    .trim()
    .required("renk alanı zorunludur.")
    .min(2, "renk en az 2 karakter olmalıdır."),

  size: yup
    .string()
    .trim()
    .required("beden alanı zorunludur.")
    .matches(sizeRegex, "sadece 38-47 aralığından değerle geçerlidir"),

  description: yup
    .string()
    .trim()
    .required("açıklama alanı zorunludur")
    .min(10, "açıklama en az 10 karakter olmalıdır.")
    .max(500, "açıklama en fazla 500 karakter olabilir."),

  isNew: yup.boolean().default(false),
  gender: yup
    .string()
    .required("cinsiyet alanı zorunludur.")
    .oneOf(["men", "women", "unisex"], "geçersiz cinsiyet seçimi"),
});
