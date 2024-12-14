"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "./data.js";

export function Header() {
  const pathname = usePathname();
  return (
    <div className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between">
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center">
            <img
              src={"/apple-touch-icon.png"}
              className="mr-3 h-20"
              alt={"Lauryn Robson logo"}
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 rounded-md outline outline-offset-4 outline-rose-100">
          <ul className="flex lg:flex-1">
            {navigation.map((item) => (
              <Link
                className="text-sm font-semibold leading-6 text-gray-900 px-10 hover:text-rose-300"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
    </div>
  );
}
