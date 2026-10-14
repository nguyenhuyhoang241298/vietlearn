import { useSessionUser } from '../model/session.store'

export function HomePage() {
  const user = useSessionUser()
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">VietLearn</h1>
      <p className="mt-2 text-slate-600">
        {user ? `Xin chào, ${user}!` : 'Học tiếng Việt mỗi ngày.'}
      </p>
    </main>
  )
}
