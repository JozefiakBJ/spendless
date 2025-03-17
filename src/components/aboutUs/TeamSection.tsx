
import React from 'react';

// Team member type
type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

// Sample team data
const teamMembers: TeamMember[] = [
  {
    name: "Emma Wilson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Emma founded SPENDLESS after struggling with her own financial management. With a background in fintech and product design, she's passionate about making financial tools accessible to everyone."
  },
  {
    name: "Alex Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Alex brings over 15 years of experience in software development. He leads our engineering team and ensures SPENDLESS remains secure, scalable, and innovative."
  },
  {
    name: "Michael Johnson",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Michael oversees product strategy and roadmap. With a background in user experience design, he's focused on creating intuitive financial tools that people love to use."
  },
  {
    name: "Sarah Patel",
    role: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Sarah brings her expertise in finance and operations. Before joining SPENDLESS, she worked at leading financial institutions and understands the importance of smart money management."
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-primary-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate people behind SPENDLESS who are committed to transforming financial management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
