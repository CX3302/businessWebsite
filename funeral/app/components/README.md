# Component Organization Structure

This document outlines how components are organized in the project after the reorganization completed on 2024.

## Folder Structure

```
components/
├── shared/          # Components used across multiple pages
│   ├── Navigation.tsx    # Main navigation component
│   └── CTAFooter.tsx     # Call-to-action footer
├── home/           # Home page specific components
│   ├── Hero.tsx          # Main hero section
│   ├── PainPointsPreview.tsx  # Pain points preview
│   └── About.tsx         # About section
├── product/        # Product page specific components
│   ├── ProductOverview.tsx    # Product overview section
│   ├── PainPointsSolutions.tsx # Pain points and solutions
│   ├── HowItWorks.tsx         # How it works section
│   ├── FeatureGrid.tsx        # Feature grid display
│   └── CaseStudy.tsx          # Case study section
├── contact/        # Contact page specific components
│   └── BookDemo.tsx      # Demo booking form
├── roadmap/        # Roadmap page specific components
│   └── Roadmap.tsx       # Product roadmap display
├── solutions/      # Solutions page specific components
│   ├── solutions_hero.tsx     # Solutions hero section
│   ├── solutions_overview.tsx # Solutions overview
│   ├── scheduling_details.tsx # Scheduling details
│   ├── aftercare_details.tsx  # Aftercare details
│   ├── roi_calculator.tsx     # ROI calculator
│   ├── cta_section.tsx        # CTA section
│   └── solutions_components_index.tsx # Component index
└── unused/         # Components not currently used
    ├── Contact.tsx       # Alternative contact component
    ├── Services.tsx      # Services component
    └── UpcomingProduct.tsx # Upcoming product component
```

## Component Usage by Page

### Home Page (`/`)
- Navigation (shared/Navigation.tsx)
- Hero (home/Hero.tsx)
- PainPointsPreview (home/PainPointsPreview.tsx)
- About (home/About.tsx)  
- CTAFooter (shared/CTAFooter.tsx)

### Contact Page (`/contact`)
- Navigation (shared/Navigation.tsx)
- BookDemo (contact/BookDemo.tsx)

### Product Page (`/product`)
- Navigation (shared/Navigation.tsx)
- ProductOverview (product/ProductOverview.tsx)
- PainPointsSolutions (product/PainPointsSolutions.tsx)
- HowItWorks (product/HowItWorks.tsx)
- FeatureGrid (product/FeatureGrid.tsx)
- CaseStudy (product/CaseStudy.tsx)

### Roadmap Page (`/roadmap`)
- Navigation (shared/Navigation.tsx)
- Roadmap (roadmap/Roadmap.tsx)

### Solutions Page (`/solutions`)
- Navigation (shared/Navigation.tsx)
- All components in solutions/ folder

## Import Path Updates

All page files have been updated with the new import paths:

**Before:**
```typescript
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
```

**After:**
```typescript
import Navigation from '../components/shared/Navigation';
import Hero from '../components/home/Hero';
```

## Benefits of This Organization

1. **Clear Separation of Concerns**: Components are grouped by their usage context
2. **Better Maintainability**: Easy to find components related to specific pages
3. **Reusability Identification**: Shared components are clearly separated
4. **Scalability**: New pages can easily add their own component folders
5. **Clean Architecture**: Unused components are isolated for potential cleanup

## Migration Notes

- All import paths in page files have been updated
- Component functionality remains unchanged
- The `unused/` folder contains components that may be removed or repurposed
- Solutions components maintain their existing naming convention 