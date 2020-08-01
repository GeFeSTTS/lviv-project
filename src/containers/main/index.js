import React from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import AboutProject from '../../components/AboutProject';
import Tasks from '../../components/Tasks';
import Work from '../../components/Work';
import News from '../../components/News';
import Team from '../../components/Team';
import Prehistory from '../../components/Prehistory';
import Contacts from '../../components/Contacts';
import Footer from '../../components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutProject />
      <Tasks />
      <Work />
      <News />
      <Team />
      <Prehistory />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
