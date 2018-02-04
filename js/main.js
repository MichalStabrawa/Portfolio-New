
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









/*Skills1 Show*/

function show1Skills(){
    document.getElementById('skills1').style='display:block';
}
document.getElementById('show1').addEventListener('click', show1Skills);



$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('h2').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });
    
});


function cssShowPopUp(){
    document.getElementById('skills2').style.display="block"
}
document.getElementById('show2').addEventListener('click',cssShowPopUp);


/*modal-contact*/
$('#contactBtn').click(function(){
    $('.modal-contact').show(1000);
    console.log('Dziala');
})

$(document).ready(function(){

  $('.popUpBtnClose').click(function(){
    $('.pop1 ').hide(1000);
      
  });
   
    })

$('.popBtn1').click(function(){
    $('.modal-contact').hide(1000);
})






  



 





