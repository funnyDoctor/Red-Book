import React from "react";
import lichens from "../../../data/lichens";
import ModalCard from "../Modal Card/ModalCard";


class LichensUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: lichens.properties,
            property: lichens.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: lichens.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: lichens.properties[newIndex]
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
export default LichensUp;