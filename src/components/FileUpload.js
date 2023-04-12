import React from 'react';

const FileUpload = ({ onFileUpload }) => {
  const fileInputRef = React.useRef();

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    onFileUpload(file);
  };

  return (
    <>
      <input type="file" ref={fileInputRef} onChange={handleFileUpload} />
    </>
  );
};

export default FileUpload;
