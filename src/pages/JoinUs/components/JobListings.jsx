import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

const JobListings = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",
      description: "We're looking for an experienced React developer to lead our frontend development team."
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Hybrid",
      experience: "3+ years",
      description: "Create beautiful and intuitive user experiences for web and mobile applications."
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "On-site",
      experience: "3+ years",
      description: "Develop and maintain both frontend and backend systems across our platform."
    },
    {
      id: 4,
      title: "QA Engineer",
      department: "Quality Assurance",
      type: "Full-time",
      location: "Remote",
      experience: "2+ years",
      description: "Ensure product quality through comprehensive testing and automation."
    },
    {
      id: 5,
      title: "Project Manager",
      department: "Project Management",
      type: "Full-time",
      location: "Hybrid",
      experience: "4+ years",
      description: "Manage client projects and ensure successful delivery of digital solutions."
    },
    {
      id: 6,
      title: "Business Development Manager",
      department: "Sales",
      type: "Full-time",
      location: "On-site",
      experience: "2+ years",
      description: "Build relationships with clients and identify new business opportunities."
    }
  ];

  const departmentColors = {
    Engineering: "bg-blue-100 text-blue-800",
    Design: "bg-purple-100 text-purple-800",
    "Quality Assurance": "bg-green-100 text-green-800",
    "Project Management": "bg-orange-100 text-orange-800",
    Sales: "bg-red-100 text-red-800"
  };

  return (
    <section className="py-20 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Open Positions</h2>
          <p className="text-gray-600 text-lg">{jobs.length} positions available</p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-8 border border-gray-200 rounded-lg hover:border-[#175E75] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="grow">
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${departmentColors[job.department] || 'bg-gray-100 text-gray-800'}`}>
                      {job.department}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-black mb-2 group-hover:text-[#175E75] transition-colors">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} className="text-[#175E75]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} className="text-[#175E75]" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <button className="px-6 py-3 bg-[#175E75] text-white rounded-lg hover:bg-[#0f3f4f] transition-colors font-semibold whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-12 rounded-lg bg-linear-to-r from-[#175E75] to-[#0f3f4f] text-white text-center">
          <h3 className="text-white mb-3">Don't See Your Role?</h3>
          <p className="mb-6 opacity-90">We're always looking for talented people to join our team</p>
          <button className="px-8 py-3 rounded-lg bg-white text-[#175E75] font-semibold hover:bg-gray-100 transition-colors">
            Send Your Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
