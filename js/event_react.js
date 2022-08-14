
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

/*
  function re(){
    var windowHeight = window.scrollY;
    console.log(windowHeight);
    console.log("Hi");
    document.getElementById("card-view").style.top = 1*windowHeight + "px";
    
  } */
function transit_card(windowHeight){
    
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

function description(windowHeight){
  let first_explore = document.getElementById("first-explore");
  let second_explore = document.getElementById("second-explore");
  let third_explore = document.getElementById("third-explore");
  let fourth_explore = document.getElementById("fourth-explore");
  let fifth_explore = document.getElementById("fifth-explore");

    if(windowHeight>120 && windowHeight<544)
        first_explore.style.left = 1.7*windowHeight + "px";
    if(windowHeight>300 && windowHeight<1440)
        second_explore.style.left = 0.63099*windowHeight + "px";
    if(windowHeight>400 && windowHeight<2344)
      third_explore.style.left = 0.3857*windowHeight + "px";
    if(windowHeight>500 && windowHeight<3267)
      fourth_explore.style.left = 0.27572*windowHeight + "px";
    if(windowHeight>600 && windowHeight<4078)
      fifth_explore.style.left = 0.21999999*windowHeight + "px";
      
      
  console.log("Left : "+fifth_explore.style.left);

}

  function parallax(){
    let defa=150;
    var windowHeight = window.scrollY;
    console.log(windowHeight);

    transit_card(windowHeight);
    description(windowHeight);
    
  }
  
  window.addEventListener("scroll", parallax);

