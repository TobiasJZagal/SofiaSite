$(window).on("load", sidenErLoadet);

var sound = document.getElementById("walkSound");

function sidenErLoadet () {
    console.log("siden er loaded");
$("#StartKnapId").on("click", title);
    $("#stop").on("click", stopknap);

}


function stopknap (){

    $("#Cphdox").removeClass("IPos2Test")
    $("#Cphdox").addClass("IPos2")
     $("#stop").off("click", stopknap);
}

function title () {
    sound.play();
   $("#StartKnapId").off("click", title);
    $("#StartKnapId").removeClass("startKnap");
    $("#StartKnapId").addClass("startKnapEnd");
    $("#privatSnakBox").removeClass("coverBoxStart");
    $("#privatSnakBox").addClass("coverBoxEnd");
     $("#privatSnakBox").on("animationend",FadeIsDone);
}

function FadeIsDone () {
    $("#personContainer").removeClass("ContainerStart");
    $("#personContainer").addClass("ContainerWalking");
    $("#personContainer").on("animationend",guyIsIn);

}

function guyIsIn() {
     $("#personContainer").off("animationend",guyIsIn);

    $("#sendknap").addClass("knapani");
    $(".knap").on("click", sendmessage1);
}


function sendmessage1 () {

    $("#sendknap").removeClass("knapani");
    console.log("class 1 added");
    $(".pos1").addClass("skyer");
    $("#iphone").removeClass("mobileStart");
     $("#iphone").addClass("mobile1");


    $(".knap").off("click", sendmessage1);
    $(".pos1").on("animationend", messagessent1);

}


function messagessent1() {
        console.log("button 1 ready");
    $(".pos1").off("animationend", messagessent1);

    $("#sendknap").addClass("knapani")
     $(".knap").on("click", sendmessage2);
}

function sendmessage2 () {

   console.log("class 2 added");
    $(".pos2").addClass("skyer");
    ;

    $("#person").removeClass("personStartpos");
    $("#person").addClass("personWalking2");

    $("#sendknap").removeClass("knapani");
    $(".knap").off("click", sendmessage2);
    $(".pos2").on("animationend", messagessent2);

}

function messagessent2() {
        console.log("button 2 ready");

    $(".pos2").off("animationend", messagessent2);

    $("#sendknap").addClass("knapani")
     $(".knap").on("click", sendmessage3);
}

function sendmessage3 () {

   console.log("class 3 added");
    $("#iphone").removeClass("mobile1");
     $("#iphone").addClass("mobile2");
     $("#person").removeClass("personWalking2");
    $("#person").addClass("personWalking3");

    $(".pos3").addClass("skyer");
    $(".pos4").addClass("skyer");

    $("#sendknap").removeClass("knapani");
    $(".knap").off("click", sendmessage3);
    $(".pos4").on("animationend", messagessent3);

}

function messagessent3() {
        console.log("button 3 ready");
    $("#sendknap").addClass("knapani")
    $(".knap").on("click", sendmessage4);
}

function sendmessage4 () {

   console.log("class 4 added");


    $("#person").removeClass("personWalking3");
    $("#person").addClass("personWalking4");


    $(".pos5").addClass("skyer");
    $(".pos6").addClass("skyer");
    $(".pos7").addClass("skyer");


    $("#sendknap").removeClass("knapani");
    $(".knap").off("click", sendmessage4);
    $(".pos7").on("animationend", messagessent4);

}

function messagessent4() {
    $(".pos7").off("animationend", messagessent4);
        console.log("button 4 ready");



    $(".pos1").removeClass("skyer");
    $(".pos2").removeClass("skyer");
    $(".pos3").removeClass("skyer");
    $(".pos4").removeClass("skyer");
    $(".pos5").removeClass("skyer");
    $(".pos6").removeClass("skyer");
    $(".pos7").removeClass("skyer");

    $(".pos1").addClass("skyer2");
    $(".pos2").addClass("skyer2");
    $(".pos3").addClass("skyer2");
    $(".pos4").addClass("skyer2");
    $(".pos5").addClass("skyer2");
    $(".pos6").addClass("skyer2");
    $(".pos7").addClass("skyer2");


    $("#sendknap").addClass("knapani")
     $(".knap").on("click", sendmessage5);
}

function sendmessage5 () {

    $("#iphone").removeClass("mobile2");
     $("#iphone").addClass("mobile3");

    $("#person").removeClass("personWalking4");
    $("#person").addClass("personWalking5");


    console.log("class 5 ready");
    $(".pos8").addClass("skyer2");
    $(".pos9").addClass("skyer2");
    $(".pos10").addClass("skyer2");

    $("#sendknap").removeClass("knapani");
    $(".knap").off("click", sendmessage5);
    $(".pos10").on("animationend", messagessent5);

}

function messagessent5 () {
    $(".pos7").off("animationend", messagessent5);
        console.log("button 5 ready");
    $(".pos1").removeClass("skyer2");
    $(".pos2").removeClass("skyer2");
    $(".pos3").removeClass("skyer2");
    $(".pos4").removeClass("skyer2");
    $(".pos5").removeClass("skyer2");
    $(".pos6").removeClass("skyer2");
    $(".pos7").removeClass("skyer2");
    $(".pos8").removeClass("skyer2");
    $(".pos9").removeClass("skyer2");
    $(".pos10").removeClass("skyer2");


    $(".pos1").addClass("skyer3");
    $(".pos2").addClass("skyer3");
    $(".pos3").addClass("skyer3");
    $(".pos4").addClass("skyer3");
    $(".pos5").addClass("skyer3");
    $(".pos6").addClass("skyer3");
    $(".pos7").addClass("skyer3");
    $(".pos8").addClass("skyer3");
    $(".pos9").addClass("skyer3");
    $(".pos10").addClass("skyer3");


    $("#sendknap").addClass("knapani")
    $(".knap").on("click", sendmessage6);

}

function sendmessage6 () {

    $("#person").removeClass("personWalking5");
    $("#person").addClass("personWalking6");


    $("#sendknap").removeClass("knapani");
    $(".knap").off("click", sendmessage6);
    $(".pos11").addClass("skyer3");
    $(".pos12").addClass("skyer3");
    $(".pos13").addClass("skyer3");
    $(".pos14").addClass("skyer3");
    $(".pos14").on("animationend", messagessent6);

}

function messagessent6 () {
    $(".pos14").off("animationend", messagessent6);

    $(".pos1").removeClass("skyer3");
    $(".pos2").removeClass("skyer3");
    $(".pos3").removeClass("skyer3");
    $(".pos4").removeClass("skyer3");
    $(".pos5").removeClass("skyer3");
    $(".pos6").removeClass("skyer3");
    $(".pos7").removeClass("skyer3");
    $(".pos8").removeClass("skyer3");
    $(".pos9").removeClass("skyer3");
    $(".pos10").removeClass("skyer3");
    $(".pos11").removeClass("skyer3");
    $(".pos12").removeClass("skyer3");
    $(".pos13").removeClass("skyer3");
    $(".pos14").removeClass("skyer3");

    $(".pos1").addClass("skyer4");
    $(".pos2").addClass("skyer4");
    $(".pos3").addClass("skyer4");
    $(".pos4").addClass("skyer4");
    $(".pos5").addClass("skyer4");
    $(".pos6").addClass("skyer4");
    $(".pos7").addClass("skyer4");
    $(".pos8").addClass("skyer4");
    $(".pos9").addClass("skyer4");
    $(".pos10").addClass("skyer4");
    $(".pos11").addClass("skyer4");
    $(".pos12").addClass("skyer4");
    $(".pos13").addClass("skyer4");
    $(".pos14").addClass("skyer4");


    $("#sendknap").addClass("knapani")
    $(".knap").on("click", sendmessage7);
}

function sendmessage7 () {
    $("#iphone").removeClass("mobile3");
     $("#iphone").addClass("mobile4");

    $("#person").removeClass("personWalking6");
    $("#person").addClass("personWalking7");


    $("#sendknap").removeClass("knapani");
    $(".knap").off("click", sendmessage7);
    $(".pos15").addClass("skyer4");
    $(".pos16").addClass("skyer4");
    $(".pos17").addClass("skyer4");
    $(".pos18").addClass("skyer4");
    $(".pos19").addClass("skyer4");
    $(".pos19").on("animationend", messagessent7);

}


function messagessent7 () {
    $(".pos19").off("animationend", messagessent7);

    $(".pos1").removeClass("skyer4");
    $(".pos2").removeClass("skyer4");
    $(".pos3").removeClass("skyer4");
    $(".pos4").removeClass("skyer4");
    $(".pos5").removeClass("skyer4");
    $(".pos6").removeClass("skyer4");
    $(".pos7").removeClass("skyer4");
    $(".pos8").removeClass("skyer4");
    $(".pos9").removeClass("skyer4");
    $(".pos10").removeClass("skyer4");
    $(".pos11").removeClass("skyer4");
    $(".pos12").removeClass("skyer4");
    $(".pos13").removeClass("skyer4");
    $(".pos14").removeClass("skyer4");
    $(".pos15").removeClass("skyer4");
    $(".pos16").removeClass("skyer4");
    $(".pos17").removeClass("skyer4");
    $(".pos18").removeClass("skyer4");
    $(".pos19").removeClass("skyer4");

    $(".pos1").addClass("skyer5");
    $(".pos2").addClass("skyer5");
    $(".pos3").addClass("skyerbillede1");
    $(".pos4").addClass("skyer5");
    $(".pos5").addClass("skyer5");
    $(".pos6").addClass("skyer5");
    $(".pos7").addClass("skyer5");
    $(".pos8").addClass("skyer5");
    $(".pos9").addClass("skyer5");
    $(".pos10").addClass("skyerbillede1");
    $(".pos11").addClass("skyer5");
    $(".pos12").addClass("skyer5");
    $(".pos13").addClass("skyer5");
    $(".pos14").addClass("skyer5");
    $(".pos15").addClass("skyer5");
    $(".pos16").addClass("skyer5");
    $(".pos17").addClass("skyer5");
    $(".pos18").addClass("skyer5");
    $(".pos19").addClass("skyer5");


    $("#sendknap").addClass("knapani")
    $(".knap").on("click", sendmessage8);
}


function sendmessage8 () {

    $("#person").removeClass("personWalking7");
    $("#person").addClass("personWalking8");


    $("#sendknap").removeClass("knapani");
    $(".knap").off("click", sendmessage8);
    $(".pos20").addClass("skyer5");
    $(".pos21").addClass("skyer5");
    $(".pos22").addClass("skyer5");
    $(".pos23").addClass("skyer5");
    $(".pos24").addClass("skyer5");
    $(".pos25").addClass("skyer5");

    $(".pos25").on("animationend", messagessent8);

}


function messagessent8 () {
    $(".pos22").off("animationend", messagessent8);

    $(".pos1").removeClass("skyer5");
    $(".pos2").removeClass("skyer5");
    $(".pos3").removeClass("skyerbillede1");
    $(".pos4").removeClass("skyer5");
    $(".pos5").removeClass("skyer5");
    $(".pos6").removeClass("skyer5");
    $(".pos7").removeClass("skyer5");
    $(".pos8").removeClass("skyer5");
    $(".pos9").removeClass("skyer5");
    $(".pos10").removeClass("skyerbillede1");
    $(".pos11").removeClass("skyer5");
    $(".pos12").removeClass("skyer5");
    $(".pos13").removeClass("skyer5");
    $(".pos14").removeClass("skyer5");
    $(".pos15").removeClass("skyer5");
    $(".pos16").removeClass("skyer5");
    $(".pos17").removeClass("skyer5");
    $(".pos18").removeClass("skyer5");
    $(".pos19").removeClass("skyer5");
    $(".pos20").removeClass("skyer5");
    $(".pos21").removeClass("skyer5");
    $(".pos22").removeClass("skyer5");
    $(".pos23").removeClass("skyer5");
    $(".pos24").removeClass("skyer5");
    $(".pos25").removeClass("skyer5");



    $(".pos1").addClass("skyer6");
    $(".pos2").addClass("skyer6");
    $(".pos3").addClass("skyerbillede2");
    $(".pos4").addClass("skyer6");
    $(".pos5").addClass("skyer6");
    $(".pos6").addClass("skyer6");
    $(".pos7").addClass("skyer6");
    $(".pos8").addClass("skyer6");
    $(".pos9").addClass("skyer6");
    $(".pos10").addClass("skyerbillede2");
    $(".pos11").addClass("skyer6");
    $(".pos12").addClass("skyer6");
    $(".pos13").addClass("skyer6");
    $(".pos14").addClass("skyerbillede2");
    $(".pos15").addClass("skyer6");
    $(".pos16").addClass("skyer6");
    $(".pos17").addClass("skyer6");
    $(".pos18").addClass("skyer6");
    $(".pos19").addClass("skyer6");
    $(".pos20").addClass("skyerbillede2");
    $(".pos21").addClass("skyer6");
    $(".pos22").addClass("skyer6");
    $(".pos23").addClass("skyer6");
    $(".pos24").addClass("skyer6");
    $(".pos25").addClass("skyer6");

    $("#sendknap").addClass("knapani")
    $(".knap").on("click", sendmessage9);
}

function sendmessage9 () {



    $("#person").removeClass("personWalking8");
    $("#person").addClass("personWalking9");



    $("#sendknap").removeClass("knapani");
    $(".knap").off("click", sendmessage9);

    $(".pos25").addClass("skyer6");
    $(".pos26").addClass("skyer6");
    $(".pos27").addClass("skyer6");
    $(".pos28").addClass("skyer6");
    $(".pos29").addClass("skyer6");
    $("#person").on("animationend", fall);
    $(".pos29").on("animationend", messagessent9);

}

function fall(){

    $("#baggrund").removeClass("baggrund_start");
    $("#baggrund").addClass("baggrund_fast");
    $("#person").removeClass("personWalking9");
    $("#person").addClass("personFalling");
    $("#personContainer").removeClass("ContainerStart");
    $("#personContainer").addClass("ContainerFall")
}


function messagessent9 () {
    $(".pos29").off("animationend", messagessent9);

    console.log("last things added");

    $(".pos1").removeClass("skyer6");
    $(".pos2").removeClass("skyer6");
    $(".pos2").removeClass("skyerbillede2");
    $(".pos3").removeClass("skyerbillede2");
    $(".pos4").removeClass("skyer6");
    $(".pos5").removeClass("skyer6");
    $(".pos6").removeClass("skyer6");
    $(".pos7").removeClass("skyer6");
    $(".pos8").removeClass("skyer6");
    $(".pos9").removeClass("skyer6");
    $(".pos10").removeClass("skyerbillede2");
    $(".pos11").removeClass("skyer6");
    $(".pos12").removeClass("skyer6");
    $(".pos13").removeClass("skyer6");
    $(".pos14").removeClass("skyerbillede2");
    $(".pos15").removeClass("skyer6");
    $(".pos16").removeClass("skyer6");
    $(".pos17").removeClass("skyer6");
    $(".pos18").removeClass("skyer6");
    $(".pos19").removeClass("skyer6");
    $(".pos20").removeClass("skyerbillede2");
    $(".pos21").removeClass("skyer6");
    $(".pos22").removeClass("skyer6");
    $(".pos23").removeClass("skyer6");
    $(".pos24").removeClass("skyer6");
    $(".pos25").removeClass("skyer6");
    $(".pos26").removeClass("skyer6");
    $(".pos27").removeClass("skyer6");
    $(".pos28").removeClass("skyer6");
    $(".pos29").removeClass("skyer6");



    $(".pos1").addClass("skyer7");
    $(".pos2").addClass("skyer7");
    $(".pos3").addClass("skyerbillede3");
    $(".pos4").addClass("skyer7");
    $(".pos5").addClass("skyer7");
    $(".pos6").addClass("skyer7");
    $(".pos7").addClass("skyer7");
    $(".pos8").addClass("skyer7");
    $(".pos9").addClass("skyer7");
    $(".pos10").addClass("skyerbillede3");
    $(".pos11").addClass("skyerbillede3");
    $(".pos12").addClass("skyer7");
    $(".pos13").addClass("skyer7");
    $(".pos14").addClass("skyerbillede3");
    $(".pos15").addClass("skyer7");
    $(".pos16").addClass("skyer7");
    $(".pos17").addClass("skyer7");
    $(".pos18").addClass("skyer7");
    $(".pos19").addClass("skyer7");
    $(".pos20").addClass("skyerbillede3");
    $(".pos21").addClass("skyer7");
    $(".pos22").addClass("skyer7");
    $(".pos23").addClass("skyerbillede3");
    $(".pos24").addClass("skyer7");
    $(".pos25").addClass("skyer7");
    $(".pos26").addClass("skyerbillede3");
    $(".pos27").addClass("skyer7");
    $(".pos28").addClass("skyer7");
    $(".pos29").addClass("skyer7");


    sound.pause();
    $("#CoverBackground").addClass("black");
    $("#CoverBackground").on("animationend",fadeOutTimer);

}

function fadeOutTimer() {
    setTimeout(privatIn,5000);
}

function privatIn() {


    $("#PrivatContainer").removeClass("PrivatContainerStart");
    $("#PrivatContainer").addClass("PrivatContainerOut");
    setTimeout(orangeIn,3500);

}

function orangeIn() {
    $("#CoverBackground").addClass("orange");

    setTimeout(gotofinal,1500);



}

function gotofinal() {
    $("#together").removeClass("forever");
    $("#together").addClass("forever2");
}
