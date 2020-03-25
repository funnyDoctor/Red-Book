import React from "react";
import gymnosperms from "../../../data/gymnosperms";
import ModalCard from "../Modal Card/ModalCard";


class GymnospermsUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: gymnosperms.properties,
            property: gymnosperms.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: gymnosperms.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: gymnosperms.properties[newIndex]
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
export default GymnospermsUp;