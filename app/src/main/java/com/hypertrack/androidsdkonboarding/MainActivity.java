package com.hypertrack.androidsdkonboarding;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.hypertrack.lib.HyperTrack;
import com.hypertrack.lib.callbacks.HyperTrackCallback;
import com.hypertrack.lib.internal.common.util.HTTextUtils;
import com.hypertrack.lib.models.Action;
import com.hypertrack.lib.models.ActionParamsBuilder;
import com.hypertrack.lib.models.ErrorResponse;
import com.hypertrack.lib.models.GeoJSONLocation;
import com.hypertrack.lib.models.Place;
import com.hypertrack.lib.models.SuccessResponse;

import static com.hypertrack.androidsdkonboarding.LoginActivity.HT_QUICK_START_SHARED_PREFS_KEY;

public class MainActivity extends BaseActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Initialize Toolbar
        initToolbar(getString(R.string.app_name));

        // Initialize UI Views
        initUIViews();
    }

    private void initUIViews() {
        // Initialize AssignAction Button
        Button logoutButton = (Button) findViewById(R.id.logout_btn);
        if (logoutButton != null)
            logoutButton.setOnClickListener(logoutButtonClickListener);
    }

    // Click Listener for AssignAction Button
    private View.OnClickListener logoutButtonClickListener = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            Toast.makeText(MainActivity.this, R.string.main_logout_success_msg,
                    Toast.LENGTH_SHORT).show();

            // Stop HyperTrack SDK
            if (!HTTextUtils.isEmpty(getDeliveryActionId()))
                HyperTrack.completeAction(getDeliveryActionId());
            if (!HTTextUtils.isEmpty(getVisitActionId()))
                HyperTrack.completeAction(getVisitActionId());

            clearUser();

            // Proceed to LoginActivity for a fresh User Login
            Intent loginIntent = new Intent(MainActivity.this,
                    LoginActivity.class);
            loginIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
            startActivity(loginIntent);
            finish();
        }
    };

    public void createDeliveryAction(View view) {
        Place expectedPlace = new Place();
        expectedPlace.setLocation(new GeoJSONLocation(12.928951, 77.632951));

        ActionParamsBuilder actionParamsBuilder = new ActionParamsBuilder();
        actionParamsBuilder.setType(Action.TYPE_DELIVERY);
        actionParamsBuilder.setExpectedPlace(expectedPlace);

        HyperTrack.createAndAssignAction(actionParamsBuilder.build(), new HyperTrackCallback() {
            @Override
            public void onSuccess(@NonNull SuccessResponse response) {
                Action action = (Action) response.getResponseObject();
                saveDeliveryAction(action);
            }

            @Override
            public void onError(@NonNull ErrorResponse errorResponse) {
            }
        });
    }

    public void completeDeliveryAction(View view) {
        HyperTrack.completeAction(getDeliveryActionId());
    }

    public void createVisitAction(View view) {
        ActionParamsBuilder actionParamsBuilder = new ActionParamsBuilder();
        actionParamsBuilder.setType(Action.TYPE_VISIT);

        HyperTrack.createAndAssignAction(actionParamsBuilder.build(), new HyperTrackCallback() {
            @Override
            public void onSuccess(@NonNull SuccessResponse response) {
                Action action = (Action) response.getResponseObject();
                saveVisitAction(action);
            }

            @Override
            public void onError(@NonNull ErrorResponse errorResponse) {
            }
        });
    }

    public void completeVisitAction(View view) {
        HyperTrack.completeAction(getVisitActionId());
    }

    private String getDeliveryActionId() {
        SharedPreferences sharedPreferences = getSharedPreferences(HT_QUICK_START_SHARED_PREFS_KEY,
                Context.MODE_PRIVATE);
        return sharedPreferences.getString("delivery_action_id", null);
    }

    private String getVisitActionId() {
        SharedPreferences sharedPreferences = getSharedPreferences(HT_QUICK_START_SHARED_PREFS_KEY,
                Context.MODE_PRIVATE);
        return sharedPreferences.getString("visit_action_id", null);
    }

    private void saveDeliveryAction(Action action) {
        SharedPreferences sharedPreferences = getSharedPreferences(HT_QUICK_START_SHARED_PREFS_KEY,
                Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString("delivery_action_id", action.getId());
        editor.apply();
    }

    private void saveVisitAction(Action action) {
        SharedPreferences sharedPreferences = getSharedPreferences(HT_QUICK_START_SHARED_PREFS_KEY,
                Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString("visit_action_id", action.getId());
        editor.apply();
    }

    public void clearUser() {
        SharedPreferences sharedPreferences = getSharedPreferences(HT_QUICK_START_SHARED_PREFS_KEY,
                Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.clear();
        editor.apply();
    }
}