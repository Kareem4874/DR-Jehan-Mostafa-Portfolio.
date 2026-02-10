import Contact from '@/components/sections/Contact';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Book Consultation | Dr. Jehan Mostafa',
  description:
    'Book your nutrition consultation with Dr. Jehan Mostafa. Fill out the form and we will contact you via WhatsApp.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
