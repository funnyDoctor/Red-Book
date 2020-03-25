import React from "react";
import reptiles from "../../../data/reptiles";
import ModalCard from "../Modal Card/ModalCard";


class ReptilesUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: reptiles.properties,
            property: reptiles.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: reptiles.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: reptiles.properties[newIndex]
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
export default ReptilesUp;