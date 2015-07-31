
var map = new Object(); 

map["user_story"] = "#userStoryVal";
map["kanban_state"] = "#kanbanStateVal";
map["big_data_owner"] = "#bigDataOwnerVal";

map["app_id"] = "#appIDVal";
map["source"] = "#sourceVal";
map["data_description"] = "#dataDescriptionVal";
map["architecture_domain"] = "#architectureDomainVal";
map["use_cases"] = "#useCaseVal";
map["contact_person_details"] = "#contactDetailsVal";
map["data_layout"] = "#dataLayoutVal";

map["customer_data"] = "#customerDataVal";
map["financial_and_banking_information"] = "#financialAndBankInfoVal";
map["sensitive_customer_information"] = "#sensitiveCustomerInfoVal";
map["telstra_identifiers_and_service_history"] = "#telstraIdentifierVal";
map["credit_card_data"] = "#creditCardDataVal";
map["financial_reporting_data"] = "#financialReportingDataVal";
map["privacy_data"] = "#privacyDataVal";
map["regulatory_data"] = "#regulatoryDataVal";
map["is_any_high_sensitivity_data_captured"] = "#isSensitiveDataVal";
map["nbn_confidential_information"] = "#nbnConfidentialInfoVal";
map["nbn_compliant"] = "#nbnCompiantVal";

map["is_this_data_ssu_ready"] = "#isSSUReadyVal";
map["ssu_remediation_method"] = "#sSURemediationVal";

map["historical_data_available1"] = "#histDataAvailVal";
map["historical_data_file_size1"] = "#histDataSizeVal";
map["frequency_of_delta_update1"] = "#freqDeltaVal";
map["time_data_should_be_available1"] = "#timeDataAvailVal";
map["data_latency"] = "#dataLatencyVal";
map["subsequent_data_file_size_as_per_frequency"] = "#subDataSizeVal";
map["format_it_comes_in"] = "#formatVal";
map["data_sourcing_method"] = "#dataSourcingVal";
map["host_name"] = "#hostNameVal";
map["host_ip"] = "#hostIPVal";
map["port_number"] = "#portNumberVal";
map["network"] = "#networkVal";
map["database_instance"] = "#dbInstanceVal";
map["file_location_on_server"] = "#fileLocVal";
map["api_data_sourcing_string"] = "#apiDSVal";
map["other_comments"] = "#otherCommentsVal";

map["firewall_status"] = "#fireWallStatusVal";
map["tables_sourced"] = "#tablesSourcedVal";

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

  var source = $( "#sourceVal" ).text();
  var userStory = $( "#lbluserstory" ).val();
  var kanbanState = $( "#lblkanbanstate" ).val();
  var bigDataOwner = $( "#lblbigdataowner" ).val();

  $("#saveInternal").hide();
  $("#editInternal").show();
  $("#internalReadView").show();
  $("#internalEditView").hide();

  $.getJSON( "updateInternal/" + 
    source + "/" +
    userStory + "/" +
    kanbanState + "/" +
    bigDataOwner
    , function( data ) {
    var result = data["status"]

  });

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

  var source = $( "#sourceVal" ).text();
  var app_id = $( "#lblAppID" ).val();
  var data_description = $( "#lblDataDesc" ).val();
  var architecture_domain = $( "#lblArchDom" ).val();
  var use_cases = $( "#lblUseCases" ).val();
  var contact_person_details = $( "#lblContactDetails" ).val();
  var data_layout = $( "#lblDataLayout" ).val();

  $("#saveAppMetadata").hide();
  $("#editAppMetadata").show();
  $("#appMetaReadView").show();
  $("#appMetaEditView").hide();

  $.getJSON( "updateAppMetadata/" + 
    source + "/" +
    app_id + "/" +
    data_description + "/" +
    architecture_domain + "/" +
    use_cases + "/" +
    contact_person_details + "/" +
    data_layout
    , function( data ) {
    var result = data["status"]

  });

  $( "#appIDVal" ).html( $('#lblAppID').val());
  $( "#sourceVal" ).html( $('#lblSource').val());
  $( "#dataDescriptionVal" ).html( $('#lblDataDesc').val());
  $( "#architectureDomainVal" ).html( $('#lblArchDom').val());
  $( "#useCaseVal" ).html( $('#lblUseCases').val());
  $( "#contactDetailsVal" ).html( $('#lblContactDetails').val());
  $( "#dataLayoutVal" ).html( $('#lblDataLayout').val());
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

  var source = $( "#sourceVal" ).text();
  var customer_data = $( "#lblcustomerData" ).val();
  var financial_and_banking_information = $( "#lblfinancialAndBankInfo" ).val();
  var sensitive_customer_information = $( "#lblsensitiveCustomerInfo" ).val();
  var telstra_identifiers_and_service_history = $( "#lbltelstraIdentifier" ).val();
  var credit_card_data = $( "#lblcreditCardData" ).val();
  var financial_reporting_data = $( "#lblfinancialReportingData" ).val();
  var privacy_data = $( "#lblprivacyData" ).val();
  var regulatory_data = $( "#lblregulatoryData" ).val();
  var is_any_high_sensitivity_data_captured = $( "#lblisSensitiveData" ).val();
  var nbn_confidential_information = $( "#lblnbnConfidentialInfo" ).val();
  var nbn_compliant = $( "#lblnbnCompiant" ).val();

  $("#saveSensitivityIndicators").hide();
  $("#editSensitivityIndicators").show();
  $("#sensitivityIndicatorsReadView").show();
  $("#sensitivityIndicatorsEditView").hide();

  $.getJSON( "updateSensitivityIndicators/" + 
    source + "/" +
    customer_data + "/" +
    financial_and_banking_information + "/" +
    sensitive_customer_information + "/" +
    telstra_identifiers_and_service_history + "/" +
    credit_card_data + "/" +
    financial_reporting_data + "/" +
    privacy_data + "/" +
    regulatory_data + "/" +
    is_any_high_sensitivity_data_captured + "/" +
    nbn_confidential_information + "/" +
    nbn_compliant 
    , function( data ) {
    var result = data["status"]

  });

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

  var source = $( "#sourceVal" ).text();
  var is_this_data_ssu_ready = $( "#lblIsSSUReady" ).val();
  var ssu_remediation_method = $( "#lblSSURemediationMethod" ).val();

  //Manage Buttons Behaviour
  $("#saveSSU").hide();
  $("#editSSU").show();
  $("#sSUReadView").show();
  $("#sSUEditView").hide();

  $.getJSON( "updateSSU/" + 
    source + "/" +
    is_this_data_ssu_ready + "/" +
    ssu_remediation_method 
    , function( data ) {
    var result = data["status"]

  });

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

  var source = $( "#sourceVal" ).text();
  var historical_data_available1 = $( "#lblhistDataAvail" ).val();
  var historical_data_file_size1 = $( "#lblhistDataSize" ).val();
  var frequency_of_delta_update1 = $( "#lblfreqDelta" ).val();
  var time_data_should_be_available1 = $( "#lbltimeDataAvail" ).val();
  var data_latency = $( "#lbldataLatency" ).val();
  var subsequent_data_file_size_as_per_frequency = $( "#lblsubDataSize" ).val();
  var format_it_comes_in = $( "#lblformat" ).val();
  var data_sourcing_method = $( "#lbldataSourcing" ).val();
  var host_name = $( "#lblhostName" ).val();
  var host_ip = $( "#lblhostIP" ).val();
  var port_number = $( "#lblportNumber" ).val();
  var network = $( "#lblnetwork" ).val();
  var database_instance = $( "#lbldbInstance" ).val();
  var file_location_on_server = $( "#lblfileLoc" ).val();
  var api_data_sourcing_string = $( "#lblapiDS" ).val();
  var other_comments = $( "#lblotherComments" ).val();

  $("#saveTechnicalDetails").hide();
  $("#editTechnicalDetails").show();
  $("#tdReadView").show();
  $("#tdEditView").hide();

  $.getJSON( "updateTechnicalDetails/" + 
    source + "/" +
    historical_data_available1 + "/" +
    historical_data_file_size1 + "/" +
    frequency_of_delta_update1 + "/" +
    time_data_should_be_available1 + "/" +
    data_latency + "/" +
    subsequent_data_file_size_as_per_frequency + "/" +
    format_it_comes_in + "/" +
    data_sourcing_method + "/" +
    host_name + "/" +
    host_ip + "/" +
    port_number + "/" +
    network + "/" +
    database_instance + "/" +
    file_location_on_server + "/" +
    api_data_sourcing_string + "/" +
    other_comments 
    , function( data ) {
    var result = data["status"]

  });

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

  $("#lblfireWallStatus").val($( "#fireWallStatusVal" ).text());
  $("#lbltablesSourced").val($( "#tablesSourcedVal" ).text());

}

function saveTrackingandDS(){
  
  var source = $( "#sourceVal" ).text();
  var firewall_status = $( "#lblfireWallStatus" ).val();
  var tables_sourced = $( "#lbltablesSourced" ).val();

  //Manage Buttons Behaviour
  $("#saveTrackingandDS").hide();
  $("#editTrackingandDS").show();
  $("#trackingandDSReadView").show();
  $("#trackingandDSEditView").hide();

    $.getJSON( "updateTrackingAndDS/" + 
    source + "/" +
    firewall_status + "/" +
    tables_sourced 
    , function( data ) {
    var result = data["status"]

  });

  // Load Internal Data into Form
  $( "#fireWallStatusVal" ).html( $('#lblfireWallStatus').val() );
  $( "#tablesSourcedVal" ).html( $('#lbltablesSourced').val() );

}