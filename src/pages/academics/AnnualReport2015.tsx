const AnnualReport2015 = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mt-8 mb-6">Annual Report 2015-16</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive report of academic year 2015-16 showcasing institutional achievements and progress
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Academic Achievements</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Establishment of strong academic foundation</li>
              <li>Curriculum development and updates</li>
              <li>Student mentoring programs initiated</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Institutional Developments</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Infrastructure development projects</li>
              <li>Teaching-learning resources enhancement</li>
              <li>Administrative systems establishment</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Student Activities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Foundation day celebrations</li>
              <li>Orientation programs for new students</li>
              <li>Basic skill development workshops</li>
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

export default AnnualReport2015;
