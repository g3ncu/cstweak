"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import { useCopyNotification } from "./copy-notification"

interface CopyableCommandProps {
  command: string
  className?: string
}

export function CopyableCommand({ command, className = "" }: CopyableCommandProps) {
  const [copied, setCopied] = useState(false)
  const { showNotification } = useCopyNotification()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    showNotification()
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 font-mono text-sm text-primary transition-all hover:bg-primary/20 cursor-pointer ${className}`}
    >
      <span>{command}</span>
      <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {copied ? (
          <Check className="h-3.5 w-3.5 text-green-500" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </span>
    </motion.button>
  )
}
