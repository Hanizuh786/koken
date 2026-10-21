import { buildCatalog } from "@/lib/agent";

// Machine-readable catalogue for AI assistants and shopping agents (AAO).
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildCatalog(), {
    headers: { "Access-Control-Allow-Origin": "*", "Cache-Control": "public, max-age=3600" },
  });
}
