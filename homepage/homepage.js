var slideIndex = 1;
      showSlides(slideIndex);
      function plusSlides(n) {
         showSlides(slideIndex += n);
      }
      function showSlides(n) {
         var i;
         var slides = document.getElementsByClassName("mySlides");
         if (n > slides.length) {
            slideIndex = 1
         }
         if (n < 1) {
            slideIndex = slides.length
         }
         for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
         slides[slideIndex-1].style.display = "block";
      }


var sldIndex = 1;
      displaySlides(sldIndex);
      function incSlides(n) {
         displaySlides(sldIndex += n);
      }
      function displaySlides(n) {
         var i;
         var slides = document.getElementsByClassName("mySlides1");
         if (n > slides.length) {
            sldIndex = 1
         }
         if (n < 1) {
            sldIndex = slides.length
         }
         for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
         slides[sldIndex-1].style.display = "block";
      }
document.querySelector("#btns>p:first-child").addEventListener("click",mySign)
function mySign(){
   window.location.assign("signup.html");
}