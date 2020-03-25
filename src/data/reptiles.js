const reptiles = {
    properties: [
        {
            _id: "5e76922216adce007c7ec019",
            index: 0,
            name: "Дальневосточная черепаха",
            description: "пресноводная черепаха, представитель семейства трёхкоготных черепах",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pelodiscus.jpg/275px-Pelodiscus.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BB%D1%8C%D0%BD%D0%B5%D0%B2%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B0%D1%8F_%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B0%D1%85%D0%B0",
            kind: "Pelodiscus sinensis"
        },
        {
            _id: "5e7692281c551a28dc72c440",
            index: 1,
            name: "Средиземноморская черепаха",
            description: "один из четырёх европейских членов семейства сухопутных черепах (лат. Testudinidae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Testudo_graeca11.JPG/275px-Testudo_graeca11.JPG",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B5%D0%B4%D0%B8%D0%B7%D0%B5%D0%BC%D0%BD%D0%BE%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B0%D1%85%D0%B0",
            kind: "Testudo graeca"
        },
        {
            _id: "5e76922f702ac41e342ade3d",
            index: 2,
            name: "Пискливый геккончик",
            description: "вид ящериц из рода Североазиатских геккончиков семейства гекконов",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Alsophylax_pipiens.jpg/274px-Alsophylax_pipiens.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B8%D1%81%D0%BA%D0%BB%D0%B8%D0%B2%D1%8B%D0%B9_%D0%B3%D0%B5%D0%BA%D0%BA%D0%BE%D0%BD%D1%87%D0%B8%D0%BA",
            kind: "Alsophylax pipiens"
        },
        {
            _id: "5e769234bec30d1d8cbf2bbf",
            index: 3,
            name: "Голопалый геккон Руссова",
            description: "мелкая ящерица из семейства Гекконовых (Gekkonidae), вид рода Тонкопалых (Голопалых) гекконов (Cyrtopodion)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Mediodactylus_russowii_12.jpg/274px-Mediodactylus_russowii_12.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%BF%D0%B0%D0%BB%D1%8B%D0%B9_%D0%B3%D0%B5%D0%BA%D0%BA%D0%BE%D0%BD_%D0%A0%D1%83%D1%81%D1%81%D0%BE%D0%B2%D0%B0",
            kind: "Cyrtopodion russowi"
        },
        {
            _id: "5e76987b8023e12dc0445bc7",
            index: 4,
            name: "Монгольская ящурка",
            description: "вид ящериц из рода Ящурок",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Eremias_argus.JPG/266px-Eremias_argus.JPG",
            link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D1%8F%D1%89%D1%83%D1%80%D0%BA%D0%B0",
            kind: "Eremias argus"
        },
        {
            _id: "5e77365a16adce007c7ec01a",
            index: 5,
            name: "Гобийская ящурка",
            description: "вид ящериц из рода Ящурок",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Eremias_przewalskii_2.jpg/274px-Eremias_przewalskii_2.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%B1%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D1%8F%D1%89%D1%83%D1%80%D0%BA%D0%B0",
            kind: "Eremias przewalskii"
        },
        {
            _id: "5e7736541c551a28dc72c441",
            index: 6,
            name: "Средняя ящерица",
            description: "ящерица из семейства настоящих ящериц. Относится к роду Зелёных ящериц",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Lacerta_media.jpg/274px-Lacerta_media.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D1%8F%D1%8F_%D1%8F%D1%89%D0%B5%D1%80%D0%B8%D1%86%D0%B0",
            kind: "Lacerta media"
        },
        {
            _id: "5e773650702ac41e342ade3e",
            index: 7,
            name: "Дальневосточный сцинк",
            description: "вид ящериц из семейства сцинковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Japanese_five-lined_skink-3.jpg/275px-Japanese_five-lined_skink-3.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BB%D1%8C%D0%BD%D0%B5%D0%B2%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D1%81%D1%86%D0%B8%D0%BD%D0%BA",
            kind: "Plestiodon latiscutatus"
        },
        {
            _id: "5e77364cbec30d1d8cbf2bc0",
            index: 8,
            name: "Западный удавчик",
            description: "змея из семейства ложноногих, подсемейства песчаных удавов",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Benny_Trapp_Eryx_jaculus.jpg/275px-Benny_Trapp_Eryx_jaculus.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BF%D0%B0%D0%B4%D0%BD%D1%8B%D0%B9_%D1%83%D0%B4%D0%B0%D0%B2%D1%87%D0%B8%D0%BA",
            kind: "Eryx jaculus"
        },
        {
            _id: "5e7736478023e12dc0445bc8",
            index: 9,
            name: "Японский полоз",
            description: "вид змей семейства ужеобразных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Elaphe_conspicillata_DSCN2954.JPG/275px-Elaphe_conspicillata_DSCN2954.JPG",
            link: "https://ru.wikipedia.org/wiki/%D0%AF%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BE%D0%BB%D0%BE%D0%B7",
            kind: "Euprepiophis conspicillata"
        },
        {
            _id: "5e7736b016adce007c7ec01b",
            index: 10,
            name: "Эскулапов полоз",
            description: "вид змей семейства ужеобразных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Zamenis_longissimus_couleuvre_esculape_65.jpg/275px-Zamenis_longissimus_couleuvre_esculape_65.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%AD%D1%81%D0%BA%D1%83%D0%BB%D0%B0%D0%BF%D0%BE%D0%B2_%D0%BF%D0%BE%D0%BB%D0%BE%D0%B7",
            kind: "Zamenis longissimus"
        },
        {
            _id: "5e7736ab1c551a28dc72c442",
            index: 11,
            name: "Закавказский полоз",
            description: "вид змей семейства ужеобразных. Видовое название дано в честь швейцарского натуралиста Рудольфа Фридриха Гогенакера (1798—1874)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Zamenis_hohenackeri.jpg/275px-Zamenis_hohenackeri.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BE%D0%BB%D0%BE%D0%B7",
            kind: "Zamenis hohenackeri"
        },
        {
            _id: "5e7736a7702ac41e342ade3f",
            index: 12,
            name: "Тонкохвостый лазающий полоз",
            description: "неядовитая змея семейства ужеобразные",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Orthriophis-taeniurus-sch%C3%B6nnatter.jpg/274px-Orthriophis-taeniurus-sch%C3%B6nnatter.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D0%BD%D0%BA%D0%BE%D1%85%D0%B2%D0%BE%D1%81%D1%82%D1%8B%D0%B9_%D0%BB%D0%B0%D0%B7%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%BF%D0%BE%D0%BB%D0%BE%D0%B7",
            kind: "Elaphe taeniurus"
        },
        {
            _id: "5e7736a1bec30d1d8cbf2bc1",
            index: 13,
            name: "Полосатый полоз",
            description: "вид змей рода стройные полозы семейства ужеобразных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zamenis_spinalis.jpg/237px-Zamenis_spinalis.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D0%BE%D1%81%D0%B0%D1%82%D1%8B%D0%B9_%D0%BF%D0%BE%D0%BB%D0%BE%D0%B7",
            kind: "Hierophis spinalis"
        },
        {
            _id: "5e77369c8023e12dc0445bc9",
            index: 14,
            name: "Краснопоясный динодон",
            description: "вид змей семейства ужеобразных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Dinodon-rufozonatum-walli.jpg/274px-Dinodon-rufozonatum-walli.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BF%D0%BE%D1%8F%D1%81%D0%BD%D1%8B%D0%B9_%D0%B4%D0%B8%D0%BD%D0%BE%D0%B4%D0%BE%D0%BD",
            kind: "Dinodon rufozonatum"
        },
        {
            _id: "5e7736f216adce007c7ec01c",
            index: 15,
            name: "Восточный динодон",
            description: "вид змей семейства ужеобразных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Japanese-odd-tooth-snake.jpg/274px-Japanese-odd-tooth-snake.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D0%B4%D0%B8%D0%BD%D0%BE%D0%B4%D0%BE%D0%BD",
            kind: "Dinodon orientale"
        },
        {
            _id: "5e7736ee1c551a28dc72c443",
            index: 16,
            name: "Кошачья змея",
            description: "вид змей семейства ужеобразных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mediterranean_Cat_Snake.jpg/274px-Mediterranean_Cat_Snake.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%88%D0%B0%D1%87%D1%8C%D1%8F_%D0%B7%D0%BC%D0%B5%D1%8F",
            kind: "Telescopus fallax"
        },
        {
            _id: "5e7736e9702ac41e342ade40",
            index: 17,
            name: "Гадюка Динника",
            description: "вид ядовитых змей рода Настоящих гадюк семейства Гадюковых. Назван в честь русского зоолога Николая Яковлевича Динника (1847—1917)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/BennyTrapp_Vipera_dinniki.jpg/274px-BennyTrapp_Vipera_dinniki.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%B4%D1%8E%D0%BA%D0%B0_%D0%94%D0%B8%D0%BD%D0%BD%D0%B8%D0%BA%D0%B0",
            kind: "Vipera dinniki"
        },
        {
            _id: "5e7736e5bec30d1d8cbf2bc2",
            index: 18,
            name: "Кавказская гадюка",
            description: "вид ядовитых змей рода настоящих гадюк семейства гадюковых. Назван в честь директора кавказского музея А. Н. Казнакова",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Caucasus_viper.jpg/274px-Caucasus_viper.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B0%D1%8F_%D0%B3%D0%B0%D0%B4%D1%8E%D0%BA%D0%B0",
            kind: "Vipera kaznakovi"
        },
        {
            _id: "5e7736e08023e12dc0445bca",
            index: 19,
            name: "Гадюка Никольского",
            description: "вид ядовитых змей рода настоящих гадюк семейства гадюковых. Название получила в честь российского зоолога А. М. Никольского",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Vipera_nikolski_001.jpg/274px-Vipera_nikolski_001.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%B4%D1%8E%D0%BA%D0%B0_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B3%D0%BE",
            kind: "Vipera nikolskii"
        },
        {
            _id: "5e77371d8023e12dc0445bcb",
            index: 20,
            name: "Гюрза",
            description: "вид ядовитых змей из рода гигантских гадюк семейства Гадюковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Macrovipera_lebetina_obtusa.jpg/275px-Macrovipera_lebetina_obtusa.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%93%D1%8E%D1%80%D0%B7%D0%B0",
            kind: "Macrovipera lebetina"
        }
    ]
};


export default reptiles;