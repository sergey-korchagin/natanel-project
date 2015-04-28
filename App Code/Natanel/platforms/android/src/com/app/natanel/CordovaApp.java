

package com.app.natanel;

import android.os.Bundle;
import android.os.Environment;

import org.apache.cordova.*;

import java.io.File;

public class CordovaApp extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.init();
        // Set by <content src="index.html" /> in config.xml

            loadUrl(launchUrl);

    }


    /*
     *  checks if user loged in the app in her phone or not
     */
    public boolean isExistsUser()
    {
        String youFilePath = Environment.getExternalStorageDirectory().toString() + "/user.txt";
        File file=new File(youFilePath);

        if(file.exists())
        {
            return true;
        }
        return false;
    }
}
