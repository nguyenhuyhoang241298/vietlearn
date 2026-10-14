import { create } from 'zustand'

interface SessionState {
  userName: string | null
  signIn: (userName: string) => void
  signOut: () => void
}

const useSessionStore = create<SessionState>((set) => ({
  userName: null,
  signIn: (userName) => set({ userName }),
  signOut: () => set({ userName: null }),
}))

export const useSessionUser = () => useSessionStore((s) => s.userName)
export const useSessionActions = () =>
  useSessionStore((s) => ({ signIn: s.signIn, signOut: s.signOut }))
