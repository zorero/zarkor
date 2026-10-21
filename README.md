# זרקור Journey

![React: Frontend](https://img.shields.io/badge/React-Frontend-149ECA) ![TypeScript: App](https://img.shields.io/badge/TypeScript-App-3178C6) ![Cloudflare: Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020) ![Language: Hebrew RTL](https://img.shields.io/badge/Language-Hebrew%20RTL-2563EB)

האתר החדש של **זרקור: אימון אישי לגברים עם אביחי**.

האתר בנוי בעברית ובכיוון RTL וכולל דף בית, אודות, אימון לגברים, תהליך,
שאלות נפוצות, יצירת קשר ומאמרים. טופס יצירת הקשר פותח הודעת WhatsApp מוכנה
ואינו שומר מידע באתר.

## טכנולוגיה

- React ו-Next.js API באמצעות Vinext
- Vite ו-Cloudflare Workers
- TypeScript
- Tailwind CSS לצד עיצוב CSS ייעודי
- Lucide React לאייקונים

## הרצה מקומית

דרישות: Node.js בגרסה `22.13.0` ומעלה.

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

הקוד נבנה ונבדק בסביבת Sites. לפני חיבור הדומיין הפעיל יש להשלים בדיקות
תוכן, טופס, מובייל, Analytics ו-DNS.

## מבנה עיקרי

- `app/`: עמודים, רכיבים, metadata, sitemap ו-robots
- `public/images/`: לוגו ונכסי המותג שהועברו מהאתר הקיים
- `.openai/hosting.json`: הגדרות הפרסום של Sites

## פרטי קשר באתר

- טלפון: `052-8260661`
- דוא"ל: `zorero@gmail.com`
- אזור פעילות: אשדוד או זום

© זרקור. כל הזכויות שמורות.
