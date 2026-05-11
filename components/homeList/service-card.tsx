import Image from "next/image";
import { Card, CardContent } from "../ui/card";


type ServiceCardProps = {
    title: string;
    description: string;
    price: string;
    image: string;
};

export const ServiceCard = ({
    title,
    description,
    price,
    image,
}:
ServiceCardProps) => {
    return (
        <Card className="rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition bg-white">
            <div className="relative h-40 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <CardContent className="p-5 space-y-4">
                <div>
                    <h3 className="font-semibold text-gray-800">
                        {title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <span className="font-bold text-sky-600 text-lg">
                        $${Number(price).toFixed(2)}
                    </span>

                    <button className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-xl transition">
                        Browse Providers
                    </button>
                </div>
            </CardContent>
        </Card>
    );
};