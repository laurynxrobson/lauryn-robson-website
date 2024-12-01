import Link from "next/link";
import Image from "next/image";

// Define the Footer component
export default function Footer() {
  return (
    <footer className="m-10">
      <div className=" grid-cols-2 divide-y">
        <div className="grid grid-cols-3">
          <div className="flex lg:flex-1">
            <Link className="-m-1.5 p-1.5" href="/">
              {/* <span className="sr-only">Logo</span> */}
              <Image
                src={"/apple-touch-icon.png"}
                alt={"Lauryn Robson logo"}
                width={75}
                height={75}
              />
            </Link>
          </div>
          <div className="text-center">
            <h1>Navigate</h1>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>

          <div className="text-right">
            <h1>Social Media</h1>
            <ul>
              <li>
                <a href="https://github.com/laurynxrobson">Github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lauryn-robson-97a992166/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/laurynxrobson/">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <br />
        <div className="py-5">
          {/* Display your name and the current year */}
          <p>Lauryn Kendra Robson &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
