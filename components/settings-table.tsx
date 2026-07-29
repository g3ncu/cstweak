"use client"

import { motion } from "framer-motion"

interface Setting {
  name: string
  value: string
  highlight?: boolean
}

interface SettingsTableProps {
  title: string
  settings: Setting[]
}

export function SettingsTable({ title, settings }: SettingsTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-lg border border-border"
    >
      <div className="border-b border-border bg-secondary/50 px-4 py-3">
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="divide-y divide-border">
        {settings.map((setting, index) => (
          <motion.div
            key={setting.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center justify-between px-4 py-3 hover:bg-secondary/30 transition-colors"
          >
            <span className="text-sm text-muted-foreground">{setting.name}</span>
            <span className={`text-sm font-medium ${setting.highlight ? 'text-primary' : 'text-foreground'}`}>
              {setting.value}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
