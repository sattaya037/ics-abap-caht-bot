
const help = {
    "type": "text",
    "text": "Help \nFull command list with sample \n [ \"help\" ,(e.g. \"help\") ]\n\nCOMMAND \n Command List (no sample) \n [ \"command\", (e.g. \"command\") ]\n\nCOMMANDLIST \n Command list sort by alphabet (without any description) \n [ \"commandlist\", \"commandlist-<pattern>\" (e.g. \"commandlist\") ]\n\n--------------------\n\nFN\n Show employee infomation by Firstname\n [ \"fn>\"Employee Firstname\"], (e.g. \"fn>jirasit\")\n\nNN\n Show employee infomation by Nickname\n [ \"nn>\"Employee Nickname\"], (e.g. \"fn>sudyod\")\n\nEMPLOYEE>\nShow employee list\n [ \"employee>], (e.g. \"employee>\")\n\nHOLIDAY>\nShow holiday list\n [ \"employee>], (e.g. \"holiday>\")\n\nTODAY>\nShow current date\n if today is holiday Show holiday of current date\n [ \"today>], (e.g. \"today>\")\n\nLEAVE>\nGenerate Leave Request Form in PDF.\n [ \"leave>\"Type of leave\" \"Firstname\" \"Lastname\" \"TEAM\" \"FirstDate\" to \"LastDate\"], (e.g. \"leave>1 Sattaya Rakjan abap 19/09/2019 to 21/09/2019\")\n\nRemark ; Type of leave :[1]= Sick Leave / [2]= Personal Leave / [3]= Annual Leave / [4]= Compensate / [5]= Leave with out pay\n\nBR>\nSends push messages to multiple everybody\n [ \"br>\"message for broadcast\"], (e.g. \"br>Hello\")\n\nMEDIA>\nSends push image,location,sticker to everybody\n [ \"media>], (e.g. \"holiday>\")"
  };
  exports.help = help;

  const command = {
    "type": "text",
    "text": "HELP \n Full command list with sample\n\nCOMMAND \n Command List (no sample)\n\nCOMMANDLIST \n Command list sort by alphabet (without any description)\n\n--------------------\n\nFN\n Show employee infomation by Firstname\n\nNN\n Show employee infomation by Nickname\n\nEMPLOYEE>\nShow employee list\n\nHOLIDAY>\nShow holiday list\n\nTODAY>\nShow current date\n if today is holiday Show holiday of current date\n\nLEAVE>\nGenerate Leave Request Form in PDF.\n\nRemark ; Type of leave :[1]= Sick Leave / [2]= Personal Leave / [3]= Annual Leave / [4]= Compensate / [5]= Leave with out pay\n\nBR>\nSends push messages to multiple everybody\n\nMEDIA>\nSends push image,location,sticker to everybody\n"
  };
  exports.command = command;

  const register =[
    {
      "type": "flex",
      "altText": "Register",
      "contents": {
        "type": "bubble",
        "direction": "ltr",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "Register",
                "uri": "line://app/1613757134-6lryAaWB"
              }
            }
          ]
        }
      }
    }
  ]
  exports.register = register;

  const shortcut =[{
    "type": "imagemap",
    "baseUrl": "https://manoch.herokuapp.com/rich?_ignored=",
    "altText": "This is an imagemap a",
    "baseSize": {
      "width": 1040,
      "height": 1040
    },
    "actions": [
      {
        "type": "message",
        "area": {
          "x": 37,
          "y": 96,
          "width": 476,
          "height": 461
        },
        "text": "command"
      },
      {
        "type": "message",
        "area": {
          "x": 552,
          "y": 93,
          "width": 447,
          "height": 461
        },
        "text": "employee>"
      },
      {
        "type": "message",
        "area": {
          "x": 46,
          "y": 630,
          "width": 470,
          "height": 410
        },
        "text": "today>"
      },
      {
        "type": "uri",
        "area": {
          "x": 563,
          "y": 634,
          "width": 434,
          "height": 406
        },
        "linkUri": "line://app/1613757134-7LX41NrK"
      }
    ]
  }
  ]
  exports.shortcut = shortcut;

  var broadcast =  [
    {
      "type": "text",
      "text": "Please select your content for broadcast.",
      "quickReply": {
        "items": [
          {
            "type": "action",
            "action": {
              "type": "cameraRoll",
              "label": "Camera Roll"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "camera",
              "label": "Camera"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "location",
              "label": "Location"
            }
          }
        ]
      }
    }
  ];
  exports.broadcast = broadcast;
