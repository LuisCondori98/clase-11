import express from "express";
import { productos } from "../utils.js";

export const testPlantillaProducts = express.Router();

testPlantillaProducts.get("/", (req, res) => {
  const title = "Un hermoso titulo que hable sobre boquita!";
  return res.status(200).render("test-plantilla-products", {
    title,
    productos,
    hora: Date.now(),
    dolar: Math.random() * 100 + 400,
    golesBoca: 2,
  });
});
