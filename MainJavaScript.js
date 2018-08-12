$(window).on("load", sidenErLoadet);


function sidenErLoadet() {
    console.log("klar");
    $("#stop").on("click", stopknap);
    frontpageEffect();

}


function stopknap (){
    console.log("knap");
    $("#Cphdox").removeClass("IPos2Test")
    $("#Cphdox").addClass("IPos2")
     $("#stop").off("click", stopknap);
}


$("#frontpage").mouseover(
function frontpageEffect() {
     console.log("lel");
    $("#frontpagebox").removeClass("color5");

    $("#textSwim").removeClass("SwimStart");
     $("#textSwim").addClass("SwimEnd");


}
    );

