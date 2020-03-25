const birds = {
    properties: [
        {
            _id: "5e773a6f16adce007c7ec026",
            index: 0,
            name: "Чернозобая гагара",
            description: "птица из рода гагар (Gavia). Наиболее часто встречающийся вид среди остальных видов гагар",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gavia_arctica1.jpg/275px-Gavia_arctica1.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B7%D0%BE%D0%B1%D0%B0%D1%8F_%D0%B3%D0%B0%D0%B3%D0%B0%D1%80%D0%B0",
            kind: "Gavia arctica"
        },
        {
            _id: "5e773a6a1c551a28dc72c44d",
            index: 1,
            name: "Белоклювая гагара",
            description: "птица из рода гагар (Gavia)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gavia_adamsii.jpg/275px-Gavia_adamsii.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%BA%D0%BB%D1%8E%D0%B2%D0%B0%D1%8F_%D0%B3%D0%B0%D0%B3%D0%B0%D1%80%D0%B0",
            kind: "Gavia adamsii"
        },
        {
            _id: "5e773a66702ac41e342ade4b",
            index: 2,
            name: "Белоспинный альбатрос",
            description: "морская птица из семейства альбатросовых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Short_tailed_Albatross1.jpg/275px-Short_tailed_Albatross1.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D1%81%D0%BF%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B0%D0%BB%D1%8C%D0%B1%D0%B0%D1%82%D1%80%D0%BE%D1%81",
            kind: "Phoebastria albatrus"
        },
        {
            _id: "5e773a62bec30d1d8cbf2bcd",
            index: 3,
            name: "Пестролицый буревестник",
            description: "вид морских птиц из семейства буревестниковых в отряде буревестникообразных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Streaked_shearwater_sitting.jpg/275px-Streaked_shearwater_sitting.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%81%D1%82%D1%80%D0%BE%D0%BB%D0%B8%D1%86%D1%8B%D0%B9_%D0%B1%D1%83%D1%80%D0%B5%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D0%BA",
            kind: "Calonectris leucomelas"
        },
        {
            _id: "5e773a5d8023e12dc0445bd7",
            index: 4,
            name: "Вилохвостая качурка",
            description: "морская птица из семейства качурковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/OceanodromaMonorhisSmit.jpg/275px-OceanodromaMonorhisSmit.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D0%BB%D0%BE%D1%85%D0%B2%D0%BE%D1%81%D1%82%D0%B0%D1%8F_%D0%BA%D0%B0%D1%87%D1%83%D1%80%D0%BA%D0%B0",
            kind: "Oceanodroma monorhis"
        },
        {
            _id: "5e773d6916adce007c7ec028",
            index: 5,
            name: "Розовый пеликан",
            description: "крупная водоплавающая птица семейства пеликановых. Народное русское название — баба-бабура, баба-птица",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pelecanus_onocrotalus_IMG_8445_Palmitos_Park_gran_canaria.JPG/266px-Pelecanus_onocrotalus_IMG_8445_Palmitos_Park_gran_canaria.JPG",
            link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D0%B7%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D0%BD",
            kind: "Pelecanus onocrotalus"
        },
        {
            _id: "5e773d5c1c551a28dc72c44e",
            index: 6,
            name: "Кудрявый пеликан",
            description: "птица семейства пеликановых. Гнездящаяся перелётная птица",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/ComputerHotline_-_Pelecanus_crispus_%28by%29_%281%29.jpg/266px-ComputerHotline_-_Pelecanus_crispus_%28by%29_%281%29.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%B4%D1%80%D1%8F%D0%B2%D1%8B%D0%B9_%D0%BF%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D0%BD",
            kind: "Pelecanus crispus"
        },
        {
            _id: "5e773d57702ac41e342ade4c",
            index: 7,
            name: "Хохлатый баклан",
            description: "морская птица из семейства баклановых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Shag_at_Brownsea_Isalnd_%288501110738%29.jpg/275px-Shag_at_Brownsea_Isalnd_%288501110738%29.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D1%85%D0%BB%D0%B0%D1%82%D1%8B%D0%B9_%D0%B1%D0%B0%D0%BA%D0%BB%D0%B0%D0%BD",
            kind: "Phalacrocorax aristotelis"
        },
        {
            _id: "5e773d52bec30d1d8cbf2bce",
            index: 8,
            name: "Малый баклан",
            description: "птица из семейства баклановых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Pygmy_cormorant_-_Aammiq_Wetland.jpg/275px-Pygmy_cormorant_-_Aammiq_Wetland.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D1%8B%D0%B9_%D0%B1%D0%B0%D0%BA%D0%BB%D0%B0%D0%BD",
            kind: "Phalacrocorax pygmeus"
        },
        {
            _id: "5e773d4d8023e12dc0445bd8",
            index: 9,
            name: "Египетская цапля",
            description: "широко распространённая и наиболее многочисленная птица из семейства цаплевых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cattle_Egret.jpg/187px-Cattle_Egret.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%95%D0%B3%D0%B8%D0%BF%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F_%D1%86%D0%B0%D0%BF%D0%BB%D1%8F",
            kind: "Bubulcus ibis"
        },
        {
            _id: "5e773db716adce007c7ec029",
            index: 10,
            name: "Средняя белая цапля",
            description: "вид птиц семейства цаплевых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Intermediate_Egret_%28Mesophoyx_intermedia%29_W_IMG_6625.jpg/275px-Intermediate_Egret_%28Mesophoyx_intermedia%29_W_IMG_6625.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D1%8F%D1%8F_%D0%B1%D0%B5%D0%BB%D0%B0%D1%8F_%D1%86%D0%B0%D0%BF%D0%BB%D1%8F",
            kind: "Ardea intermedia"
        },
        {
            _id: "5e773db21c551a28dc72c44f",
            index: 11,
            name: "Желтоклювая цапля",
            description: "вымирающий вид птиц семейства цаплевых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Egretta_eulophotes_-_Laem_Pak_Bia.jpg/275px-Egretta_eulophotes_-_Laem_Pak_Bia.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%96%D0%B5%D0%BB%D1%82%D0%BE%D0%BA%D0%BB%D1%8E%D0%B2%D0%B0%D1%8F_%D1%86%D0%B0%D0%BF%D0%BB%D1%8F",
            kind: "Egretta eulophote"
        },
        {
            _id: "5e773dae702ac41e342ade4d",
            index: 12,
            name: "Обыкновенная колпица",
            description: "болотная птица семейства ибисовых, подсемейства колпицы",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Loeffler.jpg/275px-Loeffler.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D0%BB%D0%BF%D0%B8%D1%86%D0%B0",
            kind: "Platalea leucorodia"
        },
        {
            _id: "5e773daabec30d1d8cbf2bcf",
            index: 13,
            name: "Каравайка",
            description: "широко распространённая птица из семейства ибисовых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Plegadis_falcinellus_Syracuse.jpg/275px-Plegadis_falcinellus_Syracuse.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D0%B2%D0%B0%D0%B9%D0%BA%D0%B0",
            kind: "Plegadis falcinellus"
        },
        {
            _id: "5e773da68023e12dc0445bd9",
            index: 14,
            name: "Красноногий ибис",
            description: "птица из семейства ибисовых отряда аистообразных. Вид выделяется в монотипный род Красноногие ибисы (Nipponia)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Nipponia_nippon.jpg/275px-Nipponia_nippon.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BD%D0%BE%D0%B3%D0%B8%D0%B9_%D0%B8%D0%B1%D0%B8%D1%81",
            kind: "Nipponia nippon"
        },
        {
            _id: "5e773e1116adce007c7ec02a",
            index: 15,
            name: "Дальневосточный аист",
            description: "птица из семейства аистовые, родственный белому аисту вид",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Kounotori_06f4471sv.jpg/275px-Kounotori_06f4471sv.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BB%D1%8C%D0%BD%D0%B5%D0%B2%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D0%B0%D0%B8%D1%81%D1%82",
            kind: "Ciconia boyciana"
        },
        {
            _id: "5e773e0c1c551a28dc72c450",
            index: 16,
            name: "Чёрный аист",
            description: "птица из семейства Аистовые",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Wildpark_Bad_Mergentheim._Schwarzstorch.jpg/275px-Wildpark_Bad_Mergentheim._Schwarzstorch.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%B0%D0%B8%D1%81%D1%82",
            kind: "Ciconia nigra"
        },
        {
            _id: "5e773e07702ac41e342ade4e",
            index: 17,
            name: "Обыкновенный фламинго",
            description: "птица из отряда фламингообразных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Bristol.zoo.greater.flamingo.arp.jpg/275px-Bristol.zoo.greater.flamingo.arp.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%84%D0%BB%D0%B0%D0%BC%D0%B8%D0%BD%D0%B3%D0%BE",
            kind: "Phoenicopterus roseus"
        },
        {
            _id: "5e773e03bec30d1d8cbf2bd0",
            index: 18,
            name: "Канадская казарка",
            description: "водоплавающая птица из семейства утиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Canada_goose_flight_cropped_and_NR.jpg/275px-Canada_goose_flight_cropped_and_NR.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D0%B0%D0%B7%D0%B0%D1%80%D0%BA%D0%B0",
            kind: "Branta canadensis"
        },
        {
            _id: "5e773dff8023e12dc0445bda",
            index: 19,
            name: "Чёрная казарка",
            description: "водоплавающая птица семейства утиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Brent-Goose.jpg/275px-Brent-Goose.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A7%D1%91%D1%80%D0%BD%D0%B0%D1%8F_%D0%BA%D0%B0%D0%B7%D0%B0%D1%80%D0%BA%D0%B0",
            kind: "Branta bernicla"
        },
        {
            _id: "5e773e6f16adce007c7ec02c",
            index: 20,
            name: "Американская казарка",
            description: "подвид чёрной казарки из подсемейства гусиных семейства утиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Black.brant.slimbridge.march2007.arp.jpg/275px-Black.brant.slimbridge.march2007.arp.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D0%B0%D0%B7%D0%B0%D1%80%D0%BA%D0%B0",
            kind: "Branta bernicla nigricans"
        },
        {
            _id: "5e773e631c551a28dc72c451",
            index: 21,
            name: "Краснозобая казарка",
            description: "водоплавающая птица из семейства утиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Chester_zoo_red_breasted_goose.jpg/275px-Chester_zoo_red_breasted_goose.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B7%D0%BE%D0%B1%D0%B0%D1%8F_%D0%BA%D0%B0%D0%B7%D0%B0%D1%80%D0%BA%D0%B0",
            kind: "Branta ruficollis"
        },
        {
            _id: "5e773e5f702ac41e342ade4f",
            index: 22,
            name: "Пискулька",
            description: "птица семейства утиных, мелкий гусь. Название своё получила за писк, издаваемый в полёте",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Anser_erythropus.jpg/275px-Anser_erythropus.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B8%D1%81%D0%BA%D1%83%D0%BB%D1%8C%D0%BA%D0%B0",
            kind: "Anser erythropus"
        },
        {
            _id: "5e773e5abec30d1d8cbf2bd1",
            index: 23,
            name: "Гусь-белошей",
            description: "птица из семейства утиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Emperor.goose.arp.750pix.jpg/275px-Emperor.goose.arp.750pix.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%93%D1%83%D1%81%D1%8C-%D0%B1%D0%B5%D0%BB%D0%BE%D1%88%D0%B5%D0%B9",
            kind: "Anser canagicus"
        },
        {
            _id: "5e773e568023e12dc0445bdb",
            index: 24,
            name: "Горный гусь",
            description: "вид птиц из семейства утиных (Anatidae). Перелетная птица",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bar-headed_Goose_-_St_James%27s_Park%2C_London_-_Nov_2006.jpg/275px-Bar-headed_Goose_-_St_James%27s_Park%2C_London_-_Nov_2006.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BD%D1%8B%D0%B9_%D0%B3%D1%83%D1%81%D1%8C",
            kind: "Anser indicus"
        },
        {
            _id: "5e773f1316adce007c7ec02d",
            index: 25,
            name: "Сухонос",
            description: "водоплавающая птица семейства утиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Swan_goose_arp.jpg/275px-Swan_goose_arp.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D1%85%D0%BE%D0%BD%D0%BE%D1%81",
            kind: "Anser cygnoides"
        },
        {
            _id: "5e773f0e1c551a28dc72c452",
            index: 26,
            name: "Малый лебедь",
            description: "подвид американского лебедя[3]. Может рассматриваться самостоятельным видом Cygnus bewickii",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bewicks.swan.sideon.arp.jpg/275px-Bewicks.swan.sideon.arp.jpg",
            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bewicks.swan.sideon.arp.jpg/275px-Bewicks.swan.sideon.arp.jpg",
            kind: "Cygnus columbianus bewickii"
        },
        {
            _id: "5e773f0a702ac41e342ade50",
            index: 27,
            name: "Американский лебедь",
            description: "небольшого размера лебедь, распространённый в тундровой зоне северного полушария",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cygnus_bewickii_01.jpg/275px-Cygnus_bewickii_01.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%BB%D0%B5%D0%B1%D0%B5%D0%B4%D1%8C",
            kind: "Cygnus columbianus"
        },
        {
            _id: "5e773f05bec30d1d8cbf2bd2",
            index: 28,
            name: "Хохлатая пеганка",
            description: "птица из семейства утиных (Anatidae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/HybridDuckSmit.jpg/275px-HybridDuckSmit.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D1%85%D0%BB%D0%B0%D1%82%D0%B0%D1%8F_%D0%BF%D0%B5%D0%B3%D0%B0%D0%BD%D0%BA%D0%B0",
            kind: "Tadorna cristata"
        },
        {
            _id: "5e773eff8023e12dc0445bdc",
            index: 29,
            name: "Чирок-клоктун",
            description: "вид птиц из семейства утиных, единственный в роде Sibirionetta",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Anas_formosa_%28male%29.jpg/275px-Anas_formosa_%28male%29.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%80%D0%BE%D0%BA-%D0%BA%D0%BB%D0%BE%D0%BA%D1%82%D1%83%D0%BD",
            kind: "Sibirionetta formosa"
        },
        {
            _id: "5e773f7416adce007c7ec02e",
            index: 30,
            name: "Мандаринка (птица)",
            description: "небольшая птица рода лесных уток семейства утиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Aix_galericulata_%28couple%29.jpg/275px-Aix_galericulata_%28couple%29.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D0%B8%D0%BD%D0%BA%D0%B0_(%D0%BF%D1%82%D0%B8%D1%86%D0%B0)",
            kind: "Aix galericulata"
        },
        {
            _id: "5e773f6f1c551a28dc72c453",
            index: 31,
            name: "Мраморный чирок",
            description: "птица семейства утиных (Anatidae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Marbled.teal.arp.600pix.jpg/275px-Marbled.teal.arp.600pix.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9C%D1%80%D0%B0%D0%BC%D0%BE%D1%80%D0%BD%D1%8B%D0%B9_%D1%87%D0%B8%D1%80%D0%BE%D0%BA",
            kind: "Marmaronetta angustirostris"
        },
        {
            _id: "5e773f6a702ac41e342ade51",
            index: 32,
            name: "Нырок Бэра",
            description: "редкий вид птиц из семейства утиных. Назван в честь натуралиста Карла Эрнста фон Бэра",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Baer%27s_Pochard_RWD4.jpg/275px-Baer%27s_Pochard_RWD4.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9D%D1%8B%D1%80%D0%BE%D0%BA_%D0%91%D1%8D%D1%80%D0%B0",
            kind: "Aythya baeri"
        },
        {
            _id: "5e773f65bec30d1d8cbf2bd3",
            index: 33,
            name: "Белоглазый нырок",
            description: "птица семейства утиных. Своё название нырок получил за цвет глаз — радужная оболочка глаз у селезней желтовато-белая (издали кажется белой)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Aythya_nyroca_1.jpg/275px-Aythya_nyroca_1.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%B3%D0%BB%D0%B0%D0%B7%D1%8B%D0%B9_%D0%BD%D1%8B%D1%80%D0%BE%D0%BA",
            kind: "Aythya nyroca"
        },
        {
            _id: "5e773f608023e12dc0445bdd",
            index: 34,
            name: "Савка",
            description: "птица семейства утиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wei%C3%9Fkopfruderente_Oxyura_leucocephala_050324_Ausschnitt.jpg/275px-Wei%C3%9Fkopfruderente_Oxyura_leucocephala_050324_Ausschnitt.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B2%D0%BA%D0%B0",
            kind: "Oxyura leucocephala"
        },
        {
            _id: "5e773fdc16adce007c7ec02f",
            index: 35,
            name: "Чешуйчатый крохаль",
            description: "птица семейства утиные",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/253_Schuppens%C3%A4ger_2009123%C3%9F.JPG/275px-253_Schuppens%C3%A4ger_2009123%C3%9F.JPG",
            link: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%88%D1%83%D0%B9%D1%87%D0%B0%D1%82%D1%8B%D0%B9_%D0%BA%D1%80%D0%BE%D1%85%D0%B0%D0%BB%D1%8C",
            kind: "Mergus squamatus"
        },
        {
            _id: "5e773fd81c551a28dc72c454",
            index: 36,
            name: "Скопа",
            description: "хищная птица, распространённая в обоих полушариях, единственный представитель семейства скопиных (Pandionidae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Osprey_mg_9605.jpg/275px-Osprey_mg_9605.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D0%BE%D0%BF%D0%B0",
            kind: "Pandion haliaetus"
        },
        {
            _id: "5e773fd3702ac41e342ade52",
            index: 37,
            name: "Красный коршун",
            description: "среднего размера хищная птица из семейства ястребиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Milvus_milvus_R%28ThKraft%29.jpg/275px-Milvus_milvus_R%28ThKraft%29.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D1%80%D1%88%D1%83%D0%BD",
            kind: "Milvus milvus"
        },
        {
            _id: "5e773fcfbec30d1d8cbf2bd4",
            index: 38,
            name: "Степной лунь",
            description: "вид мигрирующих птиц семейства луневых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Circus_macrourus.jpg/275px-Circus_macrourus.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D0%BF%D0%BD%D0%BE%D0%B9_%D0%BB%D1%83%D0%BD%D1%8C",
            kind: "Circus macrourus"
        },
        {
            _id: "5e773fc98023e12dc0445bde",
            index: 39,
            name: "Европейский тювик",
            description: "вид хищных мигрирующих птиц из семейства ястребиных (Accipitridae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Accipiter_brevipes%2C_male.jpg/275px-Accipiter_brevipes%2C_male.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D1%8E%D0%B2%D0%B8%D0%BA",
            kind: "Accipiter brevipes"
        },
        {
            _id: "5e773fc98023e12dc0445bde",
            index: 40,
            name: "Курганник",
            description: "хищная птица из рода настоящих канюков семейства ястребиных (Accipitridae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Adlerbussard.jpg/275px-Adlerbussard.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D0%B3%D0%B0%D0%BD%D0%BD%D0%B8%D0%BA",
            kind: "Buteo rufinus"
        },
        {
            _id: "5e7740381c551a28dc72c455",
            index: 41,
            name: "Ястребиный канюк",
            description: "хищная птица семейства ястребиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Butastur_indicus.jpg/275px-Butastur_indicus.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%AF%D1%81%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D0%BD%D1%8B%D0%B9_%D0%BA%D0%B0%D0%BD%D1%8E%D0%BA",
            kind: "Butastur indicus"
        },
        {
            _id: "5e774033702ac41e342ade53",
            index: 42,
            name: "Змееяд",
            description: "хищная птица семейства ястребиных, отряд ястребообразные, подсемейства змееяды",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Circaetus_gallicus_in_Kiev_Zoo.jpg/275px-Circaetus_gallicus_in_Kiev_Zoo.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%97%D0%BC%D0%B5%D0%B5%D1%8F%D0%B4",
            kind: "Circaetus gallicus"
        },
        {
            _id: "5e77402fbec30d1d8cbf2bd5",
            index: 43,
            name: "Горный хохлатый орёл",
            description: "хищный вид птиц из семейства ястребиных и подсемейства канюков",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hawkeagle.jpg/274px-Hawkeagle.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BD%D1%8B%D0%B9_%D1%85%D0%BE%D1%85%D0%BB%D0%B0%D1%82%D1%8B%D0%B9_%D0%BE%D1%80%D1%91%D0%BB",
            kind: "Nisaetus nipalensis"
        },
        {
            _id: "5e77402a8023e12dc0445bdf",
            index: 44,
            name: "Степной орёл",
            description: "хищная птица семейства ястребиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Aquila_nipalensis_4.jpg/275px-Aquila_nipalensis_4.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D0%BF%D0%BD%D0%BE%D0%B9_%D0%BE%D1%80%D1%91%D0%BB",
            kind: "Aquila nipalensis"
        },
        {
            _id: "5e7740b216adce007c7ec031",
            index: 45,
            name: "Большой подорлик",
            description: "птица семейства ястребиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Greater_Spotted_Eagle.jpeg/260px-Greater_Spotted_Eagle.jpeg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%BF%D0%BE%D0%B4%D0%BE%D1%80%D0%BB%D0%B8%D0%BA",
            kind: "Clanga clanga"
        },
        {
            _id: "5e7740ad1c551a28dc72c456",
            index: 46,
            name: "Малый подорлик",
            description: "большая восточноевропейская хищная птица из семейства ястребиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Aquila_pomarina_orlik_krzykliwyAM.jpg/275px-Aquila_pomarina_orlik_krzykliwyAM.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D1%8B%D0%B9_%D0%BF%D0%BE%D0%B4%D0%BE%D1%80%D0%BB%D0%B8%D0%BA",
            kind: "Clanga pomarina"
        },
        {
            _id: "5e7740a9702ac41e342ade54",
            index: 47,
            name: "Могильник (птица)",
            description: "орёл, крупная хищная птица семейства ястребиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kaiseradler_Aquila_heliaca_4_amk.jpg/275px-Kaiseradler_Aquila_heliaca_4_amk.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA_(%D0%BF%D1%82%D0%B8%D1%86%D0%B0)",
            kind: "Aquila heliaca"
        },
        {
            _id: "5e7740a5bec30d1d8cbf2bd6",
            index: 48,
            name: "Беркут",
            description: "одна из наиболее известных хищных птиц семейства ястребиных, самый крупный орёл",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%D0%91%D0%B5%D1%80%D0%BA%D1%83%D1%82_%28Aquila_chrysaetos%29.jpg/275px-%D0%91%D0%B5%D1%80%D0%BA%D1%83%D1%82_%28Aquila_chrysaetos%29.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BA%D1%83%D1%82",
            kind: "Aquila chrysaetos"
        },
        {
            _id: "5e7740a18023e12dc0445be0",
            index: 49,
            name: "Орлан-долгохвост",
            description: "вид крупных мигрирующих хищных птиц из семейства ястребиных (Accipitridae). Питаются пресноводной рыбой",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pallas%27s_Fish_Eagle_%28_Haliaeetus_leucoryphus%29_2.jpg/275px-Pallas%27s_Fish_Eagle_%28_Haliaeetus_leucoryphus%29_2.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D0%BB%D0%B0%D0%BD-%D0%B4%D0%BE%D0%BB%D0%B3%D0%BE%D1%85%D0%B2%D0%BE%D1%81%D1%82",
            kind: "Haliaeetus leucoryphus"
        },
        {
            _id: "5e7740e28023e12dc0445be1",
            index: 50,
            name: "Орлан-белохвост",
            description: "хищная птица из семейства ястребиных (Accipitridae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Haliaeetus_albicilla_%28Svolv%C3%A6r%2C_2012%29.jpg/275px-Haliaeetus_albicilla_%28Svolv%C3%A6r%2C_2012%29.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D0%BB%D0%B0%D0%BD-%D0%B1%D0%B5%D0%BB%D0%BE%D1%85%D0%B2%D0%BE%D1%81%D1%82",
            kind: "Haliaeetus albicilla"
        },
        {
            _id: "5e77425616adce007c7ec032",
            index: 51,
            name: "Белоголовый орлан",
            description: "хищная птица из семейства ястребиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2010-bald-eagle-kodiak.jpg/275px-2010-bald-eagle-kodiak.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BE%D1%80%D0%BB%D0%B0%D0%BD",
            kind: "Haliaéetus leucocéphalus"
        },
        {
            _id: "5e7742511c551a28dc72c457",
            index: 52,
            name: "Белоплечий орлан",
            description: "очень крупная хищная птица семейства ястребиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Haliaeetus_pelagicus_-Heidelberg_Zoo%2C_Germany-8a.jpg/265px-Haliaeetus_pelagicus_-Heidelberg_Zoo%2C_Germany-8a.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%BF%D0%BB%D0%B5%D1%87%D0%B8%D0%B9_%D0%BE%D1%80%D0%BB%D0%B0%D0%BD",
            kind: "Haliaeetus pelagicus"
        },
        {
            _id: "5e77424d702ac41e342ade55",
            index: 54,
            name: "Бородач",
            description: "птица из семейства ястребиных, единственный вид в роде бородачи (Gypaetus)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bartgeier_Gypaetus_barbatus_front_Richard_Bartz.jpg/273px-Bartgeier_Gypaetus_barbatus_front_Richard_Bartz.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%D1%87",
            kind: "Gypaetus barbatus"
        },
        {
            _id: "5e774248bec30d1d8cbf2bd7",
            index: 54,
            name: "Обыкновенный стервятник",
            description: "представитель подсемейства бородачей (Gypaetinae) семейства ястребиных (Accipitridae). Единственный представитель рода Стервятники (Neophron)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Egyptian_vulture.jpg/275px-Egyptian_vulture.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D1%82%D0%B5%D1%80%D0%B2%D1%8F%D1%82%D0%BD%D0%B8%D0%BA",
            kind: "Neophron percnopterus"
        },
        {
            _id: "5e7742438023e12dc0445be2",
            index: 55,
            name: "Чёрный гриф",
            description: "птица семейства ястребиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/%D0%A7%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%B3%D1%80%D0%B8%D1%84.jpg/275px-%D0%A7%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%B3%D1%80%D0%B8%D1%84.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%B3%D1%80%D0%B8%D1%84",
            kind: "Aegypius"
        },
        {
            _id: "5e7742a016adce007c7ec033",
            index: 56,
            name: "Белоголовый сип",
            description: "крупная хищная птица семейства ястребиных, падальщик",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Eagle_beak_sideview_A.jpg/275px-Eagle_beak_sideview_A.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81%D0%B8%D0%BF",
            kind: "Gyps fulvus"
        },
        {
            _id: "5e77429c1c551a28dc72c458",
            index: 57,
            name: "Кречет",
            description: "птица из отряда соколообразных семейства соколиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Falco_rusticolus_white_cropped.jpg/275px-Falco_rusticolus_white_cropped.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B5%D1%87%D0%B5%D1%82",
            kind: "Falco rusticolus"
        },
        {
            _id: "5e774298702ac41e342ade56",
            index: 58,
            name: "Балобан",
            description: "вид хищных птиц семейства соколиных. В России и Казахстане — редкий гнездящийся, кочующий, в некоторые годы частично оседлый вид",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Falco_cherrug_1_%28Bohu%C5%A1_%C4%8C%C3%AD%C4%8Del%29.jpg/275px-Falco_cherrug_1_%28Bohu%C5%A1_%C4%8C%C3%AD%C4%8Del%29.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%BE%D0%B1%D0%B0%D0%BD",
            kind: "Falco cherrug"
        },
        {
            _id: "5e774294bec30d1d8cbf2bd8",
            index: 59,
            name: "Сапсан",
            description: "хищная птица из семейства соколиных, распространённая на всех континентах, кроме Антарктиды",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Falco_peregrinus_-_01.jpg/275px-Falco_peregrinus_-_01.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BF%D1%81%D0%B0%D0%BD",
            kind: "Falco peregrinus"
        },
        {
            _id: "5e7742908023e12dc0445be3",
            index: 60,
            name: "Степная пустельга",
            description: "мелкая хищная птица семейства соколиных, близкая родственница обыкновенной пустельги",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Male_and_female_Lesser_Kestrels.jpg/275px-Male_and_female_Lesser_Kestrels.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D0%BF%D0%BD%D0%B0%D1%8F_%D0%BF%D1%83%D1%81%D1%82%D0%B5%D0%BB%D1%8C%D0%B3%D0%B0",
            kind: "Falco naumanni"
        },
        {
            _id: "5e7742ce8023e12dc0445be4",
            index: 61,
            name: "Белая куропатка",
            description: "птица подсемейства тетеревиных отряда курообразных. Обитатель тундры, тайги и лесов Северного полушария",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Willow_grouse_standing.jpg/275px-Willow_grouse_standing.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%B0%D1%8F_%D0%BA%D1%83%D1%80%D0%BE%D0%BF%D0%B0%D1%82%D0%BA%D0%B0",
            kind: "Lagopus lagopus"
        },
        {
            _id: "5e7742f016adce007c7ec034",
            index: 62,
            name: "Кавказский тетерев",
            description: "крупная птица семейства фазановых (Phasianidae). Научное название этот вид получил в честь польского натуралиста Людвика Млокосевича",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Tetras_du_caucase_jogo_0g.jpg/275px-Tetras_du_caucase_jogo_0g.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D0%B5%D1%82%D0%B5%D1%80%D0%B5%D0%B2",
            kind: "Lyrurus mlokosiewiczi"
        },
        {
            _id: "5e7742eb1c551a28dc72c459",
            index: 63,
            name: "Дикуша",
            description: "одна из редких и малоизученных птиц семейства тетеревиных. Находится на грани уничтожения",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Falcipennis_falcipennis_displaying.jpg/275px-Falcipennis_falcipennis_displaying.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%BA%D1%83%D1%88%D0%B0",
            kind: "Falcipennis falcipennis"
        },
        {
            _id: "5e7742e7702ac41e342ade57",
            index: 64,
            name: "Бородатая куропатка",
            description: "вид птиц семейства фазановых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/PerdixBarbataWolf.jpg/275px-PerdixBarbataWolf.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%D1%82%D0%B0%D1%8F_%D0%BA%D1%83%D1%80%D0%BE%D0%BF%D0%B0%D1%82%D0%BA%D0%B0",
            kind: "Perdix dauurica"
        },
        {
            _id: "5e7742de8023e12dc0445be5",
            index: 65,
            name: "Японский журавль",
            description: "птица семейства журавлей. Редкий вид, его общая численность оценивается в 1700—2000 особей. Находился под угрозой полного исчезновения, охраняется международным и национальными законодательствами",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mandschurenkranich.jpg/275px-Mandschurenkranich.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%AF%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B6%D1%83%D1%80%D0%B0%D0%B2%D0%BB%D1%8C",
            kind: "Grus japonensis"
        },
        {
            _id: "5e7742e3bec30d1d8cbf2bd9",
            index: 66,
            name: "Стерх",
            description: "вид журавлей, эндемик северных территорий России. Стерхи находятся под угрозой исчезновения",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Siberian_Crane_%28Grus_leucogeranus%29_%2820595154208%29.jpg/274px-Siberian_Crane_%28Grus_leucogeranus%29_%2820595154208%29.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D1%80%D1%85",
            kind: "Grus leucogeranus"
        },
        {
            _id: "5e77435916adce007c7ec035",
            index: 67,
            name: "Даурский журавль",
            description: "птица семейства журавлей. Редкий вид, его общая численность по оценкам орнитологов составляет 4900—5300 особей",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/White-naped_crane_arp.jpg/275px-White-naped_crane_arp.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D1%83%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D0%B6%D1%83%D1%80%D0%B0%D0%B2%D0%BB%D1%8C",
            kind: "Grus vipio"
        },
        {
            _id: "5e7743551c551a28dc72c45a",
            index: 68,
            name: "Чёрный журавль",
            description: "птица семейства журавлей, вид находящийся под угрозой исчезновения. Общая численность чёрных журавлей оценивается орнитологами в 9400—9600 особей",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Grus_monacha_Phila_Zoo.jpg/275px-Grus_monacha_Phila_Zoo.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%B6%D1%83%D1%80%D0%B0%D0%B2%D0%BB%D1%8C",
            kind: "Grus monacha"
        },
        {
            _id: "5e774351702ac41e342ade58",
            index: 69,
            name: "Журавль-красавка",
            description: "самый маленький и третий по численности (после канадского журавля) представитель семейства журавлиных в мире — его численность оценивается в 200—240 тысяч особей",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Jungfernkranich.jpg/275px-Jungfernkranich.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%96%D1%83%D1%80%D0%B0%D0%B2%D0%BB%D1%8C-%D0%BA%D1%80%D0%B0%D1%81%D0%B0%D0%B2%D0%BA%D0%B0",
            kind: "Anthropoides virgo"
        },
        {
            _id: "5e77434dbec30d1d8cbf2bda",
            index: 70,
            name: "Красноногий погоныш",
            description: "вид птиц из семейства пастушковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Ruddy-breasted_Crake_%28Porzana_fusca%29_in_Kolkata_I_IMG_2675.jpg/275px-Ruddy-breasted_Crake_%28Porzana_fusca%29_in_Kolkata_I_IMG_2675.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BD%D0%BE%D0%B3%D0%B8%D0%B9_%D0%BF%D0%BE%D0%B3%D0%BE%D0%BD%D1%8B%D1%88",
            kind: "Porzana fusca"
        },
        {
            _id: "5e7743488023e12dc0445be6",
            index: 71,
            name: "Белокрылый погоныш",
            description: "вид птиц из семейства пастушковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Coturnicops_exquisitus_Keulemans.jpg/275px-Coturnicops_exquisitus_Keulemans.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%BA%D1%80%D1%8B%D0%BB%D1%8B%D0%B9_%D0%BF%D0%BE%D0%B3%D0%BE%D0%BD%D1%8B%D1%88",
            kind: "Coturnicops exquisitus"
        },
        {
            _id: "5e7743a716adce007c7ec036",
            index: 72,
            name: "Рогатая камышница",
            description: "птица семейства пастушковых, единственный представитель из рода Gallicrex",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Water_Cock_%28Gallicrex_cinerea%29-_Immature_W_IMG_7331.jpg/275px-Water_Cock_%28Gallicrex_cinerea%29-_Immature_W_IMG_7331.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D0%B3%D0%B0%D1%82%D0%B0%D1%8F_%D0%BA%D0%B0%D0%BC%D1%8B%D1%88%D0%BD%D0%B8%D1%86%D0%B0",
            kind: "Gallicrex cinerea"
        },
        {
            _id: "5e7743a21c551a28dc72c45b",
            index: 73,
            name: "Султанка",
            description: "околоводная птица семейства пастушковых с ярким сине-голубым оперением",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Purpurhuhn.jpg/275px-Purpurhuhn.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%BB%D1%82%D0%B0%D0%BD%D0%BA%D0%B0",
            kind: "Porphyrio porphyrio"
        },
        {
            _id: "5e77439e702ac41e342ade59",
            index: 74,
            name: "Дрофа",
            description: "крупная птица семейства дрофиных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dabao.jpg/275px-Dabao.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%94%D1%80%D0%BE%D1%84%D0%B0",
            kind: "Otis tarda"
        },
        {
            _id: "5e77439bbec30d1d8cbf2bdb",
            index: 75,
            name: "Стрепет",
            description: "птица из семейства дрофиные",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Tetrax_tetrax_1921.jpg/275px-Tetrax_tetrax_1921.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%B5%D0%BF%D0%B5%D1%82",
            kind: "Tetrax tetrax"
        },
        {
            _id: "5e7743968023e12dc0445be7",
            index: 76,
            name: "Вихляй",
            description: "птица семейства дрофиных отряда дрофообразных. Своё название получил за характерную манеру бегать, кидаясь из стороны в сторону",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/MacQueens_Bustard_in_Greater_Rann_of_Kutch%2C_Gujarat%2C_India.jpg/275px-MacQueens_Bustard_in_Greater_Rann_of_Kutch%2C_Gujarat%2C_India.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%85%D0%BB%D1%8F%D0%B9",
            kind: "Chlamydotis undulata"
        },
        {
            _id: "5e7743fb16adce007c7ec037",
            index: 77,
            name: "Авдотка",
            description: "птица из семейства авдотковых. Занесена в Красную книгу России",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Occhione_Lazio_2015.jpg/275px-Occhione_Lazio_2015.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D0%B4%D0%BE%D1%82%D0%BA%D0%B0",
            kind: "Burhinus oedicnemus"
        },
        {
            _id: "5e7743f71c551a28dc72c45c",
            index: 78,
            name: "Золотистая ржанка",
            description: "вид птиц из семейства ржанковых (Charadriidae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Kapustarinta.jpg/275px-Kapustarinta.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%B8%D1%81%D1%82%D0%B0%D1%8F_%D1%80%D0%B6%D0%B0%D0%BD%D0%BA%D0%B0",
            kind: "Pluvialis apricaria"
        },
        {
            _id: "5e7743f3702ac41e342ade5a",
            index: 79,
            name: "Уссурийский зуёк",
            description: "птица рода зуйки (Charadrius) из семейства ржанковых (Charadriidae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Charadrius_placidus.jpg/275px-Charadrius_placidus.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D1%81%D1%83%D1%80%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%B7%D1%83%D1%91%D0%BA",
            kind: "Charadrius placidus"
        },
        {
            _id: "5e7743eebec30d1d8cbf2bdc",
            index: 80,
            name: "Каспийский зуёк",
            description: "вид птиц из семейства ржанковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Caspian_Plover_in_Koonthalulam_Tamilnadu%2C_India%2C_by_Dr._Tejinder_Singh_Rawal.jpg/275px-Caspian_Plover_in_Koonthalulam_Tamilnadu%2C_India%2C_by_Dr._Tejinder_Singh_Rawal.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%81%D0%BF%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%B7%D1%83%D1%91%D0%BA",
            kind: "Charadrius asiaticus"
        },
        {
            _id: "5e7743ea8023e12dc0445be8",
            index: 81,
            name: "Кречётка",
            description: "вид птиц из семейства ржанковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/SociablePlover.jpg/275px-SociablePlover.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B5%D1%87%D1%91%D1%82%D0%BA%D0%B0",
            kind: "Vanellus gregarius"
        },
        {
            _id: "5e77444916adce007c7ec038",
            index: 82,
            name: "Ходулочник",
            description: "птица семейства шилоклювковых (Recurvirostridae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Himantopus_himantopus.jpg/275px-Himantopus_himantopus.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D0%B4%D1%83%D0%BB%D0%BE%D1%87%D0%BD%D0%B8%D0%BA",
            kind: "Himantopus himantopus"
        },
        {
            _id: "5e7744441c551a28dc72c45d",
            index: 83,
            name: "Шилоклювка",
            description: "чёрно-белый крупный кулик с изогнутым вверх клювом из семейства шилоклювковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Recurvirostra_avosetta_departure.jpg/275px-Recurvirostra_avosetta_departure.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D0%BB%D0%BE%D0%BA%D0%BB%D1%8E%D0%B2%D0%BA%D0%B0",
            kind: "Recurvirostra avosetta"
        },
        {
            _id: "5e774440702ac41e342ade5b",
            index: 84,
            name: "Кулик-сорока",
            description: "крупный кулик с длинным оранжевым клювом и чёрно-белым контрастным оперением. Наиболее распространённый вид небольшого семейства Haematopodidae",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Haematopus_ostralegus_He.jpg/275px-Haematopus_ostralegus_He.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%BB%D0%B8%D0%BA-%D1%81%D0%BE%D1%80%D0%BE%D0%BA%D0%B0",
            kind: "Haematopus ostralegus"
        },
        {
            _id: "5e77443cbec30d1d8cbf2bdd",
            index: 85,
            name: "Охотский улит",
            description: "вид птиц семейства бекасовых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Spotted_Greenshank.jpg/275px-Spotted_Greenshank.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9E%D1%85%D0%BE%D1%82%D1%81%D0%BA%D0%B8%D0%B9_%D1%83%D0%BB%D0%B8%D1%82",
            kind: "Tringa guttifer"
        },
        {
            _id: "5e7744378023e12dc0445be9",
            index: 86,
            name: "Лопатень",
            description: "вид птиц из семейства бекасовых, эндемик северо-востока России",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Eurynorhynchus_pygmeus_-_Pak_Thale.jpg/275px-Eurynorhynchus_pygmeus_-_Pak_Thale.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BF%D0%B0%D1%82%D0%B5%D0%BD%D1%8C",
            kind: "Calidris pygmeus"
        },
        {
            _id: "5e77448c8023e12dc0445bea",
            index: 87,
            name: "Чернозобик",
            description: "вид птиц из семейства бекасовых (Scolopacidae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Calidris_alpina03.jpg/275px-Calidris_alpina03.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B7%D0%BE%D0%B1%D0%B8%D0%BA",
            kind: "Calidris alpina"
        },
        {
            _id: "5e774487bec30d1d8cbf2bde",
            index: 88,
            name: "Берингийский песочник",
            description: "вид птиц из семейства бекасовых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Calidris_ptilocnemis1.jpg/275px-Calidris_ptilocnemis1.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%B8%D0%BD%D0%B3%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%B5%D1%81%D0%BE%D1%87%D0%BD%D0%B8%D0%BA",
            kind: "Calidris ptilocnemis"
        },
        {
            _id: "5e774483702ac41e342ade5c",
            index: 89,
            name: "Канадский песочник",
            description: "мелкая птица семейства бекасовых, единственный представитель рода Tryngites",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Tryngites_subruficollis_cropped.jpg/275px-Tryngites_subruficollis_cropped.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%B5%D1%81%D0%BE%D1%87%D0%BD%D0%B8%D0%BA",
            kind: "Tryngites subruficollis"
        },
        {
            _id: "5e77447f1c551a28dc72c45e",
            index: 90,
            name: "Японский бекас",
            description: "редкий вид бекасов, населяющих юг дальневосточного региона РФ. На территории России охраняется как редкий вид",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Latham%27s_snipe.jpg/275px-Latham%27s_snipe.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%AF%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B1%D0%B5%D0%BA%D0%B0%D1%81",
            kind: "Gallinago hardwickii"
        },
        {
            _id: "5e77447a16adce007c7ec039",
            index: 91,
            name: "Тонкоклювый кроншнеп",
            description: "вид птиц из семейства бекасовых (Scolopacidae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Numenius_tenuirostris_Gr%C3%B6nvold.jpg/275px-Numenius_tenuirostris_Gr%C3%B6nvold.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D0%BD%D0%BA%D0%BE%D0%BA%D0%BB%D1%8E%D0%B2%D1%8B%D0%B9_%D0%BA%D1%80%D0%BE%D0%BD%D1%88%D0%BD%D0%B5%D0%BF",
            kind: "Numenius tenuirostris"
        },
        {
            _id: "5e7744dd8023e12dc0445beb",
            index: 92,
            name: "Большой кроншнеп",
            description: "вид птиц из семейства бекасовых (Scolopacidae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Numenius_arquata_amk.jpg/275px-Numenius_arquata_amk.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%BA%D1%80%D0%BE%D0%BD%D1%88%D0%BD%D0%B5%D0%BF",
            kind: "Numenius arquata"
        },
        {
            _id: "5e7744d9bec30d1d8cbf2bdf",
            index: 93,
            name: "Дальневосточный кроншнеп",
            description: "вид птиц из семейства бекасовых (Scolopacidae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Eastern_curlew_inskip.JPG/275px-Eastern_curlew_inskip.JPG",
            link: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BB%D1%8C%D0%BD%D0%B5%D0%B2%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D0%BA%D1%80%D0%BE%D0%BD%D1%88%D0%BD%D0%B5%D0%BF",
            kind: "Numenius madagascariensis"
        },
        {
            _id: "5e7744d5702ac41e342ade5d",
            index: 94,
            name: "Азиатский бекасовидный веретенник",
            description: "редкий представитель семейства бекасовых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Asian_Dowitcher_6436.jpg/275px-Asian_Dowitcher_6436.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%90%D0%B7%D0%B8%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9_%D0%B1%D0%B5%D0%BA%D0%B0%D1%81%D0%BE%D0%B2%D0%B8%D0%B4%D0%BD%D1%8B%D0%B9_%D0%B2%D0%B5%D1%80%D0%B5%D1%82%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA",
            kind: "Limnodromus semipalmatus"
        },
        {
            _id: "5e7744d11c551a28dc72c45f",
            index: 95,
            name: "Степная тиркушка",
            description: "птица семейства тиркушковых (Glareolidae). Видовой эпитет дан в честь зоолога Александра фон Нордмана (1803—1866)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tyrkyshka.jpg/275px-Tyrkyshka.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D0%BF%D0%BD%D0%B0%D1%8F_%D1%82%D0%B8%D1%80%D0%BA%D1%83%D1%88%D0%BA%D0%B0",
            kind: "Glareola nordmanni"
        },
        {
            _id: "5e7744cd16adce007c7ec03a",
            index: 96,
            name: "Черноголовый хохотун",
            description: "крупный вид птиц из рода Ichthyaetus семейства чайковых (Laridae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ichthyaetus_ichthyaetus_Kadalundi_1.jpg/275px-Ichthyaetus_ichthyaetus_Kadalundi_1.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D1%8B%D0%B9_%D1%85%D0%BE%D1%85%D0%BE%D1%82%D1%83%D0%BD",
            kind: "Larus ichthyaetus"
        },
        {
            _id: "5e7745318023e12dc0445bec",
            index: 97,
            name: "Реликтовая чайка",
            description: "вид птиц из рода Ichthyaetus семейства чайковых (Laridae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Relict_Gull.jpg/275px-Relict_Gull.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%BB%D0%B8%D0%BA%D1%82%D0%BE%D0%B2%D0%B0%D1%8F_%D1%87%D0%B0%D0%B9%D0%BA%D0%B0",
            kind: "Ichthyaetus relictus"
        },
        {
            _id: "5e77452ebec30d1d8cbf2be0",
            index: 98,
            name: "Китайская чайка",
            description: "вид птиц из семейства чайковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Saunders%27s_Gull_-_Hong_Kong_2.jpg/275px-Saunders%27s_Gull_-_Hong_Kong_2.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D1%87%D0%B0%D0%B9%D0%BA%D0%B0",
            kind: "Chroicocephalus saundersi"
        },
        {
            _id: "5e774529702ac41e342ade5e",
            index: 99,
            name: "Красноногая моевка",
            description: "вид птиц из семейства чайковых (Laridae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Rlegkittiwake6.jpg/275px-Rlegkittiwake6.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BD%D0%BE%D0%B3%D0%B0%D1%8F_%D0%BC%D0%BE%D0%B5%D0%B2%D0%BA%D0%B0",
            kind: "Rissa brevirostris"
        },
        {
            _id: "5e7745241c551a28dc72c460",
            index: 100,
            name: "Белая чайка",
            description: "вид небольших приполярных птиц из семейства чайковых (Laridae), единственный в роде белых чаек (Pagophila)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Ivory_Gull.jpg/275px-Ivory_Gull.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%B0%D1%8F_%D1%87%D0%B0%D0%B9%D0%BA%D0%B0",
            kind: "Pagophila eburnea"
        },
        {
            _id: "5e77452016adce007c7ec03b",
            index: 101,
            name: "Чеграва",
            description: "вид крупных птиц из семейства чайковых. Единственный представитель рода чеграв (Hydroprogne)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Sterna-caspia-010.jpg/275px-Sterna-caspia-010.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%B3%D1%80%D0%B0%D0%B2%D0%B0",
            kind: "Hydroprogne caspia"
        },
        {
            _id: "5e7745928023e12dc0445bed",
            index: 102,
            name: "Алеутская крачка",
            description: "вид морских птиц из семейства чайковых (Laridae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Aleutian_Tern.jpg/275px-Aleutian_Tern.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D1%83%D1%82%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D1%80%D0%B0%D1%87%D0%BA%D0%B0",
            kind: "Onychoprion aleuticus"
        },
        {
            _id: "5e7745861c551a28dc72c461",
            index: 103,
            name: "Малая крачка",
            description: "вид птиц из семейства чайковых (Laridae), одни из самых мелких в семействе",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sterna_albifrons.jpg/275px-Sterna_albifrons.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D0%B0%D1%8F_%D0%BA%D1%80%D0%B0%D1%87%D0%BA%D0%B0",
            kind: "Sternula albifrons"
        },
        {
            _id: "5e77458116adce007c7ec03c",
            index: 104,
            name: "Длинноклювый пыжик",
            description: "небольшая птица семейства чистиковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/WO_2087_Marbled_Murrelet.jpg/275px-WO_2087_Marbled_Murrelet.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%94%D0%BB%D0%B8%D0%BD%D0%BD%D0%BE%D0%BA%D0%BB%D1%8E%D0%B2%D1%8B%D0%B9_%D0%BF%D1%8B%D0%B6%D0%B8%D0%BA",
            kind: "Brachyramphus marmoratus"
        },
        {
            _id: "5e774589702ac41e342ade5f",
            index: 105,
            name: "Короткоклювый пыжик",
            description: "небольшая птица семейства чистиковых (Alcidae), обитающая в северной части Тихого океана",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Kittlitzs_murrelet.jpg/275px-Kittlitzs_murrelet.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D0%BA%D0%BB%D1%8E%D0%B2%D1%8B%D0%B9_%D0%BF%D1%8B%D0%B6%D0%B8%D0%BA",
            kind: "Brachyramphus brevirostris"
        },
        {
            _id: "5e77458ebec30d1d8cbf2be1",
            index: 106,
            name: "Хохлатый старик",
            description: "небольшая птица семейства чистиковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Synthliboramphus_wumizusume_1838.jpg/273px-Synthliboramphus_wumizusume_1838.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D1%85%D0%BB%D0%B0%D1%82%D1%8B%D0%B9_%D1%81%D1%82%D0%B0%D1%80%D0%B8%D0%BA",
            kind: "Synthliboramphus wumizusume"
        },
        {
            _id: "5e77469616adce007c7ec03d",
            index: 107,
            name: "Филин",
            description: "хищная птица из семейства совиных, один из наиболее крупных представителей отряда совообразных",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bubo_bubo_winter_1.jpg/275px-Bubo_bubo_winter_1.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D0%B8%D0%BD",
            kind: "Bubo bubo"
        },
        {
            _id: "5e7746921c551a28dc72c462",
            index: 108,
            name: "Рыбный филин",
            description: "вид, находящийся на грани исчезновения. Называется также дальневосточным рыбным филином",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Blakiston%60s_fish_owl1.jpg/275px-Blakiston%60s_fish_owl1.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8B%D0%B1%D0%BD%D1%8B%D0%B9_%D1%84%D0%B8%D0%BB%D0%B8%D0%BD",
            kind: "Bubo blakistoni"
        },
        {
            _id: "5e77468d702ac41e342ade60",
            index: 109,
            name: "Большой пегий зимородок",
            description: "один из крупнейших зимородков на азиатском континенте",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Megaceryle_lugubris.jpg/275px-Megaceryle_lugubris.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%BF%D0%B5%D0%B3%D0%B8%D0%B9_%D0%B7%D0%B8%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%BA",
            kind: "Megaceryle lugubris"
        },
        {
            _id: "5e774688bec30d1d8cbf2be2",
            index: 110,
            name: "Ошейниковая альциона",
            description: "азиатская птица семейства зимородковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Halcyon_pileata_-_Phra_Non.jpg/275px-Halcyon_pileata_-_Phra_Non.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9E%D1%88%D0%B5%D0%B9%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F_%D0%B0%D0%BB%D1%8C%D1%86%D0%B8%D0%BE%D0%BD%D0%B0",
            kind: "Halcyon pileata"
        },
        {
            _id: "5e7746848023e12dc0445bee",
            index: 111,
            name: "Средний пёстрый дятел",
            description: "небольшая птица семейства дятловых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dendrocopos_medius_2_%28Marek_Szczepanek%29.jpg/262px-Dendrocopos_medius_2_%28Marek_Szczepanek%29.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9_%D0%BF%D1%91%D1%81%D1%82%D1%80%D1%8B%D0%B9_%D0%B4%D1%8F%D1%82%D0%B5%D0%BB",
            kind: "Leiopicus medius"
        },
        {
            _id: "5e77473916adce007c7ec03e",
            index: 112,
            name: "Рыжебрюхий дятел",
            description: "представитель фауны юго-восточной Азии из рода пёстрых дятлов",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Rufous-bellied_Woodpecker_%28male%29.jpg/275px-Rufous-bellied_Woodpecker_%28male%29.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8B%D0%B6%D0%B5%D0%B1%D1%80%D1%8E%D1%85%D0%B8%D0%B9_%D0%B4%D1%8F%D1%82%D0%B5%D0%BB",
            kind: "Dendrocopos hyperythrus"
        },
        {
            _id: "5e7747341c551a28dc72c463",
            index: 113,
            name: "Монгольский жаворонок",
            description: "вид воробьиных птиц из семейства жаворонковых (Alaudidae)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Melanocorypha_mongolica.jpg/275px-Melanocorypha_mongolica.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9_%D0%B6%D0%B0%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%BE%D0%BA",
            kind: "Melanocorypha mongolica"
        },
        {
            _id: "5e774730702ac41e342ade61",
            index: 114,
            name: "Серый сорокопут",
            description: "достаточно крупная певчая птица из семейства сорокопутовых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lanius_excubitor%2C_Chilham%2C_Kent_4.jpg/275px-Lanius_excubitor%2C_Chilham%2C_Kent_4.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D1%8B%D0%B9_%D1%81%D0%BE%D1%80%D0%BE%D0%BA%D0%BE%D0%BF%D1%83%D1%82",
            kind: "Lanius excubitor"
        },
        {
            _id: "5e77472cbec30d1d8cbf2be3",
            index: 115,
            name: "Японский сверчок",
            description: "вид птиц Старого Света из семейства сверчковых (Locustellidae). Название дано в честь британского энтомолога Генри Дж. С. Прайера (1850—1888)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Marsh_Grassbird.jpg/275px-Marsh_Grassbird.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%AF%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%B2%D0%B5%D1%80%D1%87%D0%BE%D0%BA",
            kind: "Helopsaltes pryeri"
        },
        {
            _id: "5e7747278023e12dc0445bef",
            index: 116,
            name: "Вертлявая камышовка",
            description: "мелкая певчая перелётная птица семейства Acrocephalidae, вид рода Настоящих камышовок (Acrocephalus)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Seggenrohrsaenger_hand.jpg/275px-Seggenrohrsaenger_hand.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D1%82%D0%BB%D1%8F%D0%B2%D0%B0%D1%8F_%D0%BA%D0%B0%D0%BC%D1%8B%D1%88%D0%BE%D0%B2%D0%BA%D0%B0",
            kind: "Acrocephalus paludicola"
        },
        {
            _id: "5e7747d316adce007c7ec03f",
            index: 117,
            name: "Райская мухоловка",
            description: "птица семейства монархов",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Indian_Paradise_Flycatcher_Male.jpg/246px-Indian_Paradise_Flycatcher_Male.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%BC%D1%83%D1%85%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0",
            kind: "Terpsiphone paradisi"
        },
        {
            _id: "5e7747cf1c551a28dc72c464",
            index: 118,
            name: "Большой чекан",
            description: "вид воробьиных птиц рода Чеканы",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/At_Jim_Corbett_NP%2C_India.jpg/275px-At_Jim_Corbett_NP%2C_India.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D1%87%D0%B5%D0%BA%D0%B0%D0%BD",
            kind: "Saxicola insignis"
        },
        {
            _id: "5e7747c6bec30d1d8cbf2be4",
            index: 119,
            name: "Paradoxornis heudei",
            description: "вид рода Paradoxornis семейства славковых",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Paradoxornis_heudei_2.jpg/275px-Paradoxornis_heudei_2.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D0%BE%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F_%D1%81%D1%83%D1%82%D0%BE%D1%80%D0%B0",
            kind: "Paradoxornis heudei"
        },
        {
            _id: "5e7747cb702ac41e342ade62",
            index: 120,
            name: "Белая лазоревка",
            description: "небольшая певчая птица семейства синицевых, распространённая преимущественно в Европе восточнее Белоруссии, южной Сибири и Средней Азии",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Azure_Tit_-_Cyanistes_cyanus.jpg/275px-Azure_Tit_-_Cyanistes_cyanus.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%B0%D1%8F_%D0%BB%D0%B0%D0%B7%D0%BE%D1%80%D0%B5%D0%B2%D0%BA%D0%B0",
            kind: "Cyanistes cyanus"
        },
        {
            _id: "5e7747c18023e12dc0445bf0",
            index: 121,
            name: "Косматый поползень",
            description: "небольшая птица из семейства поползневых, распространённая в Азии",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sitta_villosa_%28cropped%29.jpg/275px-Sitta_villosa_%28cropped%29.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D0%BC%D0%B0%D1%82%D1%8B%D0%B9_%D0%BF%D0%BE%D0%BF%D0%BE%D0%BB%D0%B7%D0%B5%D0%BD%D1%8C",
            kind: "Sitta villosa"
        },
        {
            _id: "5e77488c8023e12dc0445bf1",
            index: 122,
            name: "Овсянка Янковского",
            description: "вид птиц из рода настоящих овсянок",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/EmberizaJankowskiKeulemans.jpg/231px-EmberizaJankowskiKeulemans.jpg",
            link: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B2%D1%81%D1%8F%D0%BD%D0%BA%D0%B0_%D0%AF%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE",
            kind: "Emberiza jankowskii"
        }
    ]
};


export default birds;