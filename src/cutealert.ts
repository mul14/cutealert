enum ButtonTypes {
  None = '',
  Success = 'success',
  Danger = 'danger',
}

interface buttonOptions {
  text?: string
  enable: boolean,
  type?: ButtonTypes
  tabIndex: number
  onClick: Function
}

export default class CuteAlert {

  public title: string = ''

  public html: string = ''

  public buttons: Array<buttonOptions> = []

  public okButton: buttonOptions|null = {
    text: 'OK',
    enable: true,
    type: ButtonTypes.Success,
    tabIndex: 0,
    onClick: () => {},
  }

  public cancelButton: buttonOptions|null = {
    text: 'Cancel',
    enable: true,
    type: ButtonTypes.Danger,
    tabIndex: 0,
    onClick: () => {},
  }

  public addButton(
    text: string,
    callback: Function = () => {},
    options: buttonOptions = {
      text,
      enable: true,
      type: ButtonTypes.None,
      tabIndex: 0,
      onClick: () => {},
    }
  ) {
    this.buttons.push(options)
  }

  public removeButton(text: string) {
    this.buttons.forEach((button, index) => {
      if (button.text === text) {
        this.buttons.splice(index, 1)
      }
    })
  }

  public show() {
    if (this.okButton) this.buttons.push(this.okButton)
    if (this.cancelButton) this.buttons.push(this.cancelButton)

    this.buttons.map(button => {
      const el = document.createElement('button')

      el.innerHTML = button.text!
      el.tabIndex = button.tabIndex!

      el.addEventListener('click', () => {
        return this.okButton!.onClick()
      })
    })

  }

  public render() {

  }

  public hide() {

  }

}
