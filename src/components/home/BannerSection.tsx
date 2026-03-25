
import { Link } from 'react-router-dom';

const BannerSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Info */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-blue-900 mb-4">
              Shape Your Future at Anjuman Arts, Science & Commerce College, Bhatkal
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-lg">
               "Start your professional journey at AASCC, where thousands of graduates have already paved their way to success in the world of Business Administration."
            </p>
            <Link
              to="/academics/programs-offered"
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors inline-block"
            >
              Learn More
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2">
            <img
              src="/images/Banner3.jpg"
              alt="AIMCA Campus"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
