import React from "react";
//logo svg imports
// import github from "../assets/github.svg";
// import globe from "../assets/globe.svg";
// import linkedin from "../assets/linkedin.svg";

export default function Sociallinks() {
    return (
        <div className="sociallinks-container">
            {/* <div className="horizontal-line"></div> */}
            <hr width="95%" 
                size="2" 
                color="#0b4765"
                align="center"></hr>
            <ul>
                <li>
                    <a href="https://pk.linkedin.com/in/muhammad-hammad-hassan-cs101" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        className="ss-icon"
                        preserveAspectRatio="xMidYMid meet" 
                        viewBox="0 0 24 24">
                            <path  fill-rule="evenodd"  
                            d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z" clip-rule="evenodd"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Blankscreen-exe" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        className="ss-icon"
                        preserveAspectRatio="xMidYMid meet" 
                        viewBox="0 0 1536 1504">
                            <path fill-rule="evenodd"
                            d="M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0zM291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2zm31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3zm30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7zm42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3zm57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11zm58-10q-2-11-18-9q-16 3-14 15t18 8t14-14z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://rebrand.ly/hammad-cs101" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        className="ss-icon"
                        preserveAspectRatio="xMidYMid meet" 
                        viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Zm2 0a8 8 0 1 0 16 0a8 8 0 0 0-16 0Zm4.252-1.552c.243-.508.643-1.948.932-1.948c.288 0 .183.723.441.786c.217.053.05-.323.653-.39s1.26.302 1.26.302s.712.177 1.369 0c0 0-.347-.526.078-.698c.424-.172 1.002.464 1.023.875c.021.411-.944.687-.944.687l.944.567s.277-.878.867-.887c.525-.01 1.183.95.875 1.383c-.308.433-.506.135-.506.135s-.94.952-1.236 1.123c-.295.17-.708 0-.708 0s-.175.324 0 .473c.355.366 1.277.73 1.277.73s2.835.461 2.923 1.039c.088.578-2.256 3.5-2.625 3.5H14c-.357-.63.577-2.644.577-2.644s-.48-.532-.577-.856c-.096-.324.186-.894.186-.894l-1.279-.589s-.68 0-1.017-.267c-.337-.267-.515-1.75-.515-1.75l-1.22-.894s-1.06 1.346-1.405 1.174c-.346-.172-.74-.45-.498-.957Zm6.57-2.098c-.844 0-2.875-1.074-2.534-1.65c0-.826 2.135-.702 2.593-.702c.458 0 1.58.354 2.203.85c.623.495-.263 1.203-.572 1.502c-.31.3-.845 0-1.69 0Z"/>
                        </svg>
                    </a>
                </li>
            </ul> 
        </div>
    )
};