# Публикация A2Z Mobile Mechanics

Сейчас это демо: на всех страницах стоит `noindex, nofollow`, robots.txt закрывает сайт целиком.

Адрес демо: https://konkos-design.github.io/a2z-mobile-mechanics/
Репозиторий: konkos-design/a2z-mobile-mechanics (имя = имя папки).

## Загрузка на GitHub Pages
1. Создать публичный репозиторий `a2z-mobile-mechanics` в аккаунте konkos-design.
2. Загрузить всё содержимое этой папки (кроме `_promo`, она в .gitignore).
3. Settings → Pages → Source: Deploy from a branch → `main` / root → Save.
4. Через 1–2 минуты открыть адрес демо и проверить превью ссылки (og-image.jpg).

## Перед запуском купленного сайта
1. Заменить базовый URL в canonical, og:url, og:image, twitter:image и JSON-LD на домен клиента (в build.py — переменная BASE).
2. Убрать `noindex, nofollow` со всех страниц, кроме 404. Заменить robots.txt на разрешающий и добавить sitemap.
3. В 404.html заменить префикс `/a2z-mobile-mechanics/` на `/`.
4. Подтвердить у владельца: услуги, часы работы, email service@a2zmechanics.com.au (домен сейчас припаркован на GoDaddy — почта может не работать).

## Источники данных
- Google Maps / Google-отзывы (5.0, 85 отзывов): адрес, телефон, часы, отзывы (дословно, местами сокращены).
- Facebook facebook.com/AZmobilemech: логотип, фото, список услуг, email, слоган.
- Instagram @a2z_mobile_mechanic — это ДРУГОЙ бизнес (США), не использовался.
- Цен в открытых источниках нет, поэтому раздела с ценами нет.
- Форма записи не предусмотрена: основной призыв — звонок.
