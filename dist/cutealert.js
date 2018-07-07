"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonTypes;
(function (ButtonTypes) {
    ButtonTypes["None"] = "";
    ButtonTypes["Success"] = "success";
    ButtonTypes["Danger"] = "danger";
})(ButtonTypes || (ButtonTypes = {}));
class CuteAlert {
    constructor() {
        this.title = '';
        this.html = '';
        this.buttons = [];
        this.okButton = {
            text: 'OK',
            enable: true,
            type: ButtonTypes.Success,
            tabIndex: 0,
            onClick: () => { },
        };
        this.cancelButton = {
            text: 'Cancel',
            enable: true,
            type: ButtonTypes.Danger,
            tabIndex: 0,
            onClick: () => { },
        };
    }
    addButton(text, callback = () => { }, options = {
        text,
        enable: true,
        type: ButtonTypes.None,
        tabIndex: 0,
        onClick: () => { },
    }) {
        this.buttons.push(options);
    }
    removeButton(text) {
        this.buttons.forEach((button, index) => {
            if (button.text === text) {
                this.buttons.splice(index, 1);
            }
        });
    }
    show() {
        if (this.okButton)
            this.buttons.push(this.okButton);
        if (this.cancelButton)
            this.buttons.push(this.cancelButton);
        this.buttons.map(button => {
            const el = document.createElement('button');
            el.innerHTML = button.text;
            el.tabIndex = button.tabIndex;
            el.addEventListener('click', () => {
                return this.okButton.onClick();
            });
        });
    }
    render() {
    }
    hide() {
    }
}
exports.default = CuteAlert;
//# sourceMappingURL=cutealert.js.map