import React from "react";
import gymnosperms from "../../../sass/image/gymnosperms.jpg";
import mushrooms from "../../../sass/image/mushrooms.jpg";
import amphibians from "../../../sass/image/amphibians.jpg";
import annelids from "../../../sass/image/annelids.jpg";


const FirstBlock = ({openGymnosperms, openMushrooms, openAmphibians, openAnnelids}) => {
    return (
        <div className={"first"}>
            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={gymnosperms} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Голосеменные растения</h2>
                    <p className={"feature-box__title"}>Список голосеменных растений, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openGymnosperms}
                            className={"btn__features"}
                        >Просмотр страницы</button>

                    </div>
                </div>
            </div>

            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={mushrooms} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Грибы</h2>
                    <p className={"feature-box__title "}>Список грибов, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box mushrooms"}>
                        <button
                            onClick={openMushrooms}
                            className={"btn__features"}
                        >Просмотр страницы</button>
                    </div>
                </div>
            </div>

            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={amphibians} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Земноводные</h2>
                    <p className={"feature-box__title"}>Список земноводных, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openAmphibians}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>

            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={annelids} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Кольчатые черви</h2>
                    <p className={"feature-box__title"}>Список кольчатых червей, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openAnnelids}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default FirstBlock;