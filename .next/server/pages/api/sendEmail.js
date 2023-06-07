"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendEmail";
exports.ids = ["pages/api/sendEmail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/sendEmail.js":
/*!************************************!*\
  !*** ./src/pages/api/sendEmail.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handlerMail)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\n\nconst sendEmail = async (formData)=>{\n    try {\n        const response = await axios.post(\"/api/sendEmail\", formData);\n        if (response.status === 200) {\n            setMailSubmitted(true);\n        }\n    } catch (error) {\n        console.error(\"Error sending email:\", error);\n    }\n};\nasync function handlerMail(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).end(); // Handle only POST requests\n    }\n    try {\n        const transporter = nodemailer.createTransport({\n            host: \"smtp.elasticemail.com\",\n            port: 2525,\n            secure: false,\n            auth: {\n                user: \"ecosolutiontunisie@gmail.com\",\n                pass: \"A6F99F511AD03AD8608DAF819C5A9F20D466\" // SMTP password\n            }\n        });\n        const emailTemplatePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"public\", \"emailTemplate.html\");\n        const mailTemplate = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(emailTemplatePath, \"utf-8\");\n        const modifiedTemplate = mailTemplate.replace(\"{{prenom}}\", req.body.prenom).replace(\"{{nom}}\", req.body.nom).replace(\"{{tel}}\", req.body.tel).replace(\"{{age}}\", req.body.age).replace(\"{{mail}}\", req.body.mail).replace(\"{{adresse}}\", req.body.adresse).replace(\"{{fonction}}\", req.body.fonction).replace(\"{{type}}\", req.body.type).replace(\"{{technologie}}\", req.body.technologie).replace(\"{{place}}\", req.body.place).replace(\"{{longueur}}\", req.body.longueur).replace(\"{{largeur}}\", req.body.largeur).replace(\"{{orientation}}\", req.body.orientation).replace(\"{{puissance}}\", req.body.puissance).replace(\"{{region}}\", req.body.region);\n        const mailOptions = {\n            from: \"ecosolutiontunisie@gmail.com\",\n            to: \"jacerafayabzeouech@gmail.com\",\n            subject: \"Formulaire de devis\",\n            html: modifiedTemplate,\n            attachments: [\n                {\n                    filename: \"logo.png\",\n                    path: path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"public\", \"images\", \"logo.png\"),\n                    cid: \"yourLogo\"\n                }\n            ]\n        };\n        await transporter.sendMail(mailOptions);\n        return res.status(200).json({\n            message: \"Email sent successfully\"\n        });\n    } catch (error) {\n        return res.status(500).json({\n            message: \"Failed to send email\"\n        });\n    }\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvc29sdXRpb24vLi9zcmMvcGFnZXMvYXBpL3NlbmRFbWFpbC5qcz82MGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJyk7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IHNlbmRFbWFpbCA9IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9zZW5kRW1haWwnLCBmb3JtRGF0YSk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHNldE1haWxTdWJtaXR0ZWQodHJ1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlbmRpbmcgZW1haWw6JywgZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyTWFpbCAocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7IC8vIEhhbmRsZSBvbmx5IFBPU1QgcmVxdWVzdHNcbiAgfVxuICAgIFxuICB0cnkge1xuICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgaG9zdDogJ3NtdHAuZWxhc3RpY2VtYWlsLmNvbScsXG4gICAgICBwb3J0OiAyNTI1LFxuICAgICAgc2VjdXJlOiBmYWxzZSwgLy8gdHJ1ZSBmb3IgNDY1IHBvcnQsIGZhbHNlIGZvciBvdGhlciBwb3J0c1xuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiAnZWNvc29sdXRpb250dW5pc2llQGdtYWlsLmNvbScsIC8vIFNNVFAgdXNlcm5hbWVcbiAgICAgICAgcGFzczogJ0E2Rjk5RjUxMUFEMDNBRDg2MDhEQUY4MTlDNUE5RjIwRDQ2NicgLy8gU01UUCBwYXNzd29yZFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBlbWFpbFRlbXBsYXRlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ2VtYWlsVGVtcGxhdGUuaHRtbCcpO1xuICAgIGNvbnN0IG1haWxUZW1wbGF0ZSA9IGZzLnJlYWRGaWxlU3luYyhlbWFpbFRlbXBsYXRlUGF0aCwndXRmLTgnKTtcbiAgICBjb25zdCBtb2RpZmllZFRlbXBsYXRlID0gbWFpbFRlbXBsYXRlXG4gICAgLnJlcGxhY2UoJ3t7cHJlbm9tfX0nLCByZXEuYm9keS5wcmVub20pXG4gICAgLnJlcGxhY2UoJ3t7bm9tfX0nLCByZXEuYm9keS5ub20pXG4gICAgLnJlcGxhY2UoJ3t7dGVsfX0nLCByZXEuYm9keS50ZWwpXG4gICAgLnJlcGxhY2UoJ3t7YWdlfX0nLCByZXEuYm9keS5hZ2UpXG4gICAgLnJlcGxhY2UoJ3t7bWFpbH19JywgcmVxLmJvZHkubWFpbClcbiAgICAucmVwbGFjZSgne3thZHJlc3NlfX0nLCByZXEuYm9keS5hZHJlc3NlKVxuICAgIC5yZXBsYWNlKCd7e2ZvbmN0aW9ufX0nLCByZXEuYm9keS5mb25jdGlvbilcbiAgICAucmVwbGFjZSgne3t0eXBlfX0nLCByZXEuYm9keS50eXBlKVxuICAgIC5yZXBsYWNlKCd7e3RlY2hub2xvZ2llfX0nLCByZXEuYm9keS50ZWNobm9sb2dpZSlcbiAgICAucmVwbGFjZSgne3twbGFjZX19JywgcmVxLmJvZHkucGxhY2UpXG4gICAgLnJlcGxhY2UoJ3t7bG9uZ3VldXJ9fScsIHJlcS5ib2R5Lmxvbmd1ZXVyKVxuICAgIC5yZXBsYWNlKCd7e2xhcmdldXJ9fScsIHJlcS5ib2R5LmxhcmdldXIpXG4gICAgLnJlcGxhY2UoJ3t7b3JpZW50YXRpb259fScsIHJlcS5ib2R5Lm9yaWVudGF0aW9uKVxuICAgIC5yZXBsYWNlKCd7e3B1aXNzYW5jZX19JywgcmVxLmJvZHkucHVpc3NhbmNlKVxuICAgIC5yZXBsYWNlKCd7e3JlZ2lvbn19JywgcmVxLmJvZHkucmVnaW9uKTtcblxuICAgIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgICAgZnJvbTogJ2Vjb3NvbHV0aW9udHVuaXNpZUBnbWFpbC5jb20nLFxuICAgICAgdG86ICdqYWNlcmFmYXlhYnplb3VlY2hAZ21haWwuY29tJyxcbiAgICAgIHN1YmplY3Q6ICdGb3JtdWxhaXJlIGRlIGRldmlzJyxcbiAgICAgIGh0bWw6IG1vZGlmaWVkVGVtcGxhdGUsIC8vIEJvZHkgdGV4dFxuICAgICAgYXR0YWNobWVudHM6W1xuICAgICAgICB7XG4gICAgICAgICAgZmlsZW5hbWU6ICdsb2dvLnBuZycsXG4gICAgICAgICAgcGF0aDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnLCAnaW1hZ2VzJywgJ2xvZ28ucG5nJyksXG4gICAgICAgICAgY2lkOiAneW91ckxvZ28nLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgICAvLyBodG1sOiAnPGgxPm1hcmhiZSBkamFzczwvaDE+JywgLy8gQm9keSBIVE1MIChvcHRpb25hbClcbiAgICB9O1xuICAgIFxuICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseScgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0ZhaWxlZCB0byBzZW5kIGVtYWlsJyB9KTtcbiAgfVxufTsiXSwibmFtZXMiOlsibm9kZW1haWxlciIsInJlcXVpcmUiLCJmcyIsInBhdGgiLCJzZW5kRW1haWwiLCJmb3JtRGF0YSIsInJlc3BvbnNlIiwiYXhpb3MiLCJwb3N0Iiwic3RhdHVzIiwic2V0TWFpbFN1Ym1pdHRlZCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZXJNYWlsIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW5kIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwicGFzcyIsImVtYWlsVGVtcGxhdGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJtYWlsVGVtcGxhdGUiLCJyZWFkRmlsZVN5bmMiLCJtb2RpZmllZFRlbXBsYXRlIiwicmVwbGFjZSIsImJvZHkiLCJwcmVub20iLCJub20iLCJ0ZWwiLCJhZ2UiLCJtYWlsIiwiYWRyZXNzZSIsImZvbmN0aW9uIiwidHlwZSIsInRlY2hub2xvZ2llIiwicGxhY2UiLCJsb25ndWV1ciIsImxhcmdldXIiLCJvcmllbnRhdGlvbiIsInB1aXNzYW5jZSIsInJlZ2lvbiIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJhdHRhY2htZW50cyIsImZpbGVuYW1lIiwiY2lkIiwic2VuZE1haWwiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/sendEmail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/sendEmail.js"));
module.exports = __webpack_exports__;

})();