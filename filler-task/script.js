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
      "filePrefix": "filler-task",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "filler-task",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.cursor = 'none'
}
      },
      "title": "full_filler_sequence",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 272.16,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "end of first phase...",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "end_study",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -25,
              "angle": 0,
              "width": 573.64,
              "height": 232.69,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "You will now see an array of colored squares appear for a brief moment.\nThen, one colored square will be presented. Your task is to decide:\n\n'is the square the same color as it was before?'\n\nPress K for YES, the square is the same color,\npress L for NO, the square changed color.\n\nPress ENTER to see an example  \n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "18",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Enter)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "filler_instructions"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "pre": "diff1.jpg",
              "post": "diff1t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "same1.jpg",
              "post": "same1t.jpg",
              "correct_resp": "0"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {
            "diff1.jpg": "embedded\u002F3e589bed6835be75edf2f8902ae79601876ca35dc11b4db4bec11fd5ad50385e.jpg",
            "diff1t.jpg": "embedded\u002Fbe2eadab383c9733807156155ffd16228d542c48ee28d908cad9c1783e980b4a.jpg",
            "same1.jpg": "embedded\u002F7bb16c17797819b652eb184922aa1233ecbab145700bc83528233367d04eedd2.jpg",
            "same1t.jpg": "embedded\u002Fc05a53705c9c7409c13b2fe1c68b072dcd0b19e349bd45f790cbf357875a4cdc.jpg"
          },
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "filler_example_loop",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "filler_sequence",
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
                "title": "iti",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 600,
                    "height": 600,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[this.parameters.pre] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "diff1.jpg": "embedded\u002F3e589bed6835be75edf2f8902ae79601876ca35dc11b4db4bec11fd5ad50385e.jpg"
                },
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "pre",
                "timeout": "1000"
              },
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
                "title": "isi",
                "timeout": "600"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 600,
                    "height": 600,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[this.parameters.post] }"
                  },
                  {
                    "type": "i-text",
                    "left": 14,
                    "top": -262,
                    "angle": 0,
                    "width": 316.18,
                    "height": 43.93,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "is the square the same color as before?\nK for YES, L for NO",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "18",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "diff1t.jpg": "embedded\u002Fbe2eadab383c9733807156155ffd16228d542c48ee28d908cad9c1783e980b4a.jpg"
                },
                "responses": {
                  "keypress(k)": "0",
                  "keypress(l)": "1"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "post",
                "correctResponse": "${ [this.parameters.correct_resp] }"
              }
            ]
          }
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 496.91,
              "height": 75.03,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Good job!\n\nPress ENTER to begin the 2 minute colored square task",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Enter)": "begin_filler"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "begin_filler"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "pre": "diff1.jpg",
              "post": "diff1t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff10.jpg",
              "post": "diff10t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff11.jpg",
              "post": "diff11t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff12.jpg",
              "post": "diff12t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff13.jpg",
              "post": "diff13t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff14.jpg",
              "post": "diff14t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff15.jpg",
              "post": "diff15t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff16.jpg",
              "post": "diff16t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff17.jpg",
              "post": "diff17t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff18.jpg",
              "post": "diff18t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff19.jpg",
              "post": "diff19t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff2.jpg",
              "post": "diff2t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff20.jpg",
              "post": "diff20t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff21.jpg",
              "post": "diff21t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff22.jpg",
              "post": "diff22t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff23.jpg",
              "post": "diff23t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff24.jpg",
              "post": "diff24t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff25.jpg",
              "post": "diff25t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff3.jpg",
              "post": "diff3t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff4.jpg",
              "post": "diff4t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff5.jpg",
              "post": "diff5t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff6.jpg",
              "post": "diff6t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff7.jpg",
              "post": "diff7t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff8.jpg",
              "post": "diff8t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff9.jpg",
              "post": "diff9t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "same1.jpg",
              "post": "same1t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same10.jpg",
              "post": "same10t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same11.jpg",
              "post": "same11t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same12.jpg",
              "post": "same12t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same13.jpg",
              "post": "same13t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same14.jpg",
              "post": "same14t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same15.jpg",
              "post": "same15t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same16.jpg",
              "post": "same16t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same17.jpg",
              "post": "same17t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same18.jpg",
              "post": "same18t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same19.jpg",
              "post": "same19t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same2.jpg",
              "post": "same2t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same20.jpg",
              "post": "same20t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same21.jpg",
              "post": "same21t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same22.jpg",
              "post": "same22t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same23.jpg",
              "post": "same23t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same24.jpg",
              "post": "same24t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same25.jpg",
              "post": "same25t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same3.jpg",
              "post": "same3t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same4.jpg",
              "post": "same4t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same5.jpg",
              "post": "same5t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same6.jpg",
              "post": "same6t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same7.jpg",
              "post": "same7t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same8.jpg",
              "post": "same8t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same9.jpg",
              "post": "same9t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "diff1.jpg",
              "post": "diff1t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff10.jpg",
              "post": "diff10t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff11.jpg",
              "post": "diff11t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff12.jpg",
              "post": "diff12t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff13.jpg",
              "post": "diff13t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff14.jpg",
              "post": "diff14t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff15.jpg",
              "post": "diff15t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff16.jpg",
              "post": "diff16t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff17.jpg",
              "post": "diff17t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff18.jpg",
              "post": "diff18t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff19.jpg",
              "post": "diff19t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff2.jpg",
              "post": "diff2t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff20.jpg",
              "post": "diff20t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff21.jpg",
              "post": "diff21t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff22.jpg",
              "post": "diff22t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff23.jpg",
              "post": "diff23t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff24.jpg",
              "post": "diff24t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff25.jpg",
              "post": "diff25t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff3.jpg",
              "post": "diff3t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff4.jpg",
              "post": "diff4t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff5.jpg",
              "post": "diff5t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff6.jpg",
              "post": "diff6t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff7.jpg",
              "post": "diff7t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff8.jpg",
              "post": "diff8t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "diff9.jpg",
              "post": "diff9t.jpg",
              "correct_resp": "1"
            },
            {
              "pre": "same1.jpg",
              "post": "same1t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same10.jpg",
              "post": "same10t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same11.jpg",
              "post": "same11t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same12.jpg",
              "post": "same12t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same13.jpg",
              "post": "same13t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same14.jpg",
              "post": "same14t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same15.jpg",
              "post": "same15t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same16.jpg",
              "post": "same16t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same17.jpg",
              "post": "same17t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same18.jpg",
              "post": "same18t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same19.jpg",
              "post": "same19t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same2.jpg",
              "post": "same2t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same20.jpg",
              "post": "same20t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same21.jpg",
              "post": "same21t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same22.jpg",
              "post": "same22t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same23.jpg",
              "post": "same23t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same24.jpg",
              "post": "same24t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same25.jpg",
              "post": "same25t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same3.jpg",
              "post": "same3t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same4.jpg",
              "post": "same4t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same5.jpg",
              "post": "same5t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same6.jpg",
              "post": "same6t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same7.jpg",
              "post": "same7t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same8.jpg",
              "post": "same8t.jpg",
              "correct_resp": "0"
            },
            {
              "pre": "same9.jpg",
              "post": "same9t.jpg",
              "correct_resp": "0"
            }
          ],
          "sample": {
            "mode": "draw"
          },
          "files": {
            "diff2.jpg": "embedded\u002F1623462947c62b1043f9799e4efb9997f370a7b0dcc77c3d442963d06b26a877.jpg",
            "diff2t.jpg": "embedded\u002Fb61ac8cc8e580030f567535e4553309ec76d9e94aacc1433510bcd2877f3e524.jpg",
            "diff3.jpg": "embedded\u002F4100b8528c7e5decf9d5e88c5739b534fdcb5db8aec69cc21c781336de76fa9a.jpg",
            "diff3t.jpg": "embedded\u002Fcc5b585f2152f02e225479caba0aabd7535684e4fcae42f1a600f3cf130f37d1.jpg",
            "diff4.jpg": "embedded\u002F1e8eb4fe050f360292797128abfee2c86fe41a0630e312ff7bbfe796f9a09af2.jpg",
            "diff4t.jpg": "embedded\u002Fa52be5e269d7421a5277d0307c84986e09befceed4b8d2b18547d7421a0b72fd.jpg",
            "diff5.jpg": "embedded\u002F1eb5836025679bb4cf87c1946a1af392410e6408909a2c950b8be54e291b5cf6.jpg",
            "diff5t.jpg": "embedded\u002Fe91a58b0a9db65f83a3eb31904c16a00a5d1b072fce8e5747c8c81c03693466d.jpg",
            "diff6.jpg": "embedded\u002Fffbbfc985f14579767a883027e2589761de5a33b82695b4e610049d1353cc911.jpg",
            "diff6t.jpg": "embedded\u002F613bcc9a81729b98979933e2ba33795a94421174f03af929c47078cd29293d9d.jpg",
            "diff7.jpg": "embedded\u002Fb9abd07152eda72941dd519bb65a3a7c8311133a238185e9b622a63bfaae7f07.jpg",
            "diff7t.jpg": "embedded\u002F72134d5888d52b3523f5e8d14758d085db964a84e5ae39d74250a70e1e3cbd6e.jpg",
            "diff8.jpg": "embedded\u002F0e3f25128b05b9c0657f8fe1744a6a116b07f38b01fb50803dd29033ba5b34eb.jpg",
            "diff8t.jpg": "embedded\u002F0f1463cf5f0738b9a524436f4e1f5f7defb363c591506d56c0b2c516240ef423.jpg",
            "diff9.jpg": "embedded\u002F674bd59fc5832f7ffaf350ae0614840765808224fa83ef740c5f5d3392fc8e5c.jpg",
            "diff9t.jpg": "embedded\u002F1c1afd12e2822569e738998c49bb62067d7271f493ac9a8f7fd1c3a539d1b438.jpg",
            "diff10.jpg": "embedded\u002F365daf34bad3436e20409f1a5729a2c3add954b75924703f3b22271b1291e6d5.jpg",
            "diff10t.jpg": "embedded\u002F0589cdca36601a9fc94295a8c13a0079aa0c92323ecd06b40b95bfeb85714a02.jpg",
            "diff11.jpg": "embedded\u002Fb08b718664b4ebde7dd255ed0ecd74a91a8154b51c08f9a260bdc380520adb6c.jpg",
            "diff11t.jpg": "embedded\u002Ff5a14290886931dcf154cae09574277925b5562bd02cb5c0a1892cc4884d6d56.jpg",
            "diff12.jpg": "embedded\u002Feb288c70002c368759feb4ed1680c91b51a755e85e981695e63e2188c1fde526.jpg",
            "diff12t.jpg": "embedded\u002Fbf3ecd5f42d5f3f57de9bf039b3b370a6a77d898790231e9ef24c7ec35b44507.jpg",
            "diff13.jpg": "embedded\u002F742314d7b88737b676149e00e12eb2b60b24f865f088eff0e73fe5077f86c590.jpg",
            "diff13t.jpg": "embedded\u002F5cc143e6e8bc659077ceb9f407c1d68d3035011e73519fbc2d9ada67b7fb1f91.jpg",
            "diff14.jpeg": "embedded\u002F8acef069651423dbaef308507e271fb3aa3d32a16f48f37bd60fc6fd6ba9717f.jpeg",
            "diff14t.jpg": "embedded\u002F012b6c400e5cdf8cec3be8bace0f547b98b6f11f627f4d9ed05ba4222d65047c.jpg",
            "diff15.jpg": "embedded\u002F22506589110de300d41c27ec68ef437b9e623124e0451af78cbca257d72fb4c1.jpg",
            "diff15t.jpg": "embedded\u002F987938c93745432c1b3eb10ed9a2cddce6a89da4b30f7518e46cd7f5df451c83.jpg",
            "diff16.jpg": "embedded\u002Fe14911843ae0e44e22ecbd522a66c2471c44969755d01effb54d9b6c2aecb3eb.jpg",
            "diff16t.jpg": "embedded\u002F18a9e5a6e3e25ceb126ffb76352deef61cd8ef5ce7de39ed08e068e554c6454b.jpg",
            "diff17.jpg": "embedded\u002Ff1e01e186c127a0b4ffe768b2334bb040b473cfa0adc55c3b082b6f03784ea8d.jpg",
            "diff17t.jpg": "embedded\u002Fffba32cb4d71c02278f89daebd669f880400745f5d52296bf2f0af195f610b53.jpg",
            "diff18.jpg": "embedded\u002Ffc843d2b12c0563938de3c61ff6954547529eed6cb7589f12da5044611c48eb4.jpg",
            "diff18t.jpg": "embedded\u002Fb0b3d1a9cc09a05462c9dee1362b2eade8c8effd1ab6edb11bdb30348992b6b2.jpg",
            "diff19.jpg": "embedded\u002F966f9c073c5ed3a008aadfdea37ed0173de0cfd00b94df017dc321a893bf61a6.jpg",
            "diff19t.jpg": "embedded\u002Fa3776ca57c5fa6e12879ff99074909b970315d6a71a43541757241f9813cd626.jpg",
            "diff20.jpg": "embedded\u002F0b117f9c2945e64dcebe64893e98ab5c0f140ba8c73e191191ca3fe652b87e84.jpg",
            "diff20t.jpg": "embedded\u002Fbf1f9525c603f7da038d279ebc5cad5a928f937161c64589530d107690046c79.jpg",
            "diff21.jpg": "embedded\u002Fe3aafd61786565692008a3b5e8f529c122ab31fc1cb2e95b9e08f983f2de76ae.jpg",
            "diff21t.jpg": "embedded\u002F1cccff434e55c1daf584790f770a9849e3f45157be71a6ac2a373f57aded8f13.jpg",
            "diff22.jpg": "embedded\u002F7ce9fa17857b1a67db636bd6f1341aca1d78a2e42c7236d0addd11fe4f34a1c9.jpg",
            "diff22t.jpg": "embedded\u002Fe0658b16676083b5b2c41c475a2f0558f54392d711b78f36b6cfc87573a71e82.jpg",
            "diff23.jpg": "embedded\u002F9d5a749dd615915565aba0fe0f2a79a79ef906efab19aef6f8700c0d51b515ea.jpg",
            "diff23t.jpg": "embedded\u002F359cf4955950768bdd1425f1ec586fc5b45a59798acca0dac663af311597710c.jpg",
            "diff24.jpg": "embedded\u002F78f5b1c803326b1b3664a17244f8e946e0f877882b9c8887a0197f5e5318d870.jpg",
            "diff24t.jpg": "embedded\u002F3ea3e54c7c8a38856606ffe0f2a9fa56aaa813683fd5d8943e11c4a220f633f5.jpg",
            "diff25.jpg": "embedded\u002F490b2f6ec1e98b887b3b25268a2b34d705f8a88c94979d8b9a1160e9e48848ef.jpg",
            "diff25t.jpg": "embedded\u002F9429e09e048bce3a22680dcd8ee2a814f381e7c2428b020a815d81c477200a79.jpg",
            "same1.jpg": "embedded\u002F7bb16c17797819b652eb184922aa1233ecbab145700bc83528233367d04eedd2.jpg",
            "same1t.jpg": "embedded\u002Fc05a53705c9c7409c13b2fe1c68b072dcd0b19e349bd45f790cbf357875a4cdc.jpg",
            "same2.jpg": "embedded\u002F5ca9a97acb0b5c7695eb6733f65551334421d2a6a58706ae97bb09649288a6e1.jpg",
            "same2t.jpg": "embedded\u002F353097d5c9f19c4679b6cc7114c79adf22562564d8342d6aaf7d1d9d09c11f71.jpg",
            "same3.jpg": "embedded\u002F8c32c4c4dce3cc95d233a155c4bac59d0228fb79a05ba2d092e0e2b0f2171172.jpg",
            "same3t.jpg": "embedded\u002F4af672321aea12a08566290f9d2b688fda7638dcc4b82f77028563b70102d42d.jpg",
            "same4.jpg": "embedded\u002Fbc2e971fc641d5a0a0ba9d58c9aa8a6e89c8d92d98e2796749e140fc8ce0e458.jpg",
            "same4t.jpg": "embedded\u002Fa75863822684b062f629bcf531be5f473c197da0b9403d9b7e0caad33eed0a72.jpg",
            "same5.jpg": "embedded\u002F20d088185a0e95e256cf563cff50c47220b34d0be463a7890a9cc93374499d23.jpg",
            "same5t.jpg": "embedded\u002F763a098933ac7dc9631a74e61f935af62ccbf4f2965a7faa7f9d5d2477bd31de.jpg",
            "same6.jpg": "embedded\u002Fc1e87b6599a722000e5eae92050eb2db558fd4432dcc5b07a91b982e01931ad6.jpg",
            "same6t.jpg": "embedded\u002F72db13be2e3e50b19de1a813e555da3280f32af90e8b14fd2bd2872c72f438ee.jpg",
            "same7.jpg": "embedded\u002Fa1daf3b2c278e9e7a5254949c599d7cc64293a8f1155a5739da37b2e5e8dd10e.jpg",
            "same7t.jpg": "embedded\u002Fe2aa59b8e411377aab5d972126c375437a7bc97bbb6f73bc444767798727a87e.jpg",
            "same8.jpg": "embedded\u002Fce52e7f48da9d326a15796e822b524a5662fdd0055f9115c74228c8bf7774d9e.jpg",
            "same8t.jpg": "embedded\u002F9cd368c6d94e0a791463014c1ab766c6d940065ceef01509afd899edb06d426e.jpg",
            "same9.jpg": "embedded\u002F0e22c85d5d2efc8b6f04e9b1f594e19f20b0b4fba1b1a3808ba8387263a707b2.jpg",
            "same9t.jpg": "embedded\u002Fbd2d598e4a38def25aee23c084eef3c804349ad4361aad9a23718d576a4fbcd8.jpg",
            "same10.jpg": "embedded\u002Fec7470e7d54c6a8ad9874c53442b920e0c72b26b17bcf11e7fc99620ee2dcaf5.jpg",
            "same10t.jpg": "embedded\u002Fe2655991439e13724db455e492b60e0deb896c2ccfa1cf27ebb9a578724a1687.jpg",
            "same11.jpg": "embedded\u002Fa59eef96f2f2264bc32a60e12105826da0fe36fd303027dba594a7c5021a42b5.jpg",
            "same11t.jpg": "embedded\u002Ff6866ab3eb30ac03e1cf8274ecfd7382b8a5db9c4619de177635bc4b2336e831.jpg",
            "same12.jpg": "embedded\u002Fd8d638e6f92f24c49acadf62cf2a4dd137d4ba462737cfa793923c66b2da6789.jpg",
            "same12t.jpg": "embedded\u002F6d9eca8674be87df4fde8a0045e8fdc497c139003b66b0746707dd135ff2bee4.jpg",
            "same13.jpg": "embedded\u002Fcf5bf0d88feebbb22b5ff073e3b2b62b0e51ee3e5226da5cc6e2841c0d578892.jpg",
            "same13t.jpg": "embedded\u002F2c0ddf93709c6d56c8d713f2887684f841dd5b2e1fb81bd277d7bccc4218190e.jpg",
            "same14.jpg": "embedded\u002Fe7273b1ef847db2b9019e0c82b86525a0c6c49fbe17a38f8c5c1d46b124b71ac.jpg",
            "same14t.jpg": "embedded\u002Fb851b5caec4dd71d9e8fe12b57e844b492bcd1832ff6332ed0840ca5e0ac69ad.jpg",
            "same15.jpg": "embedded\u002Fb3c8e21094b2cb1ef70aaf9b975a1267a2fe5ec9f413ba88888c4ade4aec68d9.jpg",
            "same15t.jpg": "embedded\u002Fc792de54b1bbcfde6dfd2525cc7c460c935fb062d87f87147268ebd869c707fb.jpg",
            "same16.jpg": "embedded\u002F02da3576805b722e281cc0c5e3835258896259f3cf53cd1be52a4d983bfc53c0.jpg",
            "same16t.jpg": "embedded\u002Ffec0d45e2397e5de1e546a67ee1f5e3688c5cd8e9d4563b2fd1031910fe7fcd0.jpg",
            "same17.jpg": "embedded\u002F6134969e6fcc98493802dc289ca9910181efa1faba2e716ec791698cf8988814.jpg",
            "same17t.jpg": "embedded\u002Fc58a86ef2e9de1c27042f0a5f8a1e3d254d6b75072f6e1744826e554a54dd8d7.jpg",
            "same18.jpg": "embedded\u002F995960373dbda1fef5f2418a0d65bd2a8166236ac6481f974dda47781191aedc.jpg",
            "same18t.jpg": "embedded\u002F2657fa601c8783ec546ba80eb3d992fa3fccff6b70f9b9ab3afeebbd0849765f.jpg",
            "same19.jpg": "embedded\u002Ffd23a425048892c511ce75a989ecfc46724f4ec4fef226025250f6602c54616c.jpg",
            "same19t.jpg": "embedded\u002Fc449e12725e0811fa0f033c8df29e2bba40dd7798c96a42d666ef699e31b087e.jpg",
            "same20.jpg": "embedded\u002Fb90cd9361e3b25a40b9523dae1d6ec6e508515bcc27eabd001967fdf4b4c8c2e.jpg",
            "same20t.jpg": "embedded\u002F477494a4ce4e539d2dd15eece7121a60244343221cef435c81dde0acd65d425a.jpg",
            "same21.jpg": "embedded\u002Fd207a3dda0eb49999e4b5f997a5d967684d9ed7e025fca44f7f4dbef2a474ff2.jpg",
            "same21t.jpg": "embedded\u002F5876de58a4bfc7c77efad5c2f1e658a1aff0eebe16eb71ca181b887a64007d2a.jpg",
            "same22.jpg": "embedded\u002Fbefe7eff03a32c902b3ee90bfe8438a0b43c2acca8202e0374e6ad6e15701872.jpg",
            "same22t.jpg": "embedded\u002F90e2623473459579b1572380edb7525f6ba9198207127e9027923a5be5a3d27b.jpg",
            "same23.jpg": "embedded\u002Fc2ce0d084c39662bc6c038376200aa1ebcfd346c2e0675c88ef9c36878175558.jpg",
            "same23t.jpg": "embedded\u002F3403587bbb6e3039c5081355b9aa1360db02d32dd409a3643e2a58ca8c4a8650.jpg",
            "same24.jpg": "embedded\u002F6c5fb49ec60c0ed077c92728a5c5d4173e9e95b9f94d5c1652b9566b484469f6.jpg",
            "same24t.jpg": "embedded\u002Ff8a1c75ce53ef940a76b59041d92067e6f71f188699df3602e25472ac9258590.jpg",
            "same25.jpg": "embedded\u002F32c119f54a8a84318b4ded85fd869caad4ecde2bda013e2036baf62252b96d8e.jpg",
            "same25t.jpg": "embedded\u002Fdfd10377e7c3c5bb6f91ef0db720e9de9bc4212a57fda6be546a85c6d09de3d4.jpg"
          },
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "filler_loop",
          "timeout": "60000",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "filler_sequence",
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
                "title": "iti",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 600,
                    "height": 600,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[this.parameters.pre] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "diff1.jpg": "embedded\u002F3e589bed6835be75edf2f8902ae79601876ca35dc11b4db4bec11fd5ad50385e.jpg"
                },
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "pre",
                "timeout": "1000"
              },
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
                "title": "isi",
                "timeout": "600"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 600,
                    "height": 600,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[this.parameters.post] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "diff1t.jpg": "embedded\u002Fbe2eadab383c9733807156155ffd16228d542c48ee28d908cad9c1783e980b4a.jpg"
                },
                "responses": {
                  "keypress(k)": "0",
                  "keypress(l)": "1"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "post",
                "correctResponse": "${ [this.parameters.correct_resp] }"
              }
            ]
          }
        }
      ]
    }
  ]
})

// Let's go!
study.run()