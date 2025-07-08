import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'default', className }: LoadingSpinnerProps) {
  return (
    <Loader2 
      className={cn(
        "animate-spin",
        size === 'sm' && "h-4 w-4",
        size === 'default' && "h-6 w-6", 
        size === 'lg' && "h-8 w-8",
        className
      )} 
    />
  );
}

// Fullscreen loading overlay
export function LoadingOverlay({ isLoading, children }: { isLoading: boolean; children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-3">
            <LoadingSpinner size="lg" className="text-blue-600" />
            <p className="text-sm text-gray-600 font-inter">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Loading skeleton for cards
export function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse bg-gray-200 rounded", className)} />
  );
}

// Loading states for different components
export function LoadingCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="animate-pulse">
        <LoadingSkeleton className="h-12 w-12 rounded-xl mb-4" />
        <LoadingSkeleton className="h-6 w-3/4 mb-2" />
        <LoadingSkeleton className="h-4 w-full mb-1" />
        <LoadingSkeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export function LoadingButton({ children, isLoading, ...props }: { 
  children: React.ReactNode; 
  isLoading?: boolean; 
  [key: string]: any; 
}) {
  return (
    <button 
      {...props}
      disabled={isLoading || props.disabled}
      className={cn(
        "relative flex items-center justify-center",
        props.className
      )}
    >
      {isLoading && (
        <LoadingSpinner size="sm" className="absolute left-3" />
      )}
      <span className={cn(isLoading && "ml-6")}>
        {children}
      </span>
    </button>
  );
} 