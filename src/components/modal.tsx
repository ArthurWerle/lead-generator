import { ReactNode } from "react"
import Loader from "./loader"

type ModalProps = {
  isOpen: boolean
  onClose?: () => void
  title?: string
  isLoading?: boolean
  children: ReactNode
}

export default function Modal({ isOpen, onClose, title = 'Modal Title', children, isLoading = false }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white p-8 rounded w-[600px] h-[500px] overflow-auto">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {isLoading ? <Loader /> : children}
      </div>
    </div>
  );
};