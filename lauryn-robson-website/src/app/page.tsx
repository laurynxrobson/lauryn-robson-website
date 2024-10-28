import Link from "next/link";

export default function Page() {
  return (
    <div className="py-56">
      <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
        Data to enrich your online business
      </h1>
      <Link className="lg:hidden text-3xl font-bold underline" href="/">
        Home
      </Link>
    </div>
  );
}
