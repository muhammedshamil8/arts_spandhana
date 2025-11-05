/* eslint-disable react/no-unescaped-entities */
import HeroImage from '../../assets/arts/hero.png';
import Logo2 from '../../assets/logo2.svg';
import Shadow from '../../assets/shadow.png';
import ContentImage from '../../assets/ARTSlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import '../../styles/Hero.css';
// import { TypeAnimation } from 'react-type-animation';

function Hero() {

    return (
        <div className='relative'>

            {/*  due to more responsive i will design normal css .... */}
            <div className="flex items-center justify-center relative" id='hero'>
                <img src={HeroImage} className='object-cover w-full h-full relative z-10' alt="hero-bg" />

                {/* <img src={Shadow} alt="shadow" className='absolute top-3 animate-pulse z-20' /> */}

            </div>
            <div className='-mt-16  h-fit w-full z-50 mx-auto md:px-14 px-10'>
                <div className='bg-white h-full w-full pt-10 text-center relative flex  overflow-hidden rounded-b-lg  responsive-custom-content p-2'>
                    <div className='mx-auto responsive-content-img-card '>

                        <img src={ContentImage} alt="content" className=' responsive-content-img' />
                    </div>

                    <div className='mt-10 p-4  text-center md:text-left flex flex-col gap-4 max-w-[600px] mx-auto responsive-content-text basis-9/12 justify-center items-center'>
                        <p className=' text-center md:text-left w-full'>
                        Welcome to HIO ITE College, Olavattur, <br />
                        where creativity comes alive!


                        </p>
                        <p className=''>
                        Step into the vibrant world of “SPANDHAN 2K25,” our festival celebrating artistic brilliance, talent, and innovation.
                        Experience a dynamic spectrum of events,
                        </p>

                        <p className=''>
                        from captivating stage performances to inspiring exhibitions. Stay tuned for the results, where we honor the outstanding achievements of our talented participants.
                        </p>
                        <p className=''>
                        Meet the driving forces behind SPANDHAN 2K25,
                        the coordinators and convenors whose teamwork and passion make this unforgettable celebration possible.
                        </p>
                    </div>
                    </div>
                    </div>
                </div>
    )
}

export default Hero;
