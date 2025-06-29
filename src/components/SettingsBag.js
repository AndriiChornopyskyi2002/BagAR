import BodyColor from "@/components/BodyColor";
import MetalColor from "@/components/MetalColor";
import Material from "@/components/Material";

export default function SettingsBag() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 md:gap-10 font-semibold">
            <div>
                BODY COLOR
                <hr/>
                <BodyColor/>
            </div>
            <div>
                METAL COLOR
                <hr/>
                <MetalColor/>
            </div>
            <div>
                MATERIAL
                <hr/>
                <Material/>
            </div>
        </div>
    );
}