function api(){
    return new Promise ((resolve,reject) => {
        setTimeout(() =>{
            console.log("weather data");
             resolve(200);
        },2000);
    });
}

async function getWeatherData() {
    console.log("api 1")
    await api (1); 
    console.log("api 2")
    await api(2); 
}

// IIFE Immediately Invoked Function Expression

(async function getWeatherData() {
    console.log("api 1")
    await api (1); 
    console.log("api 2")
    await api(2); 
}) ();