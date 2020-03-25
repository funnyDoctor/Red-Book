import React, { Fragment } from "react";
import { Slide } from 'react-slideshow-image'
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";
import FourthBlock from "./FourthBlock";


//Modal Windows
import GymnospermsUp from "../Modal Windows/GymnospermsUp";
import MushroomsUp from "../Modal Windows/MushroomsUp";
import AmphibiansUp from "../Modal Windows/AmphibiansUp";
import AnnelidsUp from "../Modal Windows/AnnelidsUp";
import LichensUp from "../Modal Windows/LichensUp";
import MammalsUp from "../Modal Windows/MammalsUp";
import MollusksUp from "../Modal Windows/MollusksUp";
import BryophytesUp from "../Modal Windows/BryophytesUp";
import InsectsUp from "../Modal Windows/InsectsUp";
import FernPlantsUp from "../Modal Windows/FernPlantsUp";
import FloatingPlantsUp from "../Modal Windows/FloatingPlantsUp";
import AngiospermsUp from "../Modal Windows/AngiospermsUp";
import ReptilesUp from "../Modal Windows/ReptilesUp";
import BirdsUp from "../Modal Windows/BirdsUp";
import CrustaceansUp from "../Modal Windows/CrustaceansUp";
import FishUp from "../Modal Windows/FishUp";




const proprietes = {
    duration: 15000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true
};

class Features extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpenGymnosperms: false,
            isOpenMushrooms: false,
            isOpenAmphibians: false,
            isOpenAnnelids: false,
            isOpenLichens: false,
            isOpenMammals: false,
            isOpenMollusks: false,
            isOpenBryophytes: false,
            isOpenInsects: false,
            isOpenFernPlants: false,
            isOpenFloatingPlants: false,
            isOpenAngiosperms: false,
            isOpenReptiles: false,
            isOpenBirds: false,
            isOpenCrustaceans: false,
            isOpenFishes: false
        }
    }

    //Gymnosperms
    openGymnosperms = () => {
        this.setState({ isOpenGymnosperms: true });
    };

    cancelGymnosperms = () => {
        console.log('Cancel function!');
        this.setState({ isOpenGymnosperms: false });
    };

    //Mushrooms
    openMushrooms = () => {
        this.setState({ isOpenMushrooms: true });
    };

    cancelMushrooms = () => {
        console.log('Cancel function!');
        this.setState({ isOpenMushrooms: false });
    };

    //Amphibians
    openAmphibians = () => {
        this.setState({ isOpenAmphibians: true });
    };

    cancelAmphibians = () => {
        console.log('Cancel function!');
        this.setState({isOpenAmphibians: false });
    };

    //Annelids
    openAnnelids = () => {
        this.setState({ isOpenAnnelids: true });
    };

    cancelAnnelids = () => {
        console.log('Cancel function!');
        this.setState({ isOpenAnnelids: false });
    };

    //Lichens
    openLichens = () => {
        this.setState({ isOpenLichens: true });
    };

    cancelLichens = () => {
        console.log('Cancel function!');
        this.setState({ isOpenLichens: false });
    };

    //Mammals
    openMammals = () => {
        this.setState({ isOpenMammals: true });
    };

    cancelMammals = () => {
        console.log('Cancel function!');
        this.setState({ isOpenMammals: false });
    };

    //Mollusks
    openMollusks = () => {
        this.setState({ isOpenMollusks: true });
    };

    cancelMollusks = () => {
        console.log('Cancel function!');
        this.setState({ isOpenMollusks: false });
    };

    //Bryophytes
    openBryophytes = () => {
        this.setState({ isOpenBryophytes: true });
    };

    cancelBryophytes = () => {
        console.log('Cancel function!');
        this.setState({ isOpenBryophytes: false });
    };

    //Insects
    openInsects = () => {
        this.setState({ isOpenInsects: true });
    };

    cancelInsects = () => {
        console.log('Cancel function!');
        this.setState({ isOpenInsects: false });
    };

    //Fern Plants
    openFernPlants = () => {
        this.setState({ isOpenFernPlants: true });
    };

    cancelFernPlants = () => {
        console.log('Cancel function!');
        this.setState({ isOpenFernPlants: false });
    };

    //Floating Plants
    openFloatingPlants = () => {
        this.setState({ isOpenFloatingPlants: true });
    };

    cancelFloatingPlants = () => {
        console.log('Cancel function!');
        this.setState({ isOpenFloatingPlants: false });
    };

    //Angiosperms
    openAngiosperms = () => {
        this.setState({ isOpenAngiosperms: true });
    };

    cancelAngiosperms = () => {
        console.log('Cancel function!');
        this.setState({ isOpenAngiosperms: false });
    };

    //Reptiles
    openReptiles = () => {
        this.setState({ isOpenReptiles: true });
    };

    cancelReptiles = () => {
        console.log('Cancel function!');
        this.setState({ isOpenReptiles: false });
    };

    //Birds
    openBirds = () => {
        this.setState({ isOpenBirds: true });
    };

    cancelBirds = () => {
        console.log('Cancel function!');
        this.setState({ isOpenBirds: false });
    };

    //Crustaceans
    openCrustaceans = () => {
        this.setState({ isOpenCrustaceans: true });
    };

    cancelCrustaceans = () => {
        console.log('Cancel function!');
        this.setState({ isOpenCrustaceans: false });
    };

    //Fishes
    openFishes = () => {
        this.setState({ isOpenFishes: true });
    };

    cancelFishes = () => {
        console.log('Cancel function!');
        this.setState({ isOpenFishes: false });
    };

    render() {
        return (
            <Fragment>
                <section className={"section-features"}>
                    <div className={"feature-box"}>
                        <Slide {...proprietes}>

                            <FirstBlock
                                openGymnosperms={this.openGymnosperms}
                                openMushrooms={this.openMushrooms}
                                openAmphibians={this.openAmphibians}
                                openAnnelids={this.openAnnelids}
                            />

                            <SecondBlock
                                openLichens={this.openLichens}
                                openMammals={this.openMammals}
                                openMollusks={this.openMollusks}
                                openBryophytes={this.openBryophytes}
                            />

                            <ThirdBlock
                                openInsects={this.openInsects}
                                openFernPlants={this.openFernPlants}
                                openFloatingPlants={this.openFloatingPlants}
                                openAngiosperms={this.openAngiosperms}
                            />

                            <FourthBlock
                                openReptiles={this.openReptiles}
                                openBirds={this.openBirds}
                                openCrustaceans={this.openCrustaceans}
                                openFishes={this.openFishes}
                            />

                        </Slide>
                    </div>
                </section>


                {/*Modal Window*/}
                <GymnospermsUp
                    isOpen={this.state.isOpenGymnosperms}
                    onCancel={this.cancelGymnosperms}
                />

                <MushroomsUp
                    isOpen={this.state.isOpenMushrooms}
                    onCancel={this.cancelMushrooms}
                />

                <AmphibiansUp
                    isOpen={this.state.isOpenAmphibians}
                    onCancel={this.cancelAmphibians}
                />

                <AnnelidsUp
                    isOpen={this.state.isOpenAnnelids}
                    onCancel={this.cancelAnnelids}
                />

                <LichensUp
                    isOpen={this.state.isOpenLichens}
                    onCancel={this.cancelLichens}
                />

                <MammalsUp
                    isOpen={this.state.isOpenMammals}
                    onCancel={this.cancelMammals}
                />

                <MollusksUp
                    isOpen={this.state.isOpenMollusks}
                    onCancel={this.cancelMollusks}
                />

                <BryophytesUp
                    isOpen={this.state.isOpenBryophytes}
                    onCancel={this.cancelBryophytes}
                />

                <InsectsUp
                    isOpen={this.state.isOpenInsects}
                    onCancel={this.cancelInsects}
                />

                <FernPlantsUp
                    isOpen={this.state.isOpenFernPlants}
                    onCancel={this.cancelFernPlants}
                />

                <FloatingPlantsUp
                    isOpen={this.state.isOpenFloatingPlants}
                    onCancel={this.cancelFloatingPlants}
                />

                <AngiospermsUp
                    isOpen={this.state.isOpenAngiosperms}
                    onCancel={this.cancelAngiosperms}
                />

                <ReptilesUp
                    isOpen={this.state.isOpenReptiles}
                    onCancel={this.cancelReptiles}
                />

                <BirdsUp
                    isOpen={this.state.isOpenBirds}
                    onCancel={this.cancelBirds}
                />

                <CrustaceansUp
                    isOpen={this.state.isOpenCrustaceans}
                    onCancel={this.cancelCrustaceans}
                />

                <FishUp
                    isOpen={this.state.isOpenFishes}
                    onCancel={this.cancelFishes}
                />

            </Fragment>
        );
    }
}


export default Features;