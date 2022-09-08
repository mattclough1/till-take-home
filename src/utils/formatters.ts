// Note: these singleton instances will either need to live in components or use factory functions if locale needs to change for localization

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const dateFormatter = new Intl.DateTimeFormat('en', {
  dateStyle: 'medium',
});
