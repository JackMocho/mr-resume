import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  FaPaperPlane, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaInfoCircle
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const { state } = useLocation();
  const serviceRequested = state?.serviceRequested;
  const prefillMessage = state?.prefillMessage || '';
  const subject = state?.subject || '';

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: subject,
      message: prefillMessage
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Must be at least 10 characters'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string()
        .required('Message is required')
        .min(20, 'Message must be at least 20 characters')
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      fetch('https://formspree.io/f/xkgbjezd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          serviceRequested: serviceRequested || 'General Inquiry'
        }),
      })
      .then(response => {
        if (response.ok) {
          alert('Message sent successfully!');
          resetForm();
        } else {
          throw new Error('Failed to send message');
        }
      })
      .catch(error => {
        alert('There was an error sending your message. Please try again later.');
        console.error('Error:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
    },
  });

  return (
    <section id="contact" className="py-16 bg-gradient-to-bl from-blue-500 to-green-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {serviceRequested ? `Request ${serviceRequested}` : 'Contact Me'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {serviceRequested 
              ? `Let's discuss your ${serviceRequested} needs` 
              : 'Get in touch for inquiries or project discussions'}
          </p>
        </div>

        {serviceRequested && (
          <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200 flex items-start">
            <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-blue-800">
              You're inquiring about: <strong>{serviceRequested}</strong>
            </p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form onSubmit={formik.handleSubmit} className="bg-white rounded-xl shadow-md p-6">
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.phone}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md p-6 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600"> Bomet, Rift Valley, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:contact@gisdev.com" className="text-blue-600 hover:underline">
                      emissarywebmappers@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+14155550123" className="text-blue-600 hover:underline">
                      +254 745 420 900
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Availability</h4>
                <p className="text-gray-600">Monday - Friday: 6:00 AM - 9:00 PM EAT</p>
                <p className="text-gray-600">Weekends & Holidays: By appointment only</p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">About My Services</h4>
                <p className="text-gray-600">
                  I typically respond to all inquiries within 24 hours. For urgent matters, please 
                  include "URGENT" in your subject line or call my phone number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;