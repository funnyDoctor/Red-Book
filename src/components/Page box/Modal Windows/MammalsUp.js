import React from "react";
import mammals from "../../../data/mammals";
import ModalCard from "../Modal Card/ModalCard"


class MammalsUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: mammals.properties,
            property: mammals.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: mammals.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: mammals.properties[newIndex]
        })
    };

    render() {
        const {properties, property} = this.state;
        const {isOpen, onCancel} = this.props;

        return (
            <ModalCard
                property={property}
                properties={properties}
                isOpen={isOpen}
                onCancel={onCancel}
                prevProperty={this.prevProperty}
                nextProperty={this.nextProperty}
            />
        )
    }
}
export default MammalsUp;