# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site built with React, TypeScript, and Material-UI. Static site deployed to GitHub Pages (sartechb.github.io).

## Commands

### Development
- `npm start` - Dev server at localhost:3000
- `npm run build` - Production build to /build
- `npm test` - Run tests in watch mode

### Linting
- `npm run lint` - Check for lint errors
- `npm run lint:fix` - Auto-fix lint errors

## Architecture

### Routing
React Router with 6 main pages (Home, About, Skills, Experience, Education, Projects). Routes defined in src/App.tsx:74-83.

### Navigation
MainAppBar component (src/components/AppBar.tsx) implements Material-UI drawer navigation. Menu items array at line 101-138 defines navigation structure.

### Theming
Material-UI theme configured in src/App.tsx:46-62 with primary/secondary colors and dark mode support via `prefers-color-scheme` media query.

### Analytics
Google Analytics (react-ga) initialized in src/App.tsx:64 with tracking ID UA-66108476-2. Events tracked for navigation actions.

### Pages
- Home: Class component with rotating descriptions (3-second interval)
- Other pages: Functional components in src/pages/

## Code Style

### TypeScript
- Strict mode enabled
- Target ES6
- No explicit function return types required (rule disabled)

### Linting
ESLint config extends:
- eslint:recommended
- plugin:react/recommended
- plugin:react-hooks/recommended
- plugin:@typescript-eslint/recommended
- plugin:prettier/recommended

### Formatting
Prettier config (.prettierrc):
- 4-space indentation
- Single quotes
- Semicolons required
- ES5 trailing commas

### Pre-commit Hooks
Husky + lint-staged runs prettier and eslint on staged files before commit.

## Git Workflow

- Main branch: `master`
- Development branch: `develop`
- Travis CI configured for builds
