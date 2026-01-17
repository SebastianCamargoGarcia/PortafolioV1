import React, { useMemo, useState } from 'react'

const About = () => {
  // Nuevo: data de experiencias
  const experienceItems = useMemo(
    () => [
      {
        id: 'exp-1',
        tab: 'Backend — NedugaTech',
        title: 'Desarrollador Backend — NedugaTech',
        period: '2024 – Actualidad',
        description:
          'Diseño, desarrollo e implementación de soluciones empresariales orientadas a la automatización de procesos e integración ERP.',
        bullets: [
          'APIs REST en .NET (capas, DTOs, AutoMapper, FluentValidation, EF).',
          'Optimización de SQL Server (SPs, funciones, vistas).',
          'Reglas de negocio y validaciones a nivel BD (Stored Procedures).',
          'Integraciones con SAP Business One (DI API y Service Layer).',
          'Optimización de consultas, transacciones y control de errores.',
        ],
      },
      {
        id: 'exp-2',
        tab: 'Junior — Transkal',
        title: 'Desarrollador Junior — Adur / Transkal',
        period: '2024 – 2025',
        description:
          'Implementación de soluciones personalizadas en ERP Transkal enfocadas en optimización de procesos empresariales.',
        bullets: [
          'Desarrollo de módulos personalizados sobre ERP Transkal.',
              'Automatización de procesos y validaciones de información.',
              'Integración de funcionalidades para logística, facturación, inventarios y control administrativo.',
              'Trabajo colaborativo con equipos multidisciplinarios.',
              'Buenas prácticas de programación y control de versiones.',
        ],
      },
      {
        id: 'exp-3',
        tab: 'Soporte SAP — NedugaTech',
        title: 'Soporte e Implementación SAP B1 — NedugaTech',
        period: '2024',
        description:
          'Soporte especializado con reglas de negocio y validaciones en base de datos para SAP Business One.',
        bullets: [
          'Resolución de incidencias funcionales y técnicas.',
          'Restricciones y validaciones mediante Stored Procedures.',
          'Adaptación de SAP a procesos de clientes.',
          'Optimización de integridad de datos.',
        ],
      }
    ],
    []
  )

  // Nuevo: hover + pin (click)
  const [hoveredId, setHoveredId] = useState(null)
  const [pinnedId, setPinnedId] = useState(experienceItems[0]?.id || null)

  // Nuevo: activo = pinned si existe, si no hovered, si no primero
  const activeId = pinnedId || hoveredId || experienceItems[0]?.id

  // Nuevo: toggle pin
  const handlePin = (id) => {
    setPinnedId((prevPinnedId) => (prevPinnedId === id ? null : id))
  }

  // Nuevo: item activo
  const activeItem = useMemo(() => {
    return experienceItems.find((x) => x.id === activeId) || experienceItems[0]
  }, [activeId, experienceItems])

  // Nuevo: forma de “flecha”
  const getArrowClipPath = (isLast) => {
    if (isLast) return 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 8% 50%)'
    return 'polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 8% 50%)'
  }

  return (
    <div id='about' className='w-full p-10 sm:p-8 flex items-center py-16 mt-1'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Experiencia Profesional</p>

          <div className='mt-6'>
            {/* Nuevo: Stepper horizontal */}
            <div className='w-full overflow-x-auto pb-2'>
              <div className='min-w-[760px] flex items-center'>
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

                          {/* Nuevo: punto indicador */}
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
            {/* Nuevo: Panel único SIEMPRE abajo */}
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

// Nuevo: tarjeta de detalle
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
