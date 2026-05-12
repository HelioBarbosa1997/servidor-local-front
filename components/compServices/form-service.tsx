// components/compServices/form-service.tsx

"use client";

import { useState } from "react";

import { ServiceRow } from "./service-row";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";

type Service = {
    id: number;
    name: string;
};

const services: Service[] = [
    { id: 1, name: "Plumbing" },
    { id: 2, name: "Electrical" },
    { id: 3, name: "Carpentry" },
    { id: 4, name: "Cleaning" },
];

export const FormService = () => {
    const [checked, setChecked] = useState<
        Record<number, boolean>
    >({});

    const [urgent, setUrgent] = useState<
        Record<number, boolean>
    >({});

    return (
        <div>
            {/* Título */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Public Service Request
                </h2>

                <p className="text-gray-500 mt-2">
                    Select the services you need and submit your request.
                </p>
            </div>

            {/* Card */}
            <Card className="rounded-2xl shadow-sm border overflow-hidden">
                {/* Header */}
                <CardHeader className="grid grid-cols-3 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-500 uppercase">
                    <div>Select</div>
                    <div>Service Name</div>
                    <div className="text-center">Urgent?</div>
                </CardHeader>

                {/* Content */}
                <CardContent className="p-0">
                    {services.map((service) => (
                        <ServiceRow
                            key={service.id}
                            id={service.id}
                            name={service.name}
                            checked={checked[service.id] || false}
                            urgent={urgent[service.id] || false}
                            setChecked={setChecked}
                            setUrgent={setUrgent}
                        />
                    ))}
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
                    Detailed descriptions help providers give more accurate quotes.
                </p>
            </div>

            {/* Button */}
            <div className="flex justify-end mt-8">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition">
                    Request Quotation
                </button>
            </div>
        </div>
    );
};