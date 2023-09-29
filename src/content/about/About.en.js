export default function About() {
  return (
    <section className="py-20 xl:pt-24 xl:pb-28 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-14">
            <div className="flex flex-wrap justify-between items-center"></div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
            <div className="w-full mb-10">
              <h3 className="mb-4 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">
                About Us
              </h3>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#339D5F"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              <p className="mb-6 text-lg font-medium text-coolGray-500 leading-7 w-full">
                We are a company dedicated to turning waste into resources and
                sustainable resources. Since 2009, with extensive experience in
                waste management, we are committed to protecting the environment
                environment and contribute to a cleaner future. and healthier
                future.
              </p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#339D5F"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500 w-full">
                <b class="text-coolGray-900">Logistic,</b> we make waste
                transports by car and personnel in compliance with the legal
                regulations in force on waste transport. We have a wide range of
                vans and trucks, suitably equipped and equipped to handle any
                recyclable waste stream is required to be collected. They
                collect in 16 cubic metre containers or 32 cubic metres, or
                wherever the location deems necessary, 22 cubic metre
                pre-container - electrically operated.
              </p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#339D5F"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              <p className="text-lg font-medium leading-7 text-coolGray-500 mb-5 w-full">
                <b class="text-coolGray-900">Range of waste collected</b>is
                ferrous and non-ferrous metals sector, the metals sector and
                electronic equipment, as well as waste from cardboard/paper,
                wood, plastic (from various sources, including polystyrene) or
                glass. For waste from from packaging, our qualified staff offers
                services of traceability, fulfilling obligations to the
                Environmental Fund.
              </p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#339D5F"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              <p className="text-lg font-medium leading-7 text-coolGray-500 mb-5 w-full">
                <b class="text-coolGray-900">Storage and processing</b> if in
                specially equipped premises authorised for this purpose.
                collection centres that we have in this area. at the moment, in
                compliance with all the relevant provisions. Centre collection
                centre is in Sântimbru - Alba, 3 KM from A10, with a concrete
                surface of 30.000 sqm uncovered and a 8.000 sqm covered hall,
                and the secondary one in Ocna Mures. Our recycling processes are
                efficient and responsible, helping to reduce the amount of waste
                that ends up in landfills.
              </p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#339D5F"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              <p className="text-lg font-medium leading-7 text-coolGray-500 w-full">
                <b class="text-coolGray-900">Final recovery,</b> most most
                important step in a waste stream, is directly transmitted to the
                final recyclers, where it is re-introduced into the production
                of the product finished product.
              </p>
            </div>
          </div>
          <div className="px-4 flex flex-wrap gap-5 lg:w-1/2 lg:justify-en justify-center">
            <img
              src="images/WhatsApp-Image-2023-09-13-at-14-28-38.jpeg"
              alt=""
              className="rounded-lg shadow-md w-2/3 border-green-600 border-4"
            />
            <img
              src="images/WhatsApp-Image-2023-09-13-at-14-28-38-1.jpeg"
              alt=""
              className="shadow-md rounded-lg w-2/3 border-4 border-green-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
