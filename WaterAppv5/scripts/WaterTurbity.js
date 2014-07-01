
function CalculatePercentage(type, value) {

}


function LoadWaterTurbidityMonthly(callType) {
    var type = window.localStorage.getItem("ULBtype");
    // to get exapned ULB name
    var ulbname = window.localStorage.getItem("ULBname");


    //$(".splytrend-head").text(ulbname + " No of tanks cleaned");

    //    $.ajax({
    //        type: "GET",
    //        url: "waterappold.xml",
    //        async: false,
    //        dataType: "xml",
    //        success: function (xml, status) {

    //            result = (new XMLSerializer()).serializeToString(xml);
    //        }
    //    });


    var ecoliValue = "";
    var PH = "";
    var turbidity = "";
    var dissolved = "";
    var hardness = "";
    var fluorides = "";

    switch ($.trim(type)) {
        case "CorpChart":

            $(ulbDetails).find("CorporationData").find("Corporation[Name='" + ulbname + "']").each(function () {
                
                    $(this).find("WaterQuality").find("Monthly").each(function () {
                       

                            DrawDropChart('ecoli', $(this).attr('Ecoli'),callType);
                            DrawDropChart('ph', $(this).attr('PH'),callType);
                            DrawDropChart('turbidity', $(this).attr('Turbidity'),callType);
                            DrawDropChart('dissolved', $(this).attr('Dissolved'),callType);
                            DrawDropChart('hardness', $(this).attr('Hardness'),callType);
                            DrawDropChart('fluorides', $(this).attr('Fluorides'),callType);
                       
                });
            });


            /* }
            });*/
            break;
        case "Municipalities":

            $(ulbDetails).find("MunicipalityData").find("Municipality[Name='" + ulbname + "']").each(function () {                
                    $(this).find("WaterQuality").find("Monthly").each(function () {                       

                            DrawDropChart('ecoli', $(this).attr('Ecoli'),callType);
                            DrawDropChart('ph', $(this).attr('PH'),callType);
                            DrawDropChart('turbidity', $(this).attr('Turbidity'),callType);
                            DrawDropChart('dissolved', $(this).attr('Dissolved'),callType);
                            DrawDropChart('hardness', $(this).attr('Hardness'),callType);
                            DrawDropChart('fluorides', $(this).attr('Fluorides'),callType);
                        });
            });

            break;

    }
}

function DrawDropChart(type, value,callType) {

    var percentage;
    switch (type.toLowerCase()) {
        case 'ecoli':
            if (value.toLowerCase() == 'negative') {
                if(callType==null)
                {
                    $("#waterQuality").find("#ecoliValueDiv").find('.water-drop').css('height', '35%');
                }
                else
                {
                    $("#prefwaterQuality").find("#ecoliValueDiv").find('.water-drop').css('height', '35%'); 
                }
                
            }
            else {
                
                if(callType==null)
                {
                    
                    $("#waterQuality").find("#ecoliValueDiv").find('.water-drop').css('height', '100%');
                    $("#waterQuality").find("#turbidity").find('#ecoliValue').css('margin-top', "10px");
                }
                else
                {
                    
                    $("#prefwaterQuality").find("#ecoliValueDiv").find('.water-drop').css('height', '100%');
                    $("#prefwaterQuality").find("#turbidity").find('#ecoliValue').css('margin-top', "10px");
                }
                
                
            }
          //  $("#turbidity").find('#ecoliValue')[0].innerHTML = value;
            break;
        case 'ph':
            var height = GetHeight(value, 7, 8.5, 'ph');
         if(callType==null)
                {
            $("#waterQuality").find("#PHValueDiv").find('.water-drop').css('height', height + 'px');
            $("#waterQuality").find("#PHValueDiv").find('#phValue')[0].innerHTML = value;
                }
        else
        {
            
            $("#prefwaterQuality").find("#PHValueDiv").find('.water-drop').css('height', height + 'px');
            $("#prefwaterQuality").find("#PHValueDiv").find('#phValue')[1].innerHTML = value;
        }
            break;
        case 'turbidity':
            var height = GetHeight(value, 0, 10, 'turbidity');
        if(callType==null)
                {
                    $("#waterQuality").find("#turbidityValueDiv").find('.water-drop').css('height', height + 'px');
            $("#waterQuality").find("#turbidity").find('#turbidityValue')[0].innerHTML = value;
                 }
        else
        {
         
            $("#prefwaterQuality").find("#turbidityValueDiv").find('.water-drop').css('height', height + 'px');
            $("#prefwaterQuality").find("#turbidity").find('#turbidityValue')[1].innerHTML = value;
        }
            
            break;
        case 'dissolved':
            var height = GetHeight(value, 0, 15, 'dissolved');
         if(callType==null)
                {
            $("#waterQuality").find("#dissolvedValueDiv").find('.water-drop').css('height', height + 'px');
            $("#waterQuality").find("#dissolvedValueDiv").find('#dissolvedValue')[0].innerHTML = value;
                    }
        else
        {
            $("#prefwaterQuality").find("#dissolvedValueDiv").find('.water-drop').css('height', height + 'px');
            $("#prefwaterQuality").find("#dissolvedValueDiv").find('#dissolvedValue')[1].innerHTML = value;
        }
            break;
        case 'hardness':
            var height = GetHeight(value, 0, 2000, 'hardness');
        if(callType==null)
        {
            $("#waterQuality").find("#hardnessValueDiv").find('.water-drop').css('height', height + 'px');
            $("#waterQuality").find("#hardnessValueDiv").find('#hardnessValue')[0].innerHTML = value; 
        }
        else
        {
           $("#prefwaterQuality").find("#hardnessValueDiv").find('.water-drop').css('height', height + 'px');
            $("#prefwaterQuality").find("#hardnessValueDiv").find('#hardnessValue')[1].innerHTML = value;   
        }
           
            break;
        case 'fluorides':
            var height = GetHeight(value, 0, 600, 'fluorides');
         if(callType==null)
        {
            $("#waterQuality").find("#fluoridesValueDiv").find('.water-drop').css('height', height + 'px');
            $("#waterQuality").find("#fluoridesValueDiv").find('#fluoridesValue')[0].innerHTML = value;
            }
        else
        {
              $("#prefwaterQuality").find("#fluoridesValueDiv").find('.water-drop').css('height', height + 'px');
            $("#prefwaterQuality").find("#fluoridesValueDiv").find('#fluoridesValue')[1].innerHTML = value;
            }
            break;
    }

}

function GetHeight(value, minValue, maxValue, Type) {
    var height = 0;

    if (Type == 'ph') {
        if (value < minValue) {
            height = 0;
        }
        else {
            height = (((value / 8.5) * 50));
        }
    }
    else if (Type == 'turbidity') {
        height= (((value / 10) * 50));
    } else if (Type == 'dissolved') {
        height = (((value / 2000) * 50));
    } else if (Type == 'hardness') {
        height = (((value / 600) * 50));
    } else if (Type == 'fluorides') {
        height = (((value / 1.5) * 50));
    }

    if (height <= 90) {
        return height;
    }
    else {
        return 92;
    }

}



function LoadPage(pagename) {    
     if (pagename == "waterQuality") {
         $.mobile.changePage('#' + pagename, { transition: 'slide' });
        LoadTank();       
    }
    else if (pagename == "TankCleaning") {
         LoadTank();       
        }
   
    $.mobile.changePage('#' + pagename, { transition: 'slide' });   
    return false;
}


function ShowHideSlider(isSlide5)
{
    if(isSlide5)
    {
        $('#prefCorpGraph').find("#slide5").show();
     $('#prefCorpGraph').find("#slide3").hide();
     $('#prefwaterQuality').find("#slide5").show();
     $('#prefwaterQuality').find("#slide3").hide();
     $('#prefWaterQualityHalf1').find("#slide5").show();
     $('#prefWaterQualityHalf1').find("#slide3").hide();
     $('#prefWaterQualityHalf2').find("#slide5").show();
     $('#prefWaterQualityHalf2').find("#slide3").hide();
     $('#prefWaterQualityHalf3').find("#slide5").show();
     $('#prefWaterQualityHalf3').find("#slide3").hide();
    $('#prefTankCleaning').find("#slide5").show();
     $('#prefTankCleaning').find("#slide3").hide();
    
      $('#CorpGraph').find("#slide5").show();
     $('#CorpGraph').find("#slide3").hide();
     $('#waterQuality').find("#slide5").show();
     $('#waterQuality').find("#slide3").hide();
     $('#WaterQualityHalf1').find("#slide5").show();
     $('#WaterQualityHalf1').find("#slide3").hide();
     $('#WaterQualityHalf2').find("#slide5").show();
     $('#WaterQualityHalf2').find("#slide3").hide();
    $('#WaterQualityHalf3').find("#slide5").show();
     $('#WaterQualityHalf3').find("#slide3").hide();
    $('#TankCleaning').find("#slide5").show();
     $('#TankCleaning').find("#slide3").hide();
        }
    else
    {
     $('#prefCorpGraph').find("#slide5").hide();
     $('#prefCorpGraph').find("#slide3").show();
     $('#prefwaterQuality').find("#slide5").hide();
     $('#prefwaterQuality').find("#slide3").show();
     $('#prefWaterQualityHalf1').find("#slide5").hide();
     $('#prefWaterQualityHalf1').find("#slide3").show();
     $('#prefWaterQualityHalf2').find("#slide5").hide();
     $('#prefWaterQualityHalf2').find("#slide3").show();
     $('#prefWaterQualityHalf3').find("#slide5").hide();
     $('#prefWaterQualityHalf3').find("#slide3").show();
    $('#prefTankCleaning').find("#slide5").hide();
     $('#prefTankCleaning').find("#slide3").show();
    
      $('#CorpGraph').find("#slide5").hide();
     $('#CorpGraph').find("#slide3").show();
     $('#waterQuality').find("#slide5").hide();
     $('#waterQuality').find("#slide3").show();
     $('#WaterQualityHalf1').find("#slide5").hide();
     $('#WaterQualityHalf1').find("#slide3").show();
     $('#WaterQualityHalf2').find("#slide5").hide();
     $('#WaterQualityHalf2').find("#slide3").show();
    $('#WaterQualityHalf3').find("#slide5").hide();
     $('#WaterQualityHalf3').find("#slide3").show();
    $('#TankCleaning').find("#slide5").hide();
     $('#TankCleaning').find("#slide3").show();
        }
    
}









function showWaterTurbidity(type,callType) {
    if (type == 'monthly') {       
       
         ShowHideSlider(false);
        if(callType==null)
        {
            $.mobile.changePage('#waterQuality', { transition: 'slide' });
        }
        else
        {
            $.mobile.changePage('#prefwaterQuality', { transition: 'slide' });
            isSlide5visible=false;
            }
return false;
    }
    else {      
        ShowHideSlider(true);
       
        if(callType==null)
        {
            $.mobile.changePage('#WaterQualityHalf1', { transition: 'slide' });
        }
        else
        {
            $.mobile.changePage('#prefWaterQualityHalf1', { transition: 'slide' });
            isSlide5visible=true;
            LoadWaterTurbidityHalfYearlyPref();
        }
        
        return false;
    }
}



function LoadWaterTurbidityHalfYearly(ulbname) {

    var type = window.localStorage.getItem("ULBtype");
    // to get exapned ULB name
    var ulbname = window.localStorage.getItem("ULBname");
    switch ($.trim(type)) {
        case "CorpChart":

            $(ulbDetails).find("CorporationData").each(function () {
                $(this).find("Corporation[Name='" + ulbname + "']").each(function () {
                    $(this).find("WaterQuality").find("HalfYearly").find("Ecoli").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                           $("#EcoliMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#EcoliMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');
                            DrawDropChartHalfYearly('ecoli', $(this).attr('Value'), $("#EcoliMonth" + index).find('.water-drop'), $("#EcoliMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("PH").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#PHMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            //  $("#PHMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');
                            DrawDropChartHalfYearly('PH', $(this).attr('Value'), $("#PHMonth" + index).find('.water-drop'), $("#PHMonth" + index));


                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Turbidity").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#TurbidityMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            //$("#TurbidityMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('turbidity', $(this).attr('Value'), $("#TurbidityMonth" + index).find('.water-drop'), $("#TurbidityMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Dissolved").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#DissolvedMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#DissolvedMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('dissolved', $(this).attr('Value'), $("#DissolvedMonth" + index).find('.water-drop'), $("#DissolvedMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Hardness").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#HardnessMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#HardnessMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('hardness', $(this).attr('Value'), $("#HardnessMonth" + index).find('.water-drop'), $("#HardnessMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Fluorides").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#FluoridesMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#FluoridesMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('fluorides', $(this).attr('Value'), $("#FluoridesMonth" + index).find('.water-drop'), $("#FluoridesMonth" + index));

                        });
                    });

                });
            });
            break;
        case "Municipalities":

            $(ulbDetails).find("MunicipalityData").each(function () {
                $(this).find("Municipality[Name='" + ulbname + "']").each(function () {
                    $(this).find("WaterQuality").find("HalfYearly").find("Ecoli").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#EcoliMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#EcoliMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');
                            DrawDropChartHalfYearly('ecoli', $(this).attr('Value'), $("#EcoliMonth" + index).find('.water-drop'), $("#EcoliMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("PH").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#PHMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#PHMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');
                            DrawDropChartHalfYearly('PH', $(this).attr('Value'), $("#PHMonth" + index).find('.water-drop'), $("#PHMonth" + index));


                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Turbidity").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#TurbidityMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#TurbidityMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('turbidity', $(this).attr('Value'), $("#TurbidityMonth" + index).find('.water-drop'), $("#TurbidityMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Dissolved").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#DissolvedMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            //  $("#DissolvedMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('dissolved', $(this).attr('Value'), $("#DissolvedMonth" + index).find('.water-drop'), $("#DissolvedMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Hardness").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#HardnessMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#HardnessMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('hardness', $(this).attr('Value'), $("#HardnessMonth" + index).find('.water-drop'), $("#HardnessMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Fluorides").each(function () {
                        var index = 0;

                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#FluoridesMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#FluoridesMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('fluorides', $(this).attr('Value'), $("#FluoridesMonth" + index).find('.water-drop'), $("#FluoridesMonth" + index));

                        });
                    });
                });
            });

            break;
    }
}






function LoadWaterTurbidityHalfYearlyPref() {

    var type = window.localStorage.getItem("ULBtype");
    // to get exapned ULB name
    var ulbname = window.localStorage.getItem("ULBname");
    switch ($.trim(type)) {
        case "CorpChart":

            $(ulbDetails).find("CorporationData").each(function () {
                $(this).find("Corporation[Name='" + ulbname + "']").each(function () {
                    $(this).find("WaterQuality").find("HalfYearly").find("Ecoli").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                           $("#EcoliMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#EcoliMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');
                            DrawDropChartHalfYearly('ecoli', $(this).attr('Value'), $("#prefWaterQualityHalf1").find("#EcoliMonth" + index).find('.water-drop'), $("#EcoliMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("PH").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#PHMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            //  $("#PHMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');
                            DrawDropChartHalfYearly('PH', $(this).attr('Value'), $("#prefWaterQualityHalf1").find("#PHMonth" + index).find('.water-drop'), $("#prefWaterQualityHalf1").find("#PHMonth" + index));


                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Turbidity").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#TurbidityMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            //$("#TurbidityMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('turbidity', $(this).attr('Value'), $("#prefWaterQualityHalf2").find("#TurbidityMonth" + index).find('.water-drop'), $("#prefWaterQualityHalf2").find("#TurbidityMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Dissolved").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#DissolvedMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#DissolvedMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('dissolved', $(this).attr('Value'), $("#prefWaterQualityHalf2").find("#DissolvedMonth" + index).find('.water-drop'), $("#prefWaterQualityHalf2").find("#DissolvedMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Hardness").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#HardnessMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#HardnessMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('hardness', $(this).attr('Value'), $("#prefWaterQualityHalf3").find("#HardnessMonth" + index).find('.water-drop'), $("#prefWaterQualityHalf3").find("#HardnessMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Fluorides").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#FluoridesMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#FluoridesMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('fluorides', $(this).attr('Value'), $("#prefWaterQualityHalf3").find("#FluoridesMonth" + index).find('.water-drop'), $("#prefWaterQualityHalf3").find("#FluoridesMonth" + index));

                        });
                    });

                });
            });
            break;
        case "Municipalities":

            $(ulbDetails).find("MunicipalityData").each(function () {
                $(this).find("Municipality[Name='" + ulbname + "']").each(function () {
                    $(this).find("WaterQuality").find("HalfYearly").find("Ecoli").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#EcoliMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#EcoliMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');
                            DrawDropChartHalfYearly('ecoli', $(this).attr('Value'), $("#prefWaterQualityHalf1").find("#EcoliMonth" + index).find('.water-drop'), $("#prefWaterQualityHalf1").find("#EcoliMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("PH").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#PHMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#PHMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');
                            DrawDropChartHalfYearly('PH', $(this).attr('Value'), $("#prefWaterQualityHalf1").find("#PHMonth" + index).find('.water-drop'),  $("#prefWaterQualityHalf1").find("#PHMonth" + index));


                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Turbidity").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#TurbidityMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#TurbidityMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('turbidity', $(this).attr('Value'), $("#prefWaterQualityHalf2").find("#TurbidityMonth" + index).find('.water-drop'), $("#prefWaterQualityHalf2").find("#TurbidityMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Dissolved").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#DissolvedMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            //  $("#DissolvedMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('dissolved', $(this).attr('Value'), $("#prefWaterQualityHalf2").find("#DissolvedMonth" + index).find('.water-drop'), $("#prefWaterQualityHalf2").find("#DissolvedMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Hardness").each(function () {
                        var index = 0;
                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#HardnessMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#HardnessMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('hardness', $(this).attr('Value'), $("#prefWaterQualityHalf3").find("#HardnessMonth" + index).find('.water-drop'), $("#prefWaterQualityHalf3").find("#HardnessMonth" + index));

                        });
                    });

                    $(this).find("WaterQuality").find("HalfYearly").find("Fluorides").each(function () {
                        var index = 0;

                        $(this).find("Month").each(function () {
                            index = index + 1;
                            $("#FluoridesMonth" + index).find('.water-level-head')[0].innerHTML = $(this).attr('Name');
                            // $("#FluoridesMonth" + index).find('span')[0].innerHTML = $(this).attr('Value');

                            DrawDropChartHalfYearly('fluorides', $(this).attr('Value'), $("#prefWaterQualityHalf3").find("#FluoridesMonth" + index).find('.water-drop'), $("#prefWaterQualityHalf3").find("#FluoridesMonth" + index));

                        });
                    });
                });
            });

            break;
    }
}








function DrawDropChartHalfYearly(type, value, container, spanctrl) {

    var percentage;
    switch (type.toLowerCase()) {
        case 'ecoli':
            if (value.toLowerCase() == 'negative') {
                container.css('height', '35%');
            }
            else {
                container.css('height', '100%');
            }
            break;
        case 'ph':
            var height = GetHeight(value, 7, 8.5, 'ph');
            container.css('height', height + 'px');
            break;
        case 'turbidity':
            var height = GetHeight(value, 0, 10, 'turbidity');
            container.css('height', height + 'px');
            break;
        case 'dissolved':
            var height = GetHeight(value, 0, 15, 'dissolved');
            container.css('height', height + 'px');
            break;
        case 'hardness':
            var height = GetHeight(value, 0, 15, 'hardness');
            container.css('height', height + 'px');
            break;
        case 'fluorides':
            var height = GetHeight(value, 0, 15, 'fluorides');
            container.css('height', height + 'px');
            break;
    }
    if (type.toLowerCase() != 'ecoli') {
        spanctrl.find('span')[0].innerHTML = value;
    }
}
