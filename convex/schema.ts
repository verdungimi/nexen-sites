import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  images: defineTable({
    url: v.string(),
    title: v.string(),
    createdAt: v.number(),
  }),
});
