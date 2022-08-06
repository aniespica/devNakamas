import CalendarSelected from "./calendar/calendar.js";
import { Packages } from "./package.js";
import Image from "next/image.js";
export function Steps({ currentStep, onStepChange }) {
  if (currentStep === 0) {
    return <Step1 onStepChange={onStepChange}/>;
  }

  if (currentStep === 1) {
    return <Step2 onStepChange={onStepChange}/>;
  }

  if (currentStep === 2) {
    return <Step3 />;
  }

  return null;
}

function Step1({onStepChange}) {
  return (
    <div class="row mb-3">
      <div class="col-sm-6 themed-grid-col slds-p-top_large">
        <article class="slds-card">
          <div class="slds-card__body slds-card__body_inner">
            <CalendarSelected></CalendarSelected>
          </div>
        </article>
      </div>
      <div class="col-sm-6 themed-grid-col slds-p-top_large">
        <article
          class="slds-card"
          style={{ "max-height": "800px", overflow: "scroll" }}
        >
          <div class="slds-card__body slds-card__body_inner">
            <p>5. Choose the package for you</p>
            <>
            <Packages onStepChange={onStepChange}/>
            </>
          </div>
        </article>
      </div>
    </div>
  );
}
function Step2({onStepChange}) {
  return (
    <div class="row mb-3">
      <div class="col-sm-6 themed-grid-col slds-p-top_large">
        <article class="slds-card">
          <div class="slds-card__body slds-card__body_inner">
            <Image
              className="ml-2"
              width="600"
              height="100"
              src="/banner.jpg"
              alt="Star Admin Free"
            />
            <h3 class="slds-text-heading_small">Package Information</h3>
            <div class="slds-form-element">Street 54-23</div>
            <div>Tuesday April 8th, 2022 - 7:00am - 8:00am</div>
            <div>
              <span
                class="slds-icon_container slds-icon-utility-announcement"
                title="Description of icon when needed"
              >
                <svg
                  class="slds-icon slds-icon-text-default slds-icon_small"
                  aria-hidden="true"
                >
                  <use href="/assets/icons/action-sprite/svg/symbols.svg#user"></use>
                </svg>
                <span class="slds-assistive-text">
                  Description of icon when needed
                </span>
              </span>
              <span class="slds-align-middle">Capacity: 30</span>
            </div>
            <div>Cost: $500</div>
            <div>
              <div>Description</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse justo eros, ullamcorper sit amet auctor ut, pharetra
                vel odio. Aliquam tincidunt, metus interdum tristique
                consectetur, ligula lorem consequat velit, id elementum ante
                justo id turpis. Pellentesque a tortor lacus. Duis eget risus
                elementum, vehicula augue quis, egestas leo. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Fusce purus est, vehicula ac aliquet eget,
                blandit eu libero. Fusce finibus interdum aliquam.
              </div>
            </div>
            <div>
              <div>Disclaimers</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse justo eros, ullamcorper sit amet auctor ut, pharetra
                vel odio. Aliquam tincidunt, metus interdum tristique
                consectetur, ligula lorem consequat velit, id elementum ante
                justo id turpis. Pellentesque a tortor lacus. Duis eget risus
                elementum, vehicula augue quis, egestas leo. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Fusce purus est, vehicula ac aliquet eget,
                blandit eu libero. Fusce finibus interdum aliquam.
              </div>
            </div>
            <div>
              <div>Insurance Information</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse justo eros, ullamcorper sit amet auctor ut, pharetra
                vel odio. Aliquam tincidunt, metus interdum tristique
                consectetur, ligula lorem consequat velit, id elementum ante
                justo id turpis. Pellentesque a tortor lacus. Duis eget risus
                elementum, vehicula augue quis, egestas leo. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Fusce purus est, vehicula ac aliquet eget,
                blandit eu libero. Fusce finibus interdum aliquam.
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-sm-6 themed-grid-col slds-p-top_large">
        <article
          class="slds-card"
          style={{ "max-height": "800px", overflow: "scroll" }}
        >
          <div class="slds-card__body slds-card__body_inner">
            <p>Host Information</p>
            <>
              <div class="row mb-3">
                <div class="col-sm-6 themed-grid-col slds-p-top_large">
                  <div class="slds-form-element">
                    <label
                      class="slds-form-element__label"
                      for="form-element-01"
                    >
                      Form Label
                    </label>
                    <div class="slds-form-element__control">
                      <input
                        type="text"
                        id="form-element-01"
                        placeholder="Placeholder text…"
                        class="slds-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 themed-grid-col slds-p-top_large">
                  <div class="slds-form-element">
                    <label
                      class="slds-form-element__label"
                      for="form-element-01"
                    >
                      Form Label
                    </label>
                    <div class="slds-form-element__control">
                      <input
                        type="text"
                        id="form-element-01"
                        placeholder="Placeholder text…"
                        class="slds-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="form-element-01">
                  Form Label
                </label>
                <div class="slds-form-element__control">
                  <input
                    type="text"
                    id="form-element-01"
                    placeholder="Placeholder text…"
                    class="slds-input"
                  />
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="form-element-01">
                  Form Label
                </label>
                <div class="slds-form-element__control">
                  <input
                    type="text"
                    id="form-element-01"
                    placeholder="Placeholder text…"
                    class="slds-input"
                  />
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="form-element-01">
                  Form Label
                </label>
                <div class="slds-form-element__control">
                  <input
                    type="text"
                    id="form-element-01"
                    placeholder="Placeholder text…"
                    class="slds-input"
                  />
                </div>
              </div>
              <button class="slds-button slds-button_brand" onClick={()=> onStepChange(2)}>
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
    <div class="row mb-3">
      <div class="col-sm-6 themed-grid-col slds-p-top_large">
        <article
          class="slds-card"
          style={{ "max-height": "800px", overflow: "scroll" }}
        >
          <div class="slds-card__body slds-card__body_inner">
            <p>Personal Information</p>
            <>
              <div class="row">
                <div class="col-sm-6 themed-grid-col">
                  <div class="slds-form-element">
                    <label
                      class="slds-form-element__label"
                      for="form-element-01"
                    >
                      Form Label
                    </label>
                    <div class="slds-form-element__control">
                      <input
                        type="text"
                        id="form-element-01"
                        placeholder="Placeholder text…"
                        class="slds-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 themed-grid-col">
                  <div class="slds-form-element">
                    <label
                      class="slds-form-element__label"
                      for="form-element-01"
                    >
                      Form Label
                    </label>
                    <div class="slds-form-element__control">
                      <input
                        type="text"
                        id="form-element-01"
                        placeholder="Placeholder text…"
                        class="slds-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="form-element-01">
                  Form Label
                </label>
                <div class="slds-form-element__control">
                  <input
                    type="text"
                    id="form-element-01"
                    placeholder="Placeholder text…"
                    class="slds-input"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 themed-grid-col">
                  <div class="slds-form-element">
                    <label
                      class="slds-form-element__label"
                      for="form-element-01"
                    >
                      Form Label
                    </label>
                    <div class="slds-form-element__control">
                      <input
                        type="text"
                        id="form-element-01"
                        placeholder="Placeholder text…"
                        class="slds-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 themed-grid-col">
                  <div class="slds-form-element">
                    <label
                      class="slds-form-element__label"
                      for="form-element-01"
                    >
                      Form Label
                    </label>
                    <div class="slds-form-element__control">
                      <input
                        type="text"
                        id="form-element-01"
                        placeholder="Placeholder text…"
                        class="slds-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 themed-grid-col">
                  <div class="slds-form-element">
                    <label
                      class="slds-form-element__label"
                      for="form-element-01"
                    >
                      Form Label
                    </label>
                    <div class="slds-form-element__control">
                      <input
                        type="text"
                        id="form-element-01"
                        placeholder="Placeholder text…"
                        class="slds-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 themed-grid-col">
                  <div class="slds-form-element">
                    <label
                      class="slds-form-element__label"
                      for="form-element-01"
                    >
                      Form Label
                    </label>
                    <div class="slds-form-element__control">
                      <input
                        type="text"
                        id="form-element-01"
                        placeholder="Placeholder text…"
                        class="slds-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 themed-grid-col">
                  <div class="slds-form-element">
                    <label
                      class="slds-form-element__label"
                      for="form-element-01"
                    >
                      Form Label
                    </label>
                    <div class="slds-form-element__control">
                      <input
                        type="text"
                        id="form-element-01"
                        placeholder="Placeholder text…"
                        class="slds-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 themed-grid-col">
                  <div class="slds-form-element">
                    <label
                      class="slds-form-element__label"
                      for="form-element-01"
                    >
                      Form Label
                    </label>
                    <div class="slds-form-element__control">
                      <input
                        type="text"
                        id="form-element-01"
                        placeholder="Placeholder text…"
                        class="slds-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p>Card Information</p>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="form-element-01">
                  Form Label
                </label>
                <div class="slds-form-element__control">
                  <input
                    type="text"
                    id="form-element-01"
                    placeholder="Placeholder text…"
                    class="slds-input"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 themed-grid-col">
                  <div class="slds-form-element">
                    <label
                      class="slds-form-element__label"
                      for="form-element-01"
                    >
                      Form Label
                    </label>
                    <div class="slds-form-element__control">
                      <input
                        type="text"
                        id="form-element-01"
                        placeholder="Placeholder text…"
                        class="slds-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 themed-grid-col">
                  <div class="row">
                    <div class="col-sm-6 themed-grid-col">
                      <div class="slds-form-element">
                        <label
                          class="slds-form-element__label"
                          for="form-element-01"
                        >
                          Form Label
                        </label>
                        <div class="slds-form-element__control">
                          <input
                            type="text"
                            id="form-element-01"
                            placeholder="Placeholder text…"
                            class="slds-input"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 themed-grid-col">
                      <div class="slds-form-element">
                        <label
                          class="slds-form-element__label"
                          for="form-element-01"
                        >
                          Form Label
                        </label>
                        <div class="slds-form-element__control">
                          <input
                            type="text"
                            id="form-element-01"
                            placeholder="Placeholder text…"
                            class="slds-input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="slds-button slds-button_brand">
                Brand Button
              </button>
            </>
          </div>
        </article>
      </div>
      <div class="col-sm-6 themed-grid-col slds-p-top_large">
        <article class="slds-card" style={{ background: "#f3f3f3" }}>
          <div class="slds-card__body slds-card__body_inner">
            <p>Add Discount Code</p>
            <div class="row">
              <div class="col-sm-6 themed-grid-col">
                <div class="slds-form-element">
                  <div class="slds-form-element__control">
                    <input
                      type="text"
                      id="form-element-01"
                      placeholder="Placeholder text…"
                      class="slds-input"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-6 themed-grid-col">
                <button class="slds-button slds-button_brand">
                  Brand Button
                </button>
              </div>
            </div>
            <p>Summary</p>
            <footer class="slds-card__footer">
              <div>
                <span
                  class="slds-icon_container slds-icon-utility-announcement"
                  title="Description of icon when needed"
                >
                  <svg
                    class="slds-icon slds-icon-text-default slds-icon_small"
                    aria-hidden="true"
                  >
                    <use href="/assets/icons/action-sprite/svg/symbols.svg#user"></use>
                  </svg>
                  <span class="slds-assistive-text">
                    Description of icon when needed
                  </span>
                </span>
                <span class="slds-align-middle">Capacity: 30</span>
              </div>
              <span>Capacity: 30</span>
              <div class="slds-tile__detail">
                <dl class="slds-list_horizontal slds-wrap">
                  <dt
                    class="slds-item_label slds-text-color_weak slds-truncate"
                    title="First Label"
                  >
                    First Label:
                  </dt>
                  <dd
                    class="slds-item_detail slds-truncate"
                    title="Description for first label"
                  >
                    Description for first label
                  </dd>
                  <dt
                    class="slds-item_label slds-text-color_weak slds-truncate"
                    title="Second Label"
                  >
                    Second Label:
                  </dt>
                  <dd
                    class="slds-item_detail slds-truncate"
                    title="Description for second label"
                  >
                    Description for second label
                  </dd>
                </dl>
              </div>
            </footer>
            <footer class="slds-card__footer">
            <div class="slds-tile__detail">
                <dl class="slds-list_horizontal slds-wrap">
                  <dt
                    class="slds-item_label slds-text-color_weak slds-truncate"
                    title="First Label"
                  >
                    First Label:
                  </dt>
                  <dd
                    class="slds-item_detail slds-truncate"
                    title="Description for first label"
                  >
                    Description for first label
                  </dd>
                  <dt
                    class="slds-item_label slds-text-color_weak slds-truncate"
                    title="Second Label"
                  >
                    Second Label:
                  </dt>
                  <dd
                    class="slds-item_detail slds-truncate"
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
