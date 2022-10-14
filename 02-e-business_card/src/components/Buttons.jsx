import React from "react";

// export default function Buttons() {
//     return (
//         <div className="buttons-container">
//             <AwesomeButton type="primary">Download my Resume</AwesomeButton>
            
//         </div>
//     )
// };

// import { AwesomeButton } from "react-awesome-button";
// import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

export default function Buttons() {
  return (
    <div id="button-container">
      <a href="https://drive.google.com/drive/folders/1_jSiEyrjlhHWpJH7crlsWWo4RcmMAsnU?usp=sharing" target="_blank" rel="noopener noreferrer">
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">My Resume</span>
      </button>
      </a>
    </div>
  );
}