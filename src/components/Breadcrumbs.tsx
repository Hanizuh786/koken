import Link from "next/link";
import { breadcrumbSchema, type Crumb } from "@/lib/site";
import JsonLd from "./JsonLd";

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const crumbs = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <ol>
        {crumbs.map((crumb, index) => (
          <li key={crumb.path}>
            {index === crumbs.length - 1 ? (
              <span aria-current="page">{crumb.name}</span>
            ) : (
              <Link href={crumb.path}>{crumb.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
