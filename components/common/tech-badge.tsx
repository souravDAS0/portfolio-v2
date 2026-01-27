import { getTechIconConfig } from "@/lib/utils/tech-icons";
import { cn } from "@/lib/utils";

export type TechBadgeVariant = "default" | "outline" | "minimal";

export interface TechBadgeProps {
  technology: string;
  variant?: TechBadgeVariant;
  className?: string;
  showIcon?: boolean;
}

export function TechBadge({
  technology,
  variant = "default",
  className,
  showIcon = true,
}: TechBadgeProps) {
  const config = getTechIconConfig(technology);
  const Icon = config.icon;

  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors";

  const variantStyles = {
    default: cn(config.bgColor, config.textColor, config.darkTextColor),
    outline: cn(
      "border",
      `border-${config.textColor.replace("text-", "")}`,
      config.textColor,
      config.darkTextColor,
      "bg-transparent"
    ),
    minimal: cn(config.textColor, config.darkTextColor, "bg-transparent"),
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], className)}
      aria-label={`Technology: ${technology}`}
    >
      {showIcon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      <span>{technology}</span>
    </span>
  );
}

export interface TechBadgeGroupProps {
  technologies: string[];
  variant?: TechBadgeVariant;
  maxDisplay?: number;
  className?: string;
  showIcon?: boolean;
}

/**
 * Displays a group of technology badges with optional overflow indicator
 */
export function TechBadgeGroup({
  technologies,
  variant = "default",
  maxDisplay = 5,
  className,
  showIcon = true,
}: TechBadgeGroupProps) {
  const displayTechs = technologies.slice(0, maxDisplay);
  const remainingCount = technologies.length - maxDisplay;

  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="group"
      aria-label="Technologies used"
    >
      {displayTechs.map((tech) => (
        <TechBadge
          key={tech}
          technology={tech}
          variant={variant}
          showIcon={showIcon}
        />
      ))}
      {remainingCount > 0 && (
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
            "bg-muted text-muted-foreground"
          )}
          aria-label={`${remainingCount} more technologies`}
        >
          +{remainingCount}
        </span>
      )}
    </div>
  );
}
