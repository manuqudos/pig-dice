$(document).ready(function(){
  $('.clickable').click(function(){
    $('#rules').toggle();
  })

  $('#start').click(function(){
    $('.jumbotron').hide();
    $('#start').hide();
  })
})
