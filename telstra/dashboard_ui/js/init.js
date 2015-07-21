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

function showSearchResults(){
      $("#results").show();
}

function editInternal(){
  $("#editInternal").hide();
  $("#saveInternal").show();
  $("#internalEditView").show();
  $("#internalReadView").hide();

  $("#lbluserstory").val('US83');
  $("#lblkanbanstate").val('In Production');
  $("#lblbigdataowner").val('Oliver Ferdinando');

}

function saveInternal(){
  $("#saveInternal").hide();
  $("#editInternal").show();
  $("#internalReadView").show();
  $("#internalEditView").hide();

  $( "#userStoryVal" ).html( $('#lbluserstory').val() );
  $( "#kanbanState" ).html( $('#lblkanbanstate').val() );
  $( "#bigDataOwner" ).html( $('#lblbigdataowner').val() );

}

$(document).ready(function() {
      $("#results").hide();
      $("#saveInternal").hide();
      $("#internalEditView").hide();
      $( "#userStoryVal" ).html( " US83" );
      $( "#kanbanState" ).html( " In Production" );
      $( "#bigDataOwner" ).html( " Oliver Ferdinando" );
});

// $.getJSON( "data/data.json", function( data ) {
//   $( "#result" ).html( JSON.stringify(data) );
//   	console.log(data);
//   	ddReloadSourceSystems('#sourceSystems',data.jobs_info);
// });

// function ddReloadSourceSystems(ddTag,data){
// 	$.each(data, function (i, item) {
// 	    $(ddTag).empty().append($('<option>', { 
// 	        value: item["User story"],
// 	        text : item["Source"]
// 	    }));
// 	});
// }