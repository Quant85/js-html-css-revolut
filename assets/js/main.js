/* Usado jQuery riproducete l'effetto dei menu a tendina del sito revolut (https://www.revolut.com/) 
usate lo screenshot di seguito per riprodurre anche il layout della navbar.
*Il menu deve diventare visibile quando facciamo hover  o click ( a vs discrezione ) su uno dei link principali nella navbar. 
*Ogni link della navbar ha il suo menu nascosto che deve apparire. */

$(function () {
  $("section.dropdown_menu").hover(
    function() {
        $(this).children("section.sub_menu").stop(true,false,true,false).fadeToggle(300);
    }    
  );

  /* $("section.dropdown_menu").on("click",
    function() {
        $(this).children("section.sub_menu").stop(true,false,true,false).fadeToggle(300);
    }    
  ); */
});