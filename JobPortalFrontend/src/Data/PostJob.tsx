const fields = [
  {
    label: "Job Title",
    placeholder: "Enter Job Title",
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
    ],
  },
  {
    label: "Company",
    placeholder: "Enter Company Name",
    options: [
      "Google",
      "Microsoft",
      "Meta",
      "Netflix",
      "Adobe",
      "Facebook",
      "Amazon",
      "Apple",
      "Spotify",
    ],
  },
  {
    label: "Experience",
    placeholder: "Enter Experience Level",
    options: ["Entry Level", "Intermediate", "Expert"],
  },
  {
    label: "Job Type",
    placeholder: "Enter Job Type",
    options: ["Full Time", "Part Time", "Contract", "Freelance", "Internship"],
  },
  {
    label: "Location",
    placeholder: "Enter Job Location",
    options: [
      "Delhi",
      "New York",
      "San Francisco",
      "London",
      "Berlin",
      "Tokyo",
      "Sydney",
      "Toronto",
    ],
  },
  {
    label: "Salary",
    placeholder: "Enter Salary",
    options: [
      "10 LPA",
      "15 LPA",
      "20 LPA",
      "25 LPA",
      "30 LPA",
      "35 LPA",
      "40 LPA",
      "45 LPA",
    ],
  },
];
const content =
  '<h2 style="text-align: center;">Detailed Job Information</h2><p><code>JobFlix</code> provides an easy-to-use editor for recruiters to post detailed job descriptions. Use this editor to create your job post, providing all the necessary details such as job title, responsibilities, requirements, and application instructions.</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s></li><li>Headings for organizing sections (e.g., Job Title, Responsibilities, Qualifications)</li><li>Subscripts and superscripts for technical requirements (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Bullet points for listing qualifications and job benefits</li><li>Text alignment options for better layout control</li><li>And other advanced formatting features</li></ul><h3>Job Title</h3><p><strong>Software Engineer</strong></p><h3>Job Responsibilities</h3><ul><li>Design, develop, and maintain software solutions</li><li>Collaborate with cross-functional teams to define and deliver on software requirements</li><li>Write clean, efficient, and well-documented code</li><li>Participate in code reviews and maintain coding standards</li><li>Ensure the performance, quality, and responsiveness of applications</li></ul><h3>Required Qualifications</h3><ul><li>Bachelor’s degree in Computer Science or related field</li><li>3+ years of experience in software development</li><li>Proficiency in JavaScript, React, Node.js, or similar technologies</li><li>Experience with version control systems (e.g., Git)</li><li>Strong problem-solving skills and attention to detail</li></ul><h3>Preferred Skills</h3><ul><li>Experience with cloud platforms (AWS, Google Cloud, etc.)</li><li>Familiarity with Agile development practices</li><li>Excellent communication and teamwork skills</li></ul><h3>Application Instructions</h3><p>If you are interested in this position, please submit your resume and cover letter via the application form below. We look forward to reviewing your application.</p><p><a href="https://company.com/jobs/application" target="_blank" rel="noopener noreferrer">Apply Now</a></p>';
export { fields, content };
