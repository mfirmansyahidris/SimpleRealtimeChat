package com.fi.simplerealtimechat.base

import android.app.Application
import android.util.Log
import com.fi.simplerealtimechat.utils.Utils
import com.orhanobut.logger.AndroidLogAdapter
import com.orhanobut.logger.BuildConfig
import com.orhanobut.logger.Logger
import com.orhanobut.logger.PrettyFormatStrategy

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

        val formatStrategy = PrettyFormatStrategy.newBuilder()
            .showThreadInfo(false)
            .methodCount(2)
            .methodOffset(5)
            .tag(BuildConfig.APPLICATION_ID)
            .build()
        Logger.addLogAdapter(AndroidLogAdapter(formatStrategy))
    }
}