window.addEventListener('DOMContentLoaded', () => {

    const oblastTab = document.querySelector('.tabheader__items');
    const allTabs = document.querySelectorAll('.tabheader__item');
    const tabsDescr = document.querySelectorAll('.tabcontent');

    //1. В начале убираем весь контент для табов, чтобы оно не налазили друг на друга
    function hideDescr () {
        tabsDescr.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
        allTabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });}

    //2 Показываем контент для 1-го таба
    function showDescr (i=0) {
        tabsDescr[i].classList.add('show');
        tabsDescr[i].classList.remove('hide');
        allTabs[i].classList.add('tabheader__item_active');}

    //3 Делаем табы
    oblastTab.addEventListener('click', (i) => {
        console.log(i);
        const target = i.target;
        console.log(target);
        if (target && target.classList.contains('tabheader__item')) {
            allTabs.forEach((tab, nomer) => {
                if (target == tab) {
                    hideDescr();
                    showDescr(nomer);
                }
            });
        }
    });



    hideDescr();
    showDescr();


    // TIMER
    //1. Определяем счётчик и получаем нужное время
    const deadline = '2022-06-30';
    function opredelyaemVremyaDoDedlaina () {
        const vsevremya = Date.parse(deadline) - Date.parse(new Date());
        const dni = Math.floor(vsevremya / (1000*60*60*24));
        const chasy = Math.floor((vsevremya / (1000*60*60)) % 24);
        const minuty = Math.floor((vsevremya / (1000*60)) % 60);
        const secundy = Math.floor((vsevremya / (1000)) % 60);
        return [dni, chasy, minuty, secundy, vsevremya];
    }

    function dobavlyaenNol (vremya) {
        if (vremya >= 0 && vremya < 10) {
            return `0${vremya}`;
        }
        return vremya;
    }

    function ustanovkaSelectorov () {
        const ustanovka = opredelyaemVremyaDoDedlaina(deadline);
        let timer = document.querySelector('.timer');
        timer.querySelector('#days').innerHTML = dobavlyaenNol(ustanovka[0]);
        timer.querySelector('#hours').innerHTML = dobavlyaenNol(ustanovka[1]);
        timer.querySelector('#minutes').innerHTML = dobavlyaenNol(ustanovka[2]);
        timer.querySelector('#seconds').innerHTML =dobavlyaenNol(ustanovka[3]);
        const ObnovlyaemInterval = setInterval(ustanovkaSelectorov, 1000);
        if (ustanovka[4] <= 0) {
            clearInterval(ObnovlyaemInterval);
        }
        //timer.querySelector('#days').innerHTML = (ustanovka[1]);
        //den.innerHTML = (ustanovka[1]);
        //hours.innerHTML = (ustanovka[2]);
        //minutes.innerHTML = (ustanovka[3]);
        //seconds.innerHTML = (ustanovka[4]);
    }


    ustanovkaSelectorov();



// Модальные окна

const knopkaOpenOkno = document.querySelectorAll('[data-modal]');
const modOkno = document.querySelector('.modal');
const zakryt = document.querySelector('.modal__close');

// 1. Открываем модальное окно на всех кнопках

function openn () {
    modOkno.classList.add('show');
    modOkno.classList.remove('hide');
    clearTimeout(showmyOpen);
}


knopkaOpenOkno.forEach(knopki => {
    knopki.addEventListener('click', openn);
});

//2. Закрытие мод окна
    function zzakritie () {
        modOkno.classList.add('hide');
        modOkno.classList.remove('show');
    }

    zakryt.addEventListener('click', zzakritie);

    modOkno.addEventListener('click', (e) => {
        if (e.target === modOkno) {
            zzakritie();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modOkno.classList.contains('show')) {
            zzakritie();
        }
    });

    

    // Задача с появление модальных окон при прокрутке
    const showmyOpen = setTimeout(openn, 8000);

    function scrollim () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openn();
            window.removeEventListener('scroll', scrollim);
        }
    }


    window.addEventListener('scroll', scrollim);
    








    //Делаем карточки меню через Class
    class Card {
        constructor (img, altimg, title, descr, price) {
            this.img = img;
            this.altimg = altimg;
            this.title = title;
            this.descr = descr;
            this.price = price;
           // this.selector = document.querySelector(parentSelector);
            this.x = document.querySelector('.menu .container');
        }
    
        render() {
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="menu__item">
                    <img src=${this.img} alt=${this.altimg}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                    </div></div>
            `;
            this.x.append(element);
        }
       
    }

    new Card( // 1 раз покажет и не сохранит. Где-то вызвать не получится
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    //'.menu .container'
  ).render(); 
  
  new Card( // 1 раз покажет и не сохранит. Где-то вызвать не получится
  "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    11,
    //'.menu .container'
  ).render(); 

  new Card( // 1 раз покажет и не сохранит. Где-то вызвать не получится
  "img/tabs/post.jpg",
  "post",
  'Меню "Постное"',
  'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
  12,
  //'.menu .container'
).render(); 


});

