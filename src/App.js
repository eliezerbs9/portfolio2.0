import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import WAVES from "vanta/dist/vanta.waves.min";
import Sidebar from "./components/Sidebar/Sidebar";
import EmailModal from "./components/EmailModal";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const Content = styled.main`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 50px 0;

  @media screen and (max-width: 1024px) {
    padding: 0 20px 20px 20px;
  }
`;

const ContentWrapper = styled(motion.div)`
  background-color: rgba(24, 24, 25, 0.6);
  padding: 60px;
  width: 1024px;
  overflow-y: auto;
  height: fit-content;
  align-self: center;
`;

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const vantaRef = useRef(null);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;
    setIsMobile(isMobile);

    window.addEventListener("resize", () => {
      const isMobile = window.innerWidth <= 1024;
      setIsMobile(isMobile);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(false);
      });
    };
  }, [isMobile]);

  const showModal = (name) => {
    setEmailSent(name);
  };

  const closeModal = () => {
    setEmailSent(false);
  };

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 0.5,
          scaleMobile: 0.5,
          color: 0x0,
          shininess: 50.0,
          waveHeight: 2.5,
          waveSpeed: 0.75,
          zoom: 0.65,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <GlobalStyle />
      <Section ref={vantaRef}>
        <AnimatePresence exitBeforeEnter>
          {emailSent && <EmailModal name={emailSent} closeModal={closeModal} />}
        </AnimatePresence>
        <Sidebar isMobile={isMobile} />
        <Content>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/contact">
                <Contact showModal={showModal} isMobile={isMobile} />
              </Route>

              <Route exact path="/projects">
                <Projects isMobile={isMobile} />
              </Route>

              <Route exact path="/about">
                <About isMobile={isMobile} />
              </Route>

              <Route exact path="/">
                <Home isMobile={isMobile} />
              </Route>
            </Switch>
          </AnimatePresence>
        </Content>
      </Section>
    </>
  );
}

export default App;
