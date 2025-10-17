# Backend Wizards Stage 0 - Profile Endpoint 🚀

A dynamic RESTful API endpoint that returns user profile information along with random cat facts fetched from an external API. Built with Node.js, Express, and TypeScript.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Testing](#testing)
- [Contributing](#contributing)

---

## ✨ Features

- ✅ **Dynamic Profile Endpoint** - Returns user info with ISO 8601 timestamps
- ✅ **Cat Facts Integration** - Fetches real cat facts from external API on every request
- ✅ **Error Handling** - Graceful error handling with fallback messages
- ✅ **CORS Support** - Cross-origin resource sharing enabled
- ✅ **Request Logging** - Built-in logging middleware for debugging
- ✅ **TypeScript** - Full type safety and better development experience
- ✅ **API Timeouts** - 5-second timeout for external API calls
- ✅ **Environment Config** - Environment variables for sensitive data

---

## 🛠️ Tech Stack

- **Runtime**: Node.js (v16+)
- **Framework**: Express.js
- **Language**: TypeScript
- **HTTP Client**: Axios
- **Environment Management**: dotenv
- **Middleware**: CORS
- **External API**: Cat Facts API (https://catfact.ninja)

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control
- A code editor (VS Code recommended)

Verify installation:
```bash
node --version  # Should be v16+
npm --version   # Should be v8+
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/backend-wizards-stage0.git
cd backend-wizards-stage0
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- `express` - Web server framework
- `axios` - HTTP client for API calls
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management
- `typescript` - TypeScript compiler
- `@types/*` - Type definitions for libraries

---

## 🔐 Environment Variables

### Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

### Fill in the `.env` file with your information:

```env
# Server Configuration
PORT=3000

# User Information
USER_EMAIL=your.email@example.com
USER_NAME=Your Full Name
USER_STACK=Node.js/Express/TypeScript

# Optional
NODE_ENV=development
```

### Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | `3000` |
| `USER_EMAIL` | Your email address | `john@example.com` |
| `USER_NAME` | Your full name | `John Doe` |
| `USER_STACK` | Your backend stack | `Node.js/Express/TypeScript` |
| `NODE_ENV` | Environment mode | `development` or `production` |

---

## 🎯 Running Locally

### Development Mode (with hot reload)

```bash
npm run dev
```

### Production Build & Run

```bash
# Build TypeScript to JavaScript
npm run build

# Start the server
npm start
```

### Expected Output

```
Server running on port 3000
Profile endpoint: http://localhost:3000/me
```

---

## 📁 Project Structure

```
backend-wizards-stage0/
├── src/
│   ├── index.ts                 # Main entry point
│   ├── server.ts                # Express app configuration
│   ├── config/
│   │   ├── config.ts            # Configuration management
│   │   └── corOption.ts         # CORS options
│   ├── controller/
│   │   ├── userController.ts    # /me endpoint logic
│   │   └── catApiController.ts  # Cat Facts API integration
│   ├── middleware/
│   │   ├── errorHandler.ts      # Global error handler
│   │   └── logEvents.ts         # Request logging
│   ├── interfaces/
│   │   └── interface.ts         # TypeScript interfaces
│   └── routes/
│       └── meRoutes.ts          # Route definitions
├── node_modules/                # Dependencies
├── package.json                 # Project metadata & scripts
├── package-lock.json            # Dependency lock file
├── tsconfig.json                # TypeScript configuration
├── .env.example                 # Environment template
├── .gitignore                   # Git ignore rules
├── Procfile                     # Deployment configuration
└── README.md                    # This file
```

---

## 📡 API Documentation

### GET /me

Returns user profile information with a dynamic cat fact.

**Endpoint**: `GET http://localhost:3000/me`

**Response Status**: `200 OK`

**Response Headers**:
```
Content-Type: application/json
Access-Control-Allow-Origin: *
```

**Response Body**:
```json
{
  "status": "success",
  "user": {
    "email": "john@example.com",
    "name": "John Doe",
    "stack": "Node.js/Express/TypeScript"
  },
  "timestamp": "2025-10-17T14:30:45.123Z",
  "fact": "Cats have over 230 bones in their bodies, while humans have only 206."
}
```

**Field Descriptions**:
- `status` - Request status ("success" or "error")
- `user.email` - User's email address
- `user.name` - User's full name
- `user.stack` - Backend technology stack
- `timestamp` - Current UTC time in ISO 8601 format
- `fact` - Random cat fact from Cat Facts API

---

### GET /health

Health check endpoint for monitoring server status.

**Endpoint**: `GET http://localhost:3000/health`

**Response Status**: `200 OK`

**Response Body**:
```json
{
  "status": "ok",
  "timestamp": "2025-10-17T14:30:45.123Z"
}
```

---

## ⚠️ Error Handling

### API Failure Scenarios

#### Cat Facts API is Down
If the external API fails, a fallback message is returned:
```json
{
  "status": "success",
  "user": {...},
  "timestamp": "2025-10-17T14:30:45.123Z",
  "fact": "Cats are wonderful creatures full of mystery and charm."
}
```

#### Server Error (500)
```json
{
  "status": "error",
  "message": "Internal server error"
}
```

#### Endpoint Not Found (404)
```json
{
  "status": "error",
  "message": "Endpoint not found"
}
```

### Error Handling Features
- **Timeout Protection**: 5-second timeout for external API calls
- **Graceful Degradation**: Fallback cat fact if API fails
- **Logging**: All errors are logged to console and log files
- **Type Safety**: TypeScript catches many errors at compile time

---

## 🧪 Testing

### Test Locally

```bash
# Start the server
npm run dev

# In another terminal, test the endpoint
curl http://localhost:3000/me

# Pretty print JSON (using jq)
curl http://localhost:3000/me | jq
```

### Test Using Postman/Insomnia

1. Open Postman or Insomnia
2. Create a new GET request
3. URL: `http://localhost:3000/me`
4. Send request
5. Verify response matches the schema

### Automated Testing Example

```bash
# Using curl with header inspection
curl -i http://localhost:3000/me
```

---

## 🚀 Deployment

### Deploy to PXXL

1. **Push to GitHub**:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to PXXL**:
   - Go to [PXXL Dashboard](https://pxxl.app)
   - Connect your GitHub repository
   - Set environment variables (USER_EMAIL, USER_NAME, USER_STACK)
   - Deploy

3. **Get Your API URL**:
```
https://your-app-name.pxxl.app/me
```



---

## 📝 npm Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with auto-reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Start production server |
| `npm run test` | Run tests (if configured) |

---

## 🔍 Debugging

### Enable Verbose Logging

```bash
# Set NODE_ENV to development for detailed logs
NODE_ENV=development npm run dev
```

### Check Logs

```bash
# View real-time logs
tail -f error.log

# View specific logs
grep "error" error.log
```

### Common Issues

| Issue | Solution |
|-------|----------|
| Port already in use | Change PORT in .env or kill process: `lsof -i :3000` |
| Module not found | Run `npm install` again |
| TypeScript errors | Run `npm run build` to see compilation errors |
| API timeout | Check internet connection or increase timeout in config |
| CORS errors | Verify CORS middleware is properly configured |

---

## 📚 Dependencies

### Production Dependencies

- **express** (^4.18.2) - Web framework
- **axios** (^1.6.2) - HTTP client
- **cors** (^2.8.5) - CORS middleware
- **dotenv** (^16.3.1) - Environment variables

### Development Dependencies

- **typescript** (^5.3.3) - TypeScript compiler
- **@types/express** (^4.17.21) - Express type definitions
- **@types/node** (^20.10.6) - Node.js type definitions
- **ts-node** (^10.9.2) - TypeScript node runner

---




## 📞 Support

For issues and questions:

1. Check existing [GitHub Issues](https://github.com/yourusername/backend-wizards-stage0/issues)
2. Create a new issue with detailed description
3. Include error logs and steps to reproduce

---

## 🎓 What I Learned

### Key Takeaways

- **REST API Design** - How to structure endpoints and responses
- **External API Integration** - Consuming third-party APIs with proper error handling
- **TypeScript** - Benefits of type safety in backend development
- **Middleware** - Understanding Express middleware for logging, CORS, and error handling
- **Deployment** - How to deploy Node.js applications to cloud platforms
- **Best Practices** - Code organization, environment configuration, and error handling

---

## 📖 Resources

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Axios Documentation](https://axios-http.com/)
- [Cat Facts API](https://catfact.ninja/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

**Last Updated**: October 17, 2025
**Status**: ✅ Production Ready