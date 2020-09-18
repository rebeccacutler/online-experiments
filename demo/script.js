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
      "filePrefix": "demo",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "demo",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 425.41,
          "height": 75.03,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "This experiment requires full screen display.\n \nPlease press the SPACE bar to enter fullscreen ",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 150,
          "angle": 0,
          "width": 674.13,
          "height": 18.08,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#d6341a",
          "text": "RC: you need to add in your own JS code for this - the example function I used is in the script :)",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "16",
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
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.events['keypress(Space)'] = function() {
 lab.util.fullscreen.launch(document.documentElement)
  this.end()
}
}
      },
      "title": "enter_fullscreen"
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
      "title": "fullscreen_interval",
      "timeout": "1500"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 305.04,
          "height": 90.04,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Welcome to the experiment! \n\nPress ENTER to get started",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
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
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "welcome_screen"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -50,
          "angle": 0,
          "width": 643.16,
          "height": 115.26,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Thank you for participating in our experiment! The task will take you approximately \n30 minutes. First you will read the informed consent document and, if you agree, \nconsent to participate. Then you will start the three-phase experiment. \n\nPlease pay careful attention to the instructions and focus on the experiment. Your participation is \nmeaningful to the scientific community. We appreciate your time!",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "15",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 11,
          "top": 175,
          "angle": 0,
          "width": 225.65,
          "height": 22.6,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "press ENTER to continue",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": -25,
          "top": -200,
          "angle": 0,
          "width": 247.09,
          "height": 20.34,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#d6341a",
          "text": "RC: just example overview text",
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
        "keypress(Enter)": "enter_overview"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "overview"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain\u003E\n\u003C!-- Consent statement: --\u003E\n  \u003Cdiv id=\"consentDiv\"\u003E\u003Ccenter\u003E\u003Ch1\u003EVanderbilt University Consent to Participate in Research\u003C\u002Fh1\u003E\u003Cp\u003E\u003Cb\u003EThis is a consent form for research participation.\u003C\u002Fb\u003E It contains important information about this study and what to expect if you decide to participate.\u003C\u002Fp\u003E\n    \u003Ciframe src=\"https:\u002F\u002Fmturk-s3-categories.s3.amazonaws.com\u002FStamped-ICD.pdf\" width=\"100%\" height=\"500px\"\u003E\u003C\u002Fiframe\u003E\n    \u003Cp\u003E\u003Cb\u003EElectronic consent:\u003C\u002Fb\u003E You may print a copy of this consent form for your records. \u003Cbr\u003E\u003Cbr\u003E You must be 18 years of age or older to participate in this experiment. Please enter your age in the box below. \u003Cbr\u003EClicking the start button below indicates that you have read the above information and you voluntarily agree to participate in the experiment.\u003Cbr\u003E \u003Cbr\u003E \u003Cfont color=\"red\"\u003E RC: I have added HTML code that 'requires' these answers to be submitted before the next screen executes. \u003Cbr\u003E I've also added another canvas following this one that will display only if the age \u003C 18 (code-wise; it's hidden if data.age \u003E= 18). \u003Cbr\u003E It won't let the participant continue and forces them to exit the tab. \u003C\u002Ffont\u003E \u003C\u002Fcenter\u003E \n  \u003C\u002Fcenter\u003E\u003C\u002Fdiv\u003E\n    \u003Cform\u003E\n    \u003Cbr\u003E \n    \u003Clabel for =\"age\"\u003E Age of participant: \u003C\u002Flabel\u003E\n    \u003Cinput type=\"number\" name=\"age\" id=\"age\" required autocomplete=\"off\"\u003E \u003Cbr\u003E\u003Cbr\u003E\n    \u003Cinput type=\"checkbox\" name=\"consent\" id=\"consent\" required autocomplete=\"off\"\u003E\n    \u003Clabel for =\"consent\"\u003E I consent to this experiment \u003C\u002Flabel\u003E\u003Cbr\u003E \n    \u003Cbutton type=\"submit\"\u003E\n      Start\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "consent form"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 470.23,
          "height": 75.03,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "You must be over 18 years of age to participate.\nPlease close your tab\u002Fbrowser to exit the experiment.\nThank you!",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -175,
          "angle": 0,
          "width": 500.26,
          "height": 20.34,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#d6341a",
          "text": "RC: the code freezes on this screen so they must close the tab",
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
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "age_limit_consent",
      "tardy": true,
      "skip": "${ this.state.age \u003E= 18 }"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\n    \n    \u003Ch2 class=\"text-center\"\u003EPlease tell us about yourself\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-center\"\u003E \u003Cfont color=\"red\"\u003E RC: This is just an example of 1. HTML textbox (without autocomplete from history - important for free recall) and 2. how to create a dropdown menu\u003C\u002Ffont\u003E\u003C\u002Fp\u003E\n    \n    \u003Cform id=\"demography\"\u003E\n      \u003Ctable\u003E\n        \u003C!-- Age --\u003E\n        \u003Ctr style=\"height: 50px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            What is your current gender identity?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"gender\" type=\"letter\" required class=\"w-100\" autocomplete=\"off\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Gender identity, following Tate et al. (2013) --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            How do you usually describe your race?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"race\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \n              \u003Coption value=\"AmericanIndian\u002FNativeAlaskan\"\u003EAmerican Indian or Native Alaskan\u003C\u002Foption\u003E\n              \u003Coption value=\"Asian\u002FAsianAmerican\"\u003EAsian or Asian American\u003C\u002Foption\u003E\n              \u003Coption value=\"Black\u002FAfricanAmerican\"\u003EBlack or African American\u003C\u002Foption\u003E\n              \u003Coption value=\"Hispanic\u002FLatino\u002Fa\u002Fx\"\u003EHispanic or Latino\u002Fa\u002Fx\u003C\u002Foption\u003E\n              \u003Coption value=\"MiddleEastern\u002FNorth African\"\u003EMiddle Eastern\u002FNorth African (MENA) or Arab Origin\u003C\u002Foption\u003E\n              \u003Coption value=\"NativeHawaiian\u002FOtherPacificIslander\"\u003ENative Hawaiian or Other Pacific Islander Native\u003C\u002Foption\u003E\n              \u003Coption value=\"White\"\u003EWhite\u003C\u002Foption\u003E\n              \u003Coption value=\"Biracial or Multiracial\"\u003EBiracial or Multiracial\u003C\u002Foption\u003E\n              \u003Coption value=\"Other\"\u003EMy identity is not listed above\u003C\u002Foption\u003E\n              \n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Birth-assigned gender category, following Tate et al.\n          \u003Ctr style=\"height: 100px\"\u003E\n            \u003Ctd\u003E\n              Which gender were you assigned at birth?\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Cselect style=\"width: 200px\" name=\"gender-birth\"\u003E\n                \u003Coption value=\"\" selected\u003E\n                  -- Please click to select --\n                \u003C\u002Foption\u003E\n                \u003Coption value=\"female\"\u003EFemale\u003C\u002Foption\u003E\n                \u003Coption value=\"male\"\u003EMale\u003C\u002Foption\u003E\n                \u003Coption value=\"intersex\"\u003EIntersex\u003C\u002Foption\u003E\n              \u003C\u002Fselect\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n        --\u003E\n\n        \u003C!-- Education\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            Please specify your highest degree:\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"education\" class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003Eno degree\u003C\u002Foption\u003E\n              \u003Coption value=\"highschool\"\u003EHigh school diploma\u003C\u002Foption\u003E\n              \u003Coption value=\"bachelor\"\u003EBachelor's\u003C\u002Foption\u003E\n              \u003Coption value=\"master\"\u003EMaster's\u003C\u002Foption\u003E\n              \u003Coption value=\"phd\"\u003EPhD\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        --\u003E\n\n        \u003C!-- Occupation\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            What is your occupation, or if you still study, your field?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"occupation\" class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        --\u003E\n\n        \u003C!-- Column balance --\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 45%\"\u003E\n          \u003Ccol style=\"width: 65%\"\u003E\n        \u003C\u002Fcolgroup\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cbutton type=\"submit\" form=\"demography\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "demographics_form",
      "files": {}
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
let done = false // is it the last screen?

const setVisibility = (selector, isVisible) => {
  // Extract the content from the current element
  const target = this.options.el.querySelector(selector)

  target.style.visibility = isVisible ? 'visible' : 'hidden'
}

const moveForth = (selector) => {
  const target = this.options.el.querySelector(selector)
  if(target.nextElementSibling){
    target.classList.add("hidden"); // hide current screen
    target.nextElementSibling.classList.remove("hidden"); //show next screen
    
    setVisibility('#bck', true) // make sure that 'back' button is visible

    if(!target.nextElementSibling.nextElementSibling){ // if the end is reached
      setVisibility('#fwd', false) // hide the forward button
      setVisibility('#done', true) // show the end button
      done = true
    }
  }
}

const moveBack = (selector) => {
  target = this.options.el.querySelector(selector);
  if(target.previousElementSibling){ //.innerHTML !== undefined
    target.classList.add("hidden");  // hide current screen
    target.previousElementSibling.classList.remove("hidden"); // show previous screen

    setVisibility('#fwd', true) // make sure that 'forward' button is visible
    setVisibility('#done', false) // hide the 'done' button
    done = false

    if(!target.previousElementSibling.previousElementSibling){ // if the beginning is reached
      setVisibility('#bck', false) // hide the back button
    }
  } 
}

this.options.events['keydown(ArrowRight)'] = function(){
  moveForth("section[id^='page']:not(.hidden)")
  moveForth("h2[id^='head']:not(.hidden)")
}

this.options.events['keydown(ArrowLeft)'] = function(){
  moveBack("section[id^='page']:not(.hidden)")
  moveBack("h2[id^='head']:not(.hidden)")
}

this.options.events['keypress(Enter)'] = function() {
    if(done)
      // End instructions
      this.end('done')
}
}
      },
      "title": "study_instructions",
      "content": "\u003Cheader\u003E\r\n  \u003Ch2 id=\"head1\"\u003E\u003C\u002Fh2\u003E\r\n  \u003Ch2 id=\"head2\" class=\"hidden\"\u003E\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Csection id=\"page1\"\u003E\r\n    \u003Cfont size=\"6\"\u003EThis is an example of multi-screen instructions. \u003Cbr\u003E \r\nThe html code to go back and forth is in 'scripts'.\u003Cbr\u003E\u003Cbr\u003E\u003C\u002Ffont\u003E\r\n\u003Cfont size=\"4\"\u003EYou can change the font\u003C\u002Ffont\u003E \u003Cbr\u003E\u003Cbr\u003E\u003Cfont size=\"6\"\u003E You can edit which keys the navigation recognizes.\u003C\u002Ffont\u003E\r\n    \u003Cp\u003E\r\n\u003C\u002Fp\u003E\r\n  \u003C\u002Fsection\u003E\r\n  \u003Csection id=\"page2\" class=\"hidden\"\u003E\r\n    \u003Cp\u003E\u003Cfont size=\"6\"\u003ELet's say you pressed 'RightArrow' on the previous screen but now \u003Cbr\u003E you have regrets because you didn't read it properly. \u003Cbr\u003E \u003Cbr\u003E You can press 'LeftArrow' to go back \u003Cbr\u003E \u003Cbr\u003E Press ENTER to see how to present single images for a set amount of time (3000ms), plus an ISI\u003C\u002Fp\u003E\u003C\u002Ffont\u003E\r\n  \u003C\u002Fsection\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  \u003Ctable class=\"table-plain\"\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd id=\"bck\" style=\"visibility: hidden\"\u003E\r\n        press the left arrow \u003Ckbd\u003E&larr;\u003C\u002Fkbd\u003E for the previous screen \r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd id=\"done\" style=\"visibility: hidden\"\u003E\r\n        press \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E to continue \r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd id=\"fwd\"\u003E\r\n        press the right arrow \u003Ckbd\u003E&rarr;\u003C\u002Fkbd\u003E for the next screen \r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E\r\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 18.69,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "+",
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
      "title": "post_instructions_fixation",
      "timeout": "2000"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "image1": "mixer1.jpg"
        },
        {
          "image1": "volleyball1.jpg"
        },
        {
          "image1": "wateringcan1.jpg"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {
        "volleyball1.jpg": "embedded\u002F8168d1eab84f03f0213dff9a9a3ec38d3b1335bc59bdff4d3d3f4417af1af8f2.jpg",
        "wateringcan1.jpg": "embedded\u002Fddf2e5110fa872f32081cbf395250eb49347325a01857785216821da69b5cb7f.jpg",
        "mixer1.jpg": "embedded\u002F942666d5b8cfdaace275e88d5a8fff14c907828d69edb66d2b3188591bdbf9f9.jpg"
      },
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "study_buffer_loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "study_buffer_sequence",
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
            "title": "ISI",
            "timeout": "400"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 256,
                "height": 256,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.image1] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "rockinghorse1.jpg": "embedded\u002F94c39750558981f14fc893caf31be6b5fa2657d343d99e007dd38889943eaf30.jpg"
            },
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "study_buffer",
            "timeout": "3000"
          }
        ]
      }
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
      "title": "post_buffer_isi",
      "timeout": "200"
    },
    {
      "title": "filler-task",
      "type": "lab.flow.Sequence",
      "parameters": {},
      "plugins": [],
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
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -25,
              "top": 10,
              "angle": 0,
              "width": 596.01,
              "height": 303.47,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "You will see an array of colored squares appear for a brief moment. \nThen, one colored square will be presented. Your task is to select whether \nthe colored square is the same color, or a different color than it was before.\n\n\nPress K if the square stayed the same color, \nand L if it changed to a different color\n\n\n\n\nPress ENTER to see an example\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "18",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": -25,
              "top": -225,
              "angle": 0,
              "width": 565.21,
              "height": 43.93,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a",
              "text": "RC: here's a delay \u002F distraction task demo.\nthe variable 'timeout' can be edited to determine how long your delay is",
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
              "image1": "diff1.png",
              "image2": "diff1t.png",
              "correct_resp": "1"
            },
            {
              "image1": "same1.png",
              "image2": "same1t.png",
              "correct_resp": "0"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {
            "diff1.png": "embedded\u002F3ad3abfbf6d574abecfc1864a1cceb030867cfd25ad2ffb3c5aff3a6cadb6237.png",
            "diff1t.png": "embedded\u002F9d5a888137a6f9a09a0b9062035a6d4423626dd3c4475b3141bb1ab6a5ce5d42.png",
            "same1.png": "embedded\u002F5f94c111f67b4503b86d9363bbb75925187168ca6cdc98e5300478a9086af24b.png",
            "same1t.png": "embedded\u002F770f1ce0b3b1470123b0a22672dd882045c0b798ce333ac0008ba5ad213944aa.png"
          },
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "example_loop",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "example_sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 18.69,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "+",
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
                    "src": "${ this.files[this.parameters.image1] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "diff1.png": "embedded\u002F3ad3abfbf6d574abecfc1864a1cceb030867cfd25ad2ffb3c5aff3a6cadb6237.png"
                },
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "pre",
                "timeout": "1500"
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
                "timeout": "1000"
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
                    "src": "${ this.files[this.parameters.image2] }"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -240,
                    "angle": 0,
                    "width": 277.81,
                    "height": 34.17,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Press K if the square stayed the same color, \nand L if it changed to a different color",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "14",
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
                  "diff1t.png": "embedded\u002F9d5a888137a6f9a09a0b9062035a6d4423626dd3c4475b3141bb1ab6a5ce5d42.png"
                },
                "responses": {
                  "keypress(k)": "0",
                  "keypress(l)": "1"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "post2",
                "correctResponse": "${ [this.parameters.correct_resp] }"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 2,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "",
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
      "title": "post-filler-task",
      "timeout": "2000"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
let done = false // is it the last screen?

const setVisibility = (selector, isVisible) => {
  // Extract the content from the current element
  const target = this.options.el.querySelector(selector)

  target.style.visibility = isVisible ? 'visible' : 'hidden'
}

const moveForth = (selector) => {
  const target = this.options.el.querySelector(selector)
  if(target.nextElementSibling){
    target.classList.add("hidden"); // hide current screen
    target.nextElementSibling.classList.remove("hidden"); //show next screen
    
    setVisibility('#bck', true) // make sure that 'back' button is visible

    if(!target.nextElementSibling.nextElementSibling){ // if the end is reached
      setVisibility('#fwd', false) // hide the forward button
      setVisibility('#done', true) // show the end button
      done = true
    }
  }
}

const moveBack = (selector) => {
  target = this.options.el.querySelector(selector);
  if(target.previousElementSibling){ //.innerHTML !== undefined
    target.classList.add("hidden");  // hide current screen
    target.previousElementSibling.classList.remove("hidden"); // show previous screen

    setVisibility('#fwd', true) // make sure that 'forward' button is visible
    setVisibility('#done', false) // hide the 'done' button
    done = false

    if(!target.previousElementSibling.previousElementSibling){ // if the beginning is reached
      setVisibility('#bck', false) // hide the back button
    }
  } 
}

this.options.events['keydown(ArrowRight)'] = function(){
  moveForth("section[id^='page']:not(.hidden)")
  moveForth("h2[id^='head']:not(.hidden)")
}

this.options.events['keydown(ArrowLeft)'] = function(){
  moveBack("section[id^='page']:not(.hidden)")
  moveBack("h2[id^='head']:not(.hidden)")
}

this.options.events['keypress(Enter)'] = function() {
    if(done)
      // End instructions
      this.end('done')
}
}
      },
      "title": "practice_instructions",
      "content": "\u003Cheader\u003E\r\n  \u003Ch2 id=\"head1\"\u003E\u003C\u002Fh2\u003E\r\n  \u003Ch2 id=\"head2\" class=\"hidden\"\u003E\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Csection id=\"page1\"\u003E\r\n    \u003Cfont size=\"6\"\u003EIn the second phase of the experiment you will be shown an image \u003Cbr\u003E in the centre of the screen. Your job is to judge whether \u003Cbr\u003E you\r\n  have seen the image before in this experiment (old), \u003Cbr\u003Eor if you \r\n  are seeing it for the first time (new)\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E You will make keyboard responses to indicate your old\u002Fnew judgement.\u003Cbr\u003E\u003C\u002Ffont\u003E\r\n  \u003Cp\u003E\u003Cfont size=\"6\"\u003EPress \u003Ckbd\u003EK\u003C\u002Fkbd\u003E for old and \u003Ckbd\u003EL\u003C\u002Fkbd\u003E for new \u003Cbr\u003E\u003Cbr\u003E Don't worry - each screen throughout the task will have a reminder of the keys\u003C\u002Ffont\u003E\u003C\u002Fp\u003E\r\n    \u003Cp\u003E\r\n\u003C\u002Fp\u003E\r\n  \u003C\u002Fsection\u003E\r\n  \u003Csection id=\"page2\" class=\"hidden\"\u003E\r\n    \u003Cp\u003E \u003Cfont size=\"6\"\u003EThis is an example of presenting stimuli until a specific keypress is made.\u003Cbr\u003E\u003Cbr\u003E\r\n    Press ENTER to confirm that you understand the task and see an example \u003C\u002Fp\u003E\r\n    \u003Cp\u003E (I've made the instructions\u002Fexamples such that they can only continue if they press the correct key. \u003Cbr\u003E It's an attempt to ensure the key -\u003E response mapping). \u003C\u002Ffont\u003E\u003C\u002Fp\u003E\r\n  \u003C\u002Fsection\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  \u003Ctable class=\"table-plain\"\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd id=\"bck\" style=\"visibility: hidden\"\u003E\r\n        press the left arrow \u003Ckbd\u003E&larr;\u003C\u002Fkbd\u003E for the previous screen \r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd id=\"done\" style=\"visibility: hidden\"\u003E\r\n        press \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E to continue \r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd id=\"fwd\"\u003E\r\n        press the right arrow \u003Ckbd\u003E&rarr;\u003C\u002Fkbd\u003E for the next screen \r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E\r\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -238,
          "angle": 0,
          "width": 446.28,
          "height": 48.82,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Let's say that you have seen this item before (old) \nPlease make the correct key response to continue",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 0,
          "top": -40,
          "angle": 0,
          "width": 256,
          "height": 256,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"volleyball1.jpg\"] }",
          "autoScale": undefined
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 175,
          "angle": 0,
          "width": 255.69,
          "height": 22.6,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "press K for old and L for new",
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
      "files": {
        "backpack1.jpg": "embedded\u002F7283233f216629f56ec26db54701d15738745a97b02b46ba00fe91a91ce8dc42.jpg",
        "mug34.jpg": "embedded\u002F84ff172c80b1cd613a81d9a5100033ac6cd9ae349286f4d7bf234b79f2940d37.jpg",
        "playhouse1.jpg": "embedded\u002Faa1855bf04c0a547da475d5b5ad1a4e9686c01c2283b788e34358394bdbf35f2.jpg",
        "volleyball1.jpg": "embedded\u002F8168d1eab84f03f0213dff9a9a3ec38d3b1335bc59bdff4d3d3f4417af1af8f2.jpg"
      },
      "responses": {
        "keypress(k)": "practice_demo_correct_old"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "practice_instructions_2"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": "-238",
          "angle": 0,
          "width": 489.64,
          "height": 48.82,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Let's say that you have not seen this item before (new) \nPlease make the correct key response to continue",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 0,
          "top": -40,
          "angle": 0,
          "width": 256,
          "height": 256,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"playhouse1.jpg\"] }"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 175,
          "angle": 0,
          "width": 255.69,
          "height": 22.6,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "press K for old and L for new",
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
      "files": {
        "backpack1.jpg": "embedded\u002F7283233f216629f56ec26db54701d15738745a97b02b46ba00fe91a91ce8dc42.jpg",
        "hat41.jpg": "embedded\u002F49870095d6ab0a367a7e0444175abfab9676e15455283fd9c6045064d0ae5603.jpg",
        "hat4.jpg": "embedded\u002Faffc3ea595780266ba5c85957e423cdbbe1a3b259888f98254d86cfe3dc0cff8.jpg",
        "bike2.jpg": "embedded\u002Fc0e00ffb17c868ea29cb4aa5de3abc3fb80ae2667e61694ffb11a8c6479cc9e9.jpg",
        "feather2.jpg": "embedded\u002Fe6b7a0915dfdde34061a272265f754cbb769f614d569df736233d563215902ea.jpg",
        "volleyball1.jpg": "embedded\u002F8168d1eab84f03f0213dff9a9a3ec38d3b1335bc59bdff4d3d3f4417af1af8f2.jpg",
        "playhouse1.jpg": "embedded\u002Faa1855bf04c0a547da475d5b5ad1a4e9686c01c2283b788e34358394bdbf35f2.jpg"
      },
      "responses": {
        "keypress(l)": "practice_demo_correct_new"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "practice_instructions_3"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 510.51,
          "height": 105.04,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Good job! \n\nPress ENTER to begin the second phase",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "28",
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
      "title": "practice_instructions_4"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 18.69,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "+",
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
      "title": "post_instructions_fixation",
      "timeout": "2000"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "image1": "ring2.jpg",
          "correct_resp": "old"
        },
        {
          "image1": "rubberduck1.jpg",
          "correct_resp": "old"
        },
        {
          "image1": "rockinghorse1.jpg",
          "correct_resp": "new"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {
        "ring2.jpg": "embedded\u002F5f5b1a96da52509b3f3c1acaa0f7f44a3decd7cd41c6c4551e6a10e290e58017.jpg",
        "rockinghorse1.jpg": "embedded\u002F94c39750558981f14fc893caf31be6b5fa2657d343d99e007dd38889943eaf30.jpg",
        "rubberduck1.jpg": "embedded\u002Ffbd80973b97e7b8e6f6ca937131578511c75a5172781dc12ed7e27c3368f1056.jpg"
      },
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "practice_buffer_loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "practice_buffer_sequence",
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
            "title": "ISI",
            "timeout": "600"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": -40,
                "angle": 0,
                "width": 256,
                "height": 256,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.image1] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 175,
                "angle": 0,
                "width": 255.69,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "press K for old and L for new",
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
            "files": {
              "backpack1.jpg": "embedded\u002F7283233f216629f56ec26db54701d15738745a97b02b46ba00fe91a91ce8dc42.jpg"
            },
            "responses": {
              "keypress(k)": "old",
              "keypress(l)": "new"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "practice_buffer",
            "correctResponse": "${ [this.parameters.correct_resp] }"
          }
        ]
      }
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
      "title": "practice_to_test_buffer",
      "timeout": "1500"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
let done = false // is it the last screen?

const setVisibility = (selector, isVisible) => {
  // Extract the content from the current element
  const target = this.options.el.querySelector(selector)

  target.style.visibility = isVisible ? 'visible' : 'hidden'
}

const moveForth = (selector) => {
  const target = this.options.el.querySelector(selector)
  if(target.nextElementSibling){
    target.classList.add("hidden"); // hide current screen
    target.nextElementSibling.classList.remove("hidden"); //show next screen
    
    setVisibility('#bck', true) // make sure that 'back' button is visible

    if(!target.nextElementSibling.nextElementSibling){ // if the end is reached
      setVisibility('#fwd', false) // hide the forward button
      setVisibility('#done', true) // show the end button
      done = true
    }
  }
}

const moveBack = (selector) => {
  target = this.options.el.querySelector(selector);
  if(target.previousElementSibling){ //.innerHTML !== undefined
    target.classList.add("hidden");  // hide current screen
    target.previousElementSibling.classList.remove("hidden"); // show previous screen

    setVisibility('#fwd', true) // make sure that 'forward' button is visible
    setVisibility('#done', false) // hide the 'done' button
    done = false

    if(!target.previousElementSibling.previousElementSibling){ // if the beginning is reached
      setVisibility('#bck', false) // hide the back button
    }
  } 
}

this.options.events['keydown(ArrowRight)'] = function(){
  moveForth("section[id^='page']:not(.hidden)")
  moveForth("h2[id^='head']:not(.hidden)")
}

this.options.events['keydown(ArrowLeft)'] = function(){
  moveBack("section[id^='page']:not(.hidden)")
  moveBack("h2[id^='head']:not(.hidden)")
}

this.options.events['keypress(Enter)'] = function() {
    if(done)
      // End instructions
      this.end('done')
}
}
      },
      "title": "test_instructions",
      "content": "\u003Cheader\u003E\r\n  \u003Ch2 id=\"head1\"\u003E\u003C\u002Fh2\u003E\r\n  \u003Ch2 id=\"head2\" class=\"hidden\"\u003E\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Csection id=\"page1\"\u003E\r\n    \u003Cfont size=\"6\"\u003EIn the third phase of the experiment you will see two images \u003Cbr\u003E side by side. Choose the item that you think is most likely \u003Cbr\u003E\r\nto have been seen earlier, guessing if necessary. \u003Cbr\u003E\u003Cbr\u003E\r\n\r\nAccuracy is important but so is the speed of your response.\u003Cbr\u003E\r\nBe sure to respond as fast as possible.\r\n  \r\n  \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E You will make a keyboard response to indicate which item \u003Cbr\u003E is more likely to have been seen earlier.\u003Cbr\u003E\u003C\u002Ffont\u003E\r\n  \u003Cp\u003E\u003Cfont size=\"6\"\u003EPress \u003Ckbd\u003EN\u003C\u002Fkbd\u003E for the left item and \u003Ckbd\u003EM\u003C\u002Fkbd\u003E for the right image \u003Cbr\u003E Dont worry - each screen will have a reminder of these keys \u003C\u002Ffont\u003E\u003C\u002Fp\u003E\r\n    \u003Cp\u003E\r\n\u003C\u002Fp\u003E\r\n  \u003C\u002Fsection\u003E\r\n  \u003Csection id=\"page2\" class=\"hidden\"\u003E\r\n    \u003Cp\u003E \u003Cfont size=\"6\"\u003EThis example shows two images, waits for a keypress to continue\u003Cbr\u003E and gives timed feedback (if keypress is \u003E1500ms). \u003Cbr\u003E\u003Cbr\u003E You could also end the stim presentation after 1500ms and give feedback depending on task\u003C\u002Fp\u003E\u003C\u002Ffont\u003E\r\n  \u003C\u002Fsection\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  \u003Ctable class=\"table-plain\"\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd id=\"bck\" style=\"visibility: hidden\"\u003E\r\n        press the left arrow \u003Ckbd\u003E&larr;\u003C\u002Fkbd\u003E for the previous screen \r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd id=\"done\" style=\"visibility: hidden\"\u003E\r\n        press \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E to continue \r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd id=\"fwd\"\u003E\r\n        press the right arrow \u003Ckbd\u003E&rarr;\u003C\u002Fkbd\u003E for the next screen \r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E\r\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "image",
          "left": 175,
          "top": -75,
          "angle": 0,
          "width": 238.08,
          "height": 238.08,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"mixer1.jpg\"] }",
          "autoScale": undefined
        },
        {
          "type": "image",
          "left": -175,
          "top": -75,
          "angle": 0,
          "width": 240.64,
          "height": 240.64,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"mailbox1.jpg\"] }",
          "autoScale": undefined
        },
        {
          "type": "i-text",
          "left": -175,
          "top": 86,
          "angle": 0,
          "width": 18,
          "height": 20.34,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": " N",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "18",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 175,
          "top": 85,
          "angle": 0,
          "width": 14.99,
          "height": 20.34,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "M",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "18",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 175,
          "angle": 0,
          "width": 329.96,
          "height": 15.82,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "choose the item most likely to have been seen earlier",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "14",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -250,
          "angle": 0,
          "width": 392.51,
          "height": 29.29,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Let's say that the item on the right is most likely to have been seen earlier.\nPlease make the correct response.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "12",
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
        "backpack1.jpg": "embedded\u002F7283233f216629f56ec26db54701d15738745a97b02b46ba00fe91a91ce8dc42.jpg",
        "mailbox1.jpg": "embedded\u002Fad63760772a561b5874a1a29c908c0dff912250a4ca027f9ef45f5779991460f.jpg",
        "mixer1.jpg": "embedded\u002F942666d5b8cfdaace275e88d5a8fff14c907828d69edb66d2b3188591bdbf9f9.jpg"
      },
      "responses": {
        "keypress(m)": "image2"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "test_example_1",
      "correctResponse": "${"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "image",
          "left": 175,
          "top": -75,
          "angle": 0,
          "width": 238.08,
          "height": 238.08,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"bunkbed1.jpg\"] }",
          "autoScale": undefined
        },
        {
          "type": "image",
          "left": -175,
          "top": -75,
          "angle": 0,
          "width": 240.64,
          "height": 240.64,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"phone2.jpg\"] }",
          "autoScale": undefined
        },
        {
          "type": "i-text",
          "left": -175,
          "top": 86,
          "angle": 0,
          "width": 13,
          "height": 20.34,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "N",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "18",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 175,
          "top": 85,
          "angle": 0,
          "width": 14.99,
          "height": 20.34,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "M",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "18",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 175,
          "angle": 0,
          "width": 329.96,
          "height": 15.82,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "choose the item most likely to have been seen earlier",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "14",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -250,
          "angle": 0,
          "width": 385.17,
          "height": 29.29,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Let's say that the item on the left is most likely to have been seen earlier.\nPlease make the correct response.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "12",
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
        "backpack1.jpg": "embedded\u002F7283233f216629f56ec26db54701d15738745a97b02b46ba00fe91a91ce8dc42.jpg",
        "mailbox1.jpg": "embedded\u002Fad63760772a561b5874a1a29c908c0dff912250a4ca027f9ef45f5779991460f.jpg",
        "mixer1.jpg": "embedded\u002F942666d5b8cfdaace275e88d5a8fff14c907828d69edb66d2b3188591bdbf9f9.jpg",
        "bunkbed1.jpg": "embedded\u002Ff08bc2d1298374d892d2b0dbd330c54761d156807abb8c2ec5aa8220ec4ea885.jpg",
        "phone2.jpg": "embedded\u002Feaba5851f3922781d04478c2bfdac5d73d5153107b420e67c2290448eec8a8b2.jpg"
      },
      "responses": {
        "keypress(n)": "image1"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "test_example_2",
      "correctResponse": "${"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -210,
          "angle": 0,
          "width": 540.68,
          "height": 22.6,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "You will get feedback if you are too slow to make a response.",
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
      "files": {
        "cutler_CEMS2020.gif": "embedded\u002Fa5c6d306cb9792885354748e20b69545d8c65e08df2db4146bbd340601ebb271.gif",
        "Screen Recording 2020-09-09 at 03.48.53.gif": "embedded\u002F89b8ba3e92c2d537c6dc0029111a7ae29f7786a484a81a6d83a3efd360926d5d.gif",
        "too_slow.gif": "embedded\u002Fa162d0bf73ca74b1a73984e4f67a84d6a166564abb2d56796545267e0a1020a4.gif"
      },
      "responses": {
        "keypress(Enter)": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "test_instructions_4.2",
      "timeout": "2000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 126.28,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "too slow!",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -210,
          "angle": 0,
          "width": 540.68,
          "height": 22.6,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "You will get feedback if you are too slow to make a response.",
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
      "files": {
        "cutler_CEMS2020.gif": "embedded\u002Fa5c6d306cb9792885354748e20b69545d8c65e08df2db4146bbd340601ebb271.gif",
        "Screen Recording 2020-09-09 at 03.48.53.gif": "embedded\u002F89b8ba3e92c2d537c6dc0029111a7ae29f7786a484a81a6d83a3efd360926d5d.gif",
        "too_slow.gif": "embedded\u002Fa162d0bf73ca74b1a73984e4f67a84d6a166564abb2d56796545267e0a1020a4.gif"
      },
      "responses": {
        "keypress(Enter)": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "test_instructions_4.3",
      "timeout": "2000"
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
      "title": "test_instructions_4.5",
      "timeout": "500"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 25,
          "angle": 0,
          "width": 501.87,
          "height": 33.9,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": " Press ENTER to start the third phase",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "30",
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
        "keypress(Enter)": "enter_test_phase"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "test_instructions_5"
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
      "title": "post_instructions_fixation",
      "timeout": "2000"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "image1": "rubberduck1.jpg",
          "image2": "pumpkin1.jpg",
          "correct_resp": "1"
        },
        {
          "image1": "pruner1.jpg",
          "image2": "glasses2.jpg",
          "correct_resp": "2"
        },
        {
          "image1": "tree2.jpg",
          "image2": "basket2.jpg",
          "correct_resp": "1"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {
        "rubberduck1.jpg": "embedded\u002Ffbd80973b97e7b8e6f6ca937131578511c75a5172781dc12ed7e27c3368f1056.jpg",
        "glasses2.jpg": "embedded\u002F96b604143d08ea594823412865f7500fa97232f12e71d0a6facf988cde80b2a0.JPG",
        "pumpkin1.jpg": "embedded\u002Ff9f249d7c024b7216630477b56e5ceceecddbfd99c61391477c5cd6126d6872f.jpg",
        "pruner1.jpg": "embedded\u002F7d4090aec58f4b367c1fe1662d4b4ca1102b2862712805773127ef643e8d3861.jpg",
        "tree2.jpg": "embedded\u002F3e111a01dbefd8e3c0fa46d6c125d903ba62e600fd83e02b9645300354537caa.jpg",
        "basket2.jpg": "embedded\u002F37fed9e5bff9a4f114662beb6d478e6fe8da1e6f8dbd8ac206bc5f6b0e0eaa5c.jpg"
      },
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "test_buffer_loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "test_buffer_sequence",
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
            "title": "ISI",
            "timeout": "400"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 175,
                "top": -75,
                "angle": 0,
                "width": 238.08,
                "height": 238.08,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.image2] }"
              },
              {
                "type": "image",
                "left": -175,
                "top": -75,
                "angle": 0,
                "width": 240.64,
                "height": 240.64,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.image1] }"
              },
              {
                "type": "i-text",
                "left": -175,
                "top": 86,
                "angle": 0,
                "width": 13,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "N",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 175,
                "top": 85,
                "angle": 0,
                "width": 14.99,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "M",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 175,
                "angle": 0,
                "width": 329.96,
                "height": 15.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "choose the item most likely to have been seen earlier",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "14",
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
              "backpack1.jpg": "embedded\u002F7283233f216629f56ec26db54701d15738745a97b02b46ba00fe91a91ce8dc42.jpg"
            },
            "responses": {
              "keypress(n)": "1",
              "keypress(m)": "2"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "test_buffer_stimulus",
            "correctResponse": "${ [this.parameters.correct_resp] }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 133.39,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Too slow!",
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
            "title": "test_buffer_feedback",
            "timeout": "1000",
            "tardy": true,
            "skip": "${ this.state.duration \u003C 2000 }"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "end_sequence",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 461.88,
              "height": 120.05,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "end of demo\n\npress SPACE to access the data",
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
          "responses": {
            "keypress(Space)": "get_data"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "end"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -11,
              "top": 0,
              "angle": 0,
              "width": 609.21,
              "height": 258.54,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "download data ^ \n\none thing to note is that this option is only available if you \ncode in an end to the experiment - and that is lab.js specific (I think). \n\n\nSo for actual participants the backend code for this screen \nwill be a data transfer to JATOS\n\nyou can hit 'esc' to exit full screen",
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
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "end of demo",
          "timeout": "500"
        }
      ]
    }
  ]
})

// Let's go!
study.run()