import { useState } from "react";
import { Eye, ChevronDown } from "lucide-react";

const academicYearsData = [
  {
    year: "2018-2019",
    pdfLink: "/pdfs/Academic-Calender-2018-19.pdf",
    events: [
      { slno: 1, date: "05-07-2018", event: "Last Date for Admission without Penal Fee" },
      { slno: 2, date: "15-06-2018", event: "Semester Reopening Date" },
      // Add more rows
    ],
  },
  {
    year: "2019-2020",
    pdfLink: "/pdfs/Academic-Calendar-2019-20.pdf",
    events: [
      { slno: 1, date: "10-07-2019", event: "Last Date for Admission without Penal Fee" },
      { slno: 2, date: "18-06-2019", event: "1st, 3rd, 5th Semester Reopening Date" },
      // Add more rows
    ],
  },
  {
    year: "2020-2021",
    pdfLink: "/pdfs/Academic-Calendar-2020-21.pdf",
    events: [{ slno: 1, date: "07-07-2020", event: "Last Date for Admission without Penal Fee" }],
  },
  {
    year: "2021-2022",
    pdfLink: "/pdfs/Academic-Calendar-2021-22.pdf",
    events: [{ slno: 1, date: "06-07-2021", event: "Last Date for Admission without Penal Fee" }],
  },
  {
    year: "2022-2023",
    pdfLink:"/pdfs/Academic-Calendar-2022-23.pdf",
    events: [{ slno: 1, date: "06-07-2022", event: "Last Date for Admission without Penal Fee" }],
  },
];

const AcademicCalendar = () => {
  const [expandedYear, setExpandedYear] = useState<string | null>(null);

  const toggleYear = (year: string) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mt-8 mb-4">Academic Calendar</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            View the detailed academic events for each year at Anjuman Arts, Science & Commerce College, Bhatkal.
          </p>
        </div>

        {/* Academic Years */}
        {academicYearsData.map((yearData, idx) => (
          <div key={idx} className="mb-6 bg-white rounded-xl shadow-md overflow-hidden">
            {/* Year Header with View Button */}
            <div className="w-full flex justify-between items-center p-4 bg-blue-100 hover:bg-blue-200 transition-colors duration-200">
              <button
                onClick={() => toggleYear(yearData.year)}
                className="flex items-center text-left focus:outline-none space-x-2"
              >
                <h2 className="text-2xl font-bold text-blue-900">{yearData.year}</h2>
                <ChevronDown
                  className={`w-6 h-6 text-blue-900 transform transition-transform duration-300 ${
                    expandedYear === yearData.year ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <a
                href={yearData.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                <Eye className="w-5 h-5 mr-2" /> View
              </a>
            </div>

            {/* Table */}
            {expandedYear === yearData.year && (
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="border px-4 py-2 text-left">Sl No</th>
                      <th className="border px-4 py-2 text-left">Date</th>
                      <th className="border px-4 py-2 text-left">Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearData.events.map((event) => (
                      <tr key={event.slno} className="hover:bg-blue-50">
                        <td className="border px-4 py-2">{event.slno}</td>
                        <td className="border px-4 py-2">{event.date}</td>
                        <td className="border px-4 py-2">{event.event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicCalendar;