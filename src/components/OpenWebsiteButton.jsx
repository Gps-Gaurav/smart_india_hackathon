import React from 'react';

const OpenWebsiteButton = () => {
  const openWebsite = () => {
    const websiteURL = 'https://6509b0e9de9fe80a3850d8e8--incredible-arithmetic-0acf38.netlify.app/'; // Replace with your desired URL
    window.open(websiteURL, '_blank');
  };

  return (
    <>
    <button className='col-lg-4' onClick={openWebsite}>Live Chat</button>
    </>
  );
};

export default OpenWebsiteButton;