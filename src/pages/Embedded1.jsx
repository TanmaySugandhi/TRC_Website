import React from "react";
import "../components/Blogs2.css";
import BackButton from "../components/BackButton";

function Embedded1() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Embedded System</h1>
      </div>
      <div className="blog-outside">
        <div className="blog-item">
          <div className="blog-title">
            <h3>Embedded System</h3>
          </div>
          <div className="blog-text">
            <p style={{ textAlign: "left" }}>
              An Embedded system is essentially designed to perform many task
              like access the data, process the data, store the data and
              managing the information in various Electronics based system.
              Embedded system is a mixture of Hardware and Software system.
              software contains an microcode that Embedded in to the Hardware.
              The most intresting feature of this system is to give output
              within the limit time. So we commonly use this in simple device
              and complex device.
              <br />
              <br />
              <b>APPLICAION OF EMBEDDED SYSYTEM</b>
              <br />• Microwave
              <br />• Calculator
              <br />• Home security etc…
              <br />
              <br />
              <b>HARDWARE SYSTEM</b>
              <br />
              It consists of mainly two parts with the help of this hardware
              system runes.
              <br />
              1. MICROCONTROLLER
              <br />
              2. MICROPROCESSOR
              <br />
              This two parts consists of several elements like Input and output
              peripheral, several ports, Timers, user interface etc..
              <br />
              Now lets see the difference between them.
              <br />
              <br />
            </p>

            <table style={{ width: "100%", textAlign: "left" }} border="1">
              <tbody>
                <tr>
                  <th>
                    <b>MICROCONTROLLER</b>
                  </th>
                  <th>
                    <b>MICROPROCESSOR</b>
                  </th>
                </tr>
                <tr>
                  <td>
                    It is an integrated circuit which is designed for a specific
                    operation in an embedded system.
                  </td>
                  <td>
                    A component that performs the instructions and various task
                    involved in computer.
                  </td>
                </tr>
                <tr>
                  <td>
                    It consists of mainly three parts ALU, Registers, CU and
                    other elements are connected externally to CPU.
                  </td>
                  <td>
                    It consists of ALU, IO Ports, RAM, ROM, ADC,DAC are
                    integrated in a single chip.
                  </td>
                </tr>
                <tr>
                  <td>It is used in general purpose computing system.</td>
                  <td>It is mainly designed for a particular task.</td>
                </tr>
                <tr>
                  <td>It processing speed is usually in order of 8-50MHz.</td>
                  <td>It processing speed is usually in order of 1GHz.</td>
                </tr>
                <tr>
                  <td>
                    It consists of various peripheral called SPI, I2C UART etc.
                  </td>
                  <td>
                    It uses peripheral interface like UART, USB and Ethernet.
                  </td>
                </tr>
              </tbody>
            </table>

            <p style={{ textAlign: "left" }}>
              <br />
              Now let go deep into microcontroller using an example stm32 board
              Stm32
              <br />
              Before going to the stm32 first we have to know a little bit about
              an architecture called ARM Cortex architecture.
              <br />
              <br />
              <b>ARM?</b>
              <br />
              ARM is developed based on the RISC(Reduced instruction set
              computer) machine and it is named as acorn RISC machine. It
              consists an architecture which is described as a set of methods
              and rules that describes the functionality, organization and
              implementation on computer system and this architecture is
              implemented by our computer system.
              <br />
              It doesnot manufacture any chips it gives an architecture so that
              many other companies uses this architecture and make there own
              boards.
              <br />
              STMicroelectronics is the semiconductor company uses this
              architecture and developed STM32
              <br />
              <br />
              <b>INTRODUCTION TO STM32</b>
              <br />
              STM32 is a group of family under ARM-Cortex-M based 32-bit
              Microcontroller. Stm32 is divided in different groups based on
              cortex-M architecture and required peripheral. As we know that
              Microcontroller has in build ROM, RAM, clock, pins by considering
              this STelectronics developed different board with different
              memory. Based upon over requirements we have to select the board.
              <br />
              It is divided into 3 lines which covers all board
              <br />
              • The first is F-Line series which consists different series of
              F-family like STM32F0, STM32F1, STM32F2,STM32F3,STM32F4 And last
              STM32F7.
              <br />
              • The next series is named as L-Line series(LOW POWER SERIES) it
              consists of L-family like STM32L0, STM32L1, STM32L4.
              <br />
              • The last series is name as H-Line series(HIGH PERFORMANCE
              SERIES) which is introduced newly it consists of H-family like
              STM32H7.
              <br />
              <b>NOTE:</b>
              <br />
              For every board we can get reference manual and data sheet by this
              we can get total information of that particular board.
              <br />
              If u new don’t have any board and u are trying to buy it then
              consider this things
              <br />• ON-board debugger
              <br />• Try to buy which as more Flash memory and SRAM
              <br />• Check whether required peripheral is there or not.
              <br />
              <br />
              <b>Stm32f407disc-1</b>
              <br />
              <img
                src="/assets/Blogs/7-1.jpg"
                style={{ width: "100%" }}
                alt="stm32f407disc-1"
              />
              <br />
              As shown in the figure it has an on-board ST-Link support and has
              MCU one for operating the ST-Link and another is main MCU and it
              consists of 4 on-board LED which are present in between reset and
              push button. This board consists of total six ports in this
              different peripheral communication are done. It has an 8MHz
              external clock but by default it is not used when we need it we
              can enable by code. It uses internal RC oscillator. If u are using
              different board go through the user manual.
              <br />
              Once u have a board the next step is to talk to the board this is
              done by ST-Link driver.
              <br />
              <br />
            </p>

            <details style={{ textAlign: "left" }}>
              <summary>
                <b>Installation</b>
              </summary>
              <p>
                <b>ST-Link Driver Installation</b>
              </p>
              <p>
                As to communicate with the board we need ST-link driver. I am
                using stm32f407 discovery board Just go through the below
                website and click on get software.
              </p>
              <p>
                <img alt="" src="/assets/Blogs/image3.png" />
              </p>
              <p>
                After downloading open the folder and u can see two application
                named dpinst_amd64 install if your system runs at 64 bit or else
                install dpindt_86 for 32-bit.
              </p>
              <p>
                <img src="/assets/Blogs/image5.png" alt="" />
              </p>
              <p>
                Onces the installation is completed connect your board and go to
                the device manager and see whether this two are appearing or
                not.
              </p>
              <p>
                <img src="/assets/Blogs/image4.png" alt="" />
              </p>
              <p>
                By this u have successfully installed the driver and you can
                communicate with board. Stm32 cube ide installation
              </p>
              <p>
                For installing this just search for stm32cubeIDE u can find
                website of st.com and install it And additionally u need to
                install java jdk file which is must to run stm32cubeide.
              </p>
              <p>
                <img alt="" src="/assets/Blogs/image2.png" />
              </p>
              <p>
                After successfully installing the stm32cubeide just click on the
                file and click on create stm32 project.{" "}
              </p>
              <p>
                <img alt="" src="/assets/Blogs/image1.png" />
              </p>
              <p>
                Then u can find this interface depending upon your MCU type your
                MCU name at part number and select it.
              </p>
            </details>
            <br />

            <details style={{ textAlign: "left" }}>
              <summary>
                <b>Memory Map</b>
              </summary>
              <p>
                <b>Map of stm32f407x </b>
              </p>
              <p>
                <img alt="" src="/assets/Blogs/image6.png" />
              </p>
              <p>
                Before going to memory map lets see about ARM-Cortex M4. It has
                a width of system bus is 32-bits. It says that I can produce
                2^32 different address. The range of this is start from
                0x0000_0000 and ends at 0xffff_ffff .In between this address we
                can find different peripheral addresses that points to a
                particular peripheral.{" "}
              </p>
              <p>
                Lets go to the reference manual of stm2f407x and go to section
                called memory map there u can see table contaning the different
                peripheral attached to the different address for understating
                lets take a Example –
              </p>
              <p>
                If u want to use GPIOA then its address lies from 0x4002_0000 to
                0x4002_03FF that means all the register of GPIOA are lies
                between this address if the system bus produces the the base
                address of GPIOA(0x4002_0000) then the MCU is talking to GPIOA.{" "}
              </p>
              <p>
                We can see in MEMORY MAP that it consists of ARM-Cortex M4 it
                can run at 168MHz and with the help of bus, the peripheral and
                arm communicate each other. The ARM consists of three bus named
                as I-bus(instruction bus), D-bus(data bus) and S-bus(system bus){" "}
              </p>
              <p>
                The use of I-bus is to fetch the instruction written in the
                code. And the purpose of D-bus is to fetch the data from the
                code so this two bus are connected to Flash.{" "}
              </p>
              <p>
                The ARM cortex-M4 consists of ADVANCE HIGH-PERFORMANCE BUS(AHB)
                and ADVANCE PERIPHERAL BUS(APB){" "}
              </p>
              <p>
                According to ARM M-4 if the instruction are present in between
                the addresses 0x00000000 to 0x1FFFFFFC then it uses I-BUS. If
                the instruction are outside the address 0x00000000 to 0x1FFFFFFC
                then it use S-BUS. If the data are present in between the
                0x00000000 to 0x1FFFFFFF then it uses D-BUS. If the data are
                outside the address 0x00000000 to 0x1FFFFFFF then it use S-BUS{" "}
              </p>
              <p>
                By above block diagram we can see that s-bus is connected to
                SRAM and AHB1 bus so that all the peripheral falls to system bus
                that means If one peripheral communicate then other peripheral
                can’t communicate.{" "}
              </p>
              <p>
                As we go deep into AHB1 bus it is connected to APB1 and APB2 bus
                and this two bus run with a low clock speed then AHB1 bus. And
                we have AHB2 this can be used when need to communicate with
                external like camera and USB.{" "}
              </p>
              <p>
                Suppose if u want to talk with GPIOI then u mush enable the AHB
                bus then only your GPIO can communicate with the ARM and if u
                want to communicate with the SPI1 then u should enable the APB1
                bus lets see how to enable this bus in further series.
              </p>
              <p>CLOCKS </p>
              <p>
                The heart of the MCU is clock without the clock there is no
                transfer of data. As we see in reference manual we can find it
                has three clock sources.{" "}
              </p>
              <p>• HSI oscillator clock(RC oscillator) </p>
              <p>• HSE oscillator clock(crystal oscillator) </p>
              <p>• PLL clock(phase locked loop) </p>
              <p>
                Crystal oscillator is connected to the external to the MCU. RC
                oscillator is connected internal to MCU. PLL is also connected
                internal to MCU.{" "}
              </p>
              <p>
                <img src="/assets/Blogs/image7.png" alt="" />
              </p>
              <p>
                As u can see in the above figure there is a multiplexer for
                clock source. By default the MCU runes with internal clock which
                is HIS. We the user need external clock he should enable with
                the program.{" "}
              </p>
              <p>• Internal oscillator runes with fixed 16MHz </p>
              <p>• External oscillator various from 4-26 MHz </p>
              <p>SYSCLK </p>
              <p>
                SYSCLK is the main clock for MCU. By which different peripheral
                are driven. Depending upon the requirement of clock for
                peripheral there is a prescaler (It reduces the clock by
                dividing). Example
              </p>
              <p>
                If u need to drive the AHB bus with 8MHz clock speed then u need
                to make the given SYSCLK clock divided with AHB prescaler by 2
                so that it generate (16/2)=8MHz clock which is directly
                connected to AHB bus. So now AHB bus runes with 8MHz clock
                speed.
              </p>
            </details>
            <br />

            <details style={{ textAlign: "left" }}>
              <summary>
                <b>Example</b>
              </summary>
              <p>
                <b>LED BLINKING USING STM32F407 WITH ST32CUBEIDE </b>
              </p>
              <p>
                Before going to the CUBEIDE first we see the schematic diagram
                of our board how the led are connected. For this u can refer to
                the user manual of your board. Now I am using stm32f407x, u can
                find the schematic diagram of LED at page-28. There u can find
                that our board has a on-board 4 leds named as PD12,
                PD13,PD14,PD15 As the name PD12 says that it connected to PORT-D
                of 12<sup>th</sup> pin of our board.{" "}
              </p>
              <p>
                <img alt="" src="img/image8.png" />
              </p>
              <p>
                Now open your CUBEIDE select the file and create a new stm32
                project and if u want to work with the board then go to the
                board section and type your board name and select the board and
                click next and click finish. Now u can see an window which
                contain your board.
              </p>
              <p>
                <img alt="" src="img/image10.png" />
              </p>
              <p>
                Go to the PD12, PD13, PD14, PD15 make them as GPIO_OUTPUT(the
                pins is set to output mode). Next go to clock configuration as
                we discuss previous it default runs with internal clock (HSI).
                Now we need to save the file. Then it automatically ask to
                generate code then click ok. U can find a file is opened with a
                lot of code. This total code enable the clock, peripheral and
                intilizing it to output is done by this software only.{" "}
              </p>
              <p>
                Now go to main and start coding at while section, u have to
                toggle the led of on-board led.{" "}
                <img alt="" src="img/image9.png" />
              </p>
              <p>
                HAL (hardware abstraction layer) it is a library which makes our
                work easer by enable what we required.{" "}
              </p>
              <p>
                Now type the code given in figure. It says that toggle the led
                for every second hal_toggle_pin makes led on and off and
                hal_delay makes the led wait for one sec. after writing the code
                click on hammer then u should see in console as show in fig.
                After that click on debug there u can the LED blinking on your
                board.{" "}
              </p>
              <p>Another way </p>
              <p>
                Before there is an library called HAL it helps us to enable all
                registers. If u need to write a code without any library then
                first thing u should do is to define address of each peripheral
                and create macros for each register and create macro for clock.
                By doing this u knows how the MCU works. If u love embedded then
                u should follow this step.
              </p>
            </details>
            <br />

            <details style={{ textAlign: "left" }}>
              <summary>
                <b>SPI</b>
              </summary>
              <p>
                <b>&nbsp;SPI </b>
              </p>
              <p>
                SPI stands for serial peripheral interface it is basically a
                protocol which is frequently used to communicate between two or
                more devices we name them as master and slaves(one master and
                different slaves).master is mainly a MCU and slave may be
                Sensor, display, Bluetooth etc. SPI is a protocol to communicate
                serial data communication between one master and different
                slaves. Four pins are dedicated to SPI communication.{" "}
              </p>
              <p>• SCLK(clock is output for master and input to slave) </p>
              <p>
                • MOSI(master out slave in data. i.e transmit data in master
                mode & receive data in slave mode){" "}
              </p>
              <p>
                • MISO(master in slave out data. i.e transmit data in slave mode
                & receive data in master mode){" "}
              </p>
              <p>
                • NSS(slave select. i,e depending upon the SPI & NSS setting it
                will select individual slave).{" "}
              </p>
              <p>
                NOTE:- when u want to communicate with a slave. slave select
                signal used to activate a particular slave by making its SS
                signal to ground. When the SS of slave is low then only
                remaining pins of slave is activated. Remember only one slave is
                active at a particular time.{" "}
              </p>
              <p>
                <img alt="" src="/assets/Blogs/image12.png" />
                Internal hardware of SPI:
              </p>
              <p>
                <img alt="" src="/assets/Blogs/image14.png" />
              </p>
              <p>
                SPI works with the help of shift register. when u wants to send
                the data to slave the clock is generated by the master, which
                will be synchronous with data(note: only master produces the
                clock).the bits in the master shift register is transfer to the
                slave shift register with respective to the clock pulse.{" "}
              </p>
              <p>SPI bus configuration </p>
              <p>
                By default SPI is full duplex which means u can transmit and
                receive data at the same time via MOSI and MISO.{" "}
              </p>
              <p>
                If u want to use SPI in half duplex mode in your code u should
                declare master as transmitting mode and slave as receiving mode
                that means MOSI of master is connected to MISO of slave vice
                versa.{" "}
              </p>
              <p>
                As we said that with the help of master SS pins the SS pin of
                slave is grounded it is called as hardware slave management
                (SSM=1).if u don’t want to connect mater to slave SS. For this
                we have bit in CR(control register)called SSM. if SSM=0 it is
                called software slave management in this it contain SSI bit when
                SSI=0 then slave SS is automatically grounded. If SSI=1 then SS
                pin is high.{" "}
              </p>
              <p>SPI communication format </p>
              <p>
                The communication format depend on clock phase, clock polarity
                and data format. To establish a communication with each other
                there must be the same format in master and slave.{" "}
              </p>
              <p>
                Data format may be 8-bit or 16-bit by default it is 8-bit data
                format. CPOL(clock phase) bit contains ideal state when no data
                is transformed. If CPOL=1, the clock start from high state and
                ideal it will be high. If CPOL=0, the clock start from low state
                and ideal it will be low. By default CPOL is selected as zero.
                CPHA(clock phase)bit says that for which click edge the data
                should be sampled. If CPHA=1, the data will appear at the first
                edge of clock else it will appear at second edge of clock. By
                selecting this mode the data transmition is done.{" "}
              </p>
              <p>STM32F407 WITH Nrf24l01 </p>
              <p>
                First thing is to open your CUBEIDE and select the board as
                stm32f407 and then u can see the board which contains all
                peripheral enabled now u need to clear all the pines. In this we
                need 4pins called MISO,MOSI,CLK,Chip select.{" "}
              </p>
              <p>
                In the IDE u can see the option called connectivity there u can
                find SPI when u click on it select full-duplex now u can see on
                your board that 3 pins are highlighted MOSI.MISO,CLOCK. For the
                chip select, in our board PE3 is slave select and enable PD12 as
                an internal led. And now generate code. if u are facing any
                problem to generate code refer to my previous blogs. u can see
                the picture below for reference.
              </p>
              <p>
                <img alt="" src="/assets/Blogs/image13.png" />
              </p>
              <p>Now lets start our coding part </p>
              <p>
                Now u have a lot of code in front of u without doing any coding
                part. Its our turn to send data to make communication. First we
                have to make the chip select pin as high so that it our slave is
                deactivated at starting. Next we have to read data from the
                slave in order to read data from slave we have to take a
                register address it says that to communicate with this address
                with a read operation{" "}
              </p>
              <p>
                HAL_GPIO_WritrPin(GPIOE,GPIO_PIN_3,GPIO_PIN_SET) -&gt; this is
                the command to set SS pin to high; 1st parameter is port and 2nd
                parameter is pin number; 3rd parameter is set is “one” and reset
                is “zero”. And give a small delay.{" "}
              </p>
              <p>
                As we said that we have to read we have selected 05 as address
                in nrf with that address we are reading the data from nrf. Now
                we have to make SS pin to low for making communication this can
                be done by making above code and make set to reset.{" "}
              </p>
              <p>
                Now we have to transmit the data from slave to master so we use
                the command to transmit data. first declare uint8_t SPIData[2]
                this command in global declaration.{" "}
              </p>
              <p>SPIData[0]=0x05 </p>
              <p>HAL_SPI_Transmit(&amp;hsipi,SPIData,1,10) </p>
              <p>
                Now we have to receive data from slave and choose a location to
                store data so I choose SPIData[1] location.{" "}
              </p>
              <p>HAL_SPI_Receive(&amp;hSPI1,SPIData[1],1,10)</p>
              <p>
                Now data is transmitted and recieved so we have to make SS to
                high.{" "}
              </p>
              <p>
                Now we write the data to slave at 0x05 address. follow the same
                steps of reading for writing also the only change is to change
                address to writing address which is SPIData[0]=0x05 |0x20. and
                now we have to send data to write in that location so we choose
                a simple 2 bit data SPIData[1]=0x67.which is written in 0x05
                address for checking this is done are not we have again read the
                data for repeat the 1st step again. If u have stuk in middle
                check the below picture for getting clarity.{" "}
              </p>
              <p>
                <img alt="" src="/assets/Blogs/image11.png" />
              </p>
            </details>
            <br />
          </div>
        </div>
        <BackButton />
      </div>
    </>
  );
}

export default Embedded1;
