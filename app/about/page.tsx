import Content from "@/components/layout/content";
import ContactBox from "@/components/global/contact-box";

export default function Consulting() {
  return (
    <Content showBanner={true}>
      <h1 className="text-2xl md:text-3xl font-bold mb-7">About PatternX</h1>
      <p className="mb-2">
        PatternX is a data solutions company nestled in the heart of Silicon Valley. 
        We help businesses efficiently clean, repair, and optimize their data 
        using advanced machine learning technologies.
      </p>
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4">Vision & Mission</h2>
      <p className="mb-2">
        In today&apos;s AI-driven world, data is the new gold. However, many companies struggle 
        with the daunting and time-consuming task of data cleaning and repair, often relying 
        on inefficient manual processes. At PatternX, we believe there&apos;s a better way.
      </p>
      <p className="mb-2">
        We envision a future where every business, regardless of size or sector, can harness  
        the full potential of their data. By making data cleaning and repair more accessible 
        and efficient, we&apos;re not just solving a problem – we&apos;re unlocking new possibilities 
        for innovation, growth, and success in the AI era.
      </p> 
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4">Solution</h2>
      <p className="mb-2">
        We harness cutting-edge machine learning technologies to transform messy, disjointed 
        data into clean, meaningful, and actionable insights. Our advanced algorithms and 
        proprietary techniques automate the data cleaning process, saving our clients valuable 
        time and resources while dramatically improving data quality.
      </p>
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4">Why Choose PatternX?</h2>
      <ul className="list-decimal pl-6 mb-6">
        <li className="mb-2">
          <span className="font-semibold">Expertise:</span> Our team brings over two decades of experience 
          in data management, analysis, and optimization across healthcare and tech sectors.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Innovation:</span> We continuously evolve our solutions to stay 
          at the forefront of data science and machine learning advancements.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Efficiency:</span> Our automated processes can clean and repair 
          data exponentially faster than traditional methods.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Accuracy:</span> Our AI-driven approach minimizes human error, 
          ensuring higher data integrity.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Scalability:</span> Whether you&apos;re a startup or a Fortune 500 company, 
          our solutions adapt to your data volume and complexity.
        </li>
      </ul>
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4">Team</h2>
      <p className="mb-2">
        PatternX is led by a diverse team of dedicated engineers and data analysts, 
        each bringing unique expertise to the table. Together, we combine our knowledge, 
        skills, and passion to solve the most challenging data problems for our clients.
      </p>
      <ContactBox />
    </Content>
  );
}
