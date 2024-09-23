import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

// Import JSON data for your site
import contacts from './data/contacts.json';
import nav from './data/nav.json';
import projects from './data/projects.json';
import sections from './data/sections.json';
import skills from './data/skills.json';
import socials from './data/socials.json';
import website from './data/website.json';

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          website,
          nav,
          skills,
          projects,
          contacts,
          sections,
          socials,
        },
      },
    }),
  ],
  server: {
    // Proxying requests to the backend (Node.js Express server)
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Where your backend server is running
        changeOrigin: true,
        secure: false, // For local development, you can keep this false
      },
    },
  },
});
