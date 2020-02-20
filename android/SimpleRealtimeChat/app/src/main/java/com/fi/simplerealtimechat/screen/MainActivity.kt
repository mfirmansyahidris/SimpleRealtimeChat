package com.fi.simplerealtimechat.screen

import android.annotation.SuppressLint
import android.os.CountDownTimer
import android.view.Menu
import android.view.MenuItem
import android.view.View
import com.fi.simplerealtimechat.R
import com.fi.simplerealtimechat.base.BaseActivity
import com.fi.simplerealtimechat.models.Chat
import com.fi.simplerealtimechat.utils.PrefManager
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.ValueEventListener
import com.orhanobut.logger.Logger
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.toolbar_activity_main.*
import java.text.SimpleDateFormat
import java.util.*

class MainActivity : BaseActivity() {
    private var menu: Menu? = null
    private lateinit var menuItem: MenuItem
    private lateinit var prefManager: PrefManager
    private val root = FirebaseDatabase.getInstance().reference

    private val chatAdapter = ChatAdapter()

    override fun getLayoutResource(): Int = R.layout.activity_main

    override fun getToolbarResource(): Int = R.id.toolbar_mainActivity

    override fun getToolbarTitle(): String = ""

    override fun mainCode() {
        prefManager = PrefManager(this)

        initUserData()

        setToolbar()

        setHomeButton(false)

        ll_userName.visibility = View.GONE

        rv_chat.adapter = chatAdapter

        fab_send.setOnClickListener {
            sendButtonAction(et_chat.text.toString())
        }

        root.addValueEventListener(object : ValueEventListener {
            override fun onCancelled(p0: DatabaseError) {}

            override fun onDataChange(p0: DataSnapshot) {
                onDataChatChange(p0)
            }
        })

    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu_main_activity, menu)
        this.menu = menu

        this.menu?.let {
            menuItem = it.findItem(R.id.menu_check)
            menuItem.setVisible(false)
        }

        return true
    }

    override fun onOptionsItemSelected(item: MenuItem?): Boolean {
        return when (item?.itemId) {
            android.R.id.home -> {
                clearToolbarState("")
                true
            }
            R.id.menu_check -> {
                clearToolbarState(et_userName.text.toString())
                true
            }

            else -> super.onOptionsItemSelected(item)
        }
    }

    private fun setToolbarState() {
        setHomeButton(true)
        ll_userName.visibility = View.VISIBLE

        if (prefManager.getName().isBlank()) {
            et_userName.setText(getString(R.string.main_anonymous))
        } else {
            et_userName.setText(prefManager.getName())
        }

        et_userName.requestFocus()
        et_userName.setSelection(et_userName.text.toString().length)

        menuItem.isVisible = true
    }

    private fun clearToolbarState(userName: String) {
        setHomeButton(false)
        ll_userName.visibility = View.GONE

        if(userName.isNotBlank()){
            prefManager.setName(userName)
            prefManager.setColor(getColor())
        }

        et_userName.setText(prefManager.getName())

        toolbar?.title = prefManager.getName()

        menuItem.isVisible = false

        setSubtitle()
    }

    private fun setHomeButton(state: Boolean) {
        supportActionBar?.setDefaultDisplayHomeAsUpEnabled(state)
        supportActionBar?.setDisplayHomeAsUpEnabled(state)
    }

    private fun setToolbar() {
        toolbar = findViewById(getToolbarResource())
        toolbar?.setNavigationIcon(R.drawable.ic_close)
        toolbar?.title = getToolbarTitle()
        setSupportActionBar(toolbar)

        toolbar?.title = prefManager.getName()

        toolbar?.setOnClickListener {
            setToolbarState()
        }

        setSubtitle()
    }

    private fun initUserData() {
        Logger.d(prefManager.getName())

        if (prefManager.getName().isBlank()) {
            prefManager.setName(getString(R.string.main_anonymous))
        }

        if (prefManager.getColor().isNullOrBlank()) {
            prefManager.setColor(getColor())
        }
    }

    private fun sendButtonAction(message: String) {
        if(message.isNotBlank()){
            val chatId = System.currentTimeMillis().toString()
            val chat = Chat(
                from = prefManager.getName(),
                message = message,
                time = getTime(),
                color = prefManager.getColor()
            )

            et_chat.text?.clear()
            root.child("chats").child(chatId).setValue(chat)
        }
    }

    private fun getColor(): String {
        val colors = resources.getStringArray(R.array.colors_palette)
        Logger.d(colors)
        return colors[(colors.indices).random()]
    }

    @SuppressLint("SimpleDateFormat")
    private fun getTime(): String? {
        val sdf = SimpleDateFormat("dd MMM y, hh:mm")
        return sdf.format(Date())
    }

    private fun onDataChatChange(p0: DataSnapshot) {
        val children = p0.child("chats").children.iterator()
        val chats = mutableListOf<Chat>()
        while (children.hasNext()) {
            val chat = (children.next() as DataSnapshot).getValue(Chat::class.java)
            chat?.let {
                chats.add(it)
            }
        }

        chatAdapter.data = chats
        rv_chat.scrollToPosition(chats.size - 1)
    }

    private fun setSubtitle(){
        toolbar?.subtitle = getString(R.string.main_subtitle)
        object : CountDownTimer(3000, 1000) {
            override fun onTick(millisUntilFinished: Long) {}

            override fun onFinish() {
                toolbar?.subtitle = null
            }
        }.start()
    }

}
