export const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  //{ id: 'desktop', label: 'Desktop' },
  { id: 'iot', label: 'IoT' },
  { id: 'small', label: 'Small' }
] as const;

export type CategoryId = (typeof categories)[number]['id'];