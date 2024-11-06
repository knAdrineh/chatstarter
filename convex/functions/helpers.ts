import { customCtx, customQuery } from "convex-helpers/server/customFunctions";
import { query } from "../_generated/server";
import { getCurrentUser } from "./user";

export const authenticatedQuery = customQuery(
  query,
  customCtx(async (ctx) => {
    const user = await getCurrentUser(ctx);
    if (!user) {
      throw new Error("Unauthorized");
    }
    return { user };
  })
);
