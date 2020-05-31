#include <ThingSpeak.h>
#include <ESP8266WiFi.h>
#include <DHT_U.h>
#include <LiquidCrystal.h>

// Network parameters
const char* ssid     = "SSSSSSS";
const char* password = "PPPPPPPPPP";

// ThingSpeak information
char thingSpeakAddress[] = "api.thingspeak.com";
unsigned long channelID = NNNNNN;
char* readAPIKey = "XXXXXXXXXXXXXXXX";
char* writeAPIKey = "YYYYYYYYYYYYYYYY";
const unsigned long postingInterval = 120L * 1000L;
unsigned int dataFieldOne = 1;                            // Field to write temperature data
unsigned int dataFieldTwo = 2;                       // Field to write humidity data
unsigned int dataFieldThree = 3;                     // Field to write elapsed time data

unsigned long lastConnectionTime = 0;
long lastUpdateTime = 0; 
WiFiClient client;

const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup() {
 Serial.begin(9600);
 Serial.println("Start");
 lcd.begin(16, 2);
 connectWiFi();
}

void loop() {
  lcd.setCursor(0, 1);
}

int connectWiFi(){
    
    while (WiFi.status() != WL_CONNECTED) {
      
        WiFi.begin( ssid, password );
        delay(2500);
        lcd.print("Connecting to WiFi");
    }
    
    Serial.println( "Connected" );
    lcd.print("Connected");
    ThingSpeak.begin( client );
}
