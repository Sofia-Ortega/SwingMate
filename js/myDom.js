class Dom {
  constructor(upperBluetoothManager, foreBluetoothManager, myArm, myArm2) {
    this.upperBluetoothManager = upperBluetoothManager;
    this.foreBluetoothManager = foreBluetoothManager;
    this.myArm = myArm;
    this.myArm2 = myArm2;

    //screens
    this.setupScreen = select(ID_TAGS.SETUP_SCREEN);
    this.modelScreen = select(ID_TAGS.MODEL_SCREEN);

    this.canvasContainer = select(ID_TAGS.CANVAS_CONTAINER);
    this.canvas = select("canvas");
    this.header = select(ID_TAGS.HEADER);

    // buttons
    this.connectUpperBtn = select(ID_TAGS.CONNECT_UPPER_BTN);
    this.connectForeBtn = select(ID_TAGS.CONNECT_FORE_BTN);
    this.zeroBtn = select(ID_TAGS.ZERO_BTN);
    this.recordBtn = select(ID_TAGS.RECORD_BTN);
    this.recordBtn2 = select(ID_TAGS.RECORD_BTN2);
    this.playBtn = select(ID_TAGS.PLAY_BTN);
    this.cropBtn = select(ID_TAGS.CROP_BTN);

    // icons
    this.playIcon = select(ID_TAGS.PLAY_ICON);
    this.stopIcon = select(ID_TAGS.STOP_ICON);
    this.liveIcon = select(ID_TAGS.LIVE_ICON);

    this.sliderContainer = select(ID_TAGS.SLIDER_CONTAINER);

    this.connectUpperBtn.mousePressed(this.connectUpper.bind(this));
    this.connectForeBtn.mousePressed(this.connectFore.bind(this));
    this.zeroBtn.mousePressed(this.zero.bind(this));

    this.setSetupScreen();
  }

  async connectUpper() {
    this.setBtnToLoading(this.connectUpperBtn);

    // disconnect if connected
    if (this.upperBluetoothManager.isConnected()) {
      await this.upperBluetoothManager.disconnect();
    }

    await this.upperBluetoothManager.scanDevices();

    this.removeBtnFromLoading(this.connectUpperBtn);

    if (this.upperBluetoothManager.isConnected()) {
      this.replaceBtnWithCheckmark(this.connectUpperBtn);
    }

    if (
      this.foreBluetoothManager.isConnected() ||
      this.upperBluetoothManager.isConnected()
    ) {
      this.setModelScreen();
    }
  }

  async connectFore() {
    this.setBtnToLoading(this.connectForeBtn);

    // disconnect if connected
    if (this.foreBluetoothManager.isConnected()) {
      await this.foreBluetoothManager.disconnect();
    }

    await this.foreBluetoothManager.scanDevices();

    this.removeBtnFromLoading(this.connectForeBtn);

    if (this.foreBluetoothManager.isConnected()) {
      this.replaceBtnWithCheckmark(this.connectForeBtn);
    }

    if (
      this.foreBluetoothManager.isConnected() ||
      this.upperBluetoothManager.isConnected()
    ) {
      this.setModelScreen();
    }
  }

  showCanvas(show) {
    if (show) {
      this.canvasContainer.show();
    } else {
      this.canvasContainer.hide();
    }
  }

  zero() {
    this.myArm.zeroFore();
    this.myArm.zeroUpper();
  }

  togglePlayIcon() {
    this.playIcon.show();
    this.stopIcon.hide();
  }

  toggleStopIcon() {
    this.playIcon.hide();
    this.stopIcon.show();
  }

  getPlayBtn() {
    return this.playBtn;
  }

  getCropBtn() {
    return this.cropBtn;
  }

  getRecordBtn() {
    return this.recordBtn;
  }

  getRecordBtn2() {
    return this.recordBtn2;
  }

  setDebugMode(debugMode) {
    if (debugMode) {
      this.header.html("Debug Mode");
      this.connectUpperBtn.hide();
      this.zeroBtn.hide();
      this.connectForeBtn.hide();
      this.recordBtn.hide();
    }
  }

  setSetupScreen() {
    this.modelScreen.hide();
    this.setupScreen.style("display: flex");
  }

  setModelScreen() {
    this.setupScreen.style("display: none");
    this.modelScreen.show();
  }

  setRecordMode() {
    this.recordBtn.html("STOP");
    this.recordBtn2.hide();
    this.recordBtn.class(CLASS_TAGS.PRIMARY_BTN);
    this.liveIcon.show();
    this.myArm.setFillColor(MODEL_RED);
    this.sliderContainer.style("display: none");
  }

  setPlayMode(recordNum) {
    this.recordBtn.html("Rerecord");
    this.recordBtn.class(CLASS_TAGS.SECONDARY_BTN);
    this.liveIcon.hide();
    this.zeroBtn.hide();

    if (recordNum == 1) {
      this.myArm.setFillColor(MODEL_PURPLE);
    } else {
      this.myArm2.setFillColor(MODEL_PURPLE);
      this.myArm.setFillColor(MODEL_GREEN);
    }
    this.sliderContainer.style("display: flex");

    console.log("recordNum:", recordNum);
    if (recordNum == 1) {
      this.recordBtn2.show();
    }
  }

  /**
   *
   * Puts btn into loading state
   * @param {p5.Element} btn
   */
  setBtnToLoading(btn) {
    let loadingElement = document.createElement("img");
    loadingElement.classList.add("loading_icon");
    loadingElement.src = "icons/circle-notch.svg";
    btn.elt.appendChild(loadingElement);

    btn.addClass("loading_btn");
  }

  /**
   *
   * Removes btn into loading state
   * @param {p5.Element} btn
   */
  removeBtnFromLoading(btn) {
    let loadingElement = btn.elt.querySelector(".loading_icon");

    if (loadingElement) {
      loadingElement.remove();
    }

    btn.removeClass("loading_btn");
  }

  replaceBtnWithCheckmark(btn) {
    const divElement = document.createElement("div");
    divElement.classList.add("checkmark");

    // Create an image element inside the div
    const imgElement = document.createElement("img");
    imgElement.classList.add("checkmark-icon");
    imgElement.src = "icons/check.svg";

    // Append the image element to the div
    divElement.appendChild(imgElement);

    btn.elt.parentNode.replaceChild(divElement, btn.elt);
  }
}
