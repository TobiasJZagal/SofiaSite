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


    $("#Sub").removeClass("SubPos1");
    $("#Sub").addClass("SubPos2");
    $("#frontpagebox").removeClass("color5");

    $("#textSwim").removeClass("SwimStart");
     $("#textSwim").addClass("SwimEnd");

    $("#Sub").on("animationend", showOm)

}
    );

function showOm () {

    $("#IdOmTextBox").removeClass("OmHide");
    $("#IdOmTextBox").addClass("OmShow");
    $("#IdOmImgBox").removeClass("OmHide");
    $("#IdOmImgBox").addClass("OmShow");
}
