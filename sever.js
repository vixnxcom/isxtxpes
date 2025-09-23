const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 8080;

// Enable CORS for all origins (allows LAN access)
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Serve React app for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server and bind to all network interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Secretary access: http://localhost:${PORT}`);
  console.log(`👨‍💼 Boss access: http://[YOUR-IP]:${PORT}`);
  console.log(`\n🔄 Both users will see the same data in real-time!`);
  console.log(`\n📋 To find your IP address:`);
  console.log(`   Windows: ipconfig | Mac/Linux: ifconfig`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Server shutting down...');
  process.exit(0);
});