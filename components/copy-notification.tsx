"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"

interface CopyNotificationContextType {
  showNotification: () => void
}

const CopyNotificationContext = createContext<CopyNotificationContextType | null>(null)

export function useCopyNotification() {
  const context = useContext(CopyNotificationContext)
  if (!context) {
    throw new Error("useCopyNotification must be used within a CopyNotificationProvider")
  }
  return context
}

export function CopyNotificationProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false)

  const showNotification = useCallback(() => {
    setVisible(true)
    setTimeout(() => setVisible(false), 2000)
  }, [])

  return (
    <CopyNotificationContext.Provider value={{ showNotification }}>
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 backdrop-blur-sm px-4 py-3 shadow-lg"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
              <Check className="h-3 w-3 text-white" />
            </div>
            <span className="text-sm font-medium text-green-500">Başarıyla Kopyalandı</span>
          </motion.div>
        )}
      </AnimatePresence>
    </CopyNotificationContext.Provider>
  )
}
