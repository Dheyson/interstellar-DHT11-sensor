#include <ThingSpeak.h>
#include <ESP8266WiFi.h>
#include <DHT.h>
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

// LCd configuration
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

// DHT configuration

#define DHTPIN 2     // Digital pin connected to the DHT sensor
#define DHTTYPE    DHT11
DHT_Unified dht(DHTPIN, DHTTYPE);

uint32_t delayMS;


void setup() {
 Serial.begin(9600);
 Serial.println("Start");
 lcd.begin(16, 2);
 connectWiFi();
 delayMS = sensor.min_delay / 1000;
}

void loop() {
  lcd.setCursor(0, 1);

  // Update only if the posting time is exceeded
    if (millis() - lastUpdateTime >=  postingInterval) {

    delay(delayMS);
    sensors_event_t event;
    dht.temperature().getEvent(&event);

    if (isnan(event.temperature)) {
    Serial.println(F("Error reading temperature!"));
  } else {
    Serial.print(F("Temperature: "));
    Serial.print(event.temperature);
    Serial.println(F("°C"));
  }
        float fahrenheitTemperature, celsiusTemperature;

        lastUpdateTime = millis();

        // celsiusTemperature = 1 / ( aConst + bConst * logR + cConst * pow(logR,3) ) - 273.15;    Calculate the temperature in Celsius
        // fahrenheitTemperature = celsiusTemperature * 9 / 5 + 32;

        Serial.println("ADC =  " + String( readValue )+ " Temp = "+String( fahrenheitTemperature ));

        write2TSData( channelID , dataFieldOne , celsiusTemperature ,dataFieldTwo , fahrenheitTemperature,  dataFieldThree , millis() );      // Write the temperature in F, C, and time since starting.
    }
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

float readTSData( long TSChannel,unsigned int TSField ){

  float data =  ThingSpeak.readFloatField( TSChannel, TSField, readAPIKey );
  Serial.println( " Data read from ThingSpeak: " + String( data, 9 ) );
  return data;

}

// Use this function if you want to write a single field.
int writeTSData( long TSChannel, unsigned int TSField, float data ){
  int  writeSuccess = ThingSpeak.writeField( TSChannel, TSField, data, writeAPIKey ); // Write the data to the channel
  if ( writeSuccess ){

    Serial.println( String(data) + " written to Thingspeak." );
    }

    return writeSuccess;
}

// Use this function if you want to write multiple fields simultaneously.
int write2TSData( long TSChannel, unsigned int TSField1, float field1Data, unsigned int TSField2, long field2Data, unsigned int TSField3, long field3Data ){

  ThingSpeak.setField( TSField1, field1Data );
  ThingSpeak.setField( TSField2, field2Data );
  ThingSpeak.setField( TSField3, field3Data );

  int writeSuccess = ThingSpeak.writeFields( TSChannel, writeAPIKey );
  return writeSuccess;
}
