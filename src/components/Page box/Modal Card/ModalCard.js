import React from "react";
import PropTypes from 'prop-types';
import Card from "../Card/Card";


const ModalCard = ({property, properties, isOpen, onCancel, prevProperty, nextProperty}) => {
    const transform = `translateX(-${property.index*(100/properties.length)}%)`;
    const map = () => {return properties.map(property => <Card key={property._id} property={property}/>)};
    const disabledPrev = property.index === 0;
    const disabledNext = property.index === properties.length-1;
    const index = property.index;

    return (
        <>
            { isOpen &&
                <div className={"popup"}>
                    <div className={"popup__content"}>
                        <div className={`cards-slider active-slide-${index}`}>
                            <div className={"cards-slider-wrapper"} style={{'transform': transform}}>{map()}</div>
                        </div>

                        <div className={"btn__box"}>
                            <button
                                className={"btn__slider"}
                                onClick={prevProperty}
                                disabled={disabledPrev}
                            >Предыдущий</button>
                            <button
                                className={"btn__slider"}
                                onClick={nextProperty}
                                disabled={disabledNext}
                            >Следующий</button>
                        </div>
                        <span onClick={onCancel} className={"btn__close"}/>
                    </div>
                </div>
            }
        </>
    )
};

ModalCard.propTypes = { property: PropTypes.object.isRequired };

export default ModalCard;