# 🦸‍♂️ Superhero Explorer

A monorepo web application for managing a **Superhero** database. It provides full CRUD operations, image upload/carousel, pagination, and search-by-nickname, all in a single repo with React frontend and Node/Express backend.

## 🛠️ Tech Stack

- **Node.js 20+** & **Express** – REST API with CRUD + search service
- **MongoDB** & **Mongoose** – document database for superheroes
- **React 18** + **Vite** – fast frontend development
- **TypeScript** – end-to-end type safety
- **Tailwind CSS** & **ShadCN UI** – utility-first styling + accessible components
- **React Router v7** – client-side routing
- **React Query** – data fetching & caching
- **Embla Carousel** – image carousel in detail view
- **concurrently** – run client & server with one command
- **Husky + lint-staged + ESLint + Prettier** – pre-commit code quality checks

## 🚀 Features

- **Create / Edit / Delete** superheroes
  - Add or remove multiple images (URL)
  - Auto-suggest existing heroes by nickname
- **List** superheroes
  - Paginated (initially 5 per page) view showing nickname + one image
  - Adjustable “heroes per page”
- **Detail View** for each superhero
  - Full information, all images in a carousel, catch phrase, origin, superpowers
- **Light / Dark** theme support

## 📁 Project Highlights

- **Monorepo** structure with two npm workspaces: `client/` and `server/`
- Root `package.json` scripts:
  - `npm run dev` → launches both frontend (5173) and backend (3030)
  - `lint`, `lint:fix`, `format`, `format:check`
- **Server**:
  - TypeScript + `ts-node/esm` + `nodemon` for hot reload
  - Endpoints under `/api/superheroes` and `/api/superheroes/search/:name`
- **Client**:
  - Vite + TypeScript build
  - React Query for queries/mutations
  - Forms with validation, debounce search
  - ShadCN UI components and responsive layouts

## 🏃🏼‍♂️ Getting Started

### Prerequisites

- **Node.js** ≥ v20
- **npm** ≥ v9
- **MongoDB** (local or Atlas)
- Create a `.env` file in the `server/` directory with the following content:

```env
DB_HOST=mongodb+srv://borysandrey1988:4NJIS4wL0sADKmHk@cluster0.miqhftg.mongodb.net/
PORT=8080
SUPERHERO_API_BASE_URL=https://superheroapi.com/api/8b739e708c6f771ffb9fd969f799932b
```

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/Borys-Andrew/jn-test.git
cd jn-test
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Development Server**

```bash
npm run dev
```

Open your browser and navigate to: [http://localhost:5173](http://localhost:5173/)

## 📞 Contact Information

Feel free to reach out for collaboration or job opportunities!

- 📱 **Phone**: +38-073-100-74-63
- 📧 **Email**: [borysandrew9@gmail.com](mailto:borysandrew9@gmail.com)
- 🔗 **LinkedIn**: [Andrew Borys](https://www.linkedin.com/in/andrew-borys-233365200/)
- 💬 **Telegram**: [@BorysAndrew](https://t.me/BorysAndrew)
- 💻 **GitHub**: [Andrew-Borys](https://github.com/Andrew-Borys)
- 🌍 **Location**: Lviv, Ukraine
- 👨‍💻 Open to work in office, hybrid, or remotely.
