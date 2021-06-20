$(document).ready(function(){

 $(".viwe").click(function(){
     var dots = document.getElementById("dots");
     var more = document.getElementById("more");
     var btn = document.getElementById("btn");
     if(dots.style.display==="none"){
         dots.style.display="inline";
         more.style.display="none";
         btn.innerHTML="Show more"
     }else
    {
        dots.style.display="none";
         more.style.display="inline";
         btn.innerHTML="Show less";
    }
 });

 $(".responses").click(function(){
  $(this).parents("div.row").next("div.card").toggle();
 });

//  $(".viwe1").click(function(){
//     var dots1 = document.getElementById("dots1");
//     var more1 = document.getElementById("more1");
//     var btn1 = document.getElementById("btn1");
//     if(dots1.style.display==="none"){
//         dots1.style.display="inline";
//         more1.style.display="none";
//         btn1.innerHTML="Show more"
//     }else
//    {
//         dots1.style.display="none";
//         more1.style.display="inline";
//         btn1.innerHTML="Show less";
//    }
// });
});