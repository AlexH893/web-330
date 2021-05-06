
  //Get btn
  var mybutton = document.getElementById("myBtn");
//When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      
      //Animates scrolling to the top of the page
      window.scroll({
        top: 0,
        behavior: 'smooth'   
      });
    

}
