import React, {useState, useEffect, useRef} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import { AnimatePresence ,motion} from 'framer-motion';
import GlobalStyle from './globalStyles'
import styled from 'styled-components'
import WAVES from 'vanta/dist/vanta.waves.min';
import Sidebar from './components/Sidebar/Sidebar';
import EmailModal from './components/EmailModal';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const Content = styled.main`
  width: 100%;
  display: flex;
  min-height: 100%;
  height: fit-content;
  justify-content: center;
  padding: 50px 0;
`;

const ContentWrapper = styled(motion.div)`
  background-color: rgba(24,24,25,0.6);
  padding: 60px;
  width: 1024px;
  overflow-y: auto;
  height: fit-content;
  align-self: center;
`;

function App() {

  const [vantaEffect, setVantaEffect] = useState(null)
  const [emailSent, setEmailSent] = useState(false)
  const vantaRef = useRef(null);
  const location = useLocation()

  const showModal = (name) => {
    console.log('show modal name: ', name)
    setEmailSent(name)
  }

  const closeModal = () => {
    setEmailSent(false);
  }

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
            shininess: 100.00,
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
      <Section ref={vantaRef}>
        {emailSent && (
          <EmailModal name={emailSent} closeModal={closeModal}/>
        )}
        <Sidebar />
        <Content>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>

              <Route exact path="/contact">
                <Contact showModal={showModal} />
              </Route>

              <Route exact path="/projects">
                <Projects />
              </Route>

              <Route exact path="/about">
                <About />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>

            </Switch>
          </AnimatePresence> 
        </Content>
      </Section>
    </>
  );
}

export default App;
