import React from "react";
import "../components/Styles/Blogs2.css";
import BackButton from "../components/BackButton";

function IOT3() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Internet OF Things</h1>
      </div>
      <div className="blog-outside">
        <div className="blog-item">
          <div className="blog-title">
            <h3>NodeMCU ESP-12E</h3>
          </div>
          <div className="blog-text">
            <p style={{ textAlign: "left" }}>
              <b>Introduction:</b>
              <br />
              From the previous article, you have got that there are different
              variants of esp-0X(X=0,1..12E) modules. If we want to operate more
              sensors or modules through these esp modules, there are not enough
              GPIO pins.
              <br />
              For this, there are two solutions.
              <br />
              1. We should connect the esp modules to another microcontroller
              (Ex: Arduino). So that we can connect more devices.
              <br />
              2. There are few microcontrollers which have built-in SoC like
              NodeMCU, Wemos-D1. We can use this type of microcontroller’s.
              <br />
              There are two versions of nodemcu, which we can differentiate
              easily. One appears in black colour as shown in below which is the
              latest version V1.0 (version 2), another is v0.9 (version1) which
              appears in blue colour.
              <br />
              <br />
              <img src="/assets/Blogs/3-1.jpg" alt="NodeMCU Versions" />
              <br />
              NodeMCU Development Board/kit v1.0 (Version 2)
              <br />
              <br />
              <b>Features:</b>
              <br />
              ● We can observe the pin diagram as shown in the above figure, the
              pin numbers are different. If we want to use the pin D0, we should
              mention 16 in the programming with Arduino IDE.
              <br />
              ● NodeMCU is 3.3V, it is not tolerant to 5V.
              <br />
              ● There is only one analog output (A0) in the board.
              <br />
              ● There are 16 GPIO’s (GPIO and Digital pins are not the same),
              which consists of UART, SPI, I2C, etc.
              <br />
              ● It is a 32-bit Microcontroller.
              <br />
              ● Flash Memory 4KB
              <br />
              ● Clock Speed - 80MHz.
              <br />
              ● It has two UART interfaces UART0 (RXD0 &amp; TXD0) and UART1
              (RXD1 &amp; TXD2). Generally UART1 is used to upload the
              firmware/program.
              <br />
              ● The EN pin and the RST button resets the microcontroller.
              <br />
              ● The pin D0 or GPIO-16 can be used for sleeping modes for low
              power consumption in NodeMCU.
              <br />
              <br />
              <b>Programming with NodeMCU:</b>
              <br />
              There are several Integrated Development Environment (IDE’s) for
              programming. Two of them are:
              <br />
              1. NodeMCU with ESPlorer IDE:
              <br />
              Lua scripts are generally used to code the NodeMCU. Lua is an open
              source, lightweight, embeddable scripting language built on top of
              the C programming language.
              <br />
              2. NodeMCU with Arduino IDE:
              <br />
              Here is another way of developing NodeMCU with a well-known IDE
              i.e. Arduino IDE. We can also develop applications on NodeMCU
              using the Arduino development environment. This makes it easier
              for Arduino developers than learning a new language and IDE for
              NodeMCU. For more information about Arduino IDE with NodeMCU click
              getting started with NodeMCU.
              <br />
              <br />
              <b>Difference between ESPlorer and Arduino:</b>
              <br />
              Well, there is a programming language difference we can say while
              developing applications for NodeMCU using ESPlorer IDE and Arduino
              IDE. We need to code in C/C++ programming language if we are using
              Arduino IDE for developing NodeMCU applications and Lua language
              if we are using ESPlorer IDE. Basically, NodeMCU is Lua
              Interpreter, so it can understand Lua scripts easily. When we
              write Lua scripts for NodeMCU and upload it to the NodeMCU, then
              they will get executed sequentially. It will not build a binary
              firmware file of code for NodeMCU to write. It will send Lua
              script as it is to NodeMCU to get executed. In Arduino IDE when we
              write and compile code, ESP8266 toolchain in the background
              creates a binary firmware file of code we wrote. And when we
              upload it to NodeMCU then it will flash all NodeMCU firmware with
              newly generated binary firmware code. In fact, it writes the
              complete firmware. That’s the reason why NodeMCU does not accept
              further Lua scripts/code after it is getting flashed by Arduino
              IDE. After getting flashed by an Arduino sketch/code there will be
              no more Lua interpreter and we get errors if we try to upload Lua
              scripts. To again start with Lua script, we need to flash it with
              NodeMCU firmware. Since Arduino IDE compiles and upload/writes
              complete firmware, it takes more time than ESPlorer IDE.
            </p>
          </div>
        </div>

        <BackButton />
      </div>
    </>
  );
}

export default IOT3;
