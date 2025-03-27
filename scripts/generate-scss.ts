import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

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
async function generateScssFiles() {
  const tokensDir = path.join(__dirname, "../src/styles/tokens");
  const files = fs.readdirSync(tokensDir);

  // Process each .ts file in the tokens directory
  for (const file of files) {
    if (
      file.endsWith(".ts") &&
      !file.endsWith(".d.ts") &&
      file !== "_index.ts"
    ) {
      const tokenName = path.basename(file, ".ts");
      const tokenModule = await import(`../src/styles/tokens/${tokenName}.js`);

      // Get the token object - assume it's exported with the same name as the file
      const tokenObject = tokenModule[tokenName];

      if (tokenObject) {
        const scssContent = objectToScss(tokenObject);
        const scssFileName = `${tokenName}.scss`;

        // Convert TitleCase to kebab-case for the token type in the comment
        const tokenType = tokenName
          .replace(/([A-Z])/g, " $1")
          .trim()
          .replace(/\s+/g, " ")
          .split(" ")
          .join(" ")
          .toLowerCase();

        fs.writeFileSync(
          path.join(tokensDir, scssFileName),
          `// ${
            tokenType.charAt(0).toUpperCase() + tokenType.slice(1)
          } Design Tokens\n` + `// Generated from TypeScript\n\n${scssContent}`
        );

        console.log(`Generated ${scssFileName}`);
      }
    }
  }

  console.log("\nSCSS files generated successfully!");
}

// Need to handle the promise since we're using async/await
generateScssFiles().catch(console.error);
