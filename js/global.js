// bluetooth
const CHARACTERISTIC_UUID = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
const SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
const UPPERARM_CHIP_NAME = "UPPERARM_CHIP";
const FOREARM_CHIP_NAME = "FOREARM_CHIP";
// const FOREARM_CHIP_NAME = "ESP32";

// id names
const ID_TAGS = {
  CONNECT_UPPER_BTN: "#connect_upper_btn",
  CONNECT_FORE_BTN: "#connect_fore_btn",
  ZERO_BTN: "#zero_btn",
  RECORD_BTN: "#record_btn",
  RECORD_BTN2: "#record_btn2",
  PLAY_BTN: "#playBtn",
  CROP_BTN: "#cropBtn",
  PLAY_ICON: "#playIcon",
  STOP_ICON: "#stopIcon",
  LIVE_ICON: "#live-icon",
  HEADER: "#header",
  CANVAS_CONTAINER: "#canvas_container",
  SETUP_SCREEN: "#setup_screen",
  MODEL_SCREEN: "#model_screen",
  SLIDER_CONTAINER: "#slider_container",
};

const CLASS_TAGS = {
  PRIMARY_BTN: "primary_btn",
  SECONDARY_BTN: "secondary_btn",
};

const SCREENS = {
  SETUP: 1,
  MODEL: 2,
  DEBUG: 3,
};

// sizes
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const BOX_HEIGHT = 100;
const BOX_WIDTH = 20;
const BOX_DEPTH = BOX_WIDTH;
const JOINT_RADIUS = 20;

// recording + replaying
const UPDATE_INTERVAL = 100; // milliseconds
const MAX_RECORD_FRAMES = 1000;

// colors
const LIGHT_PINK = "#FFEDF4";
const DARK_PURPLE = "#4C0F89";
const OFF_PURPLE = "#6260C7";
const LIGHT_PURPLE = "#F8E3FF";
const YELLOW = "#FFF2E3";
const GREY = "#BEBEBE";

const MODEL_PURPLE = "#727cf7";
const MODEL_RED = "#b50000";
const MODEL_YELLOW = "#ebc326";
let MODEL_GREEN = [17, 153, 37, 150];
