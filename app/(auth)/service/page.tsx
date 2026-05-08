import { FormService } from "@/components/compServices/form-service";
import { Navbar } from "@/components/compServices/navbar-services";
import { ServiceRow } from "@/components/compServices/service-row";


export default function ServicePage() {
    return (
        <div className="min-h-screen bg-[#f5f7fb]">
            <Navbar />

            <main className="max-w-5xl mx-auto px-6 py-10">
            
                <FormService/>
            </main>
        </div>
    );
}