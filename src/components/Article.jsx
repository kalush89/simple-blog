import Link from "next/link";

const Article = ({post}) => {
    return (
        <div>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            <p>{post.excerpt}</p>
        </div>
    );
};

export default Article;