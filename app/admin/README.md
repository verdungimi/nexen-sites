# Admin Dashboard Documentation

## 📋 Overview

A complete, professional Admin Dashboard UI for managing website content. Built with Next.js, Convex, TailwindCSS, ShadCN, and Framer Motion.

## 🏗️ Structure

```
app/admin/
├── layout.tsx          # Main admin layout with authentication
├── page.tsx            # Dashboard overview
├── images/
│   └── page.tsx        # Image/Gallery management
├── texts/
│   └── page.tsx        # Text content management
├── services/
│   └── page.tsx        # Services management
├── users/
│   └── page.tsx        # User management
└── settings/
    └── page.tsx        # Global settings

components/admin/
├── Sidebar.tsx         # Collapsible sidebar navigation
├── Header.tsx          # Page header with logout
├── DataTable.tsx       # Reusable data table component
└── EditModal.tsx       # Reusable edit/add modal
```

## 🔐 Authentication

Default credentials:
- **Username:** `nexenadmin`
- **Password:** `Imi20090511`

Authentication is handled via session storage. Change credentials in `app/admin/layout.tsx`.

## 📦 Features

### Dashboard (`/admin`)
- Overview statistics
- Recent activity feed
- Performance metrics

### Images (`/admin/images`)
- Upload images (URL or file)
- Edit image metadata
- Delete images
- Preview thumbnails

### Texts (`/admin/texts`)
- Manage website text content
- Organize by sections (Hero, About, etc.)
- Edit titles and descriptions

### Services (`/admin/services`)
- Add/edit/delete services
- Set prices and descriptions
- Mark as featured
- Add icon URLs

### Users (`/admin/users`)
- View all registered users
- Toggle admin status
- Delete users
- User statistics

### Settings (`/admin/settings`)
- Site name and logo
- Color scheme (primary/secondary)
- Contact information
- Social media links

## 🔌 Convex Integration

The dashboard uses placeholder Convex hooks. To connect to real Convex functions:

1. **Update Convex Schema** (`convex/schema.ts`):
```typescript
export default defineSchema({
  images: defineTable({
    title: v.string(),
    url: v.string(),
    createdAt: v.number(),
  }),
  texts: defineTable({
    key: v.string(),
    section: v.string(),
    title: v.string(),
    content: v.string(),
    updatedAt: v.number(),
  }),
  services: defineTable({
    title: v.string(),
    description: v.string(),
    price: v.string(),
    iconUrl: v.string(),
    featured: v.boolean(),
    createdAt: v.number(),
  }),
  users: defineTable({
    name: v.string(),
    email: v.string(),
    role: v.union(v.literal("user"), v.literal("admin")),
    avatar: v.optional(v.string()),
    createdAt: v.number(),
  }),
  settings: defineTable({
    siteName: v.optional(v.string()),
    logoUrl: v.optional(v.string()),
    primaryColor: v.optional(v.string()),
    secondaryColor: v.optional(v.string()),
    contactEmail: v.optional(v.string()),
    contactPhone: v.optional(v.string()),
    facebookUrl: v.optional(v.string()),
    instagramUrl: v.optional(v.string()),
    twitterUrl: v.optional(v.string()),
  }),
});
```

2. **Implement Convex Functions** (`convex/admin.ts`):
   - See `convex/admin.ts` for placeholder implementations
   - Replace with your actual database queries

3. **Update Page Components**:
   - Replace dummy data with real Convex queries
   - Uncomment the `useQuery` and `useMutation` hooks
   - Update API calls to use real Convex functions

## 🎨 Styling

- **Theme:** Dark mode (Vercel/Notion style)
- **Colors:**
  - Primary: `#50AEDF` (Blue)
  - Secondary: `#7C5CFF` (Purple)
  - Background: `#0a0a0a` (Dark)
  - Card: `#0F1620` (Darker)
- **Components:** ShadCN UI components
- **Animations:** Framer Motion

## 📱 Responsive Design

- Mobile-friendly sidebar (collapsible)
- Responsive tables
- Touch-friendly buttons
- Adaptive layouts

## 🚀 Usage

1. Navigate to `/admin`
2. Login with credentials
3. Use sidebar to navigate between sections
4. Click "Új" buttons to add content
5. Click edit/delete icons in tables to manage content

## 🔧 Customization

### Change Sidebar Items
Edit `components/admin/Sidebar.tsx`:
```typescript
const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  // Add your items here
];
```

### Add New Pages
1. Create new page in `app/admin/[section]/page.tsx`
2. Add to sidebar menu items
3. Implement Convex queries/mutations

### Customize Colors
Edit theme colors in:
- `app/globals.css` (CSS variables)
- Individual components (inline styles)

## 📝 Notes

- All Convex hooks are currently using placeholder data
- Replace with real implementations before production
- File upload uses Vercel Blob Storage (configure `BLOB_READ_WRITE_TOKEN`)
- Authentication is client-side only (consider server-side for production)

## 🐛 Troubleshooting

**Sidebar not showing:**
- Check if `sidebarOpen` state is initialized
- Verify layout is wrapping pages correctly

**Convex queries not working:**
- Ensure Convex is properly configured
- Check `NEXT_PUBLIC_CONVEX_URL` environment variable
- Verify Convex functions are deployed

**Styling issues:**
- Ensure TailwindCSS is configured
- Check ShadCN components are installed
- Verify `globals.css` includes theme variables
