# Task-2 WEATHER APPLICATION ☔

**COMPANY:** CODTECH IT SOLUTIONS  

**NAME:** VISHAL MALVIYA  

**INTERN ID:** CT04WY75  

**DOMAIN:** MERN STACK DEVELOPER  

**DURATION:** 4 WEEKS  

**MENTOR:** NEELA SANTOSH  

## Weather App

### Overview

This project is a **Weather App**, designed to provide real-time weather information for different locations. 

Users can enter a city name to get current weather conditions, including temperature, humidity, wind speed, and a weather description. 

The app is built using **React (Vite) for the frontend** and integrates a weather API to fetch live weather data. 

Future enhancements include location-based weather updates and a forecast feature. 

### Features

- **Real-Time Weather Data:** Fetches live weather updates for any city.  

- **Search Functionality:** Users can search for weather details by entering a city name.  

- **Temperature & Conditions:** Displays temperature, humidity, wind speed, and weather description.  

- **Modern UI:** Built with React and TailwindCSS for a sleek design.  

- **Error Handling:** Shows an error message if an invalid city is entered.  

- **Future Enhancements (Planned):** Location-based weather detection and a 7-day forecast.  

### Technologies Used

- **Frontend:** React (Vite) + JavaScript  

- **API:** OpenWeatherMap API (or any other weather API)  

- **UI Styling:** Tailwind CSS  

- **Editor & Development Environment:** Visual Studio Code (VS Code)  

- **Package Manager:** npm  

### Project Structure

```
weather-app/
│── src/                  # React Frontend
│   ├── components/       # UI Components
│   │   ├── WeatherCard.jsx # Main weather component
│   ├── App.jsx           # Main React app
│   ├── index.jsx         # Entry point
│   ├── App.css           # Styles
│   ├── api.js            # API handling
│   ├── config.js         # API key configuration (optional)
│── public/               # Static files
│   ├── index.html        # Main HTML file
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation
```

### Installation & Usage

#### 1. Clone the Repository

```sh
git clone https://github.com/vishal-dev24/weather-app.git
cd weather-app
```

#### 2. Install Dependencies

```sh
cd client  
npm install  
cd ../server  
npm install  
```

#### 3. Setup `.env` file in `server` folder

```env
PORT=5000  
WEATHER_API_KEY=your_openweathermap_api_key  
```

#### 4. Run the Project

```sh
npm run dev
```

The app will be accessible at `http://localhost:5173/`.  

### How It Works

- The **search bar** allows users to enter a city name.  

- The app **fetches data** from the weather API and displays it dynamically.  

- The **UI updates** to show temperature, humidity, wind speed, and conditions.  

- If an **invalid city** is entered, an error message is shown.  

### Future Enhancements

- **Location-Based Weather:** Automatically detect and display weather for the user's current location.  

- **7-Day Forecast:** Show upcoming weather predictions.  

- **Dark Mode:** UI toggle for light/dark themes.  

- **Weather Alerts:** Notify users of extreme weather conditions.  

### Contribution Guidelines

Feel free to fork the project and submit pull requests! 

Ensure you follow best coding practices and provide meaningful commit messages.  

### License

This project is licensed under the MIT License.  

### Contact

GitHub: [https://github.com/vishal-dev24](https://github.com/vishal-dev24)  

LinkedIn: [https://www.linkedin.com/in/vishalmalviya3846/](https://www.linkedin.com/in/vishalmalviya3846/)  

