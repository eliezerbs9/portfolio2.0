import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {motion} from 'framer-motion';
import GlobalStyle from './globalStyles'
import Landing from './components/Landing/Landing';
import styled from 'styled-components'
import WAVES from 'vanta/dist/vanta.waves.min';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home';

const Main = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const Content = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;;
`;

function App() {

  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null);

  useEffect(() => {
    if(!vantaEffect){
        setVantaEffect(WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0,
            shininess: 150.00,
            waveHeight: 2.50,
            waveSpeed: 0.75,
            zoom: 0.65
        }))
    }
    return () => {
        if(vantaEffect) vantaEffect.destroy()
    }
}, [vantaEffect]);
  
  return (
    <>
      <GlobalStyle />
      <Main ref={vantaRef}>
        <Sidebar />
        <Content>
          <Switch>
              <Route path="/">
                <Home />
              </Route>
          </Switch>
        </Content>
      </Main>
    </>
  );
}

export default App;
