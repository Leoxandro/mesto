export default class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        this._submitButton = this.formElement.querySelector(this._settings.submitButtonSelector);
    }

    _toggleSubmitButtonState = () => {
        this._hasInvalidInput(this._inputList)
            ? this._disableSubmitButton()
            : this._activateSubmitButton();
    };

    enableValidation = () => {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }

    resetValidation() {
        this._disableSubmitButton();
        this._inputList.forEach((element) => {
            this.hideInputError(element);
        });
    };

    _checkInputValidity = (element) => {
        !element.validity.valid
            ? this._showInputError(element)
            : this._hideInputError(element);
    };

    _showInputError = (element) => {
        const errorId = this._formElement.querySelector(`.${element.id}-error`);
        element.classList.add(this._settings.inputErrorClass);
        errorId.classList.add(this._settings.errorClass);
        errorId.textContent = element.validationMessage;
    }

    _hideInputError = (element) => {
        const errorId = this._formElement.querySelector(`.${element.id}-error`);
        element.classList.remove(this._settings.inputErrorClass);
        errorId.classList.remove(this._settings.errorClass);
        errorId.textContent = "";
    };

    _hasInvalidInput = () => {
        return this_inputList.some((element) => {
            return !element.validity.valid;
        });
    };

    _disableSubmitButton = () => {
        this._submitButton.classList.add(this._settings.inactiveButtonClass);
        this._submitButton.removeAttribute('disabled', "");
    };

    _activateSubmitButton = () => {
        this._submitButton.classList.remove(this._settings.inactiveButtonClass);
        this._submitButton.removeAttribute('disabled', "");
    };

    _setEventListeners = () => {
        this._toggleSubmitButtonState();
        this._inputList.forEach((element) => {
            element.addEventListener('input', () => {
                this._checkInputValidity(element);
                this._toggleSubmitButtonState();
            });
        });
    };
}