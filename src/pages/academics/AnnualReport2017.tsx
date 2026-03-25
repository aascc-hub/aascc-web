const AnnualReport2017 = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mt-8 mb-6">Annual Report 2017-18</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive report of academic year 2017-18 showcasing institutional achievements and progress
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Academic Achievements</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Consistent academic excellence maintained</li>
              <li>Industry-academia collaborations strengthened</li>
              <li>Student research projects and innovations</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Institutional Developments</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Technology integration in teaching</li>
              <li>Library automation and digitization</li>
              <li>Sports facilities expansion</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Student Activities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>National level competitions participation</li>
              <li>Cultural exchange programs</li>
              <li>Entrepreneurship development activities</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 italic">
              For detailed statistics and complete report, please contact the administration office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReport2017;
