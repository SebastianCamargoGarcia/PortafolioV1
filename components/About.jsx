import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full p-10 sm:p-8 flex items-center py-16 mt-1'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5] '>¡Sobre mi!</p>
                <p className='py-2 text-gray-600'>
                  Trabajé en <span style={{ color: '#11A0D9' }}>NEDUGA TECH</span> brindando soporte técnico especializado a
                  usuarios de SAP B1, resolviendo incidencias y proporcionando soluciones eficientes para garantizar la continuidad operativa,
                  asimismo, realice restricciones personalizadas en la base de datos para garantizar la integridad y coherencia de los datos,
                  incluyendo validaciones de campos obligatorios y reglas de negocio utilizando Stored Procedures (SP) en SQL Server para adaptar
                  el sistema a las necesidades específicas de cada cliente.
                  <br />
                  También he adquirido habilidades valiosas a través de proyectos académicos y personales, demostrando mi capacidad para abordar
                  desafíos técnicos y colaborar en equipos multidisciplinarios. Estos proyectos han fortalecido mis habilidades en desarrollo de software,
                  trabajo en equipo y resolución de problemas, preparándome para enfrentar desafíos en el campo laboral.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-blue-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
              <img className='rounded-xl' src='/Imagenes/Designer.png' width='280' height='280' alt="About me" />
            </div>
        </div>
    </div>
  )
}

export default About
