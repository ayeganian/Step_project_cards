# Step-project-cards

#### Командная работа
На данном проекте работали 4 человека: Бутрименко Анна, Васьковская Людмила, Еганян Алина и Плющ Максим. Задачи были распределены между собой следующим образом: 
- Еганян Алина. Дизайн страницы, стили, Bootstrap-элементы, авторизация, local storage, AJAX-часть (axios defaults, axios GET, POST, PUT и DELETE запросы), drag&drop.
- Васьковская Людмила. Фильтры визитов, отображение карточек через запросы, AJAX-часть (axios defaults, axios GET, POST, PUT и DELETE запросы), авторизация,  оптимизация кода.
- Бутрименко Анна и Плющ Максим. Создание классов модальных окон, визитов, форм, drag&drop.

## Задание

Создать страницу, на которой Секретарша сможет создавать карточки запланированных визитов к врачам.

На странице должны присутствовать:

1. Header страницы. В левом верхнем углу - логотип.  В правом углу - Кнопка Вход. После успешной авторизации она должна менятся на Кнопку Создать.
2. Под Header - форма для фильтрации визитов. В этой форме должны быть 3 поля: поиск по заголовку/содержимому визита, по статусу (Open/Done) (визит прошел или еще нет), срочность визита (High, Normal, Low).
3. Под формой фильтров - список созданных визитов. 


#### Технические требования

1) При первом посещении пользователем страницы в доске должна быть надпись `No items have been added`. Эта же надпись должна быть, если у пользователя нету ни одной добавленной карточки (например он их все удалил).
2) По клику на кнопку **Вход** появляется модальное окно, в котором пользователь вводит свой email и пароль. Если он верный - он получает JSON-массив карточек.
3) По клику на кнопку **Создать** появляется модальное окно, в котором можно будет создавать карточки. 

##### Модальное окно "Создать визит"
   
В модальном окне присутствует: 
- Выпадающий список (select) с выбором врача. В зависимости от выбранного врача под этим выпадающим списком будут появлятся поля, которые нужно заполнить для визита к этому врачу.
- В выпадающем списке должно быть три опции - `Кардиолог`, `Стоматолог`, `Терапевт`.
- Если выбрана опция Кардиолог, появляются следующие поля для ввода информации: цель визита, краткое описание визита, выпадающее поле "Выбор кардиолога", выпадающее поле - срочность, обычное давление, индекс массы тела, перенесенные заболевания сердечно-сосудистой системы, возраст, ФИО. 
- Если выбрана опция Стоматолог: цель визита, краткое описание визита, выпадающее поле "Выбор стоматолога", выпадающее поле - срочность, дата последнего посещения, ФИО.
- Если выбрана опция Терапевт: цель визита, краткое описание визита, выпадающее поле "Выбор терапевта",  выпадающее поле - срочность, возраст, ФИО.
- Кнопка `Создать`. При клике на кнопку создается карточка в Доске на странице и модальное окно закрывается.
- Кнопка `Закрыть` - закрывает модальное окно без сохранения информации и создания карточки. По клику на область вне модального окна - модальное окно закрывается.
- Все поля ввода, независимо от выбранной опции, кроме поля для дополнительных комментариев - обязательны для ввода данных. Валидацию на корректность данных можно не делать. 

##### Карточка, описывающая визит

Карточка, которая создается по клику, появляется на доске задач. 


   
В ней есть 
- ФИО, которые были введены при создании карточки.
- Врач, к которому человек записан на прием.
- Кнопка `Показать больше`. По клику на нее карточка расширяется, и появляется остальная информация, которая была введена при создании визита.
- кнопка `Редактировать` - при нажатии на нее, появляется выпадающий список что можно сделать с карточкой:
    - `Завершить` - визит переходит в статус Завершен.
    - `Редактировать` - вместо текстового содержимого карточки появляются форма, где можно отредактировать введенные поля. Такая же, как в модальном окне при создании карточки.
    - `Удалить` - карточка удаляется.
- кнопка 

##### Фильтры визитов
При нажатии на Search с помощью POST-запроса должны выбираться только нужные карточки и выводится на экран (как фильтры в инернет-магазине).

##### Классы
В JavaScript коде должны быть такие классы:
- Класс Modal (всплывающее окно)
- Класс Форма
- отдельные классы (компоненты) для полей формы
- Класс Визит
- Дочерние классы ВизитСтоматолог, ВизитКардиолог, ВизитТерапевт

Методы и свойства каждого класса вам нужно продумать самим

#### AJAX-часть

Все манипуляции с карточками (создание, обновление, удаление) происходят с помощью AJAX-запросов к базе данных. Вам нужно зарегистрироваться по ссылке `http://cards.danit.com.ua/register`, введя свой логин и пароль, чтобы иметь возможность работать дальше. 

##### Токен, необходимый для работы с базой банных

Все GET, POST, PUT и DELETE запросы по адресу `http://cards.danit.com.ua/cards` требуют авторизации. Для этого вам нужно к каждому запросу добавлять в заголовке запроса имени Authorization ваш токен (который возвращается вам в теле запроса в случае успешной авторизации по адресу  `http://cards.danit.com.ua/login`) в виде

```
Authorization: "Bearer ${your_token}"
```

<strong>Важно!</strong> Если вы неправильно передали токен в заголовке, то получите ответ с кодом 401 и объектом:
```
{
    status: "Error",
    token: "You are not authorized"
}
```

Поэтому, увидев такую  ошибку, знайте - вы неправильно передали токен в заголовке.

##### POST-запросы:
1. При входе на страницу, чтобы успешно отправлять AJAX-запросы для работы с карточками, вам нужно получить токен. А для этого вам нужно авторизироваться - послать POST-запрос по адресу `http://cards.danit.com.ua/login`, и получить в теле ответа необходимый токен. 
Пример запроса:

```
{
    "email": "your.mail@gmail.com",
    "password": "12344344аа"
};

```
Пример ответа:
```
{
    status: "Success",
    token: "b42238453cb3"
}
```

<strong>Полученый токен вам необходимо будет использовать во всех остальных запросах, добавив его в заголовок запроса по имени Authorization в виде:</strong>
```
Authorization: "Bearer ${your_token}"
```

В случае неправильной передачи токена в любом AJAX-запросе вы получите ответ:
```
{
    status: "Error",
    message: "Login or password are incorrect",
    token: null
}
```

2. Для создания карточки после заполнения формы в модальном окне вам нужно отправить POST-запрос на адрес `http://cards.danit.com.ua/cards`. Все, что вы напишете в теле запроса, попадет в базу данных как содержимое карточки. 
Пример запроса:
```
{
    doctor: "cardiolog",
    title: "Цель визита",
    description: 'Краткое описание визита',
    status: "open",
    priority: "Приоритет",
    content: {
        bp: "24",
        age: 23,
        weight: 70
    }
}
```

При успешном добавлении карточки в базу, в качестве ответа вы получите переданный вами объект с добавлением `id` карточки в базе. 
Пример ответа:
```
{
    id: 16,
    doctor: "cardiolog",
    title: "Цель визита",
    description: 'Краткое описание визита',
    status: "open",
    priority: "Приоритет",
    content: {
        bp: "24",
        age: 23,
        weight: 70
    }
}
```
Не забудьте сохранить в объекте, описывающем эту карточку, полученный `id`.

###### DELETE: 
1. Удаление карточки происходит при нажатии на крестик в верхнем правом углу карточки и подтверждения удаления путем ввода пароля.
Для удаления карточки из базы данных вам нужно отправить DELETE-запрос на роут `http://cards.danit.com.ua/cards/${cardId}`, указав в качестве `${cardId}` уникальный номер карточки из базы данных, полученный вами после добавления карточки в базу.
Пример запроса:

```
DELETE запрос на адрес: http://cards.danit.com.ua/cards/1
```

Если удаление прошло успешно, вы получите такой ответ:
```
{
    status: "Success"
}
```

##### GET-запросы:
1. Получение всех созданных вами карточек. Для этого нужно отправить GET-запрос на роут `http://cards.danit.com.ua/cards` указав ваш токен в заголовке запроса (подробнее смотрите выше). В качестве ответа вы получите массив созданых вашей командой карточек в формате JSON, после чего на их основе вы создаете объекты нужного класса (VisitCardio, VisitGastro и т.д.) и, используя их метод render(), выводите их на экран. 

2. Если вы хотите получить данные об одной карточке, то отправьте GET-запрос на роут `http://cards.danit.com.ua/cards/${cardId}`, указав в качестве `${cardId}` уникальный номер карточки из базы данных.   

3. Фильтр карточек (поле Input для ввода текста поиска по заголовку или описанию визита, выпадающий список по статусу, выпадающий список по приоритету). Пример: http://joxi.ru/n2Y37Enibv0B8r.
Фильтр вам нужно делать на фронтенде - то есть при изменении `value` любого элемента формы (выбран пункт в выпадающем списке, было введено что-то в Input) вы отправляете GET-запрос на адрес `http://cards.danit.com.ua/cards`, и, получив весь массив карточек, фильтруете его на фронтенде.

##### PUT:
1. Для обновление карточки после ее редактирования отправьте PUT-запрос на адрес `http://cards.danit.com.ua/cards/${cardId}`, указав в качестве `${cardId}` уникальный номер карточки из базы данных, а в теле запроса - новое содержимое карточки.  
Пример запроса:
```
{
    doctor: "cardiolog",
    title: "НоваяцЦель визита",
    description: 'Краткое описание визита',
    status: "close",
    priority: "Приоритет",
    content: {
        bp: "24",
        age: 23,
        weight: 70
    }
}
```

При успешном измении содержимого карточки в базе данных, в качестве ответа вы получите переданный вами объект с добавлением `id` карточки в базе. 
Пример ответа:
```
{
    id: 18,
    doctor: "cardiolog",
    title: "НоваяцЦель визита",
    description: 'Краткое описание визита',
    status: "close",
    priority: "Приоритет",
    content: {
        bp: "24",
        age: 23,
        weight: 70
    }
}
```

#### Перемещение карточек

Пользователь может перемещать карточки по доске методом Drag&Drop. Такие манипуляции с карточкой не влияют на месторасположение остальных карточек.

При обновлении страницы или ее закрытии уже ранее добавленные заметки не должны пропадат.