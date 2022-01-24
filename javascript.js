var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentInx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.prev'),
    slideWidth = 960,
    nextBtn = document.querySelector('.next');


function moveSlide(num){
  slides.style.left = -num * 960 + 'px';
  currentInx = num;
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


// navbar 올렸을 때 해당 li border 색 바뀌기

document.querySelector('.navbar__menu').addEventListener('hover',()=>{
  document.querySelector('.navbar__menu>li').classList('.active')

});


// gun : select categories


let gunBtn = document.getElementById("gun_btn");
gunBtn.addEventListener('click',()=>{
  let gunBox = document.getElementById("gun_select");
  console.log('gunBox');
  console.log(gunBox);
  console.log('-----');
  
  let selGun = document.getElementById("gun_select").options.selectedIndex;
  console.log('selGun');
  console.log(selGun);
  console.log('-----');
  
  // let category = gunBox.options[selGun].value;
  // console.log('category');
  // console.log(category);
  

  if(selGun==0){
    document.getElementById(gunBox.options[0].value).style.display='block';
    for(let i = 1; i<5; i++){
      document.getElementById(gunBox.options[i].value).style.display='none';
    };

  }else if(selGun==1){
    document.getElementById(gunBox.options[1].value).style.display='block';
    document.getElementById(gunBox.options[0].value).style.display='none';
    for(let i = 2; i<5; i++){
      document.getElementById(gunBox.options[i].value).style.display='none';
    };

  }else if(selGun==2){
    document.getElementById(gunBox.options[2].value).style.display='block';
    for(let i = 0; i<2; i++){
      document.getElementById(gunBox.options[i].value).style.display='none';
    };
    for(let i = 3; i<5; i++){
      document.getElementById(gunBox.options[i].value).style.display='none';
    };

  }else if(selGun==3){
    document.getElementById(gunBox.options[3].value).style.display='block';
    for(let i = 0; i<3; i++){
      document.getElementById(gunBox.options[i].value).style.display='none';
    };
    document.getElementById(gunBox.options[4].value).style.display='none';

  }else{
    document.getElementById(gunBox.options[4].value).style.display='block';
    for(let i = 0; i<4; i++){
      document.getElementById(gunBox.options[i].value).style.display='none';
    };
  };


});

// 제이쿼리 사용 가능
// Gun - Select 할 때 변하는 값
$(document).ready(function(){

  $('#sr button:nth-of-type(1)').click(function(){
    $('.sr').css("display","block");
    $('.sr>div:nth-of-type(1)').css("display","block");
  
    $('.sr>div:not(.sr>div:nth-of-type(1))').css("display","none");

    $('.gun__total>div:not(.sr)').css("display","none");
    $(this).css("background-color","rgb(26,26,26)");
    $(this).css("color","rgb(247,247,247)");
    $(this).css("font-weight","600");
    $('.gun__btns button:not(#sr button:nth-of-type(1))').css("background-color","rgb(198, 197, 196)");
    $('.gun__btns button:not(#sr button:nth-of-type(1))').css("color","black");
    $('.gun__btns button:not(#sr button:nth-of-type(1))').css("font-weight","300");
  });

  $('#sr button:nth-of-type(2)').click(function(){
    $('.sr').css("display","block");
    $('.sr>div:nth-of-type(2)').css("display","block");

    $('.sr>div:not(.sr>div:nth-of-type(2))').css("display","none");

    $('.gun__total>div:not(.sr)').css("display","none");
    $(this).css("background-color","rgb(26,26,26)");
    $(this).css("color","rgb(247,247,247)");
    $(this).css("font-weight","600");
    $('.gun__btns button:not(#sr button:nth-of-type(2))').css("background-color","rgb(198, 197, 196)");
    $('.gun__btns button:not(#sr button:nth-of-type(2))').css("color","black");
    $('.gun__btns button:not(#sr button:nth-of-type(2))').css("font-weight","300");
  });

  $('#sr button:nth-of-type(3)').click(function(){
    $('.sr').css("display","block");
    $('.sr>div:nth-of-type(3)').css("display","block");

    $('.sr>div:not(.sr>div:nth-of-type(3))').css("display","none");

    $('.gun__total>div:not(.sr)').css("display","none");
    $(this).css("background-color","rgb(26,26,26)");
    $(this).css("color","rgb(247,247,247)");
    $(this).css("font-weight","600");
    $('.gun__btns button:not(#sr button:nth-of-type(3))').css("background-color","rgb(198, 197, 196)");
    $('.gun__btns button:not(#sr button:nth-of-type(3))').css("color","black");
    $('.gun__btns button:not(#sr button:nth-of-type(3))').css("font-weight","300");
  });

  $('#sr button:nth-of-type(4)').click(function(){
    $('.sr').css("display","block");
    $('.sr>div:nth-of-type(4)').css("display","block");

    $('.sr>div:not(.sr>div:nth-of-type(4))').css("display","none");

    $('.gun__total>div:not(.sr)').css("display","none");
    $(this).css("background-color","rgb(26,26,26)");
    $(this).css("color","rgb(247,247,247)");
    $(this).css("font-weight","600");
    $('.gun__btns button:not(#sr button:nth-of-type(4))').css("background-color","rgb(198, 197, 196)");
    $('.gun__btns button:not(#sr button:nth-of-type(4))').css("color","black");
    $('.gun__btns button:not(#sr button:nth-of-type(4))').css("font-weight","300");
  });

  $('#ar button:nth-of-type(5)').click(function(){
    $('.ar').css("display","block");
    $('.ar>div').css("display","block");
  
    // $('.ar>div:not(.ar>div:fir)').css("display","none");

    $('.gun__total>div:not(.ar)').css("display","none");
    $(this).css("background-color","rgb(26,26,26)");
    $(this).css("color","rgb(247,247,247)");
    $(this).css("font-weight","600");
    $('.gun__btns button:not(#ar button:nth-of-type(5))').css("background-color","rgb(198, 197, 196)");
    $('.gun__btns button:not(#ar button:nth-of-type(5))').css("color","black");
    $('.gun__btns button:not(#ar button:nth-of-type(5))').css("font-weight","300");
  });

});

