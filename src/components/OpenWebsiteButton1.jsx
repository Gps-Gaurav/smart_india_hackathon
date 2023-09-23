
import React from 'react';

const OpenWebsiteButton1 = () => {
  const openWebsite = () => {
    const websiteURL = 'https://bdiocallbysameer.netlify.app/'; // Replace with your desired URL
    window.open(websiteURL, '_blank');
  };

  return (
    <>

     <button  className='col-lg-4' onClick={openWebsite}>PauseChat</button>
     </>
  );
};

export default OpenWebsiteButton1;