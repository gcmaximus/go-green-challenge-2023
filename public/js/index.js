// thank you https://alvarotrigo.com/blog/css-animations-scroll/

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
        //**********************************************************/
        // else {
        //   reveals[i].classList.remove("active");
        // }
        // uncomment if want to everytime scroll animation will show
        // comment if want to only first time scroll animation show
      }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
