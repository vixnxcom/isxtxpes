// electron/main.cjs
const { app, shell } = require('electron');
const path = require('path');
const express = require('express');

let server;

function startLocalServer() {
  const expressApp = express();
  const port = 3001; // Use a different port from your dev server
  
  // Serve static files from dist directory
  expressApp.use(express.static(path.join(__dirname, '../dist')));
  
  // Handle client-side routing (for React Router)
  expressApp.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
  
  server = expressApp.listen(port, 'localhost', (err) => {
    if (err) {
      console.error('Failed to start server:', err);
      return;
    }
    console.log(`Local server running at http://localhost:${port}`);
    // Open in default browser
    shell.openExternal(`http://localhost:${port}`);
  });
}

app.whenReady().then(() => {
  if (app.isPackaged) {
    // Production: start local server and open browser
    startLocalServer();
  } else {
    // Development: just open the Vite dev server
    shell.openExternal('http://localhost:5173');
  }
});

app.on('window-all-closed', () => {
  // Close the server when app quits
  if (server) {
    server.close();
  }
  app.quit();
});

// Handle app reactivation (especially on macOS)
app.on('activate', () => {
  if (app.isPackaged) {
    shell.openExternal(`http://localhost:3001`);
  } else {
    shell.openExternal('http://localhost:5173');
  }
});

// Graceful shutdown
process.on('SIGINT', () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  }
});