import CalendarSelected from "../componets/calendar/calendar.js";
import { useState } from "react";
import { ProgressIndicator } from "../componets/progress.js";
import { Header } from "../componets/header.js";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <ProgressIndicator
          steps={[
            {
              label: "Check Availability",
            },
            {
              label: "Registration",
            },
            {
              label: "Payment",
            },
          ]}
        />
        <div class="slds-grid slds-gutters grid">
          <div class="slds-col col">
            <CalendarSelected></CalendarSelected>
          </div>
          <div class="slds-col col">
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
