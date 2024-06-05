let city=document.getElementById("city");
let temperature=document.getElementById("temperature");
let type=document.getElementById("type");
let image=document.getElementById("img");
let input=document.getElementById("input-box");
let API_key="c88de802ba5de83a4e216b0de156363a"




const data=async function(search){
    let getData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)
    let jsonData=await getData.json();
 

    if(jsonData.cod==400){
        alert("Please Enter Location")
        image.src="images/error-icon.webp"
        city.innerHTML="";
    type.innerHTML="please enter city";
    temperature.innerHTML="";
    
    }
    if(jsonData.cod==404){
        alert("Please Enter Right Location")
        image.src="images/error-icon.webp"
        city.innerHTML="";
    type.innerHTML="please enter correct city";
    temperature.innerHTML="";
    }
    input.value=""
    
    
    city.innerHTML=jsonData.name;
    type.innerHTML=jsonData.weather[0].main;
    temperature.innerHTML=Math.floor(jsonData.main.temp) + "°C";

    if(type.innerHTML=="Clouds"){
        image.src="images/clouds.png"
    }else if(type.innerHTML=="Clear"){
        image.src="images/clear.png"
    }
    else if(type.innerHTML=="Rain"){
        image.src="images/rain.png"
    }
    else if(type.innerHTML=="Snow"){
        image.src="images/rain.png"
    }
    else if(type.innerHTML=="Haze"){
        image.src="images/drizzle.png"
    }
    else if(type.innerHTML=="Strom"){
        image.src="images/mist.png"
    }
    
    input.value=""
}

function mySearch(){
    search=input.value;
    data(search)
    
}

