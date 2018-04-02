[
  {
    "name": "1 | Install SDK",
    "status": "active",
    "content" : [
      {
        "fileName": "build.gradle",
        "label" : "Import our SDK into your app",
        "language": "gradle",
        "fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/build.gradle",
        "lines": [
          {
            "start": 8,
            "end": 8
          },
          {
            "start": 28,
            "end": 30
          },
          {
            "start": 42,
            "end": 52
          }
        ]
      },
      {
        "fileName": "MyApplication.java",
        "label" : "Initialize the SDK with your publishable keys",
        "language": "java",
        "fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/MyApplication.java",
        "lines": [
          {
            "start": 17,
            "end": 22
          }
        ]
      }
    ]
  }, {
    "name": "2 | Set permissions",
    "status": "incomplete",
    "content": [{
      "fileName": "LoginActivity.java",
      "fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/LoginActivity.java",
      "lines": [
        {
          "start": 65,
          "end": 77
        },
        {
          "start": 79,
          "end": 98
        },
        {
          "start": 188,
          "end": 213
        },
        {
          "start": 215,
          "end": 235
        }
      ],
      "label": "Ask your users permission to access location",
      "language": "java"
    }]
  }, {
    "name": "3 | Enable communication",
    "status": "incomplete",
    "content": [
      {
        "fileName": "MyFirebaseMessagingService.java",
        "fileURL": "https://raw.githubusercontent.com/hypertrack/use-cases-example-android/master/app/src/main/java/com/hypertrack/usecases/firebase/MyFirebaseMessagingService.java",
        "lines": [
          {
            "start": 1,
            "end": 16
          }
        ],
        "language": "java",
        "label": "Enable bidirectional communication between server and SDK using FCM notifications"
      }
    ]
  }, {
    "name": "4 | Add user",
    "status": "incomplete",
    "content" : [
      {
        "fileName": "LoginActivity.java",
        "fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/LoginActivity.java",
        "lines": [
          {
            "start": 119,
            "end": 130
          },
          {
            "start": 134,
            "end": 152
          },
          {
            "start": 155,
            "end": 186
          }
        ],
        "language": "java",
        "label": "Add user on the SDK to identify the device"
      }
    ]
  }, {
    "name": "5 | Create action",
    "status": "incomplete",
    "content" : [{
      "label" : "Actions are what you intend to be tracking with HyperTrack. Actions typically correspond to the key actions that your users perform in your app: e.g., visit, meetup, pickup, delivery, and so on. Learn more about how you can build your use case with Actions.",
      "actionSwitchList": [{
        "icon" : "",
        "title" : "DELIVERY",
        "description" : "Create a delivery action with an expected place and expected time that, for example, auto-completes when the user arrives at the expected place."
      },{
        "icon" : "",
        "title" : "VISIT",
        "description" : "Create a visit action with no expected place. Mark it complete using an API call."
      },{
        "icon" : "",
        "title" : "TRACK THROUGH THE DAY",
        "description" : "In case you want to track a user through the day, set up a rule that auto-creates an action at the \"start\"of the day and auto-completes it at the end of the day."
      }],
      "caseItems" : [
        {
          "label" : "Create a delivery action with an expected place and expected time that, for example, auto-completes when the user arrives at the expected place.",
          "title" : "DELIVERY",
          "fileName": "LoginActivity.java",
          "fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/LoginActivity.java",
          "lines": [
            {
              "start": 119,
              "end": 130
            },
            {
              "start": 134,
              "end": 152
            },
            {
              "start": 155,
              "end": 186
            }
          ],
          "language": "java"
        }
      ]
    }]
  }, {
    "name": "6 | Track action",
    "status": "incomplete",
    "content" : []
  }
]
