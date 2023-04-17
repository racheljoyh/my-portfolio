import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header className="fixed top-0 z-40 w-full">
      <div className="flex justify-between md:items-center flex-row relative">
        <div className="w-full h-[5.1rem] -translate-y-[2.4rem] md:-translate-y-[0.9rem] bg-transparent absolute transition-all duration-500"></div>
        <div className="right-1/2 translate-x-1/2 w-10/12 2xl:w-[80%] absolute">
          <div className="flex justify-between md:items-center flex-row relative">
            <Link
              to="/"
              className="flex items-center font-display py-3 text-xs md:text-base uppercase"
            >
              <strong className="mr-1">Rachel Humes</strong>
            </Link>
            <button
              id="toggle-menu"
              aria-label="Toggle the navigation menu"
              className="flex items-center justify-center cursor-pointer md:hidden"
            >
              <svg
                id="toggle-menu-open"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              <svg
                id="toggle-menu-close"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="h-6 w-6 hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <nav
          id="navigation-contents"
          aria-label="Primary"
          role="navigation"
          className="bg-transparent -translate-y-full w-full md:w-auto md:translate-y-0 md:ml-auto md:mr-[8.3333335%] 2xl:mr-[10%] md:bg-transparent opacity-0 md:opacity-100 transition-all duration-500"
        >
          <div className="mx-auto w-10/12 2xl:w-[80%] md:w-auto">
            <div className="items-center space-x-8 flex py-1 md:py-0 flex-row">
              <div className="flex items-center space-x-8">
                <Link
                  className="text-xxs md:text-xs uppercase py-5 hover:underline focus:underline"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="text-xxs md:text-xs uppercase py-5 hover:underline focus:underline"
                  to="/projects"
                >
                  Projects
                </Link>
                <Link
                  className="text-xxs md:text-xs uppercase py-5 hover:underline focus:underline"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>

              <div className="flex items-center space-x-1">
                <a
                  href="https://github.com/racheljoyh"
                  rel="noreferrer"
                  target="_blank"
                  title="GitHub profile"
                  className="w-7 h-7 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="w-6 h-6 hover:w-7 hover:h-7 transition-all duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  title="Discord server"
                  className="w-7 h-7 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="w-6 h-6 hover:w-7 hover:h-7 transition-all duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
