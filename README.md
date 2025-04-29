# 🔐 EduAI: AI-Powered Lesson Planner

A full-stack authentication app built with **React**, featuring email/password login, password recovery, account signup, route protection, and an AI tool for lesson plan generation. Designed to be mobile-friendly and PWA-ready.

---

## 🚀 Features

- 📥 **User Authentication**
  - Signup, login, and password recovery using Firebase
- 🧠 **AI Lesson Plan Generator**
  - Teachers input subject, topic, class level, and duration
  - App generates a structured lesson plan (AI API-ready)
- ✅ **Form Validation**
  - Built-in error handling with react-hook-form
- 🔐 **Route Protection**
  - Home page is accessible only to logged-in users
- 🍞 **Toast Notifications**
  - Real-time feedback on login, logout, signup, and errors
- 📱 **Responsive Navbar**
  - Mobile-friendly hamburger menu with conditional buttons
- 💅 **Tailwind CSS Styling**
  - Clean, responsive UI out of the box
- 📲 **Progressive Web App Ready**
  - Installable app experience on mobile devices

---

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase Auth](https://firebase.google.com/products/auth)
- [Vite](https://vitejs.dev/)
- [React Hot Toast](https://react-hot-toast.com/)


## 🔧 Getting Started

1. **Clone the repo**
```bash
git clone git@github.com:Kadunapikin/login-page.git
cd eduai-lesson-planner

2. **Install dependencies**
npm install

3. **Set up Firebase**
-Create a Firebase project
-Enable Email/Password authentication
-Replace firebaseConfig in src/firebase.ts with your credentials

4. **Run the development server**
npm run dev

5. **Open in browser**
http://localhost:5173

🗂️ Project Structure
src/
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Navbar.tsx
│   └── ProtectedRoute.tsx
├── pages/
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── PasswordRecovery.tsx
│   └── Signup.tsx
├── firebase.ts
├── App.tsx
└── main.tsx

✅ Completed
✨ Firebase Authentication (Signup, Login, Recovery)

🧠 AI Lesson Plan Tool (frontend integrated)

🔒 Route Protection for Home

🍞 Toast feedback for all actions

📱 Responsive navbar for mobile


📄 License
MIT © Isaac Bakoshi
