var ishomepage=true;      
     function ChartFilter(callType) {
         
            if(callType==null)
               {
            $(".corphead").show();
            $(".regionhead").show();
            $(".districttag").hide();
            $(".Districtlst").hide();
            $("#chartDistricttag").hide();
               $("#chartDistrictlst").hide();
            
             $("#chartDistrictlst").find("ul").html('');
               
             $("#chartregionlst").find("ul").html('');
            $("#ulbfilter").panel("open");
            $("#preferencesList").hide();
            $("#filter").show();
                   }
               else
               {                   
                   
                   ShowChosedPref('pref');
                   $("#PrefDetailsfilter").panel("open");
                  $("#PrefDetails").find("#prefCorpList").find("ul").html('');
                   $("#PrefDetails").find("#prefRegionList").find("ul").html('');
                    $("#PrefDetails").find("#prefDistrictList").find("ul").html('');
                   $("#PrefDetails").find("#prefULBList").find("ul").html('');
               }
        }   
        
        function ShowcorpListChart() {
                window.localStorage.removeItem("HType");
                window.localStorage.setItem("HType", "Corporations");
                $("#ulbfilter").panel("close");               
                if(window.localStorage.getItem("isExpand")==null)
                {
                CreateChart('Piechart','Corporations',null,'small');
                }
                else{
                CreateChart('Piechart','Corporations',null,'expand');
                }
                $("#diveFilter1").show();
            $("#diveFilter2").show();
            }        
              
              
                              


             function loadregionsListchart() {
             $("#chartDistrictlst").find("ul").empty();
             $("#chartDistrictlst").find("ul").html('');
                $("#chartregionlst").find("ul").empty();
                $("#chartregionlst").find("ul").html('');
                $(result).find("Regions").find("RegionData").find("Region").each(function () {
                
                    RegionName = $(this).attr("Name");
                    Regionlist = '<li onclick="showDistricListChart(this);"><a href="#"><span class="regnameq">' + RegionName + '</span></a></li>';

                    $("#chartregionlst").find("ul").append(Regionlist);
                    
                });

                $("#diveFilter1").hide();
            $("#diveFilter2").hide();
                $('.corplst').hide();
                $('#chartregionlst').toggle();
                  $("#chartDistrictlst").hide();
                CreateChart('Piechart','region',null,'small');
            }


             function showDistricListChart(get) {
                var RegnName = $(get).find('.regnameq').text();              
                           
                $("#ulbfilter").panel("open");
                $(".corphead").hide();
                $(".corplst").hide();
                $(".regionhead").hide();
                $("#filter").find('#chartregionlst').hide();

                $("#chartDistricttag").show();
                var district = "";
                var districtlist = "";
                $(".chartDistrictlst").find("ul").empty();

                //$(".district").find("ul").empty();
                $(result).find("RegionData").find("Region[Name='" + RegnName + "']").each(function () {
                    $(this).find("DistrictData").find("District").each(function () {
                        district = $(this).attr("Name");
                        
                        districtlist = "<li onclick=CreateChart('piechart','district','"+district+"','small');><a><span class='distname'>" + district + "</span></a></li>";

                        $("#filter").find("#chartDistrictlst").find("ul").append(districtlist);
                    });
                });
                CreateChart('piechart','region',RegnName,'small');
                $("#filter").find("#chartDistrictlst").show();
                $("#diveFilter1").show();
            $("#diveFilter2").show();
                // location.reload();
            }

            function ExpandChart(type)
            {
            $("#homepage").find("#error").text("");
            
            window.localStorage.removeItem("isExpand");
             window.localStorage.setItem("isExpand",'true');
            $('#Chart').hide();
            $('#expandChart').show();
            var container=GetContainer('expand',type,null);
            var ULBName=window.localStorage.getItem("ULBname");
           var ulbtype= window.localStorage.getItem("ULBtype");
       		 $('#pieDetails').hide();
                $('#Issuedetails').hide();
           if(ulbtype=='region' && (ULBName=='' ||ULBName==null))
           {
           $("#diveFilter1").hide();
            $("#diveFilter2").hide();
            
            }
            else{
            $("#diveFilter1").show();
            $("#diveFilter2").show();
            }
            
           if(ULBName!=null)
           {
               window.localStorage.removeItem("EULBname");
           window.localStorage.setItem("EULBname",ULBName);
           }
                window.localStorage.removeItem("EULBtype");
           window.localStorage.setItem("EULBtype",ulbtype);
           
           $("#expandChart").find("#diveFilter2").removeClass('active');
           $("#expandChart").find("#diveFilter1").addClass('active'); 
           
           var UlbHeaderText="";
           var ChartType="";
                   if(ULBName!=null)
                   {
                     UlbHeaderText=" - "+ULBName.substr(0,1).toUpperCase()+ULBName.substr(1)
                   }  
                   if(type.toLowerCase() =='ulbchart')
                   {
                      ChartType=$('#ulbName')[0].innerHTML;                   
                   }  
                    else if(type.toLowerCase()=='designed') {
                  ChartType="Daily Designed vs Drawn Quantity";
                }  
                else if(type.toLowerCase()=='cleaning')
                {
                    ChartType="Last 3 Days LPCD Value";
                }
                else if(type.toLowerCase()=='issues')
                {
                    ChartType="Weekly Issues Status";
                }
                     
                      if(ChartType.length>0)
                {
                    $("#ExpandType").text(ChartType); 
                }                

                $("#ExpandType").text(ChartType); 
                 if(UlbHeaderText!="" || ulbtype.toLowerCase()=='corporations')
                   {
                 $("#ULBType").text(ulbtype.substr(0,1).toUpperCase()+ulbtype.substr(1)+UlbHeaderText);   
                 }
                 else{
                  $("#ULBType").text("Municipalities");
                 }

           var  good_MUN=0;
            var  comfort_MUN=0;
            var   poor_MUN=0;
            var  acute_MUN=0;
            var   pdapr_MUN=0;

              if(type=='ULBChart')
             {
              if(ulbtype=='Corporations')
                 {
             $(result).find("Corporations").find("Chart").each(function () {

                    //To Get LPCD Chart
                     var comfort_COR=$(this).find("Daily").attr('Comfort');
                     comfort_COR=parseInt(comfort_COR)+parseInt(($(this).find("Daily").attr('Good')==null)?0:$(this).find("Daily").attr('Good'));
                     var poor_COR=$(this).find("Daily").attr('Poor');
                     var pdapr_COR=$(this).find("Daily").attr('PendingApproval');                                         
                      corporationchart(comfort_COR, poor_COR, pdapr_COR,container,'expand');
                 
                         $("#homepage").find("div[data-role='content']").each(function()
                         {
                         $(this).find('#eFilter1').text('Daily');
                         $(this).find('#eFilter2').text('Weekly');
                         $(this).find('#eFilter2').attr('onclick',"FilterDataByDailyWeeklyMonthly('Corporations','week');");
                         $(this).find('#eFilter1').attr('onclick',"FilterDataByDailyWeeklyMonthly('Corporations','day');");
                         
                                 
                          });
                       
                      });
                    }
                    else if(ulbtype=='district')
                    {
                      $(result).find("DistrictData").find("District[Name='" + ULBName + "']").each(function () {                                   
                                     $(this).find("LPCD").find("Daily").each(function()
                                    {
                                    
                                        good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           municipalitieschart(good_MUN,comfort_MUN, poor_MUN, acute_MUN,pdapr_MUN,container,'expand');
                                        });                                     
                                     });
                         $("#homepage").find("div[data-role='content']").each(function()
                         {
                         $(this).find('#eFilter1').text('Daily');
                         $(this).find('#eFilter2').text('Weekly');
                         $(this).find('#eFilter2').attr('onclick',"FilterDataByDailyWeeklyMonthly('district','week');");
                         $(this).find('#eFilter1').attr('onclick',"FilterDataByDailyWeeklyMonthly('district','day');");
                         
                                 
                          });
                    }
                    else if(ulbtype=='region')
                    {

                    if(ULBName!=null)
                    {
                           $(result).find("Regions").find("RegionData").each(function () {                                   
                                     $(this).find("Region[Name='" + ULBName + "']").find("DistrictAll").find("LPCD").find("Daily").each(function()
                                     {
                                         good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           
                                        
                                     });
                                     });
                        }
                        else{

                                $(result).find("Regions").each(function () {                
                                    $(this).find("RegionAll").find("LPCD").each(function () {
                                     $(this).find("Daily").each(function()
                                     {
                                         
                                         good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           
                                        });
                                     });
                                     });
                        }
                                     municipalitieschart(good_MUN,comfort_MUN, poor_MUN, acute_MUN,pdapr_MUN,container,'expand');
                        $("#homepage").find("div[data-role='content']").each(function()
                         {
                         $(this).find('#eFilter1').text('Daily');
                         $(this).find('#eFilter2').text('Weekly');
                         $(this).find('#eFilter2').attr('onclick',"FilterDataByDailyWeeklyMonthly('region','week');");
                         $(this).find('#eFilter1').attr('onclick',"FilterDataByDailyWeeklyMonthly('region','day');");
                         
                                 
                          });
                    }
                   window.localStorage.removeItem("EType");
                  window.localStorage.setItem("EType", "ULBchart");


             }
            else if(type=='designed')
             {
                window.localStorage.removeItem("EType");
                   window.localStorage.setItem("EType", "designed");
                var below10Per=0;
                var below25Per=0;
                var below50Per=0;
                 var Above50Perc=0;
                var ULBtype=window.localStorage.getItem("ULBtype");
                if(ulbtype=='Corporations')
                 {
                     	
                  $(result).find("Corporations").find("Chart").each(function () {
                                   $(this).find("SourceDataChart").find("Daily").each(function()
                                   {
                                    var below10Per=parseInt($(this).attr('Below10Perc'));
                                    var below25Per=parseInt($(this).attr('Below25Perc'));
                                     var below50Per=parseInt($(this).attr('Below50Perc'));
                                       var Above50Perc=parseInt($(this).attr('Above50Perc'));
                                     DesignedDrawnChart(below10Per,below25Per,below50Per,Above50Perc,container,'expand');
                                   });
                                  });
                }

                        else if(ulbtype=='district')
                                         {
                 
                                   $(result).find("DistrictData").find("District[Name='" + ULBName + "']").each(function () {                                   
                                     $(this).find("SourceDataChart").find("Daily").each(function()
                                    {
                                    
                                    var below10Per=$(this).attr('Below10Perc');
                                    var below25Per=$(this).attr('Below25Perc');
                                     var below50Per=$(this).attr('Below50Perc');
                                      var Above50Perc=parseInt($(this).attr('Above50Perc'));
                                     DesignedDrawnChart(below10Per,below25Per,below50Per,Above50Perc,container,'expand');
                                  
                                  });
                                  });
                }
                else if(ulbtype=='region')
                 {
                 if(ULBName!=null)
                 {
                   $(result).find("Region[Name='" + ULBName + "']").each(function () {
                                    $(this).find("DistrictAll").find("SourceDataChart").each(function()  
                                    {
                                     $(this).find("Daily").each(function()
                                   {
                                     below10Per=parseInt(below10Per)+parseInt($(this).attr('Below10Perc'));
                                     below25Per=parseInt(below25Per)+parseInt($(this).attr('Below25Perc'));
                                      below50Per=parseInt(below50Per)+parseInt($(this).attr('Below50Perc'));
                                       Above50Perc=parseInt(Above50Perc)+parseInt($(this).attr('Above50Perc'));
                                     
                                   });
                                  });
                                  });
                  }
                                else{
                                 $(result).find("Regions").each(function () {                
                                    $(this).find("RegionAll").find("SourceDataChart").each(function ()                          
                                    {
                                     $(this).find("Daily").each(function()
                                   {
                                     below10Per=parseInt(below10Per)+parseInt($(this).attr('Below10Perc'));
                                     below25Per=parseInt(below25Per)+parseInt($(this).attr('Below25Perc'));
                                      below50Per=parseInt(below50Per)+parseInt($(this).attr('Below50Perc'));
                                       Above50Perc=parseInt(Above50Perc)+parseInt($(this).attr('Above50Perc'));
                                     
                                   });
                                  });
                                  });
                  }
                                  DesignedDrawnChart(below10Per,below25Per,below50Per,Above50Perc,container,'expand');

                }
                
                    $("#homepage").find("div[data-role='content']").each(function()
                         {
                         $(this).find('#eFilter1').text('Group');
                         $(this).find('#eFilter2').text('Details');
                         $(this).find('#eFilter2').attr('onclick',"FilterDataByDailyWeeklyMonthly('"+ulbtype+"','week');");
                         $(this).find('#eFilter1').attr('onclick',"FilterDataByDailyWeeklyMonthly('"+ulbtype+"','day');");
                         
                                 
                          });

             }
             else if(type=='cleaning')
             {
                window.localStorage.removeItem("EType");
                   window.localStorage.setItem("EType", "cleaning");    
                 var ULBtype=window.localStorage.getItem("ULBtype");
                 var ULBName=window.localStorage.getItem("ULBname");
                 GetTankCleaningData(ULBtype,'Daily',true,ULBName);
                

             }

            else if(type=='issues')
             {
               window.localStorage.removeItem("EType");
                  window.localStorage.setItem("EType", "issues");
                  window.localStorage.setItem("EType1", "issues");
                var ULBtype=window.localStorage.getItem("ULBtype");
                 var ULBName=window.localStorage.getItem("ULBname");
                 window.localStorage.setItem("EULBname",ULBName);
                 GetIssuesData(ULBtype,'Daily',true,ULBName);                 

             }
           
            }

                function FilterDataByDailyWeeklyMonthly(ulbtype,datatype)
                {
                    $("#homepage").find("#error").text("");
                    $('#pieDetails').hide();
                      var container=GetContainer('expand',type,null);
                       if(datatype=='day')
                         {
                         $("#expandChart").find("#diveFilter2").removeClass('active');
                        $("#expandChart").find("#diveFilter1").addClass('active');
                         }
                         else{
                         $("#expandChart").find("#diveFilter1").removeClass('active');
                            $("#expandChart").find("#diveFilter2").addClass('active');
                         }
                         if(ulbtype=='Corporations' && (window.localStorage.getItem("EULBtype")==null||window.localStorage.getItem("EULBtype")=='Corporations'))                        {

                        
                             if(window.localStorage.getItem("EType")=='ULBchart')
                            {
                                 if(datatype=='day')
                                 {
                                   $(result).find("Corporations").find("Chart").each(function () {
                                     
                                         var comfort_COR= parseInt($(this).find("Daily").attr('Comfort'));
                                         var poor_COR=parseInt($(this).find("Daily").attr('Poor'));
                                          var pdapr_COR=parseInt($(this).find("Daily").attr('PendingApproval'));
                                            corporationchart(comfort_COR,poor_COR,pdapr_COR,container,'expand');
                                       
                                     });
                                  }
                                 else if(datatype=='week')
                                 {
                                 
                                 
                                    $(result).find("Corporations").find("Chart").each(function () {
                                         $("#homepage").find("#error").text("Last 7 days view");
                                         var comfort_COR=parseInt($(this).find("Weekly").attr('Comfort'));
                                         var poor_COR=parseInt($(this).find("Weekly").attr('Poor'));
                                          var pdapr_COR=parseInt($(this).find("Weekly").attr('PendingApproval'));
                                            corporationchart(comfort_COR,poor_COR,pdapr_COR,container,'expand');
                                       
                                     });
                                 }

                                
                            }
                             
                                    if(window.localStorage.getItem("EType")=='designed')
                                     {
                                         if(datatype=='day')
                                         {
                                           $(result).find("Corporations").each(function () {                
                                           $(this).find("SourceDataChart").find("Daily").each(function ()    
                                           {
                                            var below10Per=parseInt($(this).attr('Below10Perc'));
                                            var below25Per=parseInt($(this).attr('Below25Perc'));
                                             var below50Per=parseInt($(this).attr('Below50Perc'));
                                             var Above50Perc=parseInt($(this).attr('Above50Perc'));
                                     		DesignedDrawnChart(below10Per,below25Per,below50Per,Above50Perc,container,'expand');
                                           });
                                          });
                                         }
                                        else if(datatype=='week')
                                        {
                                        
                                        var xAxis = new Array();
                                        var yaxisObj = new Object();
                                        var below10PerArr = new Array();
                                        var below25PerArr = new Array();
                                        var below50PerArr = new Array();
                                        var Above50Perc = new Array();
                                           $(result).find("Corporations").find("Chart").each(function () {
                                           $(this).find("SourceDataChart").find("Details").find("Corporation").each(function()
                                           {
                                           xAxis.push($(this).attr("Name"));
                                            below10PerArr.push(parseInt($(this).attr("Below10Perc")));
                                            below25PerArr.push(parseInt($(this).attr("Below25Perc")));
                                            below50PerArr.push(parseInt($(this).attr("Below50Perc")));
                                            Above50Perc.push(parseInt($(this).attr("Above50Perc")));
                                            
                                             
                                           });
                                          });

                                          CreateDesignDrawnStackBar(xAxis,below10PerArr,below25PerArr,below50PerArr,Above50Perc,container);
                                        }
                                
                                     }//
                            
                          }                                
                        else{
                        FilterDataByDailyWeeklyMonthlyForMunicaplity(ulbtype,datatype);
                        }


                }

function FilterDataByDailyWeeklyMonthlyForMunicaplity(ulbtype,datatype)
{
$('#pieDetails').hide();
if(ulbtype=='district')
{
            var ULBName=window.localStorage.getItem("EULBname");
            var container=GetContainer('expand',type,null);
            if(window.localStorage.getItem("EType")=='ULBchart')
                            {
                             var good_MUN=0;
                                        var comfort_MUN=0;
                                         var poor_MUN=0;
                                         var acute_MUN=0;
                                          var pdapr_MUN=0;
                                 if(datatype=='day')
                                 {
                                    $(result).find("Municipalities").find("DistrictData").each(function () {
                                    $(this).find("District[Name='"+ULBName+"']").find("LPCD").each(function()
                                    {
                                     $(this).find("Daily").each(function()
                                     {
                                        good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           municipalitieschart(good_MUN,comfort_MUN, poor_MUN, acute_MUN,pdapr_MUN,container,'expand');
                                        });
                                     });
                                     });
                                  }
                                 else if(datatype=='week')
                                 {
                                     $(result).find("Municipalities").find("DistrictData").find("District[Name='"+ULBName+"']").each(function () {
                                    $(this).find("LPCD").each(function()
                                    {
                                     $(this).find("Weekly").each(function()
                                     {
                                        good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           municipalitieschart(good_MUN,comfort_MUN, poor_MUN, acute_MUN,pdapr_MUN,container,'expand');
                                        });
                                     });
                                     });
                                 }                  

                 
                            }
                            if(window.localStorage.getItem("EType")=='designed')
                             {
                               $(result).find("Municipalities").find("DistrictData").find("District[Name='"+ULBName+"']").each(function () {
                                 if(datatype=='day')
                                 {
                                 $(this).find("SourceDataChart").each(function()
                                    {
                                     $(this).find("Daily").each(function()
                                   {
                                    var below10Per=$(this).attr('Below10Perc');
                                    var below25Per=$(this).attr('Below25Perc');
                                     var below50Per=$(this).attr('Below50Perc');
                                       var Above50Perc=$(this).attr('Above50Perc');
                                     DesignedDrawnChart(below10Per,below25Per,below50Per,Above50Perc,container,'expand');
                                   });
                                  });
                                 }
                                else if(datatype=='week')
                                {
                                if(ULBName!=null)
                                {                                  
                                  
                                   var xAxis = new Array();
                                      var below10PerArr =new Array();
                                      var below25PerArr =new Array();
                                      var below50PerArr =new Array();
                                    var Above50Perc =new Array();
                                    $(this).find("SourceDataChart").each(function()
                                    {                                    
                                     $(this).find("Details").find("Municipality").each(function()
                                   {
                                    xAxis.push($(this).attr("Name"));
                                            below10PerArr.push(parseInt($(this).attr("Below10Perc")));
                                            below25PerArr.push(parseInt($(this).attr("Below25Perc")));
                                            below50PerArr.push(parseInt($(this).attr("Below50Perc")));                                           
                                       Above50Perc.push(parseInt($(this).attr("Above50Perc")));                                           
                                            
                                   });
                                  });
                                  
                                   CreateDesignDrawnStackBar(xAxis,below10PerArr,below25PerArr,below50PerArr,Above50Perc,container);
                                  }
                                 
                                }
                                });
                             }
                            
                             }
                       else{
                             FilterDataByDailyWeeklyMonthlyForRegion(ulbtype,datatype,'expand');
                             }
}  





function FilterDataByDailyWeeklyMonthlyForRegion(ulbtype,datatype,size)
{
$('#pieDetails').hide();
if(ulbtype=='region')
{
            var RegnName=window.localStorage.getItem("EULBname");
            var container=GetContainer((size=='expand')?'expand':'small',type,null);
            if(window.localStorage.getItem("EType")=='ULBchart')
                            {
                            var good_MUN=0;
                                        var comfort_MUN=0;
                                         var poor_MUN=0;
                                         var acute_MUN=0;
                                          var pdapr_MUN=0;
                                 if(datatype=='day')
                                 {
                                   
                                     if(RegnName!=null)
                                 {
                                   $(result).find("Regions").find("RegionData").each(function () {                                   
                                     $(this).find("Region[Name='" + RegnName + "']").find("DistrictAll").find("LPCD").find("Daily").each(function()
                                     {
                                         good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           
                                        
                                     });
                                     });
                                    }
                                    else{
                                     $(result).find("Regions").each(function () {                
                                    $(this).find("RegionAll").find("LPCD").each(function ()
                                    {                                    
                                     $(this).find("Daily").each(function()
                                   {
                                       good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           
                                        });
                                     });
                                     });
                                    }
                                     municipalitieschart(good_MUN,comfort_MUN, poor_MUN, acute_MUN,pdapr_MUN,container,(size=='expand')?'expand':'small');
                                     
                                     
                                     municipalitieschart(good_MUN,comfort_MUN, poor_MUN, acute_MUN,pdapr_MUN,container,(size=='expand')?'expand':'small');
                                  }
                                 else if(datatype=='week')
                                 {
                                 if(RegnName!=null)
                                 {
                                     $(result).find("Regions").find("RegionData").each(function () {                                   
                                     $(this).find("Region[Name='" + RegnName + "']").find("DistrictAll").find("LPCD").find("Weekly").each(function()                                    
                                     {
                                       good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           
                                        
                                     });
                                     });
                                 }
                                 else{
                                     $(result).find("Regions").each(function () {                
                                    $(this).find("RegionAll").find("LPCD").each(function()  
                                    {                                    
                                     $(this).find("Weekly").each(function()
                                   {
                                       good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           
                                        });
                                     });
                                     });
                                 }
                                     municipalitieschart(good_MUN,comfort_MUN, poor_MUN, acute_MUN,pdapr_MUN,container,(size=='expand')?'expand':'small');
                                 }

                                 else{

                                $(result).find("Regions").each(function () {                
                                    $(this).find("RegionChart").find("LPCDChart").find("Region[Name='" + RegnName + "']").each(function () {                                                                        
                                     $(this).find("Monthly").each(function()
                                        {
                                       good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           
                                         });
                                       });
                                    });
                                    municipalitieschart(good_MUN,comfort_MUN, poor_MUN, acute_MUN,pdapr_MUN,container,(size=='expand')?'expand':'small');

                                 }                 
                            }
                            if(window.localStorage.getItem("EType")=='designed')
                             {
                              var below10Per=0;
                                    var below25Per=0;
                                     var below50Per=0;
                                 var Above50per=0;
                                 if(datatype=='day')
                                 {
                                   if(RegnName!=null && RegnName!="null")
                                 {
                                  $(result).find("Region[Name='" + RegnName + "']").each(function () {
                                    $(this).find("DistrictAll").find("SourceDataChart").each(function()  
                                    {
                                     $(this).find("Daily").each(function()
                                   {
                                     below10Per=parseInt(below10Per)+parseInt($(this).attr('Below10Perc'));
                                     below25Per=parseInt(below25Per)+parseInt($(this).attr('Below25Perc'));
                                      below50Per=parseInt(below50Per)+parseInt($(this).attr('Below50Perc'));
                                        Above50per=parseInt(Above50per)+parseInt($(this).attr('Above50Perc'));
                                     
                                   });
                                  });
                                  });
                                  }
                                  else{
                                  $(result).find("Regions").each(function () {                
                                    $(this).find("RegionAll").find("SourceDataChart").each(function ()
                                    {                                    
                                     $(this).find("Daily").each(function()
                                   {
                                     below10Per=parseInt(below10Per)+parseInt($(this).attr('Below10Perc'));
                                     below25Per=parseInt(below25Per)+parseInt($(this).attr('Below25Perc'));
                                      below50Per=parseInt(below50Per)+parseInt($(this).attr('Below50Perc'));
                                      Above50per=parseInt(Above50per)+parseInt($(this).attr('Above50Perc'));
                                     
                                   });
                                  });
                                  });
                                  }
                                  DesignedDrawnChart(below10Per,below25Per,below50Per,Above50per,container,(size=='expand')?'expand':'small');
                                 }
                                else if(datatype=='week')
                                {
                                 var xAxis = new Array();
                                      var below10PerArr =new Array();
                                      var below25PerArr =new Array();
                                      var below50PerArr =new Array();
                                    var Above50PerArr =new Array();
                                if(RegnName!=null && RegnName!="null")
                                {
                                $(result).find("Regions").find("RegionData").each(function () {                                   
                                     $(this).find("Region[Name='" + RegnName + "']").find("SourceDataChart").each(function()                                    
                                     {
                                    $(this).find("Details").find("Municipality").each(function()  
                                    {
                                    
                                     xAxis.push($(this).attr("Name"));
                                            below10PerArr.push(parseInt($(this).attr("Below10Perc")));
                                            below25PerArr.push(parseInt($(this).attr("Below25Perc")));
                                            below50PerArr.push(parseInt($(this).attr("Below50Perc")));                                           
                                        Above50PerArr.push(parseInt($(this).attr("Above50Perc")));                                           
                                            
                                   });
                                  });
                                  });
                                 
                                  }
                                  else{
                                  
                                     $(result).find("Regions").each(function () {                
                                    $(this).find("RegionData").find("SourceDataChart").each(function () 
                                    {
                                     $(this).find("Details").find("Municipality").each(function()
                                   {
                                    xAxis.push($(this).attr("Name"));
                                            below10PerArr.push(parseInt($(this).attr("Below10Perc")));
                                            below25PerArr.push(parseInt($(this).attr("Below25Perc")));
                                            below50PerArr.push(parseInt($(this).attr("Below50Perc"))); 
                                            Above50PerArr.push(parseInt($(this).attr("Above50Perc")));                                           
                                            
                                   });
                                  });
                                  });
                                  

                                  }
                                   CreateDesignDrawnStackBar(xAxis,below10PerArr,below25PerArr,below50PerArr,Above50PerArr,container);

                                }
                               
                                
                             }
                            
                             }
}   



function CreateDesignDrawnStackBar(xAxis,below10PerArr,below25PerArr,below50PerArr,Above50Perc,container)
{
                var yAxis =new Array();
              
                yaxisObj = new Object()
                yaxisObj.name = "0 to 10 % below design quantity";
                yaxisObj.data = below10PerArr;
                yaxisObj.color= '#6cc04e';
                yaxisObj.filter='10';
                yAxis.push(yaxisObj);

                yaxisObj = new Object()
                yaxisObj.name = "11 to 25 % below design quantity";
                yaxisObj.data = below25PerArr;
                yaxisObj.color= '#c9e726';
                yaxisObj.filter='25';
                yAxis.push(yaxisObj);

                yaxisObj = new Object()
                yaxisObj.name = "26 to 50 % below design quantity";
                yaxisObj.data = below50PerArr;
                yaxisObj.color= '#f98702';
                yaxisObj.filter='50';
                yAxis.push(yaxisObj);

                 yaxisObj = new Object()
                yaxisObj.name = "More than 50 % below design quantity";
                yaxisObj.data = Above50Perc;
                yaxisObj.color= '#e94541';
                yaxisObj.filter='51';
                yAxis.push(yaxisObj);

                 IssuesDrillDown(xAxis, yAxis,'','Percentage',container);

}


      
                function CalculatePercentage(designed,drawn)
                {
                        var diff=designed-drawn;
                        return (diff/designed)*100;
                }

                function GetContainer(size,type,chartType)
                {

                
                 if(window.localStorage.getItem("EType")!=null)
                  { 
                     $(".chart-expand").css("width","700");
                      $(".chart-expand").css("height","360");
                     $("#chartContainer").show();
                     $("#stackChartContainer").hide();                   
                     return 'chartContainer'
                  }

                 else if(size=='small' &&chartType=='ulb')
                  {
                    return 'piechartULB';
                  }                 

                  else if(size=='small' &&chartType=='designed')
                  {
                    return 'piechartDDQ';
                  }
                  else if(size=='small' &&chartType=='cleaning')
                  {
                  return 'barChartCleaning';
                  }
                  else if(size=='small' &&chartType=='issues')
                  {
                  return 'barChartIssues';
                  }
                  else( size=='expand')
                  {
                  $("#chartContainer").show();
                     $("#stackChartContainer").hide();
                     $(".chart-expand").css("width","700");
                      $(".chart-expand").css("height","360");                 
                    return 'chartContainer';
                  }
                  
                }

                function RedirectToHomePage()
                {
                $("#LPCDPage1").find(".Lpcd-legends").find('ul').show();
                // to check chart in expand mode
                    window.localStorage.removeItem("isExpand");
                //to check type of chart was expanded  
                    window.localStorage.removeItem("EType");
                    window.localStorage.removeItem("EULBname");
                     window.localStorage.removeItem("EULBtype");
                     window.localStorage.removeItem("ULBname");
                     window.localStorage.removeItem("ULBtype");
                     
                    if(preferencesplit!=null && preferencesplit.length>0 && preferencesplit[0]!="Corporations" && preferencesplit[0]!="Municipality")
                    {
                     PreferencesLoad(preferencesplit);
                    }
                    else
                    {
                        CreateChart(null, 'Corporations', null, 'small');
                        }
                    
                    
               
                     $('#Chart').show();
                    $('#expandChart').hide();
                    $('#homepage').find("#chartContainer").show();
                     $.mobile.changePage("#homepage");
                }
               

               function ClosePopup()
                {
                // to check chart in expand mode
                    window.localStorage.removeItem("isExpand");
                //to check type of chart was expanded  
                    window.localStorage.removeItem("EType");
                    window.localStorage.removeItem("EULBname");
                     window.localStorage.removeItem("EULBtype");
                     
                     
                    $("#diveFilter2").show();
               
                     $('#Chart').show();
                    $('#expandChart').hide();
                    $('#homepage').find("#chartContainer").show();
                     $.mobile.changePage("#homepage");
                }
               
                
                
                function CreateChart(chartType,type,ULBName,size)
                {
                $('#pieDetails').hide();
                if(ULBName!=null )
                {
                if(window.localStorage.getItem("isExpand")==null)
                {
                   window.localStorage.removeItem("ULBtype");
                    window.localStorage.setItem("ULBtype",type);
                    window.localStorage.removeItem("ULBname");
                    window.localStorage.setItem("ULBname",ULBName);
                    
                    window.localStorage.removeItem("EULBname");
                 }
                 else{                 
                    window.localStorage.removeItem("EULBname");
                    if(ULBName!="null")
                    {
                    window.localStorage.setItem("EULBname",ULBName);
                    }
                    window.localStorage.setItem("EULBtype",type);
                    
                 }
                }
                else{
                if(window.localStorage.getItem("isExpand")==null)
                {
                    window.localStorage.removeItem("ULBtype");
                    window.localStorage.setItem("ULBtype",type);
                    window.localStorage.removeItem("ULBname");
                    window.localStorage.removeItem("EULBname");
                    window.localStorage.removeItem("EULBtype");
                 }
                 else{                                     
                    window.localStorage.removeItem("EULBname");
                    window.localStorage.setItem("EULBtype",type);
                 }
                    
                }

                if(window.localStorage.getItem("isExpand")!=null)
                {
                    size='expand';
                     $("#expandChart").find("#diveFilter2").removeClass('active');
                        $("#expandChart").find("#diveFilter1").addClass('active');
                }
                if(size=='small' && window.localStorage.getItem("EType")==null)
                {
                $('#Chart').show();
                $('#expandChart').hide();
                }
                else{                
                $('#Chart').hide();
                $('#expandChart').show();
                } 
                 var UlbHeaderText="";
                   if(ULBName!=null)
                   {
                     UlbHeaderText=" - "+ULBName.substr(0,1).toUpperCase()+ULBName.substr(1)
                   }    
                if(window.localStorage.getItem("isExpand")==null)
                {
                   if(UlbHeaderText!="" || type.toLowerCase()=='corporations')
                   {
                    $('#ulbName').text(type.substr(0,1).toUpperCase()+type.substr(1)+UlbHeaderText+ " Daily LPCD");  
                     }
                     else{
                    $('#ulbName').text("Municipalities Daily LPCD");  
                     }                             
                }else{
                   if(UlbHeaderText!="" || type.toLowerCase()=='corporations')
                   {
                    $("#ULBType").text(type.substr(0,1).toUpperCase()+type.substr(1)+UlbHeaderText);   
                    }
                    else{
                    $("#ULBType").text("Municipalities");   
                    }
                      if(window.localStorage.getItem("EType")=='ULBchart')
                    {
                   $("#ExpandType")[0].innerHTML=$("#ULBType")[0].innerHTML+" Daily LPCD";    
                        }                         
                }
                 
                    if(type=='Corporations' )
                   {
                   if(window.localStorage.getItem("EType")==null ||window.localStorage.getItem("EType")=='ULBchart')
                   {
                    $(result).find("Corporations").find("Chart").find("LPCD").each(function () {

                    //To Get LPCD Chart
                     var comfort_COR=$(this).find("Daily").attr('Comfort');
                     comfort_COR=parseInt(comfort_COR)+parseInt(($(this).find("Daily").attr('Good')==null)?0:$(this).find("Daily").attr('Good'));
                     var poor_COR=$(this).find("Daily").attr('Poor');
                     var pdapr_COR=$(this).find("Daily").attr('PendingApproval');
                     var container=GetContainer(size,type,'ulb');                     
                      corporationchart(comfort_COR, poor_COR, pdapr_COR,container,size);
                      if(window.localStorage.getItem("EType")!=null)
                      {
                       $("#homepage").find("div[data-role='content']").each(function()
                         {
                         $(this).find('#diveFilter1').attr('onclick',"FilterDataByDailyWeeklyMonthly('"+type+"','day')");
                         $(this).find('#diveFilter2').attr('onclick',"FilterDataByDailyWeeklyMonthly('"+type+"','week')");                         
                  
                          });
                        }
                   
                    });
                    }
                    if(window.localStorage.getItem("EType")==null ||window.localStorage.getItem("EType")=='designed')
                   {
                    //To Get Design vs Drawn chart
                    var drawn=0;
                    var designed=0
                    var Below10perc=0;
                    var Below25perc=0;
                    var Below50perc=0;
                    var Above50Perc=0;
                    $(result).find("Corporations").each(function () {
                      $(this).find("SourceDataChart").each(function()
                      {
                         
                         Below10perc=parseInt($(this).find("Daily").attr("Below10Perc"));
                         
                          Below25perc=parseInt($(this).find("Daily").attr("Below25Perc"));
                         
                         Below50perc=parseInt($(this).find("Daily").attr("Below50Perc"));
                          Above50Perc=parseInt($(this).find("Daily").attr("Above50Perc"));
                        
                      });
                    });

                    var designeddrawn=GetContainer(size,type,'designed');
                    
                   
                    
                    DesignedDrawnChart(Below10perc,Below25perc,Below50perc,Above50Perc,designeddrawn,size);
                   
                    }
                     if(window.localStorage.getItem("EType")==null ||window.localStorage.getItem("EType")=='cleaning')
                    {
                     GetTankCleaningData(type,'Daily',(window.localStorage.getItem("isExpand")!=null)?true:false,null);
                     }
                      if(window.localStorage.getItem("EType")==null ||window.localStorage.getItem("EType")=='issues')
                    {

                      GetIssuesData(type,'Daily',(window.localStorage.getItem("isExpand")!=null)?true:false,null);
                      }
                   }
                   else
                   {
                   if(window.localStorage.getItem("EType")==null ||window.localStorage.getItem("EType")=='ULBchart')
                   {

                     var good_MUN=0;
                     var comfort_MUN=0;
                     
                     var poor_MUN=0;
                     var acute_MUN=0;
                     var pdapr_MUN=0;


                    $(result).find("Municipalities").each(function () {
                    if(type=='district')
                    {
                   $(result).find("DistrictData").find("District[Name='" + ULBName + "']").each(function () {                                   
                                     $(this).find("LPCD").find("Daily").each(function()
                                     {
                                      good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           
                                        });
                                     });
                      }
                      else{
                          
                      if(ULBName!=null)
                      {
                        $(result).find("Regions").find("RegionData").each(function () {                                   
                                     $(this).find("Region[Name='" + ULBName + "']").find("DistrictAll").find("LPCD").find("Daily").each(function()
                                     {
                                        
                                      good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           
                                        });
                                     });
                          
                                     }
                                      else{

                                $(result).find("Regions").each(function () {                
                                    $(this).find("RegionAll").find("LPCD").find("Daily").each(function () {
                                     
                                         good_MUN=parseInt(good_MUN)+parseInt($(this).attr('Good'));
                                         comfort_MUN=parseInt(comfort_MUN)+parseInt($(this).attr('Comfortable'));
                                          poor_MUN=parseInt(poor_MUN)+parseInt($(this).attr('Poor'));
                                          acute_MUN=parseInt(acute_MUN)+parseInt($(this).attr('Acute'));
                                           pdapr_MUN=parseInt(pdapr_MUN)+parseInt($(this).attr('MPendingApproval'));
                                           
                                        });
                                     });
                                     
                        }
                                     

                      }
                      var container=GetContainer(size,type,'ulb');
                      
                       if(window.localStorage.getItem("EType")!=null)
                      {
                       $("#homepage").find("div[data-role='content']").each(function()
                         {
                         $(this).find('#eFilter1').attr('onclick',"FilterDataByDailyWeeklyMonthly('"+type+"','day')");
                         $(this).find('#eFilter2').attr('onclick',"FilterDataByDailyWeeklyMonthly('"+type+"','week')");                                         
                  
                          });
                        }
                      municipalitieschart(good_MUN,comfort_MUN, poor_MUN, acute_MUN,pdapr_MUN,container,size);

                    });
                    }
                    if(window.localStorage.getItem("EType")==null ||window.localStorage.getItem("EType")=='designed')
                   {

                     //To Get Design vs Drawn chart
                    var drawn=0;
                    var designed=0
                    var Below10perc=0;
                    var Below25perc=0;
                    var Below50perc=0;
                       var Above50Perc=0;
                   
                    $(result).find("Municipalities").each(function () {
                     if(type=='district')
                    {
                    $(result).find("DistrictData").find("District[Name='" + ULBName + "']").each(function () {                                   
                                     $(this).find("SourceDataChart").find("Daily").each(function()
                                     {
                                     Below10perc=parseInt(Below10perc)+parseInt($(this).attr('Below10Perc'));
                                     Below25perc=parseInt(Below25perc)+parseInt($(this).attr('Below25Perc'));
                                      Below50perc=parseInt(Below50perc)+parseInt($(this).attr('Below50Perc'));
                                         Above50Perc=parseInt(Above50Perc)+parseInt($(this).attr('Above50Perc'));
                                     

                                           
                                        });
                                     });
                       }
                       else{
                    if(ULBName!=null)
                    {
                        $(result).find("Regions").find("RegionData").each(function () {                                   
                                     $(this).find("Region[Name='" + ULBName + "']").find("DistrictAll").find("SourceDataChart").find("Daily").each(function()
                                   {
                                     Below10perc=parseInt(Below10perc)+parseInt($(this).attr('Below10Perc'));
                                     Below25perc=parseInt(Below25perc)+parseInt($(this).attr('Below25Perc'));
                                      Below50perc=parseInt(Below50perc)+parseInt($(this).attr('Below50Perc'));
                                       Above50Perc=parseInt(Above50Perc)+parseInt($(this).attr('Above50Perc'));
                                     
                                   });
                                  });
                     }
                     else{
                                $(result).find("Regions").find("RegionAll").each(function () {                                   
                                     $(this).find("SourceDataChart").find("Daily").each(function()
                                   {
                                     Below10perc=parseInt(Below10perc)+parseInt($(this).attr('Below10Perc'));
                                     Below25perc=parseInt(Below25perc)+parseInt($(this).attr('Below25Perc'));
                                      Below50perc=parseInt(Below50perc)+parseInt($(this).attr('Below50Perc'));
                                       Above50Perc=parseInt(Above50Perc)+parseInt($(this).attr('Above50Perc'));
                                     
                                   });
                                  });
                     }
                                 
                       }

                    });
                    var designeddrawn=GetContainer(size,type,'designed');

                    
                       if(window.localStorage.getItem("EType")!=null)
                      {
                       $("#homepage").find("div[data-role='content']").each(function()
                         {
                         $(this).find('#eFilter1').attr('onclick',"FilterDataByDailyWeeklyMonthly('"+type+"','day')");
                         $(this).find('#eFilter2').attr('onclick',"FilterDataByDailyWeeklyMonthly('"+type+"','week')");
                         
                  
                          });
                        }
                    DesignedDrawnChart(Below10perc,Below25perc,Below50perc,Above50Perc,designeddrawn,size);
                    }

                    if(window.localStorage.getItem("EType")==null ||window.localStorage.getItem("EType")=='cleaning')
                    {
                     GetTankCleaningData(type,'Daily',(window.localStorage.getItem("isExpand")!=null)?true:false,ULBName);
                     }
                      if(window.localStorage.getItem("EType")==null ||window.localStorage.getItem("EType")=='issues')
                    {
                      GetIssuesData(type,'Daily',(window.localStorage.getItem("isExpand")!=null)?true:false,ULBName);
                      }
                   }
                }
                              

            
                function corporationchart(comfort_COR, poor_COR, pdapr_COR,container,type) {
                    // Create the chart
                   var  wid= (type=='expand')?730: 510;
                   var  hei=(type=='expand')?320: 210;
                   var  ledgendWid= (type=='expand')?35: 25;
                   var  ledgendHei=(type=='expand')?15: 13;
                   var fontsize=(type=='expand')?"16px": "14px";  
                   
                   Highcharts.setOptions({
                    colors: ['#c9e726', '#F98702','#666666'],
                    });                 
                    chart = new Highcharts.Chart({
                        chart: {
                            renderTo: container,
                            width: parseInt(wid),
                            height:parseInt(hei),
                            type: 'pie',
                            backgroundColor: 'transparent'
                            
                        },
                
                        title: {  
                            text: '', 
                        },
                        yAxis: {
                            title: { 
                                enabled: false
                            }
                        },
                        plotOptions: {
                            pie: {
                                animation: false,
                                dataLabels: {
                                    distance:
                                    -13,
                                    color : '#fff',
                                    formatter
                                    : function() {
                                        if(this.y>0)
                                        {
                                        var str = Highcharts.numberFormat(this.y, 0);
                                        return '<b>' + str + '</b>';
                                            }
                                    },
                                    style
                                    : {
                                        fontSize:fontsize
                                        
                                    },
                                    verticalAlign:'middle', 
                                    align: 'center',
                                    x:-2,
                                    y:-3
                                }
                            }
                        },
                        tooltip: {
                            formatter: function() {
                                return '<b>' + this.point.name + '</b>';
                            },
                            enabled: false
                        },
                        credits: {
                            enabled: false
                        },
                        legend: {                             
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle',
                            x:-100,
                            y: -5,
                            borderWidth: 0,
                            itemStyle: {
                                color: '#404243',
                                paddingBottom: '20px',
                                fontSize:fontsize,
                                width:'350px'
                            },
                            symbolWidth: ledgendWid,                           
                            symbolHeight:ledgendHei
                
                
                        },  
                
                        series: [
                            {
                                size: '90%',
                                innerSize: '65%',
                                showInLegend:true,
                                borderColor:'none',
                                point: {
                                    events: {
                                        legendItemClick: function () {  
                                        if($("#homepage").find("#eFilter2").parent().hasClass("active"))
                                        {
                                        // $("#homepage").find("#error")[0].innerHTML='Only view is availble';
                                          //   return false;
                                        }                                                                              
                                            window.localStorage.removeItem("filter");
                                            window.localStorage.setItem("filter", "normal");
                                            if (this.x == 0) {
                                                if (this.y != 0) {
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "CorpChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "Compfort");
                
                                                    AllData();
                                                }
                                            }
                                            else if (this.x == 1) {
                                                if (this.y != 0) {
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "CorpChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "Poor");
                
                                                    AllData();
                                                }
                                            }
                                            else {
                                                if (this.y != 0) {
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "CorpChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "PendingApproval");
                
                                                    AllData();
                                                }
                                            }
                                            return false;
                                        },
                                        click: function(e) {
                                        
                                            window.localStorage.removeItem("filter");
                                            window.localStorage.setItem("filter", "normal");
                                            if (this.x == 0) {
                                                if (this.y != 0) {                                                
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "CorpChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "Compfort");
                
                                                    AllData();
                                                }
                                            }
                                        else if (this.x == 1) {
                                                if (this.y != 0) {                                                
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "CorpChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "Poor");
                
                                                    AllData();
                                                }
                                            }
                                            else {
                                                if (this.y != 0) {
                                                
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "CorpChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "PendingApproval");
                
                                                    AllData();
                                                }
                                            }
                                            return false;
                                        }
                                    }
                
                                },
                                data: [
                                    { name: 'Comfortable (70-109 <br/>Lpcd)  ' + comfort_COR + BuildLegendText(comfort_COR), y: parseInt(comfort_COR) },
                                    { name: 'Poor (Below 70 Lpcd) <br/> ' + poor_COR + BuildLegendText(poor_COR), y: parseInt(poor_COR) },
                                    { name: 'Pending Approval <br/> ' + pdapr_COR + BuildLegendText(pdapr_COR), y: parseInt(pdapr_COR) }
                                ]
                            }
                        ]
                    });
                }


                
                function municipalitieschart(good_MUN, comfort_MUN, poor_MUN, acute_MUN, pdapr_MUN,container,size) {  
                    
              var  wid= (size=='expand')?730: 500;
                   var  hei=(size=='expand')?320: 210;   
                   var  ledgendWid= (size=='expand')?35: 25;
                   var  ledgendHei=(size=='expand')?15: 13;
                   var fontsize=(size=='expand')?"16px": "14px";         
                    Highcharts.setOptions({
                        colors: ['#6cc04e', '#c9e726','#F98702', '#e94541','#666666']  //#00b4ff
                    });
                    chart = new Highcharts.Chart({
                
                        chart: {
                            renderTo: container,
                            width:parseInt(wid),
                            height:parseInt(hei),
                            type: 'pie',
                            backgroundColor: 'transparent',                                  
                
                        },
                        title: {
                            text:'',
                        },
                        yAxis: {
                            title: {
                                enabled: false
                            }
                        },
                        plotOptions: {
                            pie: { 
                                animation: false,           
                                shadow: false,
                                dataLabels: {
                                    distance: -13,
                                    color: '#fff',
                                    formatter: function() {
                                       if(this.y>0)
                                        {
                                        var str = Highcharts.numberFormat(this.y, 0);
                                        return '<b>' + str + '</b>';
                                            }
                                    },
                                    style: {
                                        fontSize: fontsize
                                    },
                                    verticalAlign: 'middle', 
                                    align: 'center',
                                    x:-2,
                                    y:-3								
                
                                },
                            }
                        },
                        tooltip: {
                            formatter: function() {
                                return '<b>' + this.point.name + '</b>';
                            },
                            enabled: false
                        },
                        credits: {
                            enabled: false
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle',
                            x: -100,
                            y: -5,
                            borderWidth: 0,                        
                            itemStyle: {
                                color: '#000',
                                paddingBottom:'20px',
                                fontSize:fontsize,
                                width:'350px'
                            },
                            symbolHeight:ledgendHei,
                            symbolWidth:ledgendWid
                        },  
                        series: [
                            {
                                size: '90%',
                                innerSize: '65%',
                                showInLegend:true,
                                borderColor:'none', 
                                point: {
                                    events: {
                                        legendItemClick: function () {
                                          if($("#homepage").find("#eFilter2").parent().hasClass("active"))
                                        {
                                        // $("#homepage").find("#error")[0].innerHTML='Only view is availble';
                                          //   return false;
                                        }                                                               
                                            window.localStorage.removeItem("filter");
                                            window.localStorage.setItem("filter", "normal");
                                            if (this.x == 0) {
                                                if (this.y != 0) {
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "MunChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "Good");
                
                                                    AllData();
                                                }
                                            }
                                            else if (this.x == 1) {
                                                if (this.y != 0) {
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "MunChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "Comfortable");
                
                                                    AllData();
                                                }
                                            }
                                            else if (this.x == 2) {
                                                if (this.y != 0) {
                                                    /window.location = "CorporationList.html";/
                
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "MunChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "Poor");
                
                                                    AllData();
                                                }
                                            }
                                            else if (this.x == 3) {
                                                if (this.y != 0) {
                                                    /window.location = "CorporationList.html";/
                
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "MunChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "Acute");
                
                                                    AllData();
                                                }
                                            }
                                            else {
                                                if (this.y != 0) {
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "MunChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "MPendingApproval");
                
                                                    AllData();
                                                }
                                            }
                                            return false;
                                        },
                                        click: function(e) {
                                             
                                            window.localStorage.removeItem("filter");
                                            window.localStorage.setItem("filter", "normal");
                                            if (this.x == 0) {
                                                if (this.y != 0) {
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "MunChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "Good");
                
                                                    AllData();
                                                }
                                            }
                                            else if (this.x == 1) {
                                                if (this.y != 0) {
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "MunChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "Comfortable");
                                                    AllData();
                                                }
                                            }
                                            else if (this.x == 2) {
                                                if (this.y != 0) {
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "MunChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "Poor");
                
                                                    AllData();
                                                }
                                            }
                                            else if (this.x == 3) {
                                                if (this.y != 0) {
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "MunChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "Acute");
                
                                                    AllData();
                                                }
                                            }
                                            else {
                                                if (this.y != 0) {
                                                    window.localStorage.removeItem("HType");
                                                    window.localStorage.setItem("HType", "MunChart");
                                                    window.localStorage.removeItem("Charttype");
                                                    window.localStorage.setItem("Charttype", "MPendingApproval");
                
                                                    AllData();
                                                }
                                            }
                                            return false;
                                        }
                                    }
                                },
                
                                data: [["Good (Above 90 <br/> Lpcd) - " + good_MUN + BuildLegendText(good_MUN), parseInt(good_MUN), ],
                                 ["Comfortable (40-89 <br/>Lpcd) -" + comfort_MUN + BuildLegendText(comfort_MUN), parseInt(comfort_MUN)], 
                                 ["Poor(20-39 <br/>Lpcd) - " + poor_MUN + BuildLegendText(poor_MUN), parseInt(poor_MUN)], 
                                 ["Acute (Below 20 <br/> Lpcd) - " + acute_MUN + BuildLegendText(acute_MUN), parseInt(acute_MUN)],
                                  ["Pending Approval <br/>" + pdapr_MUN + BuildLegendText(pdapr_MUN), parseInt(pdapr_MUN)]]
                            }
                        ]
                    });
                }
                
                function GetHeaderName(evt) {
                
                    var Header = $(evt).find(".corp-header").text();
                    window.localStorage.removeItem("HType");
                    window.localStorage.setItem("HType", Header);	 
                       
                    AllData();
                }
                
                function BuildLegendText(count)
                {
                  var LegendText="";
                  ulbtype="";
                   if(window.localStorage.getItem("isExpand")==null)
                  {
                     ulbtype=window.localStorage.getItem("ULBtype");
                  }
                  else
                  {
                  ulbtype=window.localStorage.getItem("EULBtype");
                  }
                  if(ulbtype=='Corporations')
                  {
                      if(count>1)
                      {
                             LegendText='Corporations';
                        }
                       else{
                            LegendText='Corporation';
                       }
                  }
                  else 
                  {

                  if(window.localStorage.getItem("isExpand")==null)
                  {
                  if (window.localStorage.getItem("ULBtype").toLowerCase()=='region'){
                   
                    if(count>1)
                      {
                         LegendText=(window.localStorage.getItem("ULBname")==null)?'Municipalities':'Municipalities';
                         }
                         else{
                           LegendText=(window.localStorage.getItem("ULBname")==null)?'Municipality':'Municipality';
                         }
                      }                   
                   
                   else{
                   if(count>1)
                      {
                         LegendText='Municipalities';
                         }
                         else{
                           LegendText='Municipality';
                         }
                      }
                   }
                  
                  else{
                   
                    if (window.localStorage.getItem("EULBtype").toLowerCase()=='region'){
                   
                    if(count>1)
                      {
                         LegendText=(window.localStorage.getItem("EULBname")==null)?'Municipalities':'Municipalities';
                         }
                         else{
                           LegendText=(window.localStorage.getItem("EULBname")==null)?'Municipality':'Municipality';
                         }
                      }                   
                   
                   else{
                   if(count>1)
                      {
                         LegendText='Municipalities';
                         }
                         else{
                           LegendText='Municipality';
                         }
                      }
                   
                  }
                  }
                  
                  


                  return ' '+LegendText;
                }
            
            function DesignedDrawnChart(below10perc, below25perc, below50perc,Above50Perc,container,size) {
                
                    // Create the chart
                 var  wid= (size=='expand')?730: 530;
                   var  hei=(size=='expand')?320: 210; 
                   var  ledgendWid= (size=='expand')?35: 25;
                   var  ledgendHei=(size=='expand')?15: 13;  
                   var fontsize=(size=='expand')?"16px": "14px";         
                    Highcharts.setOptions({
                        colors: ['#6cc04e', '#c9e726','#F98702', '#e94541','#666666'], 
                        data: [7,2]
                    }); 
                    chart = new Highcharts.Chart({
                        chart: {
                            renderTo: container,
                            width: parseInt(wid),
                            height: parseInt(hei),
                            type: 'pie',
                            backgroundColor: 'transparent',
                        },
                
                        title: {  
                            text: '', 
                        },
                        yAxis: {
                            title: { 
                                enabled: false
                            }
                        },
                        plotOptions: {
                            pie: {
                                animation: false,
                                dataLabels: {
                                    distance:
                                    -13,
                                    color
                                    : '#fff',
                                    formatter
                                    : function() {
                                        var str = Highcharts.numberFormat(this.y, 0);
                                        return '<b>' + str + '</b>';
                                    },
                                    style
                                    : {
                                        fontSize:fontsize
                                        
                                    },
                                    verticalAlign:
                                    'middle', 
                                    align
                                    : 'center',
                                    x
                                    :-2,
                                    y
                                    :-3
                                }
                            }
                        },
                        tooltip: {
                            formatter: function() {
                                return '<b>' + this.point.name + '</b>';
                            },
                            enabled: false
                        },
                        credits: {
                            enabled: false
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle',
                            x:-115,
                            y: -5,
                            borderWidth: 0,
                            itemStyle: {
                                color: '#404243',
                                paddingBottom: '20px',
                                fontSize:fontsize                                
                            },
                            symbolHeight:ledgendHei,
                            symbolWidth:ledgendWid
                
                
                        },  
                
                        series: [
                            {
                                size: '90%',
                                innerSize: '65%',
                                showInLegend:true,
                                borderColor:'none',
                                point: {
                                    events: {
                                        legendItemClick: function () {                                          
                                            if(window.localStorage.getItem("isExpand")!=null)
                                            {
                                             showError();
                                            }
                                            return false;
                                        },
                                        click: function(e) {                                             
                                          if(window.localStorage.getItem("isExpand")!=null)
                                            {
                                             showError();
                                            }
                                            
                                            return false;
                                        }
                                    }
                                },
                                data: [
                                    { name: '0% to 10%  below <br/> designed  quantity ', y: parseInt(below10perc) },
                                    { name: '11% to 25% below <br/> designed  quantity ', y: parseInt(below25perc) },
                                    { name: '26% to 50% below <br/> designed  quantity ', y: parseInt(below50perc) },
                                	{ name: 'More than 50%  below <br/> designed  quantity ', y: parseInt(Above50Perc) }
                                ]
                            }
                        ]
                    });
                }


                function LoadBarChart( xAxis,yAxis,name,container,size)
                {
                
        var  wid= (type=='expand')?850: 530;
                   var  hei=(type=='expand')?550: 210; 
        $('#'+container).highcharts({
            chart: {
                type: 'column',
                margin: [ 75, 75, 150, 110],
                height: hei,
                width: wid
               
            },
            title: {
                text: name
            },
            
            xAxis: {
                categories: xAxis,
                labels: {                    
                    align: 'right',
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Verdana, sans-serif',
                        align:'center',
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Count'
                }
                
            },
            legend: {
            verticalAlign: 'bottom',
                enabled: false,
                height:'50px'
                
            },
            tooltip: {
                pointFormat: '{point.y}',
            },
            series: [{
                name: xAxis,
                data: yAxis ,
                point:{
                events: {
                                        legendItemClick: function () {                                          
                                            
                                            return false;
                                        },
                                        click: function(e) {                                             
                                          
                                            
                                            return false;
                                        }
                                    }

                },
                
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: 'black',
                    align: 'right',
                    verticalAlign: 'bottom',
                    x: 4,
                    y: 10,
                    style: {
                        fontSize: '1px',
                        fontFamily: 'Verdana, sans-serif',
                        
                    }
                }               
            }
            
            ]
        });    
    
                }




                                
                function CreatePieChart(data,container,size) {   
              var  wid= (size=='expand')?730: 530;
                   var  hei=(size=='expand')?320: 210;   
                   var  ledgendWid= (size=='expand')?35: 25;
                   var  ledgendHei=(size=='expand')?15: 13; 
                   var fontsize=(size=='expand')?"16px": "14px";
                            
                    Highcharts.setOptions({
                        colors: ['#c9e726', '#666666']  //#00b4ff
                    });
                    chart = new Highcharts.Chart({
                
                        chart: {
                            renderTo: container,    
                            width:parseInt(wid),
                            height:parseInt(hei),
                            type: 'pie',
                            backgroundColor: 'transparent', 
                                                       
                
                        },
                        title: {
                            text:'',
                        },
                        yAxis: {
                            title: {
                                enabled: false
                            }
                            
                        },
                        plotOptions: {
                            pie: { 
                                animation: false,           
                                shadow: false,
                                dataLabels: {
                                    distance: -13,
                                    color: '#fff',
                                    formatter: function() {
                                        var str = Highcharts.numberFormat(this.y, 0);
                                        return '<b>' + str + '</b>';
                                    },
                                    style: {
                                        fontSize: fontsize
                                    },
                                    verticalAlign: 'middle', 
                                    align: 'center',
                                    x:-2,
                                    y:-3								
                
                                },
                            }
                        },
                        tooltip: {
                            formatter: function() {
                                return '<b>' + this.point.name + '</b>';
                            },
                            enabled: false
                        },
                        credits: {
                            enabled: false
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle',
                            x: -100,
                            y: -5,
                            borderWidth: 0,                        
                            itemStyle: {
                                color: '#404243',
                                padding:'20px',
                                fontSize:fontsize,
                                width:'350px'
                            },
                            symbolHeigth:ledgendHei,
                            symbolWidth:ledgendWid
                        },  
                        series: [
                            {
                                size: '90%',
                                innerSize: '65%',
                                showInLegend:true,
                                borderColor:'none', 
                                point: {
                                    events: {
                                        legendItemClick: function () {                                          
                                             if(window.localStorage.getItem("isExpand")!=null)
                                            {
                                             showError();
                                            }
                                            return false;
                                        },
                                        click: function(e) {                                             
                                           if(window.localStorage.getItem("isExpand")!=null)
                                            {
                                             showError();
                                            }
                                            
                                            return false;
                                        }
                                    }
                                },
                
                                data: data
                            }
                        ]
                    });
                }

