import type { Event, WithContext } from 'schema-dts';

export const eventStructuredData: WithContext<Event> = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'PROVODÍNSKÁ ŠTRAPANDA 2023',
  startDate: '2023-06-17',
  endDate: '2023-06-17',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Fotbalové, beach volejbalové hřiště a tenisový kurt Provodín',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Provodín',
      postalCode: '47167',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '50.615',
      longitude: '14.597',
    },
  },
  image: 'https://provodinska-strapanda.cz/social-cover-min.jpeg',
  description:
    'Rádi bychom pozvali všechny příznivce turistiky na tradiční pochod Provodínská Štrapanda pořádaný od roku 1975. Pořádá ♥ KČT Provodín',
  url: 'https://provodinska-strapanda.cz/',
  organizer: {
    '@type': 'Organization',
    name: 'KČT Provodín',
    url: 'https://www.provodinska-strapanda.cz/',
  },
};
