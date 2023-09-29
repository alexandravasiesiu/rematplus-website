import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { LocationMap } from '../components/LocationMap';
import { useTranslation } from 'react-i18next';


const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Contact() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navigation />
        <section className='py-20'>
          <div className='container px-4 mx-auto'>
            <div className='max-w-2xl lg:max-w-3xl mx-auto'>
              <LocationMap />
              <div className='mb-12 text-center'>
                <h2 className='text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading text-green-600'>
                  {t('contact.title')}
                </h2>
                <p className='leading-loose text-xl text-coolGray-500'>
                {t('contact.subtitle')}
                </p>
              </div>
              <div className='flex flex-wrap -mx-3 text-center'>
                <div className='w-full md:w-1/2 lg:w-1/3 px-3 mb-12'>
                  <svg
                    className='mb-6 h-8 w-8 mx-auto text-green-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  <div className='leading-relaxed'>
                    <span className='text-sm text-coolGray-500'>{t('contact.phone')}</span>
                    <p> 0749/662.007</p>
                    <p> 0751/041.087</p>
                  </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 px-3 mb-12'>
                  <svg
                    className='mb-6 h-8 w-8 mx-auto text-green-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  <div className='leading-relaxed'>
                    <span className='text-sm text-coolGray-500'>E-mail</span>
                    <p>office@rematplus.ro</p>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-3 mb-12'>
                  <svg
                    className='mb-6 h-8 w-8 mx-auto text-green-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  <div className='leading-relaxed'>
                    <span className='text-sm text-coolGray-500'>{t('contact.address')}</span>
                    <p>Sântimbru, Șos. Națională,</p>
                    <p>nr.15, județul Alba</p>
                  </div>
                </div>
              </div>
              <div>
                <form action="https://formsubmit.co/office@rematplus.ro" method="POST">
                  <div className='flex flex-wrap mb-4 -mx-3'>
                    <div className='w-full lg:w-1/2 px-3 mb-4 lg:mb-0'>
                      <div className='mb-4'>
                        <input
                          className='w-full p-4 text-xs font-semibold leading-none rounded outline-none bg-coolGray-50'
                          type='text'
                          placeholder={t('contact.subject')}
                          name="Subiect"
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          className='w-full p-4 text-xs font-semibold leading-none rounded outline-none bg-gray-50'
                          type='text'
                          placeholder={t('contact.name')}
                          nam="Nume"
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          className='w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none bg-gray-50'
                          type='email'
                          placeholder='E-mail'
                          name="E-mail"
                        />
                      </div>
                      <div>
                        <label className='flex px-2 bg-blueGray-50 rounded'>
                          <input
                            className='hidden'
                            type='file'
                            placeholder='Choose file..'
                            name='Choose file'
                          />
                          <div className='my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer'>
                            Browse
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className='w-full lg:w-1/2 px-3'>
                      <textarea
                        className='w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none bg-gray-50'
                        type='text'
                        placeholder={t('contact.message')}
                        name="Mesaj"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className='flex items-center justify-end'>
                    <button
                      className='py-4 px-8 text-sm text-white font-semibold leading-none rounded bg-green-600 hover:bg-green-800 border'
                      type='submit'
                    >
                     {t('contact.send')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </React.Fragment>
  );
}

