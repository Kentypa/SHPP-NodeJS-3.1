type DialogButtonType = "Yes" | "No";

interface FormButton {
  type: "Add" | "Remove" | "Buy";
}

//Завдання 1: створіть тип AnyButtonType, який описує всі варіації кнопок
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AnyButtonType = DialogButtonType | FormButton["type"]; // тільки без копіпасти літералів, будь ласка

// Завдання 2: створіть тип ConfirmationHandlingFormButton
// тобто підтип формових кнопок, які ще містять поле onConfirm, в якому
// може бути функція, яка викликається з параметром типу DialogButtonType
// (і нічого не повертає)
// Тобто передбачається що у кнопки такого типу, якщо поле onConfirm порожнє,
// то при натисканні на цю кнопку відразу відбувається дія,
// інакше викликається діалог Підтвердження, і результат натискання на кнопку Так чи Ні
// потрапить у функцію onConfirm, яка вже далі вирішить що робити
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ConfirmationHandlingFormButton =
  | DialogButtonType
  | {
      onConfirm?: (param: DialogButtonType) => void;
    };
