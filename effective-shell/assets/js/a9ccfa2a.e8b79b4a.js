"use strict";(self.webpackChunkeffective_shell=self.webpackChunkeffective_shell||[]).push([[4189],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7795:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={},l=void 0,p={unversionedId:"xx-appendices/how-to-avoid-scripting",id:"xx-appendices/how-to-avoid-scripting",title:"how-to-avoid-scripting",description:"Scripts we need to show how to avoid:",source:"@site/docs/xx-appendices/how-to-avoid-scripting.md",sourceDirName:"xx-appendices",slug:"/xx-appendices/how-to-avoid-scripting",permalink:"/effective-shell/xx-appendices/how-to-avoid-scripting",editUrl:"https://github.com/dwmkerr/dwmkerr/main/docs/xx-appendices/how-to-avoid-scripting.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"essential-manpages",permalink:"/effective-shell/xx-appendices/essential-manpages"},next:{title:"index-of-commands",permalink:"/effective-shell/xx-appendices/index-of-commands"}},s=[],u={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Scripts we need to show how to avoid:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Save the current value of IFS - so we can restore it later. Split on newlines.\nold_ifs=$IFS\nIFS=$'\\n'\n\n# Find all symlinks and print each one.\nlinks=$(find ~ -type l)\nfor link in $links\ndo\n    echo \"Found Link: $link\"\ndone\n\n# Restore the original value of IFS.\nIFS=$old_ifs\n")),(0,i.kt)("p",null,"The while loop over file contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'while IFS="" read -r line || [ -n "$line" ]; do\n    echo "Read: $line"\ndone < ~/effective-shell/data/top100.csv\n')))}f.isMDXComponent=!0}}]);