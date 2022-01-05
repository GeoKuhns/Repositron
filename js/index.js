/**regarding the Quote */
var currentQuote = "Fiction reveals truths that reality obscures.";
var currentAuthor = "~Jessamyn West";
var tempRand = Math.floor(Math.random()*10) + 1; /*1-10*/
var tempRandCheck = tempRand; /**used to ensure the same quote doesn't appear twice in a row */

/**regarding the Hero Space */
/**change the images here */
var lastCard = "default";
/** About */
var heroImageLead = "images/DASNW-slideOne.jpg";
var heroImageChange = "images/Legacy-siteSplash.jpg";
var heroImageUser = "images/HiddenGem-screens.jpg";
/** Work */
var heroImageDASNW = "images/DASNW-slideOne.jpg";
var heroImageSPlant = "images/Legacy-siteSplash.jpg";
var heroImageHGem = "images/HiddenGem-screens.jpg";
/** Legacy */
var heroImageRPG = "images/DASNW-slideOne.jpg";
var heroImageCharSheet = "images/Legacy-siteSplash.jpg";
var heroImageCon = "images/HiddenGem-screens.jpg";
/** Personal */
var heroImageGames = "images/DASNW-slideOne.jpg";
var heroImageGuru = "images/Legacy-siteSplash.jpg";
var heroImageHobbies = "images/HiddenGem-screens.jpg";
/** */
var heroPicText = "Click Above to Learn More";
var heroPicTextDefault = document.getElementById("heroText").innerHTML;
/**Defaults = as provided in HTML files */
var heroImageDefault = "images/Space Violet - Frank Cone.jpeg";
var iconLeftDefault = document.getElementById("iconLeft").src;
var statNumLeftDefault = document.getElementById("statNumLeft").innerHTML;
var statTextLeftDefault = document.getElementById("statTextLeft").innerHTML;
var iconRightDefault = document.getElementById("iconRight").src;
var statNumRightDefault = document.getElementById("statNumRight").innerHTML;
var statTextRightDefault = document.getElementById("statTextRight").innerHTML;



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
    document.getElementById("heroText").innerHTML = heroPicText;

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "100%";
    document.getElementById("statTextLeft").innerHTML = "Board Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "15";
    document.getElementById("statTextRight").innerHTML = "Tests & Interviews";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - DASNW.pdf";
    lastCard = "Leadership"; /**changes #heroPic to Leadership's */
});
$("#about-change").on("mouseover",function(){
    console.log("Change Management Rolled Over!");

    document.getElementById("heroPic").src = heroImageChange;
    document.getElementById("heroText").innerHTML = heroPicText;

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "100%";
    document.getElementById("statTextLeft").innerHTML = "Board Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "15";
    document.getElementById("statTextRight").innerHTML = "Tests & Interviews";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Legacy.pdf";
    lastCard = "Change Management"; /**changes #heroPic to Change Management's */
});
$("#about-user").on("mouseover",function(){
    console.log("User Centric Rolled Over!");

    document.getElementById("heroPic").src = heroImageUser;
    document.getElementById("heroText").innerHTML = heroPicText;

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "100%";
    document.getElementById("statTextLeft").innerHTML = "Board Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "15";
    document.getElementById("statTextRight").innerHTML = "Tests & Interviews";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Hidden Gem.pdf";
    lastCard = "User Centric"; /**changes #heroPic to User Centric */
});
/** ----------------WORK-------------------- */
$("#work-DASNW").on("mouseover",function(){
    console.log("DASNW Rolled Over!");

    document.getElementById("heroPic").src = heroImageDASNW;
    document.getElementById("heroText").innerHTML = heroPicText;

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "100%";
    document.getElementById("statTextLeft").innerHTML = "Board Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "15";
    document.getElementById("statTextRight").innerHTML = "Tests & Interviews";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - DASNW.pdf";
    lastCard = "DASNW"; /**changes #heroPic to DASNW's */
});
$("#work-SPlant").on("mouseover",function(){
    console.log("SPlant Rolled Over!");

    document.getElementById("heroPic").src = heroImageSPlant;
    document.getElementById("heroText").innerHTML = heroPicText;

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "100%";
    document.getElementById("statTextLeft").innerHTML = "Board Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "15";
    document.getElementById("statTextRight").innerHTML = "Tests & Interviews";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Legacy.pdf";
    lastCard = "SPlant"; /**changes #heroPic to Legacy's */
});
$("#work-HGem").on("mouseover",function(){
    console.log("HGem Rolled Over!");

    document.getElementById("heroPic").src = heroImageHGem;
    document.getElementById("heroText").innerHTML = heroPicText;

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "100%";
    document.getElementById("statTextLeft").innerHTML = "Board Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "15";
    document.getElementById("statTextRight").innerHTML = "Tests & Interviews";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Hidden Gem.pdf";
    lastCard = "HGem"; /**changes #heroPic to Hidden Gem's */
});
/** ---------------LEGACY------------------- */
$("#legacy-rpg").on("mouseover",function(){
    console.log("Tabletop RPG Rolled Over!");

    document.getElementById("heroPic").src = heroImageRPG;
    document.getElementById("heroText").innerHTML = heroPicText;

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "100%";
    document.getElementById("statTextLeft").innerHTML = "Board Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "15";
    document.getElementById("statTextRight").innerHTML = "Tests & Interviews";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - DASNW.pdf";
    lastCard = "RPG"; /**changes #heroPic to RPG's */
});
$("#legacy-charSheet").on("mouseover",function(){
    console.log("User Interface Rolled Over!");

    document.getElementById("heroPic").src = heroImageCharSheet;
    document.getElementById("heroText").innerHTML = heroPicText;

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "100%";
    document.getElementById("statTextLeft").innerHTML = "Board Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "15";
    document.getElementById("statTextRight").innerHTML = "Tests & Interviews";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Legacy.pdf";
    lastCard = "CharSheet"; /**changes #heroPic to CharSheet's */
});
$("#legacy-con").on("mouseover",function(){
    console.log("Showmanship Rolled Over!");

    document.getElementById("heroPic").src = heroImageCon;
    document.getElementById("heroText").innerHTML = heroPicText;

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "100%";
    document.getElementById("statTextLeft").innerHTML = "Board Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "15";
    document.getElementById("statTextRight").innerHTML = "Tests & Interviews";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Hidden Gem.pdf";
    lastCard = "Con"; /**changes #heroPic to Con's */
});
/** --------------PERSONAL------------------ */
$("#pers-games").on("mouseover",function(){
    console.log("Games Rolled Over!");

    document.getElementById("heroPic").src = heroImageGames;
    document.getElementById("heroText").innerHTML = heroPicText;

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "100%";
    document.getElementById("statTextLeft").innerHTML = "Board Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "15";
    document.getElementById("statTextRight").innerHTML = "Tests & Interviews";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - DASNW.pdf";
    lastCard = "Games"; /**changes #heroPic to Game's */
});
$("#pers-guru").on("mouseover",function(){
    console.log("Guru Rolled Over!");

    document.getElementById("heroPic").src = heroImageGuru;
    document.getElementById("heroText").innerHTML = heroPicText;

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "100%";
    document.getElementById("statTextLeft").innerHTML = "Board Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "15";
    document.getElementById("statTextRight").innerHTML = "Tests & Interviews";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Legacy.pdf";
    lastCard = "Guru"; /**changes #heroPic to Guru's */
});
$("#pers-hobbies").on("mouseover",function(){
    console.log("Hobbies Rolled Over!");

    document.getElementById("heroPic").src = heroImageHobbies;
    document.getElementById("heroText").innerHTML = heroPicText;

    document.getElementById("iconLeft").src = "images/Crosshair.svg";
    document.getElementById("statNumLeft").innerHTML = "100%";
    document.getElementById("statTextLeft").innerHTML = "Board Approval";

    document.getElementById("iconRight").src = "images/Pie Chart.svg";
    document.getElementById("statNumRight").innerHTML = "15";
    document.getElementById("statTextRight").innerHTML = "Tests & Interviews";

    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Hidden Gem.pdf";
    lastCard = "Hobbies"; /**changes #heroPic to Hobbies' */
});
/** ---------------NAV-RESET-------------------- */
$(".navigation").on("mouseover",function(){
    console.log("Nav Rolled Over!");

    document.getElementById("heroPic").src = heroImageDefault;
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