define({ "api": [
  {
    "type": "post",
    "url": "/lmn/private/reverseProxyRequest",
    "title": "Add Vnc Proxy Config",
    "name": "SandboxAddVncProxyConfig",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hostname",
            "description": "<p>server host you wish to use in vnc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "port",
            "description": "<p>server port you wish to use in vnc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/dispatchJob",
    "title": "Dispatch Background Job",
    "name": "SandboxDispatchJob",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "function_name",
            "description": "<p>Target function name to run</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "parameters",
            "description": "<p>Parameters to use in function.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Simply returns ok string.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/getFileApi",
    "title": "Receive file from the server.",
    "name": "SandboxGetFile",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localPath",
            "description": "<p>Local full file path.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remotePath",
            "description": "<p>Remote full file path.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "output",
            "description": "<p>ok or no according to status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/getJobList",
    "title": "Get List and Status of Background Processes",
    "name": "SandboxGetJobList",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "function_name",
            "description": "<p>Target function to check</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "json",
            "description": "<p>hold, success, fail and total counts.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/openTunnel",
    "title": "OpenSSH Tunnel Request",
    "name": "SandboxOpenSSHTunnel",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remote_host",
            "description": "<p>server host you wish to tunnel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remote_port",
            "description": "<p>server port you wish to tunnel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>server username you wish to tunnel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>server password you wish to tunnel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Tunnel token to close later on.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/putFileApi",
    "title": "Send file to the server.",
    "name": "SandboxPutFile",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localPath",
            "description": "<p>Local full file path.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remotePath",
            "description": "<p>Remote full file path you wish.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "output",
            "description": "<p>ok or no according to status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/runCommandApi",
    "title": "Run command on the server",
    "name": "SandboxRunCommand",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "command",
            "description": "<p>Command to run.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "output",
            "description": "<p>Output of the command.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/runScriptApi",
    "title": "Run script on the server",
    "name": "SandboxRunScript",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scriptName",
            "description": "<p>Script to run (inside scripts folder)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>Parameters as string -cli style-</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "runAsRoot",
            "description": "<p>If you wish to run script as root, simply send yes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "output",
            "description": "<p>Output of the script.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/stopTunnel",
    "title": "Close OpenSSH Tunnel",
    "name": "SandboxStopSSHTunnel",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remote_host",
            "description": "<p>server host you wish to tunnel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remote_port",
            "description": "<p>server port you wish to tunnel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  }
] });