'use client';

import Button from './Button';

const ButtonShowcase = () => {
  const handleClick = (variant: string) => {
    console.log(`${variant} button clicked!`);
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Button Showcase</h2>
      
      {/* Primary Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Primary CTAs</h3>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="shimmer"
            size="lg"
            onClick={() => handleClick('shimmer')}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            }
          >
            Shimmer Effect
          </Button>
          
          <Button
            variant="glow"
            size="lg"
            onClick={() => handleClick('glow')}
          >
            Glow Effect
          </Button>
          
          <Button
            variant="default"
            size="lg"
            onClick={() => handleClick('primary')}
          >
            Standard Primary
          </Button>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Secondary Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="magnetic"
            size="lg"
            onClick={() => handleClick('magnetic')}
          >
            Magnetic Effect
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleClick('secondary')}
          >
            Standard Secondary
          </Button>
        </div>
      </div>

      {/* Utility Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Utility & Text Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="depth"
            size="default"
            onClick={() => handleClick('depth')}
          >
            Depth Effect
          </Button>
          
          <Button
            variant="ghost"
            size="default"
            onClick={() => handleClick('tertiary')}
          >
            Text Link
          </Button>
        </div>
      </div>

      {/* Size Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Size Variations</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="shimmer" size="sm" onClick={() => handleClick('small')}>
            Small
          </Button>
          <Button variant="shimmer" size="default" onClick={() => handleClick('medium')}>
            Medium
          </Button>
          <Button variant="shimmer" size="lg" onClick={() => handleClick('large')}>
            Large
          </Button>
        </div>
      </div>

      {/* Loading States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Loading States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="shimmer" size="default" isLoading onClick={() => handleClick('loading')}>
            Processing...
          </Button>
          <Button variant="magnetic" size="default" isLoading onClick={() => handleClick('loading')}>
            Submitting...
          </Button>
        </div>
      </div>

      {/* Usage Guide */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Usage Guidelines</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p><strong>Shimmer:</strong> Hero section primary CTAs - draws maximum attention</p>
          <p><strong>Glow:</strong> Footer CTAs and final conversion points</p>
          <p><strong>Magnetic:</strong> Secondary actions that need engagement</p>
          <p><strong>Default:</strong> Standard important actions</p>
          <p><strong>Outline:</strong> Supporting actions and alternatives</p>
          <p><strong>Depth:</strong> Feature cards and interactive elements</p>
          <p><strong>Ghost:</strong> Low-priority text links</p>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase; 