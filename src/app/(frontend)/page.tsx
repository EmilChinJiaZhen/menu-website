import Link from "next/link";
import './styles.css'

export default function MainMenuPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-8">My Menu</h1>
      <Link href="/homepage">
        <button className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
          Start Ordering
        </button>
      </Link>
    </div>
  );
}
