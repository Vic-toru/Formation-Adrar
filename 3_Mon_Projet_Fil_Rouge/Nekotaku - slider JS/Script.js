/*function next(){
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
    const total = sliderContent.scrollLeft;
    sliderContent.scrollLeft -= widthSlider;
    console.log(document.querySelector('.slider_content').scrollLeft);
    console.log(itemSlider.length)

    if (total == 0){
        sliderContent.scrollLeft = widthSlider * (itemSlider.length -1);
    }
}

function next(){
    const widthSlider = document.querySelector('.slider').offsetWidth;
    const sliderContent = document.querySelector('.slider_content');
    const itemSlider = sliderContent.querySelectorAll('.slider_content_item');
    const total = sliderContent.scrollLeft;
    sliderContent.scrollLeft += widthSlider;
    console.log(document.querySelector('.slider_content').scrollLeft);
    console.log(itemSlider.length);

    if (total == widthSlider * (itemSlider.length)){
        sliderContent.scrollLeft = 0;
    }

}