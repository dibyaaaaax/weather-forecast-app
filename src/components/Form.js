import React from "react";

class Form extends React.Component{
    render(){
    return (
        <div className="form-div">
        <form onSubmit={this.props.getWeather} className="form-component">
            <input type="text" name="city" placeholder="City..." className="form-element"/><br/>
            <input type="text" name="country" placeholder="Country..." className="form-element"/><br/>
            <button>Get Weather</button>
        </form></div>
    );
    }

};
export default Form;