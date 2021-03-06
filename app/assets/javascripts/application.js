// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(document).on('ready page:load', function() {
  chenge_left_menu_position();

  $( window ).resize(function() {
	chenge_left_menu_position();
  });

  $(window).scroll(function(){
    $('#menu_left').css('left','-'+$(window).scrollLeft()+'px');
  });

  function chenge_left_menu_position() {
    position = $("#marker").position();
    $('#menu_left').css("left", position.left);
    $('.modal-dialog').css("margin-left",position.left + 100);
  }
});
