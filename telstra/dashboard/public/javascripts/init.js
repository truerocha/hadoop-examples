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

function initEditSaveDivTags(){
  // Search Results
  $("#results").hide();

  // Internal Edit/ Save Buttons
  $("#saveInternal").hide();
  $("#internalEditView").hide();

  // Application MetaData Edit/ Save Buttons
  $("#saveAppMetadata").hide();
  $("#appMetaEditView").hide();

  // Sensitivity Indicators Edit/ Save Buttons
  $("#saveSensitivityIndicators").hide();
  $("#sensitivityIndicatorsEditView").hide();

  // SSU Edit/ Save Buttons
  $("#saveSSU").hide();
  $("#sSUEditView").hide();

  // Technical Details Edit/ Save Buttons
  $("#saveTechnicalDetails").hide();
  $("#tdEditView").hide();

  // Technical Details Edit/ Save Buttons
  $("#saveTrackingandDS").hide();
  $("#trackingandDSEditView").hide();
}

function setPanelData(searchString){
  
  $.getJSON( 
    "getSourceMatrix/" + searchString, function( data ) {
    var result = data["som"][0]
    for (var key in map) {
        $( map[key] ).html( result[key] );
    }
    console.log(data["som"][0]);
  });

}

function onBtnSearchClick() {
  
  var searchString = $( "#search" ).val();
  console.log(searchString);

  setPanelData(searchString);
  $("#results").show();
}

$(document).ready(function() {

      initEditSaveDivTags();
      
});
