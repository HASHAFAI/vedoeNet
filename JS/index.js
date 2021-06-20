$(document).ready(function(){

    $(".first-l-e").addClass("active");

$(".nav-link").click(function(){

 $(".nav-link").removeClass("active");
 $(this).addClass("active");
});

$("#toggle").click(function(even){
  $(".sidebar").toggleClass("toggle")

  var  left = $(".sidebar").css("left");
  if(left=='0px'){
      $(".sidebar").css({"left":"-15rem"});
      $(".layr").fadeOut();
  }else{
      $(".sidebar").css({"left":"0"});
      $(".layr").fadeIn();
  }
  $(".layr").click(function(){
      $(".sidebar").css({"left":"-15rem"});
      $(".layr").fadeOut();
  });
});

// filter-column
$("#search-filter-icon").click(function(){

    $(".filter-column").slideToggle("slow");
});

$("input:checkbox").click(function(){
     var $box = $(this);
     if($box.is(":checked")){
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked",false);
        $box.prop("checked",true);
     }

 });

 //إخفاء وإظهار حقل البحث عند الضغط على أيقونة البحث التي تظهر في الشاشات المتوسطة والصغيرة
 $(".search-icon").click(function () {
    $(".search-input").slideToggle("slow"); 
});
});