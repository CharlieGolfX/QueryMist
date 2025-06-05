# QueryMist

QueryMist is a cross-platform Electron-based chat UI for interacting with local Ollama models, featuring live streaming responses, code and inline code syntax highlighting (via highlight.js), and a modern dark mode chat interface.

## Requirements

- [Ollama](https://ollama.com/) installed and running (`ollama serve`)
- The model [`steamdj/mistral-cpu-only`](https://ollama.com/library/steamdj/mistral-cpu-only`) pulled (`ollama pull steamdj/mistral-cpu-only`)
- [Node.js](https://nodejs.org/) (for Electron)
- highlight.js (included locally)

## Setup

1. **Clone this repository:**
    ```sh
    git clone https://github.com/yourusername/QueryMist.git
    cd QueryMist
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Ensure Ollama is running:**
    ```sh
    ollama serve
    # or just `ollama` if it starts the server by default
    ```

4. **Start QueryMist:**
    ```sh
    npm start
    ```

## Usage

- Type your prompt in the input box and press Enter.
- Responses stream live, with code blocks and inline code highlighted.
- Click the round stop button to interrupt a response.

## License

QueryMist is released under the MIT License.

### Included Libraries

This project includes [highlight.js](https://highlightjs.org/) for syntax highlighting.  
**highlight.js is distributed under the BSD-3-Clause License.**  
If you redistribute QueryMist, you must comply with the BSD-3-Clause License for highlight.js, which is included below:

#### highlight.js BSD-3-Clause License

Copyright (c) 2006, Ivan Sagalaev  
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- Neither the name of highlight.js nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.