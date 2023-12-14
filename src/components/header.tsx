import Link from "next/link";

export default function Header() {
  return (
    <header className="my-9">
      <h1 className="font-bold text-3xl sm:text-5xl">
        <Link href="/">Leads Generator!</Link>
      </h1>
    </header>
  );
}
