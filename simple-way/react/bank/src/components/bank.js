import React from "react";

class Bank extends React.Component{
    render(){
        return(
            <div>
                {
                <div>
                <p>USD/UAH: {this.props.usd}</p>
                <p>EUR/UAH: {this.props.eur}</p>
                </div>
                }
            </div>
        );
    }
}

export default Bank;