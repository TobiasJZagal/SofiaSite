$(window).on("load", sidenErLoadet);


function sidenErLoadet() {
    console.log("klar");

    frontpageEffect();
}

$("#frontpage").mouseover(
function frontpageEffect() {
     console.log("lel");
    $("#frontpagebox").removeClass("color5");

    $("#textSwim").removeClass("SwimStart");
     $("#textSwim").addClass("SwimEnd");


}
    );

