import { getAllPosts } from "@/src/utils";//show article
import Article from "@/src/components/Article";

const Home = ({posts}) => {
  return (
    <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Article key={post.slug} post={post} />
          </li>
        ))}
    </ul>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPosts()
  .slice(0, 9)
  .map((post) => post.meta);

  return { props: {posts} };
}