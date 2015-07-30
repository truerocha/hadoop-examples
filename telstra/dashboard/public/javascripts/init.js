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

  $("#lbluserstory").val($( "#userStoryVal" ).text());
  $("#lblkanbanstate").val($( "#kanbanStateVal" ).text());
  $("#lblbigdataowner").val($( "#bigDataOwnerVal" ).text());

}

function saveInternal(){
  //Manage Buttons Behaviour
  $("#saveInternal").hide();
  $("#editInternal").show();
  $("#internalReadView").show();
  $("#internalEditView").hide();

  // Load Internal Data into Form
  $( "#userStoryVal" ).html( $('#lbluserstory').val() );
  $( "#kanbanStateVal" ).html( $('#lblkanbanstate').val() );
  $( "#bigDataOwnerVal" ).html( $('#lblbigdataowner').val() );

}

function editAppMeta(){
  $("#editAppMetadata").hide();
  $("#saveAppMetadata").show();
  $("#appMetaEditView").show();
  $("#appMetaReadView").hide();

  $( "#lblAppID" ).val( $( "#appIDVal" ).text() );
  $( "#lblSource" ).val( $( "#sourceVal" ).text() );
  $( "#lblDataDesc" ).val( $( "#dataDescriptionVal" ).text() );
  $( "#lblArchDom" ).val( $( "#architectureDomainVal" ).text() );
  $( "#lblUseCases" ).val( $( "#useCaseVal" ).text() );
  $( "#lblContactDetails" ).val( $( "#contactDetailsVal" ).text() );
  $( "#lblDataLayout" ).val( $( "#dataLayoutVal" ).text() );
}

function saveAppMeta(){
  $("#saveAppMetadata").hide();
  $("#editAppMetadata").show();
  $("#appMetaReadView").show();
  $("#appMetaEditView").hide();

  $( "#appIDVal" ).html( $('#lblAppID').val() );
  $( "#sourceVal" ).html( $('#lblSource').val() );
  $( "#dataDescriptionVal" ).html( $('#lblDataDesc').val() );
  $( "#architectureDomainVal" ).html( $('#lblArchDom').val() );
  $( "#useCaseVal" ).html( $('#lblUseCases').val() );
  $( "#contactDetailsVal" ).html( $('#lblContactDetails').val() );
  $( "#dataLayoutVal" ).html( $('#lblDataLayout').val() );
}

function editSensitivityIndicators(){
  $("#editSensitivityIndicators").hide();
  $("#saveSensitivityIndicators").show();
  $("#sensitivityIndicatorsEditView").show();
  $("#sensitivityIndicatorsReadView").hide();

  $( "#lblcustomerData" ).val( $( "#customerDataVal" ).text() );
  $( "#lblfinancialAndBankInfo" ).val( $( "#financialAndBankInfoVal" ).text() );
  $( "#lblsensitiveCustomerInfo" ).val( $( "#sensitiveCustomerInfoVal" ).text() );
  $( "#lbltelstraIdentifier" ).val( $( "#telstraIdentifierVal" ).text() );
  $( "#lblcreditCardData" ).val( $( "#creditCardDataVal" ).text() );
  $( "#lblfinancialReportingData" ).val( $( "#financialReportingDataVal" ).text() );
  $( "#lblprivacyData" ).val( $( "#privacyDataVal" ).text() );
  $( "#lblregulatoryData" ).val( $( "#regulatoryDataVal" ).text() );
  $( "#lblisSensitiveData" ).val( $( "#isSensitiveDataVal" ).text() );
  $( "#lblnbnConfidentialInfo" ).val( $( "#nbnConfidentialInfoVal" ).text() );
  $( "#lblnbnCompiant" ).val( $( "#nbnCompiantVal" ).text() );
}

function saveSensitivityIndicators(){
  $("#saveSensitivityIndicators").hide();
  $("#editSensitivityIndicators").show();
  $("#sensitivityIndicatorsReadView").show();
  $("#sensitivityIndicatorsEditView").hide();

  $( "#customerDataVal" ).html( $('#lblcustomerData').val() );
  $( "#financialAndBankInfoVal" ).html( $('#lblfinancialAndBankInfo').val() );
  $( "#sensitiveCustomerInfoVal" ).html( $('#lblsensitiveCustomerInfo').val() );
  $( "#telstraIdentifierVal" ).html( $('#lbltelstraIdentifier').val() );
  $( "#creditCardDataVal" ).html( $('#lblcreditCardData').val() );
  $( "#financialReportingDataVal" ).html( $('#lblfinancialReportingData').val() );
  $( "#privacyDataVal" ).html( $('#lblprivacyData').val() );
  $( "#regulatoryDataVal" ).html( $('#lblregulatoryData').val() );
  $( "#isSensitiveDataVal" ).html( $('#lblisSensitiveData').val() );
  $( "#nbnConfidentialInfoVal" ).html( $('#lblnbnConfidentialInfo').val() );
  $( "#nbnCompiantVal" ).html( $('#lblnbnCompiant').val() );
}


function editSSU(){
  $("#editSSU").hide();
  $("#saveSSU").show();
  $("#sSUEditView").show();
  $("#sSUReadView").hide();

  $("#lblIsSSUReady").val($( "#isSSUReadyVal" ).text());
  $("#lblSSURemediationMethod").val($( "#sSURemediationVal" ).text());

}

function saveSSU(){
  //Manage Buttons Behaviour
  $("#saveSSU").hide();
  $("#editSSU").show();
  $("#sSUReadView").show();
  $("#sSUEditView").hide();

  // Load Internal Data into Form
  $( "#isSSUReadyVal" ).html( $('#lblIsSSUReady').val() );
  $( "#sSURemediationVal" ).html( $('#lblSSURemediationMethod').val() );

}

function editTechnicalDetails(){
  $("#editTechnicalDetails").hide();
  $("#saveTechnicalDetails").show();
  $("#tdEditView").show();
  $("#tdReadView").hide();

  $( "#lblhistDataAvail" ).val( $( "#histDataAvailVal" ).text() );
  $( "#lblhistDataSize" ).val( $( "#histDataSizeVal" ).text() );
  $( "#lblfreqDelta" ).val( $( "#freqDeltaVal" ).text() );
  $( "#lbltimeDataAvail" ).val( $( "#timeDataAvailVal" ).text() );
  $( "#lbldataLatency" ).val( $( "#dataLatencyVal" ).text() );
  $( "#lblsubDataSize" ).val( $( "#subDataSizeVal" ).text() );
  $( "#lblformat" ).val( $( "#formatVal" ).text() );
  $( "#lbldataSourcing" ).val( $( "#dataSourcingVal" ).text() );
  $( "#lblhostName" ).val( $( "#hostNameVal" ).text() );
  $( "#lblhostIP" ).val( $( "#hostIPVal" ).text() );
  $( "#lblportNumber" ).val( $( "#portNumberVal" ).text() );
  $( "#lblnetwork" ).val( $( "#networkVal" ).text() );
  $( "#lbldbInstance" ).val( $( "#dbInstanceVal" ).text() );
  $( "#lblfileLoc" ).val( $( "#fileLocVal" ).text() );
  $( "#lblapiDS" ).val( $( "#apiDSVal" ).text() );
  $( "#lblotherComments" ).val( $( "#otherCommentsVal" ).text() );
}

function saveTechnicalDetails(){
  $("#saveTechnicalDetails").hide();
  $("#editTechnicalDetails").show();
  $("#tdReadView").show();
  $("#tdEditView").hide();

  $( "#histDataAvailVal" ).html( $('#lblhistDataAvail').val() );
  $( "#histDataSizeVal" ).html( $('#lblhistDataSize').val() );
  $( "#freqDeltaVal" ).html( $('#lblfreqDelta').val() );
  $( "#timeDataAvailVal" ).html( $('#lbltimeDataAvail').val() );
  $( "#dataLatencyVal" ).html( $('#lbldataLatency').val() );
  $( "#subDataSizeVal" ).html( $('#lblsubDataSize').val() );
  $( "#formatVal" ).html( $('#lblformat').val() );
  $( "#dataSourcingVal" ).html( $('#lbldataSourcing').val() );
  $( "#hostNameVal" ).html( $('#lblhostName').val() );
  $( "#hostIPVal" ).html( $('#lblhostIP').val() );
  $( "#portNumberVal" ).html( $('#lblportNumber').val() );
  $( "#networkVal" ).html( $('#lblnetwork').val() );
  $( "#dbInstanceVal" ).html( $('#lbldbInstance').val() );
  $( "#fileLocVal" ).html( $('#lblfileLoc').val() );
  $( "#apiDSVal" ).html( $('#lblapiDS').val() );
  $( "#otherCommentsVal" ).html( $('#lblotherComments').val() );
}

function editTrackingandDS(){
  $("#editTrackingandDS").hide();
  $("#saveTrackingandDS").show();
  $("#trackingandDSEditView").show();
  $("#trackingandDSReadView").hide();

  $("#lblfireWallStatus").val($( "#fireWallStatus" ).text());
  $("#lbltablesSourced").val($( "#tablesSourced" ).text());

}

function saveTrackingandDS(){
  //Manage Buttons Behaviour
  $("#saveTrackingandDS").hide();
  $("#editTrackingandDS").show();
  $("#trackingandDSReadView").show();
  $("#trackingandDSEditView").hide();

  // Load Internal Data into Form
  $( "#fireWallStatus" ).html( $('#lblfireWallStatus').val() );
  $( "#tablesSourced" ).html( $('#lbltablesSourced').val() );

}

$(document).ready(function() {

      $.getJSON( "getSourceMatrix/livechat", function( data ) {
        
        result = data["som"][0]

        for (var key in map) {
            $( key ).html( result[key] );
        }

        console.log(data["som"][0]);
        // $( "#userStoryVal" ).html( " US83" );

      });
      
});
