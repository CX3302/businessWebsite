import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

interface TextProps {
  children: ReactNode;
  className?: string;
  variant?: 'body' | 'large' | 'small' | 'muted' | 'caption';
  as?: 'p' | 'span' | 'div';
}

export function Heading({ level, children, className, gradient = false }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const sizes = {
    1: "text-4xl md:text-6xl font-bold",
    2: "text-3xl md:text-5xl font-bold", 
    3: "text-2xl md:text-3xl font-bold",
    4: "text-xl md:text-2xl font-semibold",
    5: "text-lg md:text-xl font-semibold",
    6: "text-base md:text-lg font-semibold"
  };
  
  const baseStyles = cn(
    sizes[level],
    "font-manrope leading-tight",
    gradient 
      ? "bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent"
      : "text-gray-900"
  );
  
  return (
    <Tag className={cn(baseStyles, className)}>
      {children}
    </Tag>
  );
}

export function Text({ children, className, variant = 'body', as = 'p' }: TextProps) {
  const Tag = as;
  
  const variants = {
    body: "text-base leading-7 text-gray-700",
    large: "text-lg leading-8 text-gray-700",
    small: "text-sm leading-6 text-gray-600",
    muted: "text-sm leading-6 text-gray-500",
    caption: "text-xs leading-5 text-gray-500"
  };
  
  const baseStyles = cn(
    "font-inter",
    variants[variant]
  );
  
  return (
    <Tag className={cn(baseStyles, className)}>
      {children}
    </Tag>
  );
}

// Specialized typography components
export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Text
      as="p"
      variant="large"
      className={cn("text-xl text-gray-600 leading-relaxed", className)}
    >
      {children}
    </Text>
  );
}

export function Subtitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Text
      as="p"
      variant="large"
      className={cn("text-lg text-gray-600 leading-relaxed", className)}
    >
      {children}
    </Text>
  );
}

export function Caption({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Text
      as="span"
      variant="caption"
      className={cn("text-xs text-gray-500 uppercase tracking-wider", className)}
    >
      {children}
    </Text>
  );
}

// Utility for consistent text gradients
export function GradientText({ children, className, from = "from-gray-900", to = "to-blue-900" }: { 
  children: ReactNode; 
  className?: string; 
  from?: string; 
  to?: string; 
}) {
  return (
    <span className={cn(`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent`, className)}>
      {children}
    </span>
  );
}

// Pre-configured heading components for common use cases
export function PageTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Heading level={1} gradient className={cn("mb-6", className)}>
      {children}
    </Heading>
  );
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Heading level={2} gradient className={cn("mb-4", className)}>
      {children}
    </Heading>
  );
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Heading level={3} className={cn("mb-3", className)}>
      {children}
    </Heading>
  );
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Text variant="body" className={cn("text-gray-600", className)}>
      {children}
    </Text>
  );
} 