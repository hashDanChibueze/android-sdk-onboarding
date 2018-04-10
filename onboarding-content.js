[{
		"name": "Install SDK",
		"label": "Import the SDK in your app",
		"status": "active",
		"content": [{
				"fileName": "build.gradle",
				"label": "Import our SDK into your app",
				"type": "code-block",
				"language": "gradle",
				"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/build.gradle",
				"lines": [{
						"start": 1,
						"end": 1
					},
					{
						"start": 9,
						"end": 13
					},
					{
						"start": 15,
						"end": 23
					},
					{
						"start": 36,
						"end": 44
					},
					{
						"start": 57,
						"end": 58
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
					"start": 1,
					"end": 3
				}]
			}
		]
	}, {
		"name": "Enable communication",
		"status": "incomplete",
		"content": [{
				"fileName": "MyFirebaseMessagingService.java",
				"type": "code-block",
				"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/MyFirebaseMessagingService.java",
				"lines": [{
					"start": 1,
					"end": 6
				}],
				"language": "java",
				"label": "Enable bidirectional communication between server and SDK using FCM notifications"
			},
			{
				"fileName": "AndroidManifest.xml",
				"type": "code-block",
				"fileURL": "https://github.com/hypertrack/android-sdk-onboarding/blob/master/app/src/main/AndroidManifest.xml",
				"lines": [{
						"start": 1,
						"end": 21
					},
					{
						"start": 29,
						"end": 30
					}
				],
				"language": "xml",
				"label": "Enable bidirectional communication between server and SDK using FCM notifications"
			},
			{
				"label": "Add your FCM key",
				"type": "video-block",
				"content": "Head over to <a href='https://console.firebase.google.com/project/'>FCM Console</a>, select your project, and then visit Settings > Cloud Messaging to get your FCM server key. Copy the key and it in our dashbaord settings",
				"cta": {
					"text": "Add your FCM key",
					"href": "https://dashboard.hypertrack.com/settings"
				}
			}
		]
	}, {
		"name": "Set permissions",
		"label": "Set the right permissions",
		"status": "incomplete",
		"content": [{
			"fileName": "LoginActivity.java",
			"type": "code-block",
			"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/LoginActivity.java",
			"lines": [{
					"start": 1,
					"end": 82
				},
				{
					"start": 93,
					"end": 105
				},
				{
					"start": 126,
					"end": 132
				},
				{
					"start": 149,
					"end": 241
				}
			],
			"label": "Ask user permission to access location",
			"language": "java"
		}]
	},

	{
		"name": "Add user",
		"status": "incomplete",
		"content": [{
			"fileName": "LoginActivity.java",
			"type": "code-block",
			"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/LoginActivity.java",
			"lines": [{
					"start": 1,
					"end": 177
				},
				{
					"start": 183,
					"end": 190
				},
				{
					"start": 195,
					"end": 200
				},
				{
					"start": 203,
					"end": 241
				}
			],
			"language": "java",
			"label": "Add user on the SDK to identify the device"
		}]
	}, {
		"name": "Create action",
		"status": "incomplete",
		"content": [{
			"label": "Action is the unit of tracking with HyperTrack. Actions typically correspond to the key actions that your users perform in your app: e.g., visit, meetup, pickup, delivery, and so on. Learn more about how you can build your use case with Actions.",
			"type": "action-picker",
			"actionSwitchList": [{
				"icon": "",
				"title": "DELIVERY",
				"description": "Create a delivery action with an expected place and expected time that, for example, auto-completes when the user arrives at the expected place.",
				"content": {
					"label": "",
					"title": "DELIVERY",
					"fileName": "MainActivity.java",
					"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/MainActivity.java",
					"lines": [{
							"start": 1,
							"end": 69
						},
						{
							"start": 88,
							"end": 150
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
					"title": "VISIT",
					"fileName": "MainActivity.java",
					"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/MainActivity.java",
					"lines": [{
							"start": 1,
							"end": 95
						},
						{
							"start": 109,
							"end": 150
						}
					],
					"language": "java"
				}
			}, {
				"icon": "",
				"title": "TRACK THROUGH THE DAY",
				"description": "In case you want to track a user through the day, set up a rule that auto-creates an action at the start of the day and auto-completes it at the end of the day.",
				"content": {
					"label": "",
					"title": "TRACK",
					"fileName": "LoginActivity.java",
					"fileURL": "https://raw.githubusercontent.com/hypertrack/android-sdk-onboarding/master/app/src/main/java/com/hypertrack/androidsdkonboarding/LoginActivity.java",
					"lines": [{
						"start": 209,
						"end": 234
					}],
					"language": "java"
				}
			}]
		}]
	}, {
		"name": "Track action",
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
					"text": "See API response",
					"url": "https://docs.hypertrack.com/api/entities/action.html#properties-computed-by-hypertrack"
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
	}
]