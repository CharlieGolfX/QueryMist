const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ollamaAPI', {
    sendPromptStream: (prompt) => ipcRenderer.send('send-prompt-stream', prompt),
    stopGenerating: () => ipcRenderer.send('stop-ollama-stream'),
    onStream: (callback) => ipcRenderer.on('ollama-stream', (event, data) => callback(data)),
    onStop: (callback) => ipcRenderer.on('ollama-stopped', callback)
});