### Задание

Напишите на хуках приложение, которое ищет персонажа из вселенной
Star wars. Оно должна работать так:
- пользовать вводит в форму поиска имя персонажа, нажимает на кнопку
"Search" и видит под формой список персонажей (Поля `name` и `gender` из ответа);
- при нажатии на персонажа отображается подробная информация о персонажа во всплывающем окне(
поля `name`, `gender`, `birth_year`, `hair_color` и `skin_color`)

Для поиска используйте API `https://swapi.py4e.com/api/people/?search=people_name`