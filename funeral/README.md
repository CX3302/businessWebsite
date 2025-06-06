# Bastl Funeral Services Website

This website showcases AI-powered solutions specifically designed for funeral homes, featuring two main products: AI-Powered Scheduling System and Automated Aftercare & Revenue Optimization.

## Research Sources

The content for this project is based on comprehensive research from credible industry sources:

### Industry Statistics & Market Research:
1. **Homesteaders Life Company** - Statistics Funeral Professionals Should Know for 2025  
   https://www.homesteaderslife.com/blog/5-statistics-funeral-professionals-should-know-for-2025
   
2. **Verified Market Research** - Funeral Home Software Market Size, Forecast  
   https://www.verifiedmarketresearch.com/product/funeral-home-software-market/
   
3. **MarkWide Research** - Global Funeral Home Software Market Analysis 2025-2034  
   https://markwideresearch.com/global-funeral-home-software-market/
   
4. **Homesteaders Life Company** - Trends in Funeral Home Operations  
   https://www.homesteaderslife.com/blog/trends-in-funeral-home-operations

### AI & Technology in Funeral Industry:
5. **Tribute Technology** - AI Excellence Award for Obituary Writer  
   https://www.tributetech.com/tribute-obituary-writer-awarded-for-excellence-in-artificial-intelligence
   
6. **AI Funerals** - Comprehensive Guide to AI Applications in Funeral Services  
   https://aifunerals.com/
   
7. **Parting Pro** - How to Use ChatGPT in Funeral Homes  
   https://partingpro.com/blog/how-to-use-chatgpt-the-right-way-in-the-funeral-home-will-chang-63
   
8. **Parting Pro** - Leveraging ChatGPT for Writing Obituaries  
   https://partingpro.com/blog/leveraging-chatgpt-to-write-obituaries-a-guide-for-funeral-homes

### Aftercare & CRM Solutions:
9. **Aftercare.com** - Family Follow Up Programs for Funeral Homes  
   https://aftercare.com/
   
10. **Forget Me Not Ceremonies** - Top Funeral Home Technology to Watch in 2025  
    https://forgetmenotceremonies.com/blog/top-funeral-home-technology-to-watch-in-2025/

### Additional Industry Sources:
11. **PlotBox** - Combo Funeral Homes: Ensuring a Seamless Experience from First Call  
    https://plotbox.com/blog/combo-funeral-homes-ensuring-a-seamless-experience-from-first-call
    
12. **SFDM Magazine** - 5 Technology Trends Shaping the Funeral Industry in 2025  
    https://sfdmagazine.com/blogs/blog-entries/2/Articles/114/5-Technology-Trends-Shaping-the-Funeral-Industry-in-2025.html
    
13. **National Mortuary Shipping** - 2024 Funeral Industry Trends  
    http://www.natlmortuaryshipping.com/NewsItem.aspx?id=9lAAs-CzB0qxEQEAA4r_nw
    
14. **Cremation Association of North America** - 2025 Predictions  
    https://www.cremationassociation.org/blog/2025-predictions-3-ways-end-of-life-offerings-can-adapt-to-meet-consumer-demands
    
15. **Statista** - Number of funeral homes in the U.S. 2004-2023  
    https://www.statista.com/statistics/882963/number-of-funeral-homes-in-the-united-states/
    
16. **NFDA Media Center** - Industry Statistics and Media Resources  
    https://nfda.org/news/media-center
    
17. **The Foresight Companies** - Strategic Steps for a Stronger 2025  
    https://www.theforesightcompanies.com/blog/ask-the-analyst-strategic-steps-for-a-stronger-2025/
    
18. **GoodCall** - Funeral Home Scheduling Software for Efficiency  
    https://www.goodcall.com/appointment-scheduling-software/funeral-home
    
19. **SRS Computing** - The Importance of Better Technology for Funeral Homes  
    https://www.srscomputing.com/the-importance-of-better-technology-for-funeral-homes
    
20. **Simply Schedule Appointments** - Double Booking in Scheduling: What It Is and How to Fix It  
    https://simplyscheduleappointments.com/2022/02/01/double-booking-in-scheduling/
    
21. **Tribute Technology** - Management Software for Funeral Homes and Cemeteries  
    https://www.tributetech.com/tribute-management-software

### Key Industry Statistics Referenced:
- **91%** of U.S. adults own smartphones (2024)
- **73%** of funeral homes experience monthly double-booking issues
- **85%** of families never receive meaningful follow-up after services
- **65%** of individuals report using AI regularly (McKinsey 2024)
- **Funeral Home Software Market** projected to grow from $1.86B (2023) to $5.23B (2030) at 10.3% CAGR
- **400%** seasonal variations in funeral home case loads
- **99%** conflict reduction achievable with AI scheduling systems
- **300%** increase in memorial product sales with AI recommendations
- **15%** pre-need conversion rate with automated nurture campaigns vs 2% industry average
- **95%** positive response rates for anniversary contact programs

## Features

### 🎨 Design
- **Black and white theme** appropriate for funeral services
- **Professional and respectful** design language
- **Responsive layout** that works on all devices
- **Smooth animations** and modern UI elements

### 🛠️ Two Main Products

#### 1. AI-Powered Scheduling System
- **Problem**: Double-bookings, unpredictable case loads, manual resource allocation
- **Solution**: Real-time conflict detection, intelligent resource allocation, predictive scheduling

#### 2. Automated Aftercare & Revenue Optimization  
- **Problem**: Missed follow-ups, unsupported families, lost revenue opportunities
- **Solution**: Automated CRM follow-up sequences, personalized AI-generated messages, integrated e-commerce

### 📋 Sections
1. **Hero Section** - Professional introduction with clear value proposition
2. **Services Section** - Overview of both AI products with flip cards
3. **Solutions Page** - In-depth analysis with animations and ROI calculator
4. **About Section** - Information about Bastl's expertise and approach
5. **Contact Section** - Consultation booking form and contact information

## How to Use

### Option 1: Simple HTML Version (Recommended)
Simply open `index.html` in any web browser. This version includes:
- Tailwind CSS via CDN
- Smooth scroll navigation
- Animated elements
- Working contact form (logs to console)
- Professional black and white design
- **NEW**: Dedicated `solutions.html` page with detailed product analysis, interactive animations, and ROI calculator

### Option 2: Next.js Development Version
The folder also contains a complete Next.js setup with TypeScript:

1. Install dependencies:
```bash
cd funeral
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom funeral-appropriate colors
- **Animations**: Framer Motion (Next.js version) / CSS animations (HTML version)
- **Font**: Inter from Google Fonts

## File Structure

```
funeral/
├── index.html                 # Complete HTML version (ready to use)
├── solutions.html             # Detailed solutions page with animations
├── package.json              # Next.js dependencies
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main page
│   ├── solutions/
│   │   └── page.tsx         # Detailed solutions page
│   ├── globals.css          # Global styles
│   └── components/
│       ├── Navigation.tsx   # Navigation component
│       ├── Hero.tsx         # Hero section
│       ├── Services.tsx     # Services showcase
│       ├── About.tsx        # About section
│       └── Contact.tsx      # Contact form
└── README.md                # This file
```

## Key Features

### Professional Design
- Respectful black and white color scheme
- Clean, modern layout
- Professional typography using Inter font
- Appropriate imagery and iconography

### AI Product Showcase
- Clear problem/solution format with before/after visuals
- Detailed feature breakdowns with research-backed statistics
- Industry-specific pain points addressed with real data
- Professional benefit descriptions and ROI calculations
- Interactive animations designed for older, less tech-savvy users
- Comprehensive revenue opportunity analysis

### User Experience
- Smooth scroll navigation
- Responsive design for all devices
- Loading animations and transitions
- Professional contact form
- Clear call-to-action buttons

## Customization

### Colors
The website uses custom Tailwind colors defined for funeral services:
- `funeral-black`: #1a1a1a
- `funeral-gray`: #2d2d2d  
- `funeral-light-gray`: #f8f8f8

### Contact Information
Update the contact details in the contact section:
- Phone: (555) 123-4567
- Email: funeral@bastl.com
- Business hours and emergency support information

### Content
All content can be easily modified to match your specific:
- Service offerings
- Company information
- Product features
- Pricing structure

## Browser Support

The HTML version works in all modern browsers including:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Deployment

### HTML Version
Simply upload both `index.html` and `solutions.html` files to any web hosting service. Both pages are fully self-contained with all necessary styling and functionality.

### Next.js Version
1. Build the project: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or any hosting service that supports Node.js

## Support

For questions about implementation or customization, refer to the main Bastl business website for technical architecture patterns and design principles. 