import express from "express";
import { productos } from "../utils.js";

export const productsRouter = express.Router();

productsRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const productoEncontrado = productos.find((p) => p.id == id);
  return res.status(200).json({
    status: "success",
    msg: "producto encontrado",
    data: productoEncontrado,
  });
});

productsRouter.get("/", (req, res) => {
  return res
    .status(200)
    .json({ status: "success", msg: "todos los productos", data: productos });
});

productsRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  productos = productos.filter((p) => p.id != id);
  return res
    .status(200)
    .json({ status: "success", msg: "producto eliminado", data: {} });
});

productsRouter.post("/", (req, res) => {
  const producto = req.body;
  producto.id = (Math.random() * 1000000000000000).toFixed(0);
  producto.createdAt = Date.now();
  productos.push(producto);
  return res
    .status(201)
    .json({ status: "success", msg: "producto creado", data: producto });
});

productsRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const producto = req.body;
  const indiceEncontrado = productos.findIndex((p) => p.id == id);
  productos[indiceEncontrado] = {
    id: productos[indiceEncontrado].id,
    ...producto,
  };
  return res.status(200).json({
    status: "success",
    msg: "producto modificado",
    data: productos[indiceEncontrado],
  });
});
