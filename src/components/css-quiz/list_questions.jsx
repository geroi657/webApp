const questions = [
  {
    question: "Что означает CSS?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets",
    description: {
      "Cascading Style Sheets": "CSS (Cascading Style Sheets) — это язык стилей, используемый для описания внешнего вида документа, написанного на HTML или XML.",
      "Creative Style Sheets": "Creative Style Sheets — такого термина не существует в веб-разработке.",
      "Computer Style Sheets": "Computer Style Sheets — такого термина не существует в веб-разработке.",
      "Colorful Style Sheets": "Colorful Style Sheets — такого термина не существует в веб-разработке."
    }
  },
  {
    question: "Какое свойство используется для изменения цвета фона?",
    options: ["background-color", "color", "bgcolor", "bg-color"],
    answer: "background-color",
    description: {
      "background-color": "Свойство background-color используется для задания цвета фона любого элемента.",
      "color": "Свойство color используется для задания цвета текста элемента.",
      "bgcolor": "Свойства bgcolor не существует в CSS, оно используется в HTML как устаревшее.",
      "bg-color": "bg-color — такого свойства не существует в CSS."
    }
  },
  {
    question: "Как выбрать элемент с id 'header'?",
    options: ["#header", ".header", "header", "id=header"],
    answer: "#header",
    description: {
      "#header": "В CSS селектор # используется для выбора элементов по их id.",
      ".header": "Селектор . используется для выбора элементов по классу.",
      "header": "Это селектор по тегу, который выбирает все элементы <header>.",
      "id=header": "id=header — такого синтаксиса не существует в CSS."
    }
  },
  {
    question: "Как сделать текст жирным?",
    options: ["font-weight: bold;", "font-style: bold;", "text-weight: bold;", "text-style: bold;"],
    answer: "font-weight: bold;",
    description: {
      "font-weight: bold;": "Свойство font-weight используется для задания толщины шрифта, например, bold для жирного текста.",
      "font-style: bold;": "Свойство font-style используется для задания стиля шрифта (обычный, курсив), но не жирности.",
      "text-weight: bold;": "text-weight — такого свойства не существует в CSS.",
      "text-style: bold;": "text-style — такого свойства не существует в CSS."
    }
  },
  {
    question: "Как изменить размер шрифта элемента?",
    options: ["font-size", "text-size", "font-height", "text-height"],
    answer: "font-size",
    description: {
      "font-size": "Свойство font-size используется для задания размера шрифта элемента.",
      "text-size": "text-size — такого свойства не существует в CSS.",
      "font-height": "font-height — такого свойства не существует в CSS.",
      "text-height": "text-height — такого свойства не существует в CSS."
    }
  },
  {
    question: "Какое свойство CSS используется для изменения внутреннего отступа элемента?",
    options: ["padding", "margin", "border", "spacing"],
    answer: "padding",
    description: {
      "padding": "Свойство padding задает внутренний отступ элемента, то есть расстояние между его содержимым и его границей.",
      "margin": "Свойство margin задает внешний отступ элемента, то есть пространство вокруг элемента за его границей.",
      "border": "Свойство border задает границу элемента, включая ее стиль, ширину и цвет.",
      "spacing": "spacing — такого свойства не существует в CSS."
    }
  },
  {
    question: "Какое свойство используется для изменения внешнего отступа элемента?",
    options: ["margin", "padding", "border", "spacing"],
    answer: "margin",
    description: {
      "margin": "Свойство margin задает внешний отступ элемента, то есть пространство вокруг элемента за его границей.",
      "padding": "Свойство padding задает внутренний отступ элемента, то есть расстояние между его содержимым и его границей.",
      "border": "Свойство border задает границу элемента, включая ее стиль, ширину и цвет.",
      "spacing": "spacing — такого свойства не существует в CSS."
    }
  },
  {
    question: "Какое значение свойства display используется для скрытия элемента?",
    options: ["none", "hidden", "block", "inline"],
    answer: "none",
    description: {
      "none": "Значение none свойства display полностью скрывает элемент, убирая его из потока документа.",
      "hidden": "hidden — такого значения свойства display не существует. Для скрытия элемента можно использовать visibility: hidden;.",
      "block": "Значение block делает элемент блочным, занимая всю доступную ширину.",
      "inline": "Значение inline делает элемент строчным, позволяя другим элементам находиться на одной линии."
    }
  },
  {
    question: "Какое свойство CSS используется для изменения цвета текста?",
    options: ["color", "text-color", "font-color", "text-style"],
    answer: "color",
    description: {
      "color": "Свойство color задает цвет текста внутри элемента.",
      "text-color": "text-color — такого свойства не существует в CSS.",
      "font-color": "font-color — такого свойства не существует в CSS.",
      "text-style": "text-style — такого свойства не существует в CSS."
    }
  },
  {
    question: "Как сделать текст курсивным?",
    options: ["font-style: italic;", "font-weight: italic;", "text-style: italic;", "text-weight: italic;"],
    answer: "font-style: italic;",
    description: {
      "font-style: italic;": "Свойство font-style задает стиль шрифта, и значение italic делает текст курсивным.",
      "font-weight: italic;": "Свойство font-weight используется для задания толщины шрифта, но не стиля.",
      "text-style: italic;": "text-style — такого свойства не существует в CSS.",
      "text-weight: italic;": "text-weight — такого свойства не существует в CSS."
    }
  }
];

export default questions;
