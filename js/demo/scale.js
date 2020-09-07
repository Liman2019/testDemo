define(function(){


    function scale(node1,node2){
        node2.onmousedown = function(ev){
            //记录
            var e = ev || window.event;
            var w = node1.offsetWidth;
            var h = node1.offsetHeight;
            var l = e.clientX;
            var t = e.clientY;
//改变
            document.onmousemove =function(ev){
                var e = ev || window.event;
                node1.style.width = w + (e.clientX-l) + 'PX';
                node1.style.height = h + (e.clientY-t) + 'PX';

            }
        }
        //结束
        document.onmouseup =function(){
            document.onmousemove = null;
        }   
    }
    return{
        scale: scale
    }
    
});