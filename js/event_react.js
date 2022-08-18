
var hideCard = false;

let first_card_anime = document.getElementById("first_card_anime");

//Some Math Stuff
function px_to_vw(px){
  return px * (100 / document.documentElement.clientWidth);
}
function px_to_vh(px){
  return px * (100 / document.documentElement.clientHeight);
}

//Working
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
  
  var vieww=[0,0,0,0,0];

    if(windowHeight>120 && windowHeight<544){
        vieww[0]=vieww[0]+1;
        first_explore.style.left =  vieww[0] +"vw";
    }
        //first_explore.style.left = px_to_vw(1.7*windowHeight) + "vw";
    if(windowHeight>300 && windowHeight<1440){
        vieww[1]=vieww[1]+1;
        second_explore.style.left = vieww[1] + "vw";
    }
        //second_explore.style.left = px_to_vw(0.63099*windowHeight) + "vw";
    if(windowHeight>400 && windowHeight<2344){
      vieww[2]=vieww[2]+1;
      third_explore.style.left = vieww[2] + "vw";
    }
      //third_explore.style.left = px_to_vw(0.3857*windowHeight) + "vw";
    if(windowHeight>500 && windowHeight<3267){
      vieww[3]=vieww[3]+1;
      fourth_explore.style.left = vieww[3] + "vw";
    }
      //fourth_explore.style.left = px_to_vw(0.27572*windowHeight) + "vw";
    if(windowHeight>600 && windowHeight<4078){
      vieww[4]=vieww[4]+1;
      fifth_explore.style.left = vieww[4] + "vw";
    }
      //fifth_explore.style.left = px_to_vw(0.21999999*windowHeight) + "vw";
      
  

}

  function parallax(){
    var windowHeight = window.scrollY;

    transit_card(windowHeight);
    description(windowHeight);
    
  }
  
  window.addEventListener("scroll", parallax);

