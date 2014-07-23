var Requests = new function() {
  this.add_content = function(data, success_callback, error_callback) {
    $.ajax({
      type: "post",
      url: '/posts',
      data: data,
      contentType: false,
      processData: false,
      error: function(response) { error_callback("error") },
      success: function(response){
        if(response && response.status == 200) success_callback(response.path);
        else error_callback(response.error || 'Something went wrong!');
      }
    });
  };
}