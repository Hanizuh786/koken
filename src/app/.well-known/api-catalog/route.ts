import { agentPaths } from "@/lib/agent";
import { absoluteUrl } from "@/lib/site";

// API catalog (RFC 9727): a well-known entry point so agents can discover the
// quote API spec, the product catalogue and llms.txt without crawling pages (AAO).
export const dynamic = "force-static";

export function GET() {
  const linkset = {
    linkset: [
      {
        anchor: absoluteUrl(agentPaths.contactApi),
        "service-desc": [{ href: absoluteUrl(agentPaths.openapi), type: "application/vnd.oai.openapi+json" }],
        "service-doc": [{ href: absoluteUrl(agentPaths.llmsFull), type: "text/plain" }],
      },
      {
        anchor: absoluteUrl(agentPaths.catalog),
        describedby: [{ href: absoluteUrl(agentPaths.llms), type: "text/plain" }],
      },
    ],
  };

  return new Response(JSON.stringify(linkset, null, 2), {
    headers: {
      "Content-Type": 'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"',
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
