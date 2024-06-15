const questions = [
  {
    question: "Что означает CSS?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets",
    description: {
      "Cascading Style Sheets": "CSS (Cascading Style Sheets) — это язык стилей, используемый для описания внешнего вида документа, написанного на HTML или XML. CSS определяет, как элементы HTML должны отображаться на экране, бумаге или в других носителях.",
      "Creative Style Sheets": "Creative Style Sheets — такого термина не существует в веб-разработке. CSS расшифровывается как Cascading Style Sheets.",
      "Computer Style Sheets": "Computer Style Sheets — такого термина не существует в веб-разработке. Правильная расшифровка — Cascading Style Sheets.",
      "Colorful Style Sheets": "Colorful Style Sheets — такого термина не существует в веб-разработке. CSS обозначает Cascading Style Sheets."
    }
  },
  {
    question: "Какое свойство используется для изменения цвета фона?",
    options: ["background-color", "color", "bgcolor", "bg-color"],
    answer: "background-color",
    description: {
      "background-color": "Свойство background-color используется для задания цвета фона любого элемента. Например, background-color: #ff0000; задаст красный фон.",
      "color": "Свойство color используется для задания цвета текста элемента. Например, color: #0000ff; задаст синий цвет текста.",
      "bgcolor": "Свойство bgcolor не существует в CSS. Оно используется в старом HTML для задания цвета фона таблиц, но в современном CSS следует использовать background-color.",
      "bg-color": "bg-color — такого свойства не существует в CSS. Правильное свойство для задания цвета фона — background-color."
    }
  },
  {
    question: "Как выбрать элемент с id 'header'?",
    options: ["#header", ".header", "header", "[id='header']"],
    answer: "#header",
    description: {
      "#header": "В CSS селектор # используется для выбора элементов по их id. Например, #header выберет элемент с id='header'.",
      ".header": "Селектор . используется для выбора элементов по классу. Например, .header выберет все элементы с классом 'header'.",
      "header": "Это селектор по тегу, который выбирает все элементы <header>. Например, header выберет все элементы <header> на странице.",
      "[id='header']": "Селектор [id='header'] также может быть использован для выбора элемента с определенным id, но это не самый распространенный способ."
    }
  },
  {
    question: "Как сделать текст жирным?",
    options: ["font-weight: bold;", "font-style: bold;", "text-weight: bold;", "text-style: bold;"],
    answer: "font-weight: bold;",
    description: {
      "font-weight: bold;": "Свойство font-weight используется для задания толщины шрифта, например, font-weight: bold; делает текст жирным.",
      "font-style: bold;": "Свойство font-style используется для задания стиля шрифта, например, обычный или курсив, но не для задания толщины шрифта.",
      "text-weight: bold;": "text-weight — такого свойства не существует в CSS. Для задания толщины шрифта используется font-weight.",
      "text-style: bold;": "text-style — такого свойства не существует в CSS. Для задания стиля шрифта используется font-style."
    }
  },
  {
    question: "Как изменить размер шрифта элемента?",
    options: ["font-size", "text-size", "font-height", "text-height"],
    answer: "font-size",
    description: {
      "font-size": "Свойство font-size используется для задания размера шрифта элемента. Например, font-size: 16px; задает размер шрифта 16 пикселей.",
      "text-size": "text-size — такого свойства не существует в CSS. Для задания размера шрифта используется font-size.",
      "font-height": "font-height — такого свойства не существует в CSS. Для задания размера шрифта используется font-size.",
      "text-height": "text-height — такого свойства не существует в CSS. Для задания размера шрифта используется font-size."
    }
  },
  {
    question: "Какое свойство CSS используется для изменения внутреннего отступа элемента?",
    options: ["padding", "margin", "border", "spacing"],
    answer: "padding",
    description: {
      "padding": "Свойство padding задает внутренний отступ элемента, то есть расстояние между его содержимым и его границей. Например, padding: 10px; задаст внутренний отступ в 10 пикселей со всех сторон.",
      "margin": "Свойство margin задает внешний отступ элемента, то есть пространство вокруг элемента за его границей. Например, margin: 10px; задаст внешний отступ в 10 пикселей со всех сторон.",
      "border": "Свойство border задает границу элемента, включая ее стиль, ширину и цвет. Например, border: 1px solid #000; задает черную границу шириной 1 пиксель.",
      "spacing": "spacing — такого свойства не существует в CSS. Для задания внутренних и внешних отступов используются padding и margin соответственно."
    }
  },
  {
    question: "Какое свойство используется для изменения внешнего отступа элемента?",
    options: ["margin", "padding", "border", "spacing"],
    answer: "margin",
    description: {
      "margin": "Свойство margin задает внешний отступ элемента, то есть пространство вокруг элемента за его границей. Например, margin: 10px; задаст внешний отступ в 10 пикселей со всех сторон.",
      "padding": "Свойство padding задает внутренний отступ элемента, то есть расстояние между его содержимым и его границей. Например, padding: 10px; задаст внутренний отступ в 10 пикселей со всех сторон.",
      "border": "Свойство border задает границу элемента, включая ее стиль, ширину и цвет. Например, border: 1px solid #000; задает черную границу шириной 1 пиксель.",
      "spacing": "spacing — такого свойства не существует в CSS. Для задания внутренних и внешних отступов используются padding и margin соответственно."
    }
  },
  {
    question: "Какое значение свойства display используется для скрытия элемента?",
    options: ["none", "hidden", "block", "inline"],
    answer: "none",
    description: {
      "none": "Значение none свойства display полностью скрывает элемент, убирая его из потока документа. Например, display: none; скрывает элемент.",
      "hidden": "hidden — такого значения свойства display не существует. Для скрытия элемента можно использовать visibility: hidden;, что скрывает элемент, но оставляет его в потоке документа.",
      "block": "Значение block делает элемент блочным, занимая всю доступную ширину. Например, display: block; делает элемент блочным.",
      "inline": "Значение inline делает элемент строчным, позволяя другим элементам находиться на одной линии. Например, display: inline; делает элемент строчным."
    }
  },
  {
    question: "Какое свойство CSS используется для изменения цвета текста?",
    options: ["color", "text-color", "font-color", "text-style"],
    answer: "color",
    description: {
      "color": "Свойство color задает цвет текста внутри элемента. Например, color: #ff0000; задает красный цвет текста.",
      "text-color": "text-color — такого свойства не существует в CSS. Для задания цвета текста используется свойство color.",
      "font-color": "font-color — такого свойства не существует в CSS. Для задания цвета текста используется свойство color.",
      "text-style": "text-style — такого свойства не существует в CSS. Для задания цвета текста используется свойство color."
    }
  },
  {
    question: "Как сделать текст курсивным?",
    options: ["font-style: italic;", "font-weight: italic;", "text-style: italic;", "text-weight: italic;"],
    answer: "font-style: italic;",
    description: {
      "font-style: italic;": "Свойство font-style задает стиль шрифта, и значение italic делает текст курсивным. Например, font-style: italic; делает текст курсивным.",
      "font-weight: italic;": "Свойство font-weight используется для задания толщины шрифта, но не для задания стиля. Например, font-weight: bold; делает текст жирным.",
      "text-style: italic;": "text-style — такого свойства не существует в CSS. Для задания стиля шрифта используется font-style.",
      "text-weight: italic;": "text-weight — такого свойства не существует в CSS. Для задания толщины шрифта используется font-weight."
    }
  }
];

export default questions;
