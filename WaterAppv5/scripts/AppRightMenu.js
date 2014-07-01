var field = "district";
var isSlide5visible=false;

function ShowChosedPref(callType) {
    
      var id="";    
    //type=null
    
    if(callType==null || callType=="null")
    {
        id="#homepage #preferencesList";
        type="null";
    }
    else
    {
        id="#PrefDetails #preferencesList";
        type='pref'
    }
    
    $(id).find("#corpPref").find("ul").empty();
    $(id).find("#regionPref").find("ul").empty();
    $(id).find("#distPref").find("ul").empty();
    $(id).find("#ulbPref").find("ul").empty();
    var crtl="";
    
    if (preferencesplit != null && preferencesplit[0] == "Corporations") {        
         crtl = '<li><a href="#"><span class="regnameq">' + preferencesplit[1] + '</span></a><input type="image"'+
        'class="right" src="images/tick.png" name="Corporations" onclick="getPreferences(this,'+"'"+type+"'"+');" value=' +  preferencesplit[1] + ' /></li>';
        $(id).find("#corpPref").find("ul").append(crtl);   
          if($(id).find("#prefCorpList").is(':hidden'))
        {
         $(id).find("#corpPref").show();
        }
        }
    
    if (preferencesplit != null && preferencesplit[0] == "region" ) {
       crtl = "<li><a href='#'><span  class='regnameq'>" + preferencesplit[1]  + "</span></a><input class='right' onclick=getPreferences(this,"+"'"+type+"'"+"); type='image' src='images/tick.png' name='region' value=" + preferencesplit[1]  + " /></li>";
        $(id).find("#regionPref").find("ul").append(crtl);
        if($(id).find("#prefRegionList").is(':hidden'))
    {
         $(id).find("#regionPref").show();
        }
        }
    if (preferencesplit != null && preferencesplit[0] == field) {
    
        crtl = "<li><a href='#'><span  class='regnameq'>" + preferencesplit[1]  + "</span></a><input class='right' onclick=getPreferences(this,"+"'"+type+"'"+"); type='image' src='images/tick.png' name='district' value=" + preferencesplit[1]  + " /></li>";
        $(id).find("#distPref").find("ul").append(crtl);
        if($(id).find("#prefDistrictList").is(':hidden'))
    {
         $(id).find("#distPref").show();
        }
    }
    if (preferencesplit != null && preferencesplit[0] == "Municipality") {
    crtl = "<li><a href='#'><span  class='regnameq'>" + preferencesplit[1]  + "</span></a><input class='right' onclick=getPreferences(this,"+"'"+type+"'"+"); type='image' src='images/tick.png' name='Municipality' value=" + preferencesplit[1]  + " /></li>"; 
        $(id).find("#ulbPref").find("ul").append(crtl);
        if($(id).find("#prefULBList").is(':hidden'))
        {
         $(id).find("#ulbPref").show();
        }
 }
 $("#diveFilter1").show();
 $("#diveFilter2").show();
    }

 function Preferences() {
    $("#preferencesList").show();
    $("#preferencesList").find("#prefULBList").find("ul").empty();    
    $("#preferencesList").find("#prefDistrictList").find("ul").empty();    
    $("#filter").hide();  
     $("#preferencesList").find("#prefCorpList").hide();
       $("#preferencesList").find("#prefRegionList").hide();
     $("#preferencesList").find("#prefDistrictList").hide();
     $("#preferencesList").find("#prefULBList").hide();     
    ShowChosedPref();
}
var corpName = "";
var corpList = "";
var regionName = "";
var regionList = "";
var distName = "";
var distList = "";
var munName = "";
var munList = "";
function GetCorporationList(ctrl,callType) {
     var id="";     
    
    if(callType==null || callType=="null")
    {
        id="#homepage #preferencesList";
        
    }
    else
    {
        id="#PrefDetails #preferencesList";
    }
    
    
    var corpList="";
    $(id).find("#prefCorpList").find("ul").empty();
    $(result).find("Corporations").find("IssuesChart").find("Details").find("Corporation").each(function () {

        corpName = $(this).attr("Name");
        if (preferencesplit != null && preferencesplit[0] == "Corporations" && preferencesplit[1] == corpName) {
            corpList = '<li><a href="#"><span class="regnameq">' + corpName + '</span></a><input type="image" class="right" src="images/tick.png" name="Corporations" onclick="getPreferences(this,'+"'"+type+"'"+');" value=' + corpName + ' /></li>';
            
        }
        else {
            corpList = '<li><a href="#"><span class="regnameq">' + corpName + '</span></a><input type="image" class="right" src="images/plus.png" name="Corporations" onclick="getPreferences(this,'+"'"+type+"'"+');" value=' + corpName + ' /></li>';
        }


      $(id).find("#prefCorpList").find("ul").append(corpList);
        
 

    });
    
   

    $(id).find("#prefCorpList").toggle();
       $(id).find("#prefRegionList").hide();
     $(id).find("#prefDistrictList").hide();
     $(id).find("#prefULBList").hide();    
    if($(id).find("#prefCorpList").is(':visible'))
    {
        
        $(id).find("#corpPref").hide();
        
        }
    else
    {
        
        $(id).find("#corpPref").show();
       
        }
        
   

}

function GetRegionList(callType) {
    
    
   type="null";
     var id="";     
    
    if(callType==null || $.trim(callType)=="null")
    {
        id="#homepage #preferencesList";
        type="null";
    }
    else
    {
        
        id="#PrefDetails #preferencesList";
        type='pref';
    }
    $(id).find("#prefRegionList").find("ul").html('');
      
    if ($(id).find("#prefRegionList").find("ul").find("li").length == 0) {        
        $(result).find("Regions").find("RegionAll").find("IssuesChart").find("Region").each(function () {

            regionName = $(this).attr("Name");
            if (preferencesplit != null && preferencesplit[0] == "region" && preferencesplit[1] == regionName) {
                regionList = "<li onclick=GetDistrict('" + regionName + "','"+type+"');><a href='#'><span  class='regnameq'>" + regionName + "</span></a><input class='right' onclick=getPreferences(this,'"+type+"'); type='image' src='images/tick.png' name='region' value=" + regionName + " /></li>";
            }
            else {
                regionList = "<li onclick=GetDistrict('" + regionName + "','"+type+"');><a href='#'><span  class='regnameq'>" + regionName + "</span></a><input class='right' onclick=getPreferences(this,'"+type+"'); type='image' src='images/plus.png' name='region' value=" + regionName + " /></li>";
            }

            
            $(id).find("#prefRegionList").find("ul").append(regionList);
                
            
        });

         
    }
  
       $(id).find("#prefCorpList").hide();
    $(id).find("#prefRegionList").toggle();
    // $(id).find("#prefDistrictList").hide();     
    $(id).find("#prefULBList").find("ul").html('');
    if($(id).find("#prefRegionList").is(':visible'))
    {
        
        $(id).find("#regionPref").hide();
        
        }
    else
    {
        
        $(id).find("#regionPref").show();
       
        }

    $("#diveFilter1").hide();
    $("#diveFilter2").hide();
}

function GetDistrict(regionName,callType) {
    var id=""; 
    var type=null;
       type=callType;
    
    if(callType==null || callType=="null")
    {
        id="#homepage #preferencesList";
        type="null";
    }
    else
    {
        id="#PrefDetails #preferencesList";
    }
    
    if(regionName!=null)
    {
    $(id).find("#prefDistrictList").find("ul").empty();
    $(result).find("Regions").find("Region[Name='" + regionName + "']").each(function () {
        $(this).find("DistrictData").find("District").each(function () {

            distName = $(this).attr("Name");
            if (preferencesplit != null && preferencesplit[0] == "district" && preferencesplit[1] == distName) {
                distList = "<li onclick=GetULBList('" + distName +"','"+type+"');><a href='#'><span class='regnameq'>" + distName + "</span></a><input class='right' type='image' src='images/tick.png'  onclick=getPreferences(this,"+"'"+type+"'"+"); name='district' value=" + distName + " /></li>";
            }
            else {
                distList = "<li onclick=GetULBList('" + distName +"','"+type+"');><a href='#'><span class='regnameq'>" + distName + "</span></a><input class='right' type='image' src='images/plus.png' onclick=getPreferences(this,"+"'"+type+"'"+"); name='district' value=" + distName + " /></li>";
            }

            $(id).find("#prefDistrictList").find("ul").append(distList);

        });
    });

   //  $("#preferencesList").find("#prefCorpList").hide();
    $(id).find("#prefDistrictList").show();
        $(id).find("#prefULBList").find("ul").html('');
    // $("#preferencesList").find("#prefRegionList").hide();
       
        }
    else
    {
        if($(id).find("#prefDistrictList").find("ul")[0].innerHTML!="")
        {
             $(id).find("#prefDistrictList").toggle(); 
            }
        else
        {
            $("#Alertbox").find(".issuecnt").html("Please select region to view district.");
            $("#Alertbox").show();
        }
        }
    
    
if($(id).find("#prefDistrictList").is(':visible'))
    {
        
        $(id).find("#distPref").hide();
        
        }
    else
    {
        
        $(id).find("#distPref").show();

    }
    $("#diveFilter1").show();
    $("#diveFilter2").show();
    
}

function CloseAlertBox()
{
     $("#Alertbox").hide();
    }

function GetULBList(distName,callType) {
    var type="null";
    if(callType==null || callType=="null")
    {
        id="#homepage #preferencesList";
        type="null";
    }
    else
    {
        id="#PrefDetails #preferencesList";
         type="pref";
    }
    
    if(distName!=null)
    {
    $(id).find("#prefULBList").find("ul").empty();
    $(result).find("Regions").find("District[Name='" + distName + "']").each(function () {
        $(this).find("IssuesChart").find("Details").find("Municipality").each(function () {

            munName = $(this).attr("Name");
            
            if (preferencesplit != null && preferencesplit[0] == "Municipality" && preferencesplit[1] == munName) {

                munList = "<li><a href='#'><span class='regnameq'>" + munName + "</span></a><input type='image' class='right' src='images/tick.png' onclick=getPreferences(this,"+"'"+type+"'"+"); name='Municipality' value=" + munName + " /></li>";
            }
            else {
                munList = "<li><a href='#'><span class='regnameq'>" + munName + "</span></a><input type='image' class='right' src='images/plus.png' onclick=getPreferences(this,"+"'"+type+"'"+"); name='Municipality' value=" + munName + " /></li>";
            }

            $(id).find("#prefULBList").find("ul").append(munList);

        });
        if(munName!="")
        {
             $(id).find("#prefULBList").find("ul").append("");
			}
    });

     // $("#preferencesList").find("#prefCorpList").hide();
    //  $("#preferencesList").find("#prefDistrictList").hide();
    //  $("#preferencesList").find("#prefRegionList").hide();
    $(id).find("#prefULBList").show();
        }
    else
    {
       if($(id).find("#prefULBList").find("ul")[0].innerHTML!="")
        {
            $(id).find("#prefULBList").toggle();        
            }
        else
    {
         $("#Alertbox").find(".issuecnt").html("Please select district to view ULB.");
            $("#Alertbox").show();
    }
    }
    
     if($(id).find("#prefULBList").is(':visible'))
    {
        
        $(id).find("#ulbPref").hide();
        
        }
    else
    {
        
        $(id).find("#ulbPref").show();
       
        }


}
function Close(callType)
{
if(callType==null)
{
    $("#homepage").find("#prefAlert").hide();
//$("#homepage").find(".fade").hide();
    }
else
    
{
    $("#PrefDetails").find("#prefAlert").hide();
  //  $("#PrefDetails").find(".fade").hide();
    }
  }

var choosedPreferences = "";
function getPreferences(ctrl,callType) {
      var id="";    
    popupID="";
    
    if(callType==null || $.trim(callType)=="null")
    {
        id="#homepage #preferencesList";
       popupID="#homepage";
    }
    else
    {
        id="#PrefDetails #preferencesList";
        popupID="#PrefDetails";
        
    }
    
    
    if (ctrl.src.indexOf("images/plus.png")!=-1) {
        if ($(id).find('input[src*="tick.png"]').length >0) {
       // if ($('#preferencesList').find('img').length > 0) {
        
            var pctrl=$(id).find('input[src*="tick.png"]')[0];
            if(preferencesplit[0].indexOf('Corp')!=-1)
            {
                $(popupID).find("#prefAlert").find(".issuecnt").text("Current Selection - Corporation "+preferencesplit[1]);            
            }
            else
            {
                $(popupID).find("#prefAlert").find(".issuecnt").text("Current Selection - "+preferencesplit[0].substr(0,1).toUpperCase()+preferencesplit[0].substr(1)+" "+preferencesplit[1]);            
            }
            
             
          // $(popupID).find("#prefAlert").find(".issuecnt").text("Select only one item");            
           $(popupID).find("#prefAlert").show();
            
           // $(popupID).find(".fade").show();
           // return false;            
        }
        else {
            ctrl.src = "images/tick.png";
            choosedPreferences = ctrl.name + ";" + ctrl.defaultValue;
            preferencesplit = choosedPreferences.split(';');              
            PreferencesLoad(preferencesplit,callType);
            ShowChosedPref(callType);
           window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS);
        }
    }
    else {
        
        $(id).find('input[src*="tick.png"]').attr('src','images/plus.png');
        choosedPreferences="";
            preferencesplit=null;
        ShowChosedPref(callType);
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS);
    }
}

function ShowHide()
{
    
    }

 function gotFS(fileSystem) {                  
               // $.twFile.save(filePath, newcontent)                
                fileSystem.root.getFile(filepath, { create: true, exclusive: false }, gotFileEntry);

            }

            function gotFileEntry(fileEntry) {
               
                fileEntry.createWriter(gotFileWriter);
                 
            }

            function gotFileWriter(writer) {
                writer.onwrite = function (evt) {
                };

                writer.write(choosedPreferences);
 
            }

function PreferencesLoad(preferencesplit,callType) {
    

    window.localStorage.removeItem("HType");
    window.localStorage.setItem("HType", "Corporations");
    if (preferencesplit != null && preferencesplit.length > 0) {
        
        if (preferencesplit[0] == 'Corporations') {  
            
           
           LoadULBLPCDChart(preferencesplit[0],preferencesplit[1]);
            window.localStorage.removeItem("redirect");
            window.localStorage.setItem("redirect", "LPCD");
        }
        else if (preferencesplit[0] == 'Municipality') {
            LoadULBLPCDChart(preferencesplit[0],preferencesplit[1]);
            window.localStorage.removeItem("redirect");
            window.localStorage.setItem("redirect", "LPCD");
        }
        
        else {
             
            
            CreateChart(null, preferencesplit[0], preferencesplit[1], 'small');
            if(callType==null)
            {
            window.localStorage.removeItem("redirect");
            window.localStorage.setItem("redirect", "home");
                }
            else
            {
                $("#PrefDetails").find("#prefRegionList").hide();
                $.mobile.changePage('#homepage', { transition: 'slide' });  
            }
        }
    }
    else {
        $("#PrefDetails").find("#prefRegionList").hide();
        CreateChart(null, 'Corporations', null, 'small');
         if(callType==null)
            {
            window.localStorage.removeItem("redirect");
            window.localStorage.setItem("redirect", "home");
                }
            else
            {
               $.mobile.changePage('#homepage', { transition: 'slide' });  
            }
    }
}

function LoadULBLPCDChart(ulbtype, ulbName) {
    var date = "";
    var LPCD = "";
    var formCorpstruc = "";
    var CurrentULB = "";
    var Ulbcount = 1;
    var ulb1 = "";
    var todaydate = "";

    var data = (ulbtype.toLowerCase() == 'corporations') ? "CorporationData" : "MunicipalityData";
    var type = (ulbtype.toLowerCase() == 'corporations') ? "Corporation" : "Municipality";
    if (ulbtype.toLowerCase() == 'corporations') {
        corpLPCDLoad(ulbName);
    }
    else {
        MuniciaplityLPCDLoad(ulbName);
    }    
    if(ulbDetails!=null &&  ulbDetails!="")
    {
        
        if(!isreload)
        {
            isreload=false;
            $.mobile.changePage('#PrefDetails', { transition: 'slide' });
          $("#PrefDetailsfilter").panel("close");
            
        }
       
        }

}

function MuniciaplityLPCDLoad(ulbName) {
    
    
    $(lpcdDetails).find("MunicipalityData").find("Municipality").each(function () {

        if ($(this).attr("Name") == ulbName) {
            CurrentULB = $(this).attr("Name");
            
            formCorpstruc = "";
            $(this).find("Week[Name='Week1']").each(function () {
                $(this).find("MDate").each(function () {
                    date = $(this).attr("Date");
                    LPCD = $(this).attr("LPCD");
                    todaydate = $(this).attr("TodayDate");
                    var reason = [];
                    $(this).find("TReason").each(function () {
                        var rea = $(this).attr("Reason");

                        $.each(rea.split(','), function (i, val) {
                            if (val != "" && typeof (val) != "undefined") {
                                reason.push(val);
                            }
                        });
                    });

                    if (reason.length != 0) {
                        if (LPCD >= 0 && LPCD < 20) {
                            if ($.trim(todaydate) == "Today") {
                                if (LPCD <= 0) {
                                    pdaprulb.push(CurrentULB);
                                }
                                else {
                                    acuteulb.push(CurrentULB);
                                }
                                formCorpstruc = formCorpstruc + '<li class="Today reasonbg" onclick="reasonc(this,this)"><span class="todayreason Reason-icon"><a class="treason" href="#" onclick="reasonc(this,this)" rel="external"><img src="images/reasonicon.png"/></a><span class="hidedate">' + date + '</span><span class="type">Municipalities</span><span class="hideulb">' + CurrentULB + '</span></span><a class="Today-status" onclick="LoadPreferenceList();" rel="external"><span class="type">Municipalities</span><span class="date">' + date + '</span><div class="Lpcd"><span class="lpcd-val">' + LPCD + '</span><span>LPCD</span></div><span class="corp-name">' + CurrentULB + '</span></a></li>';
                            }
                            else {
                                formCorpstruc = formCorpstruc + '<li class="Week-days reasonbg" onclick="reasonc(this,this)"><span class="Reason-icon"><a class="treason" rel="external" href="#" onclick="reasonc(this,this)"><img src="images/reasonicon.png"/></a><span class="hidedate">' + date + '</span><span class="type">Municipalities</span><span class="hideulb">' + CurrentULB + '</span></span><span class="month">' + date.split(',')[1] + '</span><span class="day">' + date.split(',')[0] + '</span><span class="tap-img"><img src="images/acute-tap.png"/></span><span class="curr-lpcd">' + LPCD + '</span></li>';
                            }
                        }
                        else if (LPCD <= 39 && LPCD >= 20) {
                            if ($.trim(todaydate) == "Today") {
                                poorulb.push(CurrentULB);
                                formCorpstruc = formCorpstruc + '<li class="Today reasonbg" onclick="reasonc(this,this)"><span class="todayreason Reason-icon"><a class="treason" href="#" onclick="reasonc(this,this)" rel="external"><img src="images/reasonicon.png"/></a><span class="hidedate">' + date + '</span><span class="type">Municipalities</span><span class="hideulb">' + CurrentULB + '</span></span><a class="Today-status"  onclick="LoadPreferenceList();" rel="external"><span class="type">Municipalities</span><span class="date">' + date + '</span><div class="Lpcd"><span class="lpcd-val">' + LPCD + '</span><span>LPCD</span></div><span class="corp-name">' + CurrentULB + '</span></a></li>';
                            }
                            else {
                                formCorpstruc = formCorpstruc + '<li class="Week-days reasonbg" onclick="reasonc(this,this)"><span class="Reason-icon"><a class="treason" rel="external" href="#" onclick="reasonc(this,this)"><img src="images/reasonicon.png"/></a><span class="hidedate">' + date + '</span><span class="type">Municipalities</span><span class="hideulb">' + CurrentULB + '</span></span><span class="month">' + date.split(',')[1] + '</span><span class="day">' + date.split(',')[0] + '</span><span class="tap-img"><img src="images/poor-tap.png"/></span><span class="curr-lpcd">' + LPCD + '</span></li>';
                            }
                        }
                        else if (LPCD <= 89 && LPCD >= 40) {
                            if ($.trim(todaydate) == "Today") {
                                comfortulb.push(CurrentULB);
                                formCorpstruc = formCorpstruc + '<li class="Today reasonbg" onclick="reasonc(this,this)"><span class="todayreason Reason-icon"><a class="treason" href="#" onclick="reasonc(this,this)" rel="external"><img src="images/reasonicon.png"/></a><span class="hidedate">' + date + '</span><span class="type">Municipalities</span><span class="hideulb">' + CurrentULB + '</span></span><a class="Today-status"  onclick="LoadPreferenceList();" rel="external"><span class="type">Municipalities</span><span class="date">' + date + '</span><div class="Lpcd"><span class="lpcd-val">' + LPCD + '</span><span>LPCD</span></div><span class="corp-name">' + CurrentULB + '</span></a></li>';
                            }
                            else {
                                formCorpstruc = formCorpstruc + '<li class="Week-days reasonbg" onclick="reasonc(this,this)"><span class="Reason-icon"><a class="treason" rel="external" href="#" onclick="reasonc(this,this)"><img src="images/reasonicon.png"/></a><span class="hidedate">' + date + '</span><span class="type">Municipalities</span><span class="hideulb">' + CurrentULB + '</span></span><span class="month">' + date.split(',')[1] + '</span><span class="day">' + date.split(',')[0] + '</span><span class="tap-img"><img src="images/comfort-tap.png"/></span><span class="curr-lpcd">' + LPCD + '</span></li>';
                            }
                        }
                        else {
                            if ($.trim(todaydate) == "Today") {
                                goodulb.push(CurrentULB);
                                formCorpstruc = formCorpstruc + '<li class="Today reasonbg" onclick="reasonc(this,this)"><span class="todayreason Reason-icon"><a class="treason" href="#" onclick="reasonc(this,this)" rel="external"><img src="images/reasonicon.png"/></a><span class="hidedate">' + date + '</span><span class="type">Municipalities</span><span class="hideulb">' + CurrentULB + '</span></span><a class="Today-status"  onclick="LoadPreferenceList();" rel="external"><span class="type">Municipalities</span><span class="date">' + date + '</span><div class="Lpcd"><span class="lpcd-val">' + LPCD + '</span><span>LPCD</span></div><span class="corp-name">' + CurrentULB + '</span></a></li>';
                            }
                            else {
                                formCorpstruc = formCorpstruc + '<li class="Week-days reasonbg" onclick="reasonc(this,this)"><span class="Reason-icon"><a class="treason" rel="external" href="#" onclick="reasonc(this,this)"><img src="images/reasonicon.png"/></a><span class="hidedate">' + date + '</span><span class="type">Municipalities</span><span class="hideulb">' + CurrentULB + '</span></span><span class="month">' + date.split(',')[1] + '</span><span class="day">' + date.split(',')[0] + '</span><span class="tap-img"><img src="images/good-tap.png"/></span><span class="curr-lpcd">' + LPCD + '</span></li>';
                            }
                        }
                    }
                    else {
                        if (LPCD >= 0 && LPCD < 20) {
                            if ($.trim(todaydate) == "Today") {
                                if (LPCD <= 0) {
                                    pdaprulb.push(CurrentULB);
                                }
                                else {
                                    acuteulb.push(CurrentULB);
                                }
                                formCorpstruc = formCorpstruc + '<li class="Today"><a class="Today-status"  onclick="LoadPreferenceList();" rel="external"><span class="type">Municipalities</span><span class="date">' + date + '</span><div class="Lpcd"><span class="lpcd-val">' + LPCD + '</span><span>LPCD</span></div><span class="corp-name">' + CurrentULB + '</span></a></li>';
                            }
                            else {
                                formCorpstruc = formCorpstruc + '<li class="Week-days"><span class="month">' + date.split(',')[1] + '</span><span class="day">' + date.split(',')[0] + '</span><span class="tap-img"><img src="images/acute-tap.png"/></span><span class="curr-lpcd">' + LPCD + '</span></li>';
                            }
                        }
                        else if (LPCD <= 39 && LPCD >= 20) {
                            if ($.trim(todaydate) == "Today") {
                                poorulb.push(CurrentULB);
                                formCorpstruc = formCorpstruc + '<li class="Today"><a class="Today-status"  onclick="LoadPreferenceList();" rel="external"><span class="type">Municipalities</span><span class="date">' + date + '</span><div class="Lpcd"><span class="lpcd-val">' + LPCD + '</span><span>LPCD</span></div><span class="corp-name">' + CurrentULB + '</span></a></li>';
                            }
                            else {
                                formCorpstruc = formCorpstruc + '<li class="Week-days"><span class="month">' + date.split(',')[1] + '</span><span class="day">' + date.split(',')[0] + '</span><span class="tap-img"><img src="images/poor-tap.png"/></span><span class="curr-lpcd">' + LPCD + '</span></li>';
                            }
                        }
                        else if (LPCD <= 89 && LPCD >= 40) {
                            if ($.trim(todaydate) == "Today") {
                                comfortulb.push(CurrentULB);
                                formCorpstruc = formCorpstruc + '<li class="Today"><a class="Today-status" onclick="LoadPreferenceList();" rel="external"><span class="type">Municipalities</span><span class="date">' + date + '</span><div class="Lpcd"><span class="lpcd-val">' + LPCD + '</span><span>LPCD</span></div><span class="corp-name">' + CurrentULB + '</span></a></li>';
                            }
                            else {
                                formCorpstruc = formCorpstruc + '<li class="Week-days"><span class="month">' + date.split(',')[1] + '</span><span class="day">' + date.split(',')[0] + '</span><span class="tap-img"><img src="images/comfort-tap.png"/></span><span class="curr-lpcd">' + LPCD + '</span></li>';
                            }
                        }
                        else {
                            if ($.trim(todaydate) == "Today") {
                                goodulb.push(CurrentULB);
                                formCorpstruc = formCorpstruc + '<li class="Today"><a class="Today-status"  onclick="LoadPreferenceList();" rel="external"><span class="type">Municipalities</span><span class="date">' + date + '</span><div class="Lpcd"><span class="lpcd-val">' + LPCD + '</span><span>LPCD</span></div><span class="corp-name">' + CurrentULB + '</span></a></li>';
                            }
                            else {
                                formCorpstruc = formCorpstruc + '<li class="Week-days"><span class="month">' + date.split(',')[1] + '</span><span class="day">' + date.split(',')[0] + '</span><span class="tap-img"><img src="images/good-tap.png"/></span><span class="curr-lpcd">' + LPCD + '</span></li>';
                            }
                        }
                    }
                });
            });

            var ulb1 =  "<ul>" + formCorpstruc + "</ul>";
            var Page2 = '<div class="title corporation ' + CurrentULB + '">' + ulb1 + '</div>';
            $("#watercontPrefList").html(Page2);
            
        }

    });

    EndIndex = 1;
    StartIndex=1

    $("#PrefDetails").find(".Lpcd-legends").find('ul').hide();
    $("#PrefDetails").find(".Lpcd-legends").find(".ULBname")[0].innerHTML = "Municipality - " + CurrentULB;
   // $.mobile.changePage('#LPCDPage1', { transition: 'slide' });
}

function corpLPCDLoad(ulbName) {
    LPCD = "";
    var todaydate = "";
    var formCorpstruc = "";
    var CurrentULB = "";
    var Ulbcount = 1;
    var ulb1 = "";
    regionName = "";
    districtName = "";

    SlideCount = 1;
    StartIndex = SlideCount;

    $(lpcdDetails).find("CorporationData").each(function () {       

        $(this).find("Corporation").each(function () {

            //Altered to allow good in comfort legend
            if (($(this).attr("Name") == ulbName)) {
                
                CurrentULB = $(this).attr("Name");

                formCorpstruc = "";

                $(this).find("Week[Name='Week1']").each(function () {
                    $(this).find("Data").each(function () {
                        var date = $(this).attr("Date");
                        LPCD = $(this).attr("LPCD");
                        todaydate = $(this).attr("TodayDate");
                        var reason = [];
                        $(this).find("TReason").each(function () {
                            var rea = $(this).attr("Reason");
                            $.each(rea.split(','), function (i, val) {
                                if (val != "" && typeof (val) != "undefined") {
                                    reason.push(val);
                                }
                            });
                        });
                        if (reason.length != 0) {
                            if (parseInt(LPCD) >= 0 && parseInt(LPCD) < 70) {
                                if ($.trim(todaydate) == "Today") {
                                    formCorpstruc = formCorpstruc + '<li class="Today reasonbg" onclick="reasonc(this,this)"><span class="todayreason Reason-icon"><a class="treason" href="#" onclick="reasonc(this,this)" rel="external"><img src="images/reasonicon.png"/></a><span class="hidedate">' + date + '</span><span class="type">CorpChart</span><span class="hideulb">' + CurrentULB + '</span></span><a class="Today-status"  onclick="LoadPreferenceList();" rel="external"><span class="type">CorpChart</span><span class="date">' + date + '</span><div class="Lpcd"><span class="lpcd-val">' + LPCD + '</span><span>LPCD</span></div><span class="corp-name">' + CurrentULB + '</span></a></li>';
                                }
                                else {
                                    formCorpstruc = formCorpstruc + '<li class="Week-days reasonbg" onclick="reasonc(this,this)"><span class="Reason-icon"><a class="treason" rel="external" href="#" onclick="reasonc(this,this)"><img src="images/reasonicon.png"/></a><span class="hidedate">' + date + '</span><span class="type">CorpChart</span><span class="hideulb">' + CurrentULB + '</span></span><span class="month">' + date.split(',')[1] + '</span><span class="day">' + date.split(',')[0] + '</span><span class="tap-img"><img src="images/poor-tap.png"/></span><span class="curr-lpcd">' + LPCD + '</span></li>';
                                }
                            }
                            else if (parseInt(LPCD) >= 70) {
                                if ($.trim(todaydate) == "Today") {
                                    formCorpstruc = formCorpstruc + '<li class="Today reasonbg" onclick="reasonc(this,this)"><span class="todayreason Reason-icon"><a class="treason" href="#" onclick="reasonc(this,this)" rel="external"><img src="images/reasonicon.png"/></a><span class="hidedate">' + date + '</span><span class="type">CorpChart</span><span class="hideulb">' + CurrentULB + '</span></span><a class="Today-status"  onclick="LoadPreferenceList();" rel="external"><span class="type">CorpChart</span><span class="date">' + date + '</span><div class="Lpcd"><span class="lpcd-val">' + LPCD + '</span><span>LPCD</span></div><span class="corp-name">' + CurrentULB + '</span></a></li>';
                                }
                                else {
                                    formCorpstruc = formCorpstruc + '<li class="Week-days reasonbg" onclick="reasonc(this,this)"><span class="Reason-icon"><a class="treason" rel="external" href="#" onclick="reasonc(this,this)"><img src="images/reasonicon.png"/></a><span class="hidedate">' + date + '</span><span class="type">CorpChart</span><span class="hideulb">' + CurrentULB + '</span></span><span class="month">' + date.split(',')[1] + '</span><span class="day">' + date.split(',')[0] + '</span><span class="tap-img"><img src="images/comfort-tap.png"/></span><span class="curr-lpcd">' + LPCD + '</span></li>';
                                }
                            }
                        }
                        else {
                            if (parseInt(LPCD) >= 0 && parseInt(LPCD) < 70) {
                                if ($.trim(todaydate) == "Today") {
                                    formCorpstruc = formCorpstruc + '<li class="Today"><a class="Today-status"  onclick="LoadPreferenceList();" rel="external"><span class="type">CorpChart</span><span class="date">' + date + '</span><div class="Lpcd"><span class="lpcd-val">' + LPCD + '</span><span>LPCD</span></div><span class="corp-name">' + CurrentULB + '</span></a></li>';
                                }
                                else {
                                    formCorpstruc = formCorpstruc + '<li class="Week-days"><span class="month">' + date.split(',')[1] + '</span><span class="day">' + date.split(',')[0] + '</span><span class="tap-img"><img src="images/poor-tap.png"/></span><span class="curr-lpcd">' + LPCD + '</span></li>';
                                }
                            }
                            else if (parseInt(LPCD) >= 70) {
                                if ($.trim(todaydate) == "Today") {
                                    formCorpstruc = formCorpstruc + '<li class="Today"><a class="Today-status" onclick="LoadPreferenceList();" rel="external"><span class="type">CorpChart</span><span class="date">' + date + '</span><div class="Lpcd"><span class="lpcd-val">' + LPCD + '</span><span>LPCD</span></div><span class="corp-name">' + CurrentULB + '</span></a></li>';
                                }
                                else {
                                    formCorpstruc = formCorpstruc + '<li class="Week-days"><span class="month">' + date.split(',')[1] + '</span><span class="day">' + date.split(',')[0] + '</span><span class="tap-img"><img src="images/comfort-tap.png"/></span><span class="curr-lpcd">' + LPCD + '</span></li>';
                                }
                            }
                        }
                    });
                });
                              
            }
        });
    })
    var ulb1 =  "<ul>" + formCorpstruc + "</ul>";
    var Page2 = '<div class="title corporation ' + CurrentULB + '">' + ulb1 + '</div>';
    $("#watercontPrefList").html(Page2);
    EndIndex = 1;
  //  $.mobile.changePage('#LPCDPage1', { transition: 'slide' });
    $("#PrefDetails").find(".Lpcd-legends").find('ul').hide();    
    $("#PrefDetails").find(".Lpcd-legends").find(".ULBname")[0].innerHTML = "Corporation - " + CurrentULB;
    
}

function LoadChartInPageLoad() {
    
 if (preferences != "" && preferences!=null) {
     
        preferencesplit = preferences.split(';');
    }
    else
    {        preferencesplit=new Array();
        }
    
    PreferencesLoad(preferencesplit);
}

function PageLoad(isreference) {


    var Dateobject=new Date().getTime();
    
    $.ajax({
        type: "GET",
		url: "http://cma.tn.gov.in:81/WaterApp/XML11.xml?d="+Dateobject,
      //  url: "XMLBreakup/XML1.xml",
        dataType: "xml",
        async: false,
        success:
         function (xData, status) {
             result = xData;
             finaltime = new Date();
             var dif = (finaltime.getTime() - startime.getTime()) / 1000;
             $("#load").text("Loaded (" + dif + "sec)");
             LoadXML();

             if (isreference != null) {
                 $("#load").text("Loaded");

             }
             PreferencesLoad(preferencesplit);
         },
        error: function (e) {
            //$("#load").text('No Internet Connection');
            $("#load").text('Loaded');
            $.ajax({
                type: "GET",
               // url: "XMLBreakup/XML1.xml",
                url: "http://cma.tn.gov.in:81/WaterApp/XML11.xml?d="+Dateobject,
                dataType: "xml",
                async: false,
                success: function (xml) {
                    result = xml;
                    LoadXML();

                    if (isreference != null) {
                        PreferencesLoad(preferencesplit);
                    }

                }
            });
        }
    });

}

function PrefRefresh ()
{
    $.mobile.changePage('#PrefDetails', { transition: 'slide' });
    $("#PrefDetailsfilter").panel("close");
    isSlide5visible=false;
    ShowHideSlider(false);
    ischildTrigger=false;
    // $("#PrefDetailspopup").hide();            
    //$("#PrefDetailspopup").find(".fade").hide();
   
 }

function LoadPreferenceList(detailsType){
    

              var ULBName = $("#PrefDetails").find(".corp-name").text();    
                var type="";
    
    if($("#PrefDetails").find('.Today').find(".type").length>1)
    {
       type = $("#PrefDetails").find('.Today').find(".type")[0].innerHTML;  
    }
    else
    {
        type = $("#PrefDetails").find('.Today').find(".type").text(); 
    }
    
                window.localStorage.removeItem("ULBname");
                window.localStorage.setItem("ULBname", ULBName);
                window.localStorage.removeItem("ULBtype");
                window.localStorage.setItem("ULBtype", type);
                window.localStorage.removeItem("HType");
                window.localStorage.setItem("HType", type);
    
      if(type.indexOf('Mun')==-1)
            {
            $(".topmenuname").text("Corporation - "+ULBName);
            }
            else
            {
             $(".topmenuname").text("Municiplity - "+ULBName);
            }
               
    if( detailsType==null || detailsType=='source')
    {
        
        loadsource('pref');  
             $.mobile.changePage($("#prefCorpGraph"), {
                    showLoadMsg: false
                }); 
        
               
        }
    if(detailsType=='turbidity')
    {        
        
        if (isSlide5visible) {
             $.mobile.changePage($("#prefWaterQualityHalf1"), {
                    showLoadMsg: false
              });
            
            }
        else
        {
            $.mobile.changePage($("#prefwaterQuality"), {
                    showLoadMsg: false
              });
             LoadWaterTurbidityMonthly('pref');          
            LoadWaterTurbidityHalfYearlypref('pref');
        }
        
    }
    
    if(detailsType=='turbidity1')
    {
        
         $.mobile.changePage($("#prefWaterQualityHalf1"), {
                    showLoadMsg: false
          }); 
            
        
    }
    
     if(detailsType=='turbidity2')
    {
        
         $.mobile.changePage($("#prefWaterQualityHalf2"), {
                    showLoadMsg: false
          }); 
            
        
    }
      if(detailsType=='turbidity3')
    {
        
         $.mobile.changePage($("#prefWaterQualityHalf3"), {
                    showLoadMsg: false
          }); 
            
        
    }
    
     if(detailsType=='tank')
    {
         $.mobile.changePage($("#prefTankCleaning"), {
                    showLoadMsg: false
          }); 
            LoadTank('pref');  
    }
    if(detailsType=='referesh')
    {
        ReloadApp();
        }
     ischildTrigger=true;
    
   }

            function GetMenuTypes(evt) {
          //  $("#PrefDetails").find(".Lpcd-legends").find('ul').show();
                var Header = $(evt).find(".type").text();
                window.localStorage.removeItem("HType");
                window.localStorage.setItem("HType", Header);
                window.localStorage.removeItem("Page");
                window.localStorage.setItem("Page", "0");
                // window.localStorage.removeItem("ULBtype");
                // window.localStorage.removeItem("ULBname");

                AllData();
    
    }

