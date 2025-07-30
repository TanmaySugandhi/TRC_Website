import React from "react";
import "../components/Styles/Blogs2.css";
import BackButton from "../components/BackButton";

function IOT2() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Internet Of Things</h1>
      </div>
      <div className="blog-outside">
        <div className="blog-item">
          <div className="blog-title">
            <h3>Getting Started with ESP8266</h3>
          </div>
          <div className="blog-text">
            <p style={{ textAlign: "left" }}>
              <b>Getting Started with ESP8266:</b>
              <br />
              The ESP8266 is a low-cost Wi-Fi module, in which we can connect
              the wifi, it can run as a server or a client according to the
              programmer or user.
              <br />
              Comparing ESP8266 with other wifi solutions, ESP8266 is the best
              option for “The Internet of Things”. There are so many resources
              and it is low in price.
              <br />
              <br />
              <b>Versions of ESP8266:</b>
              <br />
              There are totally 16 versions or variants of ESP8266.
              <br />
              <img src="/assets/Blogs/2-1.jpg" alt="ESP8266 Versions" />
              <br />
              Mostly used are ESP-01 or ESP-12E NodeMCU Kit or Wemos-D1 Mini.
              For comparison of these 3 refer to this link.
              <br />
              The successor of ESP8266 is ESP32. The ESP32 consists of dual
              core-CPU, both wifi and bluetooth, more no. of GPIO pins compared
              to ESP8266.
              <br />
              <br />
              <b>Features of ESP8266(ESP-01):</b>
              <br />
              ● Power supply - 3.3V
              <br />
              ● Current Consumption - 100mA
              <br />
              ● 32-bit MCU
              <br />
              ● Frequency up to 52MHz
              <br />
              ● 1MB Flash memory
              <br />
              ● Used as a client or server.
              <br />
              ● Programmed through Arduino IDE or Lua Script.
              <br />
              <br />
              <b>ESP-01:</b>
              <br />
              <img src="/assets/Blogs/2-2.jpg" alt="ESP-01" />
              <br />
              Pin Number &nbsp;&nbsp;&nbsp; Pin Name &nbsp;&nbsp;&nbsp; Function
              &nbsp;&nbsp;&nbsp; Alternate Function
              <br />
              1 &nbsp;&nbsp;&nbsp; Ground &nbsp;&nbsp;&nbsp; Connects to the
              ground of the circuit. &nbsp;&nbsp;&nbsp; -
              <br />
              2 &nbsp;&nbsp;&nbsp; TX &nbsp;&nbsp;&nbsp; Transmits the data. Can
              be used also GPIO-1.
              <br />
              3 &nbsp;&nbsp;&nbsp; GPIO-2 &nbsp;&nbsp;&nbsp; General purpose
              input/output - 2nd pin. &nbsp;&nbsp;&nbsp; -
              <br />
              4 &nbsp;&nbsp;&nbsp; CH_EN &nbsp;&nbsp;&nbsp; Chip Enable - Active
              High. &nbsp;&nbsp;&nbsp; -
              <br />
              5 &nbsp;&nbsp;&nbsp; GPIO-0 &nbsp;&nbsp;&nbsp; General purpose
              input/output - 0th pin. When this GPIO is connected to GND we can
              download/update our firmware.
              <br />
              6 &nbsp;&nbsp;&nbsp; Reset &nbsp;&nbsp;&nbsp; Reset the module.
              &nbsp;&nbsp;&nbsp; -
              <br />
              7 &nbsp;&nbsp;&nbsp; RX &nbsp;&nbsp;&nbsp; Receives the data. Can
              be used also GPIO-3.
              <br />
              8 &nbsp;&nbsp;&nbsp; Vcc &nbsp;&nbsp;&nbsp; Should connect to
              power supply of 3.3V. &nbsp;&nbsp;&nbsp; -
              <br />
            </p>


          </div>
        </div>

        <BackButton />
      </div>
    </>
  );
}

export default IOT2;
