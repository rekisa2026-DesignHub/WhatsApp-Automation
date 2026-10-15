import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import { getPostBySlug, BLOG_POSTS } from '../data/blogPosts';

export default function BlogArticle() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  if (!post) return <Navigate to="/resources" replace />;

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`https://rekisa.co.za/resources/${post.slug}`}
        image={post.image}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': post.title,
          'description': post.excerpt,
          'image': post.image,
          'datePublished': '2026-07-02',
          'author': { '@type': 'Organization', 'name': 'Rekisa' },
          'publisher': { '@type': 'Organization', 'name': 'Rekisa' },
        }}
      />

      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="breadcrumbs"><Link to="/">Home</Link> / <Link to="/resources">Resources</Link> / {post.category}</div>
          <span className="eyebrow on-dark">{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div style={{ display: 'flex', gap: 20, marginTop: 20, color: 'var(--gray-400)', fontSize: '0.9rem' }}>
            <span><Calendar size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />{post.date}</span>
            <span><Clock size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />{post.readTime}</span>
            <span>By Rekisa Team</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose">
            <img src={post.image} alt="" style={{ marginTop: 0 }} />

            <div style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: 16, padding: 24, margin: '2em 0' }}>
              <h3 style={{ marginTop: 0 }}>Key takeaways</h3>
              <ul>
                {post.keyTakeaways.map((k) => <li key={k}>{k}</li>)}
              </ul>
            </div>

            {post.sections.map((section, idx) => (
              <div key={idx}>
                <h2>{section.h}</h2>
                <p>{section.body}</p>
                {section.list && (
                  <ul>
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}

            <div style={{ background: 'linear-gradient(160deg, rgba(124,58,237,0.06), rgba(20,184,166,0.06))', border: '1px solid var(--gray-200)', borderRadius: 16, padding: 32, margin: '3em 0 1em' }}>
              <h3 style={{ marginTop: 0 }}>Ready to apply this in your business?</h3>
              <p style={{ color: 'var(--gray-700)' }}>
                Book a Digital Operating System Audit and we&rsquo;ll help you turn these ideas into a practical plan for your team.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/audit" className="btn btn--gradient">Book an Audit <ArrowRight size={16} /></Link>
                <Link to={post.relatedServiceUrl} className="btn btn--outline">{post.relatedServiceLabel} <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
            <div>
              <span className="eyebrow">More reading</span>
              <h2 style={{ margin: 0 }}>Related resources</h2>
            </div>
            <Link to="/resources" className="btn btn--ghost">All resources <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid--3">
            {related.map((p) => (
              <Link key={p.slug} to={`/resources/${p.slug}`} className="card" style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src={p.image} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 24 }}>
                  <span className="tag">{p.category}</span>
                  <h3 style={{ fontSize: '1.05rem', margin: '12px 0 6px' }}>{p.title}</h3>
                  <span style={{ color: 'var(--purple-500)', fontWeight: 600, display: 'inline-flex', gap: 4, alignItems: 'center' }}>Read more <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
