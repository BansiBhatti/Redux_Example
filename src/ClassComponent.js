import React from "react";

// const ClassComponent = () => {}   functional component

class ClassComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Bansi"
        };
    }

    changeName = () => {    
        this.setState({ name: "hello" })
    }

    render() {
        return (
            <>
                <h1>This is ClassComponent</h1>
                <h2>{this.state.name}</h2>

                <button onClick={this.changeName}>Change Name</button>
            </>
        )
    }
}
export default ClassComponent;  