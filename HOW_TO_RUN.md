# How to Run the Credify Project

## Current System Status

- Node.js version: v18.19.1
- npm version: 10.2.4
- Required Node.js version for Next.js: >=20.9.0

## Steps to Run the Project

### Option 1: Upgrade Node.js (Recommended)

1. **Download and Install Node.js v20.9.0 or higher**
   - Visit [nodejs.org](https://nodejs.org/)
   - Download the LTS version (v20.x or higher)
   - Install it on your system

2. **Verify Installation**
   ```bash
   node --version
   npm --version
   ```

3. **Install Project Dependencies**
   ```bash
   npm install
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

5. **Access the Application**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Option 2: Use Node Version Manager (nvm) - Windows

1. **Install nvm-windows**
   - Download nvm-setup.exe from [nvm-windows releases](https://github.com/coreybutler/nvm-windows/releases)
   - Install it on your system

2. **Install and Use Node.js v20.x**
   ```bash
   nvm install 20
   nvm use 20
   ```

3. **Verify Version**
   ```bash
   node --version
   ```

4. **Install Dependencies and Run**
   ```bash
   npm install
   npm run dev
   ```

### Option 3: Use Docker (If Available)

If you have Docker installed, you can run the project using a Node.js 20 container:

1. **Create a Dockerfile** (if not already present):
   ```dockerfile
   FROM node:20
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   EXPOSE 3000
   CMD ["npm", "run", "dev"]
   ```

2. **Build and Run**
   ```bash
   docker build -t credify .
   docker run -p 3000:3000 credify
   ```

## Project Structure

The project is organized as follows:
```
credify/
├── components/           # Reusable UI components
├── pages/               # Next.js pages
│   ├── api/             # API routes
│   ├── dashboard/       # Role-specific dashboards
│   ├── std/             # Public student profiles
│   └── ...              # Other pages
├── styles/              # Global styles
├── utils/               # Utility functions and mock data
└── ...                  # Configuration files
```

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm start` - Runs the built app in production mode

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_SITE_URL=http://localhost:3000
AI_VERIFICATION_API_KEY=your_api_key
```

## Troubleshooting

1. **Node.js Version Issues**
   - Ensure you're using Node.js v20.9.0 or higher
   - Use `node --version` to check your version

2. **Dependency Installation Issues**
   - Delete `node_modules` folder and `package-lock.json`
   - Run `npm install` again

3. **Port Conflicts**
   - The app runs on port 3000 by default
   - Change the port by setting the `PORT` environment variable

4. **Build Errors**
   - Check the terminal output for specific error messages
   - Ensure all dependencies are properly installed

## Deployment

This project is configured for deployment on Vercel:
1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Vercel will automatically deploy your application

For other deployment platforms, refer to their specific documentation for Next.js applications.