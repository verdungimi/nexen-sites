import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("services").order("desc").collect();
  },
});

export const add = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    price: v.string(),
    iconUrl: v.optional(v.string()),
    featured: v.boolean(),
  },
  handler: async (ctx, args) => {
    const serviceId = await ctx.db.insert("services", {
      title: args.title,
      description: args.description,
      price: args.price,
      iconUrl: args.iconUrl,
      featured: args.featured,
      createdAt: Date.now(),
    });
    return serviceId;
  },
});

export const update = mutation({
  args: {
    id: v.id("services"),
    title: v.string(),
    description: v.string(),
    price: v.string(),
    iconUrl: v.optional(v.string()),
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

export const remove = mutation({
  args: {
    id: v.id("services"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Helper query to get featured services
export const getFeatured = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("services")
      .filter((q) => q.eq(q.field("featured"), true))
      .order("desc")
      .collect();
  },
});
