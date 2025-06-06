# Github User Explorer

App that lets you search for Github users and see their repositories.

Live Preview :
https://github-user-explorer-three.vercel.app/

## Table of Contents

- [Run Locally and Deployment](#run-locally-and-deployment)
- [Tech Stack](#tech-stack)

## Run Locally and Deployment

Make sure **PNPM** is installed on your local machine. You can check by running:

```bash
pnpm -v
```

If it's not installed, please install it first:

```bash
npm install -g pnpm@latest-10
```

### Installation

Install dependencies:

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

The app will run at `http://localhost:3000`.

### Build Production

To create a production build, run:

```bash
pnpm build
```

## Tech Stack

This project is built with modern tools and libraries to ensure performance, scalability, and a smooth developer experience.

#### React + Vite

We use [**React**](https://reactjs.org/) for building user interfaces and [**Vite**](https://vitejs.dev/) as the development tool. Why? in this project we don't need fancy advanced features like routing or rendering on the server. So in this case, React + Vite is a perfect choice for this simple App.

#### Axios + TanStack Query

For efficient data fetching, i used:

- **[Axios](https://axios-http.com/)**: This is the barebone HTTP client for making API requests.
- **[TanStack Query](https://tanstack.com/query/v5)**: Axios is ok, but for simplicity we can use Tanstack Query. It manages all states we need when dealing with data fetching. Not only that, we can leverage caching strategy to reduce API calls. We use it to:
  - Search GitHub users and cache results by keyword.
  - Fetch user repositories with pagination, while maintaining cache and scroll position.

#### shadcn/ui + Tailwind CSS

We use [**shadcn/ui**](https://ui.shadcn.com/) for accessible and composable UI components built with [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/). This helps us ship polished UI faster without reinventing design systems.

#### Vitest (Unit Testing)

We use [**Vitest**](https://vitest.dev/) as the unit testing framework, as we use vite as the development tool. It's fast, easy to set up, and integrates well with Vite.

#### MSW (Integration Testing)

[**Mock Service Worker (MSW)**](https://mswjs.io/) is used to mock API responses in integration tests. It intercepts actual network requests and returns mock data — perfect for testing async logic and error handling without calling real APIs.
