// The data lives in products.json so that scripts/prerender.mjs can read the
// same source the app does, without duplicating it.
import data from "./products.json";

export const products = data;

export type Product = (typeof products)[0];
