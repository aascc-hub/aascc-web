import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Anjuman Arts Science & Commerce College (AASCC)',
        'Beside Anjuman Pre University College Bhatkal, Karnataka - 581320',
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        'Main Office: "+91 80735 94532 ',
        'Admissions: +91 98765 43211',
        'Principal: +91 98864 47244',
        
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'college@anjuman.edu.in |',
        'admissions@anjumancollege.edu.in',
        'yusufzk87@gmail.com',
        
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Saturday - Thursday: 9:00 AM - 3:00 PM',
        'Thursday: 9:00 AM - 1:00 PM',
        'Friday: Closed',
        'During Exams: Extended Hours'
      ]
    }
  ];

  const departments = [
    { name: 'Admissions Office', phone: '+91 98765 43211', email: 'admissions@anjumancollege.edu.in' },
    { name: 'Academic Office', phone: '+91 98765 43214', email: 'academic@anjumancollege.edu.in' },
    { name: 'Student Affairs', phone: '+91 98765 43215', email: 'students@anjumancollege.edu.in' },
    { name: 'Finance Office', phone: '+91 98765 43216', email: 'finance@anjumancollege.edu.in' },
    { name: 'Library', phone: '+91 98765 43217', email: 'library@anjumancollege.edu.in' },
    { name: 'Placement Cell', phone: '+91 98765 43218', email: 'placements@anjumancollege.edu.in' }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mt-8 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for any inquiries, admissions, or support. We're here to help you.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="academic">Academic Information</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Please describe your inquiry in detail..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://maps.app.goo.gl/2tVh4EGKozK3sg1G8?g_st=awb2"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AASCC Location"
            ></iframe>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 text-center mb-12">Department Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{dept.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{dept.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm break-all">{dept.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Directions */}
        <div className="bg-blue-900 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">How to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">By Road</h3>
              <p className="text-blue-100 text-sm">
                AASCC is located in Bhatkal, Karnataka. The college is easily accessible by road.
                From major cities like Mangalore (about 120 km south) or Goa (about 150 km north),
                take NH66 (formerly NH17).
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">By Train</h3>
              <p className="text-blue-100 text-sm">
                Bhatkal Railway Station is the nearest railway station, well-connected to major cities.
                Trains from Mumbai, Bangalore, and other metros are available. The college is about
                3-4 km from the railway station, easily reachable by auto-rickshaw or taxi.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">By Air</h3>
              <p className="text-blue-100 text-sm">
                The nearest airport is Mangalore International Airport (IXE), about 120 km away.
                From Goa, Dabolim Airport is approximately 150 km. Taxis and buses are available
                from the airport to Bhatkal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;