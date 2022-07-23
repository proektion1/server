'use strict';

console.log('Запрос данных...');

const req = new Promise(function(resolve, reject) { // создаём обещаение в переменной req
    // обещание может авершиться положит или отрицательно (мы пока не значем)
    //resolve, reject - аргументы, вместо которых будут поставляться функции
    //Если всё ок (н: сервер всё ответил), то мы вызываем resolve
    //Если что-то пошло не так - вызываем reject

    // имитация асинхронного кода
    setTimeout(() => {
        console.log('Подготовка данных...');
        const product = {
            name: 'TV',
            price: 2000,
        };
        // функция при успешной работе скрипта
        resolve(product); //это return - возвращаем данные, чтобы дальше с ними работать
        
    }, 2000);
});

//для обработки положительного ответа (resolve) есть метод THEN
    req.then((product) => { //это то, что мы return из предыдущего
 //Следующий промис       
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered';
            resolve(product);
           // reject(); // ДЛЯ ОШИБОК (смотрим .catch)
        }, 2000);
    }).then(data => {
        data.modify = true;
        return data;  
    }).then(data => {
        console.log(data);
    });
}).catch(() => { // При reject
    console.error('произошла ошибка');
   
}).finally(() => {
    console.log('Finaly'); // Можно в самом конце очищать формы и т.п. Необязательное!
});

/* setTimeout(() => {
    console.log('Подготовка данных...');
    const product = {
        name: 'TV',
        price: 2000,
    };
    setTimeout(() => {
        product.status = 'ordered';
        console.log(product);
    }, 2000);
 
}, 2000); */
