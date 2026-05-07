
//Formatter to generate charts
var chartFormatter = function (cell, formatterParams, onRendered) {
    var content = document.createElement("span");
    var values = cell.getValue();

    //invert values if needed
    if (formatterParams.invert) {
        values = values.map(val => val * -1);
    }

    //add values to chart and style
    content.classList.add(formatterParams.type);
    content.inneHrTML = values.join(",");

    //setup chart options
    var options = {
        width: 50,
        // min: 0.0,
        // max: 100.0,
    }

    if (formatterParams.fill) {
        options.fill = formatterParams.fill
    }

    //instantiate piety chart after the cell element has been aded to the DOM
    onRendered(function () {
        peity(content, formatterParams.type, options);
    });

    return content;
};

var colorFormatterGoalInt = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 0.0,
        max: 100.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 238, g: 211, b: 217 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.0em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterSubgoal = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 0.0,
        max: 100.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 232, b: 221 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.0em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterActionSeq = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 0.0,
        max: 100.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 204, g: 211, b: 202 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.0em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterTrans = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 0.0,
        max: 100.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 181, g: 192, b: 208 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.0em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}



var barColorFn = function (value, formatterParams) {
    var defaults = {
        range : [-50, 50],
        low: { r: 255, g: 255, b: 255 },
        high: { r: 206, g: 212, b: 218 }
    };

    // Override defaults with provided formatterParams values

    var low_range = (formatterParams && formatterParams.range[0]) || defaults.range[0];
    var high_range = (formatterParams && formatterParams.range[1]) || defaults.range[1];
    var low = (formatterParams && formatterParams.low) || defaults.low;
    var high = (formatterParams && formatterParams.high) || defaults.high;

    // Clamp the value to the range [-100, 100]
    value = Math.max(low_range, Math.min(high_range, value));
    var range = high_range - low_range;

    // Normalize the value to the range [0, 1]
    var normalizedValue = (value + range / 2) / range;
    // Interpolate between the two colors based on the normalized value
    var interpolated = {
        r: Math.floor(low.r + (high.r - low.r) * normalizedValue),
        g: Math.floor(low.g + (high.g - low.g) * normalizedValue),
        b: Math.floor(low.b + (high.b - low.b) * normalizedValue)
    };

    return 'rgba(' + interpolated.r + ',' + interpolated.g + ',' + interpolated.b + ',0.9)';
}

var colorFormatterFloat4 = function (cell, formatterParams) {
    var value = cell.getValue();
    if (value === "-" || value === null || value === undefined) return value ?? "-";

    var defaults = {
        min: 0.0,
        max: 1.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 204, g: 211, b: 202 }
    };

    var min = (formatterParams && formatterParams.min != null) ? formatterParams.min : defaults.min;
    var max = (formatterParams && formatterParams.max != null) ? formatterParams.max : defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    var normalizedValue = (max === min) ? 0 : (value - min) / (max - min);
    normalizedValue = Math.max(0, Math.min(1, normalizedValue));

    var red   = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue  = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    var display = parseFloat(value).toFixed(4);
    return "<span style='display:block;width:100%;height:100%;font-size:1.0em;background-color:rgb(" + red + "," + green + "," + blue + ");'>" + display + "</span>";
};

document.addEventListener('DOMContentLoaded', function () {
    Promise.all([
        fetch('website/data/mm-creativitybench_benchmark.json').then(response => response.json()),
    ])
    .then(([mmcb_data]) => {
        var getColumnMinMax = (data, field) => {
            let values = data.map(item => item[field]).filter(val => val !== "-").map(Number);
            return { min: Math.min(...values), max: Math.max(...values) };
        };

        var setMinMax = (col, data) => {
            if (col.columns) {
                col.columns.forEach(sub => setMinMax(sub, data));
            } else if (col.field && col.field !== "model" && col.field !== "order") {
                let { min, max } = getColumnMinMax(data, col.field);
                col.formatterParams = { min, max };
            }
        };

        var cb_columns = [
            {
                title: "Model",
                field: "model",
                cssClass: "avg-column",
                widthGrow: 1.5,
                minWidth: 180,
                headerSort: true
            },
            {
                title: "Gold Correct",
                field: "gold_correct",
                cssClass: "avg-column",
                hozAlign: "center",
                minWidth: 100,
                sorter: "number",
                formatter: colorFormatterFloat4
            },
            {
                title: "Entity Correct",
                field: "entity_correct",
                cssClass: "avg-column",
                hozAlign: "center",
                minWidth: 100,
                formatter: colorFormatterFloat4
            },
            {
                title: "Turns",
                field: "turns",
                cssClass: "avg-column",
                hozAlign: "center",
                minWidth: 80,
                formatter: colorFormatterSubgoal
            },
            {
                title: "Avg. Distinct Explored",
                columns: [
                    {
                        title: "Entities",
                        field: "avg_distinct_entities",
                        cssClass: "avg-column",
                        hozAlign: "center",
                        minWidth: 80,
                        formatter: colorFormatterSubgoal
                    },
                    {
                        title: "Parts",
                        field: "avg_distinct_parts",
                        cssClass: "avg-column",
                        hozAlign: "center",
                        minWidth: 80,
                        formatter: colorFormatterSubgoal
                    }
                ]
            },
            {
                title: "Gold Entity Explored Before Answer",
                columns: [
                    {
                        title: "Entity Correct",
                        field: "gold_entity_explored_entity_correct",
                        cssClass: "avg-column",
                        hozAlign: "center",
                        minWidth: 100,
                        formatter: colorFormatterActionSeq
                    },
                    {
                        title: "Entity Wrong",
                        field: "gold_entity_explored_entity_wrong",
                        cssClass: "avg-column",
                        hozAlign: "center",
                        minWidth: 100,
                        formatter: colorFormatterActionSeq
                    }
                ]
            },
            {
                title: "Gold Part Explored Before Answer",
                columns: [
                    {
                        title: "Part Correct",
                        field: "gold_part_explored_part_correct",
                        cssClass: "avg-column",
                        hozAlign: "center",
                        minWidth: 100,
                        formatter: colorFormatterTrans
                    },
                    {
                        title: "Part Wrong",
                        field: "gold_part_explored_part_wrong",
                        cssClass: "avg-column",
                        hozAlign: "center",
                        minWidth: 100,
                        formatter: colorFormatterTrans
                    }
                ]
            }
        ];

        cb_columns.forEach(col => setMinMax(col, mmcb_data));

        new Tabulator("#creativitybench-benchmark-main-table", {
            data: mmcb_data,
            layout: "fitColumns",
            responsiveLayout: "collapse",
            responsiveLayoutCollapseStartOpen: false,
            movableColumns: false,
            initialSort: [{ column: "gold_correct", dir: "desc" }],
            columnDefaults: {
                tooltip: true,
                headerSort: false,
                titleFormatter: function(cell) {
                    var div = document.createElement("div");
                    div.style.whiteSpace = "normal";
                    div.style.wordBreak = "break-word";
                    div.style.textAlign = "center";
                    div.style.fontSize = "0.82em";
                    div.innerHTML = cell.getValue();
                    return div;
                }
            },
            columns: [{ title: "", field: "order", visible: false, headerSort: false, sorter: "number" }, ...cb_columns]
        });
    });
})

