type NavigationSections =
  | 'home'
  | 'tracks'
  | 'history'
  | 'gallery'
  | 'contact'
  | 'testimonials';
type AnchorSection = {
  label: string;
  anchor: string;
};
type HrefSection = {
  label: string;
  href: string;
};

type Navigation = Record<NavigationSections, AnchorSection | HrefSection>;

export const navigation: Navigation = {
  home: {
    label: 'Úvod',
    anchor: 'uvod',
  },
  tracks: {
    label: 'Trasy',
    anchor: 'trasy',
  },
  testimonials: {
    label: 'Kronika',
    anchor: 'kronika',
  },
  gallery: {
    label: 'Galerie',
    anchor: 'galerie',
  },
  history: {
    label: 'Historie',
    anchor: 'historie',
  },
  contact: {
    label: 'Napište nám',
    href: 'mailto:podrazky.petr@gmail.com',
  },
};

export const getAnchor = (section: NavigationSections): string | undefined => {
  const navSection = navigation[section];

  return 'anchor' in navSection ? navSection.anchor : undefined;
};
