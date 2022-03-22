/**regarding the Quote */
var currentQuote = "Fiction reveals truths that reality obscures.";
var currentAuthor = "~Jessamyn West";
var tempRand = Math.floor(Math.random()*10) + 1; /*1-10*/
var tempRandCheck = tempRand; /**used to ensure the same quote doesn't appear twice in a row */

/**regarding the Hero Space */
/**change the images here */
var lastCard = "default";
/** About */
var heroImageLead = "images/Team Kuhns A.jpg";
var heroImageChange = "images/GovLov Flow.jpg";
var heroImageUser = "images/Validation.jpg";
/** Work */
var heroImageDASNW = "images/DASNW-slideOne.jpg";
var heroImageFridgeFA = "images/FFA Unit.png";
var heroImageSPlant = "images/SoulPlant Hype.jpg";
var heroImageHGem = "images/HiddenGem-screens.jpg";
/** Legacy */
var heroImageRPG = "images/Legacy-siteSplash.jpg";
var heroImageCharSheet = "images/Legacy-CharSheetHero.jpg";
var heroImageCon = "images/Dice Setup.JPG"; /**lack of caps messes up Host Monster */
/** Personal */
var heroImageGames = "images/Smite Screen.JPG";/**lack of caps messes up Host Monster */
var heroImageGuru = "images/KnightDraw.jpg";
var heroImageHobbies = "images/Charleston Skyline.jpg";
/** */
var heroPicText = "Click Above to Learn More";
var heroLinkText = "Click Here for Demo"; /*not used: hrefs need to be cited in this string, and they vary*/
var heroPicTextDefault = document.getElementById("heroText").innerHTML;

var heroPicMarginLeftDefault = document.getElementById("heroPic").style.marginLeft;
var heroPicMarginLeftMost = "9vw"; /*works for most heroPics; doesn't trump CSS MediaQuery */
/**Defaults = as provided in HTML files */
var heroImageDefault = document.getElementById("heroPic").src;
var iconLeftDefault = document.getElementById("iconLeft").src;
var statNumLeftDefault = document.getElementById("statNumLeft").innerHTML;
var statTextLeftDefault = document.getElementById("statTextLeft").innerHTML;
var iconRightDefault = document.getElementById("iconRight").src;
var statNumRightDefault = document.getElementById("statNumRight").innerHTML;
var statTextRightDefault = document.getElementById("statTextRight").innerHTML;


/* changes hover color and detailColumn height, depenidng on page*/
$("#nav1").on("click",function(){
    console.log("Nav to About Page!");
    document.getElementByClass("card").style.boxShadow = "0px 4px 12px 2px rgba(36, 236, 18, 0.4)";
    document.getElementById("bodyDisplay").style.gridTemplateRows = "5vh  15vh  70vh  14vh";
}); /**doesn't currently work */
$("#nav2").on("click",function(){
    console.log("Nav to Work Page!");
    document.getElementByClass("card").style.boxShadow = "0px 4px 12px 2px rgba(228, 21, 21, 0.4)";
    document.getElementById("bodyDisplay").style.gridTemplateRows = "5vh  15vh  100vh  14vh";
}); /**doesn't currently work */

/**upon click, change the banner to a random quote */
$("#bannerQuote").on("click",function changeQuote(){
    console.log("Changed the quote!");

    /**gets a random selector for our quote-switcher below, then sets the checker for next time */
    while(tempRand == tempRandCheck){
        tempRand = Math.floor(Math.random()*10) + 1; /*1-10*/
    }
    tempRandCheck = tempRand;

    switch(tempRand){
        case 1:
            currentQuote="Aspire to Inspire before you Expire!";
            currentAuthor="~Eugene Bell, Jr.";
            break;
        case 2:
            currentQuote="Don't let what you can't do stop you from doing what you can do.";
            currentAuthor="~John Wooden";
            break;
        case 3:
            currentQuote="Any system that fails to account for human nature is doomed to fail.";
            currentAuthor="~a wise person";
            break;
        case 4:
            currentQuote="Yield not to evils, but attack all the more boldly.";
            currentAuthor="~Virgil";
            break;
        case 5:
            currentQuote="The eye of the master will do more work than both his hands.";
            currentAuthor="~Benjamin Franklin";
            break;
        case 6:
            currentQuote="When you reach the end of your rope, tie a knot in it and hang on.";
            currentAuthor="~Franklin D. Roosevelt";
            break;
        case 7:
            currentQuote="The man who does not read books has no advantage over the man that cannot.";
            currentAuthor="~Mark Twain";
            break;
        case 8:
            currentQuote="Wise men learn by others' harms, fools scarcely by their own.";
            currentAuthor="~Benjamin Franklin";
            break;
        case 9:
            currentQuote="Music is the voice that tells us the human race is greater than it knows.";
            currentAuthor="~Napoleon Bonaparte";
            break;
        case 10:
            currentQuote="Give me six hours to chop down a tree and I will spend the first four sharpening the axe.";
            currentAuthor="~Abraham Lincoln";
            break;
        default:
            currentQuote="Fiction reveals truths that reality obscures.";
            currentAuthor="~Jessamyn West";
    }
    /**the new quote has been set, but the below actually changes it */
    document.getElementById("hQuote").innerHTML = currentQuote;
    document.getElementById("hAuthor").innerHTML = currentAuthor;
});

/**card-hover changes the heroSpace and adds an href to Case Study */
/** ----------------ABOUT------------------- */
$("#about-lead").on("mouseover",function(){
    console.log("Leadership Rolled Over!");

    document.getElementById("heroPic").src = heroImageLead;
    document.getElementById("heroPic").style.marginLeft = "8vw";
    document.getElementById("heroText").innerHTML = "Blood. Sweat. Tears. Smiles.";

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "81";
    document.getElementById("statTextLeft").innerHTML = "Largest Team";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "90%";
    document.getElementById("statTextRight").innerHTML = "Peer Engagement";

    document.getElementById("heroRef").href =
        heroImageLead/*"caseStudies/Case Study - DASNW.pdf"*/;
    lastCard = "Leadership"; /**changes #heroPic to Leadership's */
});
$("#about-change").on("mouseover",function(){
    console.log("Change Management Rolled Over!");

    document.getElementById("heroPic").src = heroImageChange;
    document.getElementById("heroPic").style.marginLeft = "7vw";
    document.getElementById("heroText").innerHTML = "Plan. Communicate. Execute. Sustain.";

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "2";
    document.getElementById("statTextLeft").innerHTML = "Avg. Promotions per Job";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "6+";
    document.getElementById("statTextRight").innerHTML = "Training Manuals Created";

    document.getElementById("heroRef").href = heroImageChange;
        /*"caseStudies/Case Study - Legacy.pdf"*/
    lastCard = "Change Management"; /**changes #heroPic to Change Management's */
});
$("#about-user").on("mouseover",function(){
    console.log("User Centric Rolled Over!");

    document.getElementById("heroPic").src = heroImageUser;
    document.getElementById("heroPic").style.marginLeft = "7vw";
    document.getElementById("heroText").innerHTML = "You Didn't Hear It From Me";

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "97.5%";
    document.getElementById("statTextLeft").innerHTML = "Direct Report Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "20+";
    document.getElementById("statTextRight").innerHTML = "Interviews Proctored";

    document.getElementById("heroRef").href =
        "images/Validation.jpg"/*"caseStudies/Case Study - Hidden Gem.pdf"*/;
    lastCard = "User Centric"; /**changes #heroPic to User Centric */
});
/** ----------------WORK-------------------- */
$("#work-DASNW").on("mouseover",function(){
    console.log("DASNW Rolled Over!");

    document.getElementById("heroPic").src = heroImageDASNW;
    document.getElementById("heroPic").style.marginLeft = heroPicMarginLeftMost;
    document.getElementById("heroText").innerHTML = '<a href="https://www.figma.com/proto/kF9evvR5l4Fjnj4Ul0q0Zp/DASNW-Revision?node-id=474%3A10485&scaling=scale-down&page-id=459%3A7816&starting-point-node-id=474%3A10485&show-proto-sidebar=1">Click Here for Demo</a>';

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "15";
    document.getElementById("statTextLeft").innerHTML = "Tests & Interviews";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "100%";
    document.getElementById("statTextRight").innerHTML = "Board Approval";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - DASNW.pdf";
    lastCard = "DASNW"; /**changes #heroPic to DASNW's */
});
$("#work-FridgeFA").on("mouseover",function(){
    console.log("FridgeFA Rolled Over!");

    document.getElementById("heroPic").src = heroImageFridgeFA;
    document.getElementById("heroPic").style.marginLeft = "9vw";
    document.getElementById("heroText").innerHTML = '<a href="https://www.figma.com/proto/3cn0eXRCUJks7PqEx9rwEw/Fridge-For-All?node-id=165%3A19328&scaling=scale-down&page-id=165%3A19316&starting-point-node-id=165%3A19328">Click Here for Demo</a>';

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "3";
    document.getElementById("statTextLeft").innerHTML = "User Touchpoints";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "2";
    document.getElementById("statTextRight").innerHTML = "Distinct Journeys";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Fridge For All.pdf";
    lastCard = "DASNW"; /**changes #heroPic to DASNW's */
});
$("#work-SPlant").on("mouseover",function(){
    console.log("SPlant Rolled Over!");

    document.getElementById("heroPic").src = heroImageSPlant;
    document.getElementById("heroPic").style.marginLeft = heroPicMarginLeftMost;
    document.getElementById("heroText").innerHTML = '<a href="https://www.figma.com/proto/EcRZgXWv4wo6MLRMzluuK8/Group-7---Project-1---Mid-Fi-Prototype-Collab?node-id=400%3A23130&scaling=scale-down&page-id=400%3A22954&starting-point-node-id=400%3A23130&show-proto-sidebar=1">Click Here for Demo</a>';

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "2";
    document.getElementById("statTextLeft").innerHTML = "Team Size";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "70+";
    document.getElementById("statTextRight").innerHTML = "Frames Stitched";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Soul Plant.pdf";
    lastCard = "SPlant"; /**changes #heroPic to Legacy's */
});
$("#work-HGem").on("mouseover",function(){
    console.log("HGem Rolled Over!");

    document.getElementById("heroPic").src = heroImageHGem;
    document.getElementById("heroPic").style.marginLeft = heroPicMarginLeftMost;
    document.getElementById("heroText").innerHTML = '<a href="https://www.figma.com/proto/ihafJzG6YwQq3ys8xMNOKd/Hidden-Gem?node-id=64%3A503&scaling=scale-down&page-id=64%3A502&starting-point-node-id=64%3A503">Click Here for Demo</a>';

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "3";
    document.getElementById("statTextLeft").innerHTML = "Weeks to Complete";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "0";
    document.getElementById("statTextRight").innerHTML = "Dead Ends";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Hidden Gem.pdf";
    lastCard = "HGem"; /**changes #heroPic to Hidden Gem's */
});
/** ---------------LEGACY------------------- */
$("#legacy-rpg").on("mouseover",function(){
    console.log("Tabletop RPG Rolled Over!");

    document.getElementById("heroPic").src = heroImageRPG;
    document.getElementById("heroPic").style.marginLeft = heroPicMarginLeftMost;
    document.getElementById("heroText").innerHTML = '<a href="http://www.defineyourlegacy.com">Game Website</a>';

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "170";
    document.getElementById("statTextLeft").innerHTML = "Most Miles to an Event";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "4";
    document.getElementById("statTextRight").innerHTML = "States Played In";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Legacy.pdf";
    lastCard = "RPG"; /**changes #heroPic to RPG's */
});
$("#legacy-charSheet").on("mouseover",function(){
    console.log("User Interface Rolled Over!");

    document.getElementById("heroPic").src = heroImageCharSheet;
    document.getElementById("heroPic").style.marginLeft = heroPicMarginLeftMost;
    document.getElementById("heroText").innerHTML = "Where Feedback and Design Changes Meet";

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "8";
    document.getElementById("statTextLeft").innerHTML = "Distinct Versions";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "40+";
    document.getElementById("statTextRight").innerHTML = "Iterations";

    document.getElementById("heroRef").href =
        "caseStudies/Minor Case - Legacy CharSheets.pdf";
    lastCard = "CharSheet"; /**changes #heroPic to CharSheet's */
});
$("#legacy-con").on("mouseover",function(){
    console.log("Showmanship Rolled Over!");

    document.getElementById("heroPic").src = heroImageCon;
    document.getElementById("heroPic").style.marginLeft = heroPicMarginLeftMost;
    document.getElementById("heroText").innerHTML = "Colors Catch";

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "35%";
    document.getElementById("statTextLeft").innerHTML = "Came Back for More";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "170";
    document.getElementById("statTextRight").innerHTML = "Most Miles to an Event";

    document.getElementById("heroRef").href =
        ""/*"caseStudies/Case Study - Hidden Gem.pdf"*/;
    lastCard = "Con"; /**changes #heroPic to Con's */
});
/** --------------PERSONAL------------------ */
$("#pers-games").on("mouseover",function(){
    console.log("Games Rolled Over!");

    document.getElementById("heroPic").src = heroImageGames;
    document.getElementById("heroPic").style.marginLeft = heroPicMarginLeftMost;
    document.getElementById("heroText").innerHTML = "Solo Queue Fill";

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "Diamond";
    document.getElementById("statTextLeft").innerHTML = "Average Rank";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "49";
    document.getElementById("statTextRight").innerHTML = "Board Games Owned";

    document.getElementById("heroRef").href =
        ""/*"caseStudies/Case Study - DASNW.pdf"*/;
    lastCard = "Games"; /**changes #heroPic to Game's */
});
$("#pers-guru").on("mouseover",function(){
    console.log("Guru Rolled Over!");

    document.getElementById("heroPic").src = heroImageGuru;
    document.getElementById("heroPic").style.marginLeft = "13vw";
    document.getElementById("heroText").innerHTML = "Values Beget Principles and Drive";
    /*figuring the below out would help a lot; for each different heroPic is manually set */
    /*document.getElementById("heroPic").style.marginLeft = (viewport.width * 2) - (document.getElementById("heroPic").style.width * 4);*/

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "1";
    document.getElementById("statTextLeft").innerHTML = "Wedding Ministered";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "6";
    document.getElementById("statTextRight").innerHTML = "Retreats Put On";

    document.getElementById("heroRef").href =
        ""/*"caseStudies/Case Study - Legacy.pdf"*/;
    lastCard = "Guru"; /**changes #heroPic to Guru's */
});
$("#pers-hobbies").on("mouseover",function(){
    console.log("Hobbies Rolled Over!");

    document.getElementById("heroPic").src = heroImageHobbies;
    document.getElementById("heroPic").style.marginLeft = heroPicMarginLeftMost;
    document.getElementById("heroText").innerHTML = "Born in Charleston, SC";

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "3";
    document.getElementById("statTextLeft").innerHTML = "Years Paddleboarding";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "Too Few";
    document.getElementById("statTextRight").innerHTML = "Salsas Tasted";

    document.getElementById("heroRef").href =
        ""/*"caseStudies/Case Study - Hidden Gem.pdf"*/;
    lastCard = "Hobbies"; /**changes #heroPic to Hobbies' */
});
/** ---------------NAV-RESET-------------------- */
$(".navigation").on("mouseover",function(){
    console.log("Nav Rolled Over!");

    document.getElementById("heroPic").src = heroImageDefault;
    document.getElementById("heroPic").style.marginLeft = heroPicMarginLeftDefault;
    document.getElementById("heroText").innerHTML = heroPicTextDefault;

    document.getElementById("iconLeft").src = iconLeftDefault;
    document.getElementById("statNumLeft").innerHTML = statNumLeftDefault;
    document.getElementById("statTextLeft").innerHTML = statTextLeftDefault;

    document.getElementById("iconRight").src = iconRightDefault;
    document.getElementById("statNumRight").innerHTML = statNumRightDefault;
    document.getElementById("statTextRight").innerHTML = statTextRightDefault;

    document.getElementById("heroRef").removeAttribute("href");
    lastCard = "default"; /**resets #heroPic on nav-over to index Defaults*/
});

/* upon clicking a stat*/
$("#heroStatLeft").on("click",function(){
    console.log("Clicked the left stat!");
});