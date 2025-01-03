'use client'
import { TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <TabsTrigger value={value} className="relative group px-1 pb-4 sext-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 outline-none">
      <span className="group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4 rounded">{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-0 left-0 right-0 h-0.5 bg-violet-700"
          transition={{ duration: 0.3 }}
        />

      )}
    </TabsTrigger>
  )
}