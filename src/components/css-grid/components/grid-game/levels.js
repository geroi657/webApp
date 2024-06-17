const levels = [
    {
        name: 'grid-column-start 1',
        gridSize: { rows: 5, columns: 5 },
        instructions: '<p>Добро пожаловать в Grid Garden. Поливайте зоны, где есть морковь, используя <code>grid-column-start</code>.</p><p>Например, <code>grid-column-start: 3</code> покроет водой зону, начинающуюся на третьей grid-линии по вертикали.</p>',
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-column-start': '3'},
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-column-start 2',
        instructions: '<p>Прямо в углу сада сорняки. Используйте <code>grid-column-start</code>, чтобы отравить их.</p>',
        board: 'w',
        selector: '> :nth-child(1)',
        style: {'grid-column-start': '5'},
        before: "#poison {\n",
        after: "}"
    },
    {
        name: 'grid-column-end 1',
        instructions: '<p><code>grid-column-start</code> по умолчанию покроет только один столбец. С помощью <code>grid-column-end</code> можно покрыть сразу несколько столбцов. Пробуйте!</p>',
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
        selector: '> :nth-child(1)',
        style: {'grid-column-end': '4'},
        before: "#water {\n  grid-column-start: 1;\n",
        after: "}"
    },
    {
        name: 'grid-column-end 2',
        instructions: '<p>Конечное значение не обязательно должно быть больше начального.</p><p>Попробуйте задать свойству <code>grid-column-end</code> значение меньше, чем 5, чтобы полить морковь.</p>',
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-5'},
        selector: '> :nth-child(1)',
        style: {'grid-column-end': '2'},
        before: "#water {\n  grid-column-start: 5;\n",
        after: "}"
    },
    {
        name: 'grid-column-end 3',
        instructions: '<p>Grid-строки можно считать с конца, используя отрицательные значения. Попробуйте задать <code>grid-column-end</code> значение <code>-2</code>!</p>',
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
        selector: '> :nth-child(1)',
        style: {'grid-column-end': '-2'},
        before: "#water {\n  grid-column-start: 1;\n",
        after: "}"
    },
    {
        name: 'grid-column-start 3',
        instructions: '<p>Теперь попробуйте присвоить <code>grid-column-start</code> отрицательное значение.</p>',
        board: 'w',
        selector: '> :nth-child(1)',
        style: {'grid-column-start': '-3'},
        before: "#poison {\n",
        after: "}"
    },
    {
        name: 'grid-column-end 4',
        instructions: '<p>Вместо определения grid-элемента на основе начальной и конечной позиции grid-строк, их можно задать, используя <code>span</code>. <code>span</code> работает только с положительными значениями.</p><p>Например <code>grid-column-end: span 2</code> покроет 2 grid-элемента с начала.</p>',
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-2'},
        selector: '> :nth-child(1)',
        style: {'grid-column-end': 'span 2'},
        before: "water {\n  grid-column-start: 2;\n",
        after: "}"
    },
    {
        name: 'grid-column-end 5',
        instructions: '<p>Попробуйте опять использовать <code>grid-column-end</code> вместе со <code>span</code>, чтобы полить морковь.</p>',
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
        selector: '> :nth-child(1)',
        style: {'grid-column-end': 'span 5'},
        before: "#water {\n  grid-column-start: 1;\n",
        after: "}"
    },
    {
        name: 'grid-column-start 4',
        instructions: '<p>Вы также можете использовать <code>span</code> вместе с <code>grid-column-start</code>, чтобы присвоить значение ширины grid-элемента относительно конечной позиции.</p>',
        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-end-6'},
        selector: '> :nth-child(1)',
        style: {'grid-column-start': 'span 3'},
        before: "#water {\n",
        after: "  grid-column-end: 6;\n}"
    },
    {
        name: 'grid-column 1',
        instructions: '<p>Можно не печатать каждый раз <code>grid-column-start</code> и <code>grid-column-end</code>, используя краткую форму - <code>grid-column</code>, она принимает значения сразу через косую черту: <code>/</code>.</p><p>Например, <code>grid-column: 2 / 4</code> начнет элемент во втором столбце, а закончит в четвертом.</p>',
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-column': '4 / 6'},
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-column 2',
        instructions: '<p>Попробуйте использовать <code>grid-column</code>. <code>span</code> также работает с <code>grid-column</code>, так что пробуйте!</p>',
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-column': '2 / 5'},
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-row-start 1',
        instructions: "<p>Одна из вещей, которая отличает CSS Grid от Flexbox, — позиционирование элементом и в столбцах, и в строках. <code>grid-row-start</code> работает как <code>grid-column-start</code>, но только по вертикальной оси.",
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-row-start': '3'},
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-row-start 2',
        instructions: '<p>А теперь попробуйте использовать сокращённое свойство <code>grid-row</code>.</p>',
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-row': '3 / 6'},
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-column-row 1',
        instructions: '<p>Используйте <code>grid-column</code> и <code>grid-row</code> одновременно, чтобы разместить элемент в двух направлениях.</p>',
        board: 'w',
        selector: '> :nth-child(1)',
        style: {'grid-column': '2', 'grid-row': '5'},
        before: "#poison {\n",
        after: "}"
    },
    {
        name: 'grid-column-row 2',
        instructions: '<p>Вы также можете использовать <code>grid-column</code> и <code>grid-row</code> вместе, чтобы охватить более крупные зоны внутри grid-сетки. Пробуйте!</p>',
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-column': '2 / 6', 'grid-row': '1 / 6'},
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-area 1',
        instructions: '<p>Так же существует сокращенное свойство и для <code>grid-column</code> и <code>grid-row</code> - <code>grid-area</code>. Свойство принимает 4 значения, разделенные косой чертой <code>/</code>: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code> и <code>grid-column-end</code>.</p><p>Наример: <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-area': '1 / 2 / 4 / 6'},
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-area 2',
        instructions: '<p>Как насчет множества элементов? Можно их наложить друг на друга. Используйте <code>grid-area</code>, чтобы определить вторую зону, которая покроет всю не политую морковь.</p>',
        board: 'cc',
        classes: {'#garden > :nth-child(2), #plants > :nth-child(2)': 'grid-column-4'},
        selector: '> :nth-child(1)',
        style: {'grid-area': '2 / 3 / 5 / 6'},
        before: "#water-1 {\n  grid-area: 1 / 4 / 6 / 5;\n}\n\n#water-2 {\n",
        after: "}"
    },
    {
        name: 'order 1',
        instructions: "<p>Если grid-элементы не имеют конкретного расположения с <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code> и т.д., они автоматически размещаются, следуя порядку, написанному в коде. Это можно изменить с помощью свойства <code>order</code>, которое является одним из преимуществ CSS Grid Layout перед табличной разметкой.</p><p>Изначально все grid-элементы имеют <code>order</code>, равный <code>0</code>, но этому свойству можно присвоить любое положительное или отрицательное значение, примерно как у <code>z-index</code>.</p><p>Сейчас морковь во втором столбце отравлена и сорняки в последнем столбце поливаются. Измените значение свойства <code>order</code> для яда, чтобы исправить это!</p>",
        board: 'cwccc',
        selector: '> :nth-child(2)',
        style: {'order': '1'},
        before: ".water {\n  order: 0;\n}\n\n#poison {\n",
        after: "}"
    },
    {
        name: 'order 2',
        instructions: '<p>Теперь вода и яд меняются местами, хотя все сорняки находятся в начале сада. Присвойте правильное значение <code>order</code> для яда, чтобы исправить это.</p>',
        board: 'wcwcwcwcwc',
        selector: '> :nth-child(odd)',
        style: {'order': '-1'},
        before: ".water {\n  order: 0;\n}\n\n.poison {\n",
        after: "}"
    }
];

export default levels;