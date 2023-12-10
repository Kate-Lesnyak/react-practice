### Задание

1. Cоздайте новый React-проект с помощью "create-react-app".
2. Удалите из него лишние файлы.
3. Запустите его.
4. Создайте в папке "src" папку "components".
5. Создайте компонент "ProductList", который будет представлять собой такую разметку:
```
<div>
    <h4>Product list title</h4>
    <ul class="product-list">
        <li class="product-list-item">Lenovo X120S</li>
    </ul>
</div>
```
Компонент будет получать два пропа - `items` и `title`. Тестовые данные можно взять [здесь](productItems.json). Условия:
- если пропа `title` нет - тег h4 не нужно отрисовывать;
- Пропишите для компонента defaultProps и propTypes; 
- Стилизацию сделайте с помощью Styled Components.