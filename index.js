// API Key
const API_KEY = "9a4a60172fe1f013c52e3959ebc1a28a";

// Tab Switching 
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector("[.weatherContainer]");
const userInfoContainer = document.querySelector(".user-info-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("data-searchForm");
const loadingScreen = document.querySelector(".loading-container");

let currentTab = userTab;
currentTab.classList.add("current-tab");

// switching
 function switchTab(clickedTab){
    if(clickedTab != currentTab){
        // shifting background color after clicking .. 
        currentTab.classList.remove("curren-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    }
 }
userTab.addEventListener("click", ()=>{
    // passed clicked tab as input parameter.. 
    switchTab(userTab);
});
userTab.addEventListener("click", ()=>{
    // passed search tab as input parameter.. 
    switchTab(searchTab);
});















//const API_KEY = "9a4a60172fe1f013c52e3959ebc1a28a"
// async function fetchWeatherDetails(){
    
//     try{
//         let city = "Patna";
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();
//         console.log("Weather data -> ", data);

//         // let newPara = document.createElement('p');
//         // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

//         // document.body.appendChild(newPara);
//         renderWeatherInfo
//     }
//     catch(error){
//         // handling the error here r.. 


//     }
    
// }