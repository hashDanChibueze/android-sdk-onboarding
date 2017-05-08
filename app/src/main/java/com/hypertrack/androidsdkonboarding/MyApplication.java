package com.hypertrack.androidsdkonboarding;

import android.app.Application;

import com.hypertrack.lib.HyperTrack;

/**
 * Created by piyush on 08/05/17.
 */

public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        // Initialize HyperTrack SDK with your Publishable Key here
        // Refer to documentation at https://docs.hypertrack.com/v3/gettingstarted/authentication.html#publishable-key
        // @NOTE: Add **YOUR_PUBLISHABLE_KEY_HERE** here for SDK to be authenticated with HyperTrack Server
        HyperTrack.initialize(this, YOUR_PUBLISHABLE_KEY_HERE);
    }
}