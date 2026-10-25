import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-sage-900">
          Get in Touch
        </h1>
        <p className="text-sm text-sage-800 leading-relaxed">
          Have a question about an order, custom floral arrangements, or wedding consultations? We’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-cream-200 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="h-16 w-16 bg-blush-100 text-blush-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-sage-900">
                Message Sent Successfully!
              </h2>
              <p className="text-xs text-sage-800 max-w-md mx-auto">
                Thank you for contacting Simple Cafe. One of our florists will review your note and respond within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 rounded-xl bg-sage-800 px-6 py-2.5 text-xs font-semibold text-white hover:bg-sage-900 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <h2 className="font-serif text-xl font-bold text-sage-900 mb-4">
                Send Us a Message
              </h2>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-sage-900 mb-1">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jane Doe"
                  className={`w-full rounded-xl border px-4 py-3 text-xs text-sage-900 focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-cream-200 focus:ring-sage-800'
                  }`}
                />
                {errors.name && <p className="mt-1 text-[11px] text-rose-600">{errors.name}</p>}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-sage-900 mb-1">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className={`w-full rounded-xl border px-4 py-3 text-xs text-sage-900 focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-cream-200 focus:ring-sage-800'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-[11px] text-rose-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-sage-900 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(312) 555-0198"
                    className="w-full rounded-xl border border-cream-200 px-4 py-3 text-xs text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-800"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-sage-900 mb-1">
                  Message <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how we can help you with your flower needs..."
                  className={`w-full rounded-xl border px-4 py-3 text-xs text-sage-900 focus:outline-none focus:ring-2 ${
                    errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-cream-200 focus:ring-sage-800'
                  }`}
                />
                {errors.message && <p className="mt-1 text-[11px] text-rose-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-sage-800 py-3.5 text-xs font-semibold text-white shadow-md hover:bg-sage-900 transition-colors"
              >
                <Send className="h-4 w-4" />
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>

        {/* Store Info & Hours */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-cream-100 p-8 rounded-3xl border border-cream-200 space-y-6">
            <h2 className="font-serif text-xl font-bold text-sage-900">
              Store Information
            </h2>

            <div className="space-y-4 text-xs text-sage-800">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blush-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sage-900 block text-sm">Simple Cafe Studio</strong>
                  <p>123 Floral Garden Way</p>
                  <p>Chicago, IL 60601</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blush-500 flex-shrink-0" />
                <span>(312) 555-0198</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blush-500 flex-shrink-0" />
                <span>hello@simplecafe-flowers.com</span>
              </div>
            </div>

            <div className="border-t border-cream-200 pt-6 space-y-3">
              <h3 className="font-serif text-base font-bold text-sage-900 flex items-center gap-2">
                <Clock className="h-4 w-4 text-blush-500" />
                Opening Hours
              </h3>
              <div className="space-y-2 text-xs text-sage-800">
                <div className="flex justify-between">
                  <span>Mon–Fri</span>
                  <span className="font-semibold text-sage-900">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-sage-900">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-sage-900">10:00 AM – 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
