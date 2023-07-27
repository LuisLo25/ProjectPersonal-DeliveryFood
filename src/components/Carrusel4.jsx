import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from "react"
import { useState } from "react"

import 'swiper/css';
import 'swiper/css/navigation';
import pizza_circular from "../assets/pizza_circular.svg"
import person1coment from '../assets/person1coment.svg'
import person2coment from '../assets/person2coment.svg'

import { Navigation } from 'swiper/modules';

export function Carrusel4(){

    const [carrusel4, setCarrusel4] = useState([])

    useEffect(() => {
        fetch("jason/carrusel4.json")
            .then(response => response.json())
            .then(datos => {
                setCarrusel4(datos)
                console.log(datos)
            })
    }, [])

    return(
        <>
        <Swiper navigation={true} modules={[Navigation]} className="w-full h-full">
        {
            carrusel4.map((v,i)=>(
   
        <SwiperSlide key={i}className=''>
            <img className='block !w-[300px] !h-[300px]  translate-y-[50%] m-auto hover' src={pizza_circular} alt=''></img>
            <div className=' flex flex-row translate-x-[420px] translate-y-[70px]'> 
                <div className='flex flex-rowshadow-[0px_4px_23px_0px_rgba(19,_31,_53,_0.05)] bg-slate-200 shadow-slate-500/50 flex flex-col justify-start gap-1 w-[379px] h-32 px-4 rounded-lg z-10'>
                    <img className="!w-[30px] !h-[30px] shadow-slate-500/50 translate-x-[120px] translate-y-[30px]"src={person1coment} alt="" />
                    
                    <h3 className='text-[#000] font-mono text-xl whitespace-nowrap not-italic font-semibold leading-[26px] tracking-[0.2]'>{v.nombre}</h3>
                    <h4 className='whitespace-nowrap text-xs font-mono font-medium tracking-[0.12] leading-[12px] text-[#b6b4b4]'>{v.apodo}</h4>
                    <p className='text-sm font-mono tracking-[0.14] leading-[18.2px] text-[#7a7a7a]'>{v.comentario}</p>
                
                </div> 
            </div>
            <div className=' flex flex-row -translate-y-[340px] translate-x-[990px] '> 
                <div className='flex flex-rowshadow-[0px_4px_23px_0px_rgba(19,_31,_53,_0.05)] bg-slate-200 shadow-slate-500/50 flex flex-col justify-start gap-1 w-[379px] h-32 px-4 rounded-lg z-10'>
                    <img className="!w-[30px] !h-[30px] shadow-slate-500/50 translate-x-[120px] translate-y-[30px]"src={person2coment} alt="" />
                    
                    <h3 className='text-[#000] font-mono text-xl whitespace-nowrap not-italic font-semibold leading-[26px] tracking-[0.2]'>{v.nombre}</h3>
                    <h4 className='whitespace-nowrap text-xs font-mono font-medium tracking-[0.12] leading-[12px] text-[#b6b4b4]'>{v.apodo}</h4>
                    <p className='text-sm font-mono tracking-[0.14] leading-[18.2px] text-[#7a7a7a]'>{v.comentario}</p>
                
                </div> 
            </div>
        
        </SwiperSlide>
        ))
        }
        <SwiperSlide className=''>
            
            <img className='block !w-[300px] !h-[300px]  translate-y-[50%] m-auto hover' src={pizza_circular} alt=''></img>
            
            <div className=' flex flex-row translate-x-[420px] translate-y-[70px]'> 
            
                <div className='flex flex-rowshadow-[0px_4px_23px_0px_rgba(19,_31,_53,_0.05)] bg-slate-200 shadow-slate-500/50 flex flex-col justify-start gap-1 w-[379px] h-32 px-4 rounded-lg z-10'>
                    <img className="!w-[30px] !h-[30px] shadow-slate-500/50 translate-x-[120px] translate-y-[30px]"src={person1coment} alt="" />
                    
                    <h3 className='text-[#000] font-mono text-xl whitespace-nowrap not-italic font-semibold leading-[26px] tracking-[0.2]'>Smith Teen</h3>
                    <h4 className='whitespace-nowrap text-xs font-mono font-medium tracking-[0.12] leading-[12px] text-[#b6b4b4]'>Food Vlogger</h4>
                    <p className='text-sm font-mono tracking-[0.14] leading-[18.2px] text-[#7a7a7a]'>“All service provided is so perfect and fast, and im so happy to order from this company”</p>
                
                </div> 
            </div>
            <div className=' flex flex-row -translate-y-[340px] translate-x-[990px] '> 
                <div className='flex flex-rowshadow-[0px_4px_23px_0px_rgba(19,_31,_53,_0.05)] bg-slate-200 shadow-slate-500/50 flex flex-col justify-start gap-1 w-[379px] h-32 px-4 rounded-lg z-10'>
                    <img className="!w-[30px] !h-[30px] shadow-slate-500/50 translate-x-[120px] translate-y-[30px]"src={person2coment} alt="" />
                    
                    <h3 className='text-[#000] font-mono text-xl whitespace-nowrap not-italic font-semibold leading-[26px] tracking-[0.2]'>Bella Wish</h3>
                    <h4 className='whitespace-nowrap text-xs font-mono font-medium tracking-[0.12] leading-[12px] text-[#b6b4b4]'>Food Vlogger</h4>
                    <p className='text-sm font-mono tracking-[0.14] leading-[18.2px] text-[#7a7a7a]'>“All service provided is so perfect and fast, and im so happy to order from this company”</p>
                
                </div> 
                
            </div>
        
        </SwiperSlide>
        <SwiperSlide className=''>
            <img className='block !w-[300px] !h-[300px]  translate-y-[50%] m-auto hover' src={pizza_circular} alt=''></img>
            <div className=' flex flex-row translate-x-[420px] translate-y-[70px]'> 
                <div className='flex flex-rowshadow-[0px_4px_23px_0px_rgba(19,_31,_53,_0.05)] bg-slate-200 shadow-slate-500/50 flex flex-col justify-start gap-1 w-[379px] h-32 px-4 rounded-lg z-10'>
                    <img className="!w-[30px] !h-[30px] shadow-slate-500/50 translate-x-[120px] translate-y-[30px]"src={person1coment} alt="" />
                    
                    <h3 className='text-[#000] font-mono text-xl whitespace-nowrap not-italic font-semibold leading-[26px] tracking-[0.2]'>Smith Teen</h3>
                    <h4 className='whitespace-nowrap text-xs font-mono font-medium tracking-[0.12] leading-[12px] text-[#b6b4b4]'>Food Vlogger</h4>
                    <p className='text-sm font-mono tracking-[0.14] leading-[18.2px] text-[#7a7a7a]'>“All service provided is so perfect and fast, and im so happy to order from this company”</p>
                
                </div> 
            </div>
            <div className=' flex flex-row -translate-y-[340px] translate-x-[990px] '> 
                <div className='flex flex-rowshadow-[0px_4px_23px_0px_rgba(19,_31,_53,_0.05)] bg-slate-200 shadow-slate-500/50 flex flex-col justify-start gap-1 w-[379px] h-32 px-4 rounded-lg z-10'>
                    <img className="!w-[30px] !h-[30px] shadow-slate-500/50 translate-x-[120px] translate-y-[30px]"src={person2coment} alt="" />
                    
                    <h3 className='text-[#000] font-mono text-xl whitespace-nowrap not-italic font-semibold leading-[26px] tracking-[0.2]'>Bella Wish</h3>
                    <h4 className='whitespace-nowrap text-xs font-mono font-medium tracking-[0.12] leading-[12px] text-[#b6b4b4]'>Food Vlogger</h4>
                    <p className='text-sm font-mono tracking-[0.14] leading-[18.2px] text-[#7a7a7a]'>“All service provided is so perfect and fast, and im so happy to order from this company”</p>
                
                </div> 
            </div>

        </SwiperSlide>
        </Swiper>        
        </>
    )
}