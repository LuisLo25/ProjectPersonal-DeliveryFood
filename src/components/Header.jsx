import bolsa from '../assets/shopping-bag.svg';

export function Header() {
    return (
        <div className="overflow-hidden bg-white flex flex-col justify-end pt-10 w-full items-stretch">
            <nav className="flex flex-row justify-center gap-8 items-center mb-16 mx-24">
                <a href="#" className="text-2xl font-mono font-bold tracking-[0.24] leading-[24px] text-[#ec994b] mr-[348px] w-12 shrink-0 ">
                    F&D
                </a>
                <div className="self-start flex flex-col justify-start gap-2 w-16 shrink-0 h-6 items-center mt-4 mr-4">
                    <a href="#"className="text-[16px] font-mono font-semibold tracking-[0.16] leading-[16px] text-[#222224] self-stretch mx-1">
                        Home
                    </a>
                    <div className="border-solid border-[#ec994b] w-16 h-px shrink-0 bordert-2 borderb-0 borderx-0 rounded-none" />
                </div>
                <a  href="#" className="font-mono font-semibold tracking-[0.16] leading-[16px] text-[#222224] mr-5 w-12 shrink-0">
                    Menu
                </a>
                <a  href="#" className="font-mono font-semibold tracking-[0.16] leading-[16px] text-[#222224] mr-5 w-16 shrink-0">
                    Services
                </a>
                <a href="#" className="font-mono font-semibold tracking-[0.16] leading-[16px] text-[#222224] mr-6 w-16 shrink-0">
                    Contact
                </a>
                <a href="#" className="bg-cover bg-50%_50% bg-blend-normal relative flex flex-col justify-start w-12 shrink-0 items-end pt-2 pb-9 px-2">
                    <img
                        src={bolsa}
                        className="w-6 h-6 min-h-0 min-w-0 absolute top-3 left-3"
                    />   
                </a>
                <button className="border-solid border-[#ec994b] flex flex-col justify-center h-12 w-32 items-center border rounded-[41px] font-['Poppins'] font-semibold tracking-[0.16] leading-[16px] text-[#ec994b]  mx-4 cursor-pointer">
                   
                        Register
                   
                </button>
                <button className="bg-[#ec994b] flex flex-col justify-center h-12 w-32 items-center rounded-[41px] font-['Poppins'] font-semibold tracking-[0.16] leading-[16px] text-white  cursor-pointer">
                   
                        Login
                   
                </button>
            </nav>
        </div>
    )
}