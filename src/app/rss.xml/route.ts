import { MetadataRoute } from 'next'

export default function rss(): MetadataRoute {
  const baseUrl = 'https://complianceflow.es'

  // Blog articles
  const articles = [
    {
      title: 'Guía Completa de Integración SII con API REST',
      description:
        'Aprende a integrar el Suministro Inmediato de Información (SII) de la AEAT en tu aplicación en menos de 30 minutos. Tutorial paso a paso con ejemplos de código.',
      slug: 'guia-integracion-sii',
      date: '2026-01-04T00:00:00Z',
      category: 'Tutorial',
    },
    {
      title: 'Verifactu: Todo lo que Necesitas Saber en 2026',
      description:
        'Guía completa sobre Verifactu, el nuevo sistema de verificación de facturas de Hacienda. Requisitos, plazos y cómo prepararte.',
      slug: 'verifactu-que-es',
      date: '2026-01-03T00:00:00Z',
      category: 'Guía',
    },
    {
      title: 'TicketBAI en el País Vasco: Guía Práctica 2026',
      description:
        'Todo sobre TicketBAI: obligaciones, sanciones, integración técnica y mejores prácticas para empresas vascas.',
      slug: 'ticketbai-pais-vasco',
      date: '2026-01-02T00:00:00Z',
      category: 'Guía',
    },
    {
      title: 'API REST vs SOAP para Compliance Fiscal',
      description:
        'Comparativa técnica entre APIs REST y SOAP para integraciones fiscales. Por qué REST es mejor para la mayoría de casos.',
      slug: 'api-rest-vs-soap',
      date: '2026-01-01T00:00:00Z',
      category: 'Comparativa',
    },
  ]

  const rssItems = articles
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${baseUrl}/blog/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${article.slug}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <category>${article.category}</category>
      <author>noreply@complianceflow.es (ComplianceFlow Team)</author>
    </item>`
    )
    .join('')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ComplianceFlow Blog - Compliance Fiscal y APIs</title>
    <description>Artículos técnicos, guías y tutoriales sobre SII, Verifactu, TicketBAI y compliance fiscal en España</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>es-ES</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>ComplianceFlow</title>
      <link>${baseUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    <copyright>Copyright ${new Date().getFullYear()} ComplianceFlow SL. Todos los derechos reservados.</copyright>
    <managingEditor>noreply@complianceflow.es (ComplianceFlow Team)</managingEditor>
    <webMaster>tech@complianceflow.es (Tech Team)</webMaster>
    <category>Technology</category>
    <category>Finance</category>
    <category>Compliance</category>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
