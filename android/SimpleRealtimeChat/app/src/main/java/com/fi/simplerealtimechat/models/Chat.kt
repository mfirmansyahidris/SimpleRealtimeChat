package com.fi.simplerealtimechat.models

import com.google.firebase.database.Exclude
import com.google.firebase.database.IgnoreExtraProperties

/**
 ****************************************
created by -fi-
.::manca.fi@gmail.com ::.

13/02/2020, 03:39 PM
 ****************************************
 */

@IgnoreExtraProperties
data class Chat(
    var from: String? = "",
    var message: String? = "",
    var time: String? = "",
    var color: String? = ""
){
    @Exclude
    fun toMap(): Map<String, Any?>{
        return mapOf(
            "from" to from,
            "message" to message,
            "time" to time,
            "color" to color
        )
    }
}