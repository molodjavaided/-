Области хранения данных:

- база данных на json-server
- BFF
- store редакс стор

Сущности приложения:

- Пользователь: БД ( список пользователей ), BFF ( сессия текущего пользователя ), store ( для отображения в браузере )
- Роль пользователя: БД ( список ролей ), BFF ( сессия пользователя с ролью ), store ( использование на клиенте )
- Статья: БД ( список статей ), store ( отобрадение в браузере )
- Комментарий: БД ( список комментрариев ), store ( отображение в браузере )

Таблицы БД:

- Пользователи - users: id / login / password / registed_at / role_id
- Роли - roles: id / name
- Статьи - posts: id / title / image_url / content / published_at
- Комментарии - comments: id / author_id / post_id / content

Схема состояния на BFF:

- Сессия текущего пользователя: login / password / role

Схема для redux store ( на клиенте ):

- user: id / login / roleId
- posts: массив post: id / title / imageUrl / publichedAt / commentsCount
- post: id / title / imageUrl / content / publichedAt / comments: массив comment: id / author / content / publishedAt
- users: массив user: id / login / registeredAt / role
