package com.example.pop3.ui

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import com.example.pop3.R
import com.example.pop3.databinding.FragmentCameraBinding
import com.google.zxing.integration.android.IntentIntegrator


class CameraFragment : Fragment(R.layout.fragment_camera) {

    private lateinit var binding: FragmentCameraBinding


    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentCameraBinding.bind(view)

    }



}