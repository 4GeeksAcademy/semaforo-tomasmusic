import React,{useState} from "react";


//create your first component
const Home = () => {
	const[luz, setLuz] = useState(false)
	const[luz2, setLuz2] = useState(false)
	const[luz3, setLuz3] = useState(false)
	return (
		<div className= "Home">
		<button onClick={() => {
		setLuz(!luz);	
		}}
		>Switch</button>

		<div>{luz ? "Prendido" : "Apagado" }</div>

			
        <div className="container text-center bg-black text-white mt-4" >
		<div className = "poste"></div>
             <div className = {luz ? "rojo" : "rojo-apagado"} onClick={() => {
		setLuz(!luz)+setLuz2(false)+setLuz3(false)
		}}>
		</div>
             <div className =  {luz2 ? "amarillo" : "amarillo-apagado"} onClick={() => {
		setLuz2(!luz2)+setLuz(false)+setLuz3(false)
		
		}}></div>
             <div className =  {luz3 ? "verde" : "verde-apagado"} onClick={() => {
		setLuz3(!luz3)+setLuz(false)+setLuz2(false)
	
		}}></div>
	</div>
	</div>
)
};

export default Home;
