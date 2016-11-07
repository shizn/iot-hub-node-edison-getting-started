---
services: iot-hub, iot-suite
platforms: Nodejs
author: ZhijunZhao
---

# Configure an Intel Edison board and run a sample app on it
This sample repo accompanies [Lesson 1: Configure your device] lesson. It shows how to setup an Intel Edison board, deploy and run a sample application.

## Repository information
- `app` sub-folder contains the sample app.js application that blinks the LED attached to the Edison board and the package.json that lists app.js's dependencies.

## Running this sample
Please follow the [Lesson 1: Configure your device] for detailed walkthrough of the steps below.

### Install required tools

```bash
npm install -g gulp
```

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
