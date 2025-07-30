import React from "react";
import "../components/Styles/Blogs2.css";
import BackButton from "../components/BackButton";

function Embedded3() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Embedded System</h1>
      </div>
      <div className="blog-outside">
<div className="blog-item">
  <div className="blog-title">
    <h3>ST-Link Driver Installation</h3>
  </div>
  <div className="blog-text">
    <p style={{ textAlign: "left" }}>
      <b>ST-Link Driver Installation</b>
      <br />
      As to communicate with the board we need ST-link driver. I am using stm32f407 discovery board. Just go through the below website and click on get software.
      <br />
      <img src="/assets/Blogs/9-1.jpg" alt="ST-Link Driver installation step 1" width="100%" />
      <br />
      After downloading open the folder and you can see two applications named <i>dpinst_amd64</i> (install if your system runs at 64 bit) or else install <i>dpinst_86</i> for 32-bit.
      <br />
      <img src="/assets/Blogs/9-2.jpg" alt="ST-Link Driver installation step 2" width="100%" />
      <br />
      Once the installation is completed connect your board and go to the device manager and see whether these two are appearing or not.
      <br />
      <img src="/assets/Blogs/9-3.jpg" alt="Device Manager showing ST-Link" width="100%" />
      <br />
      By this you have successfully installed the driver and you can communicate with the board.
      <br /><br />
      <b>Stm32 cube ide installation</b>
      <br />
      For installing this, just search for stm32cubeIDE you can find the website of st.com and install it.
      <br />
      Additionally, you need to install java JDK file which is must to run stm32cubeide.
      <br />
      <img src="/assets/Blogs/9-4.jpg" alt="STM32CubeIDE Installation" width="100%" />
      <br />
      After successfully installing the stm32cubeide just click on the file and click on create stm32 project.
      <br />
      <img src="/assets/Blogs/9-5.jpg" alt="Create STM32 Project" width="100%" />
      <br />
      Then you can find this interface depending upon your MCU type your MCU name at part number and select it.
    </p>
  </div>
</div>


            <BackButton />
      </div>

    </>
  );
}

export default Embedded3;
