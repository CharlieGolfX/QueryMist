const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fetch = require('node-fetch') // npm install node-fetch@2

let win

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

let abortController = null;

// Stream prompt from renderer
ipcMain.on('send-prompt-stream', async (event, prompt) => {
    abortController = new AbortController();
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'steamdj/mistral-cpu-only',
                prompt: prompt,
                stream: true
            }),
            signal: abortController.signal
        });

        if (!response.body) {
            win.webContents.send('ollama-stream', 'No response body');
            return;
        }

        let buffer = '';
        for await (const chunk of response.body) {
            buffer += chunk.toString();
            // Ollama streams JSON objects separated by newlines
            let lines = buffer.split('\n');
            buffer = lines.pop(); // last line may be incomplete
            for (const line of lines) {
                if (line.trim()) {
                    try {
                        const data = JSON.parse(line);
                        if (data.response) {
                            win.webContents.send('ollama-stream', data.response);
                        }
                    } catch (e) {
                        // ignore JSON parse errors for incomplete lines
                    }
                }
            }
        }
    } catch (err) {
        if (err.name === 'AbortError') {
            win.webContents.send('ollama-stopped');
        } else {
            win.webContents.send('ollama-stream', 'Error: ' + err.message);
        }
    }
    win.webContents.send('ollama-stopped');
});

ipcMain.on('stop-ollama-stream', () => {
    if (abortController) {
        abortController.abort();
    }
});