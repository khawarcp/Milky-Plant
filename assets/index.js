$(document).ready(function(e) {
    $('.sliderWrapper').slick({
        slidesToShow: 3.8,
        centerMode: false,
        infinite: false,
        slidesToScroll: 3,
        arrows: false,
        // mobileFirst: true,
        dots:false,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
            
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
            },
            
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
            
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
            
          },
        ]
        

    }
    );
    $(".sustainlibilty h2").lettering();
})





// Custom Tabbing Product Detail page
const tabs = document.querySelectorAll('.tabbingContainer li h4');

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    const desc = this.nextElementSibling;
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;

    tabs.forEach(tab => {
      tab.setAttribute('aria-expanded', 'false');
      tab.nextElementSibling.style.display = 'none';
      tab.classList.remove('active');
    });

    this.setAttribute('aria-expanded', !expanded);
    desc.style.display = !expanded ? 'block' : 'none';
    this.classList.toggle('active', !expanded);
  });
});


$('.material-area .opener').click(function(e){
  e.preventDefault();
  // $('.material-area .holder').removeClass('active');
  // $(this).closest('.holder').find('.images').slideToggle().css('display', 'flex');
})

$(".material-area .opener").click(function () {
  $(".holder.active").not(this).closest('.holder').removeClass("active");
  $(this).closest('.holder').toggleClass("active");
});