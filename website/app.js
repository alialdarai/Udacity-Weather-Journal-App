// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=ab4720f7ce3f91c9ad9a44e368d82cf3&units=imperial';

// OpenWeatherMap API base URL for ZIP code weather data
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    
    getWeather(baseURL,zipCode, apiKey)
    
    .then(function(data) {
        postData('/add', {date: newDate, temp: data.main.temp, content: feelings});  
        
        updateUI()
    })
    
    
} 

/* Get zip code information from API */
const getWeather = async (baseURL, zip, apiKey) => {
    const res = await fetch(baseURL+zip+apiKey);
    try {
        const data = await res.json();
        console.log(data)
        return data;
    }catch(error) {
        console.log('error', error);
    }
}

/* Function to POST data to Server */
const postData = async (url ='', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    }catch(error) {
        console.log("error", error);
    }
}

//* Function to Get Project Data from Server */
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        const entry = allData.entry;
            document.getElementById('date').innerHTML = entry.date;
            document.getElementById('temp').innerHTML = entry.temp;
            document.getElementById('content').innerHTML = entry.content; 
        } catch (error) {
            console.log("error", error);
        }
    }