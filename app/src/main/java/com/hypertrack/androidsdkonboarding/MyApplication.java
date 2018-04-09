package com.hypertrack.androidsdkonboarding;

import android.app.Application;

import com.hypertrack.lib.HyperTrack;

public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        // Initialize HyperTrack SDK with your Publishable Key here.
        // You need to sign up to get your keys: 
        // https://www.hypertrack.com/signup
        // Your keys are available here:
        // https://dashboard.hypertrack.com/settings
        HyperTrack.initialize(this, YOUR_PUBLISHABLE_KEY_HERE);
    }
}
