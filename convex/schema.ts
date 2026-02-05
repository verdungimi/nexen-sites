import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

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
    iconUrl: v.optional(v.string()),
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
    updatedAt: v.number(),
  }),
});
