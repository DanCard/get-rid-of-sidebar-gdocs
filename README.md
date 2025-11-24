# Google Docs Sidebar Hider

A Firefox extension that automatically hides the tab and outline sidebar in Google Docs.

## Installation

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" in the left sidebar
3. Click "Load Temporary Add-on"
4. Navigate to this directory and select the `manifest.json` file
5. The extension is now installed

## Usage

The extension works automatically. When you open or create a Google Doc, the sidebar will be hidden automatically.

## Making it Permanent

Temporary extensions are removed when Firefox restarts. To make it permanent:

1. Package the extension:
   - Zip the `manifest.json` and `content.js` files together
   - Rename the zip file to have a `.xpi` extension

2. Sign the extension:
   - Go to https://addons.mozilla.org/developers/
   - Create an account if needed
   - Submit your extension for signing
   - Once signed, you can install it permanently

## Files

- `manifest.json` - Extension configuration
- `content.js` - Script that hides the sidebar
- `README.md` - This file
