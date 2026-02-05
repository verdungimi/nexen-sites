import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

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

export const getImages = query({
  handler: async (ctx) => {
    return await ctx.db.query("images").order("desc").collect();
  },
});
