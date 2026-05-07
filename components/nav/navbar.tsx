import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Navbar = () => {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex gap-8 text-gray-600 font-medium">
                <Button className="text-cyan-600">Services</Button>
                <Button>Projects</Button>
                <Button>Support</Button>
            </div>

            <Input
                type="text"
                placeholder="Search services"
                className="bg-white border border-gray-200 rounded-full px-5 py-2 outline-none w-64"
            />
        </div>
    );
};