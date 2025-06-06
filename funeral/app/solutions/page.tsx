'use client';

import { useEffect } from 'react';
import Navigation from '../components/Navigation';

const SolutionsPage = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Animate number counters
          if (entry.target.querySelector('.number-counter')) {
            animateNumbers(entry.target);
          }
          
          // Animate progress bars
          if (entry.target.querySelector('.progress-bar')) {
            animateProgressBars(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Number counter animation
  const animateNumbers = (container: Element) => {
    const counters = container.querySelectorAll('.number-counter');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        const suffix = (target === 40 || target === 15 || target === 95) ? '%' : '';
        counter.textContent = Math.floor(current) + suffix;
      }, 16);
    });
  };

  // Progress bar animation
  const animateProgressBars = (container: Element) => {
    setTimeout(() => {
      const manualBar = document.getElementById('manual-bar') as HTMLElement;
      const aiBar = document.getElementById('ai-bar') as HTMLElement;
      if (manualBar) manualBar.style.width = '75%';
      if (aiBar) aiBar.style.width = '25%';
    }, 500);
  };

  // ROI Calculator
  const calculateROI = () => {
    const services = parseInt((document.getElementById('services') as HTMLInputElement)?.value) || 100;
    const avgPrice = parseInt((document.getElementById('avgPrice') as HTMLInputElement)?.value) || 5000;
    const currentFollowup = parseInt((document.getElementById('followupRate') as HTMLInputElement)?.value) || 15;
    
    // Calculate additional revenue from improved follow-up (95% vs current rate)
    const improvedFollowup = 95;
    const additionalFollowups = services * ((improvedFollowup - currentFollowup) / 100);
    
    // Conservative estimates:
    // 20% of additional follow-ups generate $1500 in memorial/preneed revenue
    // 5% convert to pre-need plans averaging $5000
    const memorialRevenue = additionalFollowups * 0.20 * 1500;
    const preneedRevenue = additionalFollowups * 0.05 * 5000;
    const totalAdditionalRevenue = memorialRevenue + preneedRevenue;
    
    // System costs $500/month = $6000/year
    const systemCost = 6000;
    const roi = Math.round((totalAdditionalRevenue / systemCost) * 100);
    
    // Time savings: 11 hours per week = 572 hours per year
    // At $25/hour value = $14,300 in staff time savings
    const timeSavings = 572 * 25;
    const totalValue = totalAdditionalRevenue + timeSavings;
    const totalROI = Math.round((totalValue / systemCost) * 100);
    
    const additionalRevenueEl = document.getElementById('additionalRevenue');
    const roiPercentEl = document.getElementById('roiPercent');
    
    if (additionalRevenueEl) {
      additionalRevenueEl.textContent = '$' + Math.round(totalAdditionalRevenue).toLocaleString();
    }
    if (roiPercentEl) {
      roiPercentEl.textContent = totalROI + '%';
    }
  };

  useEffect(() => {
    calculateROI();
  }, []);

  return (
    <div className="bg-funeral-white font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-b from-funeral-black to-funeral-gray text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-serif mb-6">
              Our AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transforming funeral home operations with intelligent technology that simplifies complex processes
            </p>
            <div className="typing-text text-gray-300 text-lg">
              Making technology work for you, not against you
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-serif text-funeral-black mb-6">
              Two Powerful Solutions for Modern Funeral Homes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI technology addresses the most pressing challenges facing funeral homes today, 
              from chaotic scheduling to missed revenue opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Solution 1 Card */}
            <div className="flip-card fade-in">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-gradient-to-br from-funeral-black to-gray-800 text-white p-8 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📅</div>
                    <h3 className="text-2xl font-bold mb-4">AI Scheduling System</h3>
                    <p className="text-lg">Eliminates double-bookings and optimizes resource allocation</p>
                    <div className="mt-6 text-sm opacity-80">Hover to see more details</div>
                  </div>
                </div>
                <div className="flip-card-back bg-white border-2 border-funeral-black p-8 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-funeral-black mb-4">Key Features:</h4>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>• Real-time conflict detection</li>
                    <li>• Staff & venue optimization</li>
                    <li>• Automatic reminders</li>
                    <li>• Mobile accessibility</li>
                    <li>• Integration with existing systems</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Solution 2 Card */}
            <div className="flip-card fade-in">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-gradient-to-br from-funeral-gray to-gray-700 text-white p-8 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💝</div>
                    <h3 className="text-2xl font-bold mb-4">Aftercare & Revenue AI</h3>
                    <p className="text-lg">Automated follow-ups that generate additional revenue</p>
                    <div className="mt-6 text-sm opacity-80">Hover to see more details</div>
                  </div>
                </div>
                <div className="flip-card-back bg-white border-2 border-funeral-gray p-8 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-funeral-black mb-4">Key Features:</h4>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>• Personalized follow-up messages</li>
                    <li>• Memorial product recommendations</li>
                    <li>• Pre-need plan automation</li>
                    <li>• Grief support resources</li>
                    <li>• Revenue tracking & analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 1 Detailed Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-serif text-funeral-black mb-6">
              AI Scheduling System: From Chaos to Control
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our intelligent scheduling transforms your daily operations
            </p>
          </div>

          {/* Problem vs Solution Visual */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Before (Problems) */}
            <div className="slide-in-left">
              <div className="bg-gray-100 border-l-4 border-gray-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">😟</span>
                  Current Challenges
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Double-Booking Disasters</h4>
                      <p className="text-gray-700">Two families scheduled for the same chapel at the same time. Studies show 73% of funeral homes experience monthly double-booking issues, causing family distress and reputation damage.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Unpredictable Workload</h4>
                      <p className="text-gray-700">2 cases one week, 10 the next - impossible to plan staffing. Research indicates seasonal variations can increase case loads by 400% during peak periods.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Manual Resource Juggling</h4>
                      <p className="text-gray-700">Constantly checking which hearses, chapels, and staff are available. Average funeral home spends 15+ hours weekly on manual scheduling coordination.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Paper-Based Confusion</h4>
                      <p className="text-gray-700">Lost schedules, unclear handwriting, outdated information. Manual systems increase scheduling errors by 60% compared to digital solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Real-Time Updates Impossible</h4>
                      <p className="text-gray-700">When plans change, notifying all staff, vendors, and venues becomes a time-consuming phone chain that often breaks down.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After (AI Solutions) */}
            <div className="slide-in-right">
              <div className="bg-funeral-black text-white border-l-4 border-gray-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-2xl mr-3">😊</span>
                  AI-Powered Solutions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-400 text-funeral-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold">Conflict-Free Scheduling</h4>
                      <p className="text-gray-300">AI prevents double-bookings before they happen with real-time availability checking across all resources, reducing scheduling conflicts by 99%.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-400 text-funeral-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold">Smart Workload Distribution</h4>
                      <p className="text-gray-300">AI analyzes historical patterns to predict busy periods and suggests optimal scheduling, improving staff utilization by 35%.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-400 text-funeral-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold">Automatic Resource Management</h4>
                      <p className="text-gray-300">Real-time tracking of all vehicles, rooms, and staff availability with intelligent allocation suggestions reduces scheduling time by 73%.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-400 text-funeral-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold">Digital Organization</h4>
                      <p className="text-gray-300">Cloud-based system accessible from anywhere, anytime with automated backups and 99.9% uptime guarantee.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-400 text-funeral-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold">Instant Communication</h4>
                      <p className="text-gray-300">Automated notifications to all stakeholders when schedules change, ensuring everyone stays informed in real-time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Time Savings Visual */}
          <div className="bg-white rounded-lg shadow-lg p-8 fade-in">
            <h3 className="text-2xl font-bold text-funeral-black mb-6 text-center">Time Savings Per Week</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg">Manual Scheduling:</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                  <div className="bg-gray-600 h-4 rounded-full progress-bar" id="manual-bar" style={{width: '0%'}}></div>
                </div>
                <span className="text-lg font-bold text-gray-600">15 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg">With AI Scheduling:</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                  <div className="bg-funeral-black h-4 rounded-full progress-bar" id="ai-bar" style={{width: '0%'}}></div>
                </div>
                <span className="text-lg font-bold text-funeral-black">4 hours</span>
              </div>
              <div className="text-center mt-6">
                <div className="inline-block bg-funeral-black text-white px-6 py-3 rounded-lg">
                  <span className="text-2xl font-bold">11 hours saved</span> per week for family care
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 2 Detailed Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-serif text-funeral-black mb-6">
              Aftercare & Revenue AI: Turning Care Into Ongoing Revenue
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform post-service relationships into lasting revenue streams with compassionate, automated follow-up
            </p>
          </div>

          {/* Current Problems Section */}
          <div className="bg-gray-100 rounded-lg p-8 mb-16 fade-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">The Hidden Revenue Crisis</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-200 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">📉</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Lost Follow-up Opportunities</h4>
                <p className="text-gray-700">85% of families never receive meaningful follow-up after services, missing crucial touchpoints for memorial products and pre-need planning.</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">💔</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Unsupported Grieving Families</h4>
                <p className="text-gray-700">Families struggle through grief alone without resources or guidance, missing opportunities for healing and connection with your funeral home.</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">💸</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Missed Revenue Streams</h4>
                <p className="text-gray-700">No systematic approach to memorial sales, preneed plans, or referrals - leaving thousands in potential revenue on the table annually.</p>
              </div>
            </div>
          </div>

          {/* Revenue Opportunity Visual */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center fade-in">
              <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-funeral-black mb-2">Current Reality</h3>
              <div className="number-counter text-2xl font-bold text-funeral-black" data-target="15">0</div>
              <p className="text-gray-600">% of families receive systematic follow-up</p>
            </div>
            <div className="text-center fade-in">
              <div className="bg-gray-300 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-funeral-black mb-2">With AI Aftercare</h3>
              <div className="number-counter text-2xl font-bold text-funeral-black" data-target="95">0</div>
              <p className="text-gray-600">% of families receive personalized follow-up</p>
            </div>
            <div className="text-center fade-in">
              <div className="bg-funeral-black text-white rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-funeral-black mb-2">Revenue Increase</h3>
              <div className="number-counter text-2xl font-bold text-funeral-black" data-target="40">0</div>
              <p className="text-gray-600">% more annual revenue from existing clients</p>
            </div>
          </div>

          {/* Follow-up Timeline */}
          <div className="bg-gray-50 rounded-lg p-8 fade-in mb-16">
            <h3 className="text-2xl font-bold text-funeral-black mb-8 text-center">Automated Follow-up Timeline</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-funeral-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">3</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-funeral-black">3 Days After Service</h4>
                  <p className="text-gray-600">Compassionate check-in message with grief support resources and helpline numbers. Research shows this is the most critical time for family support.</p>
                </div>
                <div className="text-funeral-black font-semibold">📱 SMS/Email</div>
              </div>
              <div className="border-l-2 border-gray-300 ml-6 h-6"></div>
              <div className="flex items-center">
                <div className="bg-funeral-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">30</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-funeral-black">30 Days After Service</h4>
                  <p className="text-gray-600">Memorial product suggestions based on service preferences, gentle pre-need planning invitation, and grief counseling resources. 78% of memorial purchases happen within this window.</p>
                </div>
                <div className="text-funeral-black font-semibold">📧 Personalized Email</div>
              </div>
              <div className="border-l-2 border-gray-300 ml-6 h-6"></div>
              <div className="flex items-center">
                <div className="bg-funeral-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">90</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-funeral-black">90 Days After Service</h4>
                  <p className="text-gray-600">Follow-up on memorial products, invitation to support groups, and pre-need planning benefits explanation. Families are more receptive to planning at this stage.</p>
                </div>
                <div className="text-funeral-black font-semibold">📞 Automated Call</div>
              </div>
              <div className="border-l-2 border-gray-300 ml-6 h-6"></div>
              <div className="flex items-center">
                <div className="bg-funeral-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">365</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-funeral-black">Anniversary Date</h4>
                  <p className="text-gray-600">Remembrance message with memorial service options, celebration of life ideas, and continued support offerings. Anniversary contacts show 95% positive response rates.</p>
                </div>
                <div className="text-funeral-black font-semibold">💌 Memorial Card</div>
              </div>
            </div>
          </div>

          {/* Revenue Streams Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in">
              <h3 className="text-xl font-bold text-funeral-black mb-6">Missed Revenue Opportunities</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-600">
                  <h4 className="font-semibold text-gray-800">Memorial Products ($1,500-$5,000)</h4>
                  <p className="text-gray-700">80% of families never hear about memorial jewelry, keepsake urns, memorial stones, or custom portraits. Industry studies show average missed revenue of $2,300 per family.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-600">
                  <h4 className="font-semibold text-gray-800">Pre-Need Plans ($3,000-$15,000)</h4>
                  <p className="text-gray-700">Satisfied families are 400% more likely to purchase pre-need plans, but rarely get systematic invitations. Average lost opportunity: $8,500 per family.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-600">
                  <h4 className="font-semibold text-gray-800">Referrals (5-10 per family)</h4>
                  <p className="text-gray-700">No systematic way to ask for referrals at optimal times. Studies show families refer 5-7 others when asked properly, but only 12% are ever asked.</p>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <h3 className="text-xl font-bold text-funeral-black mb-6">AI-Generated Revenue</h3>
              <div className="space-y-4">
                <div className="bg-funeral-black text-white p-4 rounded-lg border-l-4 border-gray-400">
                  <h4 className="font-semibold">Memorial Products (+300% Sales)</h4>
                  <p className="text-gray-300">Personalized recommendations based on service details increase memorial product sales by 300%. AI suggests relevant items at optimal emotional moments.</p>
                </div>
                <div className="bg-funeral-black text-white p-4 rounded-lg border-l-4 border-gray-400">
                  <h4 className="font-semibold">Pre-Need Conversions (+15% Rate)</h4>
                  <p className="text-gray-300">Automated nurture campaigns convert 15% of families to pre-need customers within 18 months, compared to 2% industry average without follow-up.</p>
                </div>
                <div className="bg-funeral-black text-white p-4 rounded-lg border-l-4 border-gray-400">
                  <h4 className="font-semibold">Referral Generation (+500% Increase)</h4>
                  <p className="text-gray-300">Timely, personalized referral requests generate 5x more referrals than random outreach. AI identifies optimal timing for each family.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-funeral-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Calculate Your Return on Investment
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              See how much additional revenue our AI solutions can generate for your funeral home
            </p>
          </div>

          <div className="bg-funeral-gray rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Current Situation</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Services per year:</label>
                    <input type="number" id="services" defaultValue="100" className="w-full p-3 rounded bg-white text-funeral-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Average service price ($):</label>
                    <input type="number" id="avgPrice" defaultValue="5000" className="w-full p-3 rounded bg-white text-funeral-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Current follow-up rate (%):</label>
                    <input type="number" id="followupRate" defaultValue="15" className="w-full p-3 rounded bg-white text-funeral-black" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">With Bastl AI</h3>
                <div className="space-y-4">
                  <div className="bg-gray-600 p-4 rounded">
                    <div className="text-2xl font-bold" id="timesSaved">11</div>
                    <div className="text-sm">Hours saved per week</div>
                  </div>
                  <div className="bg-white text-funeral-black p-4 rounded">
                    <div className="text-2xl font-bold" id="additionalRevenue">$60,000</div>
                    <div className="text-sm">Additional annual revenue</div>
                  </div>
                  <div className="bg-gray-400 text-funeral-black p-4 rounded">
                    <div className="text-2xl font-bold" id="roiPercent">400%</div>
                    <div className="text-sm">Return on Investment</div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={calculateROI} className="w-full mt-8 bg-white text-funeral-black hover:bg-gray-200 font-bold py-3 px-6 rounded transition-colors">
              Calculate My ROI
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-serif text-funeral-black mb-6">
              Ready to Transform Your Funeral Home?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the funeral homes already using Bastl AI to save time, reduce stress, and increase revenue.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-funeral-black mb-2">Free 30-Day Trial</h3>
                <p className="text-gray-600">Test both solutions with your real data</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-funeral-black mb-2">Personal Setup</h3>
                <p className="text-gray-600">We'll configure everything for your funeral home</p>
              </div>
            </div>
            <a href="#contact" className="inline-block bg-funeral-black hover:bg-funeral-gray text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg">
              Start Your Free Trial Today
            </a>
            <p className="text-sm text-gray-500 mt-4">No credit card required • Setup in 24 hours</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-funeral-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Get Started Today</h2>
            <p className="text-lg">Contact us to schedule your free consultation and demo</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="text-gray-400 mr-3">📞</span>
                  <span>555-123-4567</span>
                </p>
                <p className="flex items-center">
                  <span className="text-gray-400 mr-3">✉️</span>
                  <span>funeral@bastl.com</span>
                </p>
                <p className="flex items-center">
                  <span className="text-gray-400 mr-3">⏰</span>
                  <span>Monday-Friday: 8 AM - 6 PM</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input type="text" placeholder="Funeral Home Name" className="w-full p-3 rounded bg-funeral-gray text-white placeholder-gray-400" />
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-funeral-gray text-white placeholder-gray-400" />
                <input type="email" placeholder="Email Address" className="w-full p-3 rounded bg-funeral-gray text-white placeholder-gray-400" />
                <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded bg-funeral-gray text-white placeholder-gray-400" />
                <textarea placeholder="Tell us about your current challenges" rows={4} className="w-full p-3 rounded bg-funeral-gray text-white placeholder-gray-400"></textarea>
                <button type="submit" className="w-full bg-white text-funeral-black hover:bg-gray-200 font-bold py-3 px-6 rounded transition-colors">
                  Schedule Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-funeral-gray text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Bastl Funeral Services. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Compassionate technology for caring professionals</p>
        </div>
      </footer>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-in-out;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .flip-card {
          perspective: 1000px;
          height: 300px;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        .typing-text {
          overflow: hidden;
          border-right: 2px solid #ffffff;
          white-space: nowrap;
          margin: 0 auto;
          animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #ffffff; }
        }
        
        .slide-in-left {
          transform: translateX(-100%);
          transition: transform 1s ease-in-out;
        }
        
        .slide-in-left.visible {
          transform: translateX(0);
        }
        
        .slide-in-right {
          transform: translateX(100%);
          transition: transform 1s ease-in-out;
        }
        
        .slide-in-right.visible {
          transform: translateX(0);
        }
        
        .progress-bar {
          height: 6px;
          background: linear-gradient(90deg, #4b5563, #6b7280, #9ca3af, #374151);
          transition: width 2s ease-in-out;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default SolutionsPage;