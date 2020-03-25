import React from "react";
import fernPlants from "../../../data/fernPlants";
import ModalCard from "../Modal Card/ModalCard";


class FernPlantsUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: fernPlants.properties,
            property: fernPlants.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: fernPlants.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: fernPlants.properties[newIndex]
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
export default FernPlantsUp;