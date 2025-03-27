import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { foundation } from "../src/styles/tokens/foundation";
import { semantic } from "../src/styles/tokens/semantic";
import { button } from "../src/styles/tokens/button";
import { heading } from "../src/styles/tokens/heading";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Converts a JavaScript object to SCSS variables
 * @param obj The object to convert
 * @param prefix The prefix for the variable names
 * @returns A string of SCSS variables
 */
function objectToScss(obj: any, prefix: string = ""): string {
  let scss = "";

  for (const [key, value] of Object.entries(obj)) {
    const variableName = prefix ? `${prefix}-${key}` : key;

    if (typeof value === "object" && value !== null) {
      scss += objectToScss(value, variableName);
    } else {
      scss += `$${variableName}: ${value};\n`;
    }
  }

  return scss;
}

/**
 * Generates SCSS files from TypeScript token definitions
 */
function generateScssFiles() {
  const tokensDir = path.join(__dirname, "../src/styles/tokens");

  // Generate foundation.scss
  const foundationScss = objectToScss(foundation);
  fs.writeFileSync(
    path.join(tokensDir, "foundation.scss"),
    `// Foundation Design Tokens\n// Generated from TypeScript\n\n${foundationScss}`
  );

  // Generate semantic.scss
  const semanticScss = objectToScss(semantic);
  fs.writeFileSync(
    path.join(tokensDir, "semantic.scss"),
    `// Semantic Design Tokens\n// Generated from TypeScript\n\n${semanticScss}`
  );

  // Generate button.scss
  const buttonScss = objectToScss(button);
  fs.writeFileSync(
    path.join(tokensDir, "button.scss"),
    `// Button Component Design Tokens\n// Generated from TypeScript\n\n${buttonScss}`
  );

  // Generate heading.scss
  const headingScss = objectToScss(heading);
  fs.writeFileSync(
    path.join(tokensDir, "heading.scss"),
    `// Heading Component Design Tokens\n// Generated from TypeScript\n\n${headingScss}`
  );

  console.log("SCSS files generated successfully!");
}

generateScssFiles();
