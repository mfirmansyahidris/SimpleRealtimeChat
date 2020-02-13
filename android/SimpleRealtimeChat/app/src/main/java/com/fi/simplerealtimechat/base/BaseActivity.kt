package com.fi.simplerealtimechat.base

import android.annotation.SuppressLint
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar

/**
 ****************************************
created by -fi-
.::manca.fi@gmail.com ::.

13/02/2020, 10:05 AM
 ****************************************
 */

abstract class BaseActivity : AppCompatActivity() {
    protected var toolbar: Toolbar? = null

    @SuppressLint("RestrictedApi")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(getLayoutResource())
        if (getToolbarResource() != 0) {
            toolbar = findViewById(getToolbarResource())
            toolbar?.title = getToolbarTitle()
            setSupportActionBar(toolbar)
        }
        mainCode()
    }

    protected abstract fun getLayoutResource(): Int
    protected abstract fun getToolbarResource(): Int
    protected abstract fun getToolbarTitle(): String
    protected abstract fun mainCode()
}