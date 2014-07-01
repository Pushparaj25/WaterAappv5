function GetRadorInput(xAxis, yAxis) {
    var schema = '<table id="freq" border="0" cellspacing="0" cellpadding="0"><tr nowrap bgcolor="#CCCCFF"><th colspan="9" class="hdr">Data</th>' +
		'</tr>';
    var legend = '';
    var Column = '';

    for (var index = 0; index < xAxis.length; index++) {
        Column += '<tr nowrap>'
        
         if (index % 2 == 0) {

        if (index == 0) {
            legend += '<tr nowrap><th class="freq">ULB</th>';
            for (var i = 0; i < yAxis.length; i++) {
                legend +='<th class="freq">'+ yAxis[i].name+'</th>'
            }
            legend += '</tr>'; 
        }

            Column += '<td class="dir">' + xAxis[index] + '</td>';
            for (var i = 0; i < yAxis.length; i++) {
                var dataArr = yAxis[i].data;
                Column += '<td class="data">' + dataArr[index] + '</td>';

            }
        }
        else {
            Column += '<td class="dir">' + xAxis[index] + '</td>';
            for (var i = 0; i < yAxis.length; i++) {
                var dataArr = yAxis[i].data;                
                Column += '<td class="data">' + dataArr[index] + '</td>';
            }
        }


        Column += '</tr>';
    }
    schema += legend + Column + '</table>';

    $("#radorTable")[0].innerHTML = schema;

    //Hide show legend
    $("#stackChartContainer").find(".bottomlegends").find("#legend1").hide();
    $("#stackChartContainer").find(".bottomlegends").find("#legend2").hide();
    $("#stackChartContainer").find(".bottomlegends").find("#legend3").hide();
    $("#stackChartContainer").find(".bottomlegends").find("#legend4").hide();
    $("#stackChartContainer").find(".bottomlegends").find("#legend5").hide();
    $("#stackChartContainer").find(".bottomlegends").find("#legend6").hide();
    $("#stackChartContainer").find(".bottomlegends").find("#legend7").hide();
    for (var i = 1; i <= yAxis.length; i++) {
        $("#stackChartContainer").find(".bottomlegends").find("#legend" + i).show();
        $("#stackChartContainer").find(".bottomlegends").find("#legend" + i).find(".legend" + i).css("background", yAxis[i - 1].color);
        $("#stackChartContainer").find(".bottomlegends").find("#legend" + i).find("#legendvalue" + i).text(yAxis[i - 1].name);
    }
   
   }


   function GenrateRadorChart(chartname) {
       $('#pieDetails').hide();
       $('#Issuedetails').hide();
       $(".chart-expand").css("width","800");
       $(".chart-expand").css("height","390");
       $('#' + chartname).show();
       $('#chartContainer').highcharts({
           data: {
               table: 'freq',
               startRow: 1,
               endRow: 130,
               endColumn: 10,
           },
           colors: ["#6cc04e", "#c9e726", "#F98702", "#e94541", "#666666", "#492970", "#7798BF",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
           chart: {
               
               polar: true,
               type: 'column',
               width: '400',
               height: '330',
               margin:[50,80,50,100]
             
           },
            credits:
            {
                enabled: false
            },

           title: {
               text: ''
           },

           subtitle: {
               text: ''
           },

           pane: {
               size: '100%'
           },

           legend: {
               enabled: false,
               reversed: true,
               align: 'right',
               verticalAlign: 'top',
               y: 100,
               layout: 'vertical'
           },

           xAxis: {
               tickmarkPlacement: 'between',
               
               
       },

       yAxis: {
           min: 0,
           endOnTick: false,
           showLastLabel: true,
           pointPlacement: 'between',           
           title: {
               text: ''
           },
           labels: {
               formatter: function () {
                   return this.value + '';
               }
           }
       },

       tooltip: {
           valueSuffix: ''
       },

       plotOptions: {
           series: {
               stacking: 'normal',
               shadow: false,
               groupPadding: 0,
               point: {
                   events: {
                       click: function (e) {
                           LoadRadarCharTable(e);
                       }
                   }
               }
           }
       }
   });
   }

   function LoadRadarCharTable(e) {
       
//       alert(window.localStorage.getItem("EType"));
//       alert(window.localStorage.getItem("EULBname"));
      //      alert(window.localStorage.getItem("EULBtype"));



       var legendArr = e.point.series.name.split('%');
       if (window.localStorage.getItem("EType") == 'designed') {
           GetDesignedDrawnQuantity($.trim(legendArr[0]), window.localStorage.getItem("EULBtype"), window.localStorage.getItem("EULBname"), e.point.name);
       }
       else if (window.localStorage.getItem("EType") == 'cleaning') {
           GetCleaningStatus($.trim(legendArr[0]), window.localStorage.getItem("EULBtype"), window.localStorage.getItem("EULBname"), e.point.name);
       }
       else if (window.localStorage.getItem("EType") == 'issues') {
           getconsolidateddata($.trim(legendArr[0]), window.localStorage.getItem("EULBtype"), window.localStorage.getItem("EULBname"), e.point.name);
          // GetIssuesStatus($.trim(legendArr[0]), window.localStorage.getItem("EULBtype"), window.localStorage.getItem("EULBname"), e.point.name);
       }

   }

   function GetDesignedDrawnQuantity(legend, type, name,UlbName) {
       var DesignedDrawnDetails = new Array();
       var columndetails = new Array();
       var details = null;
       if (window.localStorage.getItem("EULBtype") == 'Corporations') {
           $(ulbDetails).find('Corporation[Name=' + UlbName + ']').find('SourceData Source').each(function () {
               if ($(this).attr("Utilization") == legend) {
                   details = new Object;
                   details.Name = $(this).attr("Name");
                   details.Column1 = $(this).attr("DesignedQty");
                   details.Column2 = $(this).attr("Quantity");
                   DesignedDrawnDetails.push(details);
               }
           });
       }
       else {
           $(ulbDetails).find('Municipality[Name=' + UlbName + ']').find('SourceData Source').each(function () {
               if ($(this).attr("Utilization") == legend) {
                   details = new Object;
                   details.Name = $(this).attr("Name");
                   details.Column1 = $(this).attr("DesignedQty");
                   details.Column2 = $(this).attr("Quantity");
                   DesignedDrawnDetails.push(details);
               }
           });
       }
       columndetails.push('Source');
       columndetails.push('Designed Qty/MLD');
       columndetails.push('Drawn Qty/MLD');
       GenerateTable(DesignedDrawnDetails, columndetails,UlbName);
   }

   function GetCleaningStatus(legend, type, name, UlbName) {
       
       var ScheduledDetails = new Array();
       var columndetails = new Array();
       var details = null;
       var filter = (legend.toLowerCase() == 'scheduled') ? 'ScheduledDate' : 'CleanedDate';
       if (type != null) {
           $(ulbDetails).find('Corporation[Name=' + UlbName + ']').find('TankData Tank').each(function () {
               if ($(this).attr(filter) != '-') {
                   details = new Object;
                   details.Name = $(this).attr("Name");
                   details.Column1 = $(this).attr("ScheduledDate");
                   details.Column2 = $(this).attr("CleanedDate");
                   ScheduledDetails.push(details);
               }
           });
       }
       else {
           $(ulbDetails).find('Municipality[Name=' + UlbName + ']').find('TankData Tank').each(function () {
               if ($(this).attr(filter) == legend) {
                   details = new Object;
                   details.Name = $(this).attr("Name");
                   details.Column1 = $(this).attr("ScheduledDate");
                   details.Column2 = $(this).attr("CleanedDate");
                   ScheduledDetails.push(details);
               }
           });
       }
       columndetails.push('Name');
       columndetails.push('Scheduled');
       columndetails.push('Cleaned');
       GenerateTable(ScheduledDetails, columndetails,UlbName);
   }



function getconsolidateddata(legend, type, name, UlbName) 
   {
    var ScheduledDetails = new Array();
       var columndetails = new Array();
       var details = null;
       var filter = legend;

    if (window.localStorage.getItem("EULBtype") == 'Corporations') {
       $(lpcdDetails).find('Corporation[Name=' + UlbName + ']').find('Week[Name="Week1"]').find('Dates Data').each(function () {
            var cObject=this;
                details = new Object;
                details.Name = $(this).attr("Date");
                 $(this).find('Reasons').find('TReason').each(function()
                  {
                    var reasonCount=0;
                    var reason=$(this).attr('Reason');
                     var reasonArr=reason.split(',');
                     for(k=0;k<reasonArr.length;k++)
                     {
                       if($.trim(reasonArr[k])!="")
                       {
                       reasonCount++;
                       }
                     }
                   
                    details.Column1 = reasonCount;

                   $(cObject).find('Actions').find('Action').each(function()
                  {
                    var actionCount=0;
                    var action=$(this).attr('Content');
                     var actionArr=action.split(',');
                   for(k=0;k<actionArr.length;k++)
                     {
                       if($.trim(actionArr[k])!="")
                       {
                       actionCount++;
                       }
                     }
                   details.Column2 = length;
                  
                  
                  });
              });
              ScheduledDetails.push(details);
       });
   }
   else{
        $(lpcdDetails).find('Municipality[Name=' + UlbName + ']').find('Week[Name="Week1"]').find('Dates MDate').each(function () {
         var cObject=this;
                details = new Object;
                details.Name = $(this).attr("Date");
                 $(this).find('Reasons').find('TReason').each(function()
                  {
                    var reasonCount=0;
                    var reason=$(this).attr('Reason');
                     var reasonArr=reason.split(',');
                     for(k=0;k<reasonArr.length;k++)
                     {
                       if($.trim(reasonArr[k])!="")
                       {
                       reasonCount++;
                       }
                     }
                   
                    details.Column1 = reasonCount;

                   $(cObject).find('Actions').find('Action').each(function()
                  {
                  
                    var actionCount=0;
                    var action=$(this).attr('Content');
                     var actionArr=action.split(',');
                   for(k=0;k<actionArr.length;k++)
                     {
                       if($.trim(actionArr[k])!="")
                       {
                       actionCount++;
                       }
                     }
                   details.Column2 = length;
                  
                  
                  });

                 /* }*/
                  });

                   
				

               
                if((details.Column1!='' && details.Column1!=null) || (details.Column2!='' && details.Column2!=null))
                {
                    ScheduledDetails.push(details);
                }

        });
   }
    columndetails.push('Date');
       columndetails.push('Reason');
       columndetails.push('Action');
       GenerateTable(ScheduledDetails, columndetails,UlbName,true);
   }


   function GetIssuesStatus(legend, type, name, UlbName,date) {
       
       var ScheduledDetails = new Array();
       var columndetails = new Array();
       var details = null;
       var filter = legend;

       datechar1=date.substring(0,3)+', '+date.substring(3,5)+' '+date.substring(5,8);


       if (window.localStorage.getItem("EULBtype") == 'Corporations') {
       
           $(lpcdDetails).find('Corporation[Name=' + UlbName + ']').find('Week[Name="Week1"]').find('Dates Data').each(function () {
             var cObject=this;
                details = new Object;                
               date = $(this).attr("Date");
               if(date==datechar1)
               {
                $(cObject).find('Reasons').find('TReason').each(function()
                  {
                 /* if($(this).attr('Reason').indexOf(filter)!=-1)
                  {     */            
                 if($(this).attr('Reason').length>0)
                 {                
                 var Actionarr=new Array();     
                   var Reasonarr=$(this).attr('Reason').split(',');
                    $(cObject).find('Actions').find('Action').each(function()
                  {
                  
                   Actionarr = $(this).attr('Content').split(',');                  
                  
                  });

                    
                   for(var i=0;i<Reasonarr.length;i++)
                   {
                   details=new Object();
                     details.Name = i+1;
                      details.Column1 = Reasonarr[i];
                      if(Actionarr.length>i)
                      {
                        details.Column2 = Actionarr[i];
                      }
                      else{
                      details.Column2 = '';
                      }
                       if((details.Column1!='' && details.Column1!=null) || (details.Column2!='' && details.Column2!=null))
                {
                	   ScheduledDetails.push(details);
                }
                   }


                  
                 } 

                 /* }*/
                  });
                  }
               

               
           });
       }
       else {
           $(lpcdDetails).find('Municipality[Name=' + UlbName + ']').find('Dates MDate').each(function () {
              var cObject=this;
                details = new Object;                
               date = $(this).attr("Date");
               if(date==datechar1)
               {
                $(cObject).find('Reasons').find('TReason').each(function()
                  {
                 /* if($(this).attr('Reason').indexOf(filter)!=-1)
                  {     */            
                 if($(this).attr('Reason').length>0)
                 {                
                 var Actionarr=new Array();     
                   var Reasonarr=$(this).attr('Reason').split(',');
                    $(cObject).find('Actions').find('Action').each(function()
                  {
                  
                   Actionarr = $(this).attr('Content').split(',');                  
                  
                  });

                    
                   for(var i=0;i<Reasonarr.length;i++)
                   {
                   details=new Object();
                     details.Name = i+1;
                      details.Column1 = Reasonarr[i];
                      if(Actionarr.length>i)
                      {
                        details.Column2 = Actionarr[i];
                      }
                      else{
                      details.Column2 = '';
                      }
                       if((details.Column1!='' && details.Column1!=null) || (details.Column2!='' && details.Column2!=null))
                {
                	   ScheduledDetails.push(details);
                }
                   }


                  
                 } 

                 /* }*/
                  });
                  }
               

           });
       }
       columndetails.push('Item No');
       columndetails.push('Issue');
       columndetails.push('Action Taken');
       GenerateTable(ScheduledDetails, columndetails,UlbName,false,'',legend,true,date);
   }



   function GenerateTable(data, ColumnDetails,UlbName,islink,type,legend,isimage,date) {
   
       var Sourcestruc = '<div><div style=width:100%;text-align:center;margin:5px><span>'+UlbName+'</span></div> <table><thead>';
       
       for (var i = 0; i < ColumnDetails.length; i++) {
             if(isimage==null||isimage=='undefined')
           {
           Sourcestruc += "<td style='text-align: center;'><span class='design_mld'>" + ColumnDetails[i] +"</span></td>";
           }
           else
           {
          if(i==0)
          {
              Sourcestruc+='<tr><td><img style="margin-right:50px; margin-top:3px; float:left;"  title="" onclick="IssueDetailSwap();" src="images/Previous.jpg"/><td><td colspan=2><span style="float:right;">Date '+date+'</span><td><tr>'
           Sourcestruc += "<td><span class='design_mld'>" + ColumnDetails[i] +"</span></td>";
           }
           else{
            Sourcestruc += "<td><span class='design_mld'>" + ColumnDetails[i] +"</span></td>";
           }
           
           }
           }
          
       
       Sourcestruc += '</thead></table></div></div><div style="width:100%;height:200px;text-align:center;margin:5px;overflow:scroll;"><table>';
       var total = 0;
       for (var j = 0; j < data.length; j++) {
           var col1='';
           var col2='';
           if(data[j].Column1.length>40)
           {
               col1=data[j].Column1.substring(0,40)+'...';
              
}
           else
           {
               col1=data[j].Column1;
}
            if(data[j].Column2.length>40)
           {
               col2=data[j].Column2.substring(0,40)+'...';
               
}
           else
           {
               col2=data[j].Column2;
}

        if(islink==null||islink==false)
         {
           
           Sourcestruc += "<tr><td style='text-indent: 0%;'>" + data[j].Name + "</td><td style='text-align: center;'><label class='tooltip' title='" + data[j].Column1+ "'>"+col1 +"</label> </td><td style='text-align: center;'><label class='tooltip' title='" + data[j].Column2+ "'>"+col2+"</td></tr>";
           }
           else{
            val=data[j].Name.replace(',',''); 
            val=val.replace(' ',''); 
            val=val.replace(' ',''); 
           Sourcestruc += "<tr><td style='text-indent: 0%;'><a href='#' style='color:#333;' onclick=GetIssuesStatus('"+legend+"','"+type+"','','"+UlbName+"','"+val+"');>" + data[j].Name + "</a></td><td style='text-align: center;'><label class='tooltip' title='" + data[j].Column1+ "'>"+col1 +"</label> </td><td style='text-align: center;'><label class='tooltip' title='" + data[j].Column2+ "'>"+col2+"</td></tr>";
           }
       }
       Sourcestruc += '</table></div>';

      
       if(ColumnDetails[0]!='Item No')
       {
        $('#pieDetails')[0].innerHTML = Sourcestruc;
       $('.tooltip').tooltip();
       $('#pieDetails').show();
       $('#stackChartContainer').show();
       
       }
       else{
       $('#Issuedetails')[0].innerHTML = Sourcestruc;
       $('#Issuedetails').show();
     $('#pieDetails').hide();
    $('#chartContainer').hide();
    $('#stackChartContainer').hide();
    }
 		
	   }


function IssueDetailSwap()
{
$('#Issuedetails').hide();
   $('#pieDetails').show();
   $('#chartContainer').show();
   $('#stackChartContainer').show();
}
