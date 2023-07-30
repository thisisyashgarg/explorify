import { Eta } from "eta";
import path from "path";
import url from "url";
import fetch from "node-fetch";
import fs from "fs";
import { config } from "dotenv";
config();

const currentModulePath = url.fileURLToPath(import.meta.url);
const templatesDir = path.join(path.dirname(currentModulePath), "templates");
const eta = new Eta({ views: templatesDir });
const PAGE_COUNT = 10;

async function fetchPage() {
  console.log("Fetching page");
  const res = await fetch(process.env.API_URL);
  const data = await res.json();
  return eta.render("./page-template", { ...data });
}

async function generatePage() {
  console.log("Generating pages");
  for (let i = 0; i < PAGE_COUNT; i++) {
    fs.writeFileSync(`./dist/${i + 1}.html`, await fetchPage());
  }
}

generatePage();
