// Design tokens and theme configuration
export const theme = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      500: '#0ea5e9',
      600: '#0284c7',
      900: '#0c4a6e'
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      500: '#64748b',
      600: '#475569',
      900: '#0f172a'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a'
    }
  },
  spacing: {
    section: 'py-20 lg:py-32',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    cardPadding: 'p-6 lg:p-8',
    buttonPadding: 'px-6 py-3',
    inputPadding: 'px-4 py-2'
  },
  typography: {
    headingFont: 'font-manrope',
    bodyFont: 'font-inter',
    h1: 'text-4xl md:text-6xl font-bold',
    h2: 'text-3xl md:text-5xl font-bold',
    h3: 'text-2xl md:text-3xl font-bold',
    h4: 'text-xl md:text-2xl font-semibold',
    h5: 'text-lg md:text-xl font-semibold',
    h6: 'text-base md:text-lg font-semibold',
    body: 'text-base leading-7',
    small: 'text-sm leading-6',
    caption: 'text-xs leading-5'
  },
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    card: 'shadow-lg hover:shadow-xl',
    button: 'shadow-md hover:shadow-lg'
  },
  borders: {
    radius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full'
    },
    width: {
      thin: 'border',
      medium: 'border-2',
      thick: 'border-4'
    }
  },
  transitions: {
    fast: 'transition-all duration-200',
    normal: 'transition-all duration-300',
    slow: 'transition-all duration-500'
  },
  gradients: {
    primaryText: 'bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent',
    primaryButton: 'bg-gradient-to-r from-blue-600 to-blue-700',
    secondaryButton: 'bg-gradient-to-r from-gray-600 to-gray-700',
    background: 'bg-gradient-to-br from-gray-50 via-white to-blue-50',
    cardHover: 'hover:bg-gradient-to-br hover:from-blue-50 hover:to-white'
  }
};

// Utility functions for consistent styling
export const getButtonStyles = (variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary') => {
  const baseStyles = `${theme.spacing.buttonPadding} ${theme.borders.radius.md} ${theme.transitions.fast} font-semibold`;
  
  switch (variant) {
    case 'primary':
      return `${baseStyles} ${theme.gradients.primaryButton} text-white ${theme.shadows.button}`;
    case 'secondary':
      return `${baseStyles} ${theme.gradients.secondaryButton} text-white ${theme.shadows.button}`;
    case 'outline':
      return `${baseStyles} border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white`;
    case 'ghost':
      return `${baseStyles} text-blue-600 hover:bg-blue-50`;
    default:
      return baseStyles;
  }
};

export const getCardStyles = (variant: 'default' | 'hover' | 'bordered' = 'default') => {
  const baseStyles = `${theme.spacing.cardPadding} ${theme.borders.radius.lg} ${theme.transitions.normal}`;
  
  switch (variant) {
    case 'hover':
      return `${baseStyles} ${theme.shadows.card} ${theme.gradients.cardHover}`;
    case 'bordered':
      return `${baseStyles} border border-gray-200 ${theme.shadows.sm}`;
    default:
      return `${baseStyles} bg-white`;
  }
};

export const getTextStyles = (variant: 'heading' | 'body' | 'caption' = 'body') => {
  const baseStyles = theme.typography.bodyFont;
  
  switch (variant) {
    case 'heading':
      return `${theme.typography.headingFont} ${theme.colors.gray[900]} leading-tight`;
    case 'body':
      return `${baseStyles} ${theme.typography.body} text-gray-700`;
    case 'caption':
      return `${baseStyles} ${theme.typography.caption} text-gray-500`;
    default:
      return baseStyles;
  }
};

// Layout components
export const Container = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`${theme.spacing.container} ${className}`}>
    {children}
  </div>
);

export const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`${theme.spacing.section} ${className}`}>
    {children}
  </section>
);

// Color palette for easy reference
export const colorPalette = {
  brand: {
    primary: '#0ea5e9',
    secondary: '#64748b',
    accent: '#3b82f6'
  },
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },
  neutral: {
    white: '#ffffff',
    light: '#f8fafc',
    medium: '#64748b',
    dark: '#0f172a'
  }
};

export default theme; 