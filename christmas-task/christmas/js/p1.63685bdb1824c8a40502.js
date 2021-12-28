/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./core/components/footer/footer.css":
/*!*******************************************!*\
  !*** ./core/components/footer/footer.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./core/components/header/header.css":
/*!*******************************************!*\
  !*** ./core/components/header/header.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./global.css":
/*!********************!*\
  !*** ./global.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./nouislider/slider.css":
/*!*******************************!*\
  !*** ./nouislider/slider.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./nouislider/sliderCustom.css":
/*!*************************************!*\
  !*** ./nouislider/sliderCustom.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../node_modules/nouislider/dist/nouislider.js":
/*!*****************************************************!*\
  !*** ../node_modules/nouislider/dist/nouislider.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
}(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                }
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2]
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1]
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j]
                }
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria"
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes }
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"]
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                }
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            to = scope_Spectrum.getStep(to);
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips"
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports['default'] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./core/components/footer/footer.ts":
/*!******************************************!*\
  !*** ./core/components/footer/footer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Footer = void 0;
const components_1 = __webpack_require__(/*! ../../templates/components */ "./core/templates/components.ts");
__webpack_require__(/*! ./footer.css */ "./core/components/footer/footer.css");
const Links = [
    {
        className: 'author',
        href: 'https://github.com/ViktorElenich',
        target: '_blank',
        text: '© 2021 Viktor Elenich'
    },
    {
        className: 'logo-rss',
        href: 'https://rs.school/js/',
        target: '_blank',
        text: ''
    }
];
class Footer extends components_1.Components {
    constructor(tagName, className, id) {
        super(tagName, className, id);
    }
    renderAuthorDescription() {
        const footerWrapper = document.createElement('div');
        footerWrapper.classList.add('footer-wrapper');
        Links.forEach(elem => {
            const aHTML = document.createElement('a');
            aHTML.innerText = elem.text;
            aHTML.className = elem.className;
            aHTML.href = elem.href;
            aHTML.target = elem.target;
            footerWrapper.append(aHTML);
        });
        this.container.append(footerWrapper);
    }
    render() {
        this.renderAuthorDescription();
        return this.container;
    }
}
exports.Footer = Footer;


/***/ }),

/***/ "./core/components/header/header.ts":
/*!******************************************!*\
  !*** ./core/components/header/header.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Header = void 0;
__webpack_require__(/*! ./header.css */ "./core/components/header/header.css");
const components_1 = __webpack_require__(/*! ../../templates/components */ "./core/templates/components.ts");
const Buttons = [
    {
        id: "main-page",
        text: '',
    },
    {
        id: "toys-page",
        text: 'игрушки',
    },
    {
        id: "game-page",
        text: 'ёлка',
    }
];
class Header extends components_1.Components {
    constructor(tagName, className, id) {
        super(tagName, className, id);
    }
    renderPageButtons() {
        const pageButtons = document.createElement('div');
        pageButtons.classList.add('navigation');
        const wrapperHeader = document.createElement('div');
        const searchAndFavorites = document.createElement('div');
        const inputSearch = document.createElement('input');
        inputSearch.classList.add('input_search');
        inputSearch.type = 'search';
        inputSearch.name = 'search';
        inputSearch.placeholder = 'Поиск';
        inputSearch.id = 'search';
        inputSearch.autocomplete = 'off';
        const favorites = document.createElement('div');
        favorites.classList.add('favorites');
        favorites.innerHTML = `<span></span>`;
        searchAndFavorites.classList.add('search_favorites');
        wrapperHeader.classList.add('wrapper');
        wrapperHeader.append(pageButtons);
        wrapperHeader.append(searchAndFavorites);
        searchAndFavorites.append(inputSearch);
        searchAndFavorites.append(favorites);
        Buttons.forEach(button => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerHTML = button.text;
            buttonHTML.classList.add('links');
            pageButtons.append(buttonHTML);
        });
        const garlandMain = document.createElement('div');
        garlandMain.classList.add('garland_4');
        garlandMain.id = 'garland';
        garlandMain.innerHTML = `<div id="nums_1">1</div>`;
        wrapperHeader.append(garlandMain);
        this.container.append(wrapperHeader);
    }
    mainGarland() {
        const nums = document.getElementById('nums_1').innerHTML;
        if (Number(nums) == 1) {
            document.getElementById('garland').className = 'garland_1';
            document.getElementById('nums_1').innerHTML = '2';
        }
        if (Number(nums) == 2) {
            document.getElementById('garland').className = 'garland_2';
            document.getElementById('nums_1').innerHTML = '3';
        }
        if (Number(nums) == 3) {
            document.getElementById('garland').className = 'garland_3';
            document.getElementById('nums_1').innerHTML = '4';
        }
        if (Number(nums) == 4) {
            document.getElementById('garland').className = 'garland_4';
            document.getElementById('nums_1').innerHTML = '1';
        }
    }
    render() {
        this.renderPageButtons();
        setInterval(this.mainGarland, 800);
        return this.container;
    }
}
exports.Header = Header;


/***/ }),

/***/ "./core/components/main/main.ts":
/*!**************************************!*\
  !*** ./core/components/main/main.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Main = void 0;
const components_1 = __webpack_require__(/*! ../../templates/components */ "./core/templates/components.ts");
class Main extends components_1.Components {
    constructor(tagName, className, id) {
        super(tagName, className, id);
    }
    render() {
        return this.container;
    }
}
exports.Main = Main;


/***/ }),

/***/ "./core/templates/components.ts":
/*!**************************************!*\
  !*** ./core/templates/components.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Components = void 0;
class Components {
    constructor(tagName, className, id) {
        this.container = document.createElement(tagName);
        this.container.className = className;
        this.container.id = id;
    }
    render() {
        return this.container;
    }
}
exports.Components = Components;


/***/ }),

/***/ "./core/templates/pages.ts":
/*!*********************************!*\
  !*** ./core/templates/pages.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Page = void 0;
class Page {
    constructor(id) {
        this.container = document.createElement('div');
        this.container.id = id;
    }
    render() {
        return this.container;
    }
    afterRender() {
    }
}
exports.Page = Page;


/***/ }),

/***/ "./data.ts":
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const data = [
    {
        num: '1',
        name: 'Большой шар с рисунком',
        count: '2',
        year: '1960',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '2',
        name: 'Зелёный шар с цветами',
        count: '5',
        year: '2000',
        shape: 'шар',
        color: 'зелёный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '3',
        name: 'Красный матовый шар',
        count: '3',
        year: '1990',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '4',
        name: 'Сосулька красная',
        count: '2',
        year: '1980',
        shape: 'фигурка',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '5',
        name: 'Красный виноград',
        count: '4',
        year: '1980',
        shape: 'фигурка',
        color: 'красный',
        size: 'средний',
        favorite: true,
    },
    {
        num: '6',
        name: 'Красный шар с рисунком',
        count: '6',
        year: '2010',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '7',
        name: 'Молочно-белый шар',
        count: '12',
        year: '1960',
        shape: 'шар',
        color: 'белый',
        size: 'средний',
        favorite: true,
    },
    {
        num: '8',
        name: 'Красный шар',
        count: '10',
        year: '2010',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '9',
        name: 'Колокольчик старинный',
        count: '2',
        year: '1950',
        shape: 'колокольчик',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '10',
        name: 'Белый шар ретро',
        count: '7',
        year: '1960',
        shape: 'шар',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '11',
        name: 'Шишка еловая белая',
        count: '11',
        year: '1960',
        shape: 'шишка',
        color: 'белый',
        size: 'малый',
        favorite: false,
    },
    {
        num: '12',
        name: 'Белый шар с цветами',
        count: '5',
        year: '1980',
        shape: 'шар',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '13',
        name: 'Шар расписной Река',
        count: '3',
        year: '1970',
        shape: 'шар',
        color: 'синий',
        size: 'большой',
        favorite: true,
    },
    {
        num: '14',
        name: 'Шар расписной Деревня',
        count: '4',
        year: '1970',
        shape: 'шар',
        color: 'синий',
        size: 'большой',
        favorite: true,
    },
    {
        num: '15',
        name: 'Колокольчик расписной',
        count: '3',
        year: '1970',
        shape: 'колокольчик',
        color: 'синий',
        size: 'средний',
        favorite: false,
    },
    {
        num: '16',
        name: 'Шишка расписная Пейзаж',
        count: '3',
        year: '1970',
        shape: 'шишка',
        color: 'синий',
        size: 'средний',
        favorite: true,
    },
    {
        num: '17',
        name: 'Шишка расписная',
        count: '7',
        year: '1970',
        shape: 'шишка',
        color: 'красный',
        size: 'средний',
        favorite: false,
    },
    {
        num: '18',
        name: 'Желтый шар с бантом',
        count: '2',
        year: '2010',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '19',
        name: 'Желтый шар с паетками',
        count: '12',
        year: '1980',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '20',
        name: 'Красный шар с бантом',
        count: '8',
        year: '1950',
        shape: 'шар',
        color: 'красный',
        size: 'средний',
        favorite: true,
    },
    {
        num: '21',
        name: 'Красный шар с звёздами',
        count: '4',
        year: '1970',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: true,
    },
    {
        num: '22',
        name: 'Шишка еловая золотая',
        count: '11',
        year: '1990',
        shape: 'шишка',
        color: 'желтый',
        size: 'малый',
        favorite: false,
    },
    {
        num: '23',
        name: 'Колокольчик старинный',
        count: '9',
        year: '1950',
        shape: 'колокольчик',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '24',
        name: 'Снежинка изящная',
        count: '1',
        year: '1940',
        shape: 'снежинка',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '25',
        name: 'Розовый шар с блёстками',
        count: '12',
        year: '2010',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '26',
        name: 'Рубиново-золотой шар',
        count: '8',
        year: '1960',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '27',
        name: 'Красный шар с узором',
        count: '4',
        year: '2010',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '28',
        name: 'Бордовый шар с узором',
        count: '10',
        year: '2010',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '29',
        name: 'Старинный шар с цветами',
        count: '5',
        year: '1950',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: true,
    },
    {
        num: '30',
        name: 'Старинный шар с узором',
        count: '8',
        year: '1950',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: true,
    },
    {
        num: '31',
        name: 'Красный шар с блёстками',
        count: '8',
        year: '2010',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '32',
        name: 'Синий шар Вселенная',
        count: '11',
        year: '1970',
        shape: 'шар',
        color: 'синий',
        size: 'большой',
        favorite: false,
    },
    {
        num: '33',
        name: 'Синий шар со снежинкой',
        count: '6',
        year: '2010',
        shape: 'шар',
        color: 'синий',
        size: 'средний',
        favorite: false,
    },
    {
        num: '34',
        name: 'Зелёный  шар с узором',
        count: '8',
        year: '2010',
        shape: 'шар',
        color: 'зелёный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '35',
        name: 'Фигурка Лис в шарфе',
        count: '8',
        year: '1950',
        shape: 'фигурка',
        color: 'желтый',
        size: 'средний',
        favorite: true,
    },
    {
        num: '36',
        name: 'Сиреневый шар Метель',
        count: '1',
        year: '2000',
        shape: 'шар',
        color: 'синий',
        size: 'большой',
        favorite: false,
    },
    {
        num: '37',
        name: 'Зелёный  шар Метель',
        count: '6',
        year: '2000',
        shape: 'шар',
        color: 'зелёный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '38',
        name: 'Голубой  шар Метель',
        count: '6',
        year: '2000',
        shape: 'шар',
        color: 'синий',
        size: 'большой',
        favorite: false,
    },
    {
        num: '39',
        name: 'Красная снежинка',
        count: '6',
        year: '1990',
        shape: 'снежинка',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '40',
        name: 'Снежинка золотая',
        count: '12',
        year: '2020',
        shape: 'снежинка',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '41',
        name: 'Снежинка арктическая',
        count: '11',
        year: '2020',
        shape: 'снежинка',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '42',
        name: 'Зелёный шар',
        count: '10',
        year: '1980',
        shape: 'шар',
        color: 'зелёный',
        size: 'средний',
        favorite: false,
    },
    {
        num: '43',
        name: 'Снежинка двухцветная',
        count: '6',
        year: '1960',
        shape: 'снежинка',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '44',
        name: 'Фигурка Ангела',
        count: '11',
        year: '1940',
        shape: 'фигурка',
        color: 'красный',
        size: 'средний',
        favorite: true,
    },
    {
        num: '45',
        name: 'Снежинка новогодняя',
        count: '1',
        year: '1980',
        shape: 'снежинка',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '46',
        name: 'Фигурка Мухомор',
        count: '10',
        year: '1950',
        shape: 'фигурка',
        color: 'красный',
        size: 'малый',
        favorite: false,
    },
    {
        num: '47',
        name: 'Фигурка Колодец',
        count: '6',
        year: '1950',
        shape: 'фигурка',
        color: 'красный',
        size: 'малый',
        favorite: false,
    },
    {
        num: '48',
        name: 'Желтый шар с бантом',
        count: '6',
        year: '1960',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '49',
        name: 'Снежинка с бирюзой',
        count: '4',
        year: '1980',
        shape: 'снежинка',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '50',
        name: 'Колокольчик большой',
        count: '3',
        year: '2020',
        shape: 'колокольчик',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '51',
        name: 'Шишка с изморозью',
        count: '12',
        year: '1970',
        shape: 'шишка',
        color: 'красный',
        size: 'малый',
        favorite: false,
    },
    {
        num: '52',
        name: 'Красный шар с надписью',
        count: '12',
        year: '1990',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: true,
    },
    {
        num: '53',
        name: 'Снежинка серебристая',
        count: '6',
        year: '2020',
        shape: 'снежинка',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '54',
        name: 'Зелёный шар с рисунком',
        count: '6',
        year: '2010',
        shape: 'шар',
        color: 'зелёный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '55',
        name: 'Пряничный домик',
        count: '1',
        year: '1940',
        shape: 'фигурка',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '56',
        name: 'Пряничный теремок',
        count: '1',
        year: '1940',
        shape: 'фигурка',
        color: 'желтый',
        size: 'малый',
        favorite: false,
    },
    {
        num: '57',
        name: 'Пряничная избушка',
        count: '1',
        year: '1940',
        shape: 'фигурка',
        color: 'желтый',
        size: 'средний',
        favorite: false,
    },
    {
        num: '58',
        name: 'Фигурка белого медведя',
        count: '2',
        year: '1980',
        shape: 'фигурка',
        color: 'белый',
        size: 'средний',
        favorite: false,
    },
    {
        num: '59',
        name: 'Желтый шар с надписью',
        count: '10',
        year: '1990',
        shape: 'шар',
        color: 'желтый',
        size: 'средний',
        favorite: false,
    },
    {
        num: '60',
        name: 'Фигурка Голубь',
        count: '12',
        year: '1940',
        shape: 'фигурка',
        color: 'белый',
        size: 'средний',
        favorite: true,
    },
];
exports["default"] = data;


/***/ }),

/***/ "./local-storage/localStorage.ts":
/*!***************************************!*\
  !*** ./local-storage/localStorage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStorageUtil = void 0;
class LocalStorageUtil {
    constructor() {
        this.keyName = 'toys';
    }
    getLocalStorage() {
        const favoritesLocalStorage = localStorage.getItem(this.keyName);
        if (favoritesLocalStorage !== null) {
            return JSON.parse(favoritesLocalStorage);
        }
        return [];
    }
    setLocalStorage(id) {
        const toyFavorites = this.getLocalStorage();
        let pushFavorites = false;
        const index = toyFavorites.indexOf(id);
        if (index === -1) {
            toyFavorites.push(id);
            pushFavorites = true;
        }
        else {
            toyFavorites.splice(index, 1);
        }
        localStorage.setItem(this.keyName, JSON.stringify(toyFavorites));
        return { pushFavorites, toyFavorites };
    }
}
exports.LocalStorageUtil = LocalStorageUtil;


/***/ }),

/***/ "./nouislider/slider-quantity.ts":
/*!***************************************!*\
  !*** ./nouislider/slider-quantity.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.quantitySlider = void 0;
const nouislider_1 = __webpack_require__(/*! nouislider */ "../node_modules/nouislider/dist/nouislider.js");
function quantitySlider() {
    const sliderQuantity = document.getElementById('slider-quantity');
    const slider = nouislider_1.default.create(sliderQuantity, {
        start: [1, 12],
        connect: true,
        step: 1,
        range: {
            min: [1],
            max: [12],
        },
    });
    const inputQuantityMin = document.querySelector('.min-quantity');
    const inputQuantityMax = document.querySelector('.max-quantity');
    const inputsQuantity = [inputQuantityMin, inputQuantityMax];
    slider.on('update', (values, handle) => {
        inputsQuantity[handle].value = String(Math.round(Number(values[handle])));
        const change = new Event('change');
        inputsQuantity[handle].dispatchEvent(change);
    });
}
exports.quantitySlider = quantitySlider;


/***/ }),

/***/ "./nouislider/slider-year.ts":
/*!***********************************!*\
  !*** ./nouislider/slider-year.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.yearSlider = void 0;
const nouislider_1 = __webpack_require__(/*! nouislider */ "../node_modules/nouislider/dist/nouislider.js");
function yearSlider() {
    const sliderYear = document.getElementById('slider-year');
    const slider = nouislider_1.default.create(sliderYear, {
        start: [1940, 2020],
        connect: true,
        step: 1,
        range: {
            min: [1940],
            max: [2020],
        },
    });
    const inputYearMin = document.querySelector('.min-year');
    const inputYearMax = document.querySelector('.max-year');
    const inputsYear = [inputYearMin, inputYearMax];
    slider.on('update', (values, handle) => {
        inputsYear[handle].value = String(Math.round(Number(values[handle])));
        const change = new Event('change');
        inputsYear[handle].dispatchEvent(change);
    });
}
exports.yearSlider = yearSlider;


/***/ }),

/***/ "./pages/app/app.ts":
/*!**************************!*\
  !*** ./pages/app/app.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const header_1 = __webpack_require__(/*! ../../core/components/header/header */ "./core/components/header/header.ts");
const toys_1 = __webpack_require__(/*! ../toys/toys */ "./pages/toys/toys.ts");
const game_1 = __webpack_require__(/*! ../game/game */ "./pages/game/game.ts");
const main_1 = __webpack_require__(/*! ../main/main */ "./pages/main/main.ts");
const footer_1 = __webpack_require__(/*! ../../core/components/footer/footer */ "./core/components/footer/footer.ts");
const main_2 = __webpack_require__(/*! ../../core/components/main/main */ "./core/components/main/main.ts");
class App {
    constructor() {
        this.initialPage = new main_1.MainPage('main-page');
        this.header = new header_1.Header('header', 'header', 'header');
        this.main = new main_2.Main('main', 'main', 'main');
        this.footer = new footer_1.Footer('footer', 'footer', 'footer');
    }
    static renderNewPage(idPage) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page = null;
        if (idPage === "main-page") {
            page = new main_1.MainPage(idPage);
        }
        else if (idPage === "toys-page") {
            page = new toys_1.Toys(idPage);
        }
        else if (idPage === "game-page") {
            page = new game_1.Game(idPage);
        }
        if (page) {
            const pageHTML = page.render();
            const mainDiv = document.getElementById('main');
            pageHTML.id = App.defaultPageId;
            mainDiv.append(pageHTML);
            page.afterRender();
        }
    }
    enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }
    run() {
        App.container.append(this.header.render());
        App.container.append(this.main.render());
        App.renderNewPage('main-page');
        App.container.append(this.footer.render());
        this.enableRouteChange();
        window.location.replace("#main-page");
        if (typeof window.history.replaceState == "function") {
            history.replaceState({}, "", window.location.href.slice(0, 0));
        }
    }
}
exports.App = App;
App.container = document.body;
App.defaultPageId = 'current-page';


/***/ }),

/***/ "./pages/game/game.ts":
/*!****************************!*\
  !*** ./pages/game/game.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
const pages_1 = __webpack_require__(/*! ../../core/templates/pages */ "./core/templates/pages.ts");
const data_1 = __webpack_require__(/*! ../../data */ "./data.ts");
const localStorage_1 = __webpack_require__(/*! ../../local-storage/localStorage */ "./local-storage/localStorage.ts");
const snow_1 = __webpack_require__(/*! ../../snow/snow */ "./snow/snow.ts");
const tree = [
    {
        id: '1'
    },
    {
        id: '2'
    },
    {
        id: '3'
    },
    {
        id: '4'
    },
    {
        id: '5'
    },
    {
        id: '6'
    }
];
const backgroundImage = [
    {
        id: '1'
    },
    {
        id: '2'
    },
    {
        id: '3'
    },
    {
        id: '4'
    },
    {
        id: '5'
    },
    {
        id: '6'
    },
    {
        id: '7'
    },
    {
        id: '8'
    },
    {
        id: '9'
    },
    {
        id: '10'
    }
];
const garlandButtons = [
    {
        color: 'multicolor'
    },
    {
        color: 'red'
    },
    {
        color: 'green'
    },
    {
        color: 'blue'
    },
    {
        color: 'yellow'
    }
];
const coordinates = '365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664';
class Game extends pages_1.Page {
    constructor(id) {
        super(id);
        this.choiceBackground = (event) => {
            const target = event.target;
            const bgID = target.dataset.id;
            const treeContainer = document.querySelector('.tree-container');
            treeContainer.style.backgroundImage = `url(./assets/bg/${bgID}.webp)`;
        };
        this.choiceTree = (event) => {
            const target = event.target;
            const treeID = target.dataset.id;
            const treeImg = document.querySelector('.tree-img');
            treeImg.src = `./assets/tree/${treeID}.webp`;
        };
        this.clickButtonGarland = (event) => {
            const btnMulticolor = document.querySelector('.multicolor');
            const btnRed = document.querySelector('.red');
            const btnGreen = document.querySelector('.green');
            const btnBlue = document.querySelector('.blue');
            const btnYellow = document.querySelector('.yellow');
            const allBtnGarland = document.querySelectorAll('.garland-btn');
            const inputSwitch = document.querySelector('.input-switch');
            const multicolorGarland = `
        <ul class="light-rope">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope5">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope6">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope7">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        `;
            const redColorGarland = `
        <ul class="light-rope-red">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-red2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-red3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-red4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-red5">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-red6">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-red7">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        `;
            const greenColorGarland = `
        <ul class="light-rope-green">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-green2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-green3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-green4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-green5">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-green6">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-green7">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        `;
            const blueColorGarland = `
        <ul class="light-rope-blue">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-blue2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-blue3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-blue4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-blue5">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-blue6">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-blue7">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        `;
            const yellowColorGarland = `
        <ul class="light-rope-yellow">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-yellow2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-yellow3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-yellow4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-yellow5">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-yellow6">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-yellow7">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        `;
            const treeContainer = document.querySelector('.tree-img');
            const target = event.target;
            const btnID = target.dataset.color;
            if (this.saveBtnID.multicolor.includes(btnID)) {
                target.classList.remove('btn-active');
                this.saveBtnID.multicolor.splice(this.saveBtnID.multicolor.indexOf(btnID), 1);
                treeContainer.innerHTML = '';
            }
            else if (target.classList.contains('multicolor')) {
                treeContainer.innerHTML = '';
                target.classList.add('btn-active');
                btnRed.classList.remove('btn-active');
                btnBlue.classList.remove('btn-active');
                btnGreen.classList.remove('btn-active');
                btnYellow.classList.remove('btn-active');
                this.saveBtnID.multicolor.push(btnID);
                treeContainer.innerHTML += multicolorGarland;
            }
            if (this.saveBtnID.red.includes(btnID)) {
                target.classList.remove('btn-active');
                this.saveBtnID.red.splice(this.saveBtnID.red.indexOf(btnID), 1);
                treeContainer.innerHTML = '';
            }
            else if (target.classList.contains('red')) {
                treeContainer.innerHTML = '';
                target.classList.add('btn-active');
                btnBlue.classList.remove('btn-active');
                btnGreen.classList.remove('btn-active');
                btnYellow.classList.remove('btn-active');
                btnMulticolor.classList.remove('btn-active');
                this.saveBtnID.red.push(btnID);
                treeContainer.innerHTML += redColorGarland;
            }
            if (this.saveBtnID.green.includes(btnID)) {
                target.classList.remove('btn-active');
                this.saveBtnID.green.splice(this.saveBtnID.green.indexOf(btnID), 1);
                treeContainer.innerHTML = '';
            }
            else if (target.classList.contains('green')) {
                treeContainer.innerHTML = '';
                target.classList.add('btn-active');
                btnBlue.classList.remove('btn-active');
                btnYellow.classList.remove('btn-active');
                btnMulticolor.classList.remove('btn-active');
                btnRed.classList.remove('btn-active');
                this.saveBtnID.green.push(btnID);
                treeContainer.innerHTML += greenColorGarland;
            }
            if (this.saveBtnID.blue.includes(btnID)) {
                target.classList.remove('btn-active');
                this.saveBtnID.blue.splice(this.saveBtnID.blue.indexOf(btnID), 1);
                treeContainer.innerHTML = '';
            }
            else if (target.classList.contains('blue')) {
                treeContainer.innerHTML = '';
                target.classList.add('btn-active');
                btnYellow.classList.remove('btn-active');
                btnMulticolor.classList.remove('btn-active');
                btnRed.classList.remove('btn-active');
                btnGreen.classList.remove('btn-active');
                this.saveBtnID.blue.push(btnID);
                treeContainer.innerHTML += blueColorGarland;
            }
            if (this.saveBtnID.yellow.includes(btnID)) {
                target.classList.remove('btn-active');
                this.saveBtnID.yellow.splice(this.saveBtnID.yellow.indexOf(btnID), 1);
                treeContainer.innerHTML = '';
            }
            else if (target.classList.contains('yellow')) {
                treeContainer.innerHTML = '';
                target.classList.add('btn-active');
                btnMulticolor.classList.remove('btn-active');
                btnRed.classList.remove('btn-active');
                btnGreen.classList.remove('btn-active');
                btnBlue.classList.remove('btn-active');
                this.saveBtnID.yellow.push(btnID);
                treeContainer.innerHTML += yellowColorGarland;
            }
            if (inputSwitch.checked) {
            }
            else {
                allBtnGarland.forEach(btn => {
                    btn.classList.remove('btn-active');
                    treeContainer.innerHTML = '';
                });
            }
        };
        this.saveBtnID = {
            multicolor: [],
            red: [],
            green: [],
            blue: [],
            yellow: []
        };
    }
    renderWrapper() {
        const linkToys = document.querySelector('.links:nth-child(2)');
        const linkMain = document.querySelector('.links:nth-child(1)');
        const linkGame = document.querySelector('.links:nth-child(3)');
        linkMain.classList.remove('links-active');
        linkToys.classList.remove('links-active');
        linkGame.classList.add('links-active');
        const wrapperGame = document.createElement('div');
        wrapperGame.classList.add('wrapper-game');
        const wrapperGameContainer = document.createElement('div');
        wrapperGameContainer.classList.add('wrapper-game-container');
        wrapperGame.append(wrapperGameContainer);
        const menuChoose = document.createElement('div');
        menuChoose.classList.add('menu-choose');
        wrapperGameContainer.append(menuChoose);
        const treeContainer = document.createElement('div');
        treeContainer.classList.add('tree-container');
        wrapperGameContainer.append(treeContainer);
        treeContainer.ondragover = allowDrop;
        const treeGarland = document.createElement('div');
        treeGarland.classList.add('tree-garland-container');
        treeContainer.append(treeGarland);
        const map = document.createElement('map');
        map.name = 'tree-map';
        const area = document.createElement('area');
        area.classList.add('area-tree');
        area.coords = coordinates;
        area.shape = 'poly';
        map.append(area);
        treeContainer.append(map);
        const treeImg = document.createElement('img');
        treeImg.classList.add('tree-img');
        treeImg.setAttribute('usemap', '#tree-map');
        treeImg.src = './assets/tree/1.webp';
        treeContainer.append(treeImg);
        const menuFavorites = document.createElement('div');
        menuFavorites.classList.add('menu-favorites');
        wrapperGameContainer.append(menuFavorites);
        const audioAndSnowContainer = document.createElement('div');
        audioAndSnowContainer.classList.add('audio-snow-container', 'menu');
        menuChoose.append(audioAndSnowContainer);
        const treeChooseContainer = document.createElement('div');
        treeChooseContainer.classList.add('tree-choose-container', 'menu');
        menuChoose.append(treeChooseContainer);
        const bgContainer = document.createElement('div');
        bgContainer.classList.add('bg-container', 'menu');
        menuChoose.append(bgContainer);
        const garlandContainer = document.createElement('div');
        garlandContainer.classList.add('garland-container', 'menu');
        menuChoose.append(garlandContainer);
        const audioItem = document.createElement('button');
        audioItem.classList.add('audio-item');
        audioAndSnowContainer.append(audioItem);
        const audio = document.createElement('audio');
        audio.id = 'player';
        audio.src = './assets/audio/audio.mp3';
        audio.loop = true;
        audioItem.append(audio);
        const snowItem = document.createElement('button');
        snowItem.classList.add('snow-item');
        snowItem.id = 'snow-item';
        audioAndSnowContainer.append(snowItem);
        tree.forEach(item => {
            const treeItems = document.createElement('div');
            treeItems.classList.add('tree-item');
            treeItems.dataset.id = item.id;
            treeChooseContainer.append(treeItems);
        });
        backgroundImage.forEach(item => {
            const bgItems = document.createElement('div');
            bgItems.classList.add('bg-item');
            bgItems.dataset.id = item.id;
            bgContainer.append(bgItems);
        });
        const garlandBtnContainer = document.createElement('div');
        garlandBtnContainer.classList.add('garland-btn-container');
        garlandContainer.append(garlandBtnContainer);
        garlandButtons.forEach(item => {
            const btnGarland = document.createElement('div');
            btnGarland.classList.add('garland-btn', item.color);
            btnGarland.dataset.color = item.color;
            garlandBtnContainer.append(btnGarland);
        });
        const switchOffOn = document.createElement('div');
        switchOffOn.classList.add('switch-off-on');
        garlandContainer.append(switchOffOn);
        const inputSwitch = document.createElement('input');
        inputSwitch.classList.add('input-switch');
        inputSwitch.type = 'checkbox';
        inputSwitch.id = 'input-switch';
        inputSwitch.checked = true;
        switchOffOn.append(inputSwitch);
        const labelSwitch = document.createElement('label');
        labelSwitch.setAttribute('for', 'input-switch');
        labelSwitch.dataset.on = 'Вкл.';
        labelSwitch.dataset.off = 'Выкл.';
        switchOffOn.append(labelSwitch);
        const favoriteToys = document.createElement('div');
        favoriteToys.classList.add('favorite-toys-container');
        menuFavorites.append(favoriteToys);
        const decorateTrees = document.createElement('div');
        decorateTrees.classList.add('decorate-trees');
        menuFavorites.append(decorateTrees);
        function allowDrop(event) {
            event.preventDefault();
        }
        this.container.append(wrapperGame);
    }
    playAndStopAudio() {
        const audio = document.getElementById("player");
        const audioControl = document.querySelector(".audio-item");
        if (audio.paused) {
            audio.play();
            audioControl.classList.add('play');
        }
        else {
            audio.pause();
            audioControl.classList.remove('play');
            audio.currentTime = 0.0;
        }
    }
    static drag(event) {
        var _a, _b, _c, _d;
        console.log('drag');
        const target = event.target;
        (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('id', target.id);
        const shiftX = event.pageX - target.getBoundingClientRect().left - 65;
        const shiftY = event.pageY - target.getBoundingClientRect().top + 15;
        (_b = event.dataTransfer) === null || _b === void 0 ? void 0 : _b.setData('shiftX', shiftX.toString());
        (_c = event.dataTransfer) === null || _c === void 0 ? void 0 : _c.setData('shiftY', shiftY.toString());
        (_d = event.dataTransfer) === null || _d === void 0 ? void 0 : _d.setData('dataset', target.dataset.img);
        document.body.ondrop = Game.drop;
    }
    static drop(event) {
        var _a, _b;
        const targetEvent = event;
        const itemID = targetEvent.dataTransfer.getData('id');
        const shiftX = Number(targetEvent.dataTransfer.getData('shiftX'));
        const shiftY = Number(targetEvent.dataTransfer.getData('shiftY'));
        const dataSet = targetEvent.dataTransfer.getData('dataset');
        const treeImg = document.querySelector('.tree-container');
        const areaTree = document.querySelector('.area-tree');
        const rightItem = (treeImg === null || treeImg === void 0 ? void 0 : treeImg.getBoundingClientRect().x) + (treeImg === null || treeImg === void 0 ? void 0 : treeImg.getBoundingClientRect().width) - targetEvent.clientX;
        const bottomItem = (treeImg === null || treeImg === void 0 ? void 0 : treeImg.getBoundingClientRect().y) + (treeImg === null || treeImg === void 0 ? void 0 : treeImg.getBoundingClientRect().width) - targetEvent.clientY;
        const right = rightItem + shiftX;
        const bottom = bottomItem + shiftY;
        const parentForElement = document.getElementById(`slot${dataSet}`);
        const countToys = parentForElement === null || parentForElement === void 0 ? void 0 : parentForElement.querySelector('.favorite-count');
        const count = Number(countToys.textContent);
        console.log(parentForElement);
        const element = document.getElementById(itemID);
        console.log(element);
        if (event.target === areaTree) {
            if (!((_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains('tree-container'))) {
                countToys.textContent = (count - 1).toString();
            }
            element.style.right = `${right}px`;
            element.style.bottom = `${bottom}px`;
            treeImg.append(element);
        }
        else if (event.target !== areaTree) {
            if ((_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.classList.contains('tree-container')) {
                countToys.textContent = (count + 1).toString();
            }
            element.style.right = '10px';
            element.style.bottom = '10px';
            parentForElement === null || parentForElement === void 0 ? void 0 : parentForElement.append(element);
        }
    }
    render() {
        this.renderWrapper();
        return this.container;
    }
    afterRender() {
        const snowStart = document.querySelector('#snow-item');
        const snowScene = new snow_1.SnowScene();
        snowStart.addEventListener('click', () => {
            const canvas = document.querySelectorAll("canvas");
            if (snowStart.className === 'snow-item') {
                snowScene.play();
                for (let i = 0; i < canvas.length; i++) {
                    canvas[i].style.display = 'block';
                }
                snowStart.classList.add('play');
            }
            else {
                snowScene.pause();
                for (let i = 0; i < canvas.length; i++) {
                    canvas[i].style.display = 'none';
                }
                snowStart.classList.remove('play');
            }
        });
        const bgContainer = document.querySelector('.bg-container');
        bgContainer === null || bgContainer === void 0 ? void 0 : bgContainer.addEventListener('click', this.choiceBackground);
        const treeContainer = document.querySelector('.tree-choose-container');
        treeContainer === null || treeContainer === void 0 ? void 0 : treeContainer.addEventListener('click', this.choiceTree);
        const garlandButton = document.querySelector('.garland-btn-container');
        garlandButton === null || garlandButton === void 0 ? void 0 : garlandButton.addEventListener('click', this.clickButtonGarland);
        const inputSwitch = document.querySelector('.input-switch');
        inputSwitch.addEventListener('click', this.clickButtonGarland);
        const playAudio = document.querySelector('.audio-item');
        playAudio.addEventListener('click', this.playAndStopAudio);
        const toysFavoriteContainer = document.querySelector('.favorite-toys-container');
        const localStorage = new localStorage_1.LocalStorageUtil();
        const firstTwentyToys = data_1.default.slice(0, 20);
        function allowDrop(event) {
            event.preventDefault();
        }
        if (localStorage.getLocalStorage().length !== 0) {
            data_1.default.forEach((card) => {
                if (localStorage.getLocalStorage().includes(card.num)) {
                    const favoriteToysItem = document.createElement('div');
                    favoriteToysItem.classList.add('favorite-toys');
                    favoriteToysItem.id = `slot${card.num}`;
                    favoriteToysItem.dataset.id = card.num;
                    favoriteToysItem.ondragover = allowDrop;
                    const favoriteCount = document.createElement('p');
                    favoriteCount.classList.add('favorite-count');
                    favoriteCount.innerHTML = card.count;
                    favoriteToysItem.append(favoriteCount);
                    for (let i = 1; i <= Number(card.count); i++) {
                        const toysImg = document.createElement('img');
                        toysImg.src = `./assets/toys/${card.num}.webp`;
                        toysImg.classList.add('favorite-img');
                        toysImg.id = `toy${card.num}-${i}`;
                        toysImg.draggable = true;
                        toysImg.setAttribute('data-img', `${card.num}`);
                        toysImg.alt = 'toy';
                        toysImg.addEventListener('dragstart', Game.drag);
                        favoriteToysItem.appendChild(toysImg);
                    }
                    toysFavoriteContainer.append(favoriteToysItem);
                }
            });
        }
        else {
            firstTwentyToys.forEach((card) => {
                const favoriteToysItem = document.createElement('div');
                favoriteToysItem.classList.add('favorite-toys');
                favoriteToysItem.id = `slot${card.num}`;
                favoriteToysItem.dataset.id = card.num;
                favoriteToysItem.ondragover = allowDrop;
                const favoriteCount = document.createElement('p');
                favoriteCount.classList.add('favorite-count');
                favoriteCount.innerHTML = card.count;
                favoriteToysItem.append(favoriteCount);
                for (let i = 1; i <= Number(card.count); i++) {
                    const toysImg = document.createElement('img');
                    toysImg.src = `./assets/toys/${card.num}.webp`;
                    toysImg.classList.add('favorite-img');
                    toysImg.id = `toy${card.num}-${i}`;
                    toysImg.draggable = true;
                    toysImg.setAttribute('data-img', `${card.num}`);
                    toysImg.alt = 'toy';
                    toysImg.addEventListener('dragstart', Game.drag);
                    favoriteToysItem.appendChild(toysImg);
                }
                toysFavoriteContainer.append(favoriteToysItem);
            });
        }
    }
}
exports.Game = Game;


/***/ }),

/***/ "./pages/main/main.ts":
/*!****************************!*\
  !*** ./pages/main/main.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MainPage = void 0;
const pages_1 = __webpack_require__(/*! ../../core/templates/pages */ "./core/templates/pages.ts");
class MainPage extends pages_1.Page {
    constructor(id) {
        super(id);
    }
    renderWrapper() {
        const linkMain = document.querySelector('.links:nth-child(1)');
        const linkToys = document.querySelector('.links:nth-child(2)');
        const linkGame = document.querySelector('.links:nth-child(3)');
        linkToys.classList.remove('links-active');
        linkGame.classList.remove('links-active');
        linkMain.classList.add('links-active');
        const wrapperMain = document.createElement('div');
        wrapperMain.classList.add('main-page');
        wrapperMain.innerHTML = `
        <div class="main-page-ball ball1"></div>
        <div class="main-page-ball ball2"></div>
        <h1 class="main-page-title">Новогодняя игра <span>"Наряди ёлку"</span></h1>
        <a href="#toys-page" class="btn-main-page">Начать</a>
        `;
        this.container.append(wrapperMain);
    }
    render() {
        this.renderWrapper();
        return this.container;
    }
}
exports.MainPage = MainPage;


/***/ }),

/***/ "./pages/toys/toys.ts":
/*!****************************!*\
  !*** ./pages/toys/toys.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Toys = void 0;
const pages_1 = __webpack_require__(/*! ../../core/templates/pages */ "./core/templates/pages.ts");
const data_1 = __webpack_require__(/*! ../../data */ "./data.ts");
__webpack_require__(/*! ../../nouislider/slider.css */ "./nouislider/slider.css");
__webpack_require__(/*! ../../nouislider/sliderCustom.css */ "./nouislider/sliderCustom.css");
const slider_quantity_1 = __webpack_require__(/*! ../../nouislider/slider-quantity */ "./nouislider/slider-quantity.ts");
const slider_year_1 = __webpack_require__(/*! ../../nouislider/slider-year */ "./nouislider/slider-year.ts");
const localStorage_1 = __webpack_require__(/*! ../../local-storage/localStorage */ "./local-storage/localStorage.ts");
const FilterButtons = [
    {
        filter: 'шар',
        color: 'белый',
    },
    {
        filter: 'колокольчик',
        color: 'желтый',
    },
    {
        filter: 'шишка',
        color: 'красный',
    },
    {
        filter: 'снежинка',
        color: 'синий',
    },
    {
        filter: 'фигурка',
        color: 'зелёный',
    }
];
const SizeButtons = [
    {
        size: 'большой',
    },
    {
        size: 'средний',
    },
    {
        size: 'малый',
    },
];
const Options = [
    {
        text: 'Выбрать'
    },
    {
        value: 'sort-name-max',
        text: 'По названию от «А» до «Я»'
    },
    {
        value: 'sort-name-min',
        text: 'По названию от «Я» до «А»'
    },
    {
        value: 'sort-year-max',
        text: 'По году по возрастанию'
    },
    {
        value: 'sort-year-min',
        text: 'По году по убыванию'
    }
];
class Toys extends pages_1.Page {
    constructor(id) {
        super(id);
        this.clickFilter = (event) => {
            const cards = document.querySelectorAll('.toys');
            const favoriteInput = document.querySelector('#check-favorite');
            const minQuantity = Number(document.querySelector('.min-quantity').value);
            this.searchParams.minQuantity = minQuantity;
            const maxQuantity = Number(document.querySelector('.max-quantity').value);
            this.searchParams.maxQuantity = maxQuantity;
            const minYear = Number(document.querySelector('.min-year').value);
            this.searchParams.minYear = minYear;
            const maxYear = Number(document.querySelector('.max-year').value);
            this.searchParams.maxYear = maxYear;
            const select = document.querySelector('.sort-select').options.selectedIndex;
            const optionsValue = document.querySelector('.sort-select').options[select].value;
            this.searchParams.optionsValue = optionsValue;
            const target = event.target;
            const dataID = target.dataset.id;
            if (this.searchParams.shapes.includes(dataID)) {
                target.classList.remove('active');
                this.searchParams.shapes.splice(this.searchParams.shapes.indexOf(dataID), 1);
            }
            else if (target.classList.contains('btn-shape')) {
                target.classList.add('active');
                this.searchParams.shapes.push(dataID);
            }
            if (this.searchParams.colors.includes(dataID)) {
                target.classList.remove('active');
                this.searchParams.colors.splice(this.searchParams.colors.indexOf(dataID), 1);
            }
            else if (target.classList.contains('btn-color')) {
                target.classList.add('active');
                this.searchParams.colors.push(dataID);
            }
            if (this.searchParams.sizes.includes(dataID)) {
                target.classList.remove('active');
                this.searchParams.sizes.splice(this.searchParams.sizes.indexOf(dataID), 1);
            }
            else if (target.classList.contains('btn-size')) {
                target.classList.add('active');
                this.searchParams.sizes.push(dataID);
            }
            let result = data_1.default;
            result = result.filter(item => {
                if (this.searchParams.shapes.length > 0) {
                    return this.searchParams.shapes.includes(item.shape);
                }
                return true;
            });
            result = result.filter(item => {
                if (this.searchParams.colors.length > 0) {
                    return this.searchParams.colors.includes(item.color);
                }
                return true;
            });
            result = result.filter(item => {
                if (this.searchParams.sizes.length > 0) {
                    return this.searchParams.sizes.includes(item.size);
                }
                return true;
            });
            if (favoriteInput.checked) {
                this.searchParams.favorite = true;
                result = result.filter(item => {
                    if (this.searchParams.favorite === item.favorite) {
                        return true;
                    }
                });
            }
            result = result.filter(item => {
                return Number(item.count) >= this.searchParams.minQuantity && Number(item.count) <= this.searchParams.maxQuantity;
            });
            result = result.filter(item => {
                return Number(item.year) >= this.searchParams.minYear && Number(item.year) <= this.searchParams.maxYear;
            });
            if (this.searchParams.optionsValue === 'sort-name-max') {
                result.sort(function (x, y) {
                    if (x.name < y.name) {
                        return -1;
                    }
                    if (x.name > y.name) {
                        return 1;
                    }
                    return 0;
                });
            }
            else if (this.searchParams.optionsValue === 'sort-name-min') {
                result.sort(function (x, y) {
                    if (x.name > y.name) {
                        return -1;
                    }
                    if (x.name < y.name) {
                        return 1;
                    }
                    return 0;
                });
            }
            else if (this.searchParams.optionsValue === 'sort-year-max') {
                result.sort(function (x, y) {
                    if (Number(x.year) < Number(y.year)) {
                        return -1;
                    }
                    if (Number(x.year) > Number(y.year)) {
                        return 1;
                    }
                    return 0;
                });
            }
            else if (this.searchParams.optionsValue === 'sort-year-min') {
                result.sort(function (x, y) {
                    if (Number(x.year) > Number(y.year)) {
                        return -1;
                    }
                    if (Number(x.year) < Number(y.year)) {
                        return 1;
                    }
                    return 0;
                });
            }
            const search = document.querySelector('#search');
            const valueSearch = search.value.trim().toLowerCase();
            if (valueSearch) {
                result = result.filter(item => {
                    return item.name.toLowerCase().includes(valueSearch);
                });
            }
            const cardsContainer = document.querySelector('.cards');
            if (result.length === 0) {
                cardsContainer.innerHTML = `<p class="no-toys">Извените, совпадений не найдено</p>`;
            }
            else {
                cardsContainer.innerHTML = '';
            }
            this.removeCards(cards);
            this.renderCards(result);
        };
        this.clickToysCards = (event) => {
            const chosenToys = document.querySelector('.favorites span');
            const target = event.target;
            const toyID = target.closest('.toys').dataset.id;
            const localStorage = new localStorage_1.LocalStorageUtil();
            const getLocalStore = localStorage.getLocalStorage();
            const setLocalStore = localStorage.setLocalStorage(toyID);
            if (getLocalStore.length > 19) {
                alert('Извините уже все слоты заняты');
                target.closest('.toys').classList.remove('active');
            }
            else if (getLocalStore.includes(toyID)) {
                target.closest('.toys').classList.remove('active');
                chosenToys.innerHTML = `${setLocalStore.toyFavorites.length}`;
            }
            else {
                target.closest('.toys').classList.add('active');
                chosenToys.innerHTML = `${setLocalStore.toyFavorites.length}`;
            }
        };
        this.resetButton = () => {
            const wrapperMain = document.querySelector('.main_wrapper');
            this.removePage(wrapperMain);
            this.render();
            this.afterRender();
        };
        this.searchParams = {
            shapes: [],
            colors: [],
            sizes: [],
            favorite: false,
            minQuantity: null,
            maxQuantity: null,
            minYear: null,
            maxYear: null,
            optionsValue: '',
        };
    }
    renderWrapper() {
        const linkToys = document.querySelector('.links:nth-child(2)');
        const linkMain = document.querySelector('.links:nth-child(1)');
        const linkGame = document.querySelector('.links:nth-child(3)');
        linkMain.classList.remove('links-active');
        linkGame.classList.remove('links-active');
        linkToys.classList.add('links-active');
        const inputSearch = document.querySelector('.input_search');
        inputSearch.focus();
        const wrapperMain = document.createElement('div');
        wrapperMain.classList.add('main_wrapper');
        this.renderPage(wrapperMain);
        this.container.append(wrapperMain);
    }
    renderCards(cards) {
        const cardsWrapper = document.querySelector('.cards');
        const shapeArr = cards;
        shapeArr.forEach(card => {
            const toy = document.createElement('div');
            const infoCard = document.createElement('h2');
            infoCard.classList.add('toys-title');
            infoCard.innerHTML = card.name;
            const imageCard = document.createElement('img');
            imageCard.classList.add('toys-img');
            imageCard.src = `assets/toys/${card.num}.webp`;
            imageCard.alt = 'toy';
            const cardDescCont = document.createElement('div');
            cardDescCont.classList.add('toys-description');
            const count = document.createElement('p');
            count.classList.add('count');
            count.dataset.count = card.count;
            count.innerHTML = `Количество: <span>${card.count}</span>`;
            const year = document.createElement('p');
            year.classList.add('year');
            year.dataset.year = card.year;
            year.innerHTML = `Год: <span>${card.year}</span>`;
            const shape = document.createElement('p');
            shape.classList.add('shape');
            shape.dataset.shape = card.shape;
            shape.innerHTML = `Форма: <span>${card.shape}</span>`;
            const color = document.createElement('p');
            color.classList.add('color');
            color.dataset.color = card.color;
            color.innerHTML = `Цвет: <span>${card.color}</span>`;
            const size = document.createElement('p');
            size.classList.add('size');
            size.dataset.size = card.size;
            size.innerHTML = `Размер: <span>${card.size}</span>`;
            const favorite = document.createElement('p');
            favorite.classList.add('favorite');
            if (card.favorite === true) {
                favorite.dataset.favorite = `${card.favorite}`;
                favorite.innerHTML = `Любимая: <span>Да</span>`;
            }
            else {
                favorite.dataset.favorite = `${card.favorite}`;
                favorite.innerHTML = `Любимая: <span>Нет</span>`;
            }
            const tape = document.createElement('div');
            tape.classList.add('tape');
            toy.append(infoCard);
            toy.append(imageCard);
            toy.append(cardDescCont);
            toy.append(tape);
            cardDescCont.append(count);
            cardDescCont.append(year);
            cardDescCont.append(shape);
            cardDescCont.append(color);
            cardDescCont.append(size);
            cardDescCont.append(favorite);
            toy.classList.add('toys');
            toy.dataset.id = card.num;
            cardsWrapper.append(toy);
        });
    }
    removeCards(card) {
        card.forEach(element => {
            element.remove();
        });
    }
    renderPage(wrapper) {
        const filterDiv = document.createElement('form');
        filterDiv.classList.add('filter');
        filterDiv.id = 'filter';
        wrapper.append(filterDiv);
        const cards = document.createElement('div');
        cards.classList.add('cards');
        wrapper.append(cards);
        const filterBox1 = document.createElement('div');
        filterBox1.className = 'box box-filters';
        filterBox1.id = 'box1';
        const box1Title = document.createElement('h3');
        box1Title.innerHTML = 'Фильтры по значению';
        box1Title.className = 'filter-title';
        filterBox1.append(box1Title);
        const shapeBox = document.createElement('div');
        shapeBox.className = 'shape-container';
        shapeBox.innerHTML = 'Форма: ';
        FilterButtons.forEach(btn => {
            const btnShape = document.createElement('button');
            btnShape.classList.add('btn-shape');
            btnShape.dataset.id = btn.filter;
            shapeBox.append(btnShape);
        });
        const colorBox = document.createElement('div');
        colorBox.className = 'color-container';
        colorBox.innerHTML = 'Цвет: ';
        FilterButtons.forEach(btn => {
            const btnColor = document.createElement('button');
            btnColor.className = 'btn-color';
            btnColor.dataset.id = btn.color;
            colorBox.append(btnColor);
        });
        const sizeBox = document.createElement('div');
        sizeBox.className = 'size-container';
        sizeBox.innerHTML = 'Размер: ';
        SizeButtons.forEach(btn => {
            const btnSize = document.createElement('button');
            btnSize.className = 'btn-size';
            btnSize.dataset.id = btn.size;
            sizeBox.append(btnSize);
        });
        const favoriteBox = document.createElement('div');
        favoriteBox.innerHTML = 'Только любимые: ';
        favoriteBox.className = 'favorite';
        const favoriteCont = document.createElement('div');
        favoriteCont.className = 'favorite-container';
        favoriteBox.append(favoriteCont);
        const favoriteInput = document.createElement('input');
        favoriteInput.type = 'checkbox';
        favoriteInput.className = 'input-favorite';
        favoriteInput.id = 'check-favorite';
        favoriteCont.append(favoriteInput);
        const favoriteLabel = document.createElement('label');
        favoriteLabel.setAttribute('for', 'check-favorite');
        favoriteLabel.className = 'label-favorite';
        favoriteCont.append(favoriteLabel);
        filterBox1.append(shapeBox);
        filterBox1.append(colorBox);
        filterBox1.append(sizeBox);
        filterBox1.append(favoriteBox);
        filterDiv.append(filterBox1);
        const filterBox2 = document.createElement('div');
        filterBox2.className = 'box box-range';
        filterBox2.id = 'box2';
        const box2Title = document.createElement('h3');
        box2Title.className = 'filter-title';
        box2Title.innerHTML = 'Фильтры по диапазону';
        filterBox2.append(box2Title);
        const countBox = document.createElement('div');
        countBox.className = 'filter-quantity';
        countBox.innerHTML = 'Количество экземпляров: ';
        const countContainer = document.createElement('div');
        countContainer.className = 'container-for-filters';
        countBox.appendChild(countContainer);
        const countInputMin = document.createElement('input');
        countInputMin.type = 'number';
        countInputMin.className = 'min-quantity';
        countInputMin.value = '1';
        countInputMin.readOnly = true;
        countContainer.appendChild(countInputMin);
        const sliderQuantity = document.createElement('div');
        sliderQuantity.id = 'slider-quantity';
        sliderQuantity.className = 'slider-quantity';
        countContainer.appendChild(sliderQuantity);
        const countInputMax = document.createElement('input');
        countInputMax.type = 'number';
        countInputMax.className = 'max-quantity';
        countInputMax.value = '12';
        countInputMax.readOnly = true;
        countContainer.appendChild(countInputMax);
        const yearBox = document.createElement('div');
        yearBox.className = 'filter-year';
        yearBox.innerHTML = 'Год приобретения: ';
        const sliderCount = document.createElement('div');
        sliderCount.className = 'container-for-filters';
        yearBox.appendChild(sliderCount);
        const yearInputMin = document.createElement('input');
        yearInputMin.type = 'number';
        yearInputMin.className = 'min-year';
        yearInputMin.value = '1940';
        yearInputMin.readOnly = true;
        sliderCount.appendChild(yearInputMin);
        const sliderYear = document.createElement('div');
        sliderYear.id = 'slider-year';
        sliderYear.className = 'slider-year';
        sliderCount.appendChild(sliderYear);
        const yearInputMax = document.createElement('input');
        yearInputMax.type = 'number';
        yearInputMax.className = 'max-year';
        yearInputMax.value = '2020';
        yearInputMax.readOnly = true;
        sliderCount.appendChild(yearInputMax);
        filterBox2.append(countBox);
        filterBox2.append(yearBox);
        filterDiv.append(filterBox2);
        const filterBox3 = document.createElement('div');
        filterBox3.className = 'box box-sort';
        filterBox3.id = 'box3';
        const box3Title = document.createElement('h3');
        box3Title.className = 'filter-title';
        box3Title.innerHTML = 'Сортировка';
        filterBox3.append(box3Title);
        const select = document.createElement('select');
        select.className = 'sort-select';
        Options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.innerHTML = option.text;
            select.append(optionElement);
        });
        filterBox3.append(select);
        const btnReset = document.createElement('button');
        btnReset.className = 'reset';
        btnReset.type = 'reset';
        btnReset.innerHTML = 'Сброс фильтров';
        filterBox3.append(btnReset);
        filterDiv.append(filterBox3);
        data_1.default.forEach(toys => {
            const toy = document.createElement('div');
            const infoCard = document.createElement('h2');
            infoCard.classList.add('toys-title');
            infoCard.innerHTML = toys.name;
            const imageCard = document.createElement('img');
            imageCard.classList.add('toys-img');
            imageCard.src = `assets/toys/${toys.num}.webp`;
            imageCard.alt = 'toy';
            const cardDescCont = document.createElement('div');
            cardDescCont.classList.add('toys-description');
            const count = document.createElement('p');
            count.classList.add('count');
            count.dataset.count = toys.count;
            count.innerHTML = `Количество: <span>${toys.count}</span>`;
            const year = document.createElement('p');
            year.classList.add('year');
            year.dataset.year = toys.year;
            year.innerHTML = `Год: <span>${toys.year}</span>`;
            const shape = document.createElement('p');
            shape.classList.add('shape');
            shape.dataset.shape = toys.shape;
            shape.innerHTML = `Форма: <span>${toys.shape}</span>`;
            const color = document.createElement('p');
            color.classList.add('color');
            color.dataset.color = toys.color;
            color.innerHTML = `Цвет: <span>${toys.color}</span>`;
            const size = document.createElement('p');
            size.classList.add('size');
            size.dataset.size = toys.size;
            size.innerHTML = `Размер: <span>${toys.size}</span>`;
            const favorite = document.createElement('p');
            favorite.classList.add('favorite');
            if (toys.favorite === true) {
                favorite.dataset.favorite = `${toys.favorite}`;
                favorite.innerHTML = `Любимая: <span>Да</span>`;
            }
            else {
                favorite.dataset.favorite = `${toys.favorite}`;
                favorite.innerHTML = `Любимая: <span>Нет</span>`;
            }
            const tape = document.createElement('div');
            tape.classList.add('tape');
            toy.append(infoCard);
            toy.append(imageCard);
            toy.append(cardDescCont);
            toy.append(tape);
            cardDescCont.append(count);
            cardDescCont.append(year);
            cardDescCont.append(shape);
            cardDescCont.append(color);
            cardDescCont.append(size);
            cardDescCont.append(favorite);
            toy.classList.add('toys');
            toy.dataset.id = toys.num;
            cards.append(toy);
        });
    }
    removePage(page) {
        page.remove();
    }
    render() {
        this.renderWrapper();
        const chosenToys = document.querySelector('.favorites span');
        const localStorage = new localStorage_1.LocalStorageUtil();
        const getLocalStore = localStorage.getLocalStorage();
        chosenToys.innerHTML = `${getLocalStore.length}`;
        return this.container;
    }
    afterRender() {
        const localStorage = new localStorage_1.LocalStorageUtil();
        const getLocalStore = localStorage.getLocalStorage();
        const toysID = document.querySelectorAll('.toys');
        toysID.forEach((toy) => {
            if (getLocalStore.includes(toy.dataset.id)) {
                toy.className = 'toys active';
            }
            else {
                toy.className = 'toys';
            }
        });
        (0, slider_quantity_1.quantitySlider)();
        (0, slider_year_1.yearSlider)();
        const shapeCont = document.querySelector('.shape-container');
        shapeCont === null || shapeCont === void 0 ? void 0 : shapeCont.addEventListener('click', this.clickFilter);
        const colorCont = document.querySelector('.color-container');
        colorCont === null || colorCont === void 0 ? void 0 : colorCont.addEventListener('click', this.clickFilter);
        const sizeCont = document.querySelector('.size-container');
        sizeCont === null || sizeCont === void 0 ? void 0 : sizeCont.addEventListener('click', this.clickFilter);
        const favorite = document.querySelector('.favorite');
        favorite === null || favorite === void 0 ? void 0 : favorite.addEventListener('click', this.clickFilter);
        const minQuantity = document.querySelector('.min-quantity');
        minQuantity === null || minQuantity === void 0 ? void 0 : minQuantity.addEventListener('change', this.clickFilter);
        const maxQuantity = document.querySelector('.max-quantity');
        maxQuantity === null || maxQuantity === void 0 ? void 0 : maxQuantity.addEventListener('change', this.clickFilter);
        const minYear = document.querySelector('.min-year');
        minYear === null || minYear === void 0 ? void 0 : minYear.addEventListener('change', this.clickFilter);
        const maxYear = document.querySelector('.max-year');
        maxYear === null || maxYear === void 0 ? void 0 : maxYear.addEventListener('change', this.clickFilter);
        const sortSelect = document.querySelector('.sort-select');
        sortSelect === null || sortSelect === void 0 ? void 0 : sortSelect.addEventListener('change', this.clickFilter);
        const input = document.querySelector("#search");
        input.addEventListener("keyup", this.clickFilter);
        const btnReset = document.querySelector('.reset');
        btnReset.addEventListener('click', this.resetButton);
        const cards = document.querySelectorAll('.toys');
        cards.forEach(card => {
            card.addEventListener('click', this.clickToysCards);
        });
    }
}
exports.Toys = Toys;


/***/ }),

/***/ "./snow/snow-flake.ts":
/*!****************************!*\
  !*** ./snow/snow-flake.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Snowflake = exports.SnowflakePosition = void 0;
var SnowflakePosition;
(function (SnowflakePosition) {
    SnowflakePosition[SnowflakePosition["TOP"] = 0] = "TOP";
    SnowflakePosition[SnowflakePosition["BOTTOM"] = 1] = "BOTTOM";
    SnowflakePosition[SnowflakePosition["LEFT"] = 2] = "LEFT";
    SnowflakePosition[SnowflakePosition["RIGHT"] = 3] = "RIGHT";
    SnowflakePosition[SnowflakePosition["ONSTAGE"] = 4] = "ONSTAGE";
})(SnowflakePosition = exports.SnowflakePosition || (exports.SnowflakePosition = {}));
class Snowflake {
    constructor(canvas) {
        this.color = "#ffffff";
        this.active = true;
        this.pos = SnowflakePosition.TOP;
        this.canvas = canvas;
        const ctx = canvas.getContext("2d");
        if (ctx) {
            this.ctx = ctx;
        }
        else {
            throw new Error("Canvas 2D context not found, please check it is running in Browser environment.");
        }
        this.allocate();
    }
    draw() {
        this.updatePosition();
        if (!this.active && this.pos !== SnowflakePosition.ONSTAGE) {
            return;
        }
        if (this.pos === SnowflakePosition.LEFT ||
            this.pos === SnowflakePosition.RIGHT ||
            this.pos === SnowflakePosition.BOTTOM) {
            this.allocate();
            return;
        }
        this.y += this.vy;
        this.x += this.vx;
        this.ctx.globalAlpha = this.alpha;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
    updatePosition() {
        if (this.y < -this.radius) {
            this.pos = SnowflakePosition.TOP;
        }
        else if (this.y > this.canvas.height + this.radius) {
            this.pos = SnowflakePosition.BOTTOM;
        }
        else if (this.x < -this.radius) {
            this.pos = SnowflakePosition.LEFT;
        }
        else if (this.x > this.canvas.width + this.radius) {
            this.pos = SnowflakePosition.RIGHT;
        }
        else {
            this.pos = SnowflakePosition.ONSTAGE;
        }
    }
    allocate() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * -this.canvas.height;
        this.vy = 1 + Math.random() * 3;
        this.vx = 0.5 - Math.random();
        this.radius = 1 + Math.random() * 2;
        this.alpha = 0.5 + Math.random() * 0.5;
    }
}
exports.Snowflake = Snowflake;


/***/ }),

/***/ "./snow/snow.ts":
/*!**********************!*\
  !*** ./snow/snow.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnowScene = void 0;
const snow_flake_1 = __webpack_require__(/*! ./snow-flake */ "./snow/snow-flake.ts");
const defaultSnowSceneConfig = {
    color: "#ffffff",
    volumn: 300,
};
class SnowScene {
    constructor(container = "body", config) {
        this.active = false;
        this.initialised = false;
        this.animationId = 0;
        const containerElement = typeof container === "string" ? document.querySelector(container) : container;
        if (containerElement) {
            this.container = containerElement;
        }
        else {
            throw new Error("can not find container by specified selector");
        }
        this.config = Object.assign(Object.assign({}, defaultSnowSceneConfig), config);
        this.buildScene();
    }
    play() {
        if (!this.initialised) {
            this.buildScene();
        }
        this.active = true;
        this.snowflakes.forEach((s) => (s.active = true));
        if (!this.animationId) {
            this.animationId = requestAnimationFrame(() => this.updateFrame());
        }
    }
    pause() {
        this.active = false;
        this.snowflakes.forEach((s) => (s.active = false));
    }
    buildScene() {
        const canvas = document.createElement("canvas");
        canvas.style.position = "absolute";
        canvas.style.left = "0";
        canvas.style.top = "0";
        canvas.style.pointerEvents = "none";
        canvas.width = this.container.clientWidth;
        canvas.height = this.container.clientHeight;
        this.container.appendChild(canvas);
        this.canvas = canvas;
        const ctx = canvas.getContext("2d");
        if (ctx) {
            this.ctx = ctx;
        }
        this.snowflakes = [];
        for (let i = 0; i < this.config.volumn; i++) {
            const flake = new snow_flake_1.Snowflake(this.canvas);
            flake.color = this.config.color;
            this.snowflakes.push(flake);
        }
        this.initialised = true;
    }
    destroyScene() {
        var _a;
        (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.remove();
        this.initialised = false;
    }
    updateFrame() {
        if (!this.canvas || !this.ctx) {
            return;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snowflakes.forEach((flake) => {
            flake.draw();
        });
        if (!this.active && this.snowflakes.every((flake) => flake.pos !== snow_flake_1.SnowflakePosition.ONSTAGE)) {
            this.animationId = 0;
            this.destroyScene();
        }
        else {
            this.animationId = requestAnimationFrame(() => this.updateFrame());
        }
    }
}
exports.SnowScene = SnowScene;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./global.css */ "./global.css");
const app_1 = __webpack_require__(/*! ./pages/app/app */ "./pages/app/app.ts");
const app = new app_1.App();
app.run();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcDEuNjM2ODViZGIxODI0YzhhNDA1MDIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0EsSUFBSSxLQUE0RDtBQUNoRSxJQUFJLENBQzJHO0FBQy9HLENBQUMsNkJBQTZCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOENBQThDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0Msc0NBQXNDLHlDQUF5QztBQUMvRSxrQ0FBa0MscUNBQXFDO0FBQ3ZFLG1DQUFtQyxzQ0FBc0M7QUFDekUscUJBQXFCLHVCQUF1QjtBQUM1Qyx1QkFBdUIseUJBQXlCO0FBQ2hELHlCQUF5QiwyQkFBMkI7QUFDcEQsb0JBQW9CLHVCQUF1QjtBQUMzQyx1QkFBdUIsMEJBQTBCO0FBQ2pELGlDQUFpQyxvQ0FBb0M7QUFDckUscUJBQXFCLHVCQUF1QjtBQUM1QywyQkFBMkIsOEJBQThCO0FBQ3pELHNCQUFzQix5QkFBeUI7QUFDL0MscUJBQXFCLHdCQUF3QjtBQUM3Qyx1QkFBdUIsMEJBQTBCO0FBQ2pELHlCQUF5QiwyQkFBMkI7QUFDcEQsMEJBQTBCLDZCQUE2QjtBQUN2RCxzQkFBc0IseUJBQXlCO0FBQy9DLHdCQUF3QiwyQkFBMkI7QUFDbkQsK0JBQStCLGlDQUFpQztBQUNoRSwrQkFBK0Isa0NBQWtDO0FBQ2pFLHlCQUF5QiwyQkFBMkI7QUFDcEQsMEJBQTBCLDRCQUE0QjtBQUN0RCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixnQkFBZ0I7QUFDaEc7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsK0JBQStCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsYUFBYTs7QUFFaEUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL3JFWTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QscUJBQXFCLG1CQUFPLENBQUMsa0VBQTRCO0FBQ3pELG1CQUFPLENBQUMseURBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QsbUJBQU8sQ0FBQyx5REFBYztBQUN0QixxQkFBcUIsbUJBQU8sQ0FBQyxrRUFBNEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsVUFBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7Ozs7OztBQ25GRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1oscUJBQXFCLG1CQUFPLENBQUMsa0VBQTRCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOzs7Ozs7Ozs7Ozs7QUNaQztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7Ozs7Ozs7Ozs7OztBQ2JMO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7O0FDZEM7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFlOzs7Ozs7Ozs7Ozs7QUM1bEJGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx3QkFBd0I7Ozs7Ozs7Ozs7OztBQzdCWDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIscUJBQXFCLG1CQUFPLENBQUMsaUVBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQjs7Ozs7Ozs7Ozs7O0FDeEJUO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQjtBQUNsQixxQkFBcUIsbUJBQU8sQ0FBQyxpRUFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7Ozs7QUN4Qkw7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsV0FBVztBQUNYLGlCQUFpQixtQkFBTyxDQUFDLCtFQUFxQztBQUM5RCxlQUFlLG1CQUFPLENBQUMsMENBQWM7QUFDckMsZUFBZSxtQkFBTyxDQUFDLDBDQUFjO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQywwQ0FBYztBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQywrRUFBcUM7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLHVFQUFpQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGtCQUFrQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNEYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1osZ0JBQWdCLG1CQUFPLENBQUMsNkRBQTRCO0FBQ3BELGVBQWUsbUJBQU8sQ0FBQyw2QkFBWTtBQUNuQyx1QkFBdUIsbUJBQU8sQ0FBQyx5RUFBa0M7QUFDakUsZUFBZSxtQkFBTyxDQUFDLHVDQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLEtBQUs7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsUUFBUTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsTUFBTTtBQUMzQyxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQkFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1CQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsU0FBUztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MseUJBQXlCO0FBQzdEO0FBQ0EsdURBQXVELFNBQVM7QUFDaEU7QUFDQSwyQ0FBMkMsU0FBUyxHQUFHLEVBQUU7QUFDekQ7QUFDQSw0REFBNEQsU0FBUztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5QkFBeUI7QUFDekQ7QUFDQSxtREFBbUQsU0FBUztBQUM1RDtBQUNBLHVDQUF1QyxTQUFTLEdBQUcsRUFBRTtBQUNyRDtBQUNBLHdEQUF3RCxTQUFTO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7O0FDN3VCQztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEIsZ0JBQWdCLG1CQUFPLENBQUMsNkRBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7Ozs7Ozs7Ozs7OztBQzlCSDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1osZ0JBQWdCLG1CQUFPLENBQUMsNkRBQTRCO0FBQ3BELGVBQWUsbUJBQU8sQ0FBQyw2QkFBWTtBQUNuQyxtQkFBTyxDQUFDLDREQUE2QjtBQUNyQyxtQkFBTyxDQUFDLHdFQUFtQztBQUMzQywwQkFBMEIsbUJBQU8sQ0FBQyx5RUFBa0M7QUFDcEUsc0JBQXNCLG1CQUFPLENBQUMsaUVBQThCO0FBQzVELHVCQUF1QixtQkFBTyxDQUFDLHlFQUFrQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxrQ0FBa0M7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtDQUFrQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFVBQVU7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFdBQVc7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFdBQVc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFVBQVU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsU0FBUztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsV0FBVztBQUM5RDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsVUFBVTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsV0FBVztBQUN6RDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsVUFBVTtBQUN4RDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsY0FBYztBQUM3RDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsY0FBYztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxQkFBcUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxZQUFZOzs7Ozs7Ozs7Ozs7QUN4akJDO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQixHQUFHLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0RBQW9ELHlCQUF5QixLQUFLO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7Ozs7QUN4RUo7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCLHFCQUFxQixtQkFBTyxDQUFDLDBDQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7O1VDakZqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFPLENBQUMsa0NBQWM7QUFDdEIsY0FBYyxtQkFBTyxDQUFDLDJDQUFpQjtBQUN2QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzP2I5ZTQiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzP2ZhYWEiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFsLmNzcz83YzVmIiwid2VicGFjazovLy8uL25vdWlzbGlkZXIvc2xpZGVyLmNzcz9hN2M5Iiwid2VicGFjazovLy8uL25vdWlzbGlkZXIvc2xpZGVyQ3VzdG9tLmNzcz83YTM2Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL21haW4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL3RlbXBsYXRlcy9jb21wb25lbnRzLnRzIiwid2VicGFjazovLy8uL2NvcmUvdGVtcGxhdGVzL3BhZ2VzLnRzIiwid2VicGFjazovLy8uL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vbG9jYWwtc3RvcmFnZS9sb2NhbFN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vbm91aXNsaWRlci9zbGlkZXItcXVhbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vbm91aXNsaWRlci9zbGlkZXIteWVhci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcHAvYXBwLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2dhbWUvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdG95cy90b3lzLnRzIiwid2VicGFjazovLy8uL3Nub3cvc25vdy1mbGFrZS50cyIsIndlYnBhY2s6Ly8vLi9zbm93L3Nub3cudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwubm9VaVNsaWRlciA9IHt9KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgICBleHBvcnRzLlBpcHNNb2RlID0gdm9pZCAwO1xuICAgIChmdW5jdGlvbiAoUGlwc01vZGUpIHtcbiAgICAgICAgUGlwc01vZGVbXCJSYW5nZVwiXSA9IFwicmFuZ2VcIjtcbiAgICAgICAgUGlwc01vZGVbXCJTdGVwc1wiXSA9IFwic3RlcHNcIjtcbiAgICAgICAgUGlwc01vZGVbXCJQb3NpdGlvbnNcIl0gPSBcInBvc2l0aW9uc1wiO1xuICAgICAgICBQaXBzTW9kZVtcIkNvdW50XCJdID0gXCJjb3VudFwiO1xuICAgICAgICBQaXBzTW9kZVtcIlZhbHVlc1wiXSA9IFwidmFsdWVzXCI7XG4gICAgfSkoZXhwb3J0cy5QaXBzTW9kZSB8fCAoZXhwb3J0cy5QaXBzTW9kZSA9IHt9KSk7XG4gICAgZXhwb3J0cy5QaXBzVHlwZSA9IHZvaWQgMDtcbiAgICAoZnVuY3Rpb24gKFBpcHNUeXBlKSB7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9uZVwiXSA9IC0xXSA9IFwiTm9uZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vVmFsdWVcIl0gPSAwXSA9IFwiTm9WYWx1ZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIkxhcmdlVmFsdWVcIl0gPSAxXSA9IFwiTGFyZ2VWYWx1ZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIlNtYWxsVmFsdWVcIl0gPSAyXSA9IFwiU21hbGxWYWx1ZVwiO1xuICAgIH0pKGV4cG9ydHMuUGlwc1R5cGUgfHwgKGV4cG9ydHMuUGlwc1R5cGUgPSB7fSkpO1xuICAgIC8vcmVnaW9uIEhlbHBlciBNZXRob2RzXG4gICAgZnVuY3Rpb24gaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkge1xuICAgICAgICByZXR1cm4gaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpICYmIHR5cGVvZiBlbnRyeS5mcm9tID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgICAgIC8vIHBhcnRpYWwgZm9ybWF0dGVycyBvbmx5IG5lZWQgYSB0byBmdW5jdGlvbiBhbmQgbm90IGEgZnJvbSBmdW5jdGlvblxuICAgICAgICByZXR1cm4gdHlwZW9mIGVudHJ5ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBlbnRyeS50byA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsKSB7XG4gICAgICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1NldCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gQmluZGFibGUgdmVyc2lvblxuICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyBSZW1vdmVzIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheS5cbiAgICBmdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzW2FdID8gKHRoaXNbYV0gPSB0cnVlKSA6IGZhbHNlO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIC8vIFJvdW5kIGEgdmFsdWUgdG8gdGhlIGNsb3Nlc3QgJ3RvJy5cbiAgICBmdW5jdGlvbiBjbG9zZXN0KHZhbHVlLCB0bykge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHRvKSAqIHRvO1xuICAgIH1cbiAgICAvLyBDdXJyZW50IHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxuICAgIGZ1bmN0aW9uIG9mZnNldChlbGVtLCBvcmllbnRhdGlvbikge1xuICAgICAgICB2YXIgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIHZhciBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHBhZ2VPZmZzZXQgPSBnZXRQYWdlT2Zmc2V0KGRvYyk7XG4gICAgICAgIC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBjb250YWlucyBsZWZ0IHNjcm9sbCBpbiBDaHJvbWUgb24gQW5kcm9pZC5cbiAgICAgICAgLy8gSSBoYXZlbid0IGZvdW5kIGEgZmVhdHVyZSBkZXRlY3Rpb24gdGhhdCBwcm92ZXMgdGhpcy4gV29yc3QgY2FzZVxuICAgICAgICAvLyBzY2VuYXJpbyBvbiBtaXMtbWF0Y2g6IHRoZSAndGFwJyBmZWF0dXJlIG9uIGhvcml6b250YWwgc2xpZGVycyBicmVha3MuXG4gICAgICAgIGlmICgvd2Via2l0LipDaHJvbWUuKk1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHBhZ2VPZmZzZXQueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uID8gcmVjdC50b3AgKyBwYWdlT2Zmc2V0LnkgLSBkb2NFbGVtLmNsaWVudFRvcCA6IHJlY3QubGVmdCArIHBhZ2VPZmZzZXQueCAtIGRvY0VsZW0uY2xpZW50TGVmdDtcbiAgICB9XG4gICAgLy8gQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyBudW1lcmljYWwuXG4gICAgZnVuY3Rpb24gaXNOdW1lcmljKGEpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmICFpc05hTihhKSAmJiBpc0Zpbml0ZShhKTtcbiAgICB9XG4gICAgLy8gU2V0cyBhIGNsYXNzIGFuZCByZW1vdmVzIGl0IGFmdGVyIFtkdXJhdGlvbl0gbXMuXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3NGb3IoZWxlbWVudCwgY2xhc3NOYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBMaW1pdHMgYSB2YWx1ZSB0byAwIC0gMTAwXG4gICAgZnVuY3Rpb24gbGltaXQoYSkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oYSwgMTAwKSwgMCk7XG4gICAgfVxuICAgIC8vIFdyYXBzIGEgdmFyaWFibGUgYXMgYW4gYXJyYXksIGlmIGl0IGlzbid0IG9uZSB5ZXQuXG4gICAgLy8gTm90ZSB0aGF0IGFuIGlucHV0IGFycmF5IGlzIHJldHVybmVkIGJ5IHJlZmVyZW5jZSFcbiAgICBmdW5jdGlvbiBhc0FycmF5KGEpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSkgPyBhIDogW2FdO1xuICAgIH1cbiAgICAvLyBDb3VudHMgZGVjaW1hbHNcbiAgICBmdW5jdGlvbiBjb3VudERlY2ltYWxzKG51bVN0cikge1xuICAgICAgICBudW1TdHIgPSBTdHJpbmcobnVtU3RyKTtcbiAgICAgICAgdmFyIHBpZWNlcyA9IG51bVN0ci5zcGxpdChcIi5cIik7XG4gICAgICAgIHJldHVybiBwaWVjZXMubGVuZ3RoID4gMSA/IHBpZWNlc1sxXS5sZW5ndGggOiAwO1xuICAgIH1cbiAgICAvLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jYWRkX2NsYXNzXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jcmVtb3ZlX2NsYXNzXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIiArIGNsYXNzTmFtZS5zcGxpdChcIiBcIikuam9pbihcInxcIikgKyBcIihcXFxcYnwkKVwiLCBcImdpXCIpLCBcIiBcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L2F0dHJpYnV0ZXMvYWRkaW5nLXJlbW92aW5nLWFuZC10ZXN0aW5nLWZvci1jbGFzc2VzLTkvXG4gICAgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0ID8gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOiBuZXcgUmVnRXhwKFwiXFxcXGJcIiArIGNsYXNzTmFtZSArIFwiXFxcXGJcIikudGVzdChlbC5jbGFzc05hbWUpO1xuICAgIH1cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Njcm9sbFkjTm90ZXNcbiAgICBmdW5jdGlvbiBnZXRQYWdlT2Zmc2V0KGRvYykge1xuICAgICAgICB2YXIgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGlzQ1NTMUNvbXBhdCA9IChkb2MuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCI7XG4gICAgICAgIHZhciB4ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgICAgICAgICA6IGlzQ1NTMUNvbXBhdFxuICAgICAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxMZWZ0O1xuICAgICAgICB2YXIgeSA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyB3ZSBwcm92aWRlIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSBjb25zdGFudHMgaW5zdGVhZFxuICAgIC8vIG9mIGFjY2Vzc2luZyB3aW5kb3cuKiBhcyBzb29uIGFzIHRoZSBtb2R1bGUgbmVlZHMgaXRcbiAgICAvLyBzbyB0aGF0IHdlIGRvIG5vdCBjb21wdXRlIGFueXRoaW5nIGlmIG5vdCBuZWVkZWRcbiAgICBmdW5jdGlvbiBnZXRBY3Rpb25zKCkge1xuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGV2ZW50cyB0byBiaW5kLiBJRTExIGltcGxlbWVudHMgcG9pbnRlckV2ZW50cyB3aXRob3V0XG4gICAgICAgIC8vIGEgcHJlZml4LCB3aGljaCBicmVha3MgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBJRTEwIGltcGxlbWVudGF0aW9uLlxuICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwicG9pbnRlcmRvd25cIixcbiAgICAgICAgICAgICAgICBtb3ZlOiBcInBvaW50ZXJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcInBvaW50ZXJ1cFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJNU1BvaW50ZXJEb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IFwiTVNQb2ludGVyTW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiTVNQb2ludGVyVXBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwibW91c2Vkb3duIHRvdWNoc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogXCJtb3VzZW1vdmUgdG91Y2htb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJtb3VzZXVwIHRvdWNoZW5kXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZFxuICAgIC8vIElzc3VlICM3ODVcbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0c1Bhc3NpdmUoKSB7XG4gICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInBhc3NpdmVcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG51bGwsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5DU1MgJiYgQ1NTLnN1cHBvcnRzICYmIENTUy5zdXBwb3J0cyhcInRvdWNoLWFjdGlvblwiLCBcIm5vbmVcIik7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gUmFuZ2UgQ2FsY3VsYXRpb25cbiAgICAvLyBEZXRlcm1pbmUgdGhlIHNpemUgb2YgYSBzdWItcmFuZ2UgaW4gcmVsYXRpb24gdG8gYSBmdWxsIHJhbmdlLlxuICAgIGZ1bmN0aW9uIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSB7XG4gICAgICAgIHJldHVybiAxMDAgLyAocGIgLSBwYSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBIb3cgbWFueSBwZXJjZW50IGlzIHRoaXMgdmFsdWUgb2YgdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiBmcm9tUGVyY2VudGFnZShyYW5nZSwgdmFsdWUsIHN0YXJ0UmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkgLyAocmFuZ2Vbc3RhcnRSYW5nZSArIDFdIC0gcmFuZ2Vbc3RhcnRSYW5nZV0pO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgV2hlcmUgaXMgdGhpcyB2YWx1ZSBvbiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIHRvUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZyb21QZXJjZW50YWdlKHJhbmdlLCByYW5nZVswXSA8IDAgPyB2YWx1ZSArIE1hdGguYWJzKHJhbmdlWzBdKSA6IHZhbHVlIC0gcmFuZ2VbMF0sIDApO1xuICAgIH1cbiAgICAvLyAodmFsdWUpIEhvdyBtdWNoIGlzIHRoaXMgcGVyY2VudGFnZSBvbiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIChyYW5nZVsxXSAtIHJhbmdlWzBdKSkgLyAxMDAgKyByYW5nZVswXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Sih2YWx1ZSwgYXJyKSB7XG4gICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgd2hpbGUgKHZhbHVlID49IGFycltqXSkge1xuICAgICAgICAgICAgaiArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgSW5wdXQgYSB2YWx1ZSwgZmluZCB3aGVyZSwgb24gYSBzY2FsZSBvZiAwLTEwMCwgaXQgYXBwbGllcy5cbiAgICBmdW5jdGlvbiB0b1N0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSB4VmFsLnNsaWNlKC0xKVswXSkge1xuICAgICAgICAgICAgcmV0dXJuIDEwMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhWYWwpO1xuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICAgICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgICAgIHJldHVybiBwYSArIHRvUGVyY2VudGFnZShbdmEsIHZiXSwgdmFsdWUpIC8gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpO1xuICAgIH1cbiAgICAvLyAodmFsdWUpIElucHV0IGEgcGVyY2VudGFnZSwgZmluZCB3aGVyZSBpdCBpcyBvbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxuICAgIGZ1bmN0aW9uIGZyb21TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgICAgICAvLyBUaGVyZSBpcyBubyByYW5nZSBncm91cCB0aGF0IGZpdHMgMTAwXG4gICAgICAgIGlmICh2YWx1ZSA+PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB4VmFsLnNsaWNlKC0xKVswXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICAgICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgICAgIHJldHVybiBpc1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sICh2YWx1ZSAtIHBhKSAqIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBHZXQgdGhlIHN0ZXAgdGhhdCBhcHBsaWVzIGF0IGEgY2VydGFpbiB2YWx1ZS5cbiAgICBmdW5jdGlvbiBnZXRTdGVwKHhQY3QsIHhTdGVwcywgc25hcCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xuICAgICAgICB2YXIgYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgYiA9IHhQY3Rbal07XG4gICAgICAgIC8vIElmICdzbmFwJyBpcyBzZXQsIHN0ZXBzIGFyZSB1c2VkIGFzIGZpeGVkIHBvaW50cyBvbiB0aGUgc2xpZGVyLlxuICAgICAgICBpZiAoc25hcCkge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCBwb3NpdGlvbiwgYSBvciBiLlxuICAgICAgICAgICAgaWYgKHZhbHVlIC0gYSA+IChiIC0gYSkgLyAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXhTdGVwc1tqIC0gMV0pIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geFBjdFtqIC0gMV0gKyBjbG9zZXN0KHZhbHVlIC0geFBjdFtqIC0gMV0sIHhTdGVwc1tqIC0gMV0pO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIFNwZWN0cnVtXG4gICAgdmFyIFNwZWN0cnVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBTcGVjdHJ1bShlbnRyeSwgc25hcCwgc2luZ2xlU3RlcCkge1xuICAgICAgICAgICAgdGhpcy54UGN0ID0gW107XG4gICAgICAgICAgICB0aGlzLnhWYWwgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFN0ZXBzID0gW107XG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54U3RlcHMgPSBbc2luZ2xlU3RlcCB8fCBmYWxzZV07XG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtmYWxzZV07XG4gICAgICAgICAgICB0aGlzLnNuYXAgPSBzbmFwO1xuICAgICAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICAgICAgdmFyIG9yZGVyZWQgPSBbXTtcbiAgICAgICAgICAgIC8vIE1hcCB0aGUgb2JqZWN0IGtleXMgdG8gYW4gYXJyYXkuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBvcmRlcmVkLnB1c2goW2FzQXJyYXkoZW50cnlbaW5kZXhdKSwgaW5kZXhdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU29ydCBhbGwgZW50cmllcyBieSB2YWx1ZSAobnVtZXJpYyBzb3J0KS5cbiAgICAgICAgICAgIG9yZGVyZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdWzBdIC0gYlswXVswXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQ29udmVydCBhbGwgZW50cmllcyB0byBzdWJyYW5nZXMuXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBvcmRlcmVkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50cnlQb2ludChvcmRlcmVkW2luZGV4XVsxXSwgb3JkZXJlZFtpbmRleF1bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGFjdHVhbCBzdGVwIHZhbHVlcy5cbiAgICAgICAgICAgIC8vIHhTdGVwcyBpcyBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgeFBjdCBhbmQgeFZhbC5cbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gdGhpcy54U3RlcHMuc2xpY2UoMCk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBudW1lcmljIHN0ZXBzIHRvIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBzdWJyYW5nZSB0aGV5IHJlcHJlc2VudC5cbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RlcFBvaW50KGluZGV4LCB0aGlzLnhOdW1TdGVwc1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXNbaW5kZXhdID0gZnJvbVBlcmNlbnRhZ2UodGhpcy54VmFsLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlcztcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG92ZXIgdGhlIHdob2xlIHNjYWxlIG9mIHJhbmdlcy5cbiAgICAgICAgLy8gZGlyZWN0aW9uOiAwID0gYmFja3dhcmRzIC8gMSA9IGZvcndhcmRzXG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRBYnNvbHV0ZURpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlLCBkaXN0YW5jZXMsIGRpcmVjdGlvbikge1xuICAgICAgICAgICAgdmFyIHhQY3RfaW5kZXggPSAwO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHJhbmdlIHdoZXJlIHRvIHN0YXJ0IGNhbGN1bGF0aW9uXG4gICAgICAgICAgICBpZiAodmFsdWUgPCB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHZhbHVlID4gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICB4UGN0X2luZGV4ID0gdGhpcy54UGN0Lmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBsb29raW5nIGJhY2t3YXJkcyBhbmQgdGhlIHZhbHVlIGlzIGV4YWN0bHkgYXQgYSByYW5nZSBzZXBhcmF0b3IgdGhlbiBsb29rIG9uZSByYW5nZSBmdXJ0aGVyXG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvbiAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHhQY3RfaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGFydF9mYWN0b3I7XG4gICAgICAgICAgICB2YXIgcmVzdF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgdmFyIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXhdO1xuICAgICAgICAgICAgdmFyIHJhbmdlX3BjdCA9IDA7XG4gICAgICAgICAgICB2YXIgcmVsX3JhbmdlX2Rpc3RhbmNlID0gMDtcbiAgICAgICAgICAgIHZhciBhYnNfZGlzdGFuY2VfY291bnRlciA9IDA7XG4gICAgICAgICAgICB2YXIgcmFuZ2VfY291bnRlciA9IDA7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgd2hhdCBwYXJ0IG9mIHRoZSBzdGFydCByYW5nZSB0aGUgdmFsdWUgaXNcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodmFsdWUgLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pIC8gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB2YWx1ZSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEbyB1bnRpbCB0aGUgY29tcGxldGUgZGlzdGFuY2UgYWNyb3NzIHJhbmdlcyBpcyBjYWxjdWxhdGVkXG4gICAgICAgICAgICB3aGlsZSAocmVzdF9yZWxfZGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50YWdlIG9mIHRvdGFsIHJhbmdlXG4gICAgICAgICAgICAgICAgcmFuZ2VfcGN0ID0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxICsgcmFuZ2VfY291bnRlcl0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgIC8vIERldGVjdCBpZiB0aGUgbWFyZ2luLCBwYWRkaW5nIG9yIGxpbWl0IGlzIGxhcmdlciB0aGVuIHRoZSBjdXJyZW50IHJhbmdlIGFuZCBjYWxjdWxhdGVcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yICsgMTAwIC0gc3RhcnRfZmFjdG9yICogMTAwID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGxhcmdlciB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIHdob2xlIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9IHJhbmdlX3BjdCAqIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzdCBmYWN0b3Igb2YgcmVsYXRpdmUgcGVyY2VudHVhbCBkaXN0YW5jZSBzdGlsbCB0byBiZSBjYWxjdWxhdGVkXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gKHJlc3RfcmVsX2Rpc3RhbmNlIC0gMTAwICogc3RhcnRfZmFjdG9yKSAvIGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBzdGFydCBmYWN0b3IgdG8gMSBhcyBmb3IgbmV4dCByYW5nZSBpdCBkb2VzIG5vdCBhcHBseS5cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNtYWxsZXIgb3IgZXF1YWwgdGhlbiB0YWtlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG9mIHRoZSBjYWxjdWxhdGUgcGVyY2VudHVhbCBwYXJ0IG9mIHRoYXQgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gKChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmFuZ2VfcGN0KSAvIDEwMCkgKiByZXN0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gcmVzdCBsZWZ0IGFzIHRoZSByZXN0IGZpdHMgaW4gY3VycmVudCByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZXN0X2ZhY3RvciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSBhYnNfZGlzdGFuY2VfY291bnRlciAtIHJlbF9yYW5nZV9kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGltaXQgcmFuZ2UgdG8gZmlyc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWluaW11bSByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCArIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VfY291bnRlci0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyICsgcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBsYXN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1heGltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueFBjdC5sZW5ndGggLSByYW5nZV9jb3VudGVyID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXN0IG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgICAgIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgYWJzX2Rpc3RhbmNlX2NvdW50ZXI7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS50b1N0ZXBwaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvU3RlcHBpbmcodGhpcy54VmFsLCB0aGlzLnhQY3QsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmZyb21TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBnZXRTdGVwKHRoaXMueFBjdCwgdGhpcy54U3RlcHMsIHRoaXMuc25hcCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0RGVmYXVsdFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUsIGlzRG93biwgc2l6ZSkge1xuICAgICAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICAgICAgLy8gV2hlbiBhdCB0aGUgdG9wIG9yIHN0ZXBwaW5nIGRvd24sIGxvb2sgYXQgdGhlIHByZXZpb3VzIHN1Yi1yYW5nZVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAxMDAgfHwgKGlzRG93biAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W2ogLSAxXSkpIHtcbiAgICAgICAgICAgICAgICBqID0gTWF0aC5tYXgoaiAtIDEsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnhWYWxbal0gLSB0aGlzLnhWYWxbaiAtIDFdKSAvIHNpemU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXROZWFyYnlTdGVwcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGVwQmVmb3JlOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMl0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2ogLSAyXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDJdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzU3RlcDoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbaiAtIDFdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAxXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RlcEFmdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbal0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2pdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmNvdW50U3RlcERlY2ltYWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHRoaXMueE51bVN0ZXBzLm1hcChjb3VudERlY2ltYWxzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBzdGVwRGVjaW1hbHMpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFzTm9TaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMueFZhbFswXSA9PT0gdGhpcy54VmFsW3RoaXMueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gT3V0c2lkZSB0ZXN0aW5nXG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGVwKHRoaXMudG9TdGVwcGluZyh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlRW50cnlQb2ludCA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlO1xuICAgICAgICAgICAgLy8gQ292ZXJ0IG1pbi9tYXggc3ludGF4IHRvIDAgYW5kIDEwMC5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IHBhcnNlRmxvYXQoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGNvcnJlY3QgaW5wdXQuXG4gICAgICAgICAgICBpZiAoIWlzTnVtZXJpYyhwZXJjZW50YWdlKSB8fCAhaXNOdW1lcmljKHZhbHVlWzBdKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdyYW5nZScgdmFsdWUgaXNuJ3QgbnVtZXJpYy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdG9yZSB2YWx1ZXMuXG4gICAgICAgICAgICB0aGlzLnhQY3QucHVzaChwZXJjZW50YWdlKTtcbiAgICAgICAgICAgIHRoaXMueFZhbC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZTEgPSBOdW1iZXIodmFsdWVbMV0pO1xuICAgICAgICAgICAgLy8gTmFOIHdpbGwgZXZhbHVhdGUgdG8gZmFsc2UgdG9vLCBidXQgdG8ga2VlcFxuICAgICAgICAgICAgLy8gbG9nZ2luZyBjbGVhciwgc2V0IHN0ZXAgZXhwbGljaXRseS4gTWFrZSBzdXJlXG4gICAgICAgICAgICAvLyBub3QgdG8gb3ZlcnJpZGUgdGhlICdzdGVwJyBzZXR0aW5nIHdpdGggZmFsc2UuXG4gICAgICAgICAgICBpZiAoIXBlcmNlbnRhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhbHVlMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54U3RlcHNbMF0gPSB2YWx1ZTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3RlcHMucHVzaChpc05hTih2YWx1ZTEpID8gZmFsc2UgOiB2YWx1ZTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcC5wdXNoKDApO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlU3RlcFBvaW50ID0gZnVuY3Rpb24gKGksIG4pIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSAnZmFsc2UnIHN0ZXBwaW5nLlxuICAgICAgICAgICAgaWYgKCFuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XG4gICAgICAgICAgICBpZiAodGhpcy54VmFsW2ldID09PSB0aGlzLnhWYWxbaSArIDFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3RlcHNbaV0gPSB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gdGhpcy54VmFsW2ldO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZhY3RvciB0byByYW5nZSByYXRpb1xuICAgICAgICAgICAgdGhpcy54U3RlcHNbaV0gPVxuICAgICAgICAgICAgICAgIGZyb21QZXJjZW50YWdlKFt0aGlzLnhWYWxbaV0sIHRoaXMueFZhbFtpICsgMV1dLCBuLCAwKSAvIHN1YlJhbmdlUmF0aW8odGhpcy54UGN0W2ldLCB0aGlzLnhQY3RbaSArIDFdKTtcbiAgICAgICAgICAgIHZhciB0b3RhbFN0ZXBzID0gKHRoaXMueFZhbFtpICsgMV0gLSB0aGlzLnhWYWxbaV0pIC8gdGhpcy54TnVtU3RlcHNbaV07XG4gICAgICAgICAgICB2YXIgaGlnaGVzdFN0ZXAgPSBNYXRoLmNlaWwoTnVtYmVyKHRvdGFsU3RlcHMudG9GaXhlZCgzKSkgLSAxKTtcbiAgICAgICAgICAgIHZhciBzdGVwID0gdGhpcy54VmFsW2ldICsgdGhpcy54TnVtU3RlcHNbaV0gKiBoaWdoZXN0U3RlcDtcbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSBzdGVwO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gU3BlY3RydW07XG4gICAgfSgpKTtcbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIE9wdGlvbnNcbiAgICAvKlx0RXZlcnkgaW5wdXQgb3B0aW9uIGlzIHRlc3RlZCBhbmQgcGFyc2VkLiBUaGlzIHdpbGwgcHJldmVudFxuICAgICAgICBlbmRsZXNzIHZhbGlkYXRpb24gaW4gaW50ZXJuYWwgbWV0aG9kcy4gVGhlc2UgdGVzdHMgYXJlXG4gICAgICAgIHN0cnVjdHVyZWQgd2l0aCBhbiBpdGVtIGZvciBldmVyeSBvcHRpb24gYXZhaWxhYmxlLiBBblxuICAgICAgICBvcHRpb24gY2FuIGJlIG1hcmtlZCBhcyByZXF1aXJlZCBieSBzZXR0aW5nIHRoZSAncicgZmxhZy5cbiAgICAgICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gICAgICAgICAgICAtIFRoZSBwcm92aWRlZCB2YWx1ZSBmb3IgdGhlIG9wdGlvbjtcbiAgICAgICAgICAgIC0gQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgb2JqZWN0O1xuICAgICAgICAgICAgLSBUaGUgbmFtZSBmb3IgdGhlIG9wdGlvbjtcblxuICAgICAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHdoZW4gYW4gZXJyb3IgaXMgZGV0ZWN0ZWQsXG4gICAgICAgIG9yIHRydWUgd2hlbiBldmVyeXRoaW5nIGlzIE9LLiBJdCBjYW4gYWxzbyBtb2RpZnkgdGhlIG9wdGlvblxuICAgICAgICBvYmplY3QsIHRvIG1ha2Ugc3VyZSBhbGwgdmFsdWVzIGNhbiBiZSBjb3JyZWN0bHkgbG9vcGVkIGVsc2V3aGVyZS4gKi9cbiAgICAvL3JlZ2lvbiBEZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0Rm9ybWF0dGVyID0ge1xuICAgICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiB2YWx1ZS50b0ZpeGVkKDIpO1xuICAgICAgICB9LFxuICAgICAgICBmcm9tOiBOdW1iZXJcbiAgICB9O1xuICAgIHZhciBjc3NDbGFzc2VzID0ge1xuICAgICAgICB0YXJnZXQ6IFwidGFyZ2V0XCIsXG4gICAgICAgIGJhc2U6IFwiYmFzZVwiLFxuICAgICAgICBvcmlnaW46IFwib3JpZ2luXCIsXG4gICAgICAgIGhhbmRsZTogXCJoYW5kbGVcIixcbiAgICAgICAgaGFuZGxlTG93ZXI6IFwiaGFuZGxlLWxvd2VyXCIsXG4gICAgICAgIGhhbmRsZVVwcGVyOiBcImhhbmRsZS11cHBlclwiLFxuICAgICAgICB0b3VjaEFyZWE6IFwidG91Y2gtYXJlYVwiLFxuICAgICAgICBob3Jpem9udGFsOiBcImhvcml6b250YWxcIixcbiAgICAgICAgdmVydGljYWw6IFwidmVydGljYWxcIixcbiAgICAgICAgYmFja2dyb3VuZDogXCJiYWNrZ3JvdW5kXCIsXG4gICAgICAgIGNvbm5lY3Q6IFwiY29ubmVjdFwiLFxuICAgICAgICBjb25uZWN0czogXCJjb25uZWN0c1wiLFxuICAgICAgICBsdHI6IFwibHRyXCIsXG4gICAgICAgIHJ0bDogXCJydGxcIixcbiAgICAgICAgdGV4dERpcmVjdGlvbkx0cjogXCJ0eHQtZGlyLWx0clwiLFxuICAgICAgICB0ZXh0RGlyZWN0aW9uUnRsOiBcInR4dC1kaXItcnRsXCIsXG4gICAgICAgIGRyYWdnYWJsZTogXCJkcmFnZ2FibGVcIixcbiAgICAgICAgZHJhZzogXCJzdGF0ZS1kcmFnXCIsXG4gICAgICAgIHRhcDogXCJzdGF0ZS10YXBcIixcbiAgICAgICAgYWN0aXZlOiBcImFjdGl2ZVwiLFxuICAgICAgICB0b29sdGlwOiBcInRvb2x0aXBcIixcbiAgICAgICAgcGlwczogXCJwaXBzXCIsXG4gICAgICAgIHBpcHNIb3Jpem9udGFsOiBcInBpcHMtaG9yaXpvbnRhbFwiLFxuICAgICAgICBwaXBzVmVydGljYWw6IFwicGlwcy12ZXJ0aWNhbFwiLFxuICAgICAgICBtYXJrZXI6IFwibWFya2VyXCIsXG4gICAgICAgIG1hcmtlckhvcml6b250YWw6IFwibWFya2VyLWhvcml6b250YWxcIixcbiAgICAgICAgbWFya2VyVmVydGljYWw6IFwibWFya2VyLXZlcnRpY2FsXCIsXG4gICAgICAgIG1hcmtlck5vcm1hbDogXCJtYXJrZXItbm9ybWFsXCIsXG4gICAgICAgIG1hcmtlckxhcmdlOiBcIm1hcmtlci1sYXJnZVwiLFxuICAgICAgICBtYXJrZXJTdWI6IFwibWFya2VyLXN1YlwiLFxuICAgICAgICB2YWx1ZTogXCJ2YWx1ZVwiLFxuICAgICAgICB2YWx1ZUhvcml6b250YWw6IFwidmFsdWUtaG9yaXpvbnRhbFwiLFxuICAgICAgICB2YWx1ZVZlcnRpY2FsOiBcInZhbHVlLXZlcnRpY2FsXCIsXG4gICAgICAgIHZhbHVlTm9ybWFsOiBcInZhbHVlLW5vcm1hbFwiLFxuICAgICAgICB2YWx1ZUxhcmdlOiBcInZhbHVlLWxhcmdlXCIsXG4gICAgICAgIHZhbHVlU3ViOiBcInZhbHVlLXN1YlwiXG4gICAgfTtcbiAgICAvLyBOYW1lc3BhY2VzIG9mIGludGVybmFsIGV2ZW50IGxpc3RlbmVyc1xuICAgIHZhciBJTlRFUk5BTF9FVkVOVF9OUyA9IHtcbiAgICAgICAgdG9vbHRpcHM6IFwiLl9fdG9vbHRpcHNcIixcbiAgICAgICAgYXJpYTogXCIuX19hcmlhXCJcbiAgICB9O1xuICAgIC8vZW5kcmVnaW9uXG4gICAgZnVuY3Rpb24gdGVzdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHN0ZXAgb3B0aW9uIGNhbiBzdGlsbCBiZSB1c2VkIHRvIHNldCBzdGVwcGluZ1xuICAgICAgICAvLyBmb3IgbGluZWFyIHNsaWRlcnMuIE92ZXJ3cml0dGVuIGlmIHNldCBpbiAncmFuZ2UnLlxuICAgICAgICBwYXJzZWQuc2luZ2xlU3RlcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRQYWdlTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkUGFnZU11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRQYWdlTXVsdGlwbGllciA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRNdWx0aXBsaWVyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkTXVsdGlwbGllciA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmREZWZhdWx0U3RlcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkRGVmYXVsdFN0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmREZWZhdWx0U3RlcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UmFuZ2UocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBGaWx0ZXIgaW5jb3JyZWN0IGlucHV0LlxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIGlzIG5vdCBhbiBvYmplY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdGNoIG1pc3Npbmcgc3RhcnQgb3IgZW5kLlxuICAgICAgICBpZiAoZW50cnkubWluID09PSB1bmRlZmluZWQgfHwgZW50cnkubWF4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IE1pc3NpbmcgJ21pbicgb3IgJ21heCcgaW4gJ3JhbmdlJy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLnNwZWN0cnVtID0gbmV3IFNwZWN0cnVtKGVudHJ5LCBwYXJzZWQuc25hcCB8fCBmYWxzZSwgcGFyc2VkLnNpbmdsZVN0ZXApO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U3RhcnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBlbnRyeSA9IGFzQXJyYXkoZW50cnkpO1xuICAgICAgICAvLyBWYWxpZGF0ZSBpbnB1dC4gVmFsdWVzIGFyZW4ndCB0ZXN0ZWQsIGFzIHRoZSBwdWJsaWMgLnZhbCBtZXRob2RcbiAgICAgICAgLy8gd2lsbCBhbHdheXMgcHJvdmlkZSBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpIHx8ICFlbnRyeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzdGFydCcgb3B0aW9uIGlzIGluY29ycmVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RvcmUgdGhlIG51bWJlciBvZiBoYW5kbGVzLlxuICAgICAgICBwYXJzZWQuaGFuZGxlcyA9IGVudHJ5Lmxlbmd0aDtcbiAgICAgICAgLy8gV2hlbiB0aGUgc2xpZGVyIGlzIGluaXRpYWxpemVkLCB0aGUgLnZhbCBtZXRob2Qgd2lsbFxuICAgICAgICAvLyBiZSBjYWxsZWQgd2l0aCB0aGUgc3RhcnQgb3B0aW9ucy5cbiAgICAgICAgcGFyc2VkLnN0YXJ0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RTbmFwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzbmFwJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgICAgICBwYXJzZWQuc25hcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QW5pbWF0ZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYW5pbWF0ZScgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICAgICAgcGFyc2VkLmFuaW1hdGUgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFuaW1hdGlvbkR1cmF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGlvbkR1cmF0aW9uJyBvcHRpb24gbXVzdCBiZSBhIG51bWJlci5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmFuaW1hdGlvbkR1cmF0aW9uID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDb25uZWN0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgdmFyIGNvbm5lY3QgPSBbZmFsc2VdO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgLy8gTWFwIGxlZ2FjeSBvcHRpb25zXG4gICAgICAgIGlmIChlbnRyeSA9PT0gXCJsb3dlclwiKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFt0cnVlLCBmYWxzZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW50cnkgPT09IFwidXBwZXJcIikge1xuICAgICAgICAgICAgZW50cnkgPSBbZmFsc2UsIHRydWVdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBib29sZWFuIG9wdGlvbnNcbiAgICAgICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29ubmVjdC5wdXNoKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWplY3QgaW52YWxpZCBpbnB1dFxuICAgICAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCB8fCBlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzICsgMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nvbm5lY3QnIG9wdGlvbiBkb2Vzbid0IG1hdGNoIGhhbmRsZSBjb3VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25uZWN0ID0gZW50cnk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmNvbm5lY3QgPSBjb25uZWN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0T3JpZW50YXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBTZXQgb3JpZW50YXRpb24gdG8gYW4gYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3lcbiAgICAgICAgLy8gYXJyYXkgc2VsZWN0aW9uLlxuICAgICAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInZlcnRpY2FsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLm9ydCA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdvcmllbnRhdGlvbicgb3B0aW9uIGlzIGludmFsaWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RNYXJnaW4ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdtYXJnaW4nIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElzc3VlICM1ODJcbiAgICAgICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLm1hcmdpbiA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RMaW1pdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2xpbWl0JyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQubGltaXQgPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgICAgICBpZiAoIXBhcnNlZC5saW1pdCB8fCBwYXJzZWQuaGFuZGxlcyA8IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIGlzIG9ubHkgc3VwcG9ydGVkIG9uIGxpbmVhciBzbGlkZXJzIHdpdGggMiBvciBtb3JlIGhhbmRsZXMuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RQYWRkaW5nKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkgJiYgIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpICYmICEoZW50cnkubGVuZ3RoID09PSAyIHx8IGlzTnVtZXJpYyhlbnRyeVswXSkgfHwgaXNOdW1lcmljKGVudHJ5WzFdKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBudW1lcmljIG9yIGFycmF5IG9mIGV4YWN0bHkgMiBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFtlbnRyeSwgZW50cnldO1xuICAgICAgICB9XG4gICAgICAgIC8vICdnZXREaXN0YW5jZScgcmV0dXJucyBmYWxzZSBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgICAgIHBhcnNlZC5wYWRkaW5nID0gW3BhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVswXSksIHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVsxXSldO1xuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBwYXJzZWQuc3BlY3RydW0ueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgIC8vIGxhc3QgXCJyYW5nZVwiIGNhbid0IGNvbnRhaW4gc3RlcCBzaXplIGFzIGl0IGlzIHB1cmVseSBhbiBlbmRwb2ludC5cbiAgICAgICAgICAgIGlmIChwYXJzZWQucGFkZGluZ1swXVtpbmRleF0gPCAwIHx8IHBhcnNlZC5wYWRkaW5nWzFdW2luZGV4XSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIocykuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB0b3RhbFBhZGRpbmcgPSBlbnRyeVswXSArIGVudHJ5WzFdO1xuICAgICAgICB2YXIgZmlyc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICB2YXIgbGFzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbcGFyc2VkLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0b3RhbFBhZGRpbmcgLyAobGFzdFZhbHVlIC0gZmlyc3RWYWx1ZSkgPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3Qgbm90IGV4Y2VlZCAxMDAlIG9mIHRoZSByYW5nZS5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdERpcmVjdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFNldCBkaXJlY3Rpb24gYXMgYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3kgcGFyc2luZy5cbiAgICAgICAgLy8gSW52ZXJ0IGNvbm5lY3Rpb24gZm9yIFJUTCBzbGlkZXJzLCBzbyB0aGF0IHRoZSBwcm9wZXJcbiAgICAgICAgLy8gaGFuZGxlcyBnZXQgdGhlIGNvbm5lY3QvYmFja2dyb3VuZCBjbGFzc2VzLlxuICAgICAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgICAgICBjYXNlIFwibHRyXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLmRpciA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicnRsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLmRpciA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdkaXJlY3Rpb24nIG9wdGlvbiB3YXMgbm90IHJlY29nbml6ZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RCZWhhdmlvdXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGlucHV0IGlzIGEgc3RyaW5nLlxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYmVoYXZpb3VyJyBtdXN0IGJlIGEgc3RyaW5nIGNvbnRhaW5pbmcgb3B0aW9ucy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHN0cmluZyBjb250YWlucyBhbnkga2V5d29yZHMuXG4gICAgICAgIC8vIE5vbmUgYXJlIHJlcXVpcmVkLlxuICAgICAgICB2YXIgdGFwID0gZW50cnkuaW5kZXhPZihcInRhcFwiKSA+PSAwO1xuICAgICAgICB2YXIgZHJhZyA9IGVudHJ5LmluZGV4T2YoXCJkcmFnXCIpID49IDA7XG4gICAgICAgIHZhciBmaXhlZCA9IGVudHJ5LmluZGV4T2YoXCJmaXhlZFwiKSA+PSAwO1xuICAgICAgICB2YXIgc25hcCA9IGVudHJ5LmluZGV4T2YoXCJzbmFwXCIpID49IDA7XG4gICAgICAgIHZhciBob3ZlciA9IGVudHJ5LmluZGV4T2YoXCJob3ZlclwiKSA+PSAwO1xuICAgICAgICB2YXIgdW5jb25zdHJhaW5lZCA9IGVudHJ5LmluZGV4T2YoXCJ1bmNvbnN0cmFpbmVkXCIpID49IDA7XG4gICAgICAgIHZhciBkcmFnQWxsID0gZW50cnkuaW5kZXhPZihcImRyYWctYWxsXCIpID49IDA7XG4gICAgICAgIGlmIChmaXhlZCkge1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5oYW5kbGVzICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2ZpeGVkJyBiZWhhdmlvdXIgbXVzdCBiZSB1c2VkIHdpdGggMiBoYW5kbGVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXNlIG1hcmdpbiB0byBlbmZvcmNlIGZpeGVkIHN0YXRlXG4gICAgICAgICAgICB0ZXN0TWFyZ2luKHBhcnNlZCwgcGFyc2VkLnN0YXJ0WzFdIC0gcGFyc2VkLnN0YXJ0WzBdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5jb25zdHJhaW5lZCAmJiAocGFyc2VkLm1hcmdpbiB8fCBwYXJzZWQubGltaXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndW5jb25zdHJhaW5lZCcgYmVoYXZpb3VyIGNhbm5vdCBiZSB1c2VkIHdpdGggbWFyZ2luIG9yIGxpbWl0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5ldmVudHMgPSB7XG4gICAgICAgICAgICB0YXA6IHRhcCB8fCBzbmFwLFxuICAgICAgICAgICAgZHJhZzogZHJhZyxcbiAgICAgICAgICAgIGRyYWdBbGw6IGRyYWdBbGwsXG4gICAgICAgICAgICBmaXhlZDogZml4ZWQsXG4gICAgICAgICAgICBzbmFwOiBzbmFwLFxuICAgICAgICAgICAgaG92ZXI6IGhvdmVyLFxuICAgICAgICAgICAgdW5jb25zdHJhaW5lZDogdW5jb25zdHJhaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0VG9vbHRpcHMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnRyeSA9IGFzQXJyYXkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBmb3JtYXR0ZXIgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudHJ5LmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm9ybWF0dGVyICE9PSBcImJvb2xlYW5cIiAmJiAhaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZm9ybWF0dGVyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndG9vbHRpcHMnIG11c3QgYmUgcGFzc2VkIGEgZm9ybWF0dGVyIG9yICdmYWxzZScuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzID0gZW50cnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEhhbmRsZUF0dHJpYnV0ZXMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgYXR0cmlidXRlcyBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5oYW5kbGVBdHRyaWJ1dGVzID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBcmlhRm9ybWF0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhcmlhRm9ybWF0JyByZXF1aXJlcyAndG8nIG1ldGhvZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmFyaWFGb3JtYXQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmb3JtYXQnIHJlcXVpcmVzICd0bycgYW5kICdmcm9tJyBtZXRob2RzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuZm9ybWF0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZFN1cHBvcnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkU3VwcG9ydCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRTdXBwb3J0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3REb2N1bWVudEVsZW1lbnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBUaGlzIGlzIGFuIGFkdmFuY2VkIG9wdGlvbi4gUGFzc2VkIHZhbHVlcyBhcmUgdXNlZCB3aXRob3V0IHZhbGlkYXRpb24uXG4gICAgICAgIHBhcnNlZC5kb2N1bWVudEVsZW1lbnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENzc1ByZWZpeChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIgJiYgZW50cnkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY3NzUHJlZml4JyBtdXN0IGJlIGEgc3RyaW5nIG9yIGBmYWxzZWAuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5jc3NQcmVmaXggPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENzc0NsYXNzZXMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY3NzQ2xhc3NlcycgbXVzdCBiZSBhbiBvYmplY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VkLmNzc1ByZWZpeCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3Nlc1trZXldID0gcGFyc2VkLmNzc1ByZWZpeCArIGVudHJ5W2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0gZW50cnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGVzdCBhbGwgZGV2ZWxvcGVyIHNldHRpbmdzIGFuZCBwYXJzZSB0byBhc3N1bXB0aW9uLXNhZmUgdmFsdWVzLlxuICAgIGZ1bmN0aW9uIHRlc3RPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gVG8gcHJvdmUgYSBmaXggZm9yICM1MzcsIGZyZWV6ZSBvcHRpb25zIGhlcmUuXG4gICAgICAgIC8vIElmIHRoZSBvYmplY3QgaXMgbW9kaWZpZWQsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICAgICAgICAvLyBPYmplY3QuZnJlZXplKG9wdGlvbnMpO1xuICAgICAgICB2YXIgcGFyc2VkID0ge1xuICAgICAgICAgICAgbWFyZ2luOiBudWxsLFxuICAgICAgICAgICAgbGltaXQ6IG51bGwsXG4gICAgICAgICAgICBwYWRkaW5nOiBudWxsLFxuICAgICAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBhcmlhRm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyLFxuICAgICAgICAgICAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyXG4gICAgICAgIH07XG4gICAgICAgIC8vIFRlc3RzIGFyZSBleGVjdXRlZCBpbiB0aGUgb3JkZXIgdGhleSBhcmUgcHJlc2VudGVkIGhlcmUuXG4gICAgICAgIHZhciB0ZXN0cyA9IHtcbiAgICAgICAgICAgIHN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTdGVwIH0sXG4gICAgICAgICAgICBrZXlib2FyZFBhZ2VNdWx0aXBsaWVyOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmRQYWdlTXVsdGlwbGllciB9LFxuICAgICAgICAgICAga2V5Ym9hcmRNdWx0aXBsaWVyOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmRNdWx0aXBsaWVyIH0sXG4gICAgICAgICAgICBrZXlib2FyZERlZmF1bHRTdGVwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmREZWZhdWx0U3RlcCB9LFxuICAgICAgICAgICAgc3RhcnQ6IHsgcjogdHJ1ZSwgdDogdGVzdFN0YXJ0IH0sXG4gICAgICAgICAgICBjb25uZWN0OiB7IHI6IHRydWUsIHQ6IHRlc3RDb25uZWN0IH0sXG4gICAgICAgICAgICBkaXJlY3Rpb246IHsgcjogdHJ1ZSwgdDogdGVzdERpcmVjdGlvbiB9LFxuICAgICAgICAgICAgc25hcDogeyByOiBmYWxzZSwgdDogdGVzdFNuYXAgfSxcbiAgICAgICAgICAgIGFuaW1hdGU6IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRlIH0sXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogeyByOiBmYWxzZSwgdDogdGVzdEFuaW1hdGlvbkR1cmF0aW9uIH0sXG4gICAgICAgICAgICByYW5nZTogeyByOiB0cnVlLCB0OiB0ZXN0UmFuZ2UgfSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0T3JpZW50YXRpb24gfSxcbiAgICAgICAgICAgIG1hcmdpbjogeyByOiBmYWxzZSwgdDogdGVzdE1hcmdpbiB9LFxuICAgICAgICAgICAgbGltaXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RMaW1pdCB9LFxuICAgICAgICAgICAgcGFkZGluZzogeyByOiBmYWxzZSwgdDogdGVzdFBhZGRpbmcgfSxcbiAgICAgICAgICAgIGJlaGF2aW91cjogeyByOiB0cnVlLCB0OiB0ZXN0QmVoYXZpb3VyIH0sXG4gICAgICAgICAgICBhcmlhRm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0QXJpYUZvcm1hdCB9LFxuICAgICAgICAgICAgZm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0Rm9ybWF0IH0sXG4gICAgICAgICAgICB0b29sdGlwczogeyByOiBmYWxzZSwgdDogdGVzdFRvb2x0aXBzIH0sXG4gICAgICAgICAgICBrZXlib2FyZFN1cHBvcnQ6IHsgcjogdHJ1ZSwgdDogdGVzdEtleWJvYXJkU3VwcG9ydCB9LFxuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50OiB7IHI6IGZhbHNlLCB0OiB0ZXN0RG9jdW1lbnRFbGVtZW50IH0sXG4gICAgICAgICAgICBjc3NQcmVmaXg6IHsgcjogdHJ1ZSwgdDogdGVzdENzc1ByZWZpeCB9LFxuICAgICAgICAgICAgY3NzQ2xhc3NlczogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzQ2xhc3NlcyB9LFxuICAgICAgICAgICAgaGFuZGxlQXR0cmlidXRlczogeyByOiBmYWxzZSwgdDogdGVzdEhhbmRsZUF0dHJpYnV0ZXMgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjb25uZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICAgICAgICAgIGJlaGF2aW91cjogXCJ0YXBcIixcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc1ByZWZpeDogXCJub1VpLVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IDUsXG4gICAgICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBrZXlib2FyZERlZmF1bHRTdGVwOiAxMFxuICAgICAgICB9O1xuICAgICAgICAvLyBBcmlhRm9ybWF0IGRlZmF1bHRzIHRvIHJlZ3VsYXIgZm9ybWF0LCBpZiBhbnkuXG4gICAgICAgIGlmIChvcHRpb25zLmZvcm1hdCAmJiAhb3B0aW9ucy5hcmlhRm9ybWF0KSB7XG4gICAgICAgICAgICBvcHRpb25zLmFyaWFGb3JtYXQgPSBvcHRpb25zLmZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBSdW4gYWxsIG9wdGlvbnMgdGhyb3VnaCBhIHRlc3RpbmcgbWVjaGFuaXNtIHRvIGVuc3VyZSBjb3JyZWN0XG4gICAgICAgIC8vIGlucHV0LiBJdCBzaG91bGQgYmUgbm90ZWQgdGhhdCBvcHRpb25zIG1pZ2h0IGdldCBtb2RpZmllZCB0b1xuICAgICAgICAvLyBiZSBoYW5kbGVkIHByb3Blcmx5LiBFLmcuIHdyYXBwaW5nIGludGVnZXJzIGluIGFycmF5cy5cbiAgICAgICAgT2JqZWN0LmtleXModGVzdHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb24gaXNuJ3Qgc2V0LCBidXQgaXQgaXMgcmVxdWlyZWQsIHRocm93IGFuIGVycm9yLlxuICAgICAgICAgICAgaWYgKCFpc1NldChvcHRpb25zW25hbWVdKSAmJiBkZWZhdWx0c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3RzW25hbWVdLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ1wiICsgbmFtZSArIFwiJyBpcyByZXF1aXJlZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlc3RzW25hbWVdLnQocGFyc2VkLCAhaXNTZXQob3B0aW9uc1tuYW1lXSkgPyBkZWZhdWx0c1tuYW1lXSA6IG9wdGlvbnNbbmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRm9yd2FyZCBwaXBzIG9wdGlvbnNcbiAgICAgICAgcGFyc2VkLnBpcHMgPSBvcHRpb25zLnBpcHM7XG4gICAgICAgIC8vIEFsbCByZWNlbnQgYnJvd3NlcnMgYWNjZXB0IHVucHJlZml4ZWQgdHJhbnNmb3JtLlxuICAgICAgICAvLyBXZSBuZWVkIC1tcy0gZm9yIElFOSBhbmQgLXdlYmtpdC0gZm9yIG9sZGVyIEFuZHJvaWQ7XG4gICAgICAgIC8vIEFzc3VtZSB1c2Ugb2YgLXdlYmtpdC0gaWYgdW5wcmVmaXhlZCBhbmQgLW1zLSBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD10cmFuc2Zvcm1zMmRcbiAgICAgICAgdmFyIGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbXNQcmVmaXggPSBkLnN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBub1ByZWZpeCA9IGQuc3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHBhcnNlZC50cmFuc2Zvcm1SdWxlID0gbm9QcmVmaXggPyBcInRyYW5zZm9ybVwiIDogbXNQcmVmaXggPyBcIm1zVHJhbnNmb3JtXCIgOiBcIndlYmtpdFRyYW5zZm9ybVwiO1xuICAgICAgICAvLyBQaXBzIGRvbid0IG1vdmUsIHNvIHdlIGNhbiBwbGFjZSB0aGVtIHVzaW5nIGxlZnQvdG9wLlxuICAgICAgICB2YXIgc3R5bGVzID0gW1xuICAgICAgICAgICAgW1wibGVmdFwiLCBcInRvcFwiXSxcbiAgICAgICAgICAgIFtcInJpZ2h0XCIsIFwiYm90dG9tXCJdXG4gICAgICAgIF07XG4gICAgICAgIHBhcnNlZC5zdHlsZSA9IHN0eWxlc1twYXJzZWQuZGlyXVtwYXJzZWQub3J0XTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICBmdW5jdGlvbiBzY29wZSh0YXJnZXQsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucykge1xuICAgICAgICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgICAgICAgdmFyIHN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lID0gZ2V0U3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUoKTtcbiAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IHN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lICYmIGdldFN1cHBvcnRzUGFzc2l2ZSgpO1xuICAgICAgICAvLyBBbGwgdmFyaWFibGVzIGxvY2FsIHRvICdzY29wZScgYXJlIHByZWZpeGVkIHdpdGggJ3Njb3BlXydcbiAgICAgICAgLy8gU2xpZGVyIERPTSBOb2Rlc1xuICAgICAgICB2YXIgc2NvcGVfVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB2YXIgc2NvcGVfQmFzZTtcbiAgICAgICAgdmFyIHNjb3BlX0hhbmRsZXM7XG4gICAgICAgIHZhciBzY29wZV9Db25uZWN0cztcbiAgICAgICAgdmFyIHNjb3BlX1BpcHM7XG4gICAgICAgIHZhciBzY29wZV9Ub29sdGlwcztcbiAgICAgICAgLy8gU2xpZGVyIHN0YXRlIHZhbHVlc1xuICAgICAgICB2YXIgc2NvcGVfU3BlY3RydW0gPSBvcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICB2YXIgc2NvcGVfVmFsdWVzID0gW107XG4gICAgICAgIHZhciBzY29wZV9Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0hhbmRsZU51bWJlcnMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCA9IDA7XG4gICAgICAgIHZhciBzY29wZV9FdmVudHMgPSB7fTtcbiAgICAgICAgLy8gRG9jdW1lbnQgTm9kZXNcbiAgICAgICAgdmFyIHNjb3BlX0RvY3VtZW50ID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIHZhciBzY29wZV9Eb2N1bWVudEVsZW1lbnQgPSBvcHRpb25zLmRvY3VtZW50RWxlbWVudCB8fCBzY29wZV9Eb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBzY29wZV9Cb2R5ID0gc2NvcGVfRG9jdW1lbnQuYm9keTtcbiAgICAgICAgLy8gRm9yIGhvcml6b250YWwgc2xpZGVycyBpbiBzdGFuZGFyZCBsdHIgZG9jdW1lbnRzLFxuICAgICAgICAvLyBtYWtlIC5ub1VpLW9yaWdpbiBvdmVyZmxvdyB0byB0aGUgbGVmdCBzbyB0aGUgZG9jdW1lbnQgZG9lc24ndCBzY3JvbGwuXG4gICAgICAgIHZhciBzY29wZV9EaXJPZmZzZXQgPSBzY29wZV9Eb2N1bWVudC5kaXIgPT09IFwicnRsXCIgfHwgb3B0aW9ucy5vcnQgPT09IDEgPyAwIDogMTAwO1xuICAgICAgICAvLyBDcmVhdGVzIGEgbm9kZSwgYWRkcyBpdCB0byB0YXJnZXQsIHJldHVybnMgdGhlIG5ldyBub2RlLlxuICAgICAgICBmdW5jdGlvbiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZhciBkaXYgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFRhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgYSBvcmlnaW4gdG8gdGhlIGJhc2VcbiAgICAgICAgZnVuY3Rpb24gYWRkT3JpZ2luKGJhc2UsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIG9yaWdpbiA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMub3JpZ2luKTtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBhZGROb2RlVG8ob3JpZ2luLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlKTtcbiAgICAgICAgICAgIGFkZE5vZGVUbyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50b3VjaEFyZWEpO1xuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImRhdGEtaGFuZGxlXCIsIFN0cmluZyhoYW5kbGVOdW1iZXIpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmtleWJvYXJkU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvR2xvYmFsX2F0dHJpYnV0ZXMvdGFiaW5kZXhcbiAgICAgICAgICAgICAgICAvLyAwID0gZm9jdXNhYmxlIGFuZCByZWFjaGFibGVcbiAgICAgICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhbmRsZUF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzXzEgPSBvcHRpb25zLmhhbmRsZUF0dHJpYnV0ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzXzEpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc18xW2F0dHJpYnV0ZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJzbGlkZXJcIik7XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1vcmllbnRhdGlvblwiLCBvcHRpb25zLm9ydCA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVMb3dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChoYW5kbGVOdW1iZXIgPT09IG9wdGlvbnMuaGFuZGxlcyAtIDEpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVVcHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluc2VydCBub2RlcyBmb3IgY29ubmVjdCBlbGVtZW50c1xuICAgICAgICBmdW5jdGlvbiBhZGRDb25uZWN0KGJhc2UsIGFkZCkge1xuICAgICAgICAgICAgaWYgKCFhZGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5jb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgaGFuZGxlcyB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgICAgIGZ1bmN0aW9uIGFkZEVsZW1lbnRzKGNvbm5lY3RPcHRpb25zLCBiYXNlKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdEJhc2UgPSBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3RzKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMgPSBbXTtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzID0gW107XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3QoY29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zWzBdKSk7XG4gICAgICAgICAgICAvLyBbOjo6Ok89PT09Tz09PT1PPT09PV1cbiAgICAgICAgICAgIC8vIGNvbm5lY3RPcHRpb25zID0gWzAsIDEsIDEsIDFdXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gS2VlcCBhIGxpc3Qgb2YgYWxsIGFkZGVkIGhhbmRsZXMuXG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5wdXNoKGFkZE9yaWdpbihiYXNlLCBpKSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVyc1tpXSA9IGk7XG4gICAgICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMucHVzaChhZGRDb25uZWN0KGNvbm5lY3RCYXNlLCBjb25uZWN0T3B0aW9uc1tpICsgMV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJbml0aWFsaXplIGEgc2luZ2xlIHNsaWRlci5cbiAgICAgICAgZnVuY3Rpb24gYWRkU2xpZGVyKGFkZFRhcmdldCkge1xuICAgICAgICAgICAgLy8gQXBwbHkgY2xhc3NlcyBhbmQgZGF0YSB0byB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRpciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmx0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ydGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub3J0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuaG9yaXpvbnRhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52ZXJ0aWNhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGV4dERpcmVjdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoYWRkVGFyZ2V0KS5kaXJlY3Rpb247XG4gICAgICAgICAgICBpZiAodGV4dERpcmVjdGlvbiA9PT0gXCJydGxcIikge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRleHREaXJlY3Rpb25SdGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGV4dERpcmVjdGlvbkx0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmJhc2UpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZFRvb2x0aXAoaGFuZGxlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy50b29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhoYW5kbGUuZmlyc3RDaGlsZCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvb2x0aXApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzU2xpZGVyRGlzYWJsZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfVGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERpc2FibGUgdGhlIHNsaWRlciBkcmFnZ2luZyBpZiBhbnkgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgICAgIGZ1bmN0aW9uIGlzSGFuZGxlRGlzYWJsZWQoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlT3JpZ2luID0gc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU9yaWdpbi5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVUb29sdGlwcygpIHtcbiAgICAgICAgICAgIGlmIChzY29wZV9Ub29sdGlwcykge1xuICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMuZm9yRWFjaChmdW5jdGlvbiAodG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudCh0b29sdGlwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdG9vbHRpcHMgb3B0aW9uIGlzIGEgc2hvcnRoYW5kIGZvciB1c2luZyB0aGUgJ3VwZGF0ZScgZXZlbnQuXG4gICAgICAgIGZ1bmN0aW9uIHRvb2x0aXBzKCkge1xuICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgICAgICAgIC8vIFRvb2x0aXBzIGFyZSBhZGRlZCB3aXRoIG9wdGlvbnMudG9vbHRpcHMgaW4gb3JpZ2luYWwgb3JkZXIuXG4gICAgICAgICAgICBzY29wZV9Ub29sdGlwcyA9IHNjb3BlX0hhbmRsZXMubWFwKGFkZFRvb2x0aXApO1xuICAgICAgICAgICAgYmluZEV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcywgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNjb3BlX1Rvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IG9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXS50byh1bmVuY29kZWRbaGFuZGxlTnVtYmVyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0uaW5uZXJIVE1MID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhcmlhKCkge1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLmFyaWEpO1xuICAgICAgICAgICAgYmluZEV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCwgdGFwLCBwb3NpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgQXJpYSBWYWx1ZXMgZm9yIGFsbCBoYW5kbGVzLCBhcyBhIGNoYW5nZSBpbiBvbmUgY2hhbmdlcyBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIHRoZSBuZXh0LlxuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAwLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBpbmRleCwgMTAwLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdHRlZCB2YWx1ZSBmb3IgZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IFN0cmluZyhvcHRpb25zLmFyaWFGb3JtYXQudG8odW5lbmNvZGVkW2luZGV4XSkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXAgdG8gc2xpZGVyIHJhbmdlIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICBtaW4gPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobWluKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBtYXggPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobWF4KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBub3cgPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobm93KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW1pblwiLCBtaW4pO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW1heFwiLCBtYXgpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW5vd1wiLCBub3cpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIiwgdGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRHcm91cChwaXBzKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIHJhbmdlLlxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5SYW5nZSB8fCBwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuU3RlcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0ueFZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuQ291bnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGlwcy52YWx1ZXMgPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd2YWx1ZXMnICg+PSAyKSByZXF1aXJlZCBmb3IgbW9kZSAnY291bnQnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRGl2aWRlIDAgLSAxMDAgaW4gJ2NvdW50JyBwYXJ0cy5cbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBwaXBzLnZhbHVlcyAtIDE7XG4gICAgICAgICAgICAgICAgdmFyIHNwcmVhZCA9IDEwMCAvIGludGVydmFsO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBMaXN0IHRoZXNlIHBhcnRzIGFuZCBoYXZlIHRoZW0gaGFuZGxlZCBhcyAncG9zaXRpb25zJy5cbiAgICAgICAgICAgICAgICB3aGlsZSAoaW50ZXJ2YWwtLSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaW50ZXJ2YWxdID0gaW50ZXJ2YWwgKiBzcHJlYWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKDEwMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcFRvUmFuZ2UodmFsdWVzLCBwaXBzLnN0ZXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5Qb3NpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBNYXAgYWxsIHBlcmNlbnRhZ2VzIHRvIG9uLXJhbmdlIHZhbHVlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwVG9SYW5nZShwaXBzLnZhbHVlcywgcGlwcy5zdGVwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIG11c3QgYmUgc3RlcHBlZCwgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIGEgcGVyY2VudGFnZSBmaXJzdC5cbiAgICAgICAgICAgICAgICBpZiAocGlwcy5zdGVwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwaXBzLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRvIHBlcmNlbnRhZ2UsIGFwcGx5IHN0ZXAsIHJldHVybiB0byB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcoc2NvcGVfU3BlY3RydW0uZ2V0U3RlcChzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHZhbHVlKSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBjYW4gc2ltcGx5IHVzZSB0aGUgdmFsdWVzLlxuICAgICAgICAgICAgICAgIHJldHVybiBwaXBzLnZhbHVlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXTsgLy8gcGlwcy5tb2RlID0gbmV2ZXJcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYXBUb1JhbmdlKHZhbHVlcywgc3RlcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzdGVwcGVkID8gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh2YWx1ZSkgOiB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVNwcmVhZChwaXBzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBzYWZlSW5jcmVtZW50KHZhbHVlLCBpbmNyZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBBdm9pZCBmbG9hdGluZyBwb2ludCB2YXJpYW5jZSBieSBkcm9wcGluZyB0aGUgc21hbGxlc3QgZGVjaW1hbCBwbGFjZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcigodmFsdWUgKyBpbmNyZW1lbnQpLnRvRml4ZWQoNykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGdyb3VwID0gZ2V0R3JvdXAocGlwcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXhlcyA9IHt9O1xuICAgICAgICAgICAgdmFyIGZpcnN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgICAgICB2YXIgbGFzdEluUmFuZ2UgPSBzY29wZV9TcGVjdHJ1bS54VmFsW3Njb3BlX1NwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB2YXIgaWdub3JlRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVMYXN0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgcHJldlBjdCA9IDA7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBncm91cCwgc29ydCBpdCBhbmQgZmlsdGVyIGF3YXkgYWxsIGR1cGxpY2F0ZXMuXG4gICAgICAgICAgICBncm91cCA9IHVuaXF1ZShncm91cC5zbGljZSgpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHJhbmdlIHN0YXJ0cyB3aXRoIHRoZSBmaXJzdCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGdyb3VwWzBdICE9PSBmaXJzdEluUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBncm91cC51bnNoaWZ0KGZpcnN0SW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgaWdub3JlRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGlrZXdpc2UgZm9yIHRoZSBsYXN0IG9uZS5cbiAgICAgICAgICAgIGlmIChncm91cFtncm91cC5sZW5ndGggLSAxXSAhPT0gbGFzdEluUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBncm91cC5wdXNoKGxhc3RJblJhbmdlKTtcbiAgICAgICAgICAgICAgICBpZ25vcmVMYXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3VwLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgYW5kIHRoZSBsb3dlciArIHVwcGVyIHBvc2l0aW9ucy5cbiAgICAgICAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICB2YXIgcTtcbiAgICAgICAgICAgICAgICB2YXIgbG93ID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YXIgaGlnaCA9IGdyb3VwW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgdmFyIG5ld1BjdDtcbiAgICAgICAgICAgICAgICB2YXIgcGN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICB2YXIgcGN0UG9zO1xuICAgICAgICAgICAgICAgIHZhciB0eXBlO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwcztcbiAgICAgICAgICAgICAgICB2YXIgcmVhbFN0ZXBzO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICB2YXIgaXNTdGVwcyA9IHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5TdGVwcztcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHVzaW5nICdzdGVwcycgbW9kZSwgdXNlIHRoZSBwcm92aWRlZCBzdGVwcy5cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlJ2xsIHN0ZXAgb24gdG8gdGhlIG5leHQgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgaWYgKGlzU3RlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IHNjb3BlX1NwZWN0cnVtLnhOdW1TdGVwc1tpbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSAnZnVsbCcgc3RlcC5cbiAgICAgICAgICAgICAgICBpZiAoIXN0ZXApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IGhpZ2ggLSBsb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIGhpZ2ggaXMgdW5kZWZpbmVkIHdlIGFyZSBhdCB0aGUgbGFzdCBzdWJyYW5nZS4gTWFrZSBzdXJlIGl0IGl0ZXJhdGVzIG9uY2UgKCMxMDg4KVxuICAgICAgICAgICAgICAgIGlmIChoaWdoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlnaCA9IGxvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHN0ZXAgaXNuJ3QgMCwgd2hpY2ggd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcCAoIzY1NClcbiAgICAgICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIGFsbCBzdGVwcyBpbiB0aGUgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IGhpZ2g7IGkgPSBzYWZlSW5jcmVtZW50KGksIHN0ZXApKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgcGVyY2VudGFnZSB2YWx1ZSBmb3IgdGhlIGN1cnJlbnQgc3RlcCxcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBzaXplIGZvciB0aGUgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIG5ld1BjdCA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcoaSk7XG4gICAgICAgICAgICAgICAgICAgIHBjdERpZmZlcmVuY2UgPSBuZXdQY3QgLSBwcmV2UGN0O1xuICAgICAgICAgICAgICAgICAgICBzdGVwcyA9IHBjdERpZmZlcmVuY2UgLyAocGlwcy5kZW5zaXR5IHx8IDEpO1xuICAgICAgICAgICAgICAgICAgICByZWFsU3RlcHMgPSBNYXRoLnJvdW5kKHN0ZXBzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyByYXRpbyByZXByZXNlbnRzIHRoZSBhbW91bnQgb2YgcGVyY2VudGFnZS1zcGFjZSBhIHBvaW50IGluZGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGEgZGVuc2l0eSAxIHRoZSBwb2ludHMvcGVyY2VudGFnZSA9IDEuIEZvciBkZW5zaXR5IDIsIHRoYXQgcGVyY2VudGFnZSBuZWVkcyB0byBiZSByZS1kaXZpZGVkLlxuICAgICAgICAgICAgICAgICAgICAvLyBSb3VuZCB0aGUgcGVyY2VudGFnZSBvZmZzZXQgdG8gYW4gZXZlbiBudW1iZXIsIHRoZW4gZGl2aWRlIGJ5IHR3b1xuICAgICAgICAgICAgICAgICAgICAvLyB0byBzcHJlYWQgdGhlIG9mZnNldCBvbiBib3RoIHNpZGVzIG9mIHRoZSByYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgc3RlcFNpemUgPSBwY3REaWZmZXJlbmNlIC8gcmVhbFN0ZXBzO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXZpZGUgYWxsIHBvaW50cyBldmVubHksIGFkZGluZyB0aGUgY29ycmVjdCBudW1iZXIgdG8gdGhpcyBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHVwIHRvIDw9IHNvIHRoYXQgMTAwJSBnZXRzIGEgcG9pbnQsIGV2ZW50IGlmIGlnbm9yZUxhc3QgaXMgc2V0LlxuICAgICAgICAgICAgICAgICAgICBmb3IgKHEgPSAxOyBxIDw9IHJlYWxTdGVwczsgcSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmF0aW8gYmV0d2VlbiB0aGUgcm91bmRlZCB2YWx1ZSBhbmQgdGhlIGFjdHVhbCBzaXplIG1pZ2h0IGJlIH4xJSBvZmYuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3JyZWN0IHRoZSBwZXJjZW50YWdlIG9mZnNldCBieSB0aGUgbnVtYmVyIG9mIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyIHN1YnJhbmdlLiBkZW5zaXR5ID0gMSB3aWxsIHJlc3VsdCBpbiAxMDAgcG9pbnRzIG9uIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnVsbCByYW5nZSwgMiBmb3IgNTAsIDQgZm9yIDI1LCBldGMuXG4gICAgICAgICAgICAgICAgICAgICAgICBwY3RQb3MgPSBwcmV2UGN0ICsgcSAqIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1twY3RQb3MudG9GaXhlZCg1KV0gPSBbc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHBjdFBvcyksIDBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIERldGVybWluZSB0aGUgcG9pbnQgdHlwZS5cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGdyb3VwLmluZGV4T2YoaSkgPiAtMSA/IGV4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZSA6IGlzU3RlcHMgPyBleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWUgOiBleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuZm9yY2UgdGhlICdpZ25vcmVGaXJzdCcgb3B0aW9uIGJ5IG92ZXJ3cml0aW5nIHRoZSB0eXBlIGZvciAwLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWluZGV4ICYmIGlnbm9yZUZpcnN0ICYmIGkgIT09IGhpZ2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGkgPT09IGhpZ2ggJiYgaWdub3JlTGFzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlICd0eXBlJyBvZiB0aGlzIHBvaW50LiAwID0gcGxhaW4sIDEgPSByZWFsIHZhbHVlLCAyID0gc3RlcCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXNbbmV3UGN0LnRvRml4ZWQoNSldID0gW2ksIHR5cGVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcGVyY2VudGFnZSBjb3VudC5cbiAgICAgICAgICAgICAgICAgICAgcHJldlBjdCA9IG5ld1BjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXJGdW5jLCBmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgdmFsdWVTaXplQ2xhc3NlcyA9IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVOb3JtYWwsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUxhcmdlLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVTdWIsXG4gICAgICAgICAgICAgICAgX2EpO1xuICAgICAgICAgICAgdmFyIG1hcmtlclNpemVDbGFzc2VzID0gKF9iID0ge30sXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJOb3JtYWwsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJMYXJnZSxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclN1YixcbiAgICAgICAgICAgICAgICBfYik7XG4gICAgICAgICAgICB2YXIgdmFsdWVPcmllbnRhdGlvbkNsYXNzZXMgPSBbb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlSG9yaXpvbnRhbCwgb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlVmVydGljYWxdO1xuICAgICAgICAgICAgdmFyIG1hcmtlck9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMubWFya2VySG9yaXpvbnRhbCwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclZlcnRpY2FsXTtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzKTtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIG9wdGlvbnMub3J0ID09PSAwID8gb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHNIb3Jpem9udGFsIDogb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHNWZXJ0aWNhbCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRDbGFzc2VzKHR5cGUsIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gc291cmNlID09PSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWVudGF0aW9uQ2xhc3NlcyA9IGEgPyB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA6IG1hcmtlck9yaWVudGF0aW9uQ2xhc3NlcztcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZUNsYXNzZXMgPSBhID8gdmFsdWVTaXplQ2xhc3NlcyA6IG1hcmtlclNpemVDbGFzc2VzO1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UgKyBcIiBcIiArIG9yaWVudGF0aW9uQ2xhc3Nlc1tvcHRpb25zLm9ydF0gKyBcIiBcIiArIHNpemVDbGFzc2VzW3R5cGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkU3ByZWFkKG9mZnNldCwgdmFsdWUsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAvLyBBcHBseSB0aGUgZmlsdGVyIGZ1bmN0aW9uLCBpZiBpdCBpcyBzZXQuXG4gICAgICAgICAgICAgICAgdHlwZSA9IGZpbHRlckZ1bmMgPyBmaWx0ZXJGdW5jKHZhbHVlLCB0eXBlKSA6IHR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuUGlwc1R5cGUuTm9uZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCBhIG1hcmtlciBmb3IgZXZlcnkgcG9pbnRcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGFkZE5vZGVUbyhlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBnZXRDbGFzc2VzKHR5cGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXIpO1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbb3B0aW9ucy5zdHlsZV0gPSBvZmZzZXQgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAvLyBWYWx1ZXMgYXJlIG9ubHkgYXBwZW5kZWQgZm9yIHBvaW50cyBtYXJrZWQgJzEnIG9yICcyJy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA+IGV4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBnZXRDbGFzc2VzKHR5cGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IFN0cmluZyhmb3JtYXR0ZXIudG8odmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcHBlbmQgYWxsIHBvaW50cy5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNwcmVhZCkuZm9yRWFjaChmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgYWRkU3ByZWFkKG9mZnNldCwgc3ByZWFkW29mZnNldF1bMF0sIHNwcmVhZFtvZmZzZXRdWzFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlUGlwcygpIHtcbiAgICAgICAgICAgIGlmIChzY29wZV9QaXBzKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudChzY29wZV9QaXBzKTtcbiAgICAgICAgICAgICAgICBzY29wZV9QaXBzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwaXBzKHBpcHMpIHtcbiAgICAgICAgICAgIC8vIEZpeCAjNjY5XG4gICAgICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgICAgICB2YXIgc3ByZWFkID0gZ2VuZXJhdGVTcHJlYWQocGlwcyk7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gcGlwcy5maWx0ZXI7XG4gICAgICAgICAgICB2YXIgZm9ybWF0ID0gcGlwcy5mb3JtYXQgfHwge1xuICAgICAgICAgICAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhNYXRoLnJvdW5kKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBzY29wZV9UYXJnZXQuYXBwZW5kQ2hpbGQoYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlciwgZm9ybWF0KSk7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfUGlwcztcbiAgICAgICAgfVxuICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIGJhc2UgZGltZW5zaW9ucy5cbiAgICAgICAgZnVuY3Rpb24gYmFzZVNpemUoKSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNjb3BlX0Jhc2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgYWx0ID0gKFwib2Zmc2V0XCIgKyBbXCJXaWR0aFwiLCBcIkhlaWdodFwiXVtvcHRpb25zLm9ydF0pO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub3J0ID09PSAwID8gcmVjdC53aWR0aCB8fCBzY29wZV9CYXNlW2FsdF0gOiByZWN0LmhlaWdodCB8fCBzY29wZV9CYXNlW2FsdF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlciBmb3IgYXR0YWNoaW5nIGV2ZW50cyB0cm91Z2ggYSBwcm94eS5cbiAgICAgICAgZnVuY3Rpb24gYXR0YWNoRXZlbnQoZXZlbnRzLCBlbGVtZW50LCBjYWxsYmFjaywgZGF0YSkge1xuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byAnZmlsdGVyJyBldmVudHMgdG8gdGhlIHNsaWRlci5cbiAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYSBub2RlLCBub3QgYSBub2RlTGlzdFxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gZml4RXZlbnQoZXZlbnQsIGRhdGEucGFnZU9mZnNldCwgZGF0YS50YXJnZXQgfHwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLy8gZml4RXZlbnQgcmV0dXJucyBmYWxzZSBpZiB0aGlzIGV2ZW50IGhhcyBhIGRpZmZlcmVudCB0YXJnZXRcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGhhbmRsaW5nIChtdWx0aS0pIHRvdWNoIGV2ZW50cztcbiAgICAgICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb05vdFJlamVjdCBpcyBwYXNzZWQgYnkgYWxsIGVuZCBldmVudHMgdG8gbWFrZSBzdXJlIHJlbGVhc2VkIHRvdWNoZXNcbiAgICAgICAgICAgICAgICAvLyBhcmUgbm90IHJlamVjdGVkLCBsZWF2aW5nIHRoZSBzbGlkZXIgXCJzdHVja1wiIHRvIHRoZSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgYW4gYWN0aXZlICd0YXAnIHRyYW5zaXRpb24gaXMgdGFraW5nIHBsYWNlLlxuICAgICAgICAgICAgICAgIGlmIChoYXNDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXApICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgICAgIGlmIChldmVudHMgPT09IGFjdGlvbnMuc3RhcnQgJiYgZS5idXR0b25zICE9PSB1bmRlZmluZWQgJiYgZS5idXR0b25zID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSByaWdodCBvciBtaWRkbGUgY2xpY2tzIG9uIHN0YXJ0ICM0NTRcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5ob3ZlciAmJiBlLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAnc3VwcG9ydHNQYXNzaXZlJyBpcyBvbmx5IHRydWUgaWYgYSBicm93c2VyIGFsc28gc3VwcG9ydHMgdG91Y2gtYWN0aW9uOiBub25lIGluIENTUy5cbiAgICAgICAgICAgICAgICAvLyBpT1Mgc2FmYXJpIGRvZXMgbm90LCBzbyBpdCBkb2Vzbid0IGdldCB0byBiZW5lZml0IGZyb20gcGFzc2l2ZSBzY3JvbGxpbmcuIGlPUyBkb2VzIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAvLyB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbiwgYnV0IHRoYXQgYWxsb3dzIHBhbm5pbmcsIHdoaWNoIGJyZWFrc1xuICAgICAgICAgICAgICAgIC8vIHNsaWRlcnMgYWZ0ZXIgem9vbWluZy9vbiBub24tcmVzcG9uc2l2ZSBwYWdlcy5cbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzMxMTJcbiAgICAgICAgICAgICAgICBpZiAoIXN1cHBvcnRzUGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUuY2FsY1BvaW50ID0gZS5wb2ludHNbb3B0aW9ucy5vcnRdO1xuICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIGV2ZW50IGhhbmRsZXIgd2l0aCB0aGUgZXZlbnQgWyBhbmQgYWRkaXRpb25hbCBkYXRhIF0uXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBtZXRob2RzID0gW107XG4gICAgICAgICAgICAvLyBCaW5kIGEgY2xvc3VyZSBvbiB0aGUgdGFyZ2V0IGZvciBldmVyeSBldmVudCB0eXBlLlxuICAgICAgICAgICAgZXZlbnRzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBtZXRob2QsIHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xuICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChbZXZlbnROYW1lLCBtZXRob2RdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvdmlkZSBhIGNsZWFuIGV2ZW50IHdpdGggc3RhbmRhcmRpemVkIG9mZnNldCB2YWx1ZXMuXG4gICAgICAgIGZ1bmN0aW9uIGZpeEV2ZW50KGUsIHBhZ2VPZmZzZXQsIGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgdGhlIGV2ZW50IHRvIHJlZ2lzdGVyIHRoZSB0eXBlLCB3aGljaCBjYW4gYmVcbiAgICAgICAgICAgIC8vIHRvdWNoLCBtb3VzZSBvciBwb2ludGVyLiBPZmZzZXQgY2hhbmdlcyBuZWVkIHRvIGJlXG4gICAgICAgICAgICAvLyBtYWRlIG9uIGFuIGV2ZW50IHNwZWNpZmljIGJhc2lzLlxuICAgICAgICAgICAgdmFyIHRvdWNoID0gZS50eXBlLmluZGV4T2YoXCJ0b3VjaFwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciBtb3VzZSA9IGUudHlwZS5pbmRleE9mKFwibW91c2VcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgcG9pbnRlciA9IGUudHlwZS5pbmRleE9mKFwicG9pbnRlclwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgICAgIC8vIElFMTAgaW1wbGVtZW50ZWQgcG9pbnRlciBldmVudHMgd2l0aCBhIHByZWZpeDtcbiAgICAgICAgICAgIGlmIChlLnR5cGUuaW5kZXhPZihcIk1TUG9pbnRlclwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBvaW50ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRXJyb25lb3VzIGV2ZW50cyBzZWVtIHRvIGJlIHBhc3NlZCBpbiBvY2Nhc2lvbmFsbHkgb24gaU9TL2lQYWRPUyBhZnRlciB1c2VyIGZpbmlzaGVzIGludGVyYWN0aW5nIHdpdGhcbiAgICAgICAgICAgIC8vIHRoZSBzbGlkZXIuIFRoZXkgYXBwZWFyIHRvIGJlIG9mIHR5cGUgTW91c2VFdmVudCwgeWV0IHRoZXkgZG9uJ3QgaGF2ZSB1c3VhbCBwcm9wZXJ0aWVzIHNldC4gSWdub3JlXG4gICAgICAgICAgICAvLyBldmVudHMgdGhhdCBoYXZlIG5vIHRvdWNoZXMgb3IgYnV0dG9ucyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gKCMxMDU3LCAjMTA3OSwgIzEwOTUpXG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlZG93blwiICYmICFlLmJ1dHRvbnMgJiYgIWUudG91Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBvbmx5IHRoaW5nIG9uZSBoYW5kbGUgc2hvdWxkIGJlIGNvbmNlcm5lZCBhYm91dCBpcyB0aGUgdG91Y2hlcyB0aGF0IG9yaWdpbmF0ZWQgb24gdG9wIG9mIGl0LlxuICAgICAgICAgICAgaWYgKHRvdWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJucyB0cnVlIGlmIGEgdG91Y2ggb3JpZ2luYXRlZCBvbiB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgICAgIHZhciBpc1RvdWNoT25UYXJnZXQgPSBmdW5jdGlvbiAoY2hlY2tUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gY2hlY2tUb3VjaC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodGFyZ2V0ID09PSBldmVudFRhcmdldCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuY29udGFpbnModGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGUuY29tcG9zZWQgJiYgZS5jb21wb3NlZFBhdGgoKS5zaGlmdCgpID09PSBldmVudFRhcmdldCkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGNhc2Ugb2YgdG91Y2hzdGFydCBldmVudHMsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoZXJlIGlzIHN0aWxsIG5vIG1vcmUgdGhhbiBvbmVcbiAgICAgICAgICAgICAgICAvLyB0b3VjaCBvbiB0aGUgdGFyZ2V0IHNvIHdlIGxvb2sgYW1vbmdzdCBhbGwgdG91Y2hlcy5cbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VG91Y2hlcyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlLnRvdWNoZXMsIGlzVG91Y2hPblRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBzdXBwb3J0IG1vcmUgdGhhbiBvbmUgdG91Y2ggcGVyIGhhbmRsZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB5ID0gdGFyZ2V0VG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHRoZSBvdGhlciBjYXNlcywgZmluZCBvbiBjaGFuZ2VkVG91Y2hlcyBpcyBlbm91Z2guXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaCA9IEFycmF5LnByb3RvdHlwZS5maW5kLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIGlmIHRoZSB0YXJnZXQgdG91Y2ggaGFzIG5vdCBtb3ZlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaC5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0IHx8IGdldFBhZ2VPZmZzZXQoc2NvcGVfRG9jdW1lbnQpO1xuICAgICAgICAgICAgaWYgKG1vdXNlIHx8IHBvaW50ZXIpIHtcbiAgICAgICAgICAgICAgICB4ID0gZS5jbGllbnRYICsgcGFnZU9mZnNldC54O1xuICAgICAgICAgICAgICAgIHkgPSBlLmNsaWVudFkgKyBwYWdlT2Zmc2V0Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0O1xuICAgICAgICAgICAgZS5wb2ludHMgPSBbeCwgeV07XG4gICAgICAgICAgICBlLmN1cnNvciA9IG1vdXNlIHx8IHBvaW50ZXI7IC8vIEZpeCAjNDM1XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmFuc2xhdGUgYSBjb29yZGluYXRlIGluIHRoZSBkb2N1bWVudCB0byBhIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgICAgICBmdW5jdGlvbiBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoY2FsY1BvaW50KSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBjYWxjUG9pbnQgLSBvZmZzZXQoc2NvcGVfQmFzZSwgb3B0aW9ucy5vcnQpO1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gKGxvY2F0aW9uICogMTAwKSAvIGJhc2VTaXplKCk7XG4gICAgICAgICAgICAvLyBDbGFtcCBwcm9wb3NhbCBiZXR3ZWVuIDAlIGFuZCAxMDAlXG4gICAgICAgICAgICAvLyBPdXQtb2YtYm91bmQgY29vcmRpbmF0ZXMgbWF5IG9jY3VyIHdoZW4gLm5vVWktYmFzZSBwc2V1ZG8tZWxlbWVudHNcbiAgICAgICAgICAgIC8vIGFyZSB1c2VkIChlLmcuIGNvbnRhaW5lZCBoYW5kbGVzIGZlYXR1cmUpXG4gICAgICAgICAgICBwcm9wb3NhbCA9IGxpbWl0KHByb3Bvc2FsKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIHByb3Bvc2FsIDogcHJvcG9zYWw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmluZCBoYW5kbGUgY2xvc2VzdCB0byBhIGNlcnRhaW4gcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgICAgIGZ1bmN0aW9uIGdldENsb3Nlc3RIYW5kbGUoY2xpY2tlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc21hbGxlc3REaWZmZXJlbmNlID0gMTAwO1xuICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlciA9IGZhbHNlO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZWQgaGFuZGxlcyBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIGlmIChpc0hhbmRsZURpc2FibGVkKGluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVQb3NpdGlvbiA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9IE1hdGguYWJzKGhhbmRsZVBvc2l0aW9uIC0gY2xpY2tlZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsIHN0YXRlXG4gICAgICAgICAgICAgICAgdmFyIGNsaWNrQXRFZGdlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlID09PSAxMDAgJiYgc21hbGxlc3REaWZmZXJlbmNlID09PSAxMDA7XG4gICAgICAgICAgICAgICAgLy8gRGlmZmVyZW5jZSB3aXRoIHRoaXMgaGFuZGxlIGlzIHNtYWxsZXIgdGhhbiB0aGUgcHJldmlvdXNseSBjaGVja2VkIGhhbmRsZVxuICAgICAgICAgICAgICAgIHZhciBpc0Nsb3NlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8IHNtYWxsZXN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICB2YXIgaXNDbG9zZXJBZnRlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8PSBzbWFsbGVzdERpZmZlcmVuY2UgJiYgY2xpY2tlZFBvc2l0aW9uID4gaGFuZGxlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2xvc2VyIHx8IGlzQ2xvc2VyQWZ0ZXIgfHwgY2xpY2tBdEVkZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHNtYWxsZXN0RGlmZmVyZW5jZSA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZSAnZW5kJyB3aGVuIGEgbW91c2Ugb3IgcGVuIGxlYXZlcyB0aGUgZG9jdW1lbnQuXG4gICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50TGVhdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlb3V0XCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiSFRNTFwiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgbW92ZW1lbnQgb24gZG9jdW1lbnQgZm9yIGhhbmRsZSBhbmQgcmFuZ2UgZHJhZy5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRNb3ZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBGaXggIzQ5OFxuICAgICAgICAgICAgLy8gQ2hlY2sgdmFsdWUgb2YgLmJ1dHRvbnMgaW4gJ3N0YXJ0JyB0byB3b3JrIGFyb3VuZCBhIGJ1ZyBpbiBJRTEwIG1vYmlsZSAoZGF0YS5idXR0b25zUHJvcGVydHkpLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy85MjcwMDUvbW9iaWxlLWllMTAtd2luZG93cy1waG9uZS1idXR0b25zLXByb3BlcnR5LW9mLXBvaW50ZXJtb3ZlLWV2ZW50LWFsd2F5cy16ZXJvXG4gICAgICAgICAgICAvLyBJRTkgaGFzIC5idXR0b25zIGFuZCAud2hpY2ggemVybyBvbiBtb3VzZW1vdmUuXG4gICAgICAgICAgICAvLyBGaXJlZm94IGJyZWFrcyB0aGUgc3BlYyBNRE4gZGVmaW5lcy5cbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSA5XCIpID09PSAtMSAmJiBldmVudC5idXR0b25zID09PSAwICYmIGRhdGEuYnV0dG9uc1Byb3BlcnR5ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIGFyZSBtb3ZpbmcgdXAgb3IgZG93blxuICAgICAgICAgICAgdmFyIG1vdmVtZW50ID0gKG9wdGlvbnMuZGlyID8gLTEgOiAxKSAqIChldmVudC5jYWxjUG9pbnQgLSBkYXRhLnN0YXJ0Q2FsY1BvaW50KTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIG1vdmVtZW50IGludG8gYSBwZXJjZW50YWdlIG9mIHRoZSBzbGlkZXIgd2lkdGgvaGVpZ2h0XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobW92ZW1lbnQgKiAxMDApIC8gZGF0YS5iYXNlU2l6ZTtcbiAgICAgICAgICAgIG1vdmVIYW5kbGVzKG1vdmVtZW50ID4gMCwgcHJvcG9zYWwsIGRhdGEubG9jYXRpb25zLCBkYXRhLmhhbmRsZU51bWJlcnMsIGRhdGEuY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5iaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LCBjYWxsIGNhbGxiYWNrcy5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRFbmQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFRoZSBoYW5kbGUgaXMgbm8gbG9uZ2VyIGFjdGl2ZSwgc28gcmVtb3ZlIHRoZSBjbGFzcy5cbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGRhdGEuaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVuYmluZCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cywgd2hpY2ggYXJlIGFkZGVkIG9uICdzdGFydCcuXG4gICAgICAgICAgICBkYXRhLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfRG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoY1swXSwgY1sxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHJhZ2dpbmcgY2xhc3MuXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGN1cnNvciBzdHlsZXMgYW5kIHRleHQtc2VsZWN0aW9uIGV2ZW50cyBib3VuZCB0byB0aGUgYm9keS5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfQm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJlbmRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50U3RhcnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBldmVudCBpZiBhbnkgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLnNvbWUoaXNIYW5kbGVEaXNhYmxlZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlT3JpZ2luID0gc2NvcGVfSGFuZGxlc1tkYXRhLmhhbmRsZU51bWJlcnNbMF1dO1xuICAgICAgICAgICAgICAgIGhhbmRsZSA9IGhhbmRsZU9yaWdpbi5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSBoYW5kbGUgYXMgJ2FjdGl2ZScgc28gaXQgY2FuIGJlIHN0eWxlZC5cbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQSBkcmFnIHNob3VsZCBuZXZlciBwcm9wYWdhdGUgdXAgdG8gdGhlICd0YXAnIGV2ZW50LlxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBSZWNvcmQgdGhlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cy5cbiAgICAgICAgICAgIHZhciBtb3ZlRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRNb3ZlLCB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGV2ZW50IHRhcmdldCBoYXMgY2hhbmdlZCBzbyB3ZSBuZWVkIHRvIHByb3BhZ2F0ZSB0aGUgb3JpZ2luYWwgb25lIHNvIHRoYXQgd2Uga2VlcFxuICAgICAgICAgICAgICAgIC8vIHJlbHlpbmcgb24gaXQgdG8gZXh0cmFjdCB0YXJnZXQgdG91Y2hlcy5cbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBjb25uZWN0OiBkYXRhLmNvbm5lY3QsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgc3RhcnRDYWxjUG9pbnQ6IGV2ZW50LmNhbGNQb2ludCxcbiAgICAgICAgICAgICAgICBiYXNlU2l6ZTogYmFzZVNpemUoKSxcbiAgICAgICAgICAgICAgICBwYWdlT2Zmc2V0OiBldmVudC5wYWdlT2Zmc2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgICAgICAgICBidXR0b25zUHJvcGVydHk6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zOiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZW5kRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLmVuZCwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBldmVudEVuZCwge1xuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgb3V0RXZlbnQgPSBhdHRhY2hFdmVudChcIm1vdXNlb3V0XCIsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZG9jdW1lbnRMZWF2ZSwge1xuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBXZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBwdXNoZWQgdGhlIGxpc3RlbmVycyBpbiB0aGUgbGlzdGVuZXIgbGlzdCByYXRoZXIgdGhhbiBjcmVhdGluZ1xuICAgICAgICAgICAgLy8gYSBuZXcgb25lIGFzIGl0IGhhcyBhbHJlYWR5IGJlZW4gcGFzc2VkIHRvIHRoZSBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoLmFwcGx5KGxpc3RlbmVycywgbW92ZUV2ZW50LmNvbmNhdChlbmRFdmVudCwgb3V0RXZlbnQpKTtcbiAgICAgICAgICAgIC8vIFRleHQgc2VsZWN0aW9uIGlzbid0IGFuIGlzc3VlIG9uIHRvdWNoIGRldmljZXMsXG4gICAgICAgICAgICAvLyBzbyBhZGRpbmcgY3Vyc29yIHN0eWxlcyBjYW4gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSAnSScgY3Vyc29yIGFuZCBleHRlbmQgdGhlIHJhbmdlLWRyYWcgY3Vyc29yLlxuICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQpLmN1cnNvcjtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSB0YXJnZXQgd2l0aCBhIGRyYWdnaW5nIHN0YXRlLlxuICAgICAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGV4dCBzZWxlY3Rpb24gd2hlbiBkcmFnZ2luZyB0aGUgaGFuZGxlcy5cbiAgICAgICAgICAgICAgICAvLyBJbiBub1VpU2xpZGVyIDw9IDkuMi4wLCB0aGlzIHdhcyBoYW5kbGVkIGJ5IGNhbGxpbmcgcHJldmVudERlZmF1bHQgb24gbW91c2UvdG91Y2ggc3RhcnQvbW92ZSxcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyBzY3JvbGwgYmxvY2tpbmcuIFRoZSBzZWxlY3RzdGFydCBldmVudCBpcyBzdXBwb3J0ZWQgYnkgRmlyZUZveCBzdGFydGluZyBmcm9tIHZlcnNpb24gNTIsXG4gICAgICAgICAgICAgICAgLy8gbWVhbmluZyB0aGUgb25seSBob2xkb3V0IGlzIGlPUyBTYWZhcmkuIFRoaXMgZG9lc24ndCBtYXR0ZXI6IHRleHQgc2VsZWN0aW9uIGlzbid0IHRyaWdnZXJlZCB0aGVyZS5cbiAgICAgICAgICAgICAgICAvLyBUaGUgJ2N1cnNvcicgZmxhZyBpcyBmYWxzZS5cbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXNlbGVjdHN0YXJ0XG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzdGFydFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZSBjbG9zZXN0IGhhbmRsZSB0byB0YXBwZWQgbG9jYXRpb24uXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50VGFwKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBUaGUgdGFwIGV2ZW50IHNob3VsZG4ndCBwcm9wYWdhdGUgdXBcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XG4gICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZ2V0Q2xvc2VzdEhhbmRsZShwcm9wb3NhbCk7XG4gICAgICAgICAgICAvLyBUYWNrbGUgdGhlIGNhc2UgdGhhdCBhbGwgaGFuZGxlcyBhcmUgJ2Rpc2FibGVkJy5cbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmxhZyB0aGUgc2xpZGVyIGFzIGl0IGlzIG5vdyBpbiBhIHRyYW5zaXRpb25hbCBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gdGFrZXMgYSBjb25maWd1cmFibGUgYW1vdW50IG9mIG1zIChkZWZhdWx0IDMwMCkuIFJlLWVuYWJsZSB0aGUgc2xpZGVyIGFmdGVyIHRoYXQuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcHJvcG9zYWwsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50U3RhcnQoZXZlbnQsIHsgaGFuZGxlTnVtYmVyczogW2hhbmRsZU51bWJlcl0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZXMgYSAnaG92ZXInIGV2ZW50IGZvciBhIGhvdmVyZWQgbW91c2UvcGVuIHBvc2l0aW9uLlxuICAgICAgICBmdW5jdGlvbiBldmVudEhvdmVyKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgICAgIHZhciB0byA9IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAocHJvcG9zYWwpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJob3ZlclwiID09PSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChzY29wZV9TZWxmLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXMga2V5ZG93biBvbiBmb2N1c2VkIGhhbmRsZXNcbiAgICAgICAgLy8gRG9uJ3QgbW92ZSB0aGUgZG9jdW1lbnQgd2hlbiBwcmVzc2luZyBhcnJvdyBrZXlzIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgICAgICBmdW5jdGlvbiBldmVudEtleWRvd24oZXZlbnQsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSB8fCBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaG9yaXpvbnRhbEtleXMgPSBbXCJMZWZ0XCIsIFwiUmlnaHRcIl07XG4gICAgICAgICAgICB2YXIgdmVydGljYWxLZXlzID0gW1wiRG93blwiLCBcIlVwXCJdO1xuICAgICAgICAgICAgdmFyIGxhcmdlU3RlcEtleXMgPSBbXCJQYWdlRG93blwiLCBcIlBhZ2VVcFwiXTtcbiAgICAgICAgICAgIHZhciBlZGdlS2V5cyA9IFtcIkhvbWVcIiwgXCJFbmRcIl07XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgJiYgIW9wdGlvbnMub3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gT24gYW4gcmlnaHQtdG8tbGVmdCBzbGlkZXIsIHRoZSBsZWZ0IGFuZCByaWdodCBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIGhvcml6b250YWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMub3J0ICYmICFvcHRpb25zLmRpcikge1xuICAgICAgICAgICAgICAgIC8vIE9uIGEgdG9wLXRvLWJvdHRvbSBzbGlkZXIsIHRoZSB1cCBhbmQgZG93biBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgbGFyZ2VTdGVwS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdHJpcCBcIkFycm93XCIgZm9yIElFIGNvbXBhdGliaWxpdHkuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L2tleVxuICAgICAgICAgICAgdmFyIGtleSA9IGV2ZW50LmtleS5yZXBsYWNlKFwiQXJyb3dcIiwgXCJcIik7XG4gICAgICAgICAgICB2YXIgaXNMYXJnZURvd24gPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMF07XG4gICAgICAgICAgICB2YXIgaXNMYXJnZVVwID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzFdO1xuICAgICAgICAgICAgdmFyIGlzRG93biA9IGtleSA9PT0gdmVydGljYWxLZXlzWzBdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMF0gfHwgaXNMYXJnZURvd247XG4gICAgICAgICAgICB2YXIgaXNVcCA9IGtleSA9PT0gdmVydGljYWxLZXlzWzFdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV0gfHwgaXNMYXJnZVVwO1xuICAgICAgICAgICAgdmFyIGlzTWluID0ga2V5ID09PSBlZGdlS2V5c1swXTtcbiAgICAgICAgICAgIHZhciBpc01heCA9IGtleSA9PT0gZWRnZUtleXNbMV07XG4gICAgICAgICAgICBpZiAoIWlzRG93biAmJiAhaXNVcCAmJiAhaXNNaW4gJiYgIWlzTWF4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHRvO1xuICAgICAgICAgICAgaWYgKGlzVXAgfHwgaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzRG93biA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwcyA9IGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwID0gc3RlcHNbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgICAgICAvLyBBdCB0aGUgZWRnZSBvZiBhIHNsaWRlciwgZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gc3RlcCBzZXQsIHVzZSB0aGUgZGVmYXVsdCBvZiAxMCUgb2YgdGhlIHN1Yi1yYW5nZVxuICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0uZ2V0RGVmYXVsdFN0ZXAoc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIGlzRG93biwgb3B0aW9ucy5rZXlib2FyZERlZmF1bHRTdGVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTGFyZ2VVcCB8fCBpc0xhcmdlRG93bikge1xuICAgICAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRQYWdlTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZE11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgICAgIC8vIERlY3JlbWVudCBmb3IgZG93biBzdGVwc1xuICAgICAgICAgICAgICAgIHN0ZXAgPSAoaXNEb3duID8gLTEgOiAxKSAqIHN0ZXA7XG4gICAgICAgICAgICAgICAgdG8gPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSArIHN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc01heCkge1xuICAgICAgICAgICAgICAgIC8vIEVuZCBrZXlcbiAgICAgICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFtvcHRpb25zLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBIb21lIGtleVxuICAgICAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byksIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggZXZlbnRzIHRvIHNldmVyYWwgc2xpZGVyIHBhcnRzLlxuICAgICAgICBmdW5jdGlvbiBiaW5kU2xpZGVyRXZlbnRzKGJlaGF2aW91cikge1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBzdGFuZGFyZCBkcmFnIGV2ZW50IHRvIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgaWYgKCFiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2UgZXZlbnRzIGFyZSBvbmx5IGJvdW5kIHRvIHRoZSB2aXN1YWwgaGFuZGxlXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQsIG5vdCB0aGUgJ3JlYWwnIG9yaWdpbiBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBoYW5kbGUuY2hpbGRyZW5bMF0sIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IFtpbmRleF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIHRhcCBldmVudCB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLnRhcCkge1xuICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIHNjb3BlX0Jhc2UsIGV2ZW50VGFwLCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJlIGhvdmVyIGV2ZW50c1xuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5ob3Zlcikge1xuICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfQmFzZSwgZXZlbnRIb3Zlciwge1xuICAgICAgICAgICAgICAgICAgICBob3ZlcjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgcmFuZ2UgZHJhZ2dhYmxlLlxuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5kcmFnKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMuZm9yRWFjaChmdW5jdGlvbiAoY29ubmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm5lY3QgPT09IGZhbHNlIHx8IGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZUJlZm9yZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZUFmdGVyID0gc2NvcGVfSGFuZGxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudEhvbGRlcnMgPSBbY29ubmVjdF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVzVG9EcmFnID0gW2hhbmRsZUJlZm9yZSwgaGFuZGxlQWZ0ZXJdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyc1RvRHJhZyA9IFtpbmRleCAtIDEsIGluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3MoY29ubmVjdCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWdnYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIHJhbmdlIGlzIGZpeGVkLCB0aGUgZW50aXJlIHJhbmdlIGNhblxuICAgICAgICAgICAgICAgICAgICAvLyBiZSBkcmFnZ2VkIGJ5IHRoZSBoYW5kbGVzLiBUaGUgaGFuZGxlIGluIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAvLyBvcmlnaW4gd2lsbCBwcm9wYWdhdGUgdGhlIHN0YXJ0IGV2ZW50IHVwd2FyZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGl0IG5lZWRzIHRvIGJlIGJvdW5kIG1hbnVhbGx5IG9uIHRoZSBvdGhlci5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5maXhlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQmVmb3JlLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUFmdGVyLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWdBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXNUb0RyYWcgPSBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyc1RvRHJhZyA9IHNjb3BlX0hhbmRsZU51bWJlcnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBldmVudEhvbGRlciwgZXZlbnRTdGFydCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXM6IGhhbmRsZXNUb0RyYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogaGFuZGxlTnVtYmVyc1RvRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0OiBjb25uZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXR0YWNoIGFuIGV2ZW50IHRvIHRoaXMgc2xpZGVyLCBwb3NzaWJseSBpbmNsdWRpbmcgYSBuYW1lc3BhY2VcbiAgICAgICAgZnVuY3Rpb24gYmluZEV2ZW50KG5hbWVzcGFjZWRFdmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdID0gc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gfHwgW107XG4gICAgICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBldmVudCBib3VuZCBpcyAndXBkYXRlLCcgZmlyZSBpdCBpbW1lZGlhdGVseSBmb3IgYWxsIGhhbmRsZXMuXG4gICAgICAgICAgICBpZiAobmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoYSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0ludGVybmFsTmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMuYXJpYSB8fCBuYW1lc3BhY2UgPT09IElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuZG8gYXR0YWNobWVudCBvZiBldmVudFxuICAgICAgICBmdW5jdGlvbiByZW1vdmVFdmVudChuYW1lc3BhY2VkRXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5hbWVzcGFjZWRFdmVudCAmJiBuYW1lc3BhY2VkRXZlbnQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50ID8gbmFtZXNwYWNlZEV2ZW50LnN1YnN0cmluZyhldmVudC5sZW5ndGgpIDogbmFtZXNwYWNlZEV2ZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChiaW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRFdmVudCA9IGJpbmQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgICAgIHZhciB0TmFtZXNwYWNlID0gYmluZC5zdWJzdHJpbmcodEV2ZW50Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKCghZXZlbnQgfHwgZXZlbnQgPT09IHRFdmVudCkgJiYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGRlbGV0ZSBwcm90ZWN0ZWQgaW50ZXJuYWwgZXZlbnQgaWYgaW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ludGVybmFsTmFtZXNwYWNlKHROYW1lc3BhY2UpIHx8IG5hbWVzcGFjZSA9PT0gdE5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjb3BlX0V2ZW50c1tiaW5kXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4dGVybmFsIGV2ZW50IGhhbmRsaW5nXG4gICAgICAgIGZ1bmN0aW9uIGZpcmVFdmVudChldmVudE5hbWUsIGhhbmRsZU51bWJlciwgdGFwKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50VHlwZSA9IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBldmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgYXMgdGhlIHNjb3BlICgndGhpcycpXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB2YWx1ZXMgYXMgYXJyYXksIHNvIGFyZ18xW2FyZ18yXSBpcyBhbHdheXMgdmFsaWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgaW5kZXgsIDAgb3IgMVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuLWZvcm1hdHRlZCBzbGlkZXIgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFdmVudCBpcyBmaXJlZCBieSB0YXAsIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcCB8fCBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMZWZ0IG9mZnNldCBvZiB0aGUgaGFuZGxlLCBpbiByZWxhdGlvbiB0byB0aGUgc2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHNsaWRlciBwdWJsaWMgQVBJIHRvIGFuIGFjY2Vzc2libGUgcGFyYW1ldGVyIHdoZW4gdGhpcyBpcyB1bmF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfU2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNwbGl0IG91dCB0aGUgaGFuZGxlIHBvc2l0aW9uaW5nIGxvZ2ljIHNvIHRoZSBNb3ZlIGV2ZW50IGNhbiB1c2UgaXQsIHRvb1xuICAgICAgICBmdW5jdGlvbiBjaGVja0hhbmRsZVBvc2l0aW9uKHJlZmVyZW5jZSwgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZTtcbiAgICAgICAgICAgIC8vIEZvciBzbGlkZXJzIHdpdGggbXVsdGlwbGUgaGFuZGxlcywgbGltaXQgbW92ZW1lbnQgdG8gdGhlIG90aGVyIGhhbmRsZS5cbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBtYXJnaW4gb3B0aW9uIGJ5IGFkZGluZyBpdCB0byB0aGUgaGFuZGxlIHBvc2l0aW9ucy5cbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgIW9wdGlvbnMuZXZlbnRzLnVuY29uc3RyYWluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5tYXJnaW4sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyICsgMV0sIG9wdGlvbnMubWFyZ2luLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBsaW1pdCBvcHRpb24gaGFzIHRoZSBvcHBvc2l0ZSBlZmZlY3QsIGxpbWl0aW5nIGhhbmRsZXMgdG8gYVxuICAgICAgICAgICAgLy8gbWF4aW11bSBkaXN0YW5jZSBmcm9tIGFub3RoZXIuIExpbWl0IG11c3QgYmUgPiAwLCBhcyBvdGhlcndpc2VcbiAgICAgICAgICAgIC8vIGhhbmRsZXMgd291bGQgYmUgdW5tb3ZhYmxlLlxuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiBvcHRpb25zLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyIC0gMV0sIG9wdGlvbnMubGltaXQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyICsgMV0sIG9wdGlvbnMubGltaXQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIHBhZGRpbmcgb3B0aW9uIGtlZXBzIHRoZSBoYW5kbGVzIGEgY2VydGFpbiBkaXN0YW5jZSBmcm9tIHRoZVxuICAgICAgICAgICAgLy8gZWRnZXMgb2YgdGhlIHNsaWRlci4gUGFkZGluZyBtdXN0IGJlID4gMC5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgwLCBvcHRpb25zLnBhZGRpbmdbMF0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDEwMCwgb3B0aW9ucy5wYWRkaW5nWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh0byk7XG4gICAgICAgICAgICAvLyBMaW1pdCBwZXJjZW50YWdlIHRvIHRoZSAwIC0gMTAwIHJhbmdlXG4gICAgICAgICAgICB0byA9IGxpbWl0KHRvKTtcbiAgICAgICAgICAgIC8vIFJldHVybiBmYWxzZSBpZiBoYW5kbGUgY2FuJ3QgbW92ZVxuICAgICAgICAgICAgaWYgKHRvID09PSByZWZlcmVuY2VbaGFuZGxlTnVtYmVyXSAmJiAhZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNlcyBzbGlkZXIgb3JpZW50YXRpb24gdG8gY3JlYXRlIENTUyBydWxlcy4gYSA9IGJhc2UgdmFsdWU7XG4gICAgICAgIGZ1bmN0aW9uIGluUnVsZU9yZGVyKHYsIGEpIHtcbiAgICAgICAgICAgIHZhciBvID0gb3B0aW9ucy5vcnQ7XG4gICAgICAgICAgICByZXR1cm4gKG8gPyBhIDogdikgKyBcIiwgXCIgKyAobyA/IHYgOiBhKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlcyBoYW5kbGUocykgYnkgYSBwZXJjZW50YWdlXG4gICAgICAgIC8vIChib29sLCAlIHRvIG1vdmUsIFslIHdoZXJlIGhhbmRsZSBzdGFydGVkLCAuLi5dLCBbaW5kZXggaW4gc2NvcGVfSGFuZGxlcywgLi4uXSlcbiAgICAgICAgZnVuY3Rpb24gbW92ZUhhbmRsZXModXB3YXJkLCBwcm9wb3NhbCwgbG9jYXRpb25zLCBoYW5kbGVOdW1iZXJzLCBjb25uZWN0KSB7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWxzID0gbG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgICAgICAvLyBTdG9yZSBmaXJzdCBoYW5kbGUgbm93LCBzbyB3ZSBzdGlsbCBoYXZlIGl0IGluIGNhc2UgaGFuZGxlTnVtYmVycyBpcyByZXZlcnNlZFxuICAgICAgICAgICAgdmFyIGZpcnN0SGFuZGxlID0gaGFuZGxlTnVtYmVyc1swXTtcbiAgICAgICAgICAgIHZhciBiID0gWyF1cHdhcmQsIHVwd2FyZF07XG4gICAgICAgICAgICB2YXIgZiA9IFt1cHdhcmQsICF1cHdhcmRdO1xuICAgICAgICAgICAgLy8gQ29weSBoYW5kbGVOdW1iZXJzIHNvIHdlIGRvbid0IGNoYW5nZSB0aGUgZGF0YXNldFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVycyA9IGhhbmRsZU51bWJlcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSB3aGljaCBoYW5kbGUgaXMgJ2xlYWRpbmcnLlxuICAgICAgICAgICAgLy8gSWYgdGhhdCBvbmUgY2FuJ3QgbW92ZSB0aGUgc2Vjb25kIGNhbid0IGVpdGhlci5cbiAgICAgICAgICAgIGlmICh1cHdhcmQpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0ZXAgMTogZ2V0IHRoZSBtYXhpbXVtIHBlcmNlbnRhZ2UgdGhhdCBhbnkgb2YgdGhlIGhhbmRsZXMgY2FuIG1vdmVcbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlciwgbykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHByb3Bvc2FscywgaGFuZGxlTnVtYmVyLCBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgb25lIG9mIHRoZSBoYW5kbGVzIGNhbid0IG1vdmUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsID0gdG8gLSBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdID0gdG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVzaW5nIG9uZSBoYW5kbGUsIGNoZWNrIGJhY2t3YXJkIEFORCBmb3J3YXJkXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiID0gZiA9IFt0cnVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gU3RlcCAyOiBUcnkgdG8gc2V0IHRoZSBoYW5kbGVzIHdpdGggdGhlIGZvdW5kIHBlcmNlbnRhZ2VcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyLCBvKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBsb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dKSB8fCBzdGF0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU3RlcCAzOiBJZiBhIGhhbmRsZSBtb3ZlZCwgZmlyZSBldmVudHNcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGNvbm5lY3QsIHRoZW4gZmlyZSBkcmFnIGV2ZW50XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImRyYWdcIiwgZmlyc3RIYW5kbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUYWtlcyBhIGJhc2UgdmFsdWUgYW5kIGFuIG9mZnNldC4gVGhpcyBvZmZzZXQgaXMgdXNlZCBmb3IgdGhlIGNvbm5lY3QgYmFyIHNpemUuXG4gICAgICAgIC8vIEluIHRoZSBpbml0aWFsIGRlc2lnbiBmb3IgdGhpcyBmZWF0dXJlLCB0aGUgb3JpZ2luIGVsZW1lbnQgd2FzIDElIHdpZGUuXG4gICAgICAgIC8vIFVuZm9ydHVuYXRlbHksIGEgcm91bmRpbmcgYnVnIGluIENocm9tZSBtYWtlcyBpdCBpbXBvc3NpYmxlIHRvIGltcGxlbWVudCB0aGlzIGZlYXR1cmVcbiAgICAgICAgLy8gaW4gdGhpcyBtYW5uZXI6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc5ODIyM1xuICAgICAgICBmdW5jdGlvbiB0cmFuc2Zvcm1EaXJlY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyID8gMTAwIC0gYSAtIGIgOiBhO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZXMgc2NvcGVfTG9jYXRpb25zIGFuZCBzY29wZV9WYWx1ZXMsIHVwZGF0ZXMgdmlzdWFsIHN0YXRlXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZVBvc2l0aW9uKGhhbmRsZU51bWJlciwgdG8pIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvbnMuXG4gICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgdmFsdWUgdG8gdGhlIHNsaWRlciBzdGVwcGluZy9yYW5nZS5cbiAgICAgICAgICAgIHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbiA9IHRyYW5zZm9ybURpcmVjdGlvbih0bywgMCkgLSBzY29wZV9EaXJPZmZzZXQ7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNsYXRpb24gKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9IHRyYW5zbGF0ZVJ1bGU7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlciArIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXMgYmVmb3JlIHRoZSBzbGlkZXIgbWlkZGxlIGFyZSBzdGFja2VkIGxhdGVyID0gaGlnaGVyLFxuICAgICAgICAvLyBIYW5kbGVzIGFmdGVyIHRoZSBtaWRkbGUgbGF0ZXIgaXMgbG93ZXJcbiAgICAgICAgLy8gW1s3XSBbOF0gLi4uLi4uLi4uLiB8IC4uLi4uLi4uLi4gWzVdIFs0XVxuICAgICAgICBmdW5jdGlvbiBzZXRaaW5kZXgoKSB7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHZhciBkaXIgPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA+IDUwID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgIHZhciB6SW5kZXggPSAzICsgKHNjb3BlX0hhbmRsZXMubGVuZ3RoICsgZGlyICogaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGUuekluZGV4ID0gU3RyaW5nKHpJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXN0IHN1Z2dlc3RlZCB2YWx1ZXMgYW5kIGFwcGx5IG1hcmdpbiwgc3RlcC5cbiAgICAgICAgLy8gaWYgZXhhY3RJbnB1dCBpcyB0cnVlLCBkb24ndCBydW4gY2hlY2tIYW5kbGVQb3NpdGlvbiwgdGhlbiB0aGUgaGFuZGxlIGNhbiBiZSBwbGFjZWQgaW4gYmV0d2VlbiBzdGVwcyAoIzQzNilcbiAgICAgICAgZnVuY3Rpb24gc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIGlmICghZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgICAgIHRvID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZXMgc3R5bGUgYXR0cmlidXRlIGZvciBjb25uZWN0IG5vZGVzXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbm5lY3QoaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIFNraXAgY29ubmVjdHMgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoIXNjb3BlX0Nvbm5lY3RzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsID0gMDtcbiAgICAgICAgICAgIHZhciBoID0gMTAwO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSB1c2UgdHdvIHJ1bGVzOlxuICAgICAgICAgICAgLy8gJ3RyYW5zbGF0ZScgdG8gY2hhbmdlIHRoZSBsZWZ0L3RvcCBvZmZzZXQ7XG4gICAgICAgICAgICAvLyAnc2NhbGUnIHRvIGNoYW5nZSB0aGUgd2lkdGggb2YgdGhlIGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBBcyB0aGUgZWxlbWVudCBoYXMgYSB3aWR0aCBvZiAxMDAlLCBhIHRyYW5zbGF0aW9uIG9mIDEwMCUgaXMgZXF1YWwgdG8gMTAwJSBvZiB0aGUgcGFyZW50ICgubm9VaS1iYXNlKVxuICAgICAgICAgICAgdmFyIGNvbm5lY3RXaWR0aCA9IGggLSBsO1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zZm9ybURpcmVjdGlvbihsLCBjb25uZWN0V2lkdGgpICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICAgICAgdmFyIHNjYWxlUnVsZSA9IFwic2NhbGUoXCIgKyBpblJ1bGVPcmRlcihjb25uZWN0V2lkdGggLyAxMDAsIFwiMVwiKSArIFwiKVwiO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHNbaW5kZXhdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPVxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVJ1bGUgKyBcIiBcIiArIHNjYWxlUnVsZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQYXJzZXMgdmFsdWUgcGFzc2VkIHRvIC5zZXQgbWV0aG9kLiBSZXR1cm5zIGN1cnJlbnQgdmFsdWUgaWYgbm90IHBhcnNlLWFibGUuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVUb1ZhbHVlKHRvLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIC8vIFNldHRpbmcgd2l0aCBudWxsIGluZGljYXRlcyBhbiAnaWdub3JlJy5cbiAgICAgICAgICAgIC8vIElucHV0dGluZyAnZmFsc2UnIGlzIGludmFsaWQuXG4gICAgICAgICAgICBpZiAodG8gPT09IG51bGwgfHwgdG8gPT09IGZhbHNlIHx8IHRvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhIGZvcm1hdHRlZCBudW1iZXIgd2FzIHBhc3NlZCwgYXR0ZW1wdCB0byBkZWNvZGUgaXQuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBTdHJpbmcodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8gPSBvcHRpb25zLmZvcm1hdC5mcm9tKHRvKTtcbiAgICAgICAgICAgIGlmICh0byAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgcGFyc2luZyB0aGUgbnVtYmVyIGZhaWxlZCwgdXNlIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSB8fCBpc05hTih0bykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlU2V0KGlucHV0LCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBhc0FycmF5KGlucHV0KTtcbiAgICAgICAgICAgIHZhciBpc0luaXQgPSBzY29wZV9Mb2NhdGlvbnNbMF0gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIC8vIEV2ZW50IGZpcmVzIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIGZpcmVTZXRFdmVudCA9IGZpcmVTZXRFdmVudCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZpcmVTZXRFdmVudDtcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBpcyBvcHRpb25hbC5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5pdGlhbCB2YWx1ZXMgd2VyZSBzZXQgYmVmb3JlIHVzaW5nIGFuaW1hdGVkIHBsYWNlbWVudC5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGUgJiYgIWlzSW5pdCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJzdCBwYXNzLCB3aXRob3V0IGxvb2tBaGVhZCBidXQgd2l0aCBsb29rQmFja3dhcmQuIFZhbHVlcyBhcmUgc2V0IGZyb20gbGVmdCB0byByaWdodC5cbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWVzW2hhbmRsZU51bWJlcl0sIGhhbmRsZU51bWJlciksIHRydWUsIGZhbHNlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGkgPSBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSA/IDAgOiAxO1xuICAgICAgICAgICAgLy8gU3ByZWFkIGhhbmRsZXMgZXZlbmx5IGFjcm9zcyB0aGUgc2xpZGVyIGlmIHRoZSByYW5nZSBoYXMgbm8gc2l6ZSAobWluPW1heClcbiAgICAgICAgICAgIGlmIChpc0luaXQgJiYgc2NvcGVfU3BlY3RydW0uaGFzTm9TaXplKCkpIHtcbiAgICAgICAgICAgICAgICBleGFjdElucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbMF0gPSAwO1xuICAgICAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwYWNlXzEgPSAxMDAgLyAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID0gaGFuZGxlTnVtYmVyICogc3BhY2VfMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2Vjb25kYXJ5IHBhc3Nlcy4gTm93IHRoYXQgYWxsIGJhc2UgdmFsdWVzIGFyZSBzZXQsIGFwcGx5IGNvbnN0cmFpbnRzLlxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBhbGwgaGFuZGxlcyB0byBlbnN1cmUgY29uc3RyYWludHMgYXJlIGFwcGxpZWQgZm9yIHRoZSBlbnRpcmUgc2xpZGVyIChJc3N1ZSAjMTAwOSlcbiAgICAgICAgICAgIGZvciAoOyBpIDwgc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAvLyBGaXJlIHRoZSBldmVudCBvbmx5IGZvciBoYW5kbGVzIHRoYXQgcmVjZWl2ZWQgYSBuZXcgdmFsdWUsIGFzIHBlciAjNTc5XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlc1toYW5kbGVOdW1iZXJdICE9PSBudWxsICYmIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCBzbGlkZXIgdG8gaW5pdGlhbCB2YWx1ZXNcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVSZXNldChmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHZhbHVlIGZvciBhIHNpbmdsZSBoYW5kbGVcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB2YWx1ZSwgZmlyZVNldEV2ZW50LCBleGFjdElucHV0KSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgbnVtZXJpYyBpbnB1dFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gTnVtYmVyKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBpZiAoIShoYW5kbGVOdW1iZXIgPj0gMCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBpbnZhbGlkIGhhbmRsZSBudW1iZXIsIGdvdDogXCIgKyBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9vayBib3RoIGJhY2t3YXJkIGFuZCBmb3J3YXJkLCBzaW5jZSB3ZSBkb24ndCB3YW50IHRoaXMgaGFuZGxlIHRvIFwicHVzaFwiIG90aGVyIGhhbmRsZXMgKCM5NjApO1xuICAgICAgICAgICAgLy8gVGhlIGV4YWN0SW5wdXQgYXJndW1lbnQgY2FuIGJlIHVzZWQgdG8gaWdub3JlIHNsaWRlciBzdGVwcGluZyAoIzQzNilcbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHJlc29sdmVUb1ZhbHVlKHZhbHVlLCBoYW5kbGVOdW1iZXIpLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgc2xpZGVyIHZhbHVlLlxuICAgICAgICBmdW5jdGlvbiB2YWx1ZUdldCh1bmVuY29kZWQpIHtcbiAgICAgICAgICAgIGlmICh1bmVuY29kZWQgPT09IHZvaWQgMCkgeyB1bmVuY29kZWQgPSBmYWxzZTsgfVxuICAgICAgICAgICAgaWYgKHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBhIGNvcHkgb2YgdGhlIHJhdyB2YWx1ZXNcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVmFsdWVzLmxlbmd0aCA9PT0gMSA/IHNjb3BlX1ZhbHVlc1swXSA6IHNjb3BlX1ZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKTtcbiAgICAgICAgICAgIC8vIElmIG9ubHkgb25lIGhhbmRsZSBpcyB1c2VkLCByZXR1cm4gYSBzaW5nbGUgdmFsdWUuXG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZXMgY2xhc3NlcyBmcm9tIHRoZSByb290IGFuZCBlbXB0aWVzIGl0LlxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHByb3RlY3RlZCBpbnRlcm5hbCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLmFyaWEpO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5jc3NDbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlc1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2hpbGUgKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfVGFyZ2V0LnJlbW92ZUNoaWxkKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBzY29wZV9UYXJnZXQubm9VaVNsaWRlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHNGb3JIYW5kbGUoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHZhciBuZWFyYnlTdGVwcyA9IHNjb3BlX1NwZWN0cnVtLmdldE5lYXJieVN0ZXBzKGxvY2F0aW9uKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgdmFyIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgICAgICB2YXIgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIC8vIElmIHNuYXBwZWQsIGRpcmVjdGx5IHVzZSBkZWZpbmVkIHN0ZXAgdmFsdWVcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNuYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RhcnRWYWx1ZSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlIHx8IG51bGxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIG5leHQgdmFsdWUgaW4gdGhpcyBzdGVwIG1vdmVzIGludG8gdGhlIG5leHQgc3RlcCxcbiAgICAgICAgICAgIC8vIHRoZSBpbmNyZW1lbnQgaXMgdGhlIHN0YXJ0IG9mIHRoZSBuZXh0IHN0ZXAgLSB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgKyBpbmNyZW1lbnQgPiBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBiZXlvbmQgdGhlIHN0YXJ0aW5nIHBvaW50XG4gICAgICAgICAgICBpZiAodmFsdWUgPiBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGEgaGFuZGxlIGlzIGF0IHRoZSBzdGFydCBvZiBhIHN0ZXAsIGl0IGFsd2F5cyBzdGVwcyBiYWNrIGludG8gdGhlIHByZXZpb3VzIHN0ZXAgZmlyc3RcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5oaWdoZXN0U3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vdywgaWYgYXQgdGhlIHNsaWRlciBlZGdlcywgdGhlcmUgaXMgbm8gaW4vZGVjcmVtZW50XG4gICAgICAgICAgICBpZiAobG9jYXRpb24gPT09IDEwMCkge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsb2NhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcyBwZXIgIzM5MSwgdGhlIGNvbXBhcmlzb24gZm9yIHRoZSBkZWNyZW1lbnQgc3RlcCBjYW4gaGF2ZSBzb21lIHJvdW5kaW5nIGlzc3Vlcy5cbiAgICAgICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSBzY29wZV9TcGVjdHJ1bS5jb3VudFN0ZXBEZWNpbWFscygpO1xuICAgICAgICAgICAgLy8gUm91bmQgcGVyICMzOTFcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnQgIT09IG51bGwgJiYgaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IE51bWJlcihpbmNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWNyZW1lbnQgIT09IG51bGwgJiYgZGVjcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IE51bWJlcihkZWNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbZGVjcmVtZW50LCBpbmNyZW1lbnRdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGVwIHNpemUgZm9yIHRoZSBzbGlkZXIuXG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwcygpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVOdW1iZXJzLm1hcChnZXROZXh0U3RlcHNGb3JIYW5kbGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0YWJsZTogbWFyZ2luLCBsaW1pdCwgcGFkZGluZywgc3RlcCwgcmFuZ2UsIGFuaW1hdGUsIHNuYXBcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRpb25zVG9VcGRhdGUsIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgLy8gU3BlY3RydW0gaXMgY3JlYXRlZCB1c2luZyB0aGUgcmFuZ2UsIHNuYXAsIGRpcmVjdGlvbiBhbmQgc3RlcCBvcHRpb25zLlxuICAgICAgICAgICAgLy8gJ3NuYXAnIGFuZCAnc3RlcCcgY2FuIGJlIHVwZGF0ZWQuXG4gICAgICAgICAgICAvLyBJZiAnc25hcCcgYW5kICdzdGVwJyBhcmUgbm90IHBhc3NlZCwgdGhleSBzaG91bGQgcmVtYWluIHVuY2hhbmdlZC5cbiAgICAgICAgICAgIHZhciB2ID0gdmFsdWVHZXQoKTtcbiAgICAgICAgICAgIHZhciB1cGRhdGVBYmxlID0gW1xuICAgICAgICAgICAgICAgIFwibWFyZ2luXCIsXG4gICAgICAgICAgICAgICAgXCJsaW1pdFwiLFxuICAgICAgICAgICAgICAgIFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmFuZ2VcIixcbiAgICAgICAgICAgICAgICBcImFuaW1hdGVcIixcbiAgICAgICAgICAgICAgICBcInNuYXBcIixcbiAgICAgICAgICAgICAgICBcInN0ZXBcIixcbiAgICAgICAgICAgICAgICBcImZvcm1hdFwiLFxuICAgICAgICAgICAgICAgIFwicGlwc1wiLFxuICAgICAgICAgICAgICAgIFwidG9vbHRpcHNcIlxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIE9ubHkgY2hhbmdlIG9wdGlvbnMgdGhhdCB3ZSdyZSBhY3R1YWxseSBwYXNzZWQgdG8gdXBkYXRlLlxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHVuZGVmaW5lZC4gbnVsbCByZW1vdmVzIHRoZSB2YWx1ZS5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1RvVXBkYXRlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxPcHRpb25zW25hbWVdID0gb3B0aW9uc1RvVXBkYXRlW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5ld09wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICAgICAgLy8gTG9hZCBuZXcgb3B0aW9ucyBpbnRvIHRoZSBzbGlkZXIgc3RhdGVcbiAgICAgICAgICAgIHVwZGF0ZUFibGUuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW25hbWVdID0gbmV3T3B0aW9uc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjb3BlX1NwZWN0cnVtID0gbmV3T3B0aW9ucy5zcGVjdHJ1bTtcbiAgICAgICAgICAgIC8vIExpbWl0LCBtYXJnaW4gYW5kIHBhZGRpbmcgZGVwZW5kIG9uIHRoZSBzcGVjdHJ1bSBidXQgYXJlIHN0b3JlZCBvdXRzaWRlIG9mIGl0LiAoIzY3NylcbiAgICAgICAgICAgIG9wdGlvbnMubWFyZ2luID0gbmV3T3B0aW9ucy5tYXJnaW47XG4gICAgICAgICAgICBvcHRpb25zLmxpbWl0ID0gbmV3T3B0aW9ucy5saW1pdDtcbiAgICAgICAgICAgIG9wdGlvbnMucGFkZGluZyA9IG5ld09wdGlvbnMucGFkZGluZztcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwaXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGlwcykge1xuICAgICAgICAgICAgICAgIHBpcHMob3B0aW9ucy5waXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZVBpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0b29sdGlwcywgcmVtb3ZlcyBleGlzdGluZy5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJbnZhbGlkYXRlIHRoZSBjdXJyZW50IHBvc2l0aW9uaW5nIHNvIHZhbHVlU2V0IGZvcmNlcyBhbiB1cGRhdGUuXG4gICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIHZhbHVlU2V0KGlzU2V0KG9wdGlvbnNUb1VwZGF0ZS5zdGFydCkgPyBvcHRpb25zVG9VcGRhdGUuc3RhcnQgOiB2LCBmaXJlU2V0RXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemF0aW9uIHN0ZXBzXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwU2xpZGVyKCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGVsZW1lbnQsIGluaXRpYWxpemUgSFRNTCBhbmQgc2V0IGNsYXNzZXMuXG4gICAgICAgICAgICAvLyBBZGQgaGFuZGxlcyBhbmQgY29ubmVjdCBlbGVtZW50cy5cbiAgICAgICAgICAgIHNjb3BlX0Jhc2UgPSBhZGRTbGlkZXIoc2NvcGVfVGFyZ2V0KTtcbiAgICAgICAgICAgIGFkZEVsZW1lbnRzKG9wdGlvbnMuY29ubmVjdCwgc2NvcGVfQmFzZSk7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdXNlciBldmVudHMuXG4gICAgICAgICAgICBiaW5kU2xpZGVyRXZlbnRzKG9wdGlvbnMuZXZlbnRzKTtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcHVibGljIHZhbHVlIG1ldGhvZCB0byBzZXQgdGhlIHN0YXJ0IHZhbHVlcy5cbiAgICAgICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGlwcykge1xuICAgICAgICAgICAgICAgIHBpcHMob3B0aW9ucy5waXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyaWEoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXR1cFNsaWRlcigpO1xuICAgICAgICB2YXIgc2NvcGVfU2VsZiA9IHtcbiAgICAgICAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICAgICAgICBzdGVwczogZ2V0TmV4dFN0ZXBzLFxuICAgICAgICAgICAgb246IGJpbmRFdmVudCxcbiAgICAgICAgICAgIG9mZjogcmVtb3ZlRXZlbnQsXG4gICAgICAgICAgICBnZXQ6IHZhbHVlR2V0LFxuICAgICAgICAgICAgc2V0OiB2YWx1ZVNldCxcbiAgICAgICAgICAgIHNldEhhbmRsZTogdmFsdWVTZXRIYW5kbGUsXG4gICAgICAgICAgICByZXNldDogdmFsdWVSZXNldCxcbiAgICAgICAgICAgIC8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZywgZG9uJ3QgdXNlIHRoaXMgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIF9fbW92ZUhhbmRsZXM6IGZ1bmN0aW9uICh1cHdhcmQsIHByb3Bvc2FsLCBoYW5kbGVOdW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgbW92ZUhhbmRsZXModXB3YXJkLCBwcm9wb3NhbCwgc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXJzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiBvcmlnaW5hbE9wdGlvbnMsXG4gICAgICAgICAgICB1cGRhdGVPcHRpb25zOiB1cGRhdGVPcHRpb25zLFxuICAgICAgICAgICAgdGFyZ2V0OiBzY29wZV9UYXJnZXQsXG4gICAgICAgICAgICByZW1vdmVQaXBzOiByZW1vdmVQaXBzLFxuICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHM6IHJlbW92ZVRvb2x0aXBzLFxuICAgICAgICAgICAgZ2V0UG9zaXRpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFRvb2x0aXBzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1Rvb2x0aXBzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldE9yaWdpbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfSGFuZGxlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaXBzOiBwaXBzIC8vIElzc3VlICM1OTRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNjb3BlX1NlbGY7XG4gICAgfVxuICAgIC8vIFJ1biB0aGUgc3RhbmRhcmQgaW5pdGlhbGl6ZXJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKHRhcmdldCwgb3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQubm9kZU5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGNyZWF0ZSByZXF1aXJlcyBhIHNpbmdsZSBlbGVtZW50LCBnb3Q6IFwiICsgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgc2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgICAgICBpZiAodGFyZ2V0Lm5vVWlTbGlkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IFNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVzdCB0aGUgb3B0aW9ucyBhbmQgY3JlYXRlIHRoZSBzbGlkZXIgZW52aXJvbm1lbnQ7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGVzdE9wdGlvbnMob3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgdmFyIGFwaSA9IHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgdGFyZ2V0Lm5vVWlTbGlkZXIgPSBhcGk7XG4gICAgICAgIHJldHVybiBhcGk7XG4gICAgfVxuICAgIHZhciBub3Vpc2xpZGVyID0ge1xuICAgICAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgIF9fc3BlY3RydW06IFNwZWN0cnVtLFxuICAgICAgICAvLyBBIHJlZmVyZW5jZSB0byB0aGUgZGVmYXVsdCBjbGFzc2VzLCBhbGxvd3MgZ2xvYmFsIGNoYW5nZXMuXG4gICAgICAgIC8vIFVzZSB0aGUgY3NzQ2xhc3NlcyBvcHRpb24gZm9yIGNoYW5nZXMgdG8gb25lIHNsaWRlci5cbiAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAgY3JlYXRlOiBpbml0aWFsaXplXG4gICAgfTtcblxuICAgIGV4cG9ydHMuY3JlYXRlID0gaW5pdGlhbGl6ZTtcbiAgICBleHBvcnRzLmNzc0NsYXNzZXMgPSBjc3NDbGFzc2VzO1xuICAgIGV4cG9ydHNbJ2RlZmF1bHQnXSA9IG5vdWlzbGlkZXI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Gb290ZXIgPSB2b2lkIDA7XHJcbmNvbnN0IGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi90ZW1wbGF0ZXMvY29tcG9uZW50c1wiKTtcclxucmVxdWlyZShcIi4vZm9vdGVyLmNzc1wiKTtcclxuY29uc3QgTGlua3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiAnYXV0aG9yJyxcclxuICAgICAgICBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL1Zpa3RvckVsZW5pY2gnLFxyXG4gICAgICAgIHRhcmdldDogJ19ibGFuaycsXHJcbiAgICAgICAgdGV4dDogJ8KpIDIwMjEgVmlrdG9yIEVsZW5pY2gnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ2xvZ28tcnNzJyxcclxuICAgICAgICBocmVmOiAnaHR0cHM6Ly9ycy5zY2hvb2wvanMvJyxcclxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxyXG4gICAgICAgIHRleHQ6ICcnXHJcbiAgICB9XHJcbl07XHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIGNvbXBvbmVudHNfMS5Db21wb25lbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWQpIHtcclxuICAgICAgICBzdXBlcih0YWdOYW1lLCBjbGFzc05hbWUsIGlkKTtcclxuICAgIH1cclxuICAgIHJlbmRlckF1dGhvckRlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGZvb3RlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb290ZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci13cmFwcGVyJyk7XHJcbiAgICAgICAgTGlua3MuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYUhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGFIVE1MLmlubmVyVGV4dCA9IGVsZW0udGV4dDtcclxuICAgICAgICAgICAgYUhUTUwuY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgIGFIVE1MLmhyZWYgPSBlbGVtLmhyZWY7XHJcbiAgICAgICAgICAgIGFIVE1MLnRhcmdldCA9IGVsZW0udGFyZ2V0O1xyXG4gICAgICAgICAgICBmb290ZXJXcmFwcGVyLmFwcGVuZChhSFRNTCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGZvb3RlcldyYXBwZXIpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyQXV0aG9yRGVzY3JpcHRpb24oKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Gb290ZXIgPSBGb290ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuSGVhZGVyID0gdm9pZCAwO1xyXG5yZXF1aXJlKFwiLi9oZWFkZXIuY3NzXCIpO1xyXG5jb25zdCBjb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vdGVtcGxhdGVzL2NvbXBvbmVudHNcIik7XHJcbmNvbnN0IEJ1dHRvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwibWFpbi1wYWdlXCIsXHJcbiAgICAgICAgdGV4dDogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcInRveXMtcGFnZVwiLFxyXG4gICAgICAgIHRleHQ6ICfQuNCz0YDRg9GI0LrQuCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImdhbWUtcGFnZVwiLFxyXG4gICAgICAgIHRleHQ6ICfRkdC70LrQsCcsXHJcbiAgICB9XHJcbl07XHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIGNvbXBvbmVudHNfMS5Db21wb25lbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWQpIHtcclxuICAgICAgICBzdXBlcih0YWdOYW1lLCBjbGFzc05hbWUsIGlkKTtcclxuICAgIH1cclxuICAgIHJlbmRlclBhZ2VCdXR0b25zKCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2VCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGFnZUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hBbmRGYXZvcml0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXRTZWFyY2guY2xhc3NMaXN0LmFkZCgnaW5wdXRfc2VhcmNoJyk7XHJcbiAgICAgICAgaW5wdXRTZWFyY2gudHlwZSA9ICdzZWFyY2gnO1xyXG4gICAgICAgIGlucHV0U2VhcmNoLm5hbWUgPSAnc2VhcmNoJztcclxuICAgICAgICBpbnB1dFNlYXJjaC5wbGFjZWhvbGRlciA9ICfQn9C+0LjRgdC6JztcclxuICAgICAgICBpbnB1dFNlYXJjaC5pZCA9ICdzZWFyY2gnO1xyXG4gICAgICAgIGlucHV0U2VhcmNoLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xyXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZhdm9yaXRlcy5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZXMnKTtcclxuICAgICAgICBmYXZvcml0ZXMuaW5uZXJIVE1MID0gYDxzcGFuPjwvc3Bhbj5gO1xyXG4gICAgICAgIHNlYXJjaEFuZEZhdm9yaXRlcy5jbGFzc0xpc3QuYWRkKCdzZWFyY2hfZmF2b3JpdGVzJyk7XHJcbiAgICAgICAgd3JhcHBlckhlYWRlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XHJcbiAgICAgICAgd3JhcHBlckhlYWRlci5hcHBlbmQocGFnZUJ1dHRvbnMpO1xyXG4gICAgICAgIHdyYXBwZXJIZWFkZXIuYXBwZW5kKHNlYXJjaEFuZEZhdm9yaXRlcyk7XHJcbiAgICAgICAgc2VhcmNoQW5kRmF2b3JpdGVzLmFwcGVuZChpbnB1dFNlYXJjaCk7XHJcbiAgICAgICAgc2VhcmNoQW5kRmF2b3JpdGVzLmFwcGVuZChmYXZvcml0ZXMpO1xyXG4gICAgICAgIEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25IVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBidXR0b25IVE1MLmhyZWYgPSBgIyR7YnV0dG9uLmlkfWA7XHJcbiAgICAgICAgICAgIGJ1dHRvbkhUTUwuaW5uZXJIVE1MID0gYnV0dG9uLnRleHQ7XHJcbiAgICAgICAgICAgIGJ1dHRvbkhUTUwuY2xhc3NMaXN0LmFkZCgnbGlua3MnKTtcclxuICAgICAgICAgICAgcGFnZUJ1dHRvbnMuYXBwZW5kKGJ1dHRvbkhUTUwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGdhcmxhbmRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZ2FybGFuZE1haW4uY2xhc3NMaXN0LmFkZCgnZ2FybGFuZF80Jyk7XHJcbiAgICAgICAgZ2FybGFuZE1haW4uaWQgPSAnZ2FybGFuZCc7XHJcbiAgICAgICAgZ2FybGFuZE1haW4uaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJudW1zXzFcIj4xPC9kaXY+YDtcclxuICAgICAgICB3cmFwcGVySGVhZGVyLmFwcGVuZChnYXJsYW5kTWFpbik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHdyYXBwZXJIZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgbWFpbkdhcmxhbmQoKSB7XHJcbiAgICAgICAgY29uc3QgbnVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW1zXzEnKS5pbm5lckhUTUw7XHJcbiAgICAgICAgaWYgKE51bWJlcihudW1zKSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYXJsYW5kJykuY2xhc3NOYW1lID0gJ2dhcmxhbmRfMSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW1zXzEnKS5pbm5lckhUTUwgPSAnMic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChOdW1iZXIobnVtcykgPT0gMikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FybGFuZCcpLmNsYXNzTmFtZSA9ICdnYXJsYW5kXzInO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtc18xJykuaW5uZXJIVE1MID0gJzMnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTnVtYmVyKG51bXMpID09IDMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhcmxhbmQnKS5jbGFzc05hbWUgPSAnZ2FybGFuZF8zJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bXNfMScpLmlubmVySFRNTCA9ICc0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE51bWJlcihudW1zKSA9PSA0KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYXJsYW5kJykuY2xhc3NOYW1lID0gJ2dhcmxhbmRfNCc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW1zXzEnKS5pbm5lckhUTUwgPSAnMSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyUGFnZUJ1dHRvbnMoKTtcclxuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLm1haW5HYXJsYW5kLCA4MDApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkhlYWRlciA9IEhlYWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5NYWluID0gdm9pZCAwO1xyXG5jb25zdCBjb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vdGVtcGxhdGVzL2NvbXBvbmVudHNcIik7XHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBjb21wb25lbnRzXzEuQ29tcG9uZW50cyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBjbGFzc05hbWUsIGlkKSB7XHJcbiAgICAgICAgc3VwZXIodGFnTmFtZSwgY2xhc3NOYW1lLCBpZCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWFpbiA9IE1haW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ29tcG9uZW50cyA9IHZvaWQgMDtcclxuY2xhc3MgQ29tcG9uZW50cyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBjbGFzc05hbWUsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbXBvbmVudHMgPSBDb21wb25lbnRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlBhZ2UgPSB2b2lkIDA7XHJcbmNsYXNzIFBhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoaWQpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QYWdlID0gUGFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBudW06ICcxJyxcclxuICAgICAgICBuYW1lOiAn0JHQvtC70YzRiNC+0Lkg0YjQsNGAINGBINGA0LjRgdGD0L3QutC+0LwnLFxyXG4gICAgICAgIGNvdW50OiAnMicsXHJcbiAgICAgICAgeWVhcjogJzE5NjAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzInLFxyXG4gICAgICAgIG5hbWU6ICfQl9C10LvRkdC90YvQuSDRiNCw0YAg0YEg0YbQstC10YLQsNC80LgnLFxyXG4gICAgICAgIGNvdW50OiAnNScsXHJcbiAgICAgICAgeWVhcjogJzIwMDAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C30LXQu9GR0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMycsXHJcbiAgICAgICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INC80LDRgtC+0LLRi9C5INGI0LDRgCcsXHJcbiAgICAgICAgY291bnQ6ICczJyxcclxuICAgICAgICB5ZWFyOiAnMTk5MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc0JyxcclxuICAgICAgICBuYW1lOiAn0KHQvtGB0YPQu9GM0LrQsCDQutGA0LDRgdC90LDRjycsXHJcbiAgICAgICAgY291bnQ6ICcyJyxcclxuICAgICAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzUnLFxyXG4gICAgICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDQstC40L3QvtCz0YDQsNC0JyxcclxuICAgICAgICBjb3VudDogJzQnLFxyXG4gICAgICAgIHllYXI6ICcxOTgwJyxcclxuICAgICAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc2JyxcclxuICAgICAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0YjQsNGAINGBINGA0LjRgdGD0L3QutC+0LwnLFxyXG4gICAgICAgIGNvdW50OiAnNicsXHJcbiAgICAgICAgeWVhcjogJzIwMTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNycsXHJcbiAgICAgICAgbmFtZTogJ9Cc0L7Qu9C+0YfQvdC+LdCx0LXQu9GL0Lkg0YjQsNGAJyxcclxuICAgICAgICBjb3VudDogJzEyJyxcclxuICAgICAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgICAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnOCcsXHJcbiAgICAgICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCcsXHJcbiAgICAgICAgY291bnQ6ICcxMCcsXHJcbiAgICAgICAgeWVhcjogJzIwMTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnOScsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7Qu9C+0LrQvtC70YzRh9C40Log0YHRgtCw0YDQuNC90L3Ri9C5JyxcclxuICAgICAgICBjb3VudDogJzInLFxyXG4gICAgICAgIHllYXI6ICcxOTUwJyxcclxuICAgICAgICBzaGFwZTogJ9C60L7Qu9C+0LrQvtC70YzRh9C40LonLFxyXG4gICAgICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzEwJyxcclxuICAgICAgICBuYW1lOiAn0JHQtdC70YvQuSDRiNCw0YAg0YDQtdGC0YDQvicsXHJcbiAgICAgICAgY291bnQ6ICc3JyxcclxuICAgICAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzExJyxcclxuICAgICAgICBuYW1lOiAn0KjQuNGI0LrQsCDQtdC70L7QstCw0Y8g0LHQtdC70LDRjycsXHJcbiAgICAgICAgY291bnQ6ICcxMScsXHJcbiAgICAgICAgeWVhcjogJzE5NjAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQuNGI0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LzQsNC70YvQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICcxMicsXHJcbiAgICAgICAgbmFtZTogJ9CR0LXQu9GL0Lkg0YjQsNGAINGBINGG0LLQtdGC0LDQvNC4JyxcclxuICAgICAgICBjb3VudDogJzUnLFxyXG4gICAgICAgIHllYXI6ICcxOTgwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMTMnLFxyXG4gICAgICAgIG5hbWU6ICfQqNCw0YAg0YDQsNGB0L/QuNGB0L3QvtC5INCg0LXQutCwJyxcclxuICAgICAgICBjb3VudDogJzMnLFxyXG4gICAgICAgIHllYXI6ICcxOTcwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICcxNCcsXHJcbiAgICAgICAgbmFtZTogJ9Co0LDRgCDRgNCw0YHQv9C40YHQvdC+0Lkg0JTQtdGA0LXQstC90Y8nLFxyXG4gICAgICAgIGNvdW50OiAnNCcsXHJcbiAgICAgICAgeWVhcjogJzE5NzAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9GB0LjQvdC40LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzE1JyxcclxuICAgICAgICBuYW1lOiAn0JrQvtC70L7QutC+0LvRjNGH0LjQuiDRgNCw0YHQv9C40YHQvdC+0LknLFxyXG4gICAgICAgIGNvdW50OiAnMycsXHJcbiAgICAgICAgeWVhcjogJzE5NzAnLFxyXG4gICAgICAgIHNoYXBlOiAn0LrQvtC70L7QutC+0LvRjNGH0LjQuicsXHJcbiAgICAgICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgICAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMTYnLFxyXG4gICAgICAgIG5hbWU6ICfQqNC40YjQutCwINGA0LDRgdC/0LjRgdC90LDRjyDQn9C10LnQt9Cw0LYnLFxyXG4gICAgICAgIGNvdW50OiAnMycsXHJcbiAgICAgICAgeWVhcjogJzE5NzAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQuNGI0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgICAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICcxNycsXHJcbiAgICAgICAgbmFtZTogJ9Co0LjRiNC60LAg0YDQsNGB0L/QuNGB0L3QsNGPJyxcclxuICAgICAgICBjb3VudDogJzcnLFxyXG4gICAgICAgIHllYXI6ICcxOTcwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LjRiNC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICcxOCcsXHJcbiAgICAgICAgbmFtZTogJ9CW0LXQu9GC0YvQuSDRiNCw0YAg0YEg0LHQsNC90YLQvtC8JyxcclxuICAgICAgICBjb3VudDogJzInLFxyXG4gICAgICAgIHllYXI6ICcyMDEwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICcxOScsXHJcbiAgICAgICAgbmFtZTogJ9CW0LXQu9GC0YvQuSDRiNCw0YAg0YEg0L/QsNC10YLQutCw0LzQuCcsXHJcbiAgICAgICAgY291bnQ6ICcxMicsXHJcbiAgICAgICAgeWVhcjogJzE5ODAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzIwJyxcclxuICAgICAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0YjQsNGAINGBINCx0LDQvdGC0L7QvCcsXHJcbiAgICAgICAgY291bnQ6ICc4JyxcclxuICAgICAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzIxJyxcclxuICAgICAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0YjQsNGAINGBINC30LLRkdC30LTQsNC80LgnLFxyXG4gICAgICAgIGNvdW50OiAnNCcsXHJcbiAgICAgICAgeWVhcjogJzE5NzAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICcyMicsXHJcbiAgICAgICAgbmFtZTogJ9Co0LjRiNC60LAg0LXQu9C+0LLQsNGPINC30L7Qu9C+0YLQsNGPJyxcclxuICAgICAgICBjb3VudDogJzExJyxcclxuICAgICAgICB5ZWFyOiAnMTk5MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNC40YjQutCwJyxcclxuICAgICAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9C80LDQu9GL0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMjMnLFxyXG4gICAgICAgIG5hbWU6ICfQmtC+0LvQvtC60L7Qu9GM0YfQuNC6INGB0YLQsNGA0LjQvdC90YvQuScsXHJcbiAgICAgICAgY291bnQ6ICc5JyxcclxuICAgICAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICAgICAgc2hhcGU6ICfQutC+0LvQvtC60L7Qu9GM0YfQuNC6JyxcclxuICAgICAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzI0JyxcclxuICAgICAgICBuYW1lOiAn0KHQvdC10LbQuNC90LrQsCDQuNC30Y/RidC90LDRjycsXHJcbiAgICAgICAgY291bnQ6ICcxJyxcclxuICAgICAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRgdC90LXQttC40L3QutCwJyxcclxuICAgICAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICcyNScsXHJcbiAgICAgICAgbmFtZTogJ9Cg0L7Qt9C+0LLRi9C5INGI0LDRgCDRgSDQsdC70ZHRgdGC0LrQsNC80LgnLFxyXG4gICAgICAgIGNvdW50OiAnMTInLFxyXG4gICAgICAgIHllYXI6ICcyMDEwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzI2JyxcclxuICAgICAgICBuYW1lOiAn0KDRg9Cx0LjQvdC+0LLQvi3Qt9C+0LvQvtGC0L7QuSDRiNCw0YAnLFxyXG4gICAgICAgIGNvdW50OiAnOCcsXHJcbiAgICAgICAgeWVhcjogJzE5NjAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzI3JyxcclxuICAgICAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0YjQsNGAINGBINGD0LfQvtGA0L7QvCcsXHJcbiAgICAgICAgY291bnQ6ICc0JyxcclxuICAgICAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICcyOCcsXHJcbiAgICAgICAgbmFtZTogJ9CR0L7RgNC00L7QstGL0Lkg0YjQsNGAINGBINGD0LfQvtGA0L7QvCcsXHJcbiAgICAgICAgY291bnQ6ICcxMCcsXHJcbiAgICAgICAgeWVhcjogJzIwMTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMjknLFxyXG4gICAgICAgIG5hbWU6ICfQodGC0LDRgNC40L3QvdGL0Lkg0YjQsNGAINGBINGG0LLQtdGC0LDQvNC4JyxcclxuICAgICAgICBjb3VudDogJzUnLFxyXG4gICAgICAgIHllYXI6ICcxOTUwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzMwJyxcclxuICAgICAgICBuYW1lOiAn0KHRgtCw0YDQuNC90L3Ri9C5INGI0LDRgCDRgSDRg9C30L7RgNC+0LwnLFxyXG4gICAgICAgIGNvdW50OiAnOCcsXHJcbiAgICAgICAgeWVhcjogJzE5NTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMzEnLFxyXG4gICAgICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDRiNCw0YAg0YEg0LHQu9GR0YHRgtC60LDQvNC4JyxcclxuICAgICAgICBjb3VudDogJzgnLFxyXG4gICAgICAgIHllYXI6ICcyMDEwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzMyJyxcclxuICAgICAgICBuYW1lOiAn0KHQuNC90LjQuSDRiNCw0YAg0JLRgdC10LvQtdC90L3QsNGPJyxcclxuICAgICAgICBjb3VudDogJzExJyxcclxuICAgICAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0YHQuNC90LjQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzMzJyxcclxuICAgICAgICBuYW1lOiAn0KHQuNC90LjQuSDRiNCw0YAg0YHQviDRgdC90LXQttC40L3QutC+0LknLFxyXG4gICAgICAgIGNvdW50OiAnNicsXHJcbiAgICAgICAgeWVhcjogJzIwMTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9GB0LjQvdC40LknLFxyXG4gICAgICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICczNCcsXHJcbiAgICAgICAgbmFtZTogJ9CX0LXQu9GR0L3Ri9C5ICDRiNCw0YAg0YEg0YPQt9C+0YDQvtC8JyxcclxuICAgICAgICBjb3VudDogJzgnLFxyXG4gICAgICAgIHllYXI6ICcyMDEwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQt9C10LvRkdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzM1JyxcclxuICAgICAgICBuYW1lOiAn0KTQuNCz0YPRgNC60LAg0JvQuNGBINCyINGI0LDRgNGE0LUnLFxyXG4gICAgICAgIGNvdW50OiAnOCcsXHJcbiAgICAgICAgeWVhcjogJzE5NTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgICAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICczNicsXHJcbiAgICAgICAgbmFtZTogJ9Ch0LjRgNC10L3QtdCy0YvQuSDRiNCw0YAg0JzQtdGC0LXQu9GMJyxcclxuICAgICAgICBjb3VudDogJzEnLFxyXG4gICAgICAgIHllYXI6ICcyMDAwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMzcnLFxyXG4gICAgICAgIG5hbWU6ICfQl9C10LvRkdC90YvQuSAg0YjQsNGAINCc0LXRgtC10LvRjCcsXHJcbiAgICAgICAgY291bnQ6ICc2JyxcclxuICAgICAgICB5ZWFyOiAnMjAwMCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LfQtdC70ZHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICczOCcsXHJcbiAgICAgICAgbmFtZTogJ9CT0L7Qu9GD0LHQvtC5ICDRiNCw0YAg0JzQtdGC0LXQu9GMJyxcclxuICAgICAgICBjb3VudDogJzYnLFxyXG4gICAgICAgIHllYXI6ICcyMDAwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMzknLFxyXG4gICAgICAgIG5hbWU6ICfQmtGA0LDRgdC90LDRjyDRgdC90LXQttC40L3QutCwJyxcclxuICAgICAgICBjb3VudDogJzYnLFxyXG4gICAgICAgIHllYXI6ICcxOTkwJyxcclxuICAgICAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc0MCcsXHJcbiAgICAgICAgbmFtZTogJ9Ch0L3QtdC20LjQvdC60LAg0LfQvtC70L7RgtCw0Y8nLFxyXG4gICAgICAgIGNvdW50OiAnMTInLFxyXG4gICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNDEnLFxyXG4gICAgICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINCw0YDQutGC0LjRh9C10YHQutCw0Y8nLFxyXG4gICAgICAgIGNvdW50OiAnMTEnLFxyXG4gICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzQyJyxcclxuICAgICAgICBuYW1lOiAn0JfQtdC70ZHQvdGL0Lkg0YjQsNGAJyxcclxuICAgICAgICBjb3VudDogJzEwJyxcclxuICAgICAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LfQtdC70ZHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc0MycsXHJcbiAgICAgICAgbmFtZTogJ9Ch0L3QtdC20LjQvdC60LAg0LTQstGD0YXRhtCy0LXRgtC90LDRjycsXHJcbiAgICAgICAgY291bnQ6ICc2JyxcclxuICAgICAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRgdC90LXQttC40L3QutCwJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNDQnLFxyXG4gICAgICAgIG5hbWU6ICfQpNC40LPRg9GA0LrQsCDQkNC90LPQtdC70LAnLFxyXG4gICAgICAgIGNvdW50OiAnMTEnLFxyXG4gICAgICAgIHllYXI6ICcxOTQwJyxcclxuICAgICAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc0NScsXHJcbiAgICAgICAgbmFtZTogJ9Ch0L3QtdC20LjQvdC60LAg0L3QvtCy0L7Qs9C+0LTQvdGP0Y8nLFxyXG4gICAgICAgIGNvdW50OiAnMScsXHJcbiAgICAgICAgeWVhcjogJzE5ODAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNDYnLFxyXG4gICAgICAgIG5hbWU6ICfQpNC40LPRg9GA0LrQsCDQnNGD0YXQvtC80L7RgCcsXHJcbiAgICAgICAgY291bnQ6ICcxMCcsXHJcbiAgICAgICAgeWVhcjogJzE5NTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQvNCw0LvRi9C5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzQ3JyxcclxuICAgICAgICBuYW1lOiAn0KTQuNCz0YPRgNC60LAg0JrQvtC70L7QtNC10YYnLFxyXG4gICAgICAgIGNvdW50OiAnNicsXHJcbiAgICAgICAgeWVhcjogJzE5NTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQvNCw0LvRi9C5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzQ4JyxcclxuICAgICAgICBuYW1lOiAn0JbQtdC70YLRi9C5INGI0LDRgCDRgSDQsdCw0L3RgtC+0LwnLFxyXG4gICAgICAgIGNvdW50OiAnNicsXHJcbiAgICAgICAgeWVhcjogJzE5NjAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzQ5JyxcclxuICAgICAgICBuYW1lOiAn0KHQvdC10LbQuNC90LrQsCDRgSDQsdC40YDRjtC30L7QuScsXHJcbiAgICAgICAgY291bnQ6ICc0JyxcclxuICAgICAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRgdC90LXQttC40L3QutCwJyxcclxuICAgICAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzUwJyxcclxuICAgICAgICBuYW1lOiAn0JrQvtC70L7QutC+0LvRjNGH0LjQuiDQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgY291bnQ6ICczJyxcclxuICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgc2hhcGU6ICfQutC+0LvQvtC60L7Qu9GM0YfQuNC6JyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNTEnLFxyXG4gICAgICAgIG5hbWU6ICfQqNC40YjQutCwINGBINC40LfQvNC+0YDQvtC30YzRjicsXHJcbiAgICAgICAgY291bnQ6ICcxMicsXHJcbiAgICAgICAgeWVhcjogJzE5NzAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQuNGI0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9C80LDQu9GL0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNTInLFxyXG4gICAgICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDRiNCw0YAg0YEg0L3QsNC00L/QuNGB0YzRjicsXHJcbiAgICAgICAgY291bnQ6ICcxMicsXHJcbiAgICAgICAgeWVhcjogJzE5OTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc1MycsXHJcbiAgICAgICAgbmFtZTogJ9Ch0L3QtdC20LjQvdC60LAg0YHQtdGA0LXQsdGA0LjRgdGC0LDRjycsXHJcbiAgICAgICAgY291bnQ6ICc2JyxcclxuICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgc2hhcGU6ICfRgdC90LXQttC40L3QutCwJyxcclxuICAgICAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc1NCcsXHJcbiAgICAgICAgbmFtZTogJ9CX0LXQu9GR0L3Ri9C5INGI0LDRgCDRgSDRgNC40YHRg9C90LrQvtC8JyxcclxuICAgICAgICBjb3VudDogJzYnLFxyXG4gICAgICAgIHllYXI6ICcyMDEwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQt9C10LvRkdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzU1JyxcclxuICAgICAgICBuYW1lOiAn0J/RgNGP0L3QuNGH0L3Ri9C5INC00L7QvNC40LonLFxyXG4gICAgICAgIGNvdW50OiAnMScsXHJcbiAgICAgICAgeWVhcjogJzE5NDAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNTYnLFxyXG4gICAgICAgIG5hbWU6ICfQn9GA0Y/QvdC40YfQvdGL0Lkg0YLQtdGA0LXQvNC+0LonLFxyXG4gICAgICAgIGNvdW50OiAnMScsXHJcbiAgICAgICAgeWVhcjogJzE5NDAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LzQsNC70YvQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc1NycsXHJcbiAgICAgICAgbmFtZTogJ9Cf0YDRj9C90LjRh9C90LDRjyDQuNC30LHRg9GI0LrQsCcsXHJcbiAgICAgICAgY291bnQ6ICcxJyxcclxuICAgICAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc1OCcsXHJcbiAgICAgICAgbmFtZTogJ9Ck0LjQs9GD0YDQutCwINCx0LXQu9C+0LPQviDQvNC10LTQstC10LTRjycsXHJcbiAgICAgICAgY291bnQ6ICcyJyxcclxuICAgICAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgICAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNTknLFxyXG4gICAgICAgIG5hbWU6ICfQltC10LvRgtGL0Lkg0YjQsNGAINGBINC90LDQtNC/0LjRgdGM0Y4nLFxyXG4gICAgICAgIGNvdW50OiAnMTAnLFxyXG4gICAgICAgIHllYXI6ICcxOTkwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc2MCcsXHJcbiAgICAgICAgbmFtZTogJ9Ck0LjQs9GD0YDQutCwINCT0L7Qu9GD0LHRjCcsXHJcbiAgICAgICAgY291bnQ6ICcxMicsXHJcbiAgICAgICAgeWVhcjogJzE5NDAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgICAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgIH0sXHJcbl07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGRhdGE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuTG9jYWxTdG9yYWdlVXRpbCA9IHZvaWQgMDtcclxuY2xhc3MgTG9jYWxTdG9yYWdlVXRpbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtleU5hbWUgPSAndG95cyc7XHJcbiAgICB9XHJcbiAgICBnZXRMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgZmF2b3JpdGVzTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXlOYW1lKTtcclxuICAgICAgICBpZiAoZmF2b3JpdGVzTG9jYWxTdG9yYWdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZhdm9yaXRlc0xvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIHNldExvY2FsU3RvcmFnZShpZCkge1xyXG4gICAgICAgIGNvbnN0IHRveUZhdm9yaXRlcyA9IHRoaXMuZ2V0TG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgbGV0IHB1c2hGYXZvcml0ZXMgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRveUZhdm9yaXRlcy5pbmRleE9mKGlkKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRveUZhdm9yaXRlcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgcHVzaEZhdm9yaXRlcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b3lGYXZvcml0ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXlOYW1lLCBKU09OLnN0cmluZ2lmeSh0b3lGYXZvcml0ZXMpKTtcclxuICAgICAgICByZXR1cm4geyBwdXNoRmF2b3JpdGVzLCB0b3lGYXZvcml0ZXMgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkxvY2FsU3RvcmFnZVV0aWwgPSBMb2NhbFN0b3JhZ2VVdGlsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnF1YW50aXR5U2xpZGVyID0gdm9pZCAwO1xyXG5jb25zdCBub3Vpc2xpZGVyXzEgPSByZXF1aXJlKFwibm91aXNsaWRlclwiKTtcclxuZnVuY3Rpb24gcXVhbnRpdHlTbGlkZXIoKSB7XHJcbiAgICBjb25zdCBzbGlkZXJRdWFudGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXItcXVhbnRpdHknKTtcclxuICAgIGNvbnN0IHNsaWRlciA9IG5vdWlzbGlkZXJfMS5kZWZhdWx0LmNyZWF0ZShzbGlkZXJRdWFudGl0eSwge1xyXG4gICAgICAgIHN0YXJ0OiBbMSwgMTJdLFxyXG4gICAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICBtaW46IFsxXSxcclxuICAgICAgICAgICAgbWF4OiBbMTJdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGlucHV0UXVhbnRpdHlNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluLXF1YW50aXR5Jyk7XHJcbiAgICBjb25zdCBpbnB1dFF1YW50aXR5TWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC1xdWFudGl0eScpO1xyXG4gICAgY29uc3QgaW5wdXRzUXVhbnRpdHkgPSBbaW5wdXRRdWFudGl0eU1pbiwgaW5wdXRRdWFudGl0eU1heF07XHJcbiAgICBzbGlkZXIub24oJ3VwZGF0ZScsICh2YWx1ZXMsIGhhbmRsZSkgPT4ge1xyXG4gICAgICAgIGlucHV0c1F1YW50aXR5W2hhbmRsZV0udmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChOdW1iZXIodmFsdWVzW2hhbmRsZV0pKSk7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcclxuICAgICAgICBpbnB1dHNRdWFudGl0eVtoYW5kbGVdLmRpc3BhdGNoRXZlbnQoY2hhbmdlKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucXVhbnRpdHlTbGlkZXIgPSBxdWFudGl0eVNsaWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy55ZWFyU2xpZGVyID0gdm9pZCAwO1xyXG5jb25zdCBub3Vpc2xpZGVyXzEgPSByZXF1aXJlKFwibm91aXNsaWRlclwiKTtcclxuZnVuY3Rpb24geWVhclNsaWRlcigpIHtcclxuICAgIGNvbnN0IHNsaWRlclllYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyLXllYXInKTtcclxuICAgIGNvbnN0IHNsaWRlciA9IG5vdWlzbGlkZXJfMS5kZWZhdWx0LmNyZWF0ZShzbGlkZXJZZWFyLCB7XHJcbiAgICAgICAgc3RhcnQ6IFsxOTQwLCAyMDIwXSxcclxuICAgICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgICAgbWluOiBbMTk0MF0sXHJcbiAgICAgICAgICAgIG1heDogWzIwMjBdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGlucHV0WWVhck1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4teWVhcicpO1xyXG4gICAgY29uc3QgaW5wdXRZZWFyTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC15ZWFyJyk7XHJcbiAgICBjb25zdCBpbnB1dHNZZWFyID0gW2lucHV0WWVhck1pbiwgaW5wdXRZZWFyTWF4XTtcclxuICAgIHNsaWRlci5vbigndXBkYXRlJywgKHZhbHVlcywgaGFuZGxlKSA9PiB7XHJcbiAgICAgICAgaW5wdXRzWWVhcltoYW5kbGVdLnZhbHVlID0gU3RyaW5nKE1hdGgucm91bmQoTnVtYmVyKHZhbHVlc1toYW5kbGVdKSkpO1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZSA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XHJcbiAgICAgICAgaW5wdXRzWWVhcltoYW5kbGVdLmRpc3BhdGNoRXZlbnQoY2hhbmdlKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMueWVhclNsaWRlciA9IHllYXJTbGlkZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQXBwID0gdm9pZCAwO1xyXG5jb25zdCBoZWFkZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiKTtcclxuY29uc3QgdG95c18xID0gcmVxdWlyZShcIi4uL3RveXMvdG95c1wiKTtcclxuY29uc3QgZ2FtZV8xID0gcmVxdWlyZShcIi4uL2dhbWUvZ2FtZVwiKTtcclxuY29uc3QgbWFpbl8xID0gcmVxdWlyZShcIi4uL21haW4vbWFpblwiKTtcclxuY29uc3QgZm9vdGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIik7XHJcbmNvbnN0IG1haW5fMiA9IHJlcXVpcmUoXCIuLi8uLi9jb3JlL2NvbXBvbmVudHMvbWFpbi9tYWluXCIpO1xyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsUGFnZSA9IG5ldyBtYWluXzEuTWFpblBhZ2UoJ21haW4tcGFnZScpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IGhlYWRlcl8xLkhlYWRlcignaGVhZGVyJywgJ2hlYWRlcicsICdoZWFkZXInKTtcclxuICAgICAgICB0aGlzLm1haW4gPSBuZXcgbWFpbl8yLk1haW4oJ21haW4nLCAnbWFpbicsICdtYWluJyk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgZm9vdGVyXzEuRm9vdGVyKCdmb290ZXInLCAnZm9vdGVyJywgJ2Zvb3RlcicpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlbmRlck5ld1BhZ2UoaWRQYWdlKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2VIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7QXBwLmRlZmF1bHRQYWdlSWR9YCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlSFRNTCkge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZUhUTUwucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYWdlID0gbnVsbDtcclxuICAgICAgICBpZiAoaWRQYWdlID09PSBcIm1haW4tcGFnZVwiKSB7XHJcbiAgICAgICAgICAgIHBhZ2UgPSBuZXcgbWFpbl8xLk1haW5QYWdlKGlkUGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlkUGFnZSA9PT0gXCJ0b3lzLXBhZ2VcIikge1xyXG4gICAgICAgICAgICBwYWdlID0gbmV3IHRveXNfMS5Ub3lzKGlkUGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlkUGFnZSA9PT0gXCJnYW1lLXBhZ2VcIikge1xyXG4gICAgICAgICAgICBwYWdlID0gbmV3IGdhbWVfMS5HYW1lKGlkUGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VIVE1MID0gcGFnZS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICAgICAgICAgIHBhZ2VIVE1MLmlkID0gQXBwLmRlZmF1bHRQYWdlSWQ7XHJcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kKHBhZ2VIVE1MKTtcclxuICAgICAgICAgICAgcGFnZS5hZnRlclJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVuYWJsZVJvdXRlQ2hhbmdlKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIEFwcC5yZW5kZXJOZXdQYWdlKGhhc2gpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIEFwcC5jb250YWluZXIuYXBwZW5kKHRoaXMuaGVhZGVyLnJlbmRlcigpKTtcclxuICAgICAgICBBcHAuY29udGFpbmVyLmFwcGVuZCh0aGlzLm1haW4ucmVuZGVyKCkpO1xyXG4gICAgICAgIEFwcC5yZW5kZXJOZXdQYWdlKCdtYWluLXBhZ2UnKTtcclxuICAgICAgICBBcHAuY29udGFpbmVyLmFwcGVuZCh0aGlzLmZvb3Rlci5yZW5kZXIoKSk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVSb3V0ZUNoYW5nZSgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiI21haW4tcGFnZVwiKTtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIFwiXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIDApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcHAgPSBBcHA7XHJcbkFwcC5jb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xyXG5BcHAuZGVmYXVsdFBhZ2VJZCA9ICdjdXJyZW50LXBhZ2UnO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkdhbWUgPSB2b2lkIDA7XHJcbmNvbnN0IHBhZ2VzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29yZS90ZW1wbGF0ZXMvcGFnZXNcIik7XHJcbmNvbnN0IGRhdGFfMSA9IHJlcXVpcmUoXCIuLi8uLi9kYXRhXCIpO1xyXG5jb25zdCBsb2NhbFN0b3JhZ2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9sb2NhbC1zdG9yYWdlL2xvY2FsU3RvcmFnZVwiKTtcclxuY29uc3Qgc25vd18xID0gcmVxdWlyZShcIi4uLy4uL3Nub3cvc25vd1wiKTtcclxuY29uc3QgdHJlZSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJzEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICczJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnNSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICc2J1xyXG4gICAgfVxyXG5dO1xyXG5jb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcxJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICc0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnNidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICc3J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnOSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcxMCdcclxuICAgIH1cclxuXTtcclxuY29uc3QgZ2FybGFuZEJ1dHRvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6ICdtdWx0aWNvbG9yJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogJ3JlZCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6ICdncmVlbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6ICdibHVlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogJ3llbGxvdydcclxuICAgIH1cclxuXTtcclxuY29uc3QgY29vcmRpbmF0ZXMgPSAnMzY1LDY5OSwxODksNzA2LDExMyw2ODMsMzEsNjA4LDIsNTU1LDIsNTM5LDE4LDQzNyw3MywzNTEsMTA2LDIyNCwxNjEsMTM0LDI0MywtMSwzMDYsNzUsMzUzLDE0NCwzOTksMjIxLDQyNCwzNTksNDUyLDQ1OSw0OTYsNTUwLDQ0NCw2NjQnO1xyXG5jbGFzcyBHYW1lIGV4dGVuZHMgcGFnZXNfMS5QYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkKSB7XHJcbiAgICAgICAgc3VwZXIoaWQpO1xyXG4gICAgICAgIHRoaXMuY2hvaWNlQmFja2dyb3VuZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnSUQgPSB0YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgY29uc3QgdHJlZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICB0cmVlQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi9hc3NldHMvYmcvJHtiZ0lEfS53ZWJwKWA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNob2ljZVRyZWUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCB0cmVlSUQgPSB0YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgY29uc3QgdHJlZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVlLWltZycpO1xyXG4gICAgICAgICAgICB0cmVlSW1nLnNyYyA9IGAuL2Fzc2V0cy90cmVlLyR7dHJlZUlEfS53ZWJwYDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2xpY2tCdXR0b25HYXJsYW5kID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bk11bHRpY29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXVsdGljb2xvcicpO1xyXG4gICAgICAgICAgICBjb25zdCBidG5SZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bkdyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWVuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bkJsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ZScpO1xyXG4gICAgICAgICAgICBjb25zdCBidG5ZZWxsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVsbG93Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbEJ0bkdhcmxhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FybGFuZC1idG4nKTtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtc3dpdGNoJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG11bHRpY29sb3JHYXJsYW5kID0gYFxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGVcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUyXCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZTNcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZTRcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGU1XCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZTZcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGU3XCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICBgO1xyXG4gICAgICAgICAgICBjb25zdCByZWRDb2xvckdhcmxhbmQgPSBgXHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1yZWRcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtcmVkMlwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtcmVkM1wiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLXJlZDRcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtcmVkNVwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtcmVkNlwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLXJlZDdcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyZWVuQ29sb3JHYXJsYW5kID0gYFxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtZ3JlZW5cIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtZ3JlZW4yXCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1ncmVlbjNcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1ncmVlbjRcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtZ3JlZW41XCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1ncmVlbjZcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1ncmVlbjdcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsdWVDb2xvckdhcmxhbmQgPSBgXHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1ibHVlXCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLWJsdWUyXCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1ibHVlM1wiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLWJsdWU0XCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLWJsdWU1XCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1ibHVlNlwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLWJsdWU3XCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICBgO1xyXG4gICAgICAgICAgICBjb25zdCB5ZWxsb3dDb2xvckdhcmxhbmQgPSBgXHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS15ZWxsb3dcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUteWVsbG93MlwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUteWVsbG93M1wiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLXllbGxvdzRcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUteWVsbG93NVwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUteWVsbG93NlwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLXllbGxvdzdcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyZWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlZS1pbWcnKTtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBidG5JRCA9IHRhcmdldC5kYXRhc2V0LmNvbG9yO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zYXZlQnRuSUQubXVsdGljb2xvci5pbmNsdWRlcyhidG5JRCkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVCdG5JRC5tdWx0aWNvbG9yLnNwbGljZSh0aGlzLnNhdmVCdG5JRC5tdWx0aWNvbG9yLmluZGV4T2YoYnRuSUQpLCAxKTtcclxuICAgICAgICAgICAgICAgIHRyZWVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbXVsdGljb2xvcicpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmVlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0blJlZC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5CbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0bkdyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0blllbGxvdy5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVCdG5JRC5tdWx0aWNvbG9yLnB1c2goYnRuSUQpO1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgKz0gbXVsdGljb2xvckdhcmxhbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2F2ZUJ0bklELnJlZC5pbmNsdWRlcyhidG5JRCkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVCdG5JRC5yZWQuc3BsaWNlKHRoaXMuc2F2ZUJ0bklELnJlZC5pbmRleE9mKGJ0bklEKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0cmVlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmVlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0bkJsdWUuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYnRuR3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYnRuWWVsbG93LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0bk11bHRpY29sb3IuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQnRuSUQucmVkLnB1c2goYnRuSUQpO1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgKz0gcmVkQ29sb3JHYXJsYW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNhdmVCdG5JRC5ncmVlbi5pbmNsdWRlcyhidG5JRCkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVCdG5JRC5ncmVlbi5zcGxpY2UodGhpcy5zYXZlQnRuSUQuZ3JlZW4uaW5kZXhPZihidG5JRCksIDEpO1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdncmVlbicpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmVlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0bkJsdWUuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYnRuWWVsbG93LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0bk11bHRpY29sb3IuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYnRuUmVkLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUJ0bklELmdyZWVuLnB1c2goYnRuSUQpO1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgKz0gZ3JlZW5Db2xvckdhcmxhbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2F2ZUJ0bklELmJsdWUuaW5jbHVkZXMoYnRuSUQpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQnRuSUQuYmx1ZS5zcGxpY2UodGhpcy5zYXZlQnRuSUQuYmx1ZS5pbmRleE9mKGJ0bklEKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0cmVlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2JsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5ZZWxsb3cuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYnRuTXVsdGljb2xvci5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5SZWQuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYnRuR3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQnRuSUQuYmx1ZS5wdXNoKGJ0bklEKTtcclxuICAgICAgICAgICAgICAgIHRyZWVDb250YWluZXIuaW5uZXJIVE1MICs9IGJsdWVDb2xvckdhcmxhbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2F2ZUJ0bklELnllbGxvdy5pbmNsdWRlcyhidG5JRCkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVCdG5JRC55ZWxsb3cuc3BsaWNlKHRoaXMuc2F2ZUJ0bklELnllbGxvdy5pbmRleE9mKGJ0bklEKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0cmVlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3llbGxvdycpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmVlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0bk11bHRpY29sb3IuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYnRuUmVkLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0bkdyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0bkJsdWUuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQnRuSUQueWVsbG93LnB1c2goYnRuSUQpO1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgKz0geWVsbG93Q29sb3JHYXJsYW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dFN3aXRjaC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGxCdG5HYXJsYW5kLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyZWVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zYXZlQnRuSUQgPSB7XHJcbiAgICAgICAgICAgIG11bHRpY29sb3I6IFtdLFxyXG4gICAgICAgICAgICByZWQ6IFtdLFxyXG4gICAgICAgICAgICBncmVlbjogW10sXHJcbiAgICAgICAgICAgIGJsdWU6IFtdLFxyXG4gICAgICAgICAgICB5ZWxsb3c6IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlbmRlcldyYXBwZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGlua1RveXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDIpJyk7XHJcbiAgICAgICAgY29uc3QgbGlua01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDEpJyk7XHJcbiAgICAgICAgY29uc3QgbGlua0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDMpJyk7XHJcbiAgICAgICAgbGlua01haW4uY2xhc3NMaXN0LnJlbW92ZSgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgbGlua1RveXMuY2xhc3NMaXN0LnJlbW92ZSgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgbGlua0dhbWUuY2xhc3NMaXN0LmFkZCgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlckdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3cmFwcGVyR2FtZS5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLWdhbWUnKTtcclxuICAgICAgICBjb25zdCB3cmFwcGVyR2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBwZXJHYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXItZ2FtZS1jb250YWluZXInKTtcclxuICAgICAgICB3cmFwcGVyR2FtZS5hcHBlbmQod3JhcHBlckdhbWVDb250YWluZXIpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVDaG9vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51Q2hvb3NlLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2hvb3NlJyk7XHJcbiAgICAgICAgd3JhcHBlckdhbWVDb250YWluZXIuYXBwZW5kKG1lbnVDaG9vc2UpO1xyXG4gICAgICAgIGNvbnN0IHRyZWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyZWUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgd3JhcHBlckdhbWVDb250YWluZXIuYXBwZW5kKHRyZWVDb250YWluZXIpO1xyXG4gICAgICAgIHRyZWVDb250YWluZXIub25kcmFnb3ZlciA9IGFsbG93RHJvcDtcclxuICAgICAgICBjb25zdCB0cmVlR2FybGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRyZWVHYXJsYW5kLmNsYXNzTGlzdC5hZGQoJ3RyZWUtZ2FybGFuZC1jb250YWluZXInKTtcclxuICAgICAgICB0cmVlQ29udGFpbmVyLmFwcGVuZCh0cmVlR2FybGFuZCk7XHJcbiAgICAgICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFwJyk7XHJcbiAgICAgICAgbWFwLm5hbWUgPSAndHJlZS1tYXAnO1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcmVhJyk7XHJcbiAgICAgICAgYXJlYS5jbGFzc0xpc3QuYWRkKCdhcmVhLXRyZWUnKTtcclxuICAgICAgICBhcmVhLmNvb3JkcyA9IGNvb3JkaW5hdGVzO1xyXG4gICAgICAgIGFyZWEuc2hhcGUgPSAncG9seSc7XHJcbiAgICAgICAgbWFwLmFwcGVuZChhcmVhKTtcclxuICAgICAgICB0cmVlQ29udGFpbmVyLmFwcGVuZChtYXApO1xyXG4gICAgICAgIGNvbnN0IHRyZWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICB0cmVlSW1nLmNsYXNzTGlzdC5hZGQoJ3RyZWUtaW1nJyk7XHJcbiAgICAgICAgdHJlZUltZy5zZXRBdHRyaWJ1dGUoJ3VzZW1hcCcsICcjdHJlZS1tYXAnKTtcclxuICAgICAgICB0cmVlSW1nLnNyYyA9ICcuL2Fzc2V0cy90cmVlLzEud2VicCc7XHJcbiAgICAgICAgdHJlZUNvbnRhaW5lci5hcHBlbmQodHJlZUltZyk7XHJcbiAgICAgICAgY29uc3QgbWVudUZhdm9yaXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lbnVGYXZvcml0ZXMuY2xhc3NMaXN0LmFkZCgnbWVudS1mYXZvcml0ZXMnKTtcclxuICAgICAgICB3cmFwcGVyR2FtZUNvbnRhaW5lci5hcHBlbmQobWVudUZhdm9yaXRlcyk7XHJcbiAgICAgICAgY29uc3QgYXVkaW9BbmRTbm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYXVkaW9BbmRTbm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXNub3ctY29udGFpbmVyJywgJ21lbnUnKTtcclxuICAgICAgICBtZW51Q2hvb3NlLmFwcGVuZChhdWRpb0FuZFNub3dDb250YWluZXIpO1xyXG4gICAgICAgIGNvbnN0IHRyZWVDaG9vc2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0cmVlQ2hvb3NlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyZWUtY2hvb3NlLWNvbnRhaW5lcicsICdtZW51Jyk7XHJcbiAgICAgICAgbWVudUNob29zZS5hcHBlbmQodHJlZUNob29zZUNvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgYmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiZy1jb250YWluZXInLCAnbWVudScpO1xyXG4gICAgICAgIG1lbnVDaG9vc2UuYXBwZW5kKGJnQ29udGFpbmVyKTtcclxuICAgICAgICBjb25zdCBnYXJsYW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZ2FybGFuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYXJsYW5kLWNvbnRhaW5lcicsICdtZW51Jyk7XHJcbiAgICAgICAgbWVudUNob29zZS5hcHBlbmQoZ2FybGFuZENvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgYXVkaW9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYXVkaW9JdGVtLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLWl0ZW0nKTtcclxuICAgICAgICBhdWRpb0FuZFNub3dDb250YWluZXIuYXBwZW5kKGF1ZGlvSXRlbSk7XHJcbiAgICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgIGF1ZGlvLmlkID0gJ3BsYXllcic7XHJcbiAgICAgICAgYXVkaW8uc3JjID0gJy4vYXNzZXRzL2F1ZGlvL2F1ZGlvLm1wMyc7XHJcbiAgICAgICAgYXVkaW8ubG9vcCA9IHRydWU7XHJcbiAgICAgICAgYXVkaW9JdGVtLmFwcGVuZChhdWRpbyk7XHJcbiAgICAgICAgY29uc3Qgc25vd0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBzbm93SXRlbS5jbGFzc0xpc3QuYWRkKCdzbm93LWl0ZW0nKTtcclxuICAgICAgICBzbm93SXRlbS5pZCA9ICdzbm93LWl0ZW0nO1xyXG4gICAgICAgIGF1ZGlvQW5kU25vd0NvbnRhaW5lci5hcHBlbmQoc25vd0l0ZW0pO1xyXG4gICAgICAgIHRyZWUuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHJlZUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRyZWVJdGVtcy5jbGFzc0xpc3QuYWRkKCd0cmVlLWl0ZW0nKTtcclxuICAgICAgICAgICAgdHJlZUl0ZW1zLmRhdGFzZXQuaWQgPSBpdGVtLmlkO1xyXG4gICAgICAgICAgICB0cmVlQ2hvb3NlQ29udGFpbmVyLmFwcGVuZCh0cmVlSXRlbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBiZ0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGJnSXRlbXMuY2xhc3NMaXN0LmFkZCgnYmctaXRlbScpO1xyXG4gICAgICAgICAgICBiZ0l0ZW1zLmRhdGFzZXQuaWQgPSBpdGVtLmlkO1xyXG4gICAgICAgICAgICBiZ0NvbnRhaW5lci5hcHBlbmQoYmdJdGVtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZ2FybGFuZEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGdhcmxhbmRCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FybGFuZC1idG4tY29udGFpbmVyJyk7XHJcbiAgICAgICAgZ2FybGFuZENvbnRhaW5lci5hcHBlbmQoZ2FybGFuZEJ0bkNvbnRhaW5lcik7XHJcbiAgICAgICAgZ2FybGFuZEJ1dHRvbnMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuR2FybGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBidG5HYXJsYW5kLmNsYXNzTGlzdC5hZGQoJ2dhcmxhbmQtYnRuJywgaXRlbS5jb2xvcik7XHJcbiAgICAgICAgICAgIGJ0bkdhcmxhbmQuZGF0YXNldC5jb2xvciA9IGl0ZW0uY29sb3I7XHJcbiAgICAgICAgICAgIGdhcmxhbmRCdG5Db250YWluZXIuYXBwZW5kKGJ0bkdhcmxhbmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHN3aXRjaE9mZk9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc3dpdGNoT2ZmT24uY2xhc3NMaXN0LmFkZCgnc3dpdGNoLW9mZi1vbicpO1xyXG4gICAgICAgIGdhcmxhbmRDb250YWluZXIuYXBwZW5kKHN3aXRjaE9mZk9uKTtcclxuICAgICAgICBjb25zdCBpbnB1dFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXRTd2l0Y2guY2xhc3NMaXN0LmFkZCgnaW5wdXQtc3dpdGNoJyk7XHJcbiAgICAgICAgaW5wdXRTd2l0Y2gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgICAgaW5wdXRTd2l0Y2guaWQgPSAnaW5wdXQtc3dpdGNoJztcclxuICAgICAgICBpbnB1dFN3aXRjaC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBzd2l0Y2hPZmZPbi5hcHBlbmQoaW5wdXRTd2l0Y2gpO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsU3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYWJlbFN3aXRjaC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdpbnB1dC1zd2l0Y2gnKTtcclxuICAgICAgICBsYWJlbFN3aXRjaC5kYXRhc2V0Lm9uID0gJ9CS0LrQuy4nO1xyXG4gICAgICAgIGxhYmVsU3dpdGNoLmRhdGFzZXQub2ZmID0gJ9CS0YvQutC7Lic7XHJcbiAgICAgICAgc3dpdGNoT2ZmT24uYXBwZW5kKGxhYmVsU3dpdGNoKTtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZVRveXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmYXZvcml0ZVRveXMuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtdG95cy1jb250YWluZXInKTtcclxuICAgICAgICBtZW51RmF2b3JpdGVzLmFwcGVuZChmYXZvcml0ZVRveXMpO1xyXG4gICAgICAgIGNvbnN0IGRlY29yYXRlVHJlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkZWNvcmF0ZVRyZWVzLmNsYXNzTGlzdC5hZGQoJ2RlY29yYXRlLXRyZWVzJyk7XHJcbiAgICAgICAgbWVudUZhdm9yaXRlcy5hcHBlbmQoZGVjb3JhdGVUcmVlcyk7XHJcbiAgICAgICAgZnVuY3Rpb24gYWxsb3dEcm9wKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh3cmFwcGVyR2FtZSk7XHJcbiAgICB9XHJcbiAgICBwbGF5QW5kU3RvcEF1ZGlvKCkge1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJcIik7XHJcbiAgICAgICAgY29uc3QgYXVkaW9Db250cm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdWRpby1pdGVtXCIpO1xyXG4gICAgICAgIGlmIChhdWRpby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICBhdWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncGxheScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgYXVkaW9Db250cm9sLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXknKTtcclxuICAgICAgICAgICAgYXVkaW8uY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGRyYWcoZXZlbnQpIHtcclxuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RyYWcnKTtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgKF9hID0gZXZlbnQuZGF0YVRyYW5zZmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0RGF0YSgnaWQnLCB0YXJnZXQuaWQpO1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0WCA9IGV2ZW50LnBhZ2VYIC0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSA2NTtcclxuICAgICAgICBjb25zdCBzaGlmdFkgPSBldmVudC5wYWdlWSAtIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAxNTtcclxuICAgICAgICAoX2IgPSBldmVudC5kYXRhVHJhbnNmZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zZXREYXRhKCdzaGlmdFgnLCBzaGlmdFgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgKF9jID0gZXZlbnQuZGF0YVRyYW5zZmVyKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Muc2V0RGF0YSgnc2hpZnRZJywgc2hpZnRZLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIChfZCA9IGV2ZW50LmRhdGFUcmFuc2ZlcikgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnNldERhdGEoJ2RhdGFzZXQnLCB0YXJnZXQuZGF0YXNldC5pbWcpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub25kcm9wID0gR2FtZS5kcm9wO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRyb3AoZXZlbnQpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEV2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgY29uc3QgaXRlbUlEID0gdGFyZ2V0RXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2lkJyk7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRYID0gTnVtYmVyKHRhcmdldEV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlmdFgnKSk7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRZID0gTnVtYmVyKHRhcmdldEV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlmdFknKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YVNldCA9IHRhcmdldEV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdkYXRhc2V0Jyk7XHJcbiAgICAgICAgY29uc3QgdHJlZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGFyZWFUcmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFyZWEtdHJlZScpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0SXRlbSA9ICh0cmVlSW1nID09PSBudWxsIHx8IHRyZWVJbWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRyZWVJbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCkgKyAodHJlZUltZyA9PT0gbnVsbCB8fCB0cmVlSW1nID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0cmVlSW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSAtIHRhcmdldEV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgY29uc3QgYm90dG9tSXRlbSA9ICh0cmVlSW1nID09PSBudWxsIHx8IHRyZWVJbWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRyZWVJbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSkgKyAodHJlZUltZyA9PT0gbnVsbCB8fCB0cmVlSW1nID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0cmVlSW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSAtIHRhcmdldEV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSByaWdodEl0ZW0gKyBzaGlmdFg7XHJcbiAgICAgICAgY29uc3QgYm90dG9tID0gYm90dG9tSXRlbSArIHNoaWZ0WTtcclxuICAgICAgICBjb25zdCBwYXJlbnRGb3JFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNsb3Qke2RhdGFTZXR9YCk7XHJcbiAgICAgICAgY29uc3QgY291bnRUb3lzID0gcGFyZW50Rm9yRWxlbWVudCA9PT0gbnVsbCB8fCBwYXJlbnRGb3JFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnRGb3JFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZS1jb3VudCcpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gTnVtYmVyKGNvdW50VG95cy50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyZW50Rm9yRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW1JRCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gYXJlYVRyZWUpIHtcclxuICAgICAgICAgICAgaWYgKCEoKF9hID0gZWxlbWVudC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cmVlLWNvbnRhaW5lcicpKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRUb3lzLnRleHRDb250ZW50ID0gKGNvdW50IC0gMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gYCR7cmlnaHR9cHhgO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IGAke2JvdHRvbX1weGA7XHJcbiAgICAgICAgICAgIHRyZWVJbWcuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC50YXJnZXQgIT09IGFyZWFUcmVlKSB7XHJcbiAgICAgICAgICAgIGlmICgoX2IgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jbGFzc0xpc3QuY29udGFpbnMoJ3RyZWUtY29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50VG95cy50ZXh0Q29udGVudCA9IChjb3VudCArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9ICcxMHB4JztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSAnMTBweCc7XHJcbiAgICAgICAgICAgIHBhcmVudEZvckVsZW1lbnQgPT09IG51bGwgfHwgcGFyZW50Rm9yRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50Rm9yRWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyV3JhcHBlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNub3dTdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbm93LWl0ZW0nKTtcclxuICAgICAgICBjb25zdCBzbm93U2NlbmUgPSBuZXcgc25vd18xLlNub3dTY2VuZSgpO1xyXG4gICAgICAgIHNub3dTdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImNhbnZhc1wiKTtcclxuICAgICAgICAgICAgaWYgKHNub3dTdGFydC5jbGFzc05hbWUgPT09ICdzbm93LWl0ZW0nKSB7XHJcbiAgICAgICAgICAgICAgICBzbm93U2NlbmUucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXNbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbm93U3RhcnQuY2xhc3NMaXN0LmFkZCgncGxheScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc25vd1NjZW5lLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc25vd1N0YXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGJnQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGJnQ29udGFpbmVyID09PSBudWxsIHx8IGJnQ29udGFpbmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiZ0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hvaWNlQmFja2dyb3VuZCk7XHJcbiAgICAgICAgY29uc3QgdHJlZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVlLWNob29zZS1jb250YWluZXInKTtcclxuICAgICAgICB0cmVlQ29udGFpbmVyID09PSBudWxsIHx8IHRyZWVDb250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRyZWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNob2ljZVRyZWUpO1xyXG4gICAgICAgIGNvbnN0IGdhcmxhbmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FybGFuZC1idG4tY29udGFpbmVyJyk7XHJcbiAgICAgICAgZ2FybGFuZEJ1dHRvbiA9PT0gbnVsbCB8fCBnYXJsYW5kQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnYXJsYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0J1dHRvbkdhcmxhbmQpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0U3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXN3aXRjaCcpO1xyXG4gICAgICAgIGlucHV0U3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0J1dHRvbkdhcmxhbmQpO1xyXG4gICAgICAgIGNvbnN0IHBsYXlBdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1pdGVtJyk7XHJcbiAgICAgICAgcGxheUF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wbGF5QW5kU3RvcEF1ZGlvKTtcclxuICAgICAgICBjb25zdCB0b3lzRmF2b3JpdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGUtdG95cy1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2UgPSBuZXcgbG9jYWxTdG9yYWdlXzEuTG9jYWxTdG9yYWdlVXRpbCgpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VHdlbnR5VG95cyA9IGRhdGFfMS5kZWZhdWx0LnNsaWNlKDAsIDIwKTtcclxuICAgICAgICBmdW5jdGlvbiBhbGxvd0Ryb3AoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UoKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgZGF0YV8xLmRlZmF1bHQuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UoKS5pbmNsdWRlcyhjYXJkLm51bSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYXZvcml0ZVRveXNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVUb3lzSXRlbS5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZS10b3lzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVUb3lzSXRlbS5pZCA9IGBzbG90JHtjYXJkLm51bX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlVG95c0l0ZW0uZGF0YXNldC5pZCA9IGNhcmQubnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlVG95c0l0ZW0ub25kcmFnb3ZlciA9IGFsbG93RHJvcDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYXZvcml0ZUNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlQ291bnQuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtY291bnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZUNvdW50LmlubmVySFRNTCA9IGNhcmQuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVUb3lzSXRlbS5hcHBlbmQoZmF2b3JpdGVDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTnVtYmVyKGNhcmQuY291bnQpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG95c0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3lzSW1nLnNyYyA9IGAuL2Fzc2V0cy90b3lzLyR7Y2FyZC5udW19LndlYnBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3lzSW1nLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlLWltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3lzSW1nLmlkID0gYHRveSR7Y2FyZC5udW19LSR7aX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3lzSW1nLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRveXNJbWcuc2V0QXR0cmlidXRlKCdkYXRhLWltZycsIGAke2NhcmQubnVtfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3lzSW1nLmFsdCA9ICd0b3knO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3lzSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIEdhbWUuZHJhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlVG95c0l0ZW0uYXBwZW5kQ2hpbGQodG95c0ltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRveXNGYXZvcml0ZUNvbnRhaW5lci5hcHBlbmQoZmF2b3JpdGVUb3lzSXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmlyc3RUd2VudHlUb3lzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlVG95c0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlVG95c0l0ZW0uY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtdG95cycpO1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGVUb3lzSXRlbS5pZCA9IGBzbG90JHtjYXJkLm51bX1gO1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGVUb3lzSXRlbS5kYXRhc2V0LmlkID0gY2FyZC5udW07XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZVRveXNJdGVtLm9uZHJhZ292ZXIgPSBhbGxvd0Ryb3A7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYXZvcml0ZUNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGVDb3VudC5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZS1jb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGVDb3VudC5pbm5lckhUTUwgPSBjYXJkLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGVUb3lzSXRlbS5hcHBlbmQoZmF2b3JpdGVDb3VudCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBOdW1iZXIoY2FyZC5jb3VudCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRveXNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0b3lzSW1nLnNyYyA9IGAuL2Fzc2V0cy90b3lzLyR7Y2FyZC5udW19LndlYnBgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRveXNJbWcuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG95c0ltZy5pZCA9IGB0b3kke2NhcmQubnVtfS0ke2l9YDtcclxuICAgICAgICAgICAgICAgICAgICB0b3lzSW1nLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG95c0ltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nJywgYCR7Y2FyZC5udW19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG95c0ltZy5hbHQgPSAndG95JztcclxuICAgICAgICAgICAgICAgICAgICB0b3lzSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIEdhbWUuZHJhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVUb3lzSXRlbS5hcHBlbmRDaGlsZCh0b3lzSW1nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRveXNGYXZvcml0ZUNvbnRhaW5lci5hcHBlbmQoZmF2b3JpdGVUb3lzSXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkdhbWUgPSBHYW1lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk1haW5QYWdlID0gdm9pZCAwO1xyXG5jb25zdCBwYWdlc18xID0gcmVxdWlyZShcIi4uLy4uL2NvcmUvdGVtcGxhdGVzL3BhZ2VzXCIpO1xyXG5jbGFzcyBNYWluUGFnZSBleHRlbmRzIHBhZ2VzXzEuUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xyXG4gICAgICAgIHN1cGVyKGlkKTtcclxuICAgIH1cclxuICAgIHJlbmRlcldyYXBwZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGlua01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDEpJyk7XHJcbiAgICAgICAgY29uc3QgbGlua1RveXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDIpJyk7XHJcbiAgICAgICAgY29uc3QgbGlua0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDMpJyk7XHJcbiAgICAgICAgbGlua1RveXMuY2xhc3NMaXN0LnJlbW92ZSgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgbGlua0dhbWUuY2xhc3NMaXN0LnJlbW92ZSgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgbGlua01haW4uY2xhc3NMaXN0LmFkZCgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlck1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3cmFwcGVyTWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLXBhZ2UnKTtcclxuICAgICAgICB3cmFwcGVyTWFpbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tcGFnZS1iYWxsIGJhbGwxXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tcGFnZS1iYWxsIGJhbGwyXCI+PC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwibWFpbi1wYWdlLXRpdGxlXCI+0J3QvtCy0L7Qs9C+0LTQvdGP0Y8g0LjQs9GA0LAgPHNwYW4+XCLQndCw0YDRj9C00Lgg0ZHQu9C60YNcIjwvc3Bhbj48L2gxPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjdG95cy1wYWdlXCIgY2xhc3M9XCJidG4tbWFpbi1wYWdlXCI+0J3QsNGH0LDRgtGMPC9hPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHdyYXBwZXJNYWluKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcldyYXBwZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NYWluUGFnZSA9IE1haW5QYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlRveXMgPSB2b2lkIDA7XHJcbmNvbnN0IHBhZ2VzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29yZS90ZW1wbGF0ZXMvcGFnZXNcIik7XHJcbmNvbnN0IGRhdGFfMSA9IHJlcXVpcmUoXCIuLi8uLi9kYXRhXCIpO1xyXG5yZXF1aXJlKFwiLi4vLi4vbm91aXNsaWRlci9zbGlkZXIuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi4vLi4vbm91aXNsaWRlci9zbGlkZXJDdXN0b20uY3NzXCIpO1xyXG5jb25zdCBzbGlkZXJfcXVhbnRpdHlfMSA9IHJlcXVpcmUoXCIuLi8uLi9ub3Vpc2xpZGVyL3NsaWRlci1xdWFudGl0eVwiKTtcclxuY29uc3Qgc2xpZGVyX3llYXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9ub3Vpc2xpZGVyL3NsaWRlci15ZWFyXCIpO1xyXG5jb25zdCBsb2NhbFN0b3JhZ2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9sb2NhbC1zdG9yYWdlL2xvY2FsU3RvcmFnZVwiKTtcclxuY29uc3QgRmlsdGVyQnV0dG9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBmaWx0ZXI6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGZpbHRlcjogJ9C60L7Qu9C+0LrQvtC70YzRh9C40LonLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZmlsdGVyOiAn0YjQuNGI0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGZpbHRlcjogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0YHQuNC90LjQuScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGZpbHRlcjogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgICAgICBjb2xvcjogJ9C30LXQu9GR0L3Ri9C5JyxcclxuICAgIH1cclxuXTtcclxuY29uc3QgU2l6ZUJ1dHRvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2l6ZTogJ9C80LDQu9GL0LknLFxyXG4gICAgfSxcclxuXTtcclxuY29uc3QgT3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiAn0JLRi9Cx0YDQsNGC0YwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHZhbHVlOiAnc29ydC1uYW1lLW1heCcsXHJcbiAgICAgICAgdGV4dDogJ9Cf0L4g0L3QsNC30LLQsNC90LjRjiDQvtGCIMKr0JDCuyDQtNC+IMKr0K/CuydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdmFsdWU6ICdzb3J0LW5hbWUtbWluJyxcclxuICAgICAgICB0ZXh0OiAn0J/QviDQvdCw0LfQstCw0L3QuNGOINC+0YIgwqvQr8K7INC00L4gwqvQkMK7J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB2YWx1ZTogJ3NvcnQteWVhci1tYXgnLFxyXG4gICAgICAgIHRleHQ6ICfQn9C+INCz0L7QtNGDINC/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdmFsdWU6ICdzb3J0LXllYXItbWluJyxcclxuICAgICAgICB0ZXh0OiAn0J/QviDQs9C+0LTRgyDQv9C+INGD0LHRi9Cy0LDQvdC40Y4nXHJcbiAgICB9XHJcbl07XHJcbmNsYXNzIFRveXMgZXh0ZW5kcyBwYWdlc18xLlBhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoaWQpIHtcclxuICAgICAgICBzdXBlcihpZCk7XHJcbiAgICAgICAgdGhpcy5jbGlja0ZpbHRlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b3lzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2stZmF2b3JpdGUnKTtcclxuICAgICAgICAgICAgY29uc3QgbWluUXVhbnRpdHkgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbi1xdWFudGl0eScpLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMubWluUXVhbnRpdHkgPSBtaW5RdWFudGl0eTtcclxuICAgICAgICAgICAgY29uc3QgbWF4UXVhbnRpdHkgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC1xdWFudGl0eScpLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMubWF4UXVhbnRpdHkgPSBtYXhRdWFudGl0eTtcclxuICAgICAgICAgICAgY29uc3QgbWluWWVhciA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluLXllYXInKS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zLm1pblllYXIgPSBtaW5ZZWFyO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhZZWFyID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXgteWVhcicpLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMubWF4WWVhciA9IG1heFllYXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3J0LXNlbGVjdCcpLm9wdGlvbnMuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uc1ZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQtc2VsZWN0Jykub3B0aW9uc1tzZWxlY3RdLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5vcHRpb25zVmFsdWUgPSBvcHRpb25zVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgZGF0YUlEID0gdGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFBhcmFtcy5zaGFwZXMuaW5jbHVkZXMoZGF0YUlEKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuc2hhcGVzLnNwbGljZSh0aGlzLnNlYXJjaFBhcmFtcy5zaGFwZXMuaW5kZXhPZihkYXRhSUQpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tc2hhcGUnKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuc2hhcGVzLnB1c2goZGF0YUlEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hQYXJhbXMuY29sb3JzLmluY2x1ZGVzKGRhdGFJRCkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zLmNvbG9ycy5zcGxpY2UodGhpcy5zZWFyY2hQYXJhbXMuY29sb3JzLmluZGV4T2YoZGF0YUlEKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLWNvbG9yJykpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zLmNvbG9ycy5wdXNoKGRhdGFJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoUGFyYW1zLnNpemVzLmluY2x1ZGVzKGRhdGFJRCkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zLnNpemVzLnNwbGljZSh0aGlzLnNlYXJjaFBhcmFtcy5zaXplcy5pbmRleE9mKGRhdGFJRCksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1zaXplJykpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zLnNpemVzLnB1c2goZGF0YUlEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YV8xLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hQYXJhbXMuc2hhcGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hQYXJhbXMuc2hhcGVzLmluY2x1ZGVzKGl0ZW0uc2hhcGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoUGFyYW1zLmNvbG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoUGFyYW1zLmNvbG9ycy5pbmNsdWRlcyhpdGVtLmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFBhcmFtcy5zaXplcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoUGFyYW1zLnNpemVzLmluY2x1ZGVzKGl0ZW0uc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChmYXZvcml0ZUlucHV0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zLmZhdm9yaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoUGFyYW1zLmZhdm9yaXRlID09PSBpdGVtLmZhdm9yaXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW0uY291bnQpID49IHRoaXMuc2VhcmNoUGFyYW1zLm1pblF1YW50aXR5ICYmIE51bWJlcihpdGVtLmNvdW50KSA8PSB0aGlzLnNlYXJjaFBhcmFtcy5tYXhRdWFudGl0eTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW0ueWVhcikgPj0gdGhpcy5zZWFyY2hQYXJhbXMubWluWWVhciAmJiBOdW1iZXIoaXRlbS55ZWFyKSA8PSB0aGlzLnNlYXJjaFBhcmFtcy5tYXhZZWFyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoUGFyYW1zLm9wdGlvbnNWYWx1ZSA9PT0gJ3NvcnQtbmFtZS1tYXgnKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuc29ydChmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4Lm5hbWUgPCB5Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeC5uYW1lID4geS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VhcmNoUGFyYW1zLm9wdGlvbnNWYWx1ZSA9PT0gJ3NvcnQtbmFtZS1taW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuc29ydChmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4Lm5hbWUgPiB5Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeC5uYW1lIDwgeS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VhcmNoUGFyYW1zLm9wdGlvbnNWYWx1ZSA9PT0gJ3NvcnQteWVhci1tYXgnKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuc29ydChmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoeC55ZWFyKSA8IE51bWJlcih5LnllYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcih4LnllYXIpID4gTnVtYmVyKHkueWVhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWFyY2hQYXJhbXMub3B0aW9uc1ZhbHVlID09PSAnc29ydC15ZWFyLW1pbicpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zb3J0KGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcih4LnllYXIpID4gTnVtYmVyKHkueWVhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHgueWVhcikgPCBOdW1iZXIoeS55ZWFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlU2VhcmNoID0gc2VhcmNoLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAodmFsdWVTZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlU2VhcmNoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJuby10b3lzXCI+0JjQt9Cy0LXQvdC40YLQtSwg0YHQvtCy0L/QsNC00LXQvdC40Lkg0L3QtSDQvdCw0LnQtNC10L3QvjwvcD5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FyZHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDYXJkcyhjYXJkcyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FyZHMocmVzdWx0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2xpY2tUb3lzQ2FyZHMgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hvc2VuVG95cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZXMgc3BhbicpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRveUlEID0gdGFyZ2V0LmNsb3Nlc3QoJy50b3lzJykuZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlID0gbmV3IGxvY2FsU3RvcmFnZV8xLkxvY2FsU3RvcmFnZVV0aWwoKTtcclxuICAgICAgICAgICAgY29uc3QgZ2V0TG9jYWxTdG9yZSA9IGxvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0TG9jYWxTdG9yZSA9IGxvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UodG95SUQpO1xyXG4gICAgICAgICAgICBpZiAoZ2V0TG9jYWxTdG9yZS5sZW5ndGggPiAxOSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ9CY0LfQstC40L3QuNGC0LUg0YPQttC1INCy0YHQtSDRgdC70L7RgtGLINC30LDQvdGP0YLRiycpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QoJy50b3lzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZ2V0TG9jYWxTdG9yZS5pbmNsdWRlcyh0b3lJRCkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KCcudG95cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgY2hvc2VuVG95cy5pbm5lckhUTUwgPSBgJHtzZXRMb2NhbFN0b3JlLnRveUZhdm9yaXRlcy5sZW5ndGh9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KCcudG95cycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgY2hvc2VuVG95cy5pbm5lckhUTUwgPSBgJHtzZXRMb2NhbFN0b3JlLnRveUZhdm9yaXRlcy5sZW5ndGh9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlck1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl93cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUGFnZSh3cmFwcGVyTWFpbik7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJSZW5kZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zID0ge1xyXG4gICAgICAgICAgICBzaGFwZXM6IFtdLFxyXG4gICAgICAgICAgICBjb2xvcnM6IFtdLFxyXG4gICAgICAgICAgICBzaXplczogW10sXHJcbiAgICAgICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgbWluUXVhbnRpdHk6IG51bGwsXHJcbiAgICAgICAgICAgIG1heFF1YW50aXR5OiBudWxsLFxyXG4gICAgICAgICAgICBtaW5ZZWFyOiBudWxsLFxyXG4gICAgICAgICAgICBtYXhZZWFyOiBudWxsLFxyXG4gICAgICAgICAgICBvcHRpb25zVmFsdWU6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZW5kZXJXcmFwcGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmtUb3lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmtzOm50aC1jaGlsZCgyKScpO1xyXG4gICAgICAgIGNvbnN0IGxpbmtNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmtzOm50aC1jaGlsZCgxKScpO1xyXG4gICAgICAgIGNvbnN0IGxpbmtHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmtzOm50aC1jaGlsZCgzKScpO1xyXG4gICAgICAgIGxpbmtNYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2xpbmtzLWFjdGl2ZScpO1xyXG4gICAgICAgIGxpbmtHYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2xpbmtzLWFjdGl2ZScpO1xyXG4gICAgICAgIGxpbmtUb3lzLmNsYXNzTGlzdC5hZGQoJ2xpbmtzLWFjdGl2ZScpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0X3NlYXJjaCcpO1xyXG4gICAgICAgIGlucHV0U2VhcmNoLmZvY3VzKCk7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlck1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3cmFwcGVyTWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluX3dyYXBwZXInKTtcclxuICAgICAgICB0aGlzLnJlbmRlclBhZ2Uod3JhcHBlck1haW4pO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh3cmFwcGVyTWFpbik7XHJcbiAgICB9XHJcbiAgICByZW5kZXJDYXJkcyhjYXJkcykge1xyXG4gICAgICAgIGNvbnN0IGNhcmRzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xyXG4gICAgICAgIGNvbnN0IHNoYXBlQXJyID0gY2FyZHM7XHJcbiAgICAgICAgc2hhcGVBcnIuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG95ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZm9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICAgICAgaW5mb0NhcmQuY2xhc3NMaXN0LmFkZCgndG95cy10aXRsZScpO1xyXG4gICAgICAgICAgICBpbmZvQ2FyZC5pbm5lckhUTUwgPSBjYXJkLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWFnZUNhcmQuY2xhc3NMaXN0LmFkZCgndG95cy1pbWcnKTtcclxuICAgICAgICAgICAgaW1hZ2VDYXJkLnNyYyA9IGBhc3NldHMvdG95cy8ke2NhcmQubnVtfS53ZWJwYDtcclxuICAgICAgICAgICAgaW1hZ2VDYXJkLmFsdCA9ICd0b3knO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkRGVzY0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmNsYXNzTGlzdC5hZGQoJ3RveXMtZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvdW50LmNsYXNzTGlzdC5hZGQoJ2NvdW50Jyk7XHJcbiAgICAgICAgICAgIGNvdW50LmRhdGFzZXQuY291bnQgPSBjYXJkLmNvdW50O1xyXG4gICAgICAgICAgICBjb3VudC5pbm5lckhUTUwgPSBg0JrQvtC70LjRh9C10YHRgtCy0L46IDxzcGFuPiR7Y2FyZC5jb3VudH08L3NwYW4+YDtcclxuICAgICAgICAgICAgY29uc3QgeWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgeWVhci5jbGFzc0xpc3QuYWRkKCd5ZWFyJyk7XHJcbiAgICAgICAgICAgIHllYXIuZGF0YXNldC55ZWFyID0gY2FyZC55ZWFyO1xyXG4gICAgICAgICAgICB5ZWFyLmlubmVySFRNTCA9IGDQk9C+0LQ6IDxzcGFuPiR7Y2FyZC55ZWFyfTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgc2hhcGUuY2xhc3NMaXN0LmFkZCgnc2hhcGUnKTtcclxuICAgICAgICAgICAgc2hhcGUuZGF0YXNldC5zaGFwZSA9IGNhcmQuc2hhcGU7XHJcbiAgICAgICAgICAgIHNoYXBlLmlubmVySFRNTCA9IGDQpNC+0YDQvNCwOiA8c3Bhbj4ke2NhcmQuc2hhcGV9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb2xvci5jbGFzc0xpc3QuYWRkKCdjb2xvcicpO1xyXG4gICAgICAgICAgICBjb2xvci5kYXRhc2V0LmNvbG9yID0gY2FyZC5jb2xvcjtcclxuICAgICAgICAgICAgY29sb3IuaW5uZXJIVE1MID0gYNCm0LLQtdGCOiA8c3Bhbj4ke2NhcmQuY29sb3J9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHNpemUuY2xhc3NMaXN0LmFkZCgnc2l6ZScpO1xyXG4gICAgICAgICAgICBzaXplLmRhdGFzZXQuc2l6ZSA9IGNhcmQuc2l6ZTtcclxuICAgICAgICAgICAgc2l6ZS5pbm5lckhUTUwgPSBg0KDQsNC30LzQtdGAOiA8c3Bhbj4ke2NhcmQuc2l6ZX08L3NwYW4+YDtcclxuICAgICAgICAgICAgY29uc3QgZmF2b3JpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGZhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlJyk7XHJcbiAgICAgICAgICAgIGlmIChjYXJkLmZhdm9yaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZS5kYXRhc2V0LmZhdm9yaXRlID0gYCR7Y2FyZC5mYXZvcml0ZX1gO1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGUuaW5uZXJIVE1MID0gYNCb0Y7QsdC40LzQsNGPOiA8c3Bhbj7QlNCwPC9zcGFuPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZS5kYXRhc2V0LmZhdm9yaXRlID0gYCR7Y2FyZC5mYXZvcml0ZX1gO1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGUuaW5uZXJIVE1MID0gYNCb0Y7QsdC40LzQsNGPOiA8c3Bhbj7QndC10YI8L3NwYW4+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0YXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRhcGUuY2xhc3NMaXN0LmFkZCgndGFwZScpO1xyXG4gICAgICAgICAgICB0b3kuYXBwZW5kKGluZm9DYXJkKTtcclxuICAgICAgICAgICAgdG95LmFwcGVuZChpbWFnZUNhcmQpO1xyXG4gICAgICAgICAgICB0b3kuYXBwZW5kKGNhcmREZXNjQ29udCk7XHJcbiAgICAgICAgICAgIHRveS5hcHBlbmQodGFwZSk7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoY291bnQpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKHllYXIpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKHNoYXBlKTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmFwcGVuZChjb2xvcik7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoc2l6ZSk7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoZmF2b3JpdGUpO1xyXG4gICAgICAgICAgICB0b3kuY2xhc3NMaXN0LmFkZCgndG95cycpO1xyXG4gICAgICAgICAgICB0b3kuZGF0YXNldC5pZCA9IGNhcmQubnVtO1xyXG4gICAgICAgICAgICBjYXJkc1dyYXBwZXIuYXBwZW5kKHRveSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVDYXJkcyhjYXJkKSB7XHJcbiAgICAgICAgY2FyZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyUGFnZSh3cmFwcGVyKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGZpbHRlckRpdi5jbGFzc0xpc3QuYWRkKCdmaWx0ZXInKTtcclxuICAgICAgICBmaWx0ZXJEaXYuaWQgPSAnZmlsdGVyJztcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZChmaWx0ZXJEaXYpO1xyXG4gICAgICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZHMuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZChjYXJkcyk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyQm94MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZpbHRlckJveDEuY2xhc3NOYW1lID0gJ2JveCBib3gtZmlsdGVycyc7XHJcbiAgICAgICAgZmlsdGVyQm94MS5pZCA9ICdib3gxJztcclxuICAgICAgICBjb25zdCBib3gxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGJveDFUaXRsZS5pbm5lckhUTUwgPSAn0KTQuNC70YzRgtGA0Ysg0L/QviDQt9C90LDRh9C10L3QuNGOJztcclxuICAgICAgICBib3gxVGl0bGUuY2xhc3NOYW1lID0gJ2ZpbHRlci10aXRsZSc7XHJcbiAgICAgICAgZmlsdGVyQm94MS5hcHBlbmQoYm94MVRpdGxlKTtcclxuICAgICAgICBjb25zdCBzaGFwZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNoYXBlQm94LmNsYXNzTmFtZSA9ICdzaGFwZS1jb250YWluZXInO1xyXG4gICAgICAgIHNoYXBlQm94LmlubmVySFRNTCA9ICfQpNC+0YDQvNCwOiAnO1xyXG4gICAgICAgIEZpbHRlckJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG5TaGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidG5TaGFwZS5jbGFzc0xpc3QuYWRkKCdidG4tc2hhcGUnKTtcclxuICAgICAgICAgICAgYnRuU2hhcGUuZGF0YXNldC5pZCA9IGJ0bi5maWx0ZXI7XHJcbiAgICAgICAgICAgIHNoYXBlQm94LmFwcGVuZChidG5TaGFwZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY29sb3JCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb2xvckJveC5jbGFzc05hbWUgPSAnY29sb3ItY29udGFpbmVyJztcclxuICAgICAgICBjb2xvckJveC5pbm5lckhUTUwgPSAn0KbQstC10YI6ICc7XHJcbiAgICAgICAgRmlsdGVyQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bkNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ0bkNvbG9yLmNsYXNzTmFtZSA9ICdidG4tY29sb3InO1xyXG4gICAgICAgICAgICBidG5Db2xvci5kYXRhc2V0LmlkID0gYnRuLmNvbG9yO1xyXG4gICAgICAgICAgICBjb2xvckJveC5hcHBlbmQoYnRuQ29sb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNpemVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzaXplQm94LmNsYXNzTmFtZSA9ICdzaXplLWNvbnRhaW5lcic7XHJcbiAgICAgICAgc2l6ZUJveC5pbm5lckhUTUwgPSAn0KDQsNC30LzQtdGAOiAnO1xyXG4gICAgICAgIFNpemVCdXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuU2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidG5TaXplLmNsYXNzTmFtZSA9ICdidG4tc2l6ZSc7XHJcbiAgICAgICAgICAgIGJ0blNpemUuZGF0YXNldC5pZCA9IGJ0bi5zaXplO1xyXG4gICAgICAgICAgICBzaXplQm94LmFwcGVuZChidG5TaXplKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZhdm9yaXRlQm94LmlubmVySFRNTCA9ICfQotC+0LvRjNC60L4g0LvRjtCx0LjQvNGL0LU6ICc7XHJcbiAgICAgICAgZmF2b3JpdGVCb3guY2xhc3NOYW1lID0gJ2Zhdm9yaXRlJztcclxuICAgICAgICBjb25zdCBmYXZvcml0ZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmYXZvcml0ZUNvbnQuY2xhc3NOYW1lID0gJ2Zhdm9yaXRlLWNvbnRhaW5lcic7XHJcbiAgICAgICAgZmF2b3JpdGVCb3guYXBwZW5kKGZhdm9yaXRlQ29udCk7XHJcbiAgICAgICAgY29uc3QgZmF2b3JpdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZmF2b3JpdGVJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICBmYXZvcml0ZUlucHV0LmNsYXNzTmFtZSA9ICdpbnB1dC1mYXZvcml0ZSc7XHJcbiAgICAgICAgZmF2b3JpdGVJbnB1dC5pZCA9ICdjaGVjay1mYXZvcml0ZSc7XHJcbiAgICAgICAgZmF2b3JpdGVDb250LmFwcGVuZChmYXZvcml0ZUlucHV0KTtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBmYXZvcml0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NoZWNrLWZhdm9yaXRlJyk7XHJcbiAgICAgICAgZmF2b3JpdGVMYWJlbC5jbGFzc05hbWUgPSAnbGFiZWwtZmF2b3JpdGUnO1xyXG4gICAgICAgIGZhdm9yaXRlQ29udC5hcHBlbmQoZmF2b3JpdGVMYWJlbCk7XHJcbiAgICAgICAgZmlsdGVyQm94MS5hcHBlbmQoc2hhcGVCb3gpO1xyXG4gICAgICAgIGZpbHRlckJveDEuYXBwZW5kKGNvbG9yQm94KTtcclxuICAgICAgICBmaWx0ZXJCb3gxLmFwcGVuZChzaXplQm94KTtcclxuICAgICAgICBmaWx0ZXJCb3gxLmFwcGVuZChmYXZvcml0ZUJveCk7XHJcbiAgICAgICAgZmlsdGVyRGl2LmFwcGVuZChmaWx0ZXJCb3gxKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJCb3gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZmlsdGVyQm94Mi5jbGFzc05hbWUgPSAnYm94IGJveC1yYW5nZSc7XHJcbiAgICAgICAgZmlsdGVyQm94Mi5pZCA9ICdib3gyJztcclxuICAgICAgICBjb25zdCBib3gyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGJveDJUaXRsZS5jbGFzc05hbWUgPSAnZmlsdGVyLXRpdGxlJztcclxuICAgICAgICBib3gyVGl0bGUuaW5uZXJIVE1MID0gJ9Ck0LjQu9GM0YLRgNGLINC/0L4g0LTQuNCw0L/QsNC30L7QvdGDJztcclxuICAgICAgICBmaWx0ZXJCb3gyLmFwcGVuZChib3gyVGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY291bnRCb3guY2xhc3NOYW1lID0gJ2ZpbHRlci1xdWFudGl0eSc7XHJcbiAgICAgICAgY291bnRCb3guaW5uZXJIVE1MID0gJ9Ca0L7Qu9C40YfQtdGB0YLQstC+INGN0LrQt9C10LzQv9C70Y/RgNC+0LI6ICc7XHJcbiAgICAgICAgY29uc3QgY291bnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb3VudENvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyLWZvci1maWx0ZXJzJztcclxuICAgICAgICBjb3VudEJveC5hcHBlbmRDaGlsZChjb3VudENvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgY291bnRJbnB1dE1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY291bnRJbnB1dE1pbi50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgY291bnRJbnB1dE1pbi5jbGFzc05hbWUgPSAnbWluLXF1YW50aXR5JztcclxuICAgICAgICBjb3VudElucHV0TWluLnZhbHVlID0gJzEnO1xyXG4gICAgICAgIGNvdW50SW5wdXRNaW4ucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgIGNvdW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvdW50SW5wdXRNaW4pO1xyXG4gICAgICAgIGNvbnN0IHNsaWRlclF1YW50aXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2xpZGVyUXVhbnRpdHkuaWQgPSAnc2xpZGVyLXF1YW50aXR5JztcclxuICAgICAgICBzbGlkZXJRdWFudGl0eS5jbGFzc05hbWUgPSAnc2xpZGVyLXF1YW50aXR5JztcclxuICAgICAgICBjb3VudENvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXJRdWFudGl0eSk7XHJcbiAgICAgICAgY29uc3QgY291bnRJbnB1dE1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY291bnRJbnB1dE1heC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgY291bnRJbnB1dE1heC5jbGFzc05hbWUgPSAnbWF4LXF1YW50aXR5JztcclxuICAgICAgICBjb3VudElucHV0TWF4LnZhbHVlID0gJzEyJztcclxuICAgICAgICBjb3VudElucHV0TWF4LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICBjb3VudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb3VudElucHV0TWF4KTtcclxuICAgICAgICBjb25zdCB5ZWFyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgeWVhckJveC5jbGFzc05hbWUgPSAnZmlsdGVyLXllYXInO1xyXG4gICAgICAgIHllYXJCb3guaW5uZXJIVE1MID0gJ9CT0L7QtCDQv9GA0LjQvtCx0YDQtdGC0LXQvdC40Y86ICc7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzbGlkZXJDb3VudC5jbGFzc05hbWUgPSAnY29udGFpbmVyLWZvci1maWx0ZXJzJztcclxuICAgICAgICB5ZWFyQm94LmFwcGVuZENoaWxkKHNsaWRlckNvdW50KTtcclxuICAgICAgICBjb25zdCB5ZWFySW5wdXRNaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHllYXJJbnB1dE1pbi50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgeWVhcklucHV0TWluLmNsYXNzTmFtZSA9ICdtaW4teWVhcic7XHJcbiAgICAgICAgeWVhcklucHV0TWluLnZhbHVlID0gJzE5NDAnO1xyXG4gICAgICAgIHllYXJJbnB1dE1pbi5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgc2xpZGVyQ291bnQuYXBwZW5kQ2hpbGQoeWVhcklucHV0TWluKTtcclxuICAgICAgICBjb25zdCBzbGlkZXJZZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2xpZGVyWWVhci5pZCA9ICdzbGlkZXIteWVhcic7XHJcbiAgICAgICAgc2xpZGVyWWVhci5jbGFzc05hbWUgPSAnc2xpZGVyLXllYXInO1xyXG4gICAgICAgIHNsaWRlckNvdW50LmFwcGVuZENoaWxkKHNsaWRlclllYXIpO1xyXG4gICAgICAgIGNvbnN0IHllYXJJbnB1dE1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgeWVhcklucHV0TWF4LnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICB5ZWFySW5wdXRNYXguY2xhc3NOYW1lID0gJ21heC15ZWFyJztcclxuICAgICAgICB5ZWFySW5wdXRNYXgudmFsdWUgPSAnMjAyMCc7XHJcbiAgICAgICAgeWVhcklucHV0TWF4LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICBzbGlkZXJDb3VudC5hcHBlbmRDaGlsZCh5ZWFySW5wdXRNYXgpO1xyXG4gICAgICAgIGZpbHRlckJveDIuYXBwZW5kKGNvdW50Qm94KTtcclxuICAgICAgICBmaWx0ZXJCb3gyLmFwcGVuZCh5ZWFyQm94KTtcclxuICAgICAgICBmaWx0ZXJEaXYuYXBwZW5kKGZpbHRlckJveDIpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlckJveDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmaWx0ZXJCb3gzLmNsYXNzTmFtZSA9ICdib3ggYm94LXNvcnQnO1xyXG4gICAgICAgIGZpbHRlckJveDMuaWQgPSAnYm94Myc7XHJcbiAgICAgICAgY29uc3QgYm94M1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBib3gzVGl0bGUuY2xhc3NOYW1lID0gJ2ZpbHRlci10aXRsZSc7XHJcbiAgICAgICAgYm94M1RpdGxlLmlubmVySFRNTCA9ICfQodC+0YDRgtC40YDQvtCy0LrQsCc7XHJcbiAgICAgICAgZmlsdGVyQm94My5hcHBlbmQoYm94M1RpdGxlKTtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICBzZWxlY3QuY2xhc3NOYW1lID0gJ3NvcnQtc2VsZWN0JztcclxuICAgICAgICBPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbi50ZXh0O1xyXG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZpbHRlckJveDMuYXBwZW5kKHNlbGVjdCk7XHJcbiAgICAgICAgY29uc3QgYnRuUmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5SZXNldC5jbGFzc05hbWUgPSAncmVzZXQnO1xyXG4gICAgICAgIGJ0blJlc2V0LnR5cGUgPSAncmVzZXQnO1xyXG4gICAgICAgIGJ0blJlc2V0LmlubmVySFRNTCA9ICfQodCx0YDQvtGBINGE0LjQu9GM0YLRgNC+0LInO1xyXG4gICAgICAgIGZpbHRlckJveDMuYXBwZW5kKGJ0blJlc2V0KTtcclxuICAgICAgICBmaWx0ZXJEaXYuYXBwZW5kKGZpbHRlckJveDMpO1xyXG4gICAgICAgIGRhdGFfMS5kZWZhdWx0LmZvckVhY2godG95cyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRveSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmZvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgICAgIGluZm9DYXJkLmNsYXNzTGlzdC5hZGQoJ3RveXMtdGl0bGUnKTtcclxuICAgICAgICAgICAgaW5mb0NhcmQuaW5uZXJIVE1MID0gdG95cy5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1hZ2VDYXJkLmNsYXNzTGlzdC5hZGQoJ3RveXMtaW1nJyk7XHJcbiAgICAgICAgICAgIGltYWdlQ2FyZC5zcmMgPSBgYXNzZXRzL3RveXMvJHt0b3lzLm51bX0ud2VicGA7XHJcbiAgICAgICAgICAgIGltYWdlQ2FyZC5hbHQgPSAndG95JztcclxuICAgICAgICAgICAgY29uc3QgY2FyZERlc2NDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5jbGFzc0xpc3QuYWRkKCd0b3lzLWRlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb3VudC5jbGFzc0xpc3QuYWRkKCdjb3VudCcpO1xyXG4gICAgICAgICAgICBjb3VudC5kYXRhc2V0LmNvdW50ID0gdG95cy5jb3VudDtcclxuICAgICAgICAgICAgY291bnQuaW5uZXJIVE1MID0gYNCa0L7Qu9C40YfQtdGB0YLQstC+OiA8c3Bhbj4ke3RveXMuY291bnR9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHllYXIuY2xhc3NMaXN0LmFkZCgneWVhcicpO1xyXG4gICAgICAgICAgICB5ZWFyLmRhdGFzZXQueWVhciA9IHRveXMueWVhcjtcclxuICAgICAgICAgICAgeWVhci5pbm5lckhUTUwgPSBg0JPQvtC0OiA8c3Bhbj4ke3RveXMueWVhcn08L3NwYW4+YDtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHNoYXBlLmNsYXNzTGlzdC5hZGQoJ3NoYXBlJyk7XHJcbiAgICAgICAgICAgIHNoYXBlLmRhdGFzZXQuc2hhcGUgPSB0b3lzLnNoYXBlO1xyXG4gICAgICAgICAgICBzaGFwZS5pbm5lckhUTUwgPSBg0KTQvtGA0LzQsDogPHNwYW4+JHt0b3lzLnNoYXBlfTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29sb3IuY2xhc3NMaXN0LmFkZCgnY29sb3InKTtcclxuICAgICAgICAgICAgY29sb3IuZGF0YXNldC5jb2xvciA9IHRveXMuY29sb3I7XHJcbiAgICAgICAgICAgIGNvbG9yLmlubmVySFRNTCA9IGDQptCy0LXRgjogPHNwYW4+JHt0b3lzLmNvbG9yfTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBzaXplLmNsYXNzTGlzdC5hZGQoJ3NpemUnKTtcclxuICAgICAgICAgICAgc2l6ZS5kYXRhc2V0LnNpemUgPSB0b3lzLnNpemU7XHJcbiAgICAgICAgICAgIHNpemUuaW5uZXJIVE1MID0gYNCg0LDQt9C80LXRgDogPHNwYW4+JHt0b3lzLnNpemV9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBmYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZScpO1xyXG4gICAgICAgICAgICBpZiAodG95cy5mYXZvcml0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGUuZGF0YXNldC5mYXZvcml0ZSA9IGAke3RveXMuZmF2b3JpdGV9YDtcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlLmlubmVySFRNTCA9IGDQm9GO0LHQuNC80LDRjzogPHNwYW4+0JTQsDwvc3Bhbj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGUuZGF0YXNldC5mYXZvcml0ZSA9IGAke3RveXMuZmF2b3JpdGV9YDtcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlLmlubmVySFRNTCA9IGDQm9GO0LHQuNC80LDRjzogPHNwYW4+0J3QtdGCPC9zcGFuPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0YXBlLmNsYXNzTGlzdC5hZGQoJ3RhcGUnKTtcclxuICAgICAgICAgICAgdG95LmFwcGVuZChpbmZvQ2FyZCk7XHJcbiAgICAgICAgICAgIHRveS5hcHBlbmQoaW1hZ2VDYXJkKTtcclxuICAgICAgICAgICAgdG95LmFwcGVuZChjYXJkRGVzY0NvbnQpO1xyXG4gICAgICAgICAgICB0b3kuYXBwZW5kKHRhcGUpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKGNvdW50KTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmFwcGVuZCh5ZWFyKTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmFwcGVuZChzaGFwZSk7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoY29sb3IpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKHNpemUpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKGZhdm9yaXRlKTtcclxuICAgICAgICAgICAgdG95LmNsYXNzTGlzdC5hZGQoJ3RveXMnKTtcclxuICAgICAgICAgICAgdG95LmRhdGFzZXQuaWQgPSB0b3lzLm51bTtcclxuICAgICAgICAgICAgY2FyZHMuYXBwZW5kKHRveSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVQYWdlKHBhZ2UpIHtcclxuICAgICAgICBwYWdlLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyV3JhcHBlcigpO1xyXG4gICAgICAgIGNvbnN0IGNob3NlblRveXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzIHNwYW4nKTtcclxuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2UgPSBuZXcgbG9jYWxTdG9yYWdlXzEuTG9jYWxTdG9yYWdlVXRpbCgpO1xyXG4gICAgICAgIGNvbnN0IGdldExvY2FsU3RvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgY2hvc2VuVG95cy5pbm5lckhUTUwgPSBgJHtnZXRMb2NhbFN0b3JlLmxlbmd0aH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZSA9IG5ldyBsb2NhbFN0b3JhZ2VfMS5Mb2NhbFN0b3JhZ2VVdGlsKCk7XHJcbiAgICAgICAgY29uc3QgZ2V0TG9jYWxTdG9yZSA9IGxvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBjb25zdCB0b3lzSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG95cycpO1xyXG4gICAgICAgIHRveXNJRC5mb3JFYWNoKCh0b3kpID0+IHtcclxuICAgICAgICAgICAgaWYgKGdldExvY2FsU3RvcmUuaW5jbHVkZXModG95LmRhdGFzZXQuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0b3kuY2xhc3NOYW1lID0gJ3RveXMgYWN0aXZlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRveS5jbGFzc05hbWUgPSAndG95cyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAoMCwgc2xpZGVyX3F1YW50aXR5XzEucXVhbnRpdHlTbGlkZXIpKCk7XHJcbiAgICAgICAgKDAsIHNsaWRlcl95ZWFyXzEueWVhclNsaWRlcikoKTtcclxuICAgICAgICBjb25zdCBzaGFwZUNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hhcGUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgc2hhcGVDb250ID09PSBudWxsIHx8IHNoYXBlQ29udCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2hhcGVDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0ZpbHRlcik7XHJcbiAgICAgICAgY29uc3QgY29sb3JDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbG9yQ29udCA9PT0gbnVsbCB8fCBjb2xvckNvbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbG9yQ29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tGaWx0ZXIpO1xyXG4gICAgICAgIGNvbnN0IHNpemVDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgc2l6ZUNvbnQgPT09IG51bGwgfHwgc2l6ZUNvbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNpemVDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0ZpbHRlcik7XHJcbiAgICAgICAgY29uc3QgZmF2b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGUnKTtcclxuICAgICAgICBmYXZvcml0ZSA9PT0gbnVsbCB8fCBmYXZvcml0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmF2b3JpdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBtaW5RdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4tcXVhbnRpdHknKTtcclxuICAgICAgICBtaW5RdWFudGl0eSA9PT0gbnVsbCB8fCBtaW5RdWFudGl0eSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWluUXVhbnRpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jbGlja0ZpbHRlcik7XHJcbiAgICAgICAgY29uc3QgbWF4UXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF4LXF1YW50aXR5Jyk7XHJcbiAgICAgICAgbWF4UXVhbnRpdHkgPT09IG51bGwgfHwgbWF4UXVhbnRpdHkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1heFF1YW50aXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2xpY2tGaWx0ZXIpO1xyXG4gICAgICAgIGNvbnN0IG1pblllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluLXllYXInKTtcclxuICAgICAgICBtaW5ZZWFyID09PSBudWxsIHx8IG1pblllYXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1pblllYXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jbGlja0ZpbHRlcik7XHJcbiAgICAgICAgY29uc3QgbWF4WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXgteWVhcicpO1xyXG4gICAgICAgIG1heFllYXIgPT09IG51bGwgfHwgbWF4WWVhciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF4WWVhci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNsaWNrRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBzb3J0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQtc2VsZWN0Jyk7XHJcbiAgICAgICAgc29ydFNlbGVjdCA9PT0gbnVsbCB8fCBzb3J0U2VsZWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzb3J0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2xpY2tGaWx0ZXIpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIik7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuY2xpY2tGaWx0ZXIpO1xyXG4gICAgICAgIGNvbnN0IGJ0blJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XHJcbiAgICAgICAgYnRuUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc2V0QnV0dG9uKTtcclxuICAgICAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b3lzJyk7XHJcbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tUb3lzQ2FyZHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVG95cyA9IFRveXM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuU25vd2ZsYWtlID0gZXhwb3J0cy5Tbm93Zmxha2VQb3NpdGlvbiA9IHZvaWQgMDtcclxudmFyIFNub3dmbGFrZVBvc2l0aW9uO1xyXG4oZnVuY3Rpb24gKFNub3dmbGFrZVBvc2l0aW9uKSB7XHJcbiAgICBTbm93Zmxha2VQb3NpdGlvbltTbm93Zmxha2VQb3NpdGlvbltcIlRPUFwiXSA9IDBdID0gXCJUT1BcIjtcclxuICAgIFNub3dmbGFrZVBvc2l0aW9uW1Nub3dmbGFrZVBvc2l0aW9uW1wiQk9UVE9NXCJdID0gMV0gPSBcIkJPVFRPTVwiO1xyXG4gICAgU25vd2ZsYWtlUG9zaXRpb25bU25vd2ZsYWtlUG9zaXRpb25bXCJMRUZUXCJdID0gMl0gPSBcIkxFRlRcIjtcclxuICAgIFNub3dmbGFrZVBvc2l0aW9uW1Nub3dmbGFrZVBvc2l0aW9uW1wiUklHSFRcIl0gPSAzXSA9IFwiUklHSFRcIjtcclxuICAgIFNub3dmbGFrZVBvc2l0aW9uW1Nub3dmbGFrZVBvc2l0aW9uW1wiT05TVEFHRVwiXSA9IDRdID0gXCJPTlNUQUdFXCI7XHJcbn0pKFNub3dmbGFrZVBvc2l0aW9uID0gZXhwb3J0cy5Tbm93Zmxha2VQb3NpdGlvbiB8fCAoZXhwb3J0cy5Tbm93Zmxha2VQb3NpdGlvbiA9IHt9KSk7XHJcbmNsYXNzIFNub3dmbGFrZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gXCIjZmZmZmZmXCI7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucG9zID0gU25vd2ZsYWtlUG9zaXRpb24uVE9QO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbnZhcyAyRCBjb250ZXh0IG5vdCBmb3VuZCwgcGxlYXNlIGNoZWNrIGl0IGlzIHJ1bm5pbmcgaW4gQnJvd3NlciBlbnZpcm9ubWVudC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUgJiYgdGhpcy5wb3MgIT09IFNub3dmbGFrZVBvc2l0aW9uLk9OU1RBR0UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3MgPT09IFNub3dmbGFrZVBvc2l0aW9uLkxFRlQgfHxcclxuICAgICAgICAgICAgdGhpcy5wb3MgPT09IFNub3dmbGFrZVBvc2l0aW9uLlJJR0hUIHx8XHJcbiAgICAgICAgICAgIHRoaXMucG9zID09PSBTbm93Zmxha2VQb3NpdGlvbi5CT1RUT00pIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5O1xyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4O1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5hbHBoYTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueSA8IC10aGlzLnJhZGl1cykge1xyXG4gICAgICAgICAgICB0aGlzLnBvcyA9IFNub3dmbGFrZVBvc2l0aW9uLlRPUDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy55ID4gdGhpcy5jYW52YXMuaGVpZ2h0ICsgdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3MgPSBTbm93Zmxha2VQb3NpdGlvbi5CT1RUT007XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMueCA8IC10aGlzLnJhZGl1cykge1xyXG4gICAgICAgICAgICB0aGlzLnBvcyA9IFNub3dmbGFrZVBvc2l0aW9uLkxFRlQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMueCA+IHRoaXMuY2FudmFzLndpZHRoICsgdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3MgPSBTbm93Zmxha2VQb3NpdGlvbi5SSUdIVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gU25vd2ZsYWtlUG9zaXRpb24uT05TVEFHRTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhbGxvY2F0ZSgpIHtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIC10aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy52eSA9IDEgKyBNYXRoLnJhbmRvbSgpICogMztcclxuICAgICAgICB0aGlzLnZ4ID0gMC41IC0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IDEgKyBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgICAgICB0aGlzLmFscGhhID0gMC41ICsgTWF0aC5yYW5kb20oKSAqIDAuNTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNub3dmbGFrZSA9IFNub3dmbGFrZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Tbm93U2NlbmUgPSB2b2lkIDA7XHJcbmNvbnN0IHNub3dfZmxha2VfMSA9IHJlcXVpcmUoXCIuL3Nub3ctZmxha2VcIik7XHJcbmNvbnN0IGRlZmF1bHRTbm93U2NlbmVDb25maWcgPSB7XHJcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICB2b2x1bW46IDMwMCxcclxufTtcclxuY2xhc3MgU25vd1NjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lciA9IFwiYm9keVwiLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbklkID0gMDtcclxuICAgICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gdHlwZW9mIGNvbnRhaW5lciA9PT0gXCJzdHJpbmdcIiA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSA6IGNvbnRhaW5lcjtcclxuICAgICAgICBpZiAoY29udGFpbmVyRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lckVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW4gbm90IGZpbmQgY29udGFpbmVyIGJ5IHNwZWNpZmllZCBzZWxlY3RvclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTbm93U2NlbmVDb25maWcpLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuYnVpbGRTY2VuZSgpO1xyXG4gICAgfVxyXG4gICAgcGxheSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZFNjZW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNub3dmbGFrZXMuZm9yRWFjaCgocykgPT4gKHMuYWN0aXZlID0gdHJ1ZSkpO1xyXG4gICAgICAgIGlmICghdGhpcy5hbmltYXRpb25JZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudXBkYXRlRnJhbWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNub3dmbGFrZXMuZm9yRWFjaCgocykgPT4gKHMuYWN0aXZlID0gZmFsc2UpKTtcclxuICAgIH1cclxuICAgIGJ1aWxkU2NlbmUoKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgICAgICBjYW52YXMuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNub3dmbGFrZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uZmlnLnZvbHVtbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZsYWtlID0gbmV3IHNub3dfZmxha2VfMS5Tbm93Zmxha2UodGhpcy5jYW52YXMpO1xyXG4gICAgICAgICAgICBmbGFrZS5jb2xvciA9IHRoaXMuY29uZmlnLmNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMucHVzaChmbGFrZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveVNjZW5lKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLmNhbnZhcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUZyYW1lKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW52YXMgfHwgIXRoaXMuY3R4KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuc25vd2ZsYWtlcy5mb3JFYWNoKChmbGFrZSkgPT4ge1xyXG4gICAgICAgICAgICBmbGFrZS5kcmF3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSAmJiB0aGlzLnNub3dmbGFrZXMuZXZlcnkoKGZsYWtlKSA9PiBmbGFrZS5wb3MgIT09IHNub3dfZmxha2VfMS5Tbm93Zmxha2VQb3NpdGlvbi5PTlNUQUdFKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbklkID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95U2NlbmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGVGcmFtZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Tbm93U2NlbmUgPSBTbm93U2NlbmU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9nbG9iYWwuY3NzXCIpO1xyXG5jb25zdCBhcHBfMSA9IHJlcXVpcmUoXCIuL3BhZ2VzL2FwcC9hcHBcIik7XHJcbmNvbnN0IGFwcCA9IG5ldyBhcHBfMS5BcHAoKTtcclxuYXBwLnJ1bigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=