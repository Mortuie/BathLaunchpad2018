import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class App extends Component {
    
  render() {
    const response = (res) => {
        console.log(res);
    }

    const componentClicked = () => {
        console.log("BANTER");
    }

    return (
        <div>
            <FacebookLogin 
                appId="2018495705065023"
                autoLoad={true}
                fields="name, email, picture"
                onClick={componentClicked}
                callback={response}
            />
        </div>
    );
  }
}

