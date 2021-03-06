---
services: iot-hub, iot-suite
platforms: Nodejs
author: ZhijunZhao
---

# Send cloud-to-device messages
This sample repo accompanies [Lesson 4: Send cloud-to-device messages](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-intel-edison-kit-node-lesson4-send-cloud-to-device-messages) lesson. It shows how to send messages from an Azure IoT hub to an Intel Edison board.

## Prerequisites
See [Lesson 4: Send cloud-to-device messages](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-intel-edison-kit-node-lesson4-send-cloud-to-device-messages) for more information.

## Repository information
- `app` sub-folder contains the sample app.js application that receives cloud-2-device messages and the package.json that lists app.js's dependencies.

## Running this sample
Please follow the [Lesson 4: Send cloud-to-device messages](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-intel-edison-kit-node-lesson4-send-cloud-to-device-messages) for detailed walkthrough of the steps below.

### Deploy and run

Install required npm packages on the host:
```bash
npm install
```
Create a JSON configuration file in the `.iot-hub-getting-started` sub-folder of the current user's home directory:
```bash
gulp init
```

Deploy sample application and required packages to the Intel Edison board, and run it:
```bash
gulp deploy
gulp run
```
