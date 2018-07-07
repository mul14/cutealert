declare enum ButtonTypes {
    None = "",
    Success = "success",
    Danger = "danger"
}
interface buttonOptions {
    text?: string;
    enable: boolean;
    type?: ButtonTypes;
    tabIndex: number;
    onClick: Function;
}
export default class CuteAlert {
    title: string;
    html: string;
    buttons: Array<buttonOptions>;
    okButton: buttonOptions | null;
    cancelButton: buttonOptions | null;
    addButton(text: string, callback?: Function, options?: buttonOptions): void;
    removeButton(text: string): void;
    show(): void;
    render(): void;
    hide(): void;
}
export {};
//# sourceMappingURL=cutealert.d.ts.map