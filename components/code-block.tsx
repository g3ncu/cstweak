"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCopyNotification } from "./copy-notification"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export function CodeBlock({ code, language = "bash", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const { showNotification } = useCopyNotification()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    showNotification()
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
          <span className="text-xs font-medium text-muted-foreground">{title}</span>
          <span className="text-xs text-muted-foreground/60">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm">
          <code className="font-mono text-foreground">{code}</code>
        </pre>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="absolute right-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <motion.div
            initial={false}
            animate={{ scale: copied ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.2 }}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </motion.div>
        </Button>
      </div>
    </div>
  )
}
