
function contents(opts) {
  return (
    [
      {x: 465, y: 400, type:'link', path: '/Applications'},
      {x: 210, y: 400, type: 'file', path: opts.appPath}
    ]
  );
}

module.exports = {
  "packagerConfig": {
    "icon": "src/assets/fav"
  },
  "publishers": [
    {
      "name": "@electron-forge/publisher-github",
      "config": {
        "repository": {
          "owner": "TCIT",
          "name": "electron-app"
        }
      }
    }
  ],
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "Agri"
      }
    },
    {
      "name": "@electron-forge/maker-dmg",
      "config": {
        "icon": "./src/assets/fav.icns",
        "name": "Agri",
        "title": "Instalador agri",
        "background": "./src/assets/background.png",
        "format": "ULFO",
        "overwrite": true,
        "contents": contents
      }
    },
    // {
    //   "name": "@electron-forge/maker-zip",
    //   "platforms": [
    //     "darwin"
    //   ]
    // },
    {
      "name": "@electron-forge/maker-deb",
      "config": {}
    },
    {
      "name": "@electron-forge/maker-rpm",
      "config": {}
    }
  ]
};
