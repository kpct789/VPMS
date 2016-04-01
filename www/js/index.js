var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

/* Validating Text */
function ValidateText(text){
    var regex = new RegExp("^[a-zA-Z ]+$");
    if (regex.test(text))
        return true;
    else
        return false;
}

/* Validating Email */
function ValidateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail))
        return true;
    else
        return false;
}
      
/*
$("#txtMobile").keydown(function (objEvt) {
    var charCode = (objEvt.which) ? objEvt.which : event.keyCode
    //alert(charCode);
    // Num 0-96 to 9-105 and 0-48 to 9-57
    // Tab 9, BackSpace 8, Delete 46, Space 32
    // Arrows keys 37 to 40
    if ((parseInt(charCode) >= 96 && parseInt(charCode) <= 105) || (parseInt(charCode) >= 48 && parseInt(charCode) <= 57))
        return true;
    else if (parseInt(charCode) == 9 || parseInt(charCode) == 8 || parseInt(charCode) == 46)
        return true;
    else if (parseInt(charCode) >= 37 && parseInt(charCode) <= 40)
        return true;
    else
        return false;
});

$("#txtFrstName").keydown(function (objEvt) {
    var charCode = (objEvt.which) ? objEvt.which : event.keyCode
    // a-65 to z-90 and 0-48 to 9-57
    // Tab 9, BackSpace 8, Delete 46, Space 32
    // Arrows keys 37 to 40
    if ((parseInt(charCode) >= 65 && parseInt(charCode) <= 90))
        return true;
    else if (parseInt(charCode) == 8 || parseInt(charCode) == 9 || parseInt(charCode) == 32 || parseInt(charCode) == 46)
        return true;
    else if (parseInt(charCode) >= 37 && parseInt(charCode) <= 40)
        return true;
    else
        return false;
});

$("#txtLstName").keydown(function (objEvt) {
    var charCode = (objEvt.which) ? objEvt.which : event.keyCode
    // a-65 to z-90 and 0-48 to 9-57
    // Tab 9, BackSpace 8, Delete 46, Space 32
    // Arrows keys 37 to 40
    if ((parseInt(charCode) >= 65 && parseInt(charCode) <= 90))
        return true;
    else if (parseInt(charCode) == 8 || parseInt(charCode) == 9 || parseInt(charCode) == 32 || parseInt(charCode) == 46)
        return true;
    else if (parseInt(charCode) >= 37 && parseInt(charCode) <= 40)
        return true;
    else
        return false;
});

$("#txtIdNo").keydown(function (objEvt) {
    var charCode = (objEvt.which) ? objEvt.which : event.keyCode
    // a-65 to z-90 and 0-48 to 9-57
    // Num 0-96 to 9-105 and 0-48 to 9-57
    // Tab 9, BackSpace 8, Delete 46, Space 32
    // Arrows keys 37 to 40
    if ((parseInt(charCode) >= 96 && parseInt(charCode) <= 105) || (parseInt(charCode) >= 48 && parseInt(charCode) <= 57))
        return true;
    else if ((parseInt(charCode) >= 65 && parseInt(charCode) <= 90) || parseInt(charCode) == 9)
        return true;
    else if (parseInt(charCode) == 8 || parseInt(charCode) == 9 || parseInt(charCode) == 46)
        return true;
    else if (parseInt(charCode) >= 37 && parseInt(charCode) <= 40)
        return true;
    else
        return false;
});
//This section of script is used to center the html element
function centerLoadingPanel() {
    //debugger;
    centerElementOnScreen($("#divloading"));
}
function centerElementOnScreen(element) {
    //debugger;
    var scrollTop = document.body.scrollTop;
    var scrollLeft = document.body.scrollLeft;
    var viewPortHeight = document.body.clientHeight;
    var viewPortWidth = document.body.clientWidth;
    if (document.compatMode == "CSS1Compat") {
        viewPortHeight = document.documentElement.clientHeight;
        viewPortWidth = document.documentElement.clientWidth;
        //if (!$telerik.isSafari) {
            scrollTop = document.documentElement.scrollTop;
            scrollLeft = document.documentElement.scrollLeft;
        //}
    }

    var topOffset = Math.ceil(viewPortHeight / 2 - document.getElementById("divloading").offsetHeight / 2);
    var leftOffset = Math.ceil(viewPortWidth / 2 - document.getElementById("divloading").offsetWidth / 2);
    var top = scrollTop + topOffset - 40;
    var left = scrollLeft + leftOffset;
    document.getElementById("divloading").style.position = "absolute";
    document.getElementById("divloading").style.top = top + "px";
    document.getElementById("divloading").style.left = left + "px";
}
*/