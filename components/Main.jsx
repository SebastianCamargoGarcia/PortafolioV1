import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  const email = 'ssebastiancamargo19@gmail.com';
  const numero = ' +57 3005516355';
  const [showCopyMessageEmail, setShowCopyMessageEmail] = useState(false);
  const [showCopyMessageNumero, setShowCopyMessageNumero] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowCopyMessageEmail(true);
    setTimeout(() => setShowCopyMessageEmail(false), 2000);
  };

  const copyToNumero = () => {
    navigator.clipboard.writeText(numero);
    setShowCopyMessageNumero(true);
    setTimeout(() => setShowCopyMessageNumero(false), 2000);
  };

  return (
    <div id='main' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center mb-1'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'><span className='text-blue-500'>¡Bienvenido!</span></p>
          <h1 className='py-4 text-gray-700'>Soy <span className='text-blue-500'>Sebastian</span></h1>
          <h1 className='py-2 text-gray-700'>Un <span className='text-blue-500'>Desarrollador</span></h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            Desarrollador Backend con más de un año de experiencia en .NET y SQL Server, enfocado en soluciones empresariales basadas en Clean Architecture y principios SOLID. 
Experiencia en integración ERP (SAP Business One), desarrollo de APIs REST y automatización de procesos orientados al rendimiento y la escalabilidad.

          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link href='https://www.linkedin.com/in/sebastian-camargo-2998b7177/'>
              <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href='https://github.com/SebastianCamargoGarcia'>
              <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </Link>
            <div 
              className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
              onClick={copyToClipboard}
              onMouseEnter={() => setShowCopyMessageEmail(true)}
              onMouseLeave={() => setShowCopyMessageEmail(false)}
            >
              <AiOutlineMail />
              {showCopyMessageEmail && (
                <div className="text-center text-xs text-gray-500 pt-1">Haz clic para copiar mi correo</div>
              )}
            </div>
            <div 
              className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
              onClick={copyToNumero}
              onMouseEnter={() => setShowCopyMessageNumero(true)}
              onMouseLeave={() => setShowCopyMessageNumero(false)}
            >
              <BsFillPersonLinesFill />
              {showCopyMessageNumero && (
                <div className="text-center text-xs text-gray-500 pt-1">Haz clic para copiar mi número</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
