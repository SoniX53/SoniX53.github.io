window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
       window.onscroll = function() {myFunction()};

       var navbar = document.getElementById("navbar");
       var sticky = navbar.offsetTop;

       function myFunction() {
       if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
       } else {
        navbar.classList.remove("sticky");
       }
       }
