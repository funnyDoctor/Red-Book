import React from "react";
import mushrooms from "../../../data/mushrooms";
import ModalCard from "../Modal Card/ModalCard";


class MushroomsUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: mushrooms.properties,
            property: mushrooms.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: mushrooms.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: mushrooms.properties[newIndex]
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
export default MushroomsUp;