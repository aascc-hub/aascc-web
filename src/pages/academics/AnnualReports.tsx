
import { Link } from 'react-router-dom';

const AnnualReports = () => {
  const reports = [
    { year: '2021-22', title: 'Annual Report 2021-22', path: '/academics/annual-reports/2021-22' },
    { year: '2018-19', title: 'Annual Report 2018-19', path: '/academics/annual-reports/2018-19' },
    { year: '2017-18', title: 'Annual Report 2017-18', path: '/academics/annual-reports/2017-18' },
    { year: '2016-17', title: 'Annual Report 2016-17', path: '/academics/annual-reports/2016-17' },
    { year: '2015-16', title: 'Annual Report 2015-16', path: '/academics/annual-reports/2015-16' },
    { year: '2014-15', title: 'Annual Report 2014-15', path: '/academics/annual-reports/2014-15' }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mt-8 mb-6">Annual Reports</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive annual reports showcasing institutional achievements and progress
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <Link
                key={index}
                to={report.path}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{report.title}</h3>
                <p className="text-gray-600 text-sm">Academic Year {report.year}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReports;