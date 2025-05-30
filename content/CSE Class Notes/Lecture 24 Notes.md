---
title: Embedded Systems
publish: "true"
tags:
  - Lecture-Notes
---
> [!tip] **Definition**
> - Has a small screen (special purpose/very small)
> - Has a few buttons
> - Has a processor embedded within it (that you cannot run software on)

- Embedded processors are buried within a product and only does fixed computation
##### Embedded Operating Systems
- FreeRTOS
- μC/OS
- QNX
##### Custom Control
- Arduino
- "RYO" (roll your own)

##### Real-Time Operating System
- Time: Results must be available within a target amount of time, making time a part of correctness

##### Embedded System Product Development Process
- Buy prototyping hardware (uses a small microchip, development board)
	- Substitutes for development environment
- Get operating system code (RTOS, microOS)
- Get library licenses
- Write software in C/C++
- Compile OS
- Design Custom Hardware
> [!tip] Cross-Compiler
> - Development Environment that runs on your laptop
> - Creates binary that runs on your custom hardware

##### Prototyping Hardware
- Printed Circuit Board
- Microprocessor/controller
- Firmware Storage
- USB (comms with laptop)
- Peripherals
	- Displays
	- SD Card
	- Pins
	- Analog Interfaces
##### More on Peripherals
- Unsoldered chips are awk
	- Diff to connect to, easy to damage
- "Breakout Board"
	- printed circuit board (PCB)
	- chip you wanted
	- capacitors/oscillators/regulation/etc