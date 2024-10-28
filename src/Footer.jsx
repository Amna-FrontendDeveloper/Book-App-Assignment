import React from 'react';

const questionsAndAnswers = [
  {
    question: "What types of books do you offer?",
    answer: "We offer a wide range of books including fiction, non-fiction, academic, and self-help.",
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order using the tracking link sent to your email after purchase.",
  },
  {
    question: "What is your return policy?",
    answer: "We have a 30-day return policy for unopened and unused books.",
  },
  {
    question: "Do you have eBooks available?",
    answer: "Yes, we offer a variety of eBooks that you can purchase and download instantly.",
  },
  {
    question: "Can I pre-order upcoming titles?",
    answer: "Absolutely! You can pre-order upcoming titles and they will be delivered as soon as they are available.",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="mt-4 bg-gray-700 rounded-lg p-4">
          <h4 className="font-bold mb-2">Frequently Asked Questions</h4>
          <div className="space-y-2">
            {questionsAndAnswers.map((item, index) => (
              <div key={index} className="group">
                <p className="hover:text-gray-900 cursor-pointer bg-gray-600 p-2 rounded-md transition-colors">
                  {item.question}
                </p>
                <p className="hidden group-hover:block text-gray-300 bg-gray-500 p-2 rounded-md mt-1">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 p-4">&copy; 2024 Book Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
