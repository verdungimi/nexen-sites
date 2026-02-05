# Convex Backend Documentation

## 📋 Overview

Complete Convex backend structure for the Admin Dashboard. All collections have full CRUD operations (Create, Read, Update, Delete).

## 🏗️ Structure

```
convex/
├── schema.ts          # Database schema definitions
├── images.ts          # Image management functions
├── texts.ts           # Text content management
├── services.ts        # Services management
├── users.ts           # User management
└── settings.ts        # Global settings
```

## 📊 Schema

### Images
```typescript
{
  title: string;
  url: string;
  createdAt: number;
}
```

### Texts
```typescript
{
  key: string;          // Unique identifier (e.g., "hero-title")
  section: string;      // Section name (e.g., "Hero", "About")
  title: string;        // Display title
  content: string;       // Text content
  updatedAt: number;
}
```

### Services
```typescript
{
  title: string;
  description: string;
  price: string;        // Formatted price (e.g., "500,000 Ft")
  iconUrl?: string;      // Optional icon URL
  featured: boolean;     // Featured service flag
  createdAt: number;
}
```

### Users
```typescript
{
  name: string;
  email: string;
  role: "user" | "admin";
  avatar?: string;       // Optional avatar URL
  createdAt: number;
}
```

### Settings
```typescript
{
  siteName?: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  contactEmail?: string;
  contactPhone?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  updatedAt: number;
}
```

## 🔌 API Functions

### Images (`convex/images.ts`)

- **`getAll()`** - Get all images (ordered by creation date, descending)
- **`add({ title, url })`** - Add new image
- **`update({ id, title, url })`** - Update existing image
- **`remove({ id })`** - Delete image

**Legacy exports (for backward compatibility):**
- `getImages()` - Same as `getAll()`
- `addImage({ url, title })` - Same as `add()`

### Texts (`convex/texts.ts`)

- **`getAll()`** - Get all texts (ordered by update date, descending)
- **`add({ key, section, title, content })`** - Add new text
- **`update({ id, key, section, title, content })`** - Update existing text
- **`remove({ id })`** - Delete text
- **`getByKey({ key })`** - Get text by unique key
- **`getBySection({ section })`** - Get all texts in a section

### Services (`convex/services.ts`)

- **`getAll()`** - Get all services (ordered by creation date, descending)
- **`add({ title, description, price, iconUrl?, featured })`** - Add new service
- **`update({ id, title, description, price, iconUrl?, featured })`** - Update service
- **`remove({ id })`** - Delete service
- **`getFeatured()`** - Get only featured services

### Users (`convex/users.ts`)

- **`getAll()`** - Get all users (ordered by creation date, descending)
- **`add({ name, email, role, avatar? })`** - Add new user
- **`update({ id, name?, email?, role?, avatar? })`** - Update user
- **`remove({ id })`** - Delete user
- **`toggleAdmin({ id, role })`** - Toggle user admin status
- **`getByEmail({ email })`** - Get user by email
- **`getAdmins()`** - Get all admin users

### Settings (`convex/settings.ts`)

- **`getAll()`** - Get all settings (returns single settings object or null)
- **`add({ ...settings })`** - Create initial settings (throws if exists)
- **`update({ ...settings })`** - Update settings (creates if doesn't exist)
- **`remove()`** - Delete all settings
- **`getValue({ key })`** - Get specific setting value by key

## 🚀 Usage Examples

### Frontend Usage

```typescript
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

// Query example
const images = useQuery(api.images.getAll) ?? [];

// Mutation example
const addImage = useMutation(api.images.add);
await addImage({ title: "My Image", url: "https://..." });

// Update example
const updateImage = useMutation(api.images.update);
await updateImage({ 
  id: imageId, 
  title: "Updated Title", 
  url: "https://..." 
});

// Delete example
const deleteImage = useMutation(api.images.remove);
await deleteImage({ id: imageId });
```

### Direct Convex Function Calls

```typescript
// In Convex functions
import { query, mutation } from "./_generated/server";
import { api } from "./_generated/api";

// Call another Convex function
const images = await ctx.runQuery(api.images.getAll);
```

## 🔒 Validation

- **Users**: Email uniqueness check on add
- **Settings**: Single settings object (update creates if missing)
- **All mutations**: Type-safe with Convex validators

## 📝 Notes

- All timestamps use `Date.now()` (milliseconds since epoch)
- IDs are Convex document IDs (`v.id("tableName")`)
- Optional fields use `v.optional()` validator
- Union types for roles: `v.union(v.literal("user"), v.literal("admin"))`

## 🐛 Troubleshooting

**"Table not found" error:**
- Run `npx convex dev` to sync schema
- Check `convex/schema.ts` has the table defined

**"Function not found" error:**
- Run `npx convex codegen` to regenerate API
- Check function is exported from the module

**Type errors:**
- Ensure Convex is running (`npx convex dev`)
- Regenerate types: `npx convex codegen`
- Check imports use `@/convex/_generated/api`

## 🔄 Deployment

1. **Development:**
   ```bash
   npx convex dev
   ```

2. **Production:**
   ```bash
   npx convex deploy --prod
   ```

3. **Codegen (after schema changes):**
   ```bash
   npx convex codegen
   ```
