import '../public/images/logo.png';
import '../public/images/laptop-money.png';
import '../public/images/clock.png';
import '../public/images/zero.png';
import '../public/images/milk.png'
import '../public/images/tasks.png';
import '../public/images/people.png'
import '../public/images/girl.png';
import '../public/images/grey-background.png';
import '../public/images/face.png';
import '../public/images/rus.png';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import '../style/info-cards.scss';
import '../style/zero.scss';
import '../style/buttons-info.scss';
import '../style/girl.scss';
import '../style/background.scss';
import '../style/testimonials.scss';
import '../style/ready.scss';
import '../style/footer-info.scss';
import '../app/firstStyle';
import lozad from 'lozad';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container',{
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    }
})

const observer = lozad();
observer.observe();

