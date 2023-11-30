package com.example.pop3.ui

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import com.example.pop3.R
import com.example.pop3.databinding.FragmentScanQRBinding
import com.google.zxing.integration.android.IntentIntegrator


class ScanQRFragment : Fragment(R.layout.fragment_scan_q_r) {

    private lateinit var binding: FragmentScanQRBinding

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentScanQRBinding.bind(view)

        initScanner()
    }

    private fun initScanner() {
        IntentIntegrator.forSupportFragment(this)
            .setDesiredBarcodeFormats(IntentIntegrator.QR_CODE)
            .setPrompt("Scan QR code")
            .setCameraId(0)
            .setBeepEnabled(false)
            .setBarcodeImageEnabled(false)
            .initiateScan()
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {

        val result = IntentIntegrator.parseActivityResult(requestCode, resultCode, data)

        if(result != null) {
            if(result.contents == null) {
                Toast.makeText(requireContext(), "Cancelled", Toast.LENGTH_LONG).show()
            }else {
                Toast.makeText(requireContext(), "Scanned: ${result.contents}", Toast.LENGTH_LONG).show()
            }
        }else {
            super.onActivityResult(requestCode, resultCode, data)
        }
    }
}