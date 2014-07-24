$(document).on('ready page:load', function() {
  if($('#user_panels').length) { 
  	new Start.UploadFile();
  	new Panels.LeftMenuTrigger();
  }
});

var Start = {};
var Panels = {};

Start.UploadFile = function() {

  $('#item_upload').click(function(){
  	$('#upload_image').hide();
  	$('#show_upload_image').show();
    if ($('#start').hasClass('in')) $('#start').modal("hide");
	  else $('#start').modal("show");
  });

  $('#show_upload_image').click(function(){
	$('#upload_image').show();
	$(this).hide();
  });

  $('#new_post').submit(function (event) {
  	event.preventDefault();
    var data = new FormData($('#new_post')[0]);
	  Requests.add_content(data, 
  	  function(response) {
  	    $("#results").html("<img style='height: 200px' src='"+ response + "' />");
  	  },
  	  function(response) {
  	    console.log("no");
  	  }
    );
  });
}

Panels.LeftMenuTrigger = function() {
  var current = null,
      close = true;

  $(".modal-content").click(function(){
      close = false;
  });

  $("#start").click(function(){
    if (close) {
      disable_item();
      current = null;
    }
    close = true;
  });

  $(".simple_buttons .item").click(function(){
    if (current != null) {
      disable_item();
      if ($(this).context.id != current.context.id) active_item($(this));
      else current = null;
    } else active_item($(this));
  });

  $(".link_buttons .item").click(function(){
    $(this).css("border-left", "5px solid #45c8dc");
  });

  function active_item(item){
    item.find('.arrow-left').show();
    item.css("border-left", "5px solid #45c8dc");
    current = item;
  }

  function disable_item() {
    current.find('.arrow-left').hide();
    current.css("border-left","0");
  }
};