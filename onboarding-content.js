[{
	"name": "1 | Install SDK",
	"label": "Import the SDK in your app",
	"status": "active",
	"content": [{
			"fileName": "build.gradle",
			"label": "Import our SDK into your app",
			"type": "code-block",
			"language": "gradle",
			"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/build.gradle",
			"lines": [{
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
			"label": "Initialize the SDK with your publishable keys",
			"type": "code-block",
			"language": "java",
			"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/MyApplication.java",
			"lines": [{
				"start": 17,
				"end": 22
			}]
		}
	]
}, {
	"name": "2 | Set permissions",
	"label": "Set the right permissions",
	"status": "incomplete",
	"content": [{
		"fileName": "LoginActivity.java",
		"type": "code-block",
		"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/LoginActivity.java",
		"lines": [{
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
		"label": "Ask user permission to access location",
		"language": "java"
	}]
}, {
	"name": "3 | Enable communication",
	"status": "incomplete",
	"content": [{
		"fileName": "MyFirebaseMessagingService.java",
		"type": "code-block",
		"fileURL": "https://raw.githubusercontent.com/hypertrack/use-cases-example-android/master/app/src/main/java/com/hypertrack/usecases/firebase/MyFirebaseMessagingService.java",
		"lines": [{
			"start": 1,
			"end": 16
		}],
		"language": "java",
		"label": "Enable bidirectional communication between server and SDK using FCM notifications"
	}]
}, {
	"name": "4 | Add user",
	"status": "incomplete",
	"content": [{
		"fileName": "LoginActivity.java",
		"type": "code-block",
		"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/LoginActivity.java",
		"lines": [{
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
	}]
}, {
	"name": "5 | Create action",
	"status": "incomplete",
	"content": [{
		"label": "Action is the unit of tracking with HyperTrack. Actions typically correspond to the key actions that your users perform in your app: e.g., visit, meetup, pickup, delivery, and so on. <a href=\"https://www.hypertrack.com/docs/guides/action\" target=\"_blank\">Learn more\n</a> about how you can build your use case with Actions.",
		"type": "action-picker",
		"actionSwitchList": [{
			"icon": "",
			"title": "DELIVERY",
			"description": "Create a delivery action with an expected place and expected time that, for example, auto-completes when the user arrives at the expected place.",
			"content": {
				"label": "",
				"title": "DELIVERY",
				"fileName": "LoginActivity.java",
				"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/LoginActivity.java",
				"lines": [{
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
		}, {
			"icon": "",
			"title": "VISIT",
			"description": "Create a visit action with no expected place. Mark it complete using an API call.",
			"content": {
				"label": "",
				"title": "DELIVERY",
				"fileName": "LoginActivity.java",
				"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/LoginActivity.java",
				"lines": [{
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
		}, {
			"icon": "",
			"title": "TRACK THROUGH THE DAY",
			"description": "In case you want to track a user through the day, set up a rule that auto-creates an action at the start of the day and auto-completes it at the end of the day."
		}]
	}]
}, {
	"name": "6 | Track action",
	"status": "incomplete",
	"content": [{
		"type": "track-options",
		"cards": [{
			"title": "Dashboard",
			"text": "Every action that you create can be tracked on HyperTrack dashboard. You can also embed this view as iframe into your own dashboard.",
			"cta": {
				"text": "Track on dashboard",
				"url": "https://dashboard.hypertrack.com/list/actions"
			}
		}, {
			"title": "Tracking URL",
			"text": "For every action that you create, we send an unique trck.at URL in response to create-action API.",
			"cta": {
				"text": "Track on Unique URL",
				"url": "http://eta.fyi/GKVG9d"
			}
		}, {
			"title": "Track within your app",
			"text": "You can build a tracking experience within your Android app, iOS app or Web app using our SDKs.",
			"cta": {
				"text": "See guide",
				"url": "https://www.hypertrack.com/docs/guides/action"
			}
		}]
	}]
}]
