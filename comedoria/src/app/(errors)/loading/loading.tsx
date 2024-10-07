'use client'
import "@/app/globals.css"

export default function Loading() {
  return (
    <section className="min-h-screen bg-white flex flex-col">
      <div className="rubik-400 m-auto flex items-center justify-center px-4">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Carregando...
              </h2>
            </div>
          </div>
      </div>
    </section>
  )
}