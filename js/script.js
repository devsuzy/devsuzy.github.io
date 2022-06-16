// $(".show-btn").click(function(){
//     var idx = $(this).index();
//     if(idx == 0){
//         window.open("../../sub/sub1/index.html", "_self")
//     } else if(idx == 1){
//         window.open("../../sub/sub5/index.html", "_self")
//     } else if(idx == 2){
//         window.open("../../sub/sub2/index.html", "_self")
//     } else if(idx == 3){
//         window.open("../../sub/sub3/index.html", "_self")
//     } else if(idx == 4){
//         window.open("../../sub/sub4/index.html", "_self")
//     }
// })
$(".show-btn").click(function(){
    var num = $(this).attr("data-alt")
    window.open("../../sub/sub"+num+"/index.html", "_self")
})