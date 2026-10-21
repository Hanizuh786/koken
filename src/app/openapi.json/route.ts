import { agentPaths, businessTypes, quoteFields } from "@/lib/agent";
import { products } from "@/data/products";
import { company, siteUrl } from "@/lib/site";

// OpenAPI description of the actions an agent can take on the site (AAO):
// read the catalogue and send a B2B request for quote.
export const dynamic = "force-static";

export function GET() {
  const fieldProps = Object.fromEntries(
    quoteFields.map((field) => [
      field.name,
      field.name === "businessType"
        ? { type: "string", enum: businessTypes, description: field.label }
        : field.name === "email"
          ? { type: "string", format: "email", description: field.label }
          : { type: "string", description: field.label },
    ]),
  );

  const spec = {
    openapi: "3.1.0",
    info: {
      title: `${company.shortName} B2B catalogue and quote API`,
      version: "1.0.0",
      description:
        "Read the KOKEN HNB product catalogue and send a business request for quote. B2B, adult-market enquiries only; prices are provided on request. Only submit a quote request with the buyer's explicit confirmation of the details and the consent declaration.",
      contact: { name: company.name, email: company.email, url: siteUrl },
    },
    servers: [{ url: siteUrl }],
    paths: {
      [agentPaths.catalog]: {
        get: {
          operationId: "getCatalog",
          summary: "List all products with descriptions, flavour profiles and quote links",
          responses: { "200": { description: "Product catalogue", content: { "application/json": { schema: { type: "object" } } } } },
        },
      },
      [agentPaths.contactApi]: {
        post: {
          operationId: "requestQuote",
          summary: "Send a B2B request for quote to the KOKEN sales team (delivered by email)",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: [...quoteFields.filter((field) => field.required && field.name !== "businessType").map((field) => field.name), "consent"],
                  properties: {
                    ...fieldProps,
                    consent: {
                      type: "string",
                      const: "accepted",
                      description: "Buyer confirms this is a lawful adult-market B2B enquiry.",
                    },
                    lineItems: {
                      type: "array",
                      description: "Products to quote. Use slugs from the catalogue.",
                      items: {
                        type: "object",
                        required: ["slug"],
                        properties: {
                          slug: { type: "string", enum: products.map((product) => product.slug) },
                          quantity: { type: "integer", minimum: 1, description: "Quantity or reference amount" },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          responses: {
            "200": { description: "Request sent" },
            "400": { description: "Missing required fields; the response lists them in `missing`" },
            "500": { description: "Could not send; email the sales team directly" },
          },
        },
      },
    },
  };

  return Response.json(spec, { headers: { "Access-Control-Allow-Origin": "*", "Cache-Control": "public, max-age=3600" } });
}
