import { Card, CardContent } from "@/components/ui/card";

type ServiceRowProps = {
    name: string;
    provider: string;
    urgent?: boolean;
};

export const ServiceRow = ({
    name,
    provider,
    urgent,
}: ServiceRowProps) => {
    return (
        <Card className="rounded-xl shadow-sm border">
            <CardContent className="grid grid-cols-4 items-center px-4 py-4 text-sm">

                {/* Checkbox */}
                <div>
                    <input type="checkbox" className="w-4 h-4" />
                </div>

                {/* Nome */}
                <div className="font-medium text-gray-700">
                    {name}
                </div>

                {/* Provider */}
                <div>
                    <select className="w-full border rounded-md px-3 py-2 text-gray-600 bg-white">
                        <option>{provider}</option>
                    </select>
                </div>

                {/* Urgente */}
                <div className="flex justify-center">
                    <input
                        type="checkbox"
                        defaultChecked={urgent}
                        className="w-4 h-4 accent-red-500"
                    />
                </div>

            </CardContent>
        </Card>
    );
};