import React from "react";

export const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <img
          src="https://biozyme.muscleblaze.com/assets/images/mb-logo.svg"
          alt="logo"
          className="mblogo"
        />
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
      <div>
        <div className="h1">
          <h1>Level up your fitness journey with MuscleBlaze</h1>
        </div>
        <img
          src="https://img5.hkrtcdn.com/20938/bnr_2093764_o.jpg"
          alt=""
          className="Banner"
        />
        <div className="Goal">
          <h1>Shop by Goal</h1>
          <p>MB recommended supplements for your fitness goals.</p>
          <div className="Table">
            <tr>
              <td className="col">
                <img
                  src="https://imgs.search.brave.com/XtNmclhlTD9m5viakQprtuG4O6BWG26_yqS9Ek8Q_k0/rs:fit:475:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/dXdBMUVNUUhxRnh0/Nm95TnB4N19nSGFI/WiZwaWQ9QXBp"
                  alt=""
                />
                <h2>Body Building</h2>
              </td>
              <td className="col">
                <img
                  src="https://imgs.search.brave.com/RcsPsNSNXfskqqfv85oyU9dFVbHjdwxlmM7vympvmMs/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/NWgtSFhQbHJ0RTQ5/UE1wUE5ZWEVBSGFI/YSZwaWQ9QXBp"
                  alt=""
                />
                <h2>Weight Loss</h2>
              </td>
              <td className="col">
                <img
                  src="https://imgs.search.brave.com/GzCA2dhnppC9eSdAqWT1XCdWzJ30ydDEG1wdEl5mQ-k/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/SldmWV93YzZnbTVR/RHRxYzB1NmRnSGFI/YSZwaWQ9QXBp"
                  alt=""
                />
                <h2>Bulking up</h2>
              </td>
              <td className="col">
                <img
                  src="https://imgs.search.brave.com/Mmv2zEDw1lUBzpeLESC69Gb0_TbRtoSVNWBaqfE6tfw/rs:fit:450:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/Z0tuZXFuVFZoTHZB/MHBXdWctR0lnQUFB/QSZwaWQ9QXBp"
                  alt=""
                />
                <h2>Lean Muscle Mass</h2>
              </td>
            </tr>
          </div>
        </div>
        <marquee behavior="-2" direction="left">
          <img src=" https://img1.hkrtcdn.com/20889/bnr_2088800_o.jpg" alt="" />
          <img src="https://img3.hkrtcdn.com/20835/bnr_2083422_o.jpg" alt="" />
          <img src="https://img1.hkrtcdn.com/20799/bnr_2079860_o.jpg" alt="" />
          <img src="https://img1.hkrtcdn.com/20984/bnr_2098300_o.jpg" alt="" />
          <img src="https://img9.hkrtcdn.com/20984/bnr_2098308_o.jpg" alt="" />
        </marquee>
      </div>
      <div className="brand">
        <h1>Shop By Brand</h1>
        <img src="https://img5.hkrtcdn.com/19555/bnr_1955454_o.png" alt="" />
        <img src="https://img7.hkrtcdn.com/19555/bnr_1955456_o.png" alt="" />
        <img src="https://img3.hkrtcdn.com/19555/bnr_1955462_o.png" alt="" />
        <img src="https://img5.hkrtcdn.com/20599/bnr_2059854_o.png" alt="" />
      </div>
    </div>
  );
};
