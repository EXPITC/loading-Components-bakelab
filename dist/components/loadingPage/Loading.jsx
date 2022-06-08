"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Loading_style_module_css_1 = __importDefault(require("./Loading.style.module.css"));
const blob_1 = __importDefault(require("./asset/blob"));
const lottie_light_1 = __importDefault(require("lottie-web/build/player/lottie_light"));
const chef_preparing_food_json_1 = __importDefault(require("./asset/chef-preparing-food.json"));
const textAndLoad_1 = __importDefault(require("./asset/textAndLoad"));
// default values for props
const def = {
    text: 'Our staff is prepare best Ingredients to serve~',
    theme: 'light',
    isLoading: false
};
/**
 * @typedef {Object<string, any>} Props
 * @property {string} text text have by default but you can change with urs
 * @property {string} theme by default light | lowercase
 * @property { boolean | number } isLoading by default boolean:true, limit number values 100 above 100 will be ignored;
 */
const Loading = ({ text = def.text, theme = 'light', isLoading = def.isLoading, }) => {
    // theme = theme.toLowerCase() // same here typescript seems convert string twice I can't make validation here
    // validation
    text = typeof text != 'string' ? def.text : text;
    theme = typeof theme != 'string' ? 'light' : theme;
    isLoading = typeof isLoading != ('number' || 'boolean') ? def.isLoading : isLoading;
    // chef-prepare animation
    (0, react_1.useEffect)(() => {
        lottie_light_1.default.loadAnimation({
            container: document.querySelector('#chef-prepare'),
            animationData: chef_preparing_food_json_1.default,
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
        return lottie_light_1.default.destroy;
    }, []);
    return (
    <div className={Loading_style_module_css_1.default.Wrapper}>
      <textAndLoad_1.default text={text} isLoading={isLoading} theme={theme}/>
      <div id='chef-prepare' className={Loading_style_module_css_1.default.chefPrepare}/>
      <blob_1.default theme={theme} isLoading={isLoading}/>
    </div>);
};
exports.default = Loading;
