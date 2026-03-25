import React from "react";
import { Download } from "lucide-react";

const plansData = [
  {
    title: "Short-Term Plans",
    color: "blue",
    plans: [
      "Ongoing construction of multipurpose sports arena.",
      "03 purified drinking water cooler units were installed.",
      "The staff's restrooms were renovated.",
      "Washrooms for girl students added.",
      "The flooring of all the classrooms, corridors, laboratories, etc was implemented.",
      "Roofing at the top of the building for protection from heat waves.",
      "The seminar hall was renovated and upgraded with ICT.",
      "Enhanced sapling of plants and beautification of the entire campus with sufficient greenery.",
      "Had conducted a quality audit with the competent agency.",
      "Extension of tar road within the campus premises.",
      "Subscribed to the INFLIBNET N-list and established a digital library for remote access.",
      "New batteries and UPS for the main building, central library, and science laboratories were procured.",
      "Procured an additional 10 desktops for the computer laboratory.",
      "Some of the departments have invited academicians, professionals, and experts to deliver special lectures based on current job market trends and course curricula.",
      "Conducted fieldwork and study tours by respective departments.",
      "Conducted special lectures on career guidance and placement.",
      "In collaboration with neighboring competent organizations, conduct capacity-building activities.",
      "Organized intercollegiate fests.",
      "Deputed a good number of sports laurels to compete at university and state-level tournaments.",
      "Organized a 1-day workshop on interview and communication skills.",
      "Conducted professional development program for teaching and non-teaching staff for one week, etc.",
      "Blood donation camps were organized.",
      "Introduced PG programme in Urdu and Economics.",
      "05 MoUs were signed with industries, educational firms, and institutions.",
      "Conducted awareness programs on important issues.",
      "Augment furniture and equipment.",
      "Enhance the placement through career guidance and placement cell",
      "Financial assistance from alumni and other non-government organisations was mobilized effectively.",
      "Conducted a Women Empowerment/create awareness about environmental programs.",
      "Introduce 27 certificate or value-added courses.",
      "Introduce MIS for e-governance and train staff accordingly.",
    ],
  },
  {
    title: "Long-Term Plans",
    color: "yellow",
    plans: [
      "13 CCTV surveillance cameras were enhanced.",
      "Procure benches and desks.",
      "Feedback on the course curriculum from stakeholders was collected.",
      "Organise an intercollegiate university-level single-zone badminton tournament.",
      "A special lecture on GST was organised.",
      "The central library's learning resources were enhanced.",
      "Organized 02 time on-campus interview.",
      "Deputed full-time teachers for seminars, conferences, and workshops.",
      "Deputed full-time teachers for RC/OC/short-term courses.",
      "Established Language and Commerce Lab separately.",
      "Provided a separate well configured desktop, earphone and installed necessary software for conducting virtual classes.",
      "One Day Workshop on Personality Development organized on 23rd Oct 2022 for B. A and B.Sc students.",
      "One Day Seminar on recent trends in marketing organized on 23rd Oct 2022 for B.Com students.",
      "FUZIONA-Intercollegiate Fest-2022 was organized to promote the college programmes for the XII standard students.",
      "A short training session on Microsoft Power Point Training was conducted on 15th Dec 2022.",
      "In association with M/S Gemini Infoways Bhatkal we organized Five days Faculty development Program (FDP) for teaching staff on Power Point Presentation and non-teaching staff on Microsoft Excel from 07th Jan 2023 to 11th Jan 2023",
      "One Day Workshop on Interview and Communication Skills organized on 11th May 2023.",
      "Corporate training session organized on 06th Feb 2022.",
      "Blood Donation Camp organized in the campus in association with District Health Centre UDUPI on 30th Dec 2021.",
      "Awareness program on Self-employment opportunities was conducted on 18th July 2022, MrKarunakar Jain from RUDESETI was the resource person for the program.",
      "Awareness program on Career opportunities in CPA on 02nd Nov 2021.",
      "The Webinar on “Personality Development and Communication Skill” was organized by the Department of Commerce on 28-11-2021.",
      "With the active participation of Department of Economics organized International level seminar.",
      "Under the Capacity Building scheme, college has conducted short course on (a) Computer Typewriting Skills and (b) English Communication Skills.",
      "Inter collegiate single zone badminton tournament for men and women on 14-03-2019.",
      "Software Training on JUPSOFT for teaching and non teaching staff held on 19-01-2019.",
      "Conducted AAA and implemented its recommendations, etc",
    ],
  },
];

const Plans = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Short- & Long-Term Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With the active role of IQAC, the following highlights of implementation of short- and long-term plans were achieved during the last five years.
          </p>
        </div>

        {/* PDF Button */}
        <div className="flex justify-center mb-12">
          <a
            href="/pdf/plans.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold"
          >
            <Download className="w-5 h-5 mr-2" /> View PDF
          </a>
        </div>

        {/* Plans Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plansData.map((section, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${
                section.color === "blue"
                  ? "from-blue-50 to-blue-100"
                  : "from-yellow-50 to-yellow-100"
              } rounded-lg p-8`}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">{section.title}</h3>
              <ul className="space-y-3 text-gray-700">
                {section.plans.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div
                      className={`w-4 h-4 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        section.color === "blue" ? "bg-blue-900" : "bg-yellow-500"
                      }`}
                    ></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
