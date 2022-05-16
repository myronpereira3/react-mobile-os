import logo from './logo.svg';
import './App.css';
import React from 'react';
import Section from './component/Section';

function App() {
  return (
    <div>
<Section name="Mobile Operating System" mobiles1="Android" mobile2='Blackberry' mobile3="iPhone" mobile4="Windows Phone"/>
<Section name="Mobile Manufactures" mobiles1="Samsung" mobile2='HTC' mobile3="Micromax" mobile4="Apple"/>
</div>
  );
}

export default App;
