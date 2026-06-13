# Focal-Docify

A super easy-to-use markdown document preview framework for Bun. Write markdown, get a beautiful documentation site. [Demo](https://docify-demo.vercel.app)

## Quick Start

1. Install dependency:

```bash
bunx jsr add @focal/docify
```

2. Create `index.ts` in your document root:

```typescript
export { default } from "@focal/docify";
```

3. Create `SUMMARY.md` and `README.md`:

   `SUMMARY.md` defines the left navigation sidebar. `README.md` is the
   homepage. Metadata between `---` is optional.

```markdown
---
name: My Document
logo: https://example.com/logo.png
footer: Copyright (c) 2023
---

# TABLE OF CONTENT

## Get Started

- [Installation](/folder1/installation.md)

## API References

- [Properties](/folder2/properties.md)
- [Methods](/folder2/methods.md)
```

4. Create markdown files under subdirectories:

   ```
   ├─ folder1
   │   └─ installation.md
   ├─ folder2
   │   ├─ properties.md
   │   └─ methods.md
   ├─ README.md
   ├─ SUMMARY.md
   └─ index.ts
   ```

5. Start the dev server:

```bash
bun run index.ts
```

Bun automatically starts the server when it detects `export default { fetch }`.

## Deploy to Vercel

Push to GitHub, import to Vercel, done. No extra configuration needed.

Vercel reads the exported `fetch` handler directly — no `Bun.serve()` call
involved, so there is no port conflict in the serverless environment. Markdown
files are included via the framework preset automatically.

A minimal `vercel.json` is optional (adds `includeFiles` for markdown):

```json
{
    "bunVersion": "1.x",
    "functions": {
        "index.ts": {
            "includeFiles": "{**/*.md,package.json}"
        }
    }
}
```
