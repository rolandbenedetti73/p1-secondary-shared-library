import * as React from "react";

/**
 * Shared Markdown-ish prose renderer used by RichText, Tabs and Accordion.
 * Supports a small, safe subset:
 *   ##  / ###      headings
 *   - / *          bullet list items
 *   >              blockquote
 *   blank line     paragraph break
 * plus inline emphasis shorthand:
 *   ==highlight==  → <mark> (yellow)
 *   *accent*       → bold, primary color
 *   _serif_        → italic serif
 *
 * This is a shared utility — it is NOT a Puck block.
 */

export interface ProseOptions {
  baseSize?: "regular" | "large";
  dropCap?: boolean;
  tight?: boolean;
}

let keySeq = 0;
const nextKey = (p: string) => `${p}-${keySeq++}`;

/** Parse inline emphasis (==highlight== / *accent* / _serif_) into React nodes. */
export function inline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const re = /(==([^=]+)==)|(\*([^*]+)\*)|(_([^_]+)_)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[2] != null) {
      nodes.push(
        <mark key={nextKey("hl")} className="rounded-sm bg-p1-warning/40 px-0.5 text-p1-text">
          {m[2]}
        </mark>
      );
    } else if (m[4] != null) {
      nodes.push(
        <strong key={nextKey("ac")} className="font-semibold text-p1-primary">
          {m[4]}
        </strong>
      );
    } else if (m[6] != null) {
      nodes.push(
        <em key={nextKey("se")} className="font-serif italic">
          {m[6]}
        </em>
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function renderProse(raw: string, opts: ProseOptions = {}): React.ReactNode[] {
  const large = opts.baseSize === "large";
  const bodyCls = large ? "text-lg md:text-xl" : "text-base md:text-lg";
  const gap = opts.tight ? "mb-p1-sm" : "mb-p1-md";
  const lines = String(raw || "").split("\n");

  const out: React.ReactNode[] = [];
  let para: string[] = [];
  let list: string[] | null = null;

  const flushPara = () => {
    if (para.length) {
      const isFirst = out.length === 0 && opts.dropCap;
      out.push(
        <p
          key={nextKey("p")}
          className={`${bodyCls} ${gap} max-w-prose text-pretty leading-relaxed text-p1-text/80 ${
            isFirst
              ? "first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-p1-primary"
              : ""
          }`}
        >
          {inline(para.join(" "))}
        </p>
      );
      para = [];
    }
  };
  const flushList = () => {
    if (list && list.length) {
      out.push(
        <ul key={nextKey("ul")} className={`${gap} flex list-none flex-col gap-p1-sm p-0`}>
          {list.map((it, i) => (
            <li key={i} className={`flex items-start gap-p1-sm ${bodyCls} leading-relaxed text-p1-text/80`}>
              <span className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-p1-primary" />
              <span>{inline(it)}</span>
            </li>
          ))}
        </ul>
      );
      list = null;
    }
  };

  lines.forEach((ln) => {
    const line = ln.trim();
    if (line === "") {
      flushPara();
      flushList();
      return;
    }
    if (/^###\s+/.test(line)) {
      flushPara();
      flushList();
      out.push(
        <h3 key={nextKey("h3")} className="mb-p1-sm mt-p1-sm text-xl font-bold tracking-tight text-p1-text">
          {inline(line.replace(/^###\s+/, ""))}
        </h3>
      );
    } else if (/^##\s+/.test(line)) {
      flushPara();
      flushList();
      out.push(
        <h2 key={nextKey("h2")} className="mb-p1-sm mt-p1-md text-2xl font-bold tracking-tight text-p1-text md:text-3xl">
          {inline(line.replace(/^##\s+/, ""))}
        </h2>
      );
    } else if (/^>\s+/.test(line)) {
      flushPara();
      flushList();
      out.push(
        <blockquote key={nextKey("bq")} className={`${gap} border-l-4 border-p1-warning pl-p1-md`}>
          <p className="font-serif text-xl italic leading-snug text-p1-text text-pretty">
            {inline(line.replace(/^>\s+/, ""))}
          </p>
        </blockquote>
      );
    } else if (/^[-*]\s+/.test(line)) {
      flushPara();
      if (!list) list = [];
      list.push(line.replace(/^[-*]\s+/, ""));
    } else {
      flushList();
      para.push(line);
    }
  });
  flushPara();
  flushList();
  return out;
}
