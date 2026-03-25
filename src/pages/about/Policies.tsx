import { Download } from "lucide-react";

const professionalPolicies = [
  "Read the notices posted on the bulletin boards regularly.",
  "Attendance to classes is mandatory, with a requirement of 80% or more. In case of absences for genuine reasons, students must apply for leave in advance using the form in Appendix A.",
  "Attend all classes every day, on time.",
  "Do not loiter on campus, and those who violate rules and regulations will face severe consequences.",
  "Always carry your identification card and be prepared to present it to College Authorities when requested.",
  "Fees paid are non-refundable.",
  "Adhere to the dress code of formal attire at all times.",
  "The College Authority has the power to take action to maintain academic standards and discipline within the institution.",
  "Mobile phones are strictly prohibited.",

];

const ProfessionalDevelopment = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mt-8 mb-4">
            Rules & Regulations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The college supports continuous professional development for faculty and students through various initiatives, training, and financial assistance.
          </p>
        </div>

        {/* PDF Button */}
        <div className="flex justify-center mb-12">
          <a
            href="/pdf/professional-policies.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold"
          >
            <Download className="w-5 h-5 mr-2" /> View PDF
          </a>
        </div>

        {/* Policies List */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
            <ul className="space-y-4 text-gray-700">
              {professionalPolicies.map((policy, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-900 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span>{policy}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDevelopment;
