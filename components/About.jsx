import React, { useMemo, useState } from 'react'

const About = () => {
  const experienceItems = useMemo(
    () => [
      {
        id: 'exp-1',
        tab: '.NET · SAP B1',
        title: 'Desarrollador Backend — Neduga Tech',
        period: 'Marzo 2025 – Actualidad',
        description:
          'Desarrollo servicios de integración para un aplicativo web conectado con SAP Business One, optimizando procesos e interoperabilidad empresarial.',
        bullets: [
          'APIs REST con ASP.NET Core, C#, Entity Framework Core, DTOs, AutoMapper y FluentValidation.',
          'Integración con SAP Business One Service Layer para datos maestros y módulos transaccionales.',
          'Módulos para Business Partners, Items, Employees, Service Calls, Activities y Sales Opportunities.',
          'Reglas de negocio con SQL Server, Stored Procedures, Functions y Views.',
          'Publicación de APIs y aplicaciones en Windows Server mediante IIS.',
        ],
      },
      {
        id: 'exp-2',
        tab: 'Java · ERP',
        title: 'Desarrollador Java — ADUR / Transkal',
        period: 'Julio 2024 – Febrero 2025',
        description:
          'Desarrollé funcionalidades para ERP y una plataforma de mensajería integrada inspirada en WhatsApp Web.',
        bullets: [
          'Módulos en Java para automatizar procesos internos.',
          'Validaciones de negocio para mantener integridad y consistencia de información.',
          'Mantenimiento evolutivo del ERP para diferentes clientes.',
          'Trabajo colaborativo con SVN y metodologías de desarrollo en equipo.',
        ],
      },
      {
        id: 'exp-3',
        tab: 'Soporte SAP',
        title: 'Ingeniero de Soporte SAP Business One — Neduga Tech',
        period: 'Febrero 2023 – Abril 2024',
        description:
          'Brindé soporte funcional y técnico para SAP Business One, adaptando el ERP a procesos específicos de cada empresa.',
        bullets: [
          'Resolución de incidencias funcionales y técnicas.',
          'Personalizaciones y validaciones mediante Stored Procedures en SQL Server.',
          'Capacitación a usuarios finales y soporte continuo.',
          'Automatización de reglas de negocio para mejorar la estabilidad operativa.',
        ],
      },
      {
        id: 'exp-4',
        tab: 'Full Stack',
        title: 'Full Stack Developer — Freelance',
        period: 'Enero 2021 – Octubre 2023',
        description:
          'Construí soluciones web para turismo, salud, comercio y gestión empresarial, desde frontend hasta base de datos y despliegue.',
        bullets: [
          'Backend en Go para sistema de comandas de restaurantes con APIs REST.',
          'Turismo App con Next.js, Supabase, PostgreSQL, autenticación, roles, dashboard, Kanban y métricas financieras.',
          'Catálogos públicos con integración a WhatsApp para mejorar captación de clientes.',
          'Paneles administrativos con React, TypeScript, Tailwind CSS y Supabase.',
        ],
      }
    ],
    []
  )

  const [hoveredId, setHoveredId] = useState(null)
  const [pinnedId, setPinnedId] = useState(experienceItems[0]?.id || null)

  const activeId = pinnedId || hoveredId || experienceItems[0]?.id

  const handlePin = (id) => {
    setPinnedId((prevPinnedId) => (prevPinnedId === id ? null : id))
  }

  const activeItem = useMemo(() => {
    return experienceItems.find((x) => x.id === activeId) || experienceItems[0]
  }, [activeId, experienceItems])

  return (
    <div id='about' className='w-full px-5 sm:px-8 lg:px-10 py-14 sm:py-16 mt-1'>
      <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-3'>
        <div className='col-span-2'>
          <p className='uppercase text-sm sm:text-xl tracking-widest text-[#5651e5]'>Experiencia Profesional</p>
          <h2 className='py-4'>De soporte SAP a desarrollo Full Stack empresarial</h2>
          <p className='text-gray-600 leading-relaxed'>
            Combino conocimiento funcional de ERP, backend robusto y desarrollo web moderno para crear
            integraciones, paneles administrativos y aplicaciones orientadas a automatizar procesos reales.
          </p>

          <div className='mt-6'>
            <div className='w-full pb-2'>
              <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
                {experienceItems.map((item) => {
                  const isActive = item.id === activeId
                  const isPinned = item.id === pinnedId

                  return (
                    <div key={item.id}>
                      <button
                        type='button'
                        className='w-full'
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => handlePin(item.id)}
                        aria-pressed={isPinned}
                        title='Ver experiencia'
                      >
                        <div
                          className={[
                            'relative min-h-12 rounded-2xl px-3 py-3 flex items-center justify-center font-semibold text-xs sm:text-sm transition',
                            isActive ? 'bg-[#5651e5] text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-800 hover:bg-gray-100',
                          ].join(' ')}
                        >
                          <span>{item.tab}</span>
                        </div>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='mt-5'>
              {activeItem ? <ExperienceCard item={activeItem} isPinned={pinnedId === activeItem.id} /> : null}
            </div>
          </div>
        </div>

        <div className='w-full max-w-[320px] mx-auto md:max-w-none md:m-auto shadow-xl shadow-blue-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl w-full max-w-[240px] sm:max-w-[280px]' src='/Imagenes/Designer.png' width='280' height='280' alt='About me' />
        </div>
      </div>
    </div>
  )
}

const ExperienceCard = ({ item, isPinned }) => {
  return (
    <div className='rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm'>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4'>
        <div>
          <p className='text-sm font-semibold text-gray-900'>{item.title}</p>
          <p className='mt-1 text-xs font-semibold tracking-wide text-gray-500'>{item.period}</p>
        </div>

        {isPinned ? (
          <span className='text-xs font-semibold text-[#5651e5] bg-[#5651e5]/10 px-3 py-1 rounded-full'>
            Seleccionado
          </span>
        ) : null}
      </div>

      {item.description ? <p className='mt-4 text-sm text-gray-600 leading-relaxed'>{item.description}</p> : null}

      {item.bullets?.length ? (
        <ul className='mt-4 list-disc ml-5 text-sm text-gray-600'>
          {item.bullets.map((b, i) => (
            <li key={`${item.id}-b-${i}`}>{b}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default About
