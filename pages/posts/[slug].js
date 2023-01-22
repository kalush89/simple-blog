import { getSlugs, getPostFromSlug } from "@/src/utils";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighlight from "rehype-highlight";
import Head from "next/head";
//Base16 / Atelier-Cave
import "highlight.js/styles/base16/atelier-cave.css";


const PostPage = ({ post }) => {
    return(
        <div>
            <Head>
                <title>{post.meta.title}</title>
            </Head>
            <MDXRemote {...post.source} />
        </div>
    )
}

export default PostPage;

export const getStaticPaths = async () => {
    const slugs = getSlugs();
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const { slug } = params;
    const {content, meta} = getPostFromSlug(slug);
    const MDXSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
              rehypeHighlight,
            ],
          },
    });
    
    return {
        props:{
            post:{source: MDXSource, meta}
        }
    }
}