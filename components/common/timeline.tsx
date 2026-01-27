"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  company?: string;
  description: string;
  icon?: LucideIcon;
  type?: "work" | "education" | "achievement";
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

/**
 * Timeline Component
 *
 * Displays a vertical timeline of career events
 *
 * Design Decisions:
 * - Vertical layout for mobile-first approach
 * - Alternating left/right on desktop (optional)
 * - Icon markers for visual interest
 * - Color-coded by event type
 * - Connecting line shows progression
 * - Staggered animations for reveal
 *
 * Visual Elements:
 * - Vertical line connects all events
 * - Icon dots mark each event
 * - Cards contain event details
 * - Dates provide temporal context
 * - Icons indicate event type
 *
 * Animation:
 * - Line draws from top to bottom
 * - Events fade in as line reaches them
 * - Stagger creates cascading effect
 * - Hover effects on cards
 *
 * Responsive:
 * - Single column on mobile
 * - Can alternate sides on desktop
 * - Adjusts spacing for readability
 *
 * Accessibility:
 * - Semantic HTML with proper structure
 * - Chronological order maintained
 * - Clear visual hierarchy
 * - Readable date formats
 *
 * @example
 * ```tsx
 * <Timeline events={[
 *   {
 *     id: "1",
 *     date: "2020 - Present",
 *     title: "Senior Developer",
 *     company: "Tech Corp",
 *     description: "Leading development team",
 *     type: "work"
 *   }
 * ]} />
 * ```
 */
export function Timeline({ events, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="bg-border absolute top-0 left-[9px] h-full w-0.5 sm:left-1/2 sm:-translate-x-px" />

      {/* Events */}
      <div className="space-y-12">
        {events.map((event, index) => (
          <TimelineItem
            key={event.id}
            event={event}
            index={index}
            isLast={index === events.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Timeline Item Component
 *
 * Individual event in the timeline
 */
interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isLast: boolean;
}

function TimelineItem({ event, index }: TimelineItemProps) {
  const Icon = event.icon;

  // Determine color based on type
  const getTypeColor = (type?: string) => {
    switch (type) {
      case "work":
        return "bg-primary text-primary-foreground";
      case "education":
        return "bg-secondary text-secondary-foreground";
      case "achievement":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-start gap-6 sm:gap-8"
    >
      {/* Icon dot */}
      <div className="relative z-10 flex h-5 w-5 flex-shrink-0 items-center justify-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
        <div
          className={cn(
            "border-background flex h-5 w-5 items-center justify-center rounded-full border-2",
            getTypeColor(event.type)
          )}
        >
          {Icon && <Icon className="h-2.5 w-2.5" />}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 sm:w-[calc(50%-2rem)]">
        <div className="group border-border/50 bg-card hover:border-border relative rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
          {/* Date badge */}
          <div className="bg-muted text-muted-foreground mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium">
            {event.date}
          </div>

          {/* Title and company */}
          <h3 className="mb-1 text-lg font-semibold">{event.title}</h3>
          {event.company && (
            <p className="text-primary mb-3 text-sm font-medium">
              {event.company}
            </p>
          )}

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {event.description}
          </p>

          {/* Hover accent */}
          <div className="bg-primary absolute top-0 -left-px h-full w-1 rounded-l-lg opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Horizontal Timeline
 *
 * Alternative horizontal layout for timeline
 *
 * @example
 * ```tsx
 * <HorizontalTimeline events={events} />
 * ```
 */
export function HorizontalTimeline({
  events,
  className,
}: {
  events: TimelineEvent[];
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-x-auto pb-4", className)}>
      {/* Horizontal line */}
      <div className="bg-border absolute top-8 left-0 h-0.5 w-full" />

      {/* Events */}
      <div className="flex gap-8 pb-4">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex min-w-[250px] flex-col items-center"
          >
            {/* Icon dot */}
            <div className="border-background bg-primary mb-4 flex h-4 w-4 items-center justify-center rounded-full border-2" />

            {/* Content card */}
            <div className="border-border/50 bg-card w-full rounded-lg border p-4 shadow-sm">
              <div className="text-muted-foreground mb-2 text-xs font-medium">
                {event.date}
              </div>
              <h4 className="mb-1 text-sm font-semibold">{event.title}</h4>
              {event.company && (
                <p className="text-primary mb-2 text-xs">{event.company}</p>
              )}
              <p className="text-muted-foreground line-clamp-3 text-xs">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
