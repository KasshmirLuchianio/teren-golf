import Hero from "@/components/home/Hero";
import LatestDrop from "@/components/home/LatestDrop";
import CategoryBlocks from "@/components/home/CategoryBlocks";
import IleanaSelection from "@/components/home/IleanaSelection";
import Discovery from "@/components/home/Discovery";
import Newsletter from "@/components/home/Newsletter";
import SocialProof from "@/components/home/SocialProof";
import CommunityGallery from "@/components/home/CommunityGallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatestDrop />
      <CategoryBlocks />
      <IleanaSelection />
      <Discovery />
      <Newsletter />
      <SocialProof />
      <CommunityGallery />
    </>
  );
}
