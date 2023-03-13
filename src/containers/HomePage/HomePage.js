import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import MedicalFacility from './section/MedicalFacility/MedicalFacility';
import Specialty from './section/Specialty/Specialty';
import './section/Section.scss'
import OutstandingDoctor from './section/OutstandingDoctor/OutstandingDoctor';
import Handbook from './section/Handbook/Handbook';
import About from './section/About/About';
import HomeFooter from './HomeFooter/HomeFooter';


function HomePage(props) {
    return (
        <div>
            <HomeHeader />
            <Specialty />
            <MedicalFacility />
            <OutstandingDoctor />
            <Handbook />
            <About />
            <HomeFooter />
        </div>
    );
}

export default HomePage;