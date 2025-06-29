import {useState} from "react";

export default function BodyColor() {
    const colors = [
        { name: "Brown", color: "#804000" },
        { name: "Black", color: "#000000" },
        { name: "Blue", color: "#004899" },
    ];

    const [active, setActive] = useState("Brown");

    return (
        <div className="flex space-x-4 mt-2">
            {colors.map((item) => (
                <div
                    key={item.name}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setActive(item.name)}
                >
                    <div
                        className={`rounded-full w-12 h-12 border-2 ${
                            active === item.name ? "border-blue-600" : "border-transparent"
                        }`}
                    >
                        <div
                            className="w-full h-full rounded-full"
                            style={{backgroundColor: item.color}}
                        ></div>
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