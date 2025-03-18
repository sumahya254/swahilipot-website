import React, { useState } from 'react';
import { FaPalette, FaLaptopCode, FaBusinessTime } from 'react-icons/fa'; // Import icons

export default function Programs() {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Art & Culture",
      description: "Promoting Swahili art and cultural heritage through workshops and exhibitions.",
      details: [
        "Monthly art exhibitions showcasing local artists.",
        "Workshops on traditional Swahili crafts and painting.",
        "Cultural exchange programs with international artists.",
      ],
      icon: <FaPalette className="text-4xl text-blue-600 mb-4" />, // Icon for Art & Culture
    },
    {
      id: 2,
      title: "Tech Innovation",
      description: "Supporting tech startups and innovators with training and mentorship.",
      details: [
        "Coding bootcamps for beginners and advanced developers.",
        "Hackathons to solve local community challenges.",
        "Mentorship programs with industry experts.",
      ],
      icon: <FaLaptopCode className="text-4xl text-blue-600 mb-4" />, // Icon for Tech Innovation
    },
    {
      id: 3,
      title: "Entrepreneurship",
      description: "Empowering entrepreneurs with business skills and resources.",
      details: [
        "Business plan development workshops.",
        "Access to funding opportunities and investor networks.",
        "Marketing and branding training for startups.",
      ],
      icon: <FaBusinessTime className="text-4xl text-blue-600 mb-4" />, // Icon for Entrepreneurship
    },
  ];

  const toggleProgram = (id) => {
    setExpandedProgram(expandedProgram === id ? null : id);
  };

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white p-6 rounded-lg shadow-lg">
              {/* Add the icon here */}
              {program.icon}
              <h3 className="text-xl font-bold mb-4">{program.title}</h3>
              <p className="text-gray-700 mb-4">{program.description}</p>
              <button
                onClick={() => toggleProgram(program.id)}
                className="text-blue-600 font-semibold hover:underline"
              >
                {expandedProgram === program.id ? "Hide Details" : "Learn More"}
              </button>
              {expandedProgram === program.id && (
                <ul className="mt-4 space-y-2">
                  {program.details.map((detail, index) => (
                    <li key={index} className="text-gray-700">
                      • {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}