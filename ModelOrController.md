1. **Что именно делает эта функция или метод?**
    - Если функция связана с обработкой данных или выполнением бизнес-логики, она, вероятно, должна быть частью модели или сервиса.
    - Если функция обрабатывает HTTP-запросы, управляет потоком выполнения приложения или связана с взаимодействием с клиентами, она, вероятно, должна быть частью контроллера.

2. **Требует ли эта функция доступа к базе данных или управления состоянием данных?**
    - Если да, это, вероятно, должен быть метод модели.
    - Если функция работает с данными, но не напрямую, это, вероятно, должен быть метод сервиса.

3. **Является ли эта функция частью общей бизнес-логики или службы?**
    - Если да, это, вероятно, должен быть метод сервиса.
    - Если функция решает конкретную задачу, которая не связана с общими задачами, она может быть методом модели.

4. **Какие параметры или зависимости требуются для выполнения этой функции?**
    - Если функция требует доступа к объектам запроса или ответа HTTP, она, вероятно, должна быть частью контроллера.
    - Если функция требует доступа к объектам базы данных или другим сервисам, она, вероятно, должна быть частью сервиса.

5. **Может ли эта функция быть переиспользована в других частях приложения?**
    - Если да, это, вероятно, должен быть метод сервиса.
    - Если функция предназначена только для выполнения специфической задачи в контексте модели или контроллера, она может быть методом модели или контроллера соответственно.


**Middlewares follow certain specific format. It goes like this…**

    function xyzMiddleware(req, res, next){ 
      // stuffs to do 
      // add stuffs to request, or change req paramaters, 
      // do whatever you want with those objects, 
      // but once the task is done, call `next()` 
    }
