 //fading 
 /**document.body.className += 'fade';
 $(function() {
 $('body').removeClass('fade');
});
*/
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
      document.body.className = '';
    }, 230);
  });