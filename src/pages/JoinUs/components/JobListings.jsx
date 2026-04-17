import React, { useState } from 'react';
import { MapPin, Clock, ArrowRight, Search } from 'lucide-react';

const JobListings = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
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
    Engineering: "bg-blue-100 text-blue-800 border-l-4 border-blue-500",
    Design: "bg-purple-100 text-purple-800 border-l-4 border-purple-500",
    "Quality Assurance": "bg-green-100 text-green-800 border-l-4 border-green-500",
    "Project Management": "bg-orange-100 text-orange-800 border-l-4 border-orange-500",
    Sales: "bg-red-100 text-red-800 border-l-4 border-red-500"
  };

  const departments = ['All', 'Engineering', 'Design', 'Quality Assurance', 'Project Management', 'Sales'];

  const filteredJobs = jobs.filter(job => {
    const departmentMatch = selectedDepartment === 'All' || job.department === selectedDepartment;
    const searchMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return departmentMatch && searchMatch;
  });

  return (
    <section className="py-8 px-8 md:px-16 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-[#175E75]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold mb-4 uppercase tracking-wider">Career Opportunities</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black">Open Positions</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#175E75] to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto"><span className="font-bold text-[#175E75]">{filteredJobs.length}</span> of <span className="font-bold">{jobs.length}</span> positions available</p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-14 space-y-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#175E75] group-focus-within:text-[#175E75]" size={20} />
            <input
              type="text"
              placeholder="Search positions by title or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#175E75] focus:ring-2 focus:ring-[#175E75]/20 transition-all bg-white font-medium shadow-sm hover:shadow-md"
            />
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-3">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedDepartment === dept
                    ? 'bg-[#175E75] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filteredJobs.length > 0 ? (
          <div className="space-y-6">
            {filteredJobs.map((job, jobIndex) => (
            <div
              key={job.id}
              className={`p-8 bg-white border-l-4 border-2 border-l-gray-300 border-gray-200 rounded-2xl transition-all duration-500 group hover:border-l-[#175E75] hover:border-[#175E75] hover:shadow-2xl hover:-translate-y-2 overflow-hidden relative cursor-pointer hover:scale-102`}
              style={{
                animationDelay: `${jobIndex * 50}ms`
              }}
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#175E75]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="grow">
                  <div className="flex flex-wrap gap-3 mb-5">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold border shadow-sm transition-all group-hover:shadow-md ${departmentColors[job.department] || 'bg-gray-100 text-gray-800'}`}>
                      {job.department}
                    </span>
                    <span className="px-4 py-2 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 flex items-center gap-2 border border-emerald-200 shadow-sm transition-all group-hover:shadow-md">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-[#175E75] transition-colors">{job.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed group-hover:text-gray-700">{job.description}</p>

                  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-2 font-medium">
                      <MapPin size={16} className="text-[#175E75] flex-shrink-0" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-2 font-medium">
                      <Clock size={16} className="text-[#175E75] flex-shrink-0" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <button className="px-7 py-3 bg-gradient-to-r from-[#175E75] to-[#0f3f4f] text-white rounded-xl hover:from-[#0f3f4f] hover:to-[#0a2838] transition-all duration-300 font-bold whitespace-nowrap shadow-lg hover:shadow-2xl group/btn flex items-center gap-2 hover:scale-110">
                  Apply Now
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-black mb-2">No positions found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 p-12 md:p-20 rounded-3xl bg-gradient-to-r from-[#175E75] via-[#0f3f4f] to-[#0a2838] text-white text-center relative overflow-hidden shadow-2xl group">
          {/* Animated decorative elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Don't See Your Role?</h3>
            <p className="mb-10 text-lg max-w-2xl mx-auto leading-relaxed opacity-95">We're always looking for talented people to join our team. Send us your resume and we'll keep you in mind for future opportunities!</p>
            <button className="px-10 py-4 rounded-xl bg-white text-[#175E75] font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-110 inline-flex items-center gap-2 text-lg">
              Send Your Resume
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
