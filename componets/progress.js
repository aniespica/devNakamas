import { useState } from "react";
import style from "../styles/Progress.module.css";

function ProgressStep({ label, onClick, status }) {
  return (
    <li className={"slds-progress__item " + (status ? status : "")}>
      <button
        className={
          "slds-button slds-progress__marker slds-button_icon  slds-progress__marker_icon"
        }
        title={label}
        onClick={onClick}
      >
        <svg className="slds-button__icon" aria-hidden="true">
          <use
            xlink={
              "/assets/icons/utility-sprite/svg/symbols.svg#" +
              (status === "slds-is-completed" ? "success" : "")
            }
            href={
              "/assets/icons/utility-sprite/svg/symbols.svg#" +
              (status === "slds-is-completed" ? "success" : "")
            }
          ></use>
        </svg>
        <span
          style={{
            position: "absolute",
            "padding-top": "70px",
            color: "black",
          }}
        >
          {label}
        </span>
      </button>
    </li>
  );
}
export function ProgressIndicator({ steps, currentStep, onStepChange }) {
  return (
    <div
      className={
        "slds-m-top_xx-large slds-m-bottom_xx-large " + style.container
      }
    >
      <div className="slds-progress">
        <ol className="slds-progress__list">
          {steps.map((step, index) => {
            let status = "";

            if (index < currentStep) {
              status = "slds-is-completed";
            } else if (index === currentStep) {
              status = "slds-is-active";
            }

            return (
              <ProgressStep
                key={index}
                label={step.label}
                onClick={() => onStepChange(index)}
                status={status}
              />
            );
          })}
        </ol>
        <div
          className="slds-progress-bar slds-progress-bar_x-small"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={(100 / (steps.length - 1)) * currentStep}
          aria-label="{{Placeholder for description of progress bar}}"
          role="progressbar"
        >
          <span
            className="slds-progress-bar__value"
            style={{ width: (100 / (steps.length - 1)) * currentStep + "%" }}
          >
            <span className="slds-assistive-text">Progress: 0%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
