
import './App.css';
import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Bank from "./components/bank"

const pb_link = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

class App extends React.Component{
  // змінна стану: за замовчуванням задаємо значення змінних як undefined
  state = {
    usd:undefined,
    eur:undefined
  }
// При зміні стану запускаємо функцію. Стан змінюється при відправці форми.
  gettingBank = async (e) =>{
    e.preventDefault();
    // const city = e.target.elements.city.value;
    // Якщо змінна city отримає значення.
    if(1){
      // відправляємо запит.
      const api_url = await
        fetch(pb_link);
      const data =await api_url.json();
      // console.log(data[0].buy);
  //  При зміні стану - змінним передаємо значення
    this.setState({

      usd: data[0].buy,
      eur: data[1].buy,
    });
  }
  }



  render(){
    return (
      <div>
        <Info />
        
        <Form BankMethod={this.gettingBank} />
        
        <Bank 
          usd={this.state.usd}
          eur={this.state.eur}
        />
      </div>
    );
  }
}

export default App;
