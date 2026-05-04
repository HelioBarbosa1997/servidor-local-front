import { RegisterLeft } from "@/components/register/register-left";
import { RegisterRight} from "@/components/register/register-right";


export default function registerPage() {
    return(
        <div className="bg-gray-200 h-screen flex justify-between">
            <RegisterLeft/>
            <RegisterRight/>
        </div>
    );
}