import Seo from '../components/Seo.jsx'
import LegalLayout from '../components/LegalLayout.jsx'

const SECTIONS = [
  {
    heading: 'Our Commitment',
    body: [
      'Kayaka PU College is committed to making this website accessible to everyone, including people with disabilities. We want all visitors — students, parents, and the wider community — to be able to find information easily.',
    ],
  },
  {
    heading: 'Conformance Status',
    body: [
      'We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with a wide range of abilities.',
    ],
  },
  {
    heading: 'Measures We Take',
    body: ['To keep this website accessible, we:'],
    list: [
      'Use clear, readable text with strong colour contrast',
      'Provide descriptive alternative text for meaningful images',
      'Support full keyboard navigation with visible focus outlines',
      'Use semantic headings and labelled form fields',
      'Respect the “reduce motion” setting for animations',
    ],
  },
  {
    heading: 'Compatibility',
    body: [
      'This website is designed to work with current versions of major browsers and with common assistive technologies such as screen readers. It is responsive and works across desktop, tablet, and mobile devices.',
    ],
  },
  {
    heading: 'Known Limitations',
    body: [
      'Some embedded third-party content, such as maps and videos, may not be fully accessible because it is provided by external services. We are working to offer accessible alternatives where possible.',
    ],
  },
  {
    heading: 'Feedback',
    body: [
      'We welcome your feedback. If you experience any difficulty using this website, or have suggestions to improve accessibility, please let us know and we will do our best to help.',
    ],
  },
  {
    heading: 'Contact Us',
    body: [
      'Email shivaraj.patil1@gmail.com or call 09686569898. You can also reach us at Kesaratagi Road, Kotnur-D, Ring Road, Kalaburagi, Karnataka 585102.',
    ],
  },
]

export default function Accessibility() {
  return (
    <>
      <Seo
        title="Accessibility"
        path="/accessibility"
        description="Our commitment to making the Kayaka PU College website usable for everyone, in line with WCAG 2.1 AA."
      />
      <LegalLayout
        eyebrow="Accessibility"
        title="Accessibility."
        subtitle="Our commitment to making the Kayaka PU College website usable for everyone."
        updated="June 2026"
        sections={SECTIONS}
      />
    </>
  )
}
