/**
 * Excel export utilities
 * Uses SheetJS (xlsx) library for Excel generation
 */

/**
 * Convert array to Excel workbook
 * Note: This is a placeholder. In production, use 'xlsx' library:
 * npm install xlsx
 * import * as XLSX from 'xlsx';
 */
export function exportToExcel<T extends Record<string, unknown>>(
  data: T[],
  filename: string = 'export.xlsx',
  options: {
    sheetName?: string;
    headers?: string[];
  } = {}
): void {
  if (typeof window === 'undefined') return;

  // This is a simplified version. For production, use the xlsx library
  console.warn(
    'Excel export requires xlsx library. Install it with: npm install xlsx'
  );

  const { sheetName = 'Sheet1', headers } = options;

  // Fallback: Convert to CSV and suggest user to save as Excel
  const csvData = convertToCSV(data, headers);
  const blob = new Blob([csvData], {
    type: 'application/vnd.ms-excel;charset=utf-8;',
  });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename.replace(/\.xlsx$/, '.csv'));
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function convertToCSV<T extends Record<string, unknown>>(
  data: T[],
  headers?: string[]
): string {
  const cols = headers || Object.keys(data[0] || {});
  const rows = [cols.join(',')];

  for (const item of data) {
    const row = cols.map((col) => {
      const value = item[col];
      if (value === null || value === undefined) return '';
      const str = String(value);
      return str.includes(',') ? `"${str}"` : str;
    });
    rows.push(row.join(','));
  }

  return rows.join('\n');
}

/**
 * Production-ready Excel export using xlsx library
 * Uncomment when xlsx is installed
 */
/*
import * as XLSX from 'xlsx';

export function exportToExcel<T extends Record<string, unknown>>(
  data: T[],
  filename: string = 'export.xlsx',
  options: {
    sheetName?: string;
    headers?: string[];
  } = {}
): void {
  const { sheetName = 'Sheet1', headers } = options;

  // Create worksheet
  const ws = XLSX.utils.json_to_sheet(data, {
    header: headers,
  });

  // Create workbook
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);

  // Generate Excel file and trigger download
  XLSX.writeFile(wb, filename);
}

export function exportMultipleSheets(
  sheets: Array<{
    name: string;
    data: Record<string, unknown>[];
    headers?: string[];
  }>,
  filename: string = 'export.xlsx'
): void {
  const wb = XLSX.utils.book_new();

  for (const sheet of sheets) {
    const ws = XLSX.utils.json_to_sheet(sheet.data, {
      header: sheet.headers,
    });
    XLSX.utils.book_append_sheet(wb, ws, sheet.name);
  }

  XLSX.writeFile(wb, filename);
}
*/