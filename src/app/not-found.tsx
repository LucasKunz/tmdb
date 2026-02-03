import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4">
      <h2 className="text-4xl font-semibold text-white">404</h2>
      <p className="text-center text-xl text-white">Página não encontrada</p>
      <Link
        href="/"
        className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
      >
        Voltar para início
      </Link>
    </div>
  );
}
