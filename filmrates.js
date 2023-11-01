let i = 0;
document.getElementById('submitBtn').addEventListener('click', function() { 
// Эта строка находит элемент на странице с идентификатором "submitBtn" (это кнопка "Submit") и добавляет обработчик события "click." 
// Когда кнопка будет нажата, функция внутри addEventListener будет выполнена.
    
    const nameValue = document.getElementById('nameInput').value;
    //  Здесь мы получаем значение, введенное в поле ввода с идентификатором "nameInput" (это поле для ввода имени) 
    //  и сохраняем его в переменной nameValue.
    const ratingValue = document.getElementById('ratingInput').value;
    const dateValue = document.getElementById('dateInput').value;
    
    const nameElement = document.createElement('div');
    nameElement.textContent = nameValue;
    // Создается новый элемент div с помощью document.createElement. Этот элемент будет использоваться для отображения имени, 
    // введенного пользователем.
    const ratingElement = document.createElement('div');
    ratingElement.textContent = ratingValue;

    i++
    const dateElement = document.createElement('div');
    dateElement.textContent = dateValue;
    const idElement = document.createElement('div');
    idElement.textContent = i;
   
    document.getElementById('nameColumn').appendChild(nameElement);
    //Добавляет элемент nameElement в столбец "Name"
    document.getElementById('ratingColumn').appendChild(ratingElement);
    document.getElementById('dateColumn').appendChild(dateElement);
    document.getElementById('idColumn').appendChild(idElement);
});