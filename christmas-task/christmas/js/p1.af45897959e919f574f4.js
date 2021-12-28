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
            const inputSwitch = document.querySelector('.switch-input');
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
            const treeContainer = document.querySelector('.tree-garland-container');
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
        inputSwitch.classList.add('switch-input');
        inputSwitch.type = 'checkbox';
        inputSwitch.id = 'input-switch';
        inputSwitch.checked = true;
        switchOffOn.append(inputSwitch);
        const labelSwitch = document.createElement('label');
        labelSwitch.setAttribute('for', 'input-switch');
        labelSwitch.dataset.on = 'Вкл.';
        labelSwitch.dataset.off = 'Выкл.';
        labelSwitch.classList.add('label-switch');
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
        var _a, _b, _c, _d;
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
            element.style.right = (_c = element.parentElement) === null || _c === void 0 ? void 0 : _c.style.right;
            element.style.bottom = (_d = element.parentElement) === null || _d === void 0 ? void 0 : _d.style.bottom;
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
        const inputSwitch = document.querySelector('.switch-input');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcDEuYWY0NTg5Nzk1OWU5MTlmNTc0ZjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0EsSUFBSSxLQUE0RDtBQUNoRSxJQUFJLENBQzJHO0FBQy9HLENBQUMsNkJBQTZCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOENBQThDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0Msc0NBQXNDLHlDQUF5QztBQUMvRSxrQ0FBa0MscUNBQXFDO0FBQ3ZFLG1DQUFtQyxzQ0FBc0M7QUFDekUscUJBQXFCLHVCQUF1QjtBQUM1Qyx1QkFBdUIseUJBQXlCO0FBQ2hELHlCQUF5QiwyQkFBMkI7QUFDcEQsb0JBQW9CLHVCQUF1QjtBQUMzQyx1QkFBdUIsMEJBQTBCO0FBQ2pELGlDQUFpQyxvQ0FBb0M7QUFDckUscUJBQXFCLHVCQUF1QjtBQUM1QywyQkFBMkIsOEJBQThCO0FBQ3pELHNCQUFzQix5QkFBeUI7QUFDL0MscUJBQXFCLHdCQUF3QjtBQUM3Qyx1QkFBdUIsMEJBQTBCO0FBQ2pELHlCQUF5QiwyQkFBMkI7QUFDcEQsMEJBQTBCLDZCQUE2QjtBQUN2RCxzQkFBc0IseUJBQXlCO0FBQy9DLHdCQUF3QiwyQkFBMkI7QUFDbkQsK0JBQStCLGlDQUFpQztBQUNoRSwrQkFBK0Isa0NBQWtDO0FBQ2pFLHlCQUF5QiwyQkFBMkI7QUFDcEQsMEJBQTBCLDRCQUE0QjtBQUN0RCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixnQkFBZ0I7QUFDaEc7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsK0JBQStCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsYUFBYTs7QUFFaEUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL3JFWTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QscUJBQXFCLG1CQUFPLENBQUMsa0VBQTRCO0FBQ3pELG1CQUFPLENBQUMseURBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QsbUJBQU8sQ0FBQyx5REFBYztBQUN0QixxQkFBcUIsbUJBQU8sQ0FBQyxrRUFBNEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsVUFBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7Ozs7OztBQ25GRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1oscUJBQXFCLG1CQUFPLENBQUMsa0VBQTRCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOzs7Ozs7Ozs7Ozs7QUNaQztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7Ozs7Ozs7Ozs7OztBQ2JMO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7O0FDZEM7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFlOzs7Ozs7Ozs7Ozs7QUM1bEJGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx3QkFBd0I7Ozs7Ozs7Ozs7OztBQzdCWDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIscUJBQXFCLG1CQUFPLENBQUMsaUVBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQjs7Ozs7Ozs7Ozs7O0FDeEJUO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQjtBQUNsQixxQkFBcUIsbUJBQU8sQ0FBQyxpRUFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7Ozs7QUN4Qkw7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsV0FBVztBQUNYLGlCQUFpQixtQkFBTyxDQUFDLCtFQUFxQztBQUM5RCxlQUFlLG1CQUFPLENBQUMsMENBQWM7QUFDckMsZUFBZSxtQkFBTyxDQUFDLDBDQUFjO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQywwQ0FBYztBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQywrRUFBcUM7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLHVFQUFpQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGtCQUFrQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNEYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1osZ0JBQWdCLG1CQUFPLENBQUMsNkRBQTRCO0FBQ3BELGVBQWUsbUJBQU8sQ0FBQyw2QkFBWTtBQUNuQyx1QkFBdUIsbUJBQU8sQ0FBQyx5RUFBa0M7QUFDakUsZUFBZSxtQkFBTyxDQUFDLHVDQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLEtBQUs7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxRQUFRO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxNQUFNO0FBQzNDLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1CQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUJBQW1CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxTQUFTO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0Q7QUFDQSx1REFBdUQsU0FBUztBQUNoRTtBQUNBLDJDQUEyQyxTQUFTLEdBQUcsRUFBRTtBQUN6RDtBQUNBLDREQUE0RCxTQUFTO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHlCQUF5QjtBQUN6RDtBQUNBLG1EQUFtRCxTQUFTO0FBQzVEO0FBQ0EsdUNBQXVDLFNBQVMsR0FBRyxFQUFFO0FBQ3JEO0FBQ0Esd0RBQXdELFNBQVM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxZQUFZOzs7Ozs7Ozs7Ozs7QUM5dUJDO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQjtBQUNoQixnQkFBZ0IsbUJBQU8sQ0FBQyw2REFBNEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7Ozs7Ozs7Ozs7O0FDOUJIO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWixnQkFBZ0IsbUJBQU8sQ0FBQyw2REFBNEI7QUFDcEQsZUFBZSxtQkFBTyxDQUFDLDZCQUFZO0FBQ25DLG1CQUFPLENBQUMsNERBQTZCO0FBQ3JDLG1CQUFPLENBQUMsd0VBQW1DO0FBQzNDLDBCQUEwQixtQkFBTyxDQUFDLHlFQUFrQztBQUNwRSxzQkFBc0IsbUJBQU8sQ0FBQyxpRUFBOEI7QUFDNUQsdUJBQXVCLG1CQUFPLENBQUMseUVBQWtDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtDQUFrQztBQUM1RTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsa0NBQWtDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsU0FBUztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsV0FBVztBQUM5RDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsVUFBVTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsV0FBVztBQUN6RDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsVUFBVTtBQUN4RDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsY0FBYztBQUM3RDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsY0FBYztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxXQUFXO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxVQUFVO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxXQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxXQUFXO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxVQUFVO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxjQUFjO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxjQUFjO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHFCQUFxQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7Ozs7OztBQ3hqQkM7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCLEdBQUcseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvREFBb0QseUJBQXlCLEtBQUs7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7Ozs7OztBQ3hFSjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakIscUJBQXFCLG1CQUFPLENBQUMsMENBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7VUNqRmpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQU8sQ0FBQyxrQ0FBYztBQUN0QixjQUFjLG1CQUFPLENBQUMsMkNBQWlCO0FBQ3ZDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jc3M/YjllNCIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3M/ZmFhYSIsIndlYnBhY2s6Ly8vLi9nbG9iYWwuY3NzPzdjNWYiLCJ3ZWJwYWNrOi8vLy4vbm91aXNsaWRlci9zbGlkZXIuY3NzP2E3YzkiLCJ3ZWJwYWNrOi8vLy4vbm91aXNsaWRlci9zbGlkZXJDdXN0b20uY3NzPzdhMzYiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvbWFpbi9tYWluLnRzIiwid2VicGFjazovLy8uL2NvcmUvdGVtcGxhdGVzL2NvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvcGFnZXMudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9sb2NhbC1zdG9yYWdlL2xvY2FsU3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9ub3Vpc2xpZGVyL3NsaWRlci1xdWFudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9ub3Vpc2xpZGVyL3NsaWRlci15ZWFyLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL21haW4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy90b3lzL3RveXMudHMiLCJ3ZWJwYWNrOi8vLy4vc25vdy9zbm93LWZsYWtlLnRzIiwid2VicGFjazovLy8uL3Nub3cvc25vdy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5ub1VpU2xpZGVyID0ge30pKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIGV4cG9ydHMuUGlwc01vZGUgPSB2b2lkIDA7XG4gICAgKGZ1bmN0aW9uIChQaXBzTW9kZSkge1xuICAgICAgICBQaXBzTW9kZVtcIlJhbmdlXCJdID0gXCJyYW5nZVwiO1xuICAgICAgICBQaXBzTW9kZVtcIlN0ZXBzXCJdID0gXCJzdGVwc1wiO1xuICAgICAgICBQaXBzTW9kZVtcIlBvc2l0aW9uc1wiXSA9IFwicG9zaXRpb25zXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiQ291bnRcIl0gPSBcImNvdW50XCI7XG4gICAgICAgIFBpcHNNb2RlW1wiVmFsdWVzXCJdID0gXCJ2YWx1ZXNcIjtcbiAgICB9KShleHBvcnRzLlBpcHNNb2RlIHx8IChleHBvcnRzLlBpcHNNb2RlID0ge30pKTtcbiAgICBleHBvcnRzLlBpcHNUeXBlID0gdm9pZCAwO1xuICAgIChmdW5jdGlvbiAoUGlwc1R5cGUpIHtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJOb25lXCJdID0gLTFdID0gXCJOb25lXCI7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9WYWx1ZVwiXSA9IDBdID0gXCJOb1ZhbHVlXCI7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTGFyZ2VWYWx1ZVwiXSA9IDFdID0gXCJMYXJnZVZhbHVlXCI7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiU21hbGxWYWx1ZVwiXSA9IDJdID0gXCJTbWFsbFZhbHVlXCI7XG4gICAgfSkoZXhwb3J0cy5QaXBzVHlwZSB8fCAoZXhwb3J0cy5QaXBzVHlwZSA9IHt9KSk7XG4gICAgLy9yZWdpb24gSGVscGVyIE1ldGhvZHNcbiAgICBmdW5jdGlvbiBpc1ZhbGlkRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkgJiYgdHlwZW9mIGVudHJ5LmZyb20gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpIHtcbiAgICAgICAgLy8gcGFydGlhbCBmb3JtYXR0ZXJzIG9ubHkgbmVlZCBhIHRvIGZ1bmN0aW9uIGFuZCBub3QgYSBmcm9tIGZ1bmN0aW9uXG4gICAgICAgIHJldHVybiB0eXBlb2YgZW50cnkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGVudHJ5LnRvID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWwpIHtcbiAgICAgICAgZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzU2V0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBCaW5kYWJsZSB2ZXJzaW9uXG4gICAgZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIFJlbW92ZXMgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5LlxuICAgIGZ1bmN0aW9uIHVuaXF1ZShhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXNbYV0gPyAodGhpc1thXSA9IHRydWUpIDogZmFsc2U7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgLy8gUm91bmQgYSB2YWx1ZSB0byB0aGUgY2xvc2VzdCAndG8nLlxuICAgIGZ1bmN0aW9uIGNsb3Nlc3QodmFsdWUsIHRvKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdG8pICogdG87XG4gICAgfVxuICAgIC8vIEN1cnJlbnQgcG9zaXRpb24gb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXG4gICAgZnVuY3Rpb24gb2Zmc2V0KGVsZW0sIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIHZhciByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgICAgICAgdmFyIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgcGFnZU9mZnNldCA9IGdldFBhZ2VPZmZzZXQoZG9jKTtcbiAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGNvbnRhaW5zIGxlZnQgc2Nyb2xsIGluIENocm9tZSBvbiBBbmRyb2lkLlxuICAgICAgICAvLyBJIGhhdmVuJ3QgZm91bmQgYSBmZWF0dXJlIGRldGVjdGlvbiB0aGF0IHByb3ZlcyB0aGlzLiBXb3JzdCBjYXNlXG4gICAgICAgIC8vIHNjZW5hcmlvIG9uIG1pcy1tYXRjaDogdGhlICd0YXAnIGZlYXR1cmUgb24gaG9yaXpvbnRhbCBzbGlkZXJzIGJyZWFrcy5cbiAgICAgICAgaWYgKC93ZWJraXQuKkNocm9tZS4qTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcGFnZU9mZnNldC54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZW50YXRpb24gPyByZWN0LnRvcCArIHBhZ2VPZmZzZXQueSAtIGRvY0VsZW0uY2xpZW50VG9wIDogcmVjdC5sZWZ0ICsgcGFnZU9mZnNldC54IC0gZG9jRWxlbS5jbGllbnRMZWZ0O1xuICAgIH1cbiAgICAvLyBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIG51bWVyaWNhbC5cbiAgICBmdW5jdGlvbiBpc051bWVyaWMoYSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKGEpICYmIGlzRmluaXRlKGEpO1xuICAgIH1cbiAgICAvLyBTZXRzIGEgY2xhc3MgYW5kIHJlbW92ZXMgaXQgYWZ0ZXIgW2R1cmF0aW9uXSBtcy5cbiAgICBmdW5jdGlvbiBhZGRDbGFzc0ZvcihlbGVtZW50LCBjbGFzc05hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIExpbWl0cyBhIHZhbHVlIHRvIDAgLSAxMDBcbiAgICBmdW5jdGlvbiBsaW1pdChhKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihhLCAxMDApLCAwKTtcbiAgICB9XG4gICAgLy8gV3JhcHMgYSB2YXJpYWJsZSBhcyBhbiBhcnJheSwgaWYgaXQgaXNuJ3Qgb25lIHlldC5cbiAgICAvLyBOb3RlIHRoYXQgYW4gaW5wdXQgYXJyYXkgaXMgcmV0dXJuZWQgYnkgcmVmZXJlbmNlIVxuICAgIGZ1bmN0aW9uIGFzQXJyYXkoYSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSA/IGEgOiBbYV07XG4gICAgfVxuICAgIC8vIENvdW50cyBkZWNpbWFsc1xuICAgIGZ1bmN0aW9uIGNvdW50RGVjaW1hbHMobnVtU3RyKSB7XG4gICAgICAgIG51bVN0ciA9IFN0cmluZyhudW1TdHIpO1xuICAgICAgICB2YXIgcGllY2VzID0gbnVtU3RyLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgcmV0dXJuIHBpZWNlcy5sZW5ndGggPiAxID8gcGllY2VzWzFdLmxlbmd0aCA6IDA7XG4gICAgfVxuICAgIC8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNhZGRfY2xhc3NcbiAgICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QgJiYgIS9cXHMvLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNyZW1vdmVfY2xhc3NcbiAgICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QgJiYgIS9cXHMvLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxiKVwiICsgY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKSArIFwiKFxcXFxifCQpXCIsIFwiZ2lcIiksIFwiIFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBodHRwczovL3BsYWluanMuY29tL2phdmFzY3JpcHQvYXR0cmlidXRlcy9hZGRpbmctcmVtb3ZpbmctYW5kLXRlc3RpbmctZm9yLWNsYXNzZXMtOS9cbiAgICBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QgPyBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSA6IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgY2xhc3NOYW1lICsgXCJcXFxcYlwiKS50ZXN0KGVsLmNsYXNzTmFtZSk7XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvc2Nyb2xsWSNOb3Rlc1xuICAgIGZ1bmN0aW9uIGdldFBhZ2VPZmZzZXQoZG9jKSB7XG4gICAgICAgIHZhciBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgaXNDU1MxQ29tcGF0ID0gKGRvYy5jb21wYXRNb2RlIHx8IFwiXCIpID09PSBcIkNTUzFDb21wYXRcIjtcbiAgICAgICAgdmFyIHggPSBzdXBwb3J0UGFnZU9mZnNldFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICAgICAgICAgIDogaXNDU1MxQ29tcGF0XG4gICAgICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgICA6IGRvYy5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgIHZhciB5ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICA6IGlzQ1NTMUNvbXBhdFxuICAgICAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICAgICAgICAgICA6IGRvYy5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHdlIHByb3ZpZGUgYSBmdW5jdGlvbiB0byBjb21wdXRlIGNvbnN0YW50cyBpbnN0ZWFkXG4gICAgLy8gb2YgYWNjZXNzaW5nIHdpbmRvdy4qIGFzIHNvb24gYXMgdGhlIG1vZHVsZSBuZWVkcyBpdFxuICAgIC8vIHNvIHRoYXQgd2UgZG8gbm90IGNvbXB1dGUgYW55dGhpbmcgaWYgbm90IG5lZWRlZFxuICAgIGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZXZlbnRzIHRvIGJpbmQuIElFMTEgaW1wbGVtZW50cyBwb2ludGVyRXZlbnRzIHdpdGhvdXRcbiAgICAgICAgLy8gYSBwcmVmaXgsIHdoaWNoIGJyZWFrcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIElFMTAgaW1wbGVtZW50YXRpb24uXG4gICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzdGFydDogXCJwb2ludGVyZG93blwiLFxuICAgICAgICAgICAgICAgIG1vdmU6IFwicG9pbnRlcm1vdmVcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwicG9pbnRlcnVwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIk1TUG9pbnRlckRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogXCJNU1BvaW50ZXJNb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJNU1BvaW50ZXJVcFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJtb3VzZWRvd24gdG91Y2hzdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiBcIm1vdXNlbW92ZSB0b3VjaG1vdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIm1vdXNldXAgdG91Y2hlbmRcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4gICAgLy8gSXNzdWUgIzc4NVxuICAgIGZ1bmN0aW9uIGdldFN1cHBvcnRzUGFzc2l2ZSgpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LkNTUyAmJiBDU1Muc3VwcG9ydHMgJiYgQ1NTLnN1cHBvcnRzKFwidG91Y2gtYWN0aW9uXCIsIFwibm9uZVwiKTtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBSYW5nZSBDYWxjdWxhdGlvblxuICAgIC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiBhIHN1Yi1yYW5nZSBpbiByZWxhdGlvbiB0byBhIGZ1bGwgcmFuZ2UuXG4gICAgZnVuY3Rpb24gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpIHtcbiAgICAgICAgcmV0dXJuIDEwMCAvIChwYiAtIHBhKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIEhvdyBtYW55IHBlcmNlbnQgaXMgdGhpcyB2YWx1ZSBvZiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIGZyb21QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSwgc3RhcnRSYW5nZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICogMTAwKSAvIChyYW5nZVtzdGFydFJhbmdlICsgMV0gLSByYW5nZVtzdGFydFJhbmdlXSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBXaGVyZSBpcyB0aGlzIHZhbHVlIG9uIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gdG9QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHJhbmdlWzBdIDwgMCA/IHZhbHVlICsgTWF0aC5hYnMocmFuZ2VbMF0pIDogdmFsdWUgLSByYW5nZVswXSwgMCk7XG4gICAgfVxuICAgIC8vICh2YWx1ZSkgSG93IG11Y2ggaXMgdGhpcyBwZXJjZW50YWdlIG9uIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICogKHJhbmdlWzFdIC0gcmFuZ2VbMF0pKSAvIDEwMCArIHJhbmdlWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRKKHZhbHVlLCBhcnIpIHtcbiAgICAgICAgdmFyIGogPSAxO1xuICAgICAgICB3aGlsZSAodmFsdWUgPj0gYXJyW2pdKSB7XG4gICAgICAgICAgICBqICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGo7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBJbnB1dCBhIHZhbHVlLCBmaW5kIHdoZXJlLCBvbiBhIHNjYWxlIG9mIDAtMTAwLCBpdCBhcHBsaWVzLlxuICAgIGZ1bmN0aW9uIHRvU3RlcHBpbmcoeFZhbCwgeFBjdCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID49IHhWYWwuc2xpY2UoLTEpWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFZhbCk7XG4gICAgICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xuICAgICAgICB2YXIgdmIgPSB4VmFsW2pdO1xuICAgICAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIHBiID0geFBjdFtqXTtcbiAgICAgICAgcmV0dXJuIHBhICsgdG9QZXJjZW50YWdlKFt2YSwgdmJdLCB2YWx1ZSkgLyBzdWJSYW5nZVJhdGlvKHBhLCBwYik7XG4gICAgfVxuICAgIC8vICh2YWx1ZSkgSW5wdXQgYSBwZXJjZW50YWdlLCBmaW5kIHdoZXJlIGl0IGlzIG9uIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXG4gICAgZnVuY3Rpb24gZnJvbVN0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgICAgIC8vIFRoZXJlIGlzIG5vIHJhbmdlIGdyb3VwIHRoYXQgZml0cyAxMDBcbiAgICAgICAgaWYgKHZhbHVlID49IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHhWYWwuc2xpY2UoLTEpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xuICAgICAgICB2YXIgdmIgPSB4VmFsW2pdO1xuICAgICAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIHBiID0geFBjdFtqXTtcbiAgICAgICAgcmV0dXJuIGlzUGVyY2VudGFnZShbdmEsIHZiXSwgKHZhbHVlIC0gcGEpICogc3ViUmFuZ2VSYXRpbyhwYSwgcGIpKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIEdldCB0aGUgc3RlcCB0aGF0IGFwcGxpZXMgYXQgYSBjZXJ0YWluIHZhbHVlLlxuICAgIGZ1bmN0aW9uIGdldFN0ZXAoeFBjdCwgeFN0ZXBzLCBzbmFwLCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgICAgIHZhciBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBiID0geFBjdFtqXTtcbiAgICAgICAgLy8gSWYgJ3NuYXAnIGlzIHNldCwgc3RlcHMgYXJlIHVzZWQgYXMgZml4ZWQgcG9pbnRzIG9uIHRoZSBzbGlkZXIuXG4gICAgICAgIGlmIChzbmFwKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IHBvc2l0aW9uLCBhIG9yIGIuXG4gICAgICAgICAgICBpZiAodmFsdWUgLSBhID4gKGIgLSBhKSAvIDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICAgIGlmICgheFN0ZXBzW2ogLSAxXSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4UGN0W2ogLSAxXSArIGNsb3Nlc3QodmFsdWUgLSB4UGN0W2ogLSAxXSwgeFN0ZXBzW2ogLSAxXSk7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gU3BlY3RydW1cbiAgICB2YXIgU3BlY3RydW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFNwZWN0cnVtKGVudHJ5LCBzbmFwLCBzaW5nbGVTdGVwKSB7XG4gICAgICAgICAgICB0aGlzLnhQY3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFZhbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54U3RlcHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gW107XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwID0gW107XG4gICAgICAgICAgICB0aGlzLnhTdGVwcyA9IFtzaW5nbGVTdGVwIHx8IGZhbHNlXTtcbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gW2ZhbHNlXTtcbiAgICAgICAgICAgIHRoaXMuc25hcCA9IHNuYXA7XG4gICAgICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgICAgICB2YXIgb3JkZXJlZCA9IFtdO1xuICAgICAgICAgICAgLy8gTWFwIHRoZSBvYmplY3Qga2V5cyB0byBhbiBhcnJheS5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIG9yZGVyZWQucHVzaChbYXNBcnJheShlbnRyeVtpbmRleF0pLCBpbmRleF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTb3J0IGFsbCBlbnRyaWVzIGJ5IHZhbHVlIChudW1lcmljIHNvcnQpLlxuICAgICAgICAgICAgb3JkZXJlZC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMF1bMF0gLSBiWzBdWzBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBlbnRyaWVzIHRvIHN1YnJhbmdlcy5cbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IG9yZGVyZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFbnRyeVBvaW50KG9yZGVyZWRbaW5kZXhdWzFdLCBvcmRlcmVkW2luZGV4XVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgYWN0dWFsIHN0ZXAgdmFsdWVzLlxuICAgICAgICAgICAgLy8geFN0ZXBzIGlzIHNvcnRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB4UGN0IGFuZCB4VmFsLlxuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSB0aGlzLnhTdGVwcy5zbGljZSgwKTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgYWxsIG51bWVyaWMgc3RlcHMgdG8gdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHN1YnJhbmdlIHRoZXkgcmVwcmVzZW50LlxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgdGhpcy54TnVtU3RlcHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGVwUG9pbnQoaW5kZXgsIHRoaXMueE51bVN0ZXBzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldERpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2VzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy54TnVtU3RlcHMubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlc1tpbmRleF0gPSBmcm9tUGVyY2VudGFnZSh0aGlzLnhWYWwsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VzO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb3ZlciB0aGUgd2hvbGUgc2NhbGUgb2YgcmFuZ2VzLlxuICAgICAgICAvLyBkaXJlY3Rpb246IDAgPSBiYWNrd2FyZHMgLyAxID0gZm9yd2FyZHNcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldEFic29sdXRlRGlzdGFuY2UgPSBmdW5jdGlvbiAodmFsdWUsIGRpc3RhbmNlcywgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgeFBjdF9pbmRleCA9IDA7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcmFuZ2Ugd2hlcmUgdG8gc3RhcnQgY2FsY3VsYXRpb25cbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAodmFsdWUgPiB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHhQY3RfaW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gdGhpcy54UGN0W3RoaXMueFBjdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIHhQY3RfaW5kZXggPSB0aGlzLnhQY3QubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGxvb2tpbmcgYmFja3dhcmRzIGFuZCB0aGUgdmFsdWUgaXMgZXhhY3RseSBhdCBhIHJhbmdlIHNlcGFyYXRvciB0aGVuIGxvb2sgb25lIHJhbmdlIGZ1cnRoZXJcbiAgICAgICAgICAgIGlmICghZGlyZWN0aW9uICYmIHZhbHVlID09PSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgIHZhciByZXN0X2ZhY3RvciA9IDE7XG4gICAgICAgICAgICB2YXIgcmVzdF9yZWxfZGlzdGFuY2UgPSBkaXN0YW5jZXNbeFBjdF9pbmRleF07XG4gICAgICAgICAgICB2YXIgcmFuZ2VfcGN0ID0gMDtcbiAgICAgICAgICAgIHZhciByZWxfcmFuZ2VfZGlzdGFuY2UgPSAwO1xuICAgICAgICAgICAgdmFyIGFic19kaXN0YW5jZV9jb3VudGVyID0gMDtcbiAgICAgICAgICAgIHZhciByYW5nZV9jb3VudGVyID0gMDtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB3aGF0IHBhcnQgb2YgdGhlIHN0YXJ0IHJhbmdlIHRoZSB2YWx1ZSBpc1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9ICh2YWx1ZSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHZhbHVlKSAvICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvIHVudGlsIHRoZSBjb21wbGV0ZSBkaXN0YW5jZSBhY3Jvc3MgcmFuZ2VzIGlzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIHdoaWxlIChyZXN0X3JlbF9kaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnRhZ2Ugb2YgdG90YWwgcmFuZ2VcbiAgICAgICAgICAgICAgICByYW5nZV9wY3QgPSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDEgKyByYW5nZV9jb3VudGVyXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGlmIHRoZSBtYXJnaW4sIHBhZGRpbmcgb3IgbGltaXQgaXMgbGFyZ2VyIHRoZW4gdGhlIGN1cnJlbnQgcmFuZ2UgYW5kIGNhbGN1bGF0ZVxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3IgKyAxMDAgLSBzdGFydF9mYWN0b3IgKiAxMDAgPiAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbGFyZ2VyIHRoZW4gdGFrZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvZiB0aGUgd2hvbGUgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gcmFuZ2VfcGN0ICogc3RhcnRfZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXN0IGZhY3RvciBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgcmVzdF9mYWN0b3IgPSAocmVzdF9yZWxfZGlzdGFuY2UgLSAxMDAgKiBzdGFydF9mYWN0b3IpIC8gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHN0YXJ0IGZhY3RvciB0byAxIGFzIGZvciBuZXh0IHJhbmdlIGl0IGRvZXMgbm90IGFwcGx5LlxuICAgICAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc21hbGxlciBvciBlcXVhbCB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIGNhbGN1bGF0ZSBwZXJjZW50dWFsIHBhcnQgb2YgdGhhdCByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZWxfcmFuZ2VfZGlzdGFuY2UgPSAoKGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByYW5nZV9wY3QpIC8gMTAwKSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAvLyBObyByZXN0IGxlZnQgYXMgdGhlIHJlc3QgZml0cyBpbiBjdXJyZW50IHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyIC0gcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBmaXJzdCByYW5nZSB3aGVuIGRpc3RhbmNlIGJlY29tZXMgb3V0c2lkZSBvZiBtaW5pbXVtIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoICsgcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFic19kaXN0YW5jZV9jb3VudGVyID0gYWJzX2Rpc3RhbmNlX2NvdW50ZXIgKyByZWxfcmFuZ2VfZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGxhc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWF4aW11bSByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCAtIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VfY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlc3Qgb2YgcmVsYXRpdmUgcGVyY2VudHVhbCBkaXN0YW5jZSBzdGlsbCB0byBiZSBjYWxjdWxhdGVkXG4gICAgICAgICAgICAgICAgcmVzdF9yZWxfZGlzdGFuY2UgPSBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBhYnNfZGlzdGFuY2VfY291bnRlcjtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLnRvU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZnJvbVN0ZXBwaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbVN0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRTdGVwID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGdldFN0ZXAodGhpcy54UGN0LCB0aGlzLnhTdGVwcywgdGhpcy5zbmFwLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREZWZhdWx0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSwgaXNEb3duLCBzaXplKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgICAgICAvLyBXaGVuIGF0IHRoZSB0b3Agb3Igc3RlcHBpbmcgZG93biwgbG9vayBhdCB0aGUgcHJldmlvdXMgc3ViLXJhbmdlXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDEwMCB8fCAoaXNEb3duICYmIHZhbHVlID09PSB0aGlzLnhQY3RbaiAtIDFdKSkge1xuICAgICAgICAgICAgICAgIGogPSBNYXRoLm1heChqIC0gMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMueFZhbFtqXSAtIHRoaXMueFZhbFtqIC0gMV0pIC8gc2l6ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldE5lYXJieVN0ZXBzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0ZXBCZWZvcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAyXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDJdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqIC0gMl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXNTdGVwOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2ogLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDFdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdGVwQWZ0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2pdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbal1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY291bnRTdGVwRGVjaW1hbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RlcERlY2ltYWxzID0gdGhpcy54TnVtU3RlcHMubWFwKGNvdW50RGVjaW1hbHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIHN0ZXBEZWNpbWFscyk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYXNOb1NpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy54VmFsWzBdID09PSB0aGlzLnhWYWxbdGhpcy54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICB9O1xuICAgICAgICAvLyBPdXRzaWRlIHRlc3RpbmdcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0ZXAodGhpcy50b1N0ZXBwaW5nKHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYW5kbGVFbnRyeVBvaW50ID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2U7XG4gICAgICAgICAgICAvLyBDb3ZlcnQgbWluL21heCBzeW50YXggdG8gMCBhbmQgMTAwLlxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gcGFyc2VGbG9hdChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgY29ycmVjdCBpbnB1dC5cbiAgICAgICAgICAgIGlmICghaXNOdW1lcmljKHBlcmNlbnRhZ2UpIHx8ICFpc051bWVyaWModmFsdWVbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyB2YWx1ZSBpc24ndCBudW1lcmljLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0b3JlIHZhbHVlcy5cbiAgICAgICAgICAgIHRoaXMueFBjdC5wdXNoKHBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgdGhpcy54VmFsLnB1c2godmFsdWVbMF0pO1xuICAgICAgICAgICAgdmFyIHZhbHVlMSA9IE51bWJlcih2YWx1ZVsxXSk7XG4gICAgICAgICAgICAvLyBOYU4gd2lsbCBldmFsdWF0ZSB0byBmYWxzZSB0b28sIGJ1dCB0byBrZWVwXG4gICAgICAgICAgICAvLyBsb2dnaW5nIGNsZWFyLCBzZXQgc3RlcCBleHBsaWNpdGx5LiBNYWtlIHN1cmVcbiAgICAgICAgICAgIC8vIG5vdCB0byBvdmVycmlkZSB0aGUgJ3N0ZXAnIHNldHRpbmcgd2l0aCBmYWxzZS5cbiAgICAgICAgICAgIGlmICghcGVyY2VudGFnZSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFsdWUxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnhTdGVwc1swXSA9IHZhbHVlMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhTdGVwcy5wdXNoKGlzTmFOKHZhbHVlMSkgPyBmYWxzZSA6IHZhbHVlMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwLnB1c2goMCk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYW5kbGVTdGVwUG9pbnQgPSBmdW5jdGlvbiAoaSwgbikge1xuICAgICAgICAgICAgLy8gSWdub3JlICdmYWxzZScgc3RlcHBpbmcuXG4gICAgICAgICAgICBpZiAoIW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGVwIG92ZXIgemVyby1sZW5ndGggcmFuZ2VzICgjOTQ4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnhWYWxbaV0gPT09IHRoaXMueFZhbFtpICsgMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhTdGVwc1tpXSA9IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSB0aGlzLnhWYWxbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmFjdG9yIHRvIHJhbmdlIHJhdGlvXG4gICAgICAgICAgICB0aGlzLnhTdGVwc1tpXSA9XG4gICAgICAgICAgICAgICAgZnJvbVBlcmNlbnRhZ2UoW3RoaXMueFZhbFtpXSwgdGhpcy54VmFsW2kgKyAxXV0sIG4sIDApIC8gc3ViUmFuZ2VSYXRpbyh0aGlzLnhQY3RbaV0sIHRoaXMueFBjdFtpICsgMV0pO1xuICAgICAgICAgICAgdmFyIHRvdGFsU3RlcHMgPSAodGhpcy54VmFsW2kgKyAxXSAtIHRoaXMueFZhbFtpXSkgLyB0aGlzLnhOdW1TdGVwc1tpXTtcbiAgICAgICAgICAgIHZhciBoaWdoZXN0U3RlcCA9IE1hdGguY2VpbChOdW1iZXIodG90YWxTdGVwcy50b0ZpeGVkKDMpKSAtIDEpO1xuICAgICAgICAgICAgdmFyIHN0ZXAgPSB0aGlzLnhWYWxbaV0gKyB0aGlzLnhOdW1TdGVwc1tpXSAqIGhpZ2hlc3RTdGVwO1xuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtpXSA9IHN0ZXA7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBTcGVjdHJ1bTtcbiAgICB9KCkpO1xuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gT3B0aW9uc1xuICAgIC8qXHRFdmVyeSBpbnB1dCBvcHRpb24gaXMgdGVzdGVkIGFuZCBwYXJzZWQuIFRoaXMgd2lsbCBwcmV2ZW50XG4gICAgICAgIGVuZGxlc3MgdmFsaWRhdGlvbiBpbiBpbnRlcm5hbCBtZXRob2RzLiBUaGVzZSB0ZXN0cyBhcmVcbiAgICAgICAgc3RydWN0dXJlZCB3aXRoIGFuIGl0ZW0gZm9yIGV2ZXJ5IG9wdGlvbiBhdmFpbGFibGUuIEFuXG4gICAgICAgIG9wdGlvbiBjYW4gYmUgbWFya2VkIGFzIHJlcXVpcmVkIGJ5IHNldHRpbmcgdGhlICdyJyBmbGFnLlxuICAgICAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAgICAgICAgICAgIC0gVGhlIHByb3ZpZGVkIHZhbHVlIGZvciB0aGUgb3B0aW9uO1xuICAgICAgICAgICAgLSBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBvYmplY3Q7XG4gICAgICAgICAgICAtIFRoZSBuYW1lIGZvciB0aGUgb3B0aW9uO1xuXG4gICAgICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIHJldHVybnMgZmFsc2Ugd2hlbiBhbiBlcnJvciBpcyBkZXRlY3RlZCxcbiAgICAgICAgb3IgdHJ1ZSB3aGVuIGV2ZXJ5dGhpbmcgaXMgT0suIEl0IGNhbiBhbHNvIG1vZGlmeSB0aGUgb3B0aW9uXG4gICAgICAgIG9iamVjdCwgdG8gbWFrZSBzdXJlIGFsbCB2YWx1ZXMgY2FuIGJlIGNvcnJlY3RseSBsb29wZWQgZWxzZXdoZXJlLiAqL1xuICAgIC8vcmVnaW9uIERlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRGb3JtYXR0ZXIgPSB7XG4gICAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHZhbHVlLnRvRml4ZWQoMik7XG4gICAgICAgIH0sXG4gICAgICAgIGZyb206IE51bWJlclxuICAgIH07XG4gICAgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgICAgIHRhcmdldDogXCJ0YXJnZXRcIixcbiAgICAgICAgYmFzZTogXCJiYXNlXCIsXG4gICAgICAgIG9yaWdpbjogXCJvcmlnaW5cIixcbiAgICAgICAgaGFuZGxlOiBcImhhbmRsZVwiLFxuICAgICAgICBoYW5kbGVMb3dlcjogXCJoYW5kbGUtbG93ZXJcIixcbiAgICAgICAgaGFuZGxlVXBwZXI6IFwiaGFuZGxlLXVwcGVyXCIsXG4gICAgICAgIHRvdWNoQXJlYTogXCJ0b3VjaC1hcmVhXCIsXG4gICAgICAgIGhvcml6b250YWw6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICB2ZXJ0aWNhbDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImJhY2tncm91bmRcIixcbiAgICAgICAgY29ubmVjdDogXCJjb25uZWN0XCIsXG4gICAgICAgIGNvbm5lY3RzOiBcImNvbm5lY3RzXCIsXG4gICAgICAgIGx0cjogXCJsdHJcIixcbiAgICAgICAgcnRsOiBcInJ0bFwiLFxuICAgICAgICB0ZXh0RGlyZWN0aW9uTHRyOiBcInR4dC1kaXItbHRyXCIsXG4gICAgICAgIHRleHREaXJlY3Rpb25SdGw6IFwidHh0LWRpci1ydGxcIixcbiAgICAgICAgZHJhZ2dhYmxlOiBcImRyYWdnYWJsZVwiLFxuICAgICAgICBkcmFnOiBcInN0YXRlLWRyYWdcIixcbiAgICAgICAgdGFwOiBcInN0YXRlLXRhcFwiLFxuICAgICAgICBhY3RpdmU6IFwiYWN0aXZlXCIsXG4gICAgICAgIHRvb2x0aXA6IFwidG9vbHRpcFwiLFxuICAgICAgICBwaXBzOiBcInBpcHNcIixcbiAgICAgICAgcGlwc0hvcml6b250YWw6IFwicGlwcy1ob3Jpem9udGFsXCIsXG4gICAgICAgIHBpcHNWZXJ0aWNhbDogXCJwaXBzLXZlcnRpY2FsXCIsXG4gICAgICAgIG1hcmtlcjogXCJtYXJrZXJcIixcbiAgICAgICAgbWFya2VySG9yaXpvbnRhbDogXCJtYXJrZXItaG9yaXpvbnRhbFwiLFxuICAgICAgICBtYXJrZXJWZXJ0aWNhbDogXCJtYXJrZXItdmVydGljYWxcIixcbiAgICAgICAgbWFya2VyTm9ybWFsOiBcIm1hcmtlci1ub3JtYWxcIixcbiAgICAgICAgbWFya2VyTGFyZ2U6IFwibWFya2VyLWxhcmdlXCIsXG4gICAgICAgIG1hcmtlclN1YjogXCJtYXJrZXItc3ViXCIsXG4gICAgICAgIHZhbHVlOiBcInZhbHVlXCIsXG4gICAgICAgIHZhbHVlSG9yaXpvbnRhbDogXCJ2YWx1ZS1ob3Jpem9udGFsXCIsXG4gICAgICAgIHZhbHVlVmVydGljYWw6IFwidmFsdWUtdmVydGljYWxcIixcbiAgICAgICAgdmFsdWVOb3JtYWw6IFwidmFsdWUtbm9ybWFsXCIsXG4gICAgICAgIHZhbHVlTGFyZ2U6IFwidmFsdWUtbGFyZ2VcIixcbiAgICAgICAgdmFsdWVTdWI6IFwidmFsdWUtc3ViXCJcbiAgICB9O1xuICAgIC8vIE5hbWVzcGFjZXMgb2YgaW50ZXJuYWwgZXZlbnQgbGlzdGVuZXJzXG4gICAgdmFyIElOVEVSTkFMX0VWRU5UX05TID0ge1xuICAgICAgICB0b29sdGlwczogXCIuX190b29sdGlwc1wiLFxuICAgICAgICBhcmlhOiBcIi5fX2FyaWFcIlxuICAgIH07XG4gICAgLy9lbmRyZWdpb25cbiAgICBmdW5jdGlvbiB0ZXN0U3RlcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3N0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgc3RlcCBvcHRpb24gY2FuIHN0aWxsIGJlIHVzZWQgdG8gc2V0IHN0ZXBwaW5nXG4gICAgICAgIC8vIGZvciBsaW5lYXIgc2xpZGVycy4gT3ZlcndyaXR0ZW4gaWYgc2V0IGluICdyYW5nZScuXG4gICAgICAgIHBhcnNlZC5zaW5nbGVTdGVwID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZFBhZ2VNdWx0aXBsaWVyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRQYWdlTXVsdGlwbGllcicgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZFBhZ2VNdWx0aXBsaWVyID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZE11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZE11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRNdWx0aXBsaWVyID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZERlZmF1bHRTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmREZWZhdWx0U3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZERlZmF1bHRTdGVwID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RSYW5nZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIEZpbHRlciBpbmNvcnJlY3QgaW5wdXQuXG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdyYW5nZScgaXMgbm90IGFuIG9iamVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F0Y2ggbWlzc2luZyBzdGFydCBvciBlbmQuXG4gICAgICAgIGlmIChlbnRyeS5taW4gPT09IHVuZGVmaW5lZCB8fCBlbnRyeS5tYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogTWlzc2luZyAnbWluJyBvciAnbWF4JyBpbiAncmFuZ2UnLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuc3BlY3RydW0gPSBuZXcgU3BlY3RydW0oZW50cnksIHBhcnNlZC5zbmFwIHx8IGZhbHNlLCBwYXJzZWQuc2luZ2xlU3RlcCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RTdGFydChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XG4gICAgICAgIC8vIFZhbGlkYXRlIGlucHV0LiBWYWx1ZXMgYXJlbid0IHRlc3RlZCwgYXMgdGhlIHB1YmxpYyAudmFsIG1ldGhvZFxuICAgICAgICAvLyB3aWxsIGFsd2F5cyBwcm92aWRlIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3N0YXJ0JyBvcHRpb24gaXMgaW5jb3JyZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdG9yZSB0aGUgbnVtYmVyIG9mIGhhbmRsZXMuXG4gICAgICAgIHBhcnNlZC5oYW5kbGVzID0gZW50cnkubGVuZ3RoO1xuICAgICAgICAvLyBXaGVuIHRoZSBzbGlkZXIgaXMgaW5pdGlhbGl6ZWQsIHRoZSAudmFsIG1ldGhvZCB3aWxsXG4gICAgICAgIC8vIGJlIGNhbGxlZCB3aXRoIHRoZSBzdGFydCBvcHRpb25zLlxuICAgICAgICBwYXJzZWQuc3RhcnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFNuYXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3NuYXAnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5mb3JjZSAxMDAlIHN0ZXBwaW5nIHdpdGhpbiBzdWJyYW5nZXMuXG4gICAgICAgIHBhcnNlZC5zbmFwID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBbmltYXRlKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRlJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgICAgICBwYXJzZWQuYW5pbWF0ZSA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYW5pbWF0aW9uRHVyYXRpb24nIG9wdGlvbiBtdXN0IGJlIGEgbnVtYmVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuYW5pbWF0aW9uRHVyYXRpb24gPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENvbm5lY3QocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICB2YXIgY29ubmVjdCA9IFtmYWxzZV07XG4gICAgICAgIHZhciBpO1xuICAgICAgICAvLyBNYXAgbGVnYWN5IG9wdGlvbnNcbiAgICAgICAgaWYgKGVudHJ5ID09PSBcImxvd2VyXCIpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW3RydWUsIGZhbHNlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbnRyeSA9PT0gXCJ1cHBlclwiKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFtmYWxzZSwgdHJ1ZV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGJvb2xlYW4gb3B0aW9uc1xuICAgICAgICBpZiAoZW50cnkgPT09IHRydWUgfHwgZW50cnkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcGFyc2VkLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbm5lY3QucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25uZWN0LnB1c2goZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlamVjdCBpbnZhbGlkIGlucHV0XG4gICAgICAgIGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoIHx8IGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMgKyAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY29ubmVjdCcgb3B0aW9uIGRvZXNuJ3QgbWF0Y2ggaGFuZGxlIGNvdW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbm5lY3QgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuY29ubmVjdCA9IGNvbm5lY3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RPcmllbnRhdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFNldCBvcmllbnRhdGlvbiB0byBhbiBhIG51bWVyaWNhbCB2YWx1ZSBmb3IgZWFzeVxuICAgICAgICAvLyBhcnJheSBzZWxlY3Rpb24uXG4gICAgICAgIHN3aXRjaCAoZW50cnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLm9ydCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidmVydGljYWxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQub3J0ID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ29yaWVudGF0aW9uJyBvcHRpb24gaXMgaW52YWxpZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdE1hcmdpbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ21hcmdpbicgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXNzdWUgIzU4MlxuICAgICAgICBpZiAoZW50cnkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQubWFyZ2luID0gcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdExpbWl0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5saW1pdCA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG4gICAgICAgIGlmICghcGFyc2VkLmxpbWl0IHx8IHBhcnNlZC5oYW5kbGVzIDwgMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2xpbWl0JyBvcHRpb24gaXMgb25seSBzdXBwb3J0ZWQgb24gbGluZWFyIHNsaWRlcnMgd2l0aCAyIG9yIG1vcmUgaGFuZGxlcy5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFBhZGRpbmcocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBudW1lcmljIG9yIGFycmF5IG9mIGV4YWN0bHkgMiBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkgJiYgIShlbnRyeS5sZW5ndGggPT09IDIgfHwgaXNOdW1lcmljKGVudHJ5WzBdKSB8fCBpc051bWVyaWMoZW50cnlbMV0pKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMgb3IgYXJyYXkgb2YgZXhhY3RseSAyIG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW2VudHJ5LCBlbnRyeV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gJ2dldERpc3RhbmNlJyByZXR1cm5zIGZhbHNlIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICAgICAgcGFyc2VkLnBhZGRpbmcgPSBbcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5WzBdKSwgcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5WzFdKV07XG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHBhcnNlZC5zcGVjdHJ1bS54TnVtU3RlcHMubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAgICAgLy8gbGFzdCBcInJhbmdlXCIgY2FuJ3QgY29udGFpbiBzdGVwIHNpemUgYXMgaXQgaXMgcHVyZWx5IGFuIGVuZHBvaW50LlxuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYWRkaW5nWzBdW2luZGV4XSA8IDAgfHwgcGFyc2VkLnBhZGRpbmdbMV1baW5kZXhdIDwgMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcihzKS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvdGFsUGFkZGluZyA9IGVudHJ5WzBdICsgZW50cnlbMV07XG4gICAgICAgIHZhciBmaXJzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgIHZhciBsYXN0VmFsdWUgPSBwYXJzZWQuc3BlY3RydW0ueFZhbFtwYXJzZWQuc3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRvdGFsUGFkZGluZyAvIChsYXN0VmFsdWUgLSBmaXJzdFZhbHVlKSA+IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBub3QgZXhjZWVkIDEwMCUgb2YgdGhlIHJhbmdlLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0RGlyZWN0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gU2V0IGRpcmVjdGlvbiBhcyBhIG51bWVyaWNhbCB2YWx1ZSBmb3IgZWFzeSBwYXJzaW5nLlxuICAgICAgICAvLyBJbnZlcnQgY29ubmVjdGlvbiBmb3IgUlRMIHNsaWRlcnMsIHNvIHRoYXQgdGhlIHByb3BlclxuICAgICAgICAvLyBoYW5kbGVzIGdldCB0aGUgY29ubmVjdC9iYWNrZ3JvdW5kIGNsYXNzZXMuXG4gICAgICAgIHN3aXRjaCAoZW50cnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsdHJcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQuZGlyID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJydGxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQuZGlyID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2RpcmVjdGlvbicgb3B0aW9uIHdhcyBub3QgcmVjb2duaXplZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEJlaGF2aW91cihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5wdXQgaXMgYSBzdHJpbmcuXG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdiZWhhdmlvdXInIG11c3QgYmUgYSBzdHJpbmcgY29udGFpbmluZyBvcHRpb25zLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIGFueSBrZXl3b3Jkcy5cbiAgICAgICAgLy8gTm9uZSBhcmUgcmVxdWlyZWQuXG4gICAgICAgIHZhciB0YXAgPSBlbnRyeS5pbmRleE9mKFwidGFwXCIpID49IDA7XG4gICAgICAgIHZhciBkcmFnID0gZW50cnkuaW5kZXhPZihcImRyYWdcIikgPj0gMDtcbiAgICAgICAgdmFyIGZpeGVkID0gZW50cnkuaW5kZXhPZihcImZpeGVkXCIpID49IDA7XG4gICAgICAgIHZhciBzbmFwID0gZW50cnkuaW5kZXhPZihcInNuYXBcIikgPj0gMDtcbiAgICAgICAgdmFyIGhvdmVyID0gZW50cnkuaW5kZXhPZihcImhvdmVyXCIpID49IDA7XG4gICAgICAgIHZhciB1bmNvbnN0cmFpbmVkID0gZW50cnkuaW5kZXhPZihcInVuY29uc3RyYWluZWRcIikgPj0gMDtcbiAgICAgICAgdmFyIGRyYWdBbGwgPSBlbnRyeS5pbmRleE9mKFwiZHJhZy1hbGxcIikgPj0gMDtcbiAgICAgICAgaWYgKGZpeGVkKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkLmhhbmRsZXMgIT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZml4ZWQnIGJlaGF2aW91ciBtdXN0IGJlIHVzZWQgd2l0aCAyIGhhbmRsZXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVc2UgbWFyZ2luIHRvIGVuZm9yY2UgZml4ZWQgc3RhdGVcbiAgICAgICAgICAgIHRlc3RNYXJnaW4ocGFyc2VkLCBwYXJzZWQuc3RhcnRbMV0gLSBwYXJzZWQuc3RhcnRbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmNvbnN0cmFpbmVkICYmIChwYXJzZWQubWFyZ2luIHx8IHBhcnNlZC5saW1pdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd1bmNvbnN0cmFpbmVkJyBiZWhhdmlvdXIgY2Fubm90IGJlIHVzZWQgd2l0aCBtYXJnaW4gb3IgbGltaXRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmV2ZW50cyA9IHtcbiAgICAgICAgICAgIHRhcDogdGFwIHx8IHNuYXAsXG4gICAgICAgICAgICBkcmFnOiBkcmFnLFxuICAgICAgICAgICAgZHJhZ0FsbDogZHJhZ0FsbCxcbiAgICAgICAgICAgIGZpeGVkOiBmaXhlZCxcbiAgICAgICAgICAgIHNuYXA6IHNuYXAsXG4gICAgICAgICAgICBob3ZlcjogaG92ZXIsXG4gICAgICAgICAgICB1bmNvbnN0cmFpbmVkOiB1bmNvbnN0cmFpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RUb29sdGlwcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmIChlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkgPT09IHRydWUgfHwgaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyc2VkLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IG11c3QgcGFzcyBhIGZvcm1hdHRlciBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW50cnkuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXR0ZXIgIT09IFwiYm9vbGVhblwiICYmICFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihmb3JtYXR0ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd0b29sdGlwcycgbXVzdCBiZSBwYXNzZWQgYSBmb3JtYXR0ZXIgb3IgJ2ZhbHNlJy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0SGFuZGxlQXR0cmlidXRlcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmIChlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBhdHRyaWJ1dGVzIGZvciBhbGwgaGFuZGxlcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmhhbmRsZUF0dHJpYnV0ZXMgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFyaWFGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FyaWFGb3JtYXQnIHJlcXVpcmVzICd0bycgbWV0aG9kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuYXJpYUZvcm1hdCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Rm9ybWF0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Zvcm1hdCcgcmVxdWlyZXMgJ3RvJyBhbmQgJ2Zyb20nIG1ldGhvZHMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5mb3JtYXQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkU3VwcG9ydChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRTdXBwb3J0JyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZFN1cHBvcnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdERvY3VtZW50RWxlbWVudChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYW4gYWR2YW5jZWQgb3B0aW9uLiBQYXNzZWQgdmFsdWVzIGFyZSB1c2VkIHdpdGhvdXQgdmFsaWRhdGlvbi5cbiAgICAgICAgcGFyc2VkLmRvY3VtZW50RWxlbWVudCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q3NzUHJlZml4KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIiAmJiBlbnRyeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjc3NQcmVmaXgnIG11c3QgYmUgYSBzdHJpbmcgb3IgYGZhbHNlYC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmNzc1ByZWZpeCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q3NzQ2xhc3NlcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjc3NDbGFzc2VzJyBtdXN0IGJlIGFuIG9iamVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWQuY3NzUHJlZml4ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW50cnkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzW2tleV0gPSBwYXJzZWQuY3NzUHJlZml4ICsgZW50cnlba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXMgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUZXN0IGFsbCBkZXZlbG9wZXIgc2V0dGluZ3MgYW5kIHBhcnNlIHRvIGFzc3VtcHRpb24tc2FmZSB2YWx1ZXMuXG4gICAgZnVuY3Rpb24gdGVzdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICAvLyBUbyBwcm92ZSBhIGZpeCBmb3IgIzUzNywgZnJlZXplIG9wdGlvbnMgaGVyZS5cbiAgICAgICAgLy8gSWYgdGhlIG9iamVjdCBpcyBtb2RpZmllZCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gICAgICAgIC8vIE9iamVjdC5mcmVlemUob3B0aW9ucyk7XG4gICAgICAgIHZhciBwYXJzZWQgPSB7XG4gICAgICAgICAgICBtYXJnaW46IG51bGwsXG4gICAgICAgICAgICBsaW1pdDogbnVsbCxcbiAgICAgICAgICAgIHBhZGRpbmc6IG51bGwsXG4gICAgICAgICAgICBhbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGFyaWFGb3JtYXQ6IGRlZmF1bHRGb3JtYXR0ZXIsXG4gICAgICAgICAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXR0ZXJcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGVzdHMgYXJlIGV4ZWN1dGVkIGluIHRoZSBvcmRlciB0aGV5IGFyZSBwcmVzZW50ZWQgaGVyZS5cbiAgICAgICAgdmFyIHRlc3RzID0ge1xuICAgICAgICAgICAgc3RlcDogeyByOiBmYWxzZSwgdDogdGVzdFN0ZXAgfSxcbiAgICAgICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZFBhZ2VNdWx0aXBsaWVyIH0sXG4gICAgICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZE11bHRpcGxpZXIgfSxcbiAgICAgICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZERlZmF1bHRTdGVwIH0sXG4gICAgICAgICAgICBzdGFydDogeyByOiB0cnVlLCB0OiB0ZXN0U3RhcnQgfSxcbiAgICAgICAgICAgIGNvbm5lY3Q6IHsgcjogdHJ1ZSwgdDogdGVzdENvbm5lY3QgfSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogeyByOiB0cnVlLCB0OiB0ZXN0RGlyZWN0aW9uIH0sXG4gICAgICAgICAgICBzbmFwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U25hcCB9LFxuICAgICAgICAgICAgYW5pbWF0ZTogeyByOiBmYWxzZSwgdDogdGVzdEFuaW1hdGUgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24gfSxcbiAgICAgICAgICAgIHJhbmdlOiB7IHI6IHRydWUsIHQ6IHRlc3RSYW5nZSB9LFxuICAgICAgICAgICAgb3JpZW50YXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RPcmllbnRhdGlvbiB9LFxuICAgICAgICAgICAgbWFyZ2luOiB7IHI6IGZhbHNlLCB0OiB0ZXN0TWFyZ2luIH0sXG4gICAgICAgICAgICBsaW1pdDogeyByOiBmYWxzZSwgdDogdGVzdExpbWl0IH0sXG4gICAgICAgICAgICBwYWRkaW5nOiB7IHI6IGZhbHNlLCB0OiB0ZXN0UGFkZGluZyB9LFxuICAgICAgICAgICAgYmVoYXZpb3VyOiB7IHI6IHRydWUsIHQ6IHRlc3RCZWhhdmlvdXIgfSxcbiAgICAgICAgICAgIGFyaWFGb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RBcmlhRm9ybWF0IH0sXG4gICAgICAgICAgICBmb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RGb3JtYXQgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0VG9vbHRpcHMgfSxcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogeyByOiB0cnVlLCB0OiB0ZXN0S2V5Ym9hcmRTdXBwb3J0IH0sXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQ6IHsgcjogZmFsc2UsIHQ6IHRlc3REb2N1bWVudEVsZW1lbnQgfSxcbiAgICAgICAgICAgIGNzc1ByZWZpeDogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzUHJlZml4IH0sXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NDbGFzc2VzIH0sXG4gICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0SGFuZGxlQXR0cmlidXRlcyB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGNvbm5lY3Q6IGZhbHNlLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImx0clwiLFxuICAgICAgICAgICAgYmVoYXZpb3VyOiBcInRhcFwiLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB0cnVlLFxuICAgICAgICAgICAgY3NzUHJlZml4OiBcIm5vVWktXCIsXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgICAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogNSxcbiAgICAgICAgICAgIGtleWJvYXJkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IDEwXG4gICAgICAgIH07XG4gICAgICAgIC8vIEFyaWFGb3JtYXQgZGVmYXVsdHMgdG8gcmVndWxhciBmb3JtYXQsIGlmIGFueS5cbiAgICAgICAgaWYgKG9wdGlvbnMuZm9ybWF0ICYmICFvcHRpb25zLmFyaWFGb3JtYXQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYXJpYUZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIC8vIFJ1biBhbGwgb3B0aW9ucyB0aHJvdWdoIGEgdGVzdGluZyBtZWNoYW5pc20gdG8gZW5zdXJlIGNvcnJlY3RcbiAgICAgICAgLy8gaW5wdXQuIEl0IHNob3VsZCBiZSBub3RlZCB0aGF0IG9wdGlvbnMgbWlnaHQgZ2V0IG1vZGlmaWVkIHRvXG4gICAgICAgIC8vIGJlIGhhbmRsZWQgcHJvcGVybHkuIEUuZy4gd3JhcHBpbmcgaW50ZWdlcnMgaW4gYXJyYXlzLlxuICAgICAgICBPYmplY3Qua2V5cyh0ZXN0cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbiBpc24ndCBzZXQsIGJ1dCBpdCBpcyByZXF1aXJlZCwgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgICAgICBpZiAoIWlzU2V0KG9wdGlvbnNbbmFtZV0pICYmIGRlZmF1bHRzW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVzdHNbbmFtZV0ucikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnXCIgKyBuYW1lICsgXCInIGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVzdHNbbmFtZV0udChwYXJzZWQsICFpc1NldChvcHRpb25zW25hbWVdKSA/IGRlZmF1bHRzW25hbWVdIDogb3B0aW9uc1tuYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGb3J3YXJkIHBpcHMgb3B0aW9uc1xuICAgICAgICBwYXJzZWQucGlwcyA9IG9wdGlvbnMucGlwcztcbiAgICAgICAgLy8gQWxsIHJlY2VudCBicm93c2VycyBhY2NlcHQgdW5wcmVmaXhlZCB0cmFuc2Zvcm0uXG4gICAgICAgIC8vIFdlIG5lZWQgLW1zLSBmb3IgSUU5IGFuZCAtd2Via2l0LSBmb3Igb2xkZXIgQW5kcm9pZDtcbiAgICAgICAgLy8gQXNzdW1lIHVzZSBvZiAtd2Via2l0LSBpZiB1bnByZWZpeGVkIGFuZCAtbXMtIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PXRyYW5zZm9ybXMyZFxuICAgICAgICB2YXIgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBtc1ByZWZpeCA9IGQuc3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIG5vUHJlZml4ID0gZC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgcGFyc2VkLnRyYW5zZm9ybVJ1bGUgPSBub1ByZWZpeCA/IFwidHJhbnNmb3JtXCIgOiBtc1ByZWZpeCA/IFwibXNUcmFuc2Zvcm1cIiA6IFwid2Via2l0VHJhbnNmb3JtXCI7XG4gICAgICAgIC8vIFBpcHMgZG9uJ3QgbW92ZSwgc28gd2UgY2FuIHBsYWNlIHRoZW0gdXNpbmcgbGVmdC90b3AuXG4gICAgICAgIHZhciBzdHlsZXMgPSBbXG4gICAgICAgICAgICBbXCJsZWZ0XCIsIFwidG9wXCJdLFxuICAgICAgICAgICAgW1wicmlnaHRcIiwgXCJib3R0b21cIl1cbiAgICAgICAgXTtcbiAgICAgICAgcGFyc2VkLnN0eWxlID0gc3R5bGVzW3BhcnNlZC5kaXJdW3BhcnNlZC5vcnRdO1xuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIGZ1bmN0aW9uIHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgICAgICB2YXIgc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgPSBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpO1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgJiYgZ2V0U3VwcG9ydHNQYXNzaXZlKCk7XG4gICAgICAgIC8vIEFsbCB2YXJpYWJsZXMgbG9jYWwgdG8gJ3Njb3BlJyBhcmUgcHJlZml4ZWQgd2l0aCAnc2NvcGVfJ1xuICAgICAgICAvLyBTbGlkZXIgRE9NIE5vZGVzXG4gICAgICAgIHZhciBzY29wZV9UYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHZhciBzY29wZV9CYXNlO1xuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlcztcbiAgICAgICAgdmFyIHNjb3BlX0Nvbm5lY3RzO1xuICAgICAgICB2YXIgc2NvcGVfUGlwcztcbiAgICAgICAgdmFyIHNjb3BlX1Rvb2x0aXBzO1xuICAgICAgICAvLyBTbGlkZXIgc3RhdGUgdmFsdWVzXG4gICAgICAgIHZhciBzY29wZV9TcGVjdHJ1bSA9IG9wdGlvbnMuc3BlY3RydW07XG4gICAgICAgIHZhciBzY29wZV9WYWx1ZXMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlTnVtYmVycyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID0gMDtcbiAgICAgICAgdmFyIHNjb3BlX0V2ZW50cyA9IHt9O1xuICAgICAgICAvLyBEb2N1bWVudCBOb2Rlc1xuICAgICAgICB2YXIgc2NvcGVfRG9jdW1lbnQgPSB0YXJnZXQub3duZXJEb2N1bWVudDtcbiAgICAgICAgdmFyIHNjb3BlX0RvY3VtZW50RWxlbWVudCA9IG9wdGlvbnMuZG9jdW1lbnRFbGVtZW50IHx8IHNjb3BlX0RvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHNjb3BlX0JvZHkgPSBzY29wZV9Eb2N1bWVudC5ib2R5O1xuICAgICAgICAvLyBGb3IgaG9yaXpvbnRhbCBzbGlkZXJzIGluIHN0YW5kYXJkIGx0ciBkb2N1bWVudHMsXG4gICAgICAgIC8vIG1ha2UgLm5vVWktb3JpZ2luIG92ZXJmbG93IHRvIHRoZSBsZWZ0IHNvIHRoZSBkb2N1bWVudCBkb2Vzbid0IHNjcm9sbC5cbiAgICAgICAgdmFyIHNjb3BlX0Rpck9mZnNldCA9IHNjb3BlX0RvY3VtZW50LmRpciA9PT0gXCJydGxcIiB8fCBvcHRpb25zLm9ydCA9PT0gMSA/IDAgOiAxMDA7XG4gICAgICAgIC8vIENyZWF0ZXMgYSBub2RlLCBhZGRzIGl0IHRvIHRhcmdldCwgcmV0dXJucyB0aGUgbmV3IG5vZGUuXG4gICAgICAgIGZ1bmN0aW9uIGFkZE5vZGVUbyhhZGRUYXJnZXQsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdmFyIGRpdiA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoZGl2LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCBhIG9yaWdpbiB0byB0aGUgYmFzZVxuICAgICAgICBmdW5jdGlvbiBhZGRPcmlnaW4oYmFzZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5vcmlnaW4pO1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZE5vZGVUbyhvcmlnaW4sIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGUpO1xuICAgICAgICAgICAgYWRkTm9kZVRvKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvdWNoQXJlYSk7XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVcIiwgU3RyaW5nKGhhbmRsZU51bWJlcikpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMua2V5Ym9hcmRTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9HbG9iYWxfYXR0cmlidXRlcy90YWJpbmRleFxuICAgICAgICAgICAgICAgIC8vIDAgPSBmb2N1c2FibGUgYW5kIHJlYWNoYWJsZVxuICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXNfMSA9IG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXNfMSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzXzFbYXR0cmlidXRlXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInNsaWRlclwiKTtcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLW9yaWVudGF0aW9uXCIsIG9wdGlvbnMub3J0ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZUxvd2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhbmRsZU51bWJlciA9PT0gb3B0aW9ucy5oYW5kbGVzIC0gMSkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZVVwcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5zZXJ0IG5vZGVzIGZvciBjb25uZWN0IGVsZW1lbnRzXG4gICAgICAgIGZ1bmN0aW9uIGFkZENvbm5lY3QoYmFzZSwgYWRkKSB7XG4gICAgICAgICAgICBpZiAoIWFkZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBoYW5kbGVzIHRvIHRoZSBzbGlkZXIgYmFzZS5cbiAgICAgICAgZnVuY3Rpb24gYWRkRWxlbWVudHMoY29ubmVjdE9wdGlvbnMsIGJhc2UpIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0QmFzZSA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdHMpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcyA9IFtdO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMgPSBbXTtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbMF0pKTtcbiAgICAgICAgICAgIC8vIFs6Ojo6Tz09PT1PPT09PU89PT09XVxuICAgICAgICAgICAgLy8gY29ubmVjdE9wdGlvbnMgPSBbMCwgMSwgMSwgMV1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBLZWVwIGEgbGlzdCBvZiBhbGwgYWRkZWQgaGFuZGxlcy5cbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLnB1c2goYWRkT3JpZ2luKGJhc2UsIGkpKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzW2ldID0gaTtcbiAgICAgICAgICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3QoY29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zW2kgKyAxXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemUgYSBzaW5nbGUgc2xpZGVyLlxuICAgICAgICBmdW5jdGlvbiBhZGRTbGlkZXIoYWRkVGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBBcHBseSBjbGFzc2VzIGFuZCBkYXRhIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMubHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnJ0bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vcnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ob3Jpem9udGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnZlcnRpY2FsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0ZXh0RGlyZWN0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZShhZGRUYXJnZXQpLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIGlmICh0ZXh0RGlyZWN0aW9uID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGV4dERpcmVjdGlvblJ0bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uTHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuYmFzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkVG9vbHRpcChoYW5kbGUsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnRvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGhhbmRsZS5maXJzdENoaWxkLCBvcHRpb25zLmNzc0NsYXNzZXMudG9vbHRpcCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNTbGlkZXJEaXNhYmxlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9UYXJnZXQuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlzYWJsZSB0aGUgc2xpZGVyIGRyYWdnaW5nIGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgZnVuY3Rpb24gaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlT3JpZ2luLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzKTtcbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHRvb2x0aXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSB0b29sdGlwcyBvcHRpb24gaXMgYSBzaG9ydGhhbmQgZm9yIHVzaW5nIHRoZSAndXBkYXRlJyBldmVudC5cbiAgICAgICAgZnVuY3Rpb24gdG9vbHRpcHMoKSB7XG4gICAgICAgICAgICByZW1vdmVUb29sdGlwcygpO1xuICAgICAgICAgICAgLy8gVG9vbHRpcHMgYXJlIGFkZGVkIHdpdGggb3B0aW9ucy50b29sdGlwcyBpbiBvcmlnaW5hbCBvcmRlci5cbiAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gc2NvcGVfSGFuZGxlcy5tYXAoYWRkVG9vbHRpcCk7XG4gICAgICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIGlmICghc2NvcGVfVG9vbHRpcHMgfHwgIW9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdLnRvKHVuZW5jb2RlZFtoYW5kbGVOdW1iZXJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXS5pbm5lckhUTUwgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFyaWEoKSB7XG4gICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLmFyaWEsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkLCB0YXAsIHBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBBcmlhIFZhbHVlcyBmb3IgYWxsIGhhbmRsZXMsIGFzIGEgY2hhbmdlIGluIG9uZSBjaGFuZ2VzIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgdGhlIG5leHQuXG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlID0gc2NvcGVfSGFuZGxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAxMDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0dGVkIHZhbHVlIGZvciBkaXNwbGF5XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gU3RyaW5nKG9wdGlvbnMuYXJpYUZvcm1hdC50byh1bmVuY29kZWRbaW5kZXhdKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hcCB0byBzbGlkZXIgcmFuZ2UgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtaW4pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIG1heCA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtYXgpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIG5vdyA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhub3cpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWluXCIsIG1pbik7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWF4XCIsIG1heCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbm93XCIsIG5vdyk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiLCB0ZXh0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEdyb3VwKHBpcHMpIHtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcmFuZ2UuXG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlJhbmdlIHx8IHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5TdGVwcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS54VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5Db3VudCkge1xuICAgICAgICAgICAgICAgIGlmIChwaXBzLnZhbHVlcyA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3ZhbHVlcycgKD49IDIpIHJlcXVpcmVkIGZvciBtb2RlICdjb3VudCcuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEaXZpZGUgMCAtIDEwMCBpbiAnY291bnQnIHBhcnRzLlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHBpcHMudmFsdWVzIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgc3ByZWFkID0gMTAwIC8gaW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIExpc3QgdGhlc2UgcGFydHMgYW5kIGhhdmUgdGhlbSBoYW5kbGVkIGFzICdwb3NpdGlvbnMnLlxuICAgICAgICAgICAgICAgIHdoaWxlIChpbnRlcnZhbC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpbnRlcnZhbF0gPSBpbnRlcnZhbCAqIHNwcmVhZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goMTAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwVG9SYW5nZSh2YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIE1hcCBhbGwgcGVyY2VudGFnZXMgdG8gb24tcmFuZ2UgdmFsdWVzLlxuICAgICAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHBpcHMudmFsdWVzLCBwaXBzLnN0ZXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5WYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgbXVzdCBiZSBzdGVwcGVkLCBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBwZXJjZW50YWdlIGZpcnN0LlxuICAgICAgICAgICAgICAgIGlmIChwaXBzLnN0ZXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBpcHMudmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gcGVyY2VudGFnZSwgYXBwbHkgc3RlcCwgcmV0dXJuIHRvIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodmFsdWUpKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGNhbiBzaW1wbHkgdXNlIHRoZSB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpcHMudmFsdWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtdOyAvLyBwaXBzLm1vZGUgPSBuZXZlclxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1hcFRvUmFuZ2UodmFsdWVzLCBzdGVwcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHN0ZXBwZWQgPyBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHZhbHVlKSA6IHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlU3ByZWFkKHBpcHMpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhZmVJbmNyZW1lbnQodmFsdWUsIGluY3JlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIEF2b2lkIGZsb2F0aW5nIHBvaW50IHZhcmlhbmNlIGJ5IGRyb3BwaW5nIHRoZSBzbWFsbGVzdCBkZWNpbWFsIHBsYWNlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKCh2YWx1ZSArIGluY3JlbWVudCkudG9GaXhlZCg3KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZ3JvdXAgPSBnZXRHcm91cChwaXBzKTtcbiAgICAgICAgICAgIHZhciBpbmRleGVzID0ge307XG4gICAgICAgICAgICB2YXIgZmlyc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgICAgIHZhciBsYXN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbc2NvcGVfU3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUxhc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBwcmV2UGN0ID0gMDtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGdyb3VwLCBzb3J0IGl0IGFuZCBmaWx0ZXIgYXdheSBhbGwgZHVwbGljYXRlcy5cbiAgICAgICAgICAgIGdyb3VwID0gdW5pcXVlKGdyb3VwLnNsaWNlKCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcmFuZ2Ugc3RhcnRzIHdpdGggdGhlIGZpcnN0IGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoZ3JvdXBbMF0gIT09IGZpcnN0SW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnVuc2hpZnQoZmlyc3RJblJhbmdlKTtcbiAgICAgICAgICAgICAgICBpZ25vcmVGaXJzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMaWtld2lzZSBmb3IgdGhlIGxhc3Qgb25lLlxuICAgICAgICAgICAgaWYgKGdyb3VwW2dyb3VwLmxlbmd0aCAtIDFdICE9PSBsYXN0SW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnB1c2gobGFzdEluUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGlnbm9yZUxhc3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGxvd2VyICsgdXBwZXIgcG9zaXRpb25zLlxuICAgICAgICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIHZhciBxO1xuICAgICAgICAgICAgICAgIHZhciBsb3cgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhciBoaWdoID0gZ3JvdXBbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UGN0O1xuICAgICAgICAgICAgICAgIHZhciBwY3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgICAgIHZhciBwY3RQb3M7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGU7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzO1xuICAgICAgICAgICAgICAgIHZhciByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgIHZhciBpc1N0ZXBzID0gcGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlN0ZXBzO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gdXNpbmcgJ3N0ZXBzJyBtb2RlLCB1c2UgdGhlIHByb3ZpZGVkIHN0ZXBzLlxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UnbGwgc3RlcCBvbiB0byB0aGUgbmV4dCBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBpZiAoaXNTdGVwcykge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0ueE51bVN0ZXBzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhICdmdWxsJyBzdGVwLlxuICAgICAgICAgICAgICAgIGlmICghc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gaGlnaCAtIGxvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgaGlnaCBpcyB1bmRlZmluZWQgd2UgYXJlIGF0IHRoZSBsYXN0IHN1YnJhbmdlLiBNYWtlIHN1cmUgaXQgaXRlcmF0ZXMgb25jZSAoIzEwODgpXG4gICAgICAgICAgICAgICAgaWYgKGhpZ2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBoaWdoID0gbG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgc3RlcCBpc24ndCAwLCB3aGljaCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wICgjNjU0KVxuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgICAgIC8vIEZpbmQgYWxsIHN0ZXBzIGluIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gaGlnaDsgaSA9IHNhZmVJbmNyZW1lbnQoaSwgc3RlcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBwZXJjZW50YWdlIHZhbHVlIGZvciB0aGUgY3VycmVudCBzdGVwLFxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHNpemUgZm9yIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgbmV3UGN0ID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyhpKTtcbiAgICAgICAgICAgICAgICAgICAgcGN0RGlmZmVyZW5jZSA9IG5ld1BjdCAtIHByZXZQY3Q7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzID0gcGN0RGlmZmVyZW5jZSAvIChwaXBzLmRlbnNpdHkgfHwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxTdGVwcyA9IE1hdGgucm91bmQoc3RlcHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHJhdGlvIHJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiBwZXJjZW50YWdlLXNwYWNlIGEgcG9pbnQgaW5kaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgYSBkZW5zaXR5IDEgdGhlIHBvaW50cy9wZXJjZW50YWdlID0gMS4gRm9yIGRlbnNpdHkgMiwgdGhhdCBwZXJjZW50YWdlIG5lZWRzIHRvIGJlIHJlLWRpdmlkZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvdW5kIHRoZSBwZXJjZW50YWdlIG9mZnNldCB0byBhbiBldmVuIG51bWJlciwgdGhlbiBkaXZpZGUgYnkgdHdvXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHNwcmVhZCB0aGUgb2Zmc2V0IG9uIGJvdGggc2lkZXMgb2YgdGhlIHJhbmdlLlxuICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZSA9IHBjdERpZmZlcmVuY2UgLyByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdmlkZSBhbGwgcG9pbnRzIGV2ZW5seSwgYWRkaW5nIHRoZSBjb3JyZWN0IG51bWJlciB0byB0aGlzIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gdXAgdG8gPD0gc28gdGhhdCAxMDAlIGdldHMgYSBwb2ludCwgZXZlbnQgaWYgaWdub3JlTGFzdCBpcyBzZXQuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocSA9IDE7IHEgPD0gcmVhbFN0ZXBzOyBxICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByYXRpbyBiZXR3ZWVuIHRoZSByb3VuZGVkIHZhbHVlIGFuZCB0aGUgYWN0dWFsIHNpemUgbWlnaHQgYmUgfjElIG9mZi5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvcnJlY3QgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IGJ5IHRoZSBudW1iZXIgb2YgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXIgc3VicmFuZ2UuIGRlbnNpdHkgPSAxIHdpbGwgcmVzdWx0IGluIDEwMCBwb2ludHMgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmdWxsIHJhbmdlLCAyIGZvciA1MCwgNCBmb3IgMjUsIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBjdFBvcyA9IHByZXZQY3QgKyBxICogc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzW3BjdFBvcy50b0ZpeGVkKDUpXSA9IFtzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcocGN0UG9zKSwgMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBwb2ludCB0eXBlLlxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gZ3JvdXAuaW5kZXhPZihpKSA+IC0xID8gZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlIDogaXNTdGVwcyA/IGV4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZSA6IGV4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5mb3JjZSB0aGUgJ2lnbm9yZUZpcnN0JyBvcHRpb24gYnkgb3ZlcndyaXRpbmcgdGhlIHR5cGUgZm9yIDAuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5kZXggJiYgaWdub3JlRmlyc3QgJiYgaSAhPT0gaGlnaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaSA9PT0gaGlnaCAmJiBpZ25vcmVMYXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgJ3R5cGUnIG9mIHRoaXMgcG9pbnQuIDAgPSBwbGFpbiwgMSA9IHJlYWwgdmFsdWUsIDIgPSBzdGVwIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1tuZXdQY3QudG9GaXhlZCg1KV0gPSBbaSwgdHlwZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwZXJjZW50YWdlIGNvdW50LlxuICAgICAgICAgICAgICAgICAgICBwcmV2UGN0ID0gbmV3UGN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlckZ1bmMsIGZvcm1hdHRlcikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGVfRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZVNpemVDbGFzc2VzID0gKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZU5vcm1hbCxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTGFyZ2UsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVN1YixcbiAgICAgICAgICAgICAgICBfYSk7XG4gICAgICAgICAgICB2YXIgbWFya2VyU2l6ZUNsYXNzZXMgPSAoX2IgPSB7fSxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLk5vbmVdID0gXCJcIixcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlck5vcm1hbCxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckxhcmdlLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyU3ViLFxuICAgICAgICAgICAgICAgIF9iKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVWZXJ0aWNhbF07XG4gICAgICAgICAgICB2YXIgbWFya2VyT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyVmVydGljYWxdO1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHMpO1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5vcnQgPT09IDAgPyBvcHRpb25zLmNzc0NsYXNzZXMucGlwc0hvcml6b250YWwgOiBvcHRpb25zLmNzc0NsYXNzZXMucGlwc1ZlcnRpY2FsKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENsYXNzZXModHlwZSwgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBzb3VyY2UgPT09IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZW50YXRpb25DbGFzc2VzID0gYSA/IHZhbHVlT3JpZW50YXRpb25DbGFzc2VzIDogbWFya2VyT3JpZW50YXRpb25DbGFzc2VzO1xuICAgICAgICAgICAgICAgIHZhciBzaXplQ2xhc3NlcyA9IGEgPyB2YWx1ZVNpemVDbGFzc2VzIDogbWFya2VyU2l6ZUNsYXNzZXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSArIFwiIFwiICsgb3JpZW50YXRpb25DbGFzc2VzW29wdGlvbnMub3J0XSArIFwiIFwiICsgc2l6ZUNsYXNzZXNbdHlwZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRTcHJlYWQob2Zmc2V0LCB2YWx1ZSwgdHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBmaWx0ZXIgZnVuY3Rpb24sIGlmIGl0IGlzIHNldC5cbiAgICAgICAgICAgICAgICB0eXBlID0gZmlsdGVyRnVuYyA/IGZpbHRlckZ1bmModmFsdWUsIHR5cGUpIDogdHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5QaXBzVHlwZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgbWFya2VyIGZvciBldmVyeSBwb2ludFxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlcik7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgICAgIC8vIFZhbHVlcyBhcmUgb25seSBhcHBlbmRlZCBmb3IgcG9pbnRzIG1hcmtlZCAnMScgb3IgJzInLlxuICAgICAgICAgICAgICAgIGlmICh0eXBlID4gZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gU3RyaW5nKGZvcm1hdHRlci50byh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFwcGVuZCBhbGwgcG9pbnRzLlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3ByZWFkKS5mb3JFYWNoKGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBhZGRTcHJlYWQob2Zmc2V0LCBzcHJlYWRbb2Zmc2V0XVswXSwgc3ByZWFkW29mZnNldF1bMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVQaXBzKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlX1BpcHMpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHNjb3BlX1BpcHMpO1xuICAgICAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBpcHMocGlwcykge1xuICAgICAgICAgICAgLy8gRml4ICM2NjlcbiAgICAgICAgICAgIHJlbW92ZVBpcHMoKTtcbiAgICAgICAgICAgIHZhciBzcHJlYWQgPSBnZW5lcmF0ZVNwcmVhZChwaXBzKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBwaXBzLmZpbHRlcjtcbiAgICAgICAgICAgIHZhciBmb3JtYXQgPSBwaXBzLmZvcm1hdCB8fCB7XG4gICAgICAgICAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKE1hdGgucm91bmQodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2NvcGVfUGlwcyA9IHNjb3BlX1RhcmdldC5hcHBlbmRDaGlsZChhZGRNYXJraW5nKHNwcmVhZCwgZmlsdGVyLCBmb3JtYXQpKTtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9QaXBzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNob3J0aGFuZCBmb3IgYmFzZSBkaW1lbnNpb25zLlxuICAgICAgICBmdW5jdGlvbiBiYXNlU2l6ZSgpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2NvcGVfQmFzZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHZhciBhbHQgPSAoXCJvZmZzZXRcIiArIFtcIldpZHRoXCIsIFwiSGVpZ2h0XCJdW29wdGlvbnMub3J0XSk7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vcnQgPT09IDAgPyByZWN0LndpZHRoIHx8IHNjb3BlX0Jhc2VbYWx0XSA6IHJlY3QuaGVpZ2h0IHx8IHNjb3BlX0Jhc2VbYWx0XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVyIGZvciBhdHRhY2hpbmcgZXZlbnRzIHRyb3VnaCBhIHByb3h5LlxuICAgICAgICBmdW5jdGlvbiBhdHRhY2hFdmVudChldmVudHMsIGVsZW1lbnQsIGNhbGxiYWNrLCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvICdmaWx0ZXInIGV2ZW50cyB0byB0aGUgc2xpZGVyLlxuICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhIG5vZGUsIG5vdCBhIG5vZGVMaXN0XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBmaXhFdmVudChldmVudCwgZGF0YS5wYWdlT2Zmc2V0LCBkYXRhLnRhcmdldCB8fCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBmaXhFdmVudCByZXR1cm5zIGZhbHNlIGlmIHRoaXMgZXZlbnQgaGFzIGEgZGlmZmVyZW50IHRhcmdldFxuICAgICAgICAgICAgICAgIC8vIHdoZW4gaGFuZGxpbmcgKG11bHRpLSkgdG91Y2ggZXZlbnRzO1xuICAgICAgICAgICAgICAgIGlmICghZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvTm90UmVqZWN0IGlzIHBhc3NlZCBieSBhbGwgZW5kIGV2ZW50cyB0byBtYWtlIHN1cmUgcmVsZWFzZWQgdG91Y2hlc1xuICAgICAgICAgICAgICAgIC8vIGFyZSBub3QgcmVqZWN0ZWQsIGxlYXZpbmcgdGhlIHNsaWRlciBcInN0dWNrXCIgdG8gdGhlIGN1cnNvcjtcbiAgICAgICAgICAgICAgICBpZiAoaXNTbGlkZXJEaXNhYmxlZCgpICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcCBpZiBhbiBhY3RpdmUgJ3RhcCcgdHJhbnNpdGlvbiBpcyB0YWtpbmcgcGxhY2UuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50cyA9PT0gYWN0aW9ucy5zdGFydCAmJiBlLmJ1dHRvbnMgIT09IHVuZGVmaW5lZCAmJiBlLmJ1dHRvbnMgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhvdmVyICYmIGUuYnV0dG9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICdzdXBwb3J0c1Bhc3NpdmUnIGlzIG9ubHkgdHJ1ZSBpZiBhIGJyb3dzZXIgYWxzbyBzdXBwb3J0cyB0b3VjaC1hY3Rpb246IG5vbmUgaW4gQ1NTLlxuICAgICAgICAgICAgICAgIC8vIGlPUyBzYWZhcmkgZG9lcyBub3QsIHNvIGl0IGRvZXNuJ3QgZ2V0IHRvIGJlbmVmaXQgZnJvbSBwYXNzaXZlIHNjcm9sbGluZy4gaU9TIGRvZXMgc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uLCBidXQgdGhhdCBhbGxvd3MgcGFubmluZywgd2hpY2ggYnJlYWtzXG4gICAgICAgICAgICAgICAgLy8gc2xpZGVycyBhZnRlciB6b29taW5nL29uIG5vbi1yZXNwb25zaXZlIHBhZ2VzLlxuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzMzExMlxuICAgICAgICAgICAgICAgIGlmICghc3VwcG9ydHNQYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5jYWxjUG9pbnQgPSBlLnBvaW50c1tvcHRpb25zLm9ydF07XG4gICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgZXZlbnQgaGFuZGxlciB3aXRoIHRoZSBldmVudCBbIGFuZCBhZGRpdGlvbmFsIGRhdGEgXS5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG1ldGhvZHMgPSBbXTtcbiAgICAgICAgICAgIC8vIEJpbmQgYSBjbG9zdXJlIG9uIHRoZSB0YXJnZXQgZm9yIGV2ZXJ5IGV2ZW50IHR5cGUuXG4gICAgICAgICAgICBldmVudHMuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG1ldGhvZCwgc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSk7XG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKFtldmVudE5hbWUsIG1ldGhvZF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kcztcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm92aWRlIGEgY2xlYW4gZXZlbnQgd2l0aCBzdGFuZGFyZGl6ZWQgb2Zmc2V0IHZhbHVlcy5cbiAgICAgICAgZnVuY3Rpb24gZml4RXZlbnQoZSwgcGFnZU9mZnNldCwgZXZlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIC8vIEZpbHRlciB0aGUgZXZlbnQgdG8gcmVnaXN0ZXIgdGhlIHR5cGUsIHdoaWNoIGNhbiBiZVxuICAgICAgICAgICAgLy8gdG91Y2gsIG1vdXNlIG9yIHBvaW50ZXIuIE9mZnNldCBjaGFuZ2VzIG5lZWQgdG8gYmVcbiAgICAgICAgICAgIC8vIG1hZGUgb24gYW4gZXZlbnQgc3BlY2lmaWMgYmFzaXMuXG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLnR5cGUuaW5kZXhPZihcInRvdWNoXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIG1vdXNlID0gZS50eXBlLmluZGV4T2YoXCJtb3VzZVwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciBwb2ludGVyID0gZS50eXBlLmluZGV4T2YoXCJwb2ludGVyXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIHggPSAwO1xuICAgICAgICAgICAgdmFyIHkgPSAwO1xuICAgICAgICAgICAgLy8gSUUxMCBpbXBsZW1lbnRlZCBwb2ludGVyIGV2ZW50cyB3aXRoIGEgcHJlZml4O1xuICAgICAgICAgICAgaWYgKGUudHlwZS5pbmRleE9mKFwiTVNQb2ludGVyXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBFcnJvbmVvdXMgZXZlbnRzIHNlZW0gdG8gYmUgcGFzc2VkIGluIG9jY2FzaW9uYWxseSBvbiBpT1MvaVBhZE9TIGFmdGVyIHVzZXIgZmluaXNoZXMgaW50ZXJhY3Rpbmcgd2l0aFxuICAgICAgICAgICAgLy8gdGhlIHNsaWRlci4gVGhleSBhcHBlYXIgdG8gYmUgb2YgdHlwZSBNb3VzZUV2ZW50LCB5ZXQgdGhleSBkb24ndCBoYXZlIHVzdWFsIHByb3BlcnRpZXMgc2V0LiBJZ25vcmVcbiAgICAgICAgICAgIC8vIGV2ZW50cyB0aGF0IGhhdmUgbm8gdG91Y2hlcyBvciBidXR0b25zIGFzc29jaWF0ZWQgd2l0aCB0aGVtLiAoIzEwNTcsICMxMDc5LCAjMTA5NSlcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwibW91c2Vkb3duXCIgJiYgIWUuYnV0dG9ucyAmJiAhZS50b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIG9ubHkgdGhpbmcgb25lIGhhbmRsZSBzaG91bGQgYmUgY29uY2VybmVkIGFib3V0IGlzIHRoZSB0b3VjaGVzIHRoYXQgb3JpZ2luYXRlZCBvbiB0b3Agb2YgaXQuXG4gICAgICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgYSB0b3VjaCBvcmlnaW5hdGVkIG9uIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICAgICAgdmFyIGlzVG91Y2hPblRhcmdldCA9IGZ1bmN0aW9uIChjaGVja1RvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBjaGVja1RvdWNoLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0YXJnZXQgPT09IGV2ZW50VGFyZ2V0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldC5jb250YWlucyh0YXJnZXQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5jb21wb3NlZCAmJiBlLmNvbXBvc2VkUGF0aCgpLnNoaWZ0KCkgPT09IGV2ZW50VGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgY2FzZSBvZiB0b3VjaHN0YXJ0IGV2ZW50cywgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlcmUgaXMgc3RpbGwgbm8gbW9yZSB0aGFuIG9uZVxuICAgICAgICAgICAgICAgIC8vIHRvdWNoIG9uIHRoZSB0YXJnZXQgc28gd2UgbG9vayBhbW9uZ3N0IGFsbCB0b3VjaGVzLlxuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwidG91Y2hzdGFydFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaGVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGUudG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IHN1cHBvcnQgbW9yZSB0aGFuIG9uZSB0b3VjaCBwZXIgaGFuZGxlLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gdGhlIG90aGVyIGNhc2VzLCBmaW5kIG9uIGNoYW5nZWRUb3VjaGVzIGlzIGVub3VnaC5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFRvdWNoID0gQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChlLmNoYW5nZWRUb3VjaGVzLCBpc1RvdWNoT25UYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgaWYgdGhlIHRhcmdldCB0b3VjaCBoYXMgbm90IG1vdmVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB5ID0gdGFyZ2V0VG91Y2gucGFnZVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQgfHwgZ2V0UGFnZU9mZnNldChzY29wZV9Eb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAobW91c2UgfHwgcG9pbnRlcikge1xuICAgICAgICAgICAgICAgIHggPSBlLmNsaWVudFggKyBwYWdlT2Zmc2V0Lng7XG4gICAgICAgICAgICAgICAgeSA9IGUuY2xpZW50WSArIHBhZ2VPZmZzZXQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQ7XG4gICAgICAgICAgICBlLnBvaW50cyA9IFt4LCB5XTtcbiAgICAgICAgICAgIGUuY3Vyc29yID0gbW91c2UgfHwgcG9pbnRlcjsgLy8gRml4ICM0MzVcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRyYW5zbGF0ZSBhIGNvb3JkaW5hdGUgaW4gdGhlIGRvY3VtZW50IHRvIGEgcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGNQb2ludFRvUGVyY2VudGFnZShjYWxjUG9pbnQpIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGNhbGNQb2ludCAtIG9mZnNldChzY29wZV9CYXNlLCBvcHRpb25zLm9ydCk7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobG9jYXRpb24gKiAxMDApIC8gYmFzZVNpemUoKTtcbiAgICAgICAgICAgIC8vIENsYW1wIHByb3Bvc2FsIGJldHdlZW4gMCUgYW5kIDEwMCVcbiAgICAgICAgICAgIC8vIE91dC1vZi1ib3VuZCBjb29yZGluYXRlcyBtYXkgb2NjdXIgd2hlbiAubm9VaS1iYXNlIHBzZXVkby1lbGVtZW50c1xuICAgICAgICAgICAgLy8gYXJlIHVzZWQgKGUuZy4gY29udGFpbmVkIGhhbmRsZXMgZmVhdHVyZSlcbiAgICAgICAgICAgIHByb3Bvc2FsID0gbGltaXQocHJvcG9zYWwpO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyID8gMTAwIC0gcHJvcG9zYWwgOiBwcm9wb3NhbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5kIGhhbmRsZSBjbG9zZXN0IHRvIGEgY2VydGFpbiBwZXJjZW50YWdlIG9uIHRoZSBzbGlkZXJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q2xvc2VzdEhhbmRsZShjbGlja2VkUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzbWFsbGVzdERpZmZlcmVuY2UgPSAxMDA7XG4gICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZmFsc2U7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlZCBoYW5kbGVzIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgaWYgKGlzSGFuZGxlRGlzYWJsZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZVBvc2l0aW9uID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlID0gTWF0aC5hYnMoaGFuZGxlUG9zaXRpb24gLSBjbGlja2VkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIC8vIEluaXRpYWwgc3RhdGVcbiAgICAgICAgICAgICAgICB2YXIgY2xpY2tBdEVkZ2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPT09IDEwMCAmJiBzbWFsbGVzdERpZmZlcmVuY2UgPT09IDEwMDtcbiAgICAgICAgICAgICAgICAvLyBEaWZmZXJlbmNlIHdpdGggdGhpcyBoYW5kbGUgaXMgc21hbGxlciB0aGFuIHRoZSBwcmV2aW91c2x5IGNoZWNrZWQgaGFuZGxlXG4gICAgICAgICAgICAgICAgdmFyIGlzQ2xvc2VyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDwgc21hbGxlc3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgICAgIHZhciBpc0Nsb3NlckFmdGVyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDw9IHNtYWxsZXN0RGlmZmVyZW5jZSAmJiBjbGlja2VkUG9zaXRpb24gPiBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAoaXNDbG9zZXIgfHwgaXNDbG9zZXJBZnRlciB8fCBjbGlja0F0RWRnZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgc21hbGxlc3REaWZmZXJlbmNlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJlICdlbmQnIHdoZW4gYSBtb3VzZSBvciBwZW4gbGVhdmVzIHRoZSBkb2N1bWVudC5cbiAgICAgICAgZnVuY3Rpb24gZG9jdW1lbnRMZWF2ZShldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2VvdXRcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gXCJIVE1MXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRFbmQoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBtb3ZlbWVudCBvbiBkb2N1bWVudCBmb3IgaGFuZGxlIGFuZCByYW5nZSBkcmFnLlxuICAgICAgICBmdW5jdGlvbiBldmVudE1vdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIEZpeCAjNDk4XG4gICAgICAgICAgICAvLyBDaGVjayB2YWx1ZSBvZiAuYnV0dG9ucyBpbiAnc3RhcnQnIHRvIHdvcmsgYXJvdW5kIGEgYnVnIGluIElFMTAgbW9iaWxlIChkYXRhLmJ1dHRvbnNQcm9wZXJ0eSkuXG4gICAgICAgICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzkyNzAwNS9tb2JpbGUtaWUxMC13aW5kb3dzLXBob25lLWJ1dHRvbnMtcHJvcGVydHktb2YtcG9pbnRlcm1vdmUtZXZlbnQtYWx3YXlzLXplcm9cbiAgICAgICAgICAgIC8vIElFOSBoYXMgLmJ1dHRvbnMgYW5kIC53aGljaCB6ZXJvIG9uIG1vdXNlbW92ZS5cbiAgICAgICAgICAgIC8vIEZpcmVmb3ggYnJlYWtzIHRoZSBzcGVjIE1ETiBkZWZpbmVzLlxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNU0lFIDlcIikgPT09IC0xICYmIGV2ZW50LmJ1dHRvbnMgPT09IDAgJiYgZGF0YS5idXR0b25zUHJvcGVydHkgIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRFbmQoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYXJlIG1vdmluZyB1cCBvciBkb3duXG4gICAgICAgICAgICB2YXIgbW92ZW1lbnQgPSAob3B0aW9ucy5kaXIgPyAtMSA6IDEpICogKGV2ZW50LmNhbGNQb2ludCAtIGRhdGEuc3RhcnRDYWxjUG9pbnQpO1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgbW92ZW1lbnQgaW50byBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHNsaWRlciB3aWR0aC9oZWlnaHRcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IChtb3ZlbWVudCAqIDEwMCkgLyBkYXRhLmJhc2VTaXplO1xuICAgICAgICAgICAgbW92ZUhhbmRsZXMobW92ZW1lbnQgPiAwLCBwcm9wb3NhbCwgZGF0YS5sb2NhdGlvbnMsIGRhdGEuaGFuZGxlTnVtYmVycywgZGF0YS5jb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVbmJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQsIGNhbGwgY2FsbGJhY2tzLlxuICAgICAgICBmdW5jdGlvbiBldmVudEVuZChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gVGhlIGhhbmRsZSBpcyBubyBsb25nZXIgYWN0aXZlLCBzbyByZW1vdmUgdGhlIGNsYXNzLlxuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZGF0YS5oYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVW5iaW5kIHRoZSBtb3ZlIGFuZCBlbmQgZXZlbnRzLCB3aGljaCBhcmUgYWRkZWQgb24gJ3N0YXJ0Jy5cbiAgICAgICAgICAgIGRhdGEubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Eb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihjWzBdLCBjWzFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkcmFnZ2luZyBjbGFzcy5cbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnKTtcbiAgICAgICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY3Vyc29yIHN0eWxlcyBhbmQgdGV4dC1zZWxlY3Rpb24gZXZlbnRzIGJvdW5kIHRvIHRoZSBib2R5LlxuICAgICAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfQm9keS5zdHlsZS5jdXJzb3IgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImVuZFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQmluZCBtb3ZlIGV2ZW50cyBvbiBkb2N1bWVudC5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRTdGFydChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIGV2ZW50IGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZU51bWJlcnMuc29tZShpc0hhbmRsZURpc2FibGVkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoYW5kbGU7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2RhdGEuaGFuZGxlTnVtYmVyc1swXV07XG4gICAgICAgICAgICAgICAgaGFuZGxlID0gaGFuZGxlT3JpZ2luLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIGhhbmRsZSBhcyAnYWN0aXZlJyBzbyBpdCBjYW4gYmUgc3R5bGVkLlxuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBIGRyYWcgc2hvdWxkIG5ldmVyIHByb3BhZ2F0ZSB1cCB0byB0aGUgJ3RhcCcgZXZlbnQuXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8vIFJlY29yZCB0aGUgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBtb3ZlIGFuZCBlbmQgZXZlbnRzLlxuICAgICAgICAgICAgdmFyIG1vdmVFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBldmVudE1vdmUsIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZXZlbnQgdGFyZ2V0IGhhcyBjaGFuZ2VkIHNvIHdlIG5lZWQgdG8gcHJvcGFnYXRlIHRoZSBvcmlnaW5hbCBvbmUgc28gdGhhdCB3ZSBrZWVwXG4gICAgICAgICAgICAgICAgLy8gcmVseWluZyBvbiBpdCB0byBleHRyYWN0IHRhcmdldCB0b3VjaGVzLlxuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGRhdGEuY29ubmVjdCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBzdGFydENhbGNQb2ludDogZXZlbnQuY2FsY1BvaW50LFxuICAgICAgICAgICAgICAgIGJhc2VTaXplOiBiYXNlU2l6ZSgpLFxuICAgICAgICAgICAgICAgIHBhZ2VPZmZzZXQ6IGV2ZW50LnBhZ2VPZmZzZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnNQcm9wZXJ0eTogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM6IHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBlbmRFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMuZW5kLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGV2ZW50RW5kLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgZG9Ob3RSZWplY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBvdXRFdmVudCA9IGF0dGFjaEV2ZW50KFwibW91c2VvdXRcIiwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudExlYXZlLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgZG9Ob3RSZWplY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIHB1c2hlZCB0aGUgbGlzdGVuZXJzIGluIHRoZSBsaXN0ZW5lciBsaXN0IHJhdGhlciB0aGFuIGNyZWF0aW5nXG4gICAgICAgICAgICAvLyBhIG5ldyBvbmUgYXMgaXQgaGFzIGFscmVhZHkgYmVlbiBwYXNzZWQgdG8gdGhlIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2guYXBwbHkobGlzdGVuZXJzLCBtb3ZlRXZlbnQuY29uY2F0KGVuZEV2ZW50LCBvdXRFdmVudCkpO1xuICAgICAgICAgICAgLy8gVGV4dCBzZWxlY3Rpb24gaXNuJ3QgYW4gaXNzdWUgb24gdG91Y2ggZGV2aWNlcyxcbiAgICAgICAgICAgIC8vIHNvIGFkZGluZyBjdXJzb3Igc3R5bGVzIGNhbiBiZSBza2lwcGVkLlxuICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlICdJJyBjdXJzb3IgYW5kIGV4dGVuZCB0aGUgcmFuZ2UtZHJhZyBjdXJzb3IuXG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5zdHlsZS5jdXJzb3IgPSBnZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldCkuY3Vyc29yO1xuICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIHRhcmdldCB3aXRoIGEgZHJhZ2dpbmcgc3RhdGUuXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0ZXh0IHNlbGVjdGlvbiB3aGVuIGRyYWdnaW5nIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgICAgIC8vIEluIG5vVWlTbGlkZXIgPD0gOS4yLjAsIHRoaXMgd2FzIGhhbmRsZWQgYnkgY2FsbGluZyBwcmV2ZW50RGVmYXVsdCBvbiBtb3VzZS90b3VjaCBzdGFydC9tb3ZlLFxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGlzIHNjcm9sbCBibG9ja2luZy4gVGhlIHNlbGVjdHN0YXJ0IGV2ZW50IGlzIHN1cHBvcnRlZCBieSBGaXJlRm94IHN0YXJ0aW5nIGZyb20gdmVyc2lvbiA1MixcbiAgICAgICAgICAgICAgICAvLyBtZWFuaW5nIHRoZSBvbmx5IGhvbGRvdXQgaXMgaU9TIFNhZmFyaS4gVGhpcyBkb2Vzbid0IG1hdHRlcjogdGV4dCBzZWxlY3Rpb24gaXNuJ3QgdHJpZ2dlcmVkIHRoZXJlLlxuICAgICAgICAgICAgICAgIC8vIFRoZSAnY3Vyc29yJyBmbGFnIGlzIGZhbHNlLlxuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9c2VsZWN0c3RhcnRcbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInN0YXJ0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlIGNsb3Nlc3QgaGFuZGxlIHRvIHRhcHBlZCBsb2NhdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRUYXAoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFRoZSB0YXAgZXZlbnQgc2hvdWxkbid0IHByb3BhZ2F0ZSB1cFxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBnZXRDbG9zZXN0SGFuZGxlKHByb3Bvc2FsKTtcbiAgICAgICAgICAgIC8vIFRhY2tsZSB0aGUgY2FzZSB0aGF0IGFsbCBoYW5kbGVzIGFyZSAnZGlzYWJsZWQnLlxuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGbGFnIHRoZSBzbGlkZXIgYXMgaXQgaXMgbm93IGluIGEgdHJhbnNpdGlvbmFsIHN0YXRlLlxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiB0YWtlcyBhIGNvbmZpZ3VyYWJsZSBhbW91bnQgb2YgbXMgKGRlZmF1bHQgMzAwKS4gUmUtZW5hYmxlIHRoZSBzbGlkZXIgYWZ0ZXIgdGhhdC5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5ldmVudHMuc25hcCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBwcm9wb3NhbCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5ldmVudHMuc25hcCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnRTdGFydChldmVudCwgeyBoYW5kbGVOdW1iZXJzOiBbaGFuZGxlTnVtYmVyXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJlcyBhICdob3ZlcicgZXZlbnQgZm9yIGEgaG92ZXJlZCBtb3VzZS9wZW4gcG9zaXRpb24uXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50SG92ZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICAgICAgdmFyIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcChwcm9wb3NhbCk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcImhvdmVyXCIgPT09IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXSkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHNjb3BlX1NlbGYsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlcyBrZXlkb3duIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgICAgICAvLyBEb24ndCBtb3ZlIHRoZSBkb2N1bWVudCB3aGVuIHByZXNzaW5nIGFycm93IGtleXMgb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoaXNTbGlkZXJEaXNhYmxlZCgpIHx8IGlzSGFuZGxlRGlzYWJsZWQoaGFuZGxlTnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBob3Jpem9udGFsS2V5cyA9IFtcIkxlZnRcIiwgXCJSaWdodFwiXTtcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNhbEtleXMgPSBbXCJEb3duXCIsIFwiVXBcIl07XG4gICAgICAgICAgICB2YXIgbGFyZ2VTdGVwS2V5cyA9IFtcIlBhZ2VEb3duXCIsIFwiUGFnZVVwXCJdO1xuICAgICAgICAgICAgdmFyIGVkZ2VLZXlzID0gW1wiSG9tZVwiLCBcIkVuZFwiXTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRpciAmJiAhb3B0aW9ucy5vcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBPbiBhbiByaWdodC10by1sZWZ0IHNsaWRlciwgdGhlIGxlZnQgYW5kIHJpZ2h0IGtleXMgYWN0IGludmVydGVkXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5vcnQgJiYgIW9wdGlvbnMuZGlyKSB7XG4gICAgICAgICAgICAgICAgLy8gT24gYSB0b3AtdG8tYm90dG9tIHNsaWRlciwgdGhlIHVwIGFuZCBkb3duIGtleXMgYWN0IGludmVydGVkXG4gICAgICAgICAgICAgICAgdmVydGljYWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBsYXJnZVN0ZXBLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0cmlwIFwiQXJyb3dcIiBmb3IgSUUgY29tcGF0aWJpbGl0eS4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5XG4gICAgICAgICAgICB2YXIga2V5ID0gZXZlbnQua2V5LnJlcGxhY2UoXCJBcnJvd1wiLCBcIlwiKTtcbiAgICAgICAgICAgIHZhciBpc0xhcmdlRG93biA9IGtleSA9PT0gbGFyZ2VTdGVwS2V5c1swXTtcbiAgICAgICAgICAgIHZhciBpc0xhcmdlVXAgPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMV07XG4gICAgICAgICAgICB2YXIgaXNEb3duID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMF0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1swXSB8fCBpc0xhcmdlRG93bjtcbiAgICAgICAgICAgIHZhciBpc1VwID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMV0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1sxXSB8fCBpc0xhcmdlVXA7XG4gICAgICAgICAgICB2YXIgaXNNaW4gPSBrZXkgPT09IGVkZ2VLZXlzWzBdO1xuICAgICAgICAgICAgdmFyIGlzTWF4ID0ga2V5ID09PSBlZGdlS2V5c1sxXTtcbiAgICAgICAgICAgIGlmICghaXNEb3duICYmICFpc1VwICYmICFpc01pbiAmJiAhaXNNYXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgdG87XG4gICAgICAgICAgICBpZiAoaXNVcCB8fCBpc0Rvd24pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gaXNEb3duID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzID0gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXAgPSBzdGVwc1tkaXJlY3Rpb25dO1xuICAgICAgICAgICAgICAgIC8vIEF0IHRoZSBlZGdlIG9mIGEgc2xpZGVyLCBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBzdGVwIHNldCwgdXNlIHRoZSBkZWZhdWx0IG9mIDEwJSBvZiB0aGUgc3ViLXJhbmdlXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzY29wZV9TcGVjdHJ1bS5nZXREZWZhdWx0U3RlcChzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSwgaXNEb3duLCBvcHRpb25zLmtleWJvYXJkRGVmYXVsdFN0ZXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNMYXJnZVVwIHx8IGlzTGFyZ2VEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZFBhZ2VNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCAqPSBvcHRpb25zLmtleWJvYXJkTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XG4gICAgICAgICAgICAgICAgLy8gRGVjcmVtZW50IGZvciBkb3duIHN0ZXBzXG4gICAgICAgICAgICAgICAgc3RlcCA9IChpc0Rvd24gPyAtMSA6IDEpICogc3RlcDtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdICsgc3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzTWF4KSB7XG4gICAgICAgICAgICAgICAgLy8gRW5kIGtleVxuICAgICAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsW29wdGlvbnMuc3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhvbWUga2V5XG4gICAgICAgICAgICAgICAgdG8gPSBvcHRpb25zLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHRvKSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCBldmVudHMgdG8gc2V2ZXJhbCBzbGlkZXIgcGFydHMuXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRTbGlkZXJFdmVudHMoYmVoYXZpb3VyKSB7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIHN0YW5kYXJkIGRyYWcgZXZlbnQgdG8gdGhlIGhhbmRsZXMuXG4gICAgICAgICAgICBpZiAoIWJlaGF2aW91ci5maXhlZCkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBldmVudHMgYXJlIG9ubHkgYm91bmQgdG8gdGhlIHZpc3VhbCBoYW5kbGVcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudCwgbm90IHRoZSAncmVhbCcgb3JpZ2luIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGhhbmRsZS5jaGlsZHJlblswXSwgZXZlbnRTdGFydCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogW2luZGV4XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgdGFwIGV2ZW50IHRvIHRoZSBzbGlkZXIgYmFzZS5cbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIudGFwKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgc2NvcGVfQmFzZSwgZXZlbnRUYXAsIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpcmUgaG92ZXIgZXZlbnRzXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmhvdmVyKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5tb3ZlLCBzY29wZV9CYXNlLCBldmVudEhvdmVyLCB7XG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHRoZSByYW5nZSBkcmFnZ2FibGUuXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWcpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Db25uZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29ubmVjdCA9PT0gZmFsc2UgfHwgaW5kZXggPT09IDAgfHwgaW5kZXggPT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQmVmb3JlID0gc2NvcGVfSGFuZGxlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQWZ0ZXIgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50SG9sZGVycyA9IFtjb25uZWN0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXNUb0RyYWcgPSBbaGFuZGxlQmVmb3JlLCBoYW5kbGVBZnRlcl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXJzVG9EcmFnID0gW2luZGV4IC0gMSwgaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhjb25uZWN0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgcmFuZ2UgaXMgZml4ZWQsIHRoZSBlbnRpcmUgcmFuZ2UgY2FuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlIGRyYWdnZWQgYnkgdGhlIGhhbmRsZXMuIFRoZSBoYW5kbGUgaW4gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yaWdpbiB3aWxsIHByb3BhZ2F0ZSB0aGUgc3RhcnQgZXZlbnQgdXB3YXJkLFxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgaXQgbmVlZHMgdG8gYmUgYm91bmQgbWFudWFsbHkgb24gdGhlIG90aGVyLlxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVCZWZvcmUuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQWZ0ZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZ0FsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlc1RvRHJhZyA9IHNjb3BlX0hhbmRsZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzVG9EcmFnID0gc2NvcGVfSGFuZGxlTnVtYmVycztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGV2ZW50SG9sZGVyLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogaGFuZGxlc1RvRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBoYW5kbGVOdW1iZXJzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggYW4gZXZlbnQgdG8gdGhpcyBzbGlkZXIsIHBvc3NpYmx5IGluY2x1ZGluZyBhIG5hbWVzcGFjZVxuICAgICAgICBmdW5jdGlvbiBiaW5kRXZlbnQobmFtZXNwYWNlZEV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gPSBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XSB8fCBbXTtcbiAgICAgICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGV2ZW50IGJvdW5kIGlzICd1cGRhdGUsJyBmaXJlIGl0IGltbWVkaWF0ZWx5IGZvciBhbGwgaGFuZGxlcy5cbiAgICAgICAgICAgIGlmIChuYW1lc3BhY2VkRXZlbnQuc3BsaXQoXCIuXCIpWzBdID09PSBcInVwZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzSW50ZXJuYWxOYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZXNwYWNlID09PSBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhIHx8IG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5kbyBhdHRhY2htZW50IG9mIGV2ZW50XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5hbWVzcGFjZWRFdmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmFtZXNwYWNlZEV2ZW50ICYmIG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlID0gZXZlbnQgPyBuYW1lc3BhY2VkRXZlbnQuc3Vic3RyaW5nKGV2ZW50Lmxlbmd0aCkgOiBuYW1lc3BhY2VkRXZlbnQ7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGJpbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdEV2ZW50ID0gYmluZC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICAgICAgdmFyIHROYW1lc3BhY2UgPSBiaW5kLnN1YnN0cmluZyh0RXZlbnQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAoKCFldmVudCB8fCBldmVudCA9PT0gdEV2ZW50KSAmJiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgZGVsZXRlIHByb3RlY3RlZCBpbnRlcm5hbCBldmVudCBpZiBpbnRlbnRpb25hbFxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW50ZXJuYWxOYW1lc3BhY2UodE5hbWVzcGFjZSkgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2NvcGVfRXZlbnRzW2JpbmRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXh0ZXJuYWwgZXZlbnQgaGFuZGxpbmdcbiAgICAgICAgZnVuY3Rpb24gZmlyZUV2ZW50KGV2ZW50TmFtZSwgaGFuZGxlTnVtYmVyLCB0YXApIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRUeXBlID0gdGFyZ2V0RXZlbnQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBzbGlkZXIgcHVibGljIEFQSSBhcyB0aGUgc2NvcGUgKCd0aGlzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIHZhbHVlcyBhcyBhcnJheSwgc28gYXJnXzFbYXJnXzJdIGlzIGFsd2F5cyB2YWxpZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBpbmRleCwgMCBvciAxXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW4tZm9ybWF0dGVkIHNsaWRlciB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV2ZW50IGlzIGZpcmVkIGJ5IHRhcCwgdHJ1ZSBvciBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFwIHx8IGZhbHNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExlZnQgb2Zmc2V0IG9mIHRoZSBoYW5kbGUsIGluIHJlbGF0aW9uIHRvIHRoZSBzbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgdG8gYW4gYWNjZXNzaWJsZSBwYXJhbWV0ZXIgd2hlbiB0aGlzIGlzIHVuYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3BsaXQgb3V0IHRoZSBoYW5kbGUgcG9zaXRpb25pbmcgbG9naWMgc28gdGhlIE1vdmUgZXZlbnQgY2FuIHVzZSBpdCwgdG9vXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrSGFuZGxlUG9zaXRpb24ocmVmZXJlbmNlLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBnZXRWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlO1xuICAgICAgICAgICAgLy8gRm9yIHNsaWRlcnMgd2l0aCBtdWx0aXBsZSBoYW5kbGVzLCBsaW1pdCBtb3ZlbWVudCB0byB0aGUgb3RoZXIgaGFuZGxlLlxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIG1hcmdpbiBvcHRpb24gYnkgYWRkaW5nIGl0IHRvIHRoZSBoYW5kbGUgcG9zaXRpb25zLlxuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiAhb3B0aW9ucy5ldmVudHMudW5jb25zdHJhaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChsb29rQmFja3dhcmQgJiYgaGFuZGxlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLm1hcmdpbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb29rRm9yd2FyZCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgKyAxXSwgb3B0aW9ucy5tYXJnaW4sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIGxpbWl0IG9wdGlvbiBoYXMgdGhlIG9wcG9zaXRlIGVmZmVjdCwgbGltaXRpbmcgaGFuZGxlcyB0byBhXG4gICAgICAgICAgICAvLyBtYXhpbXVtIGRpc3RhbmNlIGZyb20gYW5vdGhlci4gTGltaXQgbXVzdCBiZSA+IDAsIGFzIG90aGVyd2lzZVxuICAgICAgICAgICAgLy8gaGFuZGxlcyB3b3VsZCBiZSB1bm1vdmFibGUuXG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxICYmIG9wdGlvbnMubGltaXQpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5saW1pdCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb29rRm9yd2FyZCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgKyAxXSwgb3B0aW9ucy5saW1pdCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgcGFkZGluZyBvcHRpb24ga2VlcHMgdGhlIGhhbmRsZXMgYSBjZXJ0YWluIGRpc3RhbmNlIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBlZGdlcyBvZiB0aGUgc2xpZGVyLiBQYWRkaW5nIG11c3QgYmUgPiAwLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGFkZGluZykge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDAsIG9wdGlvbnMucGFkZGluZ1swXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UoMTAwLCBvcHRpb25zLnBhZGRpbmdbMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHRvKTtcbiAgICAgICAgICAgIC8vIExpbWl0IHBlcmNlbnRhZ2UgdG8gdGhlIDAgLSAxMDAgcmFuZ2VcbiAgICAgICAgICAgIHRvID0gbGltaXQodG8pO1xuICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIGhhbmRsZSBjYW4ndCBtb3ZlXG4gICAgICAgICAgICBpZiAodG8gPT09IHJlZmVyZW5jZVtoYW5kbGVOdW1iZXJdICYmICFnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgICAgICAvLyBVc2VzIHNsaWRlciBvcmllbnRhdGlvbiB0byBjcmVhdGUgQ1NTIHJ1bGVzLiBhID0gYmFzZSB2YWx1ZTtcbiAgICAgICAgZnVuY3Rpb24gaW5SdWxlT3JkZXIodiwgYSkge1xuICAgICAgICAgICAgdmFyIG8gPSBvcHRpb25zLm9ydDtcbiAgICAgICAgICAgIHJldHVybiAobyA/IGEgOiB2KSArIFwiLCBcIiArIChvID8gdiA6IGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmVzIGhhbmRsZShzKSBieSBhIHBlcmNlbnRhZ2VcbiAgICAgICAgLy8gKGJvb2wsICUgdG8gbW92ZSwgWyUgd2hlcmUgaGFuZGxlIHN0YXJ0ZWQsIC4uLl0sIFtpbmRleCBpbiBzY29wZV9IYW5kbGVzLCAuLi5dKVxuICAgICAgICBmdW5jdGlvbiBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBsb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMsIGNvbm5lY3QpIHtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbHMgPSBsb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIFN0b3JlIGZpcnN0IGhhbmRsZSBub3csIHNvIHdlIHN0aWxsIGhhdmUgaXQgaW4gY2FzZSBoYW5kbGVOdW1iZXJzIGlzIHJldmVyc2VkXG4gICAgICAgICAgICB2YXIgZmlyc3RIYW5kbGUgPSBoYW5kbGVOdW1iZXJzWzBdO1xuICAgICAgICAgICAgdmFyIGIgPSBbIXVwd2FyZCwgdXB3YXJkXTtcbiAgICAgICAgICAgIHZhciBmID0gW3Vwd2FyZCwgIXVwd2FyZF07XG4gICAgICAgICAgICAvLyBDb3B5IGhhbmRsZU51bWJlcnMgc28gd2UgZG9uJ3QgY2hhbmdlIHRoZSBkYXRhc2V0XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzID0gaGFuZGxlTnVtYmVycy5zbGljZSgpO1xuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIHdoaWNoIGhhbmRsZSBpcyAnbGVhZGluZycuXG4gICAgICAgICAgICAvLyBJZiB0aGF0IG9uZSBjYW4ndCBtb3ZlIHRoZSBzZWNvbmQgY2FuJ3QgZWl0aGVyLlxuICAgICAgICAgICAgaWYgKHVwd2FyZCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RlcCAxOiBnZXQgdGhlIG1heGltdW0gcGVyY2VudGFnZSB0aGF0IGFueSBvZiB0aGUgaGFuZGxlcyBjYW4gbW92ZVxuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyLCBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0byA9IGNoZWNrSGFuZGxlUG9zaXRpb24ocHJvcG9zYWxzLCBoYW5kbGVOdW1iZXIsIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdICsgcHJvcG9zYWwsIGJbb10sIGZbb10sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBpZiBvbmUgb2YgdGhlIGhhbmRsZXMgY2FuJ3QgbW92ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSB0byAtIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gPSB0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXNpbmcgb25lIGhhbmRsZSwgY2hlY2sgYmFja3dhcmQgQU5EIGZvcndhcmRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGIgPSBmID0gW3RydWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBTdGVwIDI6IFRyeSB0byBzZXQgdGhlIGhhbmRsZXMgd2l0aCB0aGUgZm91bmQgcGVyY2VudGFnZVxuICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIGxvY2F0aW9uc1toYW5kbGVOdW1iZXJdICsgcHJvcG9zYWwsIGJbb10sIGZbb10pIHx8IHN0YXRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTdGVwIDM6IElmIGEgaGFuZGxlIG1vdmVkLCBmaXJlIGV2ZW50c1xuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgY29ubmVjdCwgdGhlbiBmaXJlIGRyYWcgZXZlbnRcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiZHJhZ1wiLCBmaXJzdEhhbmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRha2VzIGEgYmFzZSB2YWx1ZSBhbmQgYW4gb2Zmc2V0LiBUaGlzIG9mZnNldCBpcyB1c2VkIGZvciB0aGUgY29ubmVjdCBiYXIgc2l6ZS5cbiAgICAgICAgLy8gSW4gdGhlIGluaXRpYWwgZGVzaWduIGZvciB0aGlzIGZlYXR1cmUsIHRoZSBvcmlnaW4gZWxlbWVudCB3YXMgMSUgd2lkZS5cbiAgICAgICAgLy8gVW5mb3J0dW5hdGVseSwgYSByb3VuZGluZyBidWcgaW4gQ2hyb21lIG1ha2VzIGl0IGltcG9zc2libGUgdG8gaW1wbGVtZW50IHRoaXMgZmVhdHVyZVxuICAgICAgICAvLyBpbiB0aGlzIG1hbm5lcjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Nzk4MjIzXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zZm9ybURpcmVjdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBhIC0gYiA6IGE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlcyBzY29wZV9Mb2NhdGlvbnMgYW5kIHNjb3BlX1ZhbHVlcywgdXBkYXRlcyB2aXN1YWwgc3RhdGVcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlSGFuZGxlUG9zaXRpb24oaGFuZGxlTnVtYmVyLCB0bykge1xuICAgICAgICAgICAgLy8gVXBkYXRlIGxvY2F0aW9ucy5cbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID0gdG87XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSB2YWx1ZSB0byB0aGUgc2xpZGVyIHN0ZXBwaW5nL3JhbmdlLlxuICAgICAgICAgICAgc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl0gPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0aW9uID0gdHJhbnNmb3JtRGlyZWN0aW9uKHRvLCAwKSAtIHNjb3BlX0Rpck9mZnNldDtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVSdWxlID0gXCJ0cmFuc2xhdGUoXCIgKyBpblJ1bGVPcmRlcih0cmFuc2xhdGlvbiArIFwiJVwiLCBcIjBcIikgKyBcIilcIjtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zdHlsZVtvcHRpb25zLnRyYW5zZm9ybVJ1bGVdID0gdHJhbnNsYXRlUnVsZTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlcyBiZWZvcmUgdGhlIHNsaWRlciBtaWRkbGUgYXJlIHN0YWNrZWQgbGF0ZXIgPSBoaWdoZXIsXG4gICAgICAgIC8vIEhhbmRsZXMgYWZ0ZXIgdGhlIG1pZGRsZSBsYXRlciBpcyBsb3dlclxuICAgICAgICAvLyBbWzddIFs4XSAuLi4uLi4uLi4uIHwgLi4uLi4uLi4uLiBbNV0gWzRdXG4gICAgICAgIGZ1bmN0aW9uIHNldFppbmRleCgpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpciA9IHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID4gNTAgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgdmFyIHpJbmRleCA9IDMgKyAoc2NvcGVfSGFuZGxlcy5sZW5ndGggKyBkaXIgKiBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zdHlsZS56SW5kZXggPSBTdHJpbmcoekluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRlc3Qgc3VnZ2VzdGVkIHZhbHVlcyBhbmQgYXBwbHkgbWFyZ2luLCBzdGVwLlxuICAgICAgICAvLyBpZiBleGFjdElucHV0IGlzIHRydWUsIGRvbid0IHJ1biBjaGVja0hhbmRsZVBvc2l0aW9uLCB0aGVuIHRoZSBoYW5kbGUgY2FuIGJlIHBsYWNlZCBpbiBiZXR3ZWVuIHN0ZXBzICgjNDM2KVxuICAgICAgICBmdW5jdGlvbiBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgaWYgKCFleGFjdElucHV0KSB7XG4gICAgICAgICAgICAgICAgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZUhhbmRsZVBvc2l0aW9uKGhhbmRsZU51bWJlciwgdG8pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlcyBzdHlsZSBhdHRyaWJ1dGUgZm9yIGNvbm5lY3Qgbm9kZXNcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdChpbmRleCkge1xuICAgICAgICAgICAgLy8gU2tpcCBjb25uZWN0cyBzZXQgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmICghc2NvcGVfQ29ubmVjdHNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGwgPSAwO1xuICAgICAgICAgICAgdmFyIGggPSAxMDA7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICBsID0gc2NvcGVfTG9jYXRpb25zW2luZGV4IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBoID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIHVzZSB0d28gcnVsZXM6XG4gICAgICAgICAgICAvLyAndHJhbnNsYXRlJyB0byBjaGFuZ2UgdGhlIGxlZnQvdG9wIG9mZnNldDtcbiAgICAgICAgICAgIC8vICdzY2FsZScgdG8gY2hhbmdlIHRoZSB3aWR0aCBvZiB0aGUgZWxlbWVudDtcbiAgICAgICAgICAgIC8vIEFzIHRoZSBlbGVtZW50IGhhcyBhIHdpZHRoIG9mIDEwMCUsIGEgdHJhbnNsYXRpb24gb2YgMTAwJSBpcyBlcXVhbCB0byAxMDAlIG9mIHRoZSBwYXJlbnQgKC5ub1VpLWJhc2UpXG4gICAgICAgICAgICB2YXIgY29ubmVjdFdpZHRoID0gaCAtIGw7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNmb3JtRGlyZWN0aW9uKGwsIGNvbm5lY3RXaWR0aCkgKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgICAgICB2YXIgc2NhbGVSdWxlID0gXCJzY2FsZShcIiArIGluUnVsZU9yZGVyKGNvbm5lY3RXaWR0aCAvIDEwMCwgXCIxXCIpICsgXCIpXCI7XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0c1tpbmRleF0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlUnVsZSArIFwiIFwiICsgc2NhbGVSdWxlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFBhcnNlcyB2YWx1ZSBwYXNzZWQgdG8gLnNldCBtZXRob2QuIFJldHVybnMgY3VycmVudCB2YWx1ZSBpZiBub3QgcGFyc2UtYWJsZS5cbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZVRvVmFsdWUodG8sIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgLy8gU2V0dGluZyB3aXRoIG51bGwgaW5kaWNhdGVzIGFuICdpZ25vcmUnLlxuICAgICAgICAgICAgLy8gSW5wdXR0aW5nICdmYWxzZScgaXMgaW52YWxpZC5cbiAgICAgICAgICAgIGlmICh0byA9PT0gbnVsbCB8fCB0byA9PT0gZmFsc2UgfHwgdG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGEgZm9ybWF0dGVkIG51bWJlciB3YXMgcGFzc2VkLCBhdHRlbXB0IHRvIGRlY29kZSBpdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB0byA9IFN0cmluZyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byA9IG9wdGlvbnMuZm9ybWF0LmZyb20odG8pO1xuICAgICAgICAgICAgaWYgKHRvICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBwYXJzaW5nIHRoZSBudW1iZXIgZmFpbGVkLCB1c2UgdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlIHx8IGlzTmFOKHRvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXQoaW5wdXQsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGFzQXJyYXkoaW5wdXQpO1xuICAgICAgICAgICAgdmFyIGlzSW5pdCA9IHNjb3BlX0xvY2F0aW9uc1swXSA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgLy8gRXZlbnQgZmlyZXMgYnkgZGVmYXVsdFxuICAgICAgICAgICAgZmlyZVNldEV2ZW50ID0gZmlyZVNldEV2ZW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmlyZVNldEV2ZW50O1xuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGlzIG9wdGlvbmFsLlxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbml0aWFsIHZhbHVlcyB3ZXJlIHNldCBiZWZvcmUgdXNpbmcgYW5pbWF0ZWQgcGxhY2VtZW50LlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZSAmJiAhaXNJbml0KSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpcnN0IHBhc3MsIHdpdGhvdXQgbG9va0FoZWFkIGJ1dCB3aXRoIGxvb2tCYWNrd2FyZC4gVmFsdWVzIGFyZSBzZXQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZXNbaGFuZGxlTnVtYmVyXSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgZmFsc2UsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgaSA9IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID09PSAxID8gMCA6IDE7XG4gICAgICAgICAgICAvLyBTcHJlYWQgaGFuZGxlcyBldmVubHkgYWNyb3NzIHRoZSBzbGlkZXIgaWYgdGhlIHJhbmdlIGhhcyBubyBzaXplIChtaW49bWF4KVxuICAgICAgICAgICAgaWYgKGlzSW5pdCAmJiBzY29wZV9TcGVjdHJ1bS5oYXNOb1NpemUoKSkge1xuICAgICAgICAgICAgICAgIGV4YWN0SW5wdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1swXSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BhY2VfMSA9IDEwMCAvIChzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSBoYW5kbGVOdW1iZXIgKiBzcGFjZV8xO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZWNvbmRhcnkgcGFzc2VzLiBOb3cgdGhhdCBhbGwgYmFzZSB2YWx1ZXMgYXJlIHNldCwgYXBwbHkgY29uc3RyYWludHMuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIGFsbCBoYW5kbGVzIHRvIGVuc3VyZSBjb25zdHJhaW50cyBhcmUgYXBwbGllZCBmb3IgdGhlIGVudGlyZSBzbGlkZXIgKElzc3VlICMxMDA5KVxuICAgICAgICAgICAgZm9yICg7IGkgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIC8vIEZpcmUgdGhlIGV2ZW50IG9ubHkgZm9yIGhhbmRsZXMgdGhhdCByZWNlaXZlZCBhIG5ldyB2YWx1ZSwgYXMgcGVyICM1NzlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2hhbmRsZU51bWJlcl0gIT09IG51bGwgJiYgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHNsaWRlciB0byBpbml0aWFsIHZhbHVlc1xuICAgICAgICBmdW5jdGlvbiB2YWx1ZVJlc2V0KGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCwgZmlyZVNldEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdmFsdWUgZm9yIGEgc2luZ2xlIGhhbmRsZVxuICAgICAgICBmdW5jdGlvbiB2YWx1ZVNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHZhbHVlLCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBudW1lcmljIGlucHV0XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBOdW1iZXIoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGlmICghKGhhbmRsZU51bWJlciA+PSAwICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGludmFsaWQgaGFuZGxlIG51bWJlciwgZ290OiBcIiArIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29rIGJvdGggYmFja3dhcmQgYW5kIGZvcndhcmQsIHNpbmNlIHdlIGRvbid0IHdhbnQgdGhpcyBoYW5kbGUgdG8gXCJwdXNoXCIgb3RoZXIgaGFuZGxlcyAoIzk2MCk7XG4gICAgICAgICAgICAvLyBUaGUgZXhhY3RJbnB1dCBhcmd1bWVudCBjYW4gYmUgdXNlZCB0byBpZ25vcmUgc2xpZGVyIHN0ZXBwaW5nICgjNDM2KVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWUsIGhhbmRsZU51bWJlciksIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBpZiAoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlR2V0KHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgaWYgKHVuZW5jb2RlZCA9PT0gdm9pZCAwKSB7IHVuZW5jb2RlZCA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAodW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGEgY29weSBvZiB0aGUgcmF3IHZhbHVlc1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9WYWx1ZXMubGVuZ3RoID09PSAxID8gc2NvcGVfVmFsdWVzWzBdIDogc2NvcGVfVmFsdWVzLnNsaWNlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pO1xuICAgICAgICAgICAgLy8gSWYgb25seSBvbmUgaGFuZGxlIGlzIHVzZWQsIHJldHVybiBhIHNpbmdsZSB2YWx1ZS5cbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlcyBjbGFzc2VzIGZyb20gdGhlIHJvb3QgYW5kIGVtcHRpZXMgaXQuXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgcHJvdGVjdGVkIGludGVybmFsIGxpc3RlbmVyc1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgICAgICByZW1vdmVFdmVudChJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmNzc0NsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aGlsZSAoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9UYXJnZXQucmVtb3ZlQ2hpbGQoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIHNjb3BlX1RhcmdldC5ub1VpU2xpZGVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgdmFyIG5lYXJieVN0ZXBzID0gc2NvcGVfU3BlY3RydW0uZ2V0TmVhcmJ5U3RlcHMobG9jYXRpb24pO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB2YXIgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RlcDtcbiAgICAgICAgICAgIHZhciBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgLy8gSWYgc25hcHBlZCwgZGlyZWN0bHkgdXNlIGRlZmluZWQgc3RlcCB2YWx1ZVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc25hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGFydFZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlIC0gdmFsdWUgfHwgbnVsbFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgbmV4dCB2YWx1ZSBpbiB0aGlzIHN0ZXAgbW92ZXMgaW50byB0aGUgbmV4dCBzdGVwLFxuICAgICAgICAgICAgLy8gdGhlIGluY3JlbWVudCBpcyB0aGUgc3RhcnQgb2YgdGhlIG5leHQgc3RlcCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSArIGluY3JlbWVudCA+IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlIC0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGJleW9uZCB0aGUgc3RhcnRpbmcgcG9pbnRcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYSBoYW5kbGUgaXMgYXQgdGhlIHN0YXJ0IG9mIGEgc3RlcCwgaXQgYWx3YXlzIHN0ZXBzIGJhY2sgaW50byB0aGUgcHJldmlvdXMgc3RlcCBmaXJzdFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gdmFsdWUgLSBuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLmhpZ2hlc3RTdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm93LCBpZiBhdCB0aGUgc2xpZGVyIGVkZ2VzLCB0aGVyZSBpcyBubyBpbi9kZWNyZW1lbnRcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PT0gMTAwKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxvY2F0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFzIHBlciAjMzkxLCB0aGUgY29tcGFyaXNvbiBmb3IgdGhlIGRlY3JlbWVudCBzdGVwIGNhbiBoYXZlIHNvbWUgcm91bmRpbmcgaXNzdWVzLlxuICAgICAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHNjb3BlX1NwZWN0cnVtLmNvdW50U3RlcERlY2ltYWxzKCk7XG4gICAgICAgICAgICAvLyBSb3VuZCBwZXIgIzM5MVxuICAgICAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gbnVsbCAmJiBpbmNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gTnVtYmVyKGluY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlY3JlbWVudCAhPT0gbnVsbCAmJiBkZWNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gTnVtYmVyKGRlY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtkZWNyZW1lbnQsIGluY3JlbWVudF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgc2l6ZSBmb3IgdGhlIHNsaWRlci5cbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZU51bWJlcnMubWFwKGdldE5leHRTdGVwc0ZvckhhbmRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRhYmxlOiBtYXJnaW4sIGxpbWl0LCBwYWRkaW5nLCBzdGVwLCByYW5nZSwgYW5pbWF0ZSwgc25hcFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdGlvbnNUb1VwZGF0ZSwgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAvLyBTcGVjdHJ1bSBpcyBjcmVhdGVkIHVzaW5nIHRoZSByYW5nZSwgc25hcCwgZGlyZWN0aW9uIGFuZCBzdGVwIG9wdGlvbnMuXG4gICAgICAgICAgICAvLyAnc25hcCcgYW5kICdzdGVwJyBjYW4gYmUgdXBkYXRlZC5cbiAgICAgICAgICAgIC8vIElmICdzbmFwJyBhbmQgJ3N0ZXAnIGFyZSBub3QgcGFzc2VkLCB0aGV5IHNob3VsZCByZW1haW4gdW5jaGFuZ2VkLlxuICAgICAgICAgICAgdmFyIHYgPSB2YWx1ZUdldCgpO1xuICAgICAgICAgICAgdmFyIHVwZGF0ZUFibGUgPSBbXG4gICAgICAgICAgICAgICAgXCJtYXJnaW5cIixcbiAgICAgICAgICAgICAgICBcImxpbWl0XCIsXG4gICAgICAgICAgICAgICAgXCJwYWRkaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyYW5nZVwiLFxuICAgICAgICAgICAgICAgIFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwic25hcFwiLFxuICAgICAgICAgICAgICAgIFwic3RlcFwiLFxuICAgICAgICAgICAgICAgIFwiZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgXCJwaXBzXCIsXG4gICAgICAgICAgICAgICAgXCJ0b29sdGlwc1wiXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gT25seSBjaGFuZ2Ugb3B0aW9ucyB0aGF0IHdlJ3JlIGFjdHVhbGx5IHBhc3NlZCB0byB1cGRhdGUuXG4gICAgICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5kZWZpbmVkLiBudWxsIHJlbW92ZXMgdGhlIHZhbHVlLlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE9wdGlvbnNbbmFtZV0gPSBvcHRpb25zVG9VcGRhdGVbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IHRlc3RPcHRpb25zKG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgICAgICAvLyBMb2FkIG5ldyBvcHRpb25zIGludG8gdGhlIHNsaWRlciBzdGF0ZVxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBuZXdPcHRpb25zW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NvcGVfU3BlY3RydW0gPSBuZXdPcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICAgICAgLy8gTGltaXQsIG1hcmdpbiBhbmQgcGFkZGluZyBkZXBlbmQgb24gdGhlIHNwZWN0cnVtIGJ1dCBhcmUgc3RvcmVkIG91dHNpZGUgb2YgaXQuICgjNjc3KVxuICAgICAgICAgICAgb3B0aW9ucy5tYXJnaW4gPSBuZXdPcHRpb25zLm1hcmdpbjtcbiAgICAgICAgICAgIG9wdGlvbnMubGltaXQgPSBuZXdPcHRpb25zLmxpbWl0O1xuICAgICAgICAgICAgb3B0aW9ucy5wYWRkaW5nID0gbmV3T3B0aW9ucy5wYWRkaW5nO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHBpcHMsIHJlbW92ZXMgZXhpc3RpbmcuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRvb2x0aXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEludmFsaWRhdGUgdGhlIGN1cnJlbnQgcG9zaXRpb25pbmcgc28gdmFsdWVTZXQgZm9yY2VzIGFuIHVwZGF0ZS5cbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFsdWVTZXQoaXNTZXQob3B0aW9uc1RvVXBkYXRlLnN0YXJ0KSA/IG9wdGlvbnNUb1VwZGF0ZS5zdGFydCA6IHYsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gc3RlcHNcbiAgICAgICAgZnVuY3Rpb24gc2V0dXBTbGlkZXIoKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJhc2UgZWxlbWVudCwgaW5pdGlhbGl6ZSBIVE1MIGFuZCBzZXQgY2xhc3Nlcy5cbiAgICAgICAgICAgIC8vIEFkZCBoYW5kbGVzIGFuZCBjb25uZWN0IGVsZW1lbnRzLlxuICAgICAgICAgICAgc2NvcGVfQmFzZSA9IGFkZFNsaWRlcihzY29wZV9UYXJnZXQpO1xuICAgICAgICAgICAgYWRkRWxlbWVudHMob3B0aW9ucy5jb25uZWN0LCBzY29wZV9CYXNlKTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB1c2VyIGV2ZW50cy5cbiAgICAgICAgICAgIGJpbmRTbGlkZXJFdmVudHMob3B0aW9ucy5ldmVudHMpO1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBwdWJsaWMgdmFsdWUgbWV0aG9kIHRvIHNldCB0aGUgc3RhcnQgdmFsdWVzLlxuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJpYSgpO1xuICAgICAgICB9XG4gICAgICAgIHNldHVwU2xpZGVyKCk7XG4gICAgICAgIHZhciBzY29wZV9TZWxmID0ge1xuICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgICAgICAgIHN0ZXBzOiBnZXROZXh0U3RlcHMsXG4gICAgICAgICAgICBvbjogYmluZEV2ZW50LFxuICAgICAgICAgICAgb2ZmOiByZW1vdmVFdmVudCxcbiAgICAgICAgICAgIGdldDogdmFsdWVHZXQsXG4gICAgICAgICAgICBzZXQ6IHZhbHVlU2V0LFxuICAgICAgICAgICAgc2V0SGFuZGxlOiB2YWx1ZVNldEhhbmRsZSxcbiAgICAgICAgICAgIHJlc2V0OiB2YWx1ZVJlc2V0LFxuICAgICAgICAgICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgX19tb3ZlSGFuZGxlczogZnVuY3Rpb24gKHVwd2FyZCwgcHJvcG9zYWwsIGhhbmRsZU51bWJlcnMpIHtcbiAgICAgICAgICAgICAgICBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBzY29wZV9Mb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9yaWdpbmFsT3B0aW9ucyxcbiAgICAgICAgICAgIHVwZGF0ZU9wdGlvbnM6IHVwZGF0ZU9wdGlvbnMsXG4gICAgICAgICAgICB0YXJnZXQ6IHNjb3BlX1RhcmdldCxcbiAgICAgICAgICAgIHJlbW92ZVBpcHM6IHJlbW92ZVBpcHMsXG4gICAgICAgICAgICByZW1vdmVUb29sdGlwczogcmVtb3ZlVG9vbHRpcHMsXG4gICAgICAgICAgICBnZXRQb3NpdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VG9vbHRpcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T3JpZ2luczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpcHM6IHBpcHMgLy8gSXNzdWUgIzU5NFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2NvcGVfU2VsZjtcbiAgICB9XG4gICAgLy8gUnVuIHRoZSBzdGFuZGFyZCBpbml0aWFsaXplclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUodGFyZ2V0LCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5ub2RlTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogY3JlYXRlIHJlcXVpcmVzIGEgc2luZ2xlIGVsZW1lbnQsIGdvdDogXCIgKyB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBzbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gICAgICAgIGlmICh0YXJnZXQubm9VaVNsaWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogU2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXN0IHRoZSBvcHRpb25zIGFuZCBjcmVhdGUgdGhlIHNsaWRlciBlbnZpcm9ubWVudDtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICB2YXIgYXBpID0gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICB0YXJnZXQubm9VaVNsaWRlciA9IGFwaTtcbiAgICAgICAgcmV0dXJuIGFwaTtcbiAgICB9XG4gICAgdmFyIG5vdWlzbGlkZXIgPSB7XG4gICAgICAgIC8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZywgZG9uJ3QgdXNlIHRoaXMgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgX19zcGVjdHJ1bTogU3BlY3RydW0sXG4gICAgICAgIC8vIEEgcmVmZXJlbmNlIHRvIHRoZSBkZWZhdWx0IGNsYXNzZXMsIGFsbG93cyBnbG9iYWwgY2hhbmdlcy5cbiAgICAgICAgLy8gVXNlIHRoZSBjc3NDbGFzc2VzIG9wdGlvbiBmb3IgY2hhbmdlcyB0byBvbmUgc2xpZGVyLlxuICAgICAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgICAgICBjcmVhdGU6IGluaXRpYWxpemVcbiAgICB9O1xuXG4gICAgZXhwb3J0cy5jcmVhdGUgPSBpbml0aWFsaXplO1xuICAgIGV4cG9ydHMuY3NzQ2xhc3NlcyA9IGNzc0NsYXNzZXM7XG4gICAgZXhwb3J0c1snZGVmYXVsdCddID0gbm91aXNsaWRlcjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkZvb3RlciA9IHZvaWQgMDtcclxuY29uc3QgY29tcG9uZW50c18xID0gcmVxdWlyZShcIi4uLy4uL3RlbXBsYXRlcy9jb21wb25lbnRzXCIpO1xyXG5yZXF1aXJlKFwiLi9mb290ZXIuY3NzXCIpO1xyXG5jb25zdCBMaW5rcyA9IFtcclxuICAgIHtcclxuICAgICAgICBjbGFzc05hbWU6ICdhdXRob3InLFxyXG4gICAgICAgIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vVmlrdG9yRWxlbmljaCcsXHJcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcclxuICAgICAgICB0ZXh0OiAnwqkgMjAyMSBWaWt0b3IgRWxlbmljaCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiAnbG9nby1yc3MnLFxyXG4gICAgICAgIGhyZWY6ICdodHRwczovL3JzLnNjaG9vbC9qcy8nLFxyXG4gICAgICAgIHRhcmdldDogJ19ibGFuaycsXHJcbiAgICAgICAgdGV4dDogJydcclxuICAgIH1cclxuXTtcclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgY29tcG9uZW50c18xLkNvbXBvbmVudHMge1xyXG4gICAgY29uc3RydWN0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZCkge1xyXG4gICAgICAgIHN1cGVyKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWQpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQXV0aG9yRGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZvb3RlcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXdyYXBwZXInKTtcclxuICAgICAgICBMaW5rcy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgYUhUTUwuaW5uZXJUZXh0ID0gZWxlbS50ZXh0O1xyXG4gICAgICAgICAgICBhSFRNTC5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgYUhUTUwuaHJlZiA9IGVsZW0uaHJlZjtcclxuICAgICAgICAgICAgYUhUTUwudGFyZ2V0ID0gZWxlbS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGZvb3RlcldyYXBwZXIuYXBwZW5kKGFIVE1MKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoZm9vdGVyV3JhcHBlcik7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJBdXRob3JEZXNjcmlwdGlvbigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZvb3RlciA9IEZvb3RlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5IZWFkZXIgPSB2b2lkIDA7XHJcbnJlcXVpcmUoXCIuL2hlYWRlci5jc3NcIik7XHJcbmNvbnN0IGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi90ZW1wbGF0ZXMvY29tcG9uZW50c1wiKTtcclxuY29uc3QgQnV0dG9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogXCJtYWluLXBhZ2VcIixcclxuICAgICAgICB0ZXh0OiAnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwidG95cy1wYWdlXCIsXHJcbiAgICAgICAgdGV4dDogJ9C40LPRgNGD0YjQutC4JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiZ2FtZS1wYWdlXCIsXHJcbiAgICAgICAgdGV4dDogJ9GR0LvQutCwJyxcclxuICAgIH1cclxuXTtcclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgY29tcG9uZW50c18xLkNvbXBvbmVudHMge1xyXG4gICAgY29uc3RydWN0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZCkge1xyXG4gICAgICAgIHN1cGVyKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWQpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyUGFnZUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwYWdlQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEFuZEZhdm9yaXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dFNlYXJjaC5jbGFzc0xpc3QuYWRkKCdpbnB1dF9zZWFyY2gnKTtcclxuICAgICAgICBpbnB1dFNlYXJjaC50eXBlID0gJ3NlYXJjaCc7XHJcbiAgICAgICAgaW5wdXRTZWFyY2gubmFtZSA9ICdzZWFyY2gnO1xyXG4gICAgICAgIGlucHV0U2VhcmNoLnBsYWNlaG9sZGVyID0gJ9Cf0L7QuNGB0LonO1xyXG4gICAgICAgIGlucHV0U2VhcmNoLmlkID0gJ3NlYXJjaCc7XHJcbiAgICAgICAgaW5wdXRTZWFyY2guYXV0b2NvbXBsZXRlID0gJ29mZic7XHJcbiAgICAgICAgY29uc3QgZmF2b3JpdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZmF2b3JpdGVzLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlcycpO1xyXG4gICAgICAgIGZhdm9yaXRlcy5pbm5lckhUTUwgPSBgPHNwYW4+PC9zcGFuPmA7XHJcbiAgICAgICAgc2VhcmNoQW5kRmF2b3JpdGVzLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaF9mYXZvcml0ZXMnKTtcclxuICAgICAgICB3cmFwcGVySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcclxuICAgICAgICB3cmFwcGVySGVhZGVyLmFwcGVuZChwYWdlQnV0dG9ucyk7XHJcbiAgICAgICAgd3JhcHBlckhlYWRlci5hcHBlbmQoc2VhcmNoQW5kRmF2b3JpdGVzKTtcclxuICAgICAgICBzZWFyY2hBbmRGYXZvcml0ZXMuYXBwZW5kKGlucHV0U2VhcmNoKTtcclxuICAgICAgICBzZWFyY2hBbmRGYXZvcml0ZXMuYXBwZW5kKGZhdm9yaXRlcyk7XHJcbiAgICAgICAgQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkhUTUwuaHJlZiA9IGAjJHtidXR0b24uaWR9YDtcclxuICAgICAgICAgICAgYnV0dG9uSFRNTC5pbm5lckhUTUwgPSBidXR0b24udGV4dDtcclxuICAgICAgICAgICAgYnV0dG9uSFRNTC5jbGFzc0xpc3QuYWRkKCdsaW5rcycpO1xyXG4gICAgICAgICAgICBwYWdlQnV0dG9ucy5hcHBlbmQoYnV0dG9uSFRNTCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZ2FybGFuZE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBnYXJsYW5kTWFpbi5jbGFzc0xpc3QuYWRkKCdnYXJsYW5kXzQnKTtcclxuICAgICAgICBnYXJsYW5kTWFpbi5pZCA9ICdnYXJsYW5kJztcclxuICAgICAgICBnYXJsYW5kTWFpbi5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIm51bXNfMVwiPjE8L2Rpdj5gO1xyXG4gICAgICAgIHdyYXBwZXJIZWFkZXIuYXBwZW5kKGdhcmxhbmRNYWluKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQod3JhcHBlckhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBtYWluR2FybGFuZCgpIHtcclxuICAgICAgICBjb25zdCBudW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bXNfMScpLmlubmVySFRNTDtcclxuICAgICAgICBpZiAoTnVtYmVyKG51bXMpID09IDEpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhcmxhbmQnKS5jbGFzc05hbWUgPSAnZ2FybGFuZF8xJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bXNfMScpLmlubmVySFRNTCA9ICcyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE51bWJlcihudW1zKSA9PSAyKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYXJsYW5kJykuY2xhc3NOYW1lID0gJ2dhcmxhbmRfMic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW1zXzEnKS5pbm5lckhUTUwgPSAnMyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChOdW1iZXIobnVtcykgPT0gMykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FybGFuZCcpLmNsYXNzTmFtZSA9ICdnYXJsYW5kXzMnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtc18xJykuaW5uZXJIVE1MID0gJzQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTnVtYmVyKG51bXMpID09IDQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhcmxhbmQnKS5jbGFzc05hbWUgPSAnZ2FybGFuZF80JztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bXNfMScpLmlubmVySFRNTCA9ICcxJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQYWdlQnV0dG9ucygpO1xyXG4gICAgICAgIHNldEludGVydmFsKHRoaXMubWFpbkdhcmxhbmQsIDgwMCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSGVhZGVyID0gSGVhZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk1haW4gPSB2b2lkIDA7XHJcbmNvbnN0IGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi90ZW1wbGF0ZXMvY29tcG9uZW50c1wiKTtcclxuY2xhc3MgTWFpbiBleHRlbmRzIGNvbXBvbmVudHNfMS5Db21wb25lbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWQpIHtcclxuICAgICAgICBzdXBlcih0YWdOYW1lLCBjbGFzc05hbWUsIGlkKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NYWluID0gTWFpbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Db21wb25lbnRzID0gdm9pZCAwO1xyXG5jbGFzcyBDb21wb25lbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWQpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29tcG9uZW50cyA9IENvbXBvbmVudHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUGFnZSA9IHZvaWQgMDtcclxuY2xhc3MgUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcbiAgICB9XHJcbiAgICBhZnRlclJlbmRlcigpIHtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBhZ2UgPSBQYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIG51bTogJzEnLFxyXG4gICAgICAgIG5hbWU6ICfQkdC+0LvRjNGI0L7QuSDRiNCw0YAg0YEg0YDQuNGB0YPQvdC60L7QvCcsXHJcbiAgICAgICAgY291bnQ6ICcyJyxcclxuICAgICAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMicsXHJcbiAgICAgICAgbmFtZTogJ9CX0LXQu9GR0L3Ri9C5INGI0LDRgCDRgSDRhtCy0LXRgtCw0LzQuCcsXHJcbiAgICAgICAgY291bnQ6ICc1JyxcclxuICAgICAgICB5ZWFyOiAnMjAwMCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LfQtdC70ZHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICczJyxcclxuICAgICAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0LzQsNGC0L7QstGL0Lkg0YjQsNGAJyxcclxuICAgICAgICBjb3VudDogJzMnLFxyXG4gICAgICAgIHllYXI6ICcxOTkwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzQnLFxyXG4gICAgICAgIG5hbWU6ICfQodC+0YHRg9C70YzQutCwINC60YDQsNGB0L3QsNGPJyxcclxuICAgICAgICBjb3VudDogJzInLFxyXG4gICAgICAgIHllYXI6ICcxOTgwJyxcclxuICAgICAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNScsXHJcbiAgICAgICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INCy0LjQvdC+0LPRgNCw0LQnLFxyXG4gICAgICAgIGNvdW50OiAnNCcsXHJcbiAgICAgICAgeWVhcjogJzE5ODAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzYnLFxyXG4gICAgICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDRiNCw0YAg0YEg0YDQuNGB0YPQvdC60L7QvCcsXHJcbiAgICAgICAgY291bnQ6ICc2JyxcclxuICAgICAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc3JyxcclxuICAgICAgICBuYW1lOiAn0JzQvtC70L7Rh9C90L4t0LHQtdC70YvQuSDRiNCw0YAnLFxyXG4gICAgICAgIGNvdW50OiAnMTInLFxyXG4gICAgICAgIHllYXI6ICcxOTYwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgICAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc4JyxcclxuICAgICAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0YjQsNGAJyxcclxuICAgICAgICBjb3VudDogJzEwJyxcclxuICAgICAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc5JyxcclxuICAgICAgICBuYW1lOiAn0JrQvtC70L7QutC+0LvRjNGH0LjQuiDRgdGC0LDRgNC40L3QvdGL0LknLFxyXG4gICAgICAgIGNvdW50OiAnMicsXHJcbiAgICAgICAgeWVhcjogJzE5NTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0LrQvtC70L7QutC+0LvRjNGH0LjQuicsXHJcbiAgICAgICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMTAnLFxyXG4gICAgICAgIG5hbWU6ICfQkdC10LvRi9C5INGI0LDRgCDRgNC10YLRgNC+JyxcclxuICAgICAgICBjb3VudDogJzcnLFxyXG4gICAgICAgIHllYXI6ICcxOTYwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMTEnLFxyXG4gICAgICAgIG5hbWU6ICfQqNC40YjQutCwINC10LvQvtCy0LDRjyDQsdC10LvQsNGPJyxcclxuICAgICAgICBjb3VudDogJzExJyxcclxuICAgICAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNC40YjQutCwJyxcclxuICAgICAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgICAgIHNpemU6ICfQvNCw0LvRi9C5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzEyJyxcclxuICAgICAgICBuYW1lOiAn0JHQtdC70YvQuSDRiNCw0YAg0YEg0YbQstC10YLQsNC80LgnLFxyXG4gICAgICAgIGNvdW50OiAnNScsXHJcbiAgICAgICAgeWVhcjogJzE5ODAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICcxMycsXHJcbiAgICAgICAgbmFtZTogJ9Co0LDRgCDRgNCw0YHQv9C40YHQvdC+0Lkg0KDQtdC60LAnLFxyXG4gICAgICAgIGNvdW50OiAnMycsXHJcbiAgICAgICAgeWVhcjogJzE5NzAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9GB0LjQvdC40LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzE0JyxcclxuICAgICAgICBuYW1lOiAn0KjQsNGAINGA0LDRgdC/0LjRgdC90L7QuSDQlNC10YDQtdCy0L3RjycsXHJcbiAgICAgICAgY291bnQ6ICc0JyxcclxuICAgICAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0YHQuNC90LjQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMTUnLFxyXG4gICAgICAgIG5hbWU6ICfQmtC+0LvQvtC60L7Qu9GM0YfQuNC6INGA0LDRgdC/0LjRgdC90L7QuScsXHJcbiAgICAgICAgY291bnQ6ICczJyxcclxuICAgICAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICAgICAgc2hhcGU6ICfQutC+0LvQvtC60L7Qu9GM0YfQuNC6JyxcclxuICAgICAgICBjb2xvcjogJ9GB0LjQvdC40LknLFxyXG4gICAgICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICcxNicsXHJcbiAgICAgICAgbmFtZTogJ9Co0LjRiNC60LAg0YDQsNGB0L/QuNGB0L3QsNGPINCf0LXQudC30LDQticsXHJcbiAgICAgICAgY291bnQ6ICczJyxcclxuICAgICAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNC40YjQutCwJyxcclxuICAgICAgICBjb2xvcjogJ9GB0LjQvdC40LknLFxyXG4gICAgICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzE3JyxcclxuICAgICAgICBuYW1lOiAn0KjQuNGI0LrQsCDRgNCw0YHQv9C40YHQvdCw0Y8nLFxyXG4gICAgICAgIGNvdW50OiAnNycsXHJcbiAgICAgICAgeWVhcjogJzE5NzAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQuNGI0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzE4JyxcclxuICAgICAgICBuYW1lOiAn0JbQtdC70YLRi9C5INGI0LDRgCDRgSDQsdCw0L3RgtC+0LwnLFxyXG4gICAgICAgIGNvdW50OiAnMicsXHJcbiAgICAgICAgeWVhcjogJzIwMTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzE5JyxcclxuICAgICAgICBuYW1lOiAn0JbQtdC70YLRi9C5INGI0LDRgCDRgSDQv9Cw0LXRgtC60LDQvNC4JyxcclxuICAgICAgICBjb3VudDogJzEyJyxcclxuICAgICAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMjAnLFxyXG4gICAgICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDRiNCw0YAg0YEg0LHQsNC90YLQvtC8JyxcclxuICAgICAgICBjb3VudDogJzgnLFxyXG4gICAgICAgIHllYXI6ICcxOTUwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgICAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMjEnLFxyXG4gICAgICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDRiNCw0YAg0YEg0LfQstGR0LfQtNCw0LzQuCcsXHJcbiAgICAgICAgY291bnQ6ICc0JyxcclxuICAgICAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzIyJyxcclxuICAgICAgICBuYW1lOiAn0KjQuNGI0LrQsCDQtdC70L7QstCw0Y8g0LfQvtC70L7RgtCw0Y8nLFxyXG4gICAgICAgIGNvdW50OiAnMTEnLFxyXG4gICAgICAgIHllYXI6ICcxOTkwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LjRiNC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LzQsNC70YvQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICcyMycsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7Qu9C+0LrQvtC70YzRh9C40Log0YHRgtCw0YDQuNC90L3Ri9C5JyxcclxuICAgICAgICBjb3VudDogJzknLFxyXG4gICAgICAgIHllYXI6ICcxOTUwJyxcclxuICAgICAgICBzaGFwZTogJ9C60L7Qu9C+0LrQvtC70YzRh9C40LonLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMjQnLFxyXG4gICAgICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINC40LfRj9GJ0L3QsNGPJyxcclxuICAgICAgICBjb3VudDogJzEnLFxyXG4gICAgICAgIHllYXI6ICcxOTQwJyxcclxuICAgICAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzI1JyxcclxuICAgICAgICBuYW1lOiAn0KDQvtC30L7QstGL0Lkg0YjQsNGAINGBINCx0LvRkdGB0YLQutCw0LzQuCcsXHJcbiAgICAgICAgY291bnQ6ICcxMicsXHJcbiAgICAgICAgeWVhcjogJzIwMTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMjYnLFxyXG4gICAgICAgIG5hbWU6ICfQoNGD0LHQuNC90L7QstC+LdC30L7Qu9C+0YLQvtC5INGI0LDRgCcsXHJcbiAgICAgICAgY291bnQ6ICc4JyxcclxuICAgICAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMjcnLFxyXG4gICAgICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDRiNCw0YAg0YEg0YPQt9C+0YDQvtC8JyxcclxuICAgICAgICBjb3VudDogJzQnLFxyXG4gICAgICAgIHllYXI6ICcyMDEwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzI4JyxcclxuICAgICAgICBuYW1lOiAn0JHQvtGA0LTQvtCy0YvQuSDRiNCw0YAg0YEg0YPQt9C+0YDQvtC8JyxcclxuICAgICAgICBjb3VudDogJzEwJyxcclxuICAgICAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICcyOScsXHJcbiAgICAgICAgbmFtZTogJ9Ch0YLQsNGA0LjQvdC90YvQuSDRiNCw0YAg0YEg0YbQstC10YLQsNC80LgnLFxyXG4gICAgICAgIGNvdW50OiAnNScsXHJcbiAgICAgICAgeWVhcjogJzE5NTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMzAnLFxyXG4gICAgICAgIG5hbWU6ICfQodGC0LDRgNC40L3QvdGL0Lkg0YjQsNGAINGBINGD0LfQvtGA0L7QvCcsXHJcbiAgICAgICAgY291bnQ6ICc4JyxcclxuICAgICAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICczMScsXHJcbiAgICAgICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCDRgSDQsdC70ZHRgdGC0LrQsNC80LgnLFxyXG4gICAgICAgIGNvdW50OiAnOCcsXHJcbiAgICAgICAgeWVhcjogJzIwMTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMzInLFxyXG4gICAgICAgIG5hbWU6ICfQodC40L3QuNC5INGI0LDRgCDQktGB0LXQu9C10L3QvdCw0Y8nLFxyXG4gICAgICAgIGNvdW50OiAnMTEnLFxyXG4gICAgICAgIHllYXI6ICcxOTcwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMzMnLFxyXG4gICAgICAgIG5hbWU6ICfQodC40L3QuNC5INGI0LDRgCDRgdC+INGB0L3QtdC20LjQvdC60L7QuScsXHJcbiAgICAgICAgY291bnQ6ICc2JyxcclxuICAgICAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0YHQuNC90LjQuScsXHJcbiAgICAgICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzM0JyxcclxuICAgICAgICBuYW1lOiAn0JfQtdC70ZHQvdGL0LkgINGI0LDRgCDRgSDRg9C30L7RgNC+0LwnLFxyXG4gICAgICAgIGNvdW50OiAnOCcsXHJcbiAgICAgICAgeWVhcjogJzIwMTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C30LXQu9GR0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnMzUnLFxyXG4gICAgICAgIG5hbWU6ICfQpNC40LPRg9GA0LrQsCDQm9C40YEg0LIg0YjQsNGA0YTQtScsXHJcbiAgICAgICAgY291bnQ6ICc4JyxcclxuICAgICAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzM2JyxcclxuICAgICAgICBuYW1lOiAn0KHQuNGA0LXQvdC10LLRi9C5INGI0LDRgCDQnNC10YLQtdC70YwnLFxyXG4gICAgICAgIGNvdW50OiAnMScsXHJcbiAgICAgICAgeWVhcjogJzIwMDAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9GB0LjQvdC40LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICczNycsXHJcbiAgICAgICAgbmFtZTogJ9CX0LXQu9GR0L3Ri9C5ICDRiNCw0YAg0JzQtdGC0LXQu9GMJyxcclxuICAgICAgICBjb3VudDogJzYnLFxyXG4gICAgICAgIHllYXI6ICcyMDAwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQt9C10LvRkdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzM4JyxcclxuICAgICAgICBuYW1lOiAn0JPQvtC70YPQsdC+0LkgINGI0LDRgCDQnNC10YLQtdC70YwnLFxyXG4gICAgICAgIGNvdW50OiAnNicsXHJcbiAgICAgICAgeWVhcjogJzIwMDAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9GB0LjQvdC40LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICczOScsXHJcbiAgICAgICAgbmFtZTogJ9Ca0YDQsNGB0L3QsNGPINGB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgICAgIGNvdW50OiAnNicsXHJcbiAgICAgICAgeWVhcjogJzE5OTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzQwJyxcclxuICAgICAgICBuYW1lOiAn0KHQvdC10LbQuNC90LrQsCDQt9C+0LvQvtGC0LDRjycsXHJcbiAgICAgICAgY291bnQ6ICcxMicsXHJcbiAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc0MScsXHJcbiAgICAgICAgbmFtZTogJ9Ch0L3QtdC20LjQvdC60LAg0LDRgNC60YLQuNGH0LXRgdC60LDRjycsXHJcbiAgICAgICAgY291bnQ6ICcxMScsXHJcbiAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNDInLFxyXG4gICAgICAgIG5hbWU6ICfQl9C10LvRkdC90YvQuSDRiNCw0YAnLFxyXG4gICAgICAgIGNvdW50OiAnMTAnLFxyXG4gICAgICAgIHllYXI6ICcxOTgwJyxcclxuICAgICAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQt9C10LvRkdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzQzJyxcclxuICAgICAgICBuYW1lOiAn0KHQvdC10LbQuNC90LrQsCDQtNCy0YPRhdGG0LLQtdGC0L3QsNGPJyxcclxuICAgICAgICBjb3VudDogJzYnLFxyXG4gICAgICAgIHllYXI6ICcxOTYwJyxcclxuICAgICAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc0NCcsXHJcbiAgICAgICAgbmFtZTogJ9Ck0LjQs9GD0YDQutCwINCQ0L3Qs9C10LvQsCcsXHJcbiAgICAgICAgY291bnQ6ICcxMScsXHJcbiAgICAgICAgeWVhcjogJzE5NDAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzQ1JyxcclxuICAgICAgICBuYW1lOiAn0KHQvdC10LbQuNC90LrQsCDQvdC+0LLQvtCz0L7QtNC90Y/RjycsXHJcbiAgICAgICAgY291bnQ6ICcxJyxcclxuICAgICAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRgdC90LXQttC40L3QutCwJyxcclxuICAgICAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc0NicsXHJcbiAgICAgICAgbmFtZTogJ9Ck0LjQs9GD0YDQutCwINCc0YPRhdC+0LzQvtGAJyxcclxuICAgICAgICBjb3VudDogJzEwJyxcclxuICAgICAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9C80LDQu9GL0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNDcnLFxyXG4gICAgICAgIG5hbWU6ICfQpNC40LPRg9GA0LrQsCDQmtC+0LvQvtC00LXRhicsXHJcbiAgICAgICAgY291bnQ6ICc2JyxcclxuICAgICAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9C80LDQu9GL0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNDgnLFxyXG4gICAgICAgIG5hbWU6ICfQltC10LvRgtGL0Lkg0YjQsNGAINGBINCx0LDQvdGC0L7QvCcsXHJcbiAgICAgICAgY291bnQ6ICc2JyxcclxuICAgICAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNDknLFxyXG4gICAgICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINGBINCx0LjRgNGO0LfQvtC5JyxcclxuICAgICAgICBjb3VudDogJzQnLFxyXG4gICAgICAgIHllYXI6ICcxOTgwJyxcclxuICAgICAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNTAnLFxyXG4gICAgICAgIG5hbWU6ICfQmtC+0LvQvtC60L7Qu9GM0YfQuNC6INCx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBjb3VudDogJzMnLFxyXG4gICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICBzaGFwZTogJ9C60L7Qu9C+0LrQvtC70YzRh9C40LonLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc1MScsXHJcbiAgICAgICAgbmFtZTogJ9Co0LjRiNC60LAg0YEg0LjQt9C80L7RgNC+0LfRjNGOJyxcclxuICAgICAgICBjb3VudDogJzEyJyxcclxuICAgICAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNC40YjQutCwJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LzQsNC70YvQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc1MicsXHJcbiAgICAgICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCDRgSDQvdCw0LTQv9C40YHRjNGOJyxcclxuICAgICAgICBjb3VudDogJzEyJyxcclxuICAgICAgICB5ZWFyOiAnMTk5MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzUzJyxcclxuICAgICAgICBuYW1lOiAn0KHQvdC10LbQuNC90LrQsCDRgdC10YDQtdCx0YDQuNGB0YLQsNGPJyxcclxuICAgICAgICBjb3VudDogJzYnLFxyXG4gICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzU0JyxcclxuICAgICAgICBuYW1lOiAn0JfQtdC70ZHQvdGL0Lkg0YjQsNGAINGBINGA0LjRgdGD0L3QutC+0LwnLFxyXG4gICAgICAgIGNvdW50OiAnNicsXHJcbiAgICAgICAgeWVhcjogJzIwMTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C30LXQu9GR0L3Ri9C5JyxcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbnVtOiAnNTUnLFxyXG4gICAgICAgIG5hbWU6ICfQn9GA0Y/QvdC40YfQvdGL0Lkg0LTQvtC80LjQuicsXHJcbiAgICAgICAgY291bnQ6ICcxJyxcclxuICAgICAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc1NicsXHJcbiAgICAgICAgbmFtZTogJ9Cf0YDRj9C90LjRh9C90YvQuSDRgtC10YDQtdC80L7QuicsXHJcbiAgICAgICAgY291bnQ6ICcxJyxcclxuICAgICAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgICAgIHNpemU6ICfQvNCw0LvRi9C5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzU3JyxcclxuICAgICAgICBuYW1lOiAn0J/RgNGP0L3QuNGH0L3QsNGPINC40LfQsdGD0YjQutCwJyxcclxuICAgICAgICBjb3VudDogJzEnLFxyXG4gICAgICAgIHllYXI6ICcxOTQwJyxcclxuICAgICAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgICAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzU4JyxcclxuICAgICAgICBuYW1lOiAn0KTQuNCz0YPRgNC60LAg0LHQtdC70L7Qs9C+INC80LXQtNCy0LXQtNGPJyxcclxuICAgICAgICBjb3VudDogJzInLFxyXG4gICAgICAgIHllYXI6ICcxOTgwJyxcclxuICAgICAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgICAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBudW06ICc1OScsXHJcbiAgICAgICAgbmFtZTogJ9CW0LXQu9GC0YvQuSDRiNCw0YAg0YEg0L3QsNC00L/QuNGB0YzRjicsXHJcbiAgICAgICAgY291bnQ6ICcxMCcsXHJcbiAgICAgICAgeWVhcjogJzE5OTAnLFxyXG4gICAgICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgICAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICAgICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG51bTogJzYwJyxcclxuICAgICAgICBuYW1lOiAn0KTQuNCz0YPRgNC60LAg0JPQvtC70YPQsdGMJyxcclxuICAgICAgICBjb3VudDogJzEyJyxcclxuICAgICAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICAgICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgICAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgfSxcclxuXTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gZGF0YTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Mb2NhbFN0b3JhZ2VVdGlsID0gdm9pZCAwO1xyXG5jbGFzcyBMb2NhbFN0b3JhZ2VVdGlsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMua2V5TmFtZSA9ICd0b3lzJztcclxuICAgIH1cclxuICAgIGdldExvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZXNMb2NhbFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleU5hbWUpO1xyXG4gICAgICAgIGlmIChmYXZvcml0ZXNMb2NhbFN0b3JhZ2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmF2b3JpdGVzTG9jYWxTdG9yYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgc2V0TG9jYWxTdG9yYWdlKGlkKSB7XHJcbiAgICAgICAgY29uc3QgdG95RmF2b3JpdGVzID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBsZXQgcHVzaEZhdm9yaXRlcyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdG95RmF2b3JpdGVzLmluZGV4T2YoaWQpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdG95RmF2b3JpdGVzLnB1c2goaWQpO1xyXG4gICAgICAgICAgICBwdXNoRmF2b3JpdGVzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRveUZhdm9yaXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleU5hbWUsIEpTT04uc3RyaW5naWZ5KHRveUZhdm9yaXRlcykpO1xyXG4gICAgICAgIHJldHVybiB7IHB1c2hGYXZvcml0ZXMsIHRveUZhdm9yaXRlcyB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTG9jYWxTdG9yYWdlVXRpbCA9IExvY2FsU3RvcmFnZVV0aWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucXVhbnRpdHlTbGlkZXIgPSB2b2lkIDA7XHJcbmNvbnN0IG5vdWlzbGlkZXJfMSA9IHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpO1xyXG5mdW5jdGlvbiBxdWFudGl0eVNsaWRlcigpIHtcclxuICAgIGNvbnN0IHNsaWRlclF1YW50aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlci1xdWFudGl0eScpO1xyXG4gICAgY29uc3Qgc2xpZGVyID0gbm91aXNsaWRlcl8xLmRlZmF1bHQuY3JlYXRlKHNsaWRlclF1YW50aXR5LCB7XHJcbiAgICAgICAgc3RhcnQ6IFsxLCAxMl0sXHJcbiAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICAgIG1pbjogWzFdLFxyXG4gICAgICAgICAgICBtYXg6IFsxMl0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaW5wdXRRdWFudGl0eU1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4tcXVhbnRpdHknKTtcclxuICAgIGNvbnN0IGlucHV0UXVhbnRpdHlNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF4LXF1YW50aXR5Jyk7XHJcbiAgICBjb25zdCBpbnB1dHNRdWFudGl0eSA9IFtpbnB1dFF1YW50aXR5TWluLCBpbnB1dFF1YW50aXR5TWF4XTtcclxuICAgIHNsaWRlci5vbigndXBkYXRlJywgKHZhbHVlcywgaGFuZGxlKSA9PiB7XHJcbiAgICAgICAgaW5wdXRzUXVhbnRpdHlbaGFuZGxlXS52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKE51bWJlcih2YWx1ZXNbaGFuZGxlXSkpKTtcclxuICAgICAgICBjb25zdCBjaGFuZ2UgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xyXG4gICAgICAgIGlucHV0c1F1YW50aXR5W2hhbmRsZV0uZGlzcGF0Y2hFdmVudChjaGFuZ2UpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5xdWFudGl0eVNsaWRlciA9IHF1YW50aXR5U2xpZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnllYXJTbGlkZXIgPSB2b2lkIDA7XHJcbmNvbnN0IG5vdWlzbGlkZXJfMSA9IHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpO1xyXG5mdW5jdGlvbiB5ZWFyU2xpZGVyKCkge1xyXG4gICAgY29uc3Qgc2xpZGVyWWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXIteWVhcicpO1xyXG4gICAgY29uc3Qgc2xpZGVyID0gbm91aXNsaWRlcl8xLmRlZmF1bHQuY3JlYXRlKHNsaWRlclllYXIsIHtcclxuICAgICAgICBzdGFydDogWzE5NDAsIDIwMjBdLFxyXG4gICAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICBtaW46IFsxOTQwXSxcclxuICAgICAgICAgICAgbWF4OiBbMjAyMF0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaW5wdXRZZWFyTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbi15ZWFyJyk7XHJcbiAgICBjb25zdCBpbnB1dFllYXJNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF4LXllYXInKTtcclxuICAgIGNvbnN0IGlucHV0c1llYXIgPSBbaW5wdXRZZWFyTWluLCBpbnB1dFllYXJNYXhdO1xyXG4gICAgc2xpZGVyLm9uKCd1cGRhdGUnLCAodmFsdWVzLCBoYW5kbGUpID0+IHtcclxuICAgICAgICBpbnB1dHNZZWFyW2hhbmRsZV0udmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChOdW1iZXIodmFsdWVzW2hhbmRsZV0pKSk7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcclxuICAgICAgICBpbnB1dHNZZWFyW2hhbmRsZV0uZGlzcGF0Y2hFdmVudChjaGFuZ2UpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy55ZWFyU2xpZGVyID0geWVhclNsaWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BcHAgPSB2b2lkIDA7XHJcbmNvbnN0IGhlYWRlcl8xID0gcmVxdWlyZShcIi4uLy4uL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyXCIpO1xyXG5jb25zdCB0b3lzXzEgPSByZXF1aXJlKFwiLi4vdG95cy90b3lzXCIpO1xyXG5jb25zdCBnYW1lXzEgPSByZXF1aXJlKFwiLi4vZ2FtZS9nYW1lXCIpO1xyXG5jb25zdCBtYWluXzEgPSByZXF1aXJlKFwiLi4vbWFpbi9tYWluXCIpO1xyXG5jb25zdCBmb290ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3RlclwiKTtcclxuY29uc3QgbWFpbl8yID0gcmVxdWlyZShcIi4uLy4uL2NvcmUvY29tcG9uZW50cy9tYWluL21haW5cIik7XHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxQYWdlID0gbmV3IG1haW5fMS5NYWluUGFnZSgnbWFpbi1wYWdlJyk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgaGVhZGVyXzEuSGVhZGVyKCdoZWFkZXInLCAnaGVhZGVyJywgJ2hlYWRlcicpO1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG5ldyBtYWluXzIuTWFpbignbWFpbicsICdtYWluJywgJ21haW4nKTtcclxuICAgICAgICB0aGlzLmZvb3RlciA9IG5ldyBmb290ZXJfMS5Gb290ZXIoJ2Zvb3RlcicsICdmb290ZXInLCAnZm9vdGVyJyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVuZGVyTmV3UGFnZShpZFBhZ2UpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFnZUhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtBcHAuZGVmYXVsdFBhZ2VJZH1gKTtcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2VIVE1MKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlSFRNTC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhZ2UgPSBudWxsO1xyXG4gICAgICAgIGlmIChpZFBhZ2UgPT09IFwibWFpbi1wYWdlXCIpIHtcclxuICAgICAgICAgICAgcGFnZSA9IG5ldyBtYWluXzEuTWFpblBhZ2UoaWRQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaWRQYWdlID09PSBcInRveXMtcGFnZVwiKSB7XHJcbiAgICAgICAgICAgIHBhZ2UgPSBuZXcgdG95c18xLlRveXMoaWRQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaWRQYWdlID09PSBcImdhbWUtcGFnZVwiKSB7XHJcbiAgICAgICAgICAgIHBhZ2UgPSBuZXcgZ2FtZV8xLkdhbWUoaWRQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFnZUhUTUwgPSBwYWdlLnJlbmRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgICAgICAgICAgcGFnZUhUTUwuaWQgPSBBcHAuZGVmYXVsdFBhZ2VJZDtcclxuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmQocGFnZUhUTUwpO1xyXG4gICAgICAgICAgICBwYWdlLmFmdGVyUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZW5hYmxlUm91dGVDaGFuZ2UoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcclxuICAgICAgICAgICAgQXBwLnJlbmRlck5ld1BhZ2UoaGFzaCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgQXBwLmNvbnRhaW5lci5hcHBlbmQodGhpcy5oZWFkZXIucmVuZGVyKCkpO1xyXG4gICAgICAgIEFwcC5jb250YWluZXIuYXBwZW5kKHRoaXMubWFpbi5yZW5kZXIoKSk7XHJcbiAgICAgICAgQXBwLnJlbmRlck5ld1BhZ2UoJ21haW4tcGFnZScpO1xyXG4gICAgICAgIEFwcC5jb250YWluZXIuYXBwZW5kKHRoaXMuZm9vdGVyLnJlbmRlcigpKTtcclxuICAgICAgICB0aGlzLmVuYWJsZVJvdXRlQ2hhbmdlKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIjbWFpbi1wYWdlXCIpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgXCJcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoMCwgMCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFwcCA9IEFwcDtcclxuQXBwLmNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XHJcbkFwcC5kZWZhdWx0UGFnZUlkID0gJ2N1cnJlbnQtcGFnZSc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuR2FtZSA9IHZvaWQgMDtcclxuY29uc3QgcGFnZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb3JlL3RlbXBsYXRlcy9wYWdlc1wiKTtcclxuY29uc3QgZGF0YV8xID0gcmVxdWlyZShcIi4uLy4uL2RhdGFcIik7XHJcbmNvbnN0IGxvY2FsU3RvcmFnZV8xID0gcmVxdWlyZShcIi4uLy4uL2xvY2FsLXN0b3JhZ2UvbG9jYWxTdG9yYWdlXCIpO1xyXG5jb25zdCBzbm93XzEgPSByZXF1aXJlKFwiLi4vLi4vc25vdy9zbm93XCIpO1xyXG5jb25zdCB0cmVlID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnNCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICc1J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzYnXHJcbiAgICB9XHJcbl07XHJcbmNvbnN0IGJhY2tncm91bmRJbWFnZSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJzEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICczJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnNSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICc2J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnOCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICc5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzEwJ1xyXG4gICAgfVxyXG5dO1xyXG5jb25zdCBnYXJsYW5kQnV0dG9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogJ211bHRpY29sb3InXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiAncmVkJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogJ2dyZWVuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogJ2JsdWUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiAneWVsbG93J1xyXG4gICAgfVxyXG5dO1xyXG5jb25zdCBjb29yZGluYXRlcyA9ICczNjUsNjk5LDE4OSw3MDYsMTEzLDY4MywzMSw2MDgsMiw1NTUsMiw1MzksMTgsNDM3LDczLDM1MSwxMDYsMjI0LDE2MSwxMzQsMjQzLC0xLDMwNiw3NSwzNTMsMTQ0LDM5OSwyMjEsNDI0LDM1OSw0NTIsNDU5LDQ5Niw1NTAsNDQ0LDY2NCc7XHJcbmNsYXNzIEdhbWUgZXh0ZW5kcyBwYWdlc18xLlBhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoaWQpIHtcclxuICAgICAgICBzdXBlcihpZCk7XHJcbiAgICAgICAgdGhpcy5jaG9pY2VCYWNrZ3JvdW5kID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgYmdJRCA9IHRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICBjb25zdCB0cmVlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyZWUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIHRyZWVDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguL2Fzc2V0cy9iZy8ke2JnSUR9LndlYnApYDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2hvaWNlVHJlZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyZWVJRCA9IHRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICBjb25zdCB0cmVlSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyZWUtaW1nJyk7XHJcbiAgICAgICAgICAgIHRyZWVJbWcuc3JjID0gYC4vYXNzZXRzL3RyZWUvJHt0cmVlSUR9LndlYnBgO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jbGlja0J1dHRvbkdhcmxhbmQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuTXVsdGljb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdWx0aWNvbG9yJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0blJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWQnKTtcclxuICAgICAgICAgICAgY29uc3QgYnRuR3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlZW4nKTtcclxuICAgICAgICAgICAgY29uc3QgYnRuQmx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0blllbGxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55ZWxsb3cnKTtcclxuICAgICAgICAgICAgY29uc3QgYWxsQnRuR2FybGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYXJsYW5kLWJ0bicpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dFN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtaW5wdXQnKTtcclxuICAgICAgICAgICAgY29uc3QgbXVsdGljb2xvckdhcmxhbmQgPSBgXHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZVwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZTJcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlM1wiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlNFwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZTVcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlNlwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZTdcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZENvbG9yR2FybGFuZCA9IGBcclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLXJlZFwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1yZWQyXCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1yZWQzXCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtcmVkNFwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1yZWQ1XCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1yZWQ2XCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtcmVkN1wiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgYDtcclxuICAgICAgICAgICAgY29uc3QgZ3JlZW5Db2xvckdhcmxhbmQgPSBgXHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1ncmVlblwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1ncmVlbjJcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLWdyZWVuM1wiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLWdyZWVuNFwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS1ncmVlbjVcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLWdyZWVuNlwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLWdyZWVuN1wiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgYDtcclxuICAgICAgICAgICAgY29uc3QgYmx1ZUNvbG9yR2FybGFuZCA9IGBcclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLWJsdWVcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtYmx1ZTJcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLWJsdWUzXCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtYmx1ZTRcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtYmx1ZTVcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLWJsdWU2XCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUtYmx1ZTdcIj5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgICAgIGNvbnN0IHllbGxvd0NvbG9yR2FybGFuZCA9IGBcclxuICAgICAgICA8dWwgY2xhc3M9XCJsaWdodC1yb3BlLXllbGxvd1wiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS15ZWxsb3cyXCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS15ZWxsb3czXCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUteWVsbG93NFwiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS15ZWxsb3c1XCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlnaHQtcm9wZS15ZWxsb3c2XCI+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpZ2h0LXJvcGUteWVsbG93N1wiPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgYDtcclxuICAgICAgICAgICAgY29uc3QgdHJlZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVlLWdhcmxhbmQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgYnRuSUQgPSB0YXJnZXQuZGF0YXNldC5jb2xvcjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2F2ZUJ0bklELm11bHRpY29sb3IuaW5jbHVkZXMoYnRuSUQpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQnRuSUQubXVsdGljb2xvci5zcGxpY2UodGhpcy5zYXZlQnRuSUQubXVsdGljb2xvci5pbmRleE9mKGJ0bklEKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0cmVlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ211bHRpY29sb3InKSkge1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5SZWQuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYnRuQmx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5HcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5ZZWxsb3cuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQnRuSUQubXVsdGljb2xvci5wdXNoKGJ0bklEKTtcclxuICAgICAgICAgICAgICAgIHRyZWVDb250YWluZXIuaW5uZXJIVE1MICs9IG11bHRpY29sb3JHYXJsYW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNhdmVCdG5JRC5yZWQuaW5jbHVkZXMoYnRuSUQpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQnRuSUQucmVkLnNwbGljZSh0aGlzLnNhdmVCdG5JRC5yZWQuaW5kZXhPZihidG5JRCksIDEpO1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5CbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0bkdyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0blllbGxvdy5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5NdWx0aWNvbG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUJ0bklELnJlZC5wdXNoKGJ0bklEKTtcclxuICAgICAgICAgICAgICAgIHRyZWVDb250YWluZXIuaW5uZXJIVE1MICs9IHJlZENvbG9yR2FybGFuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zYXZlQnRuSUQuZ3JlZW4uaW5jbHVkZXMoYnRuSUQpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQnRuSUQuZ3JlZW4uc3BsaWNlKHRoaXMuc2F2ZUJ0bklELmdyZWVuLmluZGV4T2YoYnRuSUQpLCAxKTtcclxuICAgICAgICAgICAgICAgIHRyZWVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ3JlZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5CbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0blllbGxvdy5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5NdWx0aWNvbG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0blJlZC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVCdG5JRC5ncmVlbi5wdXNoKGJ0bklEKTtcclxuICAgICAgICAgICAgICAgIHRyZWVDb250YWluZXIuaW5uZXJIVE1MICs9IGdyZWVuQ29sb3JHYXJsYW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNhdmVCdG5JRC5ibHVlLmluY2x1ZGVzKGJ0bklEKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUJ0bklELmJsdWUuc3BsaWNlKHRoaXMuc2F2ZUJ0bklELmJsdWUuaW5kZXhPZihidG5JRCksIDEpO1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdibHVlJykpIHtcclxuICAgICAgICAgICAgICAgIHRyZWVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYnRuWWVsbG93LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0bk11bHRpY29sb3IuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYnRuUmVkLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0bkdyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUJ0bklELmJsdWUucHVzaChidG5JRCk7XHJcbiAgICAgICAgICAgICAgICB0cmVlQ29udGFpbmVyLmlubmVySFRNTCArPSBibHVlQ29sb3JHYXJsYW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNhdmVCdG5JRC55ZWxsb3cuaW5jbHVkZXMoYnRuSUQpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQnRuSUQueWVsbG93LnNwbGljZSh0aGlzLnNhdmVCdG5JRC55ZWxsb3cuaW5kZXhPZihidG5JRCksIDEpO1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd5ZWxsb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5NdWx0aWNvbG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ0blJlZC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5HcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBidG5CbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUJ0bklELnllbGxvdy5wdXNoKGJ0bklEKTtcclxuICAgICAgICAgICAgICAgIHRyZWVDb250YWluZXIuaW5uZXJIVE1MICs9IHllbGxvd0NvbG9yR2FybGFuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxsQnRuR2FybGFuZC5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmVlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2F2ZUJ0bklEID0ge1xyXG4gICAgICAgICAgICBtdWx0aWNvbG9yOiBbXSxcclxuICAgICAgICAgICAgcmVkOiBbXSxcclxuICAgICAgICAgICAgZ3JlZW46IFtdLFxyXG4gICAgICAgICAgICBibHVlOiBbXSxcclxuICAgICAgICAgICAgeWVsbG93OiBbXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZW5kZXJXcmFwcGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmtUb3lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmtzOm50aC1jaGlsZCgyKScpO1xyXG4gICAgICAgIGNvbnN0IGxpbmtNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmtzOm50aC1jaGlsZCgxKScpO1xyXG4gICAgICAgIGNvbnN0IGxpbmtHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmtzOm50aC1jaGlsZCgzKScpO1xyXG4gICAgICAgIGxpbmtNYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2xpbmtzLWFjdGl2ZScpO1xyXG4gICAgICAgIGxpbmtUb3lzLmNsYXNzTGlzdC5yZW1vdmUoJ2xpbmtzLWFjdGl2ZScpO1xyXG4gICAgICAgIGxpbmtHYW1lLmNsYXNzTGlzdC5hZGQoJ2xpbmtzLWFjdGl2ZScpO1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXJHYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgd3JhcHBlckdhbWUuY2xhc3NMaXN0LmFkZCgnd3JhcHBlci1nYW1lJyk7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlckdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3cmFwcGVyR2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLWdhbWUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgd3JhcHBlckdhbWUuYXBwZW5kKHdyYXBwZXJHYW1lQ29udGFpbmVyKTtcclxuICAgICAgICBjb25zdCBtZW51Q2hvb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWVudUNob29zZS5jbGFzc0xpc3QuYWRkKCdtZW51LWNob29zZScpO1xyXG4gICAgICAgIHdyYXBwZXJHYW1lQ29udGFpbmVyLmFwcGVuZChtZW51Q2hvb3NlKTtcclxuICAgICAgICBjb25zdCB0cmVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmVlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHdyYXBwZXJHYW1lQ29udGFpbmVyLmFwcGVuZCh0cmVlQ29udGFpbmVyKTtcclxuICAgICAgICB0cmVlQ29udGFpbmVyLm9uZHJhZ292ZXIgPSBhbGxvd0Ryb3A7XHJcbiAgICAgICAgY29uc3QgdHJlZUdhcmxhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0cmVlR2FybGFuZC5jbGFzc0xpc3QuYWRkKCd0cmVlLWdhcmxhbmQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgdHJlZUNvbnRhaW5lci5hcHBlbmQodHJlZUdhcmxhbmQpO1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21hcCcpO1xyXG4gICAgICAgIG1hcC5uYW1lID0gJ3RyZWUtbWFwJztcclxuICAgICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJlYScpO1xyXG4gICAgICAgIGFyZWEuY2xhc3NMaXN0LmFkZCgnYXJlYS10cmVlJyk7XHJcbiAgICAgICAgYXJlYS5jb29yZHMgPSBjb29yZGluYXRlcztcclxuICAgICAgICBhcmVhLnNoYXBlID0gJ3BvbHknO1xyXG4gICAgICAgIG1hcC5hcHBlbmQoYXJlYSk7XHJcbiAgICAgICAgdHJlZUNvbnRhaW5lci5hcHBlbmQobWFwKTtcclxuICAgICAgICBjb25zdCB0cmVlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgdHJlZUltZy5jbGFzc0xpc3QuYWRkKCd0cmVlLWltZycpO1xyXG4gICAgICAgIHRyZWVJbWcuc2V0QXR0cmlidXRlKCd1c2VtYXAnLCAnI3RyZWUtbWFwJyk7XHJcbiAgICAgICAgdHJlZUltZy5zcmMgPSAnLi9hc3NldHMvdHJlZS8xLndlYnAnO1xyXG4gICAgICAgIHRyZWVDb250YWluZXIuYXBwZW5kKHRyZWVJbWcpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVGYXZvcml0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51RmF2b3JpdGVzLmNsYXNzTGlzdC5hZGQoJ21lbnUtZmF2b3JpdGVzJyk7XHJcbiAgICAgICAgd3JhcHBlckdhbWVDb250YWluZXIuYXBwZW5kKG1lbnVGYXZvcml0ZXMpO1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvQW5kU25vd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGF1ZGlvQW5kU25vd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhdWRpby1zbm93LWNvbnRhaW5lcicsICdtZW51Jyk7XHJcbiAgICAgICAgbWVudUNob29zZS5hcHBlbmQoYXVkaW9BbmRTbm93Q29udGFpbmVyKTtcclxuICAgICAgICBjb25zdCB0cmVlQ2hvb3NlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdHJlZUNob29zZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmVlLWNob29zZS1jb250YWluZXInLCAnbWVudScpO1xyXG4gICAgICAgIG1lbnVDaG9vc2UuYXBwZW5kKHRyZWVDaG9vc2VDb250YWluZXIpO1xyXG4gICAgICAgIGNvbnN0IGJnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmctY29udGFpbmVyJywgJ21lbnUnKTtcclxuICAgICAgICBtZW51Q2hvb3NlLmFwcGVuZChiZ0NvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgZ2FybGFuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGdhcmxhbmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FybGFuZC1jb250YWluZXInLCAnbWVudScpO1xyXG4gICAgICAgIG1lbnVDaG9vc2UuYXBwZW5kKGdhcmxhbmRDb250YWluZXIpO1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGF1ZGlvSXRlbS5jbGFzc0xpc3QuYWRkKCdhdWRpby1pdGVtJyk7XHJcbiAgICAgICAgYXVkaW9BbmRTbm93Q29udGFpbmVyLmFwcGVuZChhdWRpb0l0ZW0pO1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICBhdWRpby5pZCA9ICdwbGF5ZXInO1xyXG4gICAgICAgIGF1ZGlvLnNyYyA9ICcuL2Fzc2V0cy9hdWRpby9hdWRpby5tcDMnO1xyXG4gICAgICAgIGF1ZGlvLmxvb3AgPSB0cnVlO1xyXG4gICAgICAgIGF1ZGlvSXRlbS5hcHBlbmQoYXVkaW8pO1xyXG4gICAgICAgIGNvbnN0IHNub3dJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgc25vd0l0ZW0uY2xhc3NMaXN0LmFkZCgnc25vdy1pdGVtJyk7XHJcbiAgICAgICAgc25vd0l0ZW0uaWQgPSAnc25vdy1pdGVtJztcclxuICAgICAgICBhdWRpb0FuZFNub3dDb250YWluZXIuYXBwZW5kKHNub3dJdGVtKTtcclxuICAgICAgICB0cmVlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyZWVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0cmVlSXRlbXMuY2xhc3NMaXN0LmFkZCgndHJlZS1pdGVtJyk7XHJcbiAgICAgICAgICAgIHRyZWVJdGVtcy5kYXRhc2V0LmlkID0gaXRlbS5pZDtcclxuICAgICAgICAgICAgdHJlZUNob29zZUNvbnRhaW5lci5hcHBlbmQodHJlZUl0ZW1zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmdJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBiZ0l0ZW1zLmNsYXNzTGlzdC5hZGQoJ2JnLWl0ZW0nKTtcclxuICAgICAgICAgICAgYmdJdGVtcy5kYXRhc2V0LmlkID0gaXRlbS5pZDtcclxuICAgICAgICAgICAgYmdDb250YWluZXIuYXBwZW5kKGJnSXRlbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGdhcmxhbmRCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBnYXJsYW5kQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dhcmxhbmQtYnRuLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGdhcmxhbmRDb250YWluZXIuYXBwZW5kKGdhcmxhbmRCdG5Db250YWluZXIpO1xyXG4gICAgICAgIGdhcmxhbmRCdXR0b25zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bkdhcmxhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYnRuR2FybGFuZC5jbGFzc0xpc3QuYWRkKCdnYXJsYW5kLWJ0bicsIGl0ZW0uY29sb3IpO1xyXG4gICAgICAgICAgICBidG5HYXJsYW5kLmRhdGFzZXQuY29sb3IgPSBpdGVtLmNvbG9yO1xyXG4gICAgICAgICAgICBnYXJsYW5kQnRuQ29udGFpbmVyLmFwcGVuZChidG5HYXJsYW5kKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzd2l0Y2hPZmZPbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHN3aXRjaE9mZk9uLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaC1vZmYtb24nKTtcclxuICAgICAgICBnYXJsYW5kQ29udGFpbmVyLmFwcGVuZChzd2l0Y2hPZmZPbik7XHJcbiAgICAgICAgY29uc3QgaW5wdXRTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0U3dpdGNoLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaC1pbnB1dCcpO1xyXG4gICAgICAgIGlucHV0U3dpdGNoLnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgIGlucHV0U3dpdGNoLmlkID0gJ2lucHV0LXN3aXRjaCc7XHJcbiAgICAgICAgaW5wdXRTd2l0Y2guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgc3dpdGNoT2ZmT24uYXBwZW5kKGlucHV0U3dpdGNoKTtcclxuICAgICAgICBjb25zdCBsYWJlbFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGFiZWxTd2l0Y2guc2V0QXR0cmlidXRlKCdmb3InLCAnaW5wdXQtc3dpdGNoJyk7XHJcbiAgICAgICAgbGFiZWxTd2l0Y2guZGF0YXNldC5vbiA9ICfQktC60LsuJztcclxuICAgICAgICBsYWJlbFN3aXRjaC5kYXRhc2V0Lm9mZiA9ICfQktGL0LrQuy4nO1xyXG4gICAgICAgIGxhYmVsU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ2xhYmVsLXN3aXRjaCcpO1xyXG4gICAgICAgIHN3aXRjaE9mZk9uLmFwcGVuZChsYWJlbFN3aXRjaCk7XHJcbiAgICAgICAgY29uc3QgZmF2b3JpdGVUb3lzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZmF2b3JpdGVUb3lzLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlLXRveXMtY29udGFpbmVyJyk7XHJcbiAgICAgICAgbWVudUZhdm9yaXRlcy5hcHBlbmQoZmF2b3JpdGVUb3lzKTtcclxuICAgICAgICBjb25zdCBkZWNvcmF0ZVRyZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGVjb3JhdGVUcmVlcy5jbGFzc0xpc3QuYWRkKCdkZWNvcmF0ZS10cmVlcycpO1xyXG4gICAgICAgIG1lbnVGYXZvcml0ZXMuYXBwZW5kKGRlY29yYXRlVHJlZXMpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGFsbG93RHJvcChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQod3JhcHBlckdhbWUpO1xyXG4gICAgfVxyXG4gICAgcGxheUFuZFN0b3BBdWRpbygpIHtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvQ29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXVkaW8taXRlbVwiKTtcclxuICAgICAgICBpZiAoYXVkaW8ucGF1c2VkKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgYXVkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ3BsYXknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGF1ZGlvLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIGF1ZGlvQ29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5Jyk7XHJcbiAgICAgICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMC4wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBkcmFnKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkcmFnJyk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIChfYSA9IGV2ZW50LmRhdGFUcmFuc2ZlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldERhdGEoJ2lkJywgdGFyZ2V0LmlkKTtcclxuICAgICAgICBjb25zdCBzaGlmdFggPSBldmVudC5wYWdlWCAtIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gNjU7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRZID0gZXZlbnQucGFnZVkgLSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgMTU7XHJcbiAgICAgICAgKF9iID0gZXZlbnQuZGF0YVRyYW5zZmVyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2V0RGF0YSgnc2hpZnRYJywgc2hpZnRYLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIChfYyA9IGV2ZW50LmRhdGFUcmFuc2ZlcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNldERhdGEoJ3NoaWZ0WScsIHNoaWZ0WS50b1N0cmluZygpKTtcclxuICAgICAgICAoX2QgPSBldmVudC5kYXRhVHJhbnNmZXIpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5zZXREYXRhKCdkYXRhc2V0JywgdGFyZ2V0LmRhdGFzZXQuaW1nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9uZHJvcCA9IEdhbWUuZHJvcDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkcm9wKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEV2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgY29uc3QgaXRlbUlEID0gdGFyZ2V0RXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2lkJyk7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRYID0gTnVtYmVyKHRhcmdldEV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlmdFgnKSk7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRZID0gTnVtYmVyKHRhcmdldEV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlmdFknKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YVNldCA9IHRhcmdldEV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdkYXRhc2V0Jyk7XHJcbiAgICAgICAgY29uc3QgdHJlZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGFyZWFUcmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFyZWEtdHJlZScpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0SXRlbSA9ICh0cmVlSW1nID09PSBudWxsIHx8IHRyZWVJbWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRyZWVJbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCkgKyAodHJlZUltZyA9PT0gbnVsbCB8fCB0cmVlSW1nID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0cmVlSW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSAtIHRhcmdldEV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgY29uc3QgYm90dG9tSXRlbSA9ICh0cmVlSW1nID09PSBudWxsIHx8IHRyZWVJbWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRyZWVJbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSkgKyAodHJlZUltZyA9PT0gbnVsbCB8fCB0cmVlSW1nID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0cmVlSW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSAtIHRhcmdldEV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSByaWdodEl0ZW0gKyBzaGlmdFg7XHJcbiAgICAgICAgY29uc3QgYm90dG9tID0gYm90dG9tSXRlbSArIHNoaWZ0WTtcclxuICAgICAgICBjb25zdCBwYXJlbnRGb3JFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNsb3Qke2RhdGFTZXR9YCk7XHJcbiAgICAgICAgY29uc3QgY291bnRUb3lzID0gcGFyZW50Rm9yRWxlbWVudCA9PT0gbnVsbCB8fCBwYXJlbnRGb3JFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnRGb3JFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZS1jb3VudCcpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gTnVtYmVyKGNvdW50VG95cy50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyZW50Rm9yRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW1JRCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gYXJlYVRyZWUpIHtcclxuICAgICAgICAgICAgaWYgKCEoKF9hID0gZWxlbWVudC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cmVlLWNvbnRhaW5lcicpKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRUb3lzLnRleHRDb250ZW50ID0gKGNvdW50IC0gMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gYCR7cmlnaHR9cHhgO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IGAke2JvdHRvbX1weGA7XHJcbiAgICAgICAgICAgIHRyZWVJbWcuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC50YXJnZXQgIT09IGFyZWFUcmVlKSB7XHJcbiAgICAgICAgICAgIGlmICgoX2IgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jbGFzc0xpc3QuY29udGFpbnMoJ3RyZWUtY29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50VG95cy50ZXh0Q29udGVudCA9IChjb3VudCArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9IChfYyA9IGVsZW1lbnQucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnN0eWxlLnJpZ2h0O1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IChfZCA9IGVsZW1lbnQucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnN0eWxlLmJvdHRvbTtcclxuICAgICAgICAgICAgcGFyZW50Rm9yRWxlbWVudCA9PT0gbnVsbCB8fCBwYXJlbnRGb3JFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnRGb3JFbGVtZW50LmFwcGVuZChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJXcmFwcGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc25vd1N0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nub3ctaXRlbScpO1xyXG4gICAgICAgIGNvbnN0IHNub3dTY2VuZSA9IG5ldyBzbm93XzEuU25vd1NjZW5lKCk7XHJcbiAgICAgICAgc25vd1N0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FudmFzXCIpO1xyXG4gICAgICAgICAgICBpZiAoc25vd1N0YXJ0LmNsYXNzTmFtZSA9PT0gJ3Nub3ctaXRlbScpIHtcclxuICAgICAgICAgICAgICAgIHNub3dTY2VuZS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNub3dTdGFydC5jbGFzc0xpc3QuYWRkKCdwbGF5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzbm93U2NlbmUucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbm93U3RhcnQuY2xhc3NMaXN0LnJlbW92ZSgncGxheScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgYmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgYmdDb250YWluZXIgPT09IG51bGwgfHwgYmdDb250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJnQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaG9pY2VCYWNrZ3JvdW5kKTtcclxuICAgICAgICBjb25zdCB0cmVlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyZWUtY2hvb3NlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRyZWVDb250YWluZXIgPT09IG51bGwgfHwgdHJlZUNvbnRhaW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdHJlZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hvaWNlVHJlZSk7XHJcbiAgICAgICAgY29uc3QgZ2FybGFuZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJsYW5kLWJ0bi1jb250YWluZXInKTtcclxuICAgICAgICBnYXJsYW5kQnV0dG9uID09PSBudWxsIHx8IGdhcmxhbmRCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdhcmxhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrQnV0dG9uR2FybGFuZCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLWlucHV0Jyk7XHJcbiAgICAgICAgaW5wdXRTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrQnV0dG9uR2FybGFuZCk7XHJcbiAgICAgICAgY29uc3QgcGxheUF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLWl0ZW0nKTtcclxuICAgICAgICBwbGF5QXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXlBbmRTdG9wQXVkaW8pO1xyXG4gICAgICAgIGNvbnN0IHRveXNGYXZvcml0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZS10b3lzLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZSA9IG5ldyBsb2NhbFN0b3JhZ2VfMS5Mb2NhbFN0b3JhZ2VVdGlsKCk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RUd2VudHlUb3lzID0gZGF0YV8xLmRlZmF1bHQuc2xpY2UoMCwgMjApO1xyXG4gICAgICAgIGZ1bmN0aW9uIGFsbG93RHJvcChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZSgpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBkYXRhXzEuZGVmYXVsdC5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZSgpLmluY2x1ZGVzKGNhcmQubnVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlVG95c0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZVRveXNJdGVtLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlLXRveXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZVRveXNJdGVtLmlkID0gYHNsb3Qke2NhcmQubnVtfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVUb3lzSXRlbS5kYXRhc2V0LmlkID0gY2FyZC5udW07XHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVUb3lzSXRlbS5vbmRyYWdvdmVyID0gYWxsb3dEcm9wO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVDb3VudC5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZS1jb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlQ291bnQuaW5uZXJIVE1MID0gY2FyZC5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZVRveXNJdGVtLmFwcGVuZChmYXZvcml0ZUNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBOdW1iZXIoY2FyZC5jb3VudCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3lzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRveXNJbWcuc3JjID0gYC4vYXNzZXRzL3RveXMvJHtjYXJkLm51bX0ud2VicGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRveXNJbWcuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRveXNJbWcuaWQgPSBgdG95JHtjYXJkLm51bX0tJHtpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRveXNJbWcuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG95c0ltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nJywgYCR7Y2FyZC5udW19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRveXNJbWcuYWx0ID0gJ3RveSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRveXNJbWcuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgR2FtZS5kcmFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVUb3lzSXRlbS5hcHBlbmRDaGlsZCh0b3lzSW1nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG95c0Zhdm9yaXRlQ29udGFpbmVyLmFwcGVuZChmYXZvcml0ZVRveXNJdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaXJzdFR3ZW50eVRveXMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmF2b3JpdGVUb3lzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGVUb3lzSXRlbS5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZS10b3lzJyk7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZVRveXNJdGVtLmlkID0gYHNsb3Qke2NhcmQubnVtfWA7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZVRveXNJdGVtLmRhdGFzZXQuaWQgPSBjYXJkLm51bTtcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlVG95c0l0ZW0ub25kcmFnb3ZlciA9IGFsbG93RHJvcDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZUNvdW50LmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlLWNvdW50Jyk7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZUNvdW50LmlubmVySFRNTCA9IGNhcmQuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZVRveXNJdGVtLmFwcGVuZChmYXZvcml0ZUNvdW50KTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE51bWJlcihjYXJkLmNvdW50KTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG95c0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRveXNJbWcuc3JjID0gYC4vYXNzZXRzL3RveXMvJHtjYXJkLm51bX0ud2VicGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG95c0ltZy5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZS1pbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0b3lzSW1nLmlkID0gYHRveSR7Y2FyZC5udW19LSR7aX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRveXNJbWcuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3lzSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1pbWcnLCBgJHtjYXJkLm51bX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB0b3lzSW1nLmFsdCA9ICd0b3knO1xyXG4gICAgICAgICAgICAgICAgICAgIHRveXNJbWcuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgR2FtZS5kcmFnKTtcclxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZVRveXNJdGVtLmFwcGVuZENoaWxkKHRveXNJbWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG95c0Zhdm9yaXRlQ29udGFpbmVyLmFwcGVuZChmYXZvcml0ZVRveXNJdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuR2FtZSA9IEdhbWU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuTWFpblBhZ2UgPSB2b2lkIDA7XHJcbmNvbnN0IHBhZ2VzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29yZS90ZW1wbGF0ZXMvcGFnZXNcIik7XHJcbmNsYXNzIE1haW5QYWdlIGV4dGVuZHMgcGFnZXNfMS5QYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkKSB7XHJcbiAgICAgICAgc3VwZXIoaWQpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyV3JhcHBlcigpIHtcclxuICAgICAgICBjb25zdCBsaW5rTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rczpudGgtY2hpbGQoMSknKTtcclxuICAgICAgICBjb25zdCBsaW5rVG95cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rczpudGgtY2hpbGQoMiknKTtcclxuICAgICAgICBjb25zdCBsaW5rR2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rczpudGgtY2hpbGQoMyknKTtcclxuICAgICAgICBsaW5rVG95cy5jbGFzc0xpc3QucmVtb3ZlKCdsaW5rcy1hY3RpdmUnKTtcclxuICAgICAgICBsaW5rR2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdsaW5rcy1hY3RpdmUnKTtcclxuICAgICAgICBsaW5rTWFpbi5jbGFzc0xpc3QuYWRkKCdsaW5rcy1hY3RpdmUnKTtcclxuICAgICAgICBjb25zdCB3cmFwcGVyTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBwZXJNYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tcGFnZScpO1xyXG4gICAgICAgIHdyYXBwZXJNYWluLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1wYWdlLWJhbGwgYmFsbDFcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1wYWdlLWJhbGwgYmFsbDJcIj48L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJtYWluLXBhZ2UtdGl0bGVcIj7QndC+0LLQvtCz0L7QtNC90Y/RjyDQuNCz0YDQsCA8c3Bhbj5cItCd0LDRgNGP0LTQuCDRkdC70LrRg1wiPC9zcGFuPjwvaDE+XHJcbiAgICAgICAgPGEgaHJlZj1cIiN0b3lzLXBhZ2VcIiBjbGFzcz1cImJ0bi1tYWluLXBhZ2VcIj7QndCw0YfQsNGC0Yw8L2E+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQod3JhcHBlck1haW4pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyV3JhcHBlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1haW5QYWdlID0gTWFpblBhZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVG95cyA9IHZvaWQgMDtcclxuY29uc3QgcGFnZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb3JlL3RlbXBsYXRlcy9wYWdlc1wiKTtcclxuY29uc3QgZGF0YV8xID0gcmVxdWlyZShcIi4uLy4uL2RhdGFcIik7XHJcbnJlcXVpcmUoXCIuLi8uLi9ub3Vpc2xpZGVyL3NsaWRlci5jc3NcIik7XHJcbnJlcXVpcmUoXCIuLi8uLi9ub3Vpc2xpZGVyL3NsaWRlckN1c3RvbS5jc3NcIik7XHJcbmNvbnN0IHNsaWRlcl9xdWFudGl0eV8xID0gcmVxdWlyZShcIi4uLy4uL25vdWlzbGlkZXIvc2xpZGVyLXF1YW50aXR5XCIpO1xyXG5jb25zdCBzbGlkZXJfeWVhcl8xID0gcmVxdWlyZShcIi4uLy4uL25vdWlzbGlkZXIvc2xpZGVyLXllYXJcIik7XHJcbmNvbnN0IGxvY2FsU3RvcmFnZV8xID0gcmVxdWlyZShcIi4uLy4uL2xvY2FsLXN0b3JhZ2UvbG9jYWxTdG9yYWdlXCIpO1xyXG5jb25zdCBGaWx0ZXJCdXR0b25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGZpbHRlcjogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZmlsdGVyOiAn0LrQvtC70L7QutC+0LvRjNGH0LjQuicsXHJcbiAgICAgICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBmaWx0ZXI6ICfRiNC40YjQutCwJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZmlsdGVyOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZmlsdGVyOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LfQtdC70ZHQvdGL0LknLFxyXG4gICAgfVxyXG5dO1xyXG5jb25zdCBTaXplQnV0dG9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzaXplOiAn0LzQsNC70YvQuScsXHJcbiAgICB9LFxyXG5dO1xyXG5jb25zdCBPcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRleHQ6ICfQktGL0LHRgNCw0YLRjCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdmFsdWU6ICdzb3J0LW5hbWUtbWF4JyxcclxuICAgICAgICB0ZXh0OiAn0J/QviDQvdCw0LfQstCw0L3QuNGOINC+0YIgwqvQkMK7INC00L4gwqvQr8K7J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB2YWx1ZTogJ3NvcnQtbmFtZS1taW4nLFxyXG4gICAgICAgIHRleHQ6ICfQn9C+INC90LDQt9Cy0LDQvdC40Y4g0L7RgiDCq9Cvwrsg0LTQviDCq9CQwrsnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHZhbHVlOiAnc29ydC15ZWFyLW1heCcsXHJcbiAgICAgICAgdGV4dDogJ9Cf0L4g0LPQvtC00YMg0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB2YWx1ZTogJ3NvcnQteWVhci1taW4nLFxyXG4gICAgICAgIHRleHQ6ICfQn9C+INCz0L7QtNGDINC/0L4g0YPQsdGL0LLQsNC90LjRjidcclxuICAgIH1cclxuXTtcclxuY2xhc3MgVG95cyBleHRlbmRzIHBhZ2VzXzEuUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xyXG4gICAgICAgIHN1cGVyKGlkKTtcclxuICAgICAgICB0aGlzLmNsaWNrRmlsdGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRveXMnKTtcclxuICAgICAgICAgICAgY29uc3QgZmF2b3JpdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVjay1mYXZvcml0ZScpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5RdWFudGl0eSA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluLXF1YW50aXR5JykudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5taW5RdWFudGl0eSA9IG1pblF1YW50aXR5O1xyXG4gICAgICAgICAgICBjb25zdCBtYXhRdWFudGl0eSA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF4LXF1YW50aXR5JykudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5tYXhRdWFudGl0eSA9IG1heFF1YW50aXR5O1xyXG4gICAgICAgICAgICBjb25zdCBtaW5ZZWFyID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4teWVhcicpLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMubWluWWVhciA9IG1pblllYXI7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFllYXIgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC15ZWFyJykudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5tYXhZZWFyID0gbWF4WWVhcjtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQtc2VsZWN0Jykub3B0aW9ucy5zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC1zZWxlY3QnKS5vcHRpb25zW3NlbGVjdF0udmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zLm9wdGlvbnNWYWx1ZSA9IG9wdGlvbnNWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhSUQgPSB0YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoUGFyYW1zLnNoYXBlcy5pbmNsdWRlcyhkYXRhSUQpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5zaGFwZXMuc3BsaWNlKHRoaXMuc2VhcmNoUGFyYW1zLnNoYXBlcy5pbmRleE9mKGRhdGFJRCksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1zaGFwZScpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5zaGFwZXMucHVzaChkYXRhSUQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFBhcmFtcy5jb2xvcnMuaW5jbHVkZXMoZGF0YUlEKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuY29sb3JzLnNwbGljZSh0aGlzLnNlYXJjaFBhcmFtcy5jb2xvcnMuaW5kZXhPZihkYXRhSUQpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tY29sb3InKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuY29sb3JzLnB1c2goZGF0YUlEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hQYXJhbXMuc2l6ZXMuaW5jbHVkZXMoZGF0YUlEKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuc2l6ZXMuc3BsaWNlKHRoaXMuc2VhcmNoUGFyYW1zLnNpemVzLmluZGV4T2YoZGF0YUlEKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXNpemUnKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuc2l6ZXMucHVzaChkYXRhSUQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBkYXRhXzEuZGVmYXVsdDtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFBhcmFtcy5zaGFwZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFBhcmFtcy5zaGFwZXMuaW5jbHVkZXMoaXRlbS5zaGFwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hQYXJhbXMuY29sb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hQYXJhbXMuY29sb3JzLmluY2x1ZGVzKGl0ZW0uY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoUGFyYW1zLnNpemVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hQYXJhbXMuc2l6ZXMuaW5jbHVkZXMoaXRlbS5zaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGZhdm9yaXRlSW5wdXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuZmF2b3JpdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hQYXJhbXMuZmF2b3JpdGUgPT09IGl0ZW0uZmF2b3JpdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoaXRlbS5jb3VudCkgPj0gdGhpcy5zZWFyY2hQYXJhbXMubWluUXVhbnRpdHkgJiYgTnVtYmVyKGl0ZW0uY291bnQpIDw9IHRoaXMuc2VhcmNoUGFyYW1zLm1heFF1YW50aXR5O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoaXRlbS55ZWFyKSA+PSB0aGlzLnNlYXJjaFBhcmFtcy5taW5ZZWFyICYmIE51bWJlcihpdGVtLnllYXIpIDw9IHRoaXMuc2VhcmNoUGFyYW1zLm1heFllYXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hQYXJhbXMub3B0aW9uc1ZhbHVlID09PSAnc29ydC1uYW1lLW1heCcpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zb3J0KGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHgubmFtZSA8IHkubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4Lm5hbWUgPiB5Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWFyY2hQYXJhbXMub3B0aW9uc1ZhbHVlID09PSAnc29ydC1uYW1lLW1pbicpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zb3J0KGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHgubmFtZSA+IHkubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4Lm5hbWUgPCB5Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWFyY2hQYXJhbXMub3B0aW9uc1ZhbHVlID09PSAnc29ydC15ZWFyLW1heCcpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zb3J0KGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcih4LnllYXIpIDwgTnVtYmVyKHkueWVhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHgueWVhcikgPiBOdW1iZXIoeS55ZWFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlYXJjaFBhcmFtcy5vcHRpb25zVmFsdWUgPT09ICdzb3J0LXllYXItbWluJykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNvcnQoZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHgueWVhcikgPiBOdW1iZXIoeS55ZWFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoeC55ZWFyKSA8IE51bWJlcih5LnllYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVTZWFyY2ggPSBzZWFyY2gudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZVNlYXJjaCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWVTZWFyY2gpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzQ29udGFpbmVyLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cIm5vLXRveXNcIj7QmNC30LLQtdC90LjRgtC1LCDRgdC+0LLQv9Cw0LTQtdC90LjQuSDQvdC1INC90LDQudC00LXQvdC+PC9wPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNhcmRzKGNhcmRzKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDYXJkcyhyZXN1bHQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jbGlja1RveXNDYXJkcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaG9zZW5Ub3lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlcyBzcGFuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgdG95SUQgPSB0YXJnZXQuY2xvc2VzdCgnLnRveXMnKS5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2UgPSBuZXcgbG9jYWxTdG9yYWdlXzEuTG9jYWxTdG9yYWdlVXRpbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBnZXRMb2NhbFN0b3JlID0gbG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZXRMb2NhbFN0b3JlID0gbG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZSh0b3lJRCk7XHJcbiAgICAgICAgICAgIGlmIChnZXRMb2NhbFN0b3JlLmxlbmd0aCA+IDE5KSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn0JjQt9Cy0LjQvdC40YLQtSDRg9C20LUg0LLRgdC1INGB0LvQvtGC0Ysg0LfQsNC90Y/RgtGLJyk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCgnLnRveXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChnZXRMb2NhbFN0b3JlLmluY2x1ZGVzKHRveUlEKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QoJy50b3lzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBjaG9zZW5Ub3lzLmlubmVySFRNTCA9IGAke3NldExvY2FsU3RvcmUudG95RmF2b3JpdGVzLmxlbmd0aH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QoJy50b3lzJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBjaG9zZW5Ub3lzLmlubmVySFRNTCA9IGAke3NldExvY2FsU3RvcmUudG95RmF2b3JpdGVzLmxlbmd0aH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX3dyYXBwZXInKTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVQYWdlKHdyYXBwZXJNYWluKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5hZnRlclJlbmRlcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHNoYXBlczogW10sXHJcbiAgICAgICAgICAgIGNvbG9yczogW10sXHJcbiAgICAgICAgICAgIHNpemVzOiBbXSxcclxuICAgICAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBtaW5RdWFudGl0eTogbnVsbCxcclxuICAgICAgICAgICAgbWF4UXVhbnRpdHk6IG51bGwsXHJcbiAgICAgICAgICAgIG1pblllYXI6IG51bGwsXHJcbiAgICAgICAgICAgIG1heFllYXI6IG51bGwsXHJcbiAgICAgICAgICAgIG9wdGlvbnNWYWx1ZTogJycsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlbmRlcldyYXBwZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGlua1RveXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDIpJyk7XHJcbiAgICAgICAgY29uc3QgbGlua01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDEpJyk7XHJcbiAgICAgICAgY29uc3QgbGlua0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDMpJyk7XHJcbiAgICAgICAgbGlua01haW4uY2xhc3NMaXN0LnJlbW92ZSgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgbGlua0dhbWUuY2xhc3NMaXN0LnJlbW92ZSgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgbGlua1RveXMuY2xhc3NMaXN0LmFkZCgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRfc2VhcmNoJyk7XHJcbiAgICAgICAgaW5wdXRTZWFyY2guZm9jdXMoKTtcclxuICAgICAgICBjb25zdCB3cmFwcGVyTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBwZXJNYWluLmNsYXNzTGlzdC5hZGQoJ21haW5fd3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUGFnZSh3cmFwcGVyTWFpbik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHdyYXBwZXJNYWluKTtcclxuICAgIH1cclxuICAgIHJlbmRlckNhcmRzKGNhcmRzKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XHJcbiAgICAgICAgY29uc3Qgc2hhcGVBcnIgPSBjYXJkcztcclxuICAgICAgICBzaGFwZUFyci5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3QgaW5mb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgICAgICBpbmZvQ2FyZC5jbGFzc0xpc3QuYWRkKCd0b3lzLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIGluZm9DYXJkLmlubmVySFRNTCA9IGNhcmQubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGltYWdlQ2FyZC5jbGFzc0xpc3QuYWRkKCd0b3lzLWltZycpO1xyXG4gICAgICAgICAgICBpbWFnZUNhcmQuc3JjID0gYGFzc2V0cy90b3lzLyR7Y2FyZC5udW19LndlYnBgO1xyXG4gICAgICAgICAgICBpbWFnZUNhcmQuYWx0ID0gJ3RveSc7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmREZXNjQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuY2xhc3NMaXN0LmFkZCgndG95cy1kZXNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY291bnQuY2xhc3NMaXN0LmFkZCgnY291bnQnKTtcclxuICAgICAgICAgICAgY291bnQuZGF0YXNldC5jb3VudCA9IGNhcmQuY291bnQ7XHJcbiAgICAgICAgICAgIGNvdW50LmlubmVySFRNTCA9IGDQmtC+0LvQuNGH0LXRgdGC0LLQvjogPHNwYW4+JHtjYXJkLmNvdW50fTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICB5ZWFyLmNsYXNzTGlzdC5hZGQoJ3llYXInKTtcclxuICAgICAgICAgICAgeWVhci5kYXRhc2V0LnllYXIgPSBjYXJkLnllYXI7XHJcbiAgICAgICAgICAgIHllYXIuaW5uZXJIVE1MID0gYNCT0L7QtDogPHNwYW4+JHtjYXJkLnllYXJ9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBzaGFwZS5jbGFzc0xpc3QuYWRkKCdzaGFwZScpO1xyXG4gICAgICAgICAgICBzaGFwZS5kYXRhc2V0LnNoYXBlID0gY2FyZC5zaGFwZTtcclxuICAgICAgICAgICAgc2hhcGUuaW5uZXJIVE1MID0gYNCk0L7RgNC80LA6IDxzcGFuPiR7Y2FyZC5zaGFwZX08L3NwYW4+YDtcclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbG9yLmNsYXNzTGlzdC5hZGQoJ2NvbG9yJyk7XHJcbiAgICAgICAgICAgIGNvbG9yLmRhdGFzZXQuY29sb3IgPSBjYXJkLmNvbG9yO1xyXG4gICAgICAgICAgICBjb2xvci5pbm5lckhUTUwgPSBg0KbQstC10YI6IDxzcGFuPiR7Y2FyZC5jb2xvcn08L3NwYW4+YDtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgc2l6ZS5jbGFzc0xpc3QuYWRkKCdzaXplJyk7XHJcbiAgICAgICAgICAgIHNpemUuZGF0YXNldC5zaXplID0gY2FyZC5zaXplO1xyXG4gICAgICAgICAgICBzaXplLmlubmVySFRNTCA9IGDQoNCw0LfQvNC10YA6IDxzcGFuPiR7Y2FyZC5zaXplfTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICBjb25zdCBmYXZvcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUnKTtcclxuICAgICAgICAgICAgaWYgKGNhcmQuZmF2b3JpdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlLmRhdGFzZXQuZmF2b3JpdGUgPSBgJHtjYXJkLmZhdm9yaXRlfWA7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZS5pbm5lckhUTUwgPSBg0JvRjtCx0LjQvNCw0Y86IDxzcGFuPtCU0LA8L3NwYW4+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlLmRhdGFzZXQuZmF2b3JpdGUgPSBgJHtjYXJkLmZhdm9yaXRlfWA7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZS5pbm5lckhUTUwgPSBg0JvRjtCx0LjQvNCw0Y86IDxzcGFuPtCd0LXRgjwvc3Bhbj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGFwZS5jbGFzc0xpc3QuYWRkKCd0YXBlJyk7XHJcbiAgICAgICAgICAgIHRveS5hcHBlbmQoaW5mb0NhcmQpO1xyXG4gICAgICAgICAgICB0b3kuYXBwZW5kKGltYWdlQ2FyZCk7XHJcbiAgICAgICAgICAgIHRveS5hcHBlbmQoY2FyZERlc2NDb250KTtcclxuICAgICAgICAgICAgdG95LmFwcGVuZCh0YXBlKTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmFwcGVuZChjb3VudCk7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoeWVhcik7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoc2hhcGUpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKGNvbG9yKTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmFwcGVuZChzaXplKTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmFwcGVuZChmYXZvcml0ZSk7XHJcbiAgICAgICAgICAgIHRveS5jbGFzc0xpc3QuYWRkKCd0b3lzJyk7XHJcbiAgICAgICAgICAgIHRveS5kYXRhc2V0LmlkID0gY2FyZC5udW07XHJcbiAgICAgICAgICAgIGNhcmRzV3JhcHBlci5hcHBlbmQodG95KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbW92ZUNhcmRzKGNhcmQpIHtcclxuICAgICAgICBjYXJkLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJQYWdlKHdyYXBwZXIpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgZmlsdGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcicpO1xyXG4gICAgICAgIGZpbHRlckRpdi5pZCA9ICdmaWx0ZXInO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKGZpbHRlckRpdik7XHJcbiAgICAgICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKGNhcmRzKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJCb3gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZmlsdGVyQm94MS5jbGFzc05hbWUgPSAnYm94IGJveC1maWx0ZXJzJztcclxuICAgICAgICBmaWx0ZXJCb3gxLmlkID0gJ2JveDEnO1xyXG4gICAgICAgIGNvbnN0IGJveDFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgYm94MVRpdGxlLmlubmVySFRNTCA9ICfQpNC40LvRjNGC0YDRiyDQv9C+INC30L3QsNGH0LXQvdC40Y4nO1xyXG4gICAgICAgIGJveDFUaXRsZS5jbGFzc05hbWUgPSAnZmlsdGVyLXRpdGxlJztcclxuICAgICAgICBmaWx0ZXJCb3gxLmFwcGVuZChib3gxVGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHNoYXBlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2hhcGVCb3guY2xhc3NOYW1lID0gJ3NoYXBlLWNvbnRhaW5lcic7XHJcbiAgICAgICAgc2hhcGVCb3guaW5uZXJIVE1MID0gJ9Ck0L7RgNC80LA6ICc7XHJcbiAgICAgICAgRmlsdGVyQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0blNoYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ0blNoYXBlLmNsYXNzTGlzdC5hZGQoJ2J0bi1zaGFwZScpO1xyXG4gICAgICAgICAgICBidG5TaGFwZS5kYXRhc2V0LmlkID0gYnRuLmZpbHRlcjtcclxuICAgICAgICAgICAgc2hhcGVCb3guYXBwZW5kKGJ0blNoYXBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjb2xvckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbG9yQm94LmNsYXNzTmFtZSA9ICdjb2xvci1jb250YWluZXInO1xyXG4gICAgICAgIGNvbG9yQm94LmlubmVySFRNTCA9ICfQptCy0LXRgjogJztcclxuICAgICAgICBGaWx0ZXJCdXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgYnRuQ29sb3IuY2xhc3NOYW1lID0gJ2J0bi1jb2xvcic7XHJcbiAgICAgICAgICAgIGJ0bkNvbG9yLmRhdGFzZXQuaWQgPSBidG4uY29sb3I7XHJcbiAgICAgICAgICAgIGNvbG9yQm94LmFwcGVuZChidG5Db2xvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNpemVCb3guY2xhc3NOYW1lID0gJ3NpemUtY29udGFpbmVyJztcclxuICAgICAgICBzaXplQm94LmlubmVySFRNTCA9ICfQoNCw0LfQvNC10YA6ICc7XHJcbiAgICAgICAgU2l6ZUJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG5TaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ0blNpemUuY2xhc3NOYW1lID0gJ2J0bi1zaXplJztcclxuICAgICAgICAgICAgYnRuU2l6ZS5kYXRhc2V0LmlkID0gYnRuLnNpemU7XHJcbiAgICAgICAgICAgIHNpemVCb3guYXBwZW5kKGJ0blNpemUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZmF2b3JpdGVCb3guaW5uZXJIVE1MID0gJ9Ci0L7Qu9GM0LrQviDQu9GO0LHQuNC80YvQtTogJztcclxuICAgICAgICBmYXZvcml0ZUJveC5jbGFzc05hbWUgPSAnZmF2b3JpdGUnO1xyXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZhdm9yaXRlQ29udC5jbGFzc05hbWUgPSAnZmF2b3JpdGUtY29udGFpbmVyJztcclxuICAgICAgICBmYXZvcml0ZUJveC5hcHBlbmQoZmF2b3JpdGVDb250KTtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBmYXZvcml0ZUlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgIGZhdm9yaXRlSW5wdXQuY2xhc3NOYW1lID0gJ2lucHV0LWZhdm9yaXRlJztcclxuICAgICAgICBmYXZvcml0ZUlucHV0LmlkID0gJ2NoZWNrLWZhdm9yaXRlJztcclxuICAgICAgICBmYXZvcml0ZUNvbnQuYXBwZW5kKGZhdm9yaXRlSW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGZhdm9yaXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY2hlY2stZmF2b3JpdGUnKTtcclxuICAgICAgICBmYXZvcml0ZUxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbC1mYXZvcml0ZSc7XHJcbiAgICAgICAgZmF2b3JpdGVDb250LmFwcGVuZChmYXZvcml0ZUxhYmVsKTtcclxuICAgICAgICBmaWx0ZXJCb3gxLmFwcGVuZChzaGFwZUJveCk7XHJcbiAgICAgICAgZmlsdGVyQm94MS5hcHBlbmQoY29sb3JCb3gpO1xyXG4gICAgICAgIGZpbHRlckJveDEuYXBwZW5kKHNpemVCb3gpO1xyXG4gICAgICAgIGZpbHRlckJveDEuYXBwZW5kKGZhdm9yaXRlQm94KTtcclxuICAgICAgICBmaWx0ZXJEaXYuYXBwZW5kKGZpbHRlckJveDEpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlckJveDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmaWx0ZXJCb3gyLmNsYXNzTmFtZSA9ICdib3ggYm94LXJhbmdlJztcclxuICAgICAgICBmaWx0ZXJCb3gyLmlkID0gJ2JveDInO1xyXG4gICAgICAgIGNvbnN0IGJveDJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgYm94MlRpdGxlLmNsYXNzTmFtZSA9ICdmaWx0ZXItdGl0bGUnO1xyXG4gICAgICAgIGJveDJUaXRsZS5pbm5lckhUTUwgPSAn0KTQuNC70YzRgtGA0Ysg0L/QviDQtNC40LDQv9Cw0LfQvtC90YMnO1xyXG4gICAgICAgIGZpbHRlckJveDIuYXBwZW5kKGJveDJUaXRsZSk7XHJcbiAgICAgICAgY29uc3QgY291bnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb3VudEJveC5jbGFzc05hbWUgPSAnZmlsdGVyLXF1YW50aXR5JztcclxuICAgICAgICBjb3VudEJveC5pbm5lckhUTUwgPSAn0JrQvtC70LjRh9C10YHRgtCy0L4g0Y3QutC30LXQvNC/0LvRj9GA0L7QsjogJztcclxuICAgICAgICBjb25zdCBjb3VudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvdW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXItZm9yLWZpbHRlcnMnO1xyXG4gICAgICAgIGNvdW50Qm94LmFwcGVuZENoaWxkKGNvdW50Q29udGFpbmVyKTtcclxuICAgICAgICBjb25zdCBjb3VudElucHV0TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb3VudElucHV0TWluLnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICBjb3VudElucHV0TWluLmNsYXNzTmFtZSA9ICdtaW4tcXVhbnRpdHknO1xyXG4gICAgICAgIGNvdW50SW5wdXRNaW4udmFsdWUgPSAnMSc7XHJcbiAgICAgICAgY291bnRJbnB1dE1pbi5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgY291bnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY291bnRJbnB1dE1pbik7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyUXVhbnRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzbGlkZXJRdWFudGl0eS5pZCA9ICdzbGlkZXItcXVhbnRpdHknO1xyXG4gICAgICAgIHNsaWRlclF1YW50aXR5LmNsYXNzTmFtZSA9ICdzbGlkZXItcXVhbnRpdHknO1xyXG4gICAgICAgIGNvdW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlclF1YW50aXR5KTtcclxuICAgICAgICBjb25zdCBjb3VudElucHV0TWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb3VudElucHV0TWF4LnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICBjb3VudElucHV0TWF4LmNsYXNzTmFtZSA9ICdtYXgtcXVhbnRpdHknO1xyXG4gICAgICAgIGNvdW50SW5wdXRNYXgudmFsdWUgPSAnMTInO1xyXG4gICAgICAgIGNvdW50SW5wdXRNYXgucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgIGNvdW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvdW50SW5wdXRNYXgpO1xyXG4gICAgICAgIGNvbnN0IHllYXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB5ZWFyQm94LmNsYXNzTmFtZSA9ICdmaWx0ZXIteWVhcic7XHJcbiAgICAgICAgeWVhckJveC5pbm5lckhUTUwgPSAn0JPQvtC0INC/0YDQuNC+0LHRgNC10YLQtdC90LjRjzogJztcclxuICAgICAgICBjb25zdCBzbGlkZXJDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNsaWRlckNvdW50LmNsYXNzTmFtZSA9ICdjb250YWluZXItZm9yLWZpbHRlcnMnO1xyXG4gICAgICAgIHllYXJCb3guYXBwZW5kQ2hpbGQoc2xpZGVyQ291bnQpO1xyXG4gICAgICAgIGNvbnN0IHllYXJJbnB1dE1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgeWVhcklucHV0TWluLnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICB5ZWFySW5wdXRNaW4uY2xhc3NOYW1lID0gJ21pbi15ZWFyJztcclxuICAgICAgICB5ZWFySW5wdXRNaW4udmFsdWUgPSAnMTk0MCc7XHJcbiAgICAgICAgeWVhcklucHV0TWluLnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICBzbGlkZXJDb3VudC5hcHBlbmRDaGlsZCh5ZWFySW5wdXRNaW4pO1xyXG4gICAgICAgIGNvbnN0IHNsaWRlclllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzbGlkZXJZZWFyLmlkID0gJ3NsaWRlci15ZWFyJztcclxuICAgICAgICBzbGlkZXJZZWFyLmNsYXNzTmFtZSA9ICdzbGlkZXIteWVhcic7XHJcbiAgICAgICAgc2xpZGVyQ291bnQuYXBwZW5kQ2hpbGQoc2xpZGVyWWVhcik7XHJcbiAgICAgICAgY29uc3QgeWVhcklucHV0TWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB5ZWFySW5wdXRNYXgudHlwZSA9ICdudW1iZXInO1xyXG4gICAgICAgIHllYXJJbnB1dE1heC5jbGFzc05hbWUgPSAnbWF4LXllYXInO1xyXG4gICAgICAgIHllYXJJbnB1dE1heC52YWx1ZSA9ICcyMDIwJztcclxuICAgICAgICB5ZWFySW5wdXRNYXgucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgIHNsaWRlckNvdW50LmFwcGVuZENoaWxkKHllYXJJbnB1dE1heCk7XHJcbiAgICAgICAgZmlsdGVyQm94Mi5hcHBlbmQoY291bnRCb3gpO1xyXG4gICAgICAgIGZpbHRlckJveDIuYXBwZW5kKHllYXJCb3gpO1xyXG4gICAgICAgIGZpbHRlckRpdi5hcHBlbmQoZmlsdGVyQm94Mik7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyQm94MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZpbHRlckJveDMuY2xhc3NOYW1lID0gJ2JveCBib3gtc29ydCc7XHJcbiAgICAgICAgZmlsdGVyQm94My5pZCA9ICdib3gzJztcclxuICAgICAgICBjb25zdCBib3gzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGJveDNUaXRsZS5jbGFzc05hbWUgPSAnZmlsdGVyLXRpdGxlJztcclxuICAgICAgICBib3gzVGl0bGUuaW5uZXJIVE1MID0gJ9Ch0L7RgNGC0LjRgNC+0LLQutCwJztcclxuICAgICAgICBmaWx0ZXJCb3gzLmFwcGVuZChib3gzVGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSAnc29ydC1zZWxlY3QnO1xyXG4gICAgICAgIE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb24udmFsdWU7XHJcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9uLnRleHQ7XHJcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmlsdGVyQm94My5hcHBlbmQoc2VsZWN0KTtcclxuICAgICAgICBjb25zdCBidG5SZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0blJlc2V0LmNsYXNzTmFtZSA9ICdyZXNldCc7XHJcbiAgICAgICAgYnRuUmVzZXQudHlwZSA9ICdyZXNldCc7XHJcbiAgICAgICAgYnRuUmVzZXQuaW5uZXJIVE1MID0gJ9Ch0LHRgNC+0YEg0YTQuNC70YzRgtGA0L7Qsic7XHJcbiAgICAgICAgZmlsdGVyQm94My5hcHBlbmQoYnRuUmVzZXQpO1xyXG4gICAgICAgIGZpbHRlckRpdi5hcHBlbmQoZmlsdGVyQm94Myk7XHJcbiAgICAgICAgZGF0YV8xLmRlZmF1bHQuZm9yRWFjaCh0b3lzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG95ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZm9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICAgICAgaW5mb0NhcmQuY2xhc3NMaXN0LmFkZCgndG95cy10aXRsZScpO1xyXG4gICAgICAgICAgICBpbmZvQ2FyZC5pbm5lckhUTUwgPSB0b3lzLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWFnZUNhcmQuY2xhc3NMaXN0LmFkZCgndG95cy1pbWcnKTtcclxuICAgICAgICAgICAgaW1hZ2VDYXJkLnNyYyA9IGBhc3NldHMvdG95cy8ke3RveXMubnVtfS53ZWJwYDtcclxuICAgICAgICAgICAgaW1hZ2VDYXJkLmFsdCA9ICd0b3knO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkRGVzY0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmNsYXNzTGlzdC5hZGQoJ3RveXMtZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvdW50LmNsYXNzTGlzdC5hZGQoJ2NvdW50Jyk7XHJcbiAgICAgICAgICAgIGNvdW50LmRhdGFzZXQuY291bnQgPSB0b3lzLmNvdW50O1xyXG4gICAgICAgICAgICBjb3VudC5pbm5lckhUTUwgPSBg0JrQvtC70LjRh9C10YHRgtCy0L46IDxzcGFuPiR7dG95cy5jb3VudH08L3NwYW4+YDtcclxuICAgICAgICAgICAgY29uc3QgeWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgeWVhci5jbGFzc0xpc3QuYWRkKCd5ZWFyJyk7XHJcbiAgICAgICAgICAgIHllYXIuZGF0YXNldC55ZWFyID0gdG95cy55ZWFyO1xyXG4gICAgICAgICAgICB5ZWFyLmlubmVySFRNTCA9IGDQk9C+0LQ6IDxzcGFuPiR7dG95cy55ZWFyfTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgc2hhcGUuY2xhc3NMaXN0LmFkZCgnc2hhcGUnKTtcclxuICAgICAgICAgICAgc2hhcGUuZGF0YXNldC5zaGFwZSA9IHRveXMuc2hhcGU7XHJcbiAgICAgICAgICAgIHNoYXBlLmlubmVySFRNTCA9IGDQpNC+0YDQvNCwOiA8c3Bhbj4ke3RveXMuc2hhcGV9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb2xvci5jbGFzc0xpc3QuYWRkKCdjb2xvcicpO1xyXG4gICAgICAgICAgICBjb2xvci5kYXRhc2V0LmNvbG9yID0gdG95cy5jb2xvcjtcclxuICAgICAgICAgICAgY29sb3IuaW5uZXJIVE1MID0gYNCm0LLQtdGCOiA8c3Bhbj4ke3RveXMuY29sb3J9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHNpemUuY2xhc3NMaXN0LmFkZCgnc2l6ZScpO1xyXG4gICAgICAgICAgICBzaXplLmRhdGFzZXQuc2l6ZSA9IHRveXMuc2l6ZTtcclxuICAgICAgICAgICAgc2l6ZS5pbm5lckhUTUwgPSBg0KDQsNC30LzQtdGAOiA8c3Bhbj4ke3RveXMuc2l6ZX08L3NwYW4+YDtcclxuICAgICAgICAgICAgY29uc3QgZmF2b3JpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGZhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlJyk7XHJcbiAgICAgICAgICAgIGlmICh0b3lzLmZhdm9yaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZS5kYXRhc2V0LmZhdm9yaXRlID0gYCR7dG95cy5mYXZvcml0ZX1gO1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGUuaW5uZXJIVE1MID0gYNCb0Y7QsdC40LzQsNGPOiA8c3Bhbj7QlNCwPC9zcGFuPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZS5kYXRhc2V0LmZhdm9yaXRlID0gYCR7dG95cy5mYXZvcml0ZX1gO1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGUuaW5uZXJIVE1MID0gYNCb0Y7QsdC40LzQsNGPOiA8c3Bhbj7QndC10YI8L3NwYW4+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0YXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRhcGUuY2xhc3NMaXN0LmFkZCgndGFwZScpO1xyXG4gICAgICAgICAgICB0b3kuYXBwZW5kKGluZm9DYXJkKTtcclxuICAgICAgICAgICAgdG95LmFwcGVuZChpbWFnZUNhcmQpO1xyXG4gICAgICAgICAgICB0b3kuYXBwZW5kKGNhcmREZXNjQ29udCk7XHJcbiAgICAgICAgICAgIHRveS5hcHBlbmQodGFwZSk7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoY291bnQpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKHllYXIpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKHNoYXBlKTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmFwcGVuZChjb2xvcik7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoc2l6ZSk7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoZmF2b3JpdGUpO1xyXG4gICAgICAgICAgICB0b3kuY2xhc3NMaXN0LmFkZCgndG95cycpO1xyXG4gICAgICAgICAgICB0b3kuZGF0YXNldC5pZCA9IHRveXMubnVtO1xyXG4gICAgICAgICAgICBjYXJkcy5hcHBlbmQodG95KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbW92ZVBhZ2UocGFnZSkge1xyXG4gICAgICAgIHBhZ2UucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJXcmFwcGVyKCk7XHJcbiAgICAgICAgY29uc3QgY2hvc2VuVG95cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZXMgc3BhbicpO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZSA9IG5ldyBsb2NhbFN0b3JhZ2VfMS5Mb2NhbFN0b3JhZ2VVdGlsKCk7XHJcbiAgICAgICAgY29uc3QgZ2V0TG9jYWxTdG9yZSA9IGxvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBjaG9zZW5Ub3lzLmlubmVySFRNTCA9IGAke2dldExvY2FsU3RvcmUubGVuZ3RofWA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlID0gbmV3IGxvY2FsU3RvcmFnZV8xLkxvY2FsU3RvcmFnZVV0aWwoKTtcclxuICAgICAgICBjb25zdCBnZXRMb2NhbFN0b3JlID0gbG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIGNvbnN0IHRveXNJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b3lzJyk7XHJcbiAgICAgICAgdG95c0lELmZvckVhY2goKHRveSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2V0TG9jYWxTdG9yZS5pbmNsdWRlcyh0b3kuZGF0YXNldC5pZCkpIHtcclxuICAgICAgICAgICAgICAgIHRveS5jbGFzc05hbWUgPSAndG95cyBhY3RpdmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG95LmNsYXNzTmFtZSA9ICd0b3lzJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICgwLCBzbGlkZXJfcXVhbnRpdHlfMS5xdWFudGl0eVNsaWRlcikoKTtcclxuICAgICAgICAoMCwgc2xpZGVyX3llYXJfMS55ZWFyU2xpZGVyKSgpO1xyXG4gICAgICAgIGNvbnN0IHNoYXBlQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGFwZS1jb250YWluZXInKTtcclxuICAgICAgICBzaGFwZUNvbnQgPT09IG51bGwgfHwgc2hhcGVDb250ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaGFwZUNvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBjb2xvckNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3ItY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29sb3JDb250ID09PSBudWxsIHx8IGNvbG9yQ29udCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29sb3JDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0ZpbHRlcik7XHJcbiAgICAgICAgY29uc3Qgc2l6ZUNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l6ZS1jb250YWluZXInKTtcclxuICAgICAgICBzaXplQ29udCA9PT0gbnVsbCB8fCBzaXplQ29udCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2l6ZUNvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZScpO1xyXG4gICAgICAgIGZhdm9yaXRlID09PSBudWxsIHx8IGZhdm9yaXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmYXZvcml0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tGaWx0ZXIpO1xyXG4gICAgICAgIGNvbnN0IG1pblF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbi1xdWFudGl0eScpO1xyXG4gICAgICAgIG1pblF1YW50aXR5ID09PSBudWxsIHx8IG1pblF1YW50aXR5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtaW5RdWFudGl0eS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNsaWNrRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBtYXhRdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXgtcXVhbnRpdHknKTtcclxuICAgICAgICBtYXhRdWFudGl0eSA9PT0gbnVsbCB8fCBtYXhRdWFudGl0eSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF4UXVhbnRpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jbGlja0ZpbHRlcik7XHJcbiAgICAgICAgY29uc3QgbWluWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4teWVhcicpO1xyXG4gICAgICAgIG1pblllYXIgPT09IG51bGwgfHwgbWluWWVhciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWluWWVhci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNsaWNrRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBtYXhZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC15ZWFyJyk7XHJcbiAgICAgICAgbWF4WWVhciA9PT0gbnVsbCB8fCBtYXhZZWFyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtYXhZZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2xpY2tGaWx0ZXIpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC1zZWxlY3QnKTtcclxuICAgICAgICBzb3J0U2VsZWN0ID09PSBudWxsIHx8IHNvcnRTZWxlY3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNvcnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jbGlja0ZpbHRlcik7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5jbGlja0ZpbHRlcik7XHJcbiAgICAgICAgY29uc3QgYnRuUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKTtcclxuICAgICAgICBidG5SZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVzZXRCdXR0b24pO1xyXG4gICAgICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRveXMnKTtcclxuICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja1RveXNDYXJkcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Ub3lzID0gVG95cztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Tbm93Zmxha2UgPSBleHBvcnRzLlNub3dmbGFrZVBvc2l0aW9uID0gdm9pZCAwO1xyXG52YXIgU25vd2ZsYWtlUG9zaXRpb247XHJcbihmdW5jdGlvbiAoU25vd2ZsYWtlUG9zaXRpb24pIHtcclxuICAgIFNub3dmbGFrZVBvc2l0aW9uW1Nub3dmbGFrZVBvc2l0aW9uW1wiVE9QXCJdID0gMF0gPSBcIlRPUFwiO1xyXG4gICAgU25vd2ZsYWtlUG9zaXRpb25bU25vd2ZsYWtlUG9zaXRpb25bXCJCT1RUT01cIl0gPSAxXSA9IFwiQk9UVE9NXCI7XHJcbiAgICBTbm93Zmxha2VQb3NpdGlvbltTbm93Zmxha2VQb3NpdGlvbltcIkxFRlRcIl0gPSAyXSA9IFwiTEVGVFwiO1xyXG4gICAgU25vd2ZsYWtlUG9zaXRpb25bU25vd2ZsYWtlUG9zaXRpb25bXCJSSUdIVFwiXSA9IDNdID0gXCJSSUdIVFwiO1xyXG4gICAgU25vd2ZsYWtlUG9zaXRpb25bU25vd2ZsYWtlUG9zaXRpb25bXCJPTlNUQUdFXCJdID0gNF0gPSBcIk9OU1RBR0VcIjtcclxufSkoU25vd2ZsYWtlUG9zaXRpb24gPSBleHBvcnRzLlNub3dmbGFrZVBvc2l0aW9uIHx8IChleHBvcnRzLlNub3dmbGFrZVBvc2l0aW9uID0ge30pKTtcclxuY2xhc3MgU25vd2ZsYWtlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBcIiNmZmZmZmZcIjtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBTbm93Zmxha2VQb3NpdGlvbi5UT1A7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FudmFzIDJEIGNvbnRleHQgbm90IGZvdW5kLCBwbGVhc2UgY2hlY2sgaXQgaXMgcnVubmluZyBpbiBCcm93c2VyIGVudmlyb25tZW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSAmJiB0aGlzLnBvcyAhPT0gU25vd2ZsYWtlUG9zaXRpb24uT05TVEFHRSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvcyA9PT0gU25vd2ZsYWtlUG9zaXRpb24uTEVGVCB8fFxyXG4gICAgICAgICAgICB0aGlzLnBvcyA9PT0gU25vd2ZsYWtlUG9zaXRpb24uUklHSFQgfHxcclxuICAgICAgICAgICAgdGhpcy5wb3MgPT09IFNub3dmbGFrZVBvc2l0aW9uLkJPVFRPTSkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudnk7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudng7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSB0aGlzLmFscGhhO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy55IDwgLXRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gU25vd2ZsYWtlUG9zaXRpb24uVE9QO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQgKyB0aGlzLnJhZGl1cykge1xyXG4gICAgICAgICAgICB0aGlzLnBvcyA9IFNub3dmbGFrZVBvc2l0aW9uLkJPVFRPTTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy54IDwgLXRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gU25vd2ZsYWtlUG9zaXRpb24uTEVGVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy54ID4gdGhpcy5jYW52YXMud2lkdGggKyB0aGlzLnJhZGl1cykge1xyXG4gICAgICAgICAgICB0aGlzLnBvcyA9IFNub3dmbGFrZVBvc2l0aW9uLlJJR0hUO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb3MgPSBTbm93Zmxha2VQb3NpdGlvbi5PTlNUQUdFO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFsbG9jYXRlKCkge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogLXRoaXMuY2FudmFzLmhlaWdodDtcclxuICAgICAgICB0aGlzLnZ5ID0gMSArIE1hdGgucmFuZG9tKCkgKiAzO1xyXG4gICAgICAgIHRoaXMudnggPSAwLjUgLSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gMSArIE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwLjUgKyBNYXRoLnJhbmRvbSgpICogMC41O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU25vd2ZsYWtlID0gU25vd2ZsYWtlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNub3dTY2VuZSA9IHZvaWQgMDtcclxuY29uc3Qgc25vd19mbGFrZV8xID0gcmVxdWlyZShcIi4vc25vdy1mbGFrZVwiKTtcclxuY29uc3QgZGVmYXVsdFNub3dTY2VuZUNvbmZpZyA9IHtcclxuICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgIHZvbHVtbjogMzAwLFxyXG59O1xyXG5jbGFzcyBTbm93U2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyID0gXCJib2R5XCIsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSWQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSB0eXBlb2YgY29udGFpbmVyID09PSBcInN0cmluZ1wiID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpIDogY29udGFpbmVyO1xyXG4gICAgICAgIGlmIChjb250YWluZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbiBub3QgZmluZCBjb250YWluZXIgYnkgc3BlY2lmaWVkIHNlbGVjdG9yXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNub3dTY2VuZUNvbmZpZyksIGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5idWlsZFNjZW5lKCk7XHJcbiAgICB9XHJcbiAgICBwbGF5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbml0aWFsaXNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkU2NlbmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc25vd2ZsYWtlcy5mb3JFYWNoKChzKSA9PiAocy5hY3RpdmUgPSB0cnVlKSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFuaW1hdGlvbklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGVGcmFtZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc25vd2ZsYWtlcy5mb3JFYWNoKChzKSA9PiAocy5hY3RpdmUgPSBmYWxzZSkpO1xyXG4gICAgfVxyXG4gICAgYnVpbGRTY2VuZSgpIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICBjYW52YXMuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgICAgIGNhbnZhcy5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICBjYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGlmIChjdHgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc25vd2ZsYWtlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25maWcudm9sdW1uOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZmxha2UgPSBuZXcgc25vd19mbGFrZV8xLlNub3dmbGFrZSh0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgICAgIGZsYWtlLmNvbG9yID0gdGhpcy5jb25maWcuY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtlcy5wdXNoKGZsYWtlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95U2NlbmUoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMuY2FudmFzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlRnJhbWUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbnZhcyB8fCAhdGhpcy5jdHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5zbm93Zmxha2VzLmZvckVhY2goKGZsYWtlKSA9PiB7XHJcbiAgICAgICAgICAgIGZsYWtlLmRyYXcoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlICYmIHRoaXMuc25vd2ZsYWtlcy5ldmVyeSgoZmxha2UpID0+IGZsYWtlLnBvcyAhPT0gc25vd19mbGFrZV8xLlNub3dmbGFrZVBvc2l0aW9uLk9OU1RBR0UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSWQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lTY2VuZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnVwZGF0ZUZyYW1lKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNub3dTY2VuZSA9IFNub3dTY2VuZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2dsb2JhbC5jc3NcIik7XHJcbmNvbnN0IGFwcF8xID0gcmVxdWlyZShcIi4vcGFnZXMvYXBwL2FwcFwiKTtcclxuY29uc3QgYXBwID0gbmV3IGFwcF8xLkFwcCgpO1xyXG5hcHAucnVuKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==