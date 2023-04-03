import { Movie } from '@prisma/client';
import { create } from 'zustand';

export interface ModalStore {
  movie?: Movie;
  isOpen: boolean;
  openModal: (data: Movie) => void;
  closeModal: () => void;
}

export const useInfoModal = create<ModalStore>((set) => ({
  movie: undefined,
  isOpen: false,
  openModal: (data: Movie) => set({ isOpen: true, movie: data }),
  closeModal: () => set({ isOpen: false, movie: undefined })
}));
