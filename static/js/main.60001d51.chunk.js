(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{14:function(_,e,t){},16:function(_,e,t){},17:function(_,e,t){"use strict";t.r(e);var s=t(1),r=t.n(s),a=t(7),c=t.n(a),o=(t(14),t(8)),n=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(e){var t=e.getCLS,s=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;t(_),s(_),r(_),a(_),c(_)}))},l=t(0);c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(o.a,{})}),document.getElementById("root")),n()},8:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_dhaval_projects_Calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),D_dhaval_projects_Calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),D_dhaval_projects_Calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),D_dhaval_projects_Calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_components_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),_css_style_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_css_style_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),App=function(_Component){Object(D_dhaval_projects_Calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(D_dhaval_projects_Calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(props){var _this;return Object(D_dhaval_projects_Calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this,props),_this.reset=function(){_this.setState({current:"0",previous:"",nextIsReset:!1})},_this.addToCurrent=function(_){if(["/","*","-","+"].indexOf(_)>-1){var e=_this.state.previous;e+=_this.state.current+" "+_,_this.setState({previous:e,nextIsReset:!0})}else"0"===_this.state.current&&"."!==_||_this.state.nextIsReset?_this.setState({current:_,nextIsReset:!1}):_this.setState({current:_this.state.current+_})},_this.calculate=function(symbol){var _this$state=_this.state,current=_this$state.current,previous=_this$state.previous;previous.length>0&&(current=eval(previous+current),_this.setState({current:current,previous:"",nextIsReset:!0}))},_this.backSpace=function(){var _=_this.state.current;_.length>=2?_this.setState({current:_.slice(0,-1)}):_this.setState({current:"0"})},_this.state={current:"0",previous:"",nextIsReset:!1},_this}return Object(D_dhaval_projects_Calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){var _=[{symbol:"C",cols:2,action:this.reset},{symbol:"DEL",cols:1,action:this.backSpace},{symbol:"/",cols:1,action:this.addToCurrent},{symbol:"7",cols:1,action:this.addToCurrent},{symbol:"8",cols:1,action:this.addToCurrent},{symbol:"9",cols:1,action:this.addToCurrent},{symbol:"*",cols:1,action:this.addToCurrent},{symbol:"4",cols:1,action:this.addToCurrent},{symbol:"5",cols:1,action:this.addToCurrent},{symbol:"6",cols:1,action:this.addToCurrent},{symbol:"-",cols:1,action:this.addToCurrent},{symbol:"1",cols:1,action:this.addToCurrent},{symbol:"2",cols:1,action:this.addToCurrent},{symbol:"3",cols:1,action:this.addToCurrent},{symbol:"+",cols:1,action:this.addToCurrent},{symbol:"0",cols:2,action:this.addToCurrent},{symbol:".",cols:1,action:this.addToCurrent},{symbol:"=",cols:1,action:this.calculate}];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"app",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"container",children:[this.state.previous.length>0?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"previous-result",children:this.state.previous}):null,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{type:"text",className:"result",value:this.state.current}),_.map((function(_,e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_5__.a,{symbol:_.symbol,cols:_.cols,action:function(e){return _.action(e)}},e)}))]})})}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},9:function(_,e,t){"use strict";var s=t(2),r=t(3),a=t(5),c=t(4),o=t(1),n=t(0),l=function(_){Object(a.a)(t,_);var e=Object(c.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var _=this;return Object(n.jsx)("div",{className:"column-".concat(this.props.cols),children:Object(n.jsx)("button",{className:"calc-button",onClick:function(){_.props.action(_.props.symbol)},children:this.props.symbol})})}}]),t}(o.Component);e.a=l}},[[17,1,2]]]);
//# sourceMappingURL=main.60001d51.chunk.js.map