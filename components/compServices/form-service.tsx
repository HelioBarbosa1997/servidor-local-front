import { ServiceRow } from "./service-row";

import {Card, CardContent, CardHeader } from "@/components/ui/card";

export const FormService = () => {
    return (
        <div>
            {/* Título */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Public Service Request & Provider Selection
                </h2>

                <p className="text-gray-500 mt-2">
                    Select the services you need, choose available providers,
                    and submit your request for a quotation.
                </p>
            </div>

            {/* Card Principal */}
            <Card className="rounded-2xl shadow-sm border overflow-hidden">

                <CardHeader className="grid grid-cols-4 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-500 uppercase">
                    <div>Select</div>
                    <div>Service Name</div>
                    <div>Service Provider</div>
                    <div className="text-center">Urgent?</div>
                </CardHeader>

                <CardContent className="p-0">

                    {/* Rows */}
                    <ServiceRow
                        name="Plumbing"
                        provider="John's Plumbing"
                    />

                    <ServiceRow
                        name="Electrical"
                        provider="Select a provider..."
                    />

                    <ServiceRow
                        name="Carpentry"
                        provider="Woodworks Pros"
                        urgent
                    />

                    <ServiceRow
                        name="Cleaning"
                        provider="Select a provider..."
                    />

                </CardContent>
            </Card>

            {/* Textarea */}
            <div className="mt-8">
                <h3 className="font-semibold text-gray-700 mb-3">
                    Service Description & Notes
                </h3>

                <textarea
                    placeholder="Please describe the issue in detail..."
                    className="w-full h-36 border rounded-xl p-4 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                />

                <p className="text-xs text-gray-400 mt-2">
                    Detailed descriptions help providers give more accurate
                    quotes.
                </p>
            </div>

            {/* Botão */}
            <div className="flex justify-end mt-8">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition">
                    Request Quotation
                </button>
            </div>
        </div>
    );
};