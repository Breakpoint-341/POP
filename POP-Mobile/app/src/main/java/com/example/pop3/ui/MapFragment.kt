package com.example.pop3.ui

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.View
import com.example.pop3.R
import com.example.pop3.databinding.FragmentMapBinding


class MapFragment : Fragment(R.layout.fragment_map) {

    private lateinit var binding: FragmentMapBinding

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentMapBinding.bind(view)
    }
}