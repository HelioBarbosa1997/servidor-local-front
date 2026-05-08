import { Wrench } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const Navbar = () => {
    return (
        <Card className="rounded-none border-x-0 border-t-0 shadow-none">
            <CardContent className="flex items-center justify-between px-6 py-4">

            
                <div className="flex items-center gap-2">
                    <Wrench className="text-blue-500 w-5 h-5" />

                    <h1 className="font-bold text-gray-800 text-lg">
                        HandyPro
                    </h1>
                </div>

            
                <nav className="flex items-center gap-6 text-sm text-gray-600">
                    <a href="#">Services</a>

                    <a href="#">Providers</a>

                    <a href="#">My Requests</a>

                    <div className="w-8 h-8 rounded-full border flex items-center justify-center">
                        👤
                    </div>
                </nav>
            </CardContent>
        </Card>
    );
};