import React from "react";
import birds from "../../../data/birds";
import ModalCard from "../Modal Card/ModalCard";


class BirdsUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: birds.properties,
            property: birds.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: birds.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: birds.properties[newIndex]
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
export default BirdsUp;