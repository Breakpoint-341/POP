package com.example.pop3.ui

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.View
import android.widget.Toast
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.example.pop3.R
import com.example.pop3.databinding.FragmentMapBinding
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.GoogleMap.OnMyLocationButtonClickListener
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment


class MapFragment : Fragment(R.layout.fragment_map), OnMapReadyCallback, OnMyLocationButtonClickListener {

    private lateinit var binding: FragmentMapBinding
    private lateinit var map: GoogleMap

    companion object {
        private const val REQUEST_LOCATION_PERMISSION = 1
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentMapBinding.bind(view)
        createMapFragment()
    }

    /**
     * Initialize the map fragment.
     */
    private fun createMapFragment() {
        val mapFragment = childFragmentManager
            .findFragmentById(R.id.fragmentMap) as SupportMapFragment
        mapFragment.getMapAsync(this)
    }

    /**
     * Callback method triggered when the map is ready.
     */
    override fun onMapReady(googleMap: GoogleMap) {
        map = googleMap
        enableLocation()
    }

    /**
     * Check if location permissions are granted.
     */
    private fun isPermissionsGranted(): Boolean {
        return ContextCompat.checkSelfPermission(
            requireContext(),
            android.Manifest.permission.ACCESS_FINE_LOCATION
        ) == android.content.pm.PackageManager.PERMISSION_GRANTED
    }

    /**
     * Enable location on the map.
     */
    private fun enableLocation(){
        if(!::map.isInitialized) return
        if (isPermissionsGranted()){
            map.isMyLocationEnabled = true
            map.setOnMyLocationButtonClickListener(this)
        }else {
            requestLocationPermissions()
        }
    }

    /**
     * Request location permissions.
     */
    private fun requestLocationPermissions() {
        ActivityCompat.requestPermissions(
            requireActivity(),
            arrayOf(android.Manifest.permission.ACCESS_FINE_LOCATION),
            REQUEST_LOCATION_PERMISSION
        )
    }

    /**
     * Handle the result of location permission request.
     */
    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        when(requestCode){
        REQUEST_LOCATION_PERMISSION -> if(grantResults.isNotEmpty() && grantResults[0] == android.content.pm.PackageManager.PERMISSION_GRANTED){
            enableLocation()
        } else {
            Toast.makeText(requireContext(), "Go to settings and accept Localation Permission", Toast.LENGTH_LONG).show()
        }
        else -> {
            // Ignore all other requests.
        }
        }
    }

    /**
     * Callback method triggered when the My Location button is clicked.
     */
    override fun onMyLocationButtonClick(): Boolean {
            return false
    }
}