import React from "react";

class Form extends React.Component{
 render(){
 return(
    <form onSubmit={this.props.BankMethod}>
    <button>Отримати курс валют</button>
</form>
 );
 }
}

export default Form;
