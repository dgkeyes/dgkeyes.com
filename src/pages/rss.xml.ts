import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../lib/site';
import { getPosts, postUrl, excerpt } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${site.name} · Writing`,
    description: site.description,
    site: context.site ?? site.url,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? excerpt(post),
      link: postUrl(post),
    })),
  });
}
