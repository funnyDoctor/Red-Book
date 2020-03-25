import React from "react";
import angiosperms from "../../../data/angiosperms";
import ModalCard from "../Modal Card/ModalCard";


class AngiospermsUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            properties: angiosperms.properties,
            property: angiosperms.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: angiosperms.properties[newIndex]
        })
    };

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: angiosperms.properties[newIndex]
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
export default AngiospermsUp;