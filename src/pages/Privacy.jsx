import Seo from '../components/Seo.jsx'
import LegalLayout from '../components/LegalLayout.jsx'

const SECTIONS = [
  {
    heading: 'Introduction',
    body: [
      'Kayaka PU College, run by Kayaka Foundation Education Trust (R), Kalaburagi, respects your privacy. This Privacy Policy explains what information we collect through this website and how we use and protect it.',
    ],
  },
  {
    heading: 'Information We Collect',
    body: ['We only collect information you choose to share with us, such as when you use our contact or newsletter forms. This may include:'],
    list: [
      'Your name and email address',
      'Your phone number (if you provide it)',
      'The subject and content of any message you send us',
      'Basic, non-identifying usage data (for example, which pages are visited)',
    ],
  },
  {
    heading: 'How We Use Your Information',
    body: ['We use the information you provide to:'],
    list: [
      'Respond to admission enquiries and messages',
      'Share campus news and event updates if you subscribe to our newsletter',
      'Improve the content and performance of our website',
    ],
  },
  {
    heading: 'Cookies',
    body: [
      'This website uses minimal cookies and similar technologies needed for the site to function and to understand general usage. You can disable cookies in your browser settings, though some features may not work as intended.',
    ],
  },
  {
    heading: 'Data Security',
    body: [
      'We take reasonable measures to protect the information you share with us against loss, misuse, and unauthorised access. However, no method of transmission over the internet is completely secure.',
    ],
  },
  {
    heading: 'Third-Party Links',
    body: [
      'Our website may link to external sites such as YouTube or Google Maps. We are not responsible for the privacy practices of those sites; please review their policies separately.',
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      'We do not knowingly collect personal information from children without the consent of a parent or guardian. If you believe a child has provided us information, please contact us so we can remove it.',
    ],
  },
  {
    heading: 'Your Rights',
    body: [
      'You may ask us to access, correct, or delete the personal information you have shared with us. To make such a request, please use the contact details below.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised “Last updated” date.',
    ],
  },
  {
    heading: 'Contact Us',
    body: [
      'For any questions about this Privacy Policy, email shivaraj.patil1@gmail.com or call 09686569898. You can also write to us at Kesaratagi Road, Kotnur-D, Ring Road, Kalaburagi, Karnataka 585102.',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        path="/privacy"
        description="How Kayaka PU College collects, uses, and protects the information you share through this website."
      />
      <LegalLayout
        eyebrow="Legal"
        title="Privacy Policy."
      subtitle="How Kayaka PU College collects, uses, and protects the information you share with us."
        updated="June 2026"
        sections={SECTIONS}
      />
    </>
  )
}
