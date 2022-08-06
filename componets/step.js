import CalendarSelected from "./calendar/calendar.js";
import Packages from "./package.js";
import Image from "next/image.js";
import { useState, useEffect } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
export function Steps({ currentStep, onStepChange }) {
    const [currentPackage, setCurrentPackage] = useState(null);
    const [hostUser, setHostUser] = useState({});

    if (currentStep === 0) {
        return (
            <Step1
                onStepChange={onStepChange}
                setCurrentPackage={setCurrentPackage}
            />
        );
    }

    if (currentStep === 1) {
        return (
            <Step2
                onStepChange={onStepChange}
                currentPackage={currentPackage}
                hostUser={hostUser}
                setHostUser={setHostUser}
            />
        );
    }

    if (currentStep === 2) {
        return <Step3 currentPackage={currentPackage} hostUser={hostUser} />;
    }

    return null;
}

function Step1({ onStepChange, setCurrentPackage }) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentCategory, setCurrentCategory] = useState("");
    const [currentFrame, setCurrentFrame] = useState([moment(), moment()]);
    const [currentCapacity, setCurrentCapacity] = useState(30);

    const categories = [
        { id: "", name: "Select a category" },
        { id: "Reception only", name: "Reception only" },
        { id: "Wedding", name: "Wedding" },
        { id: "Birthday Party", name: "Birthday Party" },
    ];

    useEffect(() => {
        setLoading(true);

        const _currentDate =
            currentDate.getFullYear() +
            "-" +
            (currentDate.getMonth() + 1) +
            "-" +
            currentDate.getDate();

        const _currentFrame =
            currentFrame[0] && currentFrame[1]
                ? [
                      currentFrame[0].seconds(0).format("HH:mm:ss"),
                      currentFrame[1].seconds(0).format("HH:mm:ss"),
                  ]
                : null;

        fetch(
            "/api/package?currentDate=" +
                _currentDate +
                "&category=" +
                currentCategory +
                "&frame=" +
                _currentFrame +
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
                                    1. Select a category according to your
                                    activity
                                </p>
                            </div>
                            <div>
                                <div className="slds-form-element slds-size_2-of-3">
                                    <div className="slds-form-element__control">
                                        <div className="slds-select_container">
                                            <select
                                                className="slds-select"
                                                id="select-01"
                                                value={currentCategory}
                                                onChange={(value) => {
                                                    setCurrentCategory(
                                                        value.target.value
                                                    );
                                                }}
                                            >
                                                {categories.map(
                                                    (category, key) => {
                                                        return (
                                                            <option
                                                                key={key}
                                                                value={
                                                                    category.id
                                                                }
                                                            >
                                                                {category.name}
                                                            </option>
                                                        );
                                                    }
                                                )}
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
                        <span className="slds-size_2-of-3">
                            <TimePicker
                                value={currentFrame[0]}
                                showSecond={false}
                                onChange={(value) => {
                                    setCurrentFrame([value, currentFrame[1]]);
                                }}
                            />{" "}
                            to{" "}
                            <TimePicker
                                value={currentFrame[1]}
                                showSecond={false}
                                onChange={(value) => {
                                    setCurrentFrame([currentFrame[0], value]);
                                }}
                            />
                        </span>

                        <div className="slds-m-top_medium">
                            <p>4. Number of Guests</p>
                        </div>
                        <div className="slds-form-element">
                            <div className="slds-form-element__control slds-size_2-of-3">
                                <input
                                    type="text"
                                    id="text-input-id-92"
                                    required=""
                                    className="slds-input inputContainer"
                                    onChange={(value) => {
                                        setCurrentCapacity(value.target.value);
                                    }}
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
                                setCurrentPackage={setCurrentPackage}
                            />
                        </>
                    </div>
                </article>
            </div>
        </div>
    );
}
function Step2({ onStepChange, currentPackage, setHostUser, hostUser }) {
    if (!currentPackage) {
        onStepChange(0);
    }

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
                            {currentPackage.name}
                        </h3>
                        <div className="slds-form-element">Street 54-23</div>
                        <div>{currentPackage.frame.name}</div>
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
                                Capacity:{" "}
                                {
                                    currentPackage.auctifera__chosen_location_s_capacity__c
                                }
                            </span>
                        </div>
                        <div>
                            Cost: $
                            {
                                currentPackage.auctifera__event_rental_total_amount__c
                            }
                        </div>
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
                                            Frist Name
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                className="slds-input"
                                                value={hostUser.firstName}
                                                onChange={(e) => {
                                                    setHostUser({
                                                        ...hostUser,
                                                        firstName:
                                                            e.target.value,
                                                    });
                                                }}
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
                                            Last Name
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
                                                className="slds-input"
                                                value={hostUser.lastName}
                                                onChange={(e) => {
                                                    setHostUser({
                                                        ...hostUser,
                                                        lastName:
                                                            e.target.value,
                                                    });
                                                }}
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
                                    Email
                                </label>
                                <div className="slds-form-element__control">
                                    <input
                                        type="text"
                                        id="form-element-01"
                                        className="slds-input"
                                        value={hostUser.email}
                                        onChange={(e) => {
                                            setHostUser({
                                                ...hostUser,
                                                email: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="slds-form-element">
                                <label
                                    className="slds-form-element__label"
                                    for="form-element-01"
                                >
                                    Home Phone
                                </label>
                                <div className="slds-form-element__control">
                                    <input
                                        type="text"
                                        id="form-element-01"
                                        className="slds-input"
                                        value={hostUser.homePhone}
                                        onChange={(e) => {
                                            setHostUser({
                                                ...hostUser,
                                                homePhone: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="slds-form-element">
                                <label
                                    className="slds-form-element__label"
                                    for="form-element-01"
                                >
                                    Mobile Phone
                                </label>
                                <div className="slds-form-element__control">
                                    <input
                                        type="text"
                                        id="form-element-01"
                                        className="slds-input"
                                        value={hostUser.mobilePhone}
                                        onChange={(e) => {
                                            setHostUser({
                                                ...hostUser,
                                                mobilePhone: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <button
                                className="slds-button slds-button_brand slds-button_stretch slds-m-top_medium"
                                onClick={() => {
                                    onStepChange(2);
                                }}
                            >
                                Go to Payment
                            </button>
                        </>
                    </div>
                </article>
            </div>
        </div>
    );
}
function Step3({ hostUser, currentPackage }) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        fetch("/api/create-rental-order", {
            method: "POST",
            body: JSON.stringify({ hostUser, currentPackage }),
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    }, [hostUser, currentPackage]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>data...</div>;
    }

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
                                            First Name 
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
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
                                            Last Name
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
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
                                    Email
                                </label>
                                <div className="slds-form-element__control">
                                    <input
                                        type="text"
                                        id="form-element-01"
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
                                            Phone 
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
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
                                            Address
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
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
                                            City
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
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
                                            State
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
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
                                            Zip/Code
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
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
                                            Country
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
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
                                    Cardholder Name
                                </label>
                                <div className="slds-form-element__control">
                                    <input
                                        type="text"
                                        id="form-element-01"
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
                                            Card number
                                        </label>
                                        <div className="slds-form-element__control">
                                            <input
                                                type="text"
                                                id="form-element-01"
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
                                                    Exp.Date
                                                </label>
                                                <div className="slds-form-element__control">
                                                    <input
                                                        type="text"
                                                        id="form-element-01"
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
                                                    CVC
                                                </label>
                                                <div className="slds-form-element__control">
                                                    <input
                                                        type="text"
                                                        id="form-element-01"
                                                        className="slds-input"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="slds-button slds-button_brand slds-button_stretch slds-m-top_medium">
                                Pay
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
