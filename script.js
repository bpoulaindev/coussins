let numCoussin = 1;
$(document).ready(() => {
  $('#addCoussin').click(() => {
    updateCoussin(1)
  });
  $('#deleteCoussin').click(() => {
    updateCoussin(-1)
  });
  function updateCoussin(order) {
    numCoussin += order;
    $('#numCoussin').text(numCoussin.toString())
    if (numCoussin === 1) {
      $('#deleteCoussin').addClass('d-none')
    } else if (numCoussin === 10) {
      $('#addCoussin').addClass('d-none')
    } else {
      $('#deleteCoussin').removeClass('d-none')
      $('#addCoussin').removeClass('d-none')
    }
    changeBackground()
  }
  function changeBackground() {
    $('#mainImg').attr('src', `./img/${numCoussin}.png`)
    if ((parseInt(numCoussin) % 2) === 0) {
      $('#coussinCard').addClass('bg-pink')
    } else {
      $('#coussinCard').removeClass('bg-pink')
    }
  }
});