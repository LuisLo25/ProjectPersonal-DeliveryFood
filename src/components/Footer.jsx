import facebook_logo from "../assets/facebook_logo.svg"
import instagram_logo from "../assets/instagram_logo.svg"
import mail_logo from "../assets/mail_logo.svg"
import twiter_logo from "../assets/twiter_logo.svg"

export function Footer() {

    return (
        <div>
            <footer className="bg-[#222224]">
                <div className="grid grid-cols-6 gap-4 h-[280px] w-full place-content-center">
                    <div className=" mt-[10%] text-center ">
                        <a className="text-2xl font-mono font-bold tracking-[0.24] leading-[24px] text-[#ec994b]"  href="">F&D</a>
                        <div className="grid grid-cols-2  gap-4 place-content-center w-[100px] ml-[40%] pt-[20px]">
                            <img className="w-8" src={facebook_logo} alt="" />
                            <img className="w-8" src={instagram_logo} alt="" />
                            <img className="w-8" src={mail_logo} alt="" />
                            <img className="w-8" src={twiter_logo} alt="" />

                        </div>
                    </div>
                    <div className="flex list-item  list-none mt-[10%] justify-self-center text-start">
                       <a className="text-lg font-[Quicksand] font-bold text-[#e2e2e2]">Our Product</a> 
                        <ul className="text-base font-[Quicksand] text-[#e2e2e2] ">
                            <li className="pt-[5px] " href="#">Support</li>
                            <li  href="#">Guide</li>

                        </ul>
                    </div>
                    <div className="list-item  list-none mt-[10%] justify-self-center text-start ">
                     <a className="text-lg font-[Quicksand] font-bold text-[#e2e2e2] " >Terms & policies</a>   
                        <ul className="text-base font-[Quicksand] text-[#e2e2e2] font-light ">
                            <li className="pt-[5px] " href="#">Terms of Service</li>
                            <li href="#">Privacy Policy</li>

                        </ul>
                    </div>
                    <div className="list-item  list-none mt-[10%] justify-self-center text-start" >
                       <a className="text-lg font-[Quicksand] font-bold text-[#e2e2e2]"> Company</a>
                    
                        <ul className="text-base font-[Quicksand] text-[#e2e2e2] font-light ">
                            <li className="pt-[5px] " href="#">Home</li>
                            <li className="pt-[5px] " href="#">About Us</li>
                            <li href="#">Contact Us</li>

                        </ul>
                    </div>
                    <div className="list-item  list-none mt-[10%]  justify-self-center text-start">
                       <a className="text-lg font-[Quicksand] font-bold text-[#e2e2e2]" >Contact</a> 
                        <ul className="text-base font-[Quicksand] text-[#e2e2e2] font-light ">
                            <li  className="pt-[5px] " href="#">(+62) 893912392190</li>
                            <li  className="pt-[5px] " href="#">agecnycr@gmail.com</li>

                        </ul>
                    </div>
                    <div className="list-item  list-none mt-[10%] justify-self-center text-start">
                  <a className="text-lg font-[Quicksand] font-bold text-[#e2e2e2]"> Food Delivery</a> 
                    <ul className="text-base font-[Quicksand] text-[#e2e2e2] font-light ">
                        <li  className="pt-[5px] " href="#">KFC Delivery</li>
                        <li href="#">Bungo Tanjung Delivery</li>

                    </ul>
                    </div>
                </div> 
                <div className="text-center whitespace-nowrap text-sm font-[Inter] leading-[20px] text-white py-[10px] w-full">
                    © NameBrand 2022 - All Rights Reserved
                </div>      
            </footer >
        </div >
    )
}