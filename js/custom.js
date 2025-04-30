// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})
 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

  document.addEventListener("DOMContentLoaded", function () {
    const animatedItems = document.querySelectorAll(".scroll-animate");

    const scrollAnimate = () => {
      animatedItems.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    scrollAnimate(); // Run on load
    window.addEventListener("scroll", scrollAnimate);
  });


//   document.addEventListener("DOMContentLoaded", function () {
//     const icon = document.querySelector(".whatsapp-main-icon");
//     const options = document.querySelector(".whatsapp-options");

//     icon.addEventListener("click", () => {
//       options.style.display = options.style.display === "flex" ? "none" : "flex";
//     });
//   });



