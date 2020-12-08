// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "cdcatcp-recall",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "CDCATCP-recall",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "start_screen",
      "timeout": "1000"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "n_recall": "1"
        },
        {
          "n_recall": "2"
        },
        {
          "n_recall": "3"
        },
        {
          "n_recall": "4"
        },
        {
          "n_recall": "5"
        },
        {
          "n_recall": "6"
        },
        {
          "n_recall": "7"
        },
        {
          "n_recall": "8"
        },
        {
          "n_recall": "9"
        },
        {
          "n_recall": "10"
        },
        {
          "n_recall": "11"
        },
        {
          "n_recall": "12"
        },
        {
          "n_recall": "13"
        },
        {
          "n_recall": "14"
        },
        {
          "n_recall": "15"
        },
        {
          "n_recall": "16"
        },
        {
          "n_recall": "17"
        },
        {
          "n_recall": "18"
        },
        {
          "n_recall": "19"
        },
        {
          "n_recall": "20"
        },
        {
          "n_recall": "21"
        },
        {
          "n_recall": "22"
        },
        {
          "n_recall": "23"
        },
        {
          "n_recall": "24"
        },
        {
          "n_recall": "25"
        },
        {
          "n_recall": "26"
        },
        {
          "n_recall": "27"
        }
      ],
      "sample": {
        "mode": "sequential"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "recall-loop",
      "timeout": "60000",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "recall-sequence",
        "content": [
          {
            "type": "lab.html.Form",
            "scrollTop": true,
            "files": {},
            "responses": {
              "keypress(enter)": "enter_recall"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "recall-list",
            "content": "\u003Cmain\u003E\n  \u003Cform\u003E\n    \u003Cp style=\"font-size:20px\"\u003EPlease type each item that you can remember from the list. \n Press ENTER to submit an item.\u003C\u002Fp\u003E\n    \u003Cinput name=\"recall\" type=\"text\" autocomplete=\"off\" autofocus=\"autofocus\" style=\"width: 300px;\u003E\n    \u003Cbutton style=”width: 600px; type=\"submit\"\u003E\n      \n    \u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E"
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()
