"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between">
        <div className="flex lg:flex-1">
          <Link className="-m-1.5 p-1.5" href="/">
            <span className="sr-only">Logo</span>
            <Image
              src={"/apple-touch-icon.png"}
              alt={"Lauryn Robson logo"}
              width={75}
              height={75}
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <ul className="flex lg:flex-1">
            {navigation.map((item) => (
              <Link
                className="text-sm font-semibold leading-6 text-gray-900 px-10"
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
