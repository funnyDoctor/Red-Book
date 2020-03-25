import React from "react";
import amphibians from "../../../data/amphibians";
import ModalCard from "../Modal Card/ModalCard";


class AmphibiansUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: amphibians.properties,
            property: amphibians.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: amphibians.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: amphibians.properties[newIndex]
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
export default AmphibiansUp;