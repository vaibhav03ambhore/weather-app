# Live here: https://weather-app-vlfm.onrender.com/


# Weather Info App

## Overview
The Weather Info App is a simple web application that provides weather information based on the user's current location or a city entered by the user. It fetches weather data from the OpenWeatherMap API and displays it in a user-friendly interface.

## Features
- Display current weather based on the user's geolocation.
- Search and display weather for any city.
- Show weather information including temperature, description, and location.
- Responsive design for different screen sizes.

## Technologies Used
- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Getting Started
### Prerequisite
- An internet connection

### Installation
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/weather-info-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather-info-app
    ```
3. Open index.html in your web browser.
   
### API Key
The app uses the OpenWeatherMap API to fetch weather data. To use this app, you need an API key from OpenWeatherMap. You can sign up and get a free API key from OpenWeatherMap.

Replace the placeholder API key in app.js with your own API key:
   ```bash
    const key = 'your_openweathermap_api_key';
   ```

## Usage
1. **Geolocation Weather**: Allow the browser to access your location. The app will automatically fetch and display the weather information for your current location.
2. **Search City Weather**: Enter the name of a city in the search bar and press Enter. The app will fetch and display the weather information for the entered city.

## Project Structure
- `index.html`: The main HTML file that contains the structure of the app.
- `app.css`: The CSS file that styles the app.
- `app.js`: The JavaScript file that handles the app's logic and interactions.
- `icons/`: A directory containing weather icons used in the app.
- `bg.jpg`: The background image used in the app.


## Acknowledgements
- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API.
- [Unsplash](https://unsplash.com/) for the background image.

## Contact
For any inquiries or feedback, feel free to contact me at [vaibhavambhore46@gmail.com](mailto:vaibhavambhore46@gmail.com).
