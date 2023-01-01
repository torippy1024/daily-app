export const SITES_NAME = {
  GOOGLE_PHOTO: 'Googleフォト',
  GOOGLE_CALENDAR: 'Googleカレンダー',
  GOOGLE_MAIL: 'Gmail',
};

export const SITE_BASE_URL = {
  GOOGLE_PHOTO: 'https://photos.google.com/u/1/search/_d[yyyy][MM][dd]_',
  GOOGLE_CALENDAR:
    'https://calendar.google.com/calendar/u/0/r/day/[yyyy]/[MM]/[dd]',
  GOOGLE_MAIL:
    'https://mail.google.com/mail/u/0/?ogbl#advanced-search/subset=all&within=1d&date=[yyyy]%2F[MM]%2F[dd]',
};

export const SITE_EXAMPLE_URL = {
  GOOGLE_PHOTO: 'https://photos.google.com/u/1/search/_d20230101_',
  GOOGLE_CALENDAR: 'https://calendar.google.com/calendar/u/0/r/day/2023/01/01',
  GOOGLE_MAIL:
    'https://mail.google.com/mail/u/0/?ogbl#advanced-search/subset=all&within=1d&date=2023%2F01%2F01',
};

export const SITES = [
  {
    name: SITES_NAME.GOOGLE_PHOTO,
    baseUrl: SITE_BASE_URL.GOOGLE_PHOTO,
    exampleUrl: SITE_EXAMPLE_URL.GOOGLE_PHOTO,
  },
  {
    name: SITES_NAME.GOOGLE_CALENDAR,
    baseUrl: SITE_BASE_URL.GOOGLE_CALENDAR,
    exampleUrl: SITE_EXAMPLE_URL.GOOGLE_CALENDAR,
  },
  {
    name: SITES_NAME.GOOGLE_MAIL,
    baseUrl: SITE_BASE_URL.GOOGLE_MAIL,
    exampleUrl: SITE_EXAMPLE_URL.GOOGLE_MAIL,
  },
];
