import Link from "next/link";

export default function Page() {
  return (
    <div className="py-20">
      <div className="text-center">
        <h3 className="text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          About Me
        </h3>
      </div>
      <div>
        <p className="p-10">Table of content</p>
        <div className="text-center">
          <p>Short description of myself</p>
          <p>Work experience</p>
          <p>Education</p>
          <p>Certs</p>
          <p>Skills</p>
          <p>Interests</p>
        </div>
      </div>
      <Link className="lg:hidden text-3xl font-bold underline" href="/about">
        About
      </Link>
    </div>
  );
}
