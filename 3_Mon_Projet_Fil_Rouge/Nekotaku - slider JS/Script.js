/*

function next(){
    const widthSlider = document.querySelector('.slider').offsetWidth;
    const sliderContent = document.querySelector('.slider_content');
    sliderContent.scrollLeft += widthSlider;
}

function previous(){
    const widthSlider = document.querySelector('.slider').offsetWidth;
    const sliderContent = document.querySelector('.slider_content');
    sliderContent.scrollLeft -= widthSlider;
}*/



function previous(){
    const widthSlider = document.querySelector('.slider').offsetWidth;
    const sliderContent = document.querySelector('.slider_content');
    const itemSlider = sliderContent.querySelectorAll('.slider_content_item');
    const scrollLeft = sliderContent.scrollLeft;

    sliderContent.scrollLeft -= widthSlider;

    if (scrollLeft == 0){
        sliderContent.scrollLeft = widthSlider * (itemSlider.length -1);
    }
}

function next(){
    const widthSlider = document.querySelector('.slider').offsetWidth;
    const sliderContent = document.querySelector('.slider_content');
    const itemSlider = sliderContent.querySelectorAll('.slider_content_item');
    const scrollLeft = sliderContent.scrollLeft;

    sliderContent.scrollLeft += widthSlider;

    if (scrollLeft == widthSlider * (itemSlider.length - 1)){
        sliderContent.scrollLeft = 0;
    }
}