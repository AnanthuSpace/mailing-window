
# Mailing Dashboard with Authentication

This project is a React-based mailing dashboard with authentication routes built using ShadCN UI, Tailwind CSS, and Node.js. The dashboard provides a seamless user experience for managing emails, and authentication is implemented using JWT.

## Tech Stack

- **Frontend:** React, ShadCN UI, Tailwind CSS
- **Backend:** Node.js, Express.js
- **State Management:** React Context API
- **Authentication:** JWT (JSON Web Tokens)
- **Storage:** Local/Session Storage
- **Form Handling & Validation:** React Hook Form

## Features

### Mailing Dashboard
- Sidebar navigation with folders like Inbox, Sent, Drafts, Trash
- Mail list view displaying emails with sender, subject, and timestamp
- Detailed email view when selecting an email

### Authentication System
- Sign Up & Sign In pages with form validation
- Users must be authenticated to access the mailing dashboard
- Uses JWT authentication with mock API responses
- Stores authentication state in local/session storage

### Responsive Design
- Fully responsive for mobile, tablet, and desktop

### State Management
- Uses React Context API for handling authentication state

## Project Structure


## Installation & Setup

### Clone the Repository
```sh
git clone https://github.com/AnanthuSpace/mailing-window.git
cd mailing-window
```

### Install Dependencies  

#### Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

#### Backend Setup
```sh
cd backend
npm install
npm run dev
```

## API Endpoints (Mock Data)

| Method | Endpoint        | Description            |
|--------|---------------|------------------------|
| `POST` | `/api/auth` | User registration |
| `POST` | `/api/auth/login` | User login |
| `POST` | `/api/auth/login` | User login |
| `POST`  | `/api/google-signup` | Google Signup |
| `POST`  | `/api/google-signin` |Google Signin |

## Future Enhancements

- Integrate real backend APIs
- Add email notifications
- Implement pagination for emails
- Multi-language support

## License

This project is licensed under the MIT License.

## Author

Developed by Ananthu Mohan
```
