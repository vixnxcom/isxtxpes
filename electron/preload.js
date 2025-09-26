// electron-preload.js
// Right now empty, but useful if you later need IPC
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // You can add APIs here later if needed
});
