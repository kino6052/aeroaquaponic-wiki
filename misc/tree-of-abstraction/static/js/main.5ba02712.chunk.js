(this["webpackJsonptree-of-abstraction"]=this["webpackJsonptree-of-abstraction"]||[]).push([[0],{125:function(e,t){},145:function(e,t){},154:function(e,t,n){"use strict";n.r(t);var c,o=n(2),a=n.n(o),r=n(84),i=(n(96),n(5)),l=n(8),d=n(88),u=n(1),s=n(6),b=n(155),O=n(14),j=function(e){var t=Object(o.useState)(e.getValue()),n=Object(i.a)(t,2),c=n[0],a=n[1];Object(o.useEffect)((function(){var t=e.subscribe((function(e){return a(e)}));return function(){return t.unsubscribe()}}),[e]);return[c,function(t){return e.next(t)}]},f=function(e){var t=Array.from(Math.round(Math.random()*Math.pow(10,e)).toString()).reverse();return new Array(e).fill("0").map((function(e,n){return t[n]||e})).reverse().join("")},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return new Array(e).fill(0).map((function(e,n,c){return"".concat(n&&"-").concat(f(t))})).join("")},h=function(e){return function(t,n){return e.reduce((function(e,c){var o=Object(i.a)(c,2),a=o[0],r=o[1],l="keydown"===n[0]&&n[1]===fe.Keyboard&&n[2]===a&&r(t,n);return e||l}),!1)}},v=n(53),N=new(n(89).a),m=function(e){var t=e.children,n=e.id,c=a.a.Children.map(t,(function(e){return a.a.isValidElement(e)?a.a.cloneElement(e,{id:n,onClick:function(e){e.preventDefault(),N.next(["click",n,"".concat(+e.ctrlKey).concat(+e.shiftKey)])},onChange:function(e){var t;e.preventDefault(),N.next(["change",n,null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value])},onFocus:function(e){e.preventDefault(),N.next(["focus",n,""])}}):e}));return a.a.createElement(a.a.Fragment,null,c)},g={};!function(e){e.ToggleMemory="alt+shift+m",e.Add="ctrl+shift+a",e.MoveDown="ctrl+down",e.MoveUp="ctrl+up",e.Up="up",e.Down="down",e.Edit="ctrl+shift+e",e.Redo="ctrl+shift+z",e.Undo="ctrl+z",e.Collapse="ctrl+shift+c",e.Enter="enter",e.Remove="delete",e.Save="ctrl+s",e.ToggleScope="alt+shift+t",e.IncrementScore="alt+shift+1",e.DecrementScore="alt+shift+2",e.UpdateNumber="alt+shift+3"}(c||(c={}));try{v.a.filter=function(){return!0},Object(v.a)(Object.values(c).join(","),(function(e,t){e.preventDefault(),t.key===c.UpdateNumber&&(Object.keys(g).forEach((function(e){delete g[e]})),console.warn(g)),N.next(["keydown",fe.Keyboard,t.key])}))}catch(He){console.warn("Couldn't initialize keyboard listener")}var E,y,S=function(e,t){var n="".concat(fe.Collection,"-").concat(p());return Object(u.a)(Object(u.a)({},e),{},{collectionNodes:Object(u.a)(Object(u.a)({},e.collectionNodes),{},Object(s.a)({},n,{id:n,isEditable:!1,title:"Collection",isHighlighted:!1}))})},I=function(e){return Object.values(e.collectionNodes)},x=function(e,t){var n=I(e),c=n.findIndex((function(e){return e.isHighlighted})),o=(n.length+c-1)%n.length,a=n.map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{isHighlighted:t===o})})).reduce((function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},t.id,t))}),{});return Object(u.a)(Object(u.a)({},e),{},{collectionNodes:a})},w=function(e,t){var n=I(e),c=n.findIndex((function(e){return e.isHighlighted})),o=(n.length+c+1)%n.length,a=n.map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{isHighlighted:t===o})})).reduce((function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},t.id,t))}),{});return Object(u.a)(Object(u.a)({},e),{},{collectionNodes:a})},C=function(e,t){var n=I(e),c=n.findIndex((function(e){return e.isHighlighted}));return Object(u.a)(Object(u.a)({},e),{},{selectedCollection:n[c].id})},k=function(e,t){var n=Object(i.a)(t,3),o=(n[0],n[1],n[2]===c.Enter),a=I(e),r=a.findIndex((function(e){return e.isHighlighted})),l=a[r].isEditable;if(o&&!l)return!1;var d=a.map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{isEditable:t===r&&!e.isEditable})})).reduce((function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},t.id,t))}),{});return Object(u.a)(Object(u.a)({},e),{},{collectionNodes:d})},D=n(7),L=function e(t,n){var c=n.treeNodes[t];return c?c.children.reduce((function(t,c){return[].concat(Object(D.a)(t),[c],Object(D.a)(e(c,n)))}),[]):[]},T=function e(t,n){var c=n.treeNodes[t];return c?[].concat(Object(D.a)(e(c.parent,n)),[t]):[]},M=function(e){return H(e,(function(t){var n=e.itemSearchInput,c=!!n&&n.length>=3&&t.title.toLowerCase().includes(n.toLowerCase());return Object(u.a)(Object(u.a)({},t),{},{isHighlighted:c})}))},H=function(e,t){return Object.values(e.treeNodes).map(t).reduce((function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},t.id,t))}),{})},A=function(e,t){var n=e.selectedNode||ve,c={children:[],id:"".concat(fe.Item,"-").concat(p()),isCollapsed:!1,notes:[],parent:n,title:"title",isHighlighted:!1,isEditable:!1,indent:e.treeNodes[n].indent+1},o=e.treeNodes[n],a=Object(s.a)({},o.id,Object(u.a)(Object(u.a)({},o),{},{children:[].concat(Object(D.a)(o.children),[c.id])})),r=Object(u.a)(Object(u.a)(Object(u.a)({},e.treeNodes),a),Object(s.a)({},c.id,c));return Object(u.a)(Object(u.a)({},e),{},{treeNodes:r})},R=function(e,t){Object(i.a)(t,2)[1];var n,c=e.selectedNode,o=null===(n=e.treeNodes[c])||void 0===n?void 0:n.parent;if(!e.treeNodes[o])return e;var a=e.treeNodes[o].children.indexOf(c),r=H(e,(function(e){var t=e.id===c&&e.id!==ve;return e.id===o?Object(u.a)(Object(u.a)({},e),{},{children:e.children.filter((function(e){return e!==c}))}):t?Object(u.a)(Object(u.a)({},e),{},{parent:""}):e}));return Object(u.a)(Object(u.a)({},e),{},{selectedNode:r[o].children[Math.max(0,a-1)]||o,treeNodes:r})},U=function(e,t){var n=Object(i.a)(t,3),c=n[1];if("10"===n[2]){var o=function(e,t,n){var c=L(t,n);return[c.includes(e),c]}(c,e.selectedNode,e),a=Object(i.a)(o,2),r=a[0],l=a[1];if(r||c===e.selectedNode)return e;var d=H(e,(function(t){var n=e.treeNodes[e.selectedNode].parent;return l.includes(t.id)?Object(u.a)(Object(u.a)({},t),{},{indent:e.treeNodes[c].indent+(t.indent-e.treeNodes[e.selectedNode].indent)+1}):t.id===c?Object(u.a)(Object(u.a)({},t),{},{children:[e.selectedNode].concat(Object(D.a)(t.children.filter((function(t){return t!==e.selectedNode}))))}):t.id===n?Object(u.a)(Object(u.a)({},t),{},{children:t.children.filter((function(t){return t!==e.selectedNode}))}):t.id===e.selectedNode?Object(u.a)(Object(u.a)({},t),{},{parent:c,indent:e.treeNodes[c].indent+1}):t}));return Object(u.a)(Object(u.a)({},e),{},{treeNodes:d,selectedNode:c})}return Object(u.a)(Object(u.a)({},e),{},{selectedNode:c})},K=function(e,t){Object(i.a)(t,2)[1];var n=H(e,(function(t){if(!(t.id===e.selectedNode))return t;var n=!t.isCollapsed;return Object(u.a)(Object(u.a)({},t),{},{isCollapsed:n})}));return Object(u.a)(Object(u.a)({},e),{},{treeNodes:n})},F=function(e,t){var n=H(e,(function(t){if(!(t.id===e.selectedNode))return Object(u.a)(Object(u.a)({},t),{},{isEditable:!1});var n=!t.isEditable;return Object(u.a)(Object(u.a)({},t),{},{isEditable:n})}));return Object(u.a)(Object(u.a)({},e),{},{treeNodes:n})},z=function(e,t){var n=H(e,(function(t){if(!(t.id===e.selectedNode))return t;return Object(u.a)(Object(u.a)({},t),{},{isEditable:!1})}));return Object(u.a)(Object(u.a)({},e),{},{treeNodes:n})},J=function(e,t){var n=e.tree,c=n.length,o=(e.tree.indexOf(e.selectedNode)+1)%c;return Object(u.a)(Object(u.a)({},e),{},{selectedNode:n[o]})},V=function(e,t){var n=e.treeNodes[e.selectedNode];if(!n)return e;var c=e.treeNodes[n.parent];if(!c)return e;var o=c.children,a=o.length-1,r=c.children.indexOf(n.id);if(r===a)return e;var i=[].concat(Object(D.a)(o.slice(0,r)),[o[r+1],o[r]],Object(D.a)(o.slice(r+2))),l=H(e,(function(e){return e.id!==c.id?e:Object(u.a)(Object(u.a)({},e),{},{children:i})}));return Object(u.a)(Object(u.a)({},e),{},{treeNodes:l})},P=function(e,t){var n=e.tree,c=n.length,o=(c+(e.tree.indexOf(e.selectedNode)-1))%c;return Object(u.a)(Object(u.a)({},e),{},{selectedNode:n[o]})},B=function(e,t){var n=e.treeNodes[e.selectedNode];if(!n)return e;var c=e.treeNodes[n.parent];if(!c)return e;var o=c.children,a=c.children.indexOf(n.id);if(0===a)return e;var r=[].concat(Object(D.a)(o.slice(0,a-1)),[o[a],o[a-1]],Object(D.a)(o.slice(a+1))),i=H(e,(function(e){return e.id!==c.id?e:Object(u.a)(Object(u.a)({},e),{},{children:r})}));return Object(u.a)(Object(u.a)({},e),{},{treeNodes:i})},_=function(e,t){if(!ce.length)return e;oe.push(e.treeNodes);var n=ce.pop();return Object(u.a)(Object(u.a)({},e),{},{treeNodes:n})},q=function(e,t){if(!oe.length)return e;ce.push(e.treeNodes);var n=oe.pop();return Object(u.a)(Object(u.a)({},e),{},{treeNodes:n})},G=function(e,t){var n="".concat(fe.Note,"-").concat(p()),c={description:"Description...",title:"Title",id:n,isCollapsed:!0,isEditable:!1,isHighlighted:!1,parents:[e.selectedNode]},o=H(e,(function(t){return t.id===e.selectedNode?Object(u.a)(Object(u.a)({},t),{},{notes:[].concat(Object(D.a)(t.notes),[n])}):t}));return Object(u.a)(Object(u.a)({},e),{},{treeNodes:o,selectedNote:c.id,noteNodes:Object(u.a)(Object(s.a)({},c.id,c),e.noteNodes)})},Q=function(e,t){var n=e.notes,c=n.length,o=(e.notes.indexOf(e.selectedNote)+1)%c;return Object(u.a)(Object(u.a)({},e),{},{selectedNote:n[o]})},W=function(e,t){var n=e.notes,c=n.length,o=(c+e.notes.indexOf(e.selectedNote)-1)%c;return Object(u.a)(Object(u.a)({},e),{},{selectedNote:n[o]})},Z=function(e,t){var n=e.noteNodes[e.selectedNote],c=Object(u.a)(Object(u.a)({},e.noteNodes),{},Object(s.a)({},e.selectedNote,Object(u.a)(Object(u.a)({},n),{},{isCollapsed:!n.isCollapsed})));return Object(u.a)(Object(u.a)({},e),{},{noteNodes:c})},Y=function(e){var t=e.noteNodes[e.selectedNote],n=Object(u.a)(Object(u.a)({},e.noteNodes),{},Object(s.a)({},e.selectedNote,Object(u.a)(Object(u.a)({},t),{},{parents:[]}))),c=H(e,(function(n){return t.parents.includes(n.id)?Object(u.a)(Object(u.a)({},n),{},{notes:n.notes.filter((function(t){return t!==e.selectedNote}))}):n})),o=Object(O.without)(e.notes,e.selectedNote);return Object(u.a)(Object(u.a)({},e),{},{selectedNote:o[0],notes:o,noteNodes:n,treeNodes:c})},X=function(e){var t=e.noteNodes[e.selectedNote],n=Object(u.a)(Object(u.a)({},te(e,(function(e){return Object(u.a)(Object(u.a)({},e),{},{isEditable:!1})}))),{},Object(s.a)({},e.selectedNote,Object(u.a)(Object(u.a)({},t),{},{isEditable:!t.isEditable})));return Object(u.a)(Object(u.a)({},e),{},{noteNodes:n})},$=function(e){var t=e.noteNodes[e.selectedNote],n=Object(u.a)(Object(u.a)({},te(e,(function(e){return Object(u.a)(Object(u.a)({},e),{},{isEditable:!1})}))),{},Object(s.a)({},e.selectedNote,Object(u.a)(Object(u.a)({},t),{},{score:Math.max((t.score||0)+1,0)})));return Object(u.a)(Object(u.a)({},e),{},{noteNodes:n})},ee=function(e){var t=e.noteNodes[e.selectedNote],n=Object(u.a)(Object(u.a)({},te(e,(function(e){return Object(u.a)(Object(u.a)({},e),{},{isEditable:!1})}))),{},Object(s.a)({},e.selectedNote,Object(u.a)(Object(u.a)({},t),{},{score:Math.max((t.score||0)-1,0)})));return Object(u.a)(Object(u.a)({},e),{},{noteNodes:n})},te=function(e,t){return Object.values(e.noteNodes).map(t).reduce((function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},t.id,t))}),{})},ne=function(e){var t=[e.selectedNode].concat(Object(D.a)(L(e.selectedNode,e))),n=Object.values(e.noteNodes).reduce((function(n,c){var o=Object(O.intersection)(t,c.parents),a=e.noteSearchInput.length>=3&&c.title.toLowerCase().includes(e.noteSearchInput.toLowerCase());g[c.id]=g[c.id]||Math.random();var r,i=g[c.id]<=(r=c.score||0,1/(Math.pow(r||1,.9)+1)),l=e.noteSearchInput.length<3&&o.length>0,d=c.id===e.selectedNote;return(e.isMemory?i&&l:d||a||l)?[].concat(Object(D.a)(n),[c.id]):n}),[]);return Object(u.a)(Object(u.a)({},e),{},{notes:n})},ce=[],oe=[],ae=function(e){return function(t){var n=Object(i.a)(t,3),o=n[0],a=n[1],r=n[2],l="keydown"===o&&a===fe.Keyboard&&r===c.ToggleScope&&function(e,t){return Object(u.a)(Object(u.a)({},e),{},{scope:Object(O.without)(he,e.scope)[0]})}(e),d="keydown"===o&&a===fe.Keyboard&&r===c.ToggleMemory&&function(e){return Object(u.a)(Object(u.a)({},e),{},{isMemory:!e.isMemory})}(e),s=l||d||e;if("tree"===s.scope){var b="change"===o&&a.includes(fe.Item)&&function(e,t){var n=Object(i.a)(t,3),c=n[1],o=n[2],a=H(e,(function(e){return c===e.id?Object(u.a)(Object(u.a)({},e),{},{title:o}):e}));return Object(u.a)(Object(u.a)({},e),{},{treeNodes:a})}(s,[o,a,r]),j="click"===o&&a.includes(fe.Item)&&U(s,[o,a,r]),f="change"===o&&a===fe.SearchItemsInput&&function(e,t){var n=Object(i.a)(t,3)[2];return Object(u.a)(Object(u.a)({},e),{},{itemSearchInput:n})}(s,[o,a,r]),p=h([[c.Add,A],[c.Remove,R],[c.MoveDown,V],[c.MoveUp,B]])(s,[o,a,r])||j||b;p&&(oe.length=0,ce.push(s.treeNodes));var v=h([[c.Undo,_],[c.Redo,q],[c.Up,P],[c.Down,J],[c.Collapse,K],[c.Enter,z],[c.Edit,F]])(s,[o,a,r])||f||s,N=p||v;return ne(function(e){var t=[ve].concat(Object(D.a)(L(ve,e))),n=Object.values(e.treeNodes).filter((function(e){return e.isHighlighted})).map((function(e){return e.id})),c=n.reduce((function(t,n){return[].concat(Object(D.a)(t),Object(D.a)(T(n,e)))}),Object(D.a)(n)),o=T(e.selectedNode,e),a=Object.values(e.treeNodes).filter((function(e){return e.isCollapsed})).map((function(e){return e.id})).reduce((function(t,n){return[].concat(Object(D.a)(t),Object(D.a)(L(n,e)))}),[]);if(!e.itemSearchInput||e.itemSearchInput.length<3){var r=O.without.apply(void 0,[a].concat(Object(D.a)(c),Object(D.a)(o))),i=O.without.apply(void 0,[t].concat(Object(D.a)(r)));return Object(u.a)(Object(u.a)({},e),{},{tree:i})}return Object(u.a)(Object(u.a)({},e),{},{tree:Object(O.intersection)(t,Object(O.union)(c,o))})}(Object(u.a)(Object(u.a)({},N),{},{treeNodes:M(N)})))}var m="change"===o&&a===fe.SearchNotesInput&&function(e,t){var n=Object(i.a)(t,3)[2];return Object(u.a)(Object(u.a)({},e),{},{noteSearchInput:n})}(s,[o,a,r]),g="change"===o&&a.includes(fe.NoteTitle)&&function(e,t){var n=Object(i.a)(t,3),c=n[1],o=n[2],a=te(e,(function(e){return c.replace(fe.NoteTitle,"")===e.id.replace(fe.Note,"")?Object(u.a)(Object(u.a)({},e),{},{title:o}):e}));return Object(u.a)(Object(u.a)({},e),{},{noteNodes:a})}(s,[o,a,r]),E="change"===o&&a.includes(fe.NoteDescription)&&function(e,t){var n=Object(i.a)(t,3),c=n[1],o=n[2],a=te(e,(function(e){return c.replace(fe.NoteDescription,"")===e.id.replace(fe.Note,"")?Object(u.a)(Object(u.a)({},e),{},{description:o}):e}));return Object(u.a)(Object(u.a)({},e),{},{noteNodes:a})}(s,[o,a,r]),y="click"===o&&a.includes(fe.Item)&&function(e,t){var n=Object(i.a)(t,2)[1],c=e.notes[e.notes.indexOf(e.selectedNote)],o=te(e,(function(e){return c.replace(fe.Note,"")===e.id.replace(fe.Note,"")?Object(u.a)(Object(u.a)({},e),{},{parents:e.parents.includes(n)?e.parents.filter((function(e){return e!==n})):[].concat(Object(D.a)(e.parents),[n])}):e}));return Object(u.a)(Object(u.a)({},e),{},{noteNodes:o})}(s,[o,a,r]);return ne(g||E||y||h([[c.Add,G],[c.Up,W],[c.Down,Q],[c.Collapse,Z],[c.Remove,Y],[c.Edit,X],[c.IncrementScore,$],[c.DecrementScore,ee]])(s,[o,a,r])||m||s)}},re=function(e){return function(t){var n=Object(i.a)(t,3),o=n[0],a=n[1],r=n[2],l="change"===o&&a.includes(fe.Collection)&&function(e,t){var n=Object(i.a)(t,3),c=n[1],o=n[2],a=I(e),r=a.findIndex((function(e){return e.id===c})),l=a.map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{title:t===r?o:e.title})})).reduce((function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},t.id,t))}),{});return Object(u.a)(Object(u.a)({},e),{},{collectionNodes:l})}(e,[o,a,r]),d="change"===o&&a===fe.SearchCollectionsInput&&function(e,t){var n=Object(i.a)(t,3)[2];return Object(u.a)(Object(u.a)({},e),{},{collectionSearchInput:n})}(e,[o,a,r]);return function(e){return Object(u.a)(Object(u.a)({},e),{},{collections:Object.values(e.collectionNodes).filter((function(t){return(e.collectionSearchInput||"").length<3||e.collectionSearchInput&&t.title.toLowerCase().includes(e.collectionSearchInput.toLowerCase())})).map((function(e){return e.id}))})}(h([[c.Add,S],[c.Down,w],[c.Up,x],[c.Edit,k],[c.Enter,k],[c.Enter,C]])(e,t)||l||d||e)}},ie=function(e){return function(t){var n,c=Object(i.a)(t,3),o=(c[0],c[1]),a=c[2];if(o===fe.State&&e.route===pe.Collection){var r=JSON.parse(a),l=Object.keys(r).map((function(e){return{id:e,isEditable:!1,isHighlighted:!1,title:r[e].title}})).reduce((function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},t.id,t))}),{});return Object(u.a)(Object(u.a)({},Ee),{},{isLoading:!1,collection:Object(u.a)(Object(u.a)({},Ee.collection),{},{collectionNodes:l,collections:Object.keys(l)})})}if(o===fe.State&&e.route===pe.Tree&&e.collection.selectedCollection){var d=JSON.parse(a)[e.collection.selectedCollection];return Object(u.a)(Object(u.a)({},me),{},{isLoading:!1,tree:d||me.tree,collection:Object(u.a)({},e.collection)})}if(o===fe.Route&&a)return Object(u.a)(Object(u.a)({},e),{},{route:a});var b=e.route===pe.Tree?ae(e.tree)(t):e.tree,O=e.route===pe.Collection?re(e.collection)(t):e.collection,j=O.selectedCollection?pe.Tree:pe.Collection,f=j!==e.route,p=O.selectedCollection&&(null===(n=O.collectionNodes[O.selectedCollection])||void 0===n?void 0:n.title)||"Tree",h=Object(u.a)(Object(u.a)({},e),{},{route:j,tree:Object(u.a)(Object(u.a)({},b),{},{title:p}),collection:O,isLoading:f});return console.warn(h),h}},le=n(34);n(98),n(100);le.a.initializeApp({apiKey:"AIzaSyA3kMxazy633uQ4BKTvWYF8hFZEl0PP_as",authDomain:"tree-of-abstraction.firebaseapp.com",databaseURL:"https://tree-of-abstraction.firebaseio.com",projectId:"tree-of-abstraction",storageBucket:"tree-of-abstraction.appspot.com",messagingSenderId:"161683871914",appId:"1:161683871914:web:7cd83dc09d276698c8d8d3",measurementId:"G-SPG691QK9Z"});var de=le.a.database().ref(),ue=function(){return de.child("collection").get().then((function(e){if(e.exists())return console.log(e.val()),e.val();console.log("No data available")})).catch((function(e){console.error(e)}))},se=function(e){return Object.entries(e).map((function(e){var t=Object(i.a)(e,2),n=t[0],c=t[1];return[n,Object(u.a)(Object(u.a)({},c),{},{noteNodes:c.noteNodes||{},notes:c.notes||[],tree:c.tree||[],treeNodes:c.treeNodes&&Object.values(c.treeNodes).map((function(e){return Object(u.a)(Object(u.a)({},e),{},{children:e.children||[],notes:e.notes||[]})})).reduce((function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},t.id,t))}),{})||{}})]})).reduce((function(e,t){var n=Object(i.a)(t,2),c=n[0],o=n[1];return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},c,o))}),{})};window.addEventListener("load",(function(){N.subscribe((function(e){var t=Object(i.a)(e,3),n=t[0],o=t[1],a=t[2];if("keydown"===n&&a===c.Save)N.next(["io",fe.Save,"true"]);else if("io"===n&&o===fe.Save&&"true"===a){var r=ye.getValue(),l=r.collection.selectedCollection,d=r.tree;l?function(e,t,n){le.a.database().ref("collection/"+e).set(Object(u.a)({},t)).then(n).catch(n)}(l,d,(function(){N.next(["io",fe.Save,"false"])})):N.next(["io",fe.Save,"false"])}}))}));var be=document.cookie.split("; ").map((function(e){return e.split("=")})),Oe=(null===(E=be.find((function(e){return"email"===Object(i.a)(e,1)[0]})))||void 0===E?void 0:E[1])||"",je=(null===(y=be.find((function(e){return"password"===Object(i.a)(e,1)[0]})))||void 0===y?void 0:y[1])||"";le.a.auth().signInWithEmailAndPassword(Oe,je).then((function(e){ue().then((function(e){console.info(e),e&&N.next(["io",fe.State,JSON.stringify(se(e))])})),document.addEventListener("route",(function(){ue().then((function(e){console.info(e),e&&N.next(["io",fe.State,JSON.stringify(se(e))])}))}))})).catch((function(e){var t=e.code,n=e.message;console.error(t,n)}));var fe;n(85);!function(e){e.AddItemInput="add-item-input",e.Item="item-element",e.SearchItemsInput="search-items-input",e.Note="note-element",e.NoteTitle="note-title",e.NoteDescription="note-description",e.SearchNotesInput="search-notes-input",e.Keyboard="keyboard",e.Collection="collection-element",e.SearchCollectionsInput="search-collections-input",e.Save="save-io",e.Load="load-io",e.State="collections-io",e.Tree="tree-io",e.Route="route-io"}(fe||(fe={}));var pe,he=["tree","notes"],ve="".concat(fe.Item,"-root");!function(e){e.Collection="Collection",e.Tree="Tree"}(pe||(pe={}));var Ne={id:ve,children:[],notes:[],isCollapsed:!1,isHighlighted:!1,isEditable:!1,parent:"",title:"ROOT",indent:0},me={isLoading:!1,route:pe.Tree,collection:{collectionNodes:{},selectedCollection:"test",collectionSearchInput:"",collections:[]},tree:{title:"Tree",scope:he[0],treeNodes:Object(s.a)({},ve,Ne),tree:[ve],selectedNode:ve,itemSearchInput:"",isMemory:!1,noteNodes:{},notes:[],selectedNote:"",noteSearchInput:""}},ge=Object(u.a)(Object(u.a)({},me),{},{route:pe.Collection,collection:Object(u.a)(Object(u.a)({},me.collection),{},{selectedCollection:void 0})}),Ee=Object(u.a)(Object(u.a)({},ge),{},{isLoading:!0}),ye=new b.a(Ee);window.addEventListener("load",(function(){N.subscribe((function(e){var t=ye.getValue(),n=ie(t)(e);console.info(e,n),ye.next(n)}))}));Se=ie,Ie=me;var Se,Ie,xe=function(e){var t=e.state.collection;return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"black"},className:"container"},a.a.createElement("div",null,a.a.createElement(m,{id:fe.SearchCollectionsInput},a.a.createElement("input",{autoFocus:!0,placeholder:"Search",value:t.collectionSearchInput}))),a.a.createElement("ul",null,t.collections.map((function(e){var n=t.collectionNodes[e];return a.a.createElement("li",{key:e,style:{marginLeft:"32px",backgroundColor:n.isHighlighted?"grey":"unset"}},a.a.createElement(m,{key:e,id:"".concat(fe.Collection,"-").concat(e.replace("".concat(fe.Collection,"-"),""))},!n.isEditable&&a.a.createElement("span",null,n.title),n.isEditable&&a.a.createElement("input",{autoFocus:!0,value:n.title})))}))))},we=function(){return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",position:"fixed",background:"rgba(0, 0, 0, 0.5)",color:"white"}},a.a.createElement("p",null,"Loading..."))},Ce=n(86),ke=n.n(Ce),De=function(e){var t,n=e.state.tree;return Object(o.useEffect)((function(){var e=n.selectedNode&&document.querySelector("#".concat(n.selectedNode)),t=n.selectedNote&&document.querySelector("#".concat(n.selectedNote));e&&e.scrollIntoView(),t&&t.scrollIntoView()}),[n.selectedNode,n.selectedNote]),a.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"100vh",overflow:"hidden",background:"black",border:n.isMemory?"4px solid red":"unset"},className:"container"},a.a.createElement("div",{style:{opacity:"tree"===n.scope?"100%":"50%",display:"flex",flexDirection:"column",width:"50%",borderRight:"2px dashed black",height:"100%",background:"#333",overflow:"scroll"}},a.a.createElement("div",{style:{display:"flex",position:"fixed",top:0}},a.a.createElement(m,{id:fe.SearchItemsInput},a.a.createElement("input",{autoFocus:!0,placeholder:"Search",value:n.itemSearchInput}))),a.a.createElement("br",null),a.a.createElement("ul",null,n.tree.map((function(e){var t=n.treeNodes[e];return a.a.createElement("li",{id:e,key:e,style:{marginLeft:32*t.indent,backgroundColor:(t.isHighlighted?"orange":t.id===n.selectedNode&&"black")||"unset"}},a.a.createElement(m,{key:e,id:"".concat(fe.Item,"-").concat(e.replace("".concat(fe.Item,"-"),""))},!t.isEditable&&a.a.createElement("span",null,t.title),t.isEditable&&a.a.createElement("input",{autoFocus:!0,value:t.title}))," ",a.a.createElement("span",null,t.isCollapsed?"(...)":""))})))),a.a.createElement("div",{style:{display:"flex",opacity:"notes"===n.scope?"100%":"50%",flexDirection:"column",width:"50%",borderRight:"2px dashed black",background:"#333",height:"100%",overflow:"scroll"}},a.a.createElement("div",{style:{display:"flex",position:"fixed",top:0}},a.a.createElement(m,{id:fe.SearchNotesInput},a.a.createElement("input",{autoFocus:!0,placeholder:"Search",value:n.noteSearchInput}))),a.a.createElement("br",null),a.a.createElement("ul",null,null===(t=n.notes)||void 0===t?void 0:t.map((function(e){var t,c=null===(t=n.noteNodes)||void 0===t?void 0:t[e];return c?a.a.createElement("li",{id:e,key:e,style:{padding:"8px",background:e===n.selectedNote?"black":"unset"}},a.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%"}},a.a.createElement(m,{key:e,id:"".concat(fe.Note,"-").concat(e.replace("".concat(fe.Note,"-"),""))},!c.isEditable&&a.a.createElement("p",null,c.title),c.parents.map((function(e){return a.a.createElement("i",{key:e},n.treeNodes[e].title)})),!c.isEditable&&!c.isCollapsed&&a.a.createElement("p",{dangerouslySetInnerHTML:{__html:ke()(c.description)}})),c.isEditable&&a.a.createElement(m,{id:"".concat(fe.NoteTitle,"-").concat(e.replace("".concat(fe.Note,"-"),""))},a.a.createElement("input",{value:c.title})),c.isEditable&&a.a.createElement(m,{id:"".concat(fe.NoteDescription,"-").concat(e.replace("".concat(fe.Note,"-"),""))},a.a.createElement("textarea",{rows:4,cols:50,value:c.description})))):null})))))},Le=function(){var e=j(ye),t=Object(i.a)(e,1)[0],n=Object(l.f)(),c=n.location.pathname;Object(l.g)().id;return o.useEffect((function(){if(c){var e="/"===c?pe.Collection:pe.Tree;document.dispatchEvent(new CustomEvent("route")),N.next(["io",fe.Load,"true"]),N.next(["io",fe.Route,e])}}),[c]),o.useEffect((function(){n.push(t.route!==pe.Collection&&t.collection.selectedCollection?"../tree/".concat(t.collection.selectedCollection):"../")}),[t.route]),null};function Te(){var e=j(ye),t=Object(i.a)(e,1)[0];return o.createElement("div",{className:"App"},o.createElement(d.a,null,t.isLoading&&o.createElement(we,null),o.createElement(Le,null),o.createElement(l.c,null,o.createElement(l.a,{exact:!0,path:"/"},o.createElement(xe,{state:t})),o.createElement(l.a,{path:"/tree/:id"},o.createElement(De,{state:t})))))}var Me=document.getElementById("root");Object(r.render)(o.createElement(Te,null),Me)},46:function(e,t){},47:function(e,t){},71:function(e,t){},77:function(e,t){},91:function(e,t,n){e.exports=n(154)},96:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.5ba02712.chunk.js.map