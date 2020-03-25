import React from "react";
import tiger from "../../../sass/image/amurskiy-tigr.jpg"
import turtle from "../../../sass/image/dalnevostochnaya-cherepaha.jpg";
import leopard from "../../../sass/image/dalnevostochnyj-leopard-1.jpg";
import mountainRam from "../../../sass/image/gornyj-baran.jpg";
import irbis from "../../../sass/image/irbis.jpg";
import muskDeer from "../../../sass/image/kabarga-mesta-obitaniya.jpg";
import forestDormouse from "../../../sass/image/lesnaya-sonya.jpg";
import centralAsianLeopard from "../../../sass/image/peredneaziatskij-leopard-status-vida.jpg";
import olen from "../../../sass/image/pyatnistyj-olen-mesta-obitaniya.jpg";
import dolphin from "../../../sass/image/redkie-zhivotnie-belomordiy-delfin.jpg";
import wolf from "../../../sass/image/redkie-zhivotnie-krasniy-volk.jpg";
import manul from "../../../sass/image/redkie-zhivotnie-manul.jpg";
import seaLion from "../../../sass/image/redkie-zhivotnie-sivuch.jpg";
import taimen from "../../../sass/image/tajmen-3.jpg";

const Gallery = () => {
    return (
        <section className={"gallery"}>
            <figure className={"gallery__item gallery__item--1"}><img src={taimen} alt={"Gallery 1"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--2"}><img src={tiger} alt={"Gallery 2"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--3"}><img src={leopard} alt={"Gallery 3"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--4"}><img src={dolphin} alt={"Gallery 4"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--5"}><img src={irbis} alt={"Gallery 5"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--6"}><img src={muskDeer} alt={"Gallery 6"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--7"}><img src={forestDormouse} alt={"Gallery 7"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--8"}><img src={centralAsianLeopard} alt={"Gallery 8"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--9"}><img src={turtle} alt={"Gallery 9"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--10"}><img src={wolf} alt={"Gallery 10"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--11"}><img src={seaLion} alt={"Gallery 11"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--12"}><img src={manul} alt={"Gallery 12"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--13"}><img src={olen} alt={"Gallery 13"} className={"gallery__img"}/></figure>
            <figure className={"gallery__item gallery__item--14"}><img src={mountainRam} alt={"Gallery 14"} className={"gallery__img"}/></figure>
        </section>
    )
};


export default Gallery;