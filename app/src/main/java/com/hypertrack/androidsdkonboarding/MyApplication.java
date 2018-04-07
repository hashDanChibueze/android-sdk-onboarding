package com.hypertrack.androidsdkonboarding;

import android.app.Application;

import com.hypertrack.lib.HyperTrack;

public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        // Initialize HyperTrack SDK with your Publishable Key here
        // Refer to documentation at
        // https://docs.hypertrack.com/#authentication
        // @NOTE: Add **YOUR_PUBLISHABLE_KEY_HERE** here for SDK to be
        // authenticated with HyperTrack Server
        HyperTrack.initialize(this, YOUR_PUBLISHABLE_KEY_HERE);
    }
}