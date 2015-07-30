
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