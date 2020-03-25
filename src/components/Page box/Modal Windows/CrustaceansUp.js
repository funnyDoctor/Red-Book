import React from "react";
import crustaceans from "../../../data/crustaceans";
import ModalCard from "../Modal Card/ModalCard";


class CrustaceansUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: crustaceans.properties,
            property: crustaceans.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: crustaceans.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: crustaceans.properties[newIndex]
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
export default CrustaceansUp;