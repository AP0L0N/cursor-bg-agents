# React Login Application

A simple React application with authentication functionality and a modern, responsive design.

## Features

- **Authentication System**: Simple login with demo credentials
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional interface with gradients and animations
- **React Hooks**: Uses modern React patterns with functional components
- **Form Validation**: Input validation and error handling
- **Loading States**: Visual feedback during authentication

## Demo Credentials

- **Username**: `admin`
- **Password**: `password`

## Project Structure

```
src/
├── components/
│   ├── Login.js          # Login form component
│   ├── Login.css         # Login styles
│   ├── Dashboard.js      # Main dashboard component
│   └── Dashboard.css     # Dashboard styles
├── App.js                # Main application component
├── App.css               # App styles
├── index.js              # React entry point
└── index.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Usage

1. **Login**: Use the demo credentials (admin/password) to log in
2. **Dashboard**: After login, you'll see a dashboard with user information
3. **Logout**: Click the logout button to return to the login screen

## Customization

### Adding Real Authentication

To integrate with a real backend:

1. Replace the mock authentication in `src/components/Login.js`
2. Update the `handleSubmit` function to call your API
3. Add proper error handling and token management

### Styling

- Modify CSS files in `src/` and `src/components/` directories
- Update color scheme by changing CSS variables
- Add or remove components as needed

### Adding Features

- Add new components in the `src/components/` directory
- Extend the dashboard with additional functionality
- Implement routing with React Router for multiple pages

## Technologies Used

- **React** (18.2.0) - Frontend framework
- **React DOM** (18.2.0) - React rendering
- **React Scripts** (5.0.1) - Build tools and development server
- **CSS3** - Styling with modern features (Grid, Flexbox, Gradients)

## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.