import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  expiresIn: number | null;
  setAuth: (accessToken: string, expiresIn: number) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      expiresIn: null,
      setAuth: (accessToken, expiresIn) => set({ accessToken, expiresIn }),
      clearAuth: () => set({ accessToken: null, expiresIn: null }),
    }),
    {
      name: 'auth-storage', 
    }
  )
);
