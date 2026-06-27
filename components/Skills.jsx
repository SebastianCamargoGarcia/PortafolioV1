import React from 'react';

const skillGroups = [
    {
        title: 'Backend & APIs',
        skills: ['ASP.NET Core', 'C#', 'NestJS', 'Go', 'FastAPI', 'Java', 'REST APIs'],
    },
    {
        title: 'Frontend & Mobile',
        skills: ['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'Flutter', 'Tailwind CSS'],
    },
    {
        title: 'Bases de datos',
        skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase Firestore', 'Storage'],
    },
    {
        title: 'Arquitectura',
        skills: ['Clean Architecture', 'Arquitectura por capas', 'SOLID', 'Clean Code', 'DTOs'],
    },
    {
        title: 'Cloud, DevOps & ERP',
        skills: ['Docker', 'IIS', 'GitHub Actions', 'SAP Business One', 'Service Layer', 'Git'],
    },
    {
        title: 'Trabajo & AI-First',
        skills: ['Scrum', 'Kanban', 'Code Review', 'Pair Programming', 'Cursor', 'Claude', 'Postman'],
    },
];

const Skills = () => {
    return (
        <div id='skills' className='w-full p-10 sm:p-8'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Habilidades Técnicas</p>
                <h2 className='py-4'>Stack para crear productos completos, integraciones y automatizaciones</h2>
                <p className='text-gray-600 max-w-[850px] leading-relaxed pb-8'>
                    Trabajo desde el diseño de interfaces hasta APIs, bases de datos, despliegues y procesos
                    empresariales conectados con ERP.
                </p>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className='card p-6 shadow-xl rounded-xl shadow-blue-300 hover:scale-105 ease-in duration-300 bg-[#ecf0f3]'
                        >
                            <h3 className='text-[#5651e5]'>{group.title}</h3>
                            <div className='flex flex-wrap gap-2 pt-4'>
                                {group.skills.map((skill) => (
                                    <span
                                        key={`${group.title}-${skill}`}
                                        className='rounded-full bg-white px-3 py-2 text-sm text-gray-700 shadow-sm'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
