import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  isPremium: boolean;
  login: () => void;
  logout: () => void;
  upgradeToPremium: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isPremium: false,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false, isPremium: false }),
  upgradeToPremium: () => set({ isPremium: true }),
}));