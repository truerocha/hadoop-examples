// Initialize collapse button
$(".button-collapse").sideNav();

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

function manageContent(id) {
	var contentIDList = ["#lastLoadSummary", "#lastLoadSourceSystem", "#gaps"];
    var idInt = parseInt(id);
    console.log(idInt);

    for(i=0;i<contentIDList.length;i++) {
    	if(i===idInt){
    		$(contentIDList[i]).removeClass("hide");
    		console.log("Shown: " + contentIDList[i]);
    	}
    	else
    	{
    		$(contentIDList[i]).addClass( "hide" );
    		console.log("Hidden: " + contentIDList[i]);
    	}
	}
}



