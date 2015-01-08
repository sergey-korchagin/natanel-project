

package com.gov.natanel;

import java.io.File;

import android.os.Bundle;
import android.os.Environment;

import org.apache.cordova.*;

public class Natanel extends CordovaActivity 
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.init();
      
        
        //if used go to main else to login page
        if(isExistsUser())
        {
        	super.loadUrl("file:///android_asset/www/main.html");
        }
        else
        {
        	super.loadUrl("file:///android_asset/www/index.html");
        }
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

