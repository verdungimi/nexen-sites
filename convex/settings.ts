import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getAll = query({
  handler: async (ctx) => {
    const settings = await ctx.db.query("settings").first();
    return settings || null;
  },
});

export const add = mutation({
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
    // Check if settings already exist
    const existing = await ctx.db.query("settings").first();
    
    if (existing) {
      throw new Error("Settings already exist. Use update instead.");
    }

    const settingsId = await ctx.db.insert("settings", {
      siteName: args.siteName,
      logoUrl: args.logoUrl,
      primaryColor: args.primaryColor,
      secondaryColor: args.secondaryColor,
      contactEmail: args.contactEmail,
      contactPhone: args.contactPhone,
      facebookUrl: args.facebookUrl,
      instagramUrl: args.instagramUrl,
      twitterUrl: args.twitterUrl,
      updatedAt: Date.now(),
    });
    return settingsId;
  },
});

export const update = mutation({
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
    
    if (!existing) {
      // If no settings exist, create them
      await ctx.db.insert("settings", {
        siteName: args.siteName,
        logoUrl: args.logoUrl,
        primaryColor: args.primaryColor,
        secondaryColor: args.secondaryColor,
        contactEmail: args.contactEmail,
        contactPhone: args.contactPhone,
        facebookUrl: args.facebookUrl,
        instagramUrl: args.instagramUrl,
        twitterUrl: args.twitterUrl,
        updatedAt: Date.now(),
      });
    } else {
      // Update existing settings
      const updateData: any = {
        updatedAt: Date.now(),
      };
      
      if (args.siteName !== undefined) updateData.siteName = args.siteName;
      if (args.logoUrl !== undefined) updateData.logoUrl = args.logoUrl;
      if (args.primaryColor !== undefined) updateData.primaryColor = args.primaryColor;
      if (args.secondaryColor !== undefined) updateData.secondaryColor = args.secondaryColor;
      if (args.contactEmail !== undefined) updateData.contactEmail = args.contactEmail;
      if (args.contactPhone !== undefined) updateData.contactPhone = args.contactPhone;
      if (args.facebookUrl !== undefined) updateData.facebookUrl = args.facebookUrl;
      if (args.instagramUrl !== undefined) updateData.instagramUrl = args.instagramUrl;
      if (args.twitterUrl !== undefined) updateData.twitterUrl = args.twitterUrl;

      await ctx.db.patch(existing._id, updateData);
    }
  },
});

export const remove = mutation({
  handler: async (ctx) => {
    const settings = await ctx.db.query("settings").first();
    if (settings) {
      await ctx.db.delete(settings._id);
    }
  },
});

// Helper query to get a specific setting value
export const getValue = query({
  args: {
    key: v.string(),
  },
  handler: async (ctx, args) => {
    const settings = await ctx.db.query("settings").first();
    if (!settings) return null;
    
    // Map key to field name
    const keyMap: Record<string, keyof typeof settings> = {
      siteName: "siteName",
      logoUrl: "logoUrl",
      primaryColor: "primaryColor",
      secondaryColor: "secondaryColor",
      contactEmail: "contactEmail",
      contactPhone: "contactPhone",
      facebookUrl: "facebookUrl",
      instagramUrl: "instagramUrl",
      twitterUrl: "twitterUrl",
    };
    
    const field = keyMap[args.key];
    return field ? settings[field] : null;
  },
});
