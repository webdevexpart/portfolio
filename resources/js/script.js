$(function(){
   $('.menu-item a, .next-section a').on('click', function(){
      $('html, body').animate({
         scrollTop: $($.attr(this, 'href')).offset().top 
      }, 2000);
       return false
   });
    
});

function openMenu() {
    document.getElementById('navbar').style.width = "100%";
}

function closeMenu() {
    document.getElementById('navbar').style.width = "0%";
}

// Work Section Mixitup 
var mixer = mixitup('.work-grid');

// WOW Js
wow = new WOW(
                      {
                      
                      mobile:       false,       // default
            
                    }
                    )
                    wow.init();