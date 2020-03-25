import React from "react";
import bryophytes from "../../../data/bryophytes";
import ModalCard from "../Modal Card/ModalCard";


class BryophytesUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: bryophytes.properties,
            property: bryophytes.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: bryophytes.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: bryophytes.properties[newIndex]
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
export default BryophytesUp;