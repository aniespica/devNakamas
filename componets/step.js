import CalendarSelected from "./calendar/calendar.js";
import Packages from "./package.js";
import Image from "next/image.js";
import { useState, useEffect } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

export function Steps({ currentStep, onStepChange }) {
    if (currentStep === 0) {
        return <Step1 onStepChange={onStepChange} />;
    }

    if (currentStep === 1) {
        return <Step2 onStepChange={onStepChange} />;
    }

    if (currentStep === 2) {
        return <Step3 />;
    }

    return null;
}

function Step1({ onStepChange }) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentCategory, setCurrentCategory] = useState(null);
    const [currentFrame, setCurrentFrame] = useState(["08:00:00", "10:00:00"]);
    const [currentCapacity, setCurrentCapacity] = useState(30);
    const [value, onChange] = useState("10:00");

    useEffect(() => {
        setLoading(true);

        currentDate.toISOString();

        const _currentDate =
            currentDate.getFullYear() +
            "-" +
            (currentDate.getMonth() + 1) +
            "-" +
            currentDate.getDate();
        fetch(
            "/api/package?currentDate=" +
                _currentDate +
                "&category=" +
                currentCategory +
                "&frame=" +
                currentFrame +
                "&capacity=" +
                currentCapacity
        )
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    }, [currentDate, currentCategory, currentFrame, currentCapacity]);

    return (
        <div className="row mb-3">
            <div className="col-sm-6 themed-grid-col slds-p-top_large">
                <article className="slds-card">
                    <div className="slds-card__body slds-card__body_inner">
                        <div className="container">
                            <div className="slds-m-top_medium">
                                <p>
                                    1. Select a category accoring to your
                                    activity
                                </p>
                            </div>
                            <div>
                                <div className="slds-form-element inputContainer">
                                    <div className="slds-form-element__control">
                                        <div className="slds-select_container">
                                            <select
                                                className="slds-select"
                                                id="select-01"
                                            >
                                                <option value="">
                                                    Select…
                                                </option>
                                                <option>Option One</option>
                                                <option>Option Two</option>
                                                <option>Option Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slds-m-top_medium">
                                <p>
                                    2. Select the date you want for you activity
                                </p>
                            </div>
                            <CalendarSelected
                                currentDate={currentDate}
                                setCurrentDate={setCurrentDate}
                            ></CalendarSelected>
                        </div>
                        <div className="slds-m-top_medium">
                            <p>3. Select the time frame for you activity</p>
                        </div>
                        <span>
                            <TimePicker /> to <TimePicker />
                        </span>

                        <div className="slds-m-top_medium">
                            <p>4. Number of Guests</p>
                        </div>
                        <div className="slds-form-element">
                            <label
                                className="slds-form-element__label"
                                for="text-input-id-92"
                            >
                                <abbr
                                    className="slds-required"
                                    title="required"
                                >
                                    {" "}
                                </abbr>
                            </label>
                            <div className="slds-form-element__control">
                                <input
                                    type="text"
                                    id="text-input-id-92"
                                    required=""
                                    className="slds-input inputContainer"
                                />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div className="col-sm-6 themed-grid-col slds-p-top_large">
                <article
                    className="slds-card"
                    style={{ "max-height": "800px", overflow: "scroll" }}
                >
                    <div className="slds-card__body slds-card__body_inner">
                        <p>5. Choose the package for you</p>
                        <>
                            <Packages
                                onStepChange={onStepChange}
                                data={data}
                                isLoading={isLoading}
                            />
                        </>
                    </div>
                </article>
            </div>
        </div>
    );
}
function Step2({ onStepChange }) {
    return (
        <div className="row mb-3">
            <div className="col-sm-6 themed-grid-col slds-p-top_large">
                <article className="slds-card">
                    <div className="slds-card__body slds-card__body_inner">
                        <Image
                            className="ml-2"
                            width="600"
                            height="100"
                            src="/banner.jpg"
                            alt="Star Admin Free"
                        />
                        <h3 className="slds-text-heading_small">
                            Package Information
                        </h3>
                        <div className="slds-form-element">Street 54-23</div>
                        <div>Tuesday April 8th, 2022 - 7:00am - 8:00am</div>
                        <div>
                            <span
                                className="slds-icon_container slds-icon-utility-announcement"
                                title="Description of icon when needed"
                            >
                                <svg
                                    className="slds-icon slds-icon-text-default slds-icon_small"
                                    aria-hidden="true"
                                >
                                    <use href="/assets/icons/action-sprite/svg/symbols.svg#user"></use>
                                </svg>
                                <span className="slds-assistive-text">
                                    Description of icon when needed
                                </span>
                            </span>
                            <span className="slds-align-middle">
                                Capacity: 30
                            </span>
                        </div>
                        <div>Cost: $500</div>
                        <div>
                            <div>Description</div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse justo eros,
                                ullamcorper sit amet auctor ut, pharetra vel
                                odio. Aliquam tincidunt, metus interdum
                                tristique consectetur, ligula lorem consequat
                                velit, id elementum ante justo id turpis.
                                Pellentesque a tortor lacus. Duis eget risus
                                elementum, vehicula augue quis, egestas leo.
                                Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis egestas.
                                Fusce purus est, vehicula ac aliquet eget,
                                blandit eu libero. Fusce finibus interdum
                                aliquam.
                            </div>
                        </div>
                        <div>
                            <div>Disclaimers</div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse justo eros,
                                ullamcorper sit amet auctor ut, pharetra vel
                                odio. Aliquam tincidunt, metus interdum
                                tristique consectetur, ligula lorem consequat
                                velit, id elementum ante justo id turpis.
                                Pellentesque a tortor lacus. Duis eget risus
                                elementum, vehicula augue quis, egestas leo.
                                Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis egestas.
                                Fusce purus est, vehicula ac aliquet eget,
                                blandit eu libero. Fusce finibus interdum
                                aliquam.
                            </div>
                        </div>
                        <div>
                            <div>Insurance Information</div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse justo eros,
                                ullamcorper sit amet auctor ut, pharetra vel
                                odio. Aliquam tincidunt, metus interdum
                                tristique consectetur, ligula lorem consequat
                                velit, id elementum ante justo id turpis.
                                Pellentesque a tortor lacus. Duis eget risus
                                elementum, vehicula augue quis, egestas leo.
                                Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis egestas.
                                Fusce purus est, vehicula ac aliquet eget,
                                blandit eu libero. Fusce finibus interdum
                                aliquam.
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div className="col-sm-6 themed-grid-col slds-p-top_large">
                <article
                    className="slds-card"
                    style={{ "max-height": "800px", overflow: "scroll" }}
                >
                    <div className="slds-card__body slds-card__body_inner">
                        <p>Host Information</p>
                        <>
                            <div className="row mb-3">
                                <div className="col-sm-6 themed-grid-col slds-p-top_large">
                                    <div className="slds-form-element">
                                        <label
                                            className="slds-form-element__label"
                                            for="form-element-01"
                                        >
                                            Form Label
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                placeholder="Placeholder text…"
                                                className="slds-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 themed-grid-col slds-p-top_large">
                                    <div className="slds-form-element">
                                        <label
                                            className="slds-form-element__label"
                                            for="form-element-01"
                                        >
                                            Form Label
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                placeholder="Placeholder text…"
                                                className="slds-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slds-form-element">
                                <label
                                    className="slds-form-element__label"
                                    for="form-element-01"
                                >
                                    Form Label
                                </label>
                                <div className="slds-form-element__control">
                                    <input
                                        type="text"
                                        id="form-element-01"
                                        placeholder="Placeholder text…"
                                        className="slds-input"
                                    />
                                </div>
                            </div>
                            <div className="slds-form-element">
                                <label
                                    className="slds-form-element__label"
                                    for="form-element-01"
                                >
                                    Form Label
                                </label>
                                <div className="slds-form-element__control">
                                    <input
                                        type="text"
                                        id="form-element-01"
                                        placeholder="Placeholder text…"
                                        className="slds-input"
                                    />
                                </div>
                            </div>
                            <div className="slds-form-element">
                                <label
                                    className="slds-form-element__label"
                                    for="form-element-01"
                                >
                                    Form Label
                                </label>
                                <div className="slds-form-element__control">
                                    <input
                                        type="text"
                                        id="form-element-01"
                                        placeholder="Placeholder text…"
                                        className="slds-input"
                                    />
                                </div>
                            </div>
                            <button
                                className="slds-button slds-button_brand"
                                onClick={() => onStepChange(2)}
                            >
                                Brand Button
                            </button>
                        </>
                    </div>
                </article>
            </div>
        </div>
    );
}
function Step3() {
    return (
        <div className="row mb-3">
            <div className="col-sm-6 themed-grid-col slds-p-top_large">
                <article
                    className="slds-card"
                    style={{ "max-height": "800px", overflow: "scroll" }}
                >
                    <div className="slds-card__body slds-card__body_inner">
                        <p>Personal Information</p>
                        <>
                            <div className="row">
                                <div className="col-sm-6 themed-grid-col">
                                    <div className="slds-form-element">
                                        <label
                                            className="slds-form-element__label"
                                            for="form-element-01"
                                        >
                                            Form Label
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                placeholder="Placeholder text…"
                                                className="slds-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 themed-grid-col">
                                    <div className="slds-form-element">
                                        <label
                                            className="slds-form-element__label"
                                            for="form-element-01"
                                        >
                                            Form Label
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                placeholder="Placeholder text…"
                                                className="slds-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slds-form-element">
                                <label
                                    className="slds-form-element__label"
                                    for="form-element-01"
                                >
                                    Form Label
                                </label>
                                <div className="slds-form-element__control">
                                    <input
                                        type="text"
                                        id="form-element-01"
                                        placeholder="Placeholder text…"
                                        className="slds-input"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 themed-grid-col">
                                    <div className="slds-form-element">
                                        <label
                                            className="slds-form-element__label"
                                            for="form-element-01"
                                        >
                                            Form Label
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                placeholder="Placeholder text…"
                                                className="slds-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 themed-grid-col">
                                    <div className="slds-form-element">
                                        <label
                                            className="slds-form-element__label"
                                            for="form-element-01"
                                        >
                                            Form Label
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                placeholder="Placeholder text…"
                                                className="slds-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 themed-grid-col">
                                    <div className="slds-form-element">
                                        <label
                                            className="slds-form-element__label"
                                            for="form-element-01"
                                        >
                                            Form Label
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                placeholder="Placeholder text…"
                                                className="slds-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 themed-grid-col">
                                    <div className="slds-form-element">
                                        <label
                                            className="slds-form-element__label"
                                            for="form-element-01"
                                        >
                                            Form Label
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                placeholder="Placeholder text…"
                                                className="slds-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 themed-grid-col">
                                    <div className="slds-form-element">
                                        <label
                                            className="slds-form-element__label"
                                            for="form-element-01"
                                        >
                                            Form Label
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                placeholder="Placeholder text…"
                                                className="slds-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 themed-grid-col">
                                    <div className="slds-form-element">
                                        <label
                                            className="slds-form-element__label"
                                            for="form-element-01"
                                        >
                                            Form Label
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                placeholder="Placeholder text…"
                                                className="slds-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Card Information</p>
                            <div className="slds-form-element">
                                <label
                                    className="slds-form-element__label"
                                    for="form-element-01"
                                >
                                    Form Label
                                </label>
                                <div className="slds-form-element__control">
                                    <input
                                        type="text"
                                        id="form-element-01"
                                        placeholder="Placeholder text…"
                                        className="slds-input"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 themed-grid-col">
                                    <div className="slds-form-element">
                                        <label
                                            className="slds-form-element__label"
                                            for="form-element-01"
                                        >
                                            Form Label
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                placeholder="Placeholder text…"
                                                className="slds-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 themed-grid-col">
                                    <div className="row">
                                        <div className="col-sm-6 themed-grid-col">
                                            <div className="slds-form-element">
                                                <label
                                                    className="slds-form-element__label"
                                                    for="form-element-01"
                                                >
                                                    Form Label
                                                </label>
                                                <div className="slds-form-element__control">
                                                    <input
                                                        type="text"
                                                        id="form-element-01"
                                                        placeholder="Placeholder text…"
                                                        className="slds-input"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 themed-grid-col">
                                            <div className="slds-form-element">
                                                <label
                                                    className="slds-form-element__label"
                                                    for="form-element-01"
                                                >
                                                    Form Label
                                                </label>
                                                <div className="slds-form-element__control">
                                                    <input
                                                        type="text"
                                                        id="form-element-01"
                                                        placeholder="Placeholder text…"
                                                        className="slds-input"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="slds-button slds-button_brand">
                                Brand Button
                            </button>
                        </>
                    </div>
                </article>
            </div>
            <div className="col-sm-6 themed-grid-col slds-p-top_large">
                <article
                    className="slds-card"
                    style={{ background: "#f3f3f3" }}
                >
                    <div className="slds-card__body slds-card__body_inner">
                        <p>Add Discount Code</p>
                        <div className="row">
                            <div className="col-sm-6 themed-grid-col">
                                <div className="slds-form-element">
                                    <div className="slds-form-element__control">
                                        <input
                                            type="text"
                                            id="form-element-01"
                                            placeholder="Placeholder text…"
                                            className="slds-input"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 themed-grid-col">
                                <button className="slds-button slds-button_brand">
                                    Brand Button
                                </button>
                            </div>
                        </div>
                        <p>Summary</p>
                        <footer className="slds-card__footer">
                            <div>
                                <span
                                    className="slds-icon_container slds-icon-utility-announcement"
                                    title="Description of icon when needed"
                                >
                                    <svg
                                        className="slds-icon slds-icon-text-default slds-icon_small"
                                        aria-hidden="true"
                                    >
                                        <use href="/assets/icons/action-sprite/svg/symbols.svg#user"></use>
                                    </svg>
                                    <span className="slds-assistive-text">
                                        Description of icon when needed
                                    </span>
                                </span>
                                <span className="slds-align-middle">
                                    Capacity: 30
                                </span>
                            </div>
                            <span>Capacity: 30</span>
                            <div className="slds-tile__detail">
                                <dl className="slds-list_horizontal slds-wrap">
                                    <dt
                                        className="slds-item_label slds-text-color_weak slds-truncate"
                                        title="First Label"
                                    >
                                        First Label:
                                    </dt>
                                    <dd
                                        className="slds-item_detail slds-truncate"
                                        title="Description for first label"
                                    >
                                        Description for first label
                                    </dd>
                                    <dt
                                        className="slds-item_label slds-text-color_weak slds-truncate"
                                        title="Second Label"
                                    >
                                        Second Label:
                                    </dt>
                                    <dd
                                        className="slds-item_detail slds-truncate"
                                        title="Description for second label"
                                    >
                                        Description for second label
                                    </dd>
                                </dl>
                            </div>
                        </footer>
                        <footer className="slds-card__footer">
                            <div className="slds-tile__detail">
                                <dl className="slds-list_horizontal slds-wrap">
                                    <dt
                                        className="slds-item_label slds-text-color_weak slds-truncate"
                                        title="First Label"
                                    >
                                        First Label:
                                    </dt>
                                    <dd
                                        className="slds-item_detail slds-truncate"
                                        title="Description for first label"
                                    >
                                        Description for first label
                                    </dd>
                                    <dt
                                        className="slds-item_label slds-text-color_weak slds-truncate"
                                        title="Second Label"
                                    >
                                        Second Label:
                                    </dt>
                                    <dd
                                        className="slds-item_detail slds-truncate"
                                        title="Description for second label"
                                    >
                                        Description for second label
                                    </dd>
                                </dl>
                            </div>
                        </footer>
                    </div>
                </article>
            </div>
        </div>
    );
}
