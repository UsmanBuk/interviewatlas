# Contributing to InterviewAtlas

First off, thank you for considering contributing to InterviewAtlas! 🎉

This project thrives on community contributions. Whether you're sharing your interview experience or improving the codebase, every contribution helps job seekers prepare better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Adding a New Company](#adding-a-new-company)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Submitting Code Changes](#submitting-code-changes)
- [Development Guidelines](#development-guidelines)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

By participating in this project, you agree to maintain a welcoming and inclusive environment. Be respectful, constructive, and patient with others.

---

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/interview-atlas.git
   cd interview-atlas
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the dev server**:
   ```bash
   npm run dev
   ```
5. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## How to Contribute

### 🏢 Adding a New Company

This is the most valuable contribution! Share your interview experience to help others.

#### Step 1: Edit the Data File

Open `src/data/hiringData.ts` and add a new entry to the `hiringData` array:

```typescript
{
  id: "company-name-role",  // URL-friendly, lowercase, hyphenated
  company: "Company Name",
  role: "Job Title",
  overview: "Brief description of the overall hiring process and what makes it unique.",
  process: [
    {
      stageName: "Stage Name",
      description: "Detailed description of what happens in this stage...",
      expectedDuration: "30 minutes",
      format: "Video call",
      // Optional: Add technical task details
      techTask: {
        taskName: "Challenge Name",
        platform: "LeetCode / HackerRank / Take-home",
        duration: "2 hours",
        description: "Description of the technical challenge...",
        link: "/company/company-name-role/code"  // Optional: link to code page
      }
    },
    // Add more stages...
  ]
}
```

#### Step 2: Guidelines for Good Entries

- ✅ **Be factual** - Share what actually happened, not speculation
- ✅ **Be specific** - Include duration, format, and topics covered
- ✅ **Be helpful** - Add tips that would help candidates prepare
- ✅ **Be respectful** - Don't share confidential information or violate NDAs
- ❌ **Don't include** - Interviewer names, proprietary questions, or confidential materials

#### Step 3: Adding Code Challenges (Optional)

If the process includes a coding challenge you can share:

1. Create a new page in `src/pages/` (use `MonzoCodePage.tsx` as a template)
2. Add the route in `src/App.tsx`
3. Link to it from the `techTask.link` field

### 🐛 Reporting Bugs

Found a bug? Please [open an issue](https://github.com/YOUR_USERNAME/interview-atlas/issues/new?template=bug_report.md) with:

- Clear title describing the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/device information

### ✨ Suggesting Features

Have an idea? [Open a feature request](https://github.com/YOUR_USERNAME/interview-atlas/issues/new?template=feature_request.md) with:

- Clear description of the feature
- Why it would be useful
- Any implementation ideas (optional)

### 🔧 Submitting Code Changes

1. Ensure your code follows our style guidelines
2. Test your changes locally
3. Update documentation if needed
4. Submit a pull request

---

## Development Guidelines

### Code Style

- **TypeScript** - Use proper types, avoid `any`
- **React** - Functional components with hooks
- **Tailwind** - Use design tokens from `index.css`, avoid hardcoded colors
- **Components** - Keep them small and focused

### File Naming

- Components: `PascalCase.tsx` (e.g., `CompanyCard.tsx`)
- Utilities: `camelCase.ts` (e.g., `utils.ts`)
- Pages: `PascalCase.tsx` (e.g., `CompaniesPage.tsx`)

### Commit Messages

Use clear, descriptive commit messages:

```
feat: add Google hiring process data
fix: correct duration display on mobile
docs: update contribution guidelines
style: improve card hover animations
```

---

## Pull Request Process

1. **Update your fork** with the latest from main:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Open a Pull Request** on GitHub with:
   - Clear title describing the change
   - Description of what and why
   - Link to related issue (if applicable)
   - Screenshots for UI changes

4. **Address review feedback** promptly

5. **Celebrate** when merged! 🎉

---

## Questions?

Feel free to open an issue for any questions about contributing. We're here to help!

---

Thank you for helping make InterviewAtlas better for everyone! 🙏
