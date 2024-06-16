const levels = [
    {
        name: 'grid-column-start 1',
        gridSize: { rows: 5, columns: 5 },
        instructions: '<p>Добро пожаловать в Grid Garden — место, где вы напишете CSS-код, чтобы вырастить морковный сад. Поливайте только те зоны, на которых есть морковь, используя свойство <code>grid-column-start</code>.</p><p>Например, <code>grid-column-start: 3</code> покроет водой зону, начинающуюся на третьей grid-линии по вертикали, это как сказать “третья вертикальная граница на grid-сетке слева”.</p>',
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-column-start': '3'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        name: 'grid-column-start 2',
        instructions: '<p>Оу, кажется, сорняки растут прямо в углу сада. Используйте <code>grid-column-start</code>, чтобы отравить их. Помните: сорняки начинаются на пятой вертикальной grid-линии.</p>',
        board: 'w',
        selector: '> :nth-child(1)',
        style: {'grid-column-start': '5'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
        after: "}"
    },
    {
        name: 'grid-column-end 1',
        instructions: '<p>Когда вы используете только <code>grid-column-start</code>, grid-элемент по умолчанию “захватит” только один столбец. Однако вы можете увеличить элемент между несколькими столбцами, если добавите свойство <code>grid-column-end</code>.</p><p>Используя <code>grid-column-end</code>, полейте всю морковь, избегая пустые участки. Ведь мы не хотим использовать воду напрасно! Помните, что морковь начинается на первой вертикальной grid-линии и заканчивается на четвёртой.</p>',
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
        selector: '> :nth-child(1)',
        style: {'grid-column-end': '4'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
        after: "}"
    },
    {
        name: 'grid-column-end 2',
        instructions: '<p>Когда вы соединяли <code>grid-column-start</code> и <code>grid-column-end</code>, вы могли подумать, что конечное значение обязательно должно быть больше начального. Но это не так!</p><p>Попробуйте задать свойству <code>grid-column-end</code> значение меньше, чем 5, чтобы полить морковь.</p>',
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-5'},
        selector: '> :nth-child(1)',
        style: {'grid-column-end': '2'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 5;\n",
        after: "}"
    },
    {
        name: 'grid-column-end 3',
        instructions: '<p>Если вы хотите посчитать grid-строки справа налево вместо слева направо, вы можете задать <code>grid-column-start</code> и <code>grid-column-end</code> отрицательные значения. Например, вы можете присвоить значение, равное <code>-1</code>, чтобы указать первую grid-строку начиная справа.</p><p>Попробуйте присвоить <code>grid-column-end</code> отрицательное значение.</p>',
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
        selector: '> :nth-child(1)',
        style: {'grid-column-end': '-2'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
        after: "}"
    },
    {
        name: 'grid-column-start 3',
        instructions: '<p>Теперь попробуйте присвоить <code>grid-column-start</code> отрицательное значение.</p>',
        board: 'w',
        selector: '> :nth-child(1)',
        style: {'grid-column-start': '-3'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
        after: "}"
    },
    {
        name: 'grid-column-end 4',
        instructions: '<p>Вместо определения grid-элемента на основе начальной и конечной позиции grid-строк вы можете задавать их с помощью необходимой вам ширины строк, используя <code>span</code>. Помните, что <code>span</code> работает только с положительными значениями.</p><p>Для примера, полейте эту морковь, используя свойство <code>grid-column-end: span 2</code>.</p>',
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-2'},
        selector: '> :nth-child(1)',
        style: {'grid-column-end': 'span 2'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 2;\n",
        after: "}"
    },
    {
        name: 'grid-column-end 5',
        instructions: '<p>Попробуйте опять использовать <code>grid-column-end</code> вместе со <code>span</code>, чтобы полить морковь.</p>',
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
        selector: '> :nth-child(1)',
        style: {'grid-column-end': 'span 5'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
        after: "}"
    },
    {
        name: 'grid-column-start 4',
        instructions: '<p>Вы также можете использовать <code>span</code> вместе с <code>grid-column-start</code>, чтобы присвоить значение ширины grid-элемента относительно конечной позиции.</p>',
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-end-6'},
        selector: '> :nth-child(1)',
        style: {'grid-column-start': 'span 3'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "  grid-column-end: 6;\n}"
    },
    {
        name: 'grid-column 1',
        instructions: '<p>Печатать каждый раз <code>grid-column-start</code> и <code>grid-column-end</code> может быть немного утомительно. К счастью, есть краткая форма <code>grid-column</code>, которая принимает оба значения сразу через косую черту: <code>/</code>.</p><p>Например, <code>grid-column: 2 / 4</code> скажет grid-элементу начаться на второй вертикальной grid-линии и закончиться на четвёртой.</p>',
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-column': '4 / 6'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        name: 'grid-column 2',
        instructions: '<p>Попробуйте использовать <code>grid-column</code>, чтобы полить эту морковь. <code>span</code> также работает с этим сокращённым свойством, так что пробуйте!</p>',
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-column': '2 / 5'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        name: 'grid-row-start 1',
        instructions: "<p>Одна из вещей, которая отличает CSS Grid Layout от Flexbox'а, — это то, что вы можете легко позиционировать элементы в двух направлениях: в столбцах и в строках. <code>grid-row-start</code> работает почти как <code>grid-column-start</code>, но только по вертикальной оси.</p><p>Используйте <code>grid-row-start</code>, чтобы полить эту морковь.</p>",
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-row-start': '3'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        name: 'grid-row-start 2',
        instructions: '<p>А теперь попробуйте использовать сокращённое свойство <code>grid-row</code>.</p>',
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-row': '3 / 6'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        name: 'grid-column-row 1',
        instructions: '<p>Используйте <code>grid-column</code> и <code>grid-row</code> одновременно, чтобы разместить элемент в двух направлениях.</p>',
        board: 'w',
        selector: '> :nth-child(1)',
        style: {'grid-column': '2', 'grid-row': '5'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
        after: "}"
    },
    {
        name: 'grid-column-row 2',
        instructions: '<p>Вы также можете использовать <code>grid-column</code> и <code>grid-row</code> вместе, чтобы охватить более крупные зоны внутри grid-сетки. Пробуйте!</p>',
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-column': '2 / 6', 'grid-row': '1 / 6'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        name: 'grid-area 1',
        instructions: '<p>Если вас также утомляет печатать <code>grid-column</code> и <code>grid-row</code>, есть сокращённое свойство и для этого. <code>grid-area</code> принимает 4 значения, разделенные косой чертой <code>/</code>: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code> и <code>grid-column-end</code>.</p><p>Пример: <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-area': '1 / 2 / 4 / 6'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        name: 'grid-area 2',
        instructions: '<p>Как насчет множества элементов? Вы можете накладывать их друг на друга без проблем. Используйте <code>grid-area</code>, чтобы определить вторую зону, которая покроет всю не политую морковь.</p>',
        board: 'cc',
        classes: {'#garden > :nth-child(2), #plants > :nth-child(2)': 'grid-column-4'},
        selector: '> :nth-child(1)',
        style: {'grid-area': '2 / 3 / 5 / 6'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water-1 {\n  grid-area: 1 / 4 / 6 / 5;\n}\n\n#water-2 {\n",
        after: "}"
    },
    {
        name: 'order 1',
        instructions: "<p>Если grid-элементы не имеют конкретного расположения с <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code> и т.д., они автоматически размещаются, следуя порядку, написанному в коде. Мы можем изменить это с помощью свойства <code>order</code>, которое является одним из преимуществ CSS Grid Layout перед табличной разметкой.</p><p>Изначально все grid-элементы имеют <code>order</code>, равный <code>0</code>, но этому свойству можно присвоить любое положительное или отрицательное значение, примерно как у <code>z-index</code>.</p><p>Сейчас морковь во втором столбце отравлена и сорняки в последнем столбце поливаются. Измените значение свойства <code>order</code> для яда, чтобы исправить это прямо сейчас!</p>",
        board: 'cwccc',
        selector: '> :nth-child(2)',
        style: {'order': '1'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  order: 0;\n}\n\n#poison {\n",
        after: "}"
    },
    {
        name: 'order 2',
        instructions: '<p>Теперь вода и яд меняются местами, хотя все сорняки находятся в начале сада. Присвойте правильное значение <code>order</code> для яда, чтобы исправить это.</p>',
        board: 'wcwcwcwcwc',
        selector: '> :nth-child(odd)',
        style: {'order': '-1'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  order: 0;\n}\n\n.poison {\n",
        after: "}"
    }
];

export default levels;