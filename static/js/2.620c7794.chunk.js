webpackJsonp([2],{323:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=n.n(o),s=n(6),c=n.n(s),l=n(2),f=n.n(l),d=n(26),p=n(25),m=n(63),b=n(340),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){var e,n,a,o;r(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.onSubmit=function(e,t){var n=t.reset;a.props.onSubmit(e),n()},o=n,i(a,o)}return a(t,e),v(t,[{key:"render",value:function(){var e=this.props.types;return u.a.createElement("div",{className:"screen"},u.a.createElement(b.a,{types:e,initialValues:{values:[{value:""}],set:"owner-dict"},onSubmit:this.onSubmit}))}}]),t}(u.a.Component);h.propTypes={types:c.a.instanceOf(f.a.List).isRequired,onSubmit:c.a.func.isRequired},t.default=Object(d.d)(Object(p.b)(function(e){return{types:Object(m.typesList)(e)}},{onSubmit:m.createCard}))(h)},332:function(e,t,n){"use strict";t.a={addBtn:{backgroundColor:"#128fdc",width:30,height:30,flex:[0,0,"30px"],color:"#fff",alignSelf:"flex-end",boxShadow:"0 0 4px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24)"},container:{display:"flex"},list:{flex:[1,1,"90%"],paddingRight:15,"& > li:not(:first-child)":{marginTop:15}},fieldWrapper:{marginBottom:15},label:{fontSize:14,marginBottom:3,color:"#333",display:"inline-block"},field:{width:"100%",height:30,background:"#fff",borderRadius:5,border:"1px solid #e5e9f2",padding:[0,8]},item:{borderBottom:"1px solid #c0c0c0",paddingBottom:12,"& > *:not(:first-child)":{marginTop:12}}}},333:function(e,t,n){"use strict";function r(e,t,n){return e?!t||n.some(function(n){return e[n]!==t[n]}):!!t}function i(e,t){var n=e.render,r=e.children,i=e.component,o=b(e,["render","children","component"]);return i?Object(a.createElement)(i,p({},o,{children:r,render:n})):n?n(p({},o,{children:r})):"function"!==typeof r?(c(!1,"Must specify either a render prop, a render function as children, or a component prop to "+t),null):r(o)}n.d(t,"a",function(){return O}),n.d(t,"b",function(){return j});var a=n(0),o=(n.n(a),n(6)),u=n.n(o),s=n(335),c=function(e,t){},l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},b=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},v=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},h="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,y=function(e){var t=[];if(e)for(var n=0;n<e.length;n++){var r=e[n];r.selected&&t.push(r.value)}return t},g=function(e,t,n,r){if(!r&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(r&&e.nativeEvent)return e.nativeEvent.text;var i=e,a=i.target,o=a.type,u=a.value,s=a.checked;switch(o){case"checkbox":if(void 0!==n){if(s)return Array.isArray(t)?t.concat(n):[n];if(!Array.isArray(t))return t;var c=t.indexOf(n);return c<0?t:t.slice(0,c).concat(t.slice(c+1))}return!!s;case"select-multiple":return y(e.target.options);default:return u}},S=s.b.reduce(function(e,t){return e[t]=!0,e},{}),O=function(e){function t(e,n){f(this,t);var r=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));r.subscribe=function(e,t){var n=e.isEqual,i=e.name,a=e.subscription,o=e.validateFields;r.unsubscribe=r.context.reactFinalForm.registerField(i,t,a||S,{isEqual:n,getValidator:function(){return r.props.validate},validateFields:o})},r.notify=function(e){return r.setState({state:e})},r.handlers={onBlur:function(e){r.state.state.blur()},onChange:function(e){var t=r.props,n=t.parse,i=t.value,a=e&&e.target?g(e,r.state.state.value,i,h):e;r.state.state.change(null!==n?n(a,r.props.name):a)},onFocus:function(e){r.state.state.focus()}};var i=void 0;return c(n.reactFinalForm,"Field must be used inside of a ReactFinalForm component"),r.context.reactFinalForm&&r.subscribe(e,function(e){i?r.notify(e):i=e}),r.state={state:i||{}},r}return m(t,e),d(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.name,n=e.subscription;(this.props.name!==t||r(this.props.subscription,n,s.b))&&this.context.reactFinalForm&&(this.unsubscribe(),this.subscribe(e,this.notify))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.props,t=e.allowNull,n=e.component,r=e.children,o=e.format,u=(e.parse,e.isEqual,e.name),s=(e.subscription,e.validate,e.validateFields,e.value),c=b(e,["allowNull","component","children","format","parse","isEqual","name","subscription","validate","validateFields","value"]),l=this.state.state,f=(l.blur,l.change,l.focus,l.value),d=(l.name,b(l,["blur","change","focus","value","name"]));null!==o&&(f=o(f,u)),null!==f||t||(f="");var m=p({name:u,value:f},this.handlers);return"checkbox"===c.type?void 0===s?m.checked=!!f:(m.checked=Array.isArray(f)&&~f.indexOf(s),m.value=s):"radio"===c.type&&(m.checked=f===s,m.value=s),"select"===n&&c.multiple&&(m.value=m.value||[]),"function"===typeof r?r(p({input:m,meta:d},c)):"string"===typeof n?Object(a.createElement)(n,p({},m,{children:r},c)):i(p({input:m,meta:d,children:r,component:n},c),"Field("+u+")")}}]),t}(a.PureComponent);O.contextTypes={reactFinalForm:u.a.object},O.defaultProps={format:function(e,t){return void 0===e?"":e},parse:function(e,t){return""===e?void 0:e}};var E=function(e,t){if(e===t)return!0;if("object"!==("undefined"===typeof e?"undefined":l(e))||!e||"object"!==("undefined"===typeof t?"undefined":l(t))||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),a=0;a<n.length;a++){var o=n[a];if(!i(o)||e[o]!==t[o])return!1}return!0},w={"final-form":s.d,"react-final-form":k},F=s.c.reduce(function(e,t){return e[t]=!0,e},{}),j=function(e){function t(e){f(this,t);var n=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.notify=function(e){return n.setState({state:e})},n.handleSubmit=function(e){return e&&e.preventDefault(),n.form.submit()};var r=e.children,i=e.component,a=e.debug,o=e.decorators,u=e.initialValues,l=e.mutators,d=e.onSubmit,p=e.render,m=e.subscription,b=e.validate,h=e.validateOnBlur;c(p||"function"===typeof r||i,"Must specify either a render prop, a render function as children, or a component prop");var y={debug:a,initialValues:u,mutators:l,onSubmit:d,validate:b,validateOnBlur:h};try{n.form=Object(s.a)(y)}catch(e){c(!1,e.message)}var g=void 0;return n.unsubscriptions=[],n.form&&n.unsubscriptions.push(n.form.subscribe(function(e){g?n.notify(e):g=e},m||F)),n.state={state:g},o&&o.forEach(function(e){n.unsubscriptions.push(e(n.form))}),n}return m(t,e),d(t,[{key:"getChildContext",value:function(){return{reactFinalForm:this.form}}},{key:"componentWillReceiveProps",value:function(e){E(this.props.initialValues,e.initialValues)||this.form.initialize(e.initialValues)}},{key:"componentWillUnmount",value:function(){this.unsubscriptions.forEach(function(e){return e()})}},{key:"render",value:function(){var e=this.props,t=(e.debug,e.initialValues,e.mutators,e.onSubmit,e.subscription,e.validate,e.validateOnBlur,b(e,["debug","initialValues","mutators","onSubmit","subscription","validate","validateOnBlur"]));return i(p({},t,this.state.state,{mutators:this.form&&this.form.mutators,batch:this.form&&this.form.batch,blur:this.form&&this.form.blur,change:this.form&&this.form.change,focus:this.form&&this.form.focus,handleSubmit:this.handleSubmit,initialize:this.form&&this.form.initialize,reset:this.form&&this.form.reset,__versions:w}),"ReactFinalForm")}}]),t}(a.PureComponent);j.childContextTypes={reactFinalForm:u.a.object},j.displayName="ReactFinalForm("+s.d+")("+k+")",(function(e){function t(e,n){f(this,t);var r=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));r.subscribe=function(e,t){var n=e.subscription;r.unsubscribe=r.context.reactFinalForm.subscribe(t,n||F)},r.notify=function(e){r.setState({state:e}),r.props.onChange&&r.props.onChange(e)};var i=void 0;return c(n.reactFinalForm,"FormSpy must be used inside of a ReactFinalForm component"),r.context.reactFinalForm&&r.subscribe(e,function(t){i?r.notify(t):(i=t,e.onChange&&e.onChange(t))}),r.state={state:i},r}return m(t,e),d(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.subscription;r(this.props.subscription,t,s.c)&&this.context.reactFinalForm&&(this.unsubscribe(),this.subscribe(e,this.notify))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.props,t=e.onChange,n=(e.subscription,b(e,["onChange","subscription"])),r=this.context.reactFinalForm;return t?null:i(p({},n,this.state.state,{mutators:r&&r.mutators,batch:r&&r.batch,blur:r&&r.blur,change:r&&r.change,focus:r&&r.focus,initialize:r&&r.initialize,reset:r&&r.reset}),"FormSpy")}}]),t}(a.PureComponent)).contextTypes={reactFinalForm:u.a.object};var k="3.0.3"},334:function(e,t,n){"use strict";function r(e){var t=e.classes,n=e.children,r=e.id,i=e.title;return a.a.createElement("div",{className:t.fieldWrapper},a.a.createElement("div",{className:t.wrapper},a.a.createElement("label",{htmlFor:r,className:t.label},i)),n)}var i=n(0),a=n.n(i),o=n(6),u=n.n(o);r.propTypes={classes:u.a.shape({inputRow:u.a.string,wrapper:u.a.string,labelText:u.a.string}).isRequired,id:u.a.string.isRequired,children:u.a.node,title:u.a.string},t.a=r},335:function(e,t,n){"use strict";function r(e,t,n,r,i,a){var o=!1;return i.forEach(function(i){r[i]&&(e[i]=t[i],n&&(~a.indexOf(i)?v(t[i],n[i]):t[i]===n[i])||(o=!0))}),o}function i(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=i(n,r,t,a);o&&e(o)}function a(e,t,n,r){var a=e.entries;Object.keys(a).forEach(function(e){var o=a[Number(e)],u=o.subscription;i(o.subscriber,u,t,n,r)})}n.d(t,"a",function(){return x}),n.d(t,"d",function(){return j}),n.d(t,"c",function(){return g}),n.d(t,"b",function(){return b});var o=function(e){if(null===e||void 0===e)return[];if("string"!==typeof e)throw new Error("toPath() expects a string");return e.length?e.split(/[.[\]]+/).filter(Boolean):[]},u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},f=function(e,t){var n=o(t),r=e,i=!0,a=!1,s=void 0;try{for(var c,l=n[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var f=c.value;if(void 0===r||null===r||"object"!==("undefined"===typeof r?"undefined":u(r))||Array.isArray(r)&&isNaN(f))return;r=r[f]}}catch(e){a=!0,s=e}finally{try{!i&&l.return&&l.return()}finally{if(a)throw s}}return r},d=function e(t,n,r,i){if(n>=r.length)return i;var a=r[n];if(isNaN(a)){if(void 0===t||null===t){var o=e(void 0,n+1,r,i);return void 0===o?void 0:s({},a,o)}if(Array.isArray(t))throw new Error("Cannot set a non-numeric property on an array");var u=e(t[a],n+1,r,i),f=Object.keys(t).length;if(void 0===u){if(void 0===t[a]&&0===f)return;if(void 0!==t[a]&&f<=1)return isNaN(r[n-1])?void 0:{}}return c({},t,s({},a,u))}var d=Number(a);if(void 0===t||null===t){var p=e(void 0,n+1,r,i);if(void 0===p)return;var m=[];return m[d]=p,m}if(!Array.isArray(t))throw new Error("Cannot set a numeric property on an object");var b=t[d],v=e(b,n+1,r,i),h=[].concat(l(t));return void 0===v?h.splice(d,1):h[d]=v,h},p=function(e,t,n){if(void 0===e||null===e)throw new Error("Cannot call setIn() with "+String(e)+" state");if(void 0===t||null===t)throw new Error("Cannot call setIn() with "+String(t)+" key");return d(e,0,o(t),n)},m=function(e,t){var n=e.errors,r=e.initialValues,i=e.lastSubmittedValues,a=e.submitErrors,o=e.submitFailed,u=e.submitSucceeded,s=e.values,c=t.active,l=t.blur,d=t.change,p=t.data,m=t.focus,b=t.name,v=t.touched,h=t.visited,y=f(s,b),g=f(n,b),S=a&&f(a,b),O=r&&f(r,b),E=t.isEqual(O,y),w=!(!i||t.isEqual(f(i,b),y)),F=!g&&!S;return{active:c,blur:l,change:d,data:p,dirty:!E,dirtySinceLastSubmit:w,error:g,focus:m,initial:O,invalid:!F,length:Array.isArray(y)?y.length:void 0,name:b,pristine:E,submitError:S,submitFailed:o,submitSucceeded:u,touched:v,valid:F,value:y,visited:h}},b=["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","pristine","submitError","submitFailed","submitSucceeded","touched","valid","value","visited"],v=function(e,t){if(e===t)return!0;if("object"!==("undefined"===typeof e?"undefined":u(e))||!e||"object"!==("undefined"===typeof t?"undefined":u(t))||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),a=0;a<n.length;a++){var o=n[a];if(!i(o)||e[o]!==t[o])return!1}return!0},h=["data"],y=function(e,t,n,i){var a={blur:e.blur,change:e.change,focus:e.focus,name:e.name};return r(a,e,t,n,b,h)||!t||i?a:void 0},g=["active","dirty","dirtySinceLastSubmit","error","errors","initialValues","invalid","pristine","submitting","submitError","submitErrors","submitFailed","submitSucceeded","valid","validating","values"],S=[],O=function(e,t,n,i){var a={};return r(a,e,t,n,g,S)||!t||i?a:void 0},E=function(e){var t=void 0,n=void 0;return function(){for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t&&i.length===t.length&&!i.some(function(e,n){return!v(t[n],e)})||(t=i,n=e.apply(void 0,i)),n}},w=function(e){return!!e&&("object"===("undefined"===typeof e?"undefined":u(e))||"function"===typeof e)&&"function"===typeof e.then},F=Symbol("form-error"),j="4.0.2",k=function(e,t){return e===t},_=function(e){var t=e.active,n=e.dirtySinceLastSubmit,r=e.error,i=e.errors,a=e.initialValues,o=e.pristine,u=e.submitting,s=e.submitFailed,c=e.submitSucceeded,l=e.submitError,f=e.submitErrors,d=e.valid;return{active:t,dirty:!o,dirtySinceLastSubmit:n,error:r,errors:i,invalid:!d,initialValues:a,pristine:o,submitting:u,submitFailed:s,submitSucceeded:c,submitError:l,submitErrors:f,valid:d,validating:e.validating>0,values:e.values}},x=function(e){if(!e)throw new Error("No config specified");var t=e.debug,n=e.initialValues,r=e.mutators,o=e.onSubmit,u=e.validate,s=e.validateOnBlur;if(!o)throw new Error("No onSubmit function specified");var d={subscribers:{index:0,entries:{}},fieldSubscribers:{},fields:{},formState:{dirtySinceLastSubmit:!1,errors:{},initialValues:n&&c({},n),invalid:!1,pristine:!0,submitting:!1,submitFailed:!1,submitSucceeded:!1,valid:!0,validating:0,values:n?c({},n):{}},lastFormState:void 0},b=!1,h=function(e,t,n){if(e.fields[t]){var r=f(e.formState.values,t),i=n(r);e.formState.values=p(e.formState.values,t,i)||{}}},g=r&&Object.keys(r).reduce(function(e,t){return e[t]=function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];var a={formState:d.formState,fields:d.fields},o=r[t](n,a,{changeValue:h,getIn:f,setIn:p,shallowEqual:v});return d.formState=a.formState,d.fields=a.fields,P(void 0,function(){R(),C()}),o},e},{}),S=function(e){var t=[];if(u){var n=u(c({},d.formState.values));w(n)?t.push(n.then(e)):e(n)}return t},j=function(e){return Object.keys(e.validators).reduce(function(t,n){var r=e.validators[Number(n)]();return r&&t.push(r),t},[])},x=function(e,t){var n=[],r=j(e);if(r.length){var i=void 0;r.forEach(function(r){var a=r(f(d.formState.values,e.name),d.formState.values);a&&w(a)?n.push(a.then(t)):i||(i=a)}),t(i)}return n},P=function(e,t){var n=d.fields,r=d.formState,i=Object.keys(n);if(!u&&!i.some(function(e){return j(n[e]).length}))return void(t&&t());if(e){var a=n[e].validateFields;a&&(i=a.length?a.concat(e):[e])}var o={},s={},m=[].concat(l(S(function(e){o=e||{}})),l(i.reduce(function(e,t){return e.concat(x(n[t],function(e){s[t]=e}))},[]))),b=function(){var e=c({},o);i.forEach(function(t){if(n[t]){var r=s[t]||f(o,t);r&&(e=p(e,t,r))}}),v(r.errors,e)||(r.errors=e),r.error=o[F]};b(),m.length?(d.formState.validating++,t&&t(),Promise.all(m).then(function(){d.formState.validating--,b(),t&&t()})):t&&t()},R=function(e){if(!b){var t=d.fields,n=d.fieldSubscribers,r=d.formState;Object.keys(t).forEach(function(e){var i=t[e],o=m(r,i),u=i.lastFieldState;v(o,u)||(i.lastFieldState=o,a(n[e],o,u,y))})}},A=function(){return!(!d.formState.error&&!Object.keys(d.formState.errors).length)},V=function(){var e=d.fields,t=d.formState,n=d.lastFormState,r=Object.keys(e);t.pristine=r.every(function(n){return e[n].isEqual(f(t.values,n),f(t.initialValues||{},n))}),t.dirtySinceLastSubmit=!(!t.lastSubmittedValues||r.every(function(n){return e[n].isEqual(f(t.values,n),f(t.lastSubmittedValues||{},n))})),t.valid=!t.error&&!t.submitError&&!Object.keys(t.errors).length&&!(t.submitErrors&&Object.keys(t.submitErrors).length);var i=_(t);return n&&v(n,i)?n:i},N=function(){return t&&!1&&t(_(d.formState),Object.keys(d.fields).reduce(function(e,t){return e[t]=d.fields[t],e},{}))},C=function(){if(N(),!b){var e=d.lastFormState,t=V();t!==e&&(d.lastFormState=t,a(d.subscribers,t,e,O))}};P();var q={batch:function(e){b=!0,e(),b=!1,R(),C()},blur:function(e){var t=d.fields,n=d.formState,r=t[e];r&&(delete n.active,t[e]=c({},r,{active:!1,touched:!0}),s?P(e,function(){R(),C()}):(R(),C()))},change:function(e,t){var n=d.fields,r=d.formState;n[e]&&f(r.values,e)!==t&&(h(d,e,function(){return t}),s?(R(),C()):P(e,function(){R(),C()}))},focus:function(e){var t=d.fields[e];t&&!t.active&&(d.formState.active=e,t.active=!0,t.visited=!0,R(),C())},mutators:g,getRegisteredFields:function(){return Object.keys(d.fields)},getState:function(){return _(d.formState)},initialize:function(e){var t=d.fields,n=d.formState;n.initialValues=e,n.values=e,Object.keys(t).forEach(function(e){var n=t[e];n.touched=!1,n.visited=!1}),P(void 0,function(){R(),C()})},registerField:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3];d.fieldSubscribers[e]||(d.fieldSubscribers[e]={index:0,entries:{}});var a=d.fieldSubscribers[e].index++;if(d.fieldSubscribers[e].entries[a]={subscriber:E(t),subscription:n},!d.fields[e]){var o=d.formState.initialValues?f(d.formState.initialValues,e):void 0;d.fields[e]={active:!1,blur:function(){return q.blur(e)},change:function(t){return q.change(e,t)},data:{},focus:function(){return q.focus(e)},initial:o,isEqual:r&&r.isEqual||k,lastFieldState:void 0,name:e,touched:!1,valid:!0,validateFields:r&&r.validateFields,validators:{},visited:!1}}r&&r.getValidator&&(d.fields[e].validators[a]=r.getValidator);var u=!1,s=function(){var r=m(d.formState,d.fields[e]);i(t,n,r,void 0,y,!0),d.fields[e].lastFieldState=r,u=!0};return P(void 0,function(){C(),u||s(),R()}),function(){delete d.fields[e].validators[a],delete d.fieldSubscribers[e].entries[a],Object.keys(d.fieldSubscribers[e].entries).length||(delete d.fieldSubscribers[e],delete d.fields[e]),P(void 0,function(){R(),C()})}},reset:function(){q.initialize(d.formState.initialValues||{})},submit:function(){var e=d.formState,t=d.fields;if(A())return Object.keys(t).forEach(function(e){t[e].touched=!0}),d.formState.submitFailed=!0,C(),void R();var n=void 0,r=!1,i=function(t){e.submitting=!1,t&&(Object.keys(t).length||Object.getOwnPropertySymbols(t).length)?(e.submitFailed=!0,e.submitSucceeded=!1,e.submitErrors=t,e.submitError=t[F]):(delete e.submitErrors,delete e.submitError,e.submitFailed=!1,e.submitSucceeded=!0),C(),R(),r=!0,n&&n()};if(e.submitting=!0,e.submitFailed=!1,e.submitSucceeded=!1,e.lastSubmittedValues=c({},e.values),3===o.length){if(o(e.values,q,i),!r)return C(),new Promise(function(e){n=e})}else{var a=o(e.values,q);if(a&&w(a))return C(),a.then(i);i(a)}},subscribe:function(e,t){if(!e)throw new Error("No callback given.");if(!t)throw new Error("No subscription provided. What values do you want to listen to?");var n=E(e),r=d.subscribers,a=d.lastFormState,o=r.index++;r.entries[o]={subscriber:n,subscription:t};var u=V();return u!==a&&(d.lastFormState=u),i(n,t,u,u,O,!0),function(){delete r.entries[o]}}};return q}},340:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),u=n.n(o),s=n(6),c=n.n(s),l=n(2),f=n.n(l),d=n(333),p=n(341),m=n(342),b=n(343),v=n(24),h=n.n(v),y=n(347),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),S=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),g(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,r=t.types,i=t.initialValues;return u.a.createElement(d.b,{onSubmit:this.props.onSubmit,initialValues:i,mutators:m.a,render:function(t){var i=t.handleSubmit,a=t.pristine;return u.a.createElement("form",{onSubmit:i,name:"create",className:"inner"},u.a.createElement(d.a,{name:"set",component:"input",type:"hidden"}),u.a.createElement(d.a,{name:"key",component:b.a,props:{title:"Front of the card"}}),u.a.createElement(p.a,{name:"values"},function(e){var t=e.fields;return u.a.createElement(b.b,{fields:t,title:"Back of the card",options:r})}),u.a.createElement("label",{htmlFor:"id-to_lexicon",className:n.label},u.a.createElement(d.a,{name:"to_lexicon",component:"input",type:"checkbox",id:"id-to_lexicon"}),u.a.createElement("span",null,"Append to my set")),e.props.children||u.a.createElement("div",{className:"btn__group"},u.a.createElement("button",{type:"submit",className:"btn btn_main",disabled:a},"Ok")))}})}}]),t}(u.a.Component);S.propTypes={classes:c.a.objectOf(c.a.string).isRequired,onSubmit:c.a.func.isRequired,types:c.a.instanceOf(f.a.List).isRequired,children:c.a.node,initialValues:c.a.object},t.a=h()(y.a)(S)},341:function(e,t,n){"use strict";function r(e,t,n){return e?!t||n.some(function(n){return e[n]!==t[n]}):!!t}function i(e,t){var n=e.render,r=e.children,i=e.component,o=m(e,["render","children","component"]);return i?Object(a.createElement)(i,d({},o,{children:r})):n?n(d({},o,{children:r})):"function"!==typeof r?(c(!1,"Must specify either a render prop, a render function as children, or a component prop to "+t),null):r(o)}n.d(t,"a",function(){return h});var a=n(0),o=(n.n(a),n(6)),u=n.n(o),s=n(335),c=function(e,t){},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},m=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},b=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},v=s.b.reduce(function(e,t){return e[t]=!0,e},{}),h=function(e){function t(e,n){l(this,t);var r=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));y.call(r);var i=void 0;return c(n.reactFinalForm,"FieldArray must be used inside of a ReactFinalForm component"),r.context.reactFinalForm&&r.subscribe(e,function(e){i?r.notify(e):i=e}),r.state={state:i||{}},r.bindMutators(e),r}return p(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.name,n=e.subscription;(this.props.name!==t||r(this.props.subscription,n,s.b))&&this.context.reactFinalForm&&(this.unsubscribe(),this.subscribe(e,this.notify)),this.props.name!==t&&this.bindMutators(e)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.props,t=e.name,n=m(e,["name"]),r=this.state.state,a=r.value,o=r.length,u=m(r,["value","length"]);return i(d({fields:d({name:t,forEach:this.forEach,length:o,map:this.map},this.mutators),meta:u,value:a},n),"FieldArray("+t+")")}}]),t}(a.PureComponent);h.displayName="ReactFinalFormFieldArray("+s.d+")("+g+")";var y=function(){var e=this;this.subscribe=function(t,n){var r=t.name,i=t.subscription;e.unsubscribe=e.context.reactFinalForm.registerField(r,n,i?d({},i,{length:!0}):v,{validate:e.validate})},this.bindMutators=function(t){var n=t.name,r=e.context.reactFinalForm;if(r){var i=r.mutators;c(i&&i.push&&i.pop,"Array mutators not found. You need to provide the mutators from final-form-arrays to your form"),i&&(e.mutators=Object.keys(i).reduce(function(e,t){return e[t]=function(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return i[t].apply(i,[n].concat(r))},e},{}))}},this.validate=function(t,n){return e.props.validate&&e.props.validate(t,n)},this.notify=function(t){setTimeout(function(){return e.setState({state:t})})},this.forEach=function(t){for(var n=e.props.name,r=e.state.state.length,i=0;i<r;i++)t(n+"["+i+"]",i)},this.map=function(t){for(var n=e.props.name,r=e.state.state.length,i=[],a=0;a<r;a++)i.push(t(n+"["+a+"]",a));return i}};h.contextTypes={reactFinalForm:u.a.object};var g="1.0.2"},342:function(e,t,n){"use strict";var r=function(){function e(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},a=function(e,t,n){var a=r(e,3),o=a[0],u=a[1],s=a[2];(0,n.changeValue)(t,o,function(e){var t=[].concat(i(e||[]));return t.splice(u,0,s),t})},o=function(e,t,n){var a=r(e,3),o=a[0],u=a[1],s=a[2];(0,n.changeValue)(t,o,function(e){var t=[].concat(i(e||[])),n=t[u];return t.splice(u,1),t.splice(s,0,n),t})},u=function(e,t,n){var i=r(e,1),a=i[0],o=n.changeValue,u=void 0;return o(t,a,function(e){if(e)return e.length?(u=e[e.length-1],e.slice(0,e.length-1)):[]}),u},s=function(e,t,n){var a=r(e,2),o=a[0],u=a[1];(0,n.changeValue)(t,o,function(e){return e?[].concat(i(e),[u]):[u]})},c=function(e,t,n){var a=r(e,2),o=a[0],u=a[1],s=n.changeValue,c=void 0;return s(t,o,function(e){var t=[].concat(i(e||[]));return c=t[u],t.splice(u,1),t}),c},l=function(e,t,n){var i=r(e,1),a=i[0],o=n.changeValue,u=void 0;return o(t,a,function(e){if(e)return e.length?(u=e[0],e.slice(1,e.length)):[]}),u},f=function(e,t,n){var a=r(e,3),o=a[0],u=a[1],s=a[2];(0,n.changeValue)(t,o,function(e){var t=[].concat(i(e||[])),n=t[u];return t[u]=t[s],t[s]=n,t})},d=function(e,t,n){var a=r(e,2),o=a[0],u=a[1];(0,n.changeValue)(t,o,function(e){return e?[u].concat(i(e)):[u]})},p={insert:a,move:o,pop:u,push:s,remove:c,shift:l,swap:f,unshift:d};t.a=p},343:function(e,t,n){"use strict";var r=n(344),i=n(345);n(346),n(332);n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return i.a})},344:function(e,t,n){"use strict";function r(e){var t=e.input,n=e.classes,r=e.type,i=e.title,o=e.placeholder,u=e.meta,c=t.name;return a.a.createElement(s.a,{classes:n,title:i,meta:u,id:c},a.a.createElement("input",{id:c,type:r,className:d()(n.field),placeholder:o,onChange:t.onChange,value:t.value,name:t.name}))}var i=n(0),a=n.n(i),o=n(6),u=n.n(o),s=n(334),c=n(24),l=n.n(c),f=n(122),d=n.n(f),p=n(332);r.propTypes={classes:u.a.object,type:u.a.string,title:u.a.string,placeholder:u.a.string,meta:u.a.shape({touched:u.a.bool,error:u.a.string}).isRequired,input:u.a.shape({name:u.a.string.isRequired,value:u.a.string.isRequired,onChange:u.a.func.isRequired})},t.a=l()(p.a)(r)},345:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),u=n.n(o),s=n(2),c=n.n(s),l=n(6),f=n.n(l),d=n(333),p=n(122),m=n.n(p),b=n(334),v=n(24),h=n.n(v),y=n(332),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),S=function(e){function t(){var e,n,a,o;r(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.onAdd=function(){a.props.fields.push({value:""})},o=n,i(a,o)}return a(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.title,r=e.fields,i=e.meta,a=e.options,o=r.name;return u.a.createElement(b.a,{classes:t,title:n,meta:i,id:o},u.a.createElement("div",{className:t.container},u.a.createElement("ul",{className:t.list},r.map(function(e,n){return u.a.createElement("li",{key:r.name+"-"+n,className:t.item},u.a.createElement(d.a,{name:r.name+"."+n+".type",component:"select",className:m()(t.field,t.fieldArrayItem)},u.a.createElement("option",{value:"",hidden:!0},"Pick parts of speech"),a.map(function(e){return u.a.createElement("option",{key:e.get("id"),value:e.get("id")},e.get("title"))})),u.a.createElement(d.a,{type:"text",name:r.name+"."+n+".value",className:m()(t.field),component:"input"}))})),u.a.createElement("button",{type:"button",onClick:this.onAdd,className:t.addBtn},"+")))}}]),t}(u.a.Component);S.propTypes={classes:f.a.objectOf(f.a.string).isRequired,fields:f.a.shape({push:f.a.func.isRequired,name:f.a.string.isRequired}).isRequired,title:f.a.string,options:f.a.instanceOf(c.a.List),meta:f.a.object},t.a=h()(y.a)(S)},346:function(e,t,n){"use strict";function r(e){var t=e.input,n=e.classes,r=e.title,i=e.meta,o=e.options,u=t.name;return a.a.createElement(f.a,{classes:n,title:r,meta:i,id:u},a.a.createElement(l.a,{name:t.name,component:"select",className:n.field},a.a.createElement("option",{value:""}),o.map(function(e){return a.a.createElement("option",{key:e.get("id"),value:e.get("id")},e.get("title"))})))}var i=n(0),a=n.n(i),o=n(6),u=n.n(o),s=n(2),c=n.n(s),l=n(333),f=n(334),d=n(24),p=n.n(d),m=n(332);r.propTypes={classes:u.a.object,title:u.a.string,meta:u.a.shape({touched:u.a.bool,error:u.a.string}).isRequired,input:u.a.shape({name:u.a.string.isRequired,value:u.a.string.isRequired,onChange:u.a.func.isRequired}),options:u.a.instanceOf(c.a.List)};p()(m.a)(r)},347:function(e,t,n){"use strict";t.a={label:{lineHeight:1.4,fontSize:14,color:"#333",verticalAlign:"middle","& > span":{marginLeft:8}}}}});
//# sourceMappingURL=2.620c7794.chunk.js.map