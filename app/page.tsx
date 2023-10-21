import { Comparison } from '@/components/comparison'
import { Raw } from '@/components/raw'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Prisma Comparison Table
        </h1>

        <div className="rounded-md bg-blue-50 p-4 mt-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12" y2="8"/>
              </svg>
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <p className="text-sm text-blue-700">This is a work in progress.</p>
            </div>
          </div>
        </div>

        <div className="mt-16"></div>

        <Comparison/>

        <div className="mt-16"></div>

        <Raw/>
      </div>
    </main>
  )
}
