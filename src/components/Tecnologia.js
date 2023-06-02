//Hook`s
import { useState, useEffect } from 'react';

//css
import styles from './Tecnologia.module.css';

//img tecnologia
import imgLaunch from '../imagens/ImgTecnologia/image-launch-vehicle-portrait.jpg'
import imgSpace from '../imagens/ImgTecnologia/image-space-capsule-portrait.jpg'
import imgSpacePort from '../imagens/ImgTecnologia/image-spaceport-portrait.jpg'

const Tecnologia = () => {

   //select
   const [selectNaves, setSelectNaves] = useState(1);
   //dados
   const [nameNaves, setNameNaves] = useState();
   const [txtSobre, setTxtSobre] = useState();
   const [imgNaves, setImgNaves] = useState();
 
   //css nav bar
   const [styleLaunch, setStyleLaunch] = useState();
   const [stylesPaceport, setStylesPaceport] = useState();
   const [stylesPaceCapsula, setStylesPaceCapsula] = useState();

   useEffect(() => {
    if(selectNaves === 1){
      setNameNaves("VEÍCULO DE LANÇAMENTO")
      setTxtSobre("Um veículo lançador ou foguete portador é um veículo impulsionado por foguete usado para transportar uma carga útil da superfície da Terra para o espaço, geralmente para a órbita da Terra ou além. Nosso foguete portador WEB-X é o mais poderoso em operação. Com 150 metros de altura, é uma visão inspiradora na plataforma de lançamento!")
      setImgNaves(imgLaunch)
      setStyleLaunch(styles.activeNav)
      setStylesPaceport(null)
      setStylesPaceCapsula(null)
      
    }
    else if(selectNaves === 2){
      setNameNaves("ESPAÇOPORTO")
      setTxtSobre("Um porto espacial ou cosmódromo é um local para lançar (ou receber) espaçonaves, por analogia ao porto marítimo para navios ou aeroporto para aeronaves. Baseado no famoso Cabo Canaveral, nosso espaçoporto está idealmente situado para aproveitar a rotação da Terra para o lançamento.")
      setImgNaves(imgSpacePort)
      setStyleLaunch(null)
      setStylesPaceport(styles.activeNav)
      setStylesPaceCapsula(null)
    }
    else{
      setNameNaves("CÁPSULA ESPACIAL")
      setTxtSobre("Uma cápsula espacial é uma espaçonave frequentemente tripulada que usa uma cápsula de reentrada de corpo contundente para reentrar na atmosfera da Terra sem asas. Nossa cápsula é onde você passará seu tempo durante o voo. Inclui um ginásio espacial, cinema e muitas outras actividades para o manter entretido.")
      setImgNaves(imgSpace)
      setStyleLaunch(null)
      setStylesPaceport(null)
      setStylesPaceCapsula(styles.activeNav)
    }
  },[selectNaves])
  return (
    <div className={styles.tecnologia}>
      <section>
      <div className={styles.cabecalho}>
        <span>03</span>
        <p>SPACE LAUNCH 101</p>
      </div>
      <div className={styles.dados}>
          <div className={styles.dadosNaves}>
            <h2>A TERMINOLOGIA...</h2>
            <h1>{nameNaves}
            </h1>
            <p>{txtSobre}</p>
          </div>
          <nav className={styles.navbar}>
            <span onClick={() => setSelectNaves(1)} className={styles.launch} id={styleLaunch}> 1 </span>
            <span onClick={() => setSelectNaves(2)} className={styles.spacePort}    id={stylesPaceport}>2</span>
            <span onClick={() => setSelectNaves(3)} className={styles.spaceCapsula}  id={stylesPaceCapsula}>3</span>
          </nav>
      </div>
      </section>

      <section className={styles.imgNaves}>
        <img src={imgNaves} alt="img Naves" />
      </section>
    </div>
  )
}

export default Tecnologia