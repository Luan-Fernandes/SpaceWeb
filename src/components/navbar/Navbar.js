//Hook`s
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Css
import styles from './Navbar.module.css';

//img logo
import logo from '../../imagens/logo.svg'

const Navbar = () => {
    
    const history = useNavigate();

    const [step, setStep] = useState(0);

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
        </>
    )
}

export default Navbar