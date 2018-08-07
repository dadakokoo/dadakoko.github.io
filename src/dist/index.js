'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Tab = exports.Scrollspy = exports.Popover = exports.Modal = exports.Dropdown = exports.Collapse = exports.Carousel = exports.Button = exports.Alert = exports.Util = undefined;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _carousel = require('./carousel');

var _carousel2 = _interopRequireDefault(_carousel);

var _collapse = require('./collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _dropdown = require('./dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _popover = require('./popover');

var _popover2 = _interopRequireDefault(_popover);

var _scrollspy = require('./scrollspy');

var _scrollspy2 = _interopRequireDefault(_scrollspy);

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

var _tooltip = require('./tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.2): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function ($) {
  if (typeof $ === 'undefined') {
    throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
  }

  var version = $.fn.jquery.split(' ')[0].split('.');
  var minMajor = 1;
  var ltMajor = 2;
  var minMinor = 9;
  var minPatch = 1;
  var maxMajor = 4;

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
})(_jquery2.default);

exports.Util = _util2.default;
exports.Alert = _alert2.default;
exports.Button = _button2.default;
exports.Carousel = _carousel2.default;
exports.Collapse = _collapse2.default;
exports.Dropdown = _dropdown2.default;
exports.Modal = _modal2.default;
exports.Popover = _popover2.default;
exports.Scrollspy = _scrollspy2.default;
exports.Tab = _tab2.default;
exports.Tooltip = _tooltip2.default;