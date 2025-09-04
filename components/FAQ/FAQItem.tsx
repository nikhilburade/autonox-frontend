"use client";

type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;

  const open = activeFaq === id;

  return (
    <div
      className="flex flex-col 
  bg-white/70 text-gray-900 
  dark:bg-gray-900/70 dark:text-gray-200 
  shadow-md backdrop-blur-sm 
  transition-all duration-300 rounded-lg overflow-hidden"
    >
      {/* Question */}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => handleFaqToggle(id)}
        className="flex w-full items-center gap-4 px-4 py-4 text-base font-medium sm:px-6 sm:py-5 lg:px-9 lg:py-6"
      >
        <span className="flex-1 text-left min-w-0">{quest}</span>
        {open ? (
          <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" viewBox="0 0 18 4">
            <path d="M17.1666 0.833H0.833v2.334h16.3336V0.833Z" fill="currentColor" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" viewBox="0 0 18 18">
            <path d="M7.833 7.833V0.833h2.334v7h7v2.334h-7v7H7.833v-7h-7V7.833h7Z" fill="currentColor" />
          </svg>
        )}
      </button>

      {/* Answer */}
      {open && (
        <p className="text-sm sm:text-base leading-relaxed px-4 py-4 sm:px-6 sm:py-5 lg:px-9 lg:py-6 border-t border-gray-200/50 dark:border-gray-700/50">
          {ans}
        </p>
      )}
    </div>

  );
};

export default FAQItem;
