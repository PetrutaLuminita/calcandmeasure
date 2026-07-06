// Central registry of every tool page. Header nav, Footer, homepage grid,
// and RelatedTools all read from this single list so links stay in sync.
export const tools = [
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    category: 'Everyday Calculators',
    description: 'Find your exact age in years, months, and days from any birth date.',
  },
  {
    slug: 'days-between-dates-calculator',
    name: 'Days Between Dates Calculator',
    category: 'Everyday Calculators',
    description: 'Count the days, weeks, months, or business days between two dates.',
  },
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    category: 'Everyday Calculators',
    description: 'Work out percentages, percentage change, and reverse percentages.',
  },
  {
    slug: 'tip-calculator',
    name: 'Tip Calculator',
    category: 'Everyday Calculators',
    description: 'Calculate a tip and split the bill evenly between any number of people.',
  },
  {
    slug: 'gpa-calculator',
    name: 'GPA Calculator',
    category: 'Everyday Calculators',
    description: 'Work out your weighted grade point average from letter grades and credit hours.',
  },
  {
    slug: 'unit-converter',
    name: 'Unit Converter',
    category: 'Converters',
    description: 'Convert length, weight, volume, and temperature between common units.',
  },
  {
    slug: 'shoe-size-converter',
    name: 'Shoe Size Converter',
    category: 'Converters',
    description: 'Convert shoe sizes between US, UK, EU, and foot length in centimeters.',
  },
  {
    slug: 'ring-size-converter',
    name: 'Ring Size Converter',
    category: 'Converters',
    description: 'Convert ring sizes between US, UK, EU, and internal circumference.',
  },
  {
    slug: 'clothing-size-converter',
    name: 'Clothing Size Converter',
    category: 'Converters',
    description: 'Convert clothing sizes between US, UK, EU, and international sizing.',
  },
  {
    slug: 'cooking-measurement-converter',
    name: 'Cooking Measurement Converter',
    category: 'Converters',
    description: 'Convert cups, tablespoons, and teaspoons of common ingredients to grams and ounces.',
  },
];

export function getTool(slug) {
  return tools.find((t) => t.slug === slug);
}

export function getRelatedTools(currentSlug, count = 3) {
  const current = getTool(currentSlug);
  const sameCategory = tools.filter(
    (t) => t.slug !== currentSlug && t.category === current?.category
  );
  const others = tools.filter(
    (t) => t.slug !== currentSlug && t.category !== current?.category
  );
  return [...sameCategory, ...others].slice(0, count);
}
