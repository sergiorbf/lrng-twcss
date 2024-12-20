'use client'
import { TabsTrigger } from "@/components/ui/tabs";

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <TabsTrigger value={value} className="relative px-1 pb-4 sext-sm font-medium text-zinc-500 hover:text-violet-700">
      <span>{title}</span>

      {isSelected && (
        <div className="absolute -bottom-0 left-0 right-0 h-0.5 bg-violet-700" />
      )}
    </TabsTrigger>
  )
}