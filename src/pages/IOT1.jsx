import React from "react";
import "../components/Styles/Blogs2.css";
import BackButton from "../components/BackButton";

function IOT1() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Internet Of Things</h1>
      </div>
      <div className="blog-outside">
        <div className="blog-item">
          <div className="blog-title">
            <h3>
              Introduction and Installation of Robot Operating System (ROS)
            </h3>
          </div>
          <div className="blog-text">
            <p style={{ textAlign: "left" }}>
              <b>Introduction:</b>
            </p>
            <p style={{ textAlign: "left" }}>
              If you are working on a project, the battery connected to the
              ESP8266 doesn’t last long. The battery may be Lithium ion, Lithium
              Polymer, Lead acid or even a power bank. In order to save the
              battery, there are many ways we can reduce the clock speed of the
              microcontroller, we can write a well optimized firmware (Like
              using more pointers and global variables which don't affect the
              CPU) or we can use sleep modes if they are provided in the
              microcontroller. NodeMCU has sleep modes which can be controlled
              through a GPIO “D0” pin. While switching the Nodemcu into this
              mode, the battery consumption will be less and your battery will
              live longer than you think.
              <br />
              <br />
              <img
                src="/assets/Blogs/1-1.jpg"
                alt="Battery connected with ESP8266"
              />
              <br />
              <br />
              Types of Sleeps: There are 3 types of sleep modes. They are Modem,
              Light and Deep-Sleep
              <br />
              <img src="/assets/Blogs/1-2.jpg" alt="Types of Sleep Modes" />
              <br />
              1. Modem-Sleep: In this mode, the CPU will be operated whereas the
              Wi-Fi is disabled. This mode is used in applications where we
              don’t need an internet connection and the CPU should be working.
              This actually makes the NodeMCU wifi circuit to be turned off in
              this sleep-mode.
              <br />
              2. Light-Sleep: In this mode, the CPU will be paused until unless
              it is interrupted by interrupt pins. The data will not be
              transferred, wifi is not available and the CPU will be paused to
              save the power.
              <br />
              3. Deep-Sleep: In this mode, only Real-Time Clock (RTC) is
              functional. The Wifi circuit in Nodemcu and the CPU will not be
              functional. This RTC keeps track of ESP8266, which is in terms of
              time. This mode is the most efficient way of power saving.
              <br />
              Different types of modes are used according to your purpose of
              programming.
              <br />
              <br />
              <b>Deep-Sleep Mode:</b>
              These modes are useful when you need to shut-off some functions
              for the microcontroller. For example, if you buy a gaming laptop,
              when you are not gaming you can shut-off the gaming option and use
              it as a normal laptop. In a similar way this sleep works on the
              same principle. The maximum time that nodemcu can sleep is
              approximately 71min. At 2.5V it requires only 20μA current.
              <br />
              <br />
              <b>Working of Deep-Sleep Mode by an Example:</b>
              <br />
              Suppose you are working on a project, which will be like this.
              <br />
              ➢ The Wi-Fi is connected.
              <br />
              ➢ The data is taken from a sensor to nodemcu.
              <br />
              ➢ The nodemcu sends the data to the cloud or to any other device.
              <br />
              ➢ Sleeps for a predefined time.
              <br />
              ➢ Wake’s up and perform the same action again.
              <br />
              So, in dealing with this there are two things. We should put it to
              sleep for a certain period and we should wake it up. We should
              connect the RST pin to the GPIO 16 pin which is labeled as “D0”.
              This should be connected after uploading the program in the
              nodemcu. The reason is after uploading the program the RST pin
              will be “high” whenever the NodeMCU is running. So, whenever the
              reset pin receives the “low” signal it restarts the NodeMCU. So,
              whenever we enable the deep sleep mode for a certain time, a timer
              runs and after that is done, GPIO 16 pin sends a low signal to the
              RST pin and the whole program restarts.
              <br />
              For the pinout of NodeMCU click here.
              <br />
              <b>Program:</b>
              <br />
              {`/*
 * ESP8266 Deep sleep mode example
 * www.theroboticsclubsnist.org
 */`}
              <br />
            </p>
            <pre
              style={{
                backgroundColor: "#f0f0f0",
                padding: "12px",
                borderRadius: "6px",
                overflowX: "auto",
              }}
            >
              {`void setup() {
  Serial.begin(115200);
  
  // Deep sleep mode for 45 seconds, the ESP8266 wakes up by itself when GPIO 16 (D0 in NodeMCU board) is connected to the RESET pin.
  Serial.println("I'm awake, but I'm going into deep sleep mode for 30 seconds");
  ESP.deepSleep(45e6);
  
  // Deep sleep mode until RESET pin is connected to a LOW signal (for example pushbutton or magnetic reed switch)
  // Serial.println("I'm awake, but I'm going into deep sleep mode until RESET pin is connected to a LOW signal");
  // ESP.deepSleep(0);
}

void loop() {
}`}
            </pre>
            <p style={{ textAlign: "left" }}>
              ESP.deepSleep(45e6) indicates that it is in deep sleep for 45sec.
              The 45e6 indicates 45000000 microseconds.
              <br />
              ESP.deepSleep(uS) -- Format.
              <br />
              We should connect “D0” pin to the RST pin after uploading the
              code.
              <br />
              After uploading the code you can see the serial monitor printing
              "I'm awake, but I'm going into deep sleep mode for 30 seconds".
              This means the ESP8266 is undergoing deepsleep for 30sec in which
              only RTC will work while other functionalities will be shutdowned.
            </p>
            <hr />
          </div>
        </div>

        <BackButton />
      </div>
    </>
  );
}

export default IOT1;
