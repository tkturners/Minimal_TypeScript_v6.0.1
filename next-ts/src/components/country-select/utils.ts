import { countries } from 'src/assets/data';

// ----------------------------------------------------------------------

export function getCountry(inputValue: string) {
  const option = countries.filter(
    (country) => country.label === inputValue || country.code === inputValue
  )[0];

  return { code: option?.code, label: option?.label, phone: option?.phone };
}

// ----------------------------------------------------------------------

export function displayValueByCountryCode(inputValue: string) {
  const option = countries.filter((country) => country.code === inputValue)[0];

  return option.label;
}
