const levels = [
    {
        name: 'grid-column-start 1',
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
        style: {'order': '2'},
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
    },
    {
        name: 'grid-template-columns 1',
        instructions: '<p>До этого момента сад имел grid-сетку с пятью столбцами по 20% ширины и пятью строками, каждая по 20% высоты.</p><p>Это было сделано свойствами <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> и <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Каждое свойство имеет пять значений, которые создают пять столбцов, где ширина каждого равна 20% от общей ширины сада.</p><p>Но вы можете изменить grid-сетку как вам вздумается. Присвойте <code>grid-template-columns</code> новое значение, чтобы полить морковь. Вам необходимо поставить значение ширины первого столбца равным 50%.</p>',
        board: 'c',
        style: {'grid-template-columns': '50% 50%'},
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
    },
    {
        name: 'grid-template-columns 2',
        instructions: '<p>Определять несколько столбцов с одинаковой шириной может быть утомительно. К счастью, есть функция <code>repeat</code>, которая призвана помочь в этом.</p><p>Например, раньше мы определяли пять столбцов по 20% ширины с помощью <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> Это можно упростить до <code>grid-template-columns: repeat(5, 20%)</code>.</p><p>Используя <code>grid-template-columns</code> вместе с функцией <code>repeat</code>, создайте 8 столбцов по 12.5% ширины каждый. Таким образом, вы не будете использовать больше воды, чем нужно.</p>',
        board: 'c',
        classes: {'#plants': 'grid-template-columns-repeat-8-12'},
        style: {'grid-template-columns': 'repeat(8, 12.5%)'},
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
    },
    {
        name: 'grid-template-columns 4',
        instructions: '<p><code>grid-template-columns</code> принимает значения не только в процентах, но и в единицах длины, например <code>px</code> или <code>em</code>. Вы даже можете комбинировать разные единицы измерения.</p><p>Присвойте трём столбцам значение <code>100px</code>, <code>3em</code> и <code>40%</code> соответственно.</p>',
        board: 'cwc',
        classes: {'#plants': 'grid-template-columns-100px-3em-40p'},
        style: {'grid-template-columns': '100px 3em 40%;'},
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}"
    },
    {
        name: 'grid-template-columns 5',
        instructions: '<p>CSS Grid Layout также вводит новую единицу измерения: дробный <code>fr</code> (англ. <em>fraction</em>). Каждый <code>fr</code> выделяет одну часть свободного пространства. Например, если двум элементам задано <code>1fr</code> и <code>3fr</code> соответственно, то пространство будет поделено на 4 одинаковые части. Первый элемент займет ¼, а второй оставшиеся ¾ пространства.</p><p>Сейчас сорняки занимают левую ⅙ часть вашей первой строки, а морковь оставшиеся ⅚. Создайте два столбца с такой же шириной, используя <code>fr</code>.</p>',
        board: 'wc',
        classes: {'#plants': 'grid-template-columns-1fr-5fr'},
        style: {'grid-template-columns': '1fr 5fr;'},
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}"
    },
    {
        name: 'grid-template-columns 3',
        instructions: '<p>Когда одни столбцы определены с помощью пикселей, процентов или em, а любые другие столбцы — с помощью <code>fr</code>, то последние просто разделят всё возможное оставшееся пространство.</p><p>Сейчас морковь занимает 50 пикселей слева, а сорняки 50 пикселей справа. С помощью <code>grid-template-columns</code> создайте два столбца и используйте <code>fr</code>, чтобы сделать ещё 3 столбца, которые займут оставшееся простанство между ними.</p>',
        board: 'cw',
        classes: {
        '#plants': 'grid-template-columns-50px-1fr-1fr-1fr-50px',
        '#plants > :nth-child(1), #garden > :nth-child(1)': 'grid-area-1-1-6-2',
        '#plants > :nth-child(2), #garden > :nth-child(2)': 'grid-area-1-5-6-6'
        },
        style: {'grid-template-columns': '50px 1fr 1fr 1fr 50px;'},
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-area: 1 / 1 / 6 / 2;\n}\n\n#poison {\n  grid-area: 1 / 5 / 6 / 6;\n}"
    },
    {
        name: 'grid-template-columns 6',
        instructions: '<p>Теперь у нас есть столбец сорняков с шириной 75 пикселей на левой стороне сада. ⅗ оставшегося пространства занимает растущая морковь, а ⅖ заполонили сорняки.</p><p>Используйте <code>grid-template-columns</code> с комбинацией <code>px</code> и <code>fr</code>, чтобы создать необходимые столбцы.</p>',
        board: 'wcw',
        classes: {'#plants': 'grid-template-columns-6', '#garden, #overlay': 'grid-template-rows-100p'},
        style: {'grid-template-columns': '75px 3fr 2fr;'},
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 100%;\n}"
    },
    {
        name: 'grid-template-rows 1',
        instructions: '<p><code>grid-template-rows</code> работает точно так же, как и <code>grid-template-columns</code>.</p><p>Используйте <code>grid-template-rows</code>, чтобы полить всё, кроме верхних 50 пикселей сада. Помните, что вода заполняет только пятую строку, так что вам нужно создать именно пять строк.</p>',
        board: 'c',
        classes: {
        '#plants': 'grid-template-rows-50px-0-0-0-1fr',
        '#plants > :nth-child(1), #garden > :nth-child(1)': 'grid-area-5-1-6-6'
        },
        style: {'grid-template-rows': '1fr 100px;'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n",
        after: "}\n\n#water {\n  grid-column: 1 / 6;\n  grid-row: 5 / 6;\n}"
    },
    {
        name: 'grid-template 1',
        instructions: '<p><code>grid-template</code> — сокращённый вариант комбинации <code>grid-template-rows</code> и <code>grid-template-columns</code>.</p><p>Например, <code>grid-template: 50% 50% / 200px</code> создаст grid-сетку с двумя строками по 50% каждая и одним столбцом шириной 200 пикселей.</p><p>Попробуйте использовать <code>grid-template</code>, чтобы полить зону, включающую в себя верхние 60% и левые 200 пикселей сада.</p>',
        board: 'c',
        style: {'grid-template': '60% 1fr / 200px 1fr'},
        before: "#garden {\n  display: grid;\n",
        after: "}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
    },
    {
        name: 'grid-template 2',
        instructions: '<p>Сад выглядит прекрасно. Здесь вы оставили 50-пиксельную дорожку снизу и заполнили всё оставшееся пространство морковью.</p><p>К сожалению, левые 20% сада заполонили сорняки. Используйте CSS Grid Layout в последний раз, чтобы очистить сад.</p>',
        board: 'wc',
        classes: {'#plants': 'grid-template-2'},
        style: {'grid-template': '1fr 50px / 20% 1fr'},
        before: "#garden {\n  display: grid;\n",
        after: "}"
    }
];

const levelWin = {
    name: 'win',
    instructions: '<p>Вы победили! Благодаря силе CSS Grid Layout вы смогли вырастить достаточно моркови для Froggy, чтобы испечь его знаменитый 20-морковный пирог. Что, ожидали другого прыгучего друга?</p><p>Если вам понравился Grid Garden, посмотрите <a href="https://codepip.com/games/flexbox-froggy/">Flexbox Froggy</a>, чтобы изучить другие новые возможности CSS. Вы также можете следить за моими проектами в <a href="https://thomaspark.co">моём блоге</a> или <a href="https://twitter.com/thomashpark">в твиттере</a>.</p><p>Хотите поддержать Grid Garden? Зацените топовые курсы веб-дизайна и программирования от <a href="https://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. И расскажите своим друзьям и семье про Grid Garden!</p>',
    board: '',
    classes: {'#garden, #plants, #overlay': 'win'},
    style: {},
    before: "#pond {\n  display: flex;\n",
    after: "}"
};

export default levels;