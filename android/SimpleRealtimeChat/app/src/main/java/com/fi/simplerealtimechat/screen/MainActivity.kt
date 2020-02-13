package com.fi.simplerealtimechat.screen

import android.view.Menu
import android.view.MenuItem
import android.view.View
import androidx.core.content.ContextCompat
import com.fi.simplerealtimechat.R
import com.fi.simplerealtimechat.base.BaseActivity
import com.fi.simplerealtimechat.models.Chat
import com.fi.simplerealtimechat.utils.PrefManager
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.toolbar_activity_main.*

class MainActivity : BaseActivity() {
    private var menu: Menu? = null
    private lateinit var menuItem: MenuItem
    private lateinit var prefManager: PrefManager

    private val chatAdapter = ChatAdapter(this)

    override fun getLayoutResource(): Int = R.layout.activity_main

    override fun getToolbarResource(): Int = R.id.toolbar_mainActivity

    override fun getToolbarTitle(): String = ""

    override fun mainCode() {
        prefManager = PrefManager(this)

        setToolbar()

        setHomeButton(false)

        ll_userName.visibility = View.GONE

        rv_chat.adapter = chatAdapter

        val chats = mutableListOf(
            Chat("Manca", "Haii...", "June 12, 12:00", ContextCompat.getColor(this, R.color.color_0)),
            Chat("Anonymouse", "hello...", "June 12, 12:00", ContextCompat.getColor(this, R.color.color_3)),
            Chat("Anna", "Whoaa", "June 12, 12:00", ContextCompat.getColor(this, R.color.color_9)),
            Chat("Manca", "Where are you guys", "June 12, 12:00", ContextCompat.getColor(this, R.color.color_5)),
            Chat("Anna", ":)", "June 12, 12:00", ContextCompat.getColor(this, R.color.color_6))
        )

        chatAdapter.data = chats
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

        prefManager.setName(userName)

        et_userName.setText(getUserName())

        toolbar?.title = getUserName()

        menuItem.isVisible = false
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

        toolbar?.title = getUserName()

        toolbar?.setOnClickListener {
            setToolbarState()
        }

        toolbar?.subtitle = getString(R.string.main_subtitle)
    }

    private fun getUserName(): String {
        return if (prefManager.getName().isBlank()) {
            getString(R.string.main_anonymous)
        } else {
            prefManager.getName()
        }
    }

}
