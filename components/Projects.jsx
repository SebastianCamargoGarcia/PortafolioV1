import Image from 'next/image'
import React from 'react'
import turismoApp from '../public/Imagenes/turismo-app.png'
import bioconnect from '../public/Imagenes/bioconnect.png'
import gymManagement from '../public/Imagenes/gym-management.png'
import fastjobs from '../public/Imagenes/fastjobs.png'
import healthtrack from '../public/Imagenes/healttrack.png'
import Link from 'next/link'

const projects = [
  {
    title: 'Turismo App',
    role: 'Full Stack Developer',
    image: turismoApp,
    summary:
      'Plataforma para administrar agencias de turismo con clientes, reservas, asesores, tours, pagos y reportes financieros.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    features: ['Dashboard con KPIs', 'Calendario y Kanban', 'Roles y Supabase Auth', 'Catálogo con WhatsApp'],
    liveUrl: 'https://turismo-app-three.vercel.app/',
  },
  {
    title: 'BioConnect',
    role: 'Full Stack Developer',
    image: bioconnect,
    summary:
      'Catálogo web de productos biomédicos con panel administrativo para productos, categorías, imágenes y líneas comerciales.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Storage'],
    features: ['Búsqueda y filtros', 'Gestión de productos', 'Categorías e imágenes', 'WhatsApp dinámico'],
    liveUrl: 'https://bio-connect-three.vercel.app/',
  },
  {
    title: 'FastJobs',
    role: 'Full Stack Developer',
    image: fastjobs,
    summary:
      'Aplicación universitaria para publicar, administrar y consultar ofertas laborales con perfiles de usuario.',
    tech: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    features: ['Autenticación', 'Publicación de vacantes', 'Búsqueda de ofertas', 'Perfiles'],
    href: 'https://github.com/SebastianCamargoGarcia/FastJobs',
  },
  {
    title: 'HealthTrack',
    role: 'Frontend Developer',
    image: healthtrack,
    summary:
      'Plataforma web de bienestar con landing, hábitos saludables, recomendaciones y dietas personalizadas.',
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    features: ['Landing page', 'Hábitos saludables', 'Recomendaciones', 'Gestión de usuario'],
    href: 'https://github.com/SebastianCamargoGarcia/Health-Track',
  },
  {
    title: 'Gym Management',
    role: 'Frontend Developer',
    image: gymManagement,
    summary:
      'Sistema web para administración básica de gimnasios, clientes, rutinas y panel administrativo.',
    tech: ['React', 'JavaScript', 'CSS'],
    features: ['Gestión de usuarios', 'Rutinas', 'Clientes', 'Panel administrativo'],
  },
]

const Projects = () => {
    return (
      <div id='projects' className='w-full p-10 sm:p-8'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Proyectos</p>
          <h2 className='py-4'>Productos web y móviles orientados a gestión, automatización y negocio</h2>
          <p className='text-gray-600 max-w-[850px] leading-relaxed pb-8'>
            Estos proyectos resumen mi experiencia construyendo paneles administrativos, autenticación,
            reportes, catálogos públicos e integraciones para clientes y proyectos académicos.
          </p>
          <div className='grid md:grid-cols-2 gap-8'>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    )
  }

const ProjectCard = ({ project }) => {
  return (
    <div className='h-full shadow-xl shadow-blue-400 rounded-xl overflow-hidden bg-[#ecf0f3] hover:scale-[1.02] ease-in duration-300'>
      <div className='relative h-56 w-full bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Image className='object-cover opacity-30' src={project.image} alt={project.title} fill />
        <div className='absolute inset-0 flex flex-col justify-end p-6 text-white'>
          <p className='text-sm font-semibold uppercase tracking-widest'>{project.role}</p>
          <h3 className='text-3xl tracking-wider'>{project.title}</h3>
        </div>
      </div>
      <div className='p-6'>
        <p className='text-gray-600 leading-relaxed'>{project.summary}</p>
        <div className='flex flex-wrap gap-2 py-4'>
          {project.tech.map((tech) => (
            <span key={`${project.title}-${tech}`} className='rounded-full bg-white px-3 py-1 text-xs text-gray-700 shadow-sm'>
              {tech}
            </span>
          ))}
        </div>
        <ul className='grid sm:grid-cols-2 gap-2 text-sm text-gray-600'>
          {project.features.map((feature) => (
            <li key={`${project.title}-${feature}`} className='rounded-lg bg-white/70 px-3 py-2'>
              {feature}
            </li>
          ))}
        </ul>
        <div className='mt-5 flex flex-wrap gap-3'>
          {project.liveUrl ? (
            <Link href={project.liveUrl}>
              <p className='inline-block rounded-lg bg-[#5651e5] px-5 py-3 text-white font-semibold cursor-pointer'>
                Ver proyecto
              </p>
            </Link>
          ) : null}
          {project.href ? (
            <Link href={project.href}>
              <p className='inline-block rounded-lg bg-white px-5 py-3 text-[#5651e5] font-semibold cursor-pointer'>
                Ver en GitHub
              </p>
            </Link>
          ) : null}
          {!project.liveUrl && !project.href ? (
            <p className='inline-block rounded-lg bg-white px-5 py-3 text-[#5651e5] font-semibold'>
              Proyecto destacado
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Projects