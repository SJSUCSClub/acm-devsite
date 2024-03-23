"use client";

import { useState } from "react";

const FAQ = () => {
  const questions = [
    {
      question: "Who's allowed to join this club?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna iaculis augue vulputate fermentum. Pellentesque quis magna dolor. Sed congue velit id nulla ultricies consequat. Etiam egestas lectus nec felis convallis cursus. Integer blandit ipsum eu pellentesque eleifend. Cras et urna condimentum ante blandit pretium. Donec bibendum massa id ante pellentesque dignissim. Quisque arcu elit, rhoncus ac lobortis a, malesuada eu libero. Cras pharetra purus vel pretium sodales.",
    },
    {
      question: "What are the rules of the club?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna iaculis augue vulputate fermentum. Pellentesque quis magna dolor. Sed congue velit id nulla ultricies consequat. Etiam egestas lectus nec felis convallis cursus. Integer blandit ipsum eu pellentesque eleifend. Cras et urna condimentum ante blandit pretium. Donec bibendum massa id ante pellentesque dignissim. Quisque arcu elit, rhoncus ac lobortis a, malesuada eu libero. Cras pharetra purus vel pretium sodales.",
    },
    {
      question: "Is there a membership fee for the club?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna iaculis augue vulputate fermentum. Pellentesque quis magna dolor. Sed congue velit id nulla ultricies consequat. Etiam egestas lectus nec felis convallis cursus. Integer blandit ipsum eu pellentesque eleifend. Cras et urna condimentum ante blandit pretium. Donec bibendum massa id ante pellentesque dignissim. Quisque arcu elit, rhoncus ac lobortis a, malesuada eu libero. Cras pharetra purus vel pretium sodales.",
    },
    {
      question: "What do I get for a paid membership?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna iaculis augue vulputate fermentum. Pellentesque quis magna dolor. Sed congue velit id nulla ultricies consequat. Etiam egestas lectus nec felis convallis cursus. Integer blandit ipsum eu pellentesque eleifend. Cras et urna condimentum ante blandit pretium. Donec bibendum massa id ante pellentesque dignissim. Quisque arcu elit, rhoncus ac lobortis a, malesuada eu libero. Cras pharetra purus vel pretium sodales.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <>
      <div className="footer bg-black w-full h-[600px]">
       
     
      <div className="text-white text-5xl flex justify-center font-bold">
        <div className="mt-16">
          <h1>Questions? We Got Answers. </h1>
        </div>
      </div>
      <div className="text-white font-bold text-xl flex justify-center mt-10">
        <div className="w-1/2 ">
          {questions.map((questionObj, index) => (
            <div key={index}>
              <h2
                className="mb-5 mt-5 cursor-pointer flex items-center relative"
                onClick={() => handleQuestionClick(index)}
              >
                {questionObj.question}
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-10 h-6 transition-transform duration-500  ${
                      index === expandedIndex ? "transform rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </h2>

              {index === expandedIndex && (
                <p className="text-lg mb-5 mt-5">{questionObj.answer}</p>
              )}
              <div className="border-t border-white mt-5"></div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default FAQ;
