"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Certification } from "@/lib/types/experience";
import { formatExperienceDate } from "@/lib/data/experience";

interface CertificationBadgeProps {
  certification: Certification;
  index: number;
  className?: string;
}

export function CertificationBadge({
  certification,
  index,
  className,
}: CertificationBadgeProps) {
  const isExpired =
    certification.expiryDate &&
    new Date(certification.expiryDate + "-01") < new Date();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={cn("group", className)}
    >
      <Card className="border-border/50 bg-card/50 hover:border-primary/30 h-full overflow-hidden backdrop-blur transition-all hover:shadow-lg">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="bg-primary/10 group-hover:bg-primary/20 flex-shrink-0 rounded-lg p-2.5 transition-colors">
              <Award className="text-primary h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              {/* Name */}
              <h4 className="mb-1 text-sm leading-tight font-semibold">
                {certification.name}
              </h4>

              {/* Issuer */}
              <p className="text-muted-foreground mb-2 text-xs">
                {certification.issuer}
              </p>

              {/* Date info */}
              <div className="text-muted-foreground mb-3 flex items-center gap-1 text-xs">
                <Calendar className="h-3 w-3" />
                <span>
                  Issued {formatExperienceDate(certification.issueDate)}
                </span>
                {certification.expiryDate && (
                  <span className={cn(isExpired && "text-destructive")}>
                    {" "}
                    &middot;{" "}
                    {isExpired
                      ? "Expired"
                      : `Expires ${formatExperienceDate(certification.expiryDate)}`}
                  </span>
                )}
              </div>

              {/* Skills */}
              {certification.skills && certification.skills.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-1">
                  {certification.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-1.5 py-0 text-[10px]"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Credential link */}
              {certification.credentialUrl && (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary inline-flex items-center gap-1 text-xs font-medium hover:underline"
                >
                  Verify Credential
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
