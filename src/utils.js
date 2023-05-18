import path from "path";
import { fileURLToPath } from "url";
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const uploader = multer({ storage });

export let productos = [
  {
    id: "234514872813534",
    name: "real madridd",
    price: 100,
    createdAt: 1683242395115,
  },
  {
    id: "456514872813512",
    name: "tigre",
    price: 150,
    createdAt: 1683242395117,
  },
  {
    id: "846514872813578",
    name: "river",
    price: 170,
    createdAt: 1683242395118,
  },
];

export let pets = [
  {
    id: "234514872813534",
    name: "alma",
    edad: 3,
    createdAt: 1683242395115,
  },
  {
    id: "456514872813512",
    name: "coqui",
    edad: 2,
    createdAt: 1683242395117,
  },
];
