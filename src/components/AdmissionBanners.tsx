

const AdmissionBanners = () => {
  return (
    <div style={{ 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'row', // Force side-by-side
      flexWrap: 'nowrap',   // Stop stacking
      backgroundColor: '#f8f9fa',
      padding: '0',
      margin: '0',
      overflow: 'hidden'
    }}>
      {/* Left side: BA */}
      <div style={{ flex: '1', width: '50%' }}>
        <img 
          src="images/BA.jpg" 
          alt="BA Admission" 
          style={{ 
            width: '100%', 
            height: '500px', 
            display: 'block' 
          }} 
        />
      </div>

      {/* Right side: B.Sc */}
      <div style={{ flex: '1', width: '50%' }}>
        <img 
          src="images/Bsc.jpg" 
          alt="BSc Admission" 
          style={{ 
            width: '100%', 
            height: '500px', 
            display: 'block' 
          }} 
        />
      </div>
    </div>
  );
};

export default AdmissionBanners;