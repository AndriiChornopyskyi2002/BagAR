'use client';
import { QRCodeCanvas } from "qrcode.react";
import {useEffect, useState} from "react";

export default function Modal({setModal}) {
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, []);

    return (
        <div className="flex items-center justify-center">
            <div className="border border-blue-600 rounded-3xl w-70">
                <div>
                    <div className="flex justify-end relative">
                        <button onClick={() => {
                            setModal(false)
                        }} className="text-blue-600 font-thin text-4xl hover:text-blue-800 px-2">
                            &times;
                        </button>
                    </div>
                </div>

                <div className="px-10 pb-5">
                    <div className="border-b border-blue-600">
                        <p className="text-center text-blue-600 mb-1">
                            Scan the QR code with your phone. Within 1–3 seconds the AR function opens on your
                            phone.
                        </p>
                    </div>
                    <div className="p-2 flex justify-center pt-7">
                        <div className="border border-blue-600 rounded-3xl p-5">
                            <QRCodeCanvas
                                value={currentUrl}
                                size={150}
                                fgColor="#2d5ae2"
                                includeMargin={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}