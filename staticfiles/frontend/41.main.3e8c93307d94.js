(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"./src/components/pages/Notifications.js":
/*!***********************************************!*\
  !*** ./src/components/pages/Notifications.js ***!
  \***********************************************/
/*! exports provided: default */function(e,s){throw new Error('Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/src/components/pages/Notifications.js: Unexpected token, expected "," (91:17)\n\n[0m [90m 89 | [39m        [36mif[39m (networkError) { console[33m.[39mlog([32m`[Network error]: ${networkError}`[39m) }[33m;[39m[0m\n[0m [90m 90 | [39m      }}[33m,[39m[0m\n[0m[31m[1m>[22m[39m[90m 91 | [39m      updateQuery[33m:[39m (prev[33m,[39m { subscriptionData }) [33m=>[39m {[0m\n[0m [90m    | [39m                 [31m[1m^[22m[39m[0m\n[0m [90m 92 | [39m        console[33m.[39mlog(prev[33m,[39m subscriptionData)[33m;[39m[0m\n[0m [90m 93 | [39m        [36mif[39m ([33m![39msubscriptionData[33m.[39mdata) [36mreturn[39m prev[33m;[39m[0m\n[0m [90m 94 | [39m        [90m/*const newNotificationItem = subscriptionData.data.notificationCreated;[39m[0m\n    at Object._raise (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:763:17)\n    at Object.raiseWithData (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:756:17)\n    at Object.raise (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:750:17)\n    at Object.unexpected (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:8930:16)\n    at Object.expect (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:8916:28)\n    at Object.parseCallExpressionArguments (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9981:14)\n    at Object.parseCoverCallAndAsyncArrowHead (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9908:29)\n    at Object.parseSubscript (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9844:19)\n    at Object.parseSubscripts (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9815:19)\n    at Object.parseExprSubscripts (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9798:17)\n    at Object.parseUpdate (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9772:21)\n    at Object.parseMaybeUnary (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9761:17)\n    at Object.parseExprOps (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9631:23)\n    at Object.parseMaybeConditional (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9605:23)\n    at Object.parseMaybeAssign (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9568:21)\n    at Object.parseExpression (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9520:23)\n    at Object.parseStatementContent (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:11479:23)\n    at Object.parseStatement (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:11348:17)\n    at Object.parseBlockOrModuleBlockBody (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:11930:25)\n    at Object.parseBlockBody (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:11916:10)\n    at Object.parseBlock (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:11900:10)\n    at Object.parseFunctionBody (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:10896:24)\n    at Object.parseArrowExpression (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:10865:10)\n    at Object.parseParenAndDistinguishExpression (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:10449:12)\n    at Object.parseExprAtom (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:10125:21)\n    at Object.parseExprAtom (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:4674:20)\n    at Object.parseExprSubscripts (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9792:23)\n    at Object.parseUpdate (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9772:21)\n    at Object.parseMaybeUnary (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9761:17)\n    at Object.parseExprOps (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9631:23)\n    at Object.parseMaybeConditional (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9605:23)\n    at Object.parseMaybeAssign (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:9568:21)\n    at Object.parseVar (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:12014:26)\n    at Object.parseVarStatement (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:11823:10)\n    at Object.parseStatementContent (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:11415:21)\n    at Object.parseStatement (/mnt/c/Users/Mimi/Desktop/Projects/feel/project/frontend/node_modules/@babel/parser/lib/index.js:11348:17)')}}]);
//# sourceMappingURL=41.main.js.map