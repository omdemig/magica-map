$(document).ready(function(e) {
    // make image map coords adapt to a resized map
    $('img[usemap]').rwdImageMaps(); 
    // highlight our choices!
    $('img[usemap]').maphilight();
    
    // don't highlight three starting regions in a group if they are selected individually
    $("#start1, #start2, #start3").mouseover(function(e){
        e.preventDefault();
        var starterData=$("#start1").data("maphilight");
        starterData.groupBy="false",
        $("#start1, #start2, #start3").data("maphilight",starterData);
    }); 

    // for friends with no hover
    $('area').on("click", function(e){
        e.preventDefault(); 
        // show the image map area's title in a banner box
        $(".banner").text(e.currentTarget.title);
    });

});