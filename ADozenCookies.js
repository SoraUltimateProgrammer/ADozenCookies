// HAL989's Achievement Package!
//Version 2.0.1
//Inspired by Darky's achievement package, however there is no repeats between the two mods.
//Compatible with Darky's achievement package and most other mods.
// thanks to Aktan for helping with the nice try Achievement!!
// 
//Enjoy!
// CHANGELOG 
// V2.0.1 - Ported to github - Added clearability & made nice try a bit more fair (now requires less than a cookie so 0.03 counts)
// V2.0 - Added a saving system, a reset system, some achievements and other stuff, come check it out, we are now at 50+ achievements
// V1.6 - Added Demigod Complex
// V1.5 - fuck the 200 time machine achievement
// V1.4 - Added functionality for my save system achievements may get removed when u refresh so save them! 
// Link is at https://pastebin.com/d3k8PyCQ, save after you get the neverclick or hardcore achievements (no longer needed)
// V1.3 - Changed some achievements to more traditional icons, added 8 new achievements, totalling 46 achievements
// V1.2 - Fixed various bugs which would prevent the mod from working, including one that would freeze your game.
// V1.1 - Added various descriptions to achievements, and added 1 currently broken achievement (will be added soon)
//
// V1.0 - Added original 38 achievements
//=================================
// ADDING ACHIEVEMENTS
//=================================
Game.customCrate=[
//new Game.Achievement('Let\'s Get Right Into The News!','Click the news <b>5</b> times. <q>and i\'m your host...</q>',[26,7]), (oops)
new Game.Achievement('Elder Loop','Pledge <b>40</b> times. <q>Upon closer inspection, this is more efficient than the convenant.</q>',[8,9]),
new Game.Achievement('Elder Recursion','Pledge <b>45</b> times. <q>writhe gnaw etc etc</q>',[8,9]),
new Game.Achievement('Elder Infinite','Pledge <b>50</b> times. <q>wow, two solid day\'s worth of pledges.</q>',[8,9]),
new Game.Achievement('Elder Hibernation','Pledge <b>10</b> times. <q>zzzzzz</q>',[8,9]),
new Game.Achievement('Elder Coma','Pledge <b>15</b> times.',[8,9]),
new Game.Achievement('Pledge of Allegiance','Pledge <b>20</b> times.',[8,9]),
new Game.Achievement('Is 5 percent really all that much?','Pledge <b>25</b> times. <q>I mean really, this has to have taken more cookies than just 5 percent.</q>',[8,9]),
new Game.Achievement('You better have sacrificial rolling pins by now','Pledge <b>30</b> times. <q>just buy the freaking convenant</q>',[8,9]),
new Game.Achievement('Elder Cycle','Pledge <b>35</b> times. <q>you know what how about i look up if it is better and get back to you</q>',[8,9]),
new Game.Achievement('Let\'s just call this Reindeer Clicker','Click <b250</b> reindeer.',[12,9]),
new Game.Achievement('Extinction','Click <b400</b> reindeer.',[12,9]),
new Game.Achievement('Milk N\' Cookies','Get to Milk Tier <b>II</b>',[1,8]),
new Game.Achievement('Half Full','Get to Milk Tier <b>IV</b>',[2,8]),
new Game.Achievement('Milked for Progress','Get to Milk Tier <b>VI</b>',[5,8]),
new Game.Achievement('All the Milky Way','Get to Milk Tier <b>VIII</b>',[9,7]),
new Game.Achievement('He needs some milk','Get to Milk Tier <b>X</b>',[7,8]),
new Game.Achievement('Still Thirsty','Get to Milk Tier <b>XII</b>',[7,7]),
new Game.Achievement('Lactose Tolerance','Get to Milk Tier <b>XIV</b>',[10,7]),
new Game.Achievement('Quenched','Get to Milk Tier <b>XVI</b>',[9,8]),
new Game.Achievement('Pop goes the wrinkler','Pop <b>250</b> wrinklers.',[19,8]),
new Game.Achievement('Wrinkled Away','Pop <b>300</b> wrinklers.',[19,8]),
new Game.Achievement('M O I S T','Pop <b>400</b> wrinklers. <q>nice</q>',[19,8]),
new Game.Achievement('Any shinies yet?','Pop <b>500</b> wrinklers. <q>hahaha good joke</q>',[19,8]),
new Game.Achievement('Tutorial','Spend <b>7</b> heavenly chips. <q>Good job on beating the tutorial!</q>',[20,7]),
new Game.Achievement('Charity','Spend <b>77</b> heavenly chips.',[20,7]),
new Game.Achievement('Blessed','Spend <b>777</b> heavenly chips. <q>You have more?</q>',[20,7]),
new Game.Achievement('Negative Debt','Spend <b>7,777</b> heavenly chips. <q>Isn\'t negative debt just money?<\q>',[20,7]),
new Game.Achievement('Payload','Spend <b>77,777</b> heavenly chips.',[20,7]),
new Game.Achievement('Big Spender','Spend <b>777,777</b> heavenly chips.',[20,7]),
new Game.Achievement('Rich in a non-traditional sense','Spend <b>7,777,777</b> heavenly chips. <q>really getting your cookie\'s worth, huh?<\q>',[20,7]),
new Game.Achievement('Profit Maximizer','Spend <b>77,777,777</b> heavenly chips.',[20,7]),
new Game.Achievement('True Heaven','Spend <b>777,777,777</b> heavenly chips. <q>In other news, heaven is running out of stock.<\q>',[20,7]),
new Game.Achievement('Ever changing seasons','Change the season <b>4</b> times. <q>time flies</q>',[16,6]),
new Game.Achievement('Weekly','Change the season <b>7</b> times.',[16,6]),
new Game.Achievement('Monthly','Change the season <b>12</b> times.',[16,6]),
new Game.Achievement('Global Warming','Change the season <b>16</b> times. <q>is it real?</q>',[16,6]),
new Game.Achievement('Daily','Change the season <b>31</b> times.',[16,6]),
new Game.Achievement('curse you time machine achievements','Change the season <b>40</b> times. <q>curse you and your stupid names</q>',[16,6]),
new Game.Achievement('Hourly','Change the season <b>24</b> times.',[16,6]),
new Game.Achievement('Come Again!','Ascend <b>150</b> times.',[25,7]),
new Game.Achievement('Frequent Flier','Ascend <b>200</b> times.',[25,7]),
new Game.Achievement('Return to Sender','Ascend <b>250</b> times.',[25,7]),
new Game.Achievement('oops','Miss <b>3</b> golden cookies. <q>):</q>',[1,7]),
new Game.Achievement('Neverclick+','Reach <b>1 billion</b> cookies, with <b>15</b> or less clicks. <q>oh wow you actually did it, but the battle is not yet over</q>',[12,0]),
new Game.Achievement('Neverclick++','Reach <b>1 trillion</b> cookies, with <b>15</b> or less clicks. <q>gg</q>',[12,0]),
new Game.Achievement('Hardcore+','Reach <b>1 trillion</b> cookies, with no upgrades. <q>damn this must\'ve been tough</q>',[13,6]),
new Game.Achievement('Hardcore++','Reach <b>500 trillion</b> cookies, with no upgrades. <q>I M P R E S S I V E</q>',[14,6]),
new Game.Achievement('Cursed','Miss <b>13</b> golden cookies. <q>Come on!</q>',[0,8]),
new Game.Achievement('You think I\'m just gonna stand there and take it?','Miss <b>313</b> golden cookies. <q>you must be having a bad time by this point</q>',[15,5]),
new Game.Achievement('Misfortune','Miss <b>1,313</b> golden cookies. <q>this gave me physical pain to imagine anyone getting this</q>',[24,18]),
new Game.Achievement('nice try','Ascend with no cookies. <q>no sugar lumps 4 u</q>',[25,15]),
new Game.Achievement('Demigod Complex','Name yourself <b>HAL989</b>.<q>something something cps loss</q>',[17,5]),Game.last.pool="shadow",
new Game.Achievement('Quality Control','.<b>Thanks for helping with the mod!</b>',[16,5]),Game.last.pool="shadow",
]
//=================================
//FIXING RESET
//=================================
eval('Game.Reset = ' + Game.Reset.toString().split("\'Lazarus\');").join("\'Lazarus\'); if (cookiesForfeited<=1) Game.Win(\'nice try\');"));
//=================================
// LOADING
//=================================
var code = localStorage.getItem('halsave');
if (code == null) var code = "a";
if (code.includes("ap") == true) {Game.Win('Neverclick+');}
if (code.includes("va") == true) {Game.Win('Neverclick++');}
if (code.includes("dp") == true) {Game.Win('Hardcore+');}
if (code.includes("xa") == true) {Game.Win('Hardcore++');}
if (code.includes("za") == true) {Game.Win('Demigod Complex');}
if (code.includes("ty") == true) {Game.Win('Quality Control');}
if (code.includes("no") == true) {Game.Win('nice try');}
//=================================
//Ordering Vanilla Achievements
//=================================
Game.Achievements['Elder calm'].order=20500
Game.Achievements['Eldeer'].order=22220
//Game.Achievements['Tabloid Addiction'].order=11003
Game.Achievements['Uncanny clicker'].order=11015
//=================================
//Ordering Modded Achievements
//=================================
Game.Achievements['nice try'].order=30009
//Game.Achievements['Let\'s Get Right Into The News!'].order=11001
Game.Achievements['Elder Hibernation'].order=20001
Game.Achievements['Elder Coma'].order=20002
Game.Achievements['Pledge of Allegiance'].order=20003
Game.Achievements['Is 5 percent really all that much?'].order=20004
Game.Achievements['You better have sacrificial rolling pins by now'].order=20005
Game.Achievements['Elder Cycle'].order=20006
Game.Achievements['Elder Loop'].order=20007
Game.Achievements['Elder Recursion'].order=20008
Game.Achievements['Elder Infinite'].order=20009
Game.Achievements['Let\'s just call this Reindeer Clicker'].order=22101
Game.Achievements['Extinction'].order=22102
Game.Achievements['Milk N\' Cookies'].order=301001
Game.Achievements['Half Full'].order=301002
Game.Achievements['Milked for Progress'].order=301003
Game.Achievements['All the Milky Way'].order=301004
Game.Achievements['He needs some milk'].order=301005
Game.Achievements['Still Thirsty'].order=301006
Game.Achievements['Lactose Tolerance'].order=301007
Game.Achievements['Quenched'].order=301008
Game.Achievements['Pop goes the wrinkler'].order=21001
Game.Achievements['Wrinkled Away'].order=21002
Game.Achievements['M O I S T'].order=21003
Game.Achievements['Any shinies yet?'].order=21004
Game.Achievements['Neverclick+'].order=11011
Game.Achievements['Neverclick++'].order=11012
Game.Achievements['Hardcore+'].order=30501
Game.Achievements['Hardcore++'].order=30502
Game.Achievements['Tutorial'].order=32001
Game.Achievements['Charity'].order=32003
Game.Achievements['Blessed'].order=32004
Game.Achievements['Negative Debt'].order=32005
Game.Achievements['Payload'].order=32006
Game.Achievements['Big Spender'].order=32007
Game.Achievements['Profit Maximizer'].order=32008
Game.Achievements['True Heaven'].order=32009
Game.Achievements['Rich in a non-traditional sense'].order=32010
Game.Achievements['Ever changing seasons'].order=300001
Game.Achievements['Weekly'].order=300002
Game.Achievements['Monthly'].order=300003
Game.Achievements['Global Warming'].order=300004
Game.Achievements['Hourly'].order=300005
Game.Achievements['Daily'].order=300006
Game.Achievements['curse you time machine achievements'].order=300007
Game.Achievements['oops'].order=10500
Game.Achievements['Cursed'].order=10501
Game.Achievements['You think I\'m just gonna stand there and take it?'].order=10502
Game.Achievements['Misfortune'].order=10503
Game.Achievements['Come Again!'].order=30001
Game.Achievements['Demigod Complex'].order=9900
Game.Achievements['Quality Control'].order=9901
Game.Achievements['Frequent Flier'].order=30002
Game.Achievements['Return to Sender'].order=30003
//=================================
//DOING ACHIEVEMENT CHECKS
//=================================
Game.customChecks=[
function(){if (Game.cookieClicks<=15 && (Game.ascensionMode==1 || Game.resets==0) && Game.cookiesEarned>=1000000000) Game.Win('Neverclick+')},
function(){if (Game.cookieClicks<=15 && (Game.ascensionMode==1 || Game.resets==0) && Game.cookiesEarned>=1000000000000) Game.Win('Neverclick++')}, 
function(){if (Game.cookiesEarned>=1000000000000 && (Game.ascensionMode==1 || Game.resets==0) && Game.UpgradesOwned==0) Game.Win('Hardcore+')}, 
function(){if (Game.cookiesEarned>=500000000000000 && (Game.ascensionMode==1 || Game.resets==0) && Game.UpgradesOwned==0) Game.Win('Hardcore++')}, 
function(){if (Game.pledges>=10) Game.Win('Elder Hibernation')},
function(){if (Game.pledges>=15) Game.Win('Elder Coma')},
function(){if (Game.pledges>=20) Game.Win('Pledge of Allegiance')},
function(){if (Game.pledges>=25) Game.Win('Is 5 percent really all that much?')},
function(){if (Game.pledges>=30) Game.Win('You better have sacrificial rolling pins by now')},
function(){if (Game.pledges>=35) Game.Win('Elder Cycle')},
function(){if (Game.pledges>=40) Game.Win('Elder Loop')},
function(){if (Game.pledges>=45) Game.Win('Elder Recursion')},
function(){if (Game.pledges>=50) Game.Win('Elder Infinite')},
function(){if (Game.reindeerClicked>=250) Game.Win('Let\'s just call this Reindeer Clicker.')},
function(){if (Game.reindeerClicked>=400) Game.Win('Extinction')},
function(){if (Game.milkProgress>=2) Game.Win('Milk N\' Cookies')},
function(){if (Game.milkProgress>=4) Game.Win('Half Full')},
function(){if (Game.milkProgress>=6) Game.Win('Milked for Progress')},
function(){if (Game.milkProgress>=8) Game.Win('All the Milky Way')},
function(){if (Game.milkProgress>=10) Game.Win('He needs some milk')},
function(){if (Game.milkProgress>=12) Game.Win('Still Thirsty')},
function(){if (Game.milkProgress>=14) Game.Win('Lactose Tolerance')},
function(){if (Game.milkProgress>=16) Game.Win('Quenched')},
function(){if (Game.wrinklersPopped>=250) Game.Win('Pop goes the wrinkler')},
function(){if (Game.wrinklersPopped>=300) Game.Win('Wrinkled Away')},
function(){if (Game.wrinklersPopped>=400) Game.Win('M O I S T')},
//function(){if Game.TickerClicks>=5) Game.Win('Let\'s Get Right Into The News')
function(){if (Game.wrinklersPopped>=500) Game.Win('Any shinies yet?')},
function(){if (Game.heavenlyChipsSpent>=7) Game.Win('Tutorial')},
function(){if (Game.heavenlyChipsSpent>=77) Game.Win('Welcome Back')},
function(){if (Game.heavenlyChipsSpent>=777) Game.Win('Charity')},
function(){if (Game.heavenlyChipsSpent>=7777) Game.Win('Blessed')},
function(){if (Game.heavenlyChipsSpent>=77777) Game.Win('Negative Debt')},
function(){if (Game.heavenlyChipsSpent>=777777) Game.Win('Payload')},
function(){if (Game.heavenlyChipsSpent>=7777777) Game.Win('Big Spender')},
function(){if (Game.heavenlyChipsSpent>=77777777) Game.Win('Profit Maximizer')},
function(){if (Game.heavenlyChipsSpent>=777777777) Game.Win('True Heaven')},
function(){if (Game.seasonUses>=4) Game.Win('Ever changing seasons')},
function(){if (Game.seasonUses>=7) Game.Win('Weekly')},
function(){if (Game.seasonUses>=12) Game.Win('Monthly')},
function(){if (Game.seasonUses>=16) Game.Win('Global Warming')},
function(){if (Game.seasonUses>=24) Game.Win('Hourly')},
function(){if (Game.seasonUses>=31) Game.Win('Daily')},
function(){if (Game.seasonUses>=40) Game.Win('curse you time machine achievements')},
function(){if (Game.resets>=150) Game.Win('Come Again!')},
function(){if (name=='hal989') Game.Win('Demigod Complex')},
function(){if (name=='aktan') Game.Win('Quality Control')},
function(){if (name=='xo') Game.Win('Quality Control')},
function(){if (name=='chroma') Game.Win('Quality Control')},
function(){if (Game.resets>=200) Game.Win('Frequent Flier')},
function(){if (Game.resets>=250) Game.Win('Return to Sender')},
function(){if (Game.missedGoldenClicks>=3) Game.Win('oops')},
function(){if (Game.missedGoldenClicks>=13) Game.Win('Cursed')},
function(){if (Game.missedGoldenClicks>=313) Game.Win('You think I\'m just gonna stand there and take it?')},
function(){if (Game.missedGoldenClicks>=1313) Game.Win('Misfortune')},

]
//=================================
//NOTIFIYING OF INSTALLATION + WINNING THIRD PARTY
//=================================
Game.Win('Third-party')
Game.Notify('Mod Installed!','Enjoy!',[16,5]);
//=================================
//AUTOSAVING
//=================================
function refreshData()
{
    x = 60;  // once a minute autosave

savecode = ["|"]
if (Game.HasAchiev('Neverclick+')){savecode.push("ap");}
if (Game.HasAchiev('Neverclick++')){savecode.push("va");}
if (Game.HasAchiev('Hardcore+')){savecode.push("dp");}
if (Game.HasAchiev('Hardcore++')){savecode.push("xa");}
if (Game.HasAchiev('Demigod Complex')){savecode.push("za");}
if (Game.HasAchiev('Quality Control')){savecode.push("ty");}
if (Game.HasAchiev('nice try')){savecode.push("no");}
var outputcode = savecode.join("|");
localStorage.setItem('halsave', outputcode);

    setTimeout(refreshData, x*1000);
}
//=================================
// BEGINNING AUTOSAVE
//=================================
refreshData();
