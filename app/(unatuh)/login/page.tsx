import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
    return (<div className="bg-gray-200 h-screen flex justify-between">
        <div className="w-1/2 bg-blue-600">
            <Badge variant="secondary">Precision Concierge Service</Badge>

            <h1>Elevate Your Standard of Service.</h1>

            <p>Join Servidor Local to experience a curated ecosystem connecting
                discerning clients with elite professional and premier companies.
            </p>
            <div className="flex justify-evely w-full">
                <Card>
                    <CardContent>
                        <CardTitle>Vetted NetWork</CardTitle>
                        <CardDescription>
                            Exclusive acess to top-tier providers and clients
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <CardTitle>Secund Platform</CardTitle>
                        <CardDescription>
                            Enterprise-grade security for all your transactions and data.
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
        </div>


        <div className="w-1/2 bg-white-500">Direita</div>
    </div>
    );
}