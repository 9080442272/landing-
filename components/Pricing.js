import React from "react";

import { CheckIcon } from "@heroicons/react/outline";

function Pricing() {
  const pricing = {
    tiers: [
      {
        title: "Freelancer",
        price: 24,
        frequency: "/month",
        description: "The essentials to provide your best work for clients.",
        features: [
          "5 products",
          "Up to 1,000 subscribers",
          "Basic analytics",
          "48-hour support response time",
        ],
        cta: "Monthly billing",
        mostPopular: false,
      },
      {
        title: "Startup",
        price: 32,
        frequency: "/month",
        description: "A plan that scales with your rapidly growing business.",
        features: [
          "25 products",
          "Up to 10,000 subscribers",
          "Advanced analytics",
          "24-hour support response time",
          "Marketing automations",
        ],
        cta: "Monthly billing",
        mostPopular: true,
      },
      {
        title: "Enterprise",
        price: 48,
        frequency: "/month",
        description: "Dedicated support and infrastructure for your company.",
        features: [
          "Unlimited products",
          "Unlimited subscribers",
          "Advanced analytics",
          "1-hour, dedicated support response time",
          "Marketing automations",
          "Custom integrations",
        ],
        cta: "Monthly billing",
        mostPopular: false,
      },
    ],
  };

  return (
    <section className="relative" aria-labelledby="pricing-heading">
      <h2 id="pricing-heading" className="sr-only">
        Pricing
      </h2>

      {/* Tiers */}
      <div className="max-w-2xl mx-auto px-4 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {tier.title}
              </h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 py-1.5 px-4 bg-rose-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Most popular
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  ${tier.price}
                </span>
                <span className="ml-1 text-xl font-semibold">
                  {tier.frequency}
                </span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon
                      className="flex-shrink-0 w-6 h-6 text-rose-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                tier.mostPopular
                  ? "bg-rose-500 text-white hover:bg-rose-600"
                  : "bg-rose-50 text-rose-700 hover:bg-rose-100"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
