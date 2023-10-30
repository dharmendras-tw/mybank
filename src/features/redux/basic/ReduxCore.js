import React, { useState, useEffect } from 'react';

function ReduxCore() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('reduxcore.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default ReduxCore;