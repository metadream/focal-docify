import { getDocument, getReadme, getSummary, meta } from "./docs.ts";
import { tmpl } from "./tmpl.ts";

function render(template: string, data: Record<string, unknown>): string {
    return template.replace(/\{\{= ([^}]+)\}\}/g, (_, expr: string) => {
        try {
            const keys = Object.keys(data);
            const values = Object.values(data);
            return String(new Function(...keys, `return ${expr}`)(...values));
        } catch {
            return "";
        }
    });
}

async function fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const summary = await getSummary();
    const content = pathname === "/" ? await getReadme() : await getDocument(pathname);

    return new Response(render(tmpl, { meta, summary, content }), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
    });
}

export default { fetch };
