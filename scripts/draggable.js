var positions = JSON.parse(localStorage.positions || "{}");
$(function () {
    var d = $("[id=draggable]").attr("id", function (i) {
        return "draggable_" + i
    })
    $.each(positions, function (id, pos) {
        $("#" + id).css(pos)
    })

    d.draggable({
        containment: "#containment-wrapper",
        scroll: false,
        stop: function (event, ui) {
            positions[this.id] = ui.position
            localStorage.positions = JSON.stringify(positions)
        }
    });
            
});
var soundCounter=0;
function playSound(idString){
    var sound=document.getElementById(idString);
    if (soundCounter==0){
        sound.play();
        soundCounter++;
    } else if (soundCounter==1){
        sound.pause();
        soundCounter=0;
    }
}


// inventory toggle
// $('.charlie').dblclick(function() {
//     $('#charlie-inventory').toggle();


$(function() {
    $( ".draggable" ).draggable();
  });

