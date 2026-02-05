import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("texts").order("desc").collect();
  },
});

export const add = mutation({
  args: {
    key: v.string(),
    section: v.string(),
    title: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const textId = await ctx.db.insert("texts", {
      key: args.key,
      section: args.section,
      title: args.title,
      content: args.content,
      updatedAt: Date.now(),
    });
    return textId;
  },
});

export const update = mutation({
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

export const remove = mutation({
  args: {
    id: v.id("texts"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Helper query to get text by key
export const getByKey = query({
  args: {
    key: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("texts")
      .filter((q) => q.eq(q.field("key"), args.key))
      .first();
  },
});

// Helper query to get texts by section
export const getBySection = query({
  args: {
    section: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("texts")
      .filter((q) => q.eq(q.field("section"), args.section))
      .collect();
  },
});
