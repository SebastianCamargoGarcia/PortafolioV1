import Image from 'next/image'
import React from 'react'
import fastjobs from '../public/Imagenes/fastjobs.png'
import loginpy from '../public/Imagenes/loginpy.png'
import img_api from '../public/Imagenes/img_api.png'
import healthtrack from '../public/Imagenes/healttrack.png'
import Link from 'next/link'

const Projects = () => {
    return (
      <div id='projects' className='w-full p-10 sm:p-8'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Proyectos</p>
          <h2 className='py-4'>He creado y/o participado en estos proyectos universitarios</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Proyecto 1 */}
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-blue-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
              <Image className='rounded-xl group-hover:opacity-10' src={fastjobs} alt="/" />
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>FASTJOBS</h3>
                <p className='pb-4 pt-2 text-white text-center'> PHP </p>
                <Link href="https://github.com/SebastianCamargoGarcia/FastJobs">
                  <p className='text-center py-3 rounded-lg bg-white text-gray-700 front-bold text-2xl cursor-pointer'>GitHub</p>
                </Link>    
              </div>
            </div>
            {/* Proyecto 2 */}
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-blue-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
              <Image className='rounded-xl group-hover:opacity-10' src={loginpy} alt="/" />
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>LOGIN PYTHON y MySql</h3>
                <p className='pb-4 pt-2 text-white text-center'> Python </p>
                <Link href="https://github.com/SebastianCamargoGarcia/create_login">
                  <p className='text-center py-3 rounded-lg bg-white text-gray-700 front-bold text-2xl cursor-pointer'>GitHub</p>
                </Link>    
              </div>
            </div>
            {/* Proyecto 3 */}
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-blue-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
              <Image className='rounded-xl group-hover:opacity-10' src={img_api} alt="/" />
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>RESTAPI</h3>
                <p className='pb-4 pt-2 text-white text-center'> Python </p>
                <Link href="https://github.com/SebastianCamargoGarcia/RestAPI_Flask_MySql">
                  <p className='text-center py-3 rounded-lg bg-white text-gray-700 front-bold text-2xl cursor-pointer'>GitHub</p>
                </Link>    
              </div>
            </div>

            {/* Proyecto 4 */}
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-blue-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
              <Image className='rounded-xl group-hover:opacity-10' src={healthtrack} alt="/" />
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>HEALTH TRACK</h3>
                <p className='pb-4 pt-2 text-white text-center'> JavaScript - NodeJs - Angular </p>
                <Link href="https://github.com/SebastianCamargoGarcia/Health-Track">
                  <p className='text-center py-3 rounded-lg bg-white text-gray-700 front-bold text-2xl cursor-pointer'>GitHub</p>
                </Link>    
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Projects