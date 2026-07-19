import { getTotalExperienceYears } from './experience';

export const SITE_URL = 'https://saim-mobilephysio.de';
export const SITE_NAME = 'Saim Mobilephysio';
export const DEFAULT_TITLE = 'Mobile Physiotherapie in Sankt Augustin | Saim Mobilephysio';
export const DEFAULT_DESCRIPTION = 'Mobile Physiotherapie in Sankt Augustin, Bonn und Umgebung: Hausbesuche, Manuelltherapie, Lymphdrainage und Personal Training mit Faranak Nokhbehzaeem.';
export const DEFAULT_IMAGE = '/service.webp';
export const DEFAULT_IMAGE_ALT = 'Mobile Physiotherapie Behandlung bei einem Hausbesuch';

export const BUSINESS = {
    name: SITE_NAME,
    legalName: 'Saim Mobile Physio',
    practitioner: 'Faranak Nokhbehzaeem',
    phone: '+4915785908915',
    email: 'info@saim-mobilephysio.de',
    streetAddress: 'Wacholderweg 6',
    postalCode: '53757',
    locality: 'Sankt Augustin',
    region: 'Nordrhein-Westfalen',
    country: 'DE',
    latitude: 50.7768,
    longitude: 7.1882,
    googleMapsUrl: 'https://www.google.com/maps?cid=17047543323511838713',
};

export const SERVICE_AREAS = [
    'Sankt Augustin',
    'Bonn',
    'Siegburg',
    'Troisdorf',
    'Hennef',
    'Königswinter',
    'Bad Honnef',
    'Niederkassel',
    'Lohmar',
    'Much',
];

export const SERVICES = [
    {
        name: 'Manuelle Therapie',
        description: 'Gezielte Mobilisation von Gelenken, Wirbeln und Muskelgewebe.',
        serviceType: 'Physiotherapie',
    },
    {
        name: 'Physiotherapie',
        description: 'Krankengymnastik bei Verletzungen, Operationen, neurologischen und orthopädischen Beschwerden.',
        serviceType: 'Physiotherapie',
    },
    {
        name: 'Manuelle Lymphdrainage',
        description: 'Sanfte Ödemtherapie zur Entstauung des Lymphsystems.',
        serviceType: 'Physiotherapie',
    },
    {
        name: 'Atemtherapie',
        description: 'Übungen zur Vertiefung der Atmung und Linderung von Atemwegsbeschwerden.',
        serviceType: 'Physiotherapie',
    },
    {
        name: 'Migränetherapie',
        description: 'Manuelle Behandlung der Hals- und Kiefermuskulatur.',
        serviceType: 'Physiotherapie',
    },
    {
        name: 'Akupressur',
        description: 'Druckbehandlung gezielter Energiepunkte ohne Nadeln.',
        serviceType: 'Physiotherapie',
    },
    {
        name: 'Beckenboden- und Rückentraining',
        description: 'Training der Tiefenmuskulatur für Stabilität und Körperbewusstsein.',
        serviceType: 'Personal Training',
    },
    {
        name: 'Koordination, Ausdauer und Krafttraining',
        description: 'Personal Training abgestimmt auf Konstitution und Ziele.',
        serviceType: 'Personal Training',
    },
    {
        name: 'Wellnessbehandlungen',
        description: 'Anwendungen für Gesicht und Dekolleté.',
        serviceType: 'Wellness',
    },
    {
        name: 'Kinesiologische Tapetechniken',
        description: 'Elastische Tapes zur Unterstützung von Muskeln und Gelenken.',
        serviceType: 'Physiotherapie',
    },
    {
        name: 'Massage',
        description: 'Klassische und gezielte Massagetechniken zur Lösung von Verspannungen.',
        serviceType: 'Physiotherapie',
    },
    {
        name: 'Ozon- / Plasma-Therapie',
        description: 'Hochfrequenztherapie und Plasma-Anwendung zur Anregung von Zell- und Hautregeneration.',
        serviceType: 'Physiotherapie',
    },
];

export const OFFERS = [
    { name: 'Physiotherapeutischer Erstbefund', price: '40.00', serviceName: 'Physiotherapeutischer Erstbefund' },
    { name: 'Krankengymnastik', price: '39.80', serviceName: 'Krankengymnastik' },
    { name: 'Manuelle Therapie', price: '43.00', serviceName: 'Manuelle Therapie' },
    { name: 'Triggerpunktbehandlung', price: '45.00', serviceName: 'Triggerpunktbehandlung' },
    { name: 'Manuelle Lymphdrainage', price: '81.91', serviceName: 'Manuelle Lymphdrainage' },
    { name: 'Klassische Massage', price: '86.00', serviceName: 'Klassische Massage' },
    { name: 'Beckenbodentraining', price: '39.80', serviceName: 'Beckenbodentraining' },
    { name: 'CMD - Kiefergelenksbehandlung', price: '42.00', serviceName: 'CMD - Kiefergelenksbehandlung' },
    { name: 'Ozontherapie mit MFT', price: '150.00', serviceName: 'Niedrig/Hoch Frequenz Ozontherapie mit MFT' },
    { name: 'Kryotherapie / Eis', price: '20.00', serviceName: 'Kryotherapie / Eis' },
    { name: 'Heiße Rolle', price: '30.00', serviceName: 'Heiße Rolle' },
    { name: 'Myofasziales Kinesio-Taping', price: '15.00', serviceName: 'Myofasziales Kinesio-Taping' },
    { name: 'Hausbesuch', price: '28.00', serviceName: 'Hausbesuch' },
];

export const FAQ_ITEMS = [
    {
        question: 'Erstattet meine private Krankenversicherung die Behandlung?',
        answer: 'In der Regel ja. Bei einer Behandlung mit ärztlichem Rezept reichen Sie die Rechnung bei Ihrer PKV ein und erhalten die verordneten Kosten erstattet. Den genauen Erstattungsrahmen klärt Ihr Versicherer.',
    },
    {
        question: 'Was bringe ich zum ersten Termin mit?',
        answer: 'Ihr ärztliches Rezept (sofern vorhanden), bequeme Kleidung und gegebenenfalls Vorbefunde. Ich bringe alles Übrige mit - Liege, Materialien, Tapes.',
    },
    {
        question: 'Wie lange dauert eine Sitzung?',
        answer: 'Verlässlich 60 Minuten. Ich nehme mir die Zeit, die nötig ist - ohne Wechsel zwischen Patienten und ohne den typischen Praxisrhythmus.',
    },
    {
        question: 'Kann ich auch ohne ärztliche Verordnung behandelt werden?',
        answer: 'Ja. Wenn Sie präventiv arbeiten möchten - Personal Training, Wellness oder vorbeugende Manuelltherapie - ist das jederzeit möglich. Es gelten die Sätze des Honorarkatalogs; bitte sprechen Sie mich für ein individuelles Angebot an.',
    },
    {
        question: 'Behandeln Sie auch außerhalb von Sankt Augustin?',
        answer: 'Ich fahre regelmäßig in einem Radius von 20 km. Falls Ihr Wohnort weiter entfernt liegt, sprechen Sie mich gern an - vieles lässt sich individuell einrichten.',
    },
];

export const absoluteUrl = (path = '/') => {
    if (/^https?:\/\//.test(path)) return path;

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${SITE_URL}${normalizedPath}`;
};

const city = (name) => ({
    '@type': 'City',
    name,
    address: {
        '@type': 'PostalAddress',
        addressCountry: BUSINESS.country,
        addressRegion: BUSINESS.region,
    },
});

export const getHomeStructuredData = () => {
    const totalExperienceYears = getTotalExperienceYears();
    const businessId = `${SITE_URL}/#business`;
    const personId = `${SITE_URL}/#faranak-nokhbehzaeem`;
    const websiteId = `${SITE_URL}/#website`;
    const webpageId = `${SITE_URL}/#webpage`;
    const faqId = `${SITE_URL}/#faq`;
    const serviceArea = {
        '@type': 'GeoCircle',
        geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS.latitude,
            longitude: BUSINESS.longitude,
        },
        geoRadius: 20000,
    };

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': websiteId,
                url: absoluteUrl('/'),
                name: SITE_NAME,
                inLanguage: 'de-DE',
                publisher: { '@id': businessId },
            },
            {
                '@type': 'WebPage',
                '@id': webpageId,
                url: absoluteUrl('/'),
                name: DEFAULT_TITLE,
                description: DEFAULT_DESCRIPTION,
                isPartOf: { '@id': websiteId },
                about: { '@id': businessId },
                hasPart: { '@id': faqId },
                primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: absoluteUrl(DEFAULT_IMAGE),
                    caption: DEFAULT_IMAGE_ALT,
                },
                inLanguage: 'de-DE',
            },
            {
                '@type': ['MedicalBusiness', 'Organization'],
                '@id': businessId,
                name: BUSINESS.name,
                alternateName: 'Saim Mobile Physio',
                legalName: BUSINESS.legalName,
                description: DEFAULT_DESCRIPTION,
                url: absoluteUrl('/'),
                telephone: BUSINESS.phone,
                email: BUSINESS.email,
                contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'Termin- und Patientenanfragen',
                    telephone: BUSINESS.phone,
                    email: BUSINESS.email,
                    availableLanguage: ['de-DE', 'fa-IR'],
                },
                image: [
                    absoluteUrl(DEFAULT_IMAGE),
                    absoluteUrl('/f.webp'),
                    absoluteUrl('/android-chrome-512x512.png'),
                ],
                logo: absoluteUrl('/android-chrome-512x512.png'),
                priceRange: '15 EUR - 150 EUR',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: BUSINESS.streetAddress,
                    postalCode: BUSINESS.postalCode,
                    addressLocality: BUSINESS.locality,
                    addressRegion: BUSINESS.region,
                    addressCountry: BUSINESS.country,
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: BUSINESS.latitude,
                    longitude: BUSINESS.longitude,
                },
                areaServed: SERVICE_AREAS.map(city),
                serviceArea,
                sameAs: [BUSINESS.googleMapsUrl],
                founder: { '@id': personId },
                employee: { '@id': personId },
                availableService: SERVICES.map((service) => ({
                    '@type': 'Service',
                    name: service.name,
                    description: service.description,
                    serviceType: service.serviceType,
                    url: absoluteUrl('/#leistungen'),
                    provider: { '@id': businessId },
                })),
                makesOffer: OFFERS.map((offer) => ({
                    '@type': 'Offer',
                    name: offer.name,
                    url: absoluteUrl('/#preise'),
                    price: offer.price,
                    priceCurrency: 'EUR',
                    itemOffered: {
                        '@type': 'Service',
                        name: offer.serviceName,
                        provider: { '@id': businessId },
                    },
                })),
            },
            {
                '@type': 'Person',
                '@id': personId,
                name: BUSINESS.practitioner,
                jobTitle: 'Physiotherapeutin, Manuelltherapeutin, Ödemtherapeutin und Personal Trainerin',
                description: `Staatlich anerkannte Physiotherapeutin mit ${totalExperienceYears} Jahren Berufserfahrung.`,
                image: absoluteUrl('/f.webp'),
                worksFor: { '@id': businessId },
                knowsAbout: [
                    'Physiotherapie',
                    'Manuelle Therapie',
                    'Manuelle Lymphdrainage',
                    'Ödemtherapie',
                    'Personal Training',
                    'Kinesiologisches Taping',
                ],
            },
            {
                '@type': 'FAQPage',
                '@id': faqId,
                url: absoluteUrl('/#faq'),
                name: 'Häufige Fragen zur mobilen Physiotherapie',
                isPartOf: { '@id': webpageId },
                about: { '@id': businessId },
                mainEntity: FAQ_ITEMS.map((item) => ({
                    '@type': 'Question',
                    name: item.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: item.answer,
                    },
                })),
            },
        ],
    };
};
