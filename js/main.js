
$(function () {
    var okno = $(window);
    var menu = $('#main-nav');

   if (okno.scrollTop() >= 100) {
      menu.addClass('scroll');
   }

   okno.scroll(function () {

      if (okno.scrollTop() >= 100) {
            menu.addClass('scroll');
       } else {
            menu.removeClass('scroll');
        }
  });

    /*Smoth scroll*/

    $(document).on('click', 'a[href^="#"]', function(event) {
       event.preventDefault();
var menuHeight = $('#main-nav').height();
       $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - menuHeight
        }, 500);
  });


});

/*Toogle-------------------------------------------------------------------------------------------------------------- */
//$(document).ready(function(){
  //  $(".btn").click(function(){
   //     $("#div1").toggle(1000);
   // });
//});


//function wyslij(){
//    var pokazDiva=document.getElementById('pokaz')  
 //   document.getElementById('pokaz').style="display:block"
//}

//document.getElementById('button1').addEventListener('click',wyslij)


/*Popup*******************************************************************************************************************************8*/

//var myVar;

//function myFunction() {
   // myVar = setTimeout(popUp, 3000);
//};


//function popUp(){
//  var popSchowaj=document.getElementById('popup');
 // popSchowaj.style="display:block"
//};

//function popUp1(){
   // var baner=document.getElementById('popup')
    //baner.style='display:none'
   // }
//document.getElementById('popNone').addEventListener('click',popUp1)


/*Skills1 Hide----------------------------------------------------------------------------------------------------------------*/
//function hideSkills1(){
 //  document.getElementById('skills1').style='display:none';
//}
//document.querySelectorAll('skillsHtml').addEventListener('click',hideSkills1);

//



/*Skills1 Show*/

function show1Skills(){
    document.getElementById('skills1').style='display:block';
}
document.getElementById('show1').addEventListener('click',show1Skills);

function show1Skills2(){
    document.getElementById('skills2').style='display:block';
}
document.getElementById('show2').addEventListener('click',show1Skills2);