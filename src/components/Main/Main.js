import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Navigation from '../Navigation/Navigation';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer'
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main ({onMenuClick, loggedIn}) {
  return (
    <>
      <Header onMenuClick={onMenuClick} loggedIn={loggedIn} />
      <Promo />
      <Navigation />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Main;