import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui'
import { useSessionUser, useSignIn, useSignOut } from '../model/session.store'

export function HomePage() {
  const user = useSessionUser()
  const signIn = useSignIn()
  const signOut = useSignOut()
  return (
    <main className="mx-auto max-w-2xl p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">VietLearn</CardTitle>
          <CardDescription>
            {user ? `Xin chào, ${user}!` : 'Học tiếng Việt mỗi ngày.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {user ? (
            <Button variant="outline" onClick={signOut}>
              Đăng xuất
            </Button>
          ) : (
            <Button onClick={() => signIn('bạn')}>Bắt đầu</Button>
          )}
        </CardContent>
      </Card>
    </main>
  )
}
