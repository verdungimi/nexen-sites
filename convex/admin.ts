// Placeholder Convex functions for Admin Dashboard
// Replace these with your actual implementations

import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// ============================================
// IMAGES
// ============================================

export const getImages = query({
  handler: async (ctx) => {
    // Replace with actual query
    return await ctx.db.query("images").order("desc").collect();
  },
});

export const addImage = mutation({
  args: {
    title: v.string(),
    url: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("images", {
      title: args.title,
      url: args.url,
      createdAt: Date.now(),
    });
  },
});

export const updateImage = mutation({
  args: {
    id: v.id("images"),
    title: v.string(),
    url: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      title: args.title,
      url: args.url,
    });
  },
});

export const deleteImage = mutation({
  args: { id: v.id("images") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// ============================================
// TEXTS
// ============================================

export const getAllTexts = query({
  handler: async (ctx) => {
    // Replace with actual query
    return await ctx.db.query("texts").collect();
  },
});

export const addText = mutation({
  args: {
    key: v.string(),
    section: v.string(),
    title: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("texts", {
      key: args.key,
      section: args.section,
      title: args.title,
      content: args.content,
      updatedAt: Date.now(),
    });
  },
});

export const updateText = mutation({
  args: {
    id: v.id("texts"),
    key: v.string(),
    section: v.string(),
    title: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      key: args.key,
      section: args.section,
      title: args.title,
      content: args.content,
      updatedAt: Date.now(),
    });
  },
});

export const deleteText = mutation({
  args: { id: v.id("texts") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// ============================================
// SERVICES
// ============================================

export const getAllServices = query({
  handler: async (ctx) => {
    // Replace with actual query
    return await ctx.db.query("services").collect();
  },
});

export const addService = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    price: v.string(),
    iconUrl: v.string(),
    featured: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("services", {
      title: args.title,
      description: args.description,
      price: args.price,
      iconUrl: args.iconUrl,
      featured: args.featured,
      createdAt: Date.now(),
    });
  },
});

export const updateService = mutation({
  args: {
    id: v.id("services"),
    title: v.string(),
    description: v.string(),
    price: v.string(),
    iconUrl: v.string(),
    featured: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      title: args.title,
      description: args.description,
      price: args.price,
      iconUrl: args.iconUrl,
      featured: args.featured,
    });
  },
});

export const deleteService = mutation({
  args: { id: v.id("services") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// ============================================
// USERS
// ============================================

export const getAllUsers = query({
  handler: async (ctx) => {
    // Replace with actual query
    return await ctx.db.query("users").collect();
  },
});

export const toggleAdmin = mutation({
  args: {
    id: v.id("users"),
    role: v.union(v.literal("user"), v.literal("admin")),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      role: args.role,
    });
  },
});

export const deleteUser = mutation({
  args: { id: v.id("users") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// ============================================
// SETTINGS
// ============================================

export const getSettings = query({
  handler: async (ctx) => {
    // Replace with actual query
    const settings = await ctx.db.query("settings").first();
    return settings || {};
  },
});

export const updateSettings = mutation({
  args: {
    siteName: v.optional(v.string()),
    logoUrl: v.optional(v.string()),
    primaryColor: v.optional(v.string()),
    secondaryColor: v.optional(v.string()),
    contactEmail: v.optional(v.string()),
    contactPhone: v.optional(v.string()),
    facebookUrl: v.optional(v.string()),
    instagramUrl: v.optional(v.string()),
    twitterUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db.query("settings").first();
    if (existing) {
      await ctx.db.patch(existing._id, args);
    } else {
      await ctx.db.insert("settings", args);
    }
  },
});

// ============================================
// DASHBOARD STATS
// ============================================

export const getImageCount = query({
  handler: async (ctx) => {
    const images = await ctx.db.query("images").collect();
    return images.length;
  },
});

export const getTextCount = query({
  handler: async (ctx) => {
    const texts = await ctx.db.query("texts").collect();
    return texts.length;
  },
});

export const getServiceCount = query({
  handler: async (ctx) => {
    const services = await ctx.db.query("services").collect();
    return services.length;
  },
});

export const getUserCount = query({
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users.length;
  },
});
