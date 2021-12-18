/*Hello World!*/

/**regarding the Quote */
var currentQuote = "Fiction reveals truths that reality obscures.";
var currentAuthor = "~Jessamyn West";
var tempRand = Math.floor(Math.random()*10) + 1; /*1-10*/
var tempRandCheck = tempRand; /**used to ensure the same quote doesn't appear twice in a row */

/**regarding the Hero Space */
/**change the images here */
var lastCard = "default";
var heroImageDefault = "images/Space Violet - Frank Cone.jpeg";
var heroImageDASNW = "images/DASNW-slideOne.jpg";
var heroImageLegacy = "images/Legacy-siteSplash.jpg";
var heroImageHGem = "images/HiddenGem-screens.jpg";
var heroPicText = "Click to Learn More";
var heroPicTextDefault = "Roll over a project to investigate here.";

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
$("#cardDASNW").on("mouseover",function(){
    console.log("CardDASNW Rolled Over!");
    document.getElementById("heroPic").src = heroImageDASNW;
    document.getElementById("heroText").innerHTML = heroPicText;
    document.getElementById("heroRef").href =
        "caseStudies/Case Study - DASNW.pdf";
    lastCard = "DASNW"; /**changes #heroPic to DASNW's */
});
$("#cardLegacy").on("mouseover",function(){
    console.log("CardLegacy Rolled Over!");
    document.getElementById("heroPic").src = heroImageLegacy;
    document.getElementById("heroText").innerHTML = heroPicText;
    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Legacy.pdf";
    lastCard = "Legacy"; /**changes #heroPic to Legacy's */
});
$("#cardHGem").on("mouseover",function(){
    console.log("CardHGem Rolled Over!");
    document.getElementById("heroPic").src = heroImageHGem;
    document.getElementById("heroText").innerHTML = heroPicText;
    document.getElementById("heroRef").href =
        "caseStudies/Case Study - Hidden Gem.pdf";
    lastCard = "HGem"; /**changes #heroPic to Hidden Gem's */
});
$(".navigation").on("mouseover",function(){
    console.log("Nav Rolled Over!");
    document.getElementById("heroPic").src = heroImageDefault;
    document.getElementById("heroText").innerHTML = heroPicTextDefault;
    document.getElementById("heroRef").removeAttribute("href");
    lastCard = "default"; /**resets #heroPic on nav-over */
});

/* upon clicking a stat*/
$("#heroStatLeft").on("click",function(){
    console.log("Clicked the left stat!");
});