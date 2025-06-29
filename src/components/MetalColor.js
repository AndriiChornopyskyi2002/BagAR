import Image from "next/image";
import {useMetalColor} from "@/stores/settingsBag";

export default function MetalColor() {
    const metals = [
        { name: "Silver", src: "/silver.png"},
        { name: "Gold", src: "/gold.png" },
        { name: "Black", src: "/black.png" },
    ];

    const active = useMetalColor((state) => state.activeMetal);
    const setActive = useMetalColor((state) => state.setActiveMetal);

    return (
        <div className="flex space-x-4 mt-2">
            {metals.map((item) => (
                <div
                    key={item.name}
                    className="flex flex-col items-center relative cursor-pointer"
                    onClick={() => setActive(item.name)}
                >
                    <div
                        className={`rounded-full w-12 h-12 border-2 ${
                            active === item.name ? "border-blue-600" : "border-transparent"
                        }`}
                    >
                        <div className="w-full h-full rounded-full">
                            <Image className="rounded-full" src={item.src} alt={item.name} width={48} height={48} />
                        </div>
                    </div>
                    <p
                        className={`mt-1 text-sm font-medium ${
                            active === item.name ? "text-blue-600" : "text-black"
                        }`}
                    >
                        {item.name}
                    </p>
                </div>
            ))}
        </div>
    );
}