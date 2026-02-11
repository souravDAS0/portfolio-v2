"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiDocker,
  SiVercel,
  SiGit,
  SiGithubactions,
  SiFigma,
  SiFlutter,
  SiGo,
  SiAmazonwebservices,
  SiHtml5,
  SiCss3,
  SiFramer,
  SiPrisma,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface CloudIcon {
  icon: IconType;
  label: string;
  color: string;
}

const TECH_ICONS: CloudIcon[] = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiExpress, label: "Express", color: "#ffffff" },
  { icon: SiGraphql, label: "GraphQL", color: "#E10098" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  { icon: SiSupabase, label: "Supabase", color: "#3FCF8E" },
  { icon: SiDocker, label: "Docker", color: "#2496ED" },
  { icon: SiVercel, label: "Vercel", color: "#ffffff" },
  { icon: SiGit, label: "Git", color: "#F05032" },
  { icon: SiGithubactions, label: "GitHub Actions", color: "#2088FF" },
  { icon: SiFigma, label: "Figma", color: "#F24E1E" },
  { icon: SiFlutter, label: "Flutter", color: "#02569B" },
  { icon: SiGo, label: "Go", color: "#00ADD8" },
  { icon: SiAmazonwebservices, label: "AWS", color: "#FF9900" },
  { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { icon: SiCss3, label: "CSS3", color: "#1572B6" },
  { icon: SiFramer, label: "Framer Motion", color: "#0055FF" },
  { icon: SiPrisma, label: "Prisma", color: "#2D3748" },
];

interface Point3D {
  x: number;
  y: number;
  z: number;
}

function fibonacciSphere(count: number): Point3D[] {
  const points: Point3D[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    points.push({
      x: Math.cos(theta) * radius,
      y: y,
      z: Math.sin(theta) * radius,
    });
  }

  return points;
}

function rotateY(point: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: point.x * cos + point.z * sin,
    y: point.y,
    z: -point.x * sin + point.z * cos,
  };
}

function rotateX(point: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: point.x,
    y: point.y * cos - point.z * sin,
    z: point.y * sin + point.z * cos,
  };
}

interface IconCloudProps {
  className?: string;
  radius?: number;
  iconSize?: number;
}

export function IconCloud({
  className,
  radius = 200,
  iconSize = 40,
}: IconCloudProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const animationRef = React.useRef<number>(0);
  const rotationRef = React.useRef({ x: 0, y: 0 });
  const velocityRef = React.useRef({ x: 0.002, y: 0.005 });
  const mouseRef = React.useRef({ x: 0, y: 0, active: false });
  const [positions, setPositions] = React.useState<Point3D[]>([]);
  const basePoints = React.useRef<Point3D[]>(
    fibonacciSphere(TECH_ICONS.length)
  );

  React.useEffect(() => {
    const animate = () => {
      if (mouseRef.current.active) {
        velocityRef.current.x +=
          (mouseRef.current.y * 0.00002 - velocityRef.current.x) * 0.05;
        velocityRef.current.y +=
          (mouseRef.current.x * 0.00002 - velocityRef.current.y) * 0.05;
      } else {
        velocityRef.current.x += (0.002 - velocityRef.current.x) * 0.01;
        velocityRef.current.y += (0.005 - velocityRef.current.y) * 0.01;
      }

      rotationRef.current.x += velocityRef.current.x;
      rotationRef.current.y += velocityRef.current.y;

      const newPositions = basePoints.current.map((point) => {
        let rotated = rotateY(point, rotationRef.current.y);
        rotated = rotateX(rotated, rotationRef.current.x);
        return rotated;
      });

      setPositions(newPositions);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseRef.current.x = e.clientX - centerX;
      mouseRef.current.y = e.clientY - centerY;
      mouseRef.current.active = true;
    },
    []
  );

  const handleMouseLeave = React.useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  const handleTouchMove = React.useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!containerRef.current || !e.touches[0]) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseRef.current.x = e.touches[0].clientX - centerX;
      mouseRef.current.y = e.touches[0].clientY - centerY;
      mouseRef.current.active = true;
    },
    []
  );

  const handleTouchEnd = React.useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center justify-center",
        className
      )}
      style={{ width: radius * 2 + iconSize, height: radius * 2 + iconSize }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="img"
      aria-label="Interactive 3D cloud of technology icons including React, Next.js, TypeScript, and more"
    >
      {positions.map((pos, i) => {
        const tech = TECH_ICONS[i];
        const scale = (pos.z + 1) / 2;
        const opacity = 0.3 + scale * 0.7;
        const size = iconSize * (0.6 + scale * 0.4);
        const zIndex = Math.round(scale * 100);
        const Icon = tech.icon;

        return (
          <div
            key={tech.label}
            className="absolute flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-current/10"
            style={{
              transform: `translate(${pos.x * radius}px, ${pos.y * radius}px)`,
              width: size,
              height: size,
              opacity,
              zIndex,
            }}
            title={tech.label}
          >
            <Icon
              style={{ color: tech.color }}
              size={size * 0.55}
            />
          </div>
        );
      })}

      {/* Subtle gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-radial from-transparent via-transparent to-background/50" />
    </div>
  );
}
