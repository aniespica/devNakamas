import { useState } from "react";
import Image from "next/image.js";
import { ProgressIndicator } from "../componets/progress.js";
import { Steps } from "../componets/step.js";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
    const [currentStep, onStepChange] = useState(0);
    const steps = [
        {
            label: "Check Availability",
        },
        {
            label: "Registration",
        },
        {
            label: "Payment",
        },
    ];

    return (
        <div>
            <header>
                <div className="px-3 py-2 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-left justify-content-left">
                            <a
                                href="/"
                                className="d-flex align-items-left my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
                            >
                                <Image
                                    className="ml-2"
                                    width="40"
                                    height="40"
                                    src="/logo.png"
                                    alt="Star Admin Free"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                <ProgressIndicator
                    currentStep={currentStep}
                    steps={steps}
                    onStepChange={onStepChange}
                />
                <Steps currentStep={currentStep} onStepChange={onStepChange} />
            </div>
        </div>
    );
}
