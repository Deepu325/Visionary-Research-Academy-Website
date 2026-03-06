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

const SHEET_ID   = 'YOUR_GOOGLE_SHEET_ID'; // ← Replace this
const SHEET_NAME = 'Feedbacks';             // Tab name (create it in your sheet)

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss    = SpreadsheetApp.openById(SHEET_ID);
    let sheet   = ss.getSheetByName(SHEET_NAME);

    // Auto-create sheet + headers on first run
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Name', 'Academic Level', 'Rating', 'Feedback']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
    }

    sheet.appendRow([
      data.time    || new Date().toLocaleString(),
      data.name    || '',
      data.role    || '',
      data.rating  || '',
      data.comment || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Health-check GET endpoint
function doGet() {
  return ContentService
    .createTextOutput('VRA Feedback Script is running ✓')
    .setMimeType(ContentService.MimeType.TEXT);
}
