import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"


// Підключення до сервісу погоди
const API_Key = "58c3cca0622442647544fb302144ba06";
const lnk = "api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid="+API_Key+"&units=metric";
const link = "api.openweathermap.org/data/2.5/find?q=London&appid="+API_Key;
const pb_link = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

class App extends React.Component{

  // змінна стану: за замовчуванням задаємо значення змінних як undefined
  state = {
    temp:undefined,
    city:undefined,
    country:undefined,
    sunrise:undefined,
    sunset:undefined,
    error:undefined,
  }
// При зміні стану запускаємо функцію. Стан змінюється при відправці форми.
  gettingWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    // Якщо змінна city отримає значення.
    if(city){
      // відправляємо запит.
      const api_url = await
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},ua&appid=58c3cca0622442647544fb302144ba06&units=metric`);
      const data =await api_url.json();
  //  При зміні стану - змінним передаємо значення
    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      humidity: data.main.humidity,
      error:""
    });
  }
  }


  render(){
    return (
      <div>
        <div>Hello</div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          humidity={this.state.humidity}
        />
      </div>
    );
  }
}

export default App;