function GetIssuesDrillDownData(datatype, type) {
$("#homepage").find("#error").text("");
 if (datatype == "Region") {
        datatype = 'region';
    }
    $("#homepage").find("div[data-role='content']").each(function () {
        $(this).find('#Edaily').attr('onclick', "GetIssuesDrillDownData('" + datatype + "','Daily')");
        $(this).find('#Emonthly').attr('onclick', "GetIssuesDrillDownData('" + datatype + "','Weekly')");
        $(this).find('#Eyearly').attr('onclick', "GetIssuesDrillDownData('" + datatype + "','Monthly')");

    });
    ULBName = (ULBName == 'null') ? null : ULBName;
    var xAxis = new Array();
    var yaxisObj = new Object();
    var starter = 0;
    var PowerCable = 0;
    var SwitchBox = 0;
    var Motor = 0;
    var Pump = 0;
    var EB = 0;
    var Others = 0;
    var starterdata = new Array();
    var PowerCabledata = new Array();
    var starterdata = new Array();
    var SwitchBoxdata = new Array();
    var Motordata = new Array();
    var Pumpdata = new Array();
    var EBdata = new Array();
    var OthersData = new Array();
    switch ($.trim(datatype)) {

        case "Corporations":
            $(result).find("Corporations").each(function () {
                $(this).find("Chart").each(function () {
                    $(this).find("IssuesDrilledDownChart").find("Corporation").each(function () {
                        xAxis.push($(this).attr("Name"));
                        yaxisObj = new Object();

                        starterdata.push(parseInt($(this).find(type).attr("starter")));
                        PowerCabledata.push(parseInt($(this).find(type).attr("PowerCable")));
                        SwitchBoxdata.push(parseInt($(this).find(type).attr("SwitchBox")));
                        Motordata.push(parseInt($(this).find(type).attr("Motor")));
                        Pumpdata.push(parseInt($(this).find(type).attr("Pump")));
                        EBdata.push(parseInt($(this).find(type).attr("EB")));
                        OthersData.push(parseInt($(this).attr("others")));

                    });

                });
                CreateIssuesDrillDownInput(starterdata, PowerCabledata, SwitchBoxdata, Motordata, Pumpdata, EBdata,OthersData, xAxis);
            });
            break;
        case "region": 
        ULBName=window.localStorage.getItem("EULBname");
               $(result).find("Regions").each(function () {

                $(this).find("RegionChart").each(function () {
                    $(this).find("IssuesDrilledDownChart").find("Region[Name='" + ULBName + "']").find("District").each(function () {                        
                       xAxis.push($(this).attr("Name"));
                        
                        starterdata.push(parseInt($(this).find(type).attr("starter")));
                        PowerCabledata.push(parseInt($(this).find(type).attr("PowerCable")));
                        SwitchBoxdata.push(parseInt($(this).find(type).attr("SwitchBox")));
                        Motordata.push(parseInt($(this).find(type).attr("Motor")));
                        Pumpdata.push(parseInt($(this).find(type).attr("Pump")));
                        EBdata.push(parseInt($(this).find(type).attr("EB")));
                        OthersData.push(parseInt($(this).attr("Others")));

                    });

                });
                CreateIssuesDrillDownInput(starterdata, PowerCabledata, SwitchBoxdata, Motordata, Pumpdata, EBdata,OthersData, xAxis);
            });
            break;
            case "district":
            ULBName=window.localStorage.getItem("EULBname");
               $(result).find("Municipalities").each(function () {

                $(this).find("Districts").find("District[Name='" + ULBName + "']").each(function () {
                    $(this).find("MunicipalityChart").find("IssuesDrilledDownChart").find("Municipality").each(function () {
                       xAxis.push($(this).attr("Name"));
                        
                        starterdata.push(parseInt($(this).find(type).attr("starter")));
                        PowerCabledata.push(parseInt($(this).find(type).attr("PowerCable")));
                        SwitchBoxdata.push(parseInt($(this).find(type).attr("SwitchBox")));
                        Motordata.push(parseInt($(this).find(type).attr("Motor")));
                        Pumpdata.push(parseInt($(this).find(type).attr("Pump")));
                        EBdata.push(parseInt($(this).find(type).attr("EB")));
                        OthersData.push(parseInt($(this).attr("Others")));

                    });

                });
                CreateIssuesDrillDownInput(starterdata, PowerCabledata, SwitchBoxdata, Motordata, Pumpdata, EBdata,OthersData,xAxis);
            });
            break;

    }
}




function IssuesDrillDown(xAxis, yAxis,xAxisHeading,yAxisHeading,container) {
    
    
$("#stackChartContainer").show();
$("#chartContainer").hide();
    GetRadorInput(xAxis,yAxis);
    GenrateRadorChart(container);
         
    
    }

    function GetIssuesData(datatype,type,isExpand,ULBName,detailType) {
        $('#pieDetails').hide();
        $('#Issuedetails').hide();
    if (datatype == "Region") {
        datatype = 'region';
    }
             if(isExpand)
             {
                $("#homepage").find("div[data-role='content']").each(function()
                 {
                 $(this).find('#eFilter1').text('Group');
                 $(this).find('#eFilter2').text('Details');                 
               $(this).find('#eFilter1').attr('onClick', "GetIssuesData('" + datatype + "','Daily',true,'" + ULBName + "',null)");
             $(this).find('#eFilter2').attr('onClick', "GetIssuesData('" + datatype + "','Daily',true,'" + ULBName + "','detail')");
                  });

                    if(detailType==null)
                         {
                         $("#expandChart").find("#diveFilter2").removeClass('active');
                        $("#expandChart").find("#diveFilter1").addClass('active');
                         }
                         else{
                         $("#expandChart").find("#diveFilter1").removeClass('active');
                            $("#expandChart").find("#diveFilter2").addClass('active');
                         }

               }

             
               var xAxis = new Array();
                var yaxisObj = new Object();
                var starter = 0;
                var PowerCable = 0;
                var SwitchBox = 0;
                var Motor = 0;
                var Pump = 0;
                var EB = 0;
        var Others=0;
                var ReporteddataArr = new Array();
                var ActionTakendataArr = new Array();
                 var starterdata = new Array();
    var PowerCabledata = new Array();
    var starterdata = new Array();
    var SwitchBoxdata = new Array();
    var Motordata = new Array();
    var Pumpdata = new Array();
    var EBdata = new Array();
    var OthersData = new Array();
                var container = GetContainer('expand', type, null);
                
    switch ($.trim(datatype)) {                
        case "Corporations":
            $(result).find("Corporations").each(function () {
            if(isExpand)
            {
                 if (detailType!=null) {
                 $(result).find("Corporations").each(function () {
                $(this).find("Chart").each(function () {
                    $(this).find("IssuesChart").find("Details").find("Corporation").each(function () {
                        xAxis.push($(this).attr("Name"));
                        yaxisObj = new Object();

                        starterdata.push(parseInt($(this).attr("starter")));
                        PowerCabledata.push(parseInt($(this).attr("PowerCable")));
                        SwitchBoxdata.push(parseInt($(this).attr("SwitchBox")));
                        Motordata.push(parseInt($(this).attr("Motor")));
                        Pumpdata.push(parseInt($(this).attr("Pump")));
                        EBdata.push(parseInt($(this).attr("EB")));
                        OthersData.push(parseInt($(this).attr("Others")));

                    });

                });
                 CreateIssuesDrillDownInput(starterdata, PowerCabledata, SwitchBoxdata, Motordata, Pumpdata, EBdata,OthersData,xAxis);
                 });
               }
               else{
               var Reporteddata = 0;
                    var ActionTakendata = 0;

                    $(this).find("Chart").each(function () {
                    $(this).find("IssuesChart").each(function () {
                            Reporteddata = Reporteddata + (parseInt($(this).find(type).attr("Reported")));
                            ActionTakendata = ActionTakendata+(parseInt($(this).find(type).attr("ActionTaken")));

                        });
                    });

                    var data = new Array();
                    var reported = new Object();
                    reported.name = "Reported " + Reporteddata + ((Reporteddata>1)? " Issues":" Issue");
                    reported.y = Reporteddata;
                    data.push(reported);
                    var action = new Object();
                    action.name = "Action Taken " + ActionTakendata + ((ActionTakendata>1)? " Issues":" Issue");
                    action.y = ActionTakendata;
                    data.push(action);
                    CreatePieChart(data, container, 'expand');
                 
               }

               }
               else{
                var Reporteddata = 0;
                    var ActionTakendata = 0;

                   $(this).find("Chart").each(function () {
                    $(this).find("IssuesChart").each(function () {
                            Reporteddata = Reporteddata + (parseInt($(this).find(type).attr("Reported")));
                            ActionTakendata = ActionTakendata+(parseInt($(this).find(type).attr("ActionTaken")));

                        });
                    });

                    var data = new Array();
                    var reported = new Object();
                    reported.name = "Reported " + Reporteddata + ((Reporteddata>1)?" Issues":" Issue");
                    reported.y = Reporteddata;
                    data.push(reported);
                    var action = new Object();
                    action.name = "Action Taken " + ActionTakendata + ((ActionTakendata>1)?" Issues":" Issue");
                    action.y = ActionTakendata;
                    data.push(action);
                    CreatePieChart(data, 'barChartIssues', 'small');


               }
            });
            break;
        case "region":
         $(result).find("Regions").each(function () {
         if(isExpand)
         {
              if (detailType!=null) {                
                $(result).find("Regions").each(function () {
                 if(ULBName!=null && ULBName!="null")
                 {
                     $(result).find("Regions").find("RegionData").each(function () {
                         $(this).find("Region[Name='" + ULBName + "']").find("IssuesChart").each(function ()
                                {
                                    $(this).find("Details").find("Municipality").each(function ()
                                {
                       xAxis.push($(this).attr("Name"));
                        
                        starterdata.push(parseInt($(this).attr("starter")));
                        PowerCabledata.push(parseInt($(this).attr("PowerCable")));
                        SwitchBoxdata.push(parseInt($(this).attr("SwitchBox")));
                        Motordata.push(parseInt($(this).attr("Motor")));
                        Pumpdata.push(parseInt($(this).attr("Pump")));
                        EBdata.push(parseInt($(this).attr("EB")));
                        OthersData.push(parseInt($(this).attr("Others")));
                        });

                    });

                    });
                }
                else{
                // $(this).find("RegionAll").each(function () {
                 if(detailType!=null)
                 {
                     $(this).find("IssuesChart").find("Details").find("Municipality").each(function () {                        
                       xAxis.push($(this).attr("Name"));
                        
                        starterdata.push(parseInt($(this).attr("starter")));
                        PowerCabledata.push(parseInt($(this).attr("PowerCable")));
                        SwitchBoxdata.push(parseInt($(this).attr("SwitchBox")));
                        Motordata.push(parseInt($(this).attr("Motor")));
                        Pumpdata.push(parseInt($(this).attr("Pump")));
                        EBdata.push(parseInt($(this).attr("EB")));
                        OthersData.push(parseInt($(this).attr("Others")));

                    });
                  }                 

               // });
                }

                CreateIssuesDrillDownInput(starterdata, PowerCabledata, SwitchBoxdata, Motordata, Pumpdata, EBdata,OthersData, xAxis);
            });
               }
               else{
                var Reporteddata = 0;
                    var ActionTakendata = 0;
                    if(ULBName!="null" && ULBName!=null)
                    {
                   $(result).find("Regions").find("RegionData").each(function () {
                                $(this).find("Region[Name='" + ULBName + "']").find("DistrictAll").find("IssuesChart").find("Daily").each(function ()
                                {
                            Reporteddata = Reporteddata + (parseInt($(this).attr("Reported")));
                            ActionTakendata = ActionTakendata+(parseInt($(this).attr("ActionTaken")));

                        });
                    });
                    }
                    
                else{
                 $(this).find("RegionAll").each(function () {
                                $(this).find("IssuesChart").each(function () {
                         Reporteddata = Reporteddata + (parseInt($(this).find(type).attr("Reported")));
                            ActionTakendata = ActionTakendata+(parseInt($(this).find(type).attr("ActionTaken")));

                    });

                });
                }

                    var data = new Array();
                    var reported = new Object();
                    reported.name = "Reported " + Reporteddata + ((Reporteddata>1)?" Issues":" Issue");
                    reported.y = Reporteddata;
                    data.push(reported);
                    var action = new Object();
                    action.name = "Action Taken " + ActionTakendata + ((ActionTakendata>1)? " Issues":" Issue");
                    action.y = ActionTakendata;
                    data.push(action);
                    CreatePieChart(data, container, 'expand');

               }



            }
               else{

                var Reporteddata = 0;
                    var ActionTakendata = 0;
                    if(ULBName==null)
                    {
                    $(this).find("RegionAll").each(function () {
                                $(this).find("IssuesChart").each(function () {
                            Reporteddata = Reporteddata + (parseInt($(this).find(type).attr("Reported")));
                            ActionTakendata = ActionTakendata+(parseInt($(this).find(type).attr("ActionTaken")));

                        });
                    });
                    }
                    else{
                      $(result).find("Regions").find("RegionData").each(function () {
                                $(this).find("Region[Name='" + ULBName + "']").find("DistrictAll").find("IssuesChart").find("Daily").each(function ()
                                {
                            Reporteddata = Reporteddata + (parseInt($(this).attr("Reported")));
                            ActionTakendata = ActionTakendata+(parseInt($(this).attr("ActionTaken")));

                        });
                    });
                    }

                    var data = new Array();
                    var reported = new Object();
                    reported.name = "Reported " + Reporteddata +((Reporteddata>1)? " Issues":" Issue");
                    reported.y = Reporteddata;
                    data.push(reported);
                    var action = new Object();
                    action.name = "Action Taken " + ActionTakendata + ((ActionTakendata>1)? " Issues":" Issue");
                    action.y = ActionTakendata;
                    data.push(action);
                    CreatePieChart(data, 'barChartIssues', 'small');
               }
            });
            break;
            case "district":
            
             if(isExpand)
             {
                 if (detailType!=null) {
                $(result).find("Municipalities").each(function () {

                $(this).find("Districts").find("District[Name='" + ULBName + "']").each(function () {
                    $(this).find("IssuesChart").find("Details").find("Municipality").each(function () {
                       xAxis.push($(this).attr("Name"));
                        
                        starterdata.push(parseInt($(this).attr("starter")));
                        PowerCabledata.push(parseInt($(this).attr("PowerCable")));
                        SwitchBoxdata.push(parseInt($(this).attr("SwitchBox")));
                        Motordata.push(parseInt($(this).attr("Motor")));
                        Pumpdata.push(parseInt($(this).attr("Pump")));
                        EBdata.push(parseInt($(this).attr("EB")));
                        OthersData.push(parseInt($(this).attr("Others")));

                    });

                });
                CreateIssuesDrillDownInput(starterdata, PowerCabledata, SwitchBoxdata, Motordata, Pumpdata, EBdata,OthersData, xAxis);
            });
               }
               else{
               var Reporteddata = 0;
                    var ActionTakendata = 0;

                   $(result).find("Districts").find("District[Name='" + ULBName + "']").each(function () {                                   
                    $(this).find("IssuesChart").find("Daily").each(function () {
                            Reporteddata = Reporteddata + (parseInt($(this).attr("Reported")));
                            ActionTakendata = ActionTakendata+(parseInt($(this).attr("ActionTaken")));

                        });
                    });

                    var data = new Array();
                    var reported = new Object();
                    reported.name = "Reported " + Reporteddata + ((Reporteddata>1)? " Issues":" Issue");
                    reported.y = Reporteddata;
                    data.push(reported);
                    var action = new Object();
                    action.name = "Action Taken " + ActionTakendata + ((ActionTakendata>1)? " Issues":" Issue");
                    action.y = ActionTakendata;
                    data.push(action);
                    CreatePieChart(data, container, 'expand');
               }
             }
                else{

                var Reporteddata = 0;
                    var ActionTakendata = 0;

                   $(result).find("Districts").find("District[Name='" + ULBName + "']").each(function () {                                   
                    $(this).find("IssuesChart").find("Daily").each(function () {
                            Reporteddata = Reporteddata + (parseInt($(this).attr("Reported")));
                            ActionTakendata = ActionTakendata+(parseInt($(this).attr("ActionTaken")));

                        });
                    });

                    var data = new Array();
                    var reported = new Object();
                    reported.name = "Reported " + Reporteddata + ((Reporteddata>1)? " Issues":" Issue");
                    reported.y = Reporteddata;
                    data.push(reported);
                    var action = new Object();
                    action.name = "Action Taken " + ActionTakendata + ((ActionTakendata>1)? " Issues":" Issue");
                    action.y = ActionTakendata;
                    data.push(action);
                    CreatePieChart(data, 'barChartIssues', 'small');
               }

            
            break;
    }
    }
    

    function CreateIssuesInput(Reporteddata,ActionTakendata,xAxis)
    {
                
                var yAxis = new Array();
                yaxisObj = new Object()
                yaxisObj.name = "Reported";
                yaxisObj.data = Reporteddata;
                yaxisObj.color= '#FF0000';
                yAxis.push(yaxisObj);

                yaxisObj = new Object()
                yaxisObj.name = "ActionTaken";
                yaxisObj.data = ActionTakendata;
                yaxisObj.color= '#a6c96a';
                yAxis.push(yaxisObj);   

                if(window.localStorage.getItem("isExpand")==null)
                {
                    IssuesDrillDown(xAxis, yAxis,'','Reported & Action Taken','barChartIssues');
                }
                else{
                 IssuesDrillDown(xAxis, yAxis,'','Reported & Action Taken','chartContainer');
                }
    }
    






    function CreateIssuesDrillDownInput(starterdata,PowerCabledata,SwitchBoxdata,Motordata,Pumpdata,EBdata,OthersData,xAxis)
    {
                
                var yAxis = new Array();
                yaxisObj = new Object()
                yaxisObj.name = "Starter Problem";
                yaxisObj.data = starterdata;
                yaxisObj.color= '#c9e726';
                yAxis.push(yaxisObj);

                yaxisObj = new Object()
                yaxisObj.name = "Power Cable Fault";
                yaxisObj.data = PowerCabledata;
                yaxisObj.color= '#666666';
                yAxis.push(yaxisObj);

                yaxisObj = new Object()
                yaxisObj.name = "SwitchBox Fault";
                yaxisObj.data = SwitchBoxdata;
                yaxisObj.color= '#1aadce';
                yAxis.push(yaxisObj);

                yaxisObj = new Object()
                yaxisObj.name = "Motor Fault";
                yaxisObj.data = Motordata;
                yaxisObj.color= '#f28f43';
                yAxis.push(yaxisObj);

                yaxisObj = new Object()
                yaxisObj.name = "Pump Fault";
                yaxisObj.data = Pumpdata;
                yaxisObj.color= '#2f7ed8';
                yAxis.push(yaxisObj);

                yaxisObj = new Object()
                yaxisObj.name = "EB HT Fuse";
                yaxisObj.data = EBdata;
                yaxisObj.color= '#492970';
                yAxis.push(yaxisObj);
        
        
        		yaxisObj = new Object()
                yaxisObj.name = "Others";
                yaxisObj.data = OthersData;
                yaxisObj.color = '#7798BF';
                yAxis.push(yaxisObj);

                
                var container = GetContainer('expand', type, null);
                IssuesDrillDown(xAxis, yAxis,'','Issues',container);
    }


    function showError()
    {
     $("#error").text("No Further View");
    }



   