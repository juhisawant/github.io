
import Image from "next/image";

const gallery = (images: { src: string; alt: string }[]) => (
  <div className="flex gap-4 overflow-x-auto py-3 mb-8">
    {images.map((img, i) => (
      <img key={i} src={img.src} alt={img.alt} className="max-h-36 rounded-xl border-2 border-accent shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-2xl" />
    ))}
  </div>
);

export default function Home() {
  return (
    <div className="bg-bg text-foreground min-h-screen font-sans">
      <header className="py-10 px-4 text-center border-b-2 border-accent">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-accent">Juhi Sawant</h1>
        <h2 className="text-xl md:text-2xl italic font-medium mb-4 text-accent">Aspiring Hospitality Management Professional</h2>
        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Juhi Sawant photo" className="block mx-auto mb-4 w-56 h-56 object-cover rounded-full border-4 border-accent shadow-lg hover:shadow-2xl transition-shadow duration-300" />
        <p className="max-w-xl mx-auto p-4 bg-accent/20 text-bg rounded-lg font-semibold italic shadow-md mb-8">
          I am passionate about hospitality management and committed to leveraging my leadership, teamwork, and communication skills to become an impactful hotel manager. I continually seek opportunities to learn and grow through education and professional experiences.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Education */}
        <section className="mb-12" id="about">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Education</h2>
          <h3 className="font-semibold text-lg mb-1">Georgia State University</h3>
          <p>Bachelor of Business Administration (BBA) in Hospitality Administration/Management, Managerial Sciences & Supply Chain (Aug 2022–May 2026)</p>
          {gallery([
            { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80", alt: "College Campus" },
            { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80", alt: "Graduation" },
          ])}
          <h3 className="font-semibold text-lg mb-1">Cambridge High School</h3>
          <p>High School Diploma (Aug 2018–May 2022)</p>
          {gallery([
            { src: "https://images.unsplash.com/photo-1501527458915-e8ef0aced219?auto=format&fit=crop&w=600&q=80", alt: "High School Campus" },
            { src: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=600&q=80", alt: "School Event" },
          ])}
          <h2 className="text-2xl font-bold border-b pb-2 mb-4 mt-8">Awards & Achievements</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Rama Scholarship for the American Dream (2024–2026)</li>
            <li>President’s and Dean's List at Georgia State University (Various semesters)</li>
            <li>Farm and Agribusiness Management Competitions (2021)</li>
            <li>SID Dance Competition, 2nd Place (2018)</li>
          </ul>
          {gallery([
            { src: "https://images.unsplash.com/photo-1486308510493-cb241fcdba45?auto=format&fit=crop&w=600&q=80", alt: "Award Ceremony" },
            { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", alt: "Diploma" },
          ])}
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Work Experience</h2>
          <h3 className="font-semibold text-lg mb-1">Jobs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>GSU School of Hospitality Student Assistant (Aug 2023–May 2025)</li>
            <li>Holiday Inn Express & Suites, Front Desk Associate (Dec 2023–Apr 2024)</li>
            <li>Pacsun, Retail Associate (Jun 2023–Sep 2023)</li>
            <li>2B Whole Gluten-Free Bakery (Jun 2022)</li>
          </ul>
          {gallery([
            { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80", alt: "Office Work" },
            { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80", alt: "Customer Service" },
          ])}
          <h3 className="font-semibold text-lg mb-1">Internships</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>AgeTech Connect, Event Administrator (Jul 2025–Present)</li>
            <li>Margaritaville IMC, Front of House Supervisor (May 2024–Aug 2024)</li>
            <li>Loving Hands Animal Clinic (2022)</li>
            <li>Shiv's Institute of Dance (2018–2020)</li>
          </ul>
        </section>

        {/* Leadership & Activities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Leadership & Activities</h2>
          <h3 className="font-semibold text-lg mb-1">Leadership Roles</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Communications Chair, American Hotel & Lodging Association (AHLA) (Jun 2024–Present)</li>
            <li>Treasurer, GSU Club Tennis (2022–2023)</li>
            <li>Social Media Manager, Sewa Club (2021–2022)</li>
          </ul>
          {gallery([
            { src: "https://images.unsplash.com/photo-1551836022-9b4981cfb8f1?auto=format&fit=crop&w=600&q=80", alt: "Leadership Meeting" },
            { src: "https://images.unsplash.com/photo-1528870901677-bdfa20863d3d?auto=format&fit=crop&w=600&q=80", alt: "Teamwork" },
          ])}
          <h3 className="font-semibold text-lg mb-1">Extracurricular Activities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>International Association of Exhibitions and Events (IAEE) (Jan 2024–Present)</li>
            <li>Club Management Association of America (CMAA) (Apr 2024–Present)</li>
            <li>Interact Club (2021–2022)</li>
            <li>Future Farmers of America (FFA) (2019–2022)</li>
          </ul>
        </section>

        {/* Volunteer Work */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Volunteer Work</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>STEM Nola (Jul 2025, Apr 2025)</li>
            <li>The Legacy Promotional Photoshoot (Jul 2025)</li>
            <li>BananaBall 2025 (Mar 2025)</li>
            <li>GSU Fall 2024 Commencement & Homecoming Parade (Dec & Nov 2024)</li>
            <li>GSU Accelerated Career Experience (PACE) (Apr & Dec 2024)</li>
            <li>Doctor of Business Administration Impact XV (Mar 2024)</li>
            <li>Taste of Buckhead (Oct 2023)</li>
            <li>AES Field Day (May 2022)</li>
            <li>House Painting (Apr 2022)</li>
          </ul>
          {gallery([
            { src: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80", alt: "Volunteering" },
            { src: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?auto=format&fit=crop&w=600&q=80", alt: "Community Event" },
          ])}
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Certifications</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Hotel Industry Analytics (CHIA) — Mar 2025</li>
            <li>Social Media Marketing — May 2025</li>
            <li>Hootsuite Platform Certification — Apr 2025</li>
            <li>Emerging Leaders (Truist Leadership Institute) — Jan 2025</li>
            <li>ServSafe Food Handler — Jan 2024</li>
            <li>Virtual Exchange — Apr 2024</li>
          </ul>
          {gallery([
            { src: "https://images.unsplash.com/photo-1590080877777-b016f4a06d16?auto=format&fit=crop&w=600&q=80", alt: "Certification" },
            { src: "https://images.unsplash.com/photo-1503161482767-c0ee535e9c52?auto=format&fit=crop&w=600&q=80", alt: "Awards" },
          ])}
        </section>

        {/* Travel Blog */}
        <section className="mb-12" id="travel-blog">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Travel Blog</h2>
          <div className="flex flex-wrap gap-6 justify-center mt-4 mb-8">
            <div className="relative w-72 h-44 rounded-2xl cursor-pointer overflow-hidden shadow-lg bg-cover bg-center text-accent font-bold flex items-end p-5 text-lg hover:scale-105 transition-transform duration-300" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80')" }}>
              <div className="z-10">European Hospitality Experience (France, Spain, Monaco)</div>
              <div className="absolute left-0 top-0 w-full h-full text-accent bg-accent/80 p-5 text-base leading-tight opacity-0 pointer-events-none rounded-2xl transition-opacity duration-300 hover:opacity-100">
                This study abroad trip expanded my understanding of luxury hospitality and international customer service standards. Visiting 5-star hotels and exploring cultural landmarks deepened my appreciation for global hospitality and personalized guest experiences.
              </div>
            </div>
            <div className="relative w-72 h-44 rounded-2xl cursor-pointer overflow-hidden shadow-lg bg-cover bg-center text-accent font-bold flex items-end p-5 text-lg hover:scale-105 transition-transform duration-300" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')" }}>
              <div className="z-10">Dubai Hospitality Immersion Program</div>
              <div className="absolute left-0 top-0 w-full h-full text-accent bg-accent/80 p-5 text-base leading-tight opacity-0 pointer-events-none rounded-2xl transition-opacity duration-300 hover:opacity-100">
                Exploring Dubai’s hospitality scene taught me about the fusion of innovation with tradition. The rapid growth and technology-driven guest services inspired me to think about the future of sustainable and tech-enabled hotels.
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12" id="contact">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Contact Me</h2>
          <p className="mb-2">Feel free to reach out via email or LinkedIn:</p>
          <p className="mb-2">
            Email: <a href="mailto:juhi.sawant@email.com" className="text-accent underline">juhi.sawant@email.com</a><br />
            LinkedIn: <a href="https://linkedin.com/in/juhi-sawant" className="text-accent underline">juhi-sawant</a><br />
            GitHub: <a href="https://github.com/juhi-sawant" className="text-accent underline">juhi-sawant</a>
          </p>
          <a className="inline-block mt-4 px-6 py-3 bg-accent text-bg font-bold rounded-lg shadow-lg hover:bg-accent/80 transition-colors duration-300" href="mailto:juhi.sawant@email.com?subject=Contact%20from%20Website">Contact Me</a>
          <br />
          <a className="inline-block mt-4 px-6 py-3 bg-accent text-bg font-bold rounded-lg shadow-lg hover:bg-accent/80 transition-colors duration-300" href="https://example.com/juhi-sawant-resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="View My Resume">View My Resume</a>
        </section>
      </main>
    </div>
  );
}
