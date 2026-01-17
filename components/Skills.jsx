import React from 'react';
import Image from 'next/image';

const Skills = () => {
    return (
        <div id='skills' className='w-full p-10 sm:p-8'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h3 className='py-4'>Tengo solidos conocimientos en los siguientes lenguajes y framework</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
                    <div className='card p-6 shadow-xl rounded-xl shadow-blue-300 hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/Imagenes/skills_c-sharp.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C#</h3>
                            </div>
                        </div>
                    </div>

                    <div className='card p-6 shadow-xl rounded-xl shadow-blue-300 hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/Imagenes/skills_java.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JAVA</h3>
                            </div>
                        </div>
                    </div>

                    <div className='card p-6 shadow-xl rounded-xl shadow-blue-300 hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/Imagenes/skills_js.png' width='64' height='64' alt='/' />
                            </div>
                            <div className=' flex flex-col items-center justify-center'>
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>                   
                                  
                    <div className='card p-6 shadow-xl rounded-xl shadow-blue-300 hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/Imagenes/skills_sqlserver.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>SQLserver</h3>
                            </div>
                        </div>
                    </div>

                    <div className='card p-6 shadow-xl rounded-xl shadow-blue-300 hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/Imagenes/skills_MySQL.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MySQL</h3>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    );
}

export default Skills;
