import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  const [name, setName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showCopyMessageEmail, setShowCopyMessageEmail] = useState(false);
  const [showCopyMessageNumero, setShowCopyMessageNumero] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contactEmail !== confirmEmail) {
      setErrorMessage('Los correos electrónicos no coinciden');
      setSuccessMessage('');
      return;
    }
    if (contactEmail.length < 15) {
      setErrorMessage('El correo electrónico parece no ser valido');
      setSuccessMessage('');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setErrorMessage('El número de teléfono debe tener exactamente 10 dígitos');
      setSuccessMessage('');
      return;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email: contactEmail, phone, message }),
    });

    if (res.ok) {
      setSuccessMessage('Mensaje enviado con éxito');
      setErrorMessage('');
      setName('');
      setContactEmail('');
      setConfirmEmail('');
      setPhone('');
      setMessage('');
    } else {
      setErrorMessage('Hubo un problema al enviar el mensaje');
      setSuccessMessage('');
    }
  };

  const email = 'ssebastiancamargo19@gmail.com';
  const numero = '+57 3005516355';

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
    <div id='contact' className='w-full lg:h-screen p-10 sm:p-8'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contactame</p>
        
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* Izquierda */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-blue-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
            <h2 className='py-4'>Ponte en contacto</h2>
              <div>
                <img className='rounded-xl hover:scale-105 ease-in duration-300' src='/Imagenes/yo_dibujo.png' alt="/" />
              </div>

              <div>
                <h2 className='text-[#5651e5] py-2'>Sebastian CG.</h2>
              </div>
              <div>
                <p className='text-xl tracking-widest  text-[#5651e5] pt-8'>Puedes encontrarme aquí</p>
                <div className='flex items-center justify-between py-4'>
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

          {/* Derecha */}
          <div className='col-span-3 w-full h-full shadow-xl shadow-blue-400 rounded-xl p-4 lg:p4'>
            <div className='p-4'>
              <form onSubmit={handleSubmit}>
                <h4 className='py-4 text-gray-700'><span className='text-blue-500'>Por favor, Ingrese sus datos, estos serán enviados a mi correo.</span></h4>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Nombre completo</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-blue-300'
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Correo electrónico</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-blue-300'
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Confirmar correo electrónico</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-blue-300'
                      type="email"
                      value={confirmEmail}
                      onChange={(e) => setConfirmEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Número de teléfono</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-blue-300'
                      type="text"
                      value={phone}
                      onChange={(e) => {
                        const phoneInput = e.target.value;
                        if (/^\d*$/.test(phoneInput) && phoneInput.length <= 10) {
                          setPhone(phoneInput);
                        }
                      }}
                      required
                    />
                  </div>           
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Mensaje</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                {errorMessage && <p className='text-red-500 text-sm mt-2'>{errorMessage}</p>}
                {successMessage && <p className='text-green-500 text-sm mt-2'>{successMessage}</p>}

                <button className='button w-full p-4 text-black-300 mt-4'>
                  <span className='button-content'>Enviar</span>
                </button>
              </form>
              </div>
          </div>
        </div>

        <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;