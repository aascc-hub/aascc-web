import React from 'react';

interface Announcement {
  date: string;
  title: string;
  type: string;
}

interface AnnouncementsSectionProps {
  announcements: Announcement[];
}

const AnnouncementsSection: React.FC<AnnouncementsSectionProps> = ({ announcements }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mb-4">Latest Announcements</h2>
          <p className="text-xl text-gray-600">Stay updated with the latest news and events</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-900 text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Recent Updates</h3>
          </div>
          <div className="relative h-96 overflow-hidden">
            <div
              className="space-y-4"
              style={{
                animation: 'scrollUp 20s linear infinite'
              }}
            >
              {[...announcements, ...announcements].map((announcement, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-blue-900 mb-1">
                        {announcement.title}
                      </h4>
                      <p className="text-gray-600">{announcement.date}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      announcement.type === 'admission' ? 'bg-green-100 text-green-800' :
                      announcement.type === 'event' ? 'bg-blue-100 text-blue-800' :
                      announcement.type === 'academic' ? 'bg-purple-100 text-purple-800' :
                      announcement.type === 'research' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {announcement.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
