
var hideCard = false;

let first_card_anime = document.getElementById("first_card_anime");


function hideView(){
    hideCard=!hideCard;
    if(hideCard){
      document.getElementById("change_view").style = "transform: rotate(90deg);";
    document.getElementById("card-view").style.display = "none";
    document.getElementById("splitted-view").style.display = "flex";
    }
    else{
      document.getElementById("change_view").style = "transform: rotate(0deg);";
        document.getElementById("splitted-view").style.display = "none";
        document.getElementById("card-view").style.display = "flex";
    }
}


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
/*
  function re(){
    var windowHeight = window.scrollY;
    console.log(windowHeight);
    console.log("Hi");
    document.getElementById("card-view").style.top = 1*windowHeight + "px";
    
  } */
  function re(){
    let defa=150;
    var windowHeight = window.scrollY;
    console.log(windowHeight);
    console.log("Hi");
    
    let first_explode = document.getElementsByClassName("first-explode");
    let second_explode = document.getElementsByClassName("second-explode");
    let third_explode = document.getElementsByClassName("third-explode");
    let fourth_explode = document.getElementsByClassName("fourth-explode");
    let fifth_explode = document.getElementsByClassName("fifth-explode");

    
    for(let i=0;i<first_explode.length;i++){
        first_explode[i].style.bottom = 2*windowHeight + "px";
        first_explode[i].style.left = 10*windowHeight + "px";
    };
    for(let i=0;i<second_explode.length;i++){
        second_explode[i].style.bottom = 2*windowHeight + "px";
        second_explode[i].style.left = 5*windowHeight + "px";
    };
    for(let i=0;i<third_explode.length;i++){
        third_explode[i].style.bottom = 2*windowHeight + "px";
        third_explode[i].style.left = 10*windowHeight + "px";
    };
    for(let i=0;i<fourth_explode.length;i++){
        fourth_explode[i].style.bottom = 2*windowHeight + "px";
        fourth_explode[i].style.left = 5*windowHeight + "px";
    };
    for(let i=0;i<fifth_explode.length;i++){
        fifth_explode[i].style.bottom = 2*windowHeight + "px";
        fifth_explode[i].style.left = 10*windowHeight + "px";
    };
    //document.getElementById("card-view").style.top = (1*windowHeight)+defa + "px";
    
  }
  
  window.addEventListener("scroll", re);

