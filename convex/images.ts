import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("images").order("desc").collect();
  },
});

export const add = mutation({
  args: {
    title: v.string(),
    url: v.string(),
  },
  handler: async (ctx, args) => {
    const imageId = await ctx.db.insert("images", {
      title: args.title,
      url: args.url,
      createdAt: Date.now(),
    });
    return imageId;
  },
});

export const update = mutation({
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

export const remove = mutation({
  args: {
    id: v.id("images"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Legacy exports for backward compatibility
export const getImages = query({
  handler: async (ctx) => {
    return await ctx.db.query("images").order("desc").collect();
  },
});

export const addImage = mutation({
  args: {
    url: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const imageId = await ctx.db.insert("images", {
      url: args.url,
      title: args.title,
      createdAt: Date.now(),
    });
    return imageId;
  },
});
