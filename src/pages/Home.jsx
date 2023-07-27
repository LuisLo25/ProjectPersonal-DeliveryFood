
import mujer from '../assets/mujer_comida.svg';
import icono_play from '../assets/play_circle.svg';
import pago1 from "../assets/pago1.svg";
import pago2 from "../assets/pago2.svg";
import pago3 from "../assets/pago3.svg";
import pago4 from "../assets/pago4.svg";
import pago5 from "../assets/pago5.svg";
import customer1 from "../assets/customer1.svg";
import customer2 from "../assets/customer2.svg";
import customer3 from "../assets/customer3.svg";
import { Servicio } from '../components/Servicio.jsx';
import { Carrusel } from '../components/Carrusel.jsx';
import { Carrusel3 } from '../components/Carrusel3.jsx';
import { Header } from '../components/header';
import { Carrusel4 } from '../components/carrusel4.jsx';
import mujer_pizza from '../assets/mujer_pizza.svg';
import { Footer } from '../components/Footer';

export function Home() {

    const pagos = [pago1, pago2, pago3, pago4, pago5]
    const customer = [customer1, customer2, customer3]
    const createRating = ([
        rating,
        total = 5,
        startIcon = '★',
        emptyIcon = '☆',

    ]) => {
        const starts = startIcon.repeat(rating)
        const empty = emptyIcon.repeat(total - rating)
        console.log(starts)
        return starts - empty
    }

    return (

        <>
            <Header></Header>
            <main>
                <section className='grid justify-items-center grid-cols-2 w-full h-[588px] '>
                    <div>
                        <h1 className='text-[#222224]font-mono text-[64px] not-italic font-bold leading-[76.8px] tracking-[0.64px] mt-[30px] '>
                            Don’t wanna <br></br>
                            Make you have <br></br>
                            A bad day
                        </h1>
                        <p className='flex w-[560px] flex-col shrink-0 text-[#797979] font-mono text-[20px] not-italic font-medium leading-[26px] tracking-[0.2px] mt-[20px]'>
                            Our job is delivering a delicious food with fast , free delivery and easy.
                        </p>
                        <div className='grid  grid-cols-3 mt-[50px] '>
                            <button className="bg-[#ec994b] flex flex-col justify-center h-12 w-36 items-center rounded-[41px] font-[Poppins] font-semibold tracking-[0.16] leading-[16px] text-white  cursor-pointer">
                                Orden Now
                            </button>
                            <button className="col-span-2 border-solid border-[#ec994b] flex h-12 w-48 items-center justify-evenly border rounded-[41px] font-[Poppins] font-semibold tracking-[0.16] leading-[16px] text-[#ec994b] cursor-pointer">

                                <img src={icono_play} alt="#" className='' />
                                How to order
                            </button>
                        </div>
                        <div className='flex flex-row justify-start items-center'>
                            <div className='mt-[40px]'>
                                <ul className={`flex  flex-row items-center w-36 h-16  mt-3 flex -space-x-4 overflow-hidden`}>
                                    {

                                        customer.map((v, i) => (<li key={i} className='flex flex-row w-[535px]'>

                                            <img className={`inline-block h-12 w-12 rounded-full ring-2 ring-white`} src={v}>
                                            </img></li>))

                                    }

                                </ul>
                            </div>
                            <div className='grid grid-rows-2 mt-[60px] place-content-center w-36 h-16'> <h4 className='text-[#222224] font-[Poppins] font-bold text-base not-italic tracking-[0.16] leading-[16px]'>Customer Review</h4><h5 className='text-[#FBC400]'>★★★★★ <span className='text-[#000] font-[Poppins] font-semibold text-base not-italic'>4.8</span></h5></div>
                        </div>
                    </div>
                    <div >
                        <img src={mujer} alt="" />
                    </div>
                </section>
                <section className='mt-[120px]'>
                    <h3 className='text-[#9C9C9C;] text-[14px] font-semibold not-italic text-center'>Support by :</h3>
                    <div className='mt-[10px] flex items-center'>
                        <ul className='grid grid-cols-5 items-center pl-[200px] w-full h-[90px]'>

                            {
                                pagos.map((v, i) => (
                                    <li key={i}>
                                        <img src={v} alt="" />

                                    </li>
                                ))

                            }

                        </ul>
                    </div>
                </section>
                <section className='mt-56'>
                    <h2 className='w-full  text-[#222224] whitespace-nowrap text-mono text-center text-4xl not-italic font-bold leading-normal'>Our serve just for you</h2>
                    <Servicio></Servicio>
                </section>
                <section className='mt-56'>
                    <h2 className='text-[#222224] text-center font-mono text-4xl leading-normal font-bold not-italic mb-[80px] whitespace-nowrap'>Trending food</h2>
                    <Carrusel></Carrusel>
                </section>
                <section className='mt-56'>
                    <h2 className='text-[#222224] text-center font-mono text-4xl leading-normal font-bold not-italic mb-[80px] whitespace-nowrap'>Comment for Food</h2>
                    <Carrusel4></Carrusel4>
                </section>
                <section className='mt-56'>
                    <Carrusel3></Carrusel3>
                </section>
                <section className='mt-56 grid grid-cols-2  justify-items-center content-center w-full h-[450px] shrink-0 bg-[#EC994B]'>
                    <img className="w-[348px] h-[319px] ml-[60px]" src={mujer_pizza} alt=''></img>
                    <div className='justify-self-start' >
                        <h2 className='text-[46px] font-mono font-semibold tracking-[0.48] leading-[62.4px] text-white'>Get more discount if <br></br> you order from us</h2>
                        <p className='mt-[20px] text-mono font-medium  text-[17px] tracking-[0.16] leading-[20.8px] text-white text-start'>Join with us then you must have get a discount and get promo<br></br> from us to you , enjoy and happy to order.</p>
                        <div className='inline-flex mt-[20px]'>
                            <input className='text-mono rounded-[8px] h-[65px] w-[370px] focus:shadow-md focus:outline-none border border-gray-300 focus:border-gray-400 px-[20px]' type="text" placeholder='Your Email Address ' id='text' />
                            <button className='ml-[10px] bg-[#222224] w-[114px] h-[65px] rounded-lg text-white font-mono' type='submit'>GET</button>
                        </div>

                    </div>

                </section>

            </main>
            <Footer></Footer>
        </>
    )

}