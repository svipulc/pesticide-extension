# Pesticide Extension

The Pesticide Extension is a browser tool that adds visible outlines to every element on a webpage to help visualize the structure and layout of the page.

## Installation

To install and build the Pesticide Extension on your local system, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/pesticide-extension.git
   ```
   ```
   cd pesticide-extension
   ```

## Install dependencies:
  Make sure you have Node.js and npm installed. Then, run:
  ```
  npm install
  ```
  Build the extension:
  Use Vite to build the extension:
  ```
  npm run build
  ```

## Usage
  Once you have built the extension, you can load it into your browser (specific instructions may vary by browser):
   
  - **Google Chrome** :
    - Open the Extension Management page by navigating to `chrome://extensions`.
    - `Enable Developer Mode` by clicking the toggle switch next to Developer mode.
    - Click the `Load unpacked` button and select the dist directory within your cloned repository.
        
  - **Mozilla Firefox** :
    - Type `about:debugging` in the address bar.
    - Click This `Firefox` on the left sidebar.
    - Click `Load Temporary Add-on` and select any file in your extension's directory (manifest.json in the dist folder).

## Features
  - Adds outlines to every HTML element on a webpage.
  - Helps in understanding the structure and layout of the page.
  - Built with React, Vite, and TypeScript for modern development practices.
  - Lightweight and easy to use.
