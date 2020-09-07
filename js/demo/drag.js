define(function(){
    function drag(node){
        node.onmousedown =function(ev){
            var e = ev || window.event;
            var offsetX = e.clientX-this.offsetLeft;
            var offsetY = e.clientY-this.offsetTop;
            document.onmousemove = function(ev){
                var e = ev ||window.event;
                node.style.left =e.clientX-offsetX +'px';
                node.style.top = e.clientY - offsetY +'px';

            }

        }
        document.onmouseup =function(){
            document.onmousemove = null;
        }   
    }
    function range(iCur,iMin,iMax){
        if(iCur >= iMax){
            return iMax;

        }else if(iCur<=iMin){
            return iMin;
        }else{
            return iCur
        }
    }
    return{
        drag :drag,
        range:range
    }
    
});