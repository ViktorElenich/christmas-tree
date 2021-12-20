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
        favorites.innerHTML = `<span>0</span>`;
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
        this.container.append(wrapperHeader);
    }
    render() {
        this.renderPageButtons();
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
    creatHeaderTitle(text) {
        const headerTitle = document.createElement('h1');
        headerTitle.innerText = text;
        return headerTitle;
    }
    render() {
        return this.container;
    }
    afterRender() {
    }
}
exports.Page = Page;
Page.textObject = {};


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
class Game extends pages_1.Page {
    constructor(id) {
        super(id);
    }
    render() {
        const title = this.creatHeaderTitle(Game.textObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}
exports.Game = Game;
Game.textObject = {
    MainTitle: "Game Page",
};


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
const data_1 = __webpack_require__(/*! ../../data */ "./data.js");
__webpack_require__(/*! ../../nouislider/slider.css */ "./nouislider/slider.css");
__webpack_require__(/*! ../../nouislider/sliderCustom.css */ "./nouislider/sliderCustom.css");
const slider_quantity_1 = __webpack_require__(/*! ../../nouislider/slider-quantity */ "./nouislider/slider-quantity.ts");
const slider_year_1 = __webpack_require__(/*! ../../nouislider/slider-year */ "./nouislider/slider-year.ts");
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
        value: 'sort-name-max',
        text: 'По названию от «А» до «Я»'
    },
    {
        value: 'sort-name-min',
        text: 'По названию от «Я» до «А»'
    },
    {
        value: 'sort-count-max',
        text: 'По количеству по возрастанию'
    },
    {
        value: 'sort-count-min',
        text: 'По количеству по убыванию'
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
                this.searchParams.favorite.push(true);
                result = result.filter(item => {
                    if (this.searchParams.favorite.length > 0) {
                        return this.searchParams.favorite.includes(item.favorite);
                    }
                    return true;
                });
            }
            result = result.filter(item => {
                return Number(item.count) >= this.searchParams.minQuantity && Number(item.count) <= this.searchParams.maxQuantity;
            });
            result = result.filter(item => {
                return Number(item.year) >= this.searchParams.minYear && Number(item.year) <= this.searchParams.maxYear;
            });
            result = result.filter(item => {
                if (this.searchParams.optionsValue === 'sort-name-max') {
                    return result.sort(function (x, y) {
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
                    return result.sort(function (x, y) {
                        if (x.name > y.name) {
                            return -1;
                        }
                        if (x.name < y.name) {
                            return 1;
                        }
                        return 0;
                    });
                }
                else if (this.searchParams.optionsValue === 'sort-count-max') {
                    return result.sort(function (x, y) {
                        if (Number(x.count) < Number(y.count)) {
                            return -1;
                        }
                        if (Number(x.count) > Number(y.count)) {
                            return 1;
                        }
                        return 0;
                    });
                }
                else if (this.searchParams.optionsValue === 'sort-count-min') {
                    return result.sort(function (x, y) {
                        if (Number(x.count) > Number(y.count)) {
                            return -1;
                        }
                        if (Number(x.count) < Number(y.count)) {
                            return 1;
                        }
                        return 0;
                    });
                }
                return true;
            });
            const search = document.querySelector('#search');
            const valueSearch = search.value.trim().toLowerCase();
            if (valueSearch) {
                result = result.filter(item => {
                    return item.name.toLowerCase().includes(valueSearch);
                });
            }
            this.removeCards(cards);
            this.renderCards(result);
        };
        this.clickToysCards = (event) => {
            const chosenToys = document.querySelector('.favorites span');
            const target = event.target;
            const toyID = target.dataset.id;
            if (target.classList.contains('active')) {
                target.classList.remove('active');
            }
            else {
                target.classList.add('active');
            }
            if (this.chosen.includes(toyID)) {
                this.chosen.splice(this.chosen.indexOf(toyID), 1);
            }
            else {
                this.chosen.push(toyID);
            }
            if (this.chosen.length > 20) {
                alert('Извините уже все слоты заняты');
                this.chosen.splice(this.chosen.indexOf(toyID), 1);
                target.classList.remove('active');
            }
            chosenToys.innerHTML = `${this.chosen.length}`;
            const setLocalStorage = () => {
                localStorage.setItem('chosen', JSON.stringify(this.chosen));
            };
            window.addEventListener('beforeunload', setLocalStorage);
            const getLocalStorage = () => {
                if (localStorage.getItem('chosen')) {
                    let chosenLS = JSON.parse(localStorage.getItem('chosen'));
                    chosenToys.innerHTML = `${chosenLS.length}`;
                }
            };
            window.addEventListener('load', getLocalStorage);
        };
        this.resetButton = (event) => {
            const wrapperMain = document.querySelector('.main_wrapper');
            const chosenToys = document.querySelector('.favorites span');
            chosenToys.innerHTML = '0';
            this.removePage(wrapperMain);
            this.renderWrapper();
            this.afterRender();
        };
        this.searchParams = {
            shapes: [],
            colors: [],
            sizes: [],
            favorite: [],
            minQuantity: null,
            maxQuantity: null,
            minYear: null,
            maxYear: null,
            optionsValue: '',
        };
        this.chosen = [];
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
        let shapeArr = cards;
        shapeArr = shapeArr.filter(item => {
            if (item.shape === 'шар') {
                return true;
            }
            return true;
        });
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
        return this.container;
    }
    afterRender() {
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
        const cards = document.querySelector('.cards');
        cards === null || cards === void 0 ? void 0 : cards.addEventListener('click', this.clickToysCards);
    }
}
exports.Toys = Toys;


/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcDEuZDZmNzA2ZTNjMDQ2YWZhNDczMTYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0EsSUFBSSxLQUE0RDtBQUNoRSxJQUFJLENBQzJHO0FBQy9HLENBQUMsNkJBQTZCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOENBQThDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0Msc0NBQXNDLHlDQUF5QztBQUMvRSxrQ0FBa0MscUNBQXFDO0FBQ3ZFLG1DQUFtQyxzQ0FBc0M7QUFDekUscUJBQXFCLHVCQUF1QjtBQUM1Qyx1QkFBdUIseUJBQXlCO0FBQ2hELHlCQUF5QiwyQkFBMkI7QUFDcEQsb0JBQW9CLHVCQUF1QjtBQUMzQyx1QkFBdUIsMEJBQTBCO0FBQ2pELGlDQUFpQyxvQ0FBb0M7QUFDckUscUJBQXFCLHVCQUF1QjtBQUM1QywyQkFBMkIsOEJBQThCO0FBQ3pELHNCQUFzQix5QkFBeUI7QUFDL0MscUJBQXFCLHdCQUF3QjtBQUM3Qyx1QkFBdUIsMEJBQTBCO0FBQ2pELHlCQUF5QiwyQkFBMkI7QUFDcEQsMEJBQTBCLDZCQUE2QjtBQUN2RCxzQkFBc0IseUJBQXlCO0FBQy9DLHdCQUF3QiwyQkFBMkI7QUFDbkQsK0JBQStCLGlDQUFpQztBQUNoRSwrQkFBK0Isa0NBQWtDO0FBQ2pFLHlCQUF5QiwyQkFBMkI7QUFDcEQsMEJBQTBCLDRCQUE0QjtBQUN0RCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixnQkFBZ0I7QUFDaEc7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsK0JBQStCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsYUFBYTs7QUFFaEUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL3JFWTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QscUJBQXFCLG1CQUFPLENBQUMsa0VBQTRCO0FBQ3pELG1CQUFPLENBQUMseURBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QsbUJBQU8sQ0FBQyx5REFBYztBQUN0QixxQkFBcUIsbUJBQU8sQ0FBQyxrRUFBNEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsVUFBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOzs7Ozs7Ozs7Ozs7QUMxREQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsWUFBWTtBQUNaLHFCQUFxQixtQkFBTyxDQUFDLGtFQUE0QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7O0FDWkM7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7Ozs7QUNiTDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIscUJBQXFCLG1CQUFPLENBQUMsaUVBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQjs7Ozs7Ozs7Ozs7O0FDeEJUO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQjtBQUNsQixxQkFBcUIsbUJBQU8sQ0FBQyxpRUFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7Ozs7QUN4Qkw7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsV0FBVztBQUNYLGlCQUFpQixtQkFBTyxDQUFDLCtFQUFxQztBQUM5RCxlQUFlLG1CQUFPLENBQUMsMENBQWM7QUFDckMsZUFBZSxtQkFBTyxDQUFDLDBDQUFjO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQywwQ0FBYztBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQywrRUFBcUM7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLHVFQUFpQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGtCQUFrQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNEYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1osZ0JBQWdCLG1CQUFPLENBQUMsNkRBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQjtBQUNoQixnQkFBZ0IsbUJBQU8sQ0FBQyw2REFBNEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7Ozs7Ozs7Ozs7O0FDOUJIO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWixnQkFBZ0IsbUJBQU8sQ0FBQyw2REFBNEI7QUFDcEQsZUFBZSxtQkFBTyxDQUFDLDZCQUFZO0FBQ25DLG1CQUFPLENBQUMsNERBQTZCO0FBQ3JDLG1CQUFPLENBQUMsd0VBQW1DO0FBQzNDLDBCQUEwQixtQkFBTyxDQUFDLHlFQUFrQztBQUNwRSxzQkFBc0IsbUJBQU8sQ0FBQyxpRUFBOEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG1CQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxXQUFXO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxVQUFVO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxXQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxXQUFXO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxVQUFVO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxjQUFjO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxjQUFjO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFVBQVU7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFdBQVc7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFdBQVc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFVBQVU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2akJaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7OztVQzNsQm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBTyxDQUFDLGtDQUFjO0FBQ3RCLGNBQWMsbUJBQU8sQ0FBQywyQ0FBaUI7QUFDdkM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNzcz9iOWU0Iiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzcz9mYWFhIiwid2VicGFjazovLy8uL2dsb2JhbC5jc3M/N2M1ZiIsIndlYnBhY2s6Ly8vLi9ub3Vpc2xpZGVyL3NsaWRlci5jc3M/YTdjOSIsIndlYnBhY2s6Ly8vLi9ub3Vpc2xpZGVyL3NsaWRlckN1c3RvbS5jc3M/N2EzNiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL3RlbXBsYXRlcy9wYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9ub3Vpc2xpZGVyL3NsaWRlci1xdWFudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9ub3Vpc2xpZGVyL3NsaWRlci15ZWFyLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL21haW4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy90b3lzL3RveXMudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLm5vVWlTbGlkZXIgPSB7fSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZXhwb3J0cy5QaXBzTW9kZSA9IHZvaWQgMDtcbiAgICAoZnVuY3Rpb24gKFBpcHNNb2RlKSB7XG4gICAgICAgIFBpcHNNb2RlW1wiUmFuZ2VcIl0gPSBcInJhbmdlXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiU3RlcHNcIl0gPSBcInN0ZXBzXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiUG9zaXRpb25zXCJdID0gXCJwb3NpdGlvbnNcIjtcbiAgICAgICAgUGlwc01vZGVbXCJDb3VudFwiXSA9IFwiY291bnRcIjtcbiAgICAgICAgUGlwc01vZGVbXCJWYWx1ZXNcIl0gPSBcInZhbHVlc1wiO1xuICAgIH0pKGV4cG9ydHMuUGlwc01vZGUgfHwgKGV4cG9ydHMuUGlwc01vZGUgPSB7fSkpO1xuICAgIGV4cG9ydHMuUGlwc1R5cGUgPSB2b2lkIDA7XG4gICAgKGZ1bmN0aW9uIChQaXBzVHlwZSkge1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vbmVcIl0gPSAtMV0gPSBcIk5vbmVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJOb1ZhbHVlXCJdID0gMF0gPSBcIk5vVmFsdWVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJMYXJnZVZhbHVlXCJdID0gMV0gPSBcIkxhcmdlVmFsdWVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJTbWFsbFZhbHVlXCJdID0gMl0gPSBcIlNtYWxsVmFsdWVcIjtcbiAgICB9KShleHBvcnRzLlBpcHNUeXBlIHx8IChleHBvcnRzLlBpcHNUeXBlID0ge30pKTtcbiAgICAvL3JlZ2lvbiBIZWxwZXIgTWV0aG9kc1xuICAgIGZ1bmN0aW9uIGlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSAmJiB0eXBlb2YgZW50cnkuZnJvbSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkge1xuICAgICAgICAvLyBwYXJ0aWFsIGZvcm1hdHRlcnMgb25seSBuZWVkIGEgdG8gZnVuY3Rpb24gYW5kIG5vdCBhIGZyb20gZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlbnRyeSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZW50cnkudG8gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNTZXQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEJpbmRhYmxlIHZlcnNpb25cbiAgICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlcyBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkuXG4gICAgZnVuY3Rpb24gdW5pcXVlKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpc1thXSA/ICh0aGlzW2FdID0gdHJ1ZSkgOiBmYWxzZTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICAvLyBSb3VuZCBhIHZhbHVlIHRvIHRoZSBjbG9zZXN0ICd0bycuXG4gICAgZnVuY3Rpb24gY2xvc2VzdCh2YWx1ZSwgdG8pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyB0bykgKiB0bztcbiAgICB9XG4gICAgLy8gQ3VycmVudCBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudC5cbiAgICBmdW5jdGlvbiBvZmZzZXQoZWxlbSwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBwYWdlT2Zmc2V0ID0gZ2V0UGFnZU9mZnNldChkb2MpO1xuICAgICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgY29udGFpbnMgbGVmdCBzY3JvbGwgaW4gQ2hyb21lIG9uIEFuZHJvaWQuXG4gICAgICAgIC8vIEkgaGF2ZW4ndCBmb3VuZCBhIGZlYXR1cmUgZGV0ZWN0aW9uIHRoYXQgcHJvdmVzIHRoaXMuIFdvcnN0IGNhc2VcbiAgICAgICAgLy8gc2NlbmFyaW8gb24gbWlzLW1hdGNoOiB0aGUgJ3RhcCcgZmVhdHVyZSBvbiBob3Jpem9udGFsIHNsaWRlcnMgYnJlYWtzLlxuICAgICAgICBpZiAoL3dlYmtpdC4qQ2hyb21lLipNb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBwYWdlT2Zmc2V0LnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmllbnRhdGlvbiA/IHJlY3QudG9wICsgcGFnZU9mZnNldC55IC0gZG9jRWxlbS5jbGllbnRUb3AgOiByZWN0LmxlZnQgKyBwYWdlT2Zmc2V0LnggLSBkb2NFbGVtLmNsaWVudExlZnQ7XG4gICAgfVxuICAgIC8vIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgbnVtZXJpY2FsLlxuICAgIGZ1bmN0aW9uIGlzTnVtZXJpYyhhKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4oYSkgJiYgaXNGaW5pdGUoYSk7XG4gICAgfVxuICAgIC8vIFNldHMgYSBjbGFzcyBhbmQgcmVtb3ZlcyBpdCBhZnRlciBbZHVyYXRpb25dIG1zLlxuICAgIGZ1bmN0aW9uIGFkZENsYXNzRm9yKGVsZW1lbnQsIGNsYXNzTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTGltaXRzIGEgdmFsdWUgdG8gMCAtIDEwMFxuICAgIGZ1bmN0aW9uIGxpbWl0KGEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGEsIDEwMCksIDApO1xuICAgIH1cbiAgICAvLyBXcmFwcyBhIHZhcmlhYmxlIGFzIGFuIGFycmF5LCBpZiBpdCBpc24ndCBvbmUgeWV0LlxuICAgIC8vIE5vdGUgdGhhdCBhbiBpbnB1dCBhcnJheSBpcyByZXR1cm5lZCBieSByZWZlcmVuY2UhXG4gICAgZnVuY3Rpb24gYXNBcnJheShhKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpID8gYSA6IFthXTtcbiAgICB9XG4gICAgLy8gQ291bnRzIGRlY2ltYWxzXG4gICAgZnVuY3Rpb24gY291bnREZWNpbWFscyhudW1TdHIpIHtcbiAgICAgICAgbnVtU3RyID0gU3RyaW5nKG51bVN0cik7XG4gICAgICAgIHZhciBwaWVjZXMgPSBudW1TdHIuc3BsaXQoXCIuXCIpO1xuICAgICAgICByZXR1cm4gcGllY2VzLmxlbmd0aCA+IDEgPyBwaWVjZXNbMV0ubGVuZ3RoIDogMDtcbiAgICB9XG4gICAgLy8gaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vI2FkZF9jbGFzc1xuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vI3JlbW92ZV9jbGFzc1xuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXGIpXCIgKyBjbGFzc05hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpICsgXCIoXFxcXGJ8JClcIiwgXCJnaVwiKSwgXCIgXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vcGxhaW5qcy5jb20vamF2YXNjcmlwdC9hdHRyaWJ1dGVzL2FkZGluZy1yZW1vdmluZy1hbmQtdGVzdGluZy1mb3ItY2xhc3Nlcy05L1xuICAgIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdCA/IGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDogbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBjbGFzc05hbWUgKyBcIlxcXFxiXCIpLnRlc3QoZWwuY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9zY3JvbGxZI05vdGVzXG4gICAgZnVuY3Rpb24gZ2V0UGFnZU9mZnNldChkb2MpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBpc0NTUzFDb21wYXQgPSAoZG9jLmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiO1xuICAgICAgICB2YXIgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgICAgdmFyIHkgPSBzdXBwb3J0UGFnZU9mZnNldFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgIDogaXNDU1MxQ29tcGF0XG4gICAgICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gd2UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgY29uc3RhbnRzIGluc3RlYWRcbiAgICAvLyBvZiBhY2Nlc3Npbmcgd2luZG93LiogYXMgc29vbiBhcyB0aGUgbW9kdWxlIG5lZWRzIGl0XG4gICAgLy8gc28gdGhhdCB3ZSBkbyBub3QgY29tcHV0ZSBhbnl0aGluZyBpZiBub3QgbmVlZGVkXG4gICAgZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBldmVudHMgdG8gYmluZC4gSUUxMSBpbXBsZW1lbnRzIHBvaW50ZXJFdmVudHMgd2l0aG91dFxuICAgICAgICAvLyBhIHByZWZpeCwgd2hpY2ggYnJlYWtzIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgSUUxMCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBcInBvaW50ZXJkb3duXCIsXG4gICAgICAgICAgICAgICAgbW92ZTogXCJwb2ludGVybW92ZVwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJwb2ludGVydXBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWRcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiTVNQb2ludGVyRG93blwiLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiBcIk1TUG9pbnRlck1vdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIk1TUG9pbnRlclVwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IFwibW91c2Vtb3ZlIHRvdWNobW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwibW91c2V1cCB0b3VjaGVuZFwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWRcbiAgICAvLyBJc3N1ZSAjNzg1XG4gICAgZnVuY3Rpb24gZ2V0U3VwcG9ydHNQYXNzaXZlKCkge1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuQ1NTICYmIENTUy5zdXBwb3J0cyAmJiBDU1Muc3VwcG9ydHMoXCJ0b3VjaC1hY3Rpb25cIiwgXCJub25lXCIpO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIFJhbmdlIENhbGN1bGF0aW9uXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBzaXplIG9mIGEgc3ViLXJhbmdlIGluIHJlbGF0aW9uIHRvIGEgZnVsbCByYW5nZS5cbiAgICBmdW5jdGlvbiBzdWJSYW5nZVJhdGlvKHBhLCBwYikge1xuICAgICAgICByZXR1cm4gMTAwIC8gKHBiIC0gcGEpO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgSG93IG1hbnkgcGVyY2VudCBpcyB0aGlzIHZhbHVlIG9mIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlLCBzdGFydFJhbmdlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgKiAxMDApIC8gKHJhbmdlW3N0YXJ0UmFuZ2UgKyAxXSAtIHJhbmdlW3N0YXJ0UmFuZ2VdKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIFdoZXJlIGlzIHRoaXMgdmFsdWUgb24gdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiB0b1BlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmcm9tUGVyY2VudGFnZShyYW5nZSwgcmFuZ2VbMF0gPCAwID8gdmFsdWUgKyBNYXRoLmFicyhyYW5nZVswXSkgOiB2YWx1ZSAtIHJhbmdlWzBdLCAwKTtcbiAgICB9XG4gICAgLy8gKHZhbHVlKSBIb3cgbXVjaCBpcyB0aGlzIHBlcmNlbnRhZ2Ugb24gdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgKiAocmFuZ2VbMV0gLSByYW5nZVswXSkpIC8gMTAwICsgcmFuZ2VbMF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEoodmFsdWUsIGFycikge1xuICAgICAgICB2YXIgaiA9IDE7XG4gICAgICAgIHdoaWxlICh2YWx1ZSA+PSBhcnJbal0pIHtcbiAgICAgICAgICAgIGogKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gajtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIElucHV0IGEgdmFsdWUsIGZpbmQgd2hlcmUsIG9uIGEgc2NhbGUgb2YgMC0xMDAsIGl0IGFwcGxpZXMuXG4gICAgZnVuY3Rpb24gdG9TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPj0geFZhbC5zbGljZSgtMSlbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4VmFsKTtcbiAgICAgICAgdmFyIHZhID0geFZhbFtqIC0gMV07XG4gICAgICAgIHZhciB2YiA9IHhWYWxbal07XG4gICAgICAgIHZhciBwYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgcGIgPSB4UGN0W2pdO1xuICAgICAgICByZXR1cm4gcGEgKyB0b1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sIHZhbHVlKSAvIHN1YlJhbmdlUmF0aW8ocGEsIHBiKTtcbiAgICB9XG4gICAgLy8gKHZhbHVlKSBJbnB1dCBhIHBlcmNlbnRhZ2UsIGZpbmQgd2hlcmUgaXQgaXMgb24gdGhlIHNwZWNpZmllZCByYW5nZS5cbiAgICBmdW5jdGlvbiBmcm9tU3RlcHBpbmcoeFZhbCwgeFBjdCwgdmFsdWUpIHtcbiAgICAgICAgLy8gVGhlcmUgaXMgbm8gcmFuZ2UgZ3JvdXAgdGhhdCBmaXRzIDEwMFxuICAgICAgICBpZiAodmFsdWUgPj0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4geFZhbC5zbGljZSgtMSlbMF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4UGN0KTtcbiAgICAgICAgdmFyIHZhID0geFZhbFtqIC0gMV07XG4gICAgICAgIHZhciB2YiA9IHhWYWxbal07XG4gICAgICAgIHZhciBwYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgcGIgPSB4UGN0W2pdO1xuICAgICAgICByZXR1cm4gaXNQZXJjZW50YWdlKFt2YSwgdmJdLCAodmFsdWUgLSBwYSkgKiBzdWJSYW5nZVJhdGlvKHBhLCBwYikpO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgR2V0IHRoZSBzdGVwIHRoYXQgYXBwbGllcyBhdCBhIGNlcnRhaW4gdmFsdWUuXG4gICAgZnVuY3Rpb24gZ2V0U3RlcCh4UGN0LCB4U3RlcHMsIHNuYXAsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4UGN0KTtcbiAgICAgICAgdmFyIGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIGIgPSB4UGN0W2pdO1xuICAgICAgICAvLyBJZiAnc25hcCcgaXMgc2V0LCBzdGVwcyBhcmUgdXNlZCBhcyBmaXhlZCBwb2ludHMgb24gdGhlIHNsaWRlci5cbiAgICAgICAgaWYgKHNuYXApIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgcG9zaXRpb24sIGEgb3IgYi5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAtIGEgPiAoYiAtIGEpIC8gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF4U3RlcHNbaiAtIDFdKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhQY3RbaiAtIDFdICsgY2xvc2VzdCh2YWx1ZSAtIHhQY3RbaiAtIDFdLCB4U3RlcHNbaiAtIDFdKTtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBTcGVjdHJ1bVxuICAgIHZhciBTcGVjdHJ1bSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gU3BlY3RydW0oZW50cnksIHNuYXAsIHNpbmdsZVN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMueFBjdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54VmFsID0gW107XG4gICAgICAgICAgICB0aGlzLnhTdGVwcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXAgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFN0ZXBzID0gW3NpbmdsZVN0ZXAgfHwgZmFsc2VdO1xuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSBbZmFsc2VdO1xuICAgICAgICAgICAgdGhpcy5zbmFwID0gc25hcDtcbiAgICAgICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgICAgIHZhciBvcmRlcmVkID0gW107XG4gICAgICAgICAgICAvLyBNYXAgdGhlIG9iamVjdCBrZXlzIHRvIGFuIGFycmF5LlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW50cnkpLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgb3JkZXJlZC5wdXNoKFthc0FycmF5KGVudHJ5W2luZGV4XSksIGluZGV4XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFNvcnQgYWxsIGVudHJpZXMgYnkgdmFsdWUgKG51bWVyaWMgc29ydCkuXG4gICAgICAgICAgICBvcmRlcmVkLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYVswXVswXSAtIGJbMF1bMF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgYWxsIGVudHJpZXMgdG8gc3VicmFuZ2VzLlxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgb3JkZXJlZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVudHJ5UG9pbnQob3JkZXJlZFtpbmRleF1bMV0sIG9yZGVyZWRbaW5kZXhdWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBhY3R1YWwgc3RlcCB2YWx1ZXMuXG4gICAgICAgICAgICAvLyB4U3RlcHMgaXMgc29ydGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHhQY3QgYW5kIHhWYWwuXG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IHRoaXMueFN0ZXBzLnNsaWNlKDApO1xuICAgICAgICAgICAgLy8gQ29udmVydCBhbGwgbnVtZXJpYyBzdGVwcyB0byB0aGUgcGVyY2VudGFnZSBvZiB0aGUgc3VicmFuZ2UgdGhleSByZXByZXNlbnQuXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnhOdW1TdGVwcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0ZXBQb2ludChpbmRleCwgdGhpcy54TnVtU3RlcHNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0RGlzdGFuY2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnhOdW1TdGVwcy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VzW2luZGV4XSA9IGZyb21QZXJjZW50YWdlKHRoaXMueFZhbCwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZXM7XG4gICAgICAgIH07XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvdmVyIHRoZSB3aG9sZSBzY2FsZSBvZiByYW5nZXMuXG4gICAgICAgIC8vIGRpcmVjdGlvbjogMCA9IGJhY2t3YXJkcyAvIDEgPSBmb3J3YXJkc1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0QWJzb2x1dGVEaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZGlzdGFuY2VzLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciB4UGN0X2luZGV4ID0gMDtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSByYW5nZSB3aGVyZSB0byBzdGFydCBjYWxjdWxhdGlvblxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy54UGN0W3RoaXMueFBjdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIHdoaWxlICh2YWx1ZSA+IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID09PSB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgeFBjdF9pbmRleCA9IHRoaXMueFBjdC5sZW5ndGggLSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbG9va2luZyBiYWNrd2FyZHMgYW5kIHRoZSB2YWx1ZSBpcyBleGFjdGx5IGF0IGEgcmFuZ2Ugc2VwYXJhdG9yIHRoZW4gbG9vayBvbmUgcmFuZ2UgZnVydGhlclxuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb24gJiYgdmFsdWUgPT09IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2VzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhcnRfZmFjdG9yO1xuICAgICAgICAgICAgdmFyIHJlc3RfZmFjdG9yID0gMTtcbiAgICAgICAgICAgIHZhciByZXN0X3JlbF9kaXN0YW5jZSA9IGRpc3RhbmNlc1t4UGN0X2luZGV4XTtcbiAgICAgICAgICAgIHZhciByYW5nZV9wY3QgPSAwO1xuICAgICAgICAgICAgdmFyIHJlbF9yYW5nZV9kaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICB2YXIgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSAwO1xuICAgICAgICAgICAgdmFyIHJhbmdlX2NvdW50ZXIgPSAwO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHdoYXQgcGFydCBvZiB0aGUgc3RhcnQgcmFuZ2UgdGhlIHZhbHVlIGlzXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gKHZhbHVlIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKSAvICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9ICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdmFsdWUpIC8gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRG8gdW50aWwgdGhlIGNvbXBsZXRlIGRpc3RhbmNlIGFjcm9zcyByYW5nZXMgaXMgY2FsY3VsYXRlZFxuICAgICAgICAgICAgd2hpbGUgKHJlc3RfcmVsX2Rpc3RhbmNlID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcGVyY2VudGFnZSBvZiB0b3RhbCByYW5nZVxuICAgICAgICAgICAgICAgIHJhbmdlX3BjdCA9IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMSArIHJhbmdlX2NvdW50ZXJdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXTtcbiAgICAgICAgICAgICAgICAvLyBEZXRlY3QgaWYgdGhlIG1hcmdpbiwgcGFkZGluZyBvciBsaW1pdCBpcyBsYXJnZXIgdGhlbiB0aGUgY3VycmVudCByYW5nZSBhbmQgY2FsY3VsYXRlXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByZXN0X2ZhY3RvciArIDEwMCAtIHN0YXJ0X2ZhY3RvciAqIDEwMCA+IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBsYXJnZXIgdGhlbiB0YWtlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG9mIHRoZSB3aG9sZSByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZWxfcmFuZ2VfZGlzdGFuY2UgPSByYW5nZV9wY3QgKiBzdGFydF9mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc3QgZmFjdG9yIG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgICAgICAgICByZXN0X2ZhY3RvciA9IChyZXN0X3JlbF9kaXN0YW5jZSAtIDEwMCAqIHN0YXJ0X2ZhY3RvcikgLyBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgc3RhcnQgZmFjdG9yIHRvIDEgYXMgZm9yIG5leHQgcmFuZ2UgaXQgZG9lcyBub3QgYXBwbHkuXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzbWFsbGVyIG9yIGVxdWFsIHRoZW4gdGFrZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvZiB0aGUgY2FsY3VsYXRlIHBlcmNlbnR1YWwgcGFydCBvZiB0aGF0IHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9ICgoZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJhbmdlX3BjdCkgLyAxMDApICogcmVzdF9mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIHJlc3QgbGVmdCBhcyB0aGUgcmVzdCBmaXRzIGluIGN1cnJlbnQgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVzdF9mYWN0b3IgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGFic19kaXN0YW5jZV9jb3VudGVyID0gYWJzX2Rpc3RhbmNlX2NvdW50ZXIgLSByZWxfcmFuZ2VfZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGZpcnN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1pbmltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueFBjdC5sZW5ndGggKyByYW5nZV9jb3VudGVyID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXItLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSBhYnNfZGlzdGFuY2VfY291bnRlciArIHJlbF9yYW5nZV9kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGltaXQgcmFuZ2UgdG8gbGFzdCByYW5nZSB3aGVuIGRpc3RhbmNlIGJlY29tZXMgb3V0c2lkZSBvZiBtYXhpbXVtIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoIC0gcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmVzdCBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgICAgICByZXN0X3JlbF9kaXN0YW5jZSA9IGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByZXN0X2ZhY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSArIGFic19kaXN0YW5jZV9jb3VudGVyO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUudG9TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b1N0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5mcm9tU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tU3RlcHBpbmcodGhpcy54VmFsLCB0aGlzLnhQY3QsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZ2V0U3RlcCh0aGlzLnhQY3QsIHRoaXMueFN0ZXBzLCB0aGlzLnNuYXAsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldERlZmF1bHRTdGVwID0gZnVuY3Rpb24gKHZhbHVlLCBpc0Rvd24sIHNpemUpIHtcbiAgICAgICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgdGhpcy54UGN0KTtcbiAgICAgICAgICAgIC8vIFdoZW4gYXQgdGhlIHRvcCBvciBzdGVwcGluZyBkb3duLCBsb29rIGF0IHRoZSBwcmV2aW91cyBzdWItcmFuZ2VcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMTAwIHx8IChpc0Rvd24gJiYgdmFsdWUgPT09IHRoaXMueFBjdFtqIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgaiA9IE1hdGgubWF4KGogLSAxLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAodGhpcy54VmFsW2pdIC0gdGhpcy54VmFsW2ogLSAxXSkgLyBzaXplO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0TmVhcmJ5U3RlcHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgdGhpcy54UGN0KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RlcEJlZm9yZToge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbaiAtIDJdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMl0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAyXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc1N0ZXA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDFdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqIC0gMV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0ZXBBZnRlcjoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbal0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2pdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb3VudFN0ZXBEZWNpbWFscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSB0aGlzLnhOdW1TdGVwcy5tYXAoY291bnREZWNpbWFscyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgc3RlcERlY2ltYWxzKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhc05vU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhWYWxbMF0gPT09IHRoaXMueFZhbFt0aGlzLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIH07XG4gICAgICAgIC8vIE91dHNpZGUgdGVzdGluZ1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RlcCh0aGlzLnRvU3RlcHBpbmcodmFsdWUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZUVudHJ5UG9pbnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZTtcbiAgICAgICAgICAgIC8vIENvdmVydCBtaW4vbWF4IHN5bnRheCB0byAwIGFuZCAxMDAuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBwYXJzZUZsb2F0KGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBjb3JyZWN0IGlucHV0LlxuICAgICAgICAgICAgaWYgKCFpc051bWVyaWMocGVyY2VudGFnZSkgfHwgIWlzTnVtZXJpYyh2YWx1ZVswXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIHZhbHVlIGlzbid0IG51bWVyaWMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RvcmUgdmFsdWVzLlxuICAgICAgICAgICAgdGhpcy54UGN0LnB1c2gocGVyY2VudGFnZSk7XG4gICAgICAgICAgICB0aGlzLnhWYWwucHVzaCh2YWx1ZVswXSk7XG4gICAgICAgICAgICB2YXIgdmFsdWUxID0gTnVtYmVyKHZhbHVlWzFdKTtcbiAgICAgICAgICAgIC8vIE5hTiB3aWxsIGV2YWx1YXRlIHRvIGZhbHNlIHRvbywgYnV0IHRvIGtlZXBcbiAgICAgICAgICAgIC8vIGxvZ2dpbmcgY2xlYXIsIHNldCBzdGVwIGV4cGxpY2l0bHkuIE1ha2Ugc3VyZVxuICAgICAgICAgICAgLy8gbm90IHRvIG92ZXJyaWRlIHRoZSAnc3RlcCcgc2V0dGluZyB3aXRoIGZhbHNlLlxuICAgICAgICAgICAgaWYgKCFwZXJjZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YWx1ZTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzWzBdID0gdmFsdWUxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzLnB1c2goaXNOYU4odmFsdWUxKSA/IGZhbHNlIDogdmFsdWUxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXAucHVzaCgwKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZVN0ZXBQb2ludCA9IGZ1bmN0aW9uIChpLCBuKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgJ2ZhbHNlJyBzdGVwcGluZy5cbiAgICAgICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICAgICAgaWYgKHRoaXMueFZhbFtpXSA9PT0gdGhpcy54VmFsW2kgKyAxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzW2ldID0gdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtpXSA9IHRoaXMueFZhbFtpXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGYWN0b3IgdG8gcmFuZ2UgcmF0aW9cbiAgICAgICAgICAgIHRoaXMueFN0ZXBzW2ldID1cbiAgICAgICAgICAgICAgICBmcm9tUGVyY2VudGFnZShbdGhpcy54VmFsW2ldLCB0aGlzLnhWYWxbaSArIDFdXSwgbiwgMCkgLyBzdWJSYW5nZVJhdGlvKHRoaXMueFBjdFtpXSwgdGhpcy54UGN0W2kgKyAxXSk7XG4gICAgICAgICAgICB2YXIgdG90YWxTdGVwcyA9ICh0aGlzLnhWYWxbaSArIDFdIC0gdGhpcy54VmFsW2ldKSAvIHRoaXMueE51bVN0ZXBzW2ldO1xuICAgICAgICAgICAgdmFyIGhpZ2hlc3RTdGVwID0gTWF0aC5jZWlsKE51bWJlcih0b3RhbFN0ZXBzLnRvRml4ZWQoMykpIC0gMSk7XG4gICAgICAgICAgICB2YXIgc3RlcCA9IHRoaXMueFZhbFtpXSArIHRoaXMueE51bVN0ZXBzW2ldICogaGlnaGVzdFN0ZXA7XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gc3RlcDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFNwZWN0cnVtO1xuICAgIH0oKSk7XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBPcHRpb25zXG4gICAgLypcdEV2ZXJ5IGlucHV0IG9wdGlvbiBpcyB0ZXN0ZWQgYW5kIHBhcnNlZC4gVGhpcyB3aWxsIHByZXZlbnRcbiAgICAgICAgZW5kbGVzcyB2YWxpZGF0aW9uIGluIGludGVybmFsIG1ldGhvZHMuIFRoZXNlIHRlc3RzIGFyZVxuICAgICAgICBzdHJ1Y3R1cmVkIHdpdGggYW4gaXRlbSBmb3IgZXZlcnkgb3B0aW9uIGF2YWlsYWJsZS4gQW5cbiAgICAgICAgb3B0aW9uIGNhbiBiZSBtYXJrZWQgYXMgcmVxdWlyZWQgYnkgc2V0dGluZyB0aGUgJ3InIGZsYWcuXG4gICAgICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICAgICAgICAgICAgLSBUaGUgcHJvdmlkZWQgdmFsdWUgZm9yIHRoZSBvcHRpb247XG4gICAgICAgICAgICAtIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIG9iamVjdDtcbiAgICAgICAgICAgIC0gVGhlIG5hbWUgZm9yIHRoZSBvcHRpb247XG5cbiAgICAgICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSB3aGVuIGFuIGVycm9yIGlzIGRldGVjdGVkLFxuICAgICAgICBvciB0cnVlIHdoZW4gZXZlcnl0aGluZyBpcyBPSy4gSXQgY2FuIGFsc28gbW9kaWZ5IHRoZSBvcHRpb25cbiAgICAgICAgb2JqZWN0LCB0byBtYWtlIHN1cmUgYWxsIHZhbHVlcyBjYW4gYmUgY29ycmVjdGx5IGxvb3BlZCBlbHNld2hlcmUuICovXG4gICAgLy9yZWdpb24gRGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdEZvcm1hdHRlciA9IHtcbiAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBcIlwiIDogdmFsdWUudG9GaXhlZCgyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnJvbTogTnVtYmVyXG4gICAgfTtcbiAgICB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAgICAgdGFyZ2V0OiBcInRhcmdldFwiLFxuICAgICAgICBiYXNlOiBcImJhc2VcIixcbiAgICAgICAgb3JpZ2luOiBcIm9yaWdpblwiLFxuICAgICAgICBoYW5kbGU6IFwiaGFuZGxlXCIsXG4gICAgICAgIGhhbmRsZUxvd2VyOiBcImhhbmRsZS1sb3dlclwiLFxuICAgICAgICBoYW5kbGVVcHBlcjogXCJoYW5kbGUtdXBwZXJcIixcbiAgICAgICAgdG91Y2hBcmVhOiBcInRvdWNoLWFyZWFcIixcbiAgICAgICAgaG9yaXpvbnRhbDogXCJob3Jpem9udGFsXCIsXG4gICAgICAgIHZlcnRpY2FsOiBcInZlcnRpY2FsXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgICBjb25uZWN0OiBcImNvbm5lY3RcIixcbiAgICAgICAgY29ubmVjdHM6IFwiY29ubmVjdHNcIixcbiAgICAgICAgbHRyOiBcImx0clwiLFxuICAgICAgICBydGw6IFwicnRsXCIsXG4gICAgICAgIHRleHREaXJlY3Rpb25MdHI6IFwidHh0LWRpci1sdHJcIixcbiAgICAgICAgdGV4dERpcmVjdGlvblJ0bDogXCJ0eHQtZGlyLXJ0bFwiLFxuICAgICAgICBkcmFnZ2FibGU6IFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIGRyYWc6IFwic3RhdGUtZHJhZ1wiLFxuICAgICAgICB0YXA6IFwic3RhdGUtdGFwXCIsXG4gICAgICAgIGFjdGl2ZTogXCJhY3RpdmVcIixcbiAgICAgICAgdG9vbHRpcDogXCJ0b29sdGlwXCIsXG4gICAgICAgIHBpcHM6IFwicGlwc1wiLFxuICAgICAgICBwaXBzSG9yaXpvbnRhbDogXCJwaXBzLWhvcml6b250YWxcIixcbiAgICAgICAgcGlwc1ZlcnRpY2FsOiBcInBpcHMtdmVydGljYWxcIixcbiAgICAgICAgbWFya2VyOiBcIm1hcmtlclwiLFxuICAgICAgICBtYXJrZXJIb3Jpem9udGFsOiBcIm1hcmtlci1ob3Jpem9udGFsXCIsXG4gICAgICAgIG1hcmtlclZlcnRpY2FsOiBcIm1hcmtlci12ZXJ0aWNhbFwiLFxuICAgICAgICBtYXJrZXJOb3JtYWw6IFwibWFya2VyLW5vcm1hbFwiLFxuICAgICAgICBtYXJrZXJMYXJnZTogXCJtYXJrZXItbGFyZ2VcIixcbiAgICAgICAgbWFya2VyU3ViOiBcIm1hcmtlci1zdWJcIixcbiAgICAgICAgdmFsdWU6IFwidmFsdWVcIixcbiAgICAgICAgdmFsdWVIb3Jpem9udGFsOiBcInZhbHVlLWhvcml6b250YWxcIixcbiAgICAgICAgdmFsdWVWZXJ0aWNhbDogXCJ2YWx1ZS12ZXJ0aWNhbFwiLFxuICAgICAgICB2YWx1ZU5vcm1hbDogXCJ2YWx1ZS1ub3JtYWxcIixcbiAgICAgICAgdmFsdWVMYXJnZTogXCJ2YWx1ZS1sYXJnZVwiLFxuICAgICAgICB2YWx1ZVN1YjogXCJ2YWx1ZS1zdWJcIlxuICAgIH07XG4gICAgLy8gTmFtZXNwYWNlcyBvZiBpbnRlcm5hbCBldmVudCBsaXN0ZW5lcnNcbiAgICB2YXIgSU5URVJOQUxfRVZFTlRfTlMgPSB7XG4gICAgICAgIHRvb2x0aXBzOiBcIi5fX3Rvb2x0aXBzXCIsXG4gICAgICAgIGFyaWE6IFwiLl9fYXJpYVwiXG4gICAgfTtcbiAgICAvL2VuZHJlZ2lvblxuICAgIGZ1bmN0aW9uIHRlc3RTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSBzdGVwIG9wdGlvbiBjYW4gc3RpbGwgYmUgdXNlZCB0byBzZXQgc3RlcHBpbmdcbiAgICAgICAgLy8gZm9yIGxpbmVhciBzbGlkZXJzLiBPdmVyd3JpdHRlbiBpZiBzZXQgaW4gJ3JhbmdlJy5cbiAgICAgICAgcGFyc2VkLnNpbmdsZVN0ZXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZFBhZ2VNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkUGFnZU11bHRpcGxpZXIgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkTXVsdGlwbGllcicgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZE11bHRpcGxpZXIgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZERlZmF1bHRTdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkRGVmYXVsdFN0ZXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFJhbmdlKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gRmlsdGVyIGluY29ycmVjdCBpbnB1dC5cbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyBpcyBub3QgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXRjaCBtaXNzaW5nIHN0YXJ0IG9yIGVuZC5cbiAgICAgICAgaWYgKGVudHJ5Lm1pbiA9PT0gdW5kZWZpbmVkIHx8IGVudHJ5Lm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBNaXNzaW5nICdtaW4nIG9yICdtYXgnIGluICdyYW5nZScuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5zcGVjdHJ1bSA9IG5ldyBTcGVjdHJ1bShlbnRyeSwgcGFyc2VkLnNuYXAgfHwgZmFsc2UsIHBhcnNlZC5zaW5nbGVTdGVwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFN0YXJ0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgLy8gVmFsaWRhdGUgaW5wdXQuIFZhbHVlcyBhcmVuJ3QgdGVzdGVkLCBhcyB0aGUgcHVibGljIC52YWwgbWV0aG9kXG4gICAgICAgIC8vIHdpbGwgYWx3YXlzIHByb3ZpZGUgYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RhcnQnIG9wdGlvbiBpcyBpbmNvcnJlY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHRoZSBudW1iZXIgb2YgaGFuZGxlcy5cbiAgICAgICAgcGFyc2VkLmhhbmRsZXMgPSBlbnRyeS5sZW5ndGg7XG4gICAgICAgIC8vIFdoZW4gdGhlIHNsaWRlciBpcyBpbml0aWFsaXplZCwgdGhlIC52YWwgbWV0aG9kIHdpbGxcbiAgICAgICAgLy8gYmUgY2FsbGVkIHdpdGggdGhlIHN0YXJ0IG9wdGlvbnMuXG4gICAgICAgIHBhcnNlZC5zdGFydCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U25hcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc25hcCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICAgICAgcGFyc2VkLnNuYXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFuaW1hdGUocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGUnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5mb3JjZSAxMDAlIHN0ZXBwaW5nIHdpdGhpbiBzdWJyYW5nZXMuXG4gICAgICAgIHBhcnNlZC5hbmltYXRlID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBbmltYXRpb25EdXJhdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRpb25EdXJhdGlvbicgb3B0aW9uIG11c3QgYmUgYSBudW1iZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5hbmltYXRpb25EdXJhdGlvbiA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q29ubmVjdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIHZhciBjb25uZWN0ID0gW2ZhbHNlXTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIC8vIE1hcCBsZWdhY3kgb3B0aW9uc1xuICAgICAgICBpZiAoZW50cnkgPT09IFwibG93ZXJcIikge1xuICAgICAgICAgICAgZW50cnkgPSBbdHJ1ZSwgZmFsc2VdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVudHJ5ID09PSBcInVwcGVyXCIpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW2ZhbHNlLCB0cnVlXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgYm9vbGVhbiBvcHRpb25zXG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdC5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbm5lY3QucHVzaChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVqZWN0IGludmFsaWQgaW5wdXRcbiAgICAgICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpIHx8ICFlbnRyeS5sZW5ndGggfHwgZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcyArIDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjb25uZWN0JyBvcHRpb24gZG9lc24ndCBtYXRjaCBoYW5kbGUgY291bnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29ubmVjdCA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5jb25uZWN0ID0gY29ubmVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdE9yaWVudGF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gU2V0IG9yaWVudGF0aW9uIHRvIGFuIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5XG4gICAgICAgIC8vIGFycmF5IHNlbGVjdGlvbi5cbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQub3J0ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnb3JpZW50YXRpb24nIG9wdGlvbiBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0TWFyZ2luKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbWFyZ2luJyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJc3N1ZSAjNTgyXG4gICAgICAgIGlmIChlbnRyeSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5tYXJnaW4gPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0TGltaXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmxpbWl0ID0gcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5KTtcbiAgICAgICAgaWYgKCFwYXJzZWQubGltaXQgfHwgcGFyc2VkLmhhbmRsZXMgPCAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBpcyBvbmx5IHN1cHBvcnRlZCBvbiBsaW5lYXIgc2xpZGVycyB3aXRoIDIgb3IgbW9yZSBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UGFkZGluZyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMgb3IgYXJyYXkgb2YgZXhhY3RseSAyIG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSAmJiAhKGVudHJ5Lmxlbmd0aCA9PT0gMiB8fCBpc051bWVyaWMoZW50cnlbMF0pIHx8IGlzTnVtZXJpYyhlbnRyeVsxXSkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgZW50cnkgPSBbZW50cnksIGVudHJ5XTtcbiAgICAgICAgfVxuICAgICAgICAvLyAnZ2V0RGlzdGFuY2UnIHJldHVybnMgZmFsc2UgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgICAgICBwYXJzZWQucGFkZGluZyA9IFtwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMF0pLCBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMV0pXTtcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcGFyc2VkLnNwZWN0cnVtLnhOdW1TdGVwcy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAvLyBsYXN0IFwicmFuZ2VcIiBjYW4ndCBjb250YWluIHN0ZXAgc2l6ZSBhcyBpdCBpcyBwdXJlbHkgYW4gZW5kcG9pbnQuXG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhZGRpbmdbMF1baW5kZXhdIDwgMCB8fCBwYXJzZWQucGFkZGluZ1sxXVtpbmRleF0gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyKHMpLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdG90YWxQYWRkaW5nID0gZW50cnlbMF0gKyBlbnRyeVsxXTtcbiAgICAgICAgdmFyIGZpcnN0VmFsdWUgPSBwYXJzZWQuc3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsW3BhcnNlZC5zcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodG90YWxQYWRkaW5nIC8gKGxhc3RWYWx1ZSAtIGZpcnN0VmFsdWUpID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IG5vdCBleGNlZWQgMTAwJSBvZiB0aGUgcmFuZ2UuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3REaXJlY3Rpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBTZXQgZGlyZWN0aW9uIGFzIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5IHBhcnNpbmcuXG4gICAgICAgIC8vIEludmVydCBjb25uZWN0aW9uIGZvciBSVEwgc2xpZGVycywgc28gdGhhdCB0aGUgcHJvcGVyXG4gICAgICAgIC8vIGhhbmRsZXMgZ2V0IHRoZSBjb25uZWN0L2JhY2tncm91bmQgY2xhc3Nlcy5cbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImx0clwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJ0bFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZGlyZWN0aW9uJyBvcHRpb24gd2FzIG5vdCByZWNvZ25pemVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QmVoYXZpb3VyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbnB1dCBpcyBhIHN0cmluZy5cbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2JlaGF2aW91cicgbXVzdCBiZSBhIHN0cmluZyBjb250YWluaW5nIG9wdGlvbnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgYW55IGtleXdvcmRzLlxuICAgICAgICAvLyBOb25lIGFyZSByZXF1aXJlZC5cbiAgICAgICAgdmFyIHRhcCA9IGVudHJ5LmluZGV4T2YoXCJ0YXBcIikgPj0gMDtcbiAgICAgICAgdmFyIGRyYWcgPSBlbnRyeS5pbmRleE9mKFwiZHJhZ1wiKSA+PSAwO1xuICAgICAgICB2YXIgZml4ZWQgPSBlbnRyeS5pbmRleE9mKFwiZml4ZWRcIikgPj0gMDtcbiAgICAgICAgdmFyIHNuYXAgPSBlbnRyeS5pbmRleE9mKFwic25hcFwiKSA+PSAwO1xuICAgICAgICB2YXIgaG92ZXIgPSBlbnRyeS5pbmRleE9mKFwiaG92ZXJcIikgPj0gMDtcbiAgICAgICAgdmFyIHVuY29uc3RyYWluZWQgPSBlbnRyeS5pbmRleE9mKFwidW5jb25zdHJhaW5lZFwiKSA+PSAwO1xuICAgICAgICB2YXIgZHJhZ0FsbCA9IGVudHJ5LmluZGV4T2YoXCJkcmFnLWFsbFwiKSA+PSAwO1xuICAgICAgICBpZiAoZml4ZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWQuaGFuZGxlcyAhPT0gMikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmaXhlZCcgYmVoYXZpb3VyIG11c3QgYmUgdXNlZCB3aXRoIDIgaGFuZGxlc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVzZSBtYXJnaW4gdG8gZW5mb3JjZSBmaXhlZCBzdGF0ZVxuICAgICAgICAgICAgdGVzdE1hcmdpbihwYXJzZWQsIHBhcnNlZC5zdGFydFsxXSAtIHBhcnNlZC5zdGFydFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVuY29uc3RyYWluZWQgJiYgKHBhcnNlZC5tYXJnaW4gfHwgcGFyc2VkLmxpbWl0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3VuY29uc3RyYWluZWQnIGJlaGF2aW91ciBjYW5ub3QgYmUgdXNlZCB3aXRoIG1hcmdpbiBvciBsaW1pdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuZXZlbnRzID0ge1xuICAgICAgICAgICAgdGFwOiB0YXAgfHwgc25hcCxcbiAgICAgICAgICAgIGRyYWc6IGRyYWcsXG4gICAgICAgICAgICBkcmFnQWxsOiBkcmFnQWxsLFxuICAgICAgICAgICAgZml4ZWQ6IGZpeGVkLFxuICAgICAgICAgICAgc25hcDogc25hcCxcbiAgICAgICAgICAgIGhvdmVyOiBob3ZlcixcbiAgICAgICAgICAgIHVuY29uc3RyYWluZWQ6IHVuY29uc3RyYWluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFRvb2x0aXBzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgZm9ybWF0dGVyIGZvciBhbGwgaGFuZGxlcy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZvcm1hdHRlciAhPT0gXCJib29sZWFuXCIgJiYgIWlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGZvcm1hdHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3Rvb2x0aXBzJyBtdXN0IGJlIHBhc3NlZCBhIGZvcm1hdHRlciBvciAnZmFsc2UnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcyA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RIYW5kbGVBdHRyaWJ1dGVzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IG11c3QgcGFzcyBhIGF0dHJpYnV0ZXMgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuaGFuZGxlQXR0cmlidXRlcyA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QXJpYUZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYXJpYUZvcm1hdCcgcmVxdWlyZXMgJ3RvJyBtZXRob2QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5hcmlhRm9ybWF0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZm9ybWF0JyByZXF1aXJlcyAndG8nIGFuZCAnZnJvbScgbWV0aG9kcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmZvcm1hdCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRTdXBwb3J0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZFN1cHBvcnQnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkU3VwcG9ydCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0RG9jdW1lbnRFbGVtZW50KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBhbiBhZHZhbmNlZCBvcHRpb24uIFBhc3NlZCB2YWx1ZXMgYXJlIHVzZWQgd2l0aG91dCB2YWxpZGF0aW9uLlxuICAgICAgICBwYXJzZWQuZG9jdW1lbnRFbGVtZW50ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDc3NQcmVmaXgocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiICYmIGVudHJ5ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc1ByZWZpeCcgbXVzdCBiZSBhIHN0cmluZyBvciBgZmFsc2VgLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuY3NzUHJlZml4ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDc3NDbGFzc2VzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc0NsYXNzZXMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZC5jc3NQcmVmaXggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXNba2V5XSA9IHBhcnNlZC5jc3NQcmVmaXggKyBlbnRyeVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFRlc3QgYWxsIGRldmVsb3BlciBzZXR0aW5ncyBhbmQgcGFyc2UgdG8gYXNzdW1wdGlvbi1zYWZlIHZhbHVlcy5cbiAgICBmdW5jdGlvbiB0ZXN0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIC8vIFRvIHByb3ZlIGEgZml4IGZvciAjNTM3LCBmcmVlemUgb3B0aW9ucyBoZXJlLlxuICAgICAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIG1vZGlmaWVkLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAgICAgICAgLy8gT2JqZWN0LmZyZWV6ZShvcHRpb25zKTtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHtcbiAgICAgICAgICAgIG1hcmdpbjogbnVsbCxcbiAgICAgICAgICAgIGxpbWl0OiBudWxsLFxuICAgICAgICAgICAgcGFkZGluZzogbnVsbCxcbiAgICAgICAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgYXJpYUZvcm1hdDogZGVmYXVsdEZvcm1hdHRlcixcbiAgICAgICAgICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdHRlclxuICAgICAgICB9O1xuICAgICAgICAvLyBUZXN0cyBhcmUgZXhlY3V0ZWQgaW4gdGhlIG9yZGVyIHRoZXkgYXJlIHByZXNlbnRlZCBoZXJlLlxuICAgICAgICB2YXIgdGVzdHMgPSB7XG4gICAgICAgICAgICBzdGVwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U3RlcCB9LFxuICAgICAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIgfSxcbiAgICAgICAgICAgIGtleWJvYXJkTXVsdGlwbGllcjogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkTXVsdGlwbGllciB9LFxuICAgICAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAgfSxcbiAgICAgICAgICAgIHN0YXJ0OiB7IHI6IHRydWUsIHQ6IHRlc3RTdGFydCB9LFxuICAgICAgICAgICAgY29ubmVjdDogeyByOiB0cnVlLCB0OiB0ZXN0Q29ubmVjdCB9LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB7IHI6IHRydWUsIHQ6IHRlc3REaXJlY3Rpb24gfSxcbiAgICAgICAgICAgIHNuYXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTbmFwIH0sXG4gICAgICAgICAgICBhbmltYXRlOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0ZSB9LFxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRpb25EdXJhdGlvbiB9LFxuICAgICAgICAgICAgcmFuZ2U6IHsgcjogdHJ1ZSwgdDogdGVzdFJhbmdlIH0sXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogeyByOiBmYWxzZSwgdDogdGVzdE9yaWVudGF0aW9uIH0sXG4gICAgICAgICAgICBtYXJnaW46IHsgcjogZmFsc2UsIHQ6IHRlc3RNYXJnaW4gfSxcbiAgICAgICAgICAgIGxpbWl0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0TGltaXQgfSxcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgcjogZmFsc2UsIHQ6IHRlc3RQYWRkaW5nIH0sXG4gICAgICAgICAgICBiZWhhdmlvdXI6IHsgcjogdHJ1ZSwgdDogdGVzdEJlaGF2aW91ciB9LFxuICAgICAgICAgICAgYXJpYUZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEFyaWFGb3JtYXQgfSxcbiAgICAgICAgICAgIGZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEZvcm1hdCB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHsgcjogZmFsc2UsIHQ6IHRlc3RUb29sdGlwcyB9LFxuICAgICAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB7IHI6IHRydWUsIHQ6IHRlc3RLZXlib2FyZFN1cHBvcnQgfSxcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudDogeyByOiBmYWxzZSwgdDogdGVzdERvY3VtZW50RWxlbWVudCB9LFxuICAgICAgICAgICAgY3NzUHJlZml4OiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NQcmVmaXggfSxcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IHsgcjogdHJ1ZSwgdDogdGVzdENzc0NsYXNzZXMgfSxcbiAgICAgICAgICAgIGhhbmRsZUF0dHJpYnV0ZXM6IHsgcjogZmFsc2UsIHQ6IHRlc3RIYW5kbGVBdHRyaWJ1dGVzIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgY29ubmVjdDogZmFsc2UsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibHRyXCIsXG4gICAgICAgICAgICBiZWhhdmlvdXI6IFwidGFwXCIsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICBrZXlib2FyZFN1cHBvcnQ6IHRydWUsXG4gICAgICAgICAgICBjc3NQcmVmaXg6IFwibm9VaS1cIixcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IGNzc0NsYXNzZXMsXG4gICAgICAgICAgICBrZXlib2FyZFBhZ2VNdWx0aXBsaWVyOiA1LFxuICAgICAgICAgICAga2V5Ym9hcmRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogMTBcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQXJpYUZvcm1hdCBkZWZhdWx0cyB0byByZWd1bGFyIGZvcm1hdCwgaWYgYW55LlxuICAgICAgICBpZiAob3B0aW9ucy5mb3JtYXQgJiYgIW9wdGlvbnMuYXJpYUZvcm1hdCkge1xuICAgICAgICAgICAgb3B0aW9ucy5hcmlhRm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUnVuIGFsbCBvcHRpb25zIHRocm91Z2ggYSB0ZXN0aW5nIG1lY2hhbmlzbSB0byBlbnN1cmUgY29ycmVjdFxuICAgICAgICAvLyBpbnB1dC4gSXQgc2hvdWxkIGJlIG5vdGVkIHRoYXQgb3B0aW9ucyBtaWdodCBnZXQgbW9kaWZpZWQgdG9cbiAgICAgICAgLy8gYmUgaGFuZGxlZCBwcm9wZXJseS4gRS5nLiB3cmFwcGluZyBpbnRlZ2VycyBpbiBhcnJheXMuXG4gICAgICAgIE9iamVjdC5rZXlzKHRlc3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9uIGlzbid0IHNldCwgYnV0IGl0IGlzIHJlcXVpcmVkLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICAgIGlmICghaXNTZXQob3B0aW9uc1tuYW1lXSkgJiYgZGVmYXVsdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0c1tuYW1lXS5yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdcIiArIG5hbWUgKyBcIicgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXN0c1tuYW1lXS50KHBhcnNlZCwgIWlzU2V0KG9wdGlvbnNbbmFtZV0pID8gZGVmYXVsdHNbbmFtZV0gOiBvcHRpb25zW25hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZvcndhcmQgcGlwcyBvcHRpb25zXG4gICAgICAgIHBhcnNlZC5waXBzID0gb3B0aW9ucy5waXBzO1xuICAgICAgICAvLyBBbGwgcmVjZW50IGJyb3dzZXJzIGFjY2VwdCB1bnByZWZpeGVkIHRyYW5zZm9ybS5cbiAgICAgICAgLy8gV2UgbmVlZCAtbXMtIGZvciBJRTkgYW5kIC13ZWJraXQtIGZvciBvbGRlciBBbmRyb2lkO1xuICAgICAgICAvLyBBc3N1bWUgdXNlIG9mIC13ZWJraXQtIGlmIHVucHJlZml4ZWQgYW5kIC1tcy0gYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9dHJhbnNmb3JtczJkXG4gICAgICAgIHZhciBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG1zUHJlZml4ID0gZC5zdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgbm9QcmVmaXggPSBkLnN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBwYXJzZWQudHJhbnNmb3JtUnVsZSA9IG5vUHJlZml4ID8gXCJ0cmFuc2Zvcm1cIiA6IG1zUHJlZml4ID8gXCJtc1RyYW5zZm9ybVwiIDogXCJ3ZWJraXRUcmFuc2Zvcm1cIjtcbiAgICAgICAgLy8gUGlwcyBkb24ndCBtb3ZlLCBzbyB3ZSBjYW4gcGxhY2UgdGhlbSB1c2luZyBsZWZ0L3RvcC5cbiAgICAgICAgdmFyIHN0eWxlcyA9IFtcbiAgICAgICAgICAgIFtcImxlZnRcIiwgXCJ0b3BcIl0sXG4gICAgICAgICAgICBbXCJyaWdodFwiLCBcImJvdHRvbVwiXVxuICAgICAgICBdO1xuICAgICAgICBwYXJzZWQuc3R5bGUgPSBzdHlsZXNbcGFyc2VkLmRpcl1bcGFyc2VkLm9ydF07XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgZnVuY3Rpb24gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgICAgIHZhciBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSA9IGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCk7XG4gICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSAmJiBnZXRTdXBwb3J0c1Bhc3NpdmUoKTtcbiAgICAgICAgLy8gQWxsIHZhcmlhYmxlcyBsb2NhbCB0byAnc2NvcGUnIGFyZSBwcmVmaXhlZCB3aXRoICdzY29wZV8nXG4gICAgICAgIC8vIFNsaWRlciBET00gTm9kZXNcbiAgICAgICAgdmFyIHNjb3BlX1RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdmFyIHNjb3BlX0Jhc2U7XG4gICAgICAgIHZhciBzY29wZV9IYW5kbGVzO1xuICAgICAgICB2YXIgc2NvcGVfQ29ubmVjdHM7XG4gICAgICAgIHZhciBzY29wZV9QaXBzO1xuICAgICAgICB2YXIgc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgIC8vIFNsaWRlciBzdGF0ZSB2YWx1ZXNcbiAgICAgICAgdmFyIHNjb3BlX1NwZWN0cnVtID0gb3B0aW9ucy5zcGVjdHJ1bTtcbiAgICAgICAgdmFyIHNjb3BlX1ZhbHVlcyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgICAgIHZhciBzY29wZV9IYW5kbGVOdW1iZXJzID0gW107XG4gICAgICAgIHZhciBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPSAwO1xuICAgICAgICB2YXIgc2NvcGVfRXZlbnRzID0ge307XG4gICAgICAgIC8vIERvY3VtZW50IE5vZGVzXG4gICAgICAgIHZhciBzY29wZV9Eb2N1bWVudCA9IHRhcmdldC5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgc2NvcGVfRG9jdW1lbnRFbGVtZW50ID0gb3B0aW9ucy5kb2N1bWVudEVsZW1lbnQgfHwgc2NvcGVfRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgc2NvcGVfQm9keSA9IHNjb3BlX0RvY3VtZW50LmJvZHk7XG4gICAgICAgIC8vIEZvciBob3Jpem9udGFsIHNsaWRlcnMgaW4gc3RhbmRhcmQgbHRyIGRvY3VtZW50cyxcbiAgICAgICAgLy8gbWFrZSAubm9VaS1vcmlnaW4gb3ZlcmZsb3cgdG8gdGhlIGxlZnQgc28gdGhlIGRvY3VtZW50IGRvZXNuJ3Qgc2Nyb2xsLlxuICAgICAgICB2YXIgc2NvcGVfRGlyT2Zmc2V0ID0gc2NvcGVfRG9jdW1lbnQuZGlyID09PSBcInJ0bFwiIHx8IG9wdGlvbnMub3J0ID09PSAxID8gMCA6IDEwMDtcbiAgICAgICAgLy8gQ3JlYXRlcyBhIG5vZGUsIGFkZHMgaXQgdG8gdGFyZ2V0LCByZXR1cm5zIHRoZSBuZXcgbm9kZS5cbiAgICAgICAgZnVuY3Rpb24gYWRkTm9kZVRvKGFkZFRhcmdldCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2YXIgZGl2ID0gc2NvcGVfRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUYXJnZXQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIHJldHVybiBkaXY7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIGEgb3JpZ2luIHRvIHRoZSBiYXNlXG4gICAgICAgIGZ1bmN0aW9uIGFkZE9yaWdpbihiYXNlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm9yaWdpbik7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkTm9kZVRvKG9yaWdpbiwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZSk7XG4gICAgICAgICAgICBhZGROb2RlVG8oaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMudG91Y2hBcmVhKTtcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhhbmRsZVwiLCBTdHJpbmcoaGFuZGxlTnVtYmVyKSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5rZXlib2FyZFN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0dsb2JhbF9hdHRyaWJ1dGVzL3RhYmluZGV4XG4gICAgICAgICAgICAgICAgLy8gMCA9IGZvY3VzYWJsZSBhbmQgcmVhY2hhYmxlXG4gICAgICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudEtleWRvd24oZXZlbnQsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oYW5kbGVBdHRyaWJ1dGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlc18xID0gb3B0aW9ucy5oYW5kbGVBdHRyaWJ1dGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlc18xKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNfMVthdHRyaWJ1dGVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwic2xpZGVyXCIpO1xuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImFyaWEtb3JpZW50YXRpb25cIiwgb3B0aW9ucy5vcnQgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlTG93ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFuZGxlTnVtYmVyID09PSBvcHRpb25zLmhhbmRsZXMgLSAxKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlVXBwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbnNlcnQgbm9kZXMgZm9yIGNvbm5lY3QgZWxlbWVudHNcbiAgICAgICAgZnVuY3Rpb24gYWRkQ29ubmVjdChiYXNlLCBhZGQpIHtcbiAgICAgICAgICAgIGlmICghYWRkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGhhbmRsZXMgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgICAgICBmdW5jdGlvbiBhZGRFbGVtZW50cyhjb25uZWN0T3B0aW9ucywgYmFzZSkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3RCYXNlID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5jb25uZWN0cyk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzID0gW107XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0cyA9IFtdO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMucHVzaChhZGRDb25uZWN0KGNvbm5lY3RCYXNlLCBjb25uZWN0T3B0aW9uc1swXSkpO1xuICAgICAgICAgICAgLy8gWzo6OjpPPT09PU89PT09Tz09PT1dXG4gICAgICAgICAgICAvLyBjb25uZWN0T3B0aW9ucyA9IFswLCAxLCAxLCAxXVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIEtlZXAgYSBsaXN0IG9mIGFsbCBhZGRlZCBoYW5kbGVzLlxuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMucHVzaChhZGRPcmlnaW4oYmFzZSwgaSkpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnNbaV0gPSBpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbaSArIDFdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhIHNpbmdsZSBzbGlkZXIuXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNsaWRlcihhZGRUYXJnZXQpIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IGNsYXNzZXMgYW5kIGRhdGEgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcmdldCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5sdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMucnRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9ydCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmhvcml6b250YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudmVydGljYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRleHREaXJlY3Rpb24gPSBnZXRDb21wdXRlZFN0eWxlKGFkZFRhcmdldCkuZGlyZWN0aW9uO1xuICAgICAgICAgICAgaWYgKHRleHREaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uUnRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRleHREaXJlY3Rpb25MdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5iYXNlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRUb29sdGlwKGhhbmRsZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMudG9vbHRpcHMgfHwgIW9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oaGFuZGxlLmZpcnN0Q2hpbGQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50b29sdGlwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1NsaWRlckRpc2FibGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1RhcmdldC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEaXNhYmxlIHRoZSBzbGlkZXIgZHJhZ2dpbmcgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgICAgICBmdW5jdGlvbiBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVPcmlnaW4uaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVG9vbHRpcHMoKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzLmZvckVhY2goZnVuY3Rpb24gKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQodG9vbHRpcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHRvb2x0aXBzIG9wdGlvbiBpcyBhIHNob3J0aGFuZCBmb3IgdXNpbmcgdGhlICd1cGRhdGUnIGV2ZW50LlxuICAgICAgICBmdW5jdGlvbiB0b29sdGlwcygpIHtcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgICAgICAvLyBUb29sdGlwcyBhcmUgYWRkZWQgd2l0aCBvcHRpb25zLnRvb2x0aXBzIGluIG9yaWdpbmFsIG9yZGVyLlxuICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMgPSBzY29wZV9IYW5kbGVzLm1hcChhZGRUb29sdGlwKTtcbiAgICAgICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzY29wZV9Ub29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzY29wZV9Ub29sdGlwc1toYW5kbGVOdW1iZXJdID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0udG8odW5lbmNvZGVkW2hhbmRsZU51bWJlcl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwc1toYW5kbGVOdW1iZXJdLmlubmVySFRNTCA9IGZvcm1hdHRlZFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXJpYSgpIHtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhKTtcbiAgICAgICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQsIHRhcCwgcG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIEFyaWEgVmFsdWVzIGZvciBhbGwgaGFuZGxlcywgYXMgYSBjaGFuZ2UgaW4gb25lIGNoYW5nZXMgbWluIGFuZCBtYXggdmFsdWVzIGZvciB0aGUgbmV4dC5cbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBpbmRleCwgMCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDEwMCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3JtYXR0ZWQgdmFsdWUgZm9yIGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBTdHJpbmcob3B0aW9ucy5hcmlhRm9ybWF0LnRvKHVuZW5jb2RlZFtpbmRleF0pKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFwIHRvIHNsaWRlciByYW5nZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgbWluID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1pbikudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1heCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgbm93ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG5vdykudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtaW5cIiwgbWluKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtYXhcIiwgbWF4KTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVub3dcIiwgbm93KTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIsIHRleHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0R3JvdXAocGlwcykge1xuICAgICAgICAgICAgLy8gVXNlIHRoZSByYW5nZS5cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuUmFuZ2UgfHwgcGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLnhWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLkNvdW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBpcHMudmFsdWVzIDwgMikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndmFsdWVzJyAoPj0gMikgcmVxdWlyZWQgZm9yIG1vZGUgJ2NvdW50Jy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERpdmlkZSAwIC0gMTAwIGluICdjb3VudCcgcGFydHMuXG4gICAgICAgICAgICAgICAgdmFyIGludGVydmFsID0gcGlwcy52YWx1ZXMgLSAxO1xuICAgICAgICAgICAgICAgIHZhciBzcHJlYWQgPSAxMDAgLyBpbnRlcnZhbDtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgLy8gTGlzdCB0aGVzZSBwYXJ0cyBhbmQgaGF2ZSB0aGVtIGhhbmRsZWQgYXMgJ3Bvc2l0aW9ucycuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGludGVydmFsLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ludGVydmFsXSA9IGludGVydmFsICogc3ByZWFkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCgxMDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHZhbHVlcywgcGlwcy5zdGVwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuUG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gTWFwIGFsbCBwZXJjZW50YWdlcyB0byBvbi1yYW5nZSB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcFRvUmFuZ2UocGlwcy52YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlZhbHVlcykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBtdXN0IGJlIHN0ZXBwZWQsIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZCB0byBhIHBlcmNlbnRhZ2UgZmlyc3QuXG4gICAgICAgICAgICAgICAgaWYgKHBpcHMuc3RlcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCB0byBwZXJjZW50YWdlLCBhcHBseSBzdGVwLCByZXR1cm4gdG8gdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAoc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh2YWx1ZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UgY2FuIHNpbXBseSB1c2UgdGhlIHZhbHVlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW107IC8vIHBpcHMubW9kZSA9IG5ldmVyXG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFwVG9SYW5nZSh2YWx1ZXMsIHN0ZXBwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcoc3RlcHBlZCA/IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodmFsdWUpIDogdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVTcHJlYWQocGlwcykge1xuICAgICAgICAgICAgZnVuY3Rpb24gc2FmZUluY3JlbWVudCh2YWx1ZSwgaW5jcmVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgZmxvYXRpbmcgcG9pbnQgdmFyaWFuY2UgYnkgZHJvcHBpbmcgdGhlIHNtYWxsZXN0IGRlY2ltYWwgcGxhY2VzLlxuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoKHZhbHVlICsgaW5jcmVtZW50KS50b0ZpeGVkKDcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBncm91cCA9IGdldEdyb3VwKHBpcHMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ZXMgPSB7fTtcbiAgICAgICAgICAgIHZhciBmaXJzdEluUmFuZ2UgPSBzY29wZV9TcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICAgICAgdmFyIGxhc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFtzY29wZV9TcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgaWdub3JlTGFzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHByZXZQY3QgPSAwO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZ3JvdXAsIHNvcnQgaXQgYW5kIGZpbHRlciBhd2F5IGFsbCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgZ3JvdXAgPSB1bmlxdWUoZ3JvdXAuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSByYW5nZSBzdGFydHMgd2l0aCB0aGUgZmlyc3QgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChncm91cFswXSAhPT0gZmlyc3RJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAudW5zaGlmdChmaXJzdEluUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGlnbm9yZUZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExpa2V3aXNlIGZvciB0aGUgbGFzdCBvbmUuXG4gICAgICAgICAgICBpZiAoZ3JvdXBbZ3JvdXAubGVuZ3RoIC0gMV0gIT09IGxhc3RJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAucHVzaChsYXN0SW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgaWdub3JlTGFzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGVwIGFuZCB0aGUgbG93ZXIgKyB1cHBlciBwb3NpdGlvbnMuXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgdmFyIHE7XG4gICAgICAgICAgICAgICAgdmFyIGxvdyA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGhpZ2ggPSBncm91cFtpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQY3Q7XG4gICAgICAgICAgICAgICAgdmFyIHBjdERpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgdmFyIHBjdFBvcztcbiAgICAgICAgICAgICAgICB2YXIgdHlwZTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHM7XG4gICAgICAgICAgICAgICAgdmFyIHJlYWxTdGVwcztcbiAgICAgICAgICAgICAgICB2YXIgc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgdmFyIGlzU3RlcHMgPSBwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuU3RlcHM7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiB1c2luZyAnc3RlcHMnIG1vZGUsIHVzZSB0aGUgcHJvdmlkZWQgc3RlcHMuXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSdsbCBzdGVwIG9uIHRvIHRoZSBuZXh0IHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgIGlmIChpc1N0ZXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzY29wZV9TcGVjdHJ1bS54TnVtU3RlcHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgJ2Z1bGwnIHN0ZXAuXG4gICAgICAgICAgICAgICAgaWYgKCFzdGVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBoaWdoIC0gbG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiBoaWdoIGlzIHVuZGVmaW5lZCB3ZSBhcmUgYXQgdGhlIGxhc3Qgc3VicmFuZ2UuIE1ha2Ugc3VyZSBpdCBpdGVyYXRlcyBvbmNlICgjMTA4OClcbiAgICAgICAgICAgICAgICBpZiAoaGlnaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2ggPSBsb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBzdGVwIGlzbid0IDAsIHdoaWNoIHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AgKCM2NTQpXG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XG4gICAgICAgICAgICAgICAgLy8gRmluZCBhbGwgc3RlcHMgaW4gdGhlIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpID0gc2FmZUluY3JlbWVudChpLCBzdGVwKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHBlcmNlbnRhZ2UgdmFsdWUgZm9yIHRoZSBjdXJyZW50IHN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgc2l6ZSBmb3IgdGhlIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgICAgICBuZXdQY3QgPSBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKGkpO1xuICAgICAgICAgICAgICAgICAgICBwY3REaWZmZXJlbmNlID0gbmV3UGN0IC0gcHJldlBjdDtcbiAgICAgICAgICAgICAgICAgICAgc3RlcHMgPSBwY3REaWZmZXJlbmNlIC8gKHBpcHMuZGVuc2l0eSB8fCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhbFN0ZXBzID0gTWF0aC5yb3VuZChzdGVwcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgcmF0aW8gcmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHBlcmNlbnRhZ2Utc3BhY2UgYSBwb2ludCBpbmRpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBhIGRlbnNpdHkgMSB0aGUgcG9pbnRzL3BlcmNlbnRhZ2UgPSAxLiBGb3IgZGVuc2l0eSAyLCB0aGF0IHBlcmNlbnRhZ2UgbmVlZHMgdG8gYmUgcmUtZGl2aWRlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gUm91bmQgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IHRvIGFuIGV2ZW4gbnVtYmVyLCB0aGVuIGRpdmlkZSBieSB0d29cbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gc3ByZWFkIHRoZSBvZmZzZXQgb24gYm90aCBzaWRlcyBvZiB0aGUgcmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplID0gcGN0RGlmZmVyZW5jZSAvIHJlYWxTdGVwcztcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2aWRlIGFsbCBwb2ludHMgZXZlbmx5LCBhZGRpbmcgdGhlIGNvcnJlY3QgbnVtYmVyIHRvIHRoaXMgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biB1cCB0byA8PSBzbyB0aGF0IDEwMCUgZ2V0cyBhIHBvaW50LCBldmVudCBpZiBpZ25vcmVMYXN0IGlzIHNldC5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChxID0gMTsgcSA8PSByZWFsU3RlcHM7IHEgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJhdGlvIGJldHdlZW4gdGhlIHJvdW5kZWQgdmFsdWUgYW5kIHRoZSBhY3R1YWwgc2l6ZSBtaWdodCBiZSB+MSUgb2ZmLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29ycmVjdCB0aGUgcGVyY2VudGFnZSBvZmZzZXQgYnkgdGhlIG51bWJlciBvZiBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlciBzdWJyYW5nZS4gZGVuc2l0eSA9IDEgd2lsbCByZXN1bHQgaW4gMTAwIHBvaW50cyBvbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZ1bGwgcmFuZ2UsIDIgZm9yIDUwLCA0IGZvciAyNSwgZXRjLlxuICAgICAgICAgICAgICAgICAgICAgICAgcGN0UG9zID0gcHJldlBjdCArIHEgKiBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXNbcGN0UG9zLnRvRml4ZWQoNSldID0gW3Njb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhwY3RQb3MpLCAwXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHBvaW50IHR5cGUuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBncm91cC5pbmRleE9mKGkpID4gLTEgPyBleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWUgOiBpc1N0ZXBzID8gZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlIDogZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBFbmZvcmNlIHRoZSAnaWdub3JlRmlyc3QnIG9wdGlvbiBieSBvdmVyd3JpdGluZyB0aGUgdHlwZSBmb3IgMC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmRleCAmJiBpZ25vcmVGaXJzdCAmJiBpICE9PSBoaWdoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIShpID09PSBoaWdoICYmIGlnbm9yZUxhc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSAndHlwZScgb2YgdGhpcyBwb2ludC4gMCA9IHBsYWluLCAxID0gcmVhbCB2YWx1ZSwgMiA9IHN0ZXAgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzW25ld1BjdC50b0ZpeGVkKDUpXSA9IFtpLCB0eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHBlcmNlbnRhZ2UgY291bnQuXG4gICAgICAgICAgICAgICAgICAgIHByZXZQY3QgPSBuZXdQY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlcztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRNYXJraW5nKHNwcmVhZCwgZmlsdGVyRnVuYywgZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlU2l6ZUNsYXNzZXMgPSAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLk5vbmVdID0gXCJcIixcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTm9ybWFsLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVMYXJnZSxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlU3ViLFxuICAgICAgICAgICAgICAgIF9hKTtcbiAgICAgICAgICAgIHZhciBtYXJrZXJTaXplQ2xhc3NlcyA9IChfYiA9IHt9LFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTm9ybWFsLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTGFyZ2UsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJTdWIsXG4gICAgICAgICAgICAgICAgX2IpO1xuICAgICAgICAgICAgdmFyIHZhbHVlT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVZlcnRpY2FsXTtcbiAgICAgICAgICAgIHZhciBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXMgPSBbb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJWZXJ0aWNhbF07XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBvcHRpb25zLmNzc0NsYXNzZXMucGlwcyk7XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBvcHRpb25zLm9ydCA9PT0gMCA/IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzSG9yaXpvbnRhbCA6IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzVmVydGljYWwpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Q2xhc3Nlcyh0eXBlLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHNvdXJjZSA9PT0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbkNsYXNzZXMgPSBhID8gdmFsdWVPcmllbnRhdGlvbkNsYXNzZXMgOiBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXM7XG4gICAgICAgICAgICAgICAgdmFyIHNpemVDbGFzc2VzID0gYSA/IHZhbHVlU2l6ZUNsYXNzZXMgOiBtYXJrZXJTaXplQ2xhc3NlcztcbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlICsgXCIgXCIgKyBvcmllbnRhdGlvbkNsYXNzZXNbb3B0aW9ucy5vcnRdICsgXCIgXCIgKyBzaXplQ2xhc3Nlc1t0eXBlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFNwcmVhZChvZmZzZXQsIHZhbHVlLCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGZpbHRlciBmdW5jdGlvbiwgaWYgaXQgaXMgc2V0LlxuICAgICAgICAgICAgICAgIHR5cGUgPSBmaWx0ZXJGdW5jID8gZmlsdGVyRnVuYyh2YWx1ZSwgdHlwZSkgOiB0eXBlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBleHBvcnRzLlBpcHNUeXBlLk5vbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgYSBtYXJrZXIgZm9yIGV2ZXJ5IHBvaW50XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyKTtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgLy8gVmFsdWVzIGFyZSBvbmx5IGFwcGVuZGVkIGZvciBwb2ludHMgbWFya2VkICcxJyBvciAnMicuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPiBleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGFkZE5vZGVUbyhlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbb3B0aW9ucy5zdHlsZV0gPSBvZmZzZXQgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBTdHJpbmcoZm9ybWF0dGVyLnRvKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXBwZW5kIGFsbCBwb2ludHMuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzcHJlYWQpLmZvckVhY2goZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgICAgIGFkZFNwcmVhZChvZmZzZXQsIHNwcmVhZFtvZmZzZXRdWzBdLCBzcHJlYWRbb2Zmc2V0XVsxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVBpcHMoKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVfUGlwcykge1xuICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQoc2NvcGVfUGlwcyk7XG4gICAgICAgICAgICAgICAgc2NvcGVfUGlwcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGlwcyhwaXBzKSB7XG4gICAgICAgICAgICAvLyBGaXggIzY2OVxuICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xuICAgICAgICAgICAgdmFyIHNwcmVhZCA9IGdlbmVyYXRlU3ByZWFkKHBpcHMpO1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHBpcHMuZmlsdGVyO1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IHBpcHMuZm9ybWF0IHx8IHtcbiAgICAgICAgICAgICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzY29wZV9QaXBzID0gc2NvcGVfVGFyZ2V0LmFwcGVuZENoaWxkKGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXIsIGZvcm1hdCkpO1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1BpcHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2hvcnRoYW5kIGZvciBiYXNlIGRpbWVuc2lvbnMuXG4gICAgICAgIGZ1bmN0aW9uIGJhc2VTaXplKCkge1xuICAgICAgICAgICAgdmFyIHJlY3QgPSBzY29wZV9CYXNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdmFyIGFsdCA9IChcIm9mZnNldFwiICsgW1wiV2lkdGhcIiwgXCJIZWlnaHRcIl1bb3B0aW9ucy5vcnRdKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm9ydCA9PT0gMCA/IHJlY3Qud2lkdGggfHwgc2NvcGVfQmFzZVthbHRdIDogcmVjdC5oZWlnaHQgfHwgc2NvcGVfQmFzZVthbHRdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXIgZm9yIGF0dGFjaGluZyBldmVudHMgdHJvdWdoIGEgcHJveHkuXG4gICAgICAgIGZ1bmN0aW9uIGF0dGFjaEV2ZW50KGV2ZW50cywgZWxlbWVudCwgY2FsbGJhY2ssIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gJ2ZpbHRlcicgZXZlbnRzIHRvIHRoZSBzbGlkZXIuXG4gICAgICAgICAgICAvLyBlbGVtZW50IGlzIGEgbm9kZSwgbm90IGEgbm9kZUxpc3RcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IGZpeEV2ZW50KGV2ZW50LCBkYXRhLnBhZ2VPZmZzZXQsIGRhdGEudGFyZ2V0IHx8IGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8vIGZpeEV2ZW50IHJldHVybnMgZmFsc2UgaWYgdGhpcyBldmVudCBoYXMgYSBkaWZmZXJlbnQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgLy8gd2hlbiBoYW5kbGluZyAobXVsdGktKSB0b3VjaCBldmVudHM7XG4gICAgICAgICAgICAgICAgaWYgKCFlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZG9Ob3RSZWplY3QgaXMgcGFzc2VkIGJ5IGFsbCBlbmQgZXZlbnRzIHRvIG1ha2Ugc3VyZSByZWxlYXNlZCB0b3VjaGVzXG4gICAgICAgICAgICAgICAgLy8gYXJlIG5vdCByZWplY3RlZCwgbGVhdmluZyB0aGUgc2xpZGVyIFwic3R1Y2tcIiB0byB0aGUgY3Vyc29yO1xuICAgICAgICAgICAgICAgIGlmIChpc1NsaWRlckRpc2FibGVkKCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIGFuIGFjdGl2ZSAndGFwJyB0cmFuc2l0aW9uIGlzIHRha2luZyBwbGFjZS5cbiAgICAgICAgICAgICAgICBpZiAoaGFzQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSByaWdodCBvciBtaWRkbGUgY2xpY2tzIG9uIHN0YXJ0ICM0NTRcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRzID09PSBhY3Rpb25zLnN0YXJ0ICYmIGUuYnV0dG9ucyAhPT0gdW5kZWZpbmVkICYmIGUuYnV0dG9ucyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaG92ZXIgJiYgZS5idXR0b25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gJ3N1cHBvcnRzUGFzc2l2ZScgaXMgb25seSB0cnVlIGlmIGEgYnJvd3NlciBhbHNvIHN1cHBvcnRzIHRvdWNoLWFjdGlvbjogbm9uZSBpbiBDU1MuXG4gICAgICAgICAgICAgICAgLy8gaU9TIHNhZmFyaSBkb2VzIG5vdCwgc28gaXQgZG9lc24ndCBnZXQgdG8gYmVuZWZpdCBmcm9tIHBhc3NpdmUgc2Nyb2xsaW5nLiBpT1MgZG9lcyBzdXBwb3J0XG4gICAgICAgICAgICAgICAgLy8gdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb24sIGJ1dCB0aGF0IGFsbG93cyBwYW5uaW5nLCB3aGljaCBicmVha3NcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXJzIGFmdGVyIHpvb21pbmcvb24gbm9uLXJlc3BvbnNpdmUgcGFnZXMuXG4gICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTMzMTEyXG4gICAgICAgICAgICAgICAgaWYgKCFzdXBwb3J0c1Bhc3NpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLmNhbGNQb2ludCA9IGUucG9pbnRzW29wdGlvbnMub3J0XTtcbiAgICAgICAgICAgICAgICAvLyBDYWxsIHRoZSBldmVudCBoYW5kbGVyIHdpdGggdGhlIGV2ZW50IFsgYW5kIGFkZGl0aW9uYWwgZGF0YSBdLlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbWV0aG9kcyA9IFtdO1xuICAgICAgICAgICAgLy8gQmluZCBhIGNsb3N1cmUgb24gdGhlIHRhcmdldCBmb3IgZXZlcnkgZXZlbnQgdHlwZS5cbiAgICAgICAgICAgIGV2ZW50cy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbWV0aG9kLCBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBtZXRob2RzLnB1c2goW2V2ZW50TmFtZSwgbWV0aG9kXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2RzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByb3ZpZGUgYSBjbGVhbiBldmVudCB3aXRoIHN0YW5kYXJkaXplZCBvZmZzZXQgdmFsdWVzLlxuICAgICAgICBmdW5jdGlvbiBmaXhFdmVudChlLCBwYWdlT2Zmc2V0LCBldmVudFRhcmdldCkge1xuICAgICAgICAgICAgLy8gRmlsdGVyIHRoZSBldmVudCB0byByZWdpc3RlciB0aGUgdHlwZSwgd2hpY2ggY2FuIGJlXG4gICAgICAgICAgICAvLyB0b3VjaCwgbW91c2Ugb3IgcG9pbnRlci4gT2Zmc2V0IGNoYW5nZXMgbmVlZCB0byBiZVxuICAgICAgICAgICAgLy8gbWFkZSBvbiBhbiBldmVudCBzcGVjaWZpYyBiYXNpcy5cbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGUudHlwZS5pbmRleE9mKFwidG91Y2hcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgbW91c2UgPSBlLnR5cGUuaW5kZXhPZihcIm1vdXNlXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIHBvaW50ZXIgPSBlLnR5cGUuaW5kZXhPZihcInBvaW50ZXJcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgICAgICAvLyBJRTEwIGltcGxlbWVudGVkIHBvaW50ZXIgZXZlbnRzIHdpdGggYSBwcmVmaXg7XG4gICAgICAgICAgICBpZiAoZS50eXBlLmluZGV4T2YoXCJNU1BvaW50ZXJcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBwb2ludGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEVycm9uZW91cyBldmVudHMgc2VlbSB0byBiZSBwYXNzZWQgaW4gb2NjYXNpb25hbGx5IG9uIGlPUy9pUGFkT1MgYWZ0ZXIgdXNlciBmaW5pc2hlcyBpbnRlcmFjdGluZyB3aXRoXG4gICAgICAgICAgICAvLyB0aGUgc2xpZGVyLiBUaGV5IGFwcGVhciB0byBiZSBvZiB0eXBlIE1vdXNlRXZlbnQsIHlldCB0aGV5IGRvbid0IGhhdmUgdXN1YWwgcHJvcGVydGllcyBzZXQuIElnbm9yZVxuICAgICAgICAgICAgLy8gZXZlbnRzIHRoYXQgaGF2ZSBubyB0b3VjaGVzIG9yIGJ1dHRvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZW0uICgjMTA1NywgIzEwNzksICMxMDk1KVxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIiAmJiAhZS5idXR0b25zICYmICFlLnRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgb25seSB0aGluZyBvbmUgaGFuZGxlIHNob3VsZCBiZSBjb25jZXJuZWQgYWJvdXQgaXMgdGhlIHRvdWNoZXMgdGhhdCBvcmlnaW5hdGVkIG9uIHRvcCBvZiBpdC5cbiAgICAgICAgICAgIGlmICh0b3VjaCkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybnMgdHJ1ZSBpZiBhIHRvdWNoIG9yaWdpbmF0ZWQgb24gdGhlIHRhcmdldC5cbiAgICAgICAgICAgICAgICB2YXIgaXNUb3VjaE9uVGFyZ2V0ID0gZnVuY3Rpb24gKGNoZWNrVG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGNoZWNrVG91Y2gudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHRhcmdldCA9PT0gZXZlbnRUYXJnZXQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmNvbnRhaW5zKHRhcmdldCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmNvbXBvc2VkICYmIGUuY29tcG9zZWRQYXRoKCkuc2hpZnQoKSA9PT0gZXZlbnRUYXJnZXQpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBjYXNlIG9mIHRvdWNoc3RhcnQgZXZlbnRzLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGVyZSBpcyBzdGlsbCBubyBtb3JlIHRoYW4gb25lXG4gICAgICAgICAgICAgICAgLy8gdG91Y2ggb24gdGhlIHRhcmdldCBzbyB3ZSBsb29rIGFtb25nc3QgYWxsIHRvdWNoZXMuXG4gICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJ0b3VjaHN0YXJ0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFRvdWNoZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZS50b3VjaGVzLCBpc1RvdWNoT25UYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3Qgc3VwcG9ydCBtb3JlIHRoYW4gb25lIHRvdWNoIHBlciBoYW5kbGUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ID0gdGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbiB0aGUgb3RoZXIgY2FzZXMsIGZpbmQgb24gY2hhbmdlZFRvdWNoZXMgaXMgZW5vdWdoLlxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VG91Y2ggPSBBcnJheS5wcm90b3R5cGUuZmluZC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGlzVG91Y2hPblRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbCBpZiB0aGUgdGFyZ2V0IHRvdWNoIGhhcyBub3QgbW92ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0VG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ID0gdGFyZ2V0VG91Y2gucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaC5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWdlT2Zmc2V0ID0gcGFnZU9mZnNldCB8fCBnZXRQYWdlT2Zmc2V0KHNjb3BlX0RvY3VtZW50KTtcbiAgICAgICAgICAgIGlmIChtb3VzZSB8fCBwb2ludGVyKSB7XG4gICAgICAgICAgICAgICAgeCA9IGUuY2xpZW50WCArIHBhZ2VPZmZzZXQueDtcbiAgICAgICAgICAgICAgICB5ID0gZS5jbGllbnRZICsgcGFnZU9mZnNldC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wYWdlT2Zmc2V0ID0gcGFnZU9mZnNldDtcbiAgICAgICAgICAgIGUucG9pbnRzID0gW3gsIHldO1xuICAgICAgICAgICAgZS5jdXJzb3IgPSBtb3VzZSB8fCBwb2ludGVyOyAvLyBGaXggIzQzNVxuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJhbnNsYXRlIGEgY29vcmRpbmF0ZSBpbiB0aGUgZG9jdW1lbnQgdG8gYSBwZXJjZW50YWdlIG9uIHRoZSBzbGlkZXJcbiAgICAgICAgZnVuY3Rpb24gY2FsY1BvaW50VG9QZXJjZW50YWdlKGNhbGNQb2ludCkge1xuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gY2FsY1BvaW50IC0gb2Zmc2V0KHNjb3BlX0Jhc2UsIG9wdGlvbnMub3J0KTtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IChsb2NhdGlvbiAqIDEwMCkgLyBiYXNlU2l6ZSgpO1xuICAgICAgICAgICAgLy8gQ2xhbXAgcHJvcG9zYWwgYmV0d2VlbiAwJSBhbmQgMTAwJVxuICAgICAgICAgICAgLy8gT3V0LW9mLWJvdW5kIGNvb3JkaW5hdGVzIG1heSBvY2N1ciB3aGVuIC5ub1VpLWJhc2UgcHNldWRvLWVsZW1lbnRzXG4gICAgICAgICAgICAvLyBhcmUgdXNlZCAoZS5nLiBjb250YWluZWQgaGFuZGxlcyBmZWF0dXJlKVxuICAgICAgICAgICAgcHJvcG9zYWwgPSBsaW1pdChwcm9wb3NhbCk7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBwcm9wb3NhbCA6IHByb3Bvc2FsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpbmQgaGFuZGxlIGNsb3Nlc3QgdG8gYSBjZXJ0YWluIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgICAgICBmdW5jdGlvbiBnZXRDbG9zZXN0SGFuZGxlKGNsaWNrZWRQb3NpdGlvbikge1xuICAgICAgICAgICAgdmFyIHNtYWxsZXN0RGlmZmVyZW5jZSA9IDEwMDtcbiAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIERpc2FibGVkIGhhbmRsZXMgYXJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICBpZiAoaXNIYW5kbGVEaXNhYmxlZChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlUG9zaXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPSBNYXRoLmFicyhoYW5kbGVQb3NpdGlvbiAtIGNsaWNrZWRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbCBzdGF0ZVxuICAgICAgICAgICAgICAgIHZhciBjbGlja0F0RWRnZSA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9PT0gMTAwICYmIHNtYWxsZXN0RGlmZmVyZW5jZSA9PT0gMTAwO1xuICAgICAgICAgICAgICAgIC8vIERpZmZlcmVuY2Ugd2l0aCB0aGlzIGhhbmRsZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHByZXZpb3VzbHkgY2hlY2tlZCBoYW5kbGVcbiAgICAgICAgICAgICAgICB2YXIgaXNDbG9zZXIgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPCBzbWFsbGVzdERpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgdmFyIGlzQ2xvc2VyQWZ0ZXIgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPD0gc21hbGxlc3REaWZmZXJlbmNlICYmIGNsaWNrZWRQb3NpdGlvbiA+IGhhbmRsZVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChpc0Nsb3NlciB8fCBpc0Nsb3NlckFmdGVyIHx8IGNsaWNrQXRFZGdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlciA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBzbWFsbGVzdERpZmZlcmVuY2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlTnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcmUgJ2VuZCcgd2hlbiBhIG1vdXNlIG9yIHBlbiBsZWF2ZXMgdGhlIGRvY3VtZW50LlxuICAgICAgICBmdW5jdGlvbiBkb2N1bWVudExlYXZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZW91dFwiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSBcIkhUTUxcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBldmVudEVuZChldmVudCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIG1vdmVtZW50IG9uIGRvY3VtZW50IGZvciBoYW5kbGUgYW5kIHJhbmdlIGRyYWcuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50TW92ZShldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gRml4ICM0OThcbiAgICAgICAgICAgIC8vIENoZWNrIHZhbHVlIG9mIC5idXR0b25zIGluICdzdGFydCcgdG8gd29yayBhcm91bmQgYSBidWcgaW4gSUUxMCBtb2JpbGUgKGRhdGEuYnV0dG9uc1Byb3BlcnR5KS5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvOTI3MDA1L21vYmlsZS1pZTEwLXdpbmRvd3MtcGhvbmUtYnV0dG9ucy1wcm9wZXJ0eS1vZi1wb2ludGVybW92ZS1ldmVudC1hbHdheXMtemVyb1xuICAgICAgICAgICAgLy8gSUU5IGhhcyAuYnV0dG9ucyBhbmQgLndoaWNoIHplcm8gb24gbW91c2Vtb3ZlLlxuICAgICAgICAgICAgLy8gRmlyZWZveCBicmVha3MgdGhlIHNwZWMgTUROIGRlZmluZXMuXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgOVwiKSA9PT0gLTEgJiYgZXZlbnQuYnV0dG9ucyA9PT0gMCAmJiBkYXRhLmJ1dHRvbnNQcm9wZXJ0eSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudEVuZChldmVudCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBhcmUgbW92aW5nIHVwIG9yIGRvd25cbiAgICAgICAgICAgIHZhciBtb3ZlbWVudCA9IChvcHRpb25zLmRpciA/IC0xIDogMSkgKiAoZXZlbnQuY2FsY1BvaW50IC0gZGF0YS5zdGFydENhbGNQb2ludCk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBtb3ZlbWVudCBpbnRvIGEgcGVyY2VudGFnZSBvZiB0aGUgc2xpZGVyIHdpZHRoL2hlaWdodFxuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gKG1vdmVtZW50ICogMTAwKSAvIGRhdGEuYmFzZVNpemU7XG4gICAgICAgICAgICBtb3ZlSGFuZGxlcyhtb3ZlbWVudCA+IDAsIHByb3Bvc2FsLCBkYXRhLmxvY2F0aW9ucywgZGF0YS5oYW5kbGVOdW1iZXJzLCBkYXRhLmNvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuYmluZCBtb3ZlIGV2ZW50cyBvbiBkb2N1bWVudCwgY2FsbCBjYWxsYmFja3MuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50RW5kKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBUaGUgaGFuZGxlIGlzIG5vIGxvbmdlciBhY3RpdmUsIHNvIHJlbW92ZSB0aGUgY2xhc3MuXG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGUpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhkYXRhLmhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50IC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVbmJpbmQgdGhlIG1vdmUgYW5kIGVuZCBldmVudHMsIHdoaWNoIGFyZSBhZGRlZCBvbiAnc3RhcnQnLlxuICAgICAgICAgICAgZGF0YS5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHNjb3BlX0RvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGNbMF0sIGNbMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGRyYWdnaW5nIGNsYXNzLlxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWcpO1xuICAgICAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjdXJzb3Igc3R5bGVzIGFuZCB0ZXh0LXNlbGVjdGlvbiBldmVudHMgYm91bmQgdG8gdGhlIGJvZHkuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnN0eWxlLmN1cnNvciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIHByZXZlbnREZWZhdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiZW5kXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LlxuICAgICAgICBmdW5jdGlvbiBldmVudFN0YXJ0KGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgZXZlbnQgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5zb21lKGlzSGFuZGxlRGlzYWJsZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhbmRsZTtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZU51bWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbZGF0YS5oYW5kbGVOdW1iZXJzWzBdXTtcbiAgICAgICAgICAgICAgICBoYW5kbGUgPSBoYW5kbGVPcmlnaW4uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgaGFuZGxlIGFzICdhY3RpdmUnIHNvIGl0IGNhbiBiZSBzdHlsZWQuXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEEgZHJhZyBzaG91bGQgbmV2ZXIgcHJvcGFnYXRlIHVwIHRvIHRoZSAndGFwJyBldmVudC5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgLy8gUmVjb3JkIHRoZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIG1vdmUgYW5kIGVuZCBldmVudHMuXG4gICAgICAgICAgICB2YXIgbW92ZUV2ZW50ID0gYXR0YWNoRXZlbnQoYWN0aW9ucy5tb3ZlLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGV2ZW50TW92ZSwge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBldmVudCB0YXJnZXQgaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwcm9wYWdhdGUgdGhlIG9yaWdpbmFsIG9uZSBzbyB0aGF0IHdlIGtlZXBcbiAgICAgICAgICAgICAgICAvLyByZWx5aW5nIG9uIGl0IHRvIGV4dHJhY3QgdGFyZ2V0IHRvdWNoZXMuXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgY29ubmVjdDogZGF0YS5jb25uZWN0LFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q2FsY1BvaW50OiBldmVudC5jYWxjUG9pbnQsXG4gICAgICAgICAgICAgICAgYmFzZVNpemU6IGJhc2VTaXplKCksXG4gICAgICAgICAgICAgICAgcGFnZU9mZnNldDogZXZlbnQucGFnZU9mZnNldCxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnMsXG4gICAgICAgICAgICAgICAgYnV0dG9uc1Byb3BlcnR5OiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uczogc2NvcGVfTG9jYXRpb25zLnNsaWNlKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGVuZEV2ZW50ID0gYXR0YWNoRXZlbnQoYWN0aW9ucy5lbmQsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRFbmQsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG91dEV2ZW50ID0gYXR0YWNoRXZlbnQoXCJtb3VzZW91dFwiLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50TGVhdmUsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gV2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgcHVzaGVkIHRoZSBsaXN0ZW5lcnMgaW4gdGhlIGxpc3RlbmVyIGxpc3QgcmF0aGVyIHRoYW4gY3JlYXRpbmdcbiAgICAgICAgICAgIC8vIGEgbmV3IG9uZSBhcyBpdCBoYXMgYWxyZWFkeSBiZWVuIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICBsaXN0ZW5lcnMucHVzaC5hcHBseShsaXN0ZW5lcnMsIG1vdmVFdmVudC5jb25jYXQoZW5kRXZlbnQsIG91dEV2ZW50KSk7XG4gICAgICAgICAgICAvLyBUZXh0IHNlbGVjdGlvbiBpc24ndCBhbiBpc3N1ZSBvbiB0b3VjaCBkZXZpY2VzLFxuICAgICAgICAgICAgLy8gc28gYWRkaW5nIGN1cnNvciBzdHlsZXMgY2FuIGJlIHNraXBwZWQuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgJ0knIGN1cnNvciBhbmQgZXh0ZW5kIHRoZSByYW5nZS1kcmFnIGN1cnNvci5cbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnN0eWxlLmN1cnNvciA9IGdldENvbXB1dGVkU3R5bGUoZXZlbnQudGFyZ2V0KS5jdXJzb3I7XG4gICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgdGFyZ2V0IHdpdGggYSBkcmFnZ2luZyBzdGF0ZS5cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRleHQgc2VsZWN0aW9uIHdoZW4gZHJhZ2dpbmcgdGhlIGhhbmRsZXMuXG4gICAgICAgICAgICAgICAgLy8gSW4gbm9VaVNsaWRlciA8PSA5LjIuMCwgdGhpcyB3YXMgaGFuZGxlZCBieSBjYWxsaW5nIHByZXZlbnREZWZhdWx0IG9uIG1vdXNlL3RvdWNoIHN0YXJ0L21vdmUsXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgc2Nyb2xsIGJsb2NraW5nLiBUaGUgc2VsZWN0c3RhcnQgZXZlbnQgaXMgc3VwcG9ydGVkIGJ5IEZpcmVGb3ggc3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDUyLFxuICAgICAgICAgICAgICAgIC8vIG1lYW5pbmcgdGhlIG9ubHkgaG9sZG91dCBpcyBpT1MgU2FmYXJpLiBUaGlzIGRvZXNuJ3QgbWF0dGVyOiB0ZXh0IHNlbGVjdGlvbiBpc24ndCB0cmlnZ2VyZWQgdGhlcmUuXG4gICAgICAgICAgICAgICAgLy8gVGhlICdjdXJzb3InIGZsYWcgaXMgZmFsc2UuXG4gICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1zZWxlY3RzdGFydFxuICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic3RhcnRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgY2xvc2VzdCBoYW5kbGUgdG8gdGFwcGVkIGxvY2F0aW9uLlxuICAgICAgICBmdW5jdGlvbiBldmVudFRhcChldmVudCkge1xuICAgICAgICAgICAgLy8gVGhlIHRhcCBldmVudCBzaG91bGRuJ3QgcHJvcGFnYXRlIHVwXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlciA9IGdldENsb3Nlc3RIYW5kbGUocHJvcG9zYWwpO1xuICAgICAgICAgICAgLy8gVGFja2xlIHRoZSBjYXNlIHRoYXQgYWxsIGhhbmRsZXMgYXJlICdkaXNhYmxlZCcuXG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZsYWcgdGhlIHNsaWRlciBhcyBpdCBpcyBub3cgaW4gYSB0cmFuc2l0aW9uYWwgc3RhdGUuXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uIHRha2VzIGEgY29uZmlndXJhYmxlIGFtb3VudCBvZiBtcyAoZGVmYXVsdCAzMDApLiBSZS1lbmFibGUgdGhlIHNsaWRlciBhZnRlciB0aGF0LlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmV2ZW50cy5zbmFwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHByb3Bvc2FsLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmV2ZW50cy5zbmFwKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudFN0YXJ0KGV2ZW50LCB7IGhhbmRsZU51bWJlcnM6IFtoYW5kbGVOdW1iZXJdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZpcmVzIGEgJ2hvdmVyJyBldmVudCBmb3IgYSBob3ZlcmVkIG1vdXNlL3BlbiBwb3NpdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRIb3ZlcihldmVudCkge1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XG4gICAgICAgICAgICB2YXIgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHByb3Bvc2FsKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiaG92ZXJcIiA9PT0gdGFyZ2V0RXZlbnQuc3BsaXQoXCIuXCIpWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0V2ZW50c1t0YXJnZXRFdmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGVfU2VsZiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVzIGtleWRvd24gb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgICAgIC8vIERvbid0IG1vdmUgdGhlIGRvY3VtZW50IHdoZW4gcHJlc3NpbmcgYXJyb3cga2V5cyBvbiBmb2N1c2VkIGhhbmRsZXNcbiAgICAgICAgZnVuY3Rpb24gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGlmIChpc1NsaWRlckRpc2FibGVkKCkgfHwgaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhvcml6b250YWxLZXlzID0gW1wiTGVmdFwiLCBcIlJpZ2h0XCJdO1xuICAgICAgICAgICAgdmFyIHZlcnRpY2FsS2V5cyA9IFtcIkRvd25cIiwgXCJVcFwiXTtcbiAgICAgICAgICAgIHZhciBsYXJnZVN0ZXBLZXlzID0gW1wiUGFnZURvd25cIiwgXCJQYWdlVXBcIl07XG4gICAgICAgICAgICB2YXIgZWRnZUtleXMgPSBbXCJIb21lXCIsIFwiRW5kXCJdO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlyICYmICFvcHRpb25zLm9ydCkge1xuICAgICAgICAgICAgICAgIC8vIE9uIGFuIHJpZ2h0LXRvLWxlZnQgc2xpZGVyLCB0aGUgbGVmdCBhbmQgcmlnaHQga2V5cyBhY3QgaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLm9ydCAmJiAhb3B0aW9ucy5kaXIpIHtcbiAgICAgICAgICAgICAgICAvLyBPbiBhIHRvcC10by1ib3R0b20gc2xpZGVyLCB0aGUgdXAgYW5kIGRvd24ga2V5cyBhY3QgaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIGxhcmdlU3RlcEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RyaXAgXCJBcnJvd1wiIGZvciBJRSBjb21wYXRpYmlsaXR5LiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvS2V5Ym9hcmRFdmVudC9rZXlcbiAgICAgICAgICAgIHZhciBrZXkgPSBldmVudC5rZXkucmVwbGFjZShcIkFycm93XCIsIFwiXCIpO1xuICAgICAgICAgICAgdmFyIGlzTGFyZ2VEb3duID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzBdO1xuICAgICAgICAgICAgdmFyIGlzTGFyZ2VVcCA9IGtleSA9PT0gbGFyZ2VTdGVwS2V5c1sxXTtcbiAgICAgICAgICAgIHZhciBpc0Rvd24gPSBrZXkgPT09IHZlcnRpY2FsS2V5c1swXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdIHx8IGlzTGFyZ2VEb3duO1xuICAgICAgICAgICAgdmFyIGlzVXAgPSBrZXkgPT09IHZlcnRpY2FsS2V5c1sxXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzFdIHx8IGlzTGFyZ2VVcDtcbiAgICAgICAgICAgIHZhciBpc01pbiA9IGtleSA9PT0gZWRnZUtleXNbMF07XG4gICAgICAgICAgICB2YXIgaXNNYXggPSBrZXkgPT09IGVkZ2VLZXlzWzFdO1xuICAgICAgICAgICAgaWYgKCFpc0Rvd24gJiYgIWlzVXAgJiYgIWlzTWluICYmICFpc01heCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciB0bztcbiAgICAgICAgICAgIGlmIChpc1VwIHx8IGlzRG93bikge1xuICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBpc0Rvd24gPyAwIDogMTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHMgPSBnZXROZXh0U3RlcHNGb3JIYW5kbGUoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcCA9IHN0ZXBzW2RpcmVjdGlvbl07XG4gICAgICAgICAgICAgICAgLy8gQXQgdGhlIGVkZ2Ugb2YgYSBzbGlkZXIsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIHN0ZXAgc2V0LCB1c2UgdGhlIGRlZmF1bHQgb2YgMTAlIG9mIHRoZSBzdWItcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IHNjb3BlX1NwZWN0cnVtLmdldERlZmF1bHRTdGVwKHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCBpc0Rvd24sIG9wdGlvbnMua2V5Ym9hcmREZWZhdWx0U3RlcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0xhcmdlVXAgfHwgaXNMYXJnZURvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCAqPSBvcHRpb25zLmtleWJvYXJkUGFnZU11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdGVwIG92ZXIgemVyby1sZW5ndGggcmFuZ2VzICgjOTQ4KTtcbiAgICAgICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcbiAgICAgICAgICAgICAgICAvLyBEZWNyZW1lbnQgZm9yIGRvd24gc3RlcHNcbiAgICAgICAgICAgICAgICBzdGVwID0gKGlzRG93biA/IC0xIDogMSkgKiBzdGVwO1xuICAgICAgICAgICAgICAgIHRvID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl0gKyBzdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNNYXgpIHtcbiAgICAgICAgICAgICAgICAvLyBFbmQga2V5XG4gICAgICAgICAgICAgICAgdG8gPSBvcHRpb25zLnNwZWN0cnVtLnhWYWxbb3B0aW9ucy5zcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSG9tZSBrZXlcbiAgICAgICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodG8pLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXR0YWNoIGV2ZW50cyB0byBzZXZlcmFsIHNsaWRlciBwYXJ0cy5cbiAgICAgICAgZnVuY3Rpb24gYmluZFNsaWRlckV2ZW50cyhiZWhhdmlvdXIpIHtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgc3RhbmRhcmQgZHJhZyBldmVudCB0byB0aGUgaGFuZGxlcy5cbiAgICAgICAgICAgIGlmICghYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIGV2ZW50cyBhcmUgb25seSBib3VuZCB0byB0aGUgdmlzdWFsIGhhbmRsZVxuICAgICAgICAgICAgICAgICAgICAvLyBlbGVtZW50LCBub3QgdGhlICdyZWFsJyBvcmlnaW4gZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgaGFuZGxlLmNoaWxkcmVuWzBdLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBbaW5kZXhdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSB0YXAgZXZlbnQgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci50YXApIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBzY29wZV9CYXNlLCBldmVudFRhcCwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyZSBob3ZlciBldmVudHNcbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuaG92ZXIpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0Jhc2UsIGV2ZW50SG92ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIHJhbmdlIGRyYWdnYWJsZS5cbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZykge1xuICAgICAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLmZvckVhY2goZnVuY3Rpb24gKGNvbm5lY3QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ID09PSBmYWxzZSB8fCBpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gc2NvcGVfQ29ubmVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVCZWZvcmUgPSBzY29wZV9IYW5kbGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVBZnRlciA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRIb2xkZXJzID0gW2Nvbm5lY3RdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlc1RvRHJhZyA9IFtoYW5kbGVCZWZvcmUsIGhhbmRsZUFmdGVyXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBbaW5kZXggLSAxLCBpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKGNvbm5lY3QsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnZ2FibGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSByYW5nZSBpcyBmaXhlZCwgdGhlIGVudGlyZSByYW5nZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gYmUgZHJhZ2dlZCBieSB0aGUgaGFuZGxlcy4gVGhlIGhhbmRsZSBpbiB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gb3JpZ2luIHdpbGwgcHJvcGFnYXRlIHRoZSBzdGFydCBldmVudCB1cHdhcmQsXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBpdCBuZWVkcyB0byBiZSBib3VuZCBtYW51YWxseSBvbiB0aGUgb3RoZXIuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUJlZm9yZS5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVBZnRlci5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5kcmFnQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVzVG9EcmFnID0gc2NvcGVfSGFuZGxlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBzY29wZV9IYW5kbGVOdW1iZXJzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgZXZlbnRIb2xkZXIsIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVzOiBoYW5kbGVzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGhhbmRsZU51bWJlcnNUb0RyYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogY29ubmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCBhbiBldmVudCB0byB0aGlzIHNsaWRlciwgcG9zc2libHkgaW5jbHVkaW5nIGEgbmFtZXNwYWNlXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRFdmVudChuYW1lc3BhY2VkRXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XSA9IHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdIHx8IFtdO1xuICAgICAgICAgICAgc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgYm91bmQgaXMgJ3VwZGF0ZSwnIGZpcmUgaXQgaW1tZWRpYXRlbHkgZm9yIGFsbCBoYW5kbGVzLlxuICAgICAgICAgICAgaWYgKG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF0gPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGEsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNJbnRlcm5hbE5hbWVzcGFjZShuYW1lc3BhY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc3BhY2UgPT09IElOVEVSTkFMX0VWRU5UX05TLmFyaWEgfHwgbmFtZXNwYWNlID09PSBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcztcbiAgICAgICAgfVxuICAgICAgICAvLyBVbmRvIGF0dGFjaG1lbnQgb2YgZXZlbnRcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnQobmFtZXNwYWNlZEV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuYW1lc3BhY2VkRXZlbnQgJiYgbmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSBldmVudCA/IG5hbWVzcGFjZWRFdmVudC5zdWJzdHJpbmcoZXZlbnQubGVuZ3RoKSA6IG5hbWVzcGFjZWRFdmVudDtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoYmluZCkge1xuICAgICAgICAgICAgICAgIHZhciB0RXZlbnQgPSBiaW5kLnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgICAgICB2YXIgdE5hbWVzcGFjZSA9IGJpbmQuc3Vic3RyaW5nKHRFdmVudC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmICgoIWV2ZW50IHx8IGV2ZW50ID09PSB0RXZlbnQpICYmICghbmFtZXNwYWNlIHx8IG5hbWVzcGFjZSA9PT0gdE5hbWVzcGFjZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBkZWxldGUgcHJvdGVjdGVkIGludGVybmFsIGV2ZW50IGlmIGludGVudGlvbmFsXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNJbnRlcm5hbE5hbWVzcGFjZSh0TmFtZXNwYWNlKSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzY29wZV9FdmVudHNbYmluZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFeHRlcm5hbCBldmVudCBoYW5kbGluZ1xuICAgICAgICBmdW5jdGlvbiBmaXJlRXZlbnQoZXZlbnROYW1lLCBoYW5kbGVOdW1iZXIsIHRhcCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudFR5cGUgPSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0V2ZW50c1t0YXJnZXRFdmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIHNsaWRlciBwdWJsaWMgQVBJIGFzIHRoZSBzY29wZSAoJ3RoaXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfU2VsZiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdmFsdWVzIGFzIGFycmF5LCBzbyBhcmdfMVthcmdfMl0gaXMgYWx3YXlzIHZhbGlkLlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfVmFsdWVzLm1hcChvcHRpb25zLmZvcm1hdC50byksIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGluZGV4LCAwIG9yIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVbi1mb3JtYXR0ZWQgc2xpZGVyIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfVmFsdWVzLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXZlbnQgaXMgZmlyZWQgYnkgdGFwLCB0cnVlIG9yIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXAgfHwgZmFsc2UsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGVmdCBvZmZzZXQgb2YgdGhlIGhhbmRsZSwgaW4gcmVsYXRpb24gdG8gdGhlIHNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSBzbGlkZXIgcHVibGljIEFQSSB0byBhbiBhY2Nlc3NpYmxlIHBhcmFtZXRlciB3aGVuIHRoaXMgaXMgdW5hdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTcGxpdCBvdXQgdGhlIGhhbmRsZSBwb3NpdGlvbmluZyBsb2dpYyBzbyB0aGUgTW92ZSBldmVudCBjYW4gdXNlIGl0LCB0b29cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tIYW5kbGVQb3NpdGlvbihyZWZlcmVuY2UsIGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGdldFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2U7XG4gICAgICAgICAgICAvLyBGb3Igc2xpZGVycyB3aXRoIG11bHRpcGxlIGhhbmRsZXMsIGxpbWl0IG1vdmVtZW50IHRvIHRoZSBvdGhlciBoYW5kbGUuXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgbWFyZ2luIG9wdGlvbiBieSBhZGRpbmcgaXQgdG8gdGhlIGhhbmRsZSBwb3NpdGlvbnMuXG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxICYmICFvcHRpb25zLmV2ZW50cy51bmNvbnN0cmFpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyIC0gMV0sIG9wdGlvbnMubWFyZ2luLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLm1hcmdpbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgbGltaXQgb3B0aW9uIGhhcyB0aGUgb3Bwb3NpdGUgZWZmZWN0LCBsaW1pdGluZyBoYW5kbGVzIHRvIGFcbiAgICAgICAgICAgIC8vIG1heGltdW0gZGlzdGFuY2UgZnJvbSBhbm90aGVyLiBMaW1pdCBtdXN0IGJlID4gMCwgYXMgb3RoZXJ3aXNlXG4gICAgICAgICAgICAvLyBoYW5kbGVzIHdvdWxkIGJlIHVubW92YWJsZS5cbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgb3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgICAgICAgIGlmIChsb29rQmFja3dhcmQgJiYgaGFuZGxlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLmxpbWl0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLmxpbWl0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBwYWRkaW5nIG9wdGlvbiBrZWVwcyB0aGUgaGFuZGxlcyBhIGNlcnRhaW4gZGlzdGFuY2UgZnJvbSB0aGVcbiAgICAgICAgICAgIC8vIGVkZ2VzIG9mIHRoZSBzbGlkZXIuIFBhZGRpbmcgbXVzdCBiZSA+IDAuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UoMCwgb3B0aW9ucy5wYWRkaW5nWzBdLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgxMDAsIG9wdGlvbnMucGFkZGluZ1sxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodG8pO1xuICAgICAgICAgICAgLy8gTGltaXQgcGVyY2VudGFnZSB0byB0aGUgMCAtIDEwMCByYW5nZVxuICAgICAgICAgICAgdG8gPSBsaW1pdCh0byk7XG4gICAgICAgICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgaGFuZGxlIGNhbid0IG1vdmVcbiAgICAgICAgICAgIGlmICh0byA9PT0gcmVmZXJlbmNlW2hhbmRsZU51bWJlcl0gJiYgIWdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVzZXMgc2xpZGVyIG9yaWVudGF0aW9uIHRvIGNyZWF0ZSBDU1MgcnVsZXMuIGEgPSBiYXNlIHZhbHVlO1xuICAgICAgICBmdW5jdGlvbiBpblJ1bGVPcmRlcih2LCBhKSB7XG4gICAgICAgICAgICB2YXIgbyA9IG9wdGlvbnMub3J0O1xuICAgICAgICAgICAgcmV0dXJuIChvID8gYSA6IHYpICsgXCIsIFwiICsgKG8gPyB2IDogYSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZXMgaGFuZGxlKHMpIGJ5IGEgcGVyY2VudGFnZVxuICAgICAgICAvLyAoYm9vbCwgJSB0byBtb3ZlLCBbJSB3aGVyZSBoYW5kbGUgc3RhcnRlZCwgLi4uXSwgW2luZGV4IGluIHNjb3BlX0hhbmRsZXMsIC4uLl0pXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIGxvY2F0aW9ucywgaGFuZGxlTnVtYmVycywgY29ubmVjdCkge1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FscyA9IGxvY2F0aW9ucy5zbGljZSgpO1xuICAgICAgICAgICAgLy8gU3RvcmUgZmlyc3QgaGFuZGxlIG5vdywgc28gd2Ugc3RpbGwgaGF2ZSBpdCBpbiBjYXNlIGhhbmRsZU51bWJlcnMgaXMgcmV2ZXJzZWRcbiAgICAgICAgICAgIHZhciBmaXJzdEhhbmRsZSA9IGhhbmRsZU51bWJlcnNbMF07XG4gICAgICAgICAgICB2YXIgYiA9IFshdXB3YXJkLCB1cHdhcmRdO1xuICAgICAgICAgICAgdmFyIGYgPSBbdXB3YXJkLCAhdXB3YXJkXTtcbiAgICAgICAgICAgIC8vIENvcHkgaGFuZGxlTnVtYmVycyBzbyB3ZSBkb24ndCBjaGFuZ2UgdGhlIGRhdGFzZXRcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMgPSBoYW5kbGVOdW1iZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgd2hpY2ggaGFuZGxlIGlzICdsZWFkaW5nJy5cbiAgICAgICAgICAgIC8vIElmIHRoYXQgb25lIGNhbid0IG1vdmUgdGhlIHNlY29uZCBjYW4ndCBlaXRoZXIuXG4gICAgICAgICAgICBpZiAodXB3YXJkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGVwIDE6IGdldCB0aGUgbWF4aW11bSBwZXJjZW50YWdlIHRoYXQgYW55IG9mIHRoZSBoYW5kbGVzIGNhbiBtb3ZlXG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvID0gY2hlY2tIYW5kbGVQb3NpdGlvbihwcm9wb3NhbHMsIGhhbmRsZU51bWJlciwgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIG9uZSBvZiB0aGUgaGFuZGxlcyBjYW4ndCBtb3ZlLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IHRvIC0gcHJvcG9zYWxzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1c2luZyBvbmUgaGFuZGxlLCBjaGVjayBiYWNrd2FyZCBBTkQgZm9yd2FyZFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYiA9IGYgPSBbdHJ1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFN0ZXAgMjogVHJ5IHRvIHNldCB0aGUgaGFuZGxlcyB3aXRoIHRoZSBmb3VuZCBwZXJjZW50YWdlXG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlciwgbykge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgbG9jYXRpb25zW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSkgfHwgc3RhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFN0ZXAgMzogSWYgYSBoYW5kbGUgbW92ZWQsIGZpcmUgZXZlbnRzXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBjb25uZWN0LCB0aGVuIGZpcmUgZHJhZyBldmVudFxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJkcmFnXCIsIGZpcnN0SGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGFrZXMgYSBiYXNlIHZhbHVlIGFuZCBhbiBvZmZzZXQuIFRoaXMgb2Zmc2V0IGlzIHVzZWQgZm9yIHRoZSBjb25uZWN0IGJhciBzaXplLlxuICAgICAgICAvLyBJbiB0aGUgaW5pdGlhbCBkZXNpZ24gZm9yIHRoaXMgZmVhdHVyZSwgdGhlIG9yaWdpbiBlbGVtZW50IHdhcyAxJSB3aWRlLlxuICAgICAgICAvLyBVbmZvcnR1bmF0ZWx5LCBhIHJvdW5kaW5nIGJ1ZyBpbiBDaHJvbWUgbWFrZXMgaXQgaW1wb3NzaWJsZSB0byBpbXBsZW1lbnQgdGhpcyBmZWF0dXJlXG4gICAgICAgIC8vIGluIHRoaXMgbWFubmVyOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTgyMjNcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmb3JtRGlyZWN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIGEgLSBiIDogYTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGVzIHNjb3BlX0xvY2F0aW9ucyBhbmQgc2NvcGVfVmFsdWVzLCB1cGRhdGVzIHZpc3VhbCBzdGF0ZVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25zLlxuICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSB0bztcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIHRoZSBzbGlkZXIgc3RlcHBpbmcvcmFuZ2UuXG4gICAgICAgICAgICBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRpb24gPSB0cmFuc2Zvcm1EaXJlY3Rpb24odG8sIDApIC0gc2NvcGVfRGlyT2Zmc2V0O1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zbGF0aW9uICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPSB0cmFuc2xhdGVSdWxlO1xuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVzIGJlZm9yZSB0aGUgc2xpZGVyIG1pZGRsZSBhcmUgc3RhY2tlZCBsYXRlciA9IGhpZ2hlcixcbiAgICAgICAgLy8gSGFuZGxlcyBhZnRlciB0aGUgbWlkZGxlIGxhdGVyIGlzIGxvd2VyXG4gICAgICAgIC8vIFtbN10gWzhdIC4uLi4uLi4uLi4gfCAuLi4uLi4uLi4uIFs1XSBbNF1cbiAgICAgICAgZnVuY3Rpb24gc2V0WmluZGV4KCkge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyID0gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPiA1MCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICB2YXIgekluZGV4ID0gMyArIChzY29wZV9IYW5kbGVzLmxlbmd0aCArIGRpciAqIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlLnpJbmRleCA9IFN0cmluZyh6SW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVzdCBzdWdnZXN0ZWQgdmFsdWVzIGFuZCBhcHBseSBtYXJnaW4sIHN0ZXAuXG4gICAgICAgIC8vIGlmIGV4YWN0SW5wdXQgaXMgdHJ1ZSwgZG9uJ3QgcnVuIGNoZWNrSGFuZGxlUG9zaXRpb24sIHRoZW4gdGhlIGhhbmRsZSBjYW4gYmUgcGxhY2VkIGluIGJldHdlZW4gc3RlcHMgKCM0MzYpXG4gICAgICAgIGZ1bmN0aW9uIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBleGFjdElucHV0KSB7XG4gICAgICAgICAgICBpZiAoIWV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0byA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlSGFuZGxlUG9zaXRpb24oaGFuZGxlTnVtYmVyLCB0byk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGVzIHN0eWxlIGF0dHJpYnV0ZSBmb3IgY29ubmVjdCBub2Rlc1xuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb25uZWN0KGluZGV4KSB7XG4gICAgICAgICAgICAvLyBTa2lwIGNvbm5lY3RzIHNldCB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKCFzY29wZV9Db25uZWN0c1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbCA9IDA7XG4gICAgICAgICAgICB2YXIgaCA9IDEwMDtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGwgPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gc2NvcGVfQ29ubmVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGggPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2UgdXNlIHR3byBydWxlczpcbiAgICAgICAgICAgIC8vICd0cmFuc2xhdGUnIHRvIGNoYW5nZSB0aGUgbGVmdC90b3Agb2Zmc2V0O1xuICAgICAgICAgICAgLy8gJ3NjYWxlJyB0byBjaGFuZ2UgdGhlIHdpZHRoIG9mIHRoZSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gQXMgdGhlIGVsZW1lbnQgaGFzIGEgd2lkdGggb2YgMTAwJSwgYSB0cmFuc2xhdGlvbiBvZiAxMDAlIGlzIGVxdWFsIHRvIDEwMCUgb2YgdGhlIHBhcmVudCAoLm5vVWktYmFzZSlcbiAgICAgICAgICAgIHZhciBjb25uZWN0V2lkdGggPSBoIC0gbDtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVSdWxlID0gXCJ0cmFuc2xhdGUoXCIgKyBpblJ1bGVPcmRlcih0cmFuc2Zvcm1EaXJlY3Rpb24obCwgY29ubmVjdFdpZHRoKSArIFwiJVwiLCBcIjBcIikgKyBcIilcIjtcbiAgICAgICAgICAgIHZhciBzY2FsZVJ1bGUgPSBcInNjYWxlKFwiICsgaW5SdWxlT3JkZXIoY29ubmVjdFdpZHRoIC8gMTAwLCBcIjFcIikgKyBcIilcIjtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzW2luZGV4XS5zdHlsZVtvcHRpb25zLnRyYW5zZm9ybVJ1bGVdID1cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVSdWxlICsgXCIgXCIgKyBzY2FsZVJ1bGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUGFyc2VzIHZhbHVlIHBhc3NlZCB0byAuc2V0IG1ldGhvZC4gUmV0dXJucyBjdXJyZW50IHZhbHVlIGlmIG5vdCBwYXJzZS1hYmxlLlxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlVG9WYWx1ZSh0bywgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAvLyBTZXR0aW5nIHdpdGggbnVsbCBpbmRpY2F0ZXMgYW4gJ2lnbm9yZScuXG4gICAgICAgICAgICAvLyBJbnB1dHRpbmcgJ2ZhbHNlJyBpcyBpbnZhbGlkLlxuICAgICAgICAgICAgaWYgKHRvID09PSBudWxsIHx8IHRvID09PSBmYWxzZSB8fCB0byA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYSBmb3JtYXR0ZWQgbnVtYmVyIHdhcyBwYXNzZWQsIGF0dGVtcHQgdG8gZGVjb2RlIGl0LlxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHRvID0gU3RyaW5nKHRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvID0gb3B0aW9ucy5mb3JtYXQuZnJvbSh0byk7XG4gICAgICAgICAgICBpZiAodG8gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHBhcnNpbmcgdGhlIG51bWJlciBmYWlsZWQsIHVzZSB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UgfHwgaXNOYU4odG8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCB0aGUgc2xpZGVyIHZhbHVlLlxuICAgICAgICBmdW5jdGlvbiB2YWx1ZVNldChpbnB1dCwgZmlyZVNldEV2ZW50LCBleGFjdElucHV0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gYXNBcnJheShpbnB1dCk7XG4gICAgICAgICAgICB2YXIgaXNJbml0ID0gc2NvcGVfTG9jYXRpb25zWzBdID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAvLyBFdmVudCBmaXJlcyBieSBkZWZhdWx0XG4gICAgICAgICAgICBmaXJlU2V0RXZlbnQgPSBmaXJlU2V0RXZlbnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaXJlU2V0RXZlbnQ7XG4gICAgICAgICAgICAvLyBBbmltYXRpb24gaXMgb3B0aW9uYWwuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGluaXRpYWwgdmFsdWVzIHdlcmUgc2V0IGJlZm9yZSB1c2luZyBhbmltYXRlZCBwbGFjZW1lbnQuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRlICYmICFpc0luaXQpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyc3QgcGFzcywgd2l0aG91dCBsb29rQWhlYWQgYnV0IHdpdGggbG9va0JhY2t3YXJkLiBWYWx1ZXMgYXJlIHNldCBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHJlc29sdmVUb1ZhbHVlKHZhbHVlc1toYW5kbGVOdW1iZXJdLCBoYW5kbGVOdW1iZXIpLCB0cnVlLCBmYWxzZSwgZXhhY3RJbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBpID0gc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEgPyAwIDogMTtcbiAgICAgICAgICAgIC8vIFNwcmVhZCBoYW5kbGVzIGV2ZW5seSBhY3Jvc3MgdGhlIHNsaWRlciBpZiB0aGUgcmFuZ2UgaGFzIG5vIHNpemUgKG1pbj1tYXgpXG4gICAgICAgICAgICBpZiAoaXNJbml0ICYmIHNjb3BlX1NwZWN0cnVtLmhhc05vU2l6ZSgpKSB7XG4gICAgICAgICAgICAgICAgZXhhY3RJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zWzBdID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGFjZV8xID0gMTAwIC8gKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA9IGhhbmRsZU51bWJlciAqIHNwYWNlXzE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNlY29uZGFyeSBwYXNzZXMuIE5vdyB0aGF0IGFsbCBiYXNlIHZhbHVlcyBhcmUgc2V0LCBhcHBseSBjb25zdHJhaW50cy5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgYWxsIGhhbmRsZXMgdG8gZW5zdXJlIGNvbnN0cmFpbnRzIGFyZSBhcHBsaWVkIGZvciB0aGUgZW50aXJlIHNsaWRlciAoSXNzdWUgIzEwMDkpXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSwgdHJ1ZSwgdHJ1ZSwgZXhhY3RJbnB1dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgLy8gRmlyZSB0aGUgZXZlbnQgb25seSBmb3IgaGFuZGxlcyB0aGF0IHJlY2VpdmVkIGEgbmV3IHZhbHVlLCBhcyBwZXIgIzU3OVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXNbaGFuZGxlTnVtYmVyXSAhPT0gbnVsbCAmJiBmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgc2xpZGVyIHRvIGluaXRpYWwgdmFsdWVzXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlUmVzZXQoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICB2YWx1ZVNldChvcHRpb25zLnN0YXJ0LCBmaXJlU2V0RXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCB2YWx1ZSBmb3IgYSBzaW5nbGUgaGFuZGxlXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlU2V0SGFuZGxlKGhhbmRsZU51bWJlciwgdmFsdWUsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIG51bWVyaWMgaW5wdXRcbiAgICAgICAgICAgIGhhbmRsZU51bWJlciA9IE51bWJlcihoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKCEoaGFuZGxlTnVtYmVyID49IDAgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogaW52YWxpZCBoYW5kbGUgbnVtYmVyLCBnb3Q6IFwiICsgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvb2sgYm90aCBiYWNrd2FyZCBhbmQgZm9yd2FyZCwgc2luY2Ugd2UgZG9uJ3Qgd2FudCB0aGlzIGhhbmRsZSB0byBcInB1c2hcIiBvdGhlciBoYW5kbGVzICgjOTYwKTtcbiAgICAgICAgICAgIC8vIFRoZSBleGFjdElucHV0IGFyZ3VtZW50IGNhbiBiZSB1c2VkIHRvIGlnbm9yZSBzbGlkZXIgc3RlcHBpbmcgKCM0MzYpXG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgdHJ1ZSwgZXhhY3RJbnB1dCk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICAgICAgZnVuY3Rpb24gdmFsdWVHZXQodW5lbmNvZGVkKSB7XG4gICAgICAgICAgICBpZiAodW5lbmNvZGVkID09PSB2b2lkIDApIHsgdW5lbmNvZGVkID0gZmFsc2U7IH1cbiAgICAgICAgICAgIGlmICh1bmVuY29kZWQpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gYSBjb3B5IG9mIHRoZSByYXcgdmFsdWVzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1ZhbHVlcy5sZW5ndGggPT09IDEgPyBzY29wZV9WYWx1ZXNbMF0gOiBzY29wZV9WYWx1ZXMuc2xpY2UoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gc2NvcGVfVmFsdWVzLm1hcChvcHRpb25zLmZvcm1hdC50byk7XG4gICAgICAgICAgICAvLyBJZiBvbmx5IG9uZSBoYW5kbGUgaXMgdXNlZCwgcmV0dXJuIGEgc2luZ2xlIHZhbHVlLlxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmVzIGNsYXNzZXMgZnJvbSB0aGUgcm9vdCBhbmQgZW1wdGllcyBpdC5cbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBwcm90ZWN0ZWQgaW50ZXJuYWwgbGlzdGVuZXJzXG4gICAgICAgICAgICByZW1vdmVFdmVudChJTlRFUk5BTF9FVkVOVF9OUy5hcmlhKTtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuY3NzQ2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdoaWxlIChzY29wZV9UYXJnZXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIHNjb3BlX1RhcmdldC5yZW1vdmVDaGlsZChzY29wZV9UYXJnZXQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgc2NvcGVfVGFyZ2V0Lm5vVWlTbGlkZXI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB2YXIgbmVhcmJ5U3RlcHMgPSBzY29wZV9TcGVjdHJ1bS5nZXROZWFyYnlTdGVwcyhsb2NhdGlvbik7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHZhciBpbmNyZW1lbnQgPSBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGVwO1xuICAgICAgICAgICAgdmFyIGRlY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAvLyBJZiBzbmFwcGVkLCBkaXJlY3RseSB1c2UgZGVmaW5lZCBzdGVwIHZhbHVlXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zbmFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgLSBuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLnN0YXJ0VmFsdWUgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZSB8fCBudWxsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBuZXh0IHZhbHVlIGluIHRoaXMgc3RlcCBtb3ZlcyBpbnRvIHRoZSBuZXh0IHN0ZXAsXG4gICAgICAgICAgICAvLyB0aGUgaW5jcmVtZW50IGlzIHRoZSBzdGFydCBvZiB0aGUgbmV4dCBzdGVwIC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICsgaW5jcmVtZW50ID4gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYmV5b25kIHRoZSBzdGFydGluZyBwb2ludFxuICAgICAgICAgICAgaWYgKHZhbHVlID4gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RhcnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLnN0ZXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhIGhhbmRsZSBpcyBhdCB0aGUgc3RhcnQgb2YgYSBzdGVwLCBpdCBhbHdheXMgc3RlcHMgYmFjayBpbnRvIHRoZSBwcmV2aW91cyBzdGVwIGZpcnN0XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuaGlnaGVzdFN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3csIGlmIGF0IHRoZSBzbGlkZXIgZWRnZXMsIHRoZXJlIGlzIG5vIGluL2RlY3JlbWVudFxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09PSAxMDApIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobG9jYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXMgcGVyICMzOTEsIHRoZSBjb21wYXJpc29uIGZvciB0aGUgZGVjcmVtZW50IHN0ZXAgY2FuIGhhdmUgc29tZSByb3VuZGluZyBpc3N1ZXMuXG4gICAgICAgICAgICB2YXIgc3RlcERlY2ltYWxzID0gc2NvcGVfU3BlY3RydW0uY291bnRTdGVwRGVjaW1hbHMoKTtcbiAgICAgICAgICAgIC8vIFJvdW5kIHBlciAjMzkxXG4gICAgICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBudWxsICYmIGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBOdW1iZXIoaW5jcmVtZW50LnRvRml4ZWQoc3RlcERlY2ltYWxzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVjcmVtZW50ICE9PSBudWxsICYmIGRlY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBOdW1iZXIoZGVjcmVtZW50LnRvRml4ZWQoc3RlcERlY2ltYWxzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW2RlY3JlbWVudCwgaW5jcmVtZW50XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBzaXplIGZvciB0aGUgc2xpZGVyLlxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfSGFuZGxlTnVtYmVycy5tYXAoZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGFibGU6IG1hcmdpbiwgbGltaXQsIHBhZGRpbmcsIHN0ZXAsIHJhbmdlLCBhbmltYXRlLCBzbmFwXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0aW9uc1RvVXBkYXRlLCBmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFNwZWN0cnVtIGlzIGNyZWF0ZWQgdXNpbmcgdGhlIHJhbmdlLCBzbmFwLCBkaXJlY3Rpb24gYW5kIHN0ZXAgb3B0aW9ucy5cbiAgICAgICAgICAgIC8vICdzbmFwJyBhbmQgJ3N0ZXAnIGNhbiBiZSB1cGRhdGVkLlxuICAgICAgICAgICAgLy8gSWYgJ3NuYXAnIGFuZCAnc3RlcCcgYXJlIG5vdCBwYXNzZWQsIHRoZXkgc2hvdWxkIHJlbWFpbiB1bmNoYW5nZWQuXG4gICAgICAgICAgICB2YXIgdiA9IHZhbHVlR2V0KCk7XG4gICAgICAgICAgICB2YXIgdXBkYXRlQWJsZSA9IFtcbiAgICAgICAgICAgICAgICBcIm1hcmdpblwiLFxuICAgICAgICAgICAgICAgIFwibGltaXRcIixcbiAgICAgICAgICAgICAgICBcInBhZGRpbmdcIixcbiAgICAgICAgICAgICAgICBcInJhbmdlXCIsXG4gICAgICAgICAgICAgICAgXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJzbmFwXCIsXG4gICAgICAgICAgICAgICAgXCJzdGVwXCIsXG4gICAgICAgICAgICAgICAgXCJmb3JtYXRcIixcbiAgICAgICAgICAgICAgICBcInBpcHNcIixcbiAgICAgICAgICAgICAgICBcInRvb2x0aXBzXCJcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBPbmx5IGNoYW5nZSBvcHRpb25zIHRoYXQgd2UncmUgYWN0dWFsbHkgcGFzc2VkIHRvIHVwZGF0ZS5cbiAgICAgICAgICAgIHVwZGF0ZUFibGUuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciB1bmRlZmluZWQuIG51bGwgcmVtb3ZlcyB0aGUgdmFsdWUuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsT3B0aW9uc1tuYW1lXSA9IG9wdGlvbnNUb1VwZGF0ZVtuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBuZXdPcHRpb25zID0gdGVzdE9wdGlvbnMob3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgICAgIC8vIExvYWQgbmV3IG9wdGlvbnMgaW50byB0aGUgc2xpZGVyIHN0YXRlXG4gICAgICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1RvVXBkYXRlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tuYW1lXSA9IG5ld09wdGlvbnNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY29wZV9TcGVjdHJ1bSA9IG5ld09wdGlvbnMuc3BlY3RydW07XG4gICAgICAgICAgICAvLyBMaW1pdCwgbWFyZ2luIGFuZCBwYWRkaW5nIGRlcGVuZCBvbiB0aGUgc3BlY3RydW0gYnV0IGFyZSBzdG9yZWQgb3V0c2lkZSBvZiBpdC4gKCM2NzcpXG4gICAgICAgICAgICBvcHRpb25zLm1hcmdpbiA9IG5ld09wdGlvbnMubWFyZ2luO1xuICAgICAgICAgICAgb3B0aW9ucy5saW1pdCA9IG5ld09wdGlvbnMubGltaXQ7XG4gICAgICAgICAgICBvcHRpb25zLnBhZGRpbmcgPSBuZXdPcHRpb25zLnBhZGRpbmc7XG4gICAgICAgICAgICAvLyBVcGRhdGUgcGlwcywgcmVtb3ZlcyBleGlzdGluZy5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBpcHMpIHtcbiAgICAgICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgdG9vbHRpcHMsIHJlbW92ZXMgZXhpc3RpbmcuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgIHRvb2x0aXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUb29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSW52YWxpZGF0ZSB0aGUgY3VycmVudCBwb3NpdGlvbmluZyBzbyB2YWx1ZVNldCBmb3JjZXMgYW4gdXBkYXRlLlxuICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgICAgICAgICB2YWx1ZVNldChpc1NldChvcHRpb25zVG9VcGRhdGUuc3RhcnQpID8gb3B0aW9uc1RvVXBkYXRlLnN0YXJ0IDogdiwgZmlyZVNldEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBzdGVwc1xuICAgICAgICBmdW5jdGlvbiBzZXR1cFNsaWRlcigpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBlbGVtZW50LCBpbml0aWFsaXplIEhUTUwgYW5kIHNldCBjbGFzc2VzLlxuICAgICAgICAgICAgLy8gQWRkIGhhbmRsZXMgYW5kIGNvbm5lY3QgZWxlbWVudHMuXG4gICAgICAgICAgICBzY29wZV9CYXNlID0gYWRkU2xpZGVyKHNjb3BlX1RhcmdldCk7XG4gICAgICAgICAgICBhZGRFbGVtZW50cyhvcHRpb25zLmNvbm5lY3QsIHNjb3BlX0Jhc2UpO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHVzZXIgZXZlbnRzLlxuICAgICAgICAgICAgYmluZFNsaWRlckV2ZW50cyhvcHRpb25zLmV2ZW50cyk7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIHB1YmxpYyB2YWx1ZSBtZXRob2QgdG8gc2V0IHRoZSBzdGFydCB2YWx1ZXMuXG4gICAgICAgICAgICB2YWx1ZVNldChvcHRpb25zLnN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBpcHMpIHtcbiAgICAgICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgIHRvb2x0aXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmlhKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0dXBTbGlkZXIoKTtcbiAgICAgICAgdmFyIHNjb3BlX1NlbGYgPSB7XG4gICAgICAgICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgICAgICAgc3RlcHM6IGdldE5leHRTdGVwcyxcbiAgICAgICAgICAgIG9uOiBiaW5kRXZlbnQsXG4gICAgICAgICAgICBvZmY6IHJlbW92ZUV2ZW50LFxuICAgICAgICAgICAgZ2V0OiB2YWx1ZUdldCxcbiAgICAgICAgICAgIHNldDogdmFsdWVTZXQsXG4gICAgICAgICAgICBzZXRIYW5kbGU6IHZhbHVlU2V0SGFuZGxlLFxuICAgICAgICAgICAgcmVzZXQ6IHZhbHVlUmVzZXQsXG4gICAgICAgICAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgICAgICBfX21vdmVIYW5kbGVzOiBmdW5jdGlvbiAodXB3YXJkLCBwcm9wb3NhbCwgaGFuZGxlTnVtYmVycykge1xuICAgICAgICAgICAgICAgIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVycyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczogb3JpZ2luYWxPcHRpb25zLFxuICAgICAgICAgICAgdXBkYXRlT3B0aW9uczogdXBkYXRlT3B0aW9ucyxcbiAgICAgICAgICAgIHRhcmdldDogc2NvcGVfVGFyZ2V0LFxuICAgICAgICAgICAgcmVtb3ZlUGlwczogcmVtb3ZlUGlwcyxcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzOiByZW1vdmVUb29sdGlwcyxcbiAgICAgICAgICAgIGdldFBvc2l0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUb29sdGlwczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Ub29sdGlwcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRPcmlnaW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGlwczogcGlwcyAvLyBJc3N1ZSAjNTk0XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzY29wZV9TZWxmO1xuICAgIH1cbiAgICAvLyBSdW4gdGhlIHN0YW5kYXJkIGluaXRpYWxpemVyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSh0YXJnZXQsIG9yaWdpbmFsT3B0aW9ucykge1xuICAgICAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Lm5vZGVOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBjcmVhdGUgcmVxdWlyZXMgYSBzaW5nbGUgZWxlbWVudCwgZ290OiBcIiArIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdGhlIHNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cbiAgICAgICAgaWYgKHRhcmdldC5ub1VpU2xpZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBTbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRlc3QgdGhlIG9wdGlvbnMgYW5kIGNyZWF0ZSB0aGUgc2xpZGVyIGVudmlyb25tZW50O1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRlc3RPcHRpb25zKG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgIHZhciBhcGkgPSBzY29wZSh0YXJnZXQsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgIHRhcmdldC5ub1VpU2xpZGVyID0gYXBpO1xuICAgICAgICByZXR1cm4gYXBpO1xuICAgIH1cbiAgICB2YXIgbm91aXNsaWRlciA9IHtcbiAgICAgICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICBfX3NwZWN0cnVtOiBTcGVjdHJ1bSxcbiAgICAgICAgLy8gQSByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQgY2xhc3NlcywgYWxsb3dzIGdsb2JhbCBjaGFuZ2VzLlxuICAgICAgICAvLyBVc2UgdGhlIGNzc0NsYXNzZXMgb3B0aW9uIGZvciBjaGFuZ2VzIHRvIG9uZSBzbGlkZXIuXG4gICAgICAgIGNzc0NsYXNzZXM6IGNzc0NsYXNzZXMsXG4gICAgICAgIGNyZWF0ZTogaW5pdGlhbGl6ZVxuICAgIH07XG5cbiAgICBleHBvcnRzLmNyZWF0ZSA9IGluaXRpYWxpemU7XG4gICAgZXhwb3J0cy5jc3NDbGFzc2VzID0gY3NzQ2xhc3NlcztcbiAgICBleHBvcnRzWydkZWZhdWx0J10gPSBub3Vpc2xpZGVyO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRm9vdGVyID0gdm9pZCAwO1xyXG5jb25zdCBjb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vdGVtcGxhdGVzL2NvbXBvbmVudHNcIik7XHJcbnJlcXVpcmUoXCIuL2Zvb3Rlci5jc3NcIik7XHJcbmNvbnN0IExpbmtzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ2F1dGhvcicsXHJcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9WaWt0b3JFbGVuaWNoJyxcclxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxyXG4gICAgICAgIHRleHQ6ICfCqSAyMDIxIFZpa3RvciBFbGVuaWNoJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjbGFzc05hbWU6ICdsb2dvLXJzcycsXHJcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vcnMuc2Nob29sL2pzLycsXHJcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcclxuICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgfVxyXG5dO1xyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBjb21wb25lbnRzXzEuQ29tcG9uZW50cyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBjbGFzc05hbWUsIGlkKSB7XHJcbiAgICAgICAgc3VwZXIodGFnTmFtZSwgY2xhc3NOYW1lLCBpZCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJBdXRob3JEZXNjcmlwdGlvbigpIHtcclxuICAgICAgICBjb25zdCBmb290ZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZm9vdGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmb290ZXItd3JhcHBlcicpO1xyXG4gICAgICAgIExpbmtzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBhSFRNTC5pbm5lclRleHQgPSBlbGVtLnRleHQ7XHJcbiAgICAgICAgICAgIGFIVE1MLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICBhSFRNTC5ocmVmID0gZWxlbS5ocmVmO1xyXG4gICAgICAgICAgICBhSFRNTC50YXJnZXQgPSBlbGVtLnRhcmdldDtcclxuICAgICAgICAgICAgZm9vdGVyV3JhcHBlci5hcHBlbmQoYUhUTUwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChmb290ZXJXcmFwcGVyKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnJlbmRlckF1dGhvckRlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRm9vdGVyID0gRm9vdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkhlYWRlciA9IHZvaWQgMDtcclxucmVxdWlyZShcIi4vaGVhZGVyLmNzc1wiKTtcclxuY29uc3QgY29tcG9uZW50c18xID0gcmVxdWlyZShcIi4uLy4uL3RlbXBsYXRlcy9jb21wb25lbnRzXCIpO1xyXG5jb25zdCBCdXR0b25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm1haW4tcGFnZVwiLFxyXG4gICAgICAgIHRleHQ6ICcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJ0b3lzLXBhZ2VcIixcclxuICAgICAgICB0ZXh0OiAn0LjQs9GA0YPRiNC60LgnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJnYW1lLXBhZ2VcIixcclxuICAgICAgICB0ZXh0OiAn0ZHQu9C60LAnLFxyXG4gICAgfVxyXG5dO1xyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBjb21wb25lbnRzXzEuQ29tcG9uZW50cyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBjbGFzc05hbWUsIGlkKSB7XHJcbiAgICAgICAgc3VwZXIodGFnTmFtZSwgY2xhc3NOYW1lLCBpZCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJQYWdlQnV0dG9ucygpIHtcclxuICAgICAgICBjb25zdCBwYWdlQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBhZ2VCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24nKTtcclxuICAgICAgICBjb25zdCB3cmFwcGVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoQW5kRmF2b3JpdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2lucHV0X3NlYXJjaCcpO1xyXG4gICAgICAgIGlucHV0U2VhcmNoLnR5cGUgPSAnc2VhcmNoJztcclxuICAgICAgICBpbnB1dFNlYXJjaC5uYW1lID0gJ3NlYXJjaCc7XHJcbiAgICAgICAgaW5wdXRTZWFyY2gucGxhY2Vob2xkZXIgPSAn0J/QvtC40YHQuic7XHJcbiAgICAgICAgaW5wdXRTZWFyY2guaWQgPSAnc2VhcmNoJztcclxuICAgICAgICBpbnB1dFNlYXJjaC5hdXRvY29tcGxldGUgPSAnb2ZmJztcclxuICAgICAgICBjb25zdCBmYXZvcml0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmYXZvcml0ZXMuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGVzJyk7XHJcbiAgICAgICAgZmF2b3JpdGVzLmlubmVySFRNTCA9IGA8c3Bhbj4wPC9zcGFuPmA7XHJcbiAgICAgICAgc2VhcmNoQW5kRmF2b3JpdGVzLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaF9mYXZvcml0ZXMnKTtcclxuICAgICAgICB3cmFwcGVySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcclxuICAgICAgICB3cmFwcGVySGVhZGVyLmFwcGVuZChwYWdlQnV0dG9ucyk7XHJcbiAgICAgICAgd3JhcHBlckhlYWRlci5hcHBlbmQoc2VhcmNoQW5kRmF2b3JpdGVzKTtcclxuICAgICAgICBzZWFyY2hBbmRGYXZvcml0ZXMuYXBwZW5kKGlucHV0U2VhcmNoKTtcclxuICAgICAgICBzZWFyY2hBbmRGYXZvcml0ZXMuYXBwZW5kKGZhdm9yaXRlcyk7XHJcbiAgICAgICAgQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkhUTUwuaHJlZiA9IGAjJHtidXR0b24uaWR9YDtcclxuICAgICAgICAgICAgYnV0dG9uSFRNTC5pbm5lckhUTUwgPSBidXR0b24udGV4dDtcclxuICAgICAgICAgICAgYnV0dG9uSFRNTC5jbGFzc0xpc3QuYWRkKCdsaW5rcycpO1xyXG4gICAgICAgICAgICBwYWdlQnV0dG9ucy5hcHBlbmQoYnV0dG9uSFRNTCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHdyYXBwZXJIZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyUGFnZUJ1dHRvbnMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5IZWFkZXIgPSBIZWFkZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuTWFpbiA9IHZvaWQgMDtcclxuY29uc3QgY29tcG9uZW50c18xID0gcmVxdWlyZShcIi4uLy4uL3RlbXBsYXRlcy9jb21wb25lbnRzXCIpO1xyXG5jbGFzcyBNYWluIGV4dGVuZHMgY29tcG9uZW50c18xLkNvbXBvbmVudHMge1xyXG4gICAgY29uc3RydWN0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZCkge1xyXG4gICAgICAgIHN1cGVyKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWQpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1haW4gPSBNYWluO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNvbXBvbmVudHMgPSB2b2lkIDA7XHJcbmNsYXNzIENvbXBvbmVudHMge1xyXG4gICAgY29uc3RydWN0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db21wb25lbnRzID0gQ29tcG9uZW50cztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5QYWdlID0gdm9pZCAwO1xyXG5jbGFzcyBQYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgY3JlYXRIZWFkZXJUaXRsZSh0ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGhlYWRlclRpdGxlLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlclRpdGxlO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGFnZSA9IFBhZ2U7XHJcblBhZ2UudGV4dE9iamVjdCA9IHt9O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnF1YW50aXR5U2xpZGVyID0gdm9pZCAwO1xyXG5jb25zdCBub3Vpc2xpZGVyXzEgPSByZXF1aXJlKFwibm91aXNsaWRlclwiKTtcclxuZnVuY3Rpb24gcXVhbnRpdHlTbGlkZXIoKSB7XHJcbiAgICBjb25zdCBzbGlkZXJRdWFudGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXItcXVhbnRpdHknKTtcclxuICAgIGNvbnN0IHNsaWRlciA9IG5vdWlzbGlkZXJfMS5kZWZhdWx0LmNyZWF0ZShzbGlkZXJRdWFudGl0eSwge1xyXG4gICAgICAgIHN0YXJ0OiBbMSwgMTJdLFxyXG4gICAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICBtaW46IFsxXSxcclxuICAgICAgICAgICAgbWF4OiBbMTJdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGlucHV0UXVhbnRpdHlNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluLXF1YW50aXR5Jyk7XHJcbiAgICBjb25zdCBpbnB1dFF1YW50aXR5TWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC1xdWFudGl0eScpO1xyXG4gICAgY29uc3QgaW5wdXRzUXVhbnRpdHkgPSBbaW5wdXRRdWFudGl0eU1pbiwgaW5wdXRRdWFudGl0eU1heF07XHJcbiAgICBzbGlkZXIub24oJ3VwZGF0ZScsICh2YWx1ZXMsIGhhbmRsZSkgPT4ge1xyXG4gICAgICAgIGlucHV0c1F1YW50aXR5W2hhbmRsZV0udmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChOdW1iZXIodmFsdWVzW2hhbmRsZV0pKSk7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcclxuICAgICAgICBpbnB1dHNRdWFudGl0eVtoYW5kbGVdLmRpc3BhdGNoRXZlbnQoY2hhbmdlKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucXVhbnRpdHlTbGlkZXIgPSBxdWFudGl0eVNsaWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy55ZWFyU2xpZGVyID0gdm9pZCAwO1xyXG5jb25zdCBub3Vpc2xpZGVyXzEgPSByZXF1aXJlKFwibm91aXNsaWRlclwiKTtcclxuZnVuY3Rpb24geWVhclNsaWRlcigpIHtcclxuICAgIGNvbnN0IHNsaWRlclllYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyLXllYXInKTtcclxuICAgIGNvbnN0IHNsaWRlciA9IG5vdWlzbGlkZXJfMS5kZWZhdWx0LmNyZWF0ZShzbGlkZXJZZWFyLCB7XHJcbiAgICAgICAgc3RhcnQ6IFsxOTQwLCAyMDIwXSxcclxuICAgICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgICAgbWluOiBbMTk0MF0sXHJcbiAgICAgICAgICAgIG1heDogWzIwMjBdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGlucHV0WWVhck1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4teWVhcicpO1xyXG4gICAgY29uc3QgaW5wdXRZZWFyTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC15ZWFyJyk7XHJcbiAgICBjb25zdCBpbnB1dHNZZWFyID0gW2lucHV0WWVhck1pbiwgaW5wdXRZZWFyTWF4XTtcclxuICAgIHNsaWRlci5vbigndXBkYXRlJywgKHZhbHVlcywgaGFuZGxlKSA9PiB7XHJcbiAgICAgICAgaW5wdXRzWWVhcltoYW5kbGVdLnZhbHVlID0gU3RyaW5nKE1hdGgucm91bmQoTnVtYmVyKHZhbHVlc1toYW5kbGVdKSkpO1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZSA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XHJcbiAgICAgICAgaW5wdXRzWWVhcltoYW5kbGVdLmRpc3BhdGNoRXZlbnQoY2hhbmdlKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMueWVhclNsaWRlciA9IHllYXJTbGlkZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQXBwID0gdm9pZCAwO1xyXG5jb25zdCBoZWFkZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiKTtcclxuY29uc3QgdG95c18xID0gcmVxdWlyZShcIi4uL3RveXMvdG95c1wiKTtcclxuY29uc3QgZ2FtZV8xID0gcmVxdWlyZShcIi4uL2dhbWUvZ2FtZVwiKTtcclxuY29uc3QgbWFpbl8xID0gcmVxdWlyZShcIi4uL21haW4vbWFpblwiKTtcclxuY29uc3QgZm9vdGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIik7XHJcbmNvbnN0IG1haW5fMiA9IHJlcXVpcmUoXCIuLi8uLi9jb3JlL2NvbXBvbmVudHMvbWFpbi9tYWluXCIpO1xyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsUGFnZSA9IG5ldyBtYWluXzEuTWFpblBhZ2UoJ21haW4tcGFnZScpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IGhlYWRlcl8xLkhlYWRlcignaGVhZGVyJywgJ2hlYWRlcicsICdoZWFkZXInKTtcclxuICAgICAgICB0aGlzLm1haW4gPSBuZXcgbWFpbl8yLk1haW4oJ21haW4nLCAnbWFpbicsICdtYWluJyk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgZm9vdGVyXzEuRm9vdGVyKCdmb290ZXInLCAnZm9vdGVyJywgJ2Zvb3RlcicpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlbmRlck5ld1BhZ2UoaWRQYWdlKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2VIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7QXBwLmRlZmF1bHRQYWdlSWR9YCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlSFRNTCkge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZUhUTUwucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYWdlID0gbnVsbDtcclxuICAgICAgICBpZiAoaWRQYWdlID09PSBcIm1haW4tcGFnZVwiKSB7XHJcbiAgICAgICAgICAgIHBhZ2UgPSBuZXcgbWFpbl8xLk1haW5QYWdlKGlkUGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlkUGFnZSA9PT0gXCJ0b3lzLXBhZ2VcIikge1xyXG4gICAgICAgICAgICBwYWdlID0gbmV3IHRveXNfMS5Ub3lzKGlkUGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlkUGFnZSA9PT0gXCJnYW1lLXBhZ2VcIikge1xyXG4gICAgICAgICAgICBwYWdlID0gbmV3IGdhbWVfMS5HYW1lKGlkUGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VIVE1MID0gcGFnZS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICAgICAgICAgIHBhZ2VIVE1MLmlkID0gQXBwLmRlZmF1bHRQYWdlSWQ7XHJcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kKHBhZ2VIVE1MKTtcclxuICAgICAgICAgICAgcGFnZS5hZnRlclJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVuYWJsZVJvdXRlQ2hhbmdlKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIEFwcC5yZW5kZXJOZXdQYWdlKGhhc2gpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIEFwcC5jb250YWluZXIuYXBwZW5kKHRoaXMuaGVhZGVyLnJlbmRlcigpKTtcclxuICAgICAgICBBcHAuY29udGFpbmVyLmFwcGVuZCh0aGlzLm1haW4ucmVuZGVyKCkpO1xyXG4gICAgICAgIEFwcC5yZW5kZXJOZXdQYWdlKCdtYWluLXBhZ2UnKTtcclxuICAgICAgICBBcHAuY29udGFpbmVyLmFwcGVuZCh0aGlzLmZvb3Rlci5yZW5kZXIoKSk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVSb3V0ZUNoYW5nZSgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiI21haW4tcGFnZVwiKTtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIFwiXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIDApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcHAgPSBBcHA7XHJcbkFwcC5jb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xyXG5BcHAuZGVmYXVsdFBhZ2VJZCA9ICdjdXJyZW50LXBhZ2UnO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkdhbWUgPSB2b2lkIDA7XHJcbmNvbnN0IHBhZ2VzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29yZS90ZW1wbGF0ZXMvcGFnZXNcIik7XHJcbmNsYXNzIEdhbWUgZXh0ZW5kcyBwYWdlc18xLlBhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoaWQpIHtcclxuICAgICAgICBzdXBlcihpZCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0SGVhZGVyVGl0bGUoR2FtZS50ZXh0T2JqZWN0Lk1haW5UaXRsZSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5HYW1lID0gR2FtZTtcclxuR2FtZS50ZXh0T2JqZWN0ID0ge1xyXG4gICAgTWFpblRpdGxlOiBcIkdhbWUgUGFnZVwiLFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk1haW5QYWdlID0gdm9pZCAwO1xyXG5jb25zdCBwYWdlc18xID0gcmVxdWlyZShcIi4uLy4uL2NvcmUvdGVtcGxhdGVzL3BhZ2VzXCIpO1xyXG5jbGFzcyBNYWluUGFnZSBleHRlbmRzIHBhZ2VzXzEuUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xyXG4gICAgICAgIHN1cGVyKGlkKTtcclxuICAgIH1cclxuICAgIHJlbmRlcldyYXBwZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGlua01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDEpJyk7XHJcbiAgICAgICAgY29uc3QgbGlua1RveXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDIpJyk7XHJcbiAgICAgICAgY29uc3QgbGlua0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDMpJyk7XHJcbiAgICAgICAgbGlua1RveXMuY2xhc3NMaXN0LnJlbW92ZSgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgbGlua0dhbWUuY2xhc3NMaXN0LnJlbW92ZSgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgbGlua01haW4uY2xhc3NMaXN0LmFkZCgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlck1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3cmFwcGVyTWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLXBhZ2UnKTtcclxuICAgICAgICB3cmFwcGVyTWFpbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tcGFnZS1iYWxsIGJhbGwxXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tcGFnZS1iYWxsIGJhbGwyXCI+PC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwibWFpbi1wYWdlLXRpdGxlXCI+0J3QvtCy0L7Qs9C+0LTQvdGP0Y8g0LjQs9GA0LAgPHNwYW4+XCLQndCw0YDRj9C00Lgg0ZHQu9C60YNcIjwvc3Bhbj48L2gxPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjdG95cy1wYWdlXCIgY2xhc3M9XCJidG4tbWFpbi1wYWdlXCI+0J3QsNGH0LDRgtGMPC9hPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHdyYXBwZXJNYWluKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcldyYXBwZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NYWluUGFnZSA9IE1haW5QYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlRveXMgPSB2b2lkIDA7XHJcbmNvbnN0IHBhZ2VzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29yZS90ZW1wbGF0ZXMvcGFnZXNcIik7XHJcbmNvbnN0IGRhdGFfMSA9IHJlcXVpcmUoXCIuLi8uLi9kYXRhXCIpO1xyXG5yZXF1aXJlKFwiLi4vLi4vbm91aXNsaWRlci9zbGlkZXIuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi4vLi4vbm91aXNsaWRlci9zbGlkZXJDdXN0b20uY3NzXCIpO1xyXG5jb25zdCBzbGlkZXJfcXVhbnRpdHlfMSA9IHJlcXVpcmUoXCIuLi8uLi9ub3Vpc2xpZGVyL3NsaWRlci1xdWFudGl0eVwiKTtcclxuY29uc3Qgc2xpZGVyX3llYXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9ub3Vpc2xpZGVyL3NsaWRlci15ZWFyXCIpO1xyXG5jb25zdCBGaWx0ZXJCdXR0b25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGZpbHRlcjogJ9GI0LDRgCcsXHJcbiAgICAgICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZmlsdGVyOiAn0LrQvtC70L7QutC+0LvRjNGH0LjQuicsXHJcbiAgICAgICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBmaWx0ZXI6ICfRiNC40YjQutCwJyxcclxuICAgICAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZmlsdGVyOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICAgICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZmlsdGVyOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgICAgIGNvbG9yOiAn0LfQtdC70ZHQvdGL0LknLFxyXG4gICAgfVxyXG5dO1xyXG5jb25zdCBTaXplQnV0dG9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzaXplOiAn0LzQsNC70YvQuScsXHJcbiAgICB9LFxyXG5dO1xyXG5jb25zdCBPcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIHZhbHVlOiAnc29ydC1uYW1lLW1heCcsXHJcbiAgICAgICAgdGV4dDogJ9Cf0L4g0L3QsNC30LLQsNC90LjRjiDQvtGCIMKr0JDCuyDQtNC+IMKr0K/CuydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdmFsdWU6ICdzb3J0LW5hbWUtbWluJyxcclxuICAgICAgICB0ZXh0OiAn0J/QviDQvdCw0LfQstCw0L3QuNGOINC+0YIgwqvQr8K7INC00L4gwqvQkMK7J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB2YWx1ZTogJ3NvcnQtY291bnQtbWF4JyxcclxuICAgICAgICB0ZXh0OiAn0J/QviDQutC+0LvQuNGH0LXRgdGC0LLRgyDQv9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHZhbHVlOiAnc29ydC1jb3VudC1taW4nLFxyXG4gICAgICAgIHRleHQ6ICfQn9C+INC60L7Qu9C40YfQtdGB0YLQstGDINC/0L4g0YPQsdGL0LLQsNC90LjRjidcclxuICAgIH1cclxuXTtcclxuY2xhc3MgVG95cyBleHRlbmRzIHBhZ2VzXzEuUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xyXG4gICAgICAgIHN1cGVyKGlkKTtcclxuICAgICAgICB0aGlzLmNsaWNrRmlsdGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRveXMnKTtcclxuICAgICAgICAgICAgY29uc3QgZmF2b3JpdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVjay1mYXZvcml0ZScpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5RdWFudGl0eSA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluLXF1YW50aXR5JykudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5taW5RdWFudGl0eSA9IG1pblF1YW50aXR5O1xyXG4gICAgICAgICAgICBjb25zdCBtYXhRdWFudGl0eSA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF4LXF1YW50aXR5JykudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5tYXhRdWFudGl0eSA9IG1heFF1YW50aXR5O1xyXG4gICAgICAgICAgICBjb25zdCBtaW5ZZWFyID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4teWVhcicpLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMubWluWWVhciA9IG1pblllYXI7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFllYXIgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC15ZWFyJykudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5tYXhZZWFyID0gbWF4WWVhcjtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQtc2VsZWN0Jykub3B0aW9ucy5zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC1zZWxlY3QnKS5vcHRpb25zW3NlbGVjdF0udmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zLm9wdGlvbnNWYWx1ZSA9IG9wdGlvbnNWYWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhSUQgPSB0YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoUGFyYW1zLnNoYXBlcy5pbmNsdWRlcyhkYXRhSUQpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5zaGFwZXMuc3BsaWNlKHRoaXMuc2VhcmNoUGFyYW1zLnNoYXBlcy5pbmRleE9mKGRhdGFJRCksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1zaGFwZScpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5zaGFwZXMucHVzaChkYXRhSUQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFBhcmFtcy5jb2xvcnMuaW5jbHVkZXMoZGF0YUlEKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuY29sb3JzLnNwbGljZSh0aGlzLnNlYXJjaFBhcmFtcy5jb2xvcnMuaW5kZXhPZihkYXRhSUQpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tY29sb3InKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuY29sb3JzLnB1c2goZGF0YUlEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hQYXJhbXMuc2l6ZXMuaW5jbHVkZXMoZGF0YUlEKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuc2l6ZXMuc3BsaWNlKHRoaXMuc2VhcmNoUGFyYW1zLnNpemVzLmluZGV4T2YoZGF0YUlEKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXNpemUnKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuc2l6ZXMucHVzaChkYXRhSUQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBkYXRhXzEuZGVmYXVsdDtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFBhcmFtcy5zaGFwZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFBhcmFtcy5zaGFwZXMuaW5jbHVkZXMoaXRlbS5zaGFwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hQYXJhbXMuY29sb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hQYXJhbXMuY29sb3JzLmluY2x1ZGVzKGl0ZW0uY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoUGFyYW1zLnNpemVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hQYXJhbXMuc2l6ZXMuaW5jbHVkZXMoaXRlbS5zaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGZhdm9yaXRlSW5wdXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuZmF2b3JpdGUucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoUGFyYW1zLmZhdm9yaXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoUGFyYW1zLmZhdm9yaXRlLmluY2x1ZGVzKGl0ZW0uZmF2b3JpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW0uY291bnQpID49IHRoaXMuc2VhcmNoUGFyYW1zLm1pblF1YW50aXR5ICYmIE51bWJlcihpdGVtLmNvdW50KSA8PSB0aGlzLnNlYXJjaFBhcmFtcy5tYXhRdWFudGl0eTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW0ueWVhcikgPj0gdGhpcy5zZWFyY2hQYXJhbXMubWluWWVhciAmJiBOdW1iZXIoaXRlbS55ZWFyKSA8PSB0aGlzLnNlYXJjaFBhcmFtcy5tYXhZZWFyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFBhcmFtcy5vcHRpb25zVmFsdWUgPT09ICdzb3J0LW5hbWUtbWF4Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc29ydChmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeC5uYW1lIDwgeS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHgubmFtZSA+IHkubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlYXJjaFBhcmFtcy5vcHRpb25zVmFsdWUgPT09ICdzb3J0LW5hbWUtbWluJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc29ydChmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeC5uYW1lID4geS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHgubmFtZSA8IHkubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlYXJjaFBhcmFtcy5vcHRpb25zVmFsdWUgPT09ICdzb3J0LWNvdW50LW1heCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNvcnQoZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcih4LmNvdW50KSA8IE51bWJlcih5LmNvdW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoeC5jb3VudCkgPiBOdW1iZXIoeS5jb3VudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWFyY2hQYXJhbXMub3B0aW9uc1ZhbHVlID09PSAnc29ydC1jb3VudC1taW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zb3J0KGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoeC5jb3VudCkgPiBOdW1iZXIoeS5jb3VudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHguY291bnQpIDwgTnVtYmVyKHkuY291bnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVNlYXJjaCA9IHNlYXJjaC52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlU2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZVNlYXJjaCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNhcmRzKGNhcmRzKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDYXJkcyhyZXN1bHQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jbGlja1RveXNDYXJkcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaG9zZW5Ub3lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlcyBzcGFuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgdG95SUQgPSB0YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hvc2VuLmluY2x1ZGVzKHRveUlEKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaG9zZW4uc3BsaWNlKHRoaXMuY2hvc2VuLmluZGV4T2YodG95SUQpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvc2VuLnB1c2godG95SUQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNob3Nlbi5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ9CY0LfQstC40L3QuNGC0LUg0YPQttC1INCy0YHQtSDRgdC70L7RgtGLINC30LDQvdGP0YLRiycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaG9zZW4uc3BsaWNlKHRoaXMuY2hvc2VuLmluZGV4T2YodG95SUQpLCAxKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaG9zZW5Ub3lzLmlubmVySFRNTCA9IGAke3RoaXMuY2hvc2VuLmxlbmd0aH1gO1xyXG4gICAgICAgICAgICBjb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2hvc2VuJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jaG9zZW4pKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHNldExvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldExvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2hvc2VuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hvc2VuTFMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaG9zZW4nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuVG95cy5pbm5lckhUTUwgPSBgJHtjaG9zZW5MUy5sZW5ndGh9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBnZXRMb2NhbFN0b3JhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX3dyYXBwZXInKTtcclxuICAgICAgICAgICAgY29uc3QgY2hvc2VuVG95cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZXMgc3BhbicpO1xyXG4gICAgICAgICAgICBjaG9zZW5Ub3lzLmlubmVySFRNTCA9ICcwJztcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVQYWdlKHdyYXBwZXJNYWluKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJXcmFwcGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJSZW5kZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zID0ge1xyXG4gICAgICAgICAgICBzaGFwZXM6IFtdLFxyXG4gICAgICAgICAgICBjb2xvcnM6IFtdLFxyXG4gICAgICAgICAgICBzaXplczogW10sXHJcbiAgICAgICAgICAgIGZhdm9yaXRlOiBbXSxcclxuICAgICAgICAgICAgbWluUXVhbnRpdHk6IG51bGwsXHJcbiAgICAgICAgICAgIG1heFF1YW50aXR5OiBudWxsLFxyXG4gICAgICAgICAgICBtaW5ZZWFyOiBudWxsLFxyXG4gICAgICAgICAgICBtYXhZZWFyOiBudWxsLFxyXG4gICAgICAgICAgICBvcHRpb25zVmFsdWU6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaG9zZW4gPSBbXTtcclxuICAgIH1cclxuICAgIHJlbmRlcldyYXBwZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGlua1RveXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDIpJyk7XHJcbiAgICAgICAgY29uc3QgbGlua01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDEpJyk7XHJcbiAgICAgICAgY29uc3QgbGlua0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3M6bnRoLWNoaWxkKDMpJyk7XHJcbiAgICAgICAgbGlua01haW4uY2xhc3NMaXN0LnJlbW92ZSgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgbGlua0dhbWUuY2xhc3NMaXN0LnJlbW92ZSgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgbGlua1RveXMuY2xhc3NMaXN0LmFkZCgnbGlua3MtYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRfc2VhcmNoJyk7XHJcbiAgICAgICAgaW5wdXRTZWFyY2guZm9jdXMoKTtcclxuICAgICAgICBjb25zdCB3cmFwcGVyTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBwZXJNYWluLmNsYXNzTGlzdC5hZGQoJ21haW5fd3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUGFnZSh3cmFwcGVyTWFpbik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHdyYXBwZXJNYWluKTtcclxuICAgIH1cclxuICAgIHJlbmRlckNhcmRzKGNhcmRzKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XHJcbiAgICAgICAgbGV0IHNoYXBlQXJyID0gY2FyZHM7XHJcbiAgICAgICAgc2hhcGVBcnIgPSBzaGFwZUFyci5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnNoYXBlID09PSAn0YjQsNGAJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2hhcGVBcnIuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG95ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZm9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICAgICAgaW5mb0NhcmQuY2xhc3NMaXN0LmFkZCgndG95cy10aXRsZScpO1xyXG4gICAgICAgICAgICBpbmZvQ2FyZC5pbm5lckhUTUwgPSBjYXJkLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWFnZUNhcmQuY2xhc3NMaXN0LmFkZCgndG95cy1pbWcnKTtcclxuICAgICAgICAgICAgaW1hZ2VDYXJkLnNyYyA9IGBhc3NldHMvdG95cy8ke2NhcmQubnVtfS53ZWJwYDtcclxuICAgICAgICAgICAgaW1hZ2VDYXJkLmFsdCA9ICd0b3knO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkRGVzY0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmNsYXNzTGlzdC5hZGQoJ3RveXMtZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvdW50LmNsYXNzTGlzdC5hZGQoJ2NvdW50Jyk7XHJcbiAgICAgICAgICAgIGNvdW50LmRhdGFzZXQuY291bnQgPSBjYXJkLmNvdW50O1xyXG4gICAgICAgICAgICBjb3VudC5pbm5lckhUTUwgPSBg0JrQvtC70LjRh9C10YHRgtCy0L46IDxzcGFuPiR7Y2FyZC5jb3VudH08L3NwYW4+YDtcclxuICAgICAgICAgICAgY29uc3QgeWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgeWVhci5jbGFzc0xpc3QuYWRkKCd5ZWFyJyk7XHJcbiAgICAgICAgICAgIHllYXIuZGF0YXNldC55ZWFyID0gY2FyZC55ZWFyO1xyXG4gICAgICAgICAgICB5ZWFyLmlubmVySFRNTCA9IGDQk9C+0LQ6IDxzcGFuPiR7Y2FyZC55ZWFyfTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgc2hhcGUuY2xhc3NMaXN0LmFkZCgnc2hhcGUnKTtcclxuICAgICAgICAgICAgc2hhcGUuZGF0YXNldC5zaGFwZSA9IGNhcmQuc2hhcGU7XHJcbiAgICAgICAgICAgIHNoYXBlLmlubmVySFRNTCA9IGDQpNC+0YDQvNCwOiA8c3Bhbj4ke2NhcmQuc2hhcGV9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb2xvci5jbGFzc0xpc3QuYWRkKCdjb2xvcicpO1xyXG4gICAgICAgICAgICBjb2xvci5kYXRhc2V0LmNvbG9yID0gY2FyZC5jb2xvcjtcclxuICAgICAgICAgICAgY29sb3IuaW5uZXJIVE1MID0gYNCm0LLQtdGCOiA8c3Bhbj4ke2NhcmQuY29sb3J9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHNpemUuY2xhc3NMaXN0LmFkZCgnc2l6ZScpO1xyXG4gICAgICAgICAgICBzaXplLmRhdGFzZXQuc2l6ZSA9IGNhcmQuc2l6ZTtcclxuICAgICAgICAgICAgc2l6ZS5pbm5lckhUTUwgPSBg0KDQsNC30LzQtdGAOiA8c3Bhbj4ke2NhcmQuc2l6ZX08L3NwYW4+YDtcclxuICAgICAgICAgICAgY29uc3QgZmF2b3JpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGZhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlJyk7XHJcbiAgICAgICAgICAgIGlmIChjYXJkLmZhdm9yaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZS5kYXRhc2V0LmZhdm9yaXRlID0gYCR7Y2FyZC5mYXZvcml0ZX1gO1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGUuaW5uZXJIVE1MID0gYNCb0Y7QsdC40LzQsNGPOiA8c3Bhbj7QlNCwPC9zcGFuPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZS5kYXRhc2V0LmZhdm9yaXRlID0gYCR7Y2FyZC5mYXZvcml0ZX1gO1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGUuaW5uZXJIVE1MID0gYNCb0Y7QsdC40LzQsNGPOiA8c3Bhbj7QndC10YI8L3NwYW4+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0YXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRhcGUuY2xhc3NMaXN0LmFkZCgndGFwZScpO1xyXG4gICAgICAgICAgICB0b3kuYXBwZW5kKGluZm9DYXJkKTtcclxuICAgICAgICAgICAgdG95LmFwcGVuZChpbWFnZUNhcmQpO1xyXG4gICAgICAgICAgICB0b3kuYXBwZW5kKGNhcmREZXNjQ29udCk7XHJcbiAgICAgICAgICAgIHRveS5hcHBlbmQodGFwZSk7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoY291bnQpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKHllYXIpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKHNoYXBlKTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmFwcGVuZChjb2xvcik7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoc2l6ZSk7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoZmF2b3JpdGUpO1xyXG4gICAgICAgICAgICB0b3kuY2xhc3NMaXN0LmFkZCgndG95cycpO1xyXG4gICAgICAgICAgICB0b3kuZGF0YXNldC5pZCA9IGNhcmQubnVtO1xyXG4gICAgICAgICAgICBjYXJkc1dyYXBwZXIuYXBwZW5kKHRveSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVDYXJkcyhjYXJkKSB7XHJcbiAgICAgICAgY2FyZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyUGFnZSh3cmFwcGVyKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGZpbHRlckRpdi5jbGFzc0xpc3QuYWRkKCdmaWx0ZXInKTtcclxuICAgICAgICBmaWx0ZXJEaXYuaWQgPSAnZmlsdGVyJztcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZChmaWx0ZXJEaXYpO1xyXG4gICAgICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZHMuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZChjYXJkcyk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyQm94MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZpbHRlckJveDEuY2xhc3NOYW1lID0gJ2JveCBib3gtZmlsdGVycyc7XHJcbiAgICAgICAgZmlsdGVyQm94MS5pZCA9ICdib3gxJztcclxuICAgICAgICBjb25zdCBib3gxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGJveDFUaXRsZS5pbm5lckhUTUwgPSAn0KTQuNC70YzRgtGA0Ysg0L/QviDQt9C90LDRh9C10L3QuNGOJztcclxuICAgICAgICBib3gxVGl0bGUuY2xhc3NOYW1lID0gJ2ZpbHRlci10aXRsZSc7XHJcbiAgICAgICAgZmlsdGVyQm94MS5hcHBlbmQoYm94MVRpdGxlKTtcclxuICAgICAgICBjb25zdCBzaGFwZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNoYXBlQm94LmNsYXNzTmFtZSA9ICdzaGFwZS1jb250YWluZXInO1xyXG4gICAgICAgIHNoYXBlQm94LmlubmVySFRNTCA9ICfQpNC+0YDQvNCwOiAnO1xyXG4gICAgICAgIEZpbHRlckJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG5TaGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidG5TaGFwZS5jbGFzc0xpc3QuYWRkKCdidG4tc2hhcGUnKTtcclxuICAgICAgICAgICAgYnRuU2hhcGUuZGF0YXNldC5pZCA9IGJ0bi5maWx0ZXI7XHJcbiAgICAgICAgICAgIHNoYXBlQm94LmFwcGVuZChidG5TaGFwZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY29sb3JCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb2xvckJveC5jbGFzc05hbWUgPSAnY29sb3ItY29udGFpbmVyJztcclxuICAgICAgICBjb2xvckJveC5pbm5lckhUTUwgPSAn0KbQstC10YI6ICc7XHJcbiAgICAgICAgRmlsdGVyQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bkNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ0bkNvbG9yLmNsYXNzTmFtZSA9ICdidG4tY29sb3InO1xyXG4gICAgICAgICAgICBidG5Db2xvci5kYXRhc2V0LmlkID0gYnRuLmNvbG9yO1xyXG4gICAgICAgICAgICBjb2xvckJveC5hcHBlbmQoYnRuQ29sb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNpemVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzaXplQm94LmNsYXNzTmFtZSA9ICdzaXplLWNvbnRhaW5lcic7XHJcbiAgICAgICAgc2l6ZUJveC5pbm5lckhUTUwgPSAn0KDQsNC30LzQtdGAOiAnO1xyXG4gICAgICAgIFNpemVCdXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuU2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidG5TaXplLmNsYXNzTmFtZSA9ICdidG4tc2l6ZSc7XHJcbiAgICAgICAgICAgIGJ0blNpemUuZGF0YXNldC5pZCA9IGJ0bi5zaXplO1xyXG4gICAgICAgICAgICBzaXplQm94LmFwcGVuZChidG5TaXplKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZhdm9yaXRlQm94LmlubmVySFRNTCA9ICfQotC+0LvRjNC60L4g0LvRjtCx0LjQvNGL0LU6ICc7XHJcbiAgICAgICAgZmF2b3JpdGVCb3guY2xhc3NOYW1lID0gJ2Zhdm9yaXRlJztcclxuICAgICAgICBjb25zdCBmYXZvcml0ZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmYXZvcml0ZUNvbnQuY2xhc3NOYW1lID0gJ2Zhdm9yaXRlLWNvbnRhaW5lcic7XHJcbiAgICAgICAgZmF2b3JpdGVCb3guYXBwZW5kKGZhdm9yaXRlQ29udCk7XHJcbiAgICAgICAgY29uc3QgZmF2b3JpdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZmF2b3JpdGVJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICBmYXZvcml0ZUlucHV0LmNsYXNzTmFtZSA9ICdpbnB1dC1mYXZvcml0ZSc7XHJcbiAgICAgICAgZmF2b3JpdGVJbnB1dC5pZCA9ICdjaGVjay1mYXZvcml0ZSc7XHJcbiAgICAgICAgZmF2b3JpdGVDb250LmFwcGVuZChmYXZvcml0ZUlucHV0KTtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBmYXZvcml0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NoZWNrLWZhdm9yaXRlJyk7XHJcbiAgICAgICAgZmF2b3JpdGVMYWJlbC5jbGFzc05hbWUgPSAnbGFiZWwtZmF2b3JpdGUnO1xyXG4gICAgICAgIGZhdm9yaXRlQ29udC5hcHBlbmQoZmF2b3JpdGVMYWJlbCk7XHJcbiAgICAgICAgZmlsdGVyQm94MS5hcHBlbmQoc2hhcGVCb3gpO1xyXG4gICAgICAgIGZpbHRlckJveDEuYXBwZW5kKGNvbG9yQm94KTtcclxuICAgICAgICBmaWx0ZXJCb3gxLmFwcGVuZChzaXplQm94KTtcclxuICAgICAgICBmaWx0ZXJCb3gxLmFwcGVuZChmYXZvcml0ZUJveCk7XHJcbiAgICAgICAgZmlsdGVyRGl2LmFwcGVuZChmaWx0ZXJCb3gxKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJCb3gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZmlsdGVyQm94Mi5jbGFzc05hbWUgPSAnYm94IGJveC1yYW5nZSc7XHJcbiAgICAgICAgZmlsdGVyQm94Mi5pZCA9ICdib3gyJztcclxuICAgICAgICBjb25zdCBib3gyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGJveDJUaXRsZS5jbGFzc05hbWUgPSAnZmlsdGVyLXRpdGxlJztcclxuICAgICAgICBib3gyVGl0bGUuaW5uZXJIVE1MID0gJ9Ck0LjQu9GM0YLRgNGLINC/0L4g0LTQuNCw0L/QsNC30L7QvdGDJztcclxuICAgICAgICBmaWx0ZXJCb3gyLmFwcGVuZChib3gyVGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY291bnRCb3guY2xhc3NOYW1lID0gJ2ZpbHRlci1xdWFudGl0eSc7XHJcbiAgICAgICAgY291bnRCb3guaW5uZXJIVE1MID0gJ9Ca0L7Qu9C40YfQtdGB0YLQstC+INGN0LrQt9C10LzQv9C70Y/RgNC+0LI6ICc7XHJcbiAgICAgICAgY29uc3QgY291bnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb3VudENvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyLWZvci1maWx0ZXJzJztcclxuICAgICAgICBjb3VudEJveC5hcHBlbmRDaGlsZChjb3VudENvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgY291bnRJbnB1dE1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY291bnRJbnB1dE1pbi50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgY291bnRJbnB1dE1pbi5jbGFzc05hbWUgPSAnbWluLXF1YW50aXR5JztcclxuICAgICAgICBjb3VudElucHV0TWluLnZhbHVlID0gJzEnO1xyXG4gICAgICAgIGNvdW50SW5wdXRNaW4ucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgIGNvdW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvdW50SW5wdXRNaW4pO1xyXG4gICAgICAgIGNvbnN0IHNsaWRlclF1YW50aXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2xpZGVyUXVhbnRpdHkuaWQgPSAnc2xpZGVyLXF1YW50aXR5JztcclxuICAgICAgICBzbGlkZXJRdWFudGl0eS5jbGFzc05hbWUgPSAnc2xpZGVyLXF1YW50aXR5JztcclxuICAgICAgICBjb3VudENvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXJRdWFudGl0eSk7XHJcbiAgICAgICAgY29uc3QgY291bnRJbnB1dE1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY291bnRJbnB1dE1heC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgY291bnRJbnB1dE1heC5jbGFzc05hbWUgPSAnbWF4LXF1YW50aXR5JztcclxuICAgICAgICBjb3VudElucHV0TWF4LnZhbHVlID0gJzEyJztcclxuICAgICAgICBjb3VudElucHV0TWF4LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICBjb3VudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb3VudElucHV0TWF4KTtcclxuICAgICAgICBjb25zdCB5ZWFyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgeWVhckJveC5jbGFzc05hbWUgPSAnZmlsdGVyLXllYXInO1xyXG4gICAgICAgIHllYXJCb3guaW5uZXJIVE1MID0gJ9CT0L7QtCDQv9GA0LjQvtCx0YDQtdGC0LXQvdC40Y86ICc7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzbGlkZXJDb3VudC5jbGFzc05hbWUgPSAnY29udGFpbmVyLWZvci1maWx0ZXJzJztcclxuICAgICAgICB5ZWFyQm94LmFwcGVuZENoaWxkKHNsaWRlckNvdW50KTtcclxuICAgICAgICBjb25zdCB5ZWFySW5wdXRNaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHllYXJJbnB1dE1pbi50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgeWVhcklucHV0TWluLmNsYXNzTmFtZSA9ICdtaW4teWVhcic7XHJcbiAgICAgICAgeWVhcklucHV0TWluLnZhbHVlID0gJzE5NDAnO1xyXG4gICAgICAgIHllYXJJbnB1dE1pbi5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgc2xpZGVyQ291bnQuYXBwZW5kQ2hpbGQoeWVhcklucHV0TWluKTtcclxuICAgICAgICBjb25zdCBzbGlkZXJZZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2xpZGVyWWVhci5pZCA9ICdzbGlkZXIteWVhcic7XHJcbiAgICAgICAgc2xpZGVyWWVhci5jbGFzc05hbWUgPSAnc2xpZGVyLXllYXInO1xyXG4gICAgICAgIHNsaWRlckNvdW50LmFwcGVuZENoaWxkKHNsaWRlclllYXIpO1xyXG4gICAgICAgIGNvbnN0IHllYXJJbnB1dE1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgeWVhcklucHV0TWF4LnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICB5ZWFySW5wdXRNYXguY2xhc3NOYW1lID0gJ21heC15ZWFyJztcclxuICAgICAgICB5ZWFySW5wdXRNYXgudmFsdWUgPSAnMjAyMCc7XHJcbiAgICAgICAgeWVhcklucHV0TWF4LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICBzbGlkZXJDb3VudC5hcHBlbmRDaGlsZCh5ZWFySW5wdXRNYXgpO1xyXG4gICAgICAgIGZpbHRlckJveDIuYXBwZW5kKGNvdW50Qm94KTtcclxuICAgICAgICBmaWx0ZXJCb3gyLmFwcGVuZCh5ZWFyQm94KTtcclxuICAgICAgICBmaWx0ZXJEaXYuYXBwZW5kKGZpbHRlckJveDIpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlckJveDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmaWx0ZXJCb3gzLmNsYXNzTmFtZSA9ICdib3ggYm94LXNvcnQnO1xyXG4gICAgICAgIGZpbHRlckJveDMuaWQgPSAnYm94Myc7XHJcbiAgICAgICAgY29uc3QgYm94M1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBib3gzVGl0bGUuY2xhc3NOYW1lID0gJ2ZpbHRlci10aXRsZSc7XHJcbiAgICAgICAgYm94M1RpdGxlLmlubmVySFRNTCA9ICfQodC+0YDRgtC40YDQvtCy0LrQsCc7XHJcbiAgICAgICAgZmlsdGVyQm94My5hcHBlbmQoYm94M1RpdGxlKTtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICBzZWxlY3QuY2xhc3NOYW1lID0gJ3NvcnQtc2VsZWN0JztcclxuICAgICAgICBPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbi50ZXh0O1xyXG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZpbHRlckJveDMuYXBwZW5kKHNlbGVjdCk7XHJcbiAgICAgICAgY29uc3QgYnRuUmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5SZXNldC5jbGFzc05hbWUgPSAncmVzZXQnO1xyXG4gICAgICAgIGJ0blJlc2V0LnR5cGUgPSAncmVzZXQnO1xyXG4gICAgICAgIGJ0blJlc2V0LmlubmVySFRNTCA9ICfQodCx0YDQvtGBINGE0LjQu9GM0YLRgNC+0LInO1xyXG4gICAgICAgIGZpbHRlckJveDMuYXBwZW5kKGJ0blJlc2V0KTtcclxuICAgICAgICBmaWx0ZXJEaXYuYXBwZW5kKGZpbHRlckJveDMpO1xyXG4gICAgICAgIGRhdGFfMS5kZWZhdWx0LmZvckVhY2godG95cyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRveSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmZvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgICAgIGluZm9DYXJkLmNsYXNzTGlzdC5hZGQoJ3RveXMtdGl0bGUnKTtcclxuICAgICAgICAgICAgaW5mb0NhcmQuaW5uZXJIVE1MID0gdG95cy5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1hZ2VDYXJkLmNsYXNzTGlzdC5hZGQoJ3RveXMtaW1nJyk7XHJcbiAgICAgICAgICAgIGltYWdlQ2FyZC5zcmMgPSBgYXNzZXRzL3RveXMvJHt0b3lzLm51bX0ud2VicGA7XHJcbiAgICAgICAgICAgIGltYWdlQ2FyZC5hbHQgPSAndG95JztcclxuICAgICAgICAgICAgY29uc3QgY2FyZERlc2NDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5jbGFzc0xpc3QuYWRkKCd0b3lzLWRlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb3VudC5jbGFzc0xpc3QuYWRkKCdjb3VudCcpO1xyXG4gICAgICAgICAgICBjb3VudC5kYXRhc2V0LmNvdW50ID0gdG95cy5jb3VudDtcclxuICAgICAgICAgICAgY291bnQuaW5uZXJIVE1MID0gYNCa0L7Qu9C40YfQtdGB0YLQstC+OiA8c3Bhbj4ke3RveXMuY291bnR9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHllYXIuY2xhc3NMaXN0LmFkZCgneWVhcicpO1xyXG4gICAgICAgICAgICB5ZWFyLmRhdGFzZXQueWVhciA9IHRveXMueWVhcjtcclxuICAgICAgICAgICAgeWVhci5pbm5lckhUTUwgPSBg0JPQvtC0OiA8c3Bhbj4ke3RveXMueWVhcn08L3NwYW4+YDtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHNoYXBlLmNsYXNzTGlzdC5hZGQoJ3NoYXBlJyk7XHJcbiAgICAgICAgICAgIHNoYXBlLmRhdGFzZXQuc2hhcGUgPSB0b3lzLnNoYXBlO1xyXG4gICAgICAgICAgICBzaGFwZS5pbm5lckhUTUwgPSBg0KTQvtGA0LzQsDogPHNwYW4+JHt0b3lzLnNoYXBlfTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29sb3IuY2xhc3NMaXN0LmFkZCgnY29sb3InKTtcclxuICAgICAgICAgICAgY29sb3IuZGF0YXNldC5jb2xvciA9IHRveXMuY29sb3I7XHJcbiAgICAgICAgICAgIGNvbG9yLmlubmVySFRNTCA9IGDQptCy0LXRgjogPHNwYW4+JHt0b3lzLmNvbG9yfTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBzaXplLmNsYXNzTGlzdC5hZGQoJ3NpemUnKTtcclxuICAgICAgICAgICAgc2l6ZS5kYXRhc2V0LnNpemUgPSB0b3lzLnNpemU7XHJcbiAgICAgICAgICAgIHNpemUuaW5uZXJIVE1MID0gYNCg0LDQt9C80LXRgDogPHNwYW4+JHt0b3lzLnNpemV9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBmYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZScpO1xyXG4gICAgICAgICAgICBpZiAodG95cy5mYXZvcml0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGUuZGF0YXNldC5mYXZvcml0ZSA9IGAke3RveXMuZmF2b3JpdGV9YDtcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlLmlubmVySFRNTCA9IGDQm9GO0LHQuNC80LDRjzogPHNwYW4+0JTQsDwvc3Bhbj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGUuZGF0YXNldC5mYXZvcml0ZSA9IGAke3RveXMuZmF2b3JpdGV9YDtcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlLmlubmVySFRNTCA9IGDQm9GO0LHQuNC80LDRjzogPHNwYW4+0J3QtdGCPC9zcGFuPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0YXBlLmNsYXNzTGlzdC5hZGQoJ3RhcGUnKTtcclxuICAgICAgICAgICAgdG95LmFwcGVuZChpbmZvQ2FyZCk7XHJcbiAgICAgICAgICAgIHRveS5hcHBlbmQoaW1hZ2VDYXJkKTtcclxuICAgICAgICAgICAgdG95LmFwcGVuZChjYXJkRGVzY0NvbnQpO1xyXG4gICAgICAgICAgICB0b3kuYXBwZW5kKHRhcGUpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKGNvdW50KTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmFwcGVuZCh5ZWFyKTtcclxuICAgICAgICAgICAgY2FyZERlc2NDb250LmFwcGVuZChzaGFwZSk7XHJcbiAgICAgICAgICAgIGNhcmREZXNjQ29udC5hcHBlbmQoY29sb3IpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKHNpemUpO1xyXG4gICAgICAgICAgICBjYXJkRGVzY0NvbnQuYXBwZW5kKGZhdm9yaXRlKTtcclxuICAgICAgICAgICAgdG95LmNsYXNzTGlzdC5hZGQoJ3RveXMnKTtcclxuICAgICAgICAgICAgdG95LmRhdGFzZXQuaWQgPSB0b3lzLm51bTtcclxuICAgICAgICAgICAgY2FyZHMuYXBwZW5kKHRveSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVQYWdlKHBhZ2UpIHtcclxuICAgICAgICBwYWdlLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyV3JhcHBlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgICAgICgwLCBzbGlkZXJfcXVhbnRpdHlfMS5xdWFudGl0eVNsaWRlcikoKTtcclxuICAgICAgICAoMCwgc2xpZGVyX3llYXJfMS55ZWFyU2xpZGVyKSgpO1xyXG4gICAgICAgIGNvbnN0IHNoYXBlQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGFwZS1jb250YWluZXInKTtcclxuICAgICAgICBzaGFwZUNvbnQgPT09IG51bGwgfHwgc2hhcGVDb250ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaGFwZUNvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBjb2xvckNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3ItY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29sb3JDb250ID09PSBudWxsIHx8IGNvbG9yQ29udCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29sb3JDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0ZpbHRlcik7XHJcbiAgICAgICAgY29uc3Qgc2l6ZUNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l6ZS1jb250YWluZXInKTtcclxuICAgICAgICBzaXplQ29udCA9PT0gbnVsbCB8fCBzaXplQ29udCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2l6ZUNvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZScpO1xyXG4gICAgICAgIGZhdm9yaXRlID09PSBudWxsIHx8IGZhdm9yaXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmYXZvcml0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tGaWx0ZXIpO1xyXG4gICAgICAgIGNvbnN0IG1pblF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbi1xdWFudGl0eScpO1xyXG4gICAgICAgIG1pblF1YW50aXR5ID09PSBudWxsIHx8IG1pblF1YW50aXR5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtaW5RdWFudGl0eS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNsaWNrRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBtYXhRdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXgtcXVhbnRpdHknKTtcclxuICAgICAgICBtYXhRdWFudGl0eSA9PT0gbnVsbCB8fCBtYXhRdWFudGl0eSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF4UXVhbnRpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jbGlja0ZpbHRlcik7XHJcbiAgICAgICAgY29uc3QgbWluWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4teWVhcicpO1xyXG4gICAgICAgIG1pblllYXIgPT09IG51bGwgfHwgbWluWWVhciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWluWWVhci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNsaWNrRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBtYXhZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC15ZWFyJyk7XHJcbiAgICAgICAgbWF4WWVhciA9PT0gbnVsbCB8fCBtYXhZZWFyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtYXhZZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2xpY2tGaWx0ZXIpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC1zZWxlY3QnKTtcclxuICAgICAgICBzb3J0U2VsZWN0ID09PSBudWxsIHx8IHNvcnRTZWxlY3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNvcnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jbGlja0ZpbHRlcik7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5jbGlja0ZpbHRlcik7XHJcbiAgICAgICAgY29uc3QgYnRuUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKTtcclxuICAgICAgICBidG5SZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVzZXRCdXR0b24pO1xyXG4gICAgICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XHJcbiAgICAgICAgY2FyZHMgPT09IG51bGwgfHwgY2FyZHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja1RveXNDYXJkcyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Ub3lzID0gVG95cztcclxuIiwiY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBudW06ICcxJyxcclxuICAgIG5hbWU6ICfQkdC+0LvRjNGI0L7QuSDRiNCw0YAg0YEg0YDQuNGB0YPQvdC60L7QvCcsXHJcbiAgICBjb3VudDogJzInLFxyXG4gICAgeWVhcjogJzE5NjAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzInLFxyXG4gICAgbmFtZTogJ9CX0LXQu9GR0L3Ri9C5INGI0LDRgCDRgSDRhtCy0LXRgtCw0LzQuCcsXHJcbiAgICBjb3VudDogJzUnLFxyXG4gICAgeWVhcjogJzIwMDAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQt9C10LvRkdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMycsXHJcbiAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0LzQsNGC0L7QstGL0Lkg0YjQsNGAJyxcclxuICAgIGNvdW50OiAnMycsXHJcbiAgICB5ZWFyOiAnMTk5MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc0JyxcclxuICAgIG5hbWU6ICfQodC+0YHRg9C70YzQutCwINC60YDQsNGB0L3QsNGPJyxcclxuICAgIGNvdW50OiAnMicsXHJcbiAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzUnLFxyXG4gICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INCy0LjQvdC+0LPRgNCw0LQnLFxyXG4gICAgY291bnQ6ICc0JyxcclxuICAgIHllYXI6ICcxOTgwJyxcclxuICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc2JyxcclxuICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDRiNCw0YAg0YEg0YDQuNGB0YPQvdC60L7QvCcsXHJcbiAgICBjb3VudDogJzYnLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNycsXHJcbiAgICBuYW1lOiAn0JzQvtC70L7Rh9C90L4t0LHQtdC70YvQuSDRiNCw0YAnLFxyXG4gICAgY291bnQ6ICcxMicsXHJcbiAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnOCcsXHJcbiAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0YjQsNGAJyxcclxuICAgIGNvdW50OiAnMTAnLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnOScsXHJcbiAgICBuYW1lOiAn0JrQvtC70L7QutC+0LvRjNGH0LjQuiDRgdGC0LDRgNC40L3QvdGL0LknLFxyXG4gICAgY291bnQ6ICcyJyxcclxuICAgIHllYXI6ICcxOTUwJyxcclxuICAgIHNoYXBlOiAn0LrQvtC70L7QutC+0LvRjNGH0LjQuicsXHJcbiAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzEwJyxcclxuICAgIG5hbWU6ICfQkdC10LvRi9C5INGI0LDRgCDRgNC10YLRgNC+JyxcclxuICAgIGNvdW50OiAnNycsXHJcbiAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzExJyxcclxuICAgIG5hbWU6ICfQqNC40YjQutCwINC10LvQvtCy0LDRjyDQsdC10LvQsNGPJyxcclxuICAgIGNvdW50OiAnMTEnLFxyXG4gICAgeWVhcjogJzE5NjAnLFxyXG4gICAgc2hhcGU6ICfRiNC40YjQutCwJyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0LzQsNC70YvQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcxMicsXHJcbiAgICBuYW1lOiAn0JHQtdC70YvQuSDRiNCw0YAg0YEg0YbQstC10YLQsNC80LgnLFxyXG4gICAgY291bnQ6ICc1JyxcclxuICAgIHllYXI6ICcxOTgwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMTMnLFxyXG4gICAgbmFtZTogJ9Co0LDRgCDRgNCw0YHQv9C40YHQvdC+0Lkg0KDQtdC60LAnLFxyXG4gICAgY291bnQ6ICczJyxcclxuICAgIHllYXI6ICcxOTcwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0YHQuNC90LjQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcxNCcsXHJcbiAgICBuYW1lOiAn0KjQsNGAINGA0LDRgdC/0LjRgdC90L7QuSDQlNC10YDQtdCy0L3RjycsXHJcbiAgICBjb3VudDogJzQnLFxyXG4gICAgeWVhcjogJzE5NzAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzE1JyxcclxuICAgIG5hbWU6ICfQmtC+0LvQvtC60L7Qu9GM0YfQuNC6INGA0LDRgdC/0LjRgdC90L7QuScsXHJcbiAgICBjb3VudDogJzMnLFxyXG4gICAgeWVhcjogJzE5NzAnLFxyXG4gICAgc2hhcGU6ICfQutC+0LvQvtC60L7Qu9GM0YfQuNC6JyxcclxuICAgIGNvbG9yOiAn0YHQuNC90LjQuScsXHJcbiAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMTYnLFxyXG4gICAgbmFtZTogJ9Co0LjRiNC60LAg0YDQsNGB0L/QuNGB0L3QsNGPINCf0LXQudC30LDQticsXHJcbiAgICBjb3VudDogJzMnLFxyXG4gICAgeWVhcjogJzE5NzAnLFxyXG4gICAgc2hhcGU6ICfRiNC40YjQutCwJyxcclxuICAgIGNvbG9yOiAn0YHQuNC90LjQuScsXHJcbiAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcxNycsXHJcbiAgICBuYW1lOiAn0KjQuNGI0LrQsCDRgNCw0YHQv9C40YHQvdCw0Y8nLFxyXG4gICAgY291bnQ6ICc3JyxcclxuICAgIHllYXI6ICcxOTcwJyxcclxuICAgIHNoYXBlOiAn0YjQuNGI0LrQsCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcxOCcsXHJcbiAgICBuYW1lOiAn0JbQtdC70YLRi9C5INGI0LDRgCDRgSDQsdCw0L3RgtC+0LwnLFxyXG4gICAgY291bnQ6ICcyJyxcclxuICAgIHllYXI6ICcyMDEwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcxOScsXHJcbiAgICBuYW1lOiAn0JbQtdC70YLRi9C5INGI0LDRgCDRgSDQv9Cw0LXRgtC60LDQvNC4JyxcclxuICAgIGNvdW50OiAnMTInLFxyXG4gICAgeWVhcjogJzE5ODAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzIwJyxcclxuICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDRiNCw0YAg0YEg0LHQsNC90YLQvtC8JyxcclxuICAgIGNvdW50OiAnOCcsXHJcbiAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzIxJyxcclxuICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDRiNCw0YAg0YEg0LfQstGR0LfQtNCw0LzQuCcsXHJcbiAgICBjb3VudDogJzQnLFxyXG4gICAgeWVhcjogJzE5NzAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcyMicsXHJcbiAgICBuYW1lOiAn0KjQuNGI0LrQsCDQtdC70L7QstCw0Y8g0LfQvtC70L7RgtCw0Y8nLFxyXG4gICAgY291bnQ6ICcxMScsXHJcbiAgICB5ZWFyOiAnMTk5MCcsXHJcbiAgICBzaGFwZTogJ9GI0LjRiNC60LAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9C80LDQu9GL0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMjMnLFxyXG4gICAgbmFtZTogJ9Ca0L7Qu9C+0LrQvtC70YzRh9C40Log0YHRgtCw0YDQuNC90L3Ri9C5JyxcclxuICAgIGNvdW50OiAnOScsXHJcbiAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICBzaGFwZTogJ9C60L7Qu9C+0LrQvtC70YzRh9C40LonLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzI0JyxcclxuICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINC40LfRj9GJ0L3QsNGPJyxcclxuICAgIGNvdW50OiAnMScsXHJcbiAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcyNScsXHJcbiAgICBuYW1lOiAn0KDQvtC30L7QstGL0Lkg0YjQsNGAINGBINCx0LvRkdGB0YLQutCw0LzQuCcsXHJcbiAgICBjb3VudDogJzEyJyxcclxuICAgIHllYXI6ICcyMDEwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzI2JyxcclxuICAgIG5hbWU6ICfQoNGD0LHQuNC90L7QstC+LdC30L7Qu9C+0YLQvtC5INGI0LDRgCcsXHJcbiAgICBjb3VudDogJzgnLFxyXG4gICAgeWVhcjogJzE5NjAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzI3JyxcclxuICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDRiNCw0YAg0YEg0YPQt9C+0YDQvtC8JyxcclxuICAgIGNvdW50OiAnNCcsXHJcbiAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcyOCcsXHJcbiAgICBuYW1lOiAn0JHQvtGA0LTQvtCy0YvQuSDRiNCw0YAg0YEg0YPQt9C+0YDQvtC8JyxcclxuICAgIGNvdW50OiAnMTAnLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMjknLFxyXG4gICAgbmFtZTogJ9Ch0YLQsNGA0LjQvdC90YvQuSDRiNCw0YAg0YEg0YbQstC10YLQsNC80LgnLFxyXG4gICAgY291bnQ6ICc1JyxcclxuICAgIHllYXI6ICcxOTUwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzMwJyxcclxuICAgIG5hbWU6ICfQodGC0LDRgNC40L3QvdGL0Lkg0YjQsNGAINGBINGD0LfQvtGA0L7QvCcsXHJcbiAgICBjb3VudDogJzgnLFxyXG4gICAgeWVhcjogJzE5NTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMzEnLFxyXG4gICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCDRgSDQsdC70ZHRgdGC0LrQsNC80LgnLFxyXG4gICAgY291bnQ6ICc4JyxcclxuICAgIHllYXI6ICcyMDEwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzMyJyxcclxuICAgIG5hbWU6ICfQodC40L3QuNC5INGI0LDRgCDQktGB0LXQu9C10L3QvdCw0Y8nLFxyXG4gICAgY291bnQ6ICcxMScsXHJcbiAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9GB0LjQvdC40LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzMzJyxcclxuICAgIG5hbWU6ICfQodC40L3QuNC5INGI0LDRgCDRgdC+INGB0L3QtdC20LjQvdC60L7QuScsXHJcbiAgICBjb3VudDogJzYnLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICczNCcsXHJcbiAgICBuYW1lOiAn0JfQtdC70ZHQvdGL0LkgINGI0LDRgCDRgSDRg9C30L7RgNC+0LwnLFxyXG4gICAgY291bnQ6ICc4JyxcclxuICAgIHllYXI6ICcyMDEwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LfQtdC70ZHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzM1JyxcclxuICAgIG5hbWU6ICfQpNC40LPRg9GA0LrQsCDQm9C40YEg0LIg0YjQsNGA0YTQtScsXHJcbiAgICBjb3VudDogJzgnLFxyXG4gICAgeWVhcjogJzE5NTAnLFxyXG4gICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICczNicsXHJcbiAgICBuYW1lOiAn0KHQuNGA0LXQvdC10LLRi9C5INGI0LDRgCDQnNC10YLQtdC70YwnLFxyXG4gICAgY291bnQ6ICcxJyxcclxuICAgIHllYXI6ICcyMDAwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0YHQuNC90LjQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMzcnLFxyXG4gICAgbmFtZTogJ9CX0LXQu9GR0L3Ri9C5ICDRiNCw0YAg0JzQtdGC0LXQu9GMJyxcclxuICAgIGNvdW50OiAnNicsXHJcbiAgICB5ZWFyOiAnMjAwMCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C30LXQu9GR0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICczOCcsXHJcbiAgICBuYW1lOiAn0JPQvtC70YPQsdC+0LkgINGI0LDRgCDQnNC10YLQtdC70YwnLFxyXG4gICAgY291bnQ6ICc2JyxcclxuICAgIHllYXI6ICcyMDAwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0YHQuNC90LjQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMzknLFxyXG4gICAgbmFtZTogJ9Ca0YDQsNGB0L3QsNGPINGB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgY291bnQ6ICc2JyxcclxuICAgIHllYXI6ICcxOTkwJyxcclxuICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc0MCcsXHJcbiAgICBuYW1lOiAn0KHQvdC10LbQuNC90LrQsCDQt9C+0LvQvtGC0LDRjycsXHJcbiAgICBjb3VudDogJzEyJyxcclxuICAgIHllYXI6ICcyMDIwJyxcclxuICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNDEnLFxyXG4gICAgbmFtZTogJ9Ch0L3QtdC20LjQvdC60LAg0LDRgNC60YLQuNGH0LXRgdC60LDRjycsXHJcbiAgICBjb3VudDogJzExJyxcclxuICAgIHllYXI6ICcyMDIwJyxcclxuICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzQyJyxcclxuICAgIG5hbWU6ICfQl9C10LvRkdC90YvQuSDRiNCw0YAnLFxyXG4gICAgY291bnQ6ICcxMCcsXHJcbiAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C30LXQu9GR0L3Ri9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc0MycsXHJcbiAgICBuYW1lOiAn0KHQvdC10LbQuNC90LrQsCDQtNCy0YPRhdGG0LLQtdGC0L3QsNGPJyxcclxuICAgIGNvdW50OiAnNicsXHJcbiAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNDQnLFxyXG4gICAgbmFtZTogJ9Ck0LjQs9GD0YDQutCwINCQ0L3Qs9C10LvQsCcsXHJcbiAgICBjb3VudDogJzExJyxcclxuICAgIHllYXI6ICcxOTQwJyxcclxuICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc0NScsXHJcbiAgICBuYW1lOiAn0KHQvdC10LbQuNC90LrQsCDQvdC+0LLQvtCz0L7QtNC90Y/RjycsXHJcbiAgICBjb3VudDogJzEnLFxyXG4gICAgeWVhcjogJzE5ODAnLFxyXG4gICAgc2hhcGU6ICfRgdC90LXQttC40L3QutCwJyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNDYnLFxyXG4gICAgbmFtZTogJ9Ck0LjQs9GD0YDQutCwINCc0YPRhdC+0LzQvtGAJyxcclxuICAgIGNvdW50OiAnMTAnLFxyXG4gICAgeWVhcjogJzE5NTAnLFxyXG4gICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQvNCw0LvRi9C5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzQ3JyxcclxuICAgIG5hbWU6ICfQpNC40LPRg9GA0LrQsCDQmtC+0LvQvtC00LXRhicsXHJcbiAgICBjb3VudDogJzYnLFxyXG4gICAgeWVhcjogJzE5NTAnLFxyXG4gICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQvNCw0LvRi9C5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzQ4JyxcclxuICAgIG5hbWU6ICfQltC10LvRgtGL0Lkg0YjQsNGAINGBINCx0LDQvdGC0L7QvCcsXHJcbiAgICBjb3VudDogJzYnLFxyXG4gICAgeWVhcjogJzE5NjAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzQ5JyxcclxuICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINGBINCx0LjRgNGO0LfQvtC5JyxcclxuICAgIGNvdW50OiAnNCcsXHJcbiAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzUwJyxcclxuICAgIG5hbWU6ICfQmtC+0LvQvtC60L7Qu9GM0YfQuNC6INCx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGNvdW50OiAnMycsXHJcbiAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICBzaGFwZTogJ9C60L7Qu9C+0LrQvtC70YzRh9C40LonLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNTEnLFxyXG4gICAgbmFtZTogJ9Co0LjRiNC60LAg0YEg0LjQt9C80L7RgNC+0LfRjNGOJyxcclxuICAgIGNvdW50OiAnMTInLFxyXG4gICAgeWVhcjogJzE5NzAnLFxyXG4gICAgc2hhcGU6ICfRiNC40YjQutCwJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9C80LDQu9GL0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNTInLFxyXG4gICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCDRgSDQvdCw0LTQv9C40YHRjNGOJyxcclxuICAgIGNvdW50OiAnMTInLFxyXG4gICAgeWVhcjogJzE5OTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc1MycsXHJcbiAgICBuYW1lOiAn0KHQvdC10LbQuNC90LrQsCDRgdC10YDQtdCx0YDQuNGB0YLQsNGPJyxcclxuICAgIGNvdW50OiAnNicsXHJcbiAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc1NCcsXHJcbiAgICBuYW1lOiAn0JfQtdC70ZHQvdGL0Lkg0YjQsNGAINGBINGA0LjRgdGD0L3QutC+0LwnLFxyXG4gICAgY291bnQ6ICc2JyxcclxuICAgIHllYXI6ICcyMDEwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LfQtdC70ZHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzU1JyxcclxuICAgIG5hbWU6ICfQn9GA0Y/QvdC40YfQvdGL0Lkg0LTQvtC80LjQuicsXHJcbiAgICBjb3VudDogJzEnLFxyXG4gICAgeWVhcjogJzE5NDAnLFxyXG4gICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNTYnLFxyXG4gICAgbmFtZTogJ9Cf0YDRj9C90LjRh9C90YvQuSDRgtC10YDQtdC80L7QuicsXHJcbiAgICBjb3VudDogJzEnLFxyXG4gICAgeWVhcjogJzE5NDAnLFxyXG4gICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LzQsNC70YvQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc1NycsXHJcbiAgICBuYW1lOiAn0J/RgNGP0L3QuNGH0L3QsNGPINC40LfQsdGD0YjQutCwJyxcclxuICAgIGNvdW50OiAnMScsXHJcbiAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc1OCcsXHJcbiAgICBuYW1lOiAn0KTQuNCz0YPRgNC60LAg0LHQtdC70L7Qs9C+INC80LXQtNCy0LXQtNGPJyxcclxuICAgIGNvdW50OiAnMicsXHJcbiAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNTknLFxyXG4gICAgbmFtZTogJ9CW0LXQu9GC0YvQuSDRiNCw0YAg0YEg0L3QsNC00L/QuNGB0YzRjicsXHJcbiAgICBjb3VudDogJzEwJyxcclxuICAgIHllYXI6ICcxOTkwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc2MCcsXHJcbiAgICBuYW1lOiAn0KTQuNCz0YPRgNC60LAg0JPQvtC70YPQsdGMJyxcclxuICAgIGNvdW50OiAnMTInLFxyXG4gICAgeWVhcjogJzE5NDAnLFxyXG4gICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vZ2xvYmFsLmNzc1wiKTtcclxuY29uc3QgYXBwXzEgPSByZXF1aXJlKFwiLi9wYWdlcy9hcHAvYXBwXCIpO1xyXG5jb25zdCBhcHAgPSBuZXcgYXBwXzEuQXBwKCk7XHJcbmFwcC5ydW4oKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9