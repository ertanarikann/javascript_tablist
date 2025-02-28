const london = document.getElementById("tab1-content").classList;
const paris = document.getElementById("tab2-content").classList;
const tokyo = document.getElementById("tab3-content").classList;

const londonTab = document.getElementById("tab1-button").classList;
const parisTab = document.getElementById("tab2-button").classList;
const tokyoTab = document.getElementById("tab3-button").classList;

function londonContent(){
    paris.remove("active");
    tokyo.remove("active");
    london.add("active");

    parisTab.remove("active");
    tokyoTab.remove("active");
    londonTab.add("active");
}
function parisContent(){
    
    tokyo.remove("active");
    london.remove("active");
    paris.add("active");

    tokyoTab.remove("active");
    londonTab.remove("active");
    parisTab.add("active");
}
function tokyoContent(){

    paris.remove("active");   
    london.remove("active");
    tokyo.add("active");

    parisTab.remove("active");   
    londonTab.remove("active");
    tokyoTab.add("active");
}