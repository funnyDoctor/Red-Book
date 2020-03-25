import React from "react";


const Footer = () => {
    const wwf = "https://wwf.ru/";
    return (
        <footer className={"footer"}>
            <ul className={"footer-nav"}>
                <li className={"footer-nav__item"}>
                    <a
                        href={wwf}
                        className={"footer-nav__link"}
                        target={"_blank"}
                        rel="noopener noreferrer">
                        Оказать помощь
                    </a></li>
            </ul>
            <p className={"copyright"}>
                &copy; 2020 Сделано с любовью
            </p>
        </footer>
    )
};


export default Footer;