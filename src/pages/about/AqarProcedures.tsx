const AqarProcedures = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 container mx-auto px-4 pb-12">
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-900">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">AQAR – Procedures and Policies</h1>
        
        <p className="text-gray-600 mb-6">
          The Annual Quality Assurance Report (AQAR) details the procedures and policies established by the institution 
          for maintaining academic excellence, infrastructure maintenance, and support systems.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-3 border">Academic Year</th>
                <th className="p-3 border">Procedures & Policies File</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="hover:bg-gray-50">
                <td className="p-3 border font-medium">AQAR 2022-23</td>
                <td className="p-3 border">
                  <a href="#" className="text-blue-600 hover:underline font-semibold">View PDF / Download</a>
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="p-3 border font-medium">AQAR 2021-22</td>
                <td className="p-3 border">
                  <a href="#" className="text-blue-600 hover:underline font-semibold">View PDF / Download</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AqarProcedures;