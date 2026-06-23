import Seo from '../components/Seo.jsx'
import LegalLayout from '../components/LegalLayout.jsx'

const SECTIONS = [
  {
    heading: 'Acceptance of Terms',
    body: [
      'By accessing and using the Kayaka PU College website, you agree to these Terms of Service. If you do not agree, please do not use the website.',
    ],
  },
  {
    heading: 'Use of the Website',
    body: ['You agree to use this website only for lawful purposes. You must not:'],
    list: [
      'Attempt to disrupt or damage the website or its security',
      'Use the site to transmit harmful or unlawful content',
      'Copy or reuse content without permission',
    ],
  },
  {
    heading: 'Admissions & Information Accuracy',
    body: [
      'We make every effort to keep information about courses, admissions, fees, and facilities accurate and up to date. However, details may change. Information on this website is for general guidance and does not constitute a binding offer. Please confirm current details with the college office before acting on them.',
    ],
  },
  {
    heading: 'Intellectual Property',
    body: [
      'All content on this website — including text, logos, images, and design — belongs to Kayaka Foundation Education Trust (R) unless stated otherwise, and may not be reproduced without prior written permission.',
    ],
  },
  {
    heading: 'Third-Party Links',
    body: [
      'This website may contain links to third-party sites for your convenience. We do not control and are not responsible for the content or practices of those sites.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    body: [
      'The website is provided on an “as is” basis. To the extent permitted by law, Kayaka PU College is not liable for any loss or damage arising from your use of, or inability to use, this website.',
    ],
  },
  {
    heading: 'Privacy',
    body: [
      'Your use of this website is also governed by our Privacy Policy, which explains how we handle the information you share with us.',
    ],
  },
  {
    heading: 'Changes to These Terms',
    body: [
      'We may revise these Terms from time to time. Continued use of the website after changes are posted means you accept the updated Terms.',
    ],
  },
  {
    heading: 'Governing Law',
    body: [
      'These Terms are governed by the laws of India, and any disputes are subject to the jurisdiction of the courts in Kalaburagi, Karnataka.',
    ],
  },
  {
    heading: 'Contact Us',
    body: [
      'For questions about these Terms, email shivaraj.patil1@gmail.com or call 09686569898.',
    ],
  },
]

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service"
        path="/terms"
        description="The terms that apply when you use the Kayaka PU College website."
      />
      <LegalLayout
        eyebrow="Legal"
        title="Terms of Service."
        subtitle="The terms that apply when you use the Kayaka PU College website."
        updated="June 2026"
        sections={SECTIONS}
      />
    </>
  )
}
