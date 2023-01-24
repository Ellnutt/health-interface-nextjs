This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Go to: http://localhost:3000

By default, the page loads with empty data.

You can ammend the query param `userid` with values either, `1`, `2`, `3`, to load different users that I have mocked.

Examples:

No User
http://localhost:3000

User 1:
http://localhost:3000?userid=1

User 2:
http://localhost:3000?userid=2

User 3:
http://localhost:3000?userid=3

User That Doesnt Exist:
http://localhost:3000?userid=67890
