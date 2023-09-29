import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { useTranslation } from 'react-i18next';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Gallery() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navigation />
        <section className='py-12 md:py-20'>
          <div className='container px-4 mx-auto'>
            <div className='max-w-lg mx-auto mb-12 text-center'>
              <h2 className='text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading text-green-600'>
                {t('gallery.title')}
              </h2>
              <p className='leading-loose text-xl text-coolGray-500'>
                {t('gallery.subtitle')}
              </p>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full lg:w-1/2 flex flex-wrap px-3 lg:mb-0 mb-6 justify-center'>
                <div className='md:w-1/2 w-80 px-3 pb-3'>
                  <img
                    className='w-full object-cover rounded'
                    src='images/WhatsApp-Image-2023-09-13-at-14-28-41-1.jpeg'
                    alt=''
                  />
                </div>
                <div className='md:w-1/2 w-80 px-3 pb-3'>
                  <img
                    className='w-full object-cover rounded'
                    src='images/recycling-sign2-jpg-1695033687039.webp'
                    alt=''
                  />
                </div>
                <div className='md:w-1/2 w-80 px-3 pt-3'>
                  <img
                    className='w-full object-cover rounded'
                    src='images/WhatsApp-Image-2023-09-13-at-14-28-38.jpeg'
                    alt=''
                  />
                </div>
                <div className='md:w-1/2 w-80 px-3 pt-3'>
                  <img
                    className='w-full object-cover rounded'
                    src='images/recycle-2022-03-04-01-49-58-utc.jpg'
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-3 flex justify-center'>
                <img
                  className='object-cover rounded w-96 border-4 border-green-600'
                  src='images/WhatsApp-Image-2023-09-13-at-14-28-41.jpeg'
                  alt=''
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 lg:mb-0 mb-6'>
              <div className='w-full lg:w-1/2 px-3 order-last lg:order-first mt-6 lg:mt-0 flex justify-center'>
                <img
                  className='object-cover rounded w-96 border-4 border-green-600'
                  src='images/pexels-lara-jameson-9324359.jpg'
                  alt=''
                />
              </div>
              <div className='w-full lg:w-1/2 flex flex-wrap px-3 justify-center'>
                <div className='md:w-1/2 w-80 px-3 pb-3'>
                  <img
                    className='w-full object-cover rounded'
                    src='images/WhatsApp-Image-2023-09-13-at-14-28-40.jpeg'
                    alt=''
                  />
                </div>
                <div className='md:w-1/2 w-80 px-3 pb-3'>
                  <img
                    className='w-full object-cover rounded'
                    src='images/WhatsApp-Image-2023-09-13-at-14-28-38-1.jpeg'
                    alt=''
                  />
                </div>
                <div className='md:w-1/2 w-80 px-3 pt-3'>
                  <img
                    className='w-full object-cover rounded'
                    src='images/WhatsApp-Image-2023-09-13-at-14-28-39.jpeg'
                    alt=''
                  />
                </div>
                <div className='md:w-1/2 w-80 px-3 pt-3'>
                  <img
                    className='w-full object-cover rounded'
                    src='images/sorted-trash-of-cardboard-glass-bottles-polyethy-2022-12-16-17-53-07-utc-jpg-1695033748162.webp'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </React.Fragment>
  );
}

