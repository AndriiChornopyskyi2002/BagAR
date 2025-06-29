import {useMaterial} from "@/stores/settingsBag";

export default function Material() {
    const materials = [
        { name: "Leather" },
        { name: "Fabric" },
        { name: "Denim" },
    ];

    const active = useMaterial((state) => state.activeMaterial);
    const setActive = useMaterial((state) => state.setActiveMaterial);

    return (
        <div className="flex space-x-2 mt-2">
            {materials.map((item) => (
                <div
                    key={item.name}
                    className="flex flex-col items-center relative cursor-pointer"
                    onClick={() => setActive(item.name)}
                >
                    <div
                        className={`rounded-full border-2 px-4 p-2 ${
                            active === item.name ? "border-blue-600" : "border-black"
                        }`}
                    >
                        <div className={`text-sm font-medium ${
                            active === item.name ? "text-blue-600" : "text-black"
                        }`}>
                            {item.name}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}