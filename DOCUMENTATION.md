# Head Educare — Website & Admin Documentation

Documentation of the Head Educare study-abroad consultancy website and its
admin/CRM system. Covers architecture, database, API, admin panel, and the
local development setup.

---

## 1. Overview

Head Educare is a React (Vite) single-page application for a Bangladesh-based
education consultancy. It presents study destinations, services, mentorship
programs, and collects consultation requests from visitors. An authenticated
admin console manages leads, contacts, services, destinations, testimonials,
and site statistics.

The backend is a **PHP/MySQL REST API** (designed for cPanel hosting). In
local development, the PHP API is served by **XAMPP Apache** and proxied by
Vite.

## 2. Tech Stack

| Layer      | Technology                                      |
| ---------- | ----------------------------------------------- |
| Frontend   | React 19, Vite 7, Tailwind CSS 4, React Router  |
| Backend    | PHP 8 (no framework, PDO prepared statements)   |
| Database   | MySQL / MariaDB                                 |
| Auth       | PHP sessions (`auth.php`, session cookie)       |
| Local dev  | XAMPP (Apache + MariaDB), Vite proxy            |

## 3. Architecture

```
Visitor ──(form)──> POST /api/leads.php ──> contacts + leads tables
                     (no auth required)

Admin ──(login)──> POST /api/auth.php ──> session cookie
Admin ──> GET/POST/DELETE /api/*.php ──> MySQL
              (auth required for admin endpoints)
```

- All API calls go through `src/lib/apiClient.js` (base path `/api`).
- In production (cPanel), Apache/PHP serves the built app and the `public/api/*.php`
  endpoints directly.
- In local development, Vite proxies `/api` → XAMPP Apache so PHP runs.
  See `vite.config.js`.

## 4. Database (MySQL)

Database name (local): `headedu`

Tables (created by `database/schema.sql`):

| Table           | Purpose                                                    |
| --------------- | ---------------------------------------------------------- |
| `users`         | Admin accounts (bcrypt passwords). Seeded: `admin/admin123`|
| `contacts`      | Every person (from forms or manual admin entry).           |
| `leads`         | Pipeline records tied to a contact (`contact_id` FK).      |
| `services`      | Homepage service cards.                                    |
| `countries`     | Study destinations.                                        |
| `testimonials`  | Student success stories.                                   |
| `site_settings` | Homepage stat cards (`500+`, `98%`, `15K+`, `12+`).        |

### contacts ↔ leads relationship

Industry-standard CRM model:

- `contacts` = the person (name, email, phone, message, source).
- `leads` = an opportunity tied to a contact (country/service interest,
  preferred slot, pipeline status).
- Every form submission **and** every manually added contact automatically
  creates a lead with status `new`.
- `contacts.id` → `leads.contact_id` (FK, `ON DELETE CASCADE`).
- Deleting a **lead** does **not** delete the contact.
- Deleting a **contact** removes its linked leads too.

Schema: `database/schema.sql` (fresh installs).
Migration: `database/migrate_contacts.sql` (upgrade from the old single
`leads` table).

## 5. API Endpoints

Base path: `/api`

| Endpoint                 | Method | Auth   | Purpose                                   |
| ------------------------ | ------ | ------ | ----------------------------------------- |
| `auth.php`               | POST   | no     | Login (`username`, `password`)           |
| `auth.php`               | GET    | no     | Session check (`authenticated` bool)      |
| `auth.php?action=logout` | POST   | yes    | Logout                                    |
| `leads.php`              | POST   | no     | Public form → creates contact + lead      |
| `leads.php`              | GET    | yes    | List leads joined with contact info       |
| `leads.php?action=update_status` | POST | yes | Update lead pipeline status        |
| `leads.php?id=N`         | DELETE | yes    | Delete lead (contact stays)               |
| `contacts.php`           | GET    | yes    | List contacts with linked lead info       |
| `contacts.php`           | POST   | yes    | Manually add contact (+ auto lead)        |
| `contacts.php?id=N`      | DELETE | yes    | Delete contact (leads removed)            |
| `services.php`           | GET/POST/DELETE | mix | Service CRUD                     |
| `countries.php`          | GET/POST/DELETE | mix | Destination CRUD                 |
| `testimonials.php`       | GET/POST/DELETE | mix | Testimonial CRUD                 |
| `settings.php`           | GET/POST | mix    | Site stats                              |

- Admin CRUD endpoints require a logged-in session (`auth_check.php`).
- `GET` list endpoints for public data (services, countries, testimonials,
  settings) return fallback mock data in `apiClient.js` if the server is
  unavailable.

## 6. Lead Collection (public forms)

Two public forms call `api.submitLead()`:

1. **Home page CTA form** — `src/pages/Home.jsx` (last section).
2. **Free Consultation page** — `src/pages/FreeConsultations.tsx`
   (route `/freeconsulation`).

Both POST the same shape to `leads.php`:

```json
{
  "name": "...", "email": "...", "phone": "...",
  "country_interest": "...", "service_interest": "...",
  "preferred_contact": "...", "preferred_date": "...",
  "preferred_time": "...", "message": "..."
}
```

Required: `name`, `email`, `phone`. The endpoint creates the contact and the
lead inside a transaction and returns the new lead id.

> Note: `apiClient.js` has a safety fallback — if the API is unreachable it
> logs the lead to the browser console and returns "Mock success". In that
> case **no data is saved**, so keep the PHP/MySQL backend reachable in
> production.

## 7. Admin Panel

URL: `/admin` (e.g. `http://localhost:5173/admin`)
Login: `admin` / `admin123` (configurable via the `users` table).

Tabs:

| Tab          | Purpose                                                          |
| ------------ | ---------------------------------------------------------------- |
| Overview     | Lead counts, pipeline progress bars, conversion rate.            |
| Contacts     | Address book: all form + manual people. Add / delete manually.   |
| Leads Manager| Pipeline: change status (new/contacted/in_progress/completed), view detail, delete (contact kept). |
| Services     | CRUD homepage service cards.                                     |
| Destinations | CRUD countries (flag, image, costs, visa, courses).              |
| Testimonials | CRUD student reviews.                                            |
| Site Settings| Edit homepage stat values.                                       |

Workflow:
1. Visitor submits a form → row appears in **Contacts** (source `form`).
2. Admin can add a person manually → appears in Contacts (source `manual`).
3. Every contact automatically appears in **Leads Manager** as a `new` lead.
4. Admin works the lead (status changes) or deletes it — deleting a lead
   keeps the contact in Contacts.
5. Deleting a contact removes the person and their linked leads.

## 8. Local Development Setup (macOS + XAMPP)

Requirements: Node.js, XAMPP (Apache + MariaDB running).

```bash
# 1. Install dependencies
npm install

# 2. Create the database and import schema (MariaDB via XAMPP)
/Applications/XAMPP/xamppfiles/bin/mysql -u root -e \
  "CREATE DATABASE IF NOT EXISTS headedu CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
/Applications/XAMPP/xamppfiles/bin/mysql -u root headedu < database/schema.sql

# 3. Point Apache at the API folder so PHP runs
ln -sfn "$PWD/public/api" /Applications/XAMPP/htdocs/api

# 4. Start the dev server (Vite proxies /api -> http://localhost)
npm run dev
```

Notes:

- `public/api/config.php` is set to `root` / empty password / database
  `headedu` for local use. Change these for production cPanel.
- If Apache returns 403 on `/api`, grant the `daemon` user traversal access:
  `chmod +a "daemon allow execute" $HOME $HOME/headedu $HOME/headedu/public`
- Admin login only works when the PHP API + DB are reachable.

## 9. Deployment (cPanel)

1. `npm run build` — output in `dist/`.
2. Upload the project so `index.php` (PHP SSR for SEO meta tags) is served
   from the document root and `public/api/*.php` is reachable at `/api/...`.
3. Create the MySQL database + user in cPanel, import `database/schema.sql`,
   and update `public/api/config.php` with the production credentials.
4. Set the admin password (bcrypt) in the `users` table or re-seed.

## 10. Common Commands

| Task                 | Command                                            |
| -------------------- | -------------------------------------------------- |
| Dev server           | `npm run dev`                                      |
| Production build     | `npm run build`                                    |
| Lint                 | `npm run lint`                                     |
| Import schema        | `mysql -u root headedu < database/schema.sql`      |
| Migrate old leads    | `mysql -u root headedu < database/migrate_contacts.sql` |
