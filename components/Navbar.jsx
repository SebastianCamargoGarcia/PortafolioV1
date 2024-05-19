import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect, useReducer} from 'react';
import {AiOutlineClose, AiOutlineMail ,AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {useRoter, useRouter} from 'next/router'
const Navbar = () => {
    const [nav, setNav] = useState(false)  
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const [position, setPosition] = useState('fixed')
    const router = useRouter();

  useEffect(() => {
  if (
       router.asPath === '/property' ||
       router.asPath === '/crypto' ||
       router.asPath === '/netflix' ||
       router.asPath === '/twitch'
     ) {
       setNavBg('transparent');
       setLinkColor('#ecf0f3');
     } else {
       setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
     }
   }, [router]);

    const handleNav = () => {
        setNav(!nav);


    };

    useEffect(()=> {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
            setShadow(true)
        }else{
            setShadow(false)
        }
        };
        window.addEventListener('scroll', handleShadow);

        
    },[])

  return (
<div style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }>
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image 
            src="/Imagenes/Logo.png" 
            alt="/"
            width='70' 
            height='50' />
        <div>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                
                    
                <li className='ml-10 text-sm uppercase hover:border-b'><a href='#main'>Inicio</a></li>  
                
                <li className='ml-10 text-sm uppercase hover:border-b'><a href='#about'>Sobre mi</a></li>

                <li className='ml-10 text-sm uppercase hover:border-b'><a href='#skills'>Habilidades</a></li>
                 
                <li className='ml-10 text-sm uppercase hover:border-b'><a href='#projects'>Proyectos</a></li>
                
                <li className='ml-10 text-sm uppercase hover:border-b'><a href='#contact'>Contactame</a></li>
                 
            </ul>
            <div style={{ color: `${linkColor}` }}
                onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={30}/>
                
            </div>
        </div>
    </div> 

    <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}> 
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500' }>
            <div>
                <div className='flex w-full items-center justify-between'>
                <Image src='/Imagenes/Logo.png' width='87' height='35' alt='/' />
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose />
                    </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Creemos algo juntos</p>
                </div>
            </div>
            <div className='py-4 flex-col'>
                <ul className='uppercase'>
                    <Link href='/'>
                    <li className='py-4 text-sm'>Inicio</li>
                    </Link>

                    <Link href='/#about'>
                    <li className='py-4 text-sm'>Sobre mi</li>
                    </Link>

                    <Link href='/#skills'>
                    <li className='py-4 text-sm'>Habilidades</li>
                    </Link>

                    <Link href='/#projects'>
                    <li className='py-4 text-sm'>Proyectos</li>
                    </Link>

                    <Link href='/#contact'>
                    <li className='py-4 text-sm'>Contactame</li>
                    </Link>

                </ul>
                <div className='pt-40'>
                    <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <Link href='https://www.linkedin.com/in/sebastian-camargo-2998b7177/'>
                        <div className='rounded-full shadow-lg shadow-blue-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                        </div> 
                        </Link>
                        <div className='rounded-full shadow-lg shadow-blue-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-blue-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-blue-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                        </div>       
                     

                    </div>
                </div>

            </div>

        </div>
    </div>
</div>
  )
}

export default Navbar;