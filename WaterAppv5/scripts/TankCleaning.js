

function GetTankCleaningData(datatype, type, isExpand, ULBName, detailsType) {
    $("#homepage").find("#error").text("");
    if (datatype == "Region") {
        datatype = 'region';
    }
    if (isExpand) {
        $("#homepage").find("div[data-role='content']").each(function () {
            $(this).find('#eFilter1').text('Group');
            $(this).find('#eFilter2').text('Details');
            $(this).find('#eFilter1').attr('onClick', "GetTankCleaningData('" + datatype + "','Daily',true,'" + ULBName + "',null)");
            $(this).find('#eFilter2').attr('onClick', "GetTankCleaningData('" + datatype + "','Daily',true,'" + ULBName + "','detail')");


        });
        ULBName = (ULBName == 'null') ? null : ULBName;

        if (detailsType == null) {
            $("#expandChart").find("#diveFilter2").removeClass('active');
            $("#expandChart").find("#diveFilter1").addClass('active');
        }
        else {
            $("#expandChart").find("#diveFilter1").removeClass('active');
            $("#expandChart").find("#diveFilter2").addClass('active');
        }

    }
    var xAxis = new Array();
    var yaxisObj = new Object();
     var comfort = new Array();
                    var poor = new Array();
                    var Papproval = new Array();
                    var Acute = new Array();
                    var Good = new Array();
                    
    var container = GetContainer('expand', type, null);
    switch ($.trim(datatype)) {
        case "Corporations":
            $(result).find("Corporations").each(function () {
              /*  if (isExpand) {*/
                    $(this).find("Chart").each(function () {
                        $(this).find("LPCD").find("Last3Days").find("Day").each(function () {
                            xAxis.push($(this).attr("Date"));
                            comfort.push(parseInt($(this).attr("Comfort")));
                            poor.push(parseInt($(this).attr("Poor")));
                            Papproval.push(parseInt($(this).attr("PendingApproval")));

                        });
                    });

                    CreateCleaningInput(comfort, poor, Papproval,null,null, xAxis);
              /*  }
                else {                   

                    $(this).find("Chart").each(function () {
                        $(this).find("LPCD").find("Last3Days").find("Day").each(function () {
                            xAxis.push($(this).attr("Date"));
                            comfort.push(parseInt($(this).attr("Comfort")));
                            poor.push(parseInt($(this).attr("Poor")));
                            Papproval.push(parseInt($(this).attr("PendingApproval")));

                        });
                    });

                    CreateCleaningInput(comfort, poor, Papproval,null,null, xAxis);

                }*/
            });
            break;
        case "region":
            $(result).find("Regions").each(function () {
                if (isExpand) {
                    if (detailsType != null) {
                        if (ULBName != null) {
                            $(result).find("Regions").find("RegionData").each(function () {
                                $(this).find("Region[Name='" + ULBName + "']").find("DistrictAll").find("Last3Days").find("Day").each(function () {
                                   xAxis.push($(this).attr("Date"));
                            comfort.push(parseInt($(this).attr("Comfortable")));
                            poor.push(parseInt($(this).attr("Poor")));
                            Papproval.push(parseInt($(this).attr("PendingApproval")));
                            Good.push(parseInt($(this).attr("Good")));
                            Acute.push(parseInt($(this).attr("Acute")));

                                });
                                CreateCleaningInput(comfort,poor,Papproval,Good,Acute,xAxis);
                            });
                        }
                        else {
                             $(this).find("RegionAll").each(function () {
                                $(this).find("LPCD").find("Last3Days").find("Day").each(function () {
                                    xAxis.push($(this).attr("Date"));
                            comfort.push(parseInt($(this).attr("Comfortable")));
                            poor.push(parseInt($(this).attr("Poor")));
                            Papproval.push(parseInt($(this).attr("PendingApproval")));
                            Good.push(parseInt($(this).attr("Good")));
                            Acute.push(parseInt($(this).attr("Acute")));
                                });
                            });
                            
                        }

                        CreateCleaningInput(Cleaneddata, Scheduleddata, xAxis);
                    }
                    else {
                        var cleanedInput = 0;
                        var scheduledInput = 0;
                        if (ULBName != null && ULBName != "") {
                            $(result).find("Regions").find("RegionData").each(function () {
                                $(this).find("Region[Name='" + ULBName + "']").find("DistrictAll").find("LPCD").find("Last3Days").find("Day").each(function () {
                                       xAxis.push($(this).attr("Date"));
                            comfort.push(parseInt($(this).attr("Comfortable")));
                            poor.push(parseInt($(this).attr("Poor")));
                            Papproval.push(parseInt($(this).attr("PendingApproval")));
                            Good.push(parseInt($(this).attr("Good")));
                            Acute.push(parseInt($(this).attr("Acute")));

                                });
                            });
                            CreateCleaningInput(comfort,poor,Papproval,Good,Acute,xAxis);
                        }
                        else {
                            $(this).find("RegionAll").each(function () {
                                $(this).find("LPCD").find("Last3Days").find("Day").each(function () {
                                    xAxis.push($(this).attr("Date"));
                            comfort.push(parseInt($(this).attr("Comfortable")));
                            poor.push(parseInt($(this).attr("Poor")));
                            Papproval.push(parseInt($(this).attr("PendingApproval")));
                            Good.push(parseInt($(this).attr("Good")));
                            Acute.push(parseInt($(this).attr("Acute")));
                                });
                            });
                            CreateCleaningInput(comfort,poor,Papproval,Good,Acute,xAxis);
                        }

                       
                    }

                }
                else {
                    var cleanedInput = 0;
                    var scheduledInput = 0;
                    if (ULBName != null) {
                        $(result).find("Regions").find("RegionData").each(function () {
                            $(this).find("Region[Name='" + ULBName + "']").find("DistrictAll").find("Last3Days").find("Day").each(function () {
                                 xAxis.push($(this).attr("Date"));
                            comfort.push(parseInt($(this).attr("Comfortable")));
                            poor.push(parseInt($(this).attr("Poor")));
                            Papproval.push(parseInt($(this).attr("PendingApproval")));
                            Good.push(parseInt($(this).attr("Good")));
                            Acute.push(parseInt($(this).attr("Acute")));

                            });
                        });
                    }
                    else {
                       $(this).find("RegionAll").each(function () {
                                $(this).find("LPCD").find("Last3Days").find("Day").each(function () {
                                    xAxis.push($(this).attr("Date"));
                            comfort.push(parseInt($(this).attr("Comfortable")));
                            poor.push(parseInt($(this).attr("Poor")));
                            Papproval.push(parseInt($(this).attr("PendingApproval")));
                            Good.push(parseInt($(this).attr("Good")));
                            Acute.push(parseInt($(this).attr("Acute")));
                                });
                            });
                            
                    }

                    CreateCleaningInput(comfort,poor,Papproval,Good,Acute,xAxis);
                }
            });
            break;
        case "district":
            $(result).find("Municipalities").each(function () {
                if (isExpand) {
                    if (detailsType != null) {
                        $(this).find("DistrictData").find("District[Name='" + ULBName + "']").each(function () {
                            $(this).find("LPCD").find("Last3Days").find("Day").each(function () {
                                    xAxis.push($(this).attr("Date"));
                            comfort.push(parseInt($(this).attr("Comfortable")));
                            poor.push(parseInt($(this).attr("Poor")));
                            Papproval.push(parseInt($(this).attr("PendingApproval")));
                            Good.push(parseInt($(this).attr("Good")));
                            Acute.push(parseInt($(this).attr("Acute")));
                                });

                        });
                        CreateCleaningInput(comfort,poor,Papproval,Good,Acute,xAxis);
                    }
                    else {
                        

                       $(result).find("DistrictData").find("District[Name='" + ULBName + "']").each(function () {                                   
                                  $(this).find("LPCD").find("Last3Days").find("Day").each(function () {
                                    xAxis.push($(this).attr("Date"));
                            comfort.push(parseInt($(this).attr("Comfortable")));
                            poor.push(parseInt($(this).attr("Poor")));
                            Papproval.push(parseInt($(this).attr("PendingApproval")));
                            Good.push(parseInt($(this).attr("Good")));
                            Acute.push(parseInt($(this).attr("Acute")));
                                });
                        });

                         CreateCleaningInput(comfort,poor,Papproval,Good,Acute,xAxis);
                    }
                }
                else {
                    var cleanedInput = 0;
                    var scheduledInput = 0;

                    $(this).find("DistrictData").find("District[Name='" + ULBName + "']").each(function () {
                       $(this).find("LPCD").find("Last3Days").find("Day").each(function () {
                                    xAxis.push($(this).attr("Date"));
                            comfort.push(parseInt($(this).attr("Comfortable")));
                            poor.push(parseInt($(this).attr("Poor")));
                            Papproval.push(parseInt($(this).attr("PendingApproval")));
                            Good.push(parseInt($(this).attr("Good")));
                            Acute.push(parseInt($(this).attr("Acute")));
                                });
                    });

                    CreateCleaningInput(comfort,poor,Papproval,Good,Acute,xAxis);
                }
            });
            break;
    }

   function CreateCleaningInput(Comfort, Poor,PendingApproval,Good,Acute, xAxis) {

        var yAxis = new Array();

        if (window.localStorage.getItem("ULBtype") == 'Corporations') {
            yaxisObj = new Object()
            yaxisObj.name = "Comfortable (70-109 Lpcd)";
            yaxisObj.data = Comfort;
            yaxisObj.color = '#c9e726';
            yAxis.push(yaxisObj);

            yaxisObj = new Object();
            yaxisObj.name = "Poor (Below 70 Lpcd)";
            yaxisObj.data = Poor;
            yaxisObj.color = '#F98702';
            yAxis.push(yaxisObj);

            yaxisObj = new Object();
            yaxisObj.name = "Pending Approval";
            yaxisObj.data = PendingApproval;
            yaxisObj.color = '#666666';
            yAxis.push(yaxisObj);
        }
        else {

         yaxisObj = new Object();
            yaxisObj.name = "Good (Above 90  Lpcd)";
            yaxisObj.data = Good;
            yaxisObj.color = '#6cc04e';
            yAxis.push(yaxisObj);

            yaxisObj = new Object()
            yaxisObj.name = "Comfortable (40-89 Lpcd)";
            yaxisObj.data = Comfort;
            yaxisObj.color = '#c9e726';
            yAxis.push(yaxisObj);


            yaxisObj = new Object();
            yaxisObj.name = "Poor(20-39 Lpcd)";
            yaxisObj.data = Poor;
            yaxisObj.color = '#F98702';
            yAxis.push(yaxisObj);
           

            yaxisObj = new Object();
            yaxisObj.name = "Acute (Below 20 Lpcd)";
            yaxisObj.data = Acute;
            yaxisObj.color = '#e94541';
            yAxis.push(yaxisObj);

            yaxisObj = new Object();
            yaxisObj.name = "Pending Approval";
            yaxisObj.data = PendingApproval;
            yaxisObj.color = '#666666';
            yAxis.push(yaxisObj);
        }


        if (window.localStorage.getItem("isExpand") == null) {
            StackChart(xAxis, yAxis, '', 'No of ULBs', 'barChartCleaning');
        }
        else {
            StackChart(xAxis, yAxis, '', 'No of ULBs', 'chartContainer');
        }
    }
}

function StackChart(xAxis, yAxis,xAxisHeading,yAxisHeading,container) {
    
$("#stackChartContainer").show();
$("#chartContainer").show();
    $("#homepage").find("#error").text("");
$(".chart-expand").css("width","955");
    $(".chart-expand").css("height","370");
   
    $("#diveFilter1").hide();
    $("#diveFilter2").hide();

     var  wid=(window.localStorage.getItem("isExpand")==null)? 400:955;
     var  hei=(window.localStorage.getItem("isExpand")==null)? 195:370; 
     var  ledgendWid= (window.localStorage.getItem("isExpand")==null)?25: 35;
     var  ledgendHei=(window.localStorage.getItem("isExpand")==null)?13: 15;
     var  showlegend=(window.localStorage.getItem("isExpand")==null)?false: false;
    var fontsize=(window.localStorage.getItem("isExpand")==null)?"14px": "16px"; 
     var margin=new Array();
     if(window.localStorage.getItem("isExpand")==null)
     {
        margin.push(40);
        margin.push(10);
        margin.push(30);
        margin.push(60);
     }
     else{
      margin.push(40);
        margin.push(10);
        margin.push(60);
        margin.push(60);
     }
     //Hide show legend
      $("#stackChartContainer").find(".bottomlegends").find("#legend1").hide();
      $("#stackChartContainer").find(".bottomlegends").find("#legend2").hide();
      $("#stackChartContainer").find(".bottomlegends").find("#legend3").hide();
      $("#stackChartContainer").find(".bottomlegends").find("#legend4").hide();
      $("#stackChartContainer").find(".bottomlegends").find("#legend5").hide();
      $("#stackChartContainer").find(".bottomlegends").find("#legend6").hide();
      $("#stackChartContainer").find(".bottomlegends").find("#legend7").hide();
     for(var i=1;i<=yAxis.length;i++)
     {
      $("#stackChartContainer").find(".bottomlegends").find("#legend"+i).show();
      $("#stackChartContainer").find(".bottomlegends").find("#legend"+i).find(".legend"+i).css("background",yAxis[i-1].color);
      $("#stackChartContainer").find(".bottomlegends").find("#legend"+i).find("#legendvalue"+i).text(yAxis[i-1].name);
     }

        $('#'+container).highcharts({
            chart: {
                type: 'column',
                height: hei,
                width: wid,
                margin:margin
            },
            credits:
            {
                enabled: false
            },
            title: {
               text: '',
               align: "left",
               margin:'40px',
               style: {       
                    fontSize: fontsize
                    }
            },
            xAxis: {
                categories: xAxis,
                labels: {                     
                align: 'center',
                style: {       
                    fontSize: fontsize
                    }
                }
                
            },
            yAxis: {
                min: 0,                
                title: {
                    text: yAxisHeading                   
                },
                labels:
                {
                    formatter: function () {
                        return '<span style="font-size: '+fontsize+';>' + this.value + '</span>';
                        }
                },
                stackLabels: {
                    enabled: false,
                    style: {                        
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                         
                    },
                   
                }
            },
            legend: {
                enabled:showlegend,               
                
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
                borderColor: '#CCC',
                borderWidth: 0,
                shadow: false,                
                align: 'right',
                x: 60,
                verticalAlign: 'top',
                align:'center',
                y: 5,
               padding:5,
               symbolHeight:ledgendHei,
               symbolWidth:ledgendWid,
              
            width: (yAxisHeading=='Tanks')?300:500
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
             series: {
	                pointWidth: 30,
                    point:
            {
            events: {           
                                        click: function(e) { 
                                         //   showError();
                                            return false;
                                        }
                                    }
            }
            
	            },                
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                         formatter: function(){
                                        var val = this.y;
                    if (val <1) {
                        return '';
                    }
                    return val;
                },
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white' ,                       
                        style: {       
                    fontSize: fontsize
                    }
                    },
                   
                    colors: (
   '#c9e726', 
   '#666666', 
   '#1aadce', 
   '#f28f43', 
   '#2f7ed8', 
   '#492970'),
   
                }
            },
            series: yAxis,
            
        });
    
    }