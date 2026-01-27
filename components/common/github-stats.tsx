import { Star, GitFork, Eye } from "lucide-react";
import { GitHubStats as GitHubStatsType } from "@/lib/types/project";
import { cn } from "@/lib/utils";

export interface GitHubStatsProps {
  stats: GitHubStatsType;
  className?: string;
}

export function GitHubStats({ stats, className }: GitHubStatsProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center gap-4 text-sm", className)}
      role="group"
      aria-label="GitHub repository statistics"
    >
      {/* Stars */}
      <div className="text-muted-foreground flex items-center gap-1.5">
        <Star className="h-4 w-4" aria-hidden="true" />
        <span aria-label={`${stats.stars} stars`}>
          {formatNumber(stats.stars)}
        </span>
      </div>

      {/* Forks */}
      <div className="text-muted-foreground flex items-center gap-1.5">
        <GitFork className="h-4 w-4" aria-hidden="true" />
        <span aria-label={`${stats.forks} forks`}>
          {formatNumber(stats.forks)}
        </span>
      </div>

      {/* Watchers */}
      <div className="text-muted-foreground flex items-center gap-1.5">
        <Eye className="h-4 w-4" aria-hidden="true" />
        <span aria-label={`${stats.watchers} watchers`}>
          {formatNumber(stats.watchers)}
        </span>
      </div>

      {/* Language & Last Updated */}
      <div className="text-muted-foreground flex items-center gap-2">
        <span className="text-xs">•</span>
        <span className="text-xs">{stats.language}</span>
        <span className="text-xs">•</span>
        <span className="text-xs">Updated {stats.lastUpdated}</span>
      </div>
    </div>
  );
}

/**
 * Format numbers with K/M suffix
 */
function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
}
