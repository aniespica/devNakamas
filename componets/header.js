import Image from "next/image";
import style from '../styles/Header.module.css';
export function Header() {
    return (
        <div className={"slds-builder-header_container " + style.container}>
        <header className={"slds-builder-header "+ style.header}>
          <div className="slds-builder-header__item">
            <a href="#" className="slds-builder-header__item-action" title="Back">
              <span className="slds-icon_container slds-icon-utility-back slds-current-color">
                <Image src="/logo.png" alt="Logo" width={30} height={30} />
              </span>
            </a>
          </div>
        </header>
      </div>
    )
}