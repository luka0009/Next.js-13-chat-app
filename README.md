This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Live Website

- [Link](https://next-app-luka0009.vercel.app)

# Chat App

Full stack Chat application created with: Next.js, Next-auth, Pusher, Tailwind css, Typescript, Prisma, MongoDb, Cloudinary. It has all the feauteres, authentication, live messaging, updadting profile, deleting conversations and etc.

## Features

- Authentication
- live messaging
- upload images
- send images
- update profile
- Delete conversations

## Installation

Follow these steps to install and set up the project:

1. Install project dependencies by running the following command:

`npm install`

2. Create a new file named `.env` in the root directory of the project.

3. Add the following configuration variables to the `.env` file:

- `DATABASE_URL`=`<YOUR_DATABASE_URL>`
- `NEXTAUTH_SECRET`='`<NEXTAUTH_SECRET>`'

- `GOOGLE_CLIENT_ID`=`<YOUR_GOOGLE_CLIENT_ID>`
- `GOOGLE_CLIENT_SECRET`=`<YOUR_GOOGLE_CLIENT_SECRET>`

- `GITHUB_ID`=`<GITHUB_ID>`
- `GITHUB_SECRET`=`<YOUR_GITHUB_SECRET>`

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`=`"<YOUR_CLOUDINARY_NAME>"`

- `NEXT_PUBLIC_PUSHER_APP_KEY`="`<YOUR_NEXT_PUBLIC_PUSHER_APP_KEY>`"
- `PUSHER_APP_ID`=`"<YOUR_PUSHER_ID>"`
- `PUSHER_APP_SECRET`=`"<YOUR_PUSHER_APP_SECRET>"`

## License

You are free to use, modify, and distribute this software for any purpose.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
