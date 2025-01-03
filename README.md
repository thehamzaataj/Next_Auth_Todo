# Full-Stack Todo Application with Authentication

This is a **Full-Stack Todo Application** built using **Next.js**, **Prisma ORM**, **PostgreSQL**, and **NextAuth** for authentication. The app allows users to sign up or log in using Google OAuth or their credentials, and manage their Todo tasks with functionalities like creating, updating, and deleting tasks.

---

## Features

- **User Authentication**: Sign up and log in with Google or using email/password credentials.
- **Todo Management**: Add, update, and delete tasks with ease.
- **Protected Routes**: Only authenticated users can access the dashboard and edit pages.
- **Real-Time Updates**: No page refresh required when adding, editing, or deleting tasks.
- **Responsive Design**: Fully responsive design optimized for mobile, tablet, and desktop devices.

---

## Tech Stack

- **Frontend**: Next.js (React framework)
- **Backend**: Next.js API routes
- **Database**: PostgreSQL, Prisma ORM
- **Authentication**: NextAuth (Google OAuth & Credentials)
- **Styling**: Tailwind CSS
- **Testing**: Jest (for unit and integration tests)

---

## Requirements

- **Node.js** (LTS version recommended)
- **npm** or **yarn**
- **PostgreSQL Database** (either local or hosted, such as [Heroku Postgres](https://www.heroku.com/postgres))

---

## Installation

### 1. Clone the Repository

Clone the project repository and navigate into the project directory:

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

### 2. Install Dependencies

Install the necessary dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of your project and configure the following environment variables:

```bash
DATABASE_URL="postgresql://postgres:1234@localhost:5432/auth?schema=public"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
SECRET="your-random-secret"
```

- Replace the `DATABASE_URL` with your PostgreSQL connection string.
- Obtain your **Google OAuth credentials** from the [Google Developer Console](https://console.developers.google.com/).
- Generate a random string for `SECRET` (can be used for session management).

### 4. Set Up Prisma

Run Prisma migrations to set up the database schema:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Run the Development Server

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Environment Variables for Your Project

To run the project locally or set up the environment, use the following environment variables in your `.env` file:

```bash
DATABASE_URL="postgresql://postgres:1234@localhost:5432/auth?schema=public"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
SECRET="your-random-secret"
```

> **Note**: Never expose sensitive keys (like `GOOGLE_CLIENT_SECRET` or `SECRET`) publicly. Use `.gitignore` to exclude your `.env` file from version control.

---

## Application Screenshots


https://github.com/user-attachments/assets/b5470113-6e78-4f77-b3ad-a9ddbe1cc9ac


Here’s an overview of what the application looks like:

![Screenshot 2024-12-27 142909](https://github.com/user-attachments/assets/86ab29d8-870f-4260-a47b-085140c55f81)
![Screenshot 2024-12-27 142900](https://github.com/user-attachments/assets/8c19924d-3fba-43d3-b01d-dc696cd415e0)
![Screenshot 2024-12-27 142849](https://github.com/user-attachments/assets/b841092c-1ffc-4d57-8f17-f0c66efa34a4)


