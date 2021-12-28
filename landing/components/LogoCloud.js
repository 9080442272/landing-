import React from "react";

function LogoCloud() {
  return (
    <section
      aria-labelledby="customer-heading"
      className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
    >
      <h2 id="customer-heading" className="sr-only">
        Our customers
      </h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
            alt="Tuple"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
            alt="Mirage"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
            alt="StaticKit"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
            alt="Transistor"
          />
        </div>
        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
            alt="Workcation"
          />
        </div>
      </div>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-white to-gray-50"
        />

        <div className="mt-8 md:mt-16 relative max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative py-24 px-8 bg-rose-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
              <img
                src="https://images.unsplash.com/photo-1640542902140-160aac880fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative lg:col-span-1">
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                alt=""
              />
              <blockquote className="mt-6 text-white">
                <p className="text-xl font-medium sm:text-2xl">
                  Workflow has completely transformed how we interact with
                  customers. We've seen record bookings, higher customer
                  satisfaction, and reduced churn.
                </p>
                <footer className="mt-6">
                  <p className="flex flex-col font-medium">
                    <span>Marie Chilvers</span>
                    <span>CEO, Workcation</span>
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCloud;
