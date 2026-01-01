# 🗺️ InterviewAtlas

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)

**Navigate your job application journey with confidence.**

InterviewAtlas is an open-source platform that provides detailed, crowd-sourced insights into company hiring processes. From initial screenings to technical challenges, we help candidates understand exactly what to expect at each stage.

🔗 **[Live Demo](https://lovable.dev/projects/ebc3c9df-ebe5-47ad-b575-3e25737ab20e)**

---

## ✨ Features

- 📋 **Detailed Process Breakdowns** - Stage-by-stage hiring process information
- ⏱️ **Duration Estimates** - Know how long each stage typically takes
- 💻 **Technical Challenge Details** - View actual coding challenges and requirements
- 🏢 **Multiple Companies** - Growing database of company hiring processes
- 🌙 **Dark Mode Support** - Easy on the eyes, day or night
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/UsmanBuk/interview-atlas.git

# Navigate to the project directory
cd interview-atlas

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── CompanyCard.tsx  # Company preview card
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Page footer
│   └── ProcessStage.tsx # Hiring stage display
├── data/
│   └── hiringData.ts    # 📌 Company hiring data (contribute here!)
├── pages/               # Route pages
│   ├── Index.tsx        # Landing page
│   ├── WelcomeHome.tsx  # Home content
│   ├── CompaniesPage.tsx
│   ├── CompanyDetailPage.tsx
│   └── MonzoCodePage.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── index.css           # Global styles & design tokens
```

---

## 📊 Data Structure

Each company hiring process follows this TypeScript structure:

```typescript
interface HiringEntry {
  id: string;           // URL-friendly unique identifier
  company: string;      // Company name
  role: string;         // Job role/title
  overview: string;     // Brief description of the process
  process: ProcessStage[];
}

interface ProcessStage {
  stageName: string;
  description: string;
  expectedDuration: string;
  format: string;       // e.g., "Video call", "On-site"
  techTask?: TechTask;  // Optional technical challenge
}

interface TechTask {
  taskName: string;
  platform: string;
  duration: string;
  description: string;
  link?: string;        // Link to code/resources page
}
```

---

## 🤝 Contributing

We welcome contributions! Whether you've been through an interview process and want to share your experience, or you want to improve the platform itself, we'd love your help.

**Ways to contribute:**
- 🏢 **Add a new company** - Share your interview experience
- 🐛 **Report bugs** - Help us improve
- ✨ **Request features** - Suggest new ideas
- 🔧 **Submit PRs** - Fix issues or add features

👉 **Please read our [Contributing Guide](CONTRIBUTING.md) before getting started.**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 18](https://reactjs.org/) | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [Vite](https://vitejs.dev/) | Build Tool |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [shadcn/ui](https://ui.shadcn.com/) | Component Library |
| [React Router](https://reactrouter.com/) | Routing |
| [TanStack Query](https://tanstack.com/query) | Data Fetching |

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 Community

- 🐛 [Report Issues](https://github.com/UsmanBuk/interview-atlas/issues)
- 💡 [Request Features](https://github.com/UsmanBuk/interview-atlas/issues/new?template=feature_request.md)
- 🏢 [Add a Company](https://github.com/UsmanBuk/interview-atlas/issues/new?template=new_company.md)

---

<p align="center">
  Made with ❤️ by the InterviewAtlas community
</p>
