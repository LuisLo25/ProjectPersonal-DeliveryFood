import { useEffect } from "react"
import { useState } from "react"
import deliveryfood from '../assets/deliveryfood.svg'
import easytoorder from '../assets/easytoorder.svg'
import fastestdelivery from '../assets/fastestdelivery.svg'

function useServicios() {

    
   
}


export function Servicio() {

    const [servicio, setServicio] = useState([])

    useEffect(() => {
        fetch("jason/servicios.json")
            .then(response => response.json())
            .then(datos => {
                setServicio(datos)
                console.log(datos)
            })
    }, [])

    useServicios()
    const imgservicios = [deliveryfood, easytoorder, fastestdelivery]
    return (
        <div>

            <ul className=' grid grid-cols-3  mt-16 w-full justify-center' >


                {
                    imgservicios.map((v, i) => (
                        <li key={i} className="items-center ml-[180px] mb-[8px]" >
                            <img className="h-[237px] w-[252px] shrink-0 " src={v} alt="servicio.imagenes" />

                            <div className="items-center mt-[20px]">

                                <h3 className=" mr-[180px] text-[#222224] whitespace-nowrap font-mono text-3xl not-italic font-semibold leading-normal text-center">{servicio[i]?.titulo}</h3>
                                <p className="flex flex-col ml-[10px] w-[220px]  text-center shrink-0 text-[#222224]  font-mono text-[16px] font-medium leading-[32px]" >{servicio[i]?.descripcion}</p>

                            </div>

                        </li>
                    ))
                }

            </ul>

        </div>

    )
}