# Job Application Tracker

A full-stack web app for managing your job hunt with a Kanban workflow.

Users can sign up, get an automatically created board, and track applications through stages like Wish List, Applied, Interviewing, Offers, and Rejected.

## Live Demo

[https://job-tracker-taupe-omega.vercel.app](https://job-tracker-taupe-omega.vercel.app)

## Features

- Email/password authentication
- Auto-created personal board for each new user
- Track applications by stage (Wish List -> Applied -> Interviewing -> Offers -> Rejected)
- Kanban-style workflow for organizing progress

## Tech Stack

- Next.js 16
- React 19 + TypeScript
- MongoDB + Mongoose
- Better Auth
- Tailwind CSS + shadcn/ui

## Run Locally (Full Setup)

### 1) Clone and install

```bash
git clone <your-repo-url>
cd job-application-tracker
npm install
```

### 2) Create environment file

Create `.env.local` in the project root:

```bash
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3) Set up MongoDB

You can use either MongoDB Atlas (cloud) or local MongoDB.

#### Option A: MongoDB Atlas (recommended)

1. Create a free cluster in [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Create a database user.
3. In **Network Access**, allow your current IP.
4. Get connection string and set:
   - `MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<db-name>`
5. Replace `<db-name>` with something like `job-board`.

#### Option B: Local MongoDB

If MongoDB runs locally on your machine:

```bash
MONGODB_URI=mongodb://127.0.0.1:27017/job-board
```

### 4) Generate auth secret

Set `BETTER_AUTH_SECRET` to a long random string (at least 32 chars).

Example using Node:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 5) Start the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the app and click **Start For Free**.
2. Create an account.
3. Sign in to access your board.
4. Add and manage job applications across stages.

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - production build
- `npm run start` - run production build
- `npm run lint` - run ESLint
- `npm run seed` - run seed script

## SEO Endpoints

- `/robots.txt`
- `/sitemap.xml`
- `/opengraph-image`

## Troubleshooting

- **Database connection fails**
  - Check `MONGODB_URI` format
  - Atlas: ensure your IP is allowed
  - Atlas: confirm DB user/password are correct
- **Auth redirect/session issues**
  - Confirm `BETTER_AUTH_URL` and `NEXT_PUBLIC_BETTER_AUTH_URL` are both `http://localhost:3000` in local setup
- **Wrong canonical/sitemap domain**
  - Set `NEXT_PUBLIC_APP_URL=http://localhost:3000` locally

## How to Use (Live Demo)

1. Open the live link.
2. Create an account from the **Start For Free** / **Sign Up** button.
3. Log in and you will get your personal **Job Hunt** board automatically.
4. Add job applications and organize them by stage:
   - Wish List
   - Applied
   - Interviewing
   - Offers
   - Rejected
5. Update your applications as your process moves forward.

## License

MIT (or update this section with your preferred license).
