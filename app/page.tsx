import ContactSection from "@/components/Contact";
import ExquisiteDesign from "@/components/Exquisite";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GlassNav from "@/components/Navbar";
import YutecultrSocialProof from "@/components/SocialProof";
import Store from "@/components/Store";
import Suggestion from "@/components/Suggestion";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <GlassNav />
      <Hero/>
      <YutecultrSocialProof/>
      <ExquisiteDesign/>
      <Store/>
      <ContactSection/>
      <Suggestion/>
      <Footer/>
    </div>
  );
}
