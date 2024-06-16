const list_questions = [
  {
  category: "basic", 
  questions: [
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
    }
  ]
},
{
    category: "selectors",
    questions: [
    {
      question: "Как выбрать все элементы с классом 'container'?",
      options: [".container", "#container", "container", "[class='container']"],
      answer: ".container",
      description: {
        ".container": "В CSS селектор . используется для выбора элементов по классу. Например, .container выберет все элементы с классом 'container'.",
        "#container": "Селектор # используется для выбора элемента по id. Например, #container выберет элемент с id='container'.",
        "container": "Это селектор по тегу, который выбирает все элементы <container>. Например, container выберет все элементы <container> на странице.",
        "[class='container']": "Селектор [class='container'] также может быть использован для выбора элементов с определенным классом, но это не самый распространенный способ."
      }
    },
    {
      question: "Как выбрать все элементы <p> внутри элемента <div>?",
      options: ["div p", "div > p", "div + p", "div ~ p"],
      answer: "div p",
      description: {
        "div p": "Селектор div p выбирает все элементы <p>, которые находятся внутри элементов <div>, на любом уровне вложенности.",
        "div > p": "Селектор div > p выбирает только непосредственных потомков <div>, то есть элементы <p>, которые являются детьми <div>.",
        "div + p": "Селектор div + p выбирает элементы <p>, которые являются непосредственными соседями <div>.",
        "div ~ p": "Селектор div ~ p выбирает все элементы <p>, которые являются следующими соседями <div>."
      }
    },
    {
      question: "Как выбрать первый элемент <li> в списке?",
      options: ["li:first-child", "li:first-of-type", "li:only-child", "li:nth-child(1)"],
      answer: "li:first-child",
      description: {
        "li:first-child": "Селектор li:first-child выбирает первый элемент <li> в списке, если он является первым ребенком родителя.",
        "li:first-of-type": "Селектор li:first-of-type выбирает первый элемент <li> среди элементов одного типа в списке.",
        "li:only-child": "Селектор li:only-child выбирает элемент <li>, если он является единственным ребенком родителя.",
        "li:nth-child(1)": "Селектор li:nth-child(1) также выбирает первый элемент <li> в списке."
      }
    },
    {
      question: "Как выбрать последний элемент <li> в списке?",
      options: ["li:last-child", "li:last-of-type", "li:nth-last-child(1)", "li:nth-child(last)"],
      answer: "li:last-child",
      description: {
        "li:last-child": "Селектор li:last-child выбирает последний элемент <li> в списке.",
        "li:last-of-type": "Селектор li:last-of-type выбирает последний элемент <li> среди элементов одного типа в списке.",
        "li:nth-last-child(1)": "Селектор li:nth-last-child(1) также выбирает последний элемент <li> в списке.",
        "li:nth-child(last)": "li:nth-child(last) — такого селектора не существует в CSS."
      }
    },
    {
      question: "Как выбрать все элементы, которые являются четными детьми родителя?",
      options: [":nth-child(even)", ":nth-child(2n)", ":nth-of-type(even)", ":nth-child(odd)"],
      answer: ":nth-child(even)",
      description: {
        ":nth-child(even)": "Селектор :nth-child(even) выбирает все элементы, которые являются четными детьми родителя.",
        ":nth-child(2n)": "Селектор :nth-child(2n) также выбирает все элементы, которые являются четными детьми родителя.",
        ":nth-of-type(even)": "Селектор :nth-of-type(even) выбирает все элементы четного типа среди элементов одного типа.",
        ":nth-child(odd)": ":nth-child(odd) выбирает все элементы, которые являются нечетными детьми родителя."
      }
    }
  ]
},

{
    category: "text",
    questions: [
    {
      question: "Как изменить цвет текста?",
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
    },
    {
      question: "Как сделать текст подчеркнутым?",
      options: ["text-decoration: underline;", "font-decoration: underline;", "text-style: underline;", "text-underline: true;"],
      answer: "text-decoration: underline;",
      description: {
        "text-decoration: underline;": "Свойство text-decoration используется для задания оформления текста, и значение underline подчеркивает текст. Например, text-decoration: underline; делает текст подчеркнутым.",
        "font-decoration: underline;": "font-decoration — такого свойства не существует в CSS. Для задания подчеркивания текста используется text-decoration.",
        "text-style: underline;": "text-style — такого свойства не существует в CSS. Для задания подчеркивания текста используется text-decoration.",
        "text-underline: true;": "text-underline — такого свойства не существует в CSS. Для задания подчеркивания текста используется text-decoration."
      }
    },
    {
      question: "Как изменить интервал между строками текста?",
      options: ["line-height", "text-spacing", "line-spacing", "text-height"],
      answer: "line-height",
      description: {
        "line-height": "Свойство line-height используется для задания интервала между строками текста. Например, line-height: 1.5; задает полуторный интервал между строками.",
        "text-spacing": "text-spacing — такого свойства не существует в CSS. Для задания интервала между строками текста используется line-height.",
        "line-spacing": "line-spacing — такого свойства не существует в CSS. Для задания интервала между строками текста используется line-height.",
        "text-height": "text-height — такого свойства не существует в CSS. Для задания интервала между строками текста используется line-height."
      }
    },
    {
      question: "Как задать верхний регистр для всех букв текста?",
      options: ["text-transform: uppercase;", "font-transform: uppercase;", "text-case: uppercase;", "font-case: uppercase;"],
      answer: "text-transform: uppercase;",
      description: {
        "text-transform: uppercase;": "Свойство text-transform используется для изменения регистра текста, и значение uppercase делает все буквы заглавными. Например, text-transform: uppercase; делает текст заглавным.",
        "font-transform: uppercase;": "font-transform — такого свойства не существует в CSS. Для задания верхнего регистра текста используется text-transform.",
        "text-case: uppercase;": "text-case — такого свойства не существует в CSS. Для задания верхнего регистра текста используется text-transform.",
        "font-case: uppercase;": "font-case — такого свойства не существует в CSS. Для задания верхнего регистра текста используется text-transform."
      }
    }
 ]
},

{
  category: "boxModel",
  questions: [
    {
      question: "Какое свойство используется для задания внутреннего отступа элемента?",
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
      question: "Какое свойство используется для задания внешнего отступа элемента?",
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
      question: "Какое свойство используется для задания ширины элемента?",
      options: ["width", "height", "max-width", "min-width"],
      answer: "width",
      description: {
        "width": "Свойство width используется для задания ширины элемента. Например, width: 100px; задает ширину элемента в 100 пикселей.",
        "height": "Свойство height используется для задания высоты элемента. Например, height: 100px; задает высоту элемента в 100 пикселей.",
        "max-width": "Свойство max-width задает максимальную ширину элемента. Например, max-width: 100px; задает максимальную ширину в 100 пикселей.",
        "min-width": "Свойство min-width задает минимальную ширину элемента. Например, min-width: 100px; задает минимальную ширину в 100 пикселей."
      }
    },
    {
      question: "Какое свойство используется для задания высоты элемента?",
      options: ["height", "width", "max-height", "min-height"],
      answer: "height",
      description: {
        "height": "Свойство height используется для задания высоты элемента. Например, height: 100px; задает высоту элемента в 100 пикселей.",
        "width": "Свойство width используется для задания ширины элемента. Например, width: 100px; задает ширину элемента в 100 пикселей.",
        "max-height": "Свойство max-height задает максимальную высоту элемента. Например, max-height: 100px; задает максимальную высоту в 100 пикселей.",
        "min-height": "Свойство min-height задает минимальную высоту элемента. Например, min-height: 100px; задает минимальную высоту в 100 пикселей."
      }
    },
    {
      question: "Какое свойство используется для задания границы элемента?",
      options: ["border", "padding", "margin", "outline"],
      answer: "border",
      description: {
        "border": "Свойство border задает границу элемента, включая ее стиль, ширину и цвет. Например, border: 1px solid #000; задает черную границу шириной 1 пиксель.",
        "padding": "Свойство padding задает внутренний отступ элемента, то есть расстояние между его содержимым и его границей. Например, padding: 10px; задаст внутренний отступ в 10 пикселей со всех сторон.",
        "margin": "Свойство margin задает внешний отступ элемента, то есть пространство вокруг элемента за его границей. Например, margin: 10px; задаст внешний отступ в 10 пикселей со всех сторон.",
        "outline": "Свойство outline задает линию вокруг элемента, но в отличие от border, она не влияет на размер элемента и может накладываться поверх других элементов."
      }
    }
 ]
},

{
  category: "flexbox",
  questions: [
    {
      question: "Какое свойство используется для абсолютного позиционирования элемента?",
      options: ["position: absolute;", "position: fixed;", "position: relative;", "position: static;"],
      answer: "position: absolute;",
      description: {
        "position: absolute;": "Свойство position: absolute; используется для абсолютного позиционирования элемента относительно его ближайшего родителя с ненулевым значением position.",
        "position: fixed;": "Свойство position: fixed; используется для фиксированного позиционирования элемента относительно окна браузера.",
        "position: relative;": "Свойство position: relative; используется для относительного позиционирования элемента относительно его нормального положения.",
        "position: static;": "Свойство position: static; используется для статического позиционирования элемента по умолчанию, когда элемент следует обычному потоку документа."
      }
    },
    {
      question: "Какое свойство используется для задания контейнера Flexbox?",
      options: ["display: flex;", "flex-direction", "justify-content", "align-items"],
      answer: "display: flex;",
      description: {
        "display: flex;": "Свойство display: flex; используется для задания контейнера Flexbox, в котором элементы располагаются в соответствии с правилами Flexbox.",
        "flex-direction": "Свойство flex-direction используется для задания направления оси контейнера Flexbox, но само по себе оно не создает контейнер Flexbox.",
        "justify-content": "Свойство justify-content используется для выравнивания элементов вдоль основной оси контейнера Flexbox, но само по себе оно не создает контейнер Flexbox.",
        "align-items": "Свойство align-items используется для выравнивания элементов вдоль поперечной оси контейнера Flexbox, но само по себе оно не создает контейнер Flexbox."
      }
    },
    {
      question: "Какое свойство используется для задания выравнивания элементов вдоль основной оси в Flexbox?",
      options: ["justify-content", "align-items", "flex-direction", "align-content"],
      answer: "justify-content",
      description: {
        "justify-content": "Свойство justify-content используется для задания выравнивания элементов вдоль основной оси контейнера Flexbox.",
        "align-items": "Свойство align-items используется для выравнивания элементов вдоль поперечной оси контейнера Flexbox.",
        "flex-direction": "Свойство flex-direction используется для задания направления оси контейнера Flexbox.",
        "align-content": "Свойство align-content используется для выравнивания строк элементов вдоль поперечной оси контейнера Flexbox, когда элементы переносятся на несколько строк."
      }
    },
    {
      question: "Какое свойство используется для задания направления оси в Flexbox?",
      options: ["flex-direction", "justify-content", "align-items", "align-content"],
      answer: "flex-direction",
      description: {
        "flex-direction": "Свойство flex-direction используется для задания направления оси контейнера Flexbox. Значения могут быть row, column, row-reverse и column-reverse.",
        "justify-content": "Свойство justify-content используется для задания выравнивания элементов вдоль основной оси контейнера Flexbox.",
        "align-items": "Свойство align-items используется для выравнивания элементов вдоль поперечной оси контейнера Flexbox.",
        "align-content": "Свойство align-content используется для выравнивания строк элементов вдоль поперечной оси контейнера Flexbox, когда элементы переносятся на несколько строк."
      }
    },
    {
      question: "Какое свойство используется для задания выравнивания элементов вдоль поперечной оси в Flexbox?",
      options: ["align-items", "justify-content", "flex-direction", "align-content"],
      answer: "align-items",
      description: {
        "align-items": "Свойство align-items используется для выравнивания элементов вдоль поперечной оси контейнера Flexbox.",
        "justify-content": "Свойство justify-content используется для задания выравнивания элементов вдоль основной оси контейнера Flexbox.",
        "flex-direction": "Свойство flex-direction используется для задания направления оси контейнера Flexbox.",
        "align-content": "Свойство align-content используется для выравнивания строк элементов вдоль поперечной оси контейнера Flexbox, когда элементы переносятся на несколько строк."
        }
      }
 ]
}
]
export default list_questions;

