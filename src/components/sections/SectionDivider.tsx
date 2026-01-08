import { cn } from "@/lib/utils";

type SectionDividerProps = {
  className?: string;
};

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn("container my-2 md:my-3", className)} aria-hidden="true">
      <div className="section-divider" />
    </div>
  );
}
