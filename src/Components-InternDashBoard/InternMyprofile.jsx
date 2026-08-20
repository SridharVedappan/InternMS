import React from 'react'
import "../Components-InternDashBoard/InternMyprofile.css"
import pdf from "../assets/intern/pdf.png";
import jpg from "../assets/intern/jpg.png";
import doc from "../assets/intern/doc.png";
import downloadFile from "../assets/intern/download-file-icon.png";

export const InternMyprofile = () => {
  const InternDocumentData = [
    {
      id: 1,
      name: 'Resume_Updated_2024.pdf',
      size: '2.4MB',
      uploadedAt: 'Uploaded 2 mos ago',
      type: 'pdf',
    },
    {
      id: 2,
      name:'ID_Proof_Front.jpg',
      size:'850 KB',
      uploadedAt: 'Uploaded 1 yr ago',
      type:'image',
    },
    {
      id: 3,
      name:'AWS_Certification.pdf',
      size:'1.1 MB',
      uploadedAt: 'Uploaded 6 mos ago',
      type:'doc',
    },
  ]

  const skillsData = {
     technicalSkills: [
      "System Administration",
      "Network Security",
      "Cloud Computing (AWS, Azure)",
      "Linux/Unix",
      "Database Management",
  ],

  softSkills: [
    "Leadership",
    "Problem Solving",
    "Communication",
    "Project Management",
  ],
};

  const documentIcons = (type) => {
    switch(type?.toLowerCase()) {
      case 'pdf':
        return <img src={pdf} alt="pdf" />;

      case 'image':
      case 'jpg':
      case 'jpeg':
      case 'png':
        return <img src={jpg} alt="jpg" />;
        
      case 'doc':
        return <img src={doc} alt="doc" />;
      
      default:
        return null;
    }
  }

  return (
    <div>
      <div className='document-card-container'>
        <div className='document-card-header'>
          <h1>Documents</h1>
          <button>View All</button>
        </div>
        <div className='document-card-content'>
          {InternDocumentData.slice(0, 4).map((doc) => (
            <div key={doc.id} className='intern-document-card'>
              <div className='intern-files-icons'>
                <span>{documentIcons(doc.type)}</span>
              </div>
              <div className='intern-file-info'>
                <span className="intern-file-title" title={doc.name}>
                  {doc.name}
                </span>
                <span className="intern-file-meta">
                  {doc.size} • {doc.uploadedAt}
                </span>
              </div>
              <div className='download-file-icon-containar'>
                <img src={downloadFile} alt="Download File" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='intern-skill-card'>
        <div className='skill-card-header'>
          <h1>Skills</h1>
        </div>
        <div className='skill-card-main-contents'>
          <div className='skill-card-main-content'>
            <div className='intern-skill-title'>
              <h1>TECHNICAL SKILLS</h1>
            </div>
            <div className='intern-skill-tags'>
              {skillsData.technicalSkills.map((skill, index) => (
                <span key={index} className='skill-tag'>{skill}</span>
              ))}
            </div>
          </div>
          <div className='skill-card-main-content'>
            <div className='intern-skill-title'>
              <h1>SOFT SKILLS</h1>
              </div>
            <div className='intern-skill-tags'>
              {skillsData.softSkills.map((skill, index) => (
                <span key={index} className='skill-tag'>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
