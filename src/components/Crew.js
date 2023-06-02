//Css
import styles from './Crew.module.css'

//imgPessoas
import imgAnousheh from '../imagens/ImgCrew/image-anousheh-ansari.png'
import imgDouglas from '../imagens/ImgCrew/image-douglas-hurley.png'
import imgMark from '../imagens/ImgCrew/image-mark-shuttleworth.png'
import imgVictor from '../imagens/ImgCrew/image-victor-glover.png'
import { useEffect, useState } from 'react'

const Crew = () => {
  //select
  const [selectPessoas, setSelectPessoas] = useState(1);
  //dados
  const [cargPessoa, setCargPessoa] = useState();
  const [namePessoa, setNamePessoa] = useState();
  const [txtSobre, setTxtSobre] = useState();
  const [imgPessoa, setImgPessoa] = useState();

  //css nav bar
  const [styleDouglas, setStyleDouglas] = useState();
  const [styleMark, setStyleMark] = useState();
  const [styleVictor, setStyleVictor] = useState();
  const [styleAnousheh, setStyleAnousheh] = useState();
  useEffect(() => {
    if(selectPessoas === 1){
      setCargPessoa("Comandante")
      setNamePessoa("Douglas Hurley")
      setTxtSobre("Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA. Ele se lançou ao espaço pela terceira vez como comandante do Crew Dragon Demo-2.")
      setImgPessoa(imgDouglas)
      setStyleDouglas(styles.activeNav)
      setStyleMark(null)
      setStyleVictor(null)
      setStyleAnousheh(null)
      
    }
    else if(selectPessoas === 2){
      setCargPessoa("Especialista na missão")
      setNamePessoa("MARK SHUTTLEWORTH")
      setTxtSobre("Mark Richard Shuttleworth é o fundador e CEO da Canonical, a empresa por trás do sistema operacional Ubuntu baseado em Linux. Shuttleworth se tornou o primeiro sul-africano a viajar para o espaço como turista espacial.")
      setImgPessoa(imgMark)
      setStyleDouglas(null)
      setStyleMark(styles.activeNav)
      setStyleVictor(null)
      setStyleAnousheh(null)
    }
    else if(selectPessoas === 3){
      setCargPessoa("PILOTO")
      setNamePessoa("Victor Glover")
      setTxtSobre("Piloto no primeiro voo operacional do SpaceX Crew Dragon para a Estação Espacial Internacional. Glover é um comandante da Marinha dos Estados Unidos, onde pilota um F/A-18. Ele foi membro da tripulação da Expedição 64 e serviu como engenheiro de vôo de sistemas de estação.")
      setImgPessoa(imgVictor)
      setStyleDouglas(null)
      setStyleMark(null)
      setStyleVictor(styles.activeNav)
      setStyleAnousheh(null)
    }
    else{
      setCargPessoa("Engenheira de voo")
      setNamePessoa("Anousheh Ansari")
      setTxtSobre("Anousheh Ansari é uma engenheira iraniana-americana e cofundadora da Prodea Systems. Ansari foi a quarta turista espacial autofinanciada, a primeira mulher autofinanciada a voar para a ISS e a primeira iraniana no espaço.")
      setImgPessoa(imgAnousheh)
      setStyleDouglas(null)
      setStyleMark(null)
      setStyleVictor(null)
      setStyleAnousheh(styles.activeNav)
    }
  },[selectPessoas])
  
  return (
    <div className={styles.crew}>

      <section className={styles.dados}>
        <span>
          <label>02</label> <p>Conheça sua tripulação.</p>
          </span>

          <div className={styles.dadosPessoas}>
            <h2>{cargPessoa}</h2>
            <h1>{namePessoa}</h1>
            <p>{txtSobre}</p>
          </div>
          <nav className={styles.navbar}>
            <div onClick={() => setSelectPessoas(1)} className={styles.douglas} id={styleDouglas}></div>
            <div onClick={() => setSelectPessoas(2)} className={styles.mark}    id={styleMark}></div>
            <div onClick={() => setSelectPessoas(3)} className={styles.victor}  id={styleVictor}></div>
            <div onClick={() => setSelectPessoas(4)} className={styles.anousheh}id={styleAnousheh}></div>
          </nav>
      </section>

      <section className={styles.imgPessoas}>
        <img src={imgPessoa} alt="img pessoas" />
      </section>

    </div>
  )
}

export default Crew