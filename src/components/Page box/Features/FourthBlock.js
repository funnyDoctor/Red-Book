import React from "react";
import reptiles from "../../../sass/image/reptiles.jpg";
import birds from "../../../sass/image/birds.jpg";
import crustaceans from "../../../sass/image/crustaceans.jpg";
import fish from "../../../sass/image/fish.jpg";




const FourthBlock = ({openReptiles, openBirds, openCrustaceans, openFishes}) => {
    return (
        <div className={"second"}>
            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={reptiles} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Пресмыкающиеся</h2>
                    <p className={"feature-box__title"}>Список пресмыкающихся, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openReptiles}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>

            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={birds} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Птицы</h2>
                    <p className={"feature-box__title"}>Список птиц, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box bird"}>
                        <button
                            onClick={openBirds}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>

            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={crustaceans} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Ракообразные</h2>
                    <p className={"feature-box__title"}>Список ракообразных, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openCrustaceans}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>

            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={fish} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Рыбы</h2>
                    <p className={"feature-box__title"}>Список рыб и круглоротых, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openFishes}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FourthBlock;