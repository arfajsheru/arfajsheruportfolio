import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionHeading({ children, className, ...props }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "mb-8 text-3xl font-semibold tracking-tight sm:text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
