import Link from "next/link";
import { Fragment } from "react";

const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

// Renders the small inline syntax used in blog content: [label](href) and **bold**.
export default function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    if (match[1]) {
      const href = match[2];
      parts.push(
        href.startsWith("/") ? (
          <Link key={index} href={href}>{match[1]}</Link>
        ) : (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">{match[1]}</a>
        ),
      );
    } else {
      parts.push(<strong key={index}>{match[3]}</strong>);
    }
    last = index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((part, i) => <Fragment key={i}>{part}</Fragment>)}</>;
}

export const plainText = (text: string) => text.replace(pattern, (_m, label, _href, bold) => label ?? bold);
