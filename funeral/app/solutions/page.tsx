'use client';

import Navigation from '../components/Navigation';
import SolutionsHero from '../components/solutions/solutions_hero';
import SolutionsOverview from '../components/solutions/solutions_overview';
import SchedulingDetails from '../components/solutions/scheduling_details';
import AftercareDetails from '../components/solutions/aftercare_details';
import ROICalculator from '../components/solutions/roi_calculator';
import CTASection from '../components/solutions/cta_section';

const SolutionsPage = () => {
  return (
    <div className="bg-white">
      <Navigation />
      <SolutionsHero />
      <SolutionsOverview />
      <SchedulingDetails />
      <AftercareDetails />
      <ROICalculator />
      <CTASection />
    </div>
  );
};

export default SolutionsPage;