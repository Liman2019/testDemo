define(["scale","drag"],function(scale,drag) {
    function init(){
        var oBtn = document.getElementById("btn1");
        var oDiv1 = document.getElementById("div1");
        var oDiv2 = document.getElementById("div2");
        var oDiv3 = document.getElementById("div3");
        oBtn.onclick = function(){
            oDiv1.style.display = "block";
            scale.scale(oDiv1,oDiv2);
        }
        drag.drag(oDiv3);
    }
   return {
        init :init
   }
});