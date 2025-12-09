/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan ALL app routes and components
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",        // covers app/, app/(tabs)/**, app/subscriptions/**, etc.
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: { extend: {} },
  plugins: [],
};
