
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
    fetch('website/data/creativitybench_total_benchmark.json')
        .then(response => response.json())
        .then(data => {
            var getColumnMinMax = (data, field) => {
                let values = data
                    .filter(item => item.group !== "Average")
                    .map(item => item[field])
                    .filter(val => val !== "-" && val != null)
                    .map(Number);
                return { min: Math.min(...values), max: Math.max(...values) };
            };

            var toolUsageEnd   = { r: 162, g: 196, b: 170 };
            var constraintEnd  = { r: 181, g: 192, b: 208 };
            var groundingEnd   = { r: 245, g: 232, b: 221 };
            var feasibilityEnd = { r: 238, g: 211, b: 217 };
            var predictionEnd  = { r: 204, g: 211, b: 202 };

            var makeCol = function (title, field, endColor) {
                var { min, max } = getColumnMinMax(data, field);
                return {
                    title: title,
                    field: field,
                    cssClass: "avg-column",
                    hozAlign: "center",
                    minWidth: 110,
                    headerSort: true,
                    sorter: "number",
                    formatter: colorFormatterFloat4,
                    formatterParams: { min, max, startColor: { r: 255, g: 255, b: 255 }, endColor: endColor }
                };
            };

            var cb_columns = [
                {
                    title: "Model",
                    field: "model",
                    cssClass: "avg-column cb-model-col",
                    widthGrow: 1.5,
                    minWidth: 180,
                    headerSort: true
                },
                {
                    title: "Tool Usage",
                    columns: [
                        makeCol("Gold Correct",   "gold_correct",   toolUsageEnd),
                        makeCol("Entity Correct", "entity_correct", toolUsageEnd)
                    ]
                },
                {
                    title: "Constraint Coverage",
                    columns: [
                        makeCol("Use (C<sub>u</sub>)",   "constraint_use",  constraintEnd),
                        makeCol("Env. (C<sub>e</sub>)",  "constraint_env",  constraintEnd),
                        makeCol("Rcpt. (C<sub>r</sub>)", "constraint_rcpt", constraintEnd)
                    ]
                },
                makeCol("Physical<br>Grounding",      "physical_grounding",      groundingEnd),
                makeCol("Action<br>Feasibility",      "action_feasibility",      feasibilityEnd),
                makeCol("Prediction<br>Correctness",  "prediction_correctness",  predictionEnd)
            ];

            var groupOrder = ["Closed-Source", "Open-Source", "Average"];

            new Tabulator("#creativitybench-benchmark-main-table", {
                data: data,
                layout: "fitColumns",
                movableColumns: false,
                groupBy: "group",
                groupOrder: function (a, b) {
                    return groupOrder.indexOf(a) - groupOrder.indexOf(b);
                },
                groupHeader: function (value, count) {
                    if (value === "Average") return "<span class='cb-group-avg'>Average</span>";
                    return "<span class='cb-group-header'>" + value + " Models</span>";
                },
                rowFormatter: function (row) {
                    if (row.getData().group === "Average") {
                        row.getElement().classList.add("cb-row-average");
                    }
                },
                columnDefaults: { tooltip: true },
                columns: cb_columns
            });
        });
})

