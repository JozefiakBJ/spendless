
import { Building, Users, Award, Briefcase } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

// Team member type
type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const AboutUs = () => {
  const { t } = useI18n();
  
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

  return (
    <>
      <Helmet>
        <title>About Us - SPENDLESS</title>
        <meta name="description" content="Learn about the SPENDLESS story, our mission to simplify budget management, and the team behind our smart financial tools." />
        <link rel="canonical" href="https://spendless.com/about" />
      </Helmet>
      
      <Navbar isHomePage={false} />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-primary-50 py-20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-800 mb-6">Our Mission is to Simplify Financial Management</h1>
              <p className="text-lg text-gray-600 mb-8">
                We're building tools that help people understand, manage, and improve their financial lives with less stress and more confidence.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-primary-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  SPENDLESS was founded in 2020 with a simple mission: to make financial management accessible to everyone, regardless of their financial literacy level or background.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founder, Emma Wilson, experienced firsthand the challenges of managing personal finances while juggling multiple accounts, investments, and goals. Existing tools were either too complex or too simplistic.
                </p>
                <p className="text-gray-600">
                  What started as a personal project quickly grew into a platform trusted by thousands of users worldwide. Today, SPENDLESS continues to evolve based on user feedback, with a focus on simplicity, automation, and actionable insights.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="SPENDLESS team collaborating"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-primary-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-primary-800 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do at SPENDLESS, from product development to customer support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">User First</h3>
                <p className="text-gray-600">
                  We design with users in mind, focusing on simplicity, clarity, and features that solve real problems.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our product and service, never settling for "good enough."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Transparency</h3>
                <p className="text-gray-600">
                  We believe in being open about how we operate, how we handle data, and how we make money.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Empowerment</h3>
                <p className="text-gray-600">
                  We aim to empower users with knowledge and tools to take control of their financial future.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
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
        
        {/* Join Us Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="section-container text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who share our passion for simplifying financial management and empowering users.
            </p>
            <a 
              href="#" 
              className="inline-block bg-white text-primary-600 font-medium px-6 py-3 rounded-lg shadow-sm hover:bg-primary-50 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutUs;
