import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
  variant?: 'default' | 'hover' | 'bordered' | 'gradient';
}

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
  gradient?: boolean;
}

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  description?: string;
  className?: string;
  variant?: 'leadership' | 'engineering';
}

export function FeatureCard({ 
  title, 
  description, 
  icon, 
  className, 
  children, 
  variant = 'default' 
}: FeatureCardProps) {
  const cardVariants = {
    default: "transition-all duration-300 hover:shadow-lg hover:scale-105 border-gray-100",
    hover: "transition-all duration-300 hover:shadow-xl hover:scale-105 border-gray-100 hover:border-blue-200",
    bordered: "border-2 border-gray-200 hover:border-blue-300 transition-all duration-300",
    gradient: "bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:from-blue-100 hover:to-blue-50 transition-all duration-300"
  };

  return (
    <Card className={cn(
      "h-full",
      cardVariants[variant],
      className
    )}>
      <CardHeader className="text-center">
        {icon && (
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            {icon}
          </div>
        )}
        <CardTitle className="text-xl font-manrope">{title}</CardTitle>
        <CardDescription className="font-inter text-gray-600">{description}</CardDescription>
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}

export function StatCard({ 
  value, 
  label, 
  description, 
  className, 
  gradient = false 
}: StatCardProps) {
  return (
    <Card className={cn(
      "text-center p-6 transition-all duration-300 hover:shadow-lg",
      className
    )}>
      <CardContent className="p-0">
        <div className={cn(
          "text-3xl sm:text-4xl font-bold mb-2 font-manrope",
          gradient 
            ? "bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent"
            : "text-gray-900"
        )}>
          {value}
        </div>
        <div className="text-sm text-gray-600 font-inter mb-1">{label}</div>
        {description && (
          <div className="text-xs text-gray-500 font-inter">{description}</div>
        )}
      </CardContent>
    </Card>
  );
}

export function TeamCard({ 
  name, 
  role, 
  image, 
  description, 
  className, 
  variant = 'leadership' 
}: TeamCardProps) {
  const cardHeight = variant === 'leadership' ? 'h-[540px]' : 'h-[540px]';
  
  return (
    <Card className={cn(
      cardHeight,
      "transition-all duration-300 hover:shadow-xl group overflow-hidden",
      className
    )}>
      <div className="relative h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          {image && (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Content Section */}
        <CardContent className="flex-grow flex flex-col justify-between p-6">
          <div>
            <CardTitle className="text-xl font-manrope mb-2 text-gray-900">
              {name}
            </CardTitle>
            <div className="text-sm font-semibold text-blue-600 mb-3 font-inter">
              {role}
            </div>
            {description && (
              <CardDescription className="text-gray-600 font-inter leading-relaxed">
                {description}
              </CardDescription>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export function ProductCard({ 
  title, 
  description, 
  image, 
  badge, 
  className, 
  children 
}: {
  title: string;
  description: string;
  image?: string;
  badge?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Card className={cn(
      "h-full transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden",
      className
    )}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {badge && (
            <div className="absolute top-4 right-4 bg-blue-900 text-white text-xs px-3 py-1 rounded-full font-inter">
              {badge}
            </div>
          )}
        </div>
      )}
      <CardContent className="p-6">
        <CardTitle className="text-xl font-manrope mb-3">{title}</CardTitle>
        <CardDescription className="font-inter text-gray-600 mb-4">
          {description}
        </CardDescription>
        {children}
      </CardContent>
    </Card>
  );
}

export function TestimonialCard({ 
  quote, 
  author, 
  role, 
  company, 
  avatar, 
  className 
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  className?: string;
}) {
  return (
    <Card className={cn(
      "h-full p-6 transition-all duration-300 hover:shadow-lg border-gray-100",
      className
    )}>
      <CardContent className="p-0 h-full flex flex-col">
        <div className="flex-grow">
          <div className="text-4xl text-blue-600 mb-4">"</div>
          <p className="text-gray-700 font-inter leading-relaxed mb-6">
            {quote}
          </p>
        </div>
        <div className="flex items-center">
          {avatar && (
            <img
              src={avatar}
              alt={author}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
          )}
          <div>
            <div className="font-semibold text-gray-900 font-manrope">{author}</div>
            <div className="text-sm text-gray-600 font-inter">{role} at {company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Utility wrapper for consistent card spacing
export function CardGrid({ 
  children, 
  columns = 3, 
  className 
}: { 
  children: ReactNode; 
  columns?: 1 | 2 | 3 | 4; 
  className?: string; 
}) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className={cn(
      "grid gap-6 items-stretch",
      gridCols[columns],
      className
    )}>
      {children}
    </div>
  );
} 