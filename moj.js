document.addEventListener("DOMContentLoaded", function () {
   const navLinks = document.querySelectorAll("nav ul li a");

   navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
         event.preventDefault(); // Prevent default anchor behavior

         const targetId = this.getAttribute("href").substring(1); // Get target section id
         const targetSection = document.getElementById(targetId); // Get target section

         // Scroll to the target section smoothly
         targetSection.scrollIntoView({
            behavior: "smooth"
         });
      });
   });
});
