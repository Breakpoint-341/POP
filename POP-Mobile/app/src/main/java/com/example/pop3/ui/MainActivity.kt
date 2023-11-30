package com.example.pop3.ui

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.fragment.NavHostFragment
import androidx.navigation.ui.setupWithNavController
import com.example.pop3.R
import com.example.pop3.databinding.ActivityMainBinding
import org.web3j.protocol.Web3j
import org.web3j.protocol.http.HttpService

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val navHostFragment = supportFragmentManager.findFragmentById(R.id.nav_host_fragment) as NavHostFragment
        val navController = navHostFragment.navController
        binding.bottomNavigation.setupWithNavController(navController)

        binding.fab.setOnClickListener {
            Toast.makeText(this, "Connecting to Metamask...", Toast.LENGTH_LONG).show()
            val web3j = Web3j.build(HttpService("https://rinkeby.infura.io/v3/your-infura-api-key"))
        }
    }
}