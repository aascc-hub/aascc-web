
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Heart } from 'lucide-react';
import { allEvents } from '../../data/events';
import { Link } from 'react-router-dom';

const EventsList: React.FC = () => {
  const [eventFilter, setEventFilter] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const filteredEvents = eventFilter === 'all'
    ? allEvents
    : allEvents.filter(event => event.status === eventFilter);

  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mt-8 mb-6">Events</h1>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {filteredEvents.map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden relative block"
          >
            <img
              src={event.heroImage}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-3 left-3 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {event.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
            </div>
            <button
              onClick={() => toggleFavorite(event.id)}
              className={`absolute top-3 right-3 p-2 rounded-full ${
                favorites.includes(event.id)
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-600 hover:text-red-500'
              } transition`}
            >
              <Heart className="w-5 h-5" />
            </button>

            <div className="p-5">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {event.day} {event.month}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {event.time}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {event.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                <MapPin className="inline w-4 h-4 mr-1" />
                {event.venue}
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-700 font-medium">{event.category}</span>
                <span className="flex items-center gap-1 text-gray-500">
                  <Users className="w-4 h-4" /> {event.attendees}
                </span>
              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
};

export default EventsList;
