#include <ThingSpeak.h>
#include <ESP8266WiFi.h>
#include <DHT.h>
#include <LiquidCrystal.h>

// Network parameters
const char *ssid = "SSSSSSS";
const char *password = "PPPPPPPPPP";

// ThingSpeak information
char thingSpeakAddress[] = "api.thingspeak.com";
unsigned long channelID = NNNNNN;
char *readAPIKey = "XXXXXXXXXXXXXXXX";
char *writeAPIKey = "YYYYYYYYYYYYYYYY";

const unsigned long postingInterval = 120L * 1000L;

unsigned int dataFieldOne = 1;	 // Field to write temperature celsius data
unsigned int dataFieldTwo = 2;	 // Field to write temperature farenheit data
unsigned int dataFieldThree = 3; // Field to write humidity 
unsigned int dataFieldFour = 4;	 // Fielt to millis time
unsigned int dataFieldLed = 5; // field to air-condicioner state

unsigned long lastConnectionTime = 0;
long lastUpdateTime = 0;
WiFiClient client;

// LCd configuration
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

// DHT configuration

#define DHTPIN 2 // Digital pin connected to the DHT sensor
#define DHTTYPE DHT11
DHT_Unified dht(DHTPIN, DHTTYPE);

uint32_t delayMS;

void setup()
{
	Serial.begin(9600);
	Serial.println("Start");
	lcd.begin(16, 2);
	connectWiFi();

	sensor_t sensor;
	dht.temperature().getSensor(&sensor);
	dht.humidity().getSensor(&sensor);

	delayMS = sensor.min_delay / 1000;
}

void loop()
{

	onled();

	lcd.setCursor(0, 1);
	float fahrenheitTemperature, celsiusTemperature, humidity;

	// Update only if the posting time is exceeded
	if (millis() - lastUpdateTime >= postingInterval)
	{

		delay(delayMS);
		// Get the events values
		sensors_event_t event;
		celsiusTemperature = dht.temperature().getEvent(&event);
		humidity = dht.humidity().getEvent(&event);

		// Get temperature event and print its value.
		if (isnan(event.temperature))
		{
			Serial.println(F("Error reading temperature!"));
			delay(200);
			lcd.print('Temp error');
		}
		else
		{
			Serial.print(F("Temperature: ");
			Serial.print(event.temperature);
			Serial.println(F("°C"));
			delay(200);
			lcd.print(event.temperature);
			lcd.print(F("°C"));
		}

		// Get humidity event and print its value.
		if (isnan(event.relative_humidity))
		{
			Serial.println(F("Error reading humidity!"));
			delay(200);
			lcd.print('Humidity error');
		}
		else
		{
			Serial.print(F("Humidity: "));
			Serial.print(event.relative_humidity);
			Serial.println(F("%"));
			delay(200);
			lcd.print(event.relative_humidity);
			lcd.print(F("F"));
		}

		lastUpdateTime = millis();

		fahrenheitTemperature = celsiusTemperature * 9 / 5 + 32;

		write2TSData(channelID, dataFieldOne, celsiusTemperature, dataFieldTwo, fahrenheitTemperature, dataFieldThree, humidity, dataFieldFour, millis()); // Write the temperature in F, C, and time since starting.
	}
}

// set the led state
float onled()
{

	pinMode(dataFieldLed, OUTPUT);
	digitalWrite(dataFieldLed, 0);

	float resp = readTSData(channelID, dataFieldLed);

	if (resp == 1)
	{
		digitalWrite(dataFieldLed, 1);
		writeTSData(channelID, dataFieldLed, 0);
		Serial.println('Led on'));
	}
	else if (resp == 0)
	{
		digitalWrite(dataFieldLed, 0);
		writeTSData(channelID, dataFieldLed, 1);
		Serial.println('led off');
	}
}

// Connect to wifi status
int connectWiFi()
{

	while (WiFi.status() != WL_CONNECTED)
	{
		WiFi.begin(ssid, password);
		delay(2500);
		lcd.print("Start connection");
	}

	Serial.println("Connected");
	lcd.print("Connected");
	ThingSpeak.begin(client);
}

float readTSData(long TSChannel, unsigned int TSField)
{

	float data = ThingSpeak.readFloatField(TSChannel, TSField, readAPIKey);
	Serial.println(" Data read from ThingSpeak: " + String(data, 9));
	return data;
}

// Use this function if you want to write a single field.
int writeTSData(long TSChannel, unsigned int TSField, float data)
{
	int writeSuccess = ThingSpeak.writeField(TSChannel, TSField, data, writeAPIKey); // Write the data to the channel
	if (writeSuccess)
	{

		Serial.println(String(data) + " written to Thingspeak.");
		lcd.print("written to TS db.")
	}

	return writeSuccess;
}

// Use this function if you want to write multiple fields simultaneously.
int write2TSData(long TSChannel, unsigned int TSField1, float field1Data, unsigned int TSField2, long field2Data, unsigned int TSField3, float field3Data, unsigned int TSField4, long field4Data)
{

	ThingSpeak.setField(TSField1, field1Data);
	ThingSpeak.setField(TSField2, field2Data);
	ThingSpeak.setField(TSField3, field3Data);
	ThingSpeak.setField(TSField4, field4Data);

	int writeSuccess = ThingSpeak.writeFields(TSChannel, writeAPIKey);

	if (writeSuccess)
	{

		Serial.println(String(data) + " written to Thingspeak.");
		lcd.print("written to TS db.")
	}

	return writeSuccess;
}
