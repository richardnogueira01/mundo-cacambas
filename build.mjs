#!/usr/bin/env node
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(__dirname, "client");

const vite = spawn("vite", ["build"], {
  cwd: clientDir,
  stdio: "inherit",
  shell: true,
});

vite.on("close", (code) => {
  process.exit(code);
});
