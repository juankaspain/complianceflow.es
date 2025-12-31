/**
 * CSV export utilities
 */

/**
 * Convert array of objects to CSV string
 */
export function arrayToCSV<T extends Record<string, unknown>>(
  data: T[],
  options: {
    headers?: string[];
    delimiter?: string;
    includeHeaders?: boolean;
  } = {}
): string {
  const {
    headers = Object.keys(data[0] || {}),
    delimiter = ',',
    includeHeaders = true,
  } = options;

  const escapeCell = (cell: unknown): string => {
    if (cell === null || cell === undefined) return '';
    const str = String(cell);
    // Escape quotes and wrap in quotes if contains delimiter, newline, or quote
    if (str.includes(delimiter) || str.includes('\n') || str.includes('"')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  const rows: string[] = [];

  // Add headers
  if (includeHeaders) {
    rows.push(headers.map(escapeCell).join(delimiter));
  }

  // Add data rows
  for (const item of data) {
    const row = headers.map((header) => escapeCell(item[header]));
    rows.push(row.join(delimiter));
  }

  return rows.join('\n');
}

/**
 * Download CSV file
 */
export function downloadCSV(
  data: string,
  filename: string = 'export.csv'
): void {
  if (typeof window === 'undefined') return;

  const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export array to CSV file
 */
export function exportToCSV<T extends Record<string, unknown>>(
  data: T[],
  filename: string = 'export.csv',
  options?: Parameters<typeof arrayToCSV>[1]
): void {
  const csv = arrayToCSV(data, options);
  downloadCSV(csv, filename);
}

/**
 * Parse CSV string to array of objects
 */
export function parseCSV(
  csv: string,
  options: {
    delimiter?: string;
    hasHeaders?: boolean;
    headers?: string[];
  } = {}
): Record<string, string>[] {
  const { delimiter = ',', hasHeaders = true, headers = [] } = options;

  const lines = csv.split('\n').filter((line) => line.trim());
  if (lines.length === 0) return [];

  let headerRow = headers;
  let dataStartIndex = 0;

  if (hasHeaders && headers.length === 0) {
    headerRow = parseCSVLine(lines[0], delimiter);
    dataStartIndex = 1;
  }

  const result: Record<string, string>[] = [];

  for (let i = dataStartIndex; i < lines.length; i++) {
    const values = parseCSVLine(lines[i], delimiter);
    const row: Record<string, string> = {};

    for (let j = 0; j < headerRow.length; j++) {
      row[headerRow[j]] = values[j] || '';
    }

    result.push(row);
  }

  return result;
}

/**
 * Parse a single CSV line
 */
function parseCSVLine(line: string, delimiter: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++; // Skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === delimiter && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current);
  return result;
}