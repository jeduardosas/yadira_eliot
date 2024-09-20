
import {useEffect } from "react";
import { useLocation, Navigate} from "react-router-dom";
import data from "../../data";
import CountDown from "/@/components/ContDown";
import Reservacion from '/@/components/Reservacion';
import TimeLine from "../components/TimeLine";
import Footer from "../components/Footer";
import '/@/styles/invitacion.css'
import '/@/styles/modal.css'


const Invitacion = () => {
  // D E ST R U C T U R A C I O N   D E   L A   D A T A   
  const {img_header,nombre_novia,nombre_novio} = data

  //VALIDACION DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pases = params.get("pases") || "";

  if (pases === "") {
    return <Navigate to="/notfound" />;
  }
  if(pases<0 || pases >10){
    return <Navigate to="/notfound" />
  }


  return (

    <>
      <section className="header">
      
        <div className="header_names-container">
          <div className="header_names">
            <p>{nombre_novia}</p>
            <p>&</p>
            <p>{nombre_novio}</p>
          </div>

          <div className="header_names-container-fake"></div>
        </div>
      </section>

      <section className="contador centrar">
        <p>Ya casi llega la fecha...</p>
        <CountDown />
        <div className="contador_frase">
          <p>Mi Vida te amo.</p>
          <p>Y no es para tanto, es para siempre</p>
        </div>
      </section>

      <div className="contador_imagen">
          <img src="./img/back_.webp" alt="imagen_2" />
      </div>
      

      

      
      <section className="datos">
        <div className="datos_monograma">
          <p className="datos_monograma-a">A</p>
          <p className="datos_monograma-d">D</p>
        </div>
      </section>
          
          {/* <TimeLine />
          <div className="lugares">
            <Reservacion pases={pases} />
          </div> */}
          
          <div>
            <Footer />
          </div>
    </>
    
    
  );
};

export default Invitacion;
