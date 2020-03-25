import React from "react";
import first from "../../../sass/image/first.jpg"
import second from "../../../sass/image/second.jpg"


const About = () => {
    return (
        <section className={"section-about"}>
            <div className={"u-center-text u-margin-bottom-big"}>
                <h2 className={"heading-secondary"}>
                    Несколько слов...
                </h2>
            </div>

            <div className={"row"}>
                <div className={"col-1-of-2"}>
                    <h3 className={"heading-tertiary u-margin-bottom-small"}>Немного о содержании</h3>
                    <p className={"paragraph"}>
                        Дорогой друг эта страница посвещана Красной книге России. Красная книга Российской Федерации (ККРФ) —
                        основной государственный документ, учреждённый в целях выявления редких и находящихся под угрозой
                        исчезновения диких животных.
                    </p>

                    <h3 className={"heading-tertiary u-margin-bottom-small"}>О важности этого документа</h3>
                    <p className={"paragraph"}>
                        Из-за агрессивной деятельности человека, флора и фауна находится в состоянии бедствия,
                        оказываясь на грани вымирания. Данная книга помогает нам сохранить уникальные виды, для будущих поколений.
                    </p>
                </div>

                <div className={"col-1-of-2"}>
                    <div className={"composition"}>
                        <img alt={"View 1"} className={"composition__photo composition__photo--p1"} src={first}/>

                        <img alt={"View 2"} className={"composition__photo composition__photo--p2"} src={second}/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;