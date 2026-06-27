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

  const getArrowClipPath = (isLast) => {
    if (isLast) return 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 8% 50%)'
    return 'polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 8% 50%)'
  }

  return (
    <div id='about' className='w-full p-10 sm:p-8 flex items-center py-16 mt-1'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Experiencia Profesional</p>
          <h2 className='py-4'>De soporte SAP a desarrollo Full Stack empresarial</h2>
          <p className='text-gray-600 leading-relaxed'>
            Combino conocimiento funcional de ERP, backend robusto y desarrollo web moderno para crear
            integraciones, paneles administrativos y aplicaciones orientadas a automatizar procesos reales.
          </p>

          <div className='mt-6'>
            <div className='w-full overflow-x-auto pb-2'>
              <div className='min-w-[900px] flex items-center'>
                {experienceItems.map((item, index) => {
                  const isActive = item.id === activeId
                  const isPinned = item.id === pinnedId
                  const isLast = index === experienceItems.length - 1

                  return (
                    <div key={item.id} className='flex-1'>
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
                            'relative h-11 flex items-center justify-center font-semibold text-sm transition',
                            isActive ? 'bg-[#5651e5] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
                          ].join(' ')}
                          style={{ clipPath: getArrowClipPath(isLast) }}
                        >
                          <span className='px-3 whitespace-nowrap'>{item.tab}</span>

                          <span
                            className={[
                              'absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border',
                              isActive ? 'bg-white border-white' : 'bg-white border-gray-300',
                            ].join(' ')}
                            aria-hidden='true'
                          />
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

        <div className='w-full h-auto m-auto shadow-xl shadow-blue-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src='/Imagenes/Designer.png' width='280' height='280' alt='About me' />
        </div>
      </div>
    </div>
  )
}

const ExperienceCard = ({ item, isPinned }) => {
  return (
    <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
      <div className='flex items-start justify-between gap-4'>
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
