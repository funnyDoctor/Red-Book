import React from "react";
import mollusks from "../../../data/mollusks";
import ModalCard from "../Modal Card/ModalCard";


class MollusksUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: mollusks.properties,
            property: mollusks.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: mollusks.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: mollusks.properties[newIndex]
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
export default MollusksUp;