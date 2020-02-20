package com.fi.simplerealtimechat.utils

import android.content.Context
import android.content.SharedPreferences
import android.util.Log

/**
 ****************************************
created by -fi-
.::manca.fi@gmail.com ::.

13/02/2020, 11:17 AM
 ****************************************
 */

class PrefManager
constructor(context: Context) {
    private val sharedPref: SharedPreferences

    init {
        sharedPref = context.getSharedPreferences(prefName, Context.MODE_PRIVATE)
    }

    private fun setString(key: String, value: String?) {
        val editor = sharedPref.edit()
        editor.putString(key, value)
        editor.apply()
    }

    private fun getString(key: String): String? = sharedPref.getString(key, "")

    fun setName(name: String){
        setString(userName, name)
    }

    fun setColor(color: String){
        setString(chatColor, color)
    }

    fun getColor(): String? {
        return getString(chatColor)
    }

    fun getName(): String {
        return getString(userName).toString()
    }

    fun clear() {
        sharedPref.edit().clear().apply()
    }

    companion object {
        private const val prefName = "SimpleRealtimeChat"
        private const val userName = "userName"
        private const val chatColor = "chatColor"
    }
}