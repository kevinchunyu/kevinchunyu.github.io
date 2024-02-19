import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import bookPath from './lgbtqspaces.md';
import './TradingStrategy.css';


function PersonalWebsitePage() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(bookPath)
      .then((response) => response.text())
      .then((md) => {
        setText(md);
      });
  }, []);

  return (
    <ReactMarkdown className='text-page'>
      {text}
    </ReactMarkdown>
  );
}

export default PersonalWebsitePage;