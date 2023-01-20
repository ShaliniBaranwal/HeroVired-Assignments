import React from 'react';


class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
            </div>
        )
    }
}

export default Heading;