const AnnualReport2021 = () => {
  const pdfUrl = "https://www.anjumancollege.in/wp-content/uploads/2024/08/Annual-Report-2019-20.pdf"; // Update link if different

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Annual Report 2021-22</h2>
      <a 
        href={pdfUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-8 py-3 bg-blue-800 text-white rounded-lg font-bold hover:bg-blue-700 transition shadow-lg"
      >
        Click to Open PDF Directly
      </a>
    </div>
  );
};

export default AnnualReport2021;