import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Welcome to <span className="text-green-600">BudgetLee</span>
        </h1>
        
        <p className="text-xl text-center max-w-2xl">
          Your personal finance companion for smarter budgeting, expense tracking, and financial freedom.
        </p>
        
        <div className="flex flex-col gap-6 items-center mt-4 max-w-md text-center">
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Simple Budgeting</h2>
            <p>Create and manage your budget with an intuitive interface designed for everyone.</p>
          </div>
          
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Expense Tracking</h2>
            <p>Keep track of where your money goes with easy-to-use expense categories and reports.</p>
          </div>
          
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Financial Goals</h2>
            <p>Set savings goals and track your progress toward financial independence.</p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-600 text-white gap-2 hover:bg-green-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 sm:w-auto"
            href="#"
          >
            Get Started
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 w-full sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-400">
        <span>© 2025 BudgetLee. All rights reserved.</span>
        <a className="hover:underline hover:underline-offset-4" href="#">Privacy Policy</a>
        <a className="hover:underline hover:underline-offset-4" href="#">Terms of Service</a>
        <a className="hover:underline hover:underline-offset-4" href="#">Contact Us</a>
      </footer>
    </div>
  );
}
