import Link from "next/link";
import Image from "next/image";

// Define the Footer component
export default function Footer() {
  return (
    <footer className="m-10">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src={"/apple-touch-icon.png"}
                className="mr-3 h-20"
                alt={"Lauryn Robson logo"}
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h1 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Navigate
              </h1>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Social Media
              </h1>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/laurynxrobson"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/lauryn-robson-97a992166/"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/laurynxrobson/"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="py-5">
          {/* Display your name and the current year */}
          <p>Lauryn Kendra Robson &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
