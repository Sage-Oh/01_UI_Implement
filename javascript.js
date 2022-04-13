

// Map Slide
var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentInx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.prev'),
    slideWidth = 960,
    nextBtn = document.querySelector('.next');


function moveSlide(num){
  slides.classList.add('animated');
  slides.style.left = -960 * num + 'px';
  currentInx = num;
  
  
  //클래스 네임 지우고 다시 추가하는 것 
  for(let i = 0 ; i <indicator.length; i++){
    indicator[i].classList.remove('active');
  }
  indicator[num].classList.add('active');
}

nextBtn.addEventListener('click', function(){
  if(currentInx < slideCount -1 ){
    moveSlide(currentInx+1);
    console.log(currentInx);
  }else{
    moveSlide(0); 
    // 끝까지 갔을 때 처음으로 후루룩 돌아가는 조건.
  }
});

prevBtn.addEventListener('click', function(){
  if(currentInx > 0){
    moveSlide(currentInx - 1);
  }else{
    moveSlide(slideCount -1); 
  }
});

// 동그란 거 클릭했을 때 넘어가는 것.
let indicator = document.querySelectorAll('.indicator i');

for(let x = 0 ; x<indicator.length ; x++){
  indicator[x].addEventListener('click',(event)=>{
    let pagerNum = event.target.getAttribute('data-inx');
    console.log(pagerNum);
    moveSlide(pagerNum);
  });
};


// navbar 올렸을 때 해당 li border 색 바뀌기
document.querySelector('.navbar__menu').addEventListener('hover',()=>{
  document.querySelector('.navbar__menu>li').classList('.active')
});



// gun : select categories
let gunBtn = document.getElementById("gun_btn");
gunBtn.addEventListener('click',()=>{
  let gunBox = document.getElementById("gun_select");
  console.log('gunBox:');
  console.log(gunBox);
  
  let selGun = document.getElementById("gun_select").options.selectedIndex;
  console.log('selGun');
  console.log(selGun);

  // let category = gunBox.options[selGun].value;
  // console.log('category');
  // console.log(category);

  if(selGun==0){
    for(let i = 0; i<5; i++){
      document.getElementById(gunBox.options[i].value).classList.remove('selected');
    };
    document.getElementById(gunBox.options[0].value).classList.add('selected');

  }else if(selGun==1){
    for(let i = 0; i<5; i++){
      document.getElementById(gunBox.options[i].value).classList.remove('selected');
    };
    document.getElementById(gunBox.options[1].value).classList.add('selected');

  }else if(selGun==2){
    for(let i = 0; i<5; i++){
      document.getElementById(gunBox.options[i].value).classList.remove('selected');
    };
    document.getElementById(gunBox.options[2].value).classList.add('selected');

  }else if(selGun==3){
    for(let i = 0; i<5; i++){
      document.getElementById(gunBox.options[i].value).classList.remove('selected');
    };
    document.getElementById(gunBox.options[3].value).classList.add('selected');

  }else{
    for(let i = 0; i<5; i++){
      document.getElementById(gunBox.options[i].value).classList.remove('selected');
    };
    document.getElementById(gunBox.options[4].value).classList.add('selected');
  };
});

// 제이쿼리
// Gun - Select 할 때 변하는 값

$(document).ready(function(){

  $('#sr button:nth-of-type(1)').click(function(){
    $('.sr>div').css("display","none");
    $('.gun__total>div').css("display","none");

    $('.sr').css("display","block");
    $('.sr>div:nth-of-type(1)').css("display","block");

    $('.gun__btns button').removeClass('active');
    $(this).addClass('active');
  });

  $('#sr button:nth-of-type(2)').click(function(){
    $('.sr>div').css("display","none");
    $('.gun__total>div').css("display","none");

    $('.sr').css("display","block");
    $('.sr>div:nth-of-type(2)').css("display","block");

    $('.gun__btns button').removeClass('active');
    $(this).addClass('active');
  });

  $('#sr button:nth-of-type(3)').click(function(){
    $('.sr>div').css("display","none");
    $('.gun__total>div').css("display","none");

    $('.sr').css("display","block");
    $('.sr>div:nth-of-type(3)').css("display","block");

    $('.gun__btns button').removeClass('active');
    $(this).addClass('active');
  });

  $('#sr button:nth-of-type(4)').click(function(){
    $('.sr>div').css("display","none");
    $('.gun__total>div').css("display","none");

    $('.sr').css("display","block");
    $('.sr>div:nth-of-type(4)').css("display","block");

    $('.gun__btns button').removeClass('active');
    $(this).addClass('active');
  });

  $('#ar button:nth-of-type(5)').click(function(){
  
    $('.gun__total>div').css("display","none");

    $('.ar').css("display","block");
    $('.ar>div').css("display","block");

    $('.gun__btns button').removeClass('active');
    $(this).addClass('active');
  });

});

