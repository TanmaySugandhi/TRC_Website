import React from "react";
import "../components/Styles/Blogs2.css";
import BackButton from "../components/BackButton";

function Embedded2() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Embedded Systems</h1>
      </div>
      <div className="blog-outside">
        <div className="blog-item">
          <div className="blog-title">
            <h3>LED BLINKING USING STM32F407 WITH ST32CUBEIDE</h3>
          </div>
          <div className="blog-text">
            <p style={{ textAlign: "left" }}>
              <b>LED BLINKING USING STM32F407 WITH ST32CUBEIDE</b>
              <br />
              Before going to the CUBEIDE first we see the schematic diagram of
              our board how the led are connected. For this u can refer to the
              user manual of your board. Now I am using stm32f407x, u can find
              the schematic diagram of LED at page-28. There u can find that our
              board has a on-board 4 leds named as PD12, PD13, PD14, PD15 As the
              name PD12 says that it connected to PORT-D of 12th pin of our
              board.
              <br />
              <img
                src="/assets/Blogs/10-1.jpg"
                alt="LED schematic diagram"
                width="100%"
              />
              <br />
              Now open your CUBEIDE select the file and create a new stm32
              project and if u want to work with the board then go to the board
              section and type your board name and select the board and click
              next and click finish. Now u can see an window which contain your
              board.
              <br />
              <img
                src="/assets/Blogs/10-2.jpg"
                alt="STM32 CubeIDE board"
                width="100%"
              />
              <br />
              Go to the PD12, PD13, PD14, PD15 make them as GPIO_OUTPUT(the pins
              is set to output mode). Next go to clock configuration as we
              discuss previous it default runs with internal clock (HSI). Now we
              need to save the file. Then it automatically ask to generate code
              then click ok. U can find a file is opened with a lot of code.
              This total code enable the clock, peripheral and intilizing it to
              output is done by this software only.
              <br />
              Now go to main and start coding at while section, u have to toggle
              the led of on-board led.
              <br />
              <img src="/assets/Blogs/10-3.jpg" alt="Code snippet" width="100%" />
              <br />
              HAL (hardware abstraction layer) it is a library which makes our
              work easer by enable what we required.
              <br />
              Now type the code given in figure. It says that toggle the led for
              every second hal_toggle_pin makes led on and off and hal_delay
              makes the led wait for one sec. after writing the code click on
              hammer then u should see in console as show in fig. After that
              click on debug there u can the LED blinking on your board.
              <br />
              <br />
              <b>Another way</b>
              <br />
              Before there is an library called HAL it helps us to enable all
              registers. If u need to write a code without any library then
              first thing u should do is to define address of each peripheral
              and create macros for each register and create macro for clock. By
              doing this u knows how the MCU works. If u love embedded then u
              should follow this step.
            </p>
          </div>
        </div>

        <BackButton />
      </div>
    </>
  );
}

export default Embedded2;
