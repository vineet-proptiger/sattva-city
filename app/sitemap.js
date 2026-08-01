export default function sitemap() {
  const baseUrl = 'http://sattvacitydoddajala.co.in'
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
