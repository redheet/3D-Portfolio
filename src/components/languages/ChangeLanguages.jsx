import React, { useEffect, useState } from "react";
import { HiTranslate } from "react-icons/hi";
import { JP } from "country-flag-icons/react/3x2";
import { ID } from "country-flag-icons/react/3x2";
import { US } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";

function ChangeLanguages() {
  const { i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div
        title="Change Langueges"
        tabIndex={0}
        className="btn btn-ghost normal-case m-1"
      >
        <HiTranslate className="w-5 h-5" />
        {/* <svg
                  width="12px"
                  height="12px"
                  className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg> */}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52"
      >
        <li>
          <button onClick={() => handleChangeLng("en")}>
            <US title="English" className="w-5 h-5" />
            English
          </button>
        </li>
        <li>
          <button onClick={() => handleChangeLng("id")}>
            <ID title="Indonesia" className="w-5 h-5" />
            Indonesia
          </button>
        </li>
        <li>
          <button onClick={() => handleChangeLng("jp")}>
            <JP title="日本語" className="w-5 h-5" />
            日本語
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ChangeLanguages;
