import React from "react";

const Header = () => {
    const wiki = 'https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8';
    return (
        <header className={"header"}>
            <div className={"header__text-box"}>
                <h1 className={"heading-primary"}>
                    <span className={"heading-primary__main"}>Красная книга</span>
                    <span className={"heading-primary__sub"}>Мир,который мы теряем</span>
                </h1>

                <a href={wiki} className={"btn__header"} target={"_blank"}  rel="noopener noreferrer">Просмотр страницы</a>
            </div>
        </header>
    )
};


export default Header;