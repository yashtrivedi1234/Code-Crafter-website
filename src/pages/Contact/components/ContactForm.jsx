import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-white to-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-slate-900 mb-2">Send us a Message</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#175E75] to-cyan-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="group">
          <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-[#175E75] transition-colors">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-gray-500 focus:outline-none focus:border-[#175E75] focus:bg-blue-50 focus:ring-2 focus:ring-[#175E75]/20 transition-all duration-300"
          />
        </div>
        <div className="group">
          <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-[#175E75] transition-colors">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-gray-500 focus:outline-none focus:border-[#175E75] focus:bg-blue-50 focus:ring-2 focus:ring-[#175E75]/20 transition-all duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="group">
          <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-[#175E75] transition-colors">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-gray-500 focus:outline-none focus:border-[#175E75] focus:bg-blue-50 focus:ring-2 focus:ring-[#175E75]/20 transition-all duration-300"
          />
        </div>
        <div className="group">
          <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-[#175E75] transition-colors">Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-gray-500 focus:outline-none focus:border-[#175E75] focus:bg-blue-50 focus:ring-2 focus:ring-[#175E75]/20 transition-all duration-300"
          />
        </div>
      </div>

      <div className="group">
        <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-[#175E75] transition-colors">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your project..."
          rows="5"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-gray-500 focus:outline-none focus:border-[#175E75] focus:bg-blue-50 focus:ring-2 focus:ring-[#175E75]/20 transition-all duration-300 resize-none"
        ></textarea>
      </div>

      <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 w-4 h-4 rounded border-slate-300 bg-white text-[#175E75] focus:ring-2 focus:ring-[#175E75]"
          required
        />
        <label htmlFor="terms" className="text-sm text-gray-700">
          I agree to the <span className="text-[#175E75] hover:text-cyan-600">Privacy Policy</span> and <span className="text-[#175E75] hover:text-cyan-600">Terms of Service</span>
        </label>
      </div>

      <div className="pt-4">
        {submitted ? (
          <div className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 animate-pulse shadow-md">
            <CheckCircle size={20} />
            Thank you! We'll be in touch soon
          </div>
        ) : (
          <button
            type="submit"
            className="w-full px-6 py-4 bg-gradient-to-r from-[#175E75] to-cyan-500 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn text-lg"
          >
            <Send size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            Send Message
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
