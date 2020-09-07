console.log("加载完毕");
require.config({
    paths :{
        "index" :"index",
        "scale" : "demo/scale",
        "drag":"demo/drag"
        }
})

require(["index"],function(index){
    index.init();
})