/// <reference types="react" />
export interface props {
    text?: string;
    theme?: 'light' | 'dark';
    isLoading?: boolean | number;
}
/**
 * @typedef {Object<string, any>} Props
 * @property {string} text text have by default but you can change with urs
 * @property {string} theme by default light | lowercase
 * @property { boolean | number } isLoading by default boolean:true, limit number values 100 above 100 will be ignored;
 */
declare const Loading: ({ text, theme, isLoading, }: props) => JSX.Element;
export default Loading;
