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

$(document).ready(function() {

      // $.getJSON( "getColumns", function( data ) {
         
      //     console.log(data);

      //     $( "#userStoryVal" ).html( data["user_story"] );
      //     $( "#bigDataOwnerVal" ).html( data["big_data_owner"] );

      //     $( "#appIDVal" ).html( data["app_id"] );
      //     $( "#sourceVal" ).html( data["source"] );
      //     $( "#dataDescriptionVal" ).html( data["data_description"] );
      //     $( "#architectureDomainVal" ).html( data["architecture_domain"] );
      //     $( "#useCaseVal" ).html( data["use_cases"] );
      //     $( "#contactDetailsVal" ).html( data["contact_details"] );
      //     $( "#dataLayoutVal" ).html( data["data_layout"] );

      //         // Load Technical Details, data
      //     $( "#hostNameVal" ).html( data["host_names"] );
      //     $( "#hostIPVal" ).html( data["host_ip"]  );
      //     $( "#portNumberVal" ).html( data["port_number"]  );
      //     $( "#networkVal" ).html( data["network"]  );
      //     $( "#dbInstanceVal" ).html( data["db_instance"]  );
      //     $( "#fileLocVal" ).html( data["file_location_on_server"]  );
      //     $( "#apiDSVal" ).html( data["api_data_sourcing_string"]  );
      //     $( "#otherCommentsVal" ).html( data["other_comments"]  );

      // });

      $.getJSON( "getSourceMatrix", function( data ) {
          var arr = data["datas"].replace(")", "").split(":");
          console.log(arr);

          $( "#userStoryVal" ).html( arr[1].split("as")[0] );
          $( "#bigDataOwnerVal" ).html( arr[2].split("as")[0] );

          $( "#appIDVal" ).html( arr[3].split("as")[0] );
          // $( "#sourceVal" ).html(arr[2].split("as")[0] );
          $( "#dataDescriptionVal" ).html( arr[5].split("as")[0] );
          $( "#architectureDomainVal" ).html( arr[6].split("as")[0] );
          $( "#useCaseVal" ).html( arr[7].split("as")[0]);
          $( "#contactDetailsVal" ).html( arr[8].split("as")[0] );
          $( "#dataLayoutVal" ).html( arr[9].split("as")[0] );

              // Load Technical Details, data
          $( "#hostNameVal" ).html( arr[10].split("as")[0] );
          $( "#hostIPVal" ).html( arr[11].split("as")[0]  );
          $( "#portNumberVal" ).html( arr[1].split("as")[0] );
          $( "#networkVal" ).html( arr[13].split("as")[0]  );
          $( "#dbInstanceVal" ).html( arr[14].split("as")[0] );
          $( "#fileLocVal" ).html( arr[15].split("as")[0] + arr[16].split("as")[0]  );
          $( "#apiDSVal" ).html( arr[17].split("as")[0]  );
          $( "#otherCommentsVal" ).html( arr[18].split("as")[0]   );

      });
      $.getJSON( "getColumns", function( data ) {
         
          // console.log(data);

          $( "#sourceVal" ).html( data["source_systems"].replace(")", "").split(",")[1] );
          $( "#sSURemediationVal" ).html( data["ssu_value"].replace(")", "").split(",")[1] );
          $( "#fileLocVal" ).html( data["hdfs_paths"].replace(")", "").split(",")[1] );
      });


      // Search Results
      $("#results").hide();

      // Internal Edit/ Save Buttons
      $("#saveInternal").hide();
      $("#internalEditView").hide();

      // Load internal data
      // $( "#userStoryVal" ).html( " US83" );
      $( "#kanbanStateVal" ).html( " In Production" );
      // $( "#bigDataOwnerVal" ).html( " Oliver Ferdinando" );

      // Application MetaData Edit/ Save Buttons
      $("#saveAppMetadata").hide();
      $("#appMetaEditView").hide();

      // Load application metadata, data
      // $( "#appIDVal" ).html( " APP-6638" );
      // $( "#sourceVal" ).html( " LIVECHAT 1.0" );
      // $( "#dataDescriptionVal" ).html( " Collaboration tool between Telstra Business (TB) end customers and TB CSRs to help customers with sales, service, and support, without calling in." );
      // $( "#architectureDomainVal" ).html( " ONLINE" );
      // $( "#useCaseVal" ).html( " Customer - Complaints;'Customer - CEL'" );
      // $( "#contactDetailsVal" ).html( " Andy Chan (Technical Contact)" );
      // $( "#dataLayoutVal" ).html( " Text based" );

      // Sensitivity Indicators Edit/ Save Buttons
      $("#saveSensitivityIndicators").hide();
      $("#sensitivityIndicatorsEditView").hide();

      // Load sensitivity indicators, data
      $( "#customerDataVal" ).html( " Y" );
      $( "#financialAndBankInfoVal" ).html( " N" );
      $( "#sensitiveCustomerInfoVal" ).html( " Y" );
      $( "#telstraIdentifierVal" ).html( " Y" );
      $( "#creditCardDataVal" ).html( " N" );
      $( "#financialReportingDataVal" ).html( " N" );
      $( "#privacyDataVal" ).html( " Y (PII 118,18,7)" );
      $( "#regulatoryDataVal" ).html( " N" );
      $( "#isSensitiveDataVal" ).html( " Y" );
      $( "#nbnConfidentialInfoVal" ).html( " N" );
      $( "#nbnCompiantVal" ).html( " N/ A" );

      // SSU Edit/ Save Buttons
      $("#saveSSU").hide();
      $("#sSUEditView").hide();

      // Load SSU data
      $( "#isSSUReadyVal" ).html( " Y - Retail Only" );
      // $( "#sSURemediationVal" ).html( " N/A" );

      // Technical Details Edit/ Save Buttons
      $("#saveTechnicalDetails").hide();
      $("#tdEditView").hide();

      // Load Technical Details, data
      $( "#histDataAvailVal" ).html( " 12 Months" );
      $( "#histDataSizeVal" ).html( " 5GB" );
      $( "#freqDeltaVal" ).html( " Daily" );
      $( "#timeDataAvailVal" ).html( " Monday to Friday" );
      $( "#dataLatencyVal" ).html( " One Day" );
      $( "#subDataSizeVal" ).html( " ~50mb compressed" );
      $( "#formatVal" ).html( " dmp.gz" );
      $( "#dataSourcingVal" ).html( " SFTP Push" );
      // $( "#hostNameVal" ).html( " transbp.wg.dir.telstra.com" );
      // $( "#hostIPVal" ).html( " 144.136.107.191" );
      // $( "#portNumberVal" ).html( " 22" );
      // $( "#networkVal" ).html( " EDN" );
      // $( "#dbInstanceVal" ).html( " Oracle Table" );
      // $( "#fileLocVal" ).html( " /bigdata" );
      // $( "#apiDSVal" ).html( " N/A" );
      // $( "#otherCommentsVal" ).html( "  User account to connect to UCSv1: livechat-sftp, Big Data (UCS) SFTP IP address: 10.245.123.29, UCS landing directory: /data/tdc/prd/ret/land/livechat, Delimiters used = <del> for delimiter and <ret> for new record" );
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