package com.fi.simplerealtimechat.models

/**
 ****************************************
created by -fi-
.::manca.fi@gmail.com ::.

13/02/2020, 03:39 PM
 ****************************************
 */

data class Chat(
    val from: String? = "",
    val message: String? = "",
    val time: String? = "",
    val color: Int
)