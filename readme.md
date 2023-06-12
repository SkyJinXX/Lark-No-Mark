# Lark-No-Mark

Lark-No-Mark is a JavaScript-based open-source project with the objective of removing watermarks from the Lark team collaboration tool. 

## Main Features

- Utilizes Node.js's `child_process` module to execute Lark application with remote debugging.
- Interacts with the Chrome DevTools Protocol using the `chrome-remote-interface` library, enabling the injection of JavaScript to modify the application's CSS and hide watermark elements.

## Usage

For Windows users, download `index.exe` from the releases section and use it as the entry point to launch Lark. macOS users can build it themselves.

## Extendability

The techniques used in this project, such as interacting with the Chrome DevTools Protocol and injecting JavaScript into an Electron application, can potentially be extended to other Electron applications as well. This opens up opportunities for developers to create custom modifications to their Electron applications.

Feel free to contribute to the project or report any issues you encounter.
