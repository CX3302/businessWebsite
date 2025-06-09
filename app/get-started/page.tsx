import Navigation from '../components/Navigation';

export default function GetStartedPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Get Started</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Add your get started form or content here */}
          <p className="text-lg text-gray-600 mb-8">
            Ready to begin? Fill out the form below and we'll get in touch with you shortly.
          </p>
          {/* Add contact form or other getting started content */}
        </div>
      </div>
    </main>
  );
} 