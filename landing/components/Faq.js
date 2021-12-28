import React from "react";

function Faq() {
  const faqs = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },

    {
      id: 2,
      question: "how do you make holy water ?",
      answer:
        "You boil the hell out of it. Lorem ipsum sit amet consectetur adipicicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porror.Delectus quia facere id squio expedita natia",
    },

    {
      id: 3,
      question: "What do you call someone with no body and no nose ?",
      answer:
        "Nobody knows.Lorem ipsum sit amet consectetur adipicicing quod porror.Delectus quia facere id squio expedita natia",
    },

    {
      id: 4,
      question: "Why do you never see elephasts hiding in trees?",
      answer:
        "Becuase they are good at it.Lorem ipsum sit amet consectetur adipicicing quod porror.Delectus quia facere id squio expedita natia",
    },
    {
      id: 5,
      question: "why did the invisible man turn down the job offer ?",
      answer:
        "He couldn't see himeself doing it.lorem ipsum dolor sit,amet consectetur adipisicing  elit. Eveniet perspiciaties officiis corrupti tenetur.Temporibus ut volupatatibus,perferendis sed ubde rerume deserunt eiys",
    },
  ];

  return (
    <section
      aria-labelledby="faq-heading"
      className="max-w-2xl mx-auto py-24 px-4 divide-y divide-gray-200 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
    >
      <h2 id="faq-heading" className="text-3xl font-extrabold text-gray-900">
        Frequently asked questions
      </h2>
      <div className="mt-8">
        <dl className="divide-y divide-gray-200">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
            >
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Faq;
