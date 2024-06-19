import { TopMenu } from "@/components";
import { Footer } from "@/components/ui/footer/Footer";
import { SideBarResponsive } from "@/components/ui/side-bar-responsive/SideBarResponsive";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white">
      <TopMenu />
      <div className="block md:hidden">
        <SideBarResponsive />
      </div>
      {children}
      <Footer />
    </main>
  );
}
