(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

$(document).ready(function(){
    $('ul.tabs').tabs();
  });

$.getJSON( "data/data.json", function( data ) {
  $( "#result" ).html( JSON.stringify(data) );
  	console.log(data);
  	ddReloadSourceSystems('#sourceSystems',data.jobs_info);
});

function ddReloadSourceSystems(ddTag,data){
	$.each(data, function (i, item) {
	    $(ddTag).empty().append($('<option>', { 
	        value: item["User story"],
	        text : item["Source"]
	    }));
	});
}