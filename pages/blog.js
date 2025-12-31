import Link from 'next/link';
import blogData from '../data.json';

export async function getStaticProps() {
  return {
    props: {
      posts: blogData
    }
  };
}

export default function Home({ posts }) {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '10px',
        color: '#333'
      }}>
        Blog
      </h1>
      <p style={{ 
        color: '#666', 
        marginBottom: '40px',
        fontSize: '1.1rem'
      }}>
        Latest articles and tutorials
      </p>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px' 
      }}>
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/blog/${post.id}`}
            style={{ textDecoration: 'none' }}
          >
            <div style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '24px',
              backgroundColor: '#fff',
              transition: 'all 0.2s',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <h2 style={{ 
                margin: '0 0 8px 0',
                color: '#0070f3',
                fontSize: '1.5rem'
              }}>
                {post.title}
              </h2>
              <p style={{ 
                margin: 0,
                color: '#666',
                lineHeight: '1.6'
              }}>
                {post.content.substring(0, 120)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
