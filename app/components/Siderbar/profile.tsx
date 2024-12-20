import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/sergiorbf.png"
        className="h-10 w-10 rounded-full"
        alt="" />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Sergio Filho</span>
        <span className="text-sm text-zinc-500 truncate">contato.sergiorbf@gmail.com</span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}