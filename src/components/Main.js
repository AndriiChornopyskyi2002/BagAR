'use client';

import ModelViewer from "@/components/ModelViewer";
import {useState} from "react";
import Modal from "@/components/Modal";
import {AnimatePresence, motion} from "framer-motion";
import SettingsBag from "@/components/SettingsBag";
import ButtonModal from "@/components/ButtonModal";

export default function Main() {
    let [modal, setModal] = useState(false);

    return (
        <main>
            <div className="container mx-auto p-6 flex flex-col items-center justify-center">
               <ButtonModal setModal={setModal} />

                <div style={{height: '500px'}} className="flex items-center justify-center pt-20 pb-10">
                    <AnimatePresence mode="wait">
                        {!modal ? (
                            <motion.div
                                key="viewer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ModelViewer />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="modal"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Modal setModal={setModal} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <SettingsBag/>
            </div>
        </main>
    );
}