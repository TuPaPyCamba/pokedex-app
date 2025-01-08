import PokedexIMG from '../../assets/img/PokeApi.png'

import FacebookIcon from '../../assets/icons/facebook.svg'
import InstagramIcon from '../../assets/icons/Instagram.svg'
import LinkedinIcon from '../../assets/icons/linkedin.svg'
import XIcon from '../../assets/icons/x.svg'

const Footer = () => {
    return (
        <footer className="700:border-t-2">
            <div className='w-90w mx-auto flex flex-col gap-4 mb-16 pt-10 max-w-[1200px]'>
                <img src={PokedexIMG} alt="" className='h-10 w-24' />
                <div className="text-lg font-semibold">Rifate como los grandes y no olvides poner el footer. Ëxito.</div>
                <div className='flex flex-row '>
                    <img src={FacebookIcon} alt="" />
                    <img src={InstagramIcon} alt="" />
                    <img src={LinkedinIcon} alt="" />
                    <img src={XIcon} alt="" />
                </div>
                <div className="text-purple-500 font-bold text-xl">Grutstudio</div>
            </div>
        </footer>
    )
}

export default Footer


