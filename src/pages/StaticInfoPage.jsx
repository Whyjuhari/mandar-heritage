import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import site from '../data/site'

const pageContent = {
  privacy: {
    title: 'Privacy Policy',
    description:
      'Kebijakan privasi Mandar Digital Heritage untuk pengunjung prototype arsip digital budaya Sulawesi Barat.',
    body: [
      'Mandar Digital Heritage saat ini berjalan sebagai website statis tanpa login, database pengguna, atau formulir pengumpulan data pribadi.',
      'Apabila fitur kontribusi arsip, formulir kontak, atau analitik ditambahkan pada tahap berikutnya, kebijakan privasi akan diperbarui agar pengunjung mengetahui jenis data yang diproses dan tujuannya.',
      'Konten budaya pada prototype ini bersifat data awal dan akan terus divalidasi bersama narasumber, komunitas, dan pelaku budaya lokal.',
    ],
  },
  contact: {
    title: 'Contact',
    description:
      'Kontak Mandar Digital Heritage untuk kolaborasi, koreksi data, dan kontribusi arsip budaya Mandar.',
    body: [
      'Untuk koreksi informasi, kolaborasi dokumentasi, atau kontribusi arsip budaya Mandar, silakan hubungi tim melalui email yang tersedia.',
      `Email: ${site.contactEmail}`,
      'Masukan dari pelaku budaya, akademisi, dan masyarakat lokal menjadi bagian penting dalam proses validasi dan pengembangan arsip digital ini.',
    ],
  },
}

function StaticInfoPage({ type }) {
  const content = pageContent[type] ?? pageContent.contact
  const path = type === 'privacy' ? '/privacy' : '/contact'

  return (
    <>
      <SEO
        title={`${content.title} | ${site.name}`}
        description={content.description}
        path={path}
      />
      <Navbar />
      <main className="bg-surface min-h-[70vh]">
        <section className="max-w-4xl mx-auto px-4 md:px-16 py-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors mb-8"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Kembali ke Beranda
          </Link>
          <h1 className="font-playfair text-[40px] leading-12 font-bold text-primary mb-6">
            {content.title}
          </h1>
          <div className="space-y-5 text-on-surface-variant text-lg leading-7">
            {content.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default StaticInfoPage
