import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const navLinks = [
  { label: 'Inicio', href: '#main' },
  { label: 'Experiencia', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCopyMessageEmail, setShowCopyMessageEmail] = useState(false);
  const [showCopyMessageNumero, setShowCopyMessageNumero] = useState(false);

  const email = 'ssebastiancamargo19@gmail.com';
  const numero = '+57 3005516355';

  useEffect(() => {
    const handleShadow = () => {
      setIsScrolled(window.scrollY >= 40);
    };

    handleShadow();
    window.addEventListener('scroll', handleShadow);

    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [nav]);

  const handleNav = () => {
    setNav((current) => !current);
  };

  const closeNav = () => {
    setNav(false);
  };

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
    <header
      className={
        isScrolled
          ? 'fixed top-0 w-full z-[100] border-b border-white/60 bg-[#ecf0f3]/90 shadow-lg shadow-blue-100/70 backdrop-blur-xl ease-in-out duration-300'
          : 'fixed top-0 w-full z-[100] bg-[#ecf0f3]/80 backdrop-blur-md ease-in-out duration-300'
      }
    >
      <div className='mx-auto flex h-20 max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8'>
        <a href='#main' className='flex min-w-0 items-center gap-3'>
          <div className='h-12 w-12 overflow-hidden rounded-2xl bg-[#020617] shadow-lg shadow-blue-200 ring-1 ring-white/70'>
            <Image
              src='/Imagenes/logo-sebastian-camargo.png'
              alt='Sebastian Camargo logo'
              width='48'
              height='48'
              className='h-full w-full object-cover'
            />
          </div>
          <div className='hidden sm:block min-w-0 leading-tight'>
            <p className='text-sm font-bold text-gray-900 truncate'>Sebastian Camargo</p>
            <p className='text-xs font-semibold text-[#5651e5]'>Full Stack Developer</p>
          </div>
        </a>

        <nav className='hidden md:flex items-center gap-2'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-white hover:text-[#5651e5] hover:shadow-sm'
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className='hidden md:flex items-center gap-3'>
          <Link href='https://github.com/SebastianCamargoGarcia'>
            <div className='rounded-full bg-white/80 p-3 text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:text-[#5651e5] hover:shadow-md cursor-pointer'>
              <FaGithub />
            </div>
          </Link>
          <Link href='https://www.linkedin.com/in/sebastian-camargo-fullstackdeveloper/'>
            <div className='rounded-full bg-white/80 p-3 text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:text-[#5651e5] hover:shadow-md cursor-pointer'>
              <FaLinkedinIn />
            </div>
          </Link>
          <a
            href='#contact'
            className='rounded-full bg-gradient-to-r from-[#5651e5] to-[#709dff] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-300 transition hover:-translate-y-0.5'
          >
            Hablemos
          </a>
        </div>

        <div
          onClick={handleNav}
          className={[
            'md:hidden rounded-full bg-white/80 p-3 text-gray-800 shadow-md cursor-pointer',
            nav ? 'invisible' : 'visible',
          ].join(' ')}
        >
          <AiOutlineMenu size={28} />
        </div>
      </div>

      {nav ? (
      <div className='fixed inset-0 z-[999] h-screen w-full bg-[#ecf0f3]'>
        <aside
          className='fixed inset-0 z-[1000] h-screen w-full overflow-y-auto bg-[#ecf0f3] px-5 py-6 ease-in duration-500'
        >
          <div className='mx-auto flex w-full max-w-[420px] items-center justify-between gap-3'>
            <div className='flex min-w-0 items-center gap-3'>
              <div className='h-10 w-10 shrink-0 overflow-hidden rounded-2xl bg-[#020617] shadow-lg shadow-blue-200 ring-1 ring-white/70'>
                <Image
                  src='/Imagenes/logo-sebastian-camargo.png'
                  width='40'
                  height='40'
                  alt='Sebastian Camargo logo'
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='min-w-0'>
                <p className='text-sm font-bold text-gray-900 truncate'>Sebastian Camargo</p>
                <p className='text-xs font-semibold text-[#5651e5]'>Full Stack Developer</p>
              </div>
            </div>
            <div onClick={handleNav} className='shrink-0 rounded-full bg-white p-3 shadow-lg shadow-gray-300 cursor-pointer'>
              <AiOutlineClose size={20} />
            </div>
          </div>

          <div className='mx-auto my-5 max-w-[420px] border-b border-gray-300'>
            <p className='pb-5 text-center text-sm text-gray-600'>
              APIs, integraciones, dashboards y soluciones Full Stack para procesos empresariales.
            </p>
          </div>

          <div className='mx-auto max-w-[420px]'>
            <ul className='space-y-3'>
              {navLinks.map((link) => (
                <li onClick={closeNav} className='text-sm' key={`mobile-${link.href}`}>
                  <a
                    href={link.href}
                    className='block rounded-2xl bg-white px-5 py-4 text-center font-semibold text-gray-700 shadow-sm transition hover:text-[#5651e5]'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className='pt-6'>
              <a
                href='#contact'
                onClick={closeNav}
                className='block rounded-2xl bg-gradient-to-r from-[#5651e5] to-[#709dff] px-5 py-4 text-center font-bold text-white shadow-lg shadow-blue-300'
              >
                Trabajemos juntos
              </a>
              <p className='pt-7 text-center text-xs uppercase tracking-widest text-[#5651e5]'>Contacto directo</p>
              <div className='flex items-center justify-center gap-5 py-4 w-full'>
                <Link href='https://www.linkedin.com/in/sebastian-camargo-fullstackdeveloper/'>
                  <div className='rounded-full bg-white shadow-lg shadow-blue-200 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href='https://github.com/SebastianCamargoGarcia'>
                  <div className='rounded-full bg-white shadow-lg shadow-blue-200 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </Link>
                <div
                  className='rounded-full bg-white shadow-lg shadow-blue-200 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  onClick={copyToClipboard}
                  onMouseEnter={() => setShowCopyMessageEmail(true)}
                  onMouseLeave={() => setShowCopyMessageEmail(false)}
                >
                  <AiOutlineMail />
                </div>
                <div
                  className='rounded-full bg-white shadow-lg shadow-blue-200 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  onClick={copyToNumero}
                  onMouseEnter={() => setShowCopyMessageNumero(true)}
                  onMouseLeave={() => setShowCopyMessageNumero(false)}
                >
                  <BsFillPersonLinesFill />
                </div>
              </div>
              {(showCopyMessageEmail || showCopyMessageNumero) && (
                <p className='rounded-xl bg-white px-3 py-2 text-center text-xs text-gray-500 shadow-sm'>
                  {showCopyMessageEmail ? 'Haz clic para copiar mi correo' : 'Haz clic para copiar mi número'}
                </p>
              )}
            </div>
          </div>
        </aside>
      </div>
      ) : null}
    </header>
  );
};

export default Navbar;
