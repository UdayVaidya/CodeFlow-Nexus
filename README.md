# Code Flow Nexus

Code Flow Nexus is a real-time collaborative code editor designed to streamline coding sessions, enhance productivity, and facilitate seamless collaboration among developers. With Code Flow Nexus, users can write, share, and edit code in real time, making it ideal for pair programming, coding interviews, and live coding sessions.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-Time Collaboration**: Write, edit, and view code changes in real time.
- **Syntax Highlighting**: Supports multiple programming languages with syntax highlighting.
- **Multiple User Sessions**: Enables multiple users to join and collaborate in the same coding session.
- **Session Management**: Create unique rooms with unique IDs for secure and private sessions.
- **Customizable Editor**: Change themes, fonts, and editor settings to suit your coding preferences.

## Technologies Used

- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js
- **WebSocket**: Socket.IO for real-time updates
- **Database**: MongoDB (or alternative database for session management)
- **Hosting**: Render for backend deployment

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/UdayVaidya/CodeFlow-Nexus.git
    cd CodeFlow-Nexus
    ```

2. **Install dependencies**:
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

4. **Run frontend and backend concurrently**:
    ```bash
    npm run start
    ```

## Environment Variables

To run this project, you will need to add the following environment variables in a `.env` file in the root of the project:

## Usage

1. Open the application in your browser.
2. Create a new session or join an existing session by entering the session ID.
3. Start coding! Your code will be synchronized in real-time across all participants.
4. Customize the editor settings as needed.

## Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeatureName`).
6. Open a pull request.

Please ensure your code adheres to the project's coding style and includes comments/documentation where necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
