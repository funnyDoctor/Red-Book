import React from "react";
import annelids from "../../../data/annelids";
import ModalCard from "../Modal Card/ModalCard";


class AnnelidsUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: annelids.properties,
            property: annelids.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: annelids.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: annelids.properties[newIndex]
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
export default AnnelidsUp;