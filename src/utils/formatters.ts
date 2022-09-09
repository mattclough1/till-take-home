// Note: these singleton instances will either need to live in components or use factory functions if locale needs to change for localization

/**
 * Used to format numbers to currency strings
 * e.g. 2000.15 => '$2,000.15'
 */
export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

/**
 * Used to format dates to a medium date string
 * e.g. new Date('2019-01-02') => 'Jan 2, 2019'
 */
// Note: this will format to UTC
export const dateFormatter = new Intl.DateTimeFormat('en', {
  dateStyle: 'medium',
});
