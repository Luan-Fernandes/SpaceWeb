//Hook`s
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Css
import styles from './Navbar.module.css';

//img logo
import logo from '../../imagens/logo.svg'

//img menu
import hamb from '../../imagens/icon-hamburger.svg'
import close from '../../imagens/icon-close.svg'

const Navbar = () => {
    
    const history = useNavigate();

    const [step, setStep] = useState(1);

    const [menu, setMenu] = useState(false);

    return (
        <>
            <nav className={styles.navbar}>
                <section className={styles.containerL}>
                    <span><img src={logo} alt="logo" /></span>
                    <div></div>
                </section>

                <section className={styles.containerR}>
                    <ul>
                        <li onClick={() => [setStep(1),history("/")]} className={step === 1 ? styles.active : styles.home} > <label>00</label> <span>Home</span> </li>
                        <li onClick={() => [setStep(2),history("/destino")]} className={step === 2 ? styles.active : styles.destino}> <label>01</label> <span>Destination</span> </li>
                        <li onClick={() => [setStep(3),history("/crew")]} className={step === 3 ? styles.active : styles.crew}> <label>02</label> <span>Crew</span> </li>
                        <li onClick={() => [setStep(4),history("/tecnologia")]} className={step === 4 ? styles.active : styles.tec}> <label>03</label> <span>Technlogy</span> </li>
                    </ul>
                </section>

            </nav>
            <nav className={styles.navbarM}>
                <section className={menu === false ? styles.containerRMActive : styles.containerRM}>
                    <ul>
                        <li onClick={() => [setStep(1),history("/")]} className={step === 1 ? styles.activeM : styles.homeM} > <label>00</label> <span>Home</span> </li>
                        <li onClick={() => [setStep(2),history("/destino")]} className={step === 2 ? styles.activeM : styles.destinoM}> <label>01</label> <span>Destination</span> </li>
                        <li onClick={() => [setStep(3),history("/crew")]} className={step === 3 ? styles.activeM : styles.crewM}> <label>02</label> <span>Crew</span> </li>
                        <li onClick={() => [setStep(4),history("/tecnologia")]} className={step === 4 ? styles.activeM : styles.tecM}> <label>03</label> <span>Technlogy</span> </li>
                    </ul>
                </section>
                <section className={styles.containerLM}>
                    <figure><img src={logo} alt="logo" /></figure>
                    <figure onClick={() => setMenu(!menu)}><img className={styles.menuS} src={menu === false ? hamb : close} alt="img do menu" /></figure>
                </section>

            </nav>
        </>
    )
}

export default Navbar