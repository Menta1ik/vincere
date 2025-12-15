# Техническая архитектура сайта платформы

## Цветовая палитра
- Основной цвет: `#FF007F` (ярко-розовый)
- Цвет текста: `#FFE7F3` (светло-розовый)
- Второстепенный цвет: `#F974CA` (нежно-розовый)
- Градиент фона: от `#FF007F` к `#F974CA` с переходами через темные оттенки

## Стек технологий
- **Frontend**: React 18 + TypeScript
- **Build tool**: Vite
- **Styling**: Tailwind CSS
- **Анимации**: Framer Motion
- **Иконки**: Lucide React
- **Роутинг**: React Router DOM

## Структура проекта
```
vincere-platform/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── GradientBackground.tsx
│   │   │   └── AnimatedSection.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── ContactSection.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── FeaturesPage.tsx
│   │   └── ContactPage.tsx
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   └── useIntersectionObserver.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   └── types.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── vercel.json
```

## Компоненты

### GradientBackground
Анимированный градиентный фон с использованием указанных цветов:
- Начальный цвет: `#FF007F`
- Конечный цвет: `#F974CA`
- Дополнительные переходы через темные оттенки для создания глубины

### HeroSection
- Заголовок с анимацией текста
- Подзаголовок с описанием платформы
- CTA кнопки
- Анимированный градиентный фон

### FeaturesSection
- Карточки с возможностями платформы
- Анимация при скролле
- Иконки из Lucide React

### Header/Navigation
- Логотип платформы
- Навигация по страницам
- Адаптивное меню для мобильных

## Типы данных
```typescript
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface NavigationItem {
  label: string;
  href: string;
}
```

## Стилизация
- Использование Tailwind CSS с кастомной конфигурацией
- CSS Grid и Flexbox для layout
- CSS анимации для интерактивных элементов
- Responsive design (mobile-first подход)

## SEO и производительность
- Мета-теги для каждой страницы
- Оптимизация изображений
- Code splitting
- Lazy loading для компонентов
- Sitemap.xml

## Деплой
- Настройка для GitHub Pages или Vercel
- Автоматический деплой при push в main ветку
- Оптимизация для production

## Анимации
- Плавные переходы между страницами
- Анимация при скролле (parallax effect)
- Hover эффекты для интерактивных элементов
- Анимированный градиентный фон с движением