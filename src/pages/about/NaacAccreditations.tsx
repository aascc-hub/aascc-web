

const NaacAccreditations = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 container mx-auto px-4 pb-12">
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-900">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">NAAC Accreditations</h1>
        
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg p-6 text-center mb-8">
          <h2 className="text-xl font-bold mb-2">Institutional Assessment and Accreditation</h2>
          <p className="text-sm">Anjuman Arts, Science & Commerce College & PG Centre, Bhatkal</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-3 border">Academic Year / Cycle</th>
                <th className="p-3 border">View/Download Document</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="hover:bg-gray-50">
                <td className="p-3 border font-medium">Certificate of Accreditations Cycle 3</td>
                <td className="p-3 border">
                  <a href="#" className="text-blue-600 hover:underline font-semibold">Click Here</a>
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="p-3 border font-medium">Certificate of Accreditations Cycle 2</td>
                <td className="p-3 border">
                  <a href="#" className="text-blue-600 hover:underline font-semibold">Click Here</a>
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="p-3 border font-medium">Certificate of Accreditations Cycle 1</td>
                <td className="p-3 border">
                  <a href="#" className="text-blue-600 hover:underline font-semibold">Click Here</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NaacAccreditations;