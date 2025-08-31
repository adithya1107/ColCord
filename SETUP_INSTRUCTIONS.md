# 🚀 ColCord Careers - Complete Setup Instructions

## 📋 Current Status
Your Google Apps Script URL: `https://script.google.com/macros/s/AKfycbxnvetjk20VM7bt231-I6Na5EsKcVnPEaftevkKbsai/dev`

⚠️ **Important**: The `/dev` endpoint suggests this is a test deployment. For production, you'll need the `/exec` endpoint.

## 🔧 Google Apps Script Setup (Step by Step)

### Step 1: Access Your Google Apps Script
1. Go to your script: https://script.google.com/d/AKfycbxnvetjk20VM7bt231-I6Na5EsKcVnPEaftevkKbsai/edit
2. Ensure you have the following code:

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

### Step 2: Create/Link Google Spreadsheet
1. Create a new Google Spreadsheet for job applications
2. Copy the spreadsheet URL
3. In your Apps Script, click the + next to "Libraries" 
4. Or use the script bound to a specific spreadsheet

### Step 3: Deploy as Web App
1. In your Google Apps Script editor, click **"Deploy"** → **"New deployment"**
2. Click the gear icon ⚙️ next to "Type" and select **"Web app"**
3. Fill in the deployment settings:
   - **Description**: "ColCord Careers Form Handler"
   - **Execute as**: "Me (your-email@gmail.com)"
   - **Who has access**: **"Anyone, even anonymous"** ⚠️ This is crucial!
4. Click **"Deploy"**
5. You'll get a URL ending with `/exec` - this is your production URL

### Step 4: Update Your Server Configuration

Once you have the production URL (ending with `/exec`), update the server:

```bash
# In /Volumes/One Touch/CC/ColCord/server/.env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_NEW_SCRIPT_ID/exec
PORT=3001
```

## 🧪 Testing the Setup

### Test 1: Direct Google Apps Script Test
```bash
# This should return {"status":"ok"}
curl -X GET "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```

### Test 2: POST Test with Sample Data
```bash
curl -X POST "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "jobId=test&jobTitle=Test%20Position&name=John%20Doe&email=john@example.com&phone=1234567890&college=Test%20College&branch=CSE&year=3"
```

### Test 3: Local Server Test
```bash
# Start the server
cd "/Volumes/One Touch/CC/ColCord/server"
npm start

# In another terminal, test the proxy
curl -X POST "http://localhost:3001/apply" \
  -H "Content-Type: application/json" \
  -d '{"jobId":"fullstack","jobTitle":"Full Stack Developer Intern","name":"Test User","email":"test@example.com","phone":"+91 9876543210","college":"IIT Bombay","branch":"CSE","year":"3"}'
```

## 🚀 Quick Start Commands

```bash
# 1. Install all dependencies
cd "/Volumes/One Touch/CC/ColCord"
npm install
cd server && npm install && cd ..

# 2. Create environment files
cp .env.example .env
cp server/.env.example server/.env

# 3. Update server/.env with your actual Google Apps Script URL

# 4. Start development servers
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend  
npm run server:dev
```

## 🔍 Troubleshooting

### If you see "Moved Temporarily" error:
- ✅ Ensure the script is deployed as a web app
- ✅ Set access to "Anyone, even anonymous"  
- ✅ Use the `/exec` URL, not `/dev`

### If form submissions fail:
- ✅ Check browser developer tools for network errors
- ✅ Verify the Google Apps Script is receiving data
- ✅ Check Apps Script execution logs

### If data doesn't appear in spreadsheet:
- ✅ Ensure the spreadsheet is properly linked to the script
- ✅ Check for errors in the Apps Script execution logs
- ✅ Verify the script has permission to access the spreadsheet

## 📞 Next Steps

1. **Deploy your Google Apps Script properly** (most important!)
2. **Get the production `/exec` URL**
3. **Update the server configuration**
4. **Test the full flow**
5. **Deploy to production** (Vercel + Railway/Heroku)

Once you have the proper `/exec` URL, everything should work seamlessly! 🎉
