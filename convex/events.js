import { v } from "convex/values";
import { mutation } from "./server";

export const create = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    lon: v.number(),
    lat: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("events", args);
  },
});