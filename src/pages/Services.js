import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useTranslation } from 'react-i18next';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Services() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navigation />
        <section className='py-24'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap items-center -mx-4 mb-16'>
              <div className='w-full px-4 mb-16 md:mb-0 text-center'>
                <h2 className='text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading text-green-600'>
                  {t('services.title')}
                </h2>
                <p className='leading-loose text-xl text-coolGray-500'>
                  {t('services.subtitle')}
                </p>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4 text-center md:text-left gap-5 justify-center'>
              <div className='w-full md:w-1/2 md:w-1/3 mb-8 bg-darkCoolGray-50 p-4 rounded-2xl'>
                <div className='inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-600 font-semibold rounded-full'>
                  1
                </div>
                <h3 className='mb-2 text-xl font-bold'>Serviciul 1</h3>
                <p className='font-medium text-coolGray-500'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className='w-full md:w-1/2 md:w-1/3 mb-8 bg-darkCoolGray-50 rounded-2xl p-4'>
                <div className='inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-600 font-semibold rounded-full'>
                  2
                </div>
                <h3 className='mb-2 text-xl font-bold'>Serviciul 2</h3>
                <p className='font-medium text-coolGray-500'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className='w-full md:w-1/2 md:w-1/3 mb-8 bg-darkCoolGray-50 rounded-2xl p-4'>
                <div className='inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-600 font-semibold rounded-full'>
                  3
                </div>
                <h3 className='mb-2 text-xl font-bold'>Serviciul 3</h3>
                <p className='font-medium text-coolGray-500'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className='w-full md:w-1/2 md:w-1/3 mb-8 bg-darkCoolGray-50 rounded-2xl p-4'>
                <div className='inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-600 font-semibold rounded-full'>
                  4
                </div>
                <h3 className='mb-2 text-xl font-bold'>Serviciul 4</h3>
                <p className='font-medium text-coolGray-500'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className='w-full md:w-1/2 md:w-1/3 mb-8 md:mb-0 p-4 bg-darkCoolGray-50 rounded-2xl'>
                <div className='inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-600 font-semibold rounded-full'>
                  5
                </div>
                <h3 className='mb-2 text-xl font-bold'>Serviciul 5</h3>
                <p className='font-medium text-coolGray-500'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className='w-full md:w-1/2 md:w-1/3 bg-darkCoolGray-50 p-4 rounded-2xl'>
                <div className='inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-600 font-semibold rounded-full'>
                  6
                </div>
                <h3 className='mb-2 text-xl font-bold'>Serviciul 6</h3>
                <p className='font-medium text-coolGray-500'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </React.Fragment>
  );
}

