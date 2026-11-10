// Finished client sites shown on the home page and on /portfolio.
//
// [IMI: mely elkészült munkák mutathatók meg név szerint, képpel?]
// Add each one here with a desktop and a phone screenshot in public/works/.
// While the list is empty, the pages show clearly marked placeholders instead of invented work.

export interface Work {
  /** Client or project name as it may be shown publicly */
  name: string;
  /** What the business does, e.g. "Villanyszerelés, Kecskemét" */
  field: string;
  /** Live address without protocol, e.g. "pelda.hu" */
  domain: string;
  /** One sentence on what the site had to do */
  summary: string;
  /** Screenshots in public/, e.g. "/works/pelda-desktop.webp" */
  desktopImage: string;
  mobileImage?: string;
}

export const WORKS: Work[] = [];

export const WORK_PLACEHOLDER_COUNT = 3;
