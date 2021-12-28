import React from "react";

import { ChevronDownIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div as="header" className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b py-8 md:py-0 border-gray-200">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                alt=""
              />
            </a>
          </div>

          <button className="text-gray-500 bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
            <span>Solutions</span>
            <ChevronDownIcon
              className="ml-2 h-5 text-gray-400 w-5 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </button>

          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Docs
          </a>

          <button className="text-gray-500 bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
            <span>More</span>
            <ChevronDownIcon
              className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </button>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-500 hover:bg-rose-600"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="md:hidden mt-4 w-full mx-auto flex items-center justify-center">
          <a
            href="#"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            href="#"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-500 hover:bg-rose-600"
          >
            Sign up
          </a>
        </div>
      </div>
      <div className="relative max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
        <div className="relative">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            Pricing plans for teams of all sizes
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-500">
            Choose an affordable plan that's packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
