# Semblance: PDF Summarizer
DenseResearch™ talent pipeline

Semblance is an open-source project aimed at building a PDF summarizer. The goal is to provide users with a user-friendly web interface where they can upload PDF files, which will then be processed by an AI model to generate concise summaries.

## Features

- **User Interface (UI)**:
  - A clean and intuitive UI for uploading PDF files.
  - Styling using HTML and CSS.
  - JavaScript to handle form submission and interaction.

- **Server Backend**:
  - An Express.js server to handle file uploads.
  - Integration with an AI model (PDF summarization).

- **AI Model**:
  - The AI model (not included in this repository) should read uploaded PDFs and generate summaries.
  - You can use existing NLP libraries or build a custom model.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/garyhartwelldinmore/Semblance.git
   cd Semblance
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Server**:
   ```bash
   node server.js
   ```

4. **Access the UI**:
   Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `index.html`: The main HTML file containing the UI.
- `style.css`: CSS file for styling the UI.
- `server.js`: Express.js server handling file uploads.
- `semblance.py`: Placeholder for the AI model (you need to implement this).

## Usage

1. **Upload PDFs**:
   - Visit the UI in your browser.
   - Click the "Choose File" button to select a PDF.
   - Click "Upload PDF."

2. **Server-side Handling**:
   - The server receives the uploaded PDF.
   - It should save the file temporarily.
   - Spawn a child process to run `semblance.py`.

3. **AI Model (summarize_pdf.py)**:
   - Read the PDF content.
   - Generate a summary (e.g., using NLP techniques).
   - Print the summary to stdout.

4. **Display Summary**:
   - The server captures the summary from stdout.
   - Send the summary back to the client-side JavaScript.
   - Display the summary in a separate popup window.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
