import Link from "next/link";

export default function Page() {
  return (
    <div className="py-32">
      <div className="text-center">
        <h1 className="py-1 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Welcome
        </h1>
        <p className="py-1 text-balance text-lg font-semibold tracking-tight text-gray-900 sm:text-5xl">
          to
        </p>
        <p className="py-1 text-balance text-lg font-semibold tracking-tight text-gray-900 sm:text-5xl">
          my corner of the internet.
        </p>
      </div>
      <div className="text-center">
        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Hi! I am Lauryn Robson. A junior software Proud light mode user and
          magazine collector.
        </p>
        <p className="p-5">image of myself</p>
      </div>
      <Link className="lg:hidden text-3xl font-bold underline" href="/">
        Home
      </Link>
    </div>
  );
}
