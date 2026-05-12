// components/compServices/service-row.tsx

type ServiceRowProps = {
    id: number;
    name: string;
    checked: boolean;
    urgent: boolean;
    setChecked: React.Dispatch<
        React.SetStateAction<Record<number, boolean>>
    >;
    setUrgent: React.Dispatch<
        React.SetStateAction<Record<number, boolean>>
    >;
};

export const ServiceRow = ({
    id,
    name,
    checked,
    urgent,
    setChecked,
    setUrgent,
}: ServiceRowProps) => {
    return (
        <div className="grid grid-cols-3 items-center border-t px-4 py-4 text-sm">
            {/* Checkbox */}
            <div>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                        setChecked((prev) => ({
                            ...prev,
                            [id]: !checked,
                        }))
                    }
                    className="w-4 h-4"
                />
            </div>

            {/* Service */}
            <div className="font-medium text-gray-700">
                {name}
            </div>

            {/* Urgent */}
            <div className="flex justify-center">
                <input
                    type="checkbox"
                    checked={urgent}
                    onChange={() =>
                        setUrgent((prev) => ({
                            ...prev,
                            [id]: !urgent,
                        }))
                    }
                    className="w-4 h-4"
                />
            </div>
        </div>
    );
};