'use client'
import Link from 'next/link';
import "@/app/globals.css"

export default function AuthenticationError() {
  return (
    <section className="min-h-screen bg-white flex flex-col">
      <div className="rubik-400 m-auto flex items-center justify-center px-4">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Erro de Autenticação
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Você não está autenticado. Faça login.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              <Link href="/landing-page" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm bg-darkgreen text-beige hover:bg-darkgreen-hover">
                Voltar para o início →
              </Link>
            </div>
          </div>
      </div>
    </section>
  )
}