import React from "react";
import insects from "../../../sass/image/insects.jpg";
import fernPlants from "../../../sass/image/fernPlants.jpg";
import floatingPlants from "../../../sass/image/floatingPlants.jpg";
import angiosperms from "../../../sass/image/angiosperms.jpg";


const ThirdBlock = ({openInsects, openFernPlants, openFloatingPlants, openAngiosperms}) => {
    return (
        <div className={"second"}>
            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={insects} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Насекомые</h2>
                    <p className={"feature-box__title"}>Список насекомых, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openInsects}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>

            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={fernPlants} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Папоротниковидные растения</h2>
                    <p className={"feature-box__title"}>Список папоротниковидных растений, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openFernPlants}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>

            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={floatingPlants} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Плауновидные растения</h2>
                    <p className={"feature-box__title"}>Список плауновидных растений, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openFloatingPlants}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>

            <div className={"feature-box__column"}>
                <div className={"feature-box__card"}>
                    <img src={angiosperms} className={"feature-box__image"} alt={"View"}/>
                    <h2 className={"feature-box__heading"}>Покрытосеменные растения</h2>
                    <p className={"feature-box__title"}>Список покрытосеменных растений, занесённых в Красную книгу России</p>
                    <div className={"feature-box__btn-box"}>
                        <button
                            onClick={openAngiosperms}
                            className={"btn__features"}>Просмотр страницы</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ThirdBlock;