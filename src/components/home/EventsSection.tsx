import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  heroImage: string;
  day: string;
  month: string;
  time: string;
  venue: string;
  status: string;
}

interface EventsSectionProps {
  allEvents: Event[];
}

const EventsSection: React.FC<EventsSectionProps> = ({ allEvents }) => {
  const [eventFilter, setEventFilter] = useState('all');

  const allDisplayed = [
    ...allEvents.filter(event => event.status === 'upcoming').slice(0, 2),
    ...allEvents.filter(event => event.status === 'past').slice(0, 2)
  ];

  const filteredEvents = eventFilter === 'all'
    ? allDisplayed
    : allDisplayed.filter(event => event.status === eventFilter);

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mb-4">Events</h2>
          <p className="text-xl text-gray-600">Explore our past achievements and upcoming events</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setEventFilter('all')}
            className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
              eventFilter === 'all'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-blue-900 hover:bg-gray-300'
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setEventFilter('past')}
            className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
              eventFilter === 'past'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-blue-900 hover:bg-gray-300'
            }`}
          >
            Past Events
          </button>
          <button
            onClick={() => setEventFilter('upcoming')}
            className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
              eventFilter === 'upcoming'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-blue-900 hover:bg-gray-300'
            }`}
          >
            Upcoming Events
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {filteredEvents.map((event, index) => (
            <Link key={index} to={`/events/${event.id}`} state={{ from: 'home' }} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group block">
              <div className="relative overflow-hidden h-48">
                <img
                  src={event.heroImage}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-900 text-white p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold">{event.day}</div>
                  <div className="text-yellow-400 text-sm font-semibold">{event.month}</div>
                </div>
                {event.status === 'past' && (
                  <div className="absolute top-4 left-4 bg-gray-700/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Past Event
                  </div>
                )}
                {event.status === 'upcoming' && (
                  <div className="absolute top-4 left-4 bg-green-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Upcoming
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.venue}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link
            to="/events"
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            View All Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
