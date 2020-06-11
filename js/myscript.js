$(document).ready(function() {
  // per il carosello
  // bottone next
  $('#prev').click(function() {
    showPrevImg();
  });

  // bottone prev
  $('#next').click(function() {
    showNextImg();
  });


// funzione per mostrare immagine/icona successiva
function showNextImg() {
  // creo variabile per l'immagine/icona successiva
  var imageCurrent = $('.carousel img.active');
  var circleCurrent = $('ul.ms_list_und_slides li.active');

  imageCurrent.removeClass('active');
  circleCurrent.removeClass('active');

  // se immagine/icona e l ultima visualizzata
    if (imageCurrent.hasClass('last')) {
      // aggiunge classe active al primo elemento "first"
      $('.carousel img.first').addClass('active');
      $('ul.ms_list_und_slides li.first').addClass('active ');
    }

    else {
      // altrimenti aggiunge classe "active" alla successiva
      imageCurrent.next('img').addClass('active');
      circleCurrent.next('li').addClass('active');
    }
  }

  // funzione per mostrare immagine/icona precedente
  function showPrevImg() {
    // creo variabile per l'immagine/icona attiva
    var imageCurrent = $('.carousel img.active');
    var circleCurrent = $('ul.ms_list_und_slides li.active');

    imageCurrent.removeClass('active');
    circleCurrent.removeClass('active');

  // se immagine/icona corrente ha classe "first" (quindi e la prima della lista)
    if (imageCurrent.hasClass('first')) {
      // aggiunge classe "active" all ultimo elemento "last"
      $('.carousel img.last').addClass('active');
      $('ul.ms_list_und_slides li.last').addClass('active');
    }
    else {
      // altrimenti aggiunge classe "active" alla precedente
      imageCurrent.prev('img').addClass('active');
      circleCurrent.prev('li').addClass('active');
    }
  }














});
