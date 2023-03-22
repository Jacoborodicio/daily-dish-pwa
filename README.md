# Daily Dishes

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Application to deal with the day a day cooking/eating needs.

The application have two different sections:

1. A library of dishes divided in categories (such as time of preparation, calories...)
2. A dish recommender that will give you the best suggestions depending on your preferences.


---

Technical overview:
- 

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

|  **Name** | **Type**  | **Required**  | **Example**  |  **Description** |
|---|---|---|---|---|
|  currentFiles | array  | Yes  | `[{id: 123 // not required, name: "filename.txt", downloadName: "when the file has a different name in file system" // default is name property, uploadedBy: "Varij Kapil", uploadedAt: 13:11:2020T12:30:22}]`  |   |
|  onFileUpload |  func | Yes  | `(fieldType, file)`  |   |
|  onFileDelete | func  | Yes  | `(fieldType, fileObject)`  |   |
|  onFileDownload | func  | Yes  | `(fieldType, fileObject)`  |   |
|  canDelete | boolean  | Yes  | `true/false`  |   |
|  canDownload | boolean  | Yes  | `true/false`  |   |
|  canUpload | boolean  | Yes  | `true/false`  |   |
|  canView | boolean  | Yes  | `true/false`  |   |
|  fieldType | string  | Yes  | `technical`  |   |
|  title | string  | Yes  | `"Title for the popup"`  |   |
|  error | boolean  | Yes  | `true/false`  |   |
|  version | any  | No  | `V 1.0 or 1.0.0`  |   |
|  filesWaitingUpload | array  | No  | `['file_name.txt', 'another_file.txt']`  |   |
|  showSnackBar |  func | No  |  `('title', 'message', 'success/error/warning/info', 'redirect: true/false')` |   |
|  fileViewerUrl | string  | No  | `https://www.google.com/path/to/image/folder/`  |   |
|  showButtonsInViewer |  boolean | No  | `true/false`  |   |
|  viewerStyleContent | object  | No  | `{width: '100%'}`  |   |
|  viewerStyleWrapper | object  | No  | `{minHeight: 700, height: 700, width: 550, minWidth: 550}`  |   |