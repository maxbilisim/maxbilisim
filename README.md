# Max Bilişim - başlangıç projesi

Bu depo, Koyeb üzerinde yayınlanabilecek temel Node.js/Express web sitesi başlangıcıdır.

## Yerel çalıştırma
1. Node.js 20 veya üzerini kurun.
2. `npm install`
3. `npm start`
4. Tarayıcıda `http://localhost:8000` adresini açın.

## Koyeb
- Builder: Buildpack
- Run command: `npm start`
- Port: `8000`
- Health check path: `/health`

## Güvenlik
Gerçek Discord bot tokeni, OAuth secret, veritabanı parolası veya ödeme anahtarlarını GitHub'a yüklemeyin. Bunlar Koyeb'in Environment variables / Secrets alanına girilmelidir.

## Sonraki geliştirme aşamaları
Bu yalnızca yayın testi için başlangıç iskeletidir. Discord OAuth, veritabanı, müşteri hesapları, hizmet/sipariş/ödeme sistemleri, admin paneli ve Discord botu henüz eklenmemiştir.
