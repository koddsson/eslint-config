# eslint-config

This is my eslint configuration. There are many like it but this is mine.

```sh
npm install --save-dev eslint @koddsson/eslint-config
```

Add this to your package.json

```json
  "scripts": {
    "lint": "eslint \"src/**/*.{js,mjs,ts,mts}\""
  },
  "eslintConfig": {
    "extends": [
      "@koddsson/eslint-config"
    ]
  },
```
