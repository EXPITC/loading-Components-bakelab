"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Loading_style_module_css_1 = __importDefault(require("../Loading.style.module.css"));
function TextAndLoad({ text, isLoading, theme }) {
    const loadingType = typeof isLoading === 'boolean' ? true : false;
    const [show, setShow] = (0, react_1.useState)(false);
    const [count, setCount] = (0, react_1.useState)(1);
    (0, react_1.useEffect)(() => {
        const timeFrame = () => {
            switch (count) {
                case 0:
                    setShow(true);
                    break;
                case 1:
                    setShow(false);
                    break;
                case 2:
                    setShow(true);
                    break;
                case 4:
                    setShow(false);
                    break;
                case 5:
                    setShow(true);
                    break;
                case 6:
                    setShow(false);
                    break;
                default:
                    setShow(true);
                    break;
            }
        };
        timeFrame(); //check count and change show value depends to the number
        // timeout role like clock ,change count with 1ms value per change
        let timeout;
        timeout = setTimeout(() => {
            if (count <= 60)
                return setCount(count + 1);
            setCount(0);
        }, 100);
        // unMount
        return () => clearTimeout(timeout);
    }, [count]);
    const process = () => {
        // if (!loadingType) return; can't use this seem typescript don't understand;
        // create new checking type again
        const maxVW = 50;
        const percent = 100;
        if (typeof isLoading != 'number')
            return 0;
        if (isLoading >= percent)
            return maxVW;
        return isLoading / percent * maxVW;
    };
    const colorTheme = () => {
        return {
            opacity: show ? 1 : 0,
            color: theme === 'dark' ? '#021722' : '#083c56',
        };
    };
    return (<div className={Loading_style_module_css_1.default.kindGreet}>
      <h1 style={colorTheme()}>Please</h1>
      <h1 style={colorTheme()}>Wait.</h1>
      <div className={Loading_style_module_css_1.default.load}>
        <h2>{text}</h2>
        <span className={loadingType ? Loading_style_module_css_1.default.booleanType : null} style={{ width: `${process()}vw` }}/>
      </div>
    </div>);
}
exports.default = TextAndLoad;
