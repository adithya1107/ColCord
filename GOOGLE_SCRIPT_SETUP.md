# Google Apps Script Setup Guide

This guide will help you set up Google Apps Script to handle career form submissions.

## Step 1: Create a Google Apps Script Project

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the code from `google-apps-script.js` in this repository

## Step 2: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "ColCord Career Applications" (or any name you prefer)
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 3: Link the Script to the Spreadsheet

1. In your Google Apps Script project, click on "Resources" → "Libraries"
2. Or go to the spreadsheet and click "Extensions" → "Apps Script"
3. Make sure the script is bound to the correct spreadsheet

## Step 4: Deploy the Script

1. In the Apps Script editor, click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click "Deploy"
5. Copy the web app URL (it will look like: `https://script.google.com/macros/s/SCRIPT_ID/exec`)

## Step 5: Configure Your Application

1. Create a `.env` file in the `server` directory with:
   ```
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
   PORT=3001
   ```

2. Or set the environment variable when running the server:
   ```bash
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec npm start
   ```

## Step 6: Test the Setup

1. Start the server:
   ```bash
   cd server
   npm install
   npm start
   ```

2. Start the frontend:
   ```bash
   npm install
   npm run dev
   ```

3. Go to the careers page and try submitting a test application

## Troubleshooting

### Common Issues:

1. **"Submission failed" error**: 
   - Check that the Google Script URL is correct
   - Verify the script is deployed as a web app with "Anyone" access
   - Check the server logs for detailed error messages

2. **CORS errors**:
   - Make sure you're using the proxy server (localhost:3001)
   - Don't try to call Google Apps Script directly from the frontend

3. **Script not receiving data**:
   - Verify the script is bound to the correct spreadsheet
   - Check that the script has permission to access the spreadsheet

4. **Permission errors**:
   - Make sure the script is deployed with "Execute as: Me"
   - Grant necessary permissions when prompted

### Testing the Google Script Directly:

You can test your Google Apps Script directly by visiting the web app URL in your browser. It should return `{"status":"ok"}`.

### Server Logs:

Check the server console for detailed logs about:
- Received form data
- Google Script URL being used
- Response from Google Script
- Any errors that occur

## Security Notes

- The Google Apps Script is set to allow access from anyone, which is necessary for the web app to work
- Form data is stored in your Google Spreadsheet
- Consider implementing additional validation in the Google Apps Script if needed
