function help() {
    var msg = {
        "type": "text",
        "text": "Help \nFull command list with sample \n [ \"help\" ,(e.g. \"help\") ]\n\nCOMMAND \n Command List (no sample) \n [ \"command\", (e.g. \"command\") ]\n\nCOMMANDLIST \n Command list sort by alphabet (without any description) \n [ \"commandlist\", \"commandlist-<pattern>\" (e.g. \"commandlist\") ]\n\n--------------------\n\nFN\n Show employee infomation by Firstname\n [ \"fn>\"Employee Firstname\"], (e.g. \"fn>jirasit\")\n\nNN\n Show employee infomation by Nickname\n [ \"nn>\"Employee Nickname\"], (e.g. \"fn>sudyod\")\n\nEMPLOYEE>\nShow employee list\n [ \"employee>], (e.g. \"employee>\")\n\nHOLIDAY>\nShow holiday list\n [ \"employee>], (e.g. \"holiday>\")\n\nTODAY>\nShow current date\n if today is holiday Show holiday of current date\n [ \"today>], (e.g. \"today>\")\n\nLEAVE>\nGenerate Leave Request Form in PDF.\n [ \"leave>\"Type of leave\" \"Firstname\" \"Lastname\" \"TEAM\" \"FirstDate\" to \"LastDate\"], (e.g. \"leave>1 Sattaya Rakjan abap 19/09/2019 to 21/09/2019\")\n\nRemark ; Type of leave :[1]= Sick Leave / [2]= Personal Leave / [3]= Annual Leave / [4]= Compensate / [5]= Leave with out pay\n\nBR>\nSends push messages to multiple everybody\n [ \"br>\"message for broadcast\"], (e.g. \"br>Hello\")\n\nMEDIA>\nSends push image,location,sticker to everybody\n [ \"media>], (e.g. \"holiday>\")"
      };
    return msg;
  }
  export { help };
