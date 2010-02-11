window.setTimeout(function(){
    alert(GLOBALS[9]);
    if(window.GLOBALS && globals.length >= 9) {
        localStorage["ik"] = GLOBALS[9];
    }
}, 3000);