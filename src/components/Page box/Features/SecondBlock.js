import React from "react";
import lichens from "../../../sass/image/lichens.jpg";
import mammals from "../../../sass/image/mammals.jpg";
import mollusks from "../../../sass/image/mollusks.jpg";
import bryophytes from "../../../sass/image/bryophytes.jpg";


const SecondBlock = ({openLichens, openMammals, openMollusks, openBryophytes}) => {
    return (
        <div className={"second"}>
            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={lichens} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Лишайники</h2>
                    <p className={"feature-box__title"}>Список лишайников, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openLichens}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>

            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={mammals} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Млекопитающие</h2>
                    <p className={"feature-box__title"}>Список млекопитающих, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openMammals}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>

            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={mollusks} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Моллюски</h2>
                    <p className={"feature-box__title"}>Список моллюсков, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openMollusks}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>

            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={bryophytes} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Моховидные растения</h2>
                    <p className={"feature-box__title"}>Список моховидных растений, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openBryophytes}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SecondBlock;