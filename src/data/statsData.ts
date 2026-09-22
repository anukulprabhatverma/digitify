export interface AgencyStat {
  id: string;
  label: string;
  description: string;
  // EDITABLE CONFIGURATION:
  // Set numericValue to your verified agency number (e.g. 25) to animate from 0 -> 25.
  // When set to null, it displays the displayPlaceholder text (e.g. "[XX]+").
  numericValue: number | null;
  displayPlaceholder: string;
  prefix?: string;
  suffix: string;
}

// EDITABLE PLACEHOLDERS:
// Replace the values below with your verified figures whenever ready.
// The counter automatically animates from 0 to numericValue when scrolled into view.
export const statsData: AgencyStat[] = [
  {
    id: 'active-clients',
    label: 'Active Clients',
    description: 'Brands partnered with across strategy and execution',
    numericValue: 24, // Change to your real number or set to null to display placeholder
    displayPlaceholder: '[XX]+',
    suffix: '+',
  },
  {
    id: 'projects-delivered',
    label: 'Projects Delivered',
    description: 'Digital builds, brand identities and campaigns',
    numericValue: 48, // Change to your real number or set to null to display placeholder
    displayPlaceholder: '[XX]+',
    suffix: '+',
  },
  {
    id: 'core-services',
    label: 'Core Services',
    description: 'Integrated branding, digital, and media practices',
    numericValue: 6, // 6 core services defined in servicesData
    displayPlaceholder: '[XX]',
    suffix: '',
  },
  {
    id: 'client-satisfaction',
    label: 'Client Satisfaction',
    description: 'Long-term collaborative partnerships and retention',
    numericValue: 98, // Change to your real number or set to null to display placeholder
    displayPlaceholder: '[XX]%',
    suffix: '%',
  },
];
