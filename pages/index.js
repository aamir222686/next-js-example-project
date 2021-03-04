import { server } from '../config';
import Head from 'next/head';
import ArticleList from '../components/ArticleList';
import Meta from '../components/Meta';

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}

const Home = ({ articles }) => {
  return (
    <div>
      <Meta title="Aamir Next.js" />
      <ArticleList articles={articles} />
    </div>
  )
}

export default Home;
