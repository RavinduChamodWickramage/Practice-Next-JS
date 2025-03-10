import Link from "next/link";
import ProductCard from "./components/ProductCard";
import DynamicClock from "./components/DynamicClock";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="p-5 m-5 bg-sky-400 text-white text-xl text-center rounded-lg">
        Hello World...!!
      </h1>
      <DynamicClock />
      <Link
        href="/users"
        className="block text-center text-blue-500 hover:text-blue-700 mb-4"
      >
        Users
      </Link>
      <ProductCard />
    </main>
  );
}
