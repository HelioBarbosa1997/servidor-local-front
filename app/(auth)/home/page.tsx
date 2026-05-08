import { HeroBanner } from "@/components/homeList/hero-banner";
import { Navbar } from "@/components/homeList/navbar";
import { ServiceCard } from "@/components/homeList/service-card";
import { Sidebar } from "@/components/homeList/sidebar";


export default function HomePage() {
    return (
        <main className="min-h-screen bg-[#f4f6fb]">
            <Navbar />

            <div className="max-w-7xl mx-auto flex gap-6 px-6 py-6">
                <Sidebar />

                <section className="flex-1 space-y-6">
                    <HeroBanner />
                    <div className="flex-1">
                        <div>
                    <ServiceCard
                        title="Emergency Plumbing"
                        description="24/7 plumbing support"
                        price={89}
                        image="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                    />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}