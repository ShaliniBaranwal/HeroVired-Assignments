import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Thank You! {this.props.name}</h1>
            </div>
        );
    }
}

export default Footer;
