// Get the modal
var modal1 = document.getElementById('relationshipModal');

// Get the button that opens the modal
var btn1 = document.getElementById("relationshipBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

/////////////////
// Get the modal
var modal2 = document.getElementById('slModal');

// Get the button that opens the modal
var btn2 = document.getElementById("slBtn");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
//////
// Get the modal
var modal3 = document.getElementById('synModal');

// Get the button that opens the modal
var btn3 = document.getElementById("synBtn");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal 
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

function Start() {
  document.getElementById("menu").style.display="none";
  document.getElementById("Notebook").style.display="none";  
  document.getElementById("start").style.display = "block";
  quotal.style.display = "block";
}
function Beats(){
  document.getElementById("glossary").style.display="none";
  document.getElementById("beats").style.display = "block";
  document.getElementById("Notebook").style.display="none";  
  document.getElementById("music").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("start").style.display="none";
  document.getElementById("extra").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("Soundcloud").style.display="none";
  document.getElementById("twitch").style.display="none";
      document.getElementById("meditation").style.display="none";


}
function Positive(){
  document.getElementById("glossary").style.display="none";
  document.getElementById("positive").style.display = "block";
  document.getElementById("Notebook").style.display="none";  
  document.getElementById("music").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("start").style.display="none";
  document.getElementById("extra").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("Soundcloud").style.display="none";
  document.getElementById("twitch").style.display="none";
  document.getElementById("beats").style.display="none";
     document.getElementById("meditation").style.display="none";


}
function Music(){
  document.getElementById("glossary").style.display="none";
  document.getElementById("music").style.display = "block";
  document.getElementById("Notebook").style.display="none";  
  document.getElementById("beats").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("start").style.display="none";
  document.getElementById("extra").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("Soundcloud").style.display="none";
  document.getElementById("twitch").style.display="none";
    document.getElementById("meditation").style.display="none";


}
function MainMenu(){
       document.getElementById("meditation").style.display="none";
  document.getElementById("positive").style.display = "none";
  document.getElementById("menu").style.display = "block";
    document.getElementById("logo").style.display="block";

  document.getElementById("beats").style.display = "none";
  document.getElementById("about").style.display="none";
  document.getElementById("Notebook").style.display="none";  
  document.getElementById("glossary").style.display="none";
  document.getElementById("music").style.display = "none";
  document.getElementById("start").style.display="none";
  document.getElementById("extra").style.display="none";
  document.getElementById("Soundcloud").style.display="none";
  document.getElementById("twitch").style.display="none";   
}
function About(){
   document.getElementById("about").style.display = "block";
  document.getElementById("Notebook").style.display="none";  
  document.getElementById("beats").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("start").style.display="none";
  document.getElementById("extra").style.display="none";
  document.getElementById("Soundcloud").style.display="none";
  document.getElementById("twitch").style.display="none";
      document.getElementById("meditation").style.display="none";

}
function Extras(){
  document.getElementById("Notebook").style.display="none";  
  document.getElementById("menu").style.display = "none";
  document.getElementById("music").style.display = "none";
  document.getElementById("start").style.display="none";
  document.getElementById("extra").style.display="block";
  document.getElementById("about").style.display="none";
  document.getElementById("Soundcloud").style.display="none";
  document.getElementById("twitch").style.display="none";
      document.getElementById("meditation").style.display="none";

}
function Radio(){

}
function Notebook(){
  document.getElementById("Notebook").style.display="block";  
  document.getElementById("menu").style.display = "none";
  document.getElementById("music").style.display = "none";
  document.getElementById("start").style.display="none";
  document.getElementById("extra").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("Soundcloud").style.display="none";
  document.getElementById("twitch").style.display="none";
      document.getElementById("glossary").style.display="none";
      document.getElementById("meditation").style.display="none";


}

$(document).ready(function() {

  var quote;
  var author;

  function getNewQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text('"' + quote + '"');
        if (author) {
          $('#author').text('- ' + author);
        }
        else {
          $('#author').text('- unknown');
        }
      }
    }); //making an API request
  }
  getNewQuote();

  $('#quoteBtn').on('click', function(e) {
    e.preventDefault();
    getNewQuote();
  });

  $('#shareQuote').on('click', function(e) {
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '"' + '- ' + author));
  });
});


function other(Input){
  document.getElementById("rhyres").innerHTML="";
  document.getElementById("synres").innerHTML="";
  document.getElementById("slres").innerHTML="";
  
  $.getJSON('https://api.datamuse.com/words?ml='+Input, function (data) {
    data.forEach(function(element){
      $( "#synres" ).append("<span onclick=other2('"+element.word+"')>"+ element.word +"</span> - "  );
      //add button onclick here for functionality. call other on buttons in modal
    })
  });
  $.getJSON('https://api.datamuse.com/words?sl='+Input, function (data) {
    data.forEach(function(element){
      $( "#slres" ).append("<span onclick=other2('"+element.word+"')>"+ element.word +"</span> - "  );
      //add button onclick here for functionality. call other on buttons in modal
    })
  });
  $.getJSON('https://api.datamuse.com/words?rel_rhy='+Input, function (data) {
    data.forEach(function(element){
      $( "#rhyres" ).append("<span onclick=other2('"+element.word+"')>"+ element.word +"</span> - "  );
      //add button onclick here for functionality. call other on buttons in modal
    })
  });
}


// Get the modal
var modal = document.getElementById('quotal');

// Get the button that opens the modal
var btn = document.getElementById("quptalbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    quotal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    quotal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function other2(Input){
  var res =  document.getElementById('result').innerHTML = Input;
  other(res);
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
}



var items=["lifetime",
"elsewhere",
"upside",
"grandmother",
"cannot",
"baseball",
"fireworks",
"passport",
"together",
"become",
"became",
"sunflower",
"crosswalk",
"basketball",
"sweetmeat",
"superstructure",
"moonlight",
"football",
"railroad",
"rattlesnake",
"anybody",
"weatherman",
"throwback",
"skateboard",
"meantime",
"earthquake",
"everything",
"herein",
"sometimes",
//"also",
"backward",
"schoolhouse",
"butterflies",
"upstream",
"nowhere",
"bypass",
"fireflies",
"because",
"somewhere",
"spearmint",
"something",
"another",
"somewhat",
"airport",
"anyone",
"today",
"himself",
"grasshopper",
"inside",
"themselves",
"playthings",
"footprints",
"therefore",
"uplift",
"supergiant",
"homemade",
"without",
"backbone",
"scapegoat",
"peppermint",
"eyeballs",
"longhouse",
"forget",
"afternoon",
"southwest",
"northeast",
"alongside",
"meanwhile",
"keyboard",
"whatever",
"blacksmith",
"diskdrive",
"herself",
"nobody",
"seashore",
"nearby",
"silversmith",
"watchmaker",
"subway",
"horseback",
"itself",
"headquarters",
"sandstone",
"limestone",
"underground",
"glassmaking",
"riverbanks",
"touchdown",
"honeymoon",
"bootstrap",
"toothpick",
"toothpaste",
"dishwasher",
"household",
"township",
"shadyside",
"popcorn",
"airplane",
"pickup",
"housekeeper",
"bookcase",
"babysitter",
"saucepan",
"lukewarm",
"bluefish",
"hamburger",
"honeydew",
"raincheck",
"thunderstorm",
"spokesperson",
"widespread",
"weekend",
"hometown",
"commonplace",
"moreover",
"pacemaker",
"supermarket",   
"supermen",
"supernatural",
"superpower",
"somebody",
"someday",
"somehow",
"someone",
"anymore",
"anyplace",
"anytime",
"anyway",
"backhand",
"watchdog",
"backlog",
"backpack",
"backstage",
"waterfall",
"backtrack",
"noisemaker",
"underage",
"underbelly", 
"underbid",
"undercharge",
"bookworm",
"bookstore",
"bookshelf",  
"bookend",
"superscript",
"supersonic",
"superstar",
"supersensitive",
"bookkeeper",
"bookmark",
"bookmobile",
"forgive",
"forklift",
"format",
"fortnight",
"honeycomb",
"honeysuckle",  
"honeybee",
"keyhole",
"keynote",
"keyway",
"keyword",
"lifeblood",
"lifeboat",
"lifeguard",
"lifelike",
"lifeline",
"lifelong",
"forefinger",
"forefather",
"forehand",
"forehead",
"onetime",
"supercargo", 
"supercharge",
"overabundance",  
"backside",
"backslap",
"backspace",
"backspin",
"undercut",
"underdevelop",
"underdog",
"underestimate",
"superstrong",
"supertanker",
"superweapon",
"superwoman",
"underexpose",
"underfoot",
"however",
"eyesight",
"airfield", 
"sidekick",
"crossover",
"sunbathe",
"anywhere",
"anyhow",
"backache",
"backbite",
"backbreaker",
"backdrop",
"backfire",
"background",
"textbook",
"underachieve",
"underact",
"underarm",
"keypad",
"keypunch",
"keystone",
"keystroke",
"upstairs",
"softball",
"uptight",
"upstate",
"supercool",
"superego",
"superfine",
"superhero",
"foreleg",
"foreman",
"foresee",
"oneself",
"washroom",
"blackbird",
"blackboard", 
"blackberries",
"upend",
"blacktop",
"whitecap",
"whitefish",
"whitewall",
"whitewash",
"friendship",
"pancake",
"daytime",
"upbringing",
"upbeat",
"upcoming",
"repairman",
"firefighter",  
"standby",
"bedroom",
"blackjack",
"blacklist",
"blackmail",
"blackout",
"uphill",
"waterline",
"upkeep",
"upland",
"firehouse",
"teenager", 
"carpool",
"bellbottom",
"ballroom",
"brainchild",
"pinstripe",
"bodywork",
"upward",
"upwind",
"upturn",
"storerooms",
"deadline",
"rainbow",
"watermelon",
"waterway",
"daybreak",
"daybook",
"daydream", 
"daylight",
"update",
"upgrade",
"upheaval",
"upheld",
"upload", 
"washstand",
"upon",
"upperclassman",
"lifesaver",
"forearm",
"forbearer",  
"forbid",
"carhop",
"carload",  
"carport",
"carpetbagger",
"wastepaper",
"upshot",
"uplink",
"upstage",
"newspaper",
"grandchild",
"grandparent",  
"grandchildren",
"fishpond",
"fishtail",
"hookup",
"eyecatching",
"taxicab",
"taxpayer",
"teacup",
"teamwork",
"uppercut", 
"uppercase", 
"uppermost",
"uprising",
"newsreel",
"newsstand",
"newsworthy",
"granddaughter",
"grandfather",
"grandmaster",
"grandaunt",
"grandnephew",
"upright",
"uproar",
"uproot",
"upstart",
"grandnieces",
"grandson",
"grandstand",
"granduncle",
"boldface",
"bankbook",
"bankroll", 
"dishcloth",
"dishpan",
"dishwater",
"cardboard",  
"carefree",
"caretaker",
"carsick",
"carfare",
"cargo",
"uptake",
"upthrust",
"newsroom", 
"uptime",
"carryall",
"cartwheel",
"wheelbase",
"wheelbarrow",
"washcloth",
"fishlike",
"waterproof",
"fishnet",
"newsdealer",
"watershed",
"newsman",
"snowdrift",
"intake",
"courtyard",  
"overflow",
"cornmeal",
"underclothes",
"overcoat",
"undercover",
"undercurrent",
"takeover",
"talebearer",
"taleteller",
"tapeworm",
"superhuman",
"wasteland",
"superman",
"superhighways",
"afterlife",
"setback",
"overland",
"highway",
"mainland",
"caveman",
"drawbridge",
"lifework",
"firebomb",
"someplace",
"passbook",
"passkey",
"airtime",  
"firecracker",
"sidewalk",
"fireball",
"allover",
"notebook",
"throwaway",
"fireproof",
"buttermilk",
"footnote",
"moonbeam",
"Sunday",
"handmade",
"candlelight",
"firearm",
"airline",
"crossbow",
"sideshow",
"software",
"sunfish",
"moonstruck",
"rattletrap",
"weatherproof",
"earthworm",
"schoolboy",
"sweetheart",
"butternut",
"hereafter",
"playback",
"foothill",
"eyelid",
"southeast",
"horseplay",
"headache",
"blueprint",
"raindrop",
"weekday",
"hammerhead",
"foreclose",
"foreclosure",
"slowdown",
"skyscraper",
"motherhood", 
"fatherland",
"forecast",
"highball",
"forebear",
"mainline",
"slumlord",
"snowball",
"snakeskin",
"soundproof",
"firebreak",
"aircraft",
"crosscut",
"railway",
"earthward",
"buttercup",
"allspice",
"noteworthy",
"playboy",
"footlocker",
"handgun",
"horsepower",
"rainstorm",
"bluegrass",
"cheeseburger",
"weeknight",
"headlight",  
"bedrock",
"standoff",
"commonwealth",
"cancan",
"fireboat",
"airlift",
"Passover",
"crossbreed",
"sideburns",
"sunbaked",
"moonshine",
"schoolbook",
"hereby",
"playhouse",
"butterfingers",
"footlights",
"handbook",
"backslide",
"eyelash",
"steamship", 
"headline",
"spillway",
"houseboat",
"longhand",
"horsehair",  
"standpipe",
"whatsoever",
"foresight",
"soybean",
"bookseller",
"blueberry",
"cheesecake", 
"raincoat",
"thunderbolt",
"standpoint",
"bedroll",
"cardsharp",
"bellboy",
"brainwash",
"bodyguard",
"pinhole",
"ponytail",
"newsboy",
"careworn",
"duckpin",
"duckbill",
"hookworm",
"courthouse",
"afterimage",
"highchair",
"mothball",
"sixfold",
"skintight",
"skylight",
"slapstick",
"snowbank",
"standout",
"handout",
"eyeglasses",
"footrest",
"stepson",
"stockroom",
"stonewall",
"sailboat",
"watchword",
"timesaving",
"timeshare",
"salesclerk",
"showoff",
"sharecropper",
"sheepskin",
"candlestick", 
"newsbreak",
"newscaster",
"newsprint",
"butterscotch",
"turnabout",
"turnaround",
"turnbuckle",
"eyewitness",
"starfish",
"stagehand",
"spacewalk",
"shoemaker",
"turndown",
"turnkey",  
"turnoff",
"horsefly",
"comedown",
"comeback",
"cabdriver",
"bluebird",
"tablespoon",
"tabletop",
"tableware",
"stoplight",
"sunlit",
"sandlot",
"snowbird",
"bluebell",
"wheelhouse",
"fishhook",
"fishbowl",
"stronghold",
"tailgate",
"taillight",
"taillike",
"pinup",
"tailspin",
"takeoff",
"takeout",
"bellhop",
"taproot",
"target",
"taskmaster",
"steamboat",
"dairymaid",
"teaspoon",
"daisywheel", 
"pinwheel",
"telltale",
"tenderfoot",
"tenfold",
"timekeeper",
"watchword",
"timesaving",
"timeshare",
"shoelace",
"showoff",
"sharecropper",
"sheepskin",
"newfound",
"newsbreak",
"newscaster",
"newsprint",
"timetable",
"turnabout",
"turnaround",
"turnbuckle",
"sharpshooter",
"starfish",
"stagehand",
"spacewalk",
"turncoat",
"turndown",
"turnkey",
"turnoff",
"aboveboard",
"comedown",
"comeback",
"cabdriver",
"tablecloth",
"tablespoon",
"tabletop",
"tableware",
"sundial",
"sunlit",
"sandlot",
"snowbird",
"wheelchair",
"wheelhouse", 
"fishhook",
"fishbowl",
"tagalong",
"tailgate",
"taillight",
"taillike",
"tailpiece",
"tailspin",
"takeoff",
"takeout",
"taproom",
"taproot",  
"target",
"taskmaster",
"teammate",
"dairymaid",
"teaspoon",
"daisywheel",
"showplace",
"telltale",
"tenderfoot",
"tenfold",
"shortbread",
"teapot",
"timesaving", 
"timeshare",
"firewater",
"airmen",
"sharecropper", 
"sheepskin",
"moonscape",
"schoolwork", 
"newscaster",
"newsprint",
"hereupon",
"weathercock",
"turnaround",
"turnbuckle",
"handcuff",
"headdress",
"stagehand",
"spacewalk",
"housetop", 
"forever",
"turnkey",
"turnoff",
"tailcoat",
"bedclothes",
"comeback",
"cabdriver",
"upstanding",
"fisheye",
"tabletop",
"tableware",
"afterglow",
"highland",
"sandlot",
"snowbird",
"sisterhood",
"skylark",
"fishhook",
"fishbowl",
"waistline",
"walkways",
"taillight",
"taillike",
"walleyed",
"wallpaper",
"takeoff",
"takeout",
"wardroom",
"warehouse",
"target",
"taskmaster",
"warlike",
"warmblooded",
"teaspoon",
"daisywheel",
"warpath",
"telltale", 
"tenderfoot",
"tenfold",
"around",
"washbowl",
"fisherman",
"schoolbus",
"ashtray",
"washboard",
"beachcomb",
"washout",
"blackball",
"upmarket",
"washtub",
"wastebasket",
"sunroof",
"sundown",
"snowshovel", 
"sunup",
"upset",
"wastewater",
"superimpose",
"watchband",
"jailbait",
"jetliner",
"dogwood",  
"downbeat",
"matchcase",
"backlash",
"watchman",
"below",
"jetport",
"boardwalk",
"jackpot",
"ballpark",
"watchtower",
"timepieces",
"watercolor",
"watercooler",
"gumball",
"goodbye",
"nevermore",
"coffeemaker", 
"watercraft",
"backstroke",
"waterfront",
"waterlog",
"moonwalk",
"woodshop",
"jellyfish",
"waterfowl",
"uphold",
"watermark",
"fishmonger",
"waterpower",
"shipbottom",
"goodnight",
"nutcracker",
"racquetball",
"waterscape",
"newsletter", 
"waterside",
"waterspout",
"scarecrow",
"toolbox",
"gearshift",
"tailbone",
"watertight",
"waterworks",
"waterwheel",
"wavelength",
"thunderbird",
"bugspray",
"overshoes",
"paycheck",
"wavelike",
"warfare",
"waxwork",
"waybill",
"bowtie",
"crewcut",
"typewriter",
"jumpshot",
"wayfarer",
"waylaid",
"wayward",
"wayside",
"deadend",
"eardrum",
"postcard",
"fruitcup",
"overboard",
"jellybean",
"centercut",
"rubberband",
"sunray",
"clockwise",
"downunder",
"earache",
"turntable",
"driveway",
"matchbox",
"motorcycle",
"nightfall",
"graveyard",
"carrack",
"doorstop",
"tadpole",
"eggshell",
"stopwatch",
"limelight",
"ironwork",
"cattail",
"nursemaid",
"sunglasses",
"wipeout",
"egghead",
"eardrop",
"earthbound",
"daybed",
"earring",
"housework",
"haircut",
"blowgun",
"forethought",
"upscale",
"duckweed",
"forewarn",
"upstroke",
"bowlegs",
"foreknowledge",
"uptown",
"forebrain",
"foregone",
"washhouse",
"forefeet",
"foreshadow",
"washrag",
"forefoot",
"foretold",
"forego",
"foreword",
"foreground",
"grassland",
"butterball",
"horseman",
"forecastle",
 "horseradish", 
"foremost",
"moonlit",
"forepaws",
"catwalk",
"cardstock",
"newborn",
"foredoom",
"newsperson",
"forestall",
"rainwater"
];
var A =["aviation", 
"alien", 
"eighteen", 
"pray", 
"day", 
"play", 
"say", 
"slay", 
"clay", 
"everglade", 
"everyday", 
"able", 
"ace", 
"acorn", 
"acre", 
"afraid", 
"age", 
"agent", 
"ail", 
"aim", 
"ale", 
"angel", 
"ape", 
"apex", 
"apricot", 
"April", 
"apron", 
"Asia", 
"ate", 
"baby", 
"bade", 
"bail", 
"bait", 
"bake", 
"bale", 
"bane", 
"basic", 
"basis", 
"baste", 
"bay", 
"blade", 
"blame", 
"blaze", 
"brace", 
"braid", 
"brain", 
"braise", 
"brake", 
"brave", 
"bray", 
"cage", 
"cake", 
"came",
"cane",
"cape", 
"case",
"cave",
"chain", 
"chaise", 
"chase", 
"chaste", 
"claim", 
"clay", 
"crane", 
"crate", 
"crave", 
"craze", 
"crazy", 
"dale", 
"dame", 
"date", 
"Dave", 
"day", 
"daze", 
"detail", 
"drain", 
"drake", 
"drape", 
"eight", 
"enable", 
"equator", 
"explain", 
"face", 
"fade", 
"fail", 
"faint", 
"fake", 
"fame", 
"fate", 
"faze", 
"flail", 
"flake", 
"flame", 
"flavor", 
"frail", 
"frame", 
"fray", 
"gage", 
"Gail", 
"gain", 
"gait", 
"gale", 
"game", 
"gape",
"gate",
"gave", 
"gay", 
"gaze", 
"glade", 
"glaze", 
"grace", 
"grade", 
"grain", 
"grape", 
"grate", 
"grave", 
"gravy", 
"gray", 
"graze", 
"hail", 
"hale", 
"haste", 
"hate", 
"hay", 
"haze", 
"hazy", 
"jade", 
"jail", 
"Jake", 
"Jane", 
"jay", 
"Kate", 
"label", 
"labor", 
"lace", 
"ladle", 
"lady", 
"laid", 
"lain", 
"lake", 
"lame", 
"lane", 
"late", 
"lay", 
"lazy", 
"mace", 
"made", 
"maid", 
"mail",
"maim", 
"main", 
"make", 
"male", 
"mane", 
"mate", 
"may", 
"maze", 
"nail", 
"name", 
"nape", 
"navy", 
"nay", 
"neigh", 
"obtain", 
"okay", 
"pace", 
"page", 
"paid", 
"pail", 
"pain", 
"paint", 
"pale", 
"pane", 
"paper", 
"paste", 
"pave", 
"pay", 
"place", 
"plain", 
"plane", 
"plate", 
"play", 
"potato", 
"praise", 
"pray", 
"quail", 
"quaint", 
"quake", 
"quay", 
"race", 
"radio", 
"rage", 
"raid", 
"rail", 
"rain", 
"raise", 
"rake", 
"rate", 
"rave", 
"ray", 
"raze", 
"relation", 
"remain", 
"sage", 
"sail", 
"saint", 
"sale", 
"same", 
"sane", 
"save"];
var ah = ["avocado", 
"abode", 
"add", 
"and", 
"am", 
"act", 
"ant", 
"pan", 
"bag", 
"cat", 
"man", 
"bat", 
"hat", 
"pat", 
"van", 
"tap", 
"fan", 
"rat", 
"mat", 
"jam", 
"map", 
"can", 
"fat", 
"ham", 
"mad", 
"had", 
"bad", 
"pad", 
"lad", 
"rag", 
"sat", 
"ran", 
"tax", 
"has", 
"lad", 
"gap", 
"wag", 
"gap", 
"gag", 
"lap", 
"rap", 
"yap", 
"gas", 
"lag", 
"dad", 
"cab", 
"an", 
"as", 
"at", 
"stamp", 
"cramp", 
"band", 
"trap", 
"stag", 
"pram", 
"crab", 
"tram", 
"hand", 
"lamp", 
"flag", 
"bank", 
"slab",  
"glad", 
"sand", 
"cram", 
"slam", 
"pant", 
"land", 
"slap", 
"flax", 
"flat", 
"plank", 
"stand", 
"tramp", 
"grand", 
"camp", 
"sank", 
"bang", 
"trap", 
"clap", 
"brag", 
"rank", 
"rang", 
"snap", 
"scab", 
"bank", 
"slab", 
"stab"];
var E = [
"creak", 
"sneak", 
"speak", 
"steal", 
"cream", 
"dream", 
"steam", 
"clear", 
"smear", 
  "bring", 
"cling", 
"fling", 
"sling", 
"sting", 
"swing", 
"kink", 
"link", 
"mink", 
"pink", 
"rink", 
"sink", 
"wink", 
"chink", 
"think", 
"spear", 
"treat", 
"bleed", 
"breed", 
"freed", 
"greed", 
"speed", 
"steed", 
"treed", 
"creep", 
"sleep", 
"steep", 
"sweep", 
"fleet", 
"greet", 
"sleet", 
"sweet", 
"clean", 
"creek", 
"Greek", 
"sleek", 
"steel", 
"green", 
"sneer", 
"steer", 
"spree", 
"least", 
"feast", 
"streak", 
"stream", 
"scream", 
"street", 
"screen",
"spring", 
"string", 
"blink", 
"brink", 
"clink", 
"drink", 
"shrink", 
"stink"
];
var eh =[
"bled", 
"bred", 
"fled", 
"Fred", 
"shred", 
"sled", 
"sped", 
"smell", 
"spell", 
"swell", 
"bend", 
"lend", 
"mend", 
"send", 
"tend", 
"bent", 
"cent", 
"dent", 
"rent", 
"lent", 
"sent", 
"tent", 
"went", 
"best", 
"nest", 
"pest", 
"rest", 
"test", 
"vest", 
"west", 
"chest", 
"fret", 
"bless", 
"dress", 
"press", 
"left", 
"help", 
"next", 
"weld", 
"blend", 
"spend", 
"trend", 
"spent", 
"blest", 
"stress", 
"slept", 
"crept", 
"strength"  
];
var I =[
"price", 
"slice", 
"spice", 
"twice", 
"bride", 
"glide", 
"pride", 
"slide", 
"crime", 
"grime", 
"prime", 
"slime", 
"brine", 
"shrine", 
"spine", 
"swine", 
"drive", 
"thrive", 
"bribe", 
"tribe", 
"spike", 
"smile", 
"gripe", 
"spite", 
"splice", 
"stride", 
"strive", 
"scribe", 
"strife", 
"strike", 
"stripe", 
"sprite",
"bright", 
"flight", 
"fright", 
"slight", 
"spry"
];
var ih = [
"brick", 
"click", 
"flick", 
"slick", 
"stick", 
"trick", 
"grid", 
"skid", 
"slid", 
"swig", 
"twig", 
"drill", 
"grill", 
"frill", 
"skill", 
"spill", 
"still", 
"thrill", 
"trill", 
"brim", 
"grim", 
"slim", 
"swim", 
"trim", 
"grin", 
"skin", 
"spin", 
"twin", 
"hint", 
"lint", 
"mint", 
"tint", 
"blip", 
"clip", 
"drip", 
"flip", 
"grip", 
"skip", 
"slip", 
"snip", 
"trip", 
"grit", 
"skit", 
"slit", 
"spit", 
"crib", 
"cliff", 
"sniff", 
"stiff", 
"gift", 
"lift", 
"shift", 
"tilt", 
"wilt", 
"swish", 
"disk", 
"risk", 
"Swiss", 
"list", 
"mist", 
"switch", 
"sprig",  
"flint", 
"print", 
"strip", 
"split", 
"drift", 
"swift", 
"thrift", 
"brisk", 
"frisk", 
"twist", 
"blimp", 
"crisp", 
"sprint", 
"splint", 
"script",
"scrimp"  
];
var O =  [
  "broke", 
"smoke", 
"spoke", 
"clone", 
"crone", 
"drone", 
"stone", 
"grope", 
"slope", 
"scope", 
"score", 
"store", 
"snore", 
"swore", 
"globe", 
"probe", 
"stole", 
"close", 
"drove", 
"stove", 
"stroke", 
"strode",
 "cloak", 
"croak", 
"groan", 
"boast", 
"coast", 
"roast", 
"toast", 
"bloat", 
"float", 
"throat", 
"blown", 
"flown", 
"grown"
];
var U = [
 "screw", 
"drool", 
"spool", 
"stool", 
"bloom", 
"broom", 
"gloom", 
"groom", 
"spoon", 
"droop", 
"scoop", 
"snoop", 
"swoop", 
"troop", 
"smooth",
"crude", 
"prude", 
"prune", 
"flute", 
"spruce"
];
var uh =[
"stub",
"club", 
"grub", 
"shrub", 
"stub", 
"cluck", 
"pluck", 
"stuck", 
"truck", 
"bluff", 
"fluff", 
"gruff", 
"scuff", 
"stuff", 
"drug", 
"plug", 
"shrug", 
"slug", 
"snug", 
"drum", 
"plum", 
"scum", 
"slum", 
"swum", 
"bump", 
"dump", 
"hump", 
"jump", 
"lump", 
"pump", 
"spun", 
"stun", 
"clung", 
"flung", 
"stung", 
"swung", 
"bunk", 
"dunk", 
"hunk", 
"junk", 
"punk", 
"sunk", 
"chunk", 
"blush", 
"brush", 
"crush", 
"flush", 
"plush", 
"slush", 
"thrush", 
"spud", 
"grudge", 
"bunch", 
"hunch", 
"lunch", 
"munch", 
"punch",
"bunt", 
"hunt", 
"punt", 
"runt", 
"plus", 
"bust", 
"dust", 
"just", 
"must", 
"rust", 
"scrub", 
"struck", 
"strum", 
"clump", 
"grump", 
"plump", 
"slump", 
"stump", 
"trump", 
"sprung", 
"strung", 
"drunk", 
"flunk", 
"plunk", 
"shrunk", 
"skunk", 
"slunk", 
"spunk", 
"stunk", 
"trunk", 
"strut", 
"crunch", 
"blunt", 
"grunt", 
"stunt", 
"thrust", 
"trust", 
"crust"
];
var owh = [
  "blob", 
"slob", 
"snob", 
"block", 
"clock", 
"crock", 
"flock", 
"frock", 
"smock", 
"stock", 
"clod", 
"plod", 
"prod", 
"clog", 
"frog", 
"smog", 
"prong", 
"crop", 
"drop", 
"flop", 
"plop", 
"slop", 
"stop", 
"blot", 
"clot", 
"plot", 
"slot", 
"spot", 
"trot", 
"cross", 
"blotch", 
"strong", 
"blond", 
"stomp", 
"frost"
];

celebs = [ "Adam Levine","Adele",
"Alexander Skarsgard","Ali Larter",
"Alicia Keys","Amanda Bynes",
"Amanda Seyfried","America Ferrera",
"Amy Adams","Amy Winehouse",
"Andrew Garfield","Angelina Jolie",
"Anna Nicole Smith","Anna Paquin"
,"Anne Hathaway","Ashlee Simpson"
,"Ashley Greene","Ashley Olsen"
,"Ashley Tisdale","Ashton Kutcher"
,"Audrina Patridge","Avril Lavigne","Ben Affleck","Bethenny Frankel","Beyoncé Knowles","Blake Lively","Blake Shelton","Brad Paisley","Brad Pitt","Bradley Cooper","Britney Spears","Brody Jenner"
,"Brooke Shields","Bruce Willis"
,"Céline Dion","Cameron Diaz"
,"Carmen Electra","Carrie Underwood"
,"Cate Blanchett","Catherine Zeta-Jones"
,"Chace Crawford","Channing Tatum"
,"Charlie Sheen","Charlize Theron"
,"Cheryl Burke","Chris Brown"
,"Chris Hemsworth","Chris Pine","Christian Bale"
,"Christina Aguilera","Christina Applegate","Claire Danes"
,"Clay Aiken","Colin Farrel","Colin Firth","Corbin Bleu"
,"Cory Monteith","Courteney Cox"
,"Dakota Fanning","Daniel Craig"
,"Daniel Radcliffe","David Archuleta"
,"David Beckham","David Cook"
,"Demi Lovato","Demi Moore"
,"Denise Richards","Denzel Washington"
,"Sean Combs","Drew Barrymore"
,"Ed Westwick","Elin Nordegren"
,"Elisabeth Hasselbeck","Ellen DeGeneres"
,"Ellen Pompeo","Emily Blunt"
,"Emma Roberts","Emma Stone"
,"Emma Watson","Eva Longoria"
,"Eva Mendes","Evan Rachel Wood"
,"Evangeline Lilly","Faith Hill"
,"Fergie","George Clooney"
,"Gerard Butler","Gisele Bündchen","Gwen Stefani","Gwyneth Paltrow","Halle Berry"
,"Hayden Panettiere","Heath Ledger"
,"Heather Locklear","Heidi Klum"
,"Heidi Montag","Hilary Duff"
,"Hugh Jackman","Isla Fisher"
,"Jake Gyllenhaal","James Franco"
,"Jamie Lynn Spears","Janet Jackson"
,"January Jones","Jennifer Aniston"
,"Jennifer Garner","Jennifer Hudson"
,"Jennifer Lawrence","Jennifer Lopez"
,"Jenny McCarthy","Jessica Alba"
,"Jessica Biel","Jessica Chastain"
,"Jessica Simpson","Jessica Szohr"
,"Joe Jonas","Joel Madden"
,"John Krasinski","John Mayer"
,"Johnny Depp","Jon Hamm"
,"Jonas Brothers","Jordin Sparks"
,"Josh Duhamel","Josh Hartnett"
,"Josh Hutcherson","Jude Law"
,"Julia Louis-Dreyfus","Julia Roberts"
,"Julianne Hough","Justin Bieber","Justin Timberlake","Kanye West","Kate Beckinsale","Kate Bosworth","Kate Gosselin","Kate Hudson","Princess Kate"
,"Kate Moss","Kate Walsh"
,"Kate Winslet","Katharine McPhee"
,"Katherine Heigl","Katie Holmes"
,"Katy Perry","Keanu Reeves"
,"Keira Knightley","Keith Urban"
,"Kellan Lutz","Kellie Pickler"
,"Kelly Clarkson","Kelly Ripa"
,"Kendra Wilkinson","Kenny Chesney"
,"Keri Russell","Kerry Washington"
,"Kevin Federline","Khloé Kardashian"
,"Kim Kardashian","Kirsten Dunst"
,"Kirstie Alley","Kourtney Kardashian"
,"Kris Allen","Kristen Bell"
,"Kristen Stewart","Kristin Cavallari"
,"Lady Gaga","Lauren Conrad"
,"Lea Michele","LeAnn Rimes"
,"Leighton Meester","Leonardo DiCaprio"
,"Liam Hemsworth","Lindsay Lohan"
,"Liv Tyler","Lucy Liu"
,"Madonna","Maggie Gyllenhaal"
,"Mandy Moore","Mariah Carey"
,"Mario Lopez","Mark Ballas"
,"Mark Wahlberg","Mary-Kate Olsen"
,"Matt Damon","Matthew McConaughey"
,"Megan Fox","Michelle Obama"
,"Michelle Williams","Mila Kunis"
,"Miley Cyrus","Milo Ventimiglia"
,"Miranda Kerr","Miranda Lambert"
,"Mischa Barton"
,"Naomi Campbell"
,"Naomi Watts"
,"Natalie Portman"
,"Neil Patrick Harris"
,"Nick Lachey"
,"Nicole Kidman"
,"Nicole Richie"
,"Olivia Wilde"
,"Oprah Winfrey"
,"Orlando Bloom"
,"Owen Wilson"
,"Pamela Anderson"
,"Paris Hilton"
,"Patrick Dempsey"
,"Paula Abdul"
,"Penélope Cruz"
,"Penn Badgley"
,"Pete Wentz"
,"Pink"
,"Pippa Middleton"
,"Prince Harry"
,"Prince William"
,"Queen Latifah"
,"Rachael Ray"
,"Rachel Bilson"
,"Rachel McAdams"
,"Rebecca Romijn"
,"Reese Witherspoon"
,"Renée Zellweger"
,"Rihanna"
,"Robert Downey Jr."
,"Robert Pattinson"
,"Rooney Mara"
,"Rosario Dawson"
,"Rosie O’Donnell"
,"Rumer Willis"
,"Ryan Gosling"
,"Ryan Phillippe"
,"Ryan Reynolds"
,"Ryan Seacrest"
,"Salma Hayek"
,"Sandra Bullock"
,"Sandra Oh"
,"Sarah Jessica Parker"
,"Sarah Michelle Gellar"
,"Scarlett Johansson"
,"Selena Gomez"
,"Shakira"
,"Shania Twain"
,"Sheryl Crow"
,"Shia LaBeouf"
,"Sienna Miller"
,"Simon Cowell"
,"Sofia Vergara"
,"Taylor Hicks"
,"Taylor Lautner"
,"Taylor Momsen"
,"Taylor Swift"
,"Teri Hatcher"
,"Tiger Woods"
,"Tim McGraw"
,"Tina Fey"
,"Tom Brady"
,"Tom Cruise"
,"Tori Spelling"
,"Tyra Banks"
,"Usher"
,"Vanessa Hudgens"
,"Vanessa Minnillo"
,"Vanessa Williams"
,"Victoria Beckham"
,"Vince Vaughn"
,"Whitney Port"
,"Will Smith"
,"Winona Ryder"
,"Zac Efron"
,"Zoë Saldana"
,"Joan Rivers","Lauren Bacall4","Robin Williams","Shirley Temple","Philip Seymour Hoffman","Nelson Mandela","Paul Walker","Cory Monteith","Whitney Houston","Steve Jobs","Elizabeth Taylor","Farrah Fawcett","Michael Jackson","Natasha Richardson","Patrick Swayze","Paul Newman","Princess Diana"
];
movies = ["The Shawshank Redemption (1994)",
"The Godfather (1972)",
"The Godfather: Part II (1974)",
 "The Dark Knight (2008)",
 "12 Angry Men (1957)",
 "Schindler's List (1993)", 
 "Pulp Fiction (1994)",
 "The Lord of the Rings: The Return of the King (2003)",
" The Good, the Bad and the Ugly (1966)",
 "Fight Club (1999)",
  "The Lord of the Rings: The Fellowship of the Ring (2001)",
 "Forrest Gump (1994)",   
 "Star Wars: Episode V - The Empire Strikes Back (1980)",
 "Inception (2010)", "The Lord of the Rings: The Two Towers (2002)",  "One Flew Over the Cuckoo's Nest (1975)", "Goodfellas (1990)",  "The Matrix (1999)",   "Seven Samurai (1954)",
  "Star Wars: Episode IV - A New Hope (1977)",    
  "City of God (2002)",
  "Se7en (1995)",
 "It's a Wonderful Life (1946)",
 "Life Is Beautiful (1997)",
  "The Silence of the Lambs (1991)",
 "The Usual Suspects (1995)", 
 "Léon: The Professional (1994)",
 "Spirited Away (2001)",
 "Saving Private Ryan (1998)",
 "Coco (2017)",
 "American History X (1998)",
 "Interstellar (2014)",
 "Once Upon a Time in the West (1968)", 
 "The Green Mile (1999)", 
 "Psycho (1960)",
 "Casablanca (1942)",
 "City Lights (1931)",
"The Intouchables (2011)",
 "Modern Times (1936)",
 "The Pianist (2002)", "Raiders of the Lost Ark (1981)",
 "The Departed (2006)",
 "Terminator 2 (1991)",
 "Rear Window (1954)",  
 "Back to the Future (1985)",
 "Whiplash (2014)",
 "Gladiator (2000)",
  "The Lion King (1994)",
 "The Prestige (2006)",
 "Memento (2000)",  
 "Apocalypse Now (1979)",
 "Alien (1979)",
 "The Great Dictator (1940)",
 "Sunset Boulevard (1950)",
 "Cinema Paradiso (1988)",
"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)",
"The Lives of Others (2006)",
  "Grave of the Fireflies (1988)",
  "Paths of Glory (1957)",
 "Django Unchained (2012)",
 "The Shining (1980)",
 "WALL·E (2008)",
"American Beauty (1999)",
 "Princess Mononoke (1997)",  
 "The Dark Knight Rises (2012)",  
 "Oldboy (2003)",
 "Witness for the Prosecution (1957)",  
 "Aliens (1986)",   
 "Once Upon a Time in America (1984)",  
 "Dangal (2016)",   
 "Das Boot (1981)", 
 "Citizen Kane (1941)",
 "Vertigo (1958)",  
 "North by Northwest (1959)",
 "Braveheart (1995)", 
 "Star Wars: Episode VI - Return of the Jedi (1983)",
 "Reservoir Dogs (1992)",
 "Your Name (2016)",
 "Requiem for a Dream (2000)",  
 "M (1931)",
 "Like Stars on Earth (2007)",
 "Amélie (2001)",
 "A Clockwork Orange (1971)",
"Lawrence of Arabia (1962)",
 "Amadeus (1984)",
 "Double Indemnity (1944)", 
" Blade Runner 2049 (2017)",
 "Eternal Sunshine of the Spotless Mind (2004)",
 "Taxi Driver (1976)",  
 "To Kill a Mockingbird (1962)",
 "Full Metal Jacket (1987)",  
 "Singin' in the Rain (1952)",    
 "2001: A Space Odyssey (1968)",  
 "3 Idiots (2009)",
 "Toy Story (1995)",
 "The Sting (1973)",
 "Toy Story 3 (2010)",
 "Inglourious Basterds (2009)",
 "Bicycle Thieves (1948)",
 "The Kid (1921)","Snatch (2000)",
 "Monty Python and the Holy Grail (1975)",
 "Good Will Hunting (1997)",
 "The Hunt (2012)",
 "For a Few Dollars More (1965)",
"Scarface (1983)",
 "L.A. Confidential (1997)",
 "The Apartment (1960)",
 "Metropolis (1927)",
 "A Separation (2011)",
 "Rashomon (1950)",
 "Indiana Jones and the Last Crusade (1989)",
 "Yojimbo (1961)",  
 "All About Eve (1950)",
 "Up (2009)",
 "Batman Begins (2005)",  
"My Father and My Son (2005)",
"Some Like It Hot (1959)",
 "The Treasure of the Sierra Madre (1948)",
 "Unforgiven (1992)",
 "Downfall (2004)",
 "Die Hard (1988)", 
 "Heat (1995)",   
 "Raging Bull (1980)",
 "Children of Heaven (1997)",
 "The Third Man (1949)",
 "The Great Escape (1963)",
 "Ikiru (1952)",
 "Chinatown (1974)",
 "Pan's Labyrinth (2006)",  
 "Incendies (2010)",
 "My Neighbor Totoro (1988)",
 "Ran (1985)", 
 "Judgment at Nuremberg (1961)",
"The Gold Rush (1925)", "The Secret in Their Eyes (2001)",
"Howl's Moving Castle (2004)",
"Inside Out (2015)",
"The Bridge on the River Kwai (1957)",
  "On the Waterfront (1954)",
  "The Seventh Seal (1957)",
  "Room (2015)",
  "Lock, Stock and Two Smoking Barrels (1998)",
  "Mr. Smith Goes to Washington (1939)",
  "A Beautiful Mind (2001)",
  "Casino (1995)",
  "Blade Runner (1982)",
  "The Elephant Man (1980)",
  "V for Vendetta (2005)",
  "The Wolf of Wall Street (2013)",
  "Wild Strawberries (1957)",
  "The General (1926)",
  "Warrior (2011)",
  "Dial M for Murder (1954)",
  "Trainspotting (1996)",
  "Gran Torino (2008)",
  "Gone with the Wind (1939)",
  "The Deer Hunter (1978)",
  "The Sixth Sense (1999)",
  "Fargo (1996)",
  "No Country for Old Men (2007)",
  "Sunrise (1927)",
  "The Thing (1982)",
  "Finding Nemo (2003)",
  "The Big Lebowski (1998)",
  "There Will Be Blood (2007)",
  "The Bandit (1996)",
  "Tokyo Story (1953)",
  "Andrei Rublev (1966)",
  "Come and See (1985)",
  "Cool Hand Luke (1967)",
  "Rebecca (1940)",
  "Kill Bill: Vol. 1 (2003)",
  "Hacksaw Ridge (2016)",
  "How to Train Your Dragon (2010)",
  "Rang De Basanti (2006)",
  "Mary and Max (2009)",
  "Gone Girl (2014)",
  "Shutter Island (2010)",  
  "The Passion of Joan of Arc (1928)",  
  "Dunkirk (2017)",
  "Into the Wild (2007)",
  "Life of Brian (1979)", 
  "It Happened One Night (1934)", 
  "Wild Tales (2014)",
  "Platoon (1986)",
  "La La Land (2016)",
  "Logan (2017)", 
  "Hotel Rwanda (2004)",
  "Network (1976)",
  "In the Name of the Father (1993)",
 "The Wages of Fear (1953)",
 "Stand by Me (1986)",
 "Rush (2013)",
 "The Grand Budapest Hotel (2014)", 
 "Ben-Hur (1959)",
 "Persona (1966)",    
 "A Wednesday (2008)",
 "Jurassic Park (1993)",
 "The 400 Blows (1959)",
 "Memories of Murder (2003)",
"12 Years a Slave (2013)",
 "Million Dollar Baby (2004)",
 "Mad Max: Fury Road (2015)",
 "Spotlight (2015)",
 "Stalker (1979)",
 "The Truman Show (1998)",
 "Amores Perros (2000)",
 "Butch Cassidy and the Sundance Kid (1969)",
 "Thor: Ragnarok (2017)", 
 "Hachi: A Dog's Tale (2009)",
 "Before Sunrise (1995)",
 "Nausicaä of the Valley of the Wind (1984)", "The Princess Bride (1987)",  
 "The Maltese Falcon (1941)", "Prisoners (2013)", "The Nights of Cabiria (1957)", "Paper Moon (1973)",  
"Harry Potter and the Deathly Hallows: Part 2 (2011)",
  "Catch Me If You Can (2002)",   
 "Rocky (1976)",  
 "The Grapes of Wrath (1940)",
 "Diabolique (1955)",
 "Monsters, Inc. (2001)",
 "Touch of Evil (1958)",  
 "Gandhi (1982)", 
 "Donnie Darko (2001)",   
 "Barry Lyndon (1975)", "The Terminator (1984)",    
 "Annie Hall (1977)", 
 "Groundhog Day (1993)",
 "The Bourne Ultimatum (2007)",
 "The Wizard of Oz (1939)",
 "La Haine (1995)",
 "8½ (1963)",
 "Jaws (1975)", 
 "Munna Bhai M.B.B.S. (2003)",  
 "Infernal Affairs (2002)",
 "The Best Years of Our Lives (1946)",  
 "In the Mood for Love (2000)", 
 "Twelve Monkeys (1995)",
 "The Help (2011)",   
 "Dead Poets Society (1989)",
 "Paris, Texas (1984)",
 "Beauty and the Beast (1991)", 
 "The Handmaiden (2016)", 
 "Drishyam (2015)", 
 "Castle in the Sky (1986)",
 "Dog Day Afternoon (1975)",
 "Three Colors: Red (1994)"];

 var emotions = ["Absorbed","Abhorrence","Acceptance","Admiration","Adoration","Adrift","Aching","Affection","Afraid","Agitated","Agony","Aggravated","Alarm","Alert","Alienated","Alive","Alone","Amazed","Amused","Anger","Angst","Animated","Animosity","Animus","Annoyed","Antagonistic","Anticipation","Antipathy","Antsy","Anxiety","Apathetic","Apologetic","Appalled","Appreciative","Apprehensive","Ardor","Arousal","Astonishment","Astounded","Attachment","Attraction","Aversion","Awe","Awkward","Baffled","Bashful","Befuddled","Bemused","Betrayed","Bewildered","Bitter","Blessed","Bliss","Blithe","Blue","Bold","Bonhomie","Boredom","Bothered","Bouncy","Brave","Breathless","Brooding","Bubbly","Buoyant","Burning","Calm","Captivated","Carefree","Caring","Cautious","Certain","Chagrin","Challenged","Chary","Cheerful","Choked","Choleric","Clueless","Cocky","Cold","Collected","Comfortable","Commiseration","Committed","Compassionate","Complacent","Complaisance","Composed","Compunction","Confused","Courage","Concerned","Confident","Conflicted","Consternation","Contemplative","Contempt","Contentment","Contrition","Cordial","Cowardly","Crafty","Cranky","Craving","Crestfallen","Cross","Cruel","Crummy","Crushed","Curious","Cynical","Defeated","Dejection","Delectation","Delighted","Delirious","Denial","Derisive","Desire","Desolation","Despair","Despondent","Detached","Determined","Detestation","Devastated","Devotion","Disappointed","Disbelief","Disdain","Disgruntled","Disgust","Disillusioned","Disinterested","Dismay","Distaste","Distracted","Distress","Disturbed","Doleful","Dopey","Doubtful","Down","Downcast","Drained","Dread","Dubious","Dumbfounded","Eager","Earnest","Ease","Ebullient","Ecstatic","Edgy","Elated","Embarrassment","Empathic","Empty","Enchantment","Energetic","Engrossed","Enjoyment","Enlightenment","Enmity","Entertainment","Enthralled","Enthusiasm","Envy","Euphoria","Exasperated","Excitement","Excluded","ExhaustedExhilaration","Expectant","Exuberant","Fanatical","Fascinated","Fatigued","Feisty","Felicitous","Fervor","Flabbergasted","Floored","Fondness","Foolish","Foreboding","Fortunate","Frazzled","Free","Fretful","Frightened","Frustrated","Fulfilled","Furious","Genial","Giddy","Glad","Gleeful","Gloomy","Goofy","Gratified","Grateful","Greedy","Grief","Groggy","Grudging","Guarded","Guilt","Gung-ho","Gusto","Hankering","Happy","Harassed","Hatred","Heartache","Heartbroken","Helpless","Hesitant","Hollow","Homesick","Hopeful","Horrified","Hostile","Humiliated","Humored","Hurt","Hyper","Hysterical","Impatient","Incensed","Indifferent","Indignant","Infatuated","Inferior","Inspired","Intense","Interested","Intimacy","Intimidated","Intoxicated","Intrigued","Introspective","Invigorated","Irascible","Ire","Irritated","Isolated","Jaded","Jealous","Jittery","Jocular","Jocund","Jolly","Jovial","Joy","Jubilant","Jumpy","Keen","Lazy","Left out","Lethargic","Liberation","Lighthearted","Liking","Listless","Lively","Lonely","Longing","Lost","Love","Lucky","Lust","Mad","Meditative","Melancholic","Mellow","Merry","Miffed","Mirth","Mischievous","Miserable","Mollified","Mortified","Motivated","Mournful","Moved","Mystified","Nasty","Nauseous","Needy","Nervous","Neutral","Nonplussed","Nostalgic","Numb","Obsessed","Offended","Optimistic","Outrage","Overwhelmed","Pacified","Pain","Panic","Paranoid","Passion","Pathetic","Peaceful","Peevish","Pensive","Perky","Perplexed","Perturbed","Pessimistic","Petrified","Petty","Petulant","Phlegmatic","Pity","Playful","Pleasure","Positive","Possessive","Powerful","Powerless","Preoccupied","Protective","Proud","Psyched","Pumped","Puzzled","Quizzical","Rage","Rapture","Rattled","Reassured","Receptive","Reflective","Regret","Relaxed","Relief","Relish","Reluctance","Remorse","Repugnance","Resentment","Resignation","Restless","Revolted","Sad","Sanguine","Satisfied","Scandalized","Scorn","Secure","Self-Conscious","Selfish","Sensual","Sensitive","Serendipitous","Serene","Settled","Shaken","Shame","Sheepish","Shock","Shy","Sick","Silly","Sincere","Skeptical","Sluggish","Smug","Snappy","Solemn","Solicitous","Somber","Sore","Sorrow","Sorry","Sour","Speechless","Spiteful","Sprightly","Stirred","Stressed","Strong","Stung","Stunned","Stupefied","Submissive","Succor","Suffering","Suffocated","Sullen","Sunny","Superior","Sure","Surprised","Startled","Sympathy","Tenderness","Tense","Terror","Testy","Tetchy","Thankful","Thirst","Thoughtful","Thrill","Timid","Tired","Titillation",/*"Tormented",*/"Torn",/*"Torture",*/"Touched","Traumatized","Tranquil","Trepidation","Triumphant","Troubled","Trust","Twitchy","Upbeat","Upset","Uptight","Vehement","Vexation","Vigilant","Vindication","Vindictive","Warmth","Wary","Weak","Weary","Welcome","Woe","Wonder","Woozy","Worry","Wrath","Wretched","Yearning","Zeal","Zest"];
var flavors = ["Almond","Amaretto","Ambrosia","Annisette","Apple","Apple Pie","Bali Hai","Banana","Blackberry","Black Cherry","Blueberry","Blue Hawaii","Blue Orchid","Blue-Raspberry","Bubble Gum","Cantaloupe","Caramel","Cherry","Cherry Kola","Cherry Vanilla","Chocolate","Cinnamon","Coconut","Coffee","Cotton Candy","Cream Soda","Daiquiri","","Dill Pickle","Dreamsicle","Fuzzy Navel","Grape","Green Apple","Hawaiian Delight","Hurricane","Ice Cream","Kiwifruit","Lemon","Lemonade","Lemon-Lime","Lemon Meringue","Licorice","Lime","Mai-Tai","Mandarin","Mango","Marachino-Cherry","Margarita","Nectar","Orange","Papaya","Passion Fruit","Pecan","Peach","Peppermint","","Piña Colada","Pineapple","Pink Bubblegum","Pink Lemonade","Plum","Praline","Popeye","Raspberry","Root Beer","Rum","Silver Fox","Spearmint","Strawberry","Strawberry-Daiquiri","Strawberry-Shortcake","Sweet Cherry","Tamarind","Tiger's Blood","Tropical Punch","Tutti Frutti","Vanilla","Watermelon","Wedding Cake","Wild Blueberry","Wild Cherry","Wild Strawberry"];

function randomA(){
  console.log("A");
}
function randomE(){
  console.log("E");
}
function randomI(){
  console.log("I");
}
function randomO(){
  console.log("O");
}
function randomU(){
  console.log("U");
}
function randomah(){
  console.log("ah");
}
function randomeh(){
  console.log("eh");
}
function randomih(){
  console.log("ih");
}
function randomoh(){
  console.log("oh");
}
function randomuh(){
  console.log("uh");
}
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];    
}

function roll(){
  document.getElementById('result').innerHTML = random_item(items); 
  UpdateWords();
}
function rollCommon(){
  document.getElementById('result').innerHTML = random_item(words1); 
  UpdateWords();
}
function rollAdj(){
  document.getElementById('result').innerHTML = random_item(adjectives); 
  UpdateWords();
}
function rollAdv(){
  document.getElementById('result').innerHTML = random_item(adverbs); 
  UpdateWords();
}
function rollVerbs(){
  document.getElementById('result').innerHTML = random_item(verbs); 
  UpdateWords();
}
function randomA(){
  document.getElementById('result').innerHTML = random_item(A);
  UpdateWords();
}
function randomah(){
  document.getElementById('result').innerHTML = random_item(ah); 
  UpdateWords();
}
function randomE(){
  document.getElementById('result').innerHTML = random_item(E); 
  UpdateWords();
}
function randomeh(){
  document.getElementById('result').innerHTML = random_item(eh); 
  UpdateWords();
}
function randomI(){
  document.getElementById('result').innerHTML = random_item(I);
  UpdateWords();
}
function randomih(){
  document.getElementById('result').innerHTML = random_item(ih); 
  UpdateWords();
}
function randomO(){
  document.getElementById('result').innerHTML = random_item(O);
  UpdateWords();
}
function randomU(){
  document.getElementById('result').innerHTML = random_item(U);
  UpdateWords();
}
function randomuh(){
  document.getElementById('result').innerHTML = random_item(uh); 
  UpdateWords();
}
function randomowh(){
  document.getElementById('result').innerHTML = random_item(owh); 
  UpdateWords();
}
function rollCeleb(){
  document.getElementById('result').innerHTML = random_item(celebs); 
  UpdateWords();
}
function rollAth(){
  document.getElementById('result').innerHTML = random_item(athletes); 
  UpdateWords();
}
function rollMov(){
  document.getElementById('result').innerHTML = random_item(movies); 
  UpdateWords();
}
function rollFla(){
  document.getElementById('result').innerHTML = random_item(flavors); 
  UpdateWords();
}
function rollEmo(){
  document.getElementById('result').innerHTML = random_item(emotions); 
  UpdateWords();
}
function rollQue(){
  document.getElementById('result').innerHTML = random_item(questions); 
  UpdateWords();
}


function startswith(){
var startswith = "";

startswith = document.getElementById("result").innerHTML;
  startswith = document.getElementById("result").innerHTML.substring(0,3);
document.getElementById("startwith").src="https://www.morewords.com/starts-with/"+ startswith +"/";
}

function endswith(){
var endswith = "";

endswith = document.getElementById("result").innerHTML;
  var len = endswith.length;
  endswith = document.getElementById("result").innerHTML.substring(len,3);
document.getElementById("endswith").src="https://www.morewords.com/ends-with/"+ endswith +"/";
}
roll();
questions = ["Who...?", "Where...?", "When...?", "Why...?", "What...?", "Which...?", "How...?", "How Many...?", "How Much...?", "How Often...?", "How Far...?", "Are...?", "Can [pronoun]...?", "May I" ,"Am?", "___ Or ___?","Were [pronoun]...?","Do [pronoun]...?"];
verbs = ["accept","care","could","enjoy","happen","lead","open","reduce","settle","teach","account","carry","count","examine","hate","learn","order","refer","shake","tell","achieve","catch","cover","exist","have","leave","ought","reflect","shall","tend","act","cause","create","expect","head","lend","own","refuse","share","test","add","change","cross","experience","hear","let","pass","regard","shoot","thank","admit","charge","cry","explain","help","lie","pay","relate","should","think","affect","check","cut","express","hide","like","perform","release","shout","throw","afford","choose","damage","extend","hit","limit","pick","remain","show","touch","agree","claim","dance","face","hold","link","place","remember","shut","train","aim","clean","deal","fail","hope","listen","plan","remove","sing","travel","allow","clear","decide","fall","hurt","live","play","repeat","sit","treat","answer","climb","deliver","fasten","identify","look","point","replace","sleep","try","appear","close","demand","feed","imagine","lose","prefer","reply","smile","turn","apply","collect","deny","feel","improve","love","prepare","report","sort","understand","argue","come","depend","fight","include","make","present","represent","sound","use","arrange","commit","describe","fill","increase","manage","press","require","speak","used to","arrive","compare","design","find","indicate","mark","prevent","rest","stand","visit","ask","complain","destroy","finish","influence","matter","produce","result","start","vote","attack","complete","develop","fit","inform","may","promise","return","state","wait","avoid","concern","die","fly","intend","mean","protect","reveal","stay","walk","base","confirm","disappear","fold","introduce","measure","prove","ring","stick","want","be","connect","discover","follow","invite","meet","provide","rise","stop","warn","beat","consider","discuss","force","involve","mention","publish","roll","study","wash","become","consist","divide","forget","join","might","pull","run","succeed","watch","begin","contact","do","forgive","jump","mind","push","save","suffer","wear","believe","contain","draw","form","keep","miss","put","say","suggest","will","belong","continue","dress","found","kick","move","raise","see","suit","win","break","contribute","drink","gain","kill","must","reach","seem","supply","wish","build","control","drive","get","knock","need","read","sell","support","wonder","burn","cook","drop","give","know","notice","realize","send","suppose","work","buy","copy","eat","go","last","obtain","receive","separate","survive","worry","call","correct","enable","grow","laugh","occur","recognize","serve","take","would","can","cost","encourage","handle","lay","offer","record","set","talk","write"];
athletes = ["Michael Jordan - basketball"," Babe Ruth - baseball"," Muhammad Ali -  boxing"," Jim Brown - American football","  Wayne Gretzky - ice hockey"," Jesse Owens - track and field","  Jim Thorpe -  baseball / track and field / American football"," Willie Mays - baseball"," Jack Nicklaus - golf","Babe Zaharias -  golf / track and field","Joe Louis -  boxing","Carl Lewis - track and field","Wilt Chamberlain -  basketball"," Hank Aaron -  baseball"," Jackie Robinson - baseball"," Ted Williams -  baseball"," Magic Johnson - basketball"," Bill Russell -  basketball"," Martina Navratilova - tennis"," Ty Cobb - baseball"," Gordie Howe - ice hockey"," Joe DiMaggio -  baseball"," Jackie Joyner-Kersee -  track and field","  Sugar Ray Robinson -  boxing"," Joe Montana - American football","  Kareem Abdul-Jabbar - basketball"," Jerry Rice -  American football","  Red Grange -  American football","  Arnold Palmer - golf"," Larry Bird -  basketball"," Bobby Orr - ice hockey"," Johnny Unitas - American football","  Mark Spitz -  swimming"," Lou Gehrig -  baseball"," Secretariat - horse","  Oscar Robertson - basketball"," Mickey Mantle - baseball"," Ben Hogan - golf"," Walter Payton - American football","  Lawrence Taylor - American football","  Wilma Rudolph - track and field","  Sandy Koufax -  baseball"," Julius Erving - basketball"," Bobby Jones - golf"," Bill Tilden - tennis"," Eric Heiden - speed skater"," Edwin Moses - track and field","  Pete Sampras -  tennis"," O J Simpson - American football","  Chris Evert - tennis"," Rocky Marciano -  boxing"," Jack Dempsey -  boxing"," Rafer Johnson - track and field (decathlon)","  Greg Louganis - diving"," Mario Lemieux - ice hockey"," Pete Rose - baseball"," Bill Shoemaker -  jockey"," Elgin Baylor -  basketball"," Billie Jean King -  tennis"," Walter Johnson -  baseball"," Stan Musial - baseball"," Jerry West -  basketball"," Satchel Paige - baseball"," Sammy Baugh - American football","  Althea Gibson - tennis"," Eddie Arcaro -  jockey"," Bob Gibson -  baseball"," Al Oerter - track and field","  Bonnie Blair -  speed skater"," Dick Butkus - American football","  Roberto Clemente -  baseball"," Bo Jackson -  baseball / American football"," Josh Gibson - baseball"," Deion Sanders - American football / baseball"," Dan Marino -  American football","  Barry Sanders - American football","  Cy Young -  baseball"," Bob Mathias - track and field (decathlon)","  Gale Sayers - American football","  A J Foyt -  auto racing","  Jimmy Connors - tennis"," Bobby Hull -  ice hockey"," Honus Wagner -  baseball"," Man o' War -  horse","  Maurice Richard - ice hockey"," Otto Graham - American football","  Henry Armstrong - boxing"," Joe Namath -  American Football","  Rogers Hornsby -  baseball"," Richard Petty - auto racing (NASCAR)"," Bob Beamon -  track and field","  Mario Andretti -  auto racing","  Don Hutson -  American football","  Bob Cousy - basketball"," George Blanda - American football","  Michael Johnson - track and field","  Citation -  horse","  Don Budge - tennis"," Sam Snead - golf"," Jack Johnson -  boxing"]
adverbs=["abnormally","absentmindedly","accidentally","acidly","actually","adventurously","afterwards","almost","always","angrily","annually","anxiously","arrogantly","awkwardly","","badly","bashfully","beautifully","bitterly","bleakly","blindly","blissfully","boastfully","boldly","bravely","briefly","brightly","briskly","broadly","busily","","calmly","carefully","carelessly","cautiously","certainly","cheerfully","clearly","cleverly","closely","coaxingly","colorfully","commonly","continually","coolly","correctly","courageously","crossly","cruelly","curiously","","daily","daintily","dearly","deceivingly","delightfully","deeply","defiantly","deliberately","delightfully","diligently","dimly","doubtfully","dreamily","","easily","elegantly","energetically","enormously","enthusiastically","equally","especially","even","evenly","eventually","exactly","excitedly","extremely","","fairly","faithfully","famously","far","fast","fatally","ferociously","fervently","fiercely","fondly","foolishly","fortunately","frankly","frantically","freely","frenetically","frightfully","fully","furiously ","","generally","generously","gently","gladly","gleefully","gracefully","gratefully","greatly","greedily ","","happily","hastily","healthily","heavily","helpfully","helplessly","highly","honestly","hopelessly","hourly","hungrily ","","immediately","innocently","inquisitively","instantly","intensely","intently","interestingly","inwardly","irritably","","jaggedly","jealousy","joshingly","joyfully","joyously","jovially","jubilantly","judgementally","justly","","keenly","kiddingly","kindheartedly","kindly","kissingly","knavishly","knottily","knowingly","knowledgeably","kookily  ","lazily","less","lightly","likely","limply","lively","loftily","longingly","loosely","lovingly","loudly","loyally","","","madly","majestically","meaningfully","mechanically","merrily","miserably","mockingly","monthly","more","mortally","mostly","mysteriously  ","","naturally","nearly","neatly","needily","nervously","never","nicely","noisily","not","","obediently","obnoxiously","oddly","offensively","officially","often","only","openly","optimistically","overconfidently","owlishly","","painfully","partially","patiently","perfectly","physically","playfully","politely","poorly","positively","potentially","powerfully","promptly","properly","punctually","","quaintly","quarrelsomely","queasily","queerly","questionably","questioningly","quicker","quickly","quietly","quirkily","quizzically","","rapidly","rarely","readily","really","reassuringly","recklessly","regularly","reluctantly","repeatedly","reproachfully","restfully","righteously","rightfully","rigidly","roughly","rudely","","sadly","safely","scarcely","scarily","searchingly","sedately","seemingly","seldom","selfishly","separately","seriously","shakily","sharply","sheepishly","shrilly","shyly","silently","sleepily","slowly","smoothly","softly","solemnly","solidly","sometimes","soon","speedily","stealthily","sternly","strictly","successfully","suddenly","surprisingly","suspiciously","sweetly","swiftly","sympathetically","","tenderly","tensely","terribly","thankfully","thoroughly","thoughtfully","tightly","tomorrow","too","tremendously","triumphantly","truly","truthfully","","ultimately","unabashedly","unaccountably","unbearably","unethically","unexpectedly","unfortunately","unimpressively","unnaturally","unnecessarily","utterly","upbeat","upliftingly","upright","upside-down","upward","upwardly","urgently","usefully","uselessly","usually","utterly","","vacantly","vaguely","vainly","valiantly","vastly","verbally","very","viciously","victoriously","violently","vivaciously","voluntarily","","warmly","weakly","wearily","well","wetly","wholly","wildly","willfully","wisely","woefully","wonderfully","worriedly","wrongly","","yawningly","yearly","yearningly","yesterday","yieldingly","youthfully","","zealously","zestfully","zestily","","not","also","very","often","however","too","usually","really","early","never","always","sometimes","together","likely","simply","generally","instead","actually","again","rather almost","especially","ever","quickly","probably","already","below","directly","therefore","else","thus","easily","eventually","exactly","certainly","normally","currently","extremely","finally","constantly  properly","soon","specifically","ahead","daily","highly","immediately","relatively","slowly","fairly","primarily","completely","ultimately","widely","recently","seriously","frequently","fully","mostly","naturally  nearly","occasionally","carefully","clearly","essentially","possibly","slightly","somewhat","equally","greatly","necessarily","personally","rarely","regularly","similarly","basically","closely","effectively","initially","literally  mainly","merely","gently","hopefully","originally","roughly","significantly","totally","twice","elsewhere","everywhere","obviously","perfectly","physically","successfully","suddenly","truly","virtually","altogether","anyway","automatically","deeply","definitely","deliberately","hardly","readily","terribly","unfortunately","forth","briefly","moreover","strongly","honestly","previously","as","there","when","how","so","up  out","no","only","well","then","first","where","why","now","around","once","down","off","here","tonight","away","today","far","quite","later  above","yet","maybe","otherwise","near","forward","somewhere","anywhere","please","forever","somehow","absolutely","abroad","yeah","nowhere","tomorrow","yesterday","the","to","in  on","by","more","about","such","through","new","just","any","each","much","before","between","free","right","best","since","both","sure","without back","better","enough","lot","small","though","less","little","under","next","hard","real","left","least","short","last","within","along","lower","TRUE"];
adjectives = ["aback","abaft","abandoned","abashed","aberrant","abhorrent","abiding","abject","ablaze","able","abnormal","aboard","aboriginal","abortive","abounding","abrasive","abrupt","absent","absorbed","absorbing","abstracted","absurd","abundant","abusive","acceptable","accessible","accidental","accurate","acid","acidic","acoustic","acrid","actually","ad","hoc","adamant","adaptable","addicted","adhesive","adjoining","adorable","adventurous","afraid","aggressive","agonizing","agreeable","ahead","ajar","alcoholic","alert","alike","alive","alleged","alluring","aloof","amazing","ambiguous","ambitious","amuck","amused","amusing","ancient","angry","animated","annoyed","annoying","anxious","apathetic","aquatic","aromatic","arrogant","ashamed","aspiring","assorted","astonishing","attractive","auspicious","automatic","available","average","awake","aware","awesome","awful","axiomatic","bad","barbarous","bashful","bawdy","beautiful","befitting","belligerent","beneficial","bent","berserk","best","better","bewildered","big","billowy","bite-sized","bitter","bizarre","black","black-and-white","bloody","blue","blue-eyed","blushing","boiling","boorish","bored","boring","bouncy","boundless","brainy","brash","brave","brawny","breakable","breezy","brief","bright","broad","broken","brown","bumpy","burly","bustling","busy","cagey","calculating","callous","calm","capable","capricious","careful","careless","caring","cautious","ceaseless","certain","changeable","charming","cheap","cheerful","chemical","chief","childlike","chilly","chivalrous","chubby","chunky","clammy","classy","clean","clear","clever","cloistered","cloudy","closed","clumsy","cluttered","coherent","cold","colorful","colossal","combative","comfortable","common","complete","complex","concerned","condemned","confused","conscious","cooing","cool","cooperative","coordinated","courageous","cowardly","crabby","craven","crazy","creepy","crooked","crowded","cruel","cuddly","cultured","cumbersome","curious","curly","curved","curvy","cut","cute","cynical","daffy","daily","damaged","damaging","damp","dangerous","dapper","dark","dashing","dazzling","dead","deadpan","deafening","dear","debonair","decisive","decorous","deep","deeply","defeated","defective","defiant","delicate","delicious","delightful","demonic","delirious","dependent","depressed","deranged","descriptive","deserted","detailed","determined","devilish","didactic","different","difficult","diligent","direful","dirty","disagreeable","disastrous","discreet","disgusted","disgusting","disillusioned","dispensable","distinct","disturbed","divergent","dizzy","domineering","doubtful","drab","draconian","dramatic","dreary","drunk","dry","dull","dusty","dynamic","dysfunctional","eager","early","earsplitting","earthy","easy","eatable","economic","educated","efficacious","efficient","eight","elastic","elated","elderly","electric","elegant","elfin","elite","embarrassed","eminent","empty","enchanted","enchanting","encouraging","endurable","energetic","enormous","entertaining","enthusiastic","envious","equable","equal","erect","erratic","ethereal","evanescent","evasive","even","excellent","excited","exciting","exclusive","exotic","expensive","extra-large","extra-small","exuberant","exultant","fabulous","faded","faint","fair","faithful","fallacious","false","familiar","famous","fanatical","fancy","fantastic","far","far-flung","fascinated","fast","fat","faulty","fearful","fearless","feeble","feigned","female","fertile","festive","few","fierce","filthy","fine","finicky","first","five","fixed","flagrant","flaky","flashy","flat","flawless","flimsy","flippant","flowery","fluffy","fluttering","foamy","foolish","foregoing","forgetful","fortunate","four","frail","fragile","frantic","free","freezing","frequent","fresh","fretful","friendly","frightened","frightening","full","fumbling","functional","funny","furry","furtive","future","futuristic","fuzzy","gabby","gainful","gamy","gaping","garrulous","gaudy","general","gentle","giant","giddy","gifted","gigantic","glamorous","gleaming","glib","glistening","glorious","glossy","godly","good","goofy","gorgeous","graceful","grandiose","grateful","gratis","gray","greasy","great","greedy","green","grey","grieving","groovy","grotesque","grouchy","grubby","gruesome","grumpy","guarded","guiltless","gullible","gusty","guttural","habitual","half","hallowed","halting","handsome","handsomely","handy","hanging","hapless","happy","hard","hard-to-find","harmonious","harsh","hateful","heady","healthy","heartbreaking","heavenly","heavy","hellish","helpful","helpless","hesitant","hideous","high","highfalutin","high-pitched","hilarious","hissing","historical","holistic","hollow","homeless","homely","honorable","horrible","hospitable","hot","huge","hulking","humdrum","humorous","hungry","hurried","hurt","hushed","husky","hypnotic","hysterical","icky","icy","idiotic","ignorant","ill","illegal","ill-fated","ill-informed","illustrious","imaginary","immense","imminent","impartial","imperfect","impolite","important","imported","impossible","incandescent","incompetent","inconclusive","industrious","incredible","inexpensive","infamous","innate","innocent","inquisitive","insidious","instinctive","intelligent","interesting","internal","invincible","irate","irritating","itchy","jaded","jagged","jazzy","jealous","jittery","jobless","jolly","joyous","judicious","juicy","jumbled","jumpy","juvenile","kaput","keen","kind","kindhearted","kindly","knotty","knowing","knowledgeable","known","labored","lackadaisical","lacking","lame","lamentable","languid","large","last","late","laughable","lavish","lazy","lean","learned","left","legal","lethal","level","lewd","light","like","likeable","limping","literate","little","lively","living","lonely","long","longing","long-term","loose","lopsided","loud","loutish","lovely","loving","low","lowly","lucky","ludicrous","lumpy","lush","luxuriant","lying","lyrical","macabre","macho","maddening","madly","magenta","magical","magnificent","majestic","makeshift","male","malicious","mammoth","maniacal","many","marked","massive","married","marvelous","material","materialistic","mature","mean","measly","meaty","medical","meek","mellow","melodic","melted","merciful","mere","messy","mighty","military","milky","mindless","miniature","minor","miscreant","misty","mixed","moaning","modern","moldy","momentous","motionless","mountainous","muddled","mundane","murky","mushy","mute","mysterious","naive","nappy","narrow","nasty","natural","naughty","nauseating","near","neat","nebulous","necessary","needless","needy","neighborly","nervous","new","next","nice","nifty","nimble","nine","nippy","noiseless","noisy","nonchalant","nondescript","nonstop","normal","nostalgic","nosy","noxious","null","numberless","numerous","nutritious","nutty","oafish","obedient","obeisant","obese","obnoxious","obscene","obsequious","observant","obsolete","obtainable","oceanic","odd","offbeat","old","old-fashioned","omniscient","one","onerous","open","opposite","optimal","orange","ordinary","organic","ossified","outgoing","outrageous","outstanding","oval","overconfident","overjoyed","overrated","overt","overwrought","painful","painstaking","pale","paltry","panicky","panoramic","parallel","parched","parsimonious","past","pastoral","pathetic","peaceful","penitent","perfect","periodic","permissible","perpetual","petite","phobic","physical","picayune","pink","piquant","placid","plain","plant","plastic","plausible","pleasant","plucky","pointless","poised","polite","political","poor","possessive","possible","powerful","precious","premium","present","pretty","previous","pricey","prickly","private","probable","productive","profuse","protective","proud","psychedelic","psychotic","public","puffy","pumped","puny","purple","purring","pushy","puzzled","puzzling","quack","quaint","quarrelsome","questionable","quick","quickest","quiet","quirky","quixotic","quizzical","rabid","racial","ragged","rainy","rambunctious","rampant","rapid","rare","raspy","ratty","ready","real","rebel","receptive","recondite","red","redundant","reflective","regular","relieved","remarkable","reminiscent","repulsive","resolute","resonant","responsible","rhetorical","rich","right","righteous","rightful","rigid","ripe","ritzy","roasted","robust","romantic","roomy","rotten","rough","round","royal","ruddy","rude","rural","rustic","ruthless","sable","sad","safe","salty","same","sassy","satisfying","savory","scandalous","scarce","scared","scary","scattered","scientific","scintillating","scrawny","screeching","second","second-hand","secret","secretive","sedate","seemly","selective","selfish","separate","serious","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","shrill","shut","shy","sick","silent","silky","silly","simple","simplistic","sincere","six","skillful","skinny","sleepy","slim","slimy","slippery","sloppy","slow","small","smart","smelly","smiling","smoggy","smooth","sneaky","snobbish","snotty","soft","soggy","solid","somber","sophisticated","sordid","sore","sour","sparkling","special","spectacular","spicy","spiffy","spiky","spiritual","spiteful","splendid","spooky","spotless","spotted","spotty","spurious","squalid","square","squealing","squeamish","staking","stale","standing","statuesque","steadfast","steady","steep","stereotyped","sticky","stiff","stimulating","stingy","stormy","straight","strange","striped","strong","stupendous","stupid","sturdy","subdued","subsequent","substantial","successful","succinct","sudden","sulky","super","superb","superficial","supreme","swanky","sweet","sweltering","swift","symptomatic","synonymous","taboo","tacit","tacky","talented","tall","tame","tan","tangible","tangy","tart","tasteful","tasteless","tasty","tawdry","tearful","tedious","teeny","teeny-tiny","telling","temporary","ten","tender","tense","tenuous","terrible","terrific","tested","testy","thankful","therapeutic","thick","thin","thinkable","third","thirsty","thoughtful","thoughtless","threatening","three","thundering","tidy","tight","tightfisted","tiny","tired","tiresome","toothsome","torpid","tough","towering","tranquil","trashy","tremendous","tricky","trite","troubled","truculent","true","truthful","two","typical","ubiquitous","ugliest","ugly","ultra","unable","unaccountable","unadvised","unarmed","unbecoming","unbiased","uncovered","understood","undesirable","unequal","unequaled","uneven","unhealthy","uninterested","unique","unkempt","unknown","unnatural","unruly","unsightly","unsuitable","untidy","unused","unusual","unwieldy","unwritten","upbeat","uppity","upset","uptight","used","useful","useless","utopian","utter","uttermost","vacuous","vagabond","vague","valuable","various","vast","vengeful","venomous","verdant","versed","victorious","vigorous","violent","violet","vivacious","voiceless","volatile","voracious","vulgar","wacky","waggish","waiting","wakeful","wandering","wanting","warlike","warm","wary","wasteful","watery","weak","wealthy","weary","well-groomed","well-made","well-off","well-to-do","wet","whimsical","whispering","white","whole","wholesale","wicked","wide","wide-eyed","wiggly","wild","willing","windy","wiry","wise","wistful","witty","woebegone","womanly","wonderful","wooden","woozy","workable","worried","worthless","wrathful","wretched","wrong","wry"];
words1 = ["the", "of", "and", "to", "in", "i", "that", "was", "his", "he", "it", "with", "is", "for", "as", "had", "you", "not", "be", "her", "on", "at", "by", "which", "have", "or", "from", "this", "him", "but", "all", "she", "they", "were", "my", "are", "me", "one", "their", "so", "an", "said", "them", "we", "who", "would", "been", "will", "no", "when", "there", "if", "more", "out", "up", "into", "do", "any", "your", "what", "has", "man", "could", "other", "than", "our", "some", "very", "time", "upon", "about", "may", "its", "only", "now", "like", "little", "then", "can", "should", "made", "did", "us", "such", "a", "great", "before", "must", "two", "these", "see", "know", "over", "much", "down", "after", "first", "Mr", "good", "men", "own", "never", "most", "old", "shall", "day", "where", "those", "came", "come", "himself", "way", "work", "life", "without", "go", "make", "well", "through", "being", "long", "say", "might", "how", "am", "too", "even", "def", "again", "many", "back", "here", "think", "every", "people", "went", "same", "last", "thought", "away", "under", "take", "found", "hand", "eyes", "still", "place", "while", "just", "also", "young", "yet", "though", "against", "things", "get", "ever", "give", "god", "years", "off", "face", "nothing", "right", "once", "another", "left", "part", "saw", "house", "world", "head", "three", "took", "new", "love", "always", "mrs", "put", "night", "each", "king", "between", "tell", "mind", "heart", "few", "because", "thing", "whom", "far", "seemed", "looked", "called", "whole", "de", "set", "both", "got", "find", "done", "heard", "look", "name", "days", "told", "let", "lord", "country", "asked", "going", "seen", "better", "p", "having", "home", "knew", "side", "something", "moment", "father", "among", "course", "hands", "woman", "enough", "words", "mother", "soon", "full", "end", "gave", "room", "almost", "small", "thou", "cannot", "water", "want", "however", "light", "quite", "brought", "nor", "word", "whose", "given", "door", "best", "turned", "taken", "does", "use", "morning", "myself", "Gutenberg", "felt", "until", "since", "power", "themselves", "used", "rather", "began", "present", "voice", "others", "white", "works", "less", "money", "next", "poor", "death", "stood", "form", "within", "together", "till", "thy", "large", "matter", "kind", "often", "certain", "herself", "year", "friend", "half", "order", "round", "true", "anything", "keep", "sent", "wife", "means", "believe", "passed", "feet", "near", "public", "state", "son", "hundred", "children", "thus", "hope", "alone", "above", "case", "dear", "thee", "says", "person", "high", "read", "city", "already", "received", "fact", "gone", "girl", "known", "hear", "times", "least", "perhaps", "sure", "indeed", "english", "open", "body", "itself", "along", "land", "return", "leave", "air", "nature", "answered", "either", "law", "help", "lay", "point", "child", "letter", "four", "wish", "td>351", "fire", "cried", "2", "women", "speak", "number", "therefore", "hour", "friends", "held", "free", "war", "during", "several", "business", "whether", "er", "manner", "second", "reason", "replied", "united", "call", "general", "why", "behind", "became", "john", "become", "dead", "earth", "boy", "lost", "forth", "thousand", "looking", "I'll", "family", "soul", "feel", "coming", "England", "spirit", "question", "care", "truth", "ground", "really", "rest", "mean", "different", "making", "possible", "fell", "towards", "human", "kept", "short", "town", "following", "need", "cause", "met", "evening", "returned", "five", "strong", "able", "french", "live", "lady", "subject", "sn", "answer", "sea", "fear", "understand", "hard", "terms", "doubt", "around", "ask", "arms", "turn", "sense", "seems", "black", "bring", "followed", "beautiful", "close", "dark", "hold", "character", "sort", "sight", "ten", "show", "party", "fine", "ye", "ready", "story", "common", "book", "electronic", "talk", "account", "mark", "interest", "written", "can't", "bed", "necessary", "age", "else", "force", "idea", "longer", "art", "spoke", "across", "brother", "early", "ought", "sometimes", "line", "saying", "table", "appeared", "river", "continued", "eye", "ety", "sun", "information", "later", "everything", "reached", "suddenly", "past", "hours", "strange", "deep", "change", "miles", "feeling", "act", "meet", "paid", "further", "purpose", "happy", "added", "seem", "taking", "blood", "rose", "south", "beyond", "cold", "neither", "forward", "view", "I've", "position", "sound", "none", "entered", "clear", "road", "late", "stand", "suppose", "la", "daughter", "real", "nearly", "mine", "laws", "knowledge", "comes", "toward", "bad", "cut", "copy", "husband", "six", "France", "living", "peace", "didn't", "low", "north", "remember", "effect", "natural", "pretty", "fall", "fair", "service", "below", "except", "American", "hair", "London", "laid", "pass", "led", "copyright", "doing", "army", "run", "horse", "future", "opened", "pleasure", "history", "west", "pay", "red", "an'", "4", "/tr>", "hath", "note", "although", "wanted", "gold", "makes", "desire", "play", "master", "office", "tried", "front", "big", "Dr", "lived", "certainly", "wind", "receive", "attention", "government", "unto", "church", "strength", "length", "company", "placed", "paper", "letters", "probably", "glad", "important", "especially", "greater", "yourself", "fellow", "bear", "opinion", "window", "ran", "faith", "ago", "agreement", "charge", "beauty", "lips", "remained", "arm", "latter", "duty", "send", "distance", "silence", "foot", "wild", "object", "die", "save", "gentleman", "trees", "green", "trouble", "smile", "books", "wrong", "various", "sleep", "persons", "blockquote", "happened", "particular", "drew", "minutes", "hardly", "walked", "chief", "chance", "according", "beginning", "action", "deal", "loved", "visit", "thinking", "follow", "standing", "knows", "try", "presence", "heavy", "sweet", "plain", "donations", "immediately", "wrote", "mouth", "rich", "thoughts", "months", "u", "won't", "afraid", "Paris", "single", "joy", "enemy", "broken", "unless", "states", "ship", "condition", "carry", "exclaimed", "including", "filled", "seeing", "influence", "write", "boys", "appear", "outside", "secret", "parts", "please", "appearance", "evil", "march", "george", "whatever", "slowly", "tears", "horses", "places", "caught", "stay", "instead", "struck", "blue", "York", "impossible", "period", "sister", "battle", "school", "Mary", "raised", "occasion", "married", "man's", "former", "food", "youth", "learned", "merely", "reach", "system", "twenty", "dinner", "quiet", "easily", "moved", "afterwards", "giving", "walk", "stopped", "laughed", "language", "expression", "week", "hall", "danger", "property", "wonder", "usual", "figure", "born", "court", "generally", "grew", "showed", "getting", "ancient", "respect", "third", "worth", "simple", "tree", "leaving", "remain", "society", "fight", "wall", "result", "heaven", "William", "started", "command", "tone", "regard", "expected", "mere", "month", "beside", "silent", "perfect", "experience", "street", "writing", "goes", "circumstances", "entirely", "fresh", "duke", "covered", "bound", "east", "wood", "stone", "quickly", "notice", "bright", "Christ", "boat", "noble", "meant", "somewhat", "sudden", "value", "c.", "direction", "chair", "due", "support", "tom", "date", "waiting", "Christian", "village", "lives", "reading", "agree", "lines", "considered", "field", "observed", "scarcely", "wished", "wait", "greatest", "permission", "success", "piece", "british", "ex", "Charles", "formed", "speaking", "trying", "conversation", "proper", "hill", "music", "opportunity", "that's", "German", "afternoon", "cry", "cost", "allowed", "girls", "considerable", "c", "broke", "honour", "seven", "private", "sit", "news", "top", "scene", "discovered", "marriage", "step", "garden", "race", "begin", "per", "individual", "sitting", "learn", "political", "difficult", "bit", "speech", "Henry", "lie", "cast", "eat", "authority", "etc.", "floor", "ill", "ways", "officers", "offered", "original", "happiness", "flowers", "produced", "summer", "provide", "study", "religion", "picture", "walls", "personal", "America", "watch", "pleased", "leaves", "declared", "hot", "understood", "effort", "prepared", "escape", "attempt", "supposed", "killed", "fast", "author", "Indian", "brown", "determined", "pain", "spring", "takes", "drawn", "soldiers", "houses", "beneath", "talking", "turning", "century", "steps", "intended", "soft", "straight", "matters", "likely", "corner", "trademark", "justice", "simply", "produce", "trust", "appears", "Rome", "laugh", "forget", "Europe", "passage", "eight", "closed", "ourselves", "gives", "dress", "passing", "terrible", "required", "medium", "efforts", "sake", "breath", "wise", "ladies", "possession", "pleasant", "perfectly", "o'", "memory", "usually", "grave", "fixed", "modern", "spot", "troops", "rise", "break", "fifty", "island", "meeting", "camp", "nation", "existence", "reply", "I'd", "copies", "sky", "touch", "equal", "fortune", "v.", "shore", "domain", "named", "situation", "looks", "promise", "orders", "degree", "middle", "winter", "plan", "spent", "allow", "pale", "conduct", "running", "religious", "surprise", "minute", "roman", "cases", "shot", "lead", "move", "names", "stop", "higher", "et", "father's", "threw", "worse", "built", "spoken", "glass", "board", "vain", "affairs", "instance", "safe", "loss", "doctor", "offer", "class", "complete", "access", "lower", "wouldn't", "repeated", "forms", "darkness", "military", "warm", "drink", "passion", "ones", "physical", "example", "ears", "questions", "start", "lying", "smiled", "keeping", "spite", "shown", "directly", "james", "hart", "serious", "hat", "dog", "silver", "sufficient", "main", "mentioned", "servant", "pride", "crowd", "train", "wonderful", "moral", "instant", "associated", "path", "greek", "meaning", "fit", "ordered", "lot", "he's", "proved", "obliged", "enter", "rule", "sword", "attack", "seat", "game", "health", "paragraph", "statement", "social", "refund", "sorry", "courage", "members", "grace", "official", "dream", "worthy", "rock", "jack", "provided", "special", "shook", "request", "mighty", "glance", "heads", "movement", "fee", "share", "expect", "couldn't", "dollars", "spread", "opposite", "glory", "twelve", "space", "engaged", "peter", "wine", "ordinary", "mountains", "taste", "iron", "isn't", "distribute", "trade", "consider", "greatly", "accepted", "forced", "advantage", "ideas", "decided", "using", "officer", "rate", "clothes", "sign", "feelings", "native", "promised", "judge", "difference", "working", "anxious", "marry", "captain", "finished", "extent", "watched", "curious", "foreign", "besides", "method", "excellent", "confidence", "marked", "'em", "jesus", "exactly", "importance", "finally", "bill", "vast", "prove", "fancy", "quick", "yes", "sought", "prevent", "neck", "hearts", "liberty", "interesting", "sides", "legal", "gentlemen", "dry", "serve", "aside", "pure", "concerning", "forgotten", "lose", "powers", "possessed", "thrown", "evidence", "distant", "michael", "progress", "similar", "narrow", "altogether", "building", "page", "particularly", "knowing", "weeks", "settled", "holding", "mountain", "search", "sad", "sin", "lies", "proud", "pieces", "clearly", "price", "ships", "thirty", "sick", "honest", "shut", "talked", "bank", "fate", "dropped", "judgment", "conditions", "king's", "accept", "hills", "removed", "forest", "measure", "species", "seek", "highest", "otherwise", "stream", "honor", "carefully", "obtained", "ear", "bread", "bottom", "additional", "presented", "aid", "fingers", "q", "remembered", "choose", "agreed", "animal", "events", "there's", "fully", "delight", "rights", "amount", "obtain", "tax", "servants", "sons", "cross", "shoulders", "thick", "points", "stranger", "woods", "facts", "dare", "grow", "creature", "hung", "rain", "false", "tall", "gate", "nations", "created", "refused", "quietly", "surface", "freely", "holy", "streets", "blow", "july", "regarded", "fashion", "report", "coast", "daily", "file", "shoulder", "surprised", "faces", "succeeded", "birds", "distribution", "royal", "song", "wealth", "comfort", "failed", "freedom", "peculiar", "anyone", "advance", "gentle", "surely", "animals", "waited", "secure", "desired", "grass", "touched", "occupied", "draw", "stage", "portion", "expressed", "opening", "june", "spirits", "fish", "tongue", "capital", "angry", "growing", "served", "carriage", "weather", "breast", "presently", "snow", "david", "papers", "necessity", "practice", "claim", "hast", "education", "sharp", "prince", "permitted", "group", "enemies", "robert", "played", "throughout", "pity", "expense", "yours", "million", "add", "pray", "taught", "explained", "tired", "leading", "kill", "shadow", "companion", "weight", "mass", "established", "suffered", "gray", "brave", "thin", "satisfied", "check", "virtue", "golden", "numerous", "frequently", "famous", "telling", "powerful", "alive", "waters", "national", "weak", "divine", "material", "principal", "gathered", "suggested", "frank", "valley", "guess", "finding", "yellow", "heat", "remains", "bent", "seized", "guard", "equally", "naturally", "box", "remarkable", "gods", "moon", "slight", "style", "pointed", "saved", "windows", "crossed", "louis", "pounds", "ain't", "evidently", "principle", "immediate", "willing", "consequence", "richard", "principles", "characters", "paul", "season", "remarked", "science", "tender", "worked", "grown", "whispered", "interested", "quarter", "midst", "liked", "advanced", "apparently", "bore", "pwh", "active", "noticed", "aware", "thomas", "uncle", "list", "dangerous", "august", "calm", "genius", "sacred", "kingdom", "entire", "popular", "unknown", "nice", "habit", "spanish", "familiar", "reader", "published", "direct", "handsome", "you'll", "joined", "actually", "kings", "sd", "posted", "approach", "washington", "hearing", "needed", "increased", "walking", "twice", "throw", "intellectual", "appointed", "wisdom", "ceased", "truly", "numbers", "demanded", "priest", "wounded", "sorrow", "drive", "fault", "listened", "palace", "affair", "contact", "distinguished", "station", "beat", "distributed", "e", "listen", "italy", "fool", "becomes", "watching", "hurt", "wants", "express", "occurred", "favour", "height", "size", "edge", "subjects", "task", "follows", "interests", "nine", "sympathy", "burst", "putting", "dressed", "lifted", "hopes", "suffer", "noise", "smiling", "rode", "tells", "minds", "farther", "literature", "vessel", "affection", "suffering", "proceeded", "flesh", "advice", "grand", "carrying", "legs", "spain", "post", "collection", "empty", "rank", "storm", "god's", "imagine", "wore", "duties", "admitted", "countries", "pocket", "arrival", "imagination", "driven", "loud", "sentence", "lovely", "extraordinary", "november", "december", "happen", "absence", "breakfast", "population", "thank", "rules", "inhabitants", "series", "laughing", "address", "relief", "bird", "owner", "impression", "satisfaction", "coat", "prepare", "relations", "shape", "birth", "rapidly", "smoke", "January", "mother+'s", "machine", "content", "consideration", "accompanied", "regular", "moving", "stands", "wholly", "teeth", "busy", "treated", "burning", "shame", "quality", "bay", "discover", "inside", "brain", "soil", "completely", "message", "ring", "resolved", "calling", "phrase", "acts", "mention", "square", "pair", "won", "title", "understanding", "Sunday", "fruit", "mad", "forces", "included", "tea", "rocks", "nearer", "slaves", "falling", "absolutely", "slow", "bearing", "mercy", "larger", "explain", "contain", "grief", "soldier", "wasn't", "countenance", "previous", "explanation", "welcome", "proposed", "prayer", "stars", "germany", "belief", "informed", "moments", "poetry", "constant", "buy", "final", "faithful", "ride", "policy", "supper", "drawing", "excitement", "dying", "demand", "fighting", "fields", "drove", "upper", "sum", "philip", "motion", "assistance", "forty", "april", "stones", "edward", "fees", "kindly", "dignity", "catch", "october", "seated", "knees", "amongst", "current", "sending", "parties", "objects", "gained", "bitter", "possibly", "slave", "separate", "loose", "text", "receiving", "worst", "sold", "don", "credit", "chosen", "hoped", "printed", "terror", "features", "fond", "control", "capable", "fifteen", "doesn't", "firm", "superior", "cruel", "spiritual", "harry", "splendid", "proof", "pressed", "sooner", "join", "process", "crime", "dust", "instantly", "lands", "relation", "doors", "concerned", "deeply", "practical", "colour", "sing", "destroy", "anger", "distributing", "results", "increase", "reasons", "nose", "friendly", "entrance", "rooms", "admit", "supply", "clean", "useful", "yesterday", "delicate", "fail", "continue", "remove", "addressed", "choice", "huge", "needs", "wear", "blind", "unable", "cover", "double", "victory", "dozen", "constantly", "level", "india", "release", "rough", "ended", "shows", "fly", "praise", "devil", "ahead", "smith", "connected", "degrees", "gain", "addition", "committed", "chamber", "notes", "italian", "gradually", "acquaintance", "bought", "souls", "mission", "sacrifice", "cities", "mistake", "exercise", "conscience", "based", "car", "buried", "theory", "commanded", "nobody", "minister", "closely", "energy", "dick", "bare", "fought", "partly", "mistress", "hate", "arose", "playing", "color", "lake", "safety", "provisions", "description", "asleep", "centre", "faint", "thinks", "parents", "escaped", "careful", "enjoy", "drop", "brilliant", "brief", "bringing", "worship", "goods", "tale", "skin", "roof", "grey", "highly", "crown", "castle", "excited", "throne", "stated", "despair", "ease", "attached", "total", "kindness", "mile", "citizens", "circle", "dull", "extreme", "clouds", "figures", "intention", "prison", "term", "assured", "hidden", "thoroughly", "cup", "member", "civil", "apply", "labor", "everywhere", "intelligence", "strike", "fairly", "comply", "fellows", "haven't", "event", "gently", "connection", "protection", "conscious", "edition", "directed", "pulled", "flight", "evident", "surrounded", "wishes", "yards", "voices", "weary", "couple", "variety", "whilst", "volume", "details", "older", "requirements", "custom", "apart", "bow", "awful", "everybody", "labour", "asking", "lover", "showing", "introduced", "suit", "becoming", "composed", "plans", "rendered", "pictures", "lest", "volunteers", "singing", "eager", "precious", "paused", "require", "meat", "whenever", "milk", "dogs", "successful", "plants", "vision", "rare", "granted", "raise", "egypt", "manners", "cousin", "you've", "development", "arthur", "obs", "cool", "trial", "learning", "approached", "bridge", "abroad", "devoted", "paying", "literary", "writer", "fn", "israel", "disappeared", "interrupted", "stock", "readers", "dreadful", "female", "protect", "accustomed", "virginia", "type", "recognized", "salt", "destroyed", "signs", "innocent", "temper", "plenty", "pope", "avoid", "hurried", "represented", "favor", "mental", "attitude", "returning", "admiration", "brothers", "anxiety", "queen", "teach", "count", "curiosity", "solemn", "causes", "/tr>", "vessels", "compelled", "dance", "hotel", "wicked", "fled", "kissed", "guns", "fill", "visible", "younger", "guide", "earnest", "actual", "companions", "prisoner", "miserable", "lad", "harm", "views", "irish", "utterly", "ends", "shop", "stairs", "pardon", "gay", "beg", "seldom", "kinds", "record", "fat", "sand", "violent", "branches", "inquired", "iv", "september", "worn", "ireland", "flat", "departure", "delivered", "gift", "ruin", "skill", "cattle", "equipment", "temple", "calls", "earlier", "license", "visited", "en", "consent", "sufficiently", "natives", "wound", "laughter", "contained", "perceived", "scattered", "whence", "rushed", "chiefly", "bold", "anywhere", "witness", "foolish", "helped", "kitchen", "sell", "anybody", "self", "extremely", "treatment", "throat", "dreams", "patient", "speed", "growth", "quantity", "latin", "immense", "conclusion", "computer", "affected", "severe", "excuse", "triumph", "origin", "joseph", "slept", "eternal", "thine", "audience", "pages", "sounds", "swift", "limited", "wings", "stepped", "services", "library", "remaining", "containing", "base", "confusion", "win", "maid", "charming", "editions", "attended", "softly", "reality", "performed", "glorious", "likewise", "site", "sail", "frightened", "acquainted", "unhappy", "feared", "article", "prisoners", "store", "adopted", "shalt", "remark", "cook", "thousands", "pause", "inclined", "convinced", "band", "valuable", "hence", "desert", "effects", "kiss", "plant", "ice", "ball", "stick", "absolute", "readily", "behold", "fierce", "argument", "observe", "blessed", "bosom", "rage", "striking", "discovery", "creatures", "shouted", "guilty", "related", "setting", "forgot", "punishment", "gun", "slightly", "articles", "police", "mysterious", "extended", "confess", "shade", "murder", "emotion", "destruction", "wondered", "increasing", "hide", "expedition", "horror", "local", "expenses", "ignorant", "doctrine", "generous", "range", "host", "wet", "cloud", "mystery", "ed", "waste", "changes", "possess", "consciousness", "february", "trembling", "disease", "formerly", "spend", "production", "source", "mankind", "universal", "deck", "sees", "habits", "estate", "aunt", "reign", "humble", "compliance", "delay", "shining", "reported", "hers", "unfortunate", "midnight", "listening", "flower", "hero", "accomplished", "doth", "classes", "thanks", "banks", "philosophy", "belong", "finger", "comfortable", "market", "cap", "waves", "woman's", "glanced", "troubled", "difficulties", "picked", "european", "purposes", "somewhere", "delighted", "pushed", "press", "household", "fleet", "baby", "region", "lately", "uttered", "exact", "image", "ages", "murmured", "melancholy", "suspicion", "bowed", "refuse", "elizabeth", "staff", "liability", "we'll", "enjoyed", "stretched", "gaze", "belonged", "ashamed", "reward", "meal", "blame", "nodded", "status", "opinions", "indicate", "poem", "savage", "arise", "voyage", "misery", "guests", "painted", "attend", "afford", "donate", "job", "proceed", "loves", "forehead", "regret", "plainly", "risk", "ad", "lighted", "angel", "rapid", "distinct", "doubtless", "properly", "wit", "fame", "singular", "error", "utmost", "methods", "reputation", "appeal", "she's", "w", "strongly", "margaret", "lack", "breaking", "dawn", "violence", "fatal", "render", "career", "design", "displayed", "gets", "commercial", "forgive", "lights", "agreeable", "suggestion", "utter", "sheep", "resolution", "spare", "patience", "domestic", "concluded", "'tis", "farm", "reference", "chinese", "exist", "corn", "approaching", "alike", "mounted", "jane", "issue", "key", "providing", "majority", "measures", "towns", "flame", "boston", "dared", "ignorance", "reduced", "occasionally", "y", "weakness", "furnished", "china", "priests", "flying", "cloth", "gazed", "profit", "fourth", "bell", "hitherto", "benefit", "movements", "eagerly", "acted", "urged", "ascii", "disposed", "electronically", "atmosphere", "chapter", "begged", "helen", "hole", "invited", "borne", "departed", "catholic", "files", "reasonable", "sugar", "replacement", "sigh", "humanity", "thrust", "frame", "opposition", "disk", "haste", "lonely", "artist", "knight", "quarters", "charm", "substance", "rolled", "email", "flung", "celebrated", "division", "slavery", "verse", "decision", "probable", "painful", "governor", "forever", "turns", "branch", "ocean", "rear", "leader", "delightful", "stared", "boats", "keen", "disposition", "senses", "occasions", "readable", "beloved", "inches", "bones", "enthusiasm", "materials", "luck", "derived", "managed", "community", "apparent", "preserved", "magnificent", "hurry", "scheme", "oil", "thence", "reaching", "dim", "wretched", "hanging", "pipe", "useless", "nevertheless", "print", "smooth", "solid", "pursued", "necessarily", "build", "attempted", "centuries", "eggs", "equivalent", "hastily", "burned", "you'd", "recent", "oh", "travel", "cries", "noon", "crying", "generations", "located", "cabin", "announcement", "britain", "compared", "handed", "cease", "smaller", "circumstance", "tent", "frequent", "alarm", "nervous", "beast", "what's", "aloud", "independent", "gates", "distinction", "essential", "observation", "stronger", "recovered", "belonging", "loving", "masters", "writers", "cf.", "permanent", "mortal", "stern", "gratitude", "preserve", "burden", "aspect", "millions", "merry", "knife", "dread", "clever", "applicable", "district", "shadows", "jim", "silk", "failure", "links", "cent", "sentiment", "amid", "profits", "agent", "finds", "russia", "bade", "russian", "desperate", "union", "imagined", "contempt", "raising", "lords", "hell", "separated", "grant", "seriously", "tribes", "hit", "enormous", "defective", "conviction", "secured", "mixed", "insisted", "wooden", "prefer", "prayers", "fever", "selected", "daughters", "treat", "warning", "flew", "speaks", "developed", "impulse", "slipped", "ours", "johnson", "mistaken", "damages", "ambition", "resumed", "christmas", "yield", "ideal", "schools", "confirmed", "descended", "rush", "falls", "deny", "calculated", "correct", "perform", "hadn't", "somehow", "accordingly", "stayed", "acquired", "counsel", "distress", "sins", "notion", "discussion", "constitution", "anne", "hundreds", "instrument", "firmly", "actions", "steady", "remarks", "empire", "elements", "idle", "pen", "entering", "online", "africa", "permit", "th'", "tide", "vol", "leaned", "college", "maintain", "sovereign", "tail", "generation", "crowded", "fears", "nights", "limitation", "tied", "horrible", "cat", "displaying", "port", "male", "experienced", "opposed", "treaty", "contents", "rested", "mode", "poured", "les", "occur", "seeking", "practically", "abandoned", "reports", "eleven", "sank", "begins", "founded", "brings", "trace", "instinct", "collected", "scotland", "characteristic", "chose", "cheerful", "tribe", "costs", "threatened", "arrangement", "western", "sang", "beings", "sam", "pressure", "politics", "sorts", "shelter", "rude", "scientific", "revealed", "winds", "riding", "scenes", "shake", "industry", "claims", "pp.", "merit", "profession", "lamp", "interview", "territory", "sleeping", "sex", "coffee", "devotion", "thereof", "creation", "trail", "romans", "supported", "requires", "fathers", "prospect", "obey", "alexander", "shone", "operation", "northern", "nurse", "profound", "hungry", "scott", "sisters", "assure", "exceedingly", "match", "wrath", "continually", "rest.", "gifts", "folly", "chain", "uniform", "debt", "teaching", "venture", "execution", "shoes", "mood", "crew", "perceive", "accounts", "eating", "multitude", "declare", "yard", "o'er", "astonishment", "version", "vague", "odd", "grateful", "nearest", "infinite", "elsewhere", "copying", "apartment", "activity", "wives", "parted", "security", "cared", "sensible", "owing", "martin", "saturday", "cottage", "jews", "leaning", "capacity", "joe", "settle", "referred", "francis", "holder", "involved", "sunshine", "dutch", "council", "princes", "ate", "examination", "steel", "strangers", "beheld", "test", "noted", "slightest", "widow", "charity", "realized", "element", "shed", "errors", "communication", "reflection", "attacked", "organization", "maintained", "restored", "folks", "concealed", "accordance", "heavens", "star", "examined", "deeds", "wordforms", "somebody", "incident", "oath", "guest", "bar", "row", "poverty", "bottle", "prevented", "bless", "stir", "intense", "completed", "quarrel", "touching", "inner", "available", "fix", "resistance", "unusual", "deed", "derive", "hollow", "suspected", "contains", "sighed", "province", "deserted", "establishment", "vote", "muttered", "thither", "oxford", "cavalry", "lofty", "endure", "succeed", "leg", "bid", "alice", "hated", "civilization", "u.s.", "acting", "landed", "christians", "passions", "interior", "scarce", "lightly", "disturbed", "rev", "supreme", "hang", "notwithstanding", "shock", "exception", "offering", "display", "strain", "drank", "confined", "o", "exhausted", "poets", "sounded", "aim", "critical", "jerusalem", "directions", "negro", "fearful", "standard", "studied", "bag", "n", "buildings", "consequences", "commenced", "deeper", "repeat", "driving", "beasts", "track", "rid", "holds", "residence", "steadily", "intimate", "drinking", "swear", "treasure", "fun", "throwing", "apt", "enterprise", "queer", "seed", "tower", "runs", "defend", "favourite", "desires", "heavily", "assembled", "existed", "depends", "poems", "hesitated", "stuff", "section", "settlement", "staring", "sole", "roads", "plate", "mexico", "overcome", "pains", "performing", "dwell", "grounds", "taxes", "marble", "recently", "tones", "ability", "awake", "walter", "wave", "shaking", "folk", "possibility", "butter", "fury", "marched", "moses", "writes", "issued", "sailed", "instructions", "hatred", "pursuit", "pull", "furniture", "additions", "hid", "rope", "vi", "adventure", "royalty", "vanished", "arts", "elder", "signal", "wanting", "supplied", "feast", "safely", "burn", "describe", "references", "lesson", "annual", "card", "passes", "application", "intelligent", "county", "beaten", "presents", "format", "flow", "sixty", "scale", "damage", "marks", "obtaining", "moreover", "commerce", "startled", "southern", "consequently", "outer", "belongs", "ben", "wrought", "average", "naked", "conducted", "rivers", "songs", "obvious", "foundation", "concern", "ceremony", "magic", "campaign", "hunting", "carolina", "liberal", "whisper", "largely", "commonly", "torn", "exists", "contributions", "hunt", "teacher", "christianity", "lawyer", "operations", "detail", "shortly", "caesar", "wondering", "leaders", "blessing", "princess", "he'd", "altar", "tenderness", "tiny", "web", "cardinal", "sharply", "regiment", "chest", "distinctly", "purple", "creating", "gather", "depth", "indignation", "performance", "election", "prosperity", "gloomy", "conception", "clerk", "decide", "drunk", "victim", "reflected", "pour", "preceding", "individuals", "gazing", "absurd", "lift", "gesture", "armies", "limbs", "manage", "brethren", "hugh", "plays", "hastened", "dragged", "motive", "whatsoever", "pointing", "verses", "pronounced", "exchange", "definite", "emperor", "tendency", "remote", "finish", "flag", "boots", "enabled", "administration", "denied", "churches", "rarely", "earnestly", "considering", "previously", "ugly", "bears", "signed", "genuine", "harmless", "mingled", "obedience", "walks", "training", "badly", "feed", "central", "contrast", "relieved", "romance", "mississippi", "structure", "payment", "pace", "passages", "succession", "persuaded", "sources", "inquiry", "inspired", "angels", "roll", "wilt", "inch", "troubles", "perfection", "lee", "wherever", "owe", "handle", "advantages", "trip", "shoot", "fortunate", "newspaper", "employment", "fitted", "refuge", "misfortune", "providence", "owns", "cutting", "beard", "stirred", "tear", "dan", "resist", "bob", "depths", "maiden", "determine", "commission", "merchant", "whereas", "crossing", "independence", "lively", "breeze", "provinces", "jean", "virtues", "conceived", "relative", "solitary", "smell", "wandering", "thereby", "eighteen", "locked", "provision", "courts", "eaten", "historical", "regarding", "Florence", "preferred", "pick", "ruined", "wherein", "vanity", "condemned", "deliver", "unexpected", "desk", "gross", "lane", "happens", "represent", "billy", "root", "holland", "mud", "respectable", "cleared", "feels", "fruits", "testimony", "milton", "existing", "bride", "rang", "ranks", "responsibility", "beating", "disappointed", "suitable", "depend", "judges", "giant", "grasp", "arrive", "simplicity", "autumn", "absent", "legally", "veil", "gloom", "doubtful", "suspect", "weapons", "limits", "determination", "feeble", "prophet", "shak", "gathering", "basis", "examine", "corrupt", "payments", "returns", "laying", "prize", "instances", "greeks", "d", "they're", "theatre", "purchase", "comparison", "composition", "rival", "someone", "realize", "defeat", "demands", "foe", "shared", "consists", "studies", "balance", "intercourse", "id", "forming", "slender", "coach", "criminal", "knocked", "silly", "humour", "masses", "indifferent", "recall", "occupation", "discourse", "keeps", "regions", "intervals", "assist", "novel", "intellect", "leads", "hither", "tales", "sale", "revenge", "lucy", "yonder", "resources", "jealous", "we're", "wheel", "invitation", "narrative", "risen", "burnt", "sentiments", "inferior", "amusement", "marie", "flash", "recognize", "swiftly", "portrait", "create", "summoned", "suggest", "induced", "conflict", "fed", "curse", "disappointment", "helpless", "preparing", "construction", "lincoln", "zeal", "responsible", "indicated", "groups", "positive", "germans", "attracted", "vengeance", "fort", "club", "cure", "stout", "missed", "gracious", "include", "flood", "satisfy", "agony", "respects", "ventured", "implied", "maria", "stupid", "seas", "spaniards", "grain", "enjoyment", "wearing", "indifference", "conceal", "horizon", "pleasures", "therein", "precisely", "canada", "day's", "assume", "registered", "estimate", "steep", "route", "gardens", "visitor", "closer", "harmony", "non", "thunder", "wire", "graceful", "crept", "greece", "childhood", "knee", "saddle", "supplies", "weeping", "mostly", "paragraphs", "unconscious", "mutual", "scorn", "grows", "external", "agents", "software", "institutions", "losing", "universe", "clock", "attempts", "instruction", "injury", "roots", "receipt", "jumped", "dearest", "sore", "earliest", "finest", "enable", "discipline", "motives", "fastened", "introduction", "converted", "wilderness", "confused", "fancied", "offices", "slip", "revolution", "wedding", "girl's", "farmer", "silently", "fires", "wept", "behalf", "reckon", "responded", "uncertain", "neglected", "stroke", "exquisite", "engagement", "dirty", "rolling", "platform", "messenger", "privilege", "admirable", "offers", "mischief", "physician", "imposed", "organized", "covering", "student", "daring", "cave", "wars", "convey", "he'll", "sincere", "tradition", "gravely", "combined", "gallant", "sensation", "travelling", "charges", "submit", "tragedy", "specific", "commander", "inn", "stiff", "accompany", "score", "virgin", "farewell", "paradise", "villages", "hunger", "trembled", "favorite", "criticism", "proprietary", "customs", "cotton", "ruth", "hospital", "restrictions", "outward", "impressed", "blows", "plains", "flashed", "rent", "prey", "owed", "longing", "musical", "satisfactory", "ridiculous", "sheet", "disgrace", "colored", "shouldn't", "originally", "samuel", "wages", "papa", "gas", "inevitable", "extensive", "leisure", "deadly", "chin", "claimed", "glow", "husband's", "emotions", "adam", "jealousy", "leaf", "publication", "englishman", "allah", "jones", "hostile", "wandered", "railway", "translation", "procession", "betrayed", "pound", "admired", "elected", "pierre", "sunk", "ruins", "eastern", "roses", "citizen", "reminded", "deceived", "tables", "beach", "starting", "funeral", "arrested", "flour", "feature", "correspondence", "consisted", "counted", "reserve", "proceedings", "roar", "romantic", "twenty-five", "hut", "strangely", "absorbed", "propose", "seats", "bark", "reception", "pleasing", "attained", "wake", "research", "prayed", "monarch", "clothing", "dollar", "illness", "calmly", "obeyed", "heartily", "pressing", "daylight", "warriors", "jest", "abruptly", "washed", "comment", "metal", "preparations", "nerves", "solution", "pretended", "sixteen", "assembly", "tobacco", "entity", "dwelling", "depart", "swung", "bitterly", "alteration", "colony", "disclaimers", "wing", "peaceful", "lion", "opportunities", "alarmed", "furnish", "resting", "accused", "culture", "writings", "dwelt", "conquered", "trick", "trusted", "column", "financial", "cunning", "preparation", "drama", "joke", "entertained", "mist", "hypertext", "shell", "medicine", "proofread", "nest", "reverence", "situated", "yielded", "conceive", "appointment", "lessons", "fetch", "tomb", "candle", "offence", "coarse", "heap", "mixture", "homes", "model", "men's", "defect", "destined", "occasional", "fourteen", "hint", "knights", "solicit", "dreamed", "objection", "craft", "acid", "namely", "asia", "neglect", "data", "weapon", "confessed", "arrangements", "repose", "complying", "copied", "pink", "user", "heels", "grandfather", "other's", "income", "i.e.", "regards", "streams", "vigorous", "accepting", "bishop", "lightning", "authors", "flames", "observations", "compressed", "sport", "powder", "beds", "orange", "painting", "shout", "austria", "bath", "careless", "chap", "derivative", "roused", "primitive", "doorway", "climbed", "volumes", "vulgar", "arguments", "1st", "sunset", "convenient", "mail", "recalled", "wrapped", "abode", "planted", "paint", "surrender", "establish", "mild", "promptly", "appearing", "department", "parish", "stephen", "nay", "lit", "handkerchief", "basket", "easier", "deserve", "quit", "assurance", "mirror", "plot", "yer", "upward", "sadly", "secretary", "adding", "modest", "dish", "cares", "straw", "net", "advised", "heavenly", "largest", "proceeding", "impatient", "wounds", "warmth", "certainty", "restless", "meantime", "rays", "salvation", "lovers", "experiment", "shores", "today", "tremendous", "afforded", "moonlight", "intend", "california", "cultivated", "flushed", "shakespeare", "newspapers", "rocky", "pious", "wont", "steam", "improvement", "garments", "ned", "treasury", "merchants", "perpetual", "trained", "products", "affectionate", "dispute", "visitors", "poison", "proposition", "maybe", "rifle", "warned", "parting", "shield", "erected", "employ", "prevailed", "talent", "rises", "climate", "chairs", "searched", "unlike", "recover", "mate", "arrange", "fortunes", "puzzled", "committee", "aged", "ohio", "ashes", "ghost", "b", "promises", "bushes", "effective", "distinguish", "manifest", "comparatively", "esteem", "blew", "revelation", "wash", "recognition", "confession", "clay", "nonsense", "trunk", "management", "undoubtedly", "dried", "dorothy", "chiefs", "coal", "stolen", "earthly", "restore", "indirectly", "lasted", "selfish", "renewed", "canoe", "protest", "vice", "races", "deemed", "temporary", "pile", "frederick", "chapel", "moderate", "spell", "massachusetts", "upright", "quoted", "area", "bone", "solitude", "instruments", "formal", "students", "greatness", "struggling", "monday", "reproach", "altered", "grim", "leaped", "venice", "federal", "questioned", "editor", "desirable", "acknowledge", "motionless", "remedy", "bestowed", "pursue", "representative", "pole", "gladly", "linen", "vital", "sink", "pacific", "hopeless", "dangers", "gratefully", "president", "travelled", "ward", "nephew", "ms", "cheer", "bloody", "siege", "commands", "justified", "atlantic", "stomach", "improved", "admire", "openly", "sailors", "abide", "advancing", "forests", "records", "polly", "recorded", "modification", "dramatic", "statements", "upstairs", "varied", "letting", "wilson", "comrades", "sets", "descent", "whither", "envy", "load", "pretend", "folded", "brass", "internal", "furious", "curtain", "healthy", "obscure", "summit", "alas", "fifth", "center", "faced", "cheap", "saints", "colonel", "egyptian", "contest", "owned", "adventures", "exclusion", "seize", "chances", "springs", "alter", "landing", "fence", "leagues", "glimpse", "statue", "contract", "luxury", "artillery", "doubts", "saving", "fro", "string", "combination", "awakened", "faded", "arrest", "protected", "temperature", "strict", "contented", "professional", "intent", "brother's", "injured", "neighborhood", "andrew", "abundance", "smoking", "yourselves", "medical", "garrison", "likes", "corps", "heroic", "inform", "wife's", "retained", "agitation", "nobles", "prominent", "institution", "judged", "embrace", "wheels", "closing", "damaged", "pack", "affections", "eldest", "anguish", "surrounding", "obviously", "strictly", "capture", "drops", "inquire", "ample", "remainder", "justly", "recollection", "deer", "answers", "bedroom", "purely", "bush", "plunged", "thyself", "joint", "refer", "expecting", "madam", "railroad", "spake", "respecting", "jan", "columns", "weep", "identify", "discharge", "bench", "ralph", "heir", "oak", "rescue", "limit", "unpleasant", "anxiously", "innocence", "awoke", "expectation", "incomplete", "program", "reserved", "secretly", "we've", "invention", "faults", "disagreeable", "piano", "defeated", "charms", "purse", "persuade", "deprived", "electric", "endless", "interval", "chase", "heroes", "invisible", "well-known", "occupy", "jacob", "gown", "cruelty", "lock", "lowest", "hesitation", "withdrew", "proposal", "destiny", "recognised", "commons", "foul", "loaded", "amidst", "titles", "ancestors", "types", "commanding", "madness", "happily", "assigned", "declined", "temptation", "lady's", "subsequent", "jewels", "breathed", "willingly", "youthful", "bells", "spectacle", "uneasy", "shine", "formidable", "stately", "machinery", "fragments", "rushing", "attractive", "product", "economic", "sickness", "uses", "dashed", "engine", "ashore", "dates", "theirs", "adv", "clasped", "international", "leather", "spared", "crushed", "interfere", "subtle", "waved", "slope", "floating", "worry", "effected", "passengers", "violently", "donation", "steamer", "witnesses", "specified", "learnt", "stores", "designed", "guessed", "roger", "timber", "talents", "heed", "jackson", "murdered", "vivid", "woe", "calculate", "killing", "laura", "savages", "wasted", "trifle", "funny", "pockets", "philosopher", "insult", "den", "representation", "incapable", "eloquence", "dine", "temples", "ann", "sensitive", "robin", "appetite", "wishing", "picturesque", "douglas", "courtesy", "flowing", "remembrance", "lawyers", "sphere", "murmur", "elegant", "honourable", "stopping", "guilt", "welfare", "avoided", "fishing", "perish", "sober", "steal", "delicious", "infant", "lip", "norman", "offended", "dost", "memories", "wheat", "japanese", "humor", "exhibited", "encounter", "footsteps", "marquis", "smiles", "amiable", "twilight", "arrows", "consisting", "park", "retire", "economy", "sufferings", "secrets", "na", "halted", "govern", "favourable", "colors", "translated", "stretch", "formation", "immortal", "gallery", "parallel", "lean", "tempted", "frontier", "continent", "knock", "impatience", "unity", "dealing", "prohibition", "decent", "fiery", "images", "tie", "punished", "submitted", "julia", "albert", "rejoined", "speedily", "consented", "major", "preliminary", "cell", "void", "placing", "prudence", "egg", "amazement", "border", "artificial", "hereafter", "fanny", "crimes", "breathe", "exempt", "anchor", "chicago", "sits", "purchased", "eminent", "neighbors", "glowing", "sunlight", "examples", "exercised", "wealthy", "seeming", "bonaparte", "shouting", "thanked", "illustrious", "curiously", "inspiration", "seeds", "naval", "foes", "everyone", "longed", "abundant", "doubted", "painter", "greeted", "erect", "glasses", "meanwhile", "shooting", "athens", "wagon", "lend", "lent", "crisis", "undertake", "particulars", "eh", "veins", "polite", "anna", "experiences", "seal", "header", "clergy", "mount", "array", "corners", "magazine", "loudly", "bitterness", "texas", "guardian", "searching", "rejected", "harsh", "includes", "boldly", "maurice", "kate", "lunch", "pine", "shells", "seconds", "despite", "hoping", "injustice", "expressions", "flies", "push", "tight", "problems", "landscape", "sue", "protested", "scarlet", "abandon", "artistic", "mainly", "measured", "loyal", "boiling", "desirous", "suited", "alliance", "advise", "waist", "sinking", "apprehension", "stable", "gregory", "maximum", "commit", "hideous", "hamilton", "sweetness", "dismissed", "tore", "affect", "shaken", "evils", "unworthy", "significance", "modified", "miracle", "lieu", "peasant", "considerably", "observing", "conveyed", "resemblance", "extend", "riches", "personally", "morality", "rebellion", "thread", "dumb", "inclination", "forbidden", "copper", "differences", "sailor", "requested", "alfred", "response", "promoting", "imperial", "blank", "purity", "victor", "bending", "solemnly", "twenty-four", "minor", "del", "crimson", "republic", "teachers", "ma'am", "danced", "bargain", "dealt", "fatigue", "telephone", "cents", "whip", "adams", "dislike", "witnessed", "infantry", "acres", "checked", "countrymen", "enemy's", "companies", "normal", "shirt", "addresses", "introduce", "sofa", "mothers", "sweep", "conversion", "sketch", "african", "deserved", "answering", "virtuous", "persian", "anyway", "thief", "driver", "retain", "constructed", "daniel", "ut", "philadelphia", "conspicuous", "channel", "nobility", "edith", "berlin", "editing", "cambridge", "declaration", "guards", "personality", "smallest", "excess", "separation", "disgust", "ha", "accomplish", "speeches", "herbert", "convent", "rightly", "suspended", "reform", "mob", "thirst", "unnecessary", "treasures", "asks", "viewed", "designs", "gleam", "threatening", "palm", "missouri", "filling", "quoth", "fur", "fortnight", "holes", "addressing", "frightful", "encourage", "speaker", "tribute", "procure", "frankly", "recommended", "relieve", "intentions", "unjust", "legislation", "project", "threshold", "merits", "morrow", "traces", "induce", "spear", "inward", "pupils", "corresponding", "fairy", "conclude", "clung", "neat", "lucky", "lap", "session", "torture", "damp", "ridge", "spoil", "liable", "swords", "hearty", "bc", "abraham", "thoughtful", "traveller", "chains", "favorable", "tin", "imp.", "strongest", "horace", "dependent", "couch", "bills", "warrant", "complaint", "endeavour", "sails", "dined", "convention", "guarded", "angle", "widely", "illinois", "charlotte", "endeavoured", "ardent", "cow", "mill", "victims", "prejudice", "foremost", "map", "probability", "porch", "lieutenant", "surprising", "fountain", "sustained", "appropriate", "ford", "clara", "assisted", "lewis", "rejoice", "extending", "marvellous", "clothed", "jew", "collar", "bands", "confident", "hasty", "nigh", "organ", "prose", "privileges", "selection", "inquiries", "codes", "replace", "saint", "districts", "deliberately", "awe", "beforehand", "strife", "released", "compare", "beer", "retorted", "relate", "cheerfully", "pistol", "presume", "velvet", "wretch", "susan", "pennsylvania", "stirring", "righteousness", "missing", "fain", "facing", "fashionable", "producing", "peoples", "positively", "reasoning", "gravity", "disturb", "sermon", "exchanged", "partner", "brains", "lowered", "association", "estates", "abuse", "flock", "niece", "languages", "asserted", "bodily", "notions", "oliver", "faculty", "cannon", "thirteen", "sailing", "rings", "smart", "possessions", "disciples", "petty", "widest", "divisions", "prudent", "caution", "justify", "awhile", "boxes", "manuscript", "cigar", "warrior", "impressions", "aught", "lifting", "inaccurate", "tidings", "friday", "liquid", "staying", "concept", "creek", "lo", "brush", "download", "specially", "cream", "meetings", "jump", "unwilling", "adapted", "practised", "combat", "subdued", "jewish", "innumerable", "blowing", "extra", "civilized", "invented", "japan", "pitch", "cliff", "crowned", "portions", "awkward", "horrid", "pulling", "appreciate", "communicated", "kentucky", "jury", "encountered", "attacks", "monster", "simon", "maintaining", "sites", "frozen", "invariably", "dies", "survive", "literally", "consolation", "m", "phenomena", "pot", "ellen", "briefly", "rice", "planned", "barbara", "respected", "sublime", "dropping", "guy", "behaviour", "desolate", "penny", "adopt", "replaced", "revenue", "formats", "hired", "regularly", "infringement", "curtains", "eagerness", "helping", "investigation", "constitutional", "insist", "occurs", "fools", "inheritance", "latest", "leap", "games", "apple", "visiting", "travellers", "experiments", "hasn't", "pupil", "enjoying", "totally", "twisted", "discuss", "firing", "background", "subscribe", "tenderly", "transcribe", "descend", "differ", "majesty's", "avail", "disaster", "bet", "periodic", "bull", "entertainment", "computers", "cursed", "raw", "fulfilled", "georgia", "virus", "log", "skies", "scotch", "embraced", "hospitality", "faintly", "solomon", "robbed", "cart", "influences", "ascended", "incidents", "childish", "robe", "aboard", "resembling", "reflect", "dominion", "dreary", "serving", "complexion", "engage", "tents", "herd", "attain", "collect", "disclaims", "pan", "relatives", "borrowed", "convert", "outline", "blown", "comprehend", "peasants", "opera", "assault", "deceive", "doctrines", "representatives", "dedicated", "struggled", "officials", "hiding", "paths", "backs", "prominently", "prices", "procured", "mourning", "compliment", "heights", "approval", "gasped", "breadth", "withdraw", "tune", "compassion", "polished", "latitude", "dishes", "parent", "contrived", "delicacy", "projected", "akin", "f", "betray", "traced", "resentment", "indemnify", "pseud", "sacrifices", "disguise", "transcription", "document", "neighbour", "squire", "punish", "bars", "glittering", "tossed", "block", "lots", "worldly", "muscles", "elbow", "obligation", "trifling", "decline", "attachment", "ambitious", "filename", "artists", "bloom", "holiday", "brute", "repair", "fist", "recollect", "eagle", "honorable", "significant", "barren", "functions", "guided", "dense", "fiction", "viz.", "adds", "rows", "recommend", "suspicious", "resulting", "seventy", "shillings", "educational", "duly", "governed", "scripture", "upwards", "sworn", "nicholas", "horn", "brook", "fund", "vienna", "lodge", "infinitely", "clergyman", "marshal", "ruled", "fiercely", "portuguese", "costume", "pit", "disorder", "sheer", "exalted", "fare", "applause", "chaucer", "remind", "binary", "packed", "pillow", "jersey", "abbey", "nowhere", "anyhow", "agitated", "marching", "catching", "el", "grasped", "arrow", "tend", "carved", "fitting", "bonds", "instructed", "elaborate", "corpse", "bewildered", "essence", "positions", "emily", "edited", "continues", "harold", "elevation", "realm", "debts", "glancing", "shops", "complained", "loyalty", "coin", "clad", "staircase", "documents", "interpreted", "4th", "extremity", "accord", "sally", "lace", "tremble", "exile", "gospel", "mechanical", "successfully", "scholar", "wonders", "arab", "temperament", "expressing", "fred", "trap", "spots", "awaiting", "potatoes", "likeness", "harbour", "proofs", "jolly", "contributed", "wits", "generosity", "ruler", "lawrence", "cake", "lamps", "crazy", "sincerity", "entertain", "madame", "sir", "faculties", "hesitate", "deepest", "seventeen", "lordship", "greeting", "feminine", "monstrous", "tongues", "barely", "3d", "mansion", "facility", "praised", "warranties", "sarah", "happier", "indicating", "rob", "gigantic", "honey", "ladder", "ending", "wales", "swallowed", "sunny", "knelt", "tyranny", "decree", "stake", "divide", "dreaming", "proclaimed", "dignified", "tread", "mines", "viewing", "defense", "oldest", "incredible", "bidding", "brick", "arch", "everlasting", "elect", "sprung", "harder", "winding", "deductible", "magistrate", "respective", "liquor", "imitation", "shy", "perished", "prime", "studying", "eighty", "hebrew", "unfortunately", "licensed", "fog", "coloured", "bits", "consult", "moves", "r", "warn", "taylor", "vile", "depended", "phil", "legend", "locations", "shallow", "doom", "dreaded", "encouragement", "impatiently", "scent", "varieties", "irregular", "battles", "compass", "neighbouring", "bliss", "harvest", "promotion", "stove", "faithfully", "anthony", "excellence", "transfer", "awaited", "heathen", "poetic", "consulted", "illustrated", "gilbert", "br", "fundamental", "bundle", "rebel", "cultivation", "joys", "rigid", "tragic", "review", "representing", "flowed", "brows", "whereupon", "terribly", "melted", "venerable", "towers", "cooking", "mustn't", "suspicions", "old-fashioned", "oppressed", "australia", "friend's", "revolt", "swell", "improve", "williams", "describes", "goddess", "wreck", "tennessee", "convince", "sentences", "bowl", "radiant", "prussia", "westward", "indignant", "refined", "unseen", "illustration", "pertaining", "swamp", "austrian", "saxon", "congregation", "nerve", "undertaking", "disclaimer", "characteristics", "stare", "specimens", "ascertain", "pledge", "earn", "warfare", "supposing", "subsequently", "attending", "angrily", "select", "animated", "industrial", "hurriedly", "manhood", "quantities", "interpretation", "dressing", "rejoiced", "edinburgh", "catherine", "challenge", "produces", "forbid", "gang", "boiled", "shouts", "so-called", "theme", "thankful", "admission", "enters", "elevated", "frenchman", "pool", "terrified", "lads", "persisted", "conference", "equality", "genus", "didst", "newly", "generals", "surroundings", "sorrows", "occasioned", "invasion", "workmen", "monks", "sends", "turkish", "discretion", "pattern", "reveal", "endured", "resolve", "columbia", "preach", "exceeding", "ringing", "triumphant", "defiance", "errand", "woke", "grandmother", "weighed", "wool", "orleans", "communicate", "strikes", "promising", "scenery", "righteous", "essentially", "oppose", "joyous", "specimen", "doctors", "eloquent", "manager", "organs", "sticks", "drag", "haunted", "chorus", "rational", "crop", "processing", "accurate", "wolf", "adorned", "sheets", "resort", "refusal", "bond", "vicinity", "preacher", "sympathetic", "casting", "opens", "prophets", "horns", "warmly", "salary", "continuous", "satan", "continual", "defended", "breaks", "workers", "lantern", "balls", "rod", "blaze", "examining", "naples", "peculiarly", "vegetables", "ingenious", "excite", "howard", "horseback", "re-use", "louisiana", "farmers", "wildly", "mouths", "carpet", "sadness", "customary", "circles", "aren't", "wonderfully", "max", "juan", "successor", "allied", "ceiling", "confirmation", "glances", "diamonds", "goal", "representations", "cash", "vacant", "antiquity", "despise", "lawn", "they'll", "appealed", "turkey", "texts", "neighbor", "spreading", "discharged", "phrases", "ultimate", "tastes", "submission", "entry", "rachel", "blush", "monument", "hardy", "thorough", "ein", "ecclesiastical", "fertile", "exciting", "captive", "severity", "considerations", "shew", "faster", "louise", "grandeur", "winning", "solely", "globe", "malice", "echoed", "lodging", "conservative", "throng", "prosperous", "whistle", "floated", "transferred", "declaring", "reckoned", "cheese", "bite", "thoughtfully", "breach", "enthusiastic", "cars", "downstairs", "allowing", "invite", "adjoining", "dusk", "cathedral", "truths", "plague", "sandy", "boil", "caroline", "beautifully", "inhabited", "tomorrow", "exclamation", "finishing", "shocked", "escort", "forgetting", "hanged", "hats", "mirth", "uncomfortable", "connecticut", "bows", "pierced", "harbor", "tricks", "rubbed", "apparatus", "mysteries", "honesty", "negroes", "concerns", "wander", "assert", "ceremonies", "sacrificed", "utterance", "dismay", "fright", "rail", "reflections", "crops", "pushing", "proves", "jimmy", "pathetic", "imperfect", "haughty", "navy", "fortress", "hurrying", "x", "blessings", "attempting", "insects", "selling", "appreciation", "suppressed", "acquire", "offensive", "ripe", "dresses", "reigned", "coldly", "candles", "km", "sixth", "blazing", "youngest", "mask", "florida", "lecture", "parlor", "decidedly", "whereby", "gordon", "reverend", "successive", "perception", "buffalo", "sire", "quitted", "keys", "develop", "function", "morals", "damned", "vexed", "2d", "pouring", "bullet", "excessive", "bind", "identical", "cliffs", "tools", "byron", "mexican", "piety", "superstition", "git", "substantial", "bulk", "prevail", "wiser", "preaching", "prolonged", "annoyed", "westminster", "splendour", "remembering", "richmond", "upset", "cab", "bunch", "pencil", "subjected", "vegetable", "exhibit", "emerged", "cooked", "hay", "kansas", "gale", "preached", "arnold", "trousers", "debate", "dated", "tumult", "corruption", "summons", "comrade", "eternity", "hears", "lingered", "propriety", "stillness", "partial", "welcomed", "cabinet", "proceeds", "vow", "quaint", "soup", "beef", "rests", "slay", "surgeon", "irresistible", "sealed", "repeating", "needn't", "allowance", "undertaken", "treachery", "posts", "borders", "attendant", "unite", "murderer", "owners", "nm", "sweeping", "unconsciously", "blade", "saviour", "theories", "graham", "behaved", "pleaded", "spy", "possesses", "lawful", "tommy", "seasons", "withdrawn", "reckless", "factory", "shades", "gossip", "seventh", "attendance", "robes", "journal", "systems", "dryden", "maine", "token", "intimacy", "abstract", "machines", "bestow", "chanced", "locks", "honestly", "legitimate", "accent", "symptoms", "votes", "ragged", "thursday", "manifested", "fidelity", "swinging", "descending", "sincerely", "bred", "whereof", "indies", "novels", "league", "failing", "succeeding", "santa", "approve", "cautiously", "miller", "afflicted", "lodgings", "petition", "traffic", "sparkling", "limb", "architecture", "disposal", "carriages", "crack", "kindred", "naught", "ornament", "slew", "steward", "fantastic", "evolution", "patiently", "reverse", "survey", "dug", "amuse", "stretching", "isaac", "forthwith", "contemporary", "foliage", "receives", "scandal", "donors", "deliberate", "influenced", "intolerable", "hearth", "symbol", "governments", "repaired", "pleasantly", "homage", "victorious", "columbus", "recovery", "defined", "attendants", "modesty", "diana", "washing", "pavement", "unnatural", "decisive", "wisely", "precise", "negative", "occurrence", "snatched", "shaft", "linked", "festival", "exclusively", "jove", "wickedness", "visions", "maggie", "rosy", "carelessly", "stem", "corporation", "dec", "feeding", "allen", "cows", "schemes", "preference", "urge", "husbands", "labours", "shrill", "exercises", "sovereignty", "reduce", "distressed", "clearing", "removal", "dean", "scottish", "assertion", "accessible", "comedy", "flush", "code", "philosophers", "adequate", "vaguely", "treason", "hunter", "chambers", "split", "yielding", "newsletter", "snake", "pub.", "historian", "ass", "intensity", "democracy", "battery", "draws", "netherlands", "creed", "liking", "luke", "tyrant", "strove", "attraction", "slaughter", "dismal", "deposited", "assent", "cups", "concert", "downward", "canal", "evenings", "wax", "detective", "fancies", "spoiled", "revolver", "murray", "earned", "analysis", "finer", "paces", "roaring", "prompt", "paperwork", "wherefore", "emphasis", "sharing", "delayed", "inherited", "bronze", "waking", "garment", "redistributing", "wholesome", "remorse", "plato", "morris", "stooped", "dew", "monk", "thrill", "hue", "exclusive", "funds", "porter", "uncommon", "dash", "strained", "confounded", "swim", "strip", "middle-aged", "ultimately", "team", "missionary", "esteemed", "tracks", "envelope", "whoever", "expensive", "headquarters", "cherished", "brandy", "startling", "homer", "talks", "acute", "cigarette", "motor", "embarrassed", "janet", "volunteer", "offspring", "network", "reaches", "indispensable", "plane", "reaction", "regiments", "g", "sums", "partially", "prejudices", "proudly", "baggage", "terrace", "deaf", "allusion", "grip", "juice", "isabel", "resigned", "humility", "benjamin", "blast", "ministry", "sexual", "nile", "diameter", "troop", "onward", "crowds", "marrying", "tightly", "sullen", "brutal", "axe", "holmes", "penalty", "tops", "diamond", "boards", "corridor", "endowed", "strengthened", "cells", "proportions", "alternate", "echo", "restraint", "trials", "reads", "identity", "headed", "softened", "quivering", "stages", "sway", "poetical", "objected", "screen", "professed", "dirt", "ascertained", "era", "wider", "ambassador", "constituted", "breed", "interference", "eyebrows", "shapes", "afar", "consist", "acceptance", "displays", "flashing", "hunted", "beauties", "lazy", "shrewd", "extravagant", "momentary", "cordial", "engineer", "rapidity", "nov", "halt", "alternative", "devils", "stamp", "compact", "whites", "breathless", "encoding", "drift", "disappear", "roared", "revived", "counter", "venus", "imaginary", "diminished", "honoured", "5th", "despatched", "objections", "ray", "climbing", "attract", "astonishing", "competition", "suggestions", "ink", "oft", "crystal", "shower", "diseases", "ferdinand", "obedient", "draught", "wondrous", "await", "armour", "massive", "bottles", "kin", "cellar", "falsehood", "pillars", "edgar", "philosophical", "martha", "worlds", "memorable", "jacques", "detected", "stealing", "noisy", "henceforth", "cicero", "laden", "frost", "device", "glare", "touches", "senate", "lasting", "communion", "transport", "constantinople", "coffin", "eventually", "johnny", "enclosed", "forgiveness", "awfully", "clinging", "darkened", "contemplation", "termed", "manufacture", "swallow", "commonplace", "nancy", "resembled", "she'd", "labors", "contracted", "inscription", "comfortably", "indulge", "indulgence", "bravely", "kneeling", "yea", "keenly", "exhibition", "agricultural", "enlightened", "quest", "compliments", "crest", "extension", "uneasiness", "constitute", "inflicted", "lakes", "swing", "meadow", "noblest", "downloading", "complex", "controversy", "freed", "resignation", "tempest", "guidance", "prospects", "humbly", "lined", "serene", "shrugged", "honours", "roughly", "checks", "remarkably", "dainty", "overhead", "commencement", "singularly", "brightness", "oppression", "repeatedly", "conspiracy", "restrain", "splendor", "preservation", "pub", "pepper", "basin", "creeping", "matthew", "publicly", "percy", "continuing", "grove", "calamity", "pony", "vigour", "melody", "profitable", "descendants", "hire", "speculation", "discoveries", "accepts", "drunken", "candidate", "principally", "worried", "obstinate", "hasten", "foreigners", "elderly", "overwhelmed", "instincts", "telegraph", "russell", "university", "ghastly", "patron", "varying", "barbarous", "celestial", "t'", "patriotism", "modify", "earnestness", "exertion", "fox", "refusing", "horsemen", "inspection", "stations", "grieved", "louder", "bursting", "regretted", "mournful", "pursuing", "traitor", "associations", "cautious", "foundations", "stamped", "prior", "undertook", "telegram", "beggar", "chimney", "complicated", "davis", "striving", "magistrates", "converse", "graces", "wiped", "oars", "apology", "scared", "imprisonment", "eastward", "substitute", "yahweh", "handful", "usage", "lodged", "of.", "villain", "banished", "restoration", "serpent", "hedge", "k", "jurisdiction", "captains", "settlers", "gaining", "valiant", "primary", "storms", "beam", "victoria", "tour", "prophecy", "spectacles", "obsolete", "buying", "shepherd", "wells", "harriet", "exaggerated", "heated", "penetrated", "travels", "earl", "hereditary", "ali", "supernatural", "competent", "piled", "hostess", "agriculture", "boughs", "urgent", "gratified", "suffice", "ports", "drifted", "accuracy", "deceased", "circular", "securing", "possibilities", "rhine", "alert", "neighboring", "democratic", "quebec", "bud", "accounted", "aided", "augustus", "blanket", "hail", "pretence", "beams", "andy", "pig", "shaped", "oven", "rounded", "ivory", "northward", "isolated", "policeman", "aug", "conventional", "babylon", "dusty", "bishops", "complaints", "stripped", "plead", "hinder", "8vo", "cord", "flows", "personage", "classical", "alongside", "wrongs", "extract", "rewarded", "lungs", "lighter", "kisses", "serves", "pint", "forgiven", "sternly", "proclamation", "realised", "pipes", "arising", "pitched", "tube", "observer", "smote", "avenue", "elephant", "burke", "footing", "statesman", "rebels", "nails", "wears", "doomed", "edges", "esther", "indiana", "affecting", "stormy", "bee", "bury", "efficient", "mix", "supporting", "actor", "disturbance", "sweat", "executive", "seemingly", "tenth", "blossoms", "ethel", "folds", "painfully", "polish", "shudder", "oe.", "roofs", "comparative", "begging", "imposing", "notable", "invested", "imprisoned", "mute", "amy", "cage", "esq", "pg", "cured", "cargo", "prof.", "negotiations", "assented", "jail", "skilful", "ideals", "conferred", "resulted", "illusion", "torment", "troublesome", "crowns", "feb", "repentance", "blankets", "proprietor", "uncertainty", "concentrated", "mediterranean", "covers", "scream", "compromise", "respectful", "chariot", "ammunition", "bonnet", "secondary", "persia", "persecution", "lesser", "assistant", "saluted", "fits", "indulged", "springing", "cane", "fold", "boundary", "valued", "she'll", "rugged", "aloft", "thieves", "parlour", "indebted", "tons", "processes", "dave", "moore", "argue", "dearly", "logic", "panic", "restrained", "lb", "vainly", "weariness", "enlarged", "franklin", "tasted", "rural", "torrent", "resolute", "refrain", "kissing", "gorgeous", "meets", "circulation", "passionately", "inasmuch", "unexpectedly", "stress", "consumption", "groan", "suits", "sustain", "hosts", "crash", "resemble", "epoch", "quote", "lacking", "nominally", "choked", "aristocracy", "granite", "gradual", "delights", "hurled", "joyful", "sack", "slumber", "detached", "snapped", "shadowy", "accompanying", "annoyance", "crush", "needle", "repent", "phenomenon", "execute", "canst", "smoked", "greet", "monarchy", "behave", "richly", "controlled", "strive", "endeavor", "barrier", "canadian", "curve", "politeness", "flora", "rely", "flank", "convenience", "courteous", "logs", "lamb", "effectually", "robinson", "logical", "shan't", "dimly", "withered", "diet", "praises", "fulfil", "mantle", "ne'er", "discussing", "chicken", "judicial", "consistent", "ridicule", "as.", "reins", "barrel", "distrust", "trunks", "verily", "hunters", "feather", "desperately", "goodly", "habitual", "voluntary", "luncheon", "eighteenth", "exertions", "expert", "coolly", "mistakes", "tedious", "contemplated", "clark", "jacket", "gleaming", "shrank", "swimming", "kent", "perplexed", "impressive", "universally", "displeasure", "maids", "rates", "underneath", "expedient", "emma", "impress", "bees", "bounded", "worshipped", "resisted", "provincial", "popularity", "baker", "shattered", "merciful", "olive", "tramp", "compensation", "ernest", "martial", "genial", "syria", "conjecture", "van", "waiter", "detained", "items", "promote", "delaware", "covenant", "nought", "interposed", "seizing", "sinner", "vigor", "devote", "decorated", "sentimental", "yoke", "properties", "warlike", "perilous", "threats", "kindled", "lays", "hostility", "dragging", "mare", "regulations", "obstacle", "sage", "destitute", "pays", "sleepy", "dublin", "jonathan", "posterity", "they'd", "nod", "mason", "patriotic", "plantation", "pitiful", "foster", "requisite", "expose", "oxen", "patch", "anderson", "stuart", "interruption", "lance", "payable", "definition", "birthday", "thumb", "wolves", "hammer", "overwhelming", "intensely", "revolutionary", "fragrant", "bleeding", "sheltered", "circuit", "dominions", "sales", "energetic", "insignificant", "repetition", "we'd", "amazing", "trains", "skirts", "tip", "trivial", "kick", "tended", "rejoicing", "dig", "pet", "skull", "lectures", "ness", "threat", "legislature", "plunder", "removing", "jungle", "ghosts", "numbered", "famine", "palaces", "sorrowful", "improvements", "coleridge", "fuller", "asp", "blocks", "darted", "shrine", "heel", "typical", "throws", "fortunately", "recognise", "fuel", "6th", "tranquil", "frown", "destination", "plunge", "moor", "pin", "mars", "associate", "here's", "owen", "10th", "arabic", "vicious", "framed", "banquet", "expressive", "instinctively", "lighting", "scanning", "subordinate", "jaws", "patent", "courtyard", "gulf", "destroying", "detailed", "regulating", "closet", "compel", "inland", "excepting", "pretext", "legislative", "stationed", "rash", "margin", "champion", "settling", "billion", "shorter", "betwixt", "admiring", "morgan", "nick", "chemical", "chapters", "worthless", "aristocratic", "nan", "especial", "hon", "attentive", "maintenance", "charlie", "explanatory", "differently", "furiously", "pulse", "scanty", "flee", "admiral", "clause", "resume", "compound", "pilot", "growled", "charmed", "imitate", "happening", "knot", "rags", "mock", "majestic", "messages", "prussian", "suspense", "clare", "relationship", "skirt", "agency", "arisen", "grin", "unusually", "michigan", "hoarse", "mills", "intently", "dining", "demonstration", "depression", "lain", "expectations", "joining", "weekly", "trenches", "technical", "vehicle", "aimed", "borrow", "flattering", "portugal", "prodigious", "scope", "vegetation", "switzerland", "arkansas", "swelling", "fortified", "favoured", "salute", "topic", "blushed", "superb", "strengthen", "confidential", "crow", "shawl", "sunrise", "sings", "coats", "sturdy", "dissolved", "lifetime", "dispersed", "sergeant", "contribute", "strode", "brigade", "verdict", "they've", "honors", "panting", "females", "richest", "attribute", "brighter", "hook", "discontent", "orderly", "airs", "tiger", "messengers", "penetrate", "sabbath", "identification", "holiness", "crooked", "housekeeper", "productions", "prescribed", "rector", "spark", "sleeve", "honored", "tame", "highway", "alabama", "edmund", "militia", "nobleman", "energies", "spacious", "tearing", "affliction", "photograph", "ally", "hampshire", "ascent", "ditch", "fishes", "jupiter", "rubbing", "tract", "standards", "afore", "ribbon", "cecilia", "oregon", "integrity", "plus", "transparent", "farms", "pulpit", "ropes", "nineteen", "rescued", "counting", "perfume", "socrates", "hounds", "solicited", "bother", "fascinating", "qualified", "desolation", "essay", "rains", "renew", "odious", "assuredly", "suggests", "rider", "loneliness", "pond", "activities", "dazzling", "leaping", "squadron", "bowing", "novelty", "wrist", "keeper", "homeward", "alexandria", "finely", "li", "efficiency", "marvel", "tranquillity", "agnes", "charities", "spenser", "condemn", "elephants", "elders", "julian", "tries", "2nd", "sweetly", "endurance", "bags", "reared", "jaw", "unique", "navigation", "inevitably", "admirably", "sect", "drum", "poles", "verge", "piercing", "sanction", "russians", "forlorn", "approbation", "organic", "stanley", "allegiance", "bin", "expressly", "ingenuity", "dispose", "stained", "theology", "withal", "duration", "fundraising", "adj.", "collecting", "weigh", "sweetest", "float", "consul", "monastery", "raging", "publish", "knocking", "precaution", "privately", "aaron", "endeavored", "insight", "definitely", "stature", "troy", "miriam", "judah", "oblige", "urging", "shift", "mould", "courses", "countless", "associates", "hymn", "rapture", "tonight", "trumpet", "parker", "entrusted", "firmness", "comic", "breeding", "ken", "questioning", "factor", "monuments", "loveliness", "handled", "communities", "saloon", "stumbled", "witch", "confronted", "traveling", "seamen", "backed", "profoundly", "gladness", "pomp", "mess", "practise", "sanctuary", "superstitious", "casual", "iowa", "analyzed", "historic", "bored", "shrink", "judging", "treating", "expenditure", "encouraging", "diplomatic", "forcing", "studio", "exposure", "crude", "compilation", "vermont", "eve", "ascend", "unbroken", "apollo", "countess", "binding", "exceed", "frail", "hans", "champagne", "shuddered", "carter", "mule", "inserted", "parson", "rascal", "inspire", "banner", "divorce", "treacherous", "nineteenth", "invalid", "weaker", "organizations", "bolt", "ticket", "backwards", "captivity", "lame", "provoked", "vein", "lists", "gallop", "communications", "dagger", "passive", "shoe", "thrice", "corrected", "mystic", "infancy", "foam", "keith", "tavern", "fraud", "7th", "cradle", "rifles", "vigorously", "censure", "gentleness", "jr", "sobbing", "monotonous", "explosion", "catastrophe", "respectfully", "wearied", "cats", "blamed", "needful", "fireplace", "gravel", "affords", "discovering", "jar", "selfishness", "tolerably", "clerks", "ark", "moist", "wid", "sauce", "prompted", "exceptions", "bullets", "writ", "bruce", "insolent", "moisture", "thompson", "furnace", "healing", "fewer", "deem", "apron", "humiliation", "punctuation", "rolls", "doe", "rotten", "richer", "swiss", "behavior", "nowadays", "pamphlet", "loan", "beads", "divers", "unreasonable", "realise", "lust", "ah", "annually", "detach", "gaily", "shares", "gifted", "planet", "feverish", "resurrection", "saul", "consecrated", "enforced", "vincent", "shelf", "fan", "fluid", "brightly", "damsel", "gabriel", "kid", "frantic", "neatly", "anon", "ascribed", "insane", "tropical", "8th", "milan", "hardened", "overthrow", "phase", "achievement", "immortality", "obscurity", "assumption", "discern", "hopeful", "humorous", "composure", "turf", "poland", "dame", "missionaries", "orator", "perpetually", "arbitrary", "ecstasy", "retirement", "pronounce", "authorized", "familiarity", "nl", "hastings", "clubs", "reconciled", "grievous", "mercury", "elegance", "chivalry", "luminous", "beseech", "benevolent", "confided", "dances", "perplexity", "escaping", "terrific", "companionship", "commence", "daisy", "parliament", "9th", "creep", "pleading", "disdain", "pm", "sympathies", "guides", "emergency", "parcel", "suicide", "replies", "drawer", "contribution", "supposition", "vii", "weren't", "link", "homely", "pluck", "ruling", "patrick", "statesmen", "hannah", "printing", "joshua", "synonymous", "sinister", "advocate", "destructive", "environment", "blossom", "bridle", "yon", "waistcoat", "extends", "confirm", "listing", "solemnity", "projects", "reporter", "deprive", "detachment", "infernal", "traversed", "moss", "skilled", "announce", "hateful", "fugitive", "gothic", "coolness", "insurrection", "cum", "med", "coachman", "expend", "stepping", "julius", "resign", "despatch", "excluded", "reject", "tough", "plea", "roy", "fragment", "lacked", "wordsworth", "balcony", "darker", "mac", "nevada", "christopher", "fork", "flatter", "iniquity", "meditation", "disastrous", "stain", "patches", "hints", "ordained", "drinks", "whipped", "burial", "matt", "employee", "employer", "hypothesis", "steed", "width", "sweden", "transaction", "victories", "devout", "outrage", "vary", "attorney", "rouse", "doubled", "sidney", "schooner", "flaming", "offend", "sheriff", "encamped", "magnificence", "vent", "politely", "vines", "flags", "italians", "necessities", "austin", "nobler", "accusation", "impulses", "packet", "shabby", "irritated", "dakota", "industrious", "classic", "ranch", "ascending", "cruelly", "happiest", "antonio", "accuse", "insulted", "bridges", "players", "sixteenth", "solicitation", "embarked", "idol", "odds", "aims", "illuminated", "enchanted", "adversary", "pie", "reflecting", "pension", "luxurious", "pigs", "choir", "tumbled", "conqueror", "irritation", "verb", "monkey", "acceptable", "dynasty", "accurately", "divinity", "signature", "heretofore", "hazard", "dora", "sq.", "stead", "attire", "fling", "marine", "occupations", "soothing", "devised", "singer", "spaces", "emerson", "disguised", "antique", "orthodox", "poisoned", "dove", "gratification", "sydney", "electricity", "alien", "sorely", "cracked", "supremacy", "summon", "depressed", "sexes", "offerings", "pledged", "irony", "recourse", "tortured", "thickly", "correspondent", "sounding", "64", "sombre", "brushed", "reasonably", "12th", "duel", "reluctantly", "implies", "cable", "ridden", "acre", "grieve", "inquiring", "colonists", "addison", "republican", "illustrate", "tim", "liverpool", "gilded", "clumsy", "satin", "displeased", "odor", "clearer", "prairie", "hudson", "feudal", "flint", "easter", "freshness", "nursery", "explanations", "adoption", "reluctance", "crosses", "blushing", "imported", "notorious", "equipped", "sinful", "starving", "eugene", "bedside", "sovereigns", "abrupt", "excused", "injure", "incessant", "correctly", "drooping", "adored", "embroidered", "pasture", "pillar", "import", "founder", "torch", "vault", "worm", "ay", "bravery", "confinement", "trusting", "butler", "rattle", "transported", "estimation", "edit", "gotten", "cuts", "headlong", "outfit", "insolence", "secrecy", "thereupon", "unlucky", "eighth", "valour", "grammar", "relaxed", "mentions", "adjacent", "knives", "attacking", "exceptional", "recollections", "deposit", "establishing", "muddy", "arches", "aspects", "senior", "fragrance", "colonial", "penetrating", "refinement", "te", "yacht", "intelligible", "stray", "forcibly", "jenny", "superficial", "tends", "identified", "wan", "choosing", "frighten", "grotesque", "reprinted", "tutor", "contributing", "welsh", "gaiety", "besieged", "robbery", "transmitted", "swam", "consequential", "slid", "stony", "donald", "gratify", "heavier", "confidently", "mabel", "demon", "treatise", "mechanically", "batteries", "trading", "cock", "pilgrimage", "extinct", "idleness", "sicily", "merrily", "excursion", "handling", "utah", "eminence", "lump", "boyhood", "montana", "superfluous", "wee", "dome", "shivering", "accidental", "thickness", "darwin", "continuance", "fixing", "harris", "rustic", "cheered", "vernon", "premises", "delivery", "nodding", "snowy", "curved", "productive", "discouraged", "variations", "shilling", "swollen", "miraculous", "stubborn", "belgium", "drives", "jerome", "orchard", "persuasion", "invaded", "alps", "ungrateful", "insensible", "muscle", "madrid", "flanders", "cultivate", "involuntarily", "speedy", "variation", "marian", "harp", "peaks", "daybreak", "magnitude", "precautions", "rub", "requiring", "coral", "grapes", "fairest", "locality", "opponent", "bondage", "beans", "cowardly", "grandson", "leo", "gertrude", "nail", "protecting", "hospitable", "proving", "benevolence", "brussels", "civilisation", "mounting", "desiring", "rushes", "precision", "watchful", "harness", "perchance", "forbade", "channels", "indication", "zealous", "tact", "seventeenth", "theodore", "stating", "toast", "dreadfully", "judith", "asterisk", "virgil", "edifice", "swelled", "accomplishment", "sundry", "reckoning", "mouse", "prostrate", "helm", "slim", "whistling", "syllable", "handwriting", "commissioners", "lime", "spur", "unfit", "gen.", "relish", "reduction", "sown", "venetian", "cordially", "hush", "breasts", "slipping", "pat", "arabian", "dialogue", "forwards", "entreat", "fascination", "belly", "neutral", "grasping", "diligence", "disgusted", "retiring", "strokes", "sob", "vine", "compose", "valentine", "harvey", "icy", "inconvenience", "v", "pots", "dimensions", "abused", "armor", "detect", "contradiction", "banker", "infamous", "powerless", "passenger", "crust", "historians", "disclaim", "norway", "peculiarities", "sting", "simultaneously", "watches", "cong.", "episode", "achieve", "populace", "sherman", "incense", "rebecca", "jordan", "persistent", "wisconsin", "ho", "ta", "fruitful", "scoundrel", "coasts", "starve", "denmark", "scots", "consultation", "habitation", "goat", "howling", "tailor", "flourish", "trifles", "dashing", "disappearance", "sour", "practicable", "shameful", "inviting", "criminals", "leisurely", "accumulated", "audible", "topics", "expends", "radiance", "underline", "parade", "spoils", "helmet", "consternation", "expenditures", "impose", "originator", "pa", "unequal", "wooded", "enduring", "ox", "valet", "proclaim", "carl", "impossibility", "lydia", "territories", "deference", "ravine", "geoffrey", "blanche", "accommodation", "boyish", "spray", "theological", "anonymous", "injurious", "formally", "sports", "ab", "scales", "wyoming", "discontinue", "calf", "manual", "disturbing", "potent", "anticipation", "melt", "tilde", "thames", "grade", "mischievous", "pang", "pathos", "alternately", "brisk", "stool", "justification", "foreigner", "endeavouring", "satire", "al", "delete", "masculine", "spies", "umbrella", "transportation", "yell", "remnant", "boot", "ignored", "thrilling", "ale", "mineral", "goose", "nebraska", "truce", "lastly", "airy", "sketches", "groves", "col.", "11th", "comprehension", "cling", "duck", "abyss", "alaska", "baffled", "planning", "abominable", "aversion", "drawings", "customers", "weird", "stewart", "traveled", "alan", "incessantly", "flattery", "director", "improbable", "moderation", "awakening", "males", "pairs", "temporal", "con", "nicely", "lapse", "vitality", "soap", "patriot", "malicious", "eyed", "pirates", "enforce", "doll", "briskly", "sez", "skeleton", "comprehensive", "buttons", "crushing", "personages", "threaten", "nuts", "undone", "wright", "frankness", "hides", "progressive", "rogers", "villa", "aristotle", "resource", "irs", "confine", "sewing", "co", "congratulate", "walt", "reconcile", "insurance", "terminated", "dusky", "appoint", "pearl", "thrilled", "gains", "interrupt", "extravagance", "jokes", "suppress", "quod", "signify", "layer", "clue", "kettle", "contemplate", "aforesaid", "tooth", "sensibility", "boldness", "mature", "cuba", "tolerable", "rabbit", "befallen", "needless", "yankee", "awaken", "clasp", "lets", "blinded", "conductor", "dependence", "guarantee", "affectionately", "player", "wires", "thicket", "walker", "outstretched", "procedure", "wheeled", "aye", "oneself", "recommendation", "projecting", "shriek", "futile", "cheerfulness", "deity", "fifteenth", "gap", "muscular", "dripping", "insect", "values", "brooding", "restaurant", "baptism", "imaginative", "rhyme", "exhaustion", "intrigue", "senseless", "hercules", "yearly", "baron", "occupying", "imply", "absurdity", "launched", "resolutely", "vowed", "attach", "characterized", "fellowship", "posture", "caps", "leon", "demanding", "owl", "beset", "ensuring", "suite", "tennyson", "thereto", "heaped", "jewel", "regained", "voluntarily", "longitude", "permanently", "jumping", "babe", "secondly", "violin", "rogue", "rainy", "reconciliation", "emotional", "radical", "accursed", "tendencies", "concrete", "resident", "lustre", "hull", "ominous", "overboard", "uproar", "cavern", "combine", "respectively", "menace", "pilgrims", "jeff", "peak", "currency", "silken", "violet", "khan", "mastery", "objective", "plucked", "litter", "memorial", "bids", "fondly", "clapped", "tariff", "beneficial", "unsolicited", "reluctant", "separately", "patronage", "revenues", "dragon", "zeus", "mike", "ranges", "vexation", "indicates", "overheard", "tray", "raymond", "thereafter", "exporting", "mound", "taxation", "frenzy", "horizontal", "thirsty", "disputed", "charter", "redistribution", "boasted", "item", "moscow", "termination", "eminently", "suggestive", "linger", "shady", "calculation", "expansion", "mast", "confer", "sophia", "commanders", "pitied", "twist", "traditional", "involve", "interfered", "achilles", "wanton", "repay", "brother-in-law", "routine", "son-in-law", "gaul", "groom", "solve", "grassy", "tempt", "unsuccessful", "witty", "politician", "yearning", "lid", "noticing", "courtiers", "cheering", "bounty", "consequent", "renown", "regulation", "fowl", "mayor", "wrinkled", "defy", "threads", "violation", "junction", "boss", "particles", "glories", "signifies", "constrained", "paternal", "piles", "hardware", "engaging", "e.g.", "peer", "counties", "mocking", "ch.", "avoiding", "rebuke", "abolished", "cheers", "idiot", "3rd", "morbid", "wrung", "e-mail", "outcome", "gilt", "coldness", "applying", "strand", "renowned", "fishermen", "creative", "circus", "moustache", "proverb", "lowering", "biggest", "sly", "nursing", "boon", "weighing", "oklahoma", "brink", "degraded", "avenge", "hum", "minority", "spaniard", "ridges", "perils", "larry", "merchandise", "aloof", "despairing", "acquisition", "asylum", "chickens", "placid", "affirm", "trod", "gardener", "schedule", "calmness", "protector", "concealment", "trench", "fore", "accession", "h", "dey", "connexion", "cairo", "mend", "considers", "twenty-one", "municipal", "achievements", "cherish", "deserving", "exert", "riot", "veteran", "advancement", "inventor", "meek", "cameron", "hopelessly", "judicious", "tending", "testify", "governess", "orchestra", "garb", "condemnation", "foregoing", "bacon", "maternal", "wasting", "australian", "strata", "hushed", "maryland", "sculpture", "miniature", "corrections", "tangled", "completion", "regulated", "athenian", "flavor", "brand", "intimately", "unlimited", "dipped", "luggage", "inconsistent", "forsaken", "feebly", "woven", "lloyd", "rubbish", "tool", "spirited", "christendom", "chaos", "twinkling", "muffled", "accents", "accidentally", "degradation", "emancipation", "prosecution", "cleveland", "outbreak", "defending", "dwarf", "abundantly", "turner", "disadvantage", "abolition", "disregard", "deliberation", "filthy", "ak", "notifies", "dealings", "demonstrated", "paced", "tense", "drums", "interpreter", "vanish", "astray", "hen", "workman", "asunder", "baked", "baltimore", "bustle", "winged", "mentioning", "pastoral", "fabric", "trim", "musician", "twenty-two", "patty", "mentally", "wrecked", "discreet", "godfrey", "apostle", "ledge", "roast", "accessed", "preface", "convincing", "quiver", "stocks", "mourn", "commented", "redistribute", "precipice", "outdated", "juliet", "dialect", "elementary", "freight", "cowardice", "wipe", "deserts", "shelves", "denial", "1b", "traits", "denounced", "eric", "underground", "phantom", "whirling", "pecuniary", "dire", "hostilities", "gait", "it'll", "vividly", "instruct", "dickens", "puritan", "clutched", "acknowledgment", "conjunction", "oppressive", "intermediate", "formula", "hungary", "sneer", "ore", "plentiful", "plump", "combinations", "purest", "cheat", "doubly", "inadequate", "leslie", "blest", "forbear", "haunt", "treaties", "fearless", "constable", "enveloped", "enmity", "watson", "bridegroom", "curate", "developing", "frock", "mining", "audacity", "improper", "motto", "parisian", "faction", "architect", "melting", "delicately", "register", "heroine", "indefinite", "console", "defensive", "perceptible", "fruitless", "ransom", "surplus", "solicitude", "effectual", "shiver", "gal", "wed", "contemptuous", "plough", "snakes", "felicity", "reef", "outset", "constitutes", "lament", "tissue", "draft", "impelled", "epic", "fisherman", "hawaii", "obstinacy", "ulysses", "lemon", "voltaire", "hound", "measuring", "conscientious", "robber", "toy", "impart", "statute", "barry", "girdle", "basil", "rebellious", "stair", "biting", "consulting", "perseverance", "manila", "massacre", "cough", "blazed", "claude", "transition", "button", "headache", "tenant", "burns", "harmonious", "dreamy", "burgundy", "collections", "unkind", "inscribed", "cushions", "programme", "din", "laborious", "manufacturing", "markets", "zone", "humane", "ac", "fertility", "languid", "ninth", "curses", "introducing", "alcohol", "impending", "declining", "advantageous", "heal", "millennium", "karl", "ft.", "staid", "planting", "theatrical", "spectator", "winchester", "greedy", "commonwealth", "suffrage", "tremulous", "commodities", "stuffed", "admitting", "aching", "ninety", "discomfort", "imperative", "montreal", "bobby", "bachelor", "geographical", "longest", "courageous", "carpenter", "sundays", "concluding", "danish", "steer", "influential", "surround", "random", "ounce", "afresh", "dictated", "ruddy", "rusty", "drown", "irving", "slide", "sow", "appalling", "profess", "sickly", "rides", "spoon", "imminent", "dominant", "leadership", "pinch", "wearily", "ducks", "diary", "duchess", "regain", "rum", "churchyard", "fondness", "apprehend", "ordinarily", "quicker", "thereon", "ni", "balloon", "individuality", "securely", "connecting", "celebrate", "bluff", "dawned", "amiss", "chalk", "sticking", "fuss", "dazed", "deputy", "forsake", "automobile", "discussions", "harrison", "refreshment", "amendment", "appealing", "eden", "vertical", "insufficient", "manchester", "hem", "gorge", "baptized", "damn", "silvery", "pastor", "inherent", "preventing", "inference", "advertisement", "mutton", "packing", "enclosure", "theft", "publisher", "spontaneous", "otto", "rats", "apparition", "refreshing", "irene", "sweetheart", "renounce", "lifeless", "adore", "vinegar", "normandy", "uncovered", "utility", "orphan", "symbols", "gracefully", "mightily", "peculiarity", "ash", "floods", "partake", "contemptible", "deities", "profane", "foreseen", "ti", "conceit", "commend", "twelfth", "bristol", "manifestation", "revive", "prone", "connect", "princely", "overtake", "improving", "downwards", "ferocious", "intervention", "subsistence", "susceptible", "tunnel", "disciple", "revival", "twins", "ivy", "puzzle", "citadel", "temporarily", "despotism", "internet", "mechanism", "stoop", "directors", "mathematics", "raft", "fade", "soothe", "pork", "substituted", "physically", "brilliancy", "dot", "loaf", "expanse", "shocking", "rudely", "isle", "balanced", "extracted", "fable", "matches", "index", "gerard", "cigars", "liver", "transmit", "dispatch", "onto", "veranda", "dip", "inexplicable", "liar", "diminish", "dungeon", "unit", "pagan", "phillips", "brig", "monopoly", "rim", "sordid", "complaining", "temperate", "chat", "gambling", "maps", "amber", "trot", "howl", "shipping", "ton", "magazines", "bricks", "submarine", "roberts", "cumberland", "cecil", "semblance", "palestine", "perpendicular", "regardless", "fervent", "sane", "wreath", "animation", "earthquake", "sloping", "smoothly", "tension", "intrigues", "fearfully", "macaulay", "laboratory", "cork", "comments", "whale", "wedded", "whiteness", "convicted", "deception", "paved", "scruple", "paintings", "therewith", "religions", "governing", "colleagues", "shrinking", "tickets", "prophetic", "undergo", "hare", "haze", "poisonous", "omit", "beware", "sagacity", "concession", "worker", "ted", "incline", "caste", "leapt", "dissatisfied", "hardest", "self-control", "toilet", "buddha", "offense", "woodland", "gentry", "starvation", "grudge", "penance", "tips", "rooted", "outburst", "fortitude", "turk", "devour", "malignant", "accorded", "brandon", "anticipate", "speechless", "inquisition", "eccentric", "anecdote", "annals", "scrutiny", "burroughs", "rhythm", "discord", "marius", "diversion", "archie", "rat", "knit", "correspond", "detain", "dis", "esp", "interpret", "vehement", "soda", "naughty", "salon", "operate", "idly", "imperious", "peru", "candid", "whig", "blooming", "wharf", "disgraceful", "stunned", "redemption", "drain", "wage", "cooper", "embassy", "unfinished", "nasty", "impetuous", "cemetery", "oblivion", "prohibited", "breeches", "abound", "christine", "frivolous", "hugo", "essays", "plaster", "tap", "chairman", "dismiss", "katherine", "provoke", "reside", "deficient", "decoration", "heroism", "toe", "wade", "apparel", "hazel", "inability", "farthest", "invent", "knave", "twain", "carelessness", "affectation", "connections", "climax", "avowed", "industries", "brood", "tempting", "define", "antwerp", "forefathers", "stretches", "gratifying", "plight", "restricted", "cupboard", "ludicrous", "alms", "colossal", "stupidity", "monotony", "stimulus", "vigilance", "digest", "vale", "overcoat", "colorado", "wink", "nous", "rack", "incomprehensible", "antagonist", "methinks", "barley", "plateau", "superintendent", "indescribable", "expanded", "presentation", "archbishop", "devise", "rubber", "adieu", "exclude", "carts", "lone", "whisky", "abuses", "inflict", "nightfall", "counts", "chocolate", "privileged", "hermit", "exultation", "overtook", "coincidence", "scratch", "screw", "caravan", "divert", "eliza", "comparing", "hood", "explore", "glove", "chaste", "whirl", "adventurous", "skipper", "tiresome", "implements", "recompense", "plank", "insure", "laboured", "exaggeration", "mi", "shepherds", "lilies", "ballad", "befall", "cylinder", "teddy", "summary", "daresay", "photographs", "colleges", "dissolution", "geneva", "marches", "instituted", "seals", "vehemence", "chaplain", "knots", "wail", "kneel", "unlikely", "deceit", "challenged", "geography", "herald", "lowly", "peep", "swarm", "clarke", "joyfully", "engraved", "ll", "bowels", "purposely", "blindness", "systematic", "virtually", "conformity", "remedies", "maxim", "indexes", "marshall", "baking", "invincible", "impertinent", "bust", "visage", "intuition", "mingle", "bathing", "arched", "investment", "tabernacle", "86", "client", "ghostly", "furs", "catalogue", "dock", "tenor", "arouse", "verbal", "excessively", "brazil", "strenuous", "irishman", "recess", "unclean", "psalms", "analogy", "chemistry", "peninsula", "infer", "maritime", "secular", "hawk", "rein", "averted", "bake", "constantine", "oracle", "alley", "softness", "pierce", "spinning", "snatch", "manufactured", "launch", "psychology", "worms", "regulate", "farming", "fasten", "actress", "etiquette", "theater", "thanksgiving", "valor", "untouched", "tactics", "drug", "adverse", "gaunt", "conducting", "veritable", "overtaken", "distorted", "rosa", "nina", "quart", "caprice", "candy", "obliging", "planets", "soothed", "sic", "opium", "pavilion", "strait", "sanguine", "cords", "odour", "trout", "paste", "regularity", "metallic", "scrap", "convict", "instructive", "investigate", "celtic", "package", "pirate", "fiend", "moan", "revealing", "trades", "rounds", "accomplishments", "crawl", "aft", "prevalent", "role", "dose", "evans", "hypocrisy", "l", "salmon", "snap", "alma", "magical", "tire", "hetty", "impenetrable", "geese", "madly", "manifold", "noticeable", "pudding", "volcanic", "locke", "magnetic", "deals", "core", "decency", "observance", "durst", "scratched", "predecessor", "diplomacy", "wert", "impartial", "disinterested", "wig", "pump", "swedish", "norfolk", "reigns", "similarly", "reap", "dam", "facilities", "slippery", "transformation", "oxygen", "suburbs", "dares", "ornamental", "pondered", "fringe", "raiment", "henrietta", "wellington", "foreman", "feat", "thirteenth", "sultan", "certificate", "rue", "heresy", "arabia", "medal", "location", "ether", "ruby", "heading", "subdue", "adorn", "ancestor", "warmer", "cluster", "quotation", "fullest", "exposition", "custody", "thermometer", "plausible", "toss", "desperation", "rhetoric", "scornful", "bailey", "rung", "civility", "dingy", "scaffold", "concentration", "avarice", "scrape", "pools", "oar", "flutter", "martyr", "handy", "montague", "bait", "login", "commotion", "congenial", "drawers", "telescope", "deposits", "edwards", "craving", "bureau", "oscar", "speculative", "huddled", "diverse", "slice", "renaissance", "angelo", "meg", "murderous", "serenity", "perspiration", "coventry", "impudent", "ardor", "necklace", "alight", "stimulated", "clifford", "steadfast", "genoa", "anglo-saxon", "courier", "inflamed", "xi", "drill", "spelling", "respond", "seriousness", "fourteenth", "womb", "literal", "singers", "usefulness", "cloudy", "mortality", "profusion", "fleeting", "twentieth", "maturity", "surf", "weed", "phases", "overcame", "womanhood", "envious", "tapped", "latent", "whiskey", "relatively", "forbidding", "cleopatra", "willow", "mathematical", "sojourn", "booty", "camel", "implore", "amateur", "morally", "qualifications", "gasp", "101", "gliding", "tested", "racing", "brightest", "joel", "extremes", "damascus", "labored", "peggy", "exit", "originality", "humming", "isolation", "sometime", "glee", "adult", "solace", "biography", "ff.", "hardship", "lied", "donkey", "trader", "rumour", "amply", "confide", "favors", "perspective", "belgian", "withstand", "robust", "pro", "val", "eats", "snare", "monthly", "wines", "ignore", "envoy", "flown", "reverie", "jehovah", "contrive", "chatter", "judas", "nourishment", "reforms", "clatter", "adrian", "allude", "corrupted", "thorn", "junior", "tony", "calcutta", "re", "holt", "psychological", "constancy", "misunderstood", "signals", "drying", "harshly", "distressing", "novelist", "cyril", "editors", "intricate", "limestone", "forty-five", "collision", "pebbles", "willie", "knitting", "ordeal", "foresee", "peas", "repast", "supplying", "clan", "abject", "dart", "berth", "bridal", "indirect", "unnoticed", "tint", "insults", "precedent", "twisting", "bully", "vacation", "'ll", "canon", "aisle", "click", "inspiring", "oval", "impracticable", "delirium", "cedar", "contradict", "ingratitude", "soften", "bewilderment", "servitude", "comely", "stump", "redeem", "spun", "elastic", "poultry", "horseman", "dictionary", "prettiest", "adoration", "icel.", "wager", "involving", "pathway", "essex", "wistful", "advent", "gear", "celebration", "conceivable", "drowning", "faintest", "acquiring", "befell", "good-looking", "wares", "rendezvous", "snug", "watery", "accompaniment", "chaps", "crawling", "lumber", "publishing", "customer", "mediaeval", "prints", "lavish", "md", "genesis", "rug", "analogous", "eleventh", "noah", "galley", "partition", "blunder", "glasgow", "fanciful", "ham", "rainbow", "sentinel", "hereby", "outlook", "smitten", "unmarried", "mice", "installed", "vivacity", "marking", "aesthetic", "consume", "resent", "pose", "contentment", "sterling", "veneration", "p.m.", "barking", "bower", "organism", "unintelligible", "emphatic", "occurring", "factors", "guise", "editorial", "impudence", "midday", "corporal", "sg", "aright", "nigger", "lily", "noun", "scout", "spit", "cursing", "friedrich", "manifestly", "marco", "battalion", "heritage", "brotherhood", "nun", "wad", "folding", "discerned", "powerfully", "mitchell", "helpful", "persist", "ellis", "frigate", "spotted", "atoms", "curves", "outlet", "erroneous", "violated", "withheld", "fairies", "inherit", "sledge", "taller", "supervision", "butt", "handsomely", "tank", "velocity", "arctic", "colleague", "pins", "butcher", "drowsy", "butterfly", "chart", "twin", "sunken", "exasperated", "narrowly", "collins", "insulting", "deficiency", "operating", "overthrown", "gallows", "diligent", "hindu", "blunt", "omen", "bleak", "vehemently", "wretchedness", "e'er", "ensure", "denotes", "sentenced", "unfair", "encampment", "possessor", "absorbing", "descendant", "sub", "drugs", "engineers", "independently", "bucket", "clerical", "ache", "glitter", "ordinance", "bamboo", "amsterdam", "vocation", "admirer", "limp", "pallid", "mildly", "organisation", "timothy", "dealer", "yorkshire", "auspicious", "deuce", "emblem", "gibson", "primarily", "reducing", "ritual", "decorations", "thigh", "groaning", "scant", "fiscal", "mien", "charging", "cor", "railing", "peers", "inferred", "sanctity", "accumulation", "cynical", "inspector", "wardrobe", "jesuit", "texture", "adjustment", "epistle", "adventurer", "priesthood", "seaman", "turbulent", "chant", "marsh", "palmer", "unaware", "vase", "ty", "initial", "baths", "weighty", "minimum", "correction", "morsel", "overlook", "meagre", "unanimous", "magician", "mystical", "twenty-three", "inhabit", "shaggy", "unaccountable", "nightmare", "carbon", "coil", "lawless", "stairway", "willingness", "sarcasm", "crisp", "jerk", "tout", "vocabulary", "stroll", "poorly", "composing", "parliamentary", "controlling", "fitness", "thoughtless", "soames", "temperance", "illumination", "translations", "martyrdom", "mellow", "nationality", "jam", "austere", "shoots", "casually", "pensive", "flavour", "nets", "dice", "satisfactorily", "shrunk", "administer", "ante", "swine", "baptist", "listener", "unimportant", "genera", "contrivance", "deplorable", "museum", "benefactor", "tints", "alphabet", "rout", "scatter", "boer", "ftp", "steve", "extant", "bohemia", "misunderstanding", "universities", "dexterity", "rag", "inseparable", "punch", "brazen", "economical", "pernicious", "craig", "mythology", "drained", "bolted", "abel", "stride", "circumference", "meddle", "axis", "gum", "las", "kinder", "closes", "ferocity", "giddy", "secluded", "resisting", "satisfying", "reliable", "disgusting", "thirty-six", "ethical", "raleigh", "crouching", "lash", "recital", "buddhist", "collapse", "unsatisfactory", "lore", "varies", "mainland", "scot", "repute", "cushion", "confound", "scrub", "myth", "flights", "oats", "layers", "ownership", "cape", "glimmer", "scare", "waked", "bengal", "scrupulous", "equals", "redress", "brake", "nut", "stability", "crafty", "kirk", "bough", "momentous", "albeit", "enlarge", "hardness", "civilised", "dotted", "defiant", "timidity", "solar", "heartless", "thomson", "mat", "shun", "raid", "disclose", "suppression", "puff", "juncture", "beak", "unjustly", "foresaw", "rot", "aggressive", "predicted", "quaker", "grate", "lease", "ponderous", "maketh", "repaid", "charcoal", "chilly", "arrogance", "friction", "participation", "pier", "stale", "intoxicated", "commissioned", "ratio", "121", "comb", "masterpiece", "wholesale", "embraces", "trodden", "ephraim", "shaw", "translate", "mortar", "recreation", "rite", "truthful", "cavalier", "caress", "si", "curling", "rivalry", "whim", "abreast", "thebes", "faust", "peg", "wilhelm", "pestilence", "ceremonial", "receiver", "sample", "distinctive", "consummate", "matron", "claiming", "plural", "initiative", "inexhaustible", "a.m.", "spider", "reed", "streak", "blocked", "titus", "smashed", "populous", "baronet", "commodore", "jelly", "advocates", "dinah", "salutation", "mutiny", "chronicles", "comforting", "serviceable", "parchment", "playful", "potato", "transient", "administrative", "anarchy", "barber", "revision", "operated", "farce", "germ", "profile", "provides", "noting", "disordered", "menacing", "heightened", "finance", "averse", "azure", "bathe", "campaigns", "lessen", "slate", "acquaint", "gin", "humiliating", "cleft", "conveyance", "chivalrous", "capricious", "tribune", "pilgrim", "entreaty", "womanly", "paltry", "sporting", "maker", "digestion", "bart", "infamy", "lambs", "gaping", "periodical", "standpoint", "amorous", "tub", "luxuriant", "basic", "mutually", "chris", "greed", "premature", "extinction", "boiler", "intimation", "scandalous", "separating", "oratory", "banish", "electrical", "herb", "multiply", "prosper", "friar", "nightly", "ole", "monkeys", "interminable", "enjoys", "similarity", "riddle", "cleaning", "subscription", "copious", "exclaim", "forged", "voting", "scourge", "darkly", "privacy", "arena", "bearded", "vera", "alacrity", "sensual", "spin", "neutrality", "flannel", "fasting", "trailer", "avert", "trustworthy", "jamaica", "unchanged", "traveler", "unfamiliar", "puffed", "mirrors", "phoebe", "father-in-law", "conform", "particle", "railways", "stupendous", "paddle", "innate", "reformation", "volley", "statistics", "agrees", "simpler", "padre", "congratulations", "lids", "muse", "inhabitant", "ishmael", "rustle", "clump", "calendar", "flute", "inaccessible", "yore", "jay", "repulsive", "fray", "po", "nomination", "conclusive", "peaceable", "beth", "inconceivable", "e'en", "emerald", "lava", "trillion", "uppermost", "arduous", "lyric", "downright", "reproduction", "foresight", "consistency", "ape", "senators", "pallor", "span", "salad", "snuff", "drooped", "greetings", "chestnut", "inquisitive", "vicar", "noel", "attic", "savings", "affirmative", "ills", "applications", "t", "dye", "gloucester", "nominal", "demonstrate", "dispense", "dissatisfaction", "merciless", "trusty", "coloring", "perusal", "plaintive", "discarded", "precarious", "infection", "ruinous", "bolts", "arithmetic", "considerate", "lark", "ethics", "conventions", "stumbling", "pitcher", "slips", "seine", "officially", "danube", "annoy", "glide", "impunity", "amends", "sol", "conveying", "abandonment", "mane", "tinge", "brim", "forenoon", "seventy-five", "sparkle", "syllables", "shrug", "enchantment", "franz", "trait", "bribe", "composer", "preparatory", "audacious", "outskirts", "soiled", "fiddle", "football", "isaiah", "partnership", "continuation", "pioneer", "vest", "bass", "derby", "quarry", "rigging", "dizzy", "abnormal", "omission", "idolatry", "sequence", "squeeze", "cabbage", "canopy", "athletic", "shirley", "drunkenness", "intrusion", "'cause", "assign", "9544/td>", "tackle", "dreamt", "sceptre", "exacting", "parched", "eddy", "percentage", "twinkle", "curb", "sandstone", "invaluable", "fathom", "preferable", "adelaide", "advertising", "scraps", "lever", "muster", "cavity", "barbarian", "sleepless", "fried", "abstraction", "forefinger", "spade", "erection", "scorned", "pail", "withdrawal", "senator", "mortgage", "ancestral", "succour", "ma", "forbearance", "repress", "spouse", "valid", "witchcraft", "workmanship", "legacy", "proximity", "bombay", "paula", "incorporated", "muzzle", "reuben", "clusters", "valve", "compelling", "dissipated", "flickering", "guinea", "sup", "tarry", "derision", "vehicles", "accommodate", "glossy", "iris", "relic", "ant", "heath", "bug", "vocal", "downfall", "construct", "undue", "vapor", "bat", "whimsical", "contradictory", "unlocked", "foretold", "automatic", "explicit", "indolent", "mates", "artful", "downcast", "well-being", "winston", "ordinances", "catharine", "effectively", "missions", "stalk", "indistinct", "pregnant", "reddish", "coveted", "fret", "peeping", "buck", "sumptuous", "indefinitely", "reliance", "panama", "cocked", "dad", "everyday", "intoxication", "aghast", "subterranean", "turmoil", "forfeit", "chasm", "inspect", "perverse", "precipitate", "dover", "ambush", "evermore", "mass.", "tr>", "blot", "nook", "verdure", "parapet", "jake", "cessation", "ankle", "classification", "fervently", "oddly", "haul", "saxony", "embarrassing", "hairy", "northwest", "disabled", "laurel", "preston", "arrogant", "hurts", "demonstrations", "splash", "curl", "livelihood", "wary", "scattering", "brace", "converts", "detestable", "143", "abandoning", "somerset", "weakly", "clothe", "gem", "tremor", "surveying", "variable", "anniversary", "thirty-two", "wrap", "curly", "diversity", "prestige", "desertion", "freezing", "heedless", "sentry", "believer", "ram", "rowing", "negligence", "self-", "sulphur", "discrimination", "cooling", "millionaire", "flowering", "meridian", "wins", "awed", "beastly", "nuisance", "abstain", "continental", "stanza", "target", "unwonted", "whit", "jason", "stall", "sham", "dictate", "empress", "gout", "jobs", "manure", "nigel", "sidewalk", "sate", "grievance", "axes", "bony", "invest", "birmingham", "ebb", "rabble", "restlessness", "cruise", "rally", "rumor", "hysterical", "girlish", "actively", "shortest", "marseilles", "cheque", "disregarded", "retort", "rocking", "emerge", "perch", "flask", "ka", "countryman", "lonesome", "manned", "unarmed", "wast", "frog", "twenty-eight", "unscrupulous", "yarn", "victuals", "outrageous", "appropriation", "foolishness", "quickness", "adversity", "parma", "diseased", "iliad", "salutary", "smelt", "territorial", "hurricane", "irons", "canyon", "jeremiah", "brooklyn", "indulging", "vapour", "disobedience", "atrocious", "leaps", "tapestry", "provocation", "twenty-six", "impotent", "smite", "acquitted", "os", "tumultuous", "barge", "palpable", "apprentice", "lances", "compartment", "godly", "sarcastic", "therefrom", "specifically", "uniformity", "emerging", "atonement", "whereabouts", "davy", "framework", "sponge", "mountainous", "annoying", "cot", "squirrel", "wand", "grind", "bang", "unreal", "blacksmith", "injunction", "scarcity", "withhold", "outright", "bavaria", "cement", "growl", "aggregate", "fraction", "exaltation", "inexorable", "jug", "purer", "sap", "illegal", "sister-in-law", "presses", "stealthily", "dissolve", "volcano", "hungarian", "equilibrium", "obstinately", "sullenly", "assassination", "commissions", "respectability", "bases", "maxwell", "resounded", "closest", "embroidery", "gunpowder", "reproof", "yale", "combining", "weaving", "earnings", "hamburg", "indoors", "manufacturers", "pitiless", "scarf", "picnic", "misled", "pompous", "brian", "respite", "exploit", "tracing", "geological", "passport", "confines", "dishonour", "executioner", "township", "vacancy", "acquiescence", "cornwall", "crumbling", "three-quarters", "exploration", "needy", "stationary", "disconcerted", "wanderer", "beaver", "lookout", "onion", "depicted", "boisterous", "couples", "speakers", "woollen", "lightness", "bitten", "aux", "toleration", "lucia", "scar", "bohemian", "vested", "affinity", "carlo", "sous", "penitent", "simpson", "abiding", "ca", "immoral", "dishonest", "yawning", "mustache", "supplement", "whirlwind", "clash", "terence", "lamentable", "bennett", "farthing", "speck", "biscuit", "appellation", "gdp", "reserves", "uncouth", "birch", "armchair", "judy", "greasy", "leaden", "dough", "lining", "cleverness", "ascetic", "clutch", "krishna", "embark", "quotations", "friendliness", "liberally", "trance", "untrue", "rejection", "grating", "hanover", "inexperienced", "mon", "wintry", "stalwart", "meats", "stamping", "variance", "apiece", "firmament", "absorption", "apprehensive", "terminate", "wilful", "conveniently", "cleanliness", "collective", "angela", "filth", "philippines", "timely", "herein", "ignoblea>", "canton", "lamentations", "moslem", "ware", "adjective", "glen", "invade", "livid", "buggy", "prolong", "weaken", "folio", "dismissal", "quay", "enchanting", "heave", "purified", "syrian", "significantly", "experimental", "film", "repressed", "cooperation", "sequel", "wench", "calves"];
// BEGIN NOTEBOOK

var x = document.getElementById("output");
var Raps = [];
var SavedRaps = "";
//we need to add rap objects to this array, this is an array of rap objects

//Rap Objects:
//Title: head
//Beat: Oh Boy
//Lyrics: I could go for some head at anytime but im keeping my bread


// New Rap Object
//Function NewRap(rap){
// Var Rap = new rap{
// Title: "",
// Beat:  "",
// Lyrics: "";
//}
//Raps.push(rap)
//}
// This take a rap object and adds it to the array once you press enter

//This array needs to be saved to local storage
updateRaps(); //dkjgkdhs
function saveRap(){//a,b,c){
  
var output = "";
  document.getElementById('output').innerHTML = "";
var rap = {
  title: document.getElementById('title').value, 
  beat: document.getElementById('beat').value, 
  lyrics: document.getElementById('lyrics').value
  //tags:"blue"};
}

Raps.push(rap); //Add Rap to array

console.log(Raps);
  
  for (var x in Raps) {
    console.log(Raps[x]);
    document.getElementById('output').innerHTML += ("<div class='well'><br>Title: " +Raps[x].title+"<br>Beat: "+Raps[x].beat+"<br>Lyrics: "+Raps[x].lyrics+"<br></div>");
}
//for each element in Raps
    //save into localStorage
  
   
  
  SavedRaps = JSON.stringify(Raps);
  localStorage.setItem(document.getElementById('title').value, JSON.stringify(JSON.parse(SavedRaps)[JSON.parse(SavedRaps).length-1]));
  console.log(localStorage.getItem(document.getElementById('title').value));
//experiment
  localStorage.setItem('saved', SavedRaps);
  console.log(localStorage.getItem('saved'));
//
  Clear();//zcxlkvhl
}
function Clear(){
  //console.log("Dawg food");
  document.getElementById('title').value = "";
  document.getElementById('beat').value = "";
  document.getElementById('lyrics').value = "";
}

SavedRaps = JSON.stringify(Raps);
var Saved = JSON.parse(SavedRaps); //JSON.parse(SavedRaps)[0].title
var i;

//this method needs adjustment, but this is the final job

for (i in JSON.parse(SavedRaps)) {
    console.log(JSON.parse(SavedRaps)[i]);
    document.getElementById('output').innerHTML += ("<div class='well'><br>Title: " +JSON.parse(SavedRaps)[i].title+"<br>Beat: "+ JSON.parse(SavedRaps)[i].beat +"<br>Lyrics: "+JSON.parse(SavedRaps)[i].lyrics+"<br></div>");
}

///THIS IS SUPER CLOSE TO DONE! LOVEEE!

//Basically, save the object to JSON
//Load the JSON into

//For each object in SavedRaps -- show it into the output -- We done!
//use localstorage
JSON.parse(SavedRaps)[JSON.parse(SavedRaps).length-1].title
JSON.parse(SavedRaps)[JSON.parse(SavedRaps).length-1].beat // this is the hack
JSON.parse(SavedRaps)[JSON.parse(SavedRaps).length-1].lyrics
//not sure how I'm going to do it but I gotta use Parse on Saved Raps
//Take the saved Raps --Save it to a storage called Saved Raps
//for each in there, add that to the output!!!
//
//Take a break and finish tmrw
//
//A lot you wont remember but you;re like 98/100
//now 99/100

function updateRaps() {
  SavedRaps= localStorage.getItem('saved');
  Raps= JSON.parse(localStorage.getItem('saved'));
   x.innerHTML = "";
  for (var y in JSON.parse(SavedRaps)){
  JSON.parse(SavedRaps)[y];
    x.innerHTML += "<br>Title: "+JSON.parse(SavedRaps)[y].title+"<br>Beat: "+JSON.parse(SavedRaps)[y].beat +"<br>Lyrics: " + JSON.parse(SavedRaps)[y].lyrics+"<br>"
    console.log(y);
  }
  //dsgfdskjh
}// experimentaldjk hdgdshghksgkjs sjghkjs dghkhds shgkjhasg
function ClearAll(){
  x.innerHTML = "";
  localStorage.setItem('saved', "");
  Raps =[];
  //OPEN A MODAL THAT SAYS "are you sure!? The right answer is probably no. Press no unless you're just that good at rapping"
}


// END BARS NOTEBOOK

function UpdateWords(){
  //basically this is going to take the current word and update the results of synonym, rhyme, and sounds like, along with begins with and ends with   
var res =  document.getElementById('result').innerHTML;
  other(res);
  startswith();
  endswith();
}
/*
var final_transcript = '';
var recognizing = false;
 
if ('webkitSpeechRecognition' in window) {
 
  var recognition = new webkitSpeechRecognition();
 
  recognition.continuous = true;
  recognition.interimResults = true;
 
  recognition.onstart = function() {
    recognizing = true;
  };
 
  recognition.onerror = function(event) {
    console.log(event.error);
  };
 
  recognition.onend = function() {
    recognizing = false;
  };
 
  recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    final_transcript = capitalize(final_transcript);
    final_span.innerHTML = linebreak(final_transcript);
    interim_span.innerHTML = linebreak(interim_transcript);
    
  };
}
 
var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}
 
function capitalize(s) {
  return s.replace(s.substr(0,1), function(m) { return m.toUpperCase(); });
}
 
function startDictation(event) {
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  recognition.lang = 'en-US';
  recognition.start();
  final_span.innerHTML = '';
  interim_span.innerHTML = '';
}
*/
function Glossary(){
  document.getElementById("glossary").style.display="block";
  document.getElementById("logo").style.display="none";
  document.getElementById("menu").style.display="none";
  document.getElementById("extra").style.display="none";
  document.getElementById("start").style.display="none";
  document.getElementById("Soundcloud").style.display = "none";
  document.getElementById("twitch").style.display="none";
  document.getElementById("Build").style.display = "none";
  document.getElementById("random1").style.display="none";
  document.getElementById("positive").style.display="none";
  document.getElementById("glossary").style.display="block";
  document.getElementById("advanced").style.display="none";
  document.getElementById("about").style.display = "none";
    document.getElementById("meditation").style.display="none";


}
function Meditation(){
  document.getElementById("meditation").style.display="block";
  document.getElementById("logo").style.display="none";
  document.getElementById("menu").style.display="none";
  document.getElementById("extra").style.display="none";
  document.getElementById("start").style.display="none";
  document.getElementById("Soundcloud").style.display = "none";
  document.getElementById("twitch").style.display="none";
  document.getElementById("Build").style.display = "none";
  document.getElementById("random1").style.display="none";
  document.getElementById("positive").style.display="none";
  document.getElementById("glossary").style.display="block";
  document.getElementById("advanced").style.display="none";
  document.getElementById("about").style.display = "none";
 
}