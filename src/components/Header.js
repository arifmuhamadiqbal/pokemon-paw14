import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-logo">
                    <img src="./pokemon-ball.png" />
                </div>
                <div className="header-login">
                    <a>Login</a>
                </div>
            </div>
        );
    }
}

export default Header;