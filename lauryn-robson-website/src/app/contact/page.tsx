import Link from "next/link";

export default function Page() {
  return (
    <div className="py-20">
      <div className="text-center">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contact
        </h1>
      </div>
      <div className="p-10 text-center">
        <p>Contact form</p>
        <p>Name:</p>
        <p>Surname</p>
        <p>Company</p>
        <p>Email</p>
        <p>Looking for</p>
        <p>Budget</p>
        <p>More details</p>
        <button>Contact me</button>
      </div>
      <Link className="lg:hidden text-3xl font-bold underline" href="/contact">
        Contact
      </Link>
    </div>
  );
}
