import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function BlogArticlePage() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='bg-white'>
          <nav className='flex justify-between px-4 p-8'>
            <div className='flex items-center'>
              <a href='#'>
                <img
                  className='h-10'
                  src='images/remat-plus-logo-transparent.png'
                  alt=''
                />
              </a>
              <ul className='hidden xl:flex ml-24'>
                <li className='mr-12'>
                  <a
                    className='hover:text-coolGray-900 font-medium text-green-600'
                    href='#'
                  >
                    Galerie
                  </a>
                </li>
                <li className='mr-12'>
                  <a
                    className='hover:text-coolGray-900 font-medium text-green-600'
                    href='#'
                  >
                    Articole
                  </a>
                </li>
                <li className='mr-12'>
                  <a
                    className='hover:text-coolGray-900 font-medium text-green-600'
                    href='#'
                  >
                    Servicii
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-coolGray-900 font-medium text-green-600'
                    href='#'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className='hidden xl:flex items-center flex flex-wrap gap-2'>
              <div>
                <button
                  id='dropdownDefaultButton'
                  data-dropdown-toggle='dropdown'
                  className='text-white focus:ring-4 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center py-2 bg-green-600'
                  type='button'
                >
                  Română{' '}
                  <svg
                    className='w-2.5 h-2.5 ml-2.5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='m1 1 4 4 4-4'
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id='dropdown'
                  className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
                >
                  <ul
                    className='py-2 text-sm text-gray-700 dark:text-gray-200'
                    aria-labelledby='dropdownDefaultButton'
                  >
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='relative'>
                <svg
                  className='absolute top-1/2 left-4 transform -translate-y-1/2'
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.0467 11.22L12.6667 9.80667C12.3698 9.5245 11.9954 9.33754 11.5915 9.26983C11.1876 9.20211 10.7726 9.25673 10.4 9.42667L9.80001 8.82667C10.5071 7.88194 10.8299 6.70445 10.7037 5.53122C10.5775 4.358 10.0115 3.27615 9.11963 2.50347C8.2278 1.73078 7.07637 1.32464 5.89712 1.36679C4.71788 1.40894 3.59838 1.89626 2.76399 2.73065C1.92961 3.56503 1.44229 4.68453 1.40014 5.86378C1.35799 7.04302 1.76413 8.19446 2.53681 9.08629C3.3095 9.97812 4.39134 10.5441 5.56457 10.6704C6.7378 10.7966 7.91529 10.4737 8.86001 9.76667L9.45335 10.36C9.26341 10.7331 9.19534 11.1564 9.25873 11.5702C9.32212 11.984 9.51377 12.3675 9.80668 12.6667L11.22 14.08C11.595 14.4545 12.1033 14.6649 12.6333 14.6649C13.1633 14.6649 13.6717 14.4545 14.0467 14.08C14.2372 13.8937 14.3885 13.6713 14.4919 13.4257C14.5952 13.1802 14.6484 12.9164 14.6484 12.65C14.6484 12.3836 14.5952 12.1198 14.4919 11.8743C14.3885 11.6287 14.2372 11.4063 14.0467 11.22V11.22ZM8.39335 8.39333C7.92684 8.85866 7.33288 9.1753 6.68651 9.30323C6.04013 9.43117 5.37034 9.36466 4.76175 9.11212C4.15315 8.85958 3.63305 8.43234 3.26716 7.88436C2.90126 7.33638 2.70597 6.69224 2.70597 6.03333C2.70597 5.37442 2.90126 4.73029 3.26716 4.18231C3.63305 3.63433 4.15315 3.20708 4.76175 2.95454C5.37034 2.702 6.04013 2.6355 6.68651 2.76343C7.33288 2.89137 7.92684 3.208 8.39335 3.67333C8.70377 3.98297 8.95005 4.35081 9.1181 4.75577C9.28614 5.16074 9.37264 5.59488 9.37264 6.03333C9.37264 6.47178 9.28614 6.90592 9.1181 7.31089C8.95005 7.71586 8.70377 8.08369 8.39335 8.39333V8.39333ZM13.1067 13.1067C13.0447 13.1692 12.971 13.2187 12.8897 13.2526C12.8085 13.2864 12.7214 13.3039 12.6333 13.3039C12.5453 13.3039 12.4582 13.2864 12.377 13.2526C12.2957 13.2187 12.222 13.1692 12.16 13.1067L10.7467 11.6933C10.6842 11.6314 10.6346 11.5576 10.6008 11.4764C10.5669 11.3951 10.5495 11.308 10.5495 11.22C10.5495 11.132 10.5669 11.0449 10.6008 10.9636C10.6346 10.8824 10.6842 10.8086 10.7467 10.7467C10.8087 10.6842 10.8824 10.6346 10.9636 10.6007C11.0449 10.5669 11.132 10.5495 11.22 10.5495C11.308 10.5495 11.3952 10.5669 11.4764 10.6007C11.5576 10.6346 11.6314 10.6842 11.6933 10.7467L13.1067 12.16C13.1692 12.222 13.2188 12.2957 13.2526 12.3769C13.2865 12.4582 13.3039 12.5453 13.3039 12.6333C13.3039 12.7213 13.2865 12.8085 13.2526 12.8897C13.2188 12.971 13.1692 13.0447 13.1067 13.1067V13.1067Z'
                    fill='#BBC3CF'
                  />
                </svg>
                <input
                  className='w-52 pl-9 pr-4 text-sm text-coolGray-500 font-medium placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm py-2'
                  type='text'
                  placeholder='Search'
                />
              </div>
            </div>
            <button className='navbar-burger self-center xl:hidden'>
              <svg
                width={35}
                height={35}
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  className='text-coolGray-50'
                  width={32}
                  height={32}
                  rx={6}
                  fill='currentColor'
                />
                <path
                  className='text-coolGray-500'
                  d='M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </nav>
          <div className='navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50'>
            <div className='fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white'>
              <nav className='relative p-6 h-full overflow-y-auto'>
                <a className='inline-block mb-2' href='#'>
                  <img
                    className='h-8'
                    src='flex-ui-assets/logos/flex-ui-green-light.svg'
                    alt=''
                  />
                </a>
                <div className='relative mb-6'>
                  <svg
                    className='absolute top-1/2 left-4 transform -translate-y-1/2'
                    width={16}
                    height={16}
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M14.0467 11.22L12.6667 9.80667C12.3698 9.5245 11.9954 9.33754 11.5915 9.26983C11.1876 9.20211 10.7726 9.25673 10.4 9.42667L9.80001 8.82667C10.5071 7.88194 10.8299 6.70445 10.7037 5.53122C10.5775 4.358 10.0115 3.27615 9.11963 2.50347C8.2278 1.73078 7.07637 1.32464 5.89712 1.36679C4.71788 1.40894 3.59838 1.89626 2.76399 2.73065C1.92961 3.56503 1.44229 4.68453 1.40014 5.86378C1.35799 7.04302 1.76413 8.19446 2.53681 9.08629C3.3095 9.97812 4.39134 10.5441 5.56457 10.6704C6.7378 10.7966 7.91529 10.4737 8.86001 9.76667L9.45335 10.36C9.26341 10.7331 9.19534 11.1564 9.25873 11.5702C9.32212 11.984 9.51377 12.3675 9.80668 12.6667L11.22 14.08C11.595 14.4545 12.1033 14.6649 12.6333 14.6649C13.1633 14.6649 13.6717 14.4545 14.0467 14.08C14.2372 13.8937 14.3885 13.6713 14.4919 13.4257C14.5952 13.1802 14.6484 12.9164 14.6484 12.65C14.6484 12.3836 14.5952 12.1198 14.4919 11.8743C14.3885 11.6287 14.2372 11.4063 14.0467 11.22V11.22ZM8.39335 8.39333C7.92684 8.85866 7.33288 9.1753 6.68651 9.30323C6.04013 9.43117 5.37034 9.36466 4.76175 9.11212C4.15315 8.85958 3.63305 8.43234 3.26716 7.88436C2.90126 7.33638 2.70597 6.69224 2.70597 6.03333C2.70597 5.37442 2.90126 4.73029 3.26716 4.18231C3.63305 3.63433 4.15315 3.20708 4.76175 2.95454C5.37034 2.702 6.04013 2.6355 6.68651 2.76343C7.33288 2.89137 7.92684 3.208 8.39335 3.67333C8.70377 3.98297 8.95005 4.35081 9.1181 4.75577C9.28614 5.16074 9.37264 5.59488 9.37264 6.03333C9.37264 6.47178 9.28614 6.90592 9.1181 7.31089C8.95005 7.71586 8.70377 8.08369 8.39335 8.39333V8.39333ZM13.1067 13.1067C13.0447 13.1692 12.971 13.2187 12.8897 13.2526C12.8085 13.2864 12.7214 13.3039 12.6333 13.3039C12.5453 13.3039 12.4582 13.2864 12.377 13.2526C12.2957 13.2187 12.222 13.1692 12.16 13.1067L10.7467 11.6933C10.6842 11.6314 10.6346 11.5576 10.6008 11.4764C10.5669 11.3951 10.5495 11.308 10.5495 11.22C10.5495 11.132 10.5669 11.0449 10.6008 10.9636C10.6346 10.8824 10.6842 10.8086 10.7467 10.7467C10.8087 10.6842 10.8824 10.6346 10.9636 10.6007C11.0449 10.5669 11.132 10.5495 11.22 10.5495C11.308 10.5495 11.3952 10.5669 11.4764 10.6007C11.5576 10.6346 11.6314 10.6842 11.6933 10.7467L13.1067 12.16C13.1692 12.222 13.2188 12.2957 13.2526 12.3769C13.2865 12.4582 13.3039 12.5453 13.3039 12.6333C13.3039 12.7213 13.2865 12.8085 13.2526 12.8897C13.2188 12.971 13.1692 13.0447 13.1067 13.1067V13.1067Z'
                      fill='#BBC3CF'
                    />
                  </svg>
                  <input
                    className='w-full h-9 py-1 pl-9 pr-4 text-sm text-coolGray-500 font-medium placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm'
                    type='text'
                    placeholder='Search'
                  />
                </div>
                <ul>
                  <li>
                    <a
                      className='block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md'
                      href='#'
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      className='block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md'
                      href='#'
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      className='block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md'
                      href='#'
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className='block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md'
                      href='#'
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </nav>
              <a className='navbar-close absolute top-5 p-4 right-3' href='#'>
                <svg
                  width={12}
                  height={12}
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z'
                    fill='#556987'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='border-b-4 border-coolGray-500' />
        </section>
        <section
          className='py-16 md:py-24 bg-white'
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
          }}
        >
          <div className='container px-4 mx-auto'>
            <div className='md:max-w-2xl mx-auto mb-12 text-center'>
              <h2 className='text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading text-green-600'>
                Viitorul Reciclării: Transformarea Deșeurilor în Resurse
              </h2>
              <p className='leading-loose text-xl text-coolGray-500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <img
            className='w-full mb-10 mx-auto'
            src='images/top-view-of-various-types-of-trash-surrounding-rec-2022-12-16-16-07-26-utc-jpg-1695034729147.webp'
            alt=''
          />
          <div className='container px-4 mx-auto'>
            <div className='md:max-w-3xl mx-auto'>
              <p className='mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                fringilla.
              </p>
              <p className='mb-4 text-base md:text-lg text-coolGray-500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                fringilla.
              </p>
              <p className='mb-6 text-base md:text-lg text-coolGray-500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                fringilla.
              </p>
              <p className='mb-14 text-base md:text-lg text-coolGray-500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                fringilla.
              </p>
              <p className='mb-4 text-base md:text-lg text-coolGray-500'>
                Sagittis et eu at elementum, quis in. Proin praesent volutpat
                egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi
                ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate
                consectetur ac ultrices at diam dui eget fringilla tincidunt.
                Arcu sit dignissim massa erat cursus vulputate gravida id. Sed
                quis auctor vulputate hac elementum gravida cursus dis.
              </p>
            </div>
          </div>
        </section>
        <section className='bg-white'>
          <div className='wave-top w-full text-yellow-50'>
            <svg
              viewBox='0 0 1440 116'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z'
                fill='currentColor'
              />
            </svg>
          </div>
          <div className='bg-yellow-50'>
            <div className='container px-4 mx-auto'>
              <div className='flex flex-wrap pt-24 pb-12 -mx-4 justify-between'>
                <div className='px-4 mb-16 lg:mb-0 w-1/2'>
                  <a className='inline-block mb-4' href='#'>
                    <img
                      className='h-10'
                      src='images/remat-plus-logo-transparent.png'
                      alt=''
                    />
                  </a>
                </div>
                <div className='px-4 mb-16 lg:mb-0 w-1/2 flex justify-end'>
                  <div className='px-4 mb-16 lg:mb-0 w-1/2'>
                    <h3 className='mb-5 text-lg font-bold text-coolGray-900 flex justify-end'>
                      Contact
                    </h3>
                    <ul>
                      <li className='mb-4'>
                        <a
                          className='inline-block font-medium text-coolGray-500 flex justify-end'
                          href='#'
                        >
                          Tel/Fax: 0258 842 404{' '}
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a
                          className='inline-block font-medium text-coolGray-500 flex justify-end'
                          href='#'
                        >
                          Mobil: 0752 172 573
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a
                          className='inline-block font-medium text-coolGray-500 flex justify-end'
                          href='#'
                        >
                          E-mail: nume@office.com
                        </a>
                      </li>
                      <li>
                        <a
                          className='inline-block font-medium text-coolGray-500 flex justify-end'
                          href='#'
                        >
                          Adresă:
                        </a>
                      </li>
                      <span className='inline-block font-medium text-coolGray-500 flex justify-end mb-4'>
                        Sântimbru, Șos. Națională, nr. 15
                      </span>
                    </ul>
                  </div>
                  <div className='px-4 mb-16 lg:mb-0 w-1/3'>
                    <h3 className='mb-5 text-lg font-bold text-coolGray-900 flex justify-end'>
                      Meniu
                    </h3>
                    <ul className='flex-col justify-end'>
                      <li
                        className='mb-4 flex justify-end'
                      >
                        <a className='text-coolGray-500 font-medium' href='#'>
                          Galerie
                        </a>
                      </li>
                      <li className='mb-4 flex justify-end'>
                        <a
                          className='inline-block text-coolGray-500 font-medium'
                          href='#'
                        >
                          Articole
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a
                          className='inline-block text-coolGray-500 font-medium flex justify-end'
                          href='#'
                        >
                          Servicii
                        </a>
                      </li>
                      <li className='mb-4 flex justify-end'>
                        <a
                          className='inline-block text-coolGray-500 font-medium'
                          href='#'
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b border-coolGray-400' />
            <div className='container px-4 mx-auto'>
              <div className='flex flex-wrap items-center py-12'>
                <div className='w-full md:w-1/2 mb-6 md:mb-0'>
                  <p className='font-medium text-coolGray-900'>
                    © 2021 Flex. All rights reserved.
                  </p>
                </div>
                <div className='w-full md:w-1/2'>
                  <div className='flex flex-wrap md:justify-end -mx-5'>
                    <div className='px-5'>
                      <a
                        className='inline-block text-coolGray-900 hover:text-coolGray-800'
                        href='#'
                      >
                        <svg
                          width={10}
                          height={18}
                          viewBox='0 0 10 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className='px-5'>
                      <a
                        className='inline-block text-coolGray-900 hover:text-coolGray-500'
                        href='#'
                      >
                        <svg
                          width={19}
                          height={16}
                          viewBox='0 0 19 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className='px-5'>
                      <a
                        className='inline-block text-coolGray-900 hover:text-coolGray-500'
                        href='#'
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className='px-5'>
                      <a
                        className='inline-block text-coolGray-900 hover:text-coolGray-500'
                        href='#'
                      >
                        <svg
                          width={18}
                          height={18}
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9 0C4.0275 0 0 4.13211 0 9.22838C0 13.3065 2.5785 16.7648 6.15375 17.9841C6.60375 18.0709 6.76875 17.7853 6.76875 17.5403C6.76875 17.3212 6.76125 16.7405 6.7575 15.9712C4.254 16.5277 3.726 14.7332 3.726 14.7332C3.3165 13.6681 2.72475 13.3832 2.72475 13.3832C1.9095 12.8111 2.78775 12.8229 2.78775 12.8229C3.6915 12.887 4.16625 13.7737 4.16625 13.7737C4.96875 15.1847 6.273 14.777 6.7875 14.5414C6.8685 13.9443 7.10025 13.5381 7.3575 13.3073C5.35875 13.0764 3.258 12.2829 3.258 8.74709C3.258 7.73988 3.60675 6.91659 4.18425 6.27095C4.083 6.03774 3.77925 5.0994 4.263 3.82846C4.263 3.82846 5.01675 3.58116 6.738 4.77462C7.458 4.56958 8.223 4.46785 8.988 4.46315C9.753 4.46785 10.518 4.56958 11.238 4.77462C12.948 3.58116 13.7017 3.82846 13.7017 3.82846C14.1855 5.0994 13.8818 6.03774 13.7917 6.27095C14.3655 6.91659 14.7142 7.73988 14.7142 8.74709C14.7142 12.2923 12.6105 13.0725 10.608 13.2995C10.923 13.5765 11.2155 14.1423 11.2155 15.0071C11.2155 16.242 11.2043 17.2344 11.2043 17.5341C11.2043 17.7759 11.3617 18.0647 11.823 17.9723C15.4237 16.7609 18 13.3002 18 9.22838C18 4.13211 13.9703 0 9 0Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className='px-5'>
                      <a
                        className='inline-block text-coolGray-900 hover:text-coolGray-500'
                        href='#'
                      >
                        <svg
                          width={18}
                          height={18}
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

