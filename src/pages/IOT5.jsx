import React from "react";
import "../components/Blogs2.css";
import BackButton from "../components/BackButton";

function IOT5() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Internet Of Things</h1>
      </div>
      <div className="blog-outside">
        <div className="blog-item">
          <div className="blog-title">
            <h3>Sending data to Google Firebase</h3>
          </div>
          <div className="blog-text">
            <p style={{ textAlign: "left" }}>
              <b>Sending data to Google Firebase</b>
              <br />
              Why should we send the data to the cloud?
              <br />
              The data which are taken from the sensors or other modules will be
              stored in the microcontroller’s memory since our microcontroller’s
              memory is very less and we can store only a small amount of data
              and this data will also last no longer. The user also cannot
              frequently check the microcontroller whether it is storing the
              data or not. So, in order to do this we can store this data in an
              external memory device or store the data in a cloud over the
              internet.
              <br />
              This real time database can be used in times when the
              microcontroller is connected over the internet and can be
              sent/receive data from the cloud and of course it should be
              integrated to a sensor/module or we can send the data without a
              sensor. The database can also be used to perform the analytics of
              the data, performance, functions based upon the values. There are
              many cloud platform’s like thingspeak, ubidots, Cayenne, AWS,
              Azure, IBM clouds, etc.
              <br />
              In this tutorial, we will be using google firebase to store our
              data. We can divide this tutorial in two parts, one is the
              hardware section connections with microcontroller and the second
              one is configuring the google firebase console.
              <br />
              Firstly, we will start the assembling of the hardware components.
              We will send the distances measured in other words how much
              distance we are from the obstacle, this distance we will be
              uploading the data to the firebase for the sake of monitoring. We
              have to choose an internet connectivity module, which we have
              mentioned in the previous articles, to refer click here.
              <br />
              <br />
              <b>Required Components:</b>
              <br />
              1. NodeMCU ESP8266-12E Module.
              <br />
              2. Ultrasonic Sensor(HC SR04).
              <br />
              <br />
              <b>Circuit Diagram:</b>
              <br />
              <img
                src="/assets/Blogs/15-1.jpg"
                alt="Circuit Diagram for Firebase Data Sending"
              />
              <br />
              <br />
              <b>Programming NodeMCU:</b>
              <br />
              Now, we will see the important parts in coding. We should include
              these libraries:
              <br />
              <pre
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "12px",
                  borderRadius: "6px",
                  overflowX: "auto",
                  fontFamily: "Consolas, 'Courier New', monospace",
                  fontSize: "0.9rem",
                  whiteSpace: "pre-wrap",
                }}
              >
                {`
#include "ESP8266WiFi.h"
#include "FirebaseArduino.h"

#define FIREBASE_HOST "Your-Project-Name.firebaseio.com" //the project name address from firebase id.
#define FIREBASE_AUTH "SYWDz1iRvLQZ6xxxxxxxxxxxxxxxP46zVnRu4" //the secret key generated from the firebase.
#define WIFI_SSID "your_wifi_name"
#define WIFI_PASSWORD "your_password"
void setup() {
  pinMode(trigP, OUTPUT);  // Sets the trigPin as an Output
  pinMode(echoP, INPUT);   // Sets the echoPin as an Input
  Serial.begin(9600);
  delay(1000);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is: ");
  Serial.println(WiFi.localIP());                //prints the IP address
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);  //connects to your firebase project
}

void loop() {
  digitalWrite(trigP, LOW);   // Makes trigPin low
  delayMicroseconds(2);       // 2 microsecond delay 
  digitalWrite(trigP, HIGH);  // trigPin high
  delayMicroseconds(10);      // trigPin high for 10 micro seconds
  digitalWrite(trigP, LOW);   // trigPin low

  duration = pulseIn(echoP, HIGH);   //Read echo pin, time in microseconds
  distance = duration * 0.034 / 2;        //Calculating actual/real distance
  Serial.print("Distance: ");
  Serial.print(distance);

  String firebaseDistance = String(distance) + String("cm");
  delay(5000);

  Firebase.pushString("Distance", firebaseDistance);  //setting up the path to send the data
}
`}
              </pre>
              <br />
              <b>Setting up your Firebase account:</b>
              <br />
              If you are a new user to this firebase console, you should follow
              these steps correctly.
              <br />
              1. Login with your gmail account and click on the console for
              creating the project.
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://firebase.google.com/
              </a>
              <br />
              <img src="/assets/Blogs/15-2.jpg" alt="Firebase Console" width="100%" />
              <br />
              <br />
              2. After that, click on “create a project”
              <br />
              <img
                src="/assets/Blogs/15-3.jpg"
                alt="Create Firebase Project"
                width="100%"
              />
              <br />
              <br />
              3. Enter your project name in step 1 and click on “continue”
              <br />
              <img
                src="/assets/Blogs/15-4.jpg"
                alt="Enter Firebase Project Name"
                width="100%"
              />
              <br />
              <br />
              4. In step-2 enable the google analytics if it is not enabled and
              click continue
              <br />
              <img
                src="/assets/Blogs/15-5.jpg"
                alt="Enable Google Analytics"
                width="100%"
              />
              <br />
              <br />
              5. In step 3, choose the “default account for firebase” and click
              on create project.
              <br />
              <img
                src="/assets/Blogs/15-6.jpg"
                alt="Create Project in Firebase"
                width="100%"
              />
              <br />
              A new project is created in your firebase account.
              <br />
              <br />
              6. Now go to the settings icon, and click on “project settings”.
              <br />
              <img
                src="/assets/Blogs/15-7.jpg"
                alt="Firebase Project Settings"
                width="100%"
              />
              <br />
              <br />
              7. Now goto the service accounts.
              <br />
              <img
                src="/assets/Blogs/15-8.jpg"
                alt="Service Accounts in Firebase"
                width="100%"
              />
              <br />
              <br />
              8. Now click on database secrets and click on “show”.
              <br />
              <img
                src="/assets/Blogs/15-9.jpg"
                alt="Database Secrets in Firebase"
                width="100%"
              />
              <br />
              <br />
              9. After clicking on show, you are able to copy the code. This is
              the “Firebase AUTH” which is mentioned in the above program. Copy
              this code and place it in our arduino program.
              <br />
              <img
                src="/assets/Blogs/15-10.jpg"
                alt="Firebase Auth Code"
                width="100%"
              />
              <br />
              <br />
              10. Now click on the real time database which is present on our
              left control bar and create a database.
              <br />
              <img
                src="/assets/Blogs/15-11.jpg"
                alt="Create Realtime Database"
                width="100%"
              />
              <br />
              <br />
              11. Choose start in test mode and click on enable.
              <br />
              <img
                src="/assets/Blogs/15-12.jpg"
                alt="Enable Test Mode in Realtime Database"
                width="100%"
              />
              <br />
              <br />
              12. Now you can see your database, in our arduino program we have
              mentioned firebase auth and firebase host.
              <br />
              <img src="/assets/Blogs/15-13.jpg" alt="Firebase Host" width="100%" />
              <br />
              So in my project the firebase host is
              “project-demo-3ca28.firebaseio.com”. You have to remove the
              “https://” and “/” at the end remaining is your firebase host.
              <br />
              <br />
              13. So the database is created, we have to create a path for the
              data which is receiving by the database. As you can see in the
              above figure click on the “+”
              <br />
              <img
                src="/assets/Blogs/15-14.jpg"
                alt="Add Database Path"
                width="100%"
              />
              <br />
              <br />
              14. Enter the name as “Distance”. The name in the database should
              be the same as mentioned in our arduino program. Keep the value as
              “00.0” and click “add”.
              <br />
              <img
                src="/assets/Blogs/15-15.jpg"
                alt="Add Distance Path"
                width="100%"
              />
              <br />
              <br />
              Now our project is ready, all you have to do is dump the code in
              NodeMCU.
              <br />
              <br />
              <b>Note:</b> After dumping the code if it is not working. Push the
              RST button on NodeMCU.
            </p>
          </div>
        </div>

        <BackButton />
      </div>
    </>
  );
}

export default IOT5;
