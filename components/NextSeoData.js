import { ArticleJsonLd, NextSeo } from 'next-seo'

import React from 'react'

const NextSeoData = ({ slug, metadata, publishedDate }) => {
  // Verificar se metadata e suas propriedades existem
  const title = metadata?.title || 'Project'
  const summary = metadata?.summary || metadata?.frontmatter?.summary || 'Project description'
  const image = metadata?.imageUrl || metadata?.frontmatter?.image || ''

  return (
    <>
      <NextSeo
        additionalMetaTags={[
          { property: 'twitter:card', content: 'summary_large_image' },
          {
            property: 'twitter:url',
            content: `https://italosantana.dev/projects/${slug}`,
          },
          { property: 'twitter:title', content: title },
          {
            property: 'twitter:description',
            content: summary,
          },
          { property: 'twitter:image', content: image },
        ]}
        canonical={`https://italosantana.dev/projects/${slug}`}
        description={summary}
        openGraph={{
          url: `https://italosantana.dev/projects/${slug}`,
          site_name: 'Italo Santana',
          title: title,
          description: summary,
          type: 'article',
          article: {
            authors: ['Italo Santana'],
            publishedTime: publishedDate,
            modifiedTime: publishedDate,
            tags: ['Programming', 'Web Development', 'Software Engineering'],
          },
          images: [
            {
              url: image,
              alt: title,
            },
          ],
        }}
        title={title}
      />
      <ArticleJsonLd
        authorName="Italo Santana"
        dateModified={publishedDate}
        datePublished={publishedDate}
        description={summary}
        images={[image]}
        publisherLogo="https://imagizer.imageshack.com/a/img923/7612/A5tDeP.png"
        publisherName="Italo Santana"
        title={title}
        url={`https://italosantana.dev/projects/${slug}`}
      />
    </>
  )
}

export default NextSeoData
