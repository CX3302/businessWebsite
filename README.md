# StackAcc Projects

This repository contains two Next.js website projects:

- **Funeral Website** (`funeral/`) - A funeral services website
- **Business Website** (`businessWebsite/`) - A business portfolio website

## Prerequisites

Before running these projects, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CX3302/businessWebsite.git
cd StackAcc
```

### 2. Running the Funeral Website

Navigate to the funeral directory and install dependencies:

```bash
cd funeral
npm install
```

Start the development server:

```bash
npm run dev
```

The funeral website will be available at [http://localhost:3000](http://localhost:3000)

### 3. Running the Business Website

Open a new terminal window/tab, navigate to the businessWebsite directory and install dependencies:

```bash
cd businessWebsite
npm install
```

Start the development server:

```bash
npm run dev
```

The business website will be available at [http://localhost:3001](http://localhost:3001) (or the next available port)

## Project Structure

```
StackAcc/
├── funeral/                 # Funeral services website
│   ├── app/                # Next.js app directory
│   ├── public/             # Static assets
│   ├── package.json        # Dependencies and scripts
│   └── ...
├── businessWebsite/        # Business portfolio website
│   ├── app/                # Next.js app directory
│   ├── public/             # Static assets
│   ├── package.json        # Dependencies and scripts
│   └── ...
└── README.md              # This file
```

## Available Scripts

For both projects, you can run:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Development Notes

- Both projects use Next.js with TypeScript
- Styling is done with Tailwind CSS
- Make sure to run `npm install` in each project directory before starting development
- The `node_modules` directories are excluded from git tracking
- Each project runs on a different port to avoid conflicts

## Production Deployment

To deploy either project:

1. Build the project: `npm run build`
2. Start the production server: `npm start`

Or deploy to platforms like Vercel, Netlify, or your preferred hosting service.

## Troubleshooting

- If you encounter port conflicts, the development server will automatically use the next available port
- Make sure Node.js version is 18 or higher
- Delete `node_modules` and run `npm install` again if you encounter dependency issues
- Check that you're in the correct project directory when running commands

## Contributing

1. Make sure you're on the `v0.0-james` branch
2. Install dependencies for the project you're working on
3. Make your changes
4. Test locally before committing
5. Commit and push your changes

---

For any questions or issues, please check the individual project documentation in their respective directories. 