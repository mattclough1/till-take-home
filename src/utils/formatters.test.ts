import { currencyFormatter, dateFormatter } from './formatters';

describe('currencyFormatter', () => {
  it('should have a "format" method', () => {
    expect(currencyFormatter).toHaveProperty('format');
    expect(currencyFormatter.format).toBeInstanceOf(Function);
  });

  it('should format numbers to dollar amounts with cents and commas', () => {
    expect(currencyFormatter.format(0)).toEqual('$0.00');
    expect(currencyFormatter.format(100)).toEqual('$100.00');
    expect(currencyFormatter.format(1000000)).toEqual('$1,000,000.00');
    expect(currencyFormatter.format(1000.67)).toEqual('$1,000.67');
  });

  it('should round to the cent when there are more than 2 decimal places', () => {
    expect(currencyFormatter.format(1000.6766666)).toEqual('$1,000.68');
    expect(currencyFormatter.format(1000.671)).toEqual('$1,000.67');
  });

  it('will return a $NaN string when the value passed is not a number', () => {
    expect(currencyFormatter.format('test' as unknown as number)).toEqual(
      '$NaN'
    );
    expect(currencyFormatter.format(undefined as unknown as number)).toEqual(
      '$NaN'
    );
  });
});

describe('dateFormatter', () => {
  it('should format a date object to "medium" format', () => {
    const date = new Date('2022-09-01');
    expect(dateFormatter.format(date)).toEqual('Sep 1, 2022');
  });
});
