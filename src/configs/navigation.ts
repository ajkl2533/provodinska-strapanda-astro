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
  gallery: {
    label: 'Galerie 2023',
    anchor: 'galerie',
  },
  testimonials: {
    label: 'Kronika',
    anchor: 'kronika',
  },
  tracks: {
    label: 'Trasy 2023',
    anchor: 'trasy',
  },
  history: {
    label: 'Historie',
    anchor: 'historie',
  },
  contact: {
    label: 'Napište nám',
    href: 'mailto:petr@provodinska-strapanda.cz',
  },
};

export const getAnchor = (section: NavigationSections): string | undefined => {
  const navSection = navigation[section];

  return 'anchor' in navSection ? navSection.anchor : undefined;
};
