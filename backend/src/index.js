import express from 'express';
import cors from 'cors';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(__dirname, '../data/db.json');
const DATA_DIR = join(__dirname, '../data');

// ── Ensure data dir exists ──
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });

// ── JSON "Database" helpers ──
function readDB() {
  if (!existsSync(DB_PATH)) {
    writeFileSync(DB_PATH, JSON.stringify(defaultDB(), null, 2));
  }
  return JSON.parse(readFileSync(DB_PATH, 'utf-8'));
}

function writeDB(data) {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

function defaultDB() {
  return {
    sermons: [
      { id: uuidv4(), title: 'Walking in Your Prophetic Destiny', speaker: 'Pastor Emmanuel Owusu', date: '2026-04-18', series: 'Purpose', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '', description: 'Discover how to align with your God-given purpose and walk boldly into your prophetic future.', plays: 142, featured: true, createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'The Power of the Holy Spirit', speaker: 'Pastor Grace Acheampong', date: '2026-04-13', series: 'Faith Series', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '', description: 'Understanding the role of the Holy Spirit in the life of every believer.', plays: 98, featured: false, createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'Doors That Only Faith Opens', speaker: 'Pastor Emmanuel Owusu', date: '2026-04-06', series: 'Faith Series', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '', description: 'Faith is the master key — it opens doors that were previously shut in your life.', plays: 211, featured: true, createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'Healing: Your Covenant Right', speaker: 'Pastor Grace Acheampong', date: '2026-03-30', series: 'Healing', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '', description: 'Divine healing is not optional — it is part of the atonement of Jesus Christ.', plays: 175, featured: false, createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'Praying with Power and Authority', speaker: 'Pastor Emmanuel Owusu', date: '2026-03-22', series: 'Prayer', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '', description: 'Prayer is not begging — it is enforcing the will of God in the earth.', plays: 89, featured: false, createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'The Season of Double Harvest', speaker: 'Bishop Dr. Agyei Mensah', date: '2026-03-15', series: 'Purpose', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '', description: 'God is releasing a double portion to those who have been faithful in the season of testing.', plays: 133, featured: false, createdAt: new Date().toISOString() },
    ],
    events: [
      { id: uuidv4(), title: 'Night of Endless Praise & Worship', category: 'Worship Night', date: '2026-04-27', time: '6:00 PM – 10:00 PM', location: 'Main Sanctuary', description: 'A night dedicated to pure worship and adoration before the King of kings.', image: '', createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'Prophetic Summit 2026', category: 'Conference', date: '2026-05-04', time: '9:00 AM – 5:00 PM', location: 'Conference Centre, Accra', description: 'Voices of this generation speaking prophetically into the nation.', image: '', createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'Kingdom Kids Summer Festival', category: 'Youth', date: '2026-05-11', time: '10:00 AM – 2:00 PM', location: 'Church Courtyard & Hall', description: 'Fun, faith and fellowship for our children and youth.', image: '', createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'Prayer & Fasting Week', category: 'Prayer', date: '2026-05-18', time: 'All Week', location: 'Various Locations', description: 'Seven days of corporate fasting, prayer and seeking the face of God.', image: '', createdAt: new Date().toISOString() },
    ],
    news: [
      { id: uuidv4(), title: 'Over 500 Salvations at Easter Crusade', category: 'Ministry News', date: '2026-04-15', body: 'The HLC Easter Crusade 2026 recorded over 500 documented conversions and 23 miraculous healings, marking one of the most impactful events in our history. The three-day crusade held at the Accra Sports Stadium drew crowds of over 20,000 nightly.', image: '', published: true, createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'April Declared "The Month of Prophecy"', category: 'Announcement', date: '2026-04-01', body: 'Pastor Emmanuel Owusu declared April 2026 as "The Month of Prophecy" — calling on all members to come into position to receive and walk in their prophetic word for this season.', image: '', published: true, createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'New Church Plant in Kumasi', category: 'Missions', date: '2026-03-20', body: 'Higher Life Church is thrilled to announce the official opening of our Kumasi branch, adding to our growing family of congregations across Ghana. The new branch is led by Pastor Kwame Asante.', image: '', published: true, createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'Back to School Drive Blesses 800 Children', category: 'Ministry News', date: '2026-03-05', body: 'Our annual Back-to-School drive distributed school supplies and uniforms to over 800 children from underprivileged communities in the Accra Metropolitan area through our InnerCity Mission.', image: '', published: true, createdAt: new Date().toISOString() },
    ],
    gallery: [
      { id: uuidv4(), title: 'Sunday Service Highlights', type: 'photos', image: '', videoUrl: '', description: 'Moments from our Sunday morning services', createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'Easter Crusade 2026', type: 'events', image: '', videoUrl: '', description: 'Unforgettable moments from Easter 2026', createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'Worship Night — March', type: 'videos', image: '', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'An evening of powerful worship', createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'Community Outreach Photos', type: 'photos', image: '', videoUrl: '', description: 'Serving our community with love', createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'Youth Convention 2025', type: 'events', image: '', videoUrl: '', description: 'Young people on fire for God', createdAt: new Date().toISOString() },
      { id: uuidv4(), title: 'New Year Service', type: 'photos', image: '', videoUrl: '', description: 'Crossing over into 2026', createdAt: new Date().toISOString() },
    ],
    announcements: [
      { id: uuidv4(), text: 'Sunday 20th April — Today\'s Article: A Sworn Declaration of Blessing', link: '', active: true, createdAt: new Date().toISOString() },
      { id: uuidv4(), text: 'Join Pastor every Monday, Wednesday & Friday for Prayer — Get today\'s Prayer Point', link: '', active: true, createdAt: new Date().toISOString() },
      { id: uuidv4(), text: 'April 2026 — "The Month of Prophecy" — Position yourself to receive!', link: '', active: true, createdAt: new Date().toISOString() },
      { id: uuidv4(), text: 'Prophetic Summit 2026 — May 4th | Register Now | Limited Space Available', link: '', active: true, createdAt: new Date().toISOString() },
    ],
    contacts: [],
    analytics: {
      pageViews: {},
      pages: {},
      sermonPlays: {},
      searches: [],
      devices: { mobile: 0, desktop: 0 },
      visitors: {}
    },
    settings: {
      churchName: 'Higher Life Church',
      tagline: 'Giving your life a higher purpose',
      address: 'Accra, Ghana',
      phone: '+233 (0) 302 000 000',
      email: 'hello@higherlifechurch.gh',
      streamUrl: '',
      mapUrl: '',
      facebookUrl: '',
      youtubeUrl: '',
      instagramUrl: '',
    }
  };
}

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '5mb' }));

// ── Request logger ──
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// ══════════════════════════════════════════
// ANALYTICS
// ══════════════════════════════════════════
app.post('/api/analytics/track', (req, res) => {
  const { page, device, isNewVisitor } = req.body;
  const db = readDB();
  const today = new Date().toISOString().slice(0, 10);
  db.analytics.pageViews[today] = (db.analytics.pageViews[today] || 0) + 1;
  db.analytics.pages[page] = (db.analytics.pages[page] || 0) + 1;
  if (device === 'mobile') db.analytics.devices.mobile++;
  else db.analytics.devices.desktop++;
  if (isNewVisitor) db.analytics.visitors[today] = (db.analytics.visitors[today] || 0) + 1;
  writeDB(db);
  res.json({ ok: true });
});

app.post('/api/analytics/search', (req, res) => {
  const { query } = req.body;
  if (query?.length > 2) {
    const db = readDB();
    db.analytics.searches.push(query.toLowerCase().trim());
    if (db.analytics.searches.length > 200) db.analytics.searches = db.analytics.searches.slice(-200);
    writeDB(db);
  }
  res.json({ ok: true });
});

app.get('/api/analytics', (req, res) => {
  const db = readDB();
  const a = db.analytics;
  const last7 = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    last7.push({ label: d.toLocaleDateString('en', { weekday: 'short' }), date: key, count: a.pageViews[key] || 0 });
  }
  const today = new Date().toISOString().slice(0, 10);
  const topPages = Object.entries(a.pages).sort((x, y) => y[1] - x[1]).slice(0, 8);
  const topSermons = Object.entries(a.sermonPlays)
    .sort((x, y) => y[1] - x[1]).slice(0, 5)
    .map(([id, plays]) => {
      const s = db.sermons.find(x => x.id === id);
      return { label: s?.title || 'Sermon', count: plays };
    });
  const freq = {};
  a.searches.forEach(s => { freq[s] = (freq[s] || 0) + 1; });
  const topSearches = Object.entries(freq).sort((x, y) => y[1] - x[1]).slice(0, 15).map(([q]) => q);
  res.json({
    todayViews: a.pageViews[today] || 0,
    todayVisitors: a.visitors[today] || 0,
    totalSermons: db.sermons.length,
    upcomingEvents: db.events.filter(e => new Date(e.date) >= new Date()).length,
    last7Days: last7,
    topPages,
    topSermons,
    devices: a.devices,
    topSearches,
    totalContacts: db.contacts.length,
  });
});

// ══════════════════════════════════════════
// SERMONS
// ══════════════════════════════════════════
app.get('/api/sermons', (req, res) => {
  const { series, search, limit } = req.query;
  let sermons = readDB().sermons;
  if (series) sermons = sermons.filter(s => s.series === series);
  if (search) {
    const q = search.toLowerCase();
    sermons = sermons.filter(s => s.title.toLowerCase().includes(q) || s.speaker.toLowerCase().includes(q));
  }
  sermons.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (limit) sermons = sermons.slice(0, parseInt(limit));
  res.json(sermons);
});

app.get('/api/sermons/:id', (req, res) => {
  const sermon = readDB().sermons.find(s => s.id === req.params.id);
  if (!sermon) return res.status(404).json({ error: 'Not found' });
  res.json(sermon);
});

app.post('/api/sermons', (req, res) => {
  const db = readDB();
  const sermon = { id: uuidv4(), plays: 0, featured: false, createdAt: new Date().toISOString(), ...req.body };
  db.sermons.unshift(sermon);
  writeDB(db);
  res.status(201).json(sermon);
});

app.put('/api/sermons/:id', (req, res) => {
  const db = readDB();
  const idx = db.sermons.findIndex(s => s.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  db.sermons[idx] = { ...db.sermons[idx], ...req.body, id: req.params.id };
  writeDB(db);
  res.json(db.sermons[idx]);
});

app.delete('/api/sermons/:id', (req, res) => {
  const db = readDB();
  db.sermons = db.sermons.filter(s => s.id !== req.params.id);
  writeDB(db);
  res.json({ ok: true });
});

app.post('/api/sermons/:id/play', (req, res) => {
  const db = readDB();
  const s = db.sermons.find(x => x.id === req.params.id);
  if (s) {
    s.plays = (s.plays || 0) + 1;
    db.analytics.sermonPlays[req.params.id] = (db.analytics.sermonPlays[req.params.id] || 0) + 1;
    writeDB(db);
  }
  res.json({ plays: s?.plays || 0 });
});

// ══════════════════════════════════════════
// EVENTS
// ══════════════════════════════════════════
app.get('/api/events', (req, res) => {
  const { limit, upcoming } = req.query;
  let events = readDB().events;
  if (upcoming === 'true') events = events.filter(e => new Date(e.date) >= new Date());
  events.sort((a, b) => new Date(a.date) - new Date(b.date));
  if (limit) events = events.slice(0, parseInt(limit));
  res.json(events);
});

app.post('/api/events', (req, res) => {
  const db = readDB();
  const ev = { id: uuidv4(), createdAt: new Date().toISOString(), ...req.body };
  db.events.unshift(ev);
  writeDB(db);
  res.status(201).json(ev);
});

app.put('/api/events/:id', (req, res) => {
  const db = readDB();
  const idx = db.events.findIndex(e => e.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  db.events[idx] = { ...db.events[idx], ...req.body, id: req.params.id };
  writeDB(db);
  res.json(db.events[idx]);
});

app.delete('/api/events/:id', (req, res) => {
  const db = readDB();
  db.events = db.events.filter(e => e.id !== req.params.id);
  writeDB(db);
  res.json({ ok: true });
});

// ══════════════════════════════════════════
// NEWS
// ══════════════════════════════════════════
app.get('/api/news', (req, res) => {
  const { limit, category } = req.query;
  let news = readDB().news.filter(n => n.published !== false);
  if (category) news = news.filter(n => n.category === category);
  news.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (limit) news = news.slice(0, parseInt(limit));
  res.json(news);
});

app.get('/api/news/all', (req, res) => {
  res.json(readDB().news.sort((a, b) => new Date(b.date) - new Date(a.date)));
});

app.post('/api/news', (req, res) => {
  const db = readDB();
  const article = { id: uuidv4(), published: true, createdAt: new Date().toISOString(), ...req.body };
  db.news.unshift(article);
  writeDB(db);
  res.status(201).json(article);
});

app.put('/api/news/:id', (req, res) => {
  const db = readDB();
  const idx = db.news.findIndex(n => n.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  db.news[idx] = { ...db.news[idx], ...req.body, id: req.params.id };
  writeDB(db);
  res.json(db.news[idx]);
});

app.delete('/api/news/:id', (req, res) => {
  const db = readDB();
  db.news = db.news.filter(n => n.id !== req.params.id);
  writeDB(db);
  res.json({ ok: true });
});

// ══════════════════════════════════════════
// GALLERY
// ══════════════════════════════════════════
app.get('/api/gallery', (req, res) => {
  const { type } = req.query;
  let gallery = readDB().gallery;
  if (type && type !== 'all') gallery = gallery.filter(g => g.type === type);
  res.json(gallery);
});

app.post('/api/gallery', (req, res) => {
  const db = readDB();
  const item = { id: uuidv4(), createdAt: new Date().toISOString(), ...req.body };
  db.gallery.unshift(item);
  writeDB(db);
  res.status(201).json(item);
});

app.put('/api/gallery/:id', (req, res) => {
  const db = readDB();
  const idx = db.gallery.findIndex(g => g.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  db.gallery[idx] = { ...db.gallery[idx], ...req.body, id: req.params.id };
  writeDB(db);
  res.json(db.gallery[idx]);
});

app.delete('/api/gallery/:id', (req, res) => {
  const db = readDB();
  db.gallery = db.gallery.filter(g => g.id !== req.params.id);
  writeDB(db);
  res.json({ ok: true });
});

// ══════════════════════════════════════════
// ANNOUNCEMENTS
// ══════════════════════════════════════════
app.get('/api/announcements', (req, res) => {
  res.json(readDB().announcements.filter(a => a.active !== false));
});

app.get('/api/announcements/all', (req, res) => {
  res.json(readDB().announcements);
});

app.post('/api/announcements', (req, res) => {
  const db = readDB();
  const ann = { id: uuidv4(), active: true, createdAt: new Date().toISOString(), ...req.body };
  db.announcements.unshift(ann);
  writeDB(db);
  res.status(201).json(ann);
});

app.delete('/api/announcements/:id', (req, res) => {
  const db = readDB();
  db.announcements = db.announcements.filter(a => a.id !== req.params.id);
  writeDB(db);
  res.json({ ok: true });
});

// ══════════════════════════════════════════
// CONTACTS
// ══════════════════════════════════════════
app.post('/api/contact', (req, res) => {
  const db = readDB();
  const contact = { id: uuidv4(), createdAt: new Date().toISOString(), status: 'new', ...req.body };
  db.contacts.unshift(contact);
  writeDB(db);
  res.status(201).json({ ok: true, message: 'Message received. We\'ll be in touch!' });
});

app.get('/api/contacts', (req, res) => {
  res.json(readDB().contacts);
});

app.put('/api/contacts/:id/read', (req, res) => {
  const db = readDB();
  const c = db.contacts.find(x => x.id === req.params.id);
  if (c) { c.status = 'read'; writeDB(db); }
  res.json({ ok: true });
});

// ══════════════════════════════════════════
// SETTINGS
// ══════════════════════════════════════════
app.get('/api/settings', (req, res) => {
  res.json(readDB().settings);
});

app.put('/api/settings', (req, res) => {
  const db = readDB();
  db.settings = { ...db.settings, ...req.body };
  writeDB(db);
  res.json(db.settings);
});

// ── Start ──
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`\n🚀 HLC Backend running on http://localhost:${PORT}\n`));
