# StudentMove Next (Full Stack)

Tech stack:

- Frontend: Next.js + TypeScript
- Backend: Next.js API Routes (`src/app/api`)
- Database: PostgreSQL + Prisma ORM
- Deployment: Vercel

## Modules included

- Health endpoint
- Route suggestions (`GET|POST /api/route-suggestions`)
- Subscriptions (`GET|POST /api/subscriptions`)
- Notifications (`GET /api/notifications`)
- Feedback (`GET|POST /api/feedback`)
- Dashboard UI that reads live API status

## Local setup

1) Install dependencies

```bash
npm install
```

2) Configure environment

```bash
copy .env.example .env
```

Set `DATABASE_URL` to your PostgreSQL connection string.

3) Generate Prisma client

```bash
npm run prisma:generate
```

4) Create tables

```bash
npm run prisma:push
```

5) Seed demo data

```bash
npm run prisma:seed
```

6) Run app

```bash
npm run dev
```

## Deploy to Vercel

1) Push this folder to GitHub.
2) Import repository in Vercel.
3) In Vercel Project Settings > Environment Variables, add:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_APP_NAME` (optional)
4) Set build command (optional but recommended):

```bash
npx prisma generate && next build
```

5) Deploy.

After deployment, run Prisma migration/push against production DB:

```bash
npx prisma db push
```

## NestJS option

If later you want a separate backend, keep this Next.js frontend and move API code to a NestJS service. For Vercel-only deployment, current Next.js API routes are the simplest path.
