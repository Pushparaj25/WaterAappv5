var type = "";
var ulbname = "";
var result;



function LoadTankCount(callType) {
    
    type = window.localStorage.getItem("ULBtype");
    ulbname = window.localStorage.getItem("ULBname");    
    $(".splytrend-head").text(ulbname + " No of tanks cleaned");



    var cleanedDate = "";
    var scheduledDate = "";
    var TankData = "";
    var ScheduledCount = 0;
    var CleanedCount = 0;
    var TankCount = "";
    
    
    
    switch ($.trim(type)) {
        case "CorpChart":
            $(ulbDetails).find("CorporationData").each(function () {
                $(this).find("Corporation[Name='" + ulbname + "']").each(function () {
                    TankCount = $(this).find("Tank").length;
                    $(this).find("Tank").each(function () {


                  
                        cleanedDate = $(this).attr("CleanedDate");
                        if (cleanedDate != '-') {
                            CleanedCount = parseInt(CleanedCount) + 1;
                        }
                        scheduledDate = $(this).attr("ScheduledDate");
                        if (scheduledDate != '-') {
                            ScheduledCount = parseInt(ScheduledCount) + 1;
                        }
                        if (TankCount >0) {
                            Sourcename = $(this).attr("Name");

                           
                        }
                      
                    });
                    
                 
                });
            });


            
        if(callType==null)
        {
            
            
            $("#TankCleaning").find(".tank-count").empty();
            $("#TankCleaning").find(".tank-count").append(TankCount);

            $("#TankCleaning").find(".tank-cleaned").empty();
            $("#TankCleaning").find(".tank-cleaned").append(CleanedCount);

            $("#TankCleaning").find(".tank-scheduled").empty();
            $("#TankCleaning").find(".tank-scheduled").append(ScheduledCount);
            $("#TankCleaning").find("#TankulbName").text(ulbname);
            }
        else
        {
            
            
            $("#prefTankCleaning").find(".tank-count").empty();
            $("#prefTankCleaning").find(".tank-count").append(TankCount);

            $("#prefTankCleaning").find(".tank-cleaned").empty();
            $("#prefTankCleaning").find(".tank-cleaned").append(CleanedCount);

            $("#prefTankCleaning").find(".tank-scheduled").empty();
            $("#prefTankCleaning").find(".tank-scheduled").append(ScheduledCount);
            $("#prefTankCleaning").find("#TankulbName").text(ulbname);
 
        }
          
        case "Municipalities":
            $(ulbDetails).find("MunicipalityData").each(function () {
                $(this).find("Municipality[Name='" + ulbname + "']").find("TankData").each(function () {
                    TankCount = $(this).find("Tank").length;
                    $(this).find("Tank").each(function () {
                    
                        cleanedDate = $(this).attr("CleanedDate");
                        if (cleanedDate != '-') {
                            CleanedCount = parseInt(CleanedCount) + 1;
                        }
                        scheduledDate = $(this).attr("ScheduledDate");
                        if (scheduledDate != '-') {
                            ScheduledCount = parseInt(ScheduledCount) + 1;
                        }
                       
                     
                    });
                    
                });
            });
        
                        
        if(callType==null)
        {
            

            
            $("#TankCleaning").find(".tank-count").empty();
            $("#TankCleaning").find(".tank-count").append(TankCount);

            $("#TankCleaning").find(".tank-cleaned").empty();
            $("#TankCleaning").find(".tank-cleaned").append(CleanedCount);

            $("#TankCleaning").find(".tank-scheduled").empty();
            $("#TankCleaning").find(".tank-scheduled").append(ScheduledCount);
            $("#TankCleaning").find("#TankulbName").text(ulbname);
           
            
            }
        else
        {
            

            
            $("#prefTankCleaning").find(".tank-count").empty();
            $("#prefTankCleaning").find(".tank-count").append(TankCount);

            $("#prefTankCleaning").find(".tank-cleaned").empty();
            $("#prefTankCleaning").find(".tank-cleaned").append(CleanedCount);

            $("#TankCleaning").find(".tank-scheduled").empty();
            $("#TankCleaning").find(".tank-scheduled").append(ScheduledCount);
            }
            $("#TankCleaning").find("#TankulbName").text(ulbname);
            break;     
     
    }
}


function LoadTank(callType,date) {
    
    type = window.localStorage.getItem("ULBtype");
    ulbname = window.localStorage.getItem("ULBname");
    
    $(".splytrend-head").text(ulbname + " No of tanks cleaned");



    var cleanedDate = "";
    var scheduledDate = "";
    var TankData = "";
    var ScheduledCount = 0;
    var CleanedCount = 0;
    var TankCount = "";
    var Sourcename = "";
    var Sourcestruc = "<div><table style=width:99%><thead><td style=width:45%;text-align:center;><img style='margin-right:50px; margin-top:3px;'  title='View Calendar' onclick='DisplayCalendar();' src='images/Previous.jpg'/>Tank Name</td><td style=width:25%;font-weight:bold!important;text-align:center;'><span>Scheduled Date</span></td><td style=width:25%;font-weight:bold!important;text-align:center;><span>Cleaned Date</span></td></thead></table></div><div></table>";
    
    switch ($.trim(type)) {
        case "CorpChart":        

            var total = 0;
            var Designedtotal = 0;
            $(ulbDetails).find("CorporationData").each(function () {
                $(this).find("Corporation[Name='" + ulbname + "']").each(function () {
                    TankCount = $(this).find("Tank").length;
                    $(this).find("Tank").each(function () {


                    if($(this).attr("ScheduledDate")==date ||$(this).attr("CleanedDate")==date)
                    {
                        cleanedDate = $(this).attr("CleanedDate");
                        if (cleanedDate != '-') {
                            CleanedCount = parseInt(CleanedCount) + 1;
                        }
                        scheduledDate = $(this).attr("ScheduledDate");
                        if (scheduledDate != '-') {
                            ScheduledCount = parseInt(ScheduledCount) + 1;
                        }
                        if (TankCount >0) {
                            Sourcename = $(this).attr("Name");

                            TankData = TankData + "<tr><td style='text-indent: 0%;'>" + Sourcename + "</td><td style='text-align: center;' >" + scheduledDate + "</td><td style='text-align: center;'>" +cleanedDate + "</td></tr>";
                        }
                      }
                    });
                    
                 
                });
            });


            Sourcestruc = Sourcestruc + TankData + "</table></div>";
        if(callType==null)
        {
            $("#TankCleaning").find("#monitorTable").empty();
            $("#TankCleaning").find("#monitorTable").append(Sourcestruc);
            //var srctotal = '<span class="sply-MLD">' + total + '</span><span class="mld">MLD</span>';
           /*  var srctotal = '<span class="sply-MLD">' + TankCount + '</span>';
           $("#TankCleaning").find(".tank-count").empty();
            $("#TankCleaning").find(".tank-count").append(TankCount);

            $("#TankCleaning").find(".tank-cleaned").empty();
            $("#TankCleaning").find(".tank-cleaned").append(CleanedCount);

            $("#TankCleaning").find(".tank-scheduled").empty();
            $("#TankCleaning").find(".tank-scheduled").append(ScheduledCount);
            $("#TankCleaning").find("#TankulbName").text(ulbname);*/
            }
        else
        {
            $("#prefTankCleaning").find("#monitorTable").empty();
            $("#prefTankCleaning").find("#monitorTable").append(Sourcestruc);
            //var srctotal = '<span class="sply-MLD">' + total + '</span><span class="mld">MLD</span>';
         /*   var srctotal = '<span class="sply-MLD">' + TankCount + '</span>';
            $("#prefTankCleaning").find(".tank-count").empty();
            $("#prefTankCleaning").find(".tank-count").append(TankCount);

            $("#prefTankCleaning").find(".tank-cleaned").empty();
            $("#prefTankCleaning").find(".tank-cleaned").append(CleanedCount);

            $("#prefTankCleaning").find(".tank-scheduled").empty();
            $("#prefTankCleaning").find(".tank-scheduled").append(ScheduledCount);*/
            $("#prefTankCleaning").find("#TankulbName").text(ulbname);
 
        }
          //  GetTankCleaningdetails(ulbname,type,callType);
            /* }
            });*/
            break;
        case "Municipalities":
            /*$.ajax({
            type: "GET",
            //url: "waterappold.xml",
            url: filepath,
            async: false,
            dataType: "xml",
            success: function (xml) {*/
            var Sourcename = "";
            var SourceQty = "";
            var TankData = "";
            var frequencyVal = "";
            var freqvalInwords = "";
            var designedQty = "";
            var Sourcestruc = "<div><table style=width:99%><thead><td style=width:45%;text-align:cente;><img style='margin-right:50px; margin-top:3px;'  title='View Calendar' onclick='DisplayCalendar();' src='images/Previous.jpg'/>Tank Name</td><td style=width:25%;font-weight:bold!important;text-align:center;'><span>Scheduled Date</span></td><td style=width:25%;font-weight:bold!important;text-align:center;><span>Cleaned Date</span></td></thead></table></div>";

            var total = 0;
            var Designedtotal = 0;

            $(ulbDetails).find("MunicipalityData").each(function () {
                $(this).find("Municipality[Name='" + ulbname + "']").find("TankData").each(function () {
                    TankCount = $(this).find("Tank").length;
                    $(this).find("Tank").each(function () {
                     if($(this).attr("ScheduledDate")==date ||$(this).attr("CleanedDate")==date)
                    {
                        cleanedDate = $(this).attr("CleanedDate");
                        if (cleanedDate != '-') {
                            CleanedCount = parseInt(CleanedCount) + 1;
                        }
                        scheduledDate = $(this).attr("ScheduledDate");
                        if (scheduledDate != '-') {
                            ScheduledCount = parseInt(ScheduledCount) + 1;
                        }
                        if (TankCount >0) {
                            Sourcename = $(this).attr("Name");

                            TankData = TankData + "<tr><td style='text-indent: 0%;'>" + Sourcename + "</td><td style='text-align: center;' >" +scheduledDate  + "</td><td style='text-align: center;'>" + cleanedDate + "</td></tr>";
                        }
                     }
                    });
                    
                });
            });
        
            if (TankCount != 0) {
                Sourcestruc = Sourcestruc + TankData + "</table></div>";
                if(callType==null)
                {
                $("#TankCleaning").find("#monitorTable").empty();
                $("#TankCleaning").find("#monitorTable").append(Sourcestruc);
                //var srctotal = '<span class="sply-MLD">' + total + '</span><span class="mld">MLD</span>';
                var srctotal = '<span class="sply-MLD">' + total + '</span><span class="mld">MLD</span><div class="desigdiv"><span class="designedqty">Designed Qty- ' + Designedtotal + '</span><span class="desigmld">MLD</span></div>';
                $("#TankCleaning").find(".sply-lpcd").empty();
                $("#TankCleaning").find(".sply-lpcd").append(srctotal);
                    $("#TankCleaning").find("#TankulbName").text(ulbname);
                    }
                else
                {
                    $("#prefTankCleaning").find("#monitorTable").empty();
                $("#prefTankCleaning").find("#monitorTable").append(Sourcestruc);
                //var srctotal = '<span class="sply-MLD">' + total + '</span><span class="mld">MLD</span>';
                var srctotal = '<span class="sply-MLD">' + total + '</span><span class="mld">MLD</span><div class="desigdiv"><span class="designedqty">Designed Qty- ' + Designedtotal + '</span><span class="desigmld">MLD</span></div>';
                $("#prefTankCleaning").find(".sply-lpcd").empty();
                $("#prefTankCleaning").find(".sply-lpcd").append(srctotal);
                    $("#prefTankCleaning").find("#TankulbName").text(ulbname);
                    }
            }
            else {
                Sourcestruc = Sourcestruc + "<tr><td>No data available</td><td></td></tr></table>";
                 if(callType==null)
                {
                $("#TankCleaning").find("#monitorTable").empty();
                $("#TankCleaning").find("#monitorTable").append(Sourcestruc);
                //var srctotal1 = '<span class="sply-MLD">' + total + '</span><span class="mld">MLD</span>';
                var srctotal1 = '<span class="sply-MLD"></span><span class="mld"></span><div class="desigdiv"><span class="designedqty">Designed Qty- ' + Designedtotal + '</span><span class="desigmld">MLD</span></div>';
                $("#TankCleaning").find(".sply-lpcd").empty();
                $("#TankCleaning").find(".sply-lpcd").append(srctotal1);
                    }
                else
                {
                    $("#prefTankCleaning").find("#monitorTable").empty();
                $("#prefTankCleaning").find("#monitorTable").append(Sourcestruc);
                //var srctotal1 = '<span class="sply-MLD">' + total + '</span><span class="mld">MLD</span>';
                var srctotal1 = '<span class="sply-MLD"></span><span class="mld"></span><div class="desigdiv"><span class="designedqty">Designed Qty- ' + Designedtotal + '</span><span class="desigmld">MLD</span></div>';
                $("#prefTankCleaning").find(".sply-lpcd").empty();
                $("#prefTankCleaning").find(".sply-lpcd").append(srctotal1);
                    }
            }
        if(callType==null)
        {
          /*  $("#TankCleaning").find(".Freq-lpcd").empty();
            $("#TankCleaning").find(".Freq-lpcd").append(freqvalInwords);

            var srctotal = '<span class="sply-MLD">' + TankCount + '</span>';
            $("#TankCleaning").find(".tank-count").empty();
            $("#TankCleaning").find(".tank-count").append(TankCount);

            $("#TankCleaning").find(".tank-cleaned").empty();
            $("#TankCleaning").find(".tank-cleaned").append(CleanedCount);

            $("#TankCleaning").find(".tank-scheduled").empty();
            $("#TankCleaning").find(".tank-scheduled").append(ScheduledCount);*/
           GetTankCleaningdetails(ulbname, type,callType);
            
            }
        else
        {
          /*   $("#prefTankCleaning").find(".Freq-lpcd").empty();
            $("#prefTankCleaning").find(".Freq-lpcd").append(freqvalInwords);

            var srctotal = '<span class="sply-MLD">' + TankCount + '</span>';
            $("#prefTankCleaning").find(".tank-count").empty();
            $("#prefTankCleaning").find(".tank-count").append(TankCount);

            $("#prefTankCleaning").find(".tank-cleaned").empty();
            $("#prefTankCleaning").find(".tank-cleaned").append(CleanedCount);

            $("#prefTankCleaning").find(".tank-scheduled").empty();
            $("#prefTankCleaning").find(".tank-scheduled").append(ScheduledCount);*/
            }
            //GetTankCleaningdetails(ulbname, type,callType);
            break;     
     
    }
}

function GetTankCleaningdetails(ULB, type,callType) {
    
    var ULbLPCD = [];
    var XAXIS = [];
  if (type == 'Corporations' || type == "CorpChart") {
        $(ulbDetails).find('CorporationData').find("Corporation[Name='" + ulbname + "']").find('TankCleaningChart').each(function () {
            $(this).find('Day').each(function () {

                ULbLPCD.push(parseInt($(this).attr("value")));
                XAXIS.push($(this).attr("Name"));
            });
        });
    }
    else {
        $(ulbDetails).find("Municipality[Name='" + ulbname + "']").find('TankCleaningChart').each(function () {
            $(this).find('Day').each(function () {

                ULbLPCD.push(parseInt($(this).attr("value")));
                XAXIS.push($(this).attr("Name"));
            });
        });
    }

    LoadTankCleaningChart(ULbLPCD,XAXIS,'Tank cleaning Count',callType);
}


function LoadTankCleaningChart(ULbLPCD,XAXIS,charttype,callType) {
    
    var id="";
    if(callType==null)
    {
        id= 'TankCleaning';
        }
    else
    {
       id= 'prefTankCleaning';
        }
    
    $(function () {
        $("#"+id).find('#tankCleaningChart').highcharts({
            chart: {
                type: 'spline',
                 width:parseInt(450),
                 height:parseInt(290),
            },
            credits: {
                            enabled: false
                        },
            title: {
                text: 'Tanks',
                align: 'left',
                margin:40,
                style:{
                   fontSize: '16px'
                }
            },
            xAxis: {

                title: {
                    text: 'Last 30 days',
                    style:{
                   fontSize: '16px'
                }
                },
               // categories: XAXIS,
                labels: {
                    formatter: function () {
                      //  return (this.value==0)?1:this.value+1;
                        return this.value/1;
                    },
                    style:{
                   fontSize: '16px',
                   padding:'3px'
                }

                }
            },
            yAxis: {
            min:0,
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    },
                    style:{
                   fontSize: '16px'
                }
                }
            },
            tooltip: {
                formatter: function () {
                    //return this.series.name + ' produced <b>' + this.point.y + '</b>';
                    return 'Cleaned: <b>' + this.point.y + '</b>';
                }
            },
            plotOptions: {
                area: {
                    pointStart: 0,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    }
                }
            },
            series: [
                                {
                                    showInLegend: false,
                                    name: ulbname,
                                    color: '#0066cc',
                                    data: ULbLPCD
                                }
                            ]
        });
    });
}
                


function LoadCalender(callType)
{
    
var Scheduled =new Array();
var Cleaned=new Array();
var Delayed =new Array();
var Halfdelayed =new Array();
var type = window.localStorage.getItem("ULBtype");
 var   ulbname = window.localStorage.getItem("ULBname");
    
    LoadTankCount(callType);
 GetTankCleaningdetails(ulbname, type,callType);
 if(type=='CorpChart')
 {
             $(ulbDetails).find("CorporationData").each(function () {
                $(this).find("Corporation[Name='" + ulbname + "']").find('TankCleaningChart').find('Day').each(function () {
                   if($(this).attr("Type")=="Scheduled")
                   {
                     Scheduled.push($(this).attr("Date"));
                   } 
                   if($(this).attr("Type")=="Cleaned")
                   {
                     Cleaned.push($(this).attr("Date"));
                   } 
                    if($(this).attr("Type")=="Delayed")
                   {
                     Delayed.push($(this).attr("Date"));
                   } 
                    if($(this).attr("Type")=="HalfDelayed")
                   {
                     Halfdelayed.push($(this).attr("Date"));
                   } 
                });            
                });
  }
 else{
        $(ulbDetails).find("MunicipalityData").each(function () {
        $(this).find("Municipality[Name='" + ulbname + "']").find('TankCleaningChart').find('Day').each(function () {
                 if($(this).attr("Type")=="Scheduled")
                   {
                     Scheduled.push($(this).attr("Date"));
                   } 
                   if($(this).attr("Type")=="Cleaned")
                   {
                     Cleaned.push($(this).attr("Date"));
                   } 
                    if($(this).attr("Type")=="Delayed")
                   {
                     Delayed.push($(this).attr("Date"));
                   } 
                    if($(this).attr("Type")=="HalfDelayed")
                   {
                     Halfdelayed.push($(this).attr("Date"));
                   } 

        });
            
        });
}


$("#tankcleaning").find("#dateControl").datepicker("destroy");

 $("#tankcleaning").find("#dateControl").datepicker({
    beforeShowDay: function(date){
        var string = jQuery.datepicker.formatDate('dd/mm/yy', date);
        
        if( Halfdelayed.indexOf(string) != -1)
        {
            
           return [true,'HalfDelayed',string ]
            
        }
        else  if( Delayed.indexOf(string) != -1)
        {
        return [true,'Delayed',string ]
        }
        else  if( Cleaned.indexOf(string) != -1)
        {
        return [true,'Cleaned',string ]
        }
        else  if(Scheduled.indexOf(string) != -1)
        {
        return [true,'Scheduled',string ]
        }
        else{
        return [false,'','' ]
        }
        },
        
      onSelect:function(e)
      {
          
        LoadTank(callType,e);
        $("#monitorTable").show();
        $("#dateControl").hide();
       
      }      
      
    });
    

}

function DisplayCalendar()
{
    $("#monitorTable").hide();
    $("#dateControl").show();
}