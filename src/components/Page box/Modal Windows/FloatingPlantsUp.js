import React from "react";
import floatingPlants from "../../../data/floatingPlants";
import ModalCard from "../Modal Card/ModalCard";


class FloatingPlantsUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: floatingPlants.properties,
            property: floatingPlants.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: floatingPlants.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: floatingPlants.properties[newIndex]
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
export default FloatingPlantsUp;