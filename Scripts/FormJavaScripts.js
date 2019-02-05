(function () {
    var tBox = document.getElementById("birthDate");
    var textvalue = tBox.value;
    var update = "";
    tBox.onmouseenter = function () {
            this.value = update;
        
       
    };
    tBox.onmouseleave = function () {
        if (this.value=="") {
            this.value = textvalue;
        } else {
            update = this.value;
        }
        
    };
    
}());