$(document).ready(function() {
    $('.incident__items').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                }
            }
        ]
    });
    
    $('#feedback__form').submit(function(){
        $.ajax({
            url: '../mail.php', // url-адрес, по которому будут отправлены данные
            type:  'POST', // метод отправки
            data: $(this).serialize() // сериализуем данные
        }).done(function(){  
            alert('Спасибо за информацию!!!'); // выводим на экран

            $('.feedback__input').val('');  //очищаем значения поля input
            $('.feedback__textarea').val(''); //очищаем значения поля textarea
        });
        return false; 
    });
});


const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', ()=>{
    const list = document.querySelector('.menu__list');
    list.classList.toggle('active');
    const menuLink = document.querySelectorAll('.menu__item-link');
    menuLink.forEach(item=>{
        item.addEventListener('click', ()=>{
            list.classList.remove('active');
        });
    });
});


window.addEventListener('load', ()=>{
    const preload = document.querySelector('.preloader');
    preload.classList.add('hide');
    setInterval(()=>{
        preload.remove();
    }, 600);
    
    const scrollEffect = document.querySelectorAll('.scroll__effect');
    function scrollAnimation(){
        const center =  window.innerHeight + window.scrollY;
        scrollEffect.forEach(item => {
            const elOffset = item.offsetTop + (item.offsetHeight / 2);
            if (center >= elOffset){
                item.classList.add('anim');
            } else{
                item.classList.remove('anim')
            }
        });
    
    }
    scrollAnimation()
    
    window.addEventListener('scroll', ()=>{
          scrollAnimation();
    });
});



const homeBtn = document.querySelector('.home__btn');
const feedbackForm = document.querySelector('.feedback');

function scrolling(el){
    window.scroll({
        left: 0,
        top: el.offsetTop + 100,
        behavior: 'smooth'
    })
}

homeBtn.addEventListener('click', ()=>{
    scrolling(feedbackForm);
});