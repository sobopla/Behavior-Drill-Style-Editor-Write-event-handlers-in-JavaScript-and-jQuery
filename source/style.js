// Shorthand for document ready
$(function(){
  $("#style_editor").submit(function() {
  	event.preventDefault();
  	
  	var $selector = $( "#selector" ).val();
  	var $property = $( "#property" ).val();
  	var $value = $( "#value" ).val();

  	$( $selector ).css( $property, $value );
    
  })
});

// $( $( "#selector").val() ).css( $( "#property" ).val(), $( "#value" ).val());



//Here we changed the elements to reference by id instead of 'name' 
//i.e. instead of
//name = selector
//input id = selector 
//This will work if not using ruby??