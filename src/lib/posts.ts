import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** All published posts, newest first. Drafts are excluded from production builds. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postUrl(post: Post): string {
  return `/posts/${post.id}`;
}

const long = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const medium = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const short = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

export const formatDate = {
  long: (d: Date) => long.format(d),
  medium: (d: Date) => medium.format(d),
  short: (d: Date) => short.format(d),
  iso: (d: Date) => d.toISOString().slice(0, 10),
};

/** First paragraph of the post body as plain text, for meta descriptions. */
export function excerpt(post: Post): string {
  const body = post.body ?? '';
  const para = body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .find((p) => p && !/^[<#>!]/.test(p));
  return (para ?? '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`]/g, '')
    .slice(0, 200);
}
