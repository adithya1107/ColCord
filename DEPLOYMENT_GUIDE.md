# ColCord Careers Deployment Guide

## Google Apps Script Setup

### 1. Create a New Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the following:

```javascript
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
```

### 2. Create a Google Spreadsheet

1. Create a new Google Spreadsheet
2. Copy the spreadsheet URL
3. In your Google Apps Script, go to Resources > Libraries > Connect to a Google Spreadsheet
4. Or manually link by noting the spreadsheet ID from the URL

### 3. Deploy the Script

1. Click on "Deploy" > "New Deployment"
2. Choose type: "Web app"
3. Set execution as: "Me" 
4. Who has access: "Anyone, even anonymous"
5. Click "Deploy"
6. Copy the web app URL

### 4. Update Server Configuration

1. Update the `server/index.js` file:
   - Replace `YOUR_SCRIPT_ID_HERE` with your actual Google Apps Script web app URL
   
2. Or set the environment variable:
   ```bash
   export GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/AKfycbxnvetjk20VM7bt231-I6Na5EsKcVnPEaftevkKbsai/dev"
   ```

## Local Development Setup

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install server dependencies
cd server
npm install
```

### 2. Start Development Servers

```bash
# Terminal 1: Start the frontend
npm run dev

# Terminal 2: Start the proxy server
cd server
node index.js
```

### 3. Environment Variables

Create a `.env` file in the root directory:
```
VITE_API_URL=http://localhost:3001/apply
```

Create a `.env` file in the `server` directory:
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxnvetjk20VM7bt231-I6Na5EsKcVnPEaftevkKbsai/dev
PORT=3001
```

## Features

### Updated Careers Page Features:

1. **Enhanced Form Validation**
   - Email format validation
   - Phone number validation
   - Required field validation
   - Real-time feedback

2. **Improved College Search**
   - Searchable dropdown with 500+ Indian colleges
   - Auto-complete functionality
   - Fuzzy search support

3. **Better Error Handling**
   - Clear error messages
   - Retry mechanisms
   - Fallback contact information

4. **Data Structure**
   - Each job creates its own sheet in the Google Spreadsheet
   - Consistent column headers: Timestamp, Job ID, Job Title, Name, Email, Phone, College, Branch, Year
   - Automatic timestamp recording

### Application Flow:

1. User clicks "Apply" on a job listing
2. Modal opens with pre-filled job information
3. User fills in personal details
4. Form validates input client-side
5. Data is sent to the proxy server
6. Proxy server forwards to Google Apps Script
7. Google Apps Script creates/updates the appropriate sheet
8. Success/error response is displayed to user

## Deployment to Production

### Frontend (Vercel/Netlify):

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder

3. Set environment variables:
   - `VITE_API_URL`: Your production server URL

### Backend (Railway/Heroku/DigitalOcean):

1. Deploy the `server` directory

2. Set environment variables:
   - `GOOGLE_SCRIPT_URL`: Your Google Apps Script web app URL
   - `PORT`: Port number (usually set automatically)

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Ensure Google Apps Script is deployed with "Anyone, even anonymous" access

2. **Form Submission Fails**: Check that the Google Apps Script URL is correct and accessible

3. **Data Not Appearing**: Verify the spreadsheet is properly linked to the Apps Script

4. **Development Issues**: Ensure both frontend and backend servers are running on different ports

### Testing the Setup:

1. Test the Google Apps Script directly by visiting the URL
2. Test the proxy server: `curl -X POST http://localhost:3001/apply -d "name=Test&email=test@example.com"`
3. Test the full flow through the frontend form

## Security Considerations

1. **Data Privacy**: The form collects personal information - ensure compliance with privacy laws
2. **Rate Limiting**: Consider implementing rate limiting on the server
3. **Input Sanitization**: The Google Apps Script should be safe from injection attacks
4. **Access Control**: Regularly review who has access to the Google Spreadsheet

## Monitoring

1. **Google Apps Script Logs**: Check execution logs in the Apps Script editor
2. **Server Logs**: Monitor the proxy server for errors and performance
3. **Application Metrics**: Track form submission rates and success/failure ratios
