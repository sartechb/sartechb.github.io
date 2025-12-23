/**
 * Format a YYYY-MM date string to "Mon YYYY" format
 * @param yyyymm - Date string in YYYY-MM format (e.g., "2021-07")
 * @returns Formatted date string (e.g., "Jul 2021")
 */
export function formatDate(yyyymm: string): string {
  if (yyyymm === 'Present') {
    return 'Present';
  }

  const [year, month] = yyyymm.split('-');
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const monthIndex = parseInt(month, 10) - 1;
  return `${monthNames[monthIndex]} ${year}`;
}

/**
 * Calculate duration between two YYYY-MM dates
 * @param start - Start date in YYYY-MM format
 * @param end - End date in YYYY-MM format or "Present"
 * @returns Formatted duration string (e.g., "3 yrs 5 mos" or "6 mos")
 */
export function calculateDuration(start: string, end: string): string {
  const startDate = new Date(`${start}-01`);
  const endDate = end === 'Present' ? new Date() : new Date(`${end}-01`);

  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} ${months === 1 ? 'mo' : 'mos'}`;
  }

  if (months === 0) {
    return `${years} ${years === 1 ? 'yr' : 'yrs'}`;
  }

  return `${years} ${years === 1 ? 'yr' : 'yrs'} ${months} ${months === 1 ? 'mo' : 'mos'}`;
}

/**
 * Format a full date range with duration
 * @param start - Start date in YYYY-MM format
 * @param end - End date in YYYY-MM format or "Present"
 * @returns Formatted range string (e.g., "Jul 2021 - Present (3 yrs 5 mos)")
 */
export function formatDateRange(start: string, end: string): string {
  const formattedStart = formatDate(start);
  const formattedEnd = formatDate(end);
  const duration = calculateDuration(start, end);

  return `${formattedStart} - ${formattedEnd} (${duration})`;
}
