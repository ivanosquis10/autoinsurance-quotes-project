export const BRANDS = [
  {
    id: 1,
    name: 'European',
  },
  {
    id: 2,
    name: 'American',
  },
  {
    id: 3,
    name: 'Asian',
  },
];

// Codigo para obtener una lista con los ultimos años
const MAXYEAR = new Date().getFullYear(); // 2023
export const YEARS = Array.from(
  new Array(20),
  (value, index) => MAXYEAR - index
);

export const PLANS = [
  {
    id: 1,
    name: 'Basic',
  },
  {
    id: 2,
    name: 'Premium',
  },
];
