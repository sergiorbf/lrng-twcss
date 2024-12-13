import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoyIcon, Search, SquareStack, Users } from "lucide-react";
import { Logo } from "./logo";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";

export function Sidebar() {
  return <aside
    className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
    <Logo />

    <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        className="flex-1 border-0 bg-transparent p-0 text-zinc-900"
        placeholder="Search" />
    </div>
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Projects" icon={SquareStack} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>

    <div className="mt-auto flex flex-col gap-6">
      <nav className="space-y-0.5">
        <NavItem title="Support" icon={LifeBuoyIcon} />
        <NavItem title="Settings" icon={Cog} />
      </nav>

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200">
        <Profile />
      </div>
    </div>
  </aside>
}

