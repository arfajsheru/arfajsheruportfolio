import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export function NavLink({ href, children, active, className, ...props }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative py-2 text-[15px] font-medium transition-colors duration-300 group",
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
      
      {/* Active Line */}
      {active && (
        <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-foreground" />
      )}
      
      {/* Hover Line (appears when not active) */}
      {!active && (
        <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full bg-foreground/30 transition-all duration-300 group-hover:w-full" />
      )}
    </Link>
  );
}
