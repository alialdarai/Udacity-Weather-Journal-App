# Udacity Weather Journal App


![localhost_3000_ (3)](https://github.com/alialdarai/Udacity-Weather-Journal-App/assets/134742312/ad24b591-814b-4742-b1c9-1277b7e46597)


## Description

The Udacity Weather Journal App is a simple web application that allows users to get weather information based on a provided zip code and record their feelings about the weather. It's a project developed as part of the Udacity Front End Web Developer Nanodegree program.

The app uses OpenWeatherMap API to fetch weather data based on the user's input zip code. It then allows the user to enter their current feelings or thoughts, which are stored alongside the weather data.

## Features

- **Weather Data Retrieval:** The app fetches weather data from the OpenWeatherMap API using the provided zip code.
- **Dynamic User Interface:** The UI dynamically updates with the fetched weather data, displaying temperature, date, and user-entered feelings.
- **Server-Side Data Storage:** The user's feelings along with the weather data are stored on the server to keep a record of past entries.
- **Responsive Design:** The app is designed to work on various screen sizes, from desktop to mobile devices.

## Installation

1. Clone the repository:

   ```cmd
   git clone https://github.com/alialdarai/Udacity-Weather-Journal-App.git


2. Navigate to the project directory:

    ```cmd
    cd Udacity-Weather-Journal-App
    ```

3. Install the project dependencies:

    ```cmd
    npm install express
    ```
    ```cmd
    npm install cors
    ```
    
    ```cmd
    npm install body-parser
    ```

## Usage

1. Run the server:

    ```cmd
    node server.js
    ```

2. Open your web browser and navigate to `http://localhost:3000`.

3. Enter a valid zip code and your current feelings, then click the "Generate" button.

4. The app will display the fetched weather data along with your entered feelings.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- OpenWeatherMap API

## Author

**Ali Aldarai**
