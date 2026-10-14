import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { queryClient } from '@/shared/api'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary fallback={<p className="p-8">Đã có lỗi xảy ra.</p>}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
