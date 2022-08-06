import Image from "next/image.js";
import { useState, useEffect } from "react";
function Package({ onStepChange, data }) {
  return (
    <button
      class="slds-card"
      style={{ border: "1px solid lightgray" }}
      onClick={() => onStepChange(1)}
    >
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span
              class="slds-icon_container slds-icon-standard-account"
              title="account"
            >
              <Image
                className="ml-2"
                width="100"
                height="100"
                src="/package.jpg"
                alt="Star Admin Free"
              />
              <span class="slds-assistive-text">account</span>
            </span>
          </div>
          <div class="slds-media__body">
            <div class="demo-only">
              <article class="slds-tile" style={{ "max-height": "100px" }}>
                <div class="slds-tile__detail" style={{ "font-size": "small" }}>
                  <ul class="slds-list_horizontal slds-has-dividers_right slds-m-top_xx-small">
                    <li class="slds-item">
                      Time Frame: <span>8:00am t0 9:00am</span>
                    </li>
                    <li class="slds-item">
                      Capacity: <span>30 people</span>
                    </li>
                    <li class="slds-item">
                      Price: <span>${data.auctifera__event_rental_total_amount__c}</span>
                    </li>
                  </ul>
                  <p
                    style={{
                      overflow: "hidden",
                      "max-height": "60px",
                      "text-overflow": "ellipsis",
                      textAlign: "left",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse justo eros, ullamcorper sit amet auctor ut,
                    pharetra vel odio. Aliquam tincidunt, metus interdum
                    tristique consectetur, ligula lorem consequat velit, id
                    elementum ante justo id turpis. Pellentesque a tortor lacus.
                    Duis eget risus elementum, vehicula augue quis, egestas leo.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Fusce purus est, vehicula
                    ac aliquet eget, blandit eu libero. Fusce finibus interdum
                    aliquam.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </header>
      </div>
    </button>
  );
}
export default function Packages({ onStepChange, data }) {

  if (!data || data.length === 0) return <center>No package data</center>

  return (
    <>
      {data.map((value, index) => {
        return <Package key={index} data={value} onStepChange={onStepChange} />;
      })}
    </>
  );
}
