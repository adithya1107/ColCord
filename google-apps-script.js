// Google Apps Script Code for ColCord Careers Form
// Copy this entire code to your Google Apps Script project

function doGet(e){
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e){
  try {
    var data = {};
    if (e.postData && e.postData.type && e.postData.type.indexOf('application/json') !== -1) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter || {};
    }
    var ss = SpreadsheetApp.getActive();
    var sheetName = (data.jobTitle || data.jobId || 'Unknown').toString();
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
    if (sheet.getLastRow() === 0) sheet.appendRow(['Timestamp','Job ID','Job Title','Name','Email','Phone','College','Branch','Year']);
    sheet.appendRow([new Date(), data.jobId||'', data.jobTitle||'', data.name||'', data.email||'', data.phone||'', data.college||'', data.branch||'', data.year||'']);
    return ContentService.createTextOutput(JSON.stringify({ status:'ok' })).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ status:'error', message: err.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
