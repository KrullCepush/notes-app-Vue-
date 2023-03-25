


# небольшое приложение для лучшего понимания работы Vue2

Приложение еще довольно сырое и многие вещи требуют переосмысления.

Также заложен фундамент для таких вещей как:

* Смена темы (расширять можно до бесконечности).
* Возможность изменять конструктор Каталога и переиспользовать его в других местах.
* Добавлен роутер для добавления нового контента в будущем.
* Заложенная структура для последующего масштабирования приложения.
* Использова Composition store для его дальнейшего масштабирования.
* Также заложен список настроек, но оп пока не готов.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## Структура

Подробности в [документации](https://feature-sliced.design/ru/docs/reference/units)

```
└── src/
    ├── app/                    # Инициализирующая логика приложения
    ├── processes/              # (Опц.) Процессы приложения, протекающие над страницами
    ├── pages/                  # Страницы приложения
    ├── widgets/                # Самостоятельные и полноценные блоки для страниц
    ├── features/               # (Опц.) Обрабатываемые пользовательские сценарии
    ├── entities/               # (Опц.) Бизнес-сущности, которыми оперирует предметная область
    └── shared/                 # Переиспользуемые модули, без привязки к бизнес-логике
```
