# Shoes Shop – Full‑Stack E‑Commerce Platform (Ayakkabı Mağazası – Full‑Stack E‑Ticaret Platformu)

## 📌 Projenin Amacı

Ayakkabı perakendecileri için geliştirilmiş, tip güvenliği (type‑safe) yüksek, modern bir e‑ticaret çözümü. Alışveriş yapanlar için **zengin bir müşteri deneyimi**, ürün yönetimi, sipariş takibi ve analitik veriler için ise gelişmiş bir **admin paneli** sunar.

## 🛠️ Temel Teknolojiler

* **Frontend**: React 19, TypeScript, Vite, Tailwind CSS 4, TanStack **Query**, **Router**, **Form**
* **Durum ve Veri Yönetimi**: Sunucu durumu (server‑state) için React‑Query, form doğrulamaları için Formik + Yup, HTTP istekleri için Axios
* **Arayüz İkonları**: Lucide‑React, bildirimler için React‑Toastify
* **Backend**: Node.js, Express, MongoDB (Mongoose), JWT & çerez (cookie) tabanlı yetkilendirme
* **DevOps**: ESLint, Prettier, Vite geliştirici sunucusu (`npm run dev`)

## 🏗️ Mimariye Genel Bakış

```
client/                ← Vite destekli React SPA (Tek Sayfa Uygulaması)
  ├─ pages/            ← TanStack Router rotaları
  ├─ components/       ← Yeniden kullanılabilir arayüz bileşenleri (Tailwind + Lucide)
  └─ api/              ← Axios etrafına kurulmuş tiplendirilmiş sarmalayıcılar (React‑Query hook'ları)

api/                  ← Express REST API
  ├─ routes/           ← CRUD uç noktaları (ürünler, siparişler, kullanıcılar)
  ├─ middleware/       ← Yetkilendirme, doğrulama, hata yönetimi orta katmanları
  └─ models/           ← Mongoose şemaları (User, Product, Order)

```

İstemci (client), önbelleğe alma (caching), önceden veri çekme (prefetching) ve iyimser güncellemeler (optimistic updates) için **React‑Query** kullanarak backend ile yalnızca **/api** katmanı üzerinden haberleşir.

## 🔐 Rol Tabanlı Kimlik Doğrulama ve Yetkilendirme

* Oturum kalıcılığı için **JWT + HttpOnly çerezleri**
* Belirteci (token) doğrulayan ve `req.user` nesnesine kullanıcının rolünü (`admin` | `customer`) atayan **orta katman (middleware)**
* TanStack Router'daki **rota koruyucuları (route guards)** ile admin sayfalarının yalnızca `admin` rolüne kısıtlanması
* API işleyicilerinde hassas **politika kontrolleri** (örneğin; yalnızca yöneticiler `/products` rotasına `POST/DELETE` istekleri atabilir)

## 🛠️ Admin Paneli

* Ürünler için **CRUD** işlemleri (ekleme, düzenleme, silme, görsel yükleme)
* **Sipariş Yönetimi**: Görüntüleme, durum güncelleme, iade işlemleri
* **Analiz Paneli**: Satış KPI'ları, stok durumu takibi (gelecekte eklenecek)
* Aynı arayüz kütüphaneleriyle oluşturulmuştur; mutasyonlarda (veri değişikliklerinde) iyimser arayüz (optimistic UI) ve önbellek geçersiz kılma (cache invalidation) için **React‑Query**'den yararlanır.

## 👥 Kullanıcı (İstemci) Özellikleri

* Sonsuz kaydırma (infinite scroll), filtreleme ve sıralama özelliklerine sahip **Ürün Kataloğu**
* Yerel depolamada (local storage) tutulan ve ödeme anında senkronize edilen **Alışveriş Sepeti**
* Formik + Yup doğrulaması ve sunucu taraflı sipariş oluşturma ile desteklenen **Ödeme Adımları (Checkout Flow)**
* **Duyarlı Tasarım (Responsive)**: Mobil öncelikli (mobile‑first) arayüz sunan Tailwind sınıfları
* Başarılı/başarısız işlemler için **Toast bildirimleri**

## 📦 Başlangıç


## Ekran Görüntüleri

![](./public/login-page.png)

## Gif

![](./public/register.gif)
