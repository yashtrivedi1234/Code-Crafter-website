import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Shahid Mehdi",
      company: "Immerso Universe",
      text: "I confidently recommend the Code Crafter team; they are the most proficient web development professionals I've worked with. Their professionalism and collaborative approach are exceptional. Beyond creativity, their technical team brings deep expertise. They consistently honored timelines and delivered exactly what we needed.",
    },
    {
      id: 2,
      name: "Anusha Kurilla",
      company: "IAST Software Solutions",
      text: "We had such a wonderful experience working with the team at Code Crafter. During a challenging time for our organization, they stepped in with full commitment and ensured our website transformation was completed smoothly and on time. Their professionalism was matched by genuine care.",
    },
    {
      id: 3,
      name: "Dr. Lakshmi",
      company: "The Rhythms For Mind",
      text: "I am very grateful to the Code Crafter team for their outstanding work on my website. From the very first meeting, they showed professionalism, patience, and a genuine willingness to guide me through every step. Although I'm not tech-savvy, they offered helpful suggestions and expert advice.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-8 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Section Heading */}
      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold uppercase tracking-wider">
          Testimonials
        </span>
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-black tracking-tight">
          What our <span className="text-[#175E75]">clients</span> say
        </h2>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-10 shadow-lg transition-all duration-500 hover:border-[#175E75] hover:shadow-2xl hover:-translate-y-4 group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black group-hover:text-[#175E75] transition-colors duration-300">
                    {review.name}
                  </h3>
                  <p className="text-[#175E75] text-xs font-bold uppercase tracking-wider mt-2">
                    {review.company}
                  </p>
                  <div className="flex mt-3 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                {/* Google Logo */}
                <div className="bg-gray-50 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
                "{review.text}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-12 md:mt-16 relative z-10">
        <button className="p-3 md:p-4 border-2 border-[#175E75] rounded-full text-[#175E75] hover:text-white hover:bg-[#175E75] transition-all duration-300 shadow-lg hover:shadow-xl">
          <ChevronLeft size={20} />
        </button>
        <button className="p-4 border-2 border-slate-900 rounded-full hover:text-white hover:bg-(--brand) transition-all duration-300 shadow-lg">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-50 cursor-pointer group">
        <div className="absolute -inset-2 bg-[#25D366]/20 rounded-full blur-xl group-hover:bg-[#25D366]/40 transition-all animate-pulse"></div>
        <div className="relative bg-[#25D366] p-4 rounded-full shadow-2xl transform transition-transform group-hover:scale-110 group-hover:-rotate-12">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
