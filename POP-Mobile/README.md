
# Chainlink POP Mobile App

## Project Description
The Chainlink POP mobile application is part of a broader project focused on verifying the authenticity of multimedia content using blockchain technology and Chainlink services. The main goal is to create a proof-of-participation (POP) system that allows users to verify the authenticity of images and videos, securely storing them on the blockchain.

## Application Architecture
The application follows an architecture organized into various directories:

Model: Contains data models used in the application.

Data: Houses classes that access external resources, such as the Blockchain Data Source, IPFS Data Source and Location Data Source.

Repository: Contains interfaces and implementations of methods to interact with the blockchain, IPFS and the location api.

Presentation: Here, you'll find ViewModels responsible for presentation logic.

UI: Includes Activities, Fragments, and Adapters that make up the user interface.

Utils: Contains utilities, such as constants.

## Setup
To run the application, follow these steps:

Clone the repository: git clone [REPOSITORY_URL]
Open the project in Android Studio.
Configure the necessary dependencies as specified in the build.gradle file.

# Key Features
Connect to MetaMask: Allows users to log in and connect their MetaMask wallet.

View POPs: Displays the list of existing POPs, verifying their authenticity on the blockchain.

Capture Images and Videos: Enables users to take photos or record videos, signing and storing the information on the chain.

Access Geolocation: Uses geolocation to associate location information with captured images and videos.


This README provides an overview of the project and serves as a guide for developers contributing to the development and maintenance of the Chainlink POP mobile application.

![image](https://github.com/Breakpoint-341/POP/assets/42863568/fb9ebeab-29b0-4c67-b3b2-733651ed8f36)



