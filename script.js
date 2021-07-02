let numCoussin = 1;

$(document).ready(() => {
  $('#addCoussin').click(() => {
    if (numCoussin != 10) {
      if(numCoussin === 9) {
        $('#addCoussin').addClass('d-none')
      }
      $('#deleteCoussin').removeClass('d-none')
      numCoussin += 1;
      $('#numCoussin').text(numCoussin.toString())
      changeBackground(numCoussin)
    }
  });
  $('#deleteCoussin').click(() => {
    if (numCoussin != 1) {
      if(numCoussin === 2) {
        $('#deleteCoussin').addClass('d-none')
      }
      $('#addCoussin').removeClass('d-none')
      numCoussin += -1;
      $('#numCoussin').text(numCoussin.toString())
      changeBackground(numCoussin)
    } else {
      $('#deleteCoussin').removeClass('d-none')
    }
  });
  function changeBackground(num) {
    $('#mainImg').attr('src', `./img/${num}.png`)
    switch(parseInt(num) % 2) {
      case 0:
        $('#coussinCard').addClass('bg-pink')
        break;
      case 1:
        $('#coussinCard').removeClass('bg-pink')
        break;
    }
  }
});