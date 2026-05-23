# Higher Life Church — Full Stack Web App

A production-ready church website built with **React + Vite** (frontend) and **Node.js + Express** (backend), featuring a complete CMS admin panel, analytics tracking, and a white & gold luxury theme.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or higher — [nodejs.org](https://nodejs.org)
- **npm** v9 or higher (bundled with Node)

### 1. Clone / Download the project
```bash
# If using git:
git clone <your-repo-url>
cd hlc-fullstack

# Or just unzip the folder and open a terminal inside it
```

### 2. Install dependencies

```bash
# Backend
cd backend && npm install && cd ..

# Frontend
cd frontend && npm install && cd ..
```

### 3. Start both servers

```bash
# Option A: Use the launcher script (Linux/Mac)
chmod +x start.sh
./start.sh

# Option B: Open TWO terminal tabs

# Terminal 1 — Backend
cd backend
node src/index.js

# Terminal 2 — Frontend
cd frontend
npm run dev
```

### 4. Open in browser
| URL | What |
|-----|------|
| http://localhost:5173 | Public website |
| http://localhost:5173/admin | Admin panel |
| http://localhost:4000/api/sermons | API directly |

---

## 📁 Project Structure

```
hlc-fullstack/
├── backend/
│   ├── src/
│   │   └── index.js          # Express server + all API routes
│   ├── data/
│   │   └── db.json           # Auto-created JSON database
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/index.js      # All API calls (Axios)
│   │   ├── hooks/
│   │   │   └── useAnalytics.js
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Layout.jsx    # Ticker, Navbar, Footer
│   │   │   │   └── Layout.css
│   │   │   └── ui/
│   │   │       ├── Modals.jsx    # Sermon player, article reader, gallery
│   │   │       └── Modals.css
│   │   ├── pages/
│   │   │   ├── Home.jsx          # Homepage with all sections
│   │   │   ├── Home.css
│   │   │   ├── Pages.jsx         # All public pages
│   │   │   ├── Pages.css
│   │   │   ├── Admin.jsx         # Full admin panel
│   │   │   └── Admin.css
│   │   ├── App.jsx               # Router + modal state
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Global styles + design tokens
│   └── vite.config.js
│
├── start.sh                  # One-command launcher
└── README.md
```

---

## 🎛️ Admin Panel

Visit `/admin` to manage all content:

| Section | What you can do |
|---------|----------------|
| **Dashboard** | Live stats: page views, visitors, sermons, events |
| **Sermons** | Add/edit/delete sermons with YouTube embed URLs |
| **Events** | Manage upcoming events with dates, times, venues |
| **News** | Publish/draft articles and announcements |
| **Gallery** | Upload photo & video gallery items |
| **Announcements** | Control the scrolling ticker bar |
| **Contacts** | View all contact form submissions |
| **Analytics** | Page view charts, device breakdown, top searches |
| **Settings** | Church name, address, live stream URL, map embed |

---

## 🌐 All Pages

### Public
| Route | Page |
|-------|------|
| `/` | Homepage (hero, events, sermons, news, gallery) |
| `/sermons` | Sermon library with search & filter |
| `/events` | Upcoming events |
| `/news` | News & announcements |
| `/gallery` | Photo/video gallery |
| `/about/pastor` | About our pastor |
| `/about/vision` | Our vision |
| `/about/faith` | Statement of faith |
| `/live/networks` | HLC Networks live stream |
| `/live/qa` | Pastor Live Q&A |
| `/live/tv` | HLC TV |
| `/store/library` | Pastor's Digital Library |
| `/store/shop` | HLC Online Store |
| `/store/books` | Higher Life Books |
| `/contact/locator` | Church locator |
| `/contact/message` | Contact form |
| `/give/online` | Online giving |
| `/give/partner` | Partnership |

### Admin
| Route | |
|-------|---|
| `/admin` | Full CMS admin panel |

---

## 🔌 API Endpoints

All endpoints are at `http://localhost:4000`:

```
GET    /api/sermons            List sermons (query: search, series, limit)
POST   /api/sermons            Create sermon
PUT    /api/sermons/:id        Update sermon
DELETE /api/sermons/:id        Delete sermon
POST   /api/sermons/:id/play   Increment play count

GET    /api/events             List events (query: upcoming, limit)
POST   /api/events             Create event
PUT    /api/events/:id         Update event
DELETE /api/events/:id         Delete event

GET    /api/news               List published news
GET    /api/news/all           List all (including drafts)
POST   /api/news               Create article
PUT    /api/news/:id           Update article
DELETE /api/news/:id           Delete article

GET    /api/gallery            List gallery (query: type)
POST   /api/gallery            Create item
PUT    /api/gallery/:id        Update item
DELETE /api/gallery/:id        Delete item

GET    /api/announcements      Active announcements
GET    /api/announcements/all  All announcements
POST   /api/announcements      Create announcement
DELETE /api/announcements/:id  Delete announcement

POST   /api/contact            Submit contact form
GET    /api/contacts           Get all contacts (admin)
PUT    /api/contacts/:id/read  Mark as read

POST   /api/analytics/track    Track page view
POST   /api/analytics/search   Track search query
GET    /api/analytics          Get analytics data

GET    /api/settings           Get site settings
PUT    /api/settings           Update settings
```

---

## 🌍 Deployment

### Free option — Render.com (recommended)

1. Push to GitHub
2. Create a **Web Service** for the backend (Node, `node src/index.js`, port 4000)
3. Create a **Static Site** for the frontend (`npm run build`, publish `dist/`)
4. Set the frontend's `VITE_API_URL` env var to your backend URL
5. Update `frontend/src/api/index.js` → `baseURL: import.meta.env.VITE_API_URL || '/api'`

### Other options
- **Backend**: Railway, Fly.io, Heroku, VPS (DigitalOcean/Hetzner)
- **Frontend**: Netlify, Vercel, Cloudflare Pages, GitHub Pages
- **Database upgrade**: Replace `data/db.json` with PostgreSQL/MongoDB using Prisma or Mongoose for production scale

---

## ✏️ Customisation

### Change church name
Edit `backend/data/db.json` → `settings.churchName` (or via Admin → Settings)

### Add real images
In Admin → Gallery or Sermons, paste any image URL (e.g. from Cloudinary, AWS S3, or Imgur)

### Embed your live stream
Admin → Settings → **Live Stream Embed URL**  
Use a YouTube embed URL: `https://www.youtube.com/embed/LIVE_VIDEO_ID`

### Connect Google Maps
Admin → Settings → **Google Maps Embed URL**

### Change colours
Edit `frontend/src/index.css` — all colours are CSS variables at the top:
```css
:root {
  --gold: #C9A84C;    /* Primary gold */
  --dark: #1A1814;    /* Dark backgrounds */
  --cream: #FFFDF5;   /* Page background */
  ...
}
```

---

## 🔒 Adding Authentication (next step)

To protect the admin panel:
```bash
cd backend
npm install jsonwebtoken bcryptjs
```
Then add a `POST /api/auth/login` endpoint that issues a JWT, and a middleware that checks `Authorization: Bearer <token>` on admin routes.

---

Built with ❤️ for Higher Life Church · Accra, Ghana
