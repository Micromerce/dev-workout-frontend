import pic1 from '../assets/iStock-1144.jpg'
import pic2 from '../assets/iStock-1157.jpg'

export function imageRoller(){

    var i = 0;
    var images = [];
    var time = 8000;

    images[0] = pic1;
    images[1] = pic2;

    document.roller.src = images[i];

    if(i < images.length - 1){
        i++ ;
    } else {
        i = 0;
    };
    setTimeout('imageRoller()', time);
}

window.onload = function(){
    imageRoller(pic1, pic2);
}

