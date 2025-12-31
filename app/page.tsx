import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#333'
      }}>
        Image & Font Optimization
      </h1>

      <div style={{
        display: 'flex',
        gap: '15px',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        <Link href="/blog" style={{
          padding: '12px 24px',
          backgroundColor: '#0070f3',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: '500'
        }}>
          Blog
        </Link>
        <Link href="/dashboard" style={{
          padding: '12px 24px',
          backgroundColor: '#0070f3',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: '500'
        }}>
          Dashboard
        </Link>
      </div>

      <h2 style={{
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#333'
      }}>
        Image Optimization Comparison
      </h2>

      {/* Section 1: Standard img tag (BAD) */}
      <div style={{
        marginBottom: '50px',
        padding: '30px',
        backgroundColor: '#fff3e0',
        borderRadius: '12px',
        border: '2px solid #ff9800'
      }}>
        <h3 style={{ 
          color: '#ff9800',
          marginBottom: '15px'
        }}>
          Standard Image Tag
        </h3>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          Using a regular HTML img tag loads the full-size image without optimization.
        </p>
        
        <div style={{
          border: '2px dashed #ff9800',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px'
        }}>
          {/* Using regular img - will cause layout shift */}
          <img 
            src="/sample-image.svg" 
            alt="Unoptimized demo"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto'
            }}
          />
        </div>
      </div>

      <div style={{
        marginBottom: '50px',
        padding: '30px',
        backgroundColor: '#e8f5e9',
        borderRadius: '12px',
        border: '2px solid #4caf50'
      }}>
        <h3 style={{ 
          color: '#4caf50',
          marginBottom: '15px'
        }}>
          Next.js Image Component
        </h3>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          The Next.js Image component automatically optimizes images with proper sizing and modern formats.
        </p>
        
        <div style={{
          border: '2px dashed #4caf50',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px'
        }}>
          {/* Using Next.js Image component */}
          <Image
            src="/sample-image.svg"
            alt="Optimized with Next.js Image component"
            width={600}
            height={400}
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto'
            }}
            priority
          />
        </div>
      </div>

      <div style={{
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '1px solid #e0e0e0'
      }}>
        <h3 style={{ marginTop: 0, color: '#333' }}>Performance Benefits</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '20px'
        }}>
          <div style={{
            padding: '20px',
            backgroundColor: '#e3f2fd',
            borderRadius: '8px'
          }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#0070f3' }}>LCP (Largest Contentful Paint)</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Image component improves LCP by serving optimized, appropriately-sized images.
            </p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#f3e5f5',
            borderRadius: '8px'
          }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#9c27b0' }}>CLS (Cumulative Layout Shift)</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Specifying width and height prevents layout shift as images load.
            </p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#fff3e0',
            borderRadius: '8px'
          }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#ff9800' }}>FCP (First Contentful Paint)</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Self-hosted fonts eliminate external requests, speeding up FCP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
