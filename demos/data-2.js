var data = {"type":"app","index":2,"htmlFileName":"app-2.html","sources":[{"mode":"js","code":"/** React + MUI + mobx*/\nimport * as React from 'react';\nimport { render, Button } from './mui';\nimport { observer } from 'mobx-react';\n\n/** Field */\nimport { Field } from './field';\n\n/** FieldState */\nimport { FieldState } from '../../index';\nconst fieldState = new FieldState({\n  value: '',\n}).validators([(val) => val !== 'foo' && \"I only allow 'foo'\"]);\n\nrender(() => <div>\n  <Field\n    id=\"first\"\n    label=\"The magic word is foo\"\n    fieldState={fieldState} />\n</div>);\n"}],"height":"200px"}