import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  title: string;
  icon: LucideIcon;
  active?: boolean;
  href: string;
}

const SidebarItem = ({
  title,
  icon: Icon,
  active = false,
  href,
}: SidebarItemProps) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200
        ${
          active
            ? "bg-amber-200 text-gray-900"
            : "text-gray-700 hover:bg-amber-50"
        }`}
    >
      <Icon size={19} strokeWidth={2} />

      <span>{title}</span>
    </a>
  );
};

export default SidebarItem;