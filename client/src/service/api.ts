import axios from "axios";
import { authService } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  withCredentials: true,
});
// axios interceptor (middleware)
//api'a atılan her istekte veya api'dan gelen her cevapta fonksyion çalıştırmaya yarar

api.interceptors.response.use(
  //apidan  olumlu cevap gelince çalışır
  (res) => res,
  //apidan olumsuz cevap gelince çalışır
  async (err) => {
    // hata aldığımız aapi isteğini değişkene aktar
    const originalRequest = err.config;

    //hata access tokenın süresi dolmasından kaynaklı bir hata ise
    if (
      err.response.status === 401 &&
      err.response?.data?.message === "Access token expire"
    ) {
      try {
        //access tokenı yenile
        await authService.refresh();

        //hata aldığımız api isteğini tekrar
        return api.request(originalRequest);
      } catch (error) {
        //refresh token geçersiz ise: çıkış yap
        await authService.logout();

        //login sayfasına yönlendir
        window.location.href = "/login";
      }
    }
  },
);

export default api;
