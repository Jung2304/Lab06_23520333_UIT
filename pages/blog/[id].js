import Link from 'next/link';
import { useRouter } from 'next/router';
import blogData from '../../data.json';

export async function getStaticPaths() {
  const paths = blogData.map((post) => ({
    params: { id: post.id }
  }));

  return {
    paths,
    fallback: true // Set to true for the challenge
  };
}

export async function getStaticProps({ params }) {
  const post = blogData.find((post) => post.id === params.id);
  
  // Simulate a delay for new posts (fallback behavior)
  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post
    },
    revalidate: 60 // Revalidate every 60 seconds
  };
}

export default function BlogPost({ post }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center'
      }}>
        <h1>Loading...</h1>
        <p>Generating page for this blog post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center'
      }}>
        <h1>Post Not Found</h1>
        <Link href="/" style={{ color: '#0070f3' }}>← Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <Link href="/" style={{ 
        color: '#0070f3', 
        textDecoration: 'none',
        fontSize: '1rem',
        marginBottom: '20px',
        display: 'inline-block'
      }}>
        ← Back to Home
      </Link>
      
      <article>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          color: '#333',
          lineHeight: '1.2'
        }}>
          {post.title}
        </h1>
        
        <div style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#333'
        }}>
          {post.content}
        </div>
      </article>
    </div>
  );
}
