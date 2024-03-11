import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './ProjectPage.css'

function ProjectPage({ projects }) {
  const { projectId } = useParams();
  const project = projects.find(project => project._id === projectId);

//   if (!project) {
//     return <div>Project not found!</div>;
//   }

  const [text, setText] = useState('');

  useEffect(() => {
    fetch(project.markdownLink)
        .then((response) => response.text())
        .then((md) => {
            console.log(project.markdownLink);
            setText(md);
      });
  }, []);

  return (
    <ReactMarkdown className='text-page'>
      {text}
    </ReactMarkdown>
  );
}

export default ProjectPage;
