import React from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/Home/Home';
const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
