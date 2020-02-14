package com.fi.simplerealtimechat.screen

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.fi.simplerealtimechat.R
import com.fi.simplerealtimechat.models.Chat

/**
 ****************************************
created by -fi-
.::manca.fi@gmail.com ::.

13/02/2020, 03:38 PM
 ****************************************
 */

class ChatAdapter : RecyclerView.Adapter<ChatAdapter.ViewHolder>() {
    var data = mutableListOf<Chat>()
        set(value) {
            field = value
            notifyDataSetChanged()
        }

    private var mExpandedPosition = -1
    private var previousExpandedPosition = -1

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        val view = layoutInflater.inflate(R.layout.item_chat, parent, false)
        return ViewHolder(view)
    }

    override fun getItemCount(): Int {
        return data.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.bindItem(data[position])
    }

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private val from: TextView = itemView.findViewById(R.id.tv_from)
        private val message: TextView = itemView.findViewById(R.id.tv_message)
        private val time: TextView = itemView.findViewById(R.id.tv_time)

        fun bindItem(items: Chat) {
            from.text = items.from
            message.text = items.message
            time.text = items.time
            message.setBackgroundColor(items.color!!)
            from.setTextColor(items.color!!)

            val isExpanded = layoutPosition == mExpandedPosition
            time.visibility = if (isExpanded) View.VISIBLE else View.GONE
            itemView.isActivated = isExpanded

            if (isExpanded) {
                previousExpandedPosition = layoutPosition
            }

            message.setOnClickListener {
                mExpandedPosition = if (isExpanded) -1 else layoutPosition
                notifyItemChanged(previousExpandedPosition)
                notifyItemChanged(layoutPosition)
            }
        }
    }
}