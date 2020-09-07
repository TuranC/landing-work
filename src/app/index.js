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
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/info-cards.scss';
import '../style/zero.scss';
import '../style/buttons-info.scss';
import '../style/girl.scss';
import '../style/background.scss';
import '../style/testimonials.scss';
import '../style/ready.scss';
import '../style/footer-info.scss';
import '../app/firstStyle';
import {testimonials} from "./texts";

let pos = 0;
let allP = document.querySelectorAll('#inner > div > p');
let allSpan = document.querySelectorAll('#position > span');

(function init() {
    allP[0].innerHTML = testimonials[0].text;
    allP[1].innerHTML = testimonials[0].name;
    allP[2].innerHTML = testimonials[0].job;
})();

inner.addEventListener('click', function (event) {
    if (event.target.id === 'prev') {
        if (pos > 0) {
            pos--;
            changePosition(pos);
        }
    } else if (event.target.id === 'next') {
        if (pos < 4) {
            pos++;
            changePosition(pos)
        }
    }
});

function changePosition(pos) {
    allP[0].innerHTML = testimonials[pos].text;
    allP[1].innerHTML = testimonials[pos].name;
    allP[2].innerHTML = testimonials[pos].job;

    changePosSpan(pos);
}

function changePosSpan(pos) {
    for(let span of allSpan) {
        span.classList.remove('circle-active');
    }
    allSpan[pos].classList.add('circle-active');
}

