import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
//get slugs
//get post from slug
//get all posts

const DOC_PATH = path.join(process.cwd(), 'posts');

/**
 * Get slugs
 * loccate files
 * extract the name
 */
export const getSlugs = () => {
    const fileNames = fs.readdirSync('posts');
    return fileNames.map(fileName => fileName.split('.')[0])
}

/**
 * Get post from slug
 * attach given slug to DOC_PATH
 * retrieve document content
 */
export const getPostFromSlug = slug => {
    const docDetails = fs.readFileSync(path.join(DOC_PATH, `${slug}.mdx`),'utf8');
    const { content, data } = matter(docDetails)
    return {content,
        meta: {
            slug,
            excerpt: data.excerpt,
            title: data.title,
            tags: (data.tags).sort(),
            date: (data.date).toString(),
          },
    }
}

/**
 * Get all posts
 * get all slugs
 * get post for each slug
 */
export const getAllPosts = () => {
    const posts = getSlugs().map(slug => getPostFromSlug(slug));
    return posts;
}
