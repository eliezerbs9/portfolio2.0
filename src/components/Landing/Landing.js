import React, {useState, useEffect, useRef} from 'react'
import {motion} from 'framer-motion';
import styled from 'styled-components';
import WAVES from 'vanta/dist/vanta.waves.min';


const StyledElement = styled(motion.div)`
    height: 500px;
    display: flex;
    background-color: black;
    width: 100%;
    padding: 60px;
    color: white
`;

const Landing = () => {

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
        <StyledElement ref={vantaRef}>
            <motion.h1 
                initial={{x: '-100vw'}}
                animate={{x: 0}}
                transition={{duration: 0.75}}
            >Hello, my name is Eliezer</motion.h1>
            <div className="info">

            </div>
            <div className='vanta'  >


            </div>
            
        </StyledElement>
    )
}

export default Landing
