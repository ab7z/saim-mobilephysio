import Head from 'next/head';
import {
    absoluteUrl,
    DEFAULT_DESCRIPTION,
    DEFAULT_IMAGE,
    DEFAULT_IMAGE_ALT,
    DEFAULT_TITLE,
    SITE_NAME,
} from '../lib/seo';

const safeJson = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

export default function Seo({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    path = '/',
    image = DEFAULT_IMAGE,
    imageAlt = DEFAULT_IMAGE_ALT,
    noindex = false,
    structuredData = [],
}) {
    const canonicalUrl = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);
    const robots = noindex
        ? 'noindex, follow'
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    const jsonLd = Array.isArray(structuredData) ? structuredData : [structuredData];

    return (
        <Head>
            <title>{ title }</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport"/>
            <meta name="description" content={ description } key="description"/>
            <meta name="robots" content={ robots } key="robots"/>
            <meta name="author" content={ SITE_NAME } key="author"/>
            <meta name="theme-color" content="#38a815" key="theme-color"/>

            <link rel="canonical" href={ canonicalUrl } key="canonical"/>
            <link rel="alternate" hrefLang="de-DE" href={ canonicalUrl } key="alternate-de"/>
            <link rel="alternate" hrefLang="x-default" href={ canonicalUrl } key="alternate-default"/>

            <meta property="og:type" content="website" key="og:type"/>
            <meta property="og:locale" content="de_DE" key="og:locale"/>
            <meta property="og:site_name" content={ SITE_NAME } key="og:site_name"/>
            <meta property="og:title" content={ title } key="og:title"/>
            <meta property="og:description" content={ description } key="og:description"/>
            <meta property="og:url" content={ canonicalUrl } key="og:url"/>
            <meta property="og:image" content={ imageUrl } key="og:image"/>
            <meta property="og:image:alt" content={ imageAlt } key="og:image:alt"/>
            <meta property="og:image:type" content="image/webp" key="og:image:type"/>

            <meta name="twitter:card" content="summary_large_image" key="twitter:card"/>
            <meta name="twitter:title" content={ title } key="twitter:title"/>
            <meta name="twitter:description" content={ description } key="twitter:description"/>
            <meta name="twitter:image" content={ imageUrl } key="twitter:image"/>
            <meta name="twitter:image:alt" content={ imageAlt } key="twitter:image:alt"/>

            { jsonLd.filter(Boolean).map((data, index) => (
                <script
                    key={ `structured-data-${index}` }
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: safeJson(data) }}
                />
            )) }
        </Head>
    );
}
