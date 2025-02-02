import Image from "next/image.js";
function Package({ onStepChange, data, index, setCurrentPackage }) {
    return (
        <button
            className="slds-card"
            style={{ border: "1px solid lightgray" }}
            onClick={() => {
                setCurrentPackage(
                    Object.assign({ frame: data.frames[index] }, data)
                );
                onStepChange(1);
            }}
        >
            <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                    <div className="slds-media__figure">
                        <span
                            className="slds-icon_container slds-icon-standard-account"
                            title="account"
                        >
                            <Image
                                className="ml-2"
                                width="100"
                                height="100"
                                src="/package.jpg"
                                alt="Star Admin Free"
                            />
                            <span className="slds-assistive-text">account</span>
                        </span>
                    </div>
                    <div className="slds-media__body">
                        <div className="demo-only">
                            <article
                                className="slds-tile"
                                style={{ "max-height": "100px" }}
                            >
                                <div
                                    className="slds-tile__detail"
                                    style={{ "font-size": "small" }}
                                >
                                    <ul className="slds-list_horizontal slds-has-dividers_right slds-m-top_xx-small">
                                        <li className="slds-item">
                                            Time Frame:{" "}
                                            <span>
                                                {
                                                    data.frames[index]
                                                        .auctifera__start_time__c
                                                }{" "}
                                                t0{" "}
                                                {
                                                    data.frames[index]
                                                        .auctifera__end_time__c
                                                }
                                            </span>
                                        </li>
                                        <li className="slds-item">
                                            Capacity:{" "}
                                            <span>
                                                {
                                                    data.auctifera__chosen_location_s_capacity__c
                                                }
                                            </span>
                                        </li>
                                        <li className="slds-item">
                                            Price:{" "}
                                            <span>
                                                $
                                                {
                                                    data.auctifera__event_rental_total_amount__c
                                                }
                                            </span>
                                        </li>
                                    </ul>
                                    <p
                                        style={{
                                            overflow: "hidden",
                                            "max-height": "60px",
                                            "text-overflow": "ellipsis",
                                            textAlign: "left",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: data.auctifera__description__c,
                                        }}
                                    />
                                </div>
                            </article>
                        </div>
                    </div>
                </header>
            </div>
        </button>
    );
}
export default function Packages({
    onStepChange,
    data,
    isLoading,
    setCurrentPackage,
}) {
    if (isLoading) {
        return (
            <p>
                <div
                    className="demo-only"
                    style={{ height: "6rem", position: "relative" }}
                >
                    <div className="slds-spinner_container">
                        <div
                            role="status"
                            className="slds-spinner slds-spinner_x-small"
                        >
                            <span className="slds-assistive-text">Loading</span>
                            <div className="slds-spinner__dot-a"></div>
                            <div className="slds-spinner__dot-b"></div>
                        </div>
                    </div>
                </div>
            </p>
        );
    }

    if (!data || data.length === 0) {
        return (
            <center>
                <div
                    className="slds-notify slds-notify_alert slds-alert_offline"
                    role="alert"
                    style={{
                        backgroundColor: "lightblue",
                        color: "#004b64",
                    }}
                >
                    <span>
                        The package will be available once you fill out all this
                        fields.
                    </span>
                </div>
            </center>
        );
    }

    return (
        <>
            {Object.keys(data).map((sfid) => {
                return data[sfid].frames.map((frame, index) => {
                    return (
                        <Package
                            key={sfid}
                            data={data[sfid]}
                            index={index}
                            onStepChange={onStepChange}
                            setCurrentPackage={setCurrentPackage}
                        />
                    );
                });
            })}
        </>
    );
}
