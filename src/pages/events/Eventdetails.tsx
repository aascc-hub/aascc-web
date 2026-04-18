import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, ArrowLeft, Facebook, Twitter, Instagram, X, MessageCircle, Linkedin, Copy } from 'lucide-react';
import { allEvents } from '../../data/events';

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = allEvents.find(e => e.id === parseInt(id || '0'));
  const relatedEvents = allEvents.filter(e => e.id !== event?.id).slice(0, 3);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const shareUrl = window.location.href;
  const shareText = `Check out this event: ${event?.title}`;

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);

    let shareLink = '';

    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing via URL, so we'll copy to clipboard
        navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        alert('Link copied to clipboard! You can now paste it in Instagram.');
        return;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-off-page?url=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareLink = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
        return;
      default:
        return;
    }

    if (shareLink) {
      window.open(shareLink, '_blank', 'noopener,noreferrer');
    }
  };

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8 mt-10text-center">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Event Not Found</h1>
        <Link to="/events" className="text-blue-600 hover:text-blue-800 ">Back to Events</Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-10 mt-24">
          <Link
            to="/events"
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={event.heroImage}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-blue-900 text-white p-4 rounded-lg">
              <div className="text-3xl font-bold">{event.day}</div>
              <div className="text-yellow-400 text-lg font-semibold">{event.month}</div>
            </div>
          </div>

          <div className="p-8">
            {event.status === 'upcoming' ? (
              <>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">{event.title}</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-blue-900">Date</div>
                      <div className="text-gray-600">{event.day} {event.month}, {event.date.split('-')[0]}</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-blue-900">Time</div>
                      <div className="text-gray-600">{event.time}</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-blue-900">Venue</div>
                      <div className="text-gray-600">{event.venue}</div>
                    </div>
                  </div>
                </div>

               <div className="mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">About This Event</h2>
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {event.description || `Join us for an exciting ${event.category.toLowerCase()} event that promises to be both educational and engaging.`}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Event Details</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Category:</strong> {event.category}</li>
                      <li><strong>Expected Attendees:</strong> {event.attendees}</li>
                      <li><strong>Status:</strong> Upcoming</li>
                    </ul>
                  </div>

                   <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">What to Expect</h3>
                    <ul className="space-y-2 text-gray-700">
                      {event.id === 2 ? (
                        <>
                          <li>• Specialist Consultations</li>
                          <li>• Cancer Awareness Session</li>
                          <li>• Free Health Screening</li>
                          <li>• Expert Medical Advice</li>
                          <li>• Professional Guidance</li>
                        </>
                      ) : (
                        <>
                          <li>• Diverse Competitions</li>
                          <li>• Cultural Showcase</li>
                          <li>• Refreshments provided</li>
                          <li>• Certificate of participation</li>
                          <li>• Skill Testing</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold text-blue-900 mt-8 mb-6">Event Details</h1>

                <div className="flex items-center text-gray-600 mb-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{event.day} {event.month}, {event.date.split('-')[0]}</span>
                  <span className="mx-4">•</span>
                  <Users className="w-5 h-5 mr-2" />
                  <span>{event.attendees}</span>
                </div>

                <div className="prose prose-lg max-w-none mb-8">
                  {event.description ? (
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {event.description}
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        This past event was a tremendous success, bringing together students, faculty, and industry experts for an unforgettable experience.
                        The {event.category.toLowerCase()} event featured engaging sessions, interactive workshops, and valuable networking opportunities.
                      </p>

                      <p className="text-gray-700 leading-relaxed mb-6">
                        Participants had the chance to learn from renowned speakers, engage in hands-on activities, and connect with peers from various backgrounds.
                        The event not only provided educational value but also fostered a sense of community and collaboration among attendees.
                      </p>
                    </>
                  )}
                </div>

                {event.galleryImages && event.galleryImages.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Event Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {event.galleryImages.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${event.title} photo ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => setSelectedImage(img)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {selectedImage && (
                  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative max-w-4xl max-h-full">
                      <img
                        src={selectedImage}
                        alt="Selected event photo"
                        className="max-w-full max-h-full object-contain"
                      />
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                      >
                        <X className="w-6 h-6 text-gray-800" />
                      </button>
                    </div>
                  </div>
                )}

                <div className="border-t pt-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Share This Event</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                      title="Share on Facebook"
                    >
                      <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                      title="Share on Twitter"
                    >
                      <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={() => handleShare('instagram')}
                      className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                      title="Copy link for Instagram"
                    >
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                      title="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={() => handleShare('whatsapp')}
                      className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                      title="Share on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                      title="Copy link"
                    >
                      <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                <div className="border-t pt-8 mt-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Related Events</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {relatedEvents.map(relatedEvent => (
                      <Link
                        key={relatedEvent.id}
                        to={`/events/${relatedEvent.id}`}
                        className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow block"
                      >
                        <img
                          src={relatedEvent.heroImage}
                          alt={relatedEvent.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-blue-900 mb-2 line-clamp-2">{relatedEvent.title}</h4>
                          <div className="text-sm text-gray-600">
                            <Calendar className="inline w-4 h-4 mr-1" />
                            {new Date(relatedEvent.date).toLocaleDateString()}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;