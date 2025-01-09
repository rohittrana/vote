import React from 'react';

function About() {
  return (
    <div className="p-8 min-h-fit bg-gradient-to-r from-yellow-50 to-orange-100">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-down">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Our Project</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-justify">
          Our Full-Stack E-Voting DApp is a blockchain-powered voting application that ensures a secure, transparent, and reliable voting experience. Built using the MERN stack with Solidity for smart contracts, this platform provides voters with decentralized, tamper-resistant voting capabilities. By using blockchain technology, we are eliminating concerns about election fraud, voter suppression, and ballot manipulation. The system guarantees that every vote is anonymous, secure, and easily verifiable, allowing for a seamless and trustworthy voting process. 
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-justify">
          This platform empowers voters to participate in democratic processes from anywhere, at any time, without fear of interference or fraud. With the full transparency provided by blockchain, every voter can independently verify the integrity of the vote count, ensuring complete trust in the election results.
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-center mt-12 animate-fade-in-up">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
          Our mission is to bring transparency and efficiency to the voting process by leveraging blockchain technology. We aim to create a decentralized platform that guarantees data integrity, voter privacy, and election credibility. By doing so, we hope to foster trust in the electoral process and make voting accessible to all. In a world where electronic voting systems are becoming more common, we believe blockchain offers the most secure and trustworthy infrastructure to handle voting.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
          We also strive to break down barriers to voting in remote or underrepresented communities. The accessibility of blockchain ensures that individuals from all walks of life, regardless of location or technological resources, have an equal opportunity to participate in the electoral process. Our platform is designed to scale and adapt to various electoral needs, whether for local elections, corporate governance, or large-scale national elections.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 animate-fade-in">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Meet Our Team</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
          Our team consists of passionate and dedicated individuals with expertise in different areas of technology and software development. Together, we are committed to building a robust, secure, and user-friendly e-voting system that is accessible to everyone. Each member brings unique skills to the project, from blockchain development to user interface design, backend architecture, and system integration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <TeamMember name="Rohit Rana" role="Team Lead" id="21BCE11666" description="Passionate about building secure and innovative solutions. Rohit leads the team, ensuring the project's success from ideation to deployment, while also overseeing the technical aspects of the smart contract implementation." />
          <TeamMember name="Kirti Jirati" id="21BCE11043" description="Dedicated to crafting efficient front-end interfaces. Kirti ensures that the user experience is seamless, intuitive, and accessible, with a strong focus on making the interface user-friendly and responsive." />
          <TeamMember name="Mayank Singal" id="21BCE11436" description="Focuses on backend architecture and smart contract development. Mayank plays a crucial role in implementing the blockchain layer and ensuring the system's scalability and security." />
          <TeamMember name="Nishchay Agnivanshi" id="21BCE10746" description="Ensures seamless integration and deployment. Nishchay's focus is on the smooth integration of the blockchain with the frontend, as well as ensuring the system is deployed and runs flawlessly across environments." />
        </div>
      </div>
    </div>
  );
}

const TeamMember = ({ name, role = "", id, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 mx-auto mb-4 flex items-center justify-center text-gray-500 text-2xl font-bold animate-pulse">
      {name[0]}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
    {role && <p className="text-gray-600 italic mb-1">{role}</p>}
    <p className="text-gray-600 text-sm mb-2">ID: {id}</p>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

export default About;
