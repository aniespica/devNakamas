import CalendarSelected from "../componets/calendar/calendar.js";
import { useState } from "react";
import { ProgressIndicator } from "../componets/progress.js";
import { Header } from "../componets/header.js";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import style from "../styles/Home.module.css";

export default function Home() {
  const [currentStep, onChange] = useState(0);
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
      <Header />
      <div className={style.container}>
        <ProgressIndicator
          currentStep={currentStep}
          steps={steps}
          onChange={onChange}
        />
        {currentStep === 0 && (
          <div className="slds-grid slds-gutters grid">
            <div className="slds-col col">
              <CalendarSelected></CalendarSelected>
            </div>
            <div className="slds-col col">
              <span>2</span>
            </div>
          </div>
        )}
        {currentStep === 1 && (
          <div className="slds-grid slds-gutters grid">
            <div className="slds-col col">
              1
            </div>
            <div className="slds-col col">
              <span>2</span>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className="slds-grid slds-gutters grid">
            <div className="slds-col col">
              1
            </div>
            <div className="slds-col col">
              <span>2</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
