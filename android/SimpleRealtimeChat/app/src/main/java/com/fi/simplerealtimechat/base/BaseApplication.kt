package com.fi.simplerealtimechat.base

import android.app.Application
import android.util.Log
import com.fi.simplerealtimechat.utils.Utils

/**
 ****************************************
created by -fi-
.::manca.fi@gmail.com ::.

13/02/2020, 10:09 AM
 ****************************************
 */

class BaseApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        Log.d(Utils().tag, "creating application")
    }
}