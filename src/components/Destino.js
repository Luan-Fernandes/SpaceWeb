//Css
import styles from './Destino.module.css'

//img das Luas
import imgLua from '../imagens/ImgDestino/image-moon.png'
import imgMars from '../imagens/ImgDestino/image-mars.png'
import imgEuropa from '../imagens/ImgDestino/image-europa.png'
import imgTitan from '../imagens/ImgDestino/image-titan.png'

//Hook`s
import { useState, useEffect } from 'react'

const Destino = () => {

  const [selectStep, setSelectStep] = useState(1);
  //img do astro
  const [astro, setAstro] = useState()

  //estilo da navbar
  const [lua, setLua] = useState();
  const [mars, setMars] = useState();
  const [europa, setEuropa] = useState();
  const [titan, setTitan] = useState();

  //Nome do astro
  const [nameAstro, setNameAstro] = useState()

  //Descrição do astro
  const [descAstro, setDescAstro] = useState()

  //distancia
  const [distancia, setDistancia] = useState()
  //tempo 
  const [tempo, setTempo] = useState()
  useEffect(() => {
    if(selectStep === 1){
      setAstro(imgLua)
      setNameAstro("Lua")
      setDistancia("384,400 km")
      setTempo("3 dias")
      setDescAstro("Veja nosso planeta como você nunca viu antes. Uma viagem relaxante perfeita para ajudar a recuperar a perspectiva e voltar revigorado. Enquanto estiver lá, conheça um pouco da história visitando os locais de pouso da Luna 2 e da Apollo 11.")
      setLua(styles.activeStep)
      setMars(null)
      setEuropa(null)
      setTitan(null)
    }
    else if(selectStep === 2){
      setAstro(imgMars)
      setNameAstro("marte")
      setDistancia("225 MIL. km")
      setTempo("9 meses")
      setDescAstro("Não se esqueça de levar suas botas de caminhada. Você precisará deles para enfrentar o Olympus Mons, a montanha planetária mais alta do nosso sistema solar. É duas vezes e meia o tamanho do Everest!")
      setLua(null)
      setMars(styles.activeStep)
      setEuropa(null)
      setTitan(null)
    }
    else if(selectStep === 3){
      setAstro(imgEuropa)
      setNameAstro("europa")
      setDistancia("628 MIL. km")
      setTempo("3 anos")
      setDescAstro("A menor das quatro luas galileanas que orbitam Júpiter, Europa é o sonho de um amante do inverno. Com uma superfície gelada, é perfeito para patinar no gelo, curling, hóquei ou simplesmente relaxar em sua confortável cabana de inverno.")
      setLua(null)
      setMars(null)
      setEuropa(styles.activeStep)
      setTitan(null)
    }
    else{
      setAstro(imgTitan)
      setNameAstro("titan")
      setDistancia("1.6 BIL. km")
      setTempo("7 anos")
      setDescAstro("A única lua conhecida por ter uma atmosfera densa além da Terra, Titã é um lar longe de casa (apenas algumas centenas de graus mais frio!). Como bônus, você obtém vistas impressionantes dos Anéis de Saturno.")
      setLua(null)
      setMars(null)
      setEuropa(null)
      setTitan(styles.activeStep)
    }
  },[selectStep])
  return (
    <div className={styles.destino}>

      <section className={styles.luas}>

        <h1><label>01</label> <span>Escolha seu destino.</span></h1>
        <img src={astro} alt="Astros"/>

      </section>

      <section className={styles.descLuas}>
        <nav>
          <ul>
            <li id={lua} onClick={() => setSelectStep(1)} >lua</li>
            <li id={mars} onClick={() => setSelectStep(2)}>marte</li>
            <li id={europa} onClick={() => setSelectStep(3)}>europa</li>
            <li id={titan} onClick={() => setSelectStep(4)}>titan</li>
          </ul>
        </nav>
        <h1>{nameAstro}</h1>
        <p>{descAstro}</p>
        <hr/>
        <div className={styles.dados}>
          <label>
            <span>DISTÂNCIA MÉDIA</span>
            <p>{distancia}</p>
          </label>

          <label>
            <span>Tempo de viagem</span>
            <p>{tempo}</p>
          </label>
        </div>
      </section>
    </div>
  )
}

export default Destino