/**
 * Visionary Research Academy — Feedback Sheet Logger
 * ====================================================
 * Paste this script in Google Apps Script (script.google.com),
 * then deploy as a Web App with access = "Anyone".
 *
 * SETUP STEPS:
 * 1. Open https://script.google.com
 * 2. Click "New project"
 * 3. Paste this entire file
 * 4. Replace SHEET_ID below with your Google Sheet's ID
 *    (found in the URL: docs.google.com/spreadsheets/d/SHEET_ID/edit)
 * 5. Click Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web App URL and paste into SuccessStories.jsx → GOOGLE_SCRIPT_URL
 */

const SHEET_ID   = 'YOUR_GOOGLE_SHEET_ID';
const SHEET_NAME = 'Submissions'; // Combined sheet name

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss   = SpreadsheetApp.openById(SHEET_ID);
    let sheet  = ss.getSheetByName(SHEET_NAME);

    // Auto-create sheet if missing
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // Get current headers or create them
    let headers = sheet.getRange(1, 1, 1, sheet.getLastColumn() || 1).getValues()[0];
    if (headers[0] === "") {
        headers = ['time']; // Start with time
    }

    // Identify new keys in incoming data that aren't headers yet
    const dataKeys = Object.keys(data);
    dataKeys.forEach(key => {
      if (headers.indexOf(key) === -1) {
        headers.push(key);
      }
    });

    // Write headers back (in case any were added)
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');

    // Map data to header positions
    const newRow = headers.map(header => data[header] || "");
    sheet.appendRow(newRow);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.message })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('VRA Submission Script is running ✓').setMimeType(ContentService.MimeType.TEXT);
}
