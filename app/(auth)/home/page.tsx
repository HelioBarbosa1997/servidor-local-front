import { HeroBanner } from "@/components/homeList/hero-banner";
import { Navbar } from "@/components/homeList/navbar";
import { ServiceCard } from "@/components/homeList/service-card";
import { Sidebar } from "@/components/homeList/sidebar";


export default function HomePage() {
        const { loading, error, data } = getAll();

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;


    const services = [
        {
            title: "Emergency Plumbing",
            description:
                "24/7 support for leaks, burst pipes and urgent drainage issues.",
            price: "$90.00",
            image:
                "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Light Fixture Installation",
            description:
                "Professional installation for chandeliers, ceiling lights and modern fixtures.",
            price: "$120 - $250",
            image:
                "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Custom Cabinetry",
            description:
                "Bespoke woodwork solutions and repairs for your kitchen or living space.",
            price: "$450.00",
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Interior Wall Painting",
            description:
                "Fresh, modern paint designs for your interior walls and ceilings.",
            price: "$2.50 ",
            image:
                "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "AC Maintenance",
            description:
                "Seasonal cleaning and efficiency checks for cooling systems.",
            price: "$125.00",
            image:
                "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Smart Lock Setup",
            description:
                "Installation and synchronization of digital security systems.",
            price: "$150 - $300",
            image:
                "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    return (
        <main className="min-h-screen bg-[#f4f6fb]">
            <Navbar />

            <div className="max-w-7xl mx-auto flex gap-6 px-6 py-6">
                <Sidebar />

                <section className="flex-1 space-y-6">
                    <HeroBanner />

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.title}
                                title={service.title}
                                description={service.description}
                                price={service.price}
                                image={service.image}
                            />
                        ))}
                    </div>
                </section>
            </div >
        </main >
    );
}